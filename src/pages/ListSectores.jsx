import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import Footer from "../components/Footer";

import DataTableSectores from "../components/DataTableSectores";

const Index = () => {
  return (
    <>
      
      <div id="main-wrapper">
        <Header />

        <Sidebar />

        <div className="page-wrapper">
         
            <DataTableSectores/>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
