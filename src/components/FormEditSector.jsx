import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const FormEditSector = () => {

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { id } = useParams();

  const GetSector = async () => {
    const response = await axios.get(`/api/sector/obtenersector/${id}`);
    const mensaje = response.data;

    setNombre(mensaje[0].nombre);
    setDescripcion(mensaje[0].descripcion);
    
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    //    const token = data.Token;
    //    localStorage.setItem("Token", token);

    const sector = { nombre, descripcion };
    console.log(sector);
    const response = await axios.put(
      `/api/sector/actualizarsector/${id}`,sector
    );
    const respuesta = response.data;
    console.log(respuesta);

    if (respuesta === null) {
      Swal.fire({
        text: "Error actualizando registro..",
        icon: "error",
      });
    } else {
      Swal.fire({
        text: "Registro actualizado con éxito..",
        icon: "success",
      });

      window.location.href = "/sectores";
    }
  };

  useEffect(() => {
    GetSector();
    
  }, []);
  return (
    <div>

<div className="container-fluid">
        {/*  */}
        <div className="row page-titles">
          <div className="col-md-5 align-self-center">
            <h3 className="text-themecolor"> Formulario Editar Sector</h3>
          </div>
        </div>
        {/* <!-- Row --> */}
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
                        value={nombre}
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
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                      ></textarea>
                    </div>
                  </div> 
              
                 
                  <div className="form-group">
                    <div className="col-sm-12">
                      <button className="btn btn-success" onClick={handleEdit}>
                       Editar
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
        {/* <!-- Row --> */}
      </div>

    </div>
  )
}

export default FormEditSector