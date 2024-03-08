
import logo from '../assets/img/logo.svg';
import download from '../assets/img/iconos/download.svg'
import doc from '../CV.pdf'
import diablito from '../assets/img/iconos/diablito1.svg'

function Header() {
  return (
    <div className='lg:border-4 lg:border-b-2 lg:border-b-[#826FA5] lg:border-r-[#826FA5] overflow-hidden relative flex lg:w-full lg:justify-around justify-center lg:h-2/5 flex-col lg:flex-row h-[350px] ' >
      <div className='flex flex-col items-start lg:grow lg:pl-9  pl-0 justify-center h-full'>

        <img src={logo} className='object-contain w-full lg:object-left object-center lg:h-4/6 h-2/6' alt="logotipo" />

        <h6 className='text-center lg:text-xl text-md font-["Roboto Mono"] font-light lg:self-start self-center lg:pl-[2vw] pl-0 tracking-widest pb-8'>Diseñador & Desarrollador <br /> Web</h6>
      </div>

      <a href={doc} download='Curriculum V' className='flex self-center me-0 lg:me-20 items-center justify-center flex-col lg:flex-row h-[20px] relative bottom-12 lg:bottom-0' >
        <h5 className='font-["Roboto Mono"] font-bold opacity-50 lg:text-lg text-md'>Descargar CV</h5>
        <img src={download}
          className='mx-auto pl-[0.5vh] h-[5vh] w-[5vh]'
          alt="download-icon" />

      </a>

      <img src={diablito} className='lg:absolute relative bottom-2 lg:bottom-[-1.5rem] right-0 lg:right-[1rem] lg:h-[5.8rem] h-[90px]' alt="doodles-image" />

    </div>
  )
}

export default Header