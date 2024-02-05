import React from "react";

const MainContent = () => {
  return (
    <div>
      <div className="container-fluid">
        {/*     <!-- ============================================================== -->
                <!-- Bread crumb and right sidebar toggle -->
                <!-- ============================================================== --> */}
        <div className="row page-titles">
          <div className="col-md-5 align-self-center">
            <h3 className="text-themecolor">Blank Page</h3>
          </div>
          <div className="col-md-7 align-self-center">
            <a
              href="https://wrappixel.com/templates/adminpro/"
              className="btn waves-effect waves-light btn-danger pull-right hidden-sm-down"
            >
              {" "}
              Upgrade to Pro
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                This is some text within a card block.
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ============================================================== -->
                <!-- End PAge Content -->
                <!-- ============================================================== --> */}
      </div>
    </div>
  );
};

export default MainContent;
