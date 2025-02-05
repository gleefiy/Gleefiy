// import logo from './logo.svg';
import './App.css';
import Blog from './components/Blogs/Blog';
import CaseStudies from './components/CaseStudies/CaseStudies';
import Contact from './components/Contact/Contact';
import HomePage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Prices/Pricing';
import Services from './components/Services/Services';
import ValueProposition from './components/ValueProposition/ValueProposition';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <HomePage />
      {/* <ValueProposition/> */}
      {/* <Services /> */}
      {/* <Pricing /> */}
      {/* <CaseStudies /> */}
      {/* <Blog /> */}
      {/* <Contact/> */}
          </div>
  );
}

export default App;
