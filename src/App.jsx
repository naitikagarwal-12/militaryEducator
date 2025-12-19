import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Defense from "./pages/Defense.jsx";
import Home from "./pages/Home.jsx";
import Model from "./pages/Model.jsx";
import Services from "./pages/Services.jsx";
import ChatbotButton from "./components/ChatbotButton.jsx";
import { FaArrowUpLong } from "react-icons/fa6";

function App() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Model />
      <Defense />

      <ChatbotButton />

      <div className="fixed bottom-0 w-full">
        <Navbar />
      </div>
    </>
  );
}

export default App;
