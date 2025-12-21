import { Route, Routes } from "react-router-dom";
import DashLayout from "./components/layouts/DashLayout.jsx";
import HomeLayout from "./components/layouts/HomeLayout.jsx";
import ArmyLayout from "./components/layouts/military/ArmyLayout.jsx";
import NavyLayout from "./components/layouts/military/NavyLayout.jsx";
import AirForceLayout from "./components/layouts/military/AirForceLayout.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./lenis.js";
import ContactUs from "./pages/ContactUs.jsx";
import ServiceScrollPage from "./pages/ServiceScrollPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashLayout />}>
        <Route index element={<HomeLayout />} />
        <Route path="army" element={<ServiceScrollPage service="army" />} />
        <Route path="navy" element={<ServiceScrollPage service="navy" />} />
        <Route path="air-force" element={<ServiceScrollPage service="airforce" />} />
      </Route>
      
      <Route path="/contact" element={<ContactUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
