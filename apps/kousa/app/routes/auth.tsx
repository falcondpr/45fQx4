import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../ui/Button'

const Auth: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="h-screen relative">
      <div className='bg-[url("/image-auth-header.png")] bg-cover bg-center h-[70%]'></div>
      <div className="absolute bottom-0 right-0 w-full bg-white rounded-tl-[40px] rounded-tr-[40px] px-5 py-9">
        <h3 className="text-3xl font-semibold">
          Empieza a comprar y vender de forma segura
        </h3>
        <p className="text-light-gray mt-3 text-lg">
          Se prima la experiencia del usuario y la seguridad usando nuestro
          sitio
        </p>

        <div className="grid grid-cols-2 mt-6 gap-x-5">
          <Button onClick={() => navigate('/register')}>Crear cuenta</Button>
          <Button variant="light">Ingresar</Button>
        </div>
      </div>
    </div>
  )
}

export default Auth
