import './App.css';
import Navbar from './components/Navbar.jsx'
import Preview from './components/Preview.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Statement from './components/Statement.jsx'
import Contact from './components/Contact.jsx'
import Donate from './components/Donate.jsx'
import Footer from './components/Footer.jsx'

/* myBibleJourney components:
  Optimized flow for eBook launch:
  1. Home - Hook with Christ-centered value proposition
  2. Preview - Show what they're getting
  3. About - Author testimony & mission
  4. Statement - Theological grounding for discerning readers
  5. Contact - Easy outreach
  6. Donate - Optional charitable giving
*/
function App() {
  return (
    <div className="App bg-gray-900 overflow-x-hidden">
      <Navbar/>
      <Home/>
      <Preview/>
      <About/>
      <Statement/>
      <Contact/>
      <Donate/>
      <Footer/>
    </div>
  );
}

export default App;
