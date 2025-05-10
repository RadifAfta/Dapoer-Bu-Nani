import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom mx-auto">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">Nasi Uduk Bu Nani</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-accent font-medium">Beranda</Link>
            <Link to="/menu" className="hover:text-accent font-medium">Menu</Link>
            <Link to="/how-to-order" className="hover:text-accent font-medium">Cara Order</Link>
            <Link to="/testimonials" className="hover:text-accent font-medium">Testimoni</Link>
            <Link to="/location" className="hover:text-accent font-medium">Lokasi</Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pb-4">
              <Link 
                to="/" 
                className="hover:text-accent font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>
              <Link 
                to="/menu" 
                className="hover:text-accent font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
              <Link 
                to="/how-to-order" 
                className="hover:text-accent font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Cara Order
              </Link>
              <Link 
                to="/testimonials" 
                className="hover:text-accent font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Testimoni
              </Link>
              <Link 
                to="/location" 
                className="hover:text-accent font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Lokasi
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;