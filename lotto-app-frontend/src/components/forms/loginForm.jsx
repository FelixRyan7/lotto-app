"use client"
import React from 'react'
import { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const LoginForm = () => {

    const [error, setError] = useState(null);
    

    const [loginFormData, setLoginFormData] = useState({
        username: '',
        password: '',
      });

      

      const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData((prevState) => ({
          ...prevState,
          [name]: value, // Actualizar el campo correspondiente
        })); 
        console.log(loginFormData)
      };

      const handleLoginSubmit = async (e) => {
        e.preventDefault();
      }

  return (
    <div className="bg-blur px-8 mx-auto md:w-2/3 py-10 rounded-xl">
        <h2 className="text-2xl font-bold text-ba text-center mb-6">Iniciar Sesion</h2>
        {error && <p className="text-red-500 uppercase font-semibold text-xs mb-5">{error}</p>} {/* Mostrar mensaje de error */}
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-4 h-20 flex items-center gap-3 relative">
          <div className="text-dark"><AccountCircleOutlinedIcon /></div>
          <div className="relative w-full">
            <input
              type="text"
              id="username"
              name="username"
              value={loginFormData.username}
              onChange={handleLoginChange}
              required
              className="mb-2 p-2 w-full border-b-2 focus:border-primary border-gray-800 bg-transparent focus:outline-none peer text-base"
            />
            <label
              htmlFor="username"
              className={`absolute left-2 top-2 text-gray-800 text-sm transition-all duration-200 ease-in-out peer-focus:top-[-10px] peer-focus:left-0 peer-focus:text-sm peer-focus:text-primary ${
                loginFormData.username
                  ? "top-[-10px] left-0 text-sm text-gray-800"
                  : "top-2 text-sm text-gray-800"
              }`}
            >
              Usuario
            </label>
            </div>
          </div>
          
          <div className="mb-6 h-20 flex items-center gap-3 relative">
  <div className="text-dark">
    <LockOutlinedIcon />
  </div>

  <div className="relative w-full">
    {/* Input */}
    <input
      type="password"
      id="password"
      name="password"
      value={loginFormData.password}
      onChange={handleLoginChange}
      required
      className={`p-2 w-full border-b-2 focus:border-primary border-dark bg-transparent focus:outline-none peer text-base`}
    />

    {/* Label animado */}
    <label
      htmlFor="password"
      className={`absolute left-2 top-2 text-dark transition-all duration-200 ease-in-out peer-focus:top-[-10px] peer-focus:left-0 peer-focus:text-sm peer-focus:text-primary ${
        loginFormData.password
          ? "top-[-10px] left-0 text-sm "
          : "top-2 text-sm text-dark"
      }`}
    >
      Contraseña
    </label>
  </div>
</div>

          
          <div className=" ">
            <button type="submit" className="w-full py-3 bg-secondary text-background font-semibold rounded-md focus:outline-none hover:bg-gradient-to-l hover:scale-105 transition-transform">Iniciar sesión</button>
          </div>
          <div className="flex justify-between mt-5 mx-2">
          <p className='cursor-pointer'>Aun no tienes cuenta?</p>
          <p className="text-sm cursor-pointer">Has olvidado la contraseña?</p>
          </div>
        </form>
      </div>
  )
}

export default LoginForm