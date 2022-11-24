import React from 'react';
import './home.css'
import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';


import { capitalize, getFood, nextPage, previousPage, searchRecipe } from '../../Redux/actions';
import Navbar from '../Navbar/Navbar';
import CardList from '../Cards/CardList/CardList';
import DetailMenu from '../DetailMenu/DetailMenu';
import Footer from '../Footer/Footer';



function Home() {

  const food = useSelector((state) => state.allFood)
  const page = useSelector((state) => state.page)

  const [showModal, setShowModal] = useState(false)
  const [showRecipe, setShowRecipe] = useState({})
  const dispatch = useDispatch()

  
  function siguiente() {
    if (page / 8 < food.length / 8 - 1) {
      dispatch(nextPage())
    } else return page
  }
  

  return (
    <>
    <div >
      <Navbar /> 
      <div className="container bodyHome">
        <DetailMenu showModal={showModal} setShowModal={setShowModal} showRecipe={showRecipe} />

        <Formik
          initialValues={{ text: '' }}
          validate={(valores) => {
            let errores = {}
            if (valores.text.length <= 2 && valores.text.length > 0) {
              errores.text = 'ingresa 3 caracteres'
            }
            return errores
          }}
          onSubmit={(valores) => {
            dispatch(searchRecipe(capitalize(valores.text)))
          }}
        >
          {({ handleChange, errors, touched, handleSubmit, handleBlur, values }) => (
            <form className="search row" onSubmit={handleSubmit}>
              <h1 className="col-md-6 text-center" >Que Queres comer hoy?</h1>
              <div className='containerSearch col-md-6'>
                <input
                className='search-input'
                type='text'
                id='text'
                name='text'
                value={values.text}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Ingresa nombre del plato'
              />
                <button className='btnSearch' type='submit'><i className="bi bi-search"></i></button>
              </div>
                {touched.text && errors.text && <div className='error'>{errors.text}</div>}
            </form>)}
        </Formik>

        <div className='container-button'>
          <button type="button" className="btn btn-outline-secondary" onClick={() => dispatch(previousPage())}><i className="bi bi-caret-left"></i></button>
          <button type="button" className="btn btn-outline-secondary" onClick={siguiente}><i className="bi bi-caret-right"></i></button>
        </div>

        <div
          className='row-md container-fluid'>
          <CardList food={food.slice(page, page + 8)} setShowModal={setShowModal} setShowRecipe={setShowRecipe} />
        </div>  
      </div>
  </div>
  <Footer/>
  </>
  )
}

export default Home
