import military from "../assets/military.png";

const About = () => {
  return (
    <section className="bg-[#5c4e41] text-white p-5">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-5xl mt-4 lg:text-6xl">About Us</h1>
        <p className="text-sm md:text-lg xl:text-xl font-medium mt-7 xl:max-w-[60%] text-center">
          "Military Educator is a pioneering EduTech platform dedicated to
          bridging the gap between defence aspirations and reality."
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 my-7 mt-15 max-w-[90%]">
          <img
            src={military}
            alt="Military"
            className="rounded-4xl md:rounded-3xl"
          />
          <div className="border-2 h-full w-full rounded-3xl">
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
