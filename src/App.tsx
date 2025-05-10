import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import MenuDetail from './pages/MenuDetail';
import HowToOrder from './pages/HowToOrder';
import Testimonials from './pages/Testimonials';
import Location from './pages/Location';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:id" element={<MenuDetail />} />
            <Route path="/how-to-order" element={<HowToOrder />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/location" element={<Location />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;