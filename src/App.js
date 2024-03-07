import './App.css';
import Navbar from './components/Navbar.jsx'
import Preview from './components/Preview.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Donate from './components/Donate.jsx'
import Footer from './components/Footer.jsx'

/* myBibleJourney components:
home-page
about
contents
buy book
contact (inquiries)
donate
*/
function App() {
  return (
    <div className="App bg-gray-900">
      <Navbar/>
      <Home/>
      <Preview/>
      <About/>
      <Contact/>
      <Donate/>
      <Footer/>
    </div>
  );
}

export default App;
