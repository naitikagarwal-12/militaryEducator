import motivationArms from "../assets/motivationArms.mp4";

const Home = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center mt-7 font-bold">
        <div className="text-white text-3xl mt-4 md:text-4xl xl:text-5xl">
          Welcome To <span className="text-[#b0be64]">Military</span> Educator
        </div>
        <div className="text-white text-sm md:text-lg xl:text-xl mt-4">
          “The One-Stop Platform for Tactical Intelligence and Exam Success”
        </div>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[95%] md:w-[80%] lg:w-[85%] xl:w-[75%] h-95 my-7 mt-10 rounded-2xl object-cover shadow-[0_0_40px_rgba(0,0,0,0.6)]"
        >
          <source src={motivationArms} type="video/mp4" />
        </video>
      </section>
    </>
  );
};

export default Home;
