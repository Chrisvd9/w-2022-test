import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import NavSideBar from "../components/SideBar";
import Home from "../views/Home";

const DefaultLayout = () => {
  return (
    <div>
      <NavSideBar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Nav />
        <div className="body flex-grow-1 px-5 mx-3">
          <Home />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
