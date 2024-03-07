
import './App.css'
import Hero from './components/herosection'
import Work from './components/mywork'
import Pricing from './components/pricing'
import Resources from './components/resources'


function App() {


  return (
    <>
     <section className='flex max-w-screen max-h-screen '>

        <div className='lg:grid grid-cols-1 lg:grid-cols-2 
           relative h-screen lg:w-4/5 grid-rows-12  w-full min-h-[56.25rem]'>
          <Hero />
          <Work />
          <Pricing />
        </div>
        <div className='h-screen overflow-y-scroll w-1/5 min-h-[56.25rem]'>
          <Resources/>
        </div>
      </section>
    </>
  )
}

export default App
