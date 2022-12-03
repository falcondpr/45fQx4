import React from 'react'

const Auth: React.FC = () => {
  return (
    <div className="h-screen relative">
      <div className='bg-[url("/image-auth-header.png")] h-[70%]'></div>
      <div className="absolute bottom-0 right-0 w-full bg-white rounded-tl-[40px] rounded-tr-[40px] px-5 py-7">
        <h3 className="text-3xl font-semibold">
          Empieza a comprar y vender de forma segura
        </h3>
        <p className="text-light-gray mt-3 text-lg">
          Se prima la experiencia del usuario y la seguridad usando nuestro
          sitio
        </p>

        <div className="grid grid-cols-2">
          <button></button>
        </div>
      </div>
    </div>
  )
}

export default Auth
