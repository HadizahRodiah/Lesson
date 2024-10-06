import './App.css'
import Home from './Home.jsx'
import Tutor from './Tutor.jsx'
import Review from './Review.jsx'
import Footer from './Footer.jsx'
import Class from './Class.jsx'
import ClassHead from './ClassHead.jsx'


function App() {
  return (
    <div className='overflow-x-hidden'>
      <Home/>
      <Tutor/>
      <ClassHead/>
      <Class/>
      <Review/>
      <Footer/>
    </div>
  )
}
export default App
