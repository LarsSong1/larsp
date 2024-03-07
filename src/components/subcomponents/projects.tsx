import labicon from '../../assets/img/iconos/lab.svg'
import emailicon from '../../assets/img/iconos/cemailjs.svg'
import nexticon from '../../assets/img/iconos/cnextjs.svg'
import tailwindicon from '../../assets/img/iconos/ctailwind.svg'
import markdownicon from '../../assets/img/iconos/cmarkdowsvg.svg'
import eyeicon from '../../assets/img/iconos/eye.svg'
import github from '../../assets/img/iconos/github.svg'
import reacticon from '../../assets/img/iconos/creact.svg'
import bootstrapicon from '../../assets/img/iconos/cbootstrap.svg'
import jsicon from '../../assets/img/iconos/cjs.svg'
import htmlicon from '../../assets/img/iconos/chtml.svg'
import djangoicon from '../../assets/img/iconos/cdjango.svg'
import pythonicon from '../../assets/img/iconos/cpython.svg'
import sqliteicon from '../../assets/img/iconos/csqlite.svg'
import rnicon from '../../assets/img/iconos/crn.svg'
import nbicon from '../../assets/img/iconos/cnbase.svg'
import pocketicon from '../../assets/img/iconos/cpb.svg'
import fleticon from '../../assets/img/iconos/cflet.svg'
import expoicon from '../../assets/img/iconos/cexpo.svg'
import diablito from '../../assets/img/iconos/diablito3.svg'

import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from 'swiper/modules'
import "swiper/css";


function Projects() {
  const datapr = [
    {
      title: 'Blog TopTen Products',
      description: 'Blog Sobre los Productos mas destacados de distintas plataformas de E-commerce',
      github: 'https://github.com/LarsSong1/blogLarson',
      view: 'https://toptenproducts.netlify.app/',
      tecnologias: [nexticon, markdownicon, emailicon, tailwindicon],
    },
    {
      title: 'Barberia',
      description: 'Este aplicativo web fue un trabajo desarrollado para estudiantes de una universidad, consta de funcionalidad de registro de usuarios, agendamiento de citas y filtrado de barberias disponibles en la ciudad',
      github: 'https://github.com/LarsSong1/barberia_app',
      view: 'https://drive.google.com/drive/folders/1r5FTuqVdDo7vU4QEXnKTqOLKCXl6E723?usp=drive_link',
      tecnologias: [djangoicon, pythonicon, sqliteicon, tailwindicon],
    },
    {
      title: 'Tyres & M',
      description: 'Es un aplicativo web desarrollado para un negocio familiar de reencauche y respuestos para vehiculos y motociletas',
      github: 'https://github.com/LarsSong1/tyres-M',
      view: 'https://tyres-m.netlify.app/',
      tecnologias: [reacticon, jsicon, bootstrapicon, htmlicon],
    },

    {
      title: 'Conferencias App móvil',
      description: 'Es una aplicacion móvil creada para recopílar información sobre conferencias realizadas en una universidad en un mismo sitio, en este caso en la app',
      github: 'https://github.com/LarsSong1/uneMeeting',
      view: 'https://drive.google.com/file/d/13WfRU3AWWBK28sckXK8KjCZkfUnjA5ol/view',
      tecnologias: [expoicon, rnicon, nbicon, pocketicon],
    },
    {
      title: 'App de calculos con flet',
      description: 'Es una aplicacion móvil que calcula el factor de friccion de una tuberia y el diseño del mismo',
      github: 'https://drive.google.com/file/d/10ee_AqpPGOAU9-77VPBHG08XkPuxIoig/view',
      tecnologias: [fleticon, pythonicon],
      view: 'https://drive.google.com/file/d/10ee_AqpPGOAU9-77VPBHG08XkPuxIoig/view'
    }

  ]
  return (
    <div className="p-[3vh] w-full border-2 border-[#826FA5] border-l-0 border-b-2 overflow-hidden relative h-4/6 bg-white">
      <div className='flex justify-end flex-row-reverse items-center pb-[2vh]'>
        <h1 className='font-["Rubik"] font-bold ms-[0.5vw] title-shadow'>Proyectos</h1>
        <img src={labicon} className='w-[1.5vw]' alt="icono-svg" />
      </div>
      <img src={diablito} className='absolute right-[10vw] top-[2vh] w-[5vw] h-[5vw] z-20' alt="diablito-image" />
      <Swiper
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        direction='vertical'
        spaceBetween={10} // Espacio entre diapositivas
        style={{ height: "35vh" }}
        slidesPerView={2}

      >

        {datapr.map((proy, key) => (


          <SwiperSlide>
            <div key={key} className='border-[#826FA5] rounded-md p-[1vw] border-2 h-[15vh] relative'>
              <div className='flex justify-between '>
                <h2 className='font-["Rubik"] font-bold text-[1.7vh]'>{proy.title}</h2>
                <div className='flex items-center '>
                  <a href={proy.view} target='_blank' className='me-5'>
                    <img src={eyeicon} className='w-[1.5vw]' alt="eye-icon" />
                  </a>
                  <a href={proy.github} target='_blank'>
                    <img src={github} className='w-[1.2vw]' alt="github-icon" />
                  </a>
                </div>
              </div>
              <p className='font-light font-["Roboto Mono"] tracking-widest text-[1.5vh]'>{proy.description}</p>
              <div className=' mt-5 gap-2 absolute bottom-3 right-3 flex'>

                {proy.tecnologias.map((techn, key) => (
                  <div key={key} className='w-[4vh] h-[4vh] rounded-md border-2 border-black border-opacity-60 flex justify-center items-center'>
                    <img src={techn} className='w-[2.9vh]' alt="techonologies" />
                  </div>
                ))}

              </div>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>

    </div>
  )
}

export default Projects