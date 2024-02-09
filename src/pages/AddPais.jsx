import React from 'react'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import Footer from "../components/Footer";
import FormAddPais from "../components/FormAddPais";
const AddPais = () => {
  return (
    <div>
      <div id="main-wrapper">
        <Header />

        <Sidebar />

        <div className="page-wrapper">
       
          <FormAddPais />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default AddPais