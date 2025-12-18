import { useState } from "react";
import chatbotLogo from "../assets/chatbotLogo.png";

const ChatbotButton = () => {
  const [botOpen, setBotOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setBotOpen((prev) => !prev)}
        className="z-100 fixed p-2 md:p-3 bg-black rounded-full bottom-8 right-1 md:bottom-5 md:right-2 xl:bottom-3 xl:right-18"
      >
        <img
          src={chatbotLogo}
          alt="ChatbotLogo"
          className="h-10 md:h-11 xl:h-13 w-auto object-cover"
        />
      </button>

      {botOpen && (
        <iframe
          src="https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2025/12/17/17/20251217174506-CNFK56K7.json"
          className="fixed bottom-20.5 right-12 md:right-14 md:bottom-21 lg:right-15 xl:right-32 w-[350px] h-[525px] md:w-[400px] border-none rounded-2xl shadow-xl z-50 bg-white"
          title="Chatbot"
        />
      )}
    </>
  );
};

export default ChatbotButton;
