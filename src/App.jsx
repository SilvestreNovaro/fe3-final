import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextGlobal } from "./Components/utils/global.context";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Error from "./Routes/Error"

function App() {
  return (
      <div className="App">
        <ContextGlobal.Provider>
          <Navbar/>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer/>
        </ContextGlobal.Provider>
      </div>
  );
}

export default App;
