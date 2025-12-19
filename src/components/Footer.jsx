import logo from "../assets/logo.png";
import { FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const services = [
    {
      id: 1,
      title: "AI Skill-Gap Analyzer",
    },
    {
      id: 2,
      title: "AR/VR Immersive Learning",
    },
    {
      id: 3,
      title: "Veteran Connect",
    },
    {
      id: 4,
      title: "Strategic Timeline & Planner",
    },
  ];

  const defense = [
    {
      id: 1,
      title: "Indian Army, (IA)",
    },
    {
      id: 2,
      title: "Indian Navy, (IN)",
    },
    {
      id: 3,
      title: "Indian Air Force, (IAF)",
    },
  ];
  return (
    <footer className="flex flex-col justify-center items-center bottom-0 bg-[#27395f] w-full">
      <div className="md:flex justify-between items-center p-2 w-full md:max-w-[90%]">
        <div className="ml-5 px-7 py-5 flex justify-center items-center gap-2">
          <img src={logo} alt="Logo" className="h-16 lg:h-20 w-auto" />
          <div className="text-2xl lg:text-3xl">
            <p className="text-[#b0be64] font-bold">Military</p>
            <p className="text-white font-bold">Educator</p>
          </div>
        </div>
        <p className="text-sm md:text-md px-3 py-2 font-bold text-[#b0be64] text-center">
          "The One-Stop Platform for Tactical Intelligence and Exam Success"
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 justify-between w-full md:max-w-[95%] px-15 md:px-25 py-5 items-start lg:mb-5">
        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <a href="#">
            <div className="text-white font-bold text-lg lg:text-xl">
              <span>Home</span>
            </div>
          </a>
          <a href="#">
            <div className="text-white font-bold text-lg lg:text-xl">
              <span>About Us</span>
            </div>
          </a>

          <div className="flex flex-col items-start justify-center">
            <a href="#">
              <div className="text-white font-bold text-lg lg:text-xl">
                <span>Our Services</span>
              </div>
            </a>
            <ul className="text-sm space-y-1 mt-1">
              {services.map((service) => (
                <li key={service.id} className="text-white font-light">
                  <a href="#">
                    <div className="flex justify-start items-center gap-2 hover:underline">
                      <FaArrowRightLong />
                      <span>{service.title}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col items-start justify-center">
            <a href="#">
              <div className="text-white font-bold text-lg lg:text-xl">
                <span>Defense System</span>
              </div>
            </a>
            <ul className="text-sm space-y-1 mt-1">
              {defense.map((defense) => (
                <li key={defense.id} className="text-white font-light">
                  <a href="#">
                    <div className="flex justify-start enter items-center gap-2 hover:underline">
                      <FaArrowRightLong />
                      <span>{defense.title}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center items-start gap-2">
            <div className="flex flex-col justify-center items-start">
              <a href="#">
                <div className="text-white font-bold text-lg lg:text-xl">
                  <span>Contact Us</span>
                </div>
              </a>
              <ul className="text-white font-light">
                <li>
                  <div className="flex jusitify-between items-center gap-2 hover:underline">
                    <div className="bg-[#b0be64] text-black rounded-full p-1 text-[10px] hover:bg-[#5d6532] hover:text-white">
                      <BsFillTelephoneFill />
                    </div>
                    <span>Toll No - 9xxxx xxxxx</span>
                  </div>
                </li>
                <li>
                  <div className="flex jusitify-between items-center gap-2 hover:underline">
                    <div className="bg-[#b0be64] text-black rounded-full p-1 text-[10px] hover:bg-[#5d6532] hover:text-white">
                      <FaMapMarkedAlt />
                    </div>
                    <span>Kota, Rajasthan</span>
                  </div>
                </li>
                <li>
                  <div className="flex jusitify-between items-center gap-2 hover:underline">
                    <div className="bg-[#b0be64] text-black rounded-full p-1 text-[10px] hover:bg-[#5d6532] hover:text-white">
                      <SiGmail />
                    </div>
                    <span>support@militaryeducator.in</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden lg:block text-white font-bold text-lg text-start w-full">
          <a href="#">Connect with us</a>
          <div className="flex justify-evenly items-center bg-[#5d6532] p-2 rounded-full my-1 w-[55%]">
            <FaFacebookSquare />
            <IoLogoYoutube />
            <FaInstagram />
            <IoLogoLinkedin />
            <FaSquareXTwitter />
          </div>
        </div>
      </div>

      <div className="text-white font-bold text-lg md:text-xl text-center mt-2 w-[40%] md:w-[30%] lg:hidden">
        <a href="#">Connect with us</a>
        <div className="flex justify-evenly items-center bg-[#5d6532] p-2 rounded-full my-1 mb-5">
          <FaFacebookSquare />
          <IoLogoYoutube />
          <FaInstagram />
          <IoLogoLinkedin />
          <FaSquareXTwitter />
        </div>
      </div>
      <div className="bg-[#1b273e] p-3 text-white text-sm sm:text-md md:text-lg flex justify-center items-center gap-2 w-full z-10">
        <p>Copyright</p>
        <span>
          <FaRegCopyright />
        </span>
        <p>2025 Reserved</p>
        <span>|</span>
        <p>Military Educator</p>
      </div>
    </footer>
  );
};

export default Footer;
