import React from 'react'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import Footer from "../components/Footer";
import FormEditEmpresa from "../components/FormEditEmpresa";

const EditEmpresa = () => {
  return (
    <div>
       <div id="main-wrapper">
        <Header />

        <Sidebar />

        <div className="page-wrapper">
       
          <FormEditEmpresa />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default EditEmpresa