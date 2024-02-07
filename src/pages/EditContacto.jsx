import React from 'react'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import Footer from "../components/Footer";

import FormEditContacto from '../components/FormEditContacto';

const EditContacto = () => {
  return (
    <div>
      <div id="main-wrapper">
        <Header />

        <Sidebar />

        <div className="page-wrapper">
       
          <FormEditContacto />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default EditContacto