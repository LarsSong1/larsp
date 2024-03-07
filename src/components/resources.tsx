import resources from '../assets/img/iconos/saved.svg'
import arrow from '../assets/img/iconos/arrow.svg'


function Resources() {
  const dataResources = [
    {
      title: 'Inspiración',
      content: [

        {
          title: 'Minimal Gallery',
          description: 'Es una galería en línea que ofrece inspiración para el diseño de sitios web',
          link: 'https://minimal.gallery/'
        },
        {
          title: 'Dark Mode Design',
          description: 'Es una collección de sitios webs con estilo Dark',
          link: 'https://www.darkmodedesign.com/'
        },
        {
          title: 'Awwwards',
          description: 'Sitio que organiza concursos de diseño, ideal para inspiración profesional',
          link: 'https://www.awwwards.com/'
        },
        {
          title: 'Refero',
          description: 'Sitio de diseños para inspiración y maquetas basados en conceptos UX/UI ',
          link: 'https://www.awwwards.com/'
        }
        ,
        {
          title: 'Stack Sorted',
          description: 'Colleción de elementos UI para inspiración',
          link: 'https://stacksorted.com/'
        }
      ]
    },
    {
      title: 'Diseño',
      content: [

        {
          title: 'Wicked Blocks',
          description: 'Collección gratuita de componentes hechos en TailwindCss',
          link: 'https://wickedblocks.dev/'
        },
        {
          title: 'Shots',
          description: 'Crea Mockups para redes sociales o webs de forma sencilla y rápida',
          link: 'https://shots.so/'
        },
        {
          title: 'Landingfolio',
          description: 'Colección de componenetes de tailwindCss, hay componentes gratis tambien',
          link: 'https://www.landingfolio.com/library'
        },
        {
          title: 'React Themes',
          description: 'Colección de plantillas de React Gratis',
          link: 'https://www.landingfolio.com/library'
        },
        {
          title: 'V0',
          description: 'IA que te genera el layout del component que desees tan solo con escribirlo',
          link: 'https://v0.dev/'
        }

      ]
    },

  ]
  return (
    <div className='p-10 pb-0 lg:w-full overflow-hidden '>
      <div className='flex'>
        <img src={resources} className='w-[1.5vw]' alt="icono-svg" />
        <h1 className='font-["Rubik"] font-bold  title-shadow ms-2'>Recursos</h1>
      </div>
      <div className=' w-full overflow-hidden mx-start'>
        {dataResources.map((resour) => (
          <div className='mb-5'>
            <h2 className='font-["Rubik"] font-bold text-lg mb-2 mt-[4vh] text-[2vh] border-b-4 border-black'>{resour.title}</h2>
            {
              resour.content.map((content) => (
                <div className='mb-[1vh]'>
                  <div className='bg-black flex p-4 justify-between rounded-t-md'>
                    <h2 className='text-white font-bold font-["Rubik"] text-[1.8vh]'>{content.title}</h2>
                    <a href={content.link} className='flex items-center' target='_blank'>
                      <img src={arrow} className='w-[1.5vw] h-[1.5vh]' alt="arrow-icon" />
                    </a>
                  </div>
                  <div className='shadow-md shadow-black p-2 rounded-b-md'>
                    <p className='font-light text-[1.6vh] font-["Roboto Mono"]'>
                      {content.description}
                    </p>
                  </div>
                </div>
              ))
            }

          </div>
        ))}

      </div>
    </div>
  )
}

export default Resources