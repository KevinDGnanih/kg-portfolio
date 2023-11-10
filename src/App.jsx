import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks,
Hero, Navbar, Tech, Works, StarsCanvas } from './components';


// App is a functional component that renders the entire application
const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <div className='realtive z-0'>
          <Works />
          <StarsCanvas />
        </div>
        <div className='relative z-0'>

        </div>
      </div>
    </BrowserRouter>
  )
}

// Export the App component
export default App;
