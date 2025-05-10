import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCartPlus, FaStar, FaHeart, FaFire, FaShareAlt, FaCrown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data/menuData';
import type { MenuItem } from '../data/menuData';

type PortionSize = 'small' | 'medium' | 'large';
type SpicyLevel = 'mild' | 'medium' | 'hot' | 'extra';

const MenuDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [menuItem, setMenuItem] = useState<MenuItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<PortionSize>('medium');
  const [spicyLevel, setSpicyLevel] = useState<SpicyLevel>('medium');
  const [isLiked, setIsLiked] = useState(false);
  const [relatedItems, setRelatedItems] = useState<MenuItem[]>([]);
  const [showAddedNotification, setShowAddedNotification] = useState(false);

  // Simulasi loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      if (id) {
        const item = menuItems.find(item => item.id === parseInt(id));
        if (item) {
          setMenuItem(item);
          // Get 3 random items for related menu
          const filtered = menuItems.filter(i => i.id !== parseInt(id));
          const randomItems = [...filtered].sort(() => 0.5 - Math.random()).slice(0, 3);
          setRelatedItems(randomItems);
        }
      }
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [id]);

  const handleAddToCart = () => {
    // Simulasi penambahan ke keranjang
    console.log('Added to cart:', {
      ...menuItem,
      quantity,
      size: selectedSize,
      spicyLevel: menuItem?.isSpicy ? spicyLevel : null
    });
    
    // Tampilkan notifikasi
    setShowAddedNotification(true);
    setTimeout(() => setShowAddedNotification(false), 2000);
  };

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const getPortionPriceMultiplier = () => {
    switch (selectedSize) {
      case 'small': return 0.8;
      case 'large': return 1.3;
      default: return 1;
    }
  };

  const calculateTotalPrice = () => {
    if (!menuItem) return 0;
    return menuItem.price * quantity * getPortionPriceMultiplier();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (!menuItem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col justify-center items-center p-4 text-white">
        <img 
          src="/api/placeholder/240/240" 
          alt="Menu not found" 
          className="w-32 h-32 mb-6 opacity-40"
        />
        <h2 className="text-2xl font-bold mb-4">Menu Tidak Ditemukan</h2>
        <p className="text-gray-300 mb-8 text-center">Maaf, menu yang Anda cari tidak tersedia atau telah dihapus.</p>
        <button 
          onClick={() => navigate('/menu')}
          className="bg-accent hover:bg-accent/80 text-white px-8 py-3 rounded-full flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Kembali ke Menu
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pb-20">
      {/* Image Hero Section with Glassmorphism Overlay */}
      <div className="relative h-80 sm:h-96 w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src={menuItem.image || "/api/placeholder/800/600"}
          alt={menuItem.name}
          className="w-full h-full object-cover"
        />
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/menu')}
          className="absolute top-6 left-6 z-20 bg-black/50 hover:bg-black/70 p-3 rounded-full backdrop-blur-sm transition-all"
        >
          <FaArrowLeft size={20} />
        </button>
        
        {/* Share Button */}
        <button 
          onClick={() => alert('Share functionality would go here')}
          className="absolute top-6 right-6 z-20 bg-black/50 hover:bg-black/70 p-3 rounded-full backdrop-blur-sm transition-all"
        >
          <FaShareAlt size={20} />
        </button>
        
        {/* Badge Indicators */}
        <div className="absolute bottom-6 left-6 z-20 flex gap-2">
          {menuItem.isBestseller && (
            <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center">
              <FaCrown className="mr-1" /> BESTSELLER
            </span>
          )}
          {menuItem.isFavorite && (
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
              <FaHeart className="mr-1" /> FAVORITE
            </span>
          )}
          {menuItem.isSpicy && (
            <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
              <FaFire className="mr-1" /> PEDAS
            </span>
          )}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/50 backdrop-blur-md -mt-20 relative z-20 rounded-3xl p-6 shadow-xl"
        >
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">{menuItem.name}</h1>
              <div className="flex items-center mt-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar 
                      key={star} 
                      className={`${star <= 4.5 ? 'text-yellow-400' : 'text-gray-500'} ${star === 5 ? 'text-gray-500' : ''}`} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-yellow-400 font-medium">4.5</span>
                <span className="ml-1 text-gray-400">(120)</span>
              </div>
            </div>
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={`p-3 rounded-full ${isLiked ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-300'} transition-all`}
            >
              <FaHeart />
            </button>
          </div>
          
          <p className="mt-4 text-gray-300 text-lg">{menuItem.description}</p>
          
          <div className="mt-6 border-t border-gray-700 pt-6">
            <h2 className="text-xl font-semibold mb-3">Pilih Ukuran Porsi</h2>
            <div className="flex gap-3">
              {(['small', 'medium', 'large'] as PortionSize[]).map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`flex-1 py-3 px-4 rounded-xl border ${
                    selectedSize === size 
                      ? 'border-accent bg-accent/20 text-accent' 
                      : 'border-gray-600 bg-gray-700/50 text-gray-300'
                  } transition-all`}
                >
                  {size === 'small' ? 'Kecil' : size === 'medium' ? 'Sedang' : 'Besar'}
                </button>
              ))}
            </div>
          </div>
          
          {menuItem.isSpicy && (
            <div className="mt-6 border-t border-gray-700 pt-6">
              <h2 className="text-xl font-semibold mb-3">Pilih Level Kepedasan</h2>
              <div className="flex flex-wrap gap-3">
                {(['mild', 'medium', 'hot', 'extra'] as SpicyLevel[]).map(level => (
                  <button
                    key={level}
                    onClick={() => setSpicyLevel(level)}
                    className={`flex-1 py-3 px-4 rounded-xl border ${
                      spicyLevel === level 
                        ? 'border-orange-500 bg-orange-500/20 text-orange-400' 
                        : 'border-gray-600 bg-gray-700/50 text-gray-300'
                    } transition-all flex items-center justify-center`}
                  >
                    {level === 'mild' && <span>Tidak Pedas</span>}
                    {level === 'medium' && <span>Sedang <FaFire className="inline ml-1" /></span>}
                    {level === 'hot' && <span>Pedas <FaFire className="inline ml-1" /><FaFire className="inline" /></span>}
                    {level === 'extra' && <span>Super Pedas <FaFire className="inline ml-1" /><FaFire className="inline" /><FaFire className="inline" /></span>}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-6 border-t border-gray-700 pt-6 flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Harga</p>
              <p className="text-2xl font-bold text-white">Rp {calculateTotalPrice().toLocaleString('id-ID')}</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gray-700 rounded-full">
                <button 
                  onClick={() => handleQuantityChange(-1)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-600 transition-colors"
                >
                  <span className="text-2xl font-bold">-</span>
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(1)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-600 transition-colors"
                >
                  <span className="text-2xl font-bold">+</span>
                </button>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full flex items-center transition-all"
              >
                <FaCartPlus className="mr-2" /> Tambahkan
              </motion.button>
            </div>
          </div>
        </motion.div>
        
        {/* Related Items Section */}
        {relatedItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10"
          >
            <h2 className="text-2xl font-bold mb-4">Menu Terkait</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedItems.map(item => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/50 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => navigate(`/menu/${item.id}`)}
                >
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      src={item.image || "/api/placeholder/400/300"} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform hover:scale-110"
                    />
                    {item.isBestseller && (
                      <span className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        BESTSELLER
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg truncate">{item.name}</h3>
                    <p className="text-gray-400 text-sm mt-1 line-clamp-2">{item.description}</p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="font-bold">Rp {item.price.toLocaleString('id-ID')}</span>
                      <span className="text-accent">Lihat Detail</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Added to Cart Notification */}
      <AnimatePresence>
        {showAddedNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Berhasil ditambahkan ke keranjang!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuDetail;