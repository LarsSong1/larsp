
import './App.css'
import Hero from './components/herosection'
import Work from './components/mywork'
import Pricing from './components/pricing'
import Resources from './components/resources'


function App() {

// definir 3 rowss y darle heignt h-35 a cada uno sin rows-span lg:grid-row-3 poner
  return (
    <>
     <section className='flex lg:flex-row flex-col max-w-screen max-h-screen'>

        <div className='lg:grid grid-cols-1 lg:grid-cols-2 
           relative h-screen w-4/5  grid-rows-12'>
          <Hero />
          <Work />
          <Pricing />
        </div>
        <div className='h-screen overflow-y-scroll w-1/5'>
          <Resources/>
        </div>
      </section>
    </>
  )
}

export default App
