import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const DataTableSectores = () => {

  const [sectores, setSectores] = useState([]);

  const peticionGet = async () => {
    //console.log("en petición get")
    await axios.get("/api/sector/obtenersectores").then((response) => {
      setSectores(response.data);
      // console.log(empresas);
    });
  };

  useEffect(() => {
    //console.log("En el effect")
    peticionGet();
  }, []);

  const eliminar_completo = async (id) => {
    const respuesta = await axios.delete(`api/sector/borrarsector/${id}`);
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
        Swal.fire("Registro borrado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El registro no ha sido borrado", "", "info");
      }
    });
  };
  return (
    <div>
      {/* <!-- Begin Page Content --> */}
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-2 text-gray-800">Sectores de Negocio</h1>
       

        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables Sectores

            </h6>
            <Link to="/addsector" className="btn btn-primary float-end">
                  Agregar Sector
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
                 
                    <th>Resumen</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                
                <tbody>
                {sectores.map((sector) => (
                  <tr key={sector._id}>
                    <td>{sector.nombre}</td>
                    <td>{sector.descripcion}</td>
                    <td><Link
                          to={`/editsector/${sector._id}`}
                          className="btn btn-info"
                        >
                          Editar
                        </Link>{" "}
                        <button
                          className="btn btn-danger"
                          onClick={() => eliminar(sector._id)}
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

export default DataTableSectores;
