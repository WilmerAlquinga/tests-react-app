import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from './layout/Footer/Footer';
import Home from './layout/home/Home';
import { Navbar } from './layout/Navbar/Navbar';
import Images from './modules/files/Images/Images';
import SetInterval from "./modules/functions/SetInterval";
import People from './modules/people/People';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
    <div className='mb-4'>
      <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/files/images" element={<Images />} />
          <Route path="/people" element={<People />} />
          <Route path="/functions/set-interval" element={<SetInterval />} />
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
    <Footer />
    </>
  );
}

export default App;
