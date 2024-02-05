import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import DataTable from "../components/DataTableEmpresas";

const Index = () => {
  return (
    <div>
      
      <div id="main-wrapper">
        <Header />

        <Sidebar />

        <div className="page-wrapper">
          {/* <MainContent />  */}
            <DataTable/>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
