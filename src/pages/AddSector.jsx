import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import Footer from "../components/Footer";
import FormAddSector from "../components/FormAddSector";

const AddSector = () => {
  return (
    <div>
      <div id="main-wrapper">
        <Header />

        <Sidebar />

        <div className="page-wrapper">
          <FormAddSector />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AddSector;
