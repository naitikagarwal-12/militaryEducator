import logo from "../assets/logo.png";
import { FaRegCopyright } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";
import { IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = ({ theme }) => {
  // ✅ SAFETY GUARD (NO CRASH EVER)
  if (!theme || !theme.footer) return null;

  const f = theme.footer;

  const services = [
    "AI Skill-Gap Analyzer",
    "AR/VR Immersive Learning",
    "Veteran Connect",
    "Strategic Timeline & Planner"
  ];

  const defense = [
    "Indian Army (IA)",
    "Indian Navy (IN)",
    "Indian Air Force (IAF)"
  ];

  return (
    <footer
      className="flex flex-col justify-center items-center w-full saira-condensed"
      style={{ background: f.background }}
    >
      {/* TOP BAR */}
      <div className="md:flex justify-between items-center p-2 w-full md:max-w-[90%]">
        <div className="ml-5 px-7 py-5 flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-16 lg:h-20 w-auto" />
          <div className="text-2xl lg:text-3xl  saira-stencil-one">
            <p style={{ color: f.brand.military }}>Military</p>
            <p style={{ color: f.brand.educator }}>Educator</p>
          </div>
        </div>

        <p
          className="text-sm md:text-md px-3 py-2 font-bold text-center saira-extra-condensed"
          style={{ color: f.heading }}
        >
          "The One-Stop Platform for Tactical Intelligence and Exam Success"
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:max-w-[95%] px-6 py-5">

        {/* LEFT */}
        <div className="flex flex-col gap-3">
          {["Home", "About Us"].map(item => (
            <a
              key={item}
              href="#"
              className="font-bold text-lg"
              style={{ color: f.text }}
            >
              {item}
            </a>
          ))}

          <div>
            <p className="font-bold text-lg" style={{ color: f.heading }}>
              Our Services
            </p>
            <ul className="mt-1 space-y-1 text-sm">
              {services.map(s => (
                <li key={s} style={{ color: f.text }}>
                  <div className="flex gap-2 items-center hover:underline">
                    <FaArrowRightLong color={f.arrow} />
                    <span>{s}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-bold text-lg" style={{ color: f.heading }}>
              Defense System
            </p>
            <ul className="mt-1 space-y-1 text-sm">
              {defense.map(d => (
                <li key={d} style={{ color: f.text }}>
                  <div className="flex gap-2 items-center hover:underline">
                    <FaArrowRightLong color={f.arrow} />
                    <span>{d}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-bold text-lg" style={{ color: f.heading }}>
              Contact Us
            </p>

            <ul className="mt-1 space-y-2 text-sm">
              {[
                { icon: <BsFillTelephoneFill />, text: "Toll No - 9xxxx xxxxx" },
                { icon: <FaMapMarkedAlt />, text: "Kota, Rajasthan" },
                { icon: <SiGmail />, text: "support@militaryeducator.in" }
              ].map((c, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2"
                  style={{ color: f.text }}
                >
                  <div
                    className="rounded-full p-1 text-[10px]"
                    style={{
                      background: f.icon.bg,
                      color: f.icon.text
                    }}
                  >
                    {c.icon}
                  </div>
                  <span>{c.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT (DESKTOP) */}
        <div className="hidden lg:block">
          <p className="font-bold text-lg mb-1" style={{ color: f.heading }}>
            Connect with us
          </p>
          <div
            className="flex justify-evenly items-center p-2 rounded-full w-[55%]"
            style={{ background: f.social.bg, color: f.social.icon }}
          >
            <FaFacebookSquare />
            <IoLogoYoutube />
            <FaInstagram />
            <IoLogoLinkedin />
            <FaSquareXTwitter />
          </div>
        </div>
      </div>

      {/* MOBILE SOCIAL */}
      <div className="lg:hidden mb-4">
        <p className="font-bold text-lg text-center mb-1" style={{ color: f.heading }}>
          Connect with us
        </p>
        <div
          className="flex justify-evenly items-center p-2 rounded-full mx-auto w-[70%]"
          style={{ background: f.social.bg, color: f.social.icon }}
        >
          <FaFacebookSquare />
          <IoLogoYoutube />
          <FaInstagram />
          <IoLogoLinkedin />
          <FaSquareXTwitter />
        </div>
      </div>

      {/* COPYRIGHT */}
      <div
        className="p-3 text-sm md:text-lg flex justify-center items-center gap-2 w-full"
        style={{ background: f.copyrightBg, color: f.text }}
      >
        <span>Copyright</span>
        <FaRegCopyright />
        <span>2025 Reserved | Military Educator</span>
      </div>
    </footer>
  );
};

export default Footer;
