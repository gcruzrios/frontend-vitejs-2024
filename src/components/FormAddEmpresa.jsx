import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const FormAddEmpresa = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [pais, setPais] = useState("");
  const [sector, setSector] = useState("");

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

  const handleAdd = async (e) => {
    e.preventDefault();

    const empresa = { nombre, email, telefono, pais, sector };

    console.log(empresa);

    const response = await axios.post(`/api/empresa/agregarempresa`, empresa);
    const mensaje = response.data;
    console.log(mensaje);

    if (mensaje === null) {
      Swal.fire({
        text: "Error insertando empresa..",
        icon: "error",
      });
    } else {
      Swal.fire({
        text: "Empresa insertada con éxito..",
        icon: "success",
      });

      window.location.href = "/index";
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
            <h3 className="text-themecolor"> Formulario Agregar Empresa</h3>
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
          <div className="col-lg-8 col-xlg-9">
            <div className="card">
              <div className="card-body">
                <form className="form-horizontal form-material mx-2">
                  <div className="form-group">
                    <label className="col-md-12">Nombre</label>
                    <div className="col-md-12">
                      <input
                        type="text"
                        placeholder="Nombre Empresa"
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
                        placeholder="Email Empresa"
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
                    <label className="col-sm-12">Seleccione País</label>
                    <div className="col-sm-12">
                      <select
                        className="form-control form-control-line"
                        onChange={(e) => setPais(e.target.value)}
                      >
                        <option selected>Escoga el País</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Honduras">Honduras</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Panama">Panamá</option>
                        <option value="Mexico">México</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Argentina">Argentina</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-12">Seleccione Sector</label>
                    <div className="col-sm-12">
                      <select
                        className="form-control form-control-line"
                        onChange={(e) => setSector(e.target.value)}
                      >
                        <option selected>Escoga el Sector</option>
                        {sectores.map((sector) => (
                          <option value={sector.nombre}>
                            {sector.nombre}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12">
                      <button className="btn btn-success" onClick={handleAdd}>
                        Agregar
                      </button>{" "}
                      <Link to="/index" className="btn btn-secondary">
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
  );
};

export default FormAddEmpresa;
