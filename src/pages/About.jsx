import military from "../assets/military.png";

const About = () => {
  return (
    <section className="bg-[#5c4e41] text-white p-5">
      <div className="flex flex-col justify-center items-center saira-stencil-one">
        <h1 className="text-4xl sm:text-5xl mt-4 lg:text-6xl">About Us</h1>
        <p className="text-xs sm:text-sm md:text-lg xl:text-xl mt-4 xl:max-w-[60%] text-center">
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
          <div className="border-2 h-full w-full rounded-3xl saira-condensed font-semibold">
            <div className="flex justify-start items-center gap-2">
              <h1>Idea</h1>
              <p>
                To provide a unified ecosystem covering the Army, Navy, and Air
                Force, integrating specialized knowledge with immersive AR/VR
                training tools and AI-driven study planning.{" "}
              </p>
            </div>

            <div className="flex justify-start items-center gap-2">
              <h1>Scope</h1>
              <p>
                Our scope extends from theoretical mastery to practical
                visualization, ensuring candidates are prepared for both written
                exams and the psychological demands of the SSB.
              </p>
            </div>

            <div className="flex justify-start items-center gap-2">
              <h1>Aim</h1>
              <p>
                Our core aim is to democratize elite defence guidance,
                empowering youth from all backgrounds with the tools,
                mentorship, and confidence needed to serve the nation as
                tomorrow's guardians.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
