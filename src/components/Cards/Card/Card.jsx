import React from 'react';
import './card.css'

function Card({title, image, healthScore, vegan, vegetarian, glutenFree, price }) {
  return(
    <div className="contenedor"> 
      <div className="card" >
        <img className='card-img-top food-img' src={image} alt=""/>
        <div className='card-body'>
          <h6 className='card-title title'>{title}</h6>
          <p>$ {price}</p>
          <p>Puntos de salud: {healthScore}</p>
          <div className='card-text'>
            {glutenFree === true && <img className="logos-veggie" src={require('../../../images/glutenfree-logo.png')} alt="" />}
            {vegetarian === true && <img className="logos-veggie" src={require('../../../images/vegetarian-logo.png')} alt=""/>}
            {vegan === true && <img className="logos-veggie" src={require('../../../images/vegan-logo.png')} alt=""/>}
          </div>
        </div>
      </div>
    </div>
)}

export default Card;