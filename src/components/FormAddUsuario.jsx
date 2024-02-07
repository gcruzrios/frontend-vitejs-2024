import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const FormAddUsuario = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    
    
   const handleAdd = async (e) => {
        e.preventDefault();
    
        const usuario = { nombre, email, telefono, password, role };
    
        console.log(usuario);
    
        const response = await axios.post(`/api/usuario/agregarusuario`, usuario);
        const mensaje = response.data;
        console.log(mensaje);
    
        if (mensaje === null) {
          Swal.fire({
            text: "Error insertando usuario..",
            icon: "error",
          });
        } else {
          Swal.fire({
            text: "usuario insertada con éxito..",
            icon: "success",
          });
    
          window.location.href = "/usuarios";
        }
      };
  return (
    <div>
      

      {/* Version 2 */}

      <div className="container-fluid">
        {/* <!-- Bread crumb and right sidebar toggle --> */}
        <div className="row page-titles">
          <div className="col-md-5 align-self-center">
            <h3 className="text-themecolor"> Formulario Agregar Usuario</h3>
          </div>
        </div>

              {/*  <!-- Row --> */}
        <div className="row">
          {/* <!-- Column --> */}

          {/* <!-- Column -->
                    <!-- Column --> */}
          <div className="col-lg-8 col-xlg-9">
            <div className="card">
              <div className="card-body">
                <form className="form-horizontal form-material mx-2">
                  <div className="form-group">
                    <label className="col-md-12">Nombre</label>
                    <div className="col-md-12">
                      <input
                        type="text"
                        placeholder="Nombre Contacto"
                        className="form-control form-control-line"
                        onChange={(e) => setNombre(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="example-email" className="col-md-12">
                      Email
                    </label>
                    <div className="col-md-12">
                      <input
                        type="email"
                        placeholder="Email Contacto"
                        className="form-control form-control-line"
                        name="example-email"
                        id="example-email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-12">Teléfono</label>
                    <div className="col-md-12">
                      <input
                        type="text"
                        placeholder="123 456 7890"
                        className="form-control form-control-line"
                        onChange={(e) => setTelefono(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-12">Password</label>
                    <div className="col-md-12">
                      <input
                        type="password"
                        placeholder=""
                        className="form-control form-control-line"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* <div className="form-group">
                    <label className="col-md-12">Message</label>
                    <div className="col-md-12">
                      <textarea
                        rows="5"
                        className="form-control form-control-line"
                      ></textarea>
                    </div>
                  </div> */}
                  <div className="form-group">
                    <label className="col-sm-12">Seleccione Rol de Usuario</label>
                    <div className="col-sm-12">
                      <select
                        className="form-control form-control-line"
                        onChange={(e) => setRole(e.target.value)}
                      >
                        
                        <option selected>Escoga el Role</option>
                        <option value="Admin">Administrador</option>
                        <option value="Ventas">Ventas</option>
                        <option value="Soporte">Soporte</option>
                        <option value="TIC">TIC</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12">
                      <button className="btn btn-success" onClick={handleAdd}>
                        Agregar
                      </button>{" "}
                      <Link to="/usuarios" className="btn btn-secondary">
                        Volver
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- Column --> */}
        </div>
        {/* <!-- Row -->*/}
               
      </div>

    </div>
  )
}

export default FormAddUsuario