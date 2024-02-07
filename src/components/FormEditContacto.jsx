import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const FormEditContacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [empresas, setEmpresas] = useState([]);

  const { id } = useParams();

  const GetContacto = async () => {
    const response = await axios.get(`/api/contacto/obtenercontacto/${id}`);
    const mensaje = response.data;

    setNombre(mensaje[0].nombre);
    setTelefono(mensaje[0].telefono);
    setEmail(mensaje[0].email);
    setEmpresa(mensaje[0].empresa);
  };

  const peticionGetEmpresas = async () => {
    //console.log("en petición get")
    await axios.get("/api/empresa/obtenerempresas").then((response) => {
      setEmpresas(response.data);
      // console.log(empresas);
    });
  };

  useEffect(() => {
    GetContacto();
    peticionGetEmpresas();
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault();

    //    const token = data.Token;
    //    localStorage.setItem("Token", token);

    const contacto = { nombre, telefono, email, empresa };
    console.log(contacto);
    const response = await axios.put(
      `/api/contacto/actualizarcontacto/${id}`,
      contacto
    );
    const respuesta = response.data;
    console.log(respuesta);

    if (respuesta === null) {
      Swal.fire({
        text: "Error actualizando contacto..",
        icon: "error",
      });
    } else {
      Swal.fire({
        text: "Contacto actualizado con éxito..",
        icon: "success",
      });

      window.location.href = "/contactos";
    }
  };

  return (
    <div>
      


{/* version 2  */}

<div className="container-fluid">
        {/* <!-- Bread crumb and right sidebar toggle --> */}
        <div className="row page-titles">
          <div className="col-md-5 align-self-center">
            <h3 className="text-themecolor"> Formulario Editar Contacto</h3>
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
                        value={nombre}
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
                        value={email}
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
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
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
                    <label className="col-sm-12">Seleccione Empresa</label>
                    <div className="col-sm-12">
                      <select
                        className="form-control form-control-line"
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                        
                      >
                        <option selected>Escoga la Empresa</option>
                        {empresas.map((empresa) => (
                          <option value={empresa.nombre}>
                            {empresa.nombre}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12">
                      <button className="btn btn-success" onClick={handleEdit}>
                        Editar
                      </button>{" "}
                      <Link to="/contactos" className="btn btn-secondary">
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
  );
};

export default FormEditContacto;
