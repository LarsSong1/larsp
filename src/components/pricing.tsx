import docsicon from '../assets/img/iconos/docs.svg'
import planet from '../assets/img/iconos/planet.svg'
import igicon from '../assets/img/iconos/instagram.svg'
import diablito from '../assets/img/iconos/diablito4.svg'

function Pricing() {
  return ( 
    <div className="border-[#826AF5] border-2  col-span-2 p-10 pb-0 relative row-span-4">

      <div className='flex'>
        <img src={docsicon} className='w-[1.8rem]' alt="icono-svg" />
        <h1 className='font-["Rubik"] font-bold text-xl ms-2'>Precios</h1>
      </div>
      <div className='px-9 mt-4 w-full flex gap-10 lg:flex-nowrap flex-wrap justify-center lg:justify-start'>
        {/* card 1 */}
        <div className='w-[24rem] flex flex-col'>
          <div className='w-full flex justify-between items-center'>
            <h1 className='text-3xl font-bold font-["Rubik"]'>Starter Web</h1>
            <img src={planet} className='h-8 w-8' alt="planet-icon" />
          </div>
          <p className='font-light tracking-widest font-["Roboto Mono"] mt-2'>Landing Page o ChatBot personalizados para modelo de negocio</p>
          <h6 className='font-bold font-["Roboto Mono"] self-end text-end text-sm'>
            Ideal para pequeños negocios
            <br />
            Atracción hacia un producto o una suscripción

          </h6>
          <div className='flex w-full justify-between mt-4 gap-3'>
            <a href="" className="flex w-2/4 border-black border-2 rounded-md shadow-lg shadow-[#4976ED] h-[3rem] items-center justify-center">
              <img src={igicon} className='w-6 h-6 opacity-80' alt="instagram-icon" />
              <p className='ms-2 text-center mb-[1.5px] font-["Roboto Mono"] font-bold'>Instagram</p>
            </a>
            <a href="" className="flex w-2/4 border-black border-2 rounded-md shadow-lg shadow-[#4976ED] h-[3rem] items-center justify-center">
              <img src={igicon} className='w-6 h-6 opacity-80' alt="instagram-icon" />
              <p className='ms-2 text-center mb-[1.5px] font-["Roboto Mono"] font-bold'>Whatsapp</p>
            </a>

          </div>
        </div>

        {/* card 2 */}

        <div className='w-[24rem] flex flex-col'>
          <div className='w-full flex justify-between items-center'>
            <h1 className='text-3xl font-bold font-["Rubik"]'>Web Pro</h1>
            <img src={planet} className='h-8 w-8' alt="planet-icon" />
          </div>
          <p className='font-light tracking-widest font-["Roboto Mono"] mt-2'>Pagina Web profesional personalizada para <br />captar clientes.</p>
          <h6 className='font-bold font-["Roboto Mono"] self-end text-end text-sm'>
            Ideal para empresas
            <br />
            Crecimiento exponencial en ventas


          </h6>
          <div className='flex w-full justify-between mt-4 gap-3'>
            <a href="" className="flex w-2/4 border-black border-2 rounded-md shadow-lg shadow-[#4976ED] h-[3rem] items-center justify-center">
              <img src={igicon} className='w-6 h-6 opacity-80' alt="instagram-icon" />
              <p className='ms-2 text-center mb-[1.5px] font-["Roboto Mono"] font-bold'>Instagram</p>
            </a>
            <a href="" className="flex w-2/4 border-black border-2 rounded-md shadow-lg shadow-[#4976ED] h-[3rem] items-center justify-center">
              <img src={igicon} className='w-6 h-6 opacity-80' alt="instagram-icon" />
              <p className='ms-2 text-center mb-[1.5px] font-["Roboto Mono"] font-bold'>Whatsapp</p>
            </a>

          </div>
        </div>
      </div>
      <img src={diablito} className='right-0 bottom-0 absolute' alt="" />
    </div>
  )
}

export default Pricing