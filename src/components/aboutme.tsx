import avatar from '../assets/img/avatar.svg'
import diablito from '../assets/img/iconos/diablito2.svg'
import personicon from '../assets/img/iconos/person.svg'
import whatsapp from '../assets/img/iconos/whatsapp.svg'
import linkedin from '../assets/img/iconos/linkedin.svg'
import instagram from '../assets/img/iconos/instagram.svg'

function Aboutme() {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center border-t-2  border-[#826FA5] border-2 border-l-0 border-r-[#826FA5] h-3/5 '>
            <div className=' border-4  lg:w-7/12 left-0  h-full lg:p-[2em] p-5 relative w-full'>
                <div className='flex justify-end flex-row-reverse items-center pb-[2vh] '>
                    <h1 className='font-["Rubik"] font-bold ms-2 title-shadow'>Sobre Mi</h1>
                    <img src={personicon}  className='icon-purple' alt="icono-svg" />
                </div>
                <p className='font-["Roboto Mono"] text-[1.5vh] tracking-widest '>
                    <span className='border-b-4 border-[#4976ED] font-bold font-["Roboto Mono"]'>Freelancer</span> apasionado con una mentalidad de aprendizaje continuo.

                </p>
                <p className='mt-5 font-["Roboto Mono"] text-[1.5vh] tracking-widest'>Me encanta experimentar con nuevas tecnologías y tendencias en la industria tech para crear experiencias digitales impactantes y funcionales</p>
                <div className='flex items-end flex-col justify-end mt-[1vh]'>
                    <h3 className='text-black font-bold text-[1.8vh] '>Contáctame</h3>
                    <ul className='mt-[1vh] flex gap-[0.5vw]'>
                        <li className='w-[4vh] h-[4vh] border-black border-opacity-50 border-2 rounded-md flex justify-center items-center'>
                            <a href="https://www.instagram.com/larson_dev_/" target='_blank'>
                                <img src={instagram } className='w-[2.5vh]'  alt="instagram-logo" />
                            </a>
                        </li>
                        <li className='w-[4vh] h-[4vh] border-black border-opacity-50 border-2 rounded-md flex justify-center items-center'>
                            <a href="https://wa.me/5930967470880?text= Hola, podrias ayudarme proporcionandome info sobre los servicios de Desarrollo Web que ofreces" target='_blank'>
                                <img src={whatsapp}   className='w-[2.5vh]' alt="whatsapp-logo" />
                            </a>
                        </li>
                        <li className='w-[4vh] h-[4vh] border-black border-opacity-50 border-2 rounded-md flex justify-center items-center'>
                            <a href="https://www.linkedin.com/in/jair-alejandro-gavilanez-panchana-443a7b239/" target='_blank'>
                                <img src={linkedin}   className='w-[2.5vh]' alt="linkdein-logo" />
                            </a>
                        </li>
                    </ul>

                </div>
                <img src={diablito} className='absolute bottom-[-0.8vw] left-[-0.8vw] h-[10vh] ' alt="Doodles-image" />
            </div>
            <div className=' border-2 w-5/12  border-l-[#826FA5] border-r-[#826FA5] h-full relative flex justify-center items-center '>
                <div className='rounded-3xl overflow-hidden h-[34vh] w-[13vw] relative'>
                    <img src={avatar} className='w-full object-cover ' alt="Me" />
                    <p className='absolute bottom-0 font-["Rubik"] bg-[#826FA5] text-white rounded-md w-full text-center text-[2vh]'>Jair Alejandro</p>
                </div>

            </div>
        </div>
    )
}

export default Aboutme