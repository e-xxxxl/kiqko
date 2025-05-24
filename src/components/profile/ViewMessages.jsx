import { useEffect, useState } from 'react';
import { MessageCircle, Search, Users, Clock } from 'lucide-react';

const ViewMessages = ({ onChatSelect }) => {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const currentUserId = localStorage.getItem('userId');

  useEffect(() => {
    if (!currentUserId) {
      setError('User not logged in');
      return;
    }
    fetchConversations();
  }, [currentUserId]);

  const fetchConversations = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Try localhost first, then fallback to production URL
      const baseURL = window.location.hostname === 'localhost' 
        ? 'http://localhost:5000' 
        : 'https://kiqko-backend.onrender.com';
      
      console.log('Fetching conversations from:', `${baseURL}/api/messages/conversations/${currentUserId}`);
      
      const response = await fetch(`${baseURL}/api/messages/conversations/${currentUserId}`);
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error('Server response:', errorData);
        throw new Error(`Server error: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Fetched conversations:', data);
      setConversations(data);
    } catch (err) {
      console.error('Error fetching conversations:', err);
      setError(`Failed to load conversations: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleChatClick = (userId) => {
    if (onChatSelect) {
      onChatSelect(userId);
    }
  };

  const formatLastMessageTime = (timestamp) => {
    if (!timestamp) return '';
    
    const now = new Date();
    const messageTime = new Date(timestamp);
    const diffInHours = (now - messageTime) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now - messageTime) / (1000 * 60));
      return diffInMinutes < 1 ? 'Just now' : `${diffInMinutes}m ago`;
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`;
    } else if (diffInHours < 48) {
      return 'Yesterday';
    } else {
      return messageTime.toLocaleDateString();
    }
  };

  const truncateMessage = (message, maxLength = 50) => {
    if (!message) return 'No messages yet';
    return message.length > maxLength ? `${message.substring(0, maxLength)}...` : message;
  };

  const filteredConversations = conversations.filter(conversation =>
    conversation.otherUser?.username?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex flex-col h-screen max-w-2xl mx-auto bg-white shadow-2xl border border-[#eee] rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-4 p-4 border-b bg-gradient-to-r from-[#9B72FE] to-[#b89bff] text-white">
          <MessageCircle size={24} />
          <h1 className="text-xl font-semibold">Messages</h1>
        </div>
        
        {/* Loading State */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-[#9B72FE] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-500">Loading conversations...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col h-screen max-w-2xl mx-auto bg-white shadow-2xl border border-[#eee] rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-4 p-4 border-b bg-gradient-to-r from-[#9B72FE] to-[#b89bff] text-white">
          <MessageCircle size={24} />
          <h1 className="text-xl font-semibold">Messages</h1>
        </div>
        
        {/* Error State */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle size={24} className="text-red-500" />
            </div>
            <p className="text-red-500 mb-2">Failed to load conversations</p>
            <button 
              onClick={fetchConversations}
              className="px-4 py-2 bg-[#9B72FE] text-white rounded-lg hover:bg-[#8a63fd] transition"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto bg-white shadow-2xl border border-[#eee] rounded-3xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b bg-gradient-to-r from-[#9B72FE] to-[#b89bff] text-white sticky top-0 z-10">
        <MessageCircle size={24} />
        <div className="flex-1">
          <h1 className="text-xl font-semibold">Messages</h1>
          <p className="text-sm text-purple-100">{conversations.length} conversations</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Users size={16} />
          <span>{conversations.filter(c => c.isOnline).length} online</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4 border-b bg-gray-50">
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9B72FE] focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {filteredConversations.length === 0 ? (
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={32} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {searchTerm ? 'No conversations found' : 'No conversations yet'}
              </h3>
              <p className="text-gray-500 max-w-sm">
                {searchTerm 
                  ? 'Try searching with a different name'
                  : 'Start chatting with someone to see your conversations here'
                }
              </p>
            </div>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.otherUser._id}
                onClick={() => handleChatClick(conversation.otherUser._id)}
                className="flex items-center gap-4 p-4 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 cursor-pointer transition-all duration-200 group"
              >
                {/* Profile Picture */}
                <div className="relative flex-shrink-0">
                  <img
                    src={conversation.otherUser.profilephoto || 'https://via.placeholder.com/50'}
                    alt={conversation.otherUser.username}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gray-200 group-hover:border-[#9B72FE] transition-colors"
                  />
                  {conversation.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
                  )}
                </div>

                {/* Conversation Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {conversation.otherUser.username}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock size={12} />
                      <span>{formatLastMessageTime(conversation.lastMessage?.timestamp)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 truncate flex-1">
                      {conversation.lastMessage?.sender === currentUserId && 'You: '}
                      {conversation.lastMessage?.attachment && !conversation.lastMessage?.text 
                        ? '📎 Attachment' 
                        : truncateMessage(conversation.lastMessage?.text)
                      }
                    </p>
                    
                    {conversation.unreadCount > 0 && (
                      <div className="ml-2 bg-[#9B72FE] text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                        {conversation.unreadCount > 99 ? '99+' : conversation.unreadCount}
                      </div>
                    )}
                  </div>

                  {/* Online Status */}
                  <div className="flex items-center gap-2 mt-1">
                    <div className={`w-2 h-2 rounded-full ${conversation.isOnline ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                    <span className="text-xs text-gray-500">
                      {conversation.isOnline ? 'Online' : `Last seen ${formatLastMessageTime(conversation.lastSeen)}`}
                    </span>
                  </div>
                </div>

                {/* Arrow Indicator */}
                <div className="text-gray-400 group-hover:text-[#9B72FE] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewMessages;