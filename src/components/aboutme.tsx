import diablito from '../assets/img/iconos/diablito2.svg'
import personicon from '../assets/img/iconos/person.svg'
import whatsapp from '../assets/img/iconos/whatsapp.svg'
import linkedin from '../assets/img/iconos/linkedin.svg'
import instagram from '../assets/img/iconos/instagram.svg'

function Aboutme() {
    return (
        <div className='flex justify-center items-center lg:border-[#826FA5]  border-l-0 border-r-[#826FA5] h-3/5'>
            <div className=' left-0  h-full lg:p-[2em] p-5 mt-5 lg:mt-0 relative w-full'>
                <div className='flex justify-end flex-row-reverse items-center pb-[2vh] '>
                    <h1 className='font-["Rubik"] font-bold ms-2 title-shadow'>Sobre Mi</h1>
                    <img src={personicon}  className='icon-purple' alt="icono-svg" />
                </div>
                <p className='font-["Roboto Mono"] text-second tracking-widest '>
                    <span className='border-b-4 border-[#4976ED] font-bold font-["Roboto Mono"]'>Freelancer</span> apasionado con una mentalidad de aprendizaje continuo.

                </p>
                <p className='mt-5 font-["Roboto Mono"] text-second tracking-widest'>Me encanta experimentar con nuevas tecnologías y tendencias en la industria tech para crear experiencias digitales impactantes y funcionales</p>
                <div className='flex items-end flex-col justify-end mt-[1vh]'>
                    <h3 className='text-black font-bold title-second'>Contáctame</h3>
                    <ul className='mt-[1vh] flex gap-[1em] lg:gap-[0.5em]'>
                        <li className='mini-box border-black border-opacity-50 border-2 rounded-md flex justify-center items-center'>
                            <a href="https://www.instagram.com/larson_dev_/" target='_blank'>
                                <img src={instagram } className='icon'  alt="instagram-logo" />
                            </a>
                        </li>
                        <li className='mini-box border-black border-opacity-50 border-2 rounded-md flex justify-center items-center'>
                            <a href="https://wa.me/5930967470880?text= Hola, podrias ayudarme proporcionandome info sobre los servicios de Desarrollo Web que ofreces" target='_blank'>
                                <img src={whatsapp}   className='icon' alt="whatsapp-logo" />
                            </a>
                        </li>
                        <li className='mini-box border-black border-opacity-50 border-2 rounded-md flex justify-center items-center'>
                            <a href="https://www.linkedin.com/in/jair-alejandro-gavilanez-panchana-443a7b239/" target='_blank'>
                                <img src={linkedin}   className='icon' alt="linkdein-logo" />
                            </a>
                        </li>
                    </ul>

                </div>
                <img src={diablito} className='absolute rotate-45 transition-all ease-in-out lg:rotate-0 lg:bottom-[-0.8vw] lg:left-[-0.8vw] lg:h-[7em] left-[-1em] duration-300 delay-150' alt="Doodles-image" />
            </div>
        </div>
    )
}

export default Aboutme