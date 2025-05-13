import { useState, useEffect } from 'react';
import { FaSearch, FaWhatsapp, FaUtensils, FaCrown, FaHeart, FaFire } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import FoodCard from '../components/ui/FoodCard';
import CategoryBadge from '../components/ui/CategoryBadge';
import { menuItems } from '../data/menuData';
import type { MenuItem } from '../data/menuData';

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulasi loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setMenuData(menuItems);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredMenu = menuData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    if (filter === 'bestseller') return matchesSearch && item.isBestseller;
    if (filter === 'favorite') return matchesSearch && item.isFavorite;
    if (filter === 'spicy') return matchesSearch && item.isSpicy;
    
    return matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-secondary-warm from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-gray-900/90"></div>
          <img 
            src="src/assets/food-bg-menu.jpg" 
            alt="Food background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              title="Menu Spesial Hari Ini" 
              subtitle="Nikmati kelezatan hidangan rumahan autentik dari dapur kami"
              centered
            />
          </motion.div>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto mt-10"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Cari menu favorit Anda..."
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent shadow-lg text-lg"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <FaSearch className="absolute left-5 top-5 text-gray-500 text-xl" />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Filter Categories */}
      <div className="container mx-auto px-4 -mt-6 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white backdrop-blur-lg rounded-2xl p-4 shadow-lg"
        >
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <CategoryBadge 
              active={filter === 'all'} 
              onClick={() => setFilter('all')}
            >
              <FaUtensils /> Semua Menu
            </CategoryBadge>
            <CategoryBadge 
              active={filter === 'bestseller'} 
              onClick={() => setFilter('bestseller')}
            >
              <FaCrown /> Bestseller
            </CategoryBadge>
            <CategoryBadge 
              active={filter === 'favorite'} 
              onClick={() => setFilter('favorite')}
            >
              <FaHeart /> Favorit
            </CategoryBadge>
            <CategoryBadge 
              active={filter === 'spicy'} 
              onClick={() => setFilter('spicy')}
            >
              <FaFire /> Pedas
            </CategoryBadge>
          </div>
        </motion.div>
      </div>

      {/* Menu Items */}
      <div className="container mx-auto px-4 py-12">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent"></div>
          </div>
        ) : filteredMenu.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredMenu.map(item => (
              <FoodCard key={item.id} item={item} />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16 bg-gray-800/50 rounded-2xl"
          >
            <img 
              src="/api/placeholder/200/200" 
              alt="Empty plate" 
              className="mx-auto h-32 w-32 opacity-50"
            />
            <p className="text-xl text-gray-300 mt-4">Tidak ada menu yang sesuai dengan pencarian Anda.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setFilter('all');
              }}
              className="mt-4 px-6 py-2 bg-accent text-white rounded-full hover:bg-accent/80 transition-colors"
            >
              Reset Pencarian
            </button>
          </motion.div>
        )}

        {/* WhatsApp Order Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-xl text-gray-500">Ingin memesan menu spesial yang tidak terlihat di sini?</p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/628123456789?text=Halo%20Bu%20Nani%2C%20saya%20mau%20tanya%20menu%20hari%20ini"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all"
          >
            <FaWhatsapp className="mr-3" size={24} /> Hubungi Kami via WhatsApp
          </motion.a>
        </motion.div>
      </div>
      
      {/* Bottom Fixed Cart Button (Optional) */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 120 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-accent text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Menu;