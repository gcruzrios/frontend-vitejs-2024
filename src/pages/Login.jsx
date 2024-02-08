import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const ingreso = { email, password };
    console.log(ingreso);
    const response = await axios.post(`/api/usuario/login`, ingreso);

    const mensaje = response.data.mensaje;

    console.log(mensaje);

    if (mensaje === "Bienvenido") {
      const token = response.data.token;
      localStorage.setItem("Token", token);
      window.location.href = "/index";
    } else {
      Swal.fire({
        text: "Usuario o contraseña incorrectas..",
        icon: "error",
      });
    }
  };

  const mystyle = {
    backgroundImage: "url(/assets/images/backgrounds/pexels-andrew-neel-2312369.jpg)",
    objectFit:"fill",
    width:"75%"
  };
  return (
    <div>
      <div id="main-wrapper">
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 w-100">
          <div className="position-relative z-index-5 min-vh-100">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-9 col-xl-9 col-xxl-9">
                <div className="bg-holder" style={mystyle}>

                 {/* <img
                    src="assets/images/backgrounds/pexels-andrew-neel-2312369.jpg"
                    alt="img"
                    object-fit="fill"
                    width="100%"
                    height="100%"
                    overflow-y="hidden"
                  /> */}
                </div> 

               
                 
               
              </div>
              <div className="col-xl-3 col-xxl-3 col-md-8 mt-1 mt-lg-0 bg-lg-white">
                <div className="authentication-login auth-card-login min-vh-100 min-height-auto bg-white row justify-content-center align-items-center p-4 mx-3 mx-lg-auto mt-5 mt-sm-0">
                  <div className="z-index-5">
                    <h2 className="mb-1 fs-7 fw-bold">Welcome to Adminpro</h2>
                    <p className="mb-4">Your Admin Dashboard</p>
                    <div className="row">
                      <div className="col-6 mb-2 mb-sm-0"></div>
                      <div className="col-6"></div>
                    </div>
                    <div className="position-relative text-center my-4">
                      <p className="mb-0 fs-4 px-3 d-inline-block bg-white text-dark z-index-5 position-relative"></p>
                      <span className="border-top w-100 position-absolute top-50 start-50 translate-middle"></span>
                    </div>
                    <form>
                      <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          for="exampleInputPassword1"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <div className="form-check">
                          
                          
                        </div>
                        <a
                          className="text-primary fw-medium"
                          href="/forgotpassword"
                        >
                          Forgot Password ?
                        </a>
                      </div>

                      <button
                        className="btn btn-primary w-100 py-8 mb-4 rounded-2"
                        onClick={handleLogin}
                      >
                        Login
                      </button>

                      <div className="d-sm-flex align-items-center justify-content-center">
                        <p className="fs-4 mb-0 fw-medium">New to Adminpro?</p>
                        <a className="text-primary fw-medium" href="/register">
                          Create an account
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
