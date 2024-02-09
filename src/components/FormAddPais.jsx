import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const FormAddPais = () => {
  const [nombre, setNombre] = useState("");
  const [continente, setContinente] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();

    const pais = { nombre, continente };

    console.log(pais);

    const response = await axios.post(`/api/pais/agregarpais`, pais);
    const mensaje = response.data;
    console.log(mensaje);

    if (mensaje === null) {
      Swal.fire({
        text: "Error insertando registro..",
        icon: "error",
      });
    } else {
      Swal.fire({
        text: "Registro insertado con éxito..",
        icon: "success",
      });

      window.location.href = "/paises";
    }
  };

  return (
    <div>
    

      {/* version2 */}

      <div className="container-fluid">
        {/* <!-- Bread crumb and right sidebar toggle --> */}
        <div className="row page-titles">
          <div className="col-md-5 align-self-center">
            <h3 className="text-themecolor"> Formulario Agregar Pais</h3>
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
                    <label className="col-md-12">Continente</label>
                    <div className="col-md-12">
                      <input
                        type="text"
                        placeholder=""
                        className="form-control form-control-line"
                        onChange={(e) => setContinente(e.target.value)}
                      />
                    </div>
                  </div>

                                
                  <div className="form-group">
                    <div className="col-sm-12">
                      <button className="btn btn-success" onClick={handleAdd}>
                        Agregar
                      </button>{" "}
                      <Link to="/paises" className="btn btn-secondary">
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

export default FormAddPais;
