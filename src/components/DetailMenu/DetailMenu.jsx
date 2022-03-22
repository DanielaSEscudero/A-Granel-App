import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import swal from 'sweetalert';
import './detailMenu.css'
import { useSelector, useDispatch } from 'react-redux'

import { addMenu, centaveToDolar, isVegan } from '../../Redux/actions'


const ModalInfo = ({ showModal, setShowModal, showRecipe }) => {

    const menu = useSelector((state) => state.menu)
    const vegano = useSelector((state) => state.isVegan)
    const noVegano = useSelector((state) => state.notVegan)
    const dispatch = useDispatch()

    function handleClick(e) {
        if (menu.length < 4) {
            if (menu.some(j => j.title === e.title) === true) {
                return swal({
                    title: "Repetido",
                    text: "ya ingresaste este plato",
                    icon: "warning",
                    button: "Ok",
                })
            }
            else {
                if (e.vegan === true) {
                    if (vegano.length > 1) {
                        return swal({
                            title: "Lleno",
                            text: "solo puedes ingresar dos plato veganos",
                            icon: "warning",
                            button: "Ok",
                        })
                    } else
                        dispatch(isVegan(e))
                    dispatch(addMenu(e))
                    setShowModal(false)
                }
                else if (e.vegan === false) {
                    if (noVegano.length > 1) {
                        return swal({
                            title: "Lleno",
                            text: "solo puedes ingresar dos plato",
                            icon: "warning",
                            button: "Ok",
                        })
                    } else
                        dispatch(isVegan(e))
                    dispatch(addMenu(e))
                    setShowModal(false)
                }
            }
        }
        else {
            swal({
                title: "Lleno",
                text: "Yu pedido esta Completo",
                icon: "warning",
                button: "Ok",
            })
        }
    }

    return (
        <AnimatePresence >
            {showModal &&
                <div className='modalcontainer'>
                    <motion.div className='modalinfo'>
                        <div className='modalbody'>
                            <button onClick={() => setShowModal(false)} className='close-modal'><i className="bi bi-x-circle"></i></button>
                            <img src={showRecipe.image} className='modal-img' alt=""/>
                            <div className='info-container p-3'>
                                <div className='titleInfo'>
                                    <h5 className='titleModal'>{showRecipe.title}</h5>
                                    <h6 className='price'>$ {centaveToDolar(showRecipe.pricePerServing)}</h6>
                                </div>
                                
                                <div className='info-row'>
                                    <img className='logos-veggie' src={require('../../images/puntosdesalud.png')} alt="" />
                                    <label>{showRecipe.healthScore} pts</label>
                                    <img className='logos-veggie' src={require('../../images/tiempo.png')} alt="" />
                                    <p>{showRecipe.readyInMinutes} min</p>
                                    <img className='logos-veggie' src={require('../../images/personas.png')} alt=""/>
                                    <p>{showRecipe.servings} per.</p>
                                </div>
                                <div className='logosCard'>
                                    {showRecipe.glutenFree === true && <img className="logos-veggie logosVe" src={require('../../images/glutenfree-logo.png')} alt=""/>}
                                    {showRecipe.vegetarian === true && <img className="logos-veggie logosVe" src={require('../../images/vegetarian-logo.png')} alt=""/>}
                                    {showRecipe.vegan === true && <img className="logos-veggie logosVe" src={require('../../images/vegan-logo.png')} alt=""/>}
                                </div>
                            </div>
                            <button className='btn agregar-menu' onClick={() => handleClick(showRecipe)}>Pedir</button>
                        </div>
                    </motion.div>
                </div>
            }
        </AnimatePresence>
    )
}

export default ModalInfo