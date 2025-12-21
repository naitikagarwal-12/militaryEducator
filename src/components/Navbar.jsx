import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navItems = [
    { id: 1, title: "Home" },
    { id: 2, title: "About Us" },
    { id: 3, title: "Our Services" },
    { id: 4, title: "Defence System" },
  ];

  const [activeItem, setActiveItem] = useState(1);

  return (
    <>
      <div className="bg-[#1b273e] h-10 flex justify-evenly items-center saira-stencil-one">
        <img src={logo} alt="Logo" className="h-7 sm:h-8 w-auto" />

        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`text-xs sm:text-sm md:text-lg xl:text-xl ${
              activeItem === item.id ? "text-[#efad04]" : "text-white"
            } hover:text-[#efad04]/90`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;
