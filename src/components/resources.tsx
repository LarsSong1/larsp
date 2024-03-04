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
          description: 'Collecion de elementos UI para inspiración',
          link: 'https://stacksorted.com/'
        }
      ]
    },
    {
      title: 'Diseño',
      content: [

        {
          title: 'Wicked Blocks',
          description: 'Collecion gratuita de componentes hechos en TailwindCss',
          link: 'https://wickedblocks.dev/'
        },
        {
          title: 'Shots',
          description: 'Crea Mockups para redes sociales o webs de forma sencilla y rápida',
          link: 'https://shots.so/'
        }
      ]
    },

  ]
  return (
    <div className='p-10 pb-0 '>
      <div className='flex'>
        <img src={resources} className='w-[1.8rem]' alt="icono-svg" />
        <h1 className='font-["Rubik"] font-bold text-xl ms-2'>Recursos</h1>
      </div>
      <div className=' max-w-[15rem] overflow-hidden'>
        {dataResources.map((resour) => (
          <div className='mb-5'>
            <h2 className='font-["Rubik"] font-bold text-lg mb-2 mt-8'>{resour.title}</h2>
            {
              resour.content.map((content) => (
                <div className='mb-3'>
                  <div className='bg-black flex p-4 justify-between rounded-t-md'>
                    <h2 className='text-white font-bold font-["Rubik"]'>{content.title}</h2>
                    <a href={content.link} target='_blank'>
                      <img src={arrow} className='w-13 h-13' alt="arrow-icon" />
                    </a>
                  </div>
                  <div className='shadow-md shadow-black p-2 rounded-b-md'>
                    <p className='font-light text-sm font-["Roboto Mono"]'>
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