
import logo from '../assets/img/logo.svg';
import download from '../assets/img/iconos/download.svg'
import doc from '../CV.pdf'
import diablito from '../assets/img/iconos/diablito1.svg'

function Header() {
  return (
    <div className='border-4 border-b-2 border-b-[#826FA5] border-r-[#826FA5] overflow-hidden relative flex w-full justify-around h-[15rem]' >
      <div className='flex flex-col items-start grow pl-9 justify-center'>

        <img src={logo} className='object-contain w-full object-left h-[9rem]' alt="logotipo" />

        <h6 className='text-center font-["Rubik"] font-light pl-14 tracking-widest pb-8'>Diseñador & Desarrollador <br /> Web</h6>
      </div>
      <div className='self-center flex items-center grow'>
        <a href={doc} download='Curriculum V' className='flex items-center' >
          <h5 className='font-["Roboto Mono"] font-bold opacity-50 text-xl'>Descargar CV</h5>
          <img src={download}
            className='mx-auto pl-2 '
            alt="download-icon" />

        </a>
        <img src={diablito} className='absolute bottom-[-1rem] right-9 h-[5rem]' alt="doodles-image" />
      </div>

    </div>
  )
}

export default Header