import chatbotLogo from "../assets/chatbotLogo.png";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "About Us",
    },
    {
      id: 3,
      title: "Our Services",
    },
    {
      id: 4,
      title: "Defence System",
    },
  ];

  return (
    <>
      <div className="bg-[#27395f] h-12 flex justify-evenly items-center">
        <img src={logo} alt="Logo" className="h-9 w-auto" />
        {navItems.map((item) => (
          <div id={item.id} className="text-md lg:text-lg xl:text-xl text-white font-bold">
            {item.title}
          </div>
        ))}
        <div className="bg-black rounded-full flex justify-center items-center p-3">
          <img src={chatbotLogo} alt="ChatbotLogo" className="h-7 xl:h-9 w-auto" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
