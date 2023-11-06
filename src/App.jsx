import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Detail from './Routes/Detail';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>   
        <Route path="/Favs" element={<Favs/>}/> 
        <Route path="detalles/:id" element={<Detail/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
