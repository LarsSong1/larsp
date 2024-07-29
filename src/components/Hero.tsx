
import Aboutme from './aboutme'
import Header from './Header'

function Hero() {
  return (
    <div className='flex flex-col w-full rounded-md lg:overflow-hidden mb-2 row-span-8 lg:h-full'>
        <Header/>
        <Aboutme/>
    </div>
  )
}

export default Hero;