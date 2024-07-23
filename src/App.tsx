
import './App.css'
import Hero from './components/Hero'
import Work from './components/mywork'
import Pricing from './components/pricing'
import Resources from './components/resources'


function App() {

  
  return (
    <>
     <section className='flex min-h-[2000px] lg:min-h-0 lg:max-h-[100vh] overflow-hidden rounded-md'>

        <div className='lg:grid grid-cols-1 lg:grid-cols-2 relative h-screen  xl:w-4/5 grid-rows-12  w-full '>
          <Hero />
          <Work />  
          <Pricing />
        </div>
        <div className='h-screen hidden xl:inline-block overflow-y-scroll lg:w-1/5'>
          <Resources/>
        </div>
      </section>
    </>
  )
}

export default App
