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
      <div className="bg-[#1b273e] h-10 flex justify-evenly items-center saira-stencil-one">
        <img src={logo} alt="Logo" className="h-7 sm:h-8 w-auto" />
        {navItems.map((item) => (
          <div key={item.id} className="text-md lg:text-lg xl:text-xl text-white hover:text-white/70 hover:scale-105 transition-all duration-600">
            {item.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
