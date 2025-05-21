import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import Picker from 'emoji-picker-react';

const socket = io('http://localhost:5000');

const ChatComponent = () => {
  const { userId } = useParams();
  const currentUserId = localStorage.getItem('userId');

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [typingStatus, setTypingStatus] = useState(false);
  const [lastSeen, setLastSeen] = useState(null);
  const [attachment, setAttachment] = useState(null);
  const chatRef = useRef();

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

        const res = await fetch(`http://localhost:5000/api/messages/${currentUserId}/${userId}`);
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

  const handleSend = () => {
    if (!input.trim() && !attachment) return;

    const timestamp = new Date().toISOString();

    const messageData = {
      text: input,
      sender: currentUserId,
      receiver: userId,
      timestamp,
      status: 'sent',
      attachment: null,
    };

    if (attachment) {
      // Prepare file as base64 string or URL if your backend supports it
      messageData.attachment = attachment;
    }

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
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-1">Chat with User {userId}</h2>
      <div className="text-sm text-gray-500 mb-4">{typingStatus ? 'User is typing...' : formatLastSeen(lastSeen)}</div>

      <div ref={chatRef} className="border h-64 overflow-y-scroll p-4 mb-4">
        {messages
          .filter(
            (msg) =>
              (msg.sender === currentUserId && msg.receiver === userId) ||
              (msg.sender === userId && msg.receiver === currentUserId)
          )
          .map((msg) => (
            <div
              key={msg._id}
              className={`mb-2 flex ${msg.sender === currentUserId ? 'justify-end' : 'justify-start'}`}
            >
              <span
                className={`inline-block px-3 py-2 rounded ${msg.sender === currentUserId ? 'bg-blue-100' : 'bg-gray-100'}`}
                style={{ maxWidth: '70%', wordBreak: 'break-word', position: 'relative' }}
              >
                {msg.text}

                {/* Show attachment preview */}
                {msg.attachment && (
                  <div style={{ marginTop: 8 }}>
                    {msg.attachment.type.startsWith('image/') ? (
                      <img
                        src={msg.attachment.data}
                        alt={msg.attachment.name}
                        style={{ maxWidth: '100%', borderRadius: 8 }}
                      />
                    ) : (
                      <a
                        href={msg.attachment.data}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'blue', textDecoration: 'underline' }}
                      >
                        {msg.attachment.name}
                      </a>
                    )}
                  </div>
                )}

                {renderTicks(msg)}
              </span>
            </div>
          ))}
      </div>

      <div className="flex gap-2 items-center relative">
        <button
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className="text-2xl"
          type="button"
          aria-label="Toggle emoji picker"
        >
          😊
        </button>

        {showEmojiPicker && (
          <div style={{ position: 'absolute', bottom: '3rem', left: 0, zIndex: 1000 }}>
            <Picker onEmojiClick={onEmojiClick} />
          </div>
        )}

        <input
          type="text"
          className="flex-1 border rounded p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSend();
          }}
        />

        {/* File attachment */}
        <label htmlFor="file-upload" className="cursor-pointer px-3 py-2 border rounded bg-gray-200 hover:bg-gray-300">
          📎
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*,application/pdf"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />

        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>

      {/* Preview attachment before sending */}
      {attachment && (
        <div className="mt-2 p-2 border rounded bg-gray-100 max-w-xl">
          <strong>Attachment preview:</strong>
          {attachment.type.startsWith('image/') ? (
            <img src={attachment.data} alt={attachment.name} style={{ maxWidth: '100%', borderRadius: 8 }} />
          ) : (
            <p>{attachment.name}</p>
          )}
          <button
            onClick={() => setAttachment(null)}
            className="ml-2 text-red-600 hover:underline"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
