'use client';

import { motion, Variants } from 'framer-motion';
import { PropertyCardProps } from './types';
import { 
  MapPinIcon, 
  HeartIcon, 
  ArrowPathIcon,
  ChevronRightIcon 
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onViewDetails,
  onToggleFavorite,
  onShuffle,
  isFavorite = false
}) => {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency === '$' ? 'USD' : 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'For Sale':
        return 'bg-gray-200 text-gray-400 cursor-not-allowed';
      case 'For Rent':
        return 'bg-blue-100 text-blue-600';
      case 'Sold':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-200 text-gray-400';
    }
  };

  // Card animation variants - properly typed
  const cardVariants: Variants = {
    initial: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    animate: { 
      opacity: 1, 
      x: 0,
      scale: 1,
    },
    exit: { 
      opacity: 0, 
      x: -30,
      scale: 0.95,
    }
  };

  // Stagger animation for card content
  const contentVariants: Variants = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    animate: { 
      opacity: 1, 
      y: 0,
    }
  };

  const containerVariants: Variants = {
    initial: {},
    animate: {}
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }}
      className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full backdrop-blur-sm"
    >
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.1,
          delayChildren: 0.3
        }}
      >
        {/* Status Badges */}
        <motion.div 
          variants={contentVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex space-x-3 mb-4"
        >
          <button
            className={`text-xs font-semibold rounded px-4 py-1 ${getStatusStyles(property.status)}`}
            disabled={property.status === 'For Sale'}
          >
            {property.status}
          </button>
          {property.featured && (
            <button className="bg-emerald-500 text-white text-xs font-semibold rounded px-3 py-1">
              Featured
            </button>
          )}
        </motion.div>

        {/* Property Title */}
        <motion.h3 
          variants={contentVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-bold text-gray-900 text-base mb-2 line-clamp-2"
        >
          {property.title}
        </motion.h3>

        {/* Location */}
        <motion.div 
          variants={contentVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center text-gray-500 text-xs mb-4 space-x-1"
        >
          <MapPinIcon className="w-3 h-3" />
          <span className="capitalize">{property.location}</span>
        </motion.div>

        {/* Property Details */}
        <motion.div 
          variants={contentVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex justify-between text-gray-600 text-xs mb-6"
        >
          <span>Beds: {property.beds}</span>
          <span>Bath: {property.baths}</span>
          <span>Sqft: {property.sqft} m²</span>
        </motion.div>

        {/* Price and Actions */}
        <motion.div 
          variants={contentVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center justify-between mb-6"
        >
          <span className="text-emerald-500 font-semibold text-lg">
            {formatPrice(property.price, property.currency)}
          </span>
          <div className="flex space-x-2">
            <motion.button
              onClick={onShuffle}
              aria-label="Shuffle"
              className="p-2 rounded border border-gray-200 text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors"
              whileHover={{ scale: 1.05, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowPathIcon className="w-4 h-4" />
            </motion.button>
            <motion.button
              onClick={() => onToggleFavorite(property.id)}
              aria-label="Favorite"
              className={`p-2 rounded border transition-colors ${
                isFavorite
                  ? 'border-red-300 text-red-500 hover:border-red-400'
                  : 'border-gray-200 text-gray-400 hover:text-gray-600 hover:border-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isFavorite ? (
                <HeartSolidIcon className="w-4 h-4" />
              ) : (
                <HeartIcon className="w-4 h-4" />
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* View Details Button */}
        <motion.button
          variants={contentVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={() => onViewDetails(property)}
          className="w-full bg-emerald-500 text-white text-sm font-semibold rounded px-5 py-3 hover:bg-emerald-600 transition-colors flex items-center justify-center cursor-pointer group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View Details
          <ChevronRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default PropertyCard;
