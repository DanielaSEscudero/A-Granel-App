import React from 'react'
import './inicio.css'

import Login from '../Login/Login'


const Inicio = () => {
  return (
    <div className="containerSaludo">
      <div className="inicio col-md-4">
        <h1 className="saludo text-center">Bienvenidos</h1>
        <img src="https://firebasestorage.googleapis.com/v0/b/tienda-f9328.appspot.com/o/Logo%20emprendimiento%20manuscrito%20rosa.png?alt=media&token=23703646-a42d-4568-9b1a-f5d78720caa4" alt="" />
      </div>
      <div className="col-md-6">
        < Login />
      </div>
      
    </div>
  )
}
export default Inicio
