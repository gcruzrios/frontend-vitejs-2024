import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import DataTable from "../components/DataTableEmpresas";
import ContactoList from "../components/ContactosList";

const Index = () => {
  return (
    <>
      
      <div id="main-wrapper">
        <Header />

        <Sidebar />

        <div className="page-wrapper">
          {/* <MainContent />  */}
            <ContactoList/>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
