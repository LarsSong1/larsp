import doc from '../CV.pdf'
import diablito from '../assets/img/iconos/diablito1.svg'
import avatar from '../assets/img/avatar.svg'

function Header() {
  return (
    <div className='lg:border-2 lg:border-b-2 lg:border-b-[#826FA5] lg:border-r-[#826FA5] overflow-hidden relative flex lg:w-full lg:justify-around justify-center flex-col-reverse lg:flex-row pt-10 lg:pt-0 h-[30%]'>
      <div className='flex flex-col items-center mx-auto lg:items-start lg:grow lg:pl-9 lg:w-2/6 pl-0 justify-center lg:h-full h-[15px] min-h-[100px] overflow-hidden w-[100px] rounded-full lg:mt-0 mt-4'>
        <img className='relative lg:absolute lg:left-0 w-[150px] lg:min-w-[30%] ' src={avatar} alt="Me" />
      </div>

      <div className='lg:w-4/6 flex flex-col items-center text-start justify-center'>
        <h1 className='font-bold w-full title text-center'>Jair Alejandro Gavilanez</h1>
        <a href={doc} download='Curriculum V' className='flex flex-col' >
          <h5 className='font-["Roboto Mono"] subtitle  font-bold opacity-50'>Descargar CV</h5>
          <i className="ri-arrow-down-fill download-icon bg-green-500 rounded-md mx-auto ps-1 pe-1"></i>
        </a>
      </div>


      <img src={diablito} className='lg:absolute lg:block hidden relative -bottom-4 right-0 h-[5vh] min-h-[50%] ' alt="doodles-image" />

    </div>
  )
}

export default Header