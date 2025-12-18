import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Defense from "./pages/Defense.jsx";
import Home from "./pages/Home.jsx";
import Model from "./pages/Model.jsx";
import Services from "./pages/Services.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <div className="bg-[#27395f] h-[70vh] xl:h-[62vh]">
          <Header />
          <Home />
          <About />
          <Services />
          <Model/>
          <Defense/>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <Navbar />
      </div>
      <Footer />
    </>
  );
}

export default App;
