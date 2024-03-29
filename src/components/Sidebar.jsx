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
                  href="/index"
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
                  href="/profile"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-account-check"></i>
                  <span className="hide-menu">Profile</span>
                </a>
              </li> 
              {/**/}
              <li>
                {" "}
                <a
                  className="waves-effect waves-dark"
                  href="/empresas"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-table"></i>
                  <span className="hide-menu">Empresas</span>
                </a>
              </li>

              <li>
                {" "}
                <a
                  className="waves-effect waves-dark"
                  href="/sectores"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-factory"></i>
                  <span className="hide-menu">Sectores</span>
                </a>
              </li> 
              <li>
                {" "}
                <a
                  className="waves-effect waves-dark"
                  href="/contactos"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-account-multiple"></i>
                  <span className="hide-menu">Contactos</span>
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="waves-effect waves-dark"
                  href="/usuarios"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-account-multiple"></i>
                  <span className="hide-menu">Usuarios</span>
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="waves-effect waves-dark"
                  href="/paises"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-earth"></i>
                  <span className="hide-menu">Paises</span>
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="waves-effect waves-dark"
                  href="/blank"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-book-open-variant"></i>
                  <span className="hide-menu">Blank</span>
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
