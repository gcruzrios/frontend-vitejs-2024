import React from "react";

const Error404 = () => {
  return (
    <div>
      <section id="wrapper" className="error-page">
        <div className="error-box">
          <div className="error-body text-center">
            <h1>404</h1>
            <h3 className="text-uppercase">Page Not Found !</h3>
            <p className="text-muted mt-4 mb-4">
              YOU SEEM TO BE TRYING TO FIND HIS WAY HOME
            </p>
            <a
              href="/"
              className="btn btn-info btn-rounded waves-effect waves-light mb-5 text-white"
            >
              Back to home
            </a>
          </div>
          <footer className="footer text-center">
            {" "}
            © 2021 Admin Pro by{" "}
            <a href="https://www.wrappixel.com/">wrappixel.com</a>{" "}
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Error404;
