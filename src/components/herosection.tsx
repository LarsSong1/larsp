
import Aboutme from './aboutme'
import Header from './cabecera'

function Hero() {
  return (
    <div className='flex flex-col w-full rounded-md lg:overflow-hidden h-full row-span-8 '>
        <Header/>
        <Aboutme/>
    </div>
  )
}

export default Hero