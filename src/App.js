import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Iphone from "./components/Iphone/Iphone";
import Samsung from "./components/Samsung/Samsung";
import Ipad from "./components/Ipad/Ipad";
import Laptop from "./components/Laptop/Laptop";
import Device from "./components/Device/Device";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        {/* <Laptop/> */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<About />} />
          <Route  exact  path='/fixed-device' element={<Device/>}/>
      <Route  exact path='/contact' element={<Contact/>}/>
      <Route  exact path='/iphone-smartdevice' element={<Iphone/>} />
      <Route  exact path='/samsung-smartdevice' element={<Samsung/>}/>
      <Route  exact path='/ipad' element={<Ipad/>} />
      <Route  exact path='/computer-repair' element={<Laptop/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
