
import './App.css'
import Hero from './components/herosection'
import Work from './components/mywork'
import Pricing from './components/pricing'
import Resources from './components/resources'


function App() {

// definir 3 rowss y darle heignt h-35 a cada uno sin rows-span lg:grid-row-3 poner
  return (
    <>
     <section className='flex justify-around '>
        <div className=' lg:h-screen max-w-[100rem] grid grid-cols-1 lg:grid-cols-2 w-full h-full max-h-[60rem]
         place-items-start place-content-start mx-auto grow relative'>
          <Hero />
          <Work />

          <Pricing />
        </div>
        <div className='grow lg:h-screen max-h-[60rem] overflow-y-scroll'>
          <Resources/>
        </div>
      </section>
    </>
  )
}

export default App
