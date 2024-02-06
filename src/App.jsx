import { useState } from 'react'

import Index from "./pages/Index";
import Login from './pages/Login';
import NotFound from './pages/Error404';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListEmpresas from "./pages/ListEmpresas";
import ListUsuarios from "./pages/ListUsuarios";
import ListContactos from "./pages/ListContactos";

function App() {
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} exact>
            {" "}
          </Route>
          <Route path="/index" element={< Index />} exact>
            {" "}
          </Route>
          <Route path="/empresas" element={<ListEmpresas/>} exact>
            {" "}
          </Route>
          <Route path="/usuarios" element={<ListUsuarios/>} exact>
            {" "}
          </Route>
          <Route path="/contactos" element={<ListContactos/>} exact>
            {" "}
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </BrowserRouter>
  )
}

export default App
