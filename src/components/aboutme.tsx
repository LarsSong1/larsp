import avatar from '../assets/img/avatar.svg'
import diablito from '../assets/img/iconos/diablito2.svg'
import personicon from '../assets/img/iconos/person.svg'
import whatsapp from '../assets/img/iconos/whatsapp.svg'
import linkedin from '../assets/img/iconos/linkedin.svg'
import instagram from '../assets/img/iconos/instagram.svg'

function Aboutme() {
    return (
        <div className='flex justify-center items-center h-4/6  border-t-2  border-[#826FA5] border-4 border-l-0'>
            <div className=' border-4  w-7/12 left-0  h-full p-10 relative'>
                <div className='flex justify-end flex-row-reverse items-center pb-10 '>
                    <h1 className='font-["Rubik"] font-bold text-xl ms-2'>Sobre Mi</h1>
                    <img src={personicon} className='w-[1.8rem]' alt="icono-svg" />
                </div>
                <p className='font-["Roboto Mono"] tracking-wide'>
                    <span className='border-b-4 border-[#4976ED] font-bold'>Diseñador y desarrollador web</span> apasionado con una mentalidad de aprendizaje continuo.

                </p>
                <p className='mt-5'>Me encanta experimentar con nuevas tecnologías y tendencias en la industria tech para crear experiencias digitales impactantes y funcionales</p>
                <div className='flex items-end flex-col justify-end mt-10'>
                    <h3 className='text-black font-bold '>Contáctame</h3>
                    <ul className='mt-2 flex gap-2'>
                        <li className='w-[35px] h-[35px] border-black border-opacity-50 border-2 rounded-md flex justify-center items-center'>
                            <a href="">
                                <img src={whatsapp} alt="whatsapp-logo" />
                            </a>
                        </li>
                        <li className='w-[35px] h-[35px] border-black border-opacity-50 border-2 rounded-md flex justify-center items-center'>
                            <a href="">
                                <img src={linkedin} alt="linkdein-logo" />
                            </a>
                        </li>
                        <li className='w-[35px] h-[35px] border-black border-opacity-50 border-2 rounded-md flex justify-center items-center'>
                            <a href="">
                                <img src={instagram} alt="instagram-logo" />
                            </a>
                        </li>
                    </ul>

                </div>
                <img src={diablito} className='absolute bottom-[-1rem] left-[-1rem]' alt="Doodles-image" />
            </div>
            <div className=' border-4 w-5/12 border-l-[#826FA5] h-full relative flex justify-center items-center '>
                <div className='rounded-3xl overflow-hidden h-5/6 mx-10 relative'>
                    <img src={avatar} className='w-full object-cover hidden' alt="Me" />
                    <p className='absolute bottom-0 font-["Rubik"] bg-[#826FA5] text-white rounded-md w-full text-center'>Jair Alejandro</p>
                </div>  
                
            </div>
        </div>
    )
}

export default Aboutme