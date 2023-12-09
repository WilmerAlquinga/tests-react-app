import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layout/Footer/Footer';
import Navbar from './layout/Navbar/Navbar';
import Images from './modules/files/Images/Images';
import People from './modules/people/People';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Images />} />
        <Route index element={<Images />} />
        <Route path="people" element={<People />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
