import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Intro from './Components/Intro';
import ContactForm from './Components/ContactForm';
import Education from './Components/Education';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='maindiv'>
    <div>
      <Navbar/>
    </div>
    <div className="introbck">
    <Intro/>
    </div>
    <div className="aboutbck"><About/></div>
    <div className='education'>
      <Education/>
    </div>
    <div className='container'>
    <h1 className='text-center'>Contact Me</h1>
        <ContactForm />
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
