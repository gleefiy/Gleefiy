// import logo from './logo.svg';
import './App.css';
import Blog from './components/Blogs/Blog';
import CaseStudies from './components/CaseStudies/CaseStudies';
import Contact from './components/Contact/Contact';
import HomePage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Prices/Pricing';
import Services from './components/Services/Services';
import Test from './components/Test';
import ValueProposition from './components/ValueProposition/ValueProposition';
import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ValueProposition/> */}
      {/* <Services /> */}
      {/* <Pricing /> */}
      {/* <CaseStudies /> */}
      {/* <Blog /> */}
      {/* <Contact/> */}
      <Router>
      

      <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route path='/Gleefiy' element={<HomePage/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/value' element={<ValueProposition/>} />
      <Route path='/pricing' element={<Pricing/>} />
      <Route path='/case' element={<CaseStudies/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/test' element={<Test/>} />
    
      </Routes>
      </Router>
      
          </div>
  );
}

export default App;
