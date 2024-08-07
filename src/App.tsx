
import './App.css'
import Hero from './components/Hero'
import Work from './components/mywork'
import Resources from './components/resources'
import 'remixicon/fonts/remixicon.css'
import Tech from './components/subcomponents/tech'



function App() {

  
  return (
    <>
     <section className='flex lg:max-h-screen overflow-hidden rounded-md'>
        <div className='lg:grid grid-cols-1 lg:grid-cols-2 relative xl:w-4/5 grid-rows-12 w-full '>
          <Hero />
          <Work />  
          <Tech />
        </div>
        <div className='h-screen hidden xl:inline-block overflow-y-scroll lg:w-1/5'>
          <Resources/>
        </div>
      </section>
    </>
  )
}

export default App
