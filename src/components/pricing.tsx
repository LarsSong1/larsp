import docsicon from '../assets/img/iconos/docs.svg'
import planet from '../assets/img/iconos/planet.svg'
import igicon from '../assets/img/iconos/instagram.svg'
import diablito from '../assets/img/iconos/diablito4.svg'
import whatsappicon from '../assets/img/iconos/whatsapp.svg'

function Pricing() {
  return ( 
    <div className="lg:border-[#826AF5] lg:border-2 col-span-2 p-[2em] relative row-span-4">

      <div className='flex'>
        <img src={docsicon} className='icon-purple' alt="icono-svg" />
        <h1 className='font-["Rubik"] font-bold title-shadow ms-2'>Planes</h1>
      </div>
      <div className='lg:px-9  w-full flex gap-10 flex-col lg:flex-row justify-center lg:justify-start'>
        {/* card 1 */}
        <div className='lg:w-2/6  flex flex-col'>
          <div className='w-full flex justify-between items-center'>
            <h1 className='text-[3vh] font-bold font-["Rubik"]'>Starter Web</h1>
            <img src={planet} className='w-[2vw]' alt="planet-icon" />
          </div>
          <p className='font-light tracking-widest text-[1.6vh] font-["Roboto Mono"] mt-[1vh]'>Landing Page o ChatBot personalizados para modelo de negocio</p>
          <h6 className='font-bold font-["Roboto Mono"] self-end text-end text-[1.4vh]'>
            Ideal para pequeños negocios
            <br />
            Atracción hacia un producto o una suscripción

          </h6>
          <div className='flex w-full justify-between mt-4 gap-3'>
            <a href="" className="flex w-2/4 border-black border-2 rounded-md shadow-lg shadow-[#4976ED] h-[5vh] items-center justify-center">
              <img src={igicon} className='h-[3vh] opacity-80' alt="instagram-icon" />
              <p className='ms-2 text-center mb-[0.2vh] font-["Roboto Mono"] text-[1.6vh] font-bold'>Instagram</p>
            </a>
            <a href="" className="flex w-2/4 border-black border-2 rounded-md shadow-lg shadow-[#4976ED] h-[5vh] items-center justify-center">
              <img src={whatsappicon} className='h-[3vh] opacity-80' alt="instagram-icon" />
              <p className='ms-2 text-center mb-[0.2vh] font-["Roboto Mono"] text-[1.6vh] font-bold'>Whatsapp</p>
            </a>

          </div>
        </div>

        {/* card 2 */}

        <div className='lg:w-2/6 flex flex-col'>
          <div className='w-full flex justify-between items-center'>
            <h1 className='text-[3vh] font-bold font-["Rubik"]'>Web Pro</h1>
            <img src={planet} className='w-[2vw]' alt="planet-icon" />
          </div>
          <p className='font-light tracking-widest text-[1.6vh] font-["Roboto Mono"] mt-[1vh]'>Pagina Web profesional personalizada para <br />captar clientes.</p>
          <h6 className='font-bold font-["Roboto Mono"] self-end text-end text-[1.4vh]'>
            Ideal para empresas
            <br />
            Crecimiento exponencial en ventas


          </h6>
          <div className='flex w-full justify-between mt-4 gap-3'>
            <a href="" className="flex w-2/4 border-black border-2 rounded-md shadow-lg shadow-[#4976ED] h-[5vh] items-center justify-center">
              <img src={igicon} className=' h-[3vh] opacity-80' alt="instagram-icon" />
              <p className='ms-2 text-center mb-[0.2vh] font-["Roboto Mono"]  text-[1.6vh] font-bold'>Instagram</p>
            </a>
            <a href="" className="flex w-2/4 border-black border-2 rounded-md shadow-lg shadow-[#4976ED] h-[5vh] items-center justify-center">
              <img src={whatsappicon} className=' h-[3vh]   opacity-80' alt="instagram-icon" />
              <p className='ms-2 text-center mb-[0.2vh] font-["Roboto Mono"] text-[1.6vh]  font-bold'>Whatsapp</p>
            </a>

          </div>
        </div>
      </div>
      <img src={diablito} className='right-[-2.5vw] bottom-[0] absolute w-[16vw] h-[16vh]' alt="doodles-icon" />
    </div>
  )
}

export default Pricing