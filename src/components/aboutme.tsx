import diablito from '../assets/img/iconos/diablito2.svg'


function Aboutme() {
    return (
        <div className='flex justify-center items-center lg:border-[#826FA5]  border-l-0 border-r-2 border-r-[#826FA5] h-[70%]'>
            <div className=' left-0  h-full lg:p-[2em] p-5 mt-5 lg:mt-0 relative w-full'>
                <div className='flex justify-start items-center '>
                    <i className="ri-user-fill icon-size text-green-700"></i>
                    <h1 className='font-["Rubik"] font-bold subtitle ms-2 title-shadow'>Sobre Mi</h1>
                </div>
                <p className='font-["Roboto Mono"] text-content tracking-wide '>
                    <span className='border-b-4 border-green-500 font-bold text-content font-["Roboto Mono"]'>Diseñador & Desarrollador Web</span> apasionado con una mentalidad de aprendizaje continuo.

                </p>
                <p className='mt-5 font-["Roboto Mono"] tracking-wide text-content'>Me encanta experimentar con nuevas tecnologías y tendencias en la industria tech para crear experiencias digitales impactantes y funcionales</p>
                <div className='flex items-end flex-col justify-end mt-[1vh]'>
                    <h3 className='text-black font-bold text-content'>Contáctame</h3>
                    <ul className='mt-[1vh] flex gap-[1em] lg:gap-[0.5em]'>
                        <li className='mini-box border-black border-opacity-50 border-2 rounded-md flex justify-center items-center ps-1 pe-1'>
                            <a href="https://www.instagram.com/larson_dev_/" target='_blank'>
                                <i className="ri-instagram-line icon-size"></i>
                            </a>
                        </li>
                        <li className='mini-box border-black border-opacity-50 border-2 rounded-md flex justify-center items-center ps-1 pe-1'>
                            <a href="https://wa.me/5930967470880?text= Hola, podrias ayudarme proporcionandome info sobre los servicios de Desarrollo Web que ofreces" target='_blank'>
                                <i className="ri-whatsapp-line icon-size"></i>
                            </a>
                        </li>
                        <li className='mini-box border-black border-opacity-50 border-2 ps-1 pe-1 rounded-md flex justify-center items-center'>
                            <a href="https://www.linkedin.com/in/jair-alejandro-gavilanez-panchana-443a7b239/" target='_blank'>
                            <i className="ri-linkedin-box-line icon-size"></i>
                            </a>
                        </li>
                    </ul>

                </div>
                <img src={diablito} className='absolute rotate-45 transition-all ease-in-out -bottom-5 lg:left-[-1.5vw] left-[-1em] duration-300 delay-150 h-[5vh] min-h-[40%]' alt="Doodles-image" />
            </div>
        </div>
    )
}

export default Aboutme