import download from '../assets/img/iconos/download.svg'
import doc from '../CV.pdf'
import diablito from '../assets/img/iconos/diablito1.svg'
import avatar from '../assets/img/avatar.svg'

function Header() {
  return (
    <div className='lg:border-2 lg:border-b-2 lg:border-b-[#826FA5] lg:border-r-[#826FA5] overflow-hidden relative flex lg:w-full lg:justify-around justify-center lg:h-2/5 flex-col lg:flex-row h-[350px]' >
      <div className='flex flex-col items-start lg:grow lg:pl-9 w-2/6 pl-0 justify-center h-full'>
        <img className='absolute left-0 w-[150px] min-w-[30%]' src={avatar} alt="Me" />
      </div>

      <div className=' w-4/6 flex flex-col items-center text-start justify-center'>
        <h2 className='font-bold text-[2vw] w-full text-center'>Jair Alejandro Gavilanez</h2>
        <a href={doc} download='Curriculum V' className='' >
          <h5 className='font-["Roboto Mono"] text-[1vw] font-bold opacity-50 text-md'>Descargar CV</h5>
          <img src={download}
            className='mx-auto mt-2 h-[4vh] bg-green-600 rounded-md '
            alt="download-icon" />
        </a>
      </div>


      <img src={diablito} className='lg:absolute relative -bottom-4 right-0 h-[5vh] min-h-[50%]' alt="doodles-image" />

    </div>
  )
}

export default Header