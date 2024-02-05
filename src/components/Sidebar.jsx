import React from "react";

const Sidebar = () => {
  return (
    <div>
      <aside className="left-sidebar">
        {/* <!-- Sidebar scroll--> */}
        <div className="scroll-sidebar">
          {/* <!-- Sidebar navigation--> */}
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <li>
                {" "}
                <a
                  className="waves-effect waves-dark"
                  href="index.html"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-gauge"></i>
                  <span className="hide-menu">Dashboard</span>
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="waves-effect waves-dark"
                  href="pages-profile.html"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-account-check"></i>
                  <span className="hide-menu">Profile</span>
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="waves-effect waves-dark"
                  href="table-basic.html"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-table"></i>
                  <span className="hide-menu">Table</span>
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="waves-effect waves-dark"
                  href="icon-material.html"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-emoticon"></i>
                  <span className="hide-menu">Icons</span>
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="waves-effect waves-dark"
                  href="map-google.html"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-earth"></i>
                  <span className="hide-menu">Map</span>
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="waves-effect waves-dark"
                  href="pages-blank.html"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-book-open-variant"></i>
                  <span className="hide-menu">Blank</span>
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="waves-effect waves-dark"
                  href="pages-error-404.html"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-help-circle"></i>
                  <span className="hide-menu">404</span>
                </a>
              </li>
            </ul>
            
          </nav>
          {/* <!-- End Sidebar navigation --> */}
        </div>
        {/* <!-- End Sidebar scroll--> */}
      </aside>
    </div>
  );
};

export default Sidebar;
