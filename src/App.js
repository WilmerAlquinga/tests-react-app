import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
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

function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/images" element={<Images />} />
        <Route path="people" element={<People />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
