import React from 'react'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import PaisesList from '../components/PaisesList';

const ListPaises = () => {
  return (
    <div>
         <div id="main-wrapper">
        <Header />

        <Sidebar />

        <div className="page-wrapper">
         <PaisesList/>  
           
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ListPaises