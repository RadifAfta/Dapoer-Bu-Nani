import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CategoryBadgeProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ active, onClick, children }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-300 flex items-center gap-2 ${
      active 
        ? 'bg-accent text-white font-medium shadow-lg' 
        : 'bg-secondary-dark text-gray-700 hover:bg-gray-100'
    }`}
    onClick={onClick}
  >
    {children}
  </motion.div>
);

export default CategoryBadge;