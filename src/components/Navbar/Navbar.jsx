import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './navbar.css'
import DetailOrden from '../DetailOrden/DetailOrden';

const  Navbar = () => {

  const menu = useSelector(state => state.menu)
  
  function handleClick() {
    window.localStorage.removeItem('logged')
    window.localStorage.setItem('myMenu', JSON.stringify(menu))
    window.location.href = "http://localhost:3000/"
  }

  const [showInfoMenu, setShowInfoMenu] = useState(false)

  return (
    <nav className="navbar container ">
        <div className="logo">
            <img className="col-md-8" src="https://firebasestorage.googleapis.com/v0/b/tienda-f9328.appspot.com/o/Logo%20emprendimiento%20manuscrito%20rosa%20(1).png?alt=media&token=be7a126a-c60a-40d3-8455-ac814e7079dd" alt="" />
        </div>
        <div>
        <DetailOrden showInfoMenu={showInfoMenu} setShowInfoMenu={setShowInfoMenu} />
        <button className='btn boton-modal' onClick={() => setShowInfoMenu(true)}>Ver mi pedido</button>
        </div>
        <div className="col-md-2 text-end">
        {localStorage.getItem('logged') && 
          <button  className="btnLogout" onClick={() => handleClick()}>Log out</button>
        }
        </div>
      
    </nav>
  )
}

export default Navbar