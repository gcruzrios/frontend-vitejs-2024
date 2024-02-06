import React from 'react'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

import FormProfile from '../components/FormProfile';

const Profile = () => {
  return (
    <div>

<div id="main-wrapper">
        <Header />

        <Sidebar />

        <div className="page-wrapper">
          {/* <MainContent />  */}
            <FormProfile/>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Profile