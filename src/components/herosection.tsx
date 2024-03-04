
import Aboutme from './aboutme'
import Header from './cabecera'

function Hero() {
  return (
    <div className='flex flex-col w-full row-span-2 rounded-md  overflow-hidden h-4/6 '>
        <Header/>
        <Aboutme/>
    </div>
  )
}

export default Hero