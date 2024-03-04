import docsicon from '../assets/img/iconos/docs.svg'

function Pricing() {
  return (
    <div className=" bottom-0  w-full p-10">
      <div className="h-full p-10 w-full border-2 border-[#826FA5] border-l-0">
        <div className='flex justify-end flex-row-reverse items-center pb-10 '>
          <h1 className='font-["Rubik"] font-bold text-xl ms-2'>Proyectos</h1>
          <img src={docsicon} className='w-[1.8rem]' alt="icono-svg" />
        </div>
      </div>
    </div>
  )
}

export default Pricing