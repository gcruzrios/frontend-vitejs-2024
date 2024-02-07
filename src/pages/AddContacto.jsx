import React from 'react'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import Footer from "../components/Footer";
import FormAddContacto from "../components/FormAddContacto";
const AddContacto = () => {
  return (
    <div>
      <div id="main-wrapper">
        <Header />

        <Sidebar />

        <div className="page-wrapper">
       
          <FormAddContacto />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default AddContacto