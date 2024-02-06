import React from "react";

const Header = () => {
  const Token = localStorage.getItem("Token");

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };


  return (
    <div>
      <header className="topbar">
        <nav className="navbar top-navbar navbar-expand-md navbar-light">
          {/* <!-- ============================================================== -->
                <!-- Logo -->
                <!-- ============================================================== --> */}
          <div className="navbar-header">
            <a className="navbar-brand" href="index.html">
              {/* <!-- Logo icon --> */}
              <b>
                <img
                  src="/assets/images/logo-icon.png"
                  alt="homepage"
                  className="dark-logo"
                />
              </b>
              {/* <!--End Logo icon -->
                        <!-- Logo text --> */}
              <span>
                <img
                  src="/assets/images/logo-text.png"
                  alt="homepage"
                  className="dark-logo"
                />
              </span>
            </a>
          </div>
          {/* <!-- ============================================================== -->
                <!-- End Logo -->
                <!-- ============================================================== --> */}
          <div className="navbar-collapse">
            {/* <!-- ============================================================== -->
                    <!-- toggle and nav items -->
                    <!-- ============================================================== --> */}
            <ul className="navbar-nav me-auto">
              {/* <!-- This is  --> */}
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link nav-toggler hidden-md-up waves-effect waves-dark"
                  href="javascript:void(0)"
                >
                  <i className="ti-menu"></i>
                </a>{" "}
              </li>
            </ul>
            {/* <!-- ============================================================== -->
                    <!-- User profile and search -->
                    <!-- ============================================================== --> */}
            <ul className="navbar-nav my-lg-0">
              {/* <!-- ============================================================== -->
                        <!-- Search -->
                        <!-- ============================================================== --> */}
              <li className="nav-item hidden-xs-down search-box">
                {" "}
                <a
                  className="nav-link hidden-sm-down waves-effect waves-dark"
                  href="javascript:void(0)"
                >
                  <i className="ti-search"></i>
                </a>
                <form className="app-search">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search & enter"
                  />{" "}
                  <a className="srh-btn">
                    <i className="ti-close"></i>
                  </a>
                </form>
              </li>
              {/* <!-- ============================================================== -->
                        <!-- Profile -->
                        <!-- ============================================================== --> */}
              <li className="nav-item">
                <a className="nav-link waves-effect waves-dark" href="#">
                  <img
                    src="/assets/images/users/1.jpg"
                    alt="user"
                    className="profile-pic"
                  />
                </a>
                
                <button className="btn btn-secondary" onClick={() => logout()}> <i className="mdi mdi-logout"></i> Salir </button>
                
                
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
