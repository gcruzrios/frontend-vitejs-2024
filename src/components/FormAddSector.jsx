import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const FormAddSector = () => {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
 

  const handleAdd = async (e) => {
    e.preventDefault();

    const sector = { nombre, descripcion };

    console.log(sector);

    const response = await axios.post(`/api/sector/agregarsector`, sector);
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

      window.location.href = "/sectores";
    }
  };
  return (
    <div>
<div className="container-fluid">
        {/* <!-- ============================================================== -->
                <!-- Bread crumb and right sidebar toggle -->
                <!-- ============================================================== --> */}
        <div className="row page-titles">
          <div className="col-md-5 align-self-center">
            <h3 className="text-themecolor"> Formulario Agregar Sector</h3>
          </div>
        </div>
        {/* <!-- ============================================================== -->
                <!-- End Bread crumb and right sidebar toggle -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Start Page Content -->
                <!-- ============================================================== -->
                <!-- Row --> */}
        <div className="row">
          {/* <!-- Column --> */}

          {/* <!-- Column -->
                    <!-- Column --> */}
          <div className="col-lg-10 col-xlg-10">
            <div className="card">
              <div className="card-body">
                <form className="form-horizontal form-material mx-2">
                  <div className="form-group">
                    <label className="col-md-12">Nombre</label>
                    <div className="col-md-12">
                      <input
                        type="text"
                        placeholder="Nombre Sector"
                        className="form-control form-control-line"
                        onChange={(e) => setNombre(e.target.value)}
                      />
                    </div>
                  </div>
              
               

                  <div className="form-group">
                    <label className="col-md-12">Descripción</label>
                    <div className="col-md-12">
                      <textarea
                        rows="5"
                        className="form-control form-control-line"
                        onChange={(e) => setDescripcion(e.target.value)}
                      ></textarea>
                    </div>
                  </div> 
              
                 
                  <div className="form-group">
                    <div className="col-sm-12">
                      <button className="btn btn-success" onClick={handleAdd}>
                        Agregar
                      </button>
                      {" "}
                      <Link to="/sectores" className="btn btn-secondary">
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
        {/* <!-- Row -->
                <!-- ============================================================== -->
                <!-- End PAge Content -->
                <!-- ============================================================== --> */}
      </div>
        
    </div>
  )
}

export default FormAddSector