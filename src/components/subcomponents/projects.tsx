import labicon from '../../assets/img/iconos/lab.svg'


function Projects() {
  return (
    <div className="h-[29rem]  p-10 w-full border-2 border-[#826FA5] border-l-0 border-b-2 ">
      <div className='flex justify-end flex-row-reverse items-center pb-10 '>
        <h1 className='font-["Rubik"] font-bold text-xl ms-2'>Proyectos</h1>
        <img src={labicon} className='w-[1.8rem]' alt="icono-svg" />
      </div>
    </div>
  )
}

export default Projects