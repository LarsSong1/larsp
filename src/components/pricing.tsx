import docsicon from '../assets/img/iconos/docs.svg'

function Pricing() {
  return (
    <div className="border-[#826AF5] border-2 w-full col-span-2 h-[17rem] p-10 pb-0">

      <div className='flex'>
        <img src={docsicon} className='w-[1.8rem]' alt="icono-svg" />
        <h1 className='font-["Rubik"] font-bold text-xl ms-2'>Precios</h1>
      </div>

    </div>
  )
}

export default Pricing