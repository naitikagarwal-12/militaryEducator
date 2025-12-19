import { useState } from "react";
import chatbotLogo from "../assets/chatbotLogo.png";
import { IoClose } from "react-icons/io5";

const ChatbotButton = () => {
  const [botOpen, setBotOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setBotOpen((prev) => !prev)}
        className="z-10 fixed p-2 md:p-3 bg-black rounded-full bottom-7 right-1 md:bottom-5 md:right-2 xl:bottom-3 xl:right-18 cursor-pointer"
      >
        <img
          src={chatbotLogo}
          alt="ChatbotLogo"
          className="h-10 md:h-11 xl:h-13 w-auto object-cover"
        />
      </button>

      {botOpen && (
        <button
          onClick={() => setBotOpen(false)}
          className="z-100 text-2xl font-bold bg-[#b0be64] hover:bg-black hover:text-[#b0be54] rounded-xl cursor-pointer text-black fixed top-15 left-5 md:hidden"
        >
          <IoClose />
        </button>
      )}

      {botOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setBotOpen(false)}
          />

          <div
            className="
              fixed z-50 bg-white shadow-2xl
              inset-0 md:inset-auto
              md:bottom-22 md:right-15 xl:right-30
              md:h-[75%] md:w-[45%]
              rounded-none md:rounded-2xl
              overflow-hidden
            "
          >
            <iframe
              src="https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2025/12/17/17/20251217174506-CNFK56K7.json"
              title="Chatbot"
              className="w-full h-full border-none"
            />
          </div>
        </>
      )}
    </>
  );
};

export default ChatbotButton;
