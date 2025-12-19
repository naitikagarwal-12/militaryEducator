import motivationArms from "../assets/motivationArms.mp4";
import Header from "../components/Header";

const Home = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full min-h-[77%] sm:min-h-[70%] bg-[#27395f] z-0" />
      <div className="relative">
        <Header />
        <div className="max-w-7xl mx-auto px-4 pt-6 sm:pt-10 pb-6 flex flex-col items-center text-center font-bold">
          <p className="text-white text-3xl md:text-4xl xl:text-5xl">
            Welcome To <span className="text-[rgb(176,190,100)]">Military</span>{" "}
            Educator
          </p>

          <p className="text-white text-xs sm:text-sm md:text-lg xl:text-xl mt-4 max-w-3xl">
            “The One-Stop Platform for Tactical Intelligence and Exam Success”
          </p>

          <div className="w-full mt-7 sm:mt-10 flex justify-center">
            <div className="w-full sm:w-[90%] md:w-[80%] xl:w-[75%] aspect-video rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={motivationArms} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
