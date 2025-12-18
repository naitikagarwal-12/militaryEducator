import logo from "../assets/logo.png";
import { FaRegCopyright } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

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
      <div className="flex justify-between items-center p-2 w-full md:max-w-[85%]">
        <div className="ml-5 px-7 py-5 flex justify-center items-center gap-2">
          <img src={logo} alt="Logo" className="h-16 lg:h-20 w-auto" />
          <div className="text-2xl lg:text-3xl">
            <p className="text-[#b0be64] font-bold">Military</p>
            <p className="text-white font-bold">Educator</p>
          </div>
        </div>
        <p className="text-sm md:text-md lg:text-lg px-3 py-5 font-semibold text-[#b0be64] text-center">
          "The One-Stop Platform for Tactical Intelligence and Exam Success"
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full md:max-w-[85%] px-15 md:px-25 py-5">
        <div className="flex flex-col justify-center items-start">
          <a href="#">
            <div className="text-white font-semibold flex justify-center items-center gap-2 text-lg lg:text-xl">
              <FaArrowRightLong />
              <span>Home</span>
            </div>
          </a>
          <a href="#">
            <div className="text-white font-semibold flex justify-center items-center gap-2 text-lg lg:text-xl">
              <FaArrowRightLong />
              <span>About Us</span>
            </div>
          </a>

          <a href="#">
            <div className="text-white font-semibold flex justify-center items-center gap-2 text-lg lg:text-xl">
              <FaArrowRightLong />
              <span>Our Services</span>
            </div>
          </a>

          <ul className="px-7">
            {services.map((service) => (
              <li key={service.id} className="text-white font-light">
                <a href="#">{service.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center items-start">
          <a href="#">
            <div className="text-white font-semibold flex justify-center items-center gap-2 text-lg lg:text-xl">
              <FaArrowRightLong />
              <span>Defense System</span>
            </div>
          </a>
          <ul className="px-7">
            {defense.map((defense) => (
              <li key={defense.id} className="text-white font-light">
                <a href="#">{defense.title}</a>
              </li>
            ))}
          </ul>
          <a href="#">
            <div className="text-white font-semibold flex justify-center items-center gap-2 text-lg lg:text-xl">
              <FaArrowRightLong />
              <span>Connect with us</span>
            </div>
          </a>
        </div>
        <div className="flex flex-col justify-center items-start">
          <a href="#">
            <div className="text-white font-semibold flex justify-center items-center gap-2 text-lg lg:text-xl">
              <FaArrowRightLong />
              <span>Contact Us</span>
            </div>
          </a>
        </div>
      </div>
      <div className="bg-[#1b273e] h-12 text-white text-md md:text-lg flex justify-center items-center gap-2 w-full mb-50">
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
