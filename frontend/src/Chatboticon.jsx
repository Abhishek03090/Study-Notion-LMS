import { useState } from "react";
import { MessageCircle } from "lucide-react"; // Ensure lucide-react is installed
import Chatbot from "./chatbot";

const ChatbotIcon = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chatbot Icon */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
            >
                <MessageCircle size={32} />
            </button>

            {/* Chatbot Window */}
            {isOpen && (
                <div className="absolute bottom-14 right-0 w-80 bg-white shadow-lg rounded-lg p-4">
                    <Chatbot />
                </div>
            )}
        </div>
    );
};

export default ChatbotIcon;
