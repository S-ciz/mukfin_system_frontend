import { useState, useEffect, useRef } from "react";
import { getMessageBetweenTwoChats, sendMessage } from "../services/api";

export default function Chat() {
  const [messages, setMessages] = useState([
    // { id: 1, from: "me", to: "user", message: "Hey!", delivered: true },
    // { id: 2, from: "user", to: "me", message: "Hi there 👋", delivered: true },
  ]);

  const [CHAT_ID, setChatid] = useState("")
  const [CURR_USER, setUser] = useState("")

  useEffect(()=>{

    const chatId = window.sessionStorage.getItem("chatId")
    setChatid(chatId)

   const displayMessages = async ()=>{

    const curruser = JSON.parse(window.sessionStorage.getItem('user'))
    const current_id = curruser._id

    setUser(current_id)

    let result = await getMessageBetweenTwoChats(chatId, current_id)
    let data = result.data 

    data = data.length > 0 ? data.map(item=>{

      return {
        id: item._id,
        from: item.sender == current_id ? "me" : "user",
        message: item.message,
        delivered: item.delivered

      }
    }) : []
  
  
    setMessages(data)
   }

    displayMessages()
  }, [])

  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = async() => {
    if (!input.trim()) return;

    const newMessage = {
      from: "me",
      to: "user",
      message: input,
      delivered: false,
    };


    await sendMessage(CURR_USER, CHAT_ID, input)

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Simulate delivery
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === newMessage.id ? { ...msg, delivered: true } : msg
        )
      );
    }, 1000);
  };

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-[400px] max-w-md mx-auto border rounded-2xl shadow-lg bg-white">
      {/* Header */}
      <div className="p-4 border-b font-semibold text-lg">
        Chat
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl text-sm shadow ${
                msg.from === "me"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              <div>{msg.message}</div>

              {msg.from === "me" && (
                <div className="text-[10px] mt-1 text-right opacity-80">
                  {msg.delivered ? "Delivered" : "Sending..."}
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border rounded-xl px-3 py-2 text-sm focus:outline-none"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}
