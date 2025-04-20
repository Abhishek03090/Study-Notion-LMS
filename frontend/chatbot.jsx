import { useState } from "react";

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { text: "Hello! How can I help you?", sender: "bot" }
    ]);
    const [input, setInput] = useState("");

    const handleSendMessage = () => {
        if (!input.trim()) return;

        // Add user's message
        const newMessages = [...messages, { text: input, sender: "user" }];
        setMessages(newMessages);
        setInput("");

        // Simulate bot response
        setTimeout(() => {
            setMessages([...newMessages, { text: "This is a bot reply!", sender: "bot" }]);
        }, 1000);
    };

    return (
        <div className="w-full h-96 bg-white shadow-md rounded-lg flex flex-col">
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`p-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200"
                            }`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>

            {/* Input Field */}
            <div className="p-3 border-t flex">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 p-2 border rounded-lg"
                    placeholder="Type a message..."
                />
                <button
                    onClick={handleSendMessage}
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
