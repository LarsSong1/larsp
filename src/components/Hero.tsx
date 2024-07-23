
import Aboutme from './aboutme'
import Header from './Header'

function Hero() {
  return (
    <div className='flex flex-col w-full rounded-md lg:overflow-hidden h-full lg:row-span-8 row-span-3 '>
        <Header/>
        <Aboutme/>
    </div>
  )
}

export default Hero