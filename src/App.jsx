import './App.css'
import Home from './Home.jsx'
import Tutor from './Tutor.jsx'
import Review from './Review.jsx'
import Footer from './Footer.jsx'
import Services from './Services.jsx'
import Accord from './Accord.jsx'


function App() {
  return (
    <div className='overflow-x-hidden'>
      <Home/>
      <Services/>
      <Tutor/>
      <Accord/>
      <Review/>
      <Footer/>
    </div>
  )
}
export default App
