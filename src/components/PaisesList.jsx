import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const PaisesList = () => {
  const [pais, setPais] = useState([]);



 


  const peticionGet = async () => {
    //console.log("en petición get")         
    await axios.get("/api/pais/obtenerpaises").then((response) => {
      setPais(response.data);
     // console.log(empresas);
    });


  };

  useEffect(() => {
   
    peticionGet();
  }, []);


  const eliminar_completo = async (id) => {
    const respuesta = await axios.delete(`api/pais/borrarpais/${id}`);
    peticionGet();
  }  
  const eliminar = async (id) => {


    Swal.fire({
      title: 'Está seguro de borrar el registro?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Borrar',
      denyButtonText: `No borrar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        eliminar_completo(id);
        Swal.fire('Registro borrado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('El Registro no ha sido borrado', '', 'info')
      }
    })
    
   
  };


  return (
    <div>
   

   {/* //version 2  */}

 {/* <!-- Begin Page Content --> */}
 <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-2 text-gray-800">Paises</h1>
       

        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables Paises

            </h6>
            <Link to="/addpais" className="btn btn-primary float-end">
                  Agregar Pais
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
                    <th>Continente</th>
                    
                    <th>Acciones</th>
                  </tr>
                </thead>
                
                <tbody>
                {pais.map((record) => ( 
										<tr  key={record._id}>
											<td>{record.nombre}</td>
                      <td>{record.continente}</td>
											
											<td className="table-action">
												<Link to={`/editpais/${record._id}`} className="btn btn-info">Editar</Link>{" "}
												<button className="btn btn-danger" onClick={()=>eliminar(record._id)}> Borrar</button>
											</td>
										</tr>
									   ))} 
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PaisesList;
