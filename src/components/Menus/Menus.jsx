import React from 'react';
import './menus.css'
import { useDispatch, useSelector } from 'react-redux';
import {  deleteMenu, removeVegan } from '../../Redux/actions';




const Menus = () => {

  const menu = useSelector((state) => state.menu)
  const dispatch = useDispatch()

  return (
    <div className='container'>
        {menu.length > 0 ?
          <>
            {menu.map(food =>
              <div className='cardPedido'>
                <div className="contentPedido">

                  <img src={food.image} className='cardPedidoImg' alt=""/>
                  <p className='foodTitle'>{food.title}</p>

                  <button className='btn btn-danger' onClick={() => {
                  dispatch(deleteMenu(food.id))
                  dispatch(removeVegan(food.id)) }}>
                    <i className="bi bi-trash"></i></button>
                </div>
              </div>
            )}
          </>
          :
          <p> </p>
        }
      </div>
      
  )
};

export default Menus;