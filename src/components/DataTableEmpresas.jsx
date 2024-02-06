import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const DataTable = () => {

  const [empresas, setEmpresas] = useState([]);

  const peticionGet = async () => {
    //console.log("en petición get")
    await axios.get("/api/empresa/obtenerempresas").then((response) => {
      setEmpresas(response.data);
      // console.log(empresas);
    });
  };

  useEffect(() => {
    //console.log("En el effect")
    peticionGet();
  }, []);

  const eliminar_completo = async (id) => {
    const respuesta = await axios.delete(`api/empresa/borrarempresa/${id}`);
    peticionGet();
  };
  const eliminar = async (id) => {
    Swal.fire({
      title: "Está seguro de borrar el registro?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Borrar",
      denyButtonText: `No borrar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        eliminar_completo(id);
        Swal.fire("Empresa borrada!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("La empresa no ha sido borrado", "", "info");
      }
    });
  };
  return (
    <div>
      {/* <!-- Begin Page Content --> */}
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-2 text-gray-800">Empresas</h1>
       

        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables Empresas

            </h6>
            <Link to="/addempresa" className="btn btn-primary float-end">
                  Agregar Empresa
            </Link>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Email</th>
                    <th>Pais</th>
                    <th>Sector</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                
                <tbody>
                {empresas.map((empresa) => (
                  <tr key={empresa._id}>
                    <td>{empresa.nombre}</td>
                    <td>{empresa.telefono}</td>
                    <td>{empresa.email}</td>
                    <td>{empresa.pais}</td>
                    <td>{empresa.sector}</td>
                    <td><Link
                          to={`/editempresa/${empresa._id}`}
                          className="btn btn-info"
                        >
                          Editar
                        </Link>{" "}
                        <button
                          className="btn btn-danger"
                          onClick={() => eliminar(empresa._id)}
                        >
                          {" "}
                          Borrar
                        </button></td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.container-fluid --> */}
    </div>
  );
};

export default DataTable;
