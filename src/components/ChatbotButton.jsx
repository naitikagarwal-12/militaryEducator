import { useState } from "react";
import chatbotLogo from "../assets/chatbotLogo.png";
import { IoClose } from "react-icons/io5";
import { FaArrowUpLong } from "react-icons/fa6";

const ChatbotButton = () => {
  const [botOpen, setBotOpen] = useState(false);

  return (
    <>
      <div
        className="scrollUp fixed bottom-21 md:bottom-28 lg:bottom-26 right-1 md:right-3 z-60 p-2 md:p-4 rounded-full
          bg-white/15 backdrop-blur-xl
          border border-white/30
          hover:scale-100
          hover:bg-white/30 text-white/60 text-2xl
          md:text-3xl transition-all duration-300"
      >
        <FaArrowUpLong />
      </div>

      <button
        onClick={() => setBotOpen((prev) => !prev)}
        className="chatTalk fixed bottom-8 lg:bottom-7 right-1 md:right-3
          z-60 p-0.5 rounded-full
          bg-white/15 backdrop-blur-xl
          border border-white/30
          hover:scale-100
          hover:bg-white/30
          transition-all duration-300
        "
      >
        {botOpen ? (
          <IoClose className="text-6xl p-3 text-white/60"/>
        ) : (
          <img
            src={chatbotLogo}
            alt="ChatbotLogo"
            className="h-10 md:h-16 lg:h-15"
          />
        )}
      </button>

      {botOpen && (
        <button
          onClick={() => setBotOpen(false)}
          className="
            fixed top-15 left-5 z-100
            p-1 text-lg sm:text-xl rounded-full
            bg-white/30 backdrop-blur-lg
            border border-white/40 md:hidden
          "
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
              fixed z-80
              inset-0 md:inset-auto
              md:bottom-20 md:right-21 md:h-[80%] md:w-[55%] flex items-center justify-center
            "
          >
            <div
              className="
                absolute inset-0
                rounded-none md:rounded-2xl
                p-[1.5px]
                bg-[linear-gradient(90deg,#b0be64,#22d3ee,#a855f7,#b0be64)]
                bg-[length:300%_300%]
                animate-[borderMove_6s_linear_infinite]
              "
            >
              <div
                className="
                  w-full h-full
                  bg-white/60 backdrop-blur-xl
                  border border-white/30
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
            </div>
          </div>
        </>
      )}

      <style>
        {`
          @keyframes borderMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </>
  );
};

export default ChatbotButton;
