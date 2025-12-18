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
      <div className="bg-[#27395f] h-10 flex justify-evenly items-center">
        <img src={logo} alt="Logo" className="h-9 w-auto" />
        {navItems.map((item) => (
          <div key={item.id} className="text-md lg:text-lg xl:text-xl text-white font-bold">
            {item.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
