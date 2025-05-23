  import { useParams } from 'react-router-dom';
  import { useEffect, useRef, useState } from 'react';
  import io from 'socket.io-client';
  import Picker from 'emoji-picker-react';
  import { Send, Paperclip, Smile, X, Image, FileText, Check, CheckCheck } from 'lucide-react';
  import notificationSound from '../../../public/notification.mp3'; // if you import directly
  import OnlineStatusUpdater from './OnlineUsers/OnlineStatusUpdater';

  const audio = new Audio(notificationSound); // or use: new Audio('/notification.mp3') if in public



  const socket = io('https://kiqko-backend.onrender.com');

  const ChatComponent = () => {
    const { userId } = useParams();
    const currentUserId = localStorage.getItem('userId');

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [typingStatus, setTypingStatus] = useState(false);
    const [lastSeen, setLastSeen] = useState(null);
    const [attachment, setAttachment] = useState(null);
  const [user, setUser] = useState(null);
    const [profileDetails, setProfileDetails] = useState(null);
    const chatRef = useRef();
    const audio = new Audio(notificationSound);

    useEffect(() => {
      if (!currentUserId) return;

      socket.emit('register', currentUserId);

      const handleReceiveMessage = (data) => {
    setMessages((prev) => {
      const index = prev.findIndex(
        (msg) =>
          msg.sender === data.sender &&
          msg.receiver === data.receiver &&
          msg.timestamp === data.timestamp
      );

      if (index !== -1) {
        const updated = [...prev];
        updated[index] = { ...data, status: 'delivered' };
        return updated;
      }

      if (data.receiver === currentUserId) {
        socket.emit('message_delivered', data._id);
        data.status = 'delivered';

        // 🔊 Play sound only if it's a new incoming message
        audio.play().catch((err) => console.error("Audio play error:", err));
      }

      return [...prev, data];
    });
  };


      const handleDeliveredConfirm = (msgId) => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg._id === msgId ? { ...msg, status: 'delivered' } : msg
          )
        );
      };

      // Handle typing status from other user
      const handleTypingStatus = (typingUserId) => {
        setTypingStatus(typingUserId === userId);
      };

      // Handle last seen update
      const handleLastSeen = (userLastSeen) => {
        setLastSeen(userLastSeen);
      };

      socket.on('receive_message', handleReceiveMessage);
      socket.on('message_delivered_confirm', handleDeliveredConfirm);
      socket.on('typing', handleTypingStatus);
      socket.on('user_last_seen', handleLastSeen);

      return () => {
        socket.off('receive_message', handleReceiveMessage);
        socket.off('message_delivered_confirm', handleDeliveredConfirm);
        socket.off('typing', handleTypingStatus);
        socket.off('user_last_seen', handleLastSeen);
      };
    }, [currentUserId, userId]);

    useEffect(() => {
      const fetchMessages = async () => {
        try {
          setMessages([]); // Clear previous chat messages

          const res = await fetch(`https://kiqko-backend.onrender.com/api/messages/${currentUserId}/${userId}`);
          const data = await res.json();
          const msgsWithStatus = data.map((msg) => ({
            ...msg,
            status: 'delivered',
          }));
          setMessages(msgsWithStatus);
        } catch (err) {
          console.error(err);
        }
      };

      if (userId && currentUserId) fetchMessages();
    }, [currentUserId, userId]);


  useEffect(() => {
    
      if (!userId) return;

      const fetchProfileDetails = async () => {
      

        try {
          const detailsRes = await fetch(
            `https://kiqko-backend.onrender.com/api/users/profilee/${userId}`
          );
          const detailsData = await detailsRes.json();
          console.log(detailsData);

          if (detailsRes.ok) {
            setProfileDetails(detailsData); // this will be the user's profile
            // setDe(detailsData);
          } else {
            console.error("Error fetching profile:", detailsData.message);
          }
        } catch (err) {
          console.error("Error:", err);
        }
      };

      const fetchData = async () => {
        try {
          // Fetch basic user data
          const userRes = await fetch(
            `https://kiqko-backend.onrender.com/api/users/profile/${userId}`
          );
          const userData = await userRes.json();
          console.log(userData);

          if (userRes.ok) {
            setUser(userData);

            //  // Fetch additional profile details
            //  const detailsRes = await fetch(`https://kiqko-backend.onrender.com/api/users/${userId}`);
            //  const detailsData = await detailsRes.json();

            //  if (detailsRes.ok) {
            //    setProfileDetails(detailsData);
            //  }
          } else {
            console.error(userData.message);
          }
        } catch (err) {
          console.error("Error fetching data:", err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
      fetchProfileDetails();
    }, []);
    

    useEffect(() => {
      chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
    }, [messages]);

    // Notify typing on input change with debounce
    useEffect(() => {
      if (!currentUserId || !userId) return;

      if (input) {
        socket.emit('typing', { from: currentUserId, to: userId });
      } else {
        socket.emit('typing', { from: currentUserId, to: userId, typing: false });
      }
    }, [input, currentUserId, userId]);



    const dataURLtoFile = (dataurl, filename) => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  };


    const handleSend = async () => {
    if (!input.trim() && !attachment) return;

    const timestamp = new Date().toISOString();

    let attachmentUrl = null;

    if (attachment) {
      try {
        const formData = new FormData();
        formData.append('file', dataURLtoFile(attachment.data, attachment.name));

        const res = await fetch('https://kiqko-backend.onrender.com/api/messages/upload', {
          method: 'POST',
          body: formData,
        });

        const result = await res.json();
        attachmentUrl = result.url;
      } catch (err) {
        console.error('Upload failed:', err);
      }
    }

    const messageData = {
      text: input,
      sender: currentUserId,
      receiver: userId,
      timestamp,
      status: 'sent',
      attachment: attachmentUrl || null,
    };

    setMessages((prev) => [
      ...prev,
      { ...messageData, _id: `temp-${timestamp}` },
    ]);

    socket.emit('send_message', messageData);
    setInput('');
    setAttachment(null);
    setShowEmojiPicker(false);
  };

    const onEmojiClick = (emojiData) => {
      setInput((prev) => prev + emojiData.emoji);
    };

    const renderTicks = (msg) => {
      if (msg.sender !== currentUserId) return null;
      if (msg.status === 'delivered') {
        return <span title="Delivered" style={{ color: 'blue', marginLeft: 6 }}>✔✔</span>;
      }
      if (msg.status === 'sent') {
        return <span title="Sent" style={{ color: 'gray', marginLeft: 6 }}>✔</span>;
      }
      return null;
    };

    // Handle file input change
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        setAttachment({
          name: file.name,
          type: file.type,
          data: reader.result,
        });
      };
      reader.readAsDataURL(file);
    };

    // Format last seen
    const formatLastSeen = (date) => {
      if (!date) return 'Offline';
      const d = new Date(date);
      return `Last seen: ${d.toLocaleString()}`;
    };


    return (
      <div className="flex flex-col h-screen max-w-2xl mx-auto bg-white shadow-2xl border border-[#eee] rounded-3xl overflow-hidden">

    {/* HEADER */}
    <div className="flex items-center gap-4 p-4 border-b bg-gradient-to-r from-[#9B72FE] to-[#b89bff] text-white sticky top-0 z-10 shadow-md">
      <div className="relative">
        <img
          src={profileDetails?.profilephoto}
          alt="profile"
          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
        />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{user?.username}</h2>
        <p className="text-sm font-medium">
          {typingStatus ? (
            <span className="flex items-center gap-1 text-white">
              <span className="flex gap-1">
                <span className="w-1 h-1 bg-white rounded-full animate-bounce"></span>
                <span className="w-1 h-1 bg-white rounded-full animate-bounce delay-75"></span>
                <span className="w-1 h-1 bg-white rounded-full animate-bounce delay-150"></span>
              </span>
              Typing...
            </span>
          ) : formatLastSeen(lastSeen)}
        </p>
      </div>
      <button className="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition">
        <div className="w-1 h-1 bg-white rounded-full mb-1"></div>
        <div className="w-1 h-1 bg-white rounded-full mb-1"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
      </button>
    </div>

    {/* MESSAGES */}
    <div
      ref={chatRef}
      className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gradient-to-b from-[#f7f4ff] to-white"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d5c7ff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      {messages
        .filter(
          (msg) =>
            (msg.sender === currentUserId && msg.receiver === userId) ||
            (msg.sender === userId && msg.receiver === currentUserId)
        )
        .map((msg, index) => (
          <div
            key={msg._id}
            className={`flex ${
              msg.sender === currentUserId ? "justify-end" : "justify-start"
            } animate-in slide-in-from-bottom-2 duration-300`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div
              className={`relative max-w-xs md:max-w-sm px-4 py-3 rounded-3xl shadow-sm transition hover:shadow-lg ${
                msg.sender === currentUserId
                  ? "bg-gradient-to-br from-[#9B72FE] to-[#b89bff] text-white rounded-br-md"
                  : "bg-white text-gray-800 border border-gray-200 rounded-bl-md"
              }`}
            >
              {msg.text && <p className="leading-relaxed">{msg.text}</p>}
    {/* Attachment */}
                  {msg.attachment && (
                    <div className="mt-3">
                      {typeof msg.attachment === 'string' &&
                      msg.attachment.match(/\.(jpeg|jpg|gif|png|webp)$/i) ? (
                        <img
                          src={msg.attachment}
                          alt="Attachment"
                          className="rounded-xl max-w-full hover:scale-105 transition-transform"
                        />
                      ) : (
                        <a
                          href={msg.attachment}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 p-2 bg-gray-100 rounded-xl hover:bg-gray-200"
                        >
                          <FileText size={16} />
                          <span className="text-sm truncate">Download Attachment</span>
                        </a>
                      )}
                    </div>
                  )}


              <div
                className={`flex items-center gap-1 mt-2 text-xs ${
                  msg.sender === currentUserId ? "text-purple-100" : "text-gray-500"
                }`}
              >
                <span>
                  {new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                {renderTicks(msg)}
              </div>
            </div>
          </div>
        ))}
    </div>

    {/* ATTACHMENT PREVIEW */}
    {attachment && (
      <div className="px-4 py-3 border-t bg-[#f2edff] border-[#ddd] animate-in slide-in-from-bottom-2">
        <div className="flex items-center justify-between bg-white rounded-xl p-3 shadow-sm">
          <div className="flex items-center gap-3">
            {attachment.type.startsWith("image/") ? (
              <div className="relative">
                <img
                  src={attachment.data}
                  alt={attachment.name}
                  className="w-12 h-12 object-cover rounded-lg border border-gray-200"
                />
                <Image
                  size={14}
                  className="absolute -top-1 -right-1 bg-[#9B72FE] text-white rounded-full p-0.5"
                />
              </div>
            ) : (
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <FileText size={20} className="text-gray-600" />
              </div>
            )}
            <div>
              <p className="text-sm font-medium text-gray-800 truncate max-w-xs">
                {attachment.name}
              </p>
              <p className="text-xs text-gray-500">Ready to send</p>
            </div>
          </div>
          <button
            onClick={() => setAttachment(null)}
            className="p-2 text-red-500 hover:bg-red-50 rounded-full transition"
            aria-label="Remove attachment"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    )}

    {/* INPUT AREA */}
    <div className="border-t border-gray-100 p-4 bg-white relative">
      {showEmojiPicker && (
        <div className="absolute bottom-16 left-4 z-50 bg-white rounded-xl shadow-xl border border-gray-200 p-4">
          <div className="grid grid-cols-8 gap-2 max-w-xs">
            {['😊', '😂', '❤️', '👍', '👎', '😢', '😮', '😡', '🎉', '🔥', '💯', '🤔', '😍', '🥰', '😎', '🤗'].map(
              (emoji) => (
                <button
                  key={emoji}
                  onClick={() => onEmojiClick({ emoji })}
                  className="text-xl hover:bg-gray-100 rounded-lg p-2"
                >
                  {emoji}
                </button>
              )
            )}
          </div>
        </div>
      )}

      <div className="flex items-center gap-3">
        <button
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className={`p-2 rounded-full transition-all hover:scale-110 ${
            showEmojiPicker ? "bg-purple-100 text-[#9B72FE]" : "text-gray-500 hover:bg-gray-100"
          }`}
          type="button"
          aria-label="Toggle emoji picker"
        >
          <Smile size={20} />
        </button>

        <div className="flex-1 relative">
          <input
            type="text"
            className="w-full rounded-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#9B72FE] focus:border-transparent placeholder-gray-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Send them a lovely message..."
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
        </div>

        <label
          htmlFor="file-upload"
          className="p-2 text-gray-500 hover:text-[#9B72FE] hover:bg-purple-50 rounded-full cursor-pointer transition-all hover:scale-110"
          aria-label="Attach file"
        >
          <Paperclip size={20} />
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*,application/pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
        />

        <button
          onClick={handleSend}
          disabled={!input.trim() && !attachment}
          className={`p-3 rounded-full font-medium transition-all ${
            input.trim() || attachment
              ? "bg-gradient-to-r from-[#9B72FE] to-[#b89bff] hover:from-[#b89bff] hover:to-[#9B72FE] text-white shadow-lg hover:shadow-xl hover:scale-105"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
          aria-label="Send message"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
    <OnlineStatusUpdater userId={localStorage.getItem("userId")} />
  </div>

    );
  };

  export default ChatComponent;
