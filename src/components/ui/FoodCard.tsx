import { motion } from 'framer-motion';
import { FaFire, FaHeart, FaCrown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import type { MenuItem } from '../../data/menuData';

interface FoodCardProps {
  item: MenuItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/menu/${item.id}`);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
      onClick={handleCardClick}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={item.image || "/api/placeholder/400/300"} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {item.isBestseller && (
            <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center">
              <FaCrown className="mr-1" /> BESTSELLER
            </span>
          )}
          {item.isFavorite && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
              <FaHeart className="mr-1" /> FAVORITE
            </span>
          )}
          {item.isSpicy && (
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
              <FaFire className="mr-1" /> PEDAS
            </span>
          )}
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90"></div>
        
        {/* Price badge */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-accent/80 backdrop-blur-sm text-white px-3 py-1 rounded-xl font-bold">
            Rp {item.price.toLocaleString('id-ID')}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{item.name}</h3>
        <p className="text-gray-300 text-sm line-clamp-2">{item.description}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="flex">
            {/* You can add ratings here if needed */}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-accent hover:text-white hover:bg-accent px-4 py-2 rounded-full text-sm font-medium transition-colors border border-accent"
          >
            Lihat Detail
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;