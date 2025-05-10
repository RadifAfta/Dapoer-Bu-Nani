import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-10 pb-6">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Nasi Uduk Bu Nani</h3>
            <p className="mb-4">Masakan rumahan dengan rasa sayang ibu yang mengingatkan Anda pada kehangatan rumah.</p>
            <div className="flex space-x-4">
              <a href="https://wa.me/628123456789" className="text-white hover:text-secondary">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://instagram.com/nasiudukbunani" className="text-white hover:text-secondary">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Menu Kami</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="hover:text-secondary">Menu Harian</Link>
              </li>
              <li>
                <Link to="/how-to-order" className="hover:text-secondary">Cara Order</Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-secondary">Testimoni Pelanggan</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Informasi</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>Jl. Cibubur Raya No. 123, Jakarta Timur</span>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2" />
                <span>Senin–Sabtu, 08.00–13.00 WIB</span>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-2" />
                <span>+62 812-3456-789</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p>&copy; {currentYear} Nasi Uduk Bu Nani. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;