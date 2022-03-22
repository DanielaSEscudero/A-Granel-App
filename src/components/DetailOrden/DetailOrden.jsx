import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import Menus from '../Menus/Menus';
import { centaveToDolar, menuStats } from '../../Redux/actions'
import './detailOrden.css'

const DetailOrden = ({ showInfoMenu, setShowInfoMenu }) => {

    const [realMenu, setRealMenu] = useState({ price: '', time: '' })
    const menu = useSelector((state) => state.menu)

    useEffect(() => {
        menu.length > 0 && setRealMenu(menuStats(menu))
    }, [menu])

    return (
        <AnimatePresence >
            {showInfoMenu &&
                menu.map((index) =>
                    <div className='modalcontainer' key={index} >
                        <motion.div
                            className='modalinfo'
                        >
                            <div className='modalmenubody'>
                                <button onClick={() => setShowInfoMenu(false)} className='close-modal'><i className="bi bi-x-circle"></i></button>
                                <div className='infomenu-container'>
                                    <h1 className='tumenu'>Tu Pedido</h1>
                                    <div>
                                    <Menus />
                                    </div>
                                    <div className='info-row infoTotales'>
                                        <h5>Totales: </h5>
                                        <img className='logos-veggie' src={require('../../images/puntosdesalud.png')}alt=""/>
                                        <label>{realMenu.healthScore} pts</label>
                                        <img className='logos-veggie' src={require('../../images/tiempo.png')} alt=""/>
                                        <label>{realMenu.time} min</label>
                                        <img className='logos-veggie' src={require('../../images/precio.png')} alt=""/>
                                        <label>$ {centaveToDolar(realMenu.price)}</label>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )
            }
        </AnimatePresence >
    )
}

export default DetailOrden