import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from './layout/Footer/Footer';
import Navbar from './layout/Navbar/Navbar';
import Home from './layout/home/Home';
import Images from './modules/files/Images/Images';
import People from './modules/people/People';
import NotFound from './pages/NotFound';
import SetInterval from "./modules/functions/SetInterval";

function App() {
  return (
    <>
    <Navbar />
    <div className='mb-4'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/images" element={<Images />} />
          <Route path="people" element={<People />} />
          <Route path="set-interval" element={<SetInterval />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
    <Footer />
    </>
  );
}

export default App;
