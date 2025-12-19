import { MdOutlineFileDownload } from "react-icons/md";

const Model = () => {
  return (
    <section className="bg-[#5c4e41] text-white p-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl sm:text-5xl mt-4 lg:text-6xl">AR/VR Model</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr]">
        <div className="flex justify-center items-center">
          <div className="border-3 rounded-4xl my-7 mt-15 p-4 w-full md:w-[95%]">
            <iframe
              src="https://www.youtube.com/embed/6AOwC2nb-mQ"
              className="rounded-3xl w-full h-65 md:h-105"
            ></iframe>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="border-3 border-[#b0be64] rounded-3xl p-4 mb-4 w-full md:w-[95%] md:h-114 md:mt-9 flex flex-col justify-between">
            <div className="ring-2 rounded-xl bg-[#b7987d] text-black p-2 h-full">
              <div className="ring-1 h-full w-full rounded-xl p-2">
                <p className="text-lg lg:text-2xl xl:text-3xl font-bold text-center">
                  The Ultimate Interactive Defence Encyclopedia
                </p>
                <p className="mt-5 md:mt-6 lg:mt-8 xl:mt-10 text-sm md:text-md xl:text-lg font-light">
                  <ul>
                    <li>Visualize weapons and vehicles in 360°,</li>
                    <br />
                    <li> Experience true-to-life scale in Augmented Reality,</li>
                    <br />
                    <li>Study equipment details with interactive label</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-5">
              <button className="flex justify-center items-center gap-2 font-semibold bg-[#b7987d] py-1 rounded-xl text-black ring-2 ring-black text-lg px-4">
                Download
                <MdOutlineFileDownload className="text-2xl md:text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
