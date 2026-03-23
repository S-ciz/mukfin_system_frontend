import MessageTicks from './MessageTicks'

export default function ChatListItem({ chat, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left ${
        isActive ? 'bg-indigo-50 border-r-2 border-indigo-600' : ''
      }`}
    >
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-semibold text-sm shrink-0">
          {chat.avatar}
        </div>
        {chat.online && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-800 truncate">{chat.name}</h3>
          <span className="text-[11px] text-gray-400 shrink-0 ml-2">{chat.time}</span>
        </div>
        <div className="flex items-center gap-1 mt-0.5">
          {chat.lastMessageMine && <MessageTicks status={chat.lastMessageStatus} />}
          <p className="text-xs text-gray-500 truncate">{chat.lastMessage}</p>
        </div>
      </div>
      {chat.unread > 0 && (
        <span className="w-5 h-5 flex items-center justify-center bg-indigo-600 text-white text-[10px] font-bold rounded-full shrink-0">
          {chat.unread}
        </span>
      )}
    </button>
  )
}
