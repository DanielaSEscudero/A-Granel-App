import { Formik } from 'formik';
import React, { useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './login.css'


const Login = () => {

    //const menu = useSelector((state) => state.menu)

    useEffect(() => {
        if(localStorage.getItem('logged')){window.location.href = 'http://localhost:3000/home'}
    },[])



    return (
        <div className='login-body'>
            <div className='background-image'>
                <div className='container login-box'>
                    <h1>Inicia sesion</h1>
                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validate={(valores) => {
                            let errores = {}
                            if (!valores.email) {
                                errores.email = 'Ingrese un correo válido'
                            }
                            if (!valores.password) {
                                errores.password = 'Ingrese una contraseña válida'
                            }
                            return errores
                        }}
                        onSubmit={async (valores) => {
                            await axios.post("http://challenge-react.alkemy.org/", valores)
                                .then(response => {
                                    swal({
                                        title: "Login",
                                        text: "Ingreso Exitoso",
                                        icon: "success",
                                        button: "Ok",
                                    })
                                    window.localStorage.setItem(
                                        'logged', JSON.stringify(response.data)
                                    )
                                    window.location.href = "http://localhost:3000/home"
                                })
                                .catch(error => {
                                    swal({
                                        title: "Hubo un error con tus datos",
                                        text: "Revisa tus datos y vuelvelo a enviar",
                                        icon: "error",
                                        button: "Ok",
                                    })
                                })
                        }}
                    >
                        {({ handleSubmit, errors, touched, handleBlur, handleChange, values }) => (
                            <form onSubmit={handleSubmit} className='form-container'>
                                <div className='input-container'>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        placeholder='Email'
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="form-control"
                                    />
                                    {touched.email && errors.email && <div className='error'>{errors.email}</div>}
                                </div>
                                <div className='input-container'>
                                    <input
                                        type='password'
                                        id='password'
                                        name='password'
                                        placeholder='Password'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="form-control"
                                    />
                                    {touched.password && errors.password && <div className='error'>{errors.password}</div>}
                                </div>
                                <div className="container-btn">
                                <button type="submit" className='btn btnLogin'>Login</button>
                                </div>
                                
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Login