import React from 'react'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import Footer from "../components/Footer";
import FormEditUsuario from "../components/FormEditUsuario";


const EditUsuario = () => {
  return (
    <div>
      <div id="main-wrapper">
        <Header />

        <Sidebar />

        <div className="page-wrapper">
       
          <FormEditUsuario />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default EditUsuario