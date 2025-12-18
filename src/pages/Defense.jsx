import Button from "../components/Button";
import MilitaryCards from "../components/MilitaryCards";
import army from "../assets/defenseLogos/armyLogo.png";
import navy from "../assets/defenseLogos/navyLogo.png";
import airForce from "../assets/defenseLogos/airForceLogo.png";
import Footer from "../components/Footer";

const Defense = () => {
  return (
    <>
      <section className="bg-[#b7987d] text-black p-5">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-5xl mt-4 lg:text-6xl">
            Defense System
          </h1>
        </div>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 my-7 mt-15 w-[75%] md:w-[85%]">
            <MilitaryCards
              classname={""}
              imgClass={"h-50 md:h-40 w-auto"}
              image={navy}
              button={
                <Button
                  event={""}
                  classname={
                    "text-black bg-[#b7987d] px-5 py-2 text-xl md:text-lg ring-2 ring-black/30"
                  }
                >
                  Indian Navy
                </Button>
              }
            />
            <MilitaryCards
              classname={""}
              imgClass={"h-50 md:h-40 w-auto"}
              image={army}
              button={
                <Button
                  event={""}
                  classname={
                    "text-black bg-[#b7987d] px-5 py-2 text-xl md:text-lg ring-2 ring-black/30"
                  }
                >
                  Indian Army
                </Button>
              }
            />
            <MilitaryCards
              classname={""}
              imgClass={"h-50 md:h-40 w-auto"}
              image={airForce}
              button={
                <Button
                  event={""}
                  classname={
                    "text-black bg-[#b7987d] px-5 py-2 text-xl md:text-lg ring-2 ring-black/30"
                  }
                >
                  Indian Air Force
                </Button>
              }
            />
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default Defense;
