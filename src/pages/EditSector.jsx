import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import FormEditSector from "../components/FormEditSector";
import Footer from "../components/Footer";

const EditSector = () => {
  return (
    <div>
      <div id="main-wrapper">
        <Header />

        <Sidebar />

        <div className="page-wrapper">
          <FormEditSector />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default EditSector;
