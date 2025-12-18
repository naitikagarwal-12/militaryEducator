import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar.jsx";

const DashLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Navbar/>
    </>
  );
};

export default DashLayout;
