import React from 'react'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import Footer from "../components/Footer";


import FormEditPais from '../components/FormEditPais';

const EditPais = () => {
  return (
    <div>
      <div id="main-wrapper">
        <Header />

        <Sidebar />

        <div className="page-wrapper">
       
          <FormEditPais />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default EditPais