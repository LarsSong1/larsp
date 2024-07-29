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
import tyresImg from '../../assets/img/tyres&M.webp'
import unemeetingImg from '../../assets/img/unemeeting.webp'
import blogTopImg from '../../assets/img/blogtopten.webp'
import fletCalculosImg from '../../assets/img/fletcalculos.webp'

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
      img: blogTopImg,
      gradientT: '#FFFF21',
      gradientB: '#E2AC08',

    },
    // {
    //   title: 'Barberia',
    //   description: 'Este aplicativo web fue un trabajo desarrollado para estudiantes de una universidad, consta de funcionalidad de registro de usuarios, agendamiento de citas y filtrado de barberias disponibles en la ciudad',
    //   github: 'https://github.com/LarsSong1/barberia_app',
    //   view: 'https://drive.google.com/drive/folders/1r5FTuqVdDo7vU4QEXnKTqOLKCXl6E723?usp=drive_link',
    //   tecnologias: [djangoicon, pythonicon, sqliteicon, tailwindicon],
    // },
    {
      title: 'Tyres & M',
      description: 'Es un aplicativo web desarrollado para un negocio familiar de reencauche y respuestos para vehiculos y motociletas',
      github: 'https://github.com/LarsSong1/tyres-M',
      view: 'https://tyres-m.netlify.app/',
      tecnologias: [reacticon, jsicon, bootstrapicon, htmlicon],
      img: tyresImg,
      gradientT: '#FFE891',
      gradientB: '#E85A38',
    },

    {
      title: 'Conferencias App móvil',
      description: 'Es una aplicacion móvil creada para recopílar información sobre conferencias realizadas en una universidad en un mismo sitio, en este caso en la app',
      github: 'https://github.com/LarsSong1/uneMeeting',
      view: 'https://drive.google.com/file/d/13WfRU3AWWBK28sckXK8KjCZkfUnjA5ol/view',
      tecnologias: [expoicon, rnicon, nbicon, pocketicon],
      img: unemeetingImg,
      gradientT: '#00CAFD',
      gradientB: '#005073'
    },
    {
      title: 'App de calculos con flet',
      description: 'Es una aplicacion móvil que calcula el factor de friccion de una tuberia y el diseño del mismo',
      github: 'https://drive.google.com/file/d/10ee_AqpPGOAU9-77VPBHG08XkPuxIoig/view',
      tecnologias: [fleticon, pythonicon],
      view: 'https://drive.google.com/file/d/10ee_AqpPGOAU9-77VPBHG08XkPuxIoig/view',
      img: fletCalculosImg,
      gradientT: '#FFBCFF',
      gradientB: '#FF65D3'
    }

  ]
  return (
    <div className="p-[1em] w-full lg:border-[#826FA5] border-l-0 overflow-hidden relative h-full bg-white">
      <div className='flex justify-end flex-row-reverse items-center pb-[2vh] mb-4'>
        <h1 className='font-["Rubik"] font-bold ms-[0.5vw] title-shadow'>Proyectos</h1>
        <img src={labicon} className='icon-purple' alt="icono-svg" />
      </div>
      <img src={diablito} className='absolute right-[10vw] animate-bounce hover:animate-spin duration-200 top-[1em]  lg:h-[6em] z-20' alt="diablito-image" />
      <Swiper
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

        breakpoints={
          {
            1280: {
              direction: 'vertical',
              slidesPerView: 1
            },

            200:{
              direction: 'horizontal',
              slidesPerView:1
            }
          }
        }
      
        spaceBetween={5} // Espacio entre diapositivas
        style={{ height: "26em" }}
        

      >

        {datapr.map((proy, key) => (


          <SwiperSlide>
            <div key={key} className='border-[#826FA5] rounded-md border-2 proyects-stack relative h-full overflow-hidden'>
              <div className='flex justify-between  p-[1em] '>
                <h2 className='font-["Rubik"] font-bold subtitle'>{proy.title}</h2>
                <div className='flex items-center '>
                  <a href={proy.view} target='_blank' className='me-5'>
                    <img src={eyeicon} className='mini-icon-purple' alt="eye-icon" />
                  </a>
                  <a href={proy.github} target='_blank'>
                    <img src={github} className='mini-icon-purple ' alt="github-icon" />
                  </a>
                </div>
              </div>
              <p className=' font-["Roboto Mono"] tracking-wide pt-0 pb-0 p-[1em] text-content'>{proy.description}</p>
              <div
                className="w-full h-full rounded-lg flex justify-center items-center"
                style={{
                  background: `linear-gradient(to bottom, transparent 10%, ${proy.gradientT}, ${proy.gradientB} 40%)`,
                }}
              >
                <img className='h-[320px] hover:scale-125 ease-in-out duration-150' src={proy.img} alt={proy.title} />
              </div>
              <div className=' mt-5 gap-2 absolute bottom-3 right-3 flex bg-black p-2 rounded-md'>

                {proy.tecnologias.map((techn, key) => (
                  <div key={key} className='mini-box rounded-md border-2 border-neutral-800 p-1 border-opacity-60 flex justify-center items-center hover:scale-125 hover:animate-bounce ease-in-out duration-150'>
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