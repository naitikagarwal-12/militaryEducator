import logo from "../assets/logo.png";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import Button from "./Button";
import { MdOutlineFileDownload } from "react-icons/md";
import { useState } from "react";
import Login from "../pages/Login";
import ContactUs from "../pages/ContactUs";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center w-full">
          <div className="p-2 flex justify-center items-center gap-3">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
            <div className="text-2xl">
              <p className="text-[#b0be64] font-bold">Military</p>
              <p className="text-white font-bold">Educator</p>
            </div>
          </div>
          <div className="hidden rounded-3xl bg-[#d9d9d9] lg:flex border-2 border-[#27395f] max-w-85 items-center">
            <div className="rounded-3xl py-2 px-5 bg-[#5d6532] text-white outline-3 outline-[#27395f]">
              <p>Experience on AR/VR</p>
            </div>
            <div className="flex gap-1 justify-center items-center">
              <p className="py-1 px-3 text-[#5d6532] font-bold">Download</p>
              <MdOutlineFileDownload className="text-2xl text-[#5d6532]" />
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Button
              icon={<FaPhone />}
              event={() => setContactOpen(true)}
              classname={
                "bg-[#b0be64] text-sm lg:text-md border border-[#27395f]"
              }
            >
              Contact Us
            </Button>
            <Button
              icon={<FaUser />}
              event={() => setLoginOpen(true)}
              classname={
                "bg-[#b0be64] text-sm lg:text-md border border-[#27395f]"
              }
            >
              Login
            </Button>
          </div>
        </div>
      </div>
      <hr className="w-[95%] md:w-[80%] lg:w-[85%] xl:w-[80%] mx-auto border-t-3 text-white rounded-full" />

      {/* CONTACT MODAL */}
      {contactOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center">
          <div className="bg-white p-6 lg:p-8 rounded-xl relative w-[80%] lg:w-[70%] min-h-[72%] md:min-h-[75%] lg:min-h-[74%]">
            <button
              className="absolute top-1 right-2 text-xl"
              onClick={() => setContactOpen(false)}
            >
              <IoClose className="text-3xl text-[#27395f] font-bold" />
            </button>
            <div className="py-2 flex flex-col justify-center items-center gap-3">
              <ContactUs />
            </div>
          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {loginOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center">
          <div className="bg-white p-6 lg:p-8 rounded-xl relative w-[80%] lg:w-[70%] min-h-[72%] md:min-h-[75%] lg:min-h-[74%]">
            <button
              className="absolute top-1 right-2 text-xl"
              onClick={() => setLoginOpen(false)}
            >
              <IoClose className="text-3xl text-[#27395f] font-bold" />
            </button>
            <div className="py-2 flex flex-col justify-center items-center gap-3">
              <Login />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
