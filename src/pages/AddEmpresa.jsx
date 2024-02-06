import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import Footer from "../components/Footer";
import FormAddEmpresa from "../components/FormAddEmpresa";


const AddEmpresa = () => {
  return (
    <div>
      <div id="main-wrapper">
        <Header />

        <Sidebar />

        <div className="page-wrapper">
       
          <FormAddEmpresa />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AddEmpresa;
