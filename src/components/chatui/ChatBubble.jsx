import MessageTicks from './MessageTicks'

export default function ChatBubble({ message }) {
  const isMine = message.sender === 'me'

  return (
    <div className={`flex ${isMine ? 'justify-end' : 'justify-start'} mb-3`}>
      <div
        className={`max-w-[75%] px-4 py-2.5 rounded-2xl shadow-sm ${
          isMine
            ? 'bg-indigo-600 text-white rounded-br-md'
            : 'bg-white text-gray-800 rounded-bl-md border border-gray-100'
        }`}
      >
        <p className="text-sm leading-relaxed">{message.text}</p>
        <div className={`flex items-center justify-end gap-1 mt-1 ${isMine ? 'text-indigo-200' : 'text-gray-400'}`}>
          <span className="text-[10px]">{message.time}</span>
          {isMine && <MessageTicks status={message.status} />}
        </div>
      </div>
    </div>
  )
}
