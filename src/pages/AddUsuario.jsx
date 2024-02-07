import React from 'react'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import Footer from "../components/Footer";
import FormAddUsuario from "../components/FormAddUsuario";

const AddUsuario = () => {
  return (
    <div>
      <div id="main-wrapper">
        <Header />

        <Sidebar />

        <div className="page-wrapper">
       
          <FormAddUsuario />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default AddUsuario