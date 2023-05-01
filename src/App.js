import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Topbar from './Component/Topbar';
import About from './Component/About';
import Service from './Component/Service';
import Package from './Component/Package';
import Footer from './Component/Footer';
import Booking from './Component/Booking';
import Destination from './Component/Destination';
import Contact from './Component/Contact';
import Home from './Component/Home';
import BackToTop from './Component/BackToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/service' element={<Service />} />
          <Route exact path='/Package' element={<Package />} />
          <Route exact path='/Destination' element={<Destination />} />
          <Route exact path='/Contact' element={<Contact />} />
        </Routes>
        <Booking />
        <BackToTop/>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
