import React from 'react'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

const ListPaises = () => {
  return (
    <div>
         <div id="main-wrapper">
        <Header />

        <Sidebar />

        <div className="page-wrapper">
           <MainContent /> 
           
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ListPaises