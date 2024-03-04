
import Aboutme from './aboutme'
import Header from './cabecera'

function Hero() {
  return (
    <div className='flex flex-col w-full rounded-md  overflow-hidden '>
        <Header/>
        <Aboutme/>
    </div>
  )
}

export default Hero