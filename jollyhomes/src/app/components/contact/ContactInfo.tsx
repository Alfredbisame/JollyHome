'use client';

import { motion, Variants } from 'framer-motion';
import { ContactInfoProps } from './types';
import { 
  HomeIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  MapPinIcon 
} from '@heroicons/react/24/outline';
import { FaXTwitter, FaTiktok } from 'react-icons/fa6';

const ContactInfo: React.FC<ContactInfoProps> = ({ items }) => {
  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-6 h-6 text-emerald-500" };
    
    switch (iconName) {
      case 'home':
        return <HomeIcon {...iconProps} />;
      case 'email':
        return <EnvelopeIcon {...iconProps} />;
      case 'phone':
        return <PhoneIcon {...iconProps} />;
      case 'location':
        return <MapPinIcon {...iconProps} />;
      default:
        return <HomeIcon {...iconProps} />;
    }
  };

  const getSocialIcon = (name: string) => {
  const iconProps = { className: "w-5 h-5", viewBox: "0 0 24 24" };
  switch (name) {
    case 'facebook':
      return (
        <svg {...iconProps}>
          <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" fill="currentColor" />
        </svg>
      );
    case 'twitter':
      return <FaXTwitter className="w-5 h-5" />;
    case 'tiktok':
      return <FaTiktok className="w-5 h-5" />;
    case 'linkedin':
      return (
        <svg {...iconProps}>
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.962 0-1.74-.79-1.74-1.764s.779-1.764 1.74-1.764 1.74.79 1.74 1.764-.778 1.764-1.74 1.764zm13.5 12.268h-3v-5.604c0-3.368-4.019-3.073-4.019 0v5.604h-3v-11h3v1.765c1.276-2.546 5.686-2.777 6.223 0l.574 5.345v.49h-.008z" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
};

  const containerVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border border-gray-100"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <h3 className="font-bold text-2xl text-[#26405B] mb-3">
          Get In Touch
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mb-4" />
        <p className="text-gray-600 text-lg">
          Jolly B Ghana
        </p>
        <p className="text-gray-500 text-sm mt-2">
          We&apos;re here to help you find your dream home. Reach out to us through any of the channels below.
        </p>
      </motion.div>

      <div className="space-y-6">
        {items.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="group"
          >
            <motion.div 
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="bg-emerald-50 p-3 rounded-full group-hover:bg-emerald-100 transition-colors duration-300"
                whileHover={{ rotate: 5 }}
              >
                {getIcon(item.icon)}
              </motion.div>
              
              <div className="flex-1">
                <p className="font-semibold text-[#26405B] text-sm mb-1 group-hover:text-emerald-600 transition-colors duration-300">
                  {item.title}
                </p>
                {item.href ? (
                  <a 
                    href={item.href}
                    className="text-gray-600 text-sm hover:text-emerald-600 transition-colors duration-300 break-words"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-600 text-sm break-words">
                    {item.content}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info Card */}
      <motion.div
        variants={itemVariants}
        className="mt-8 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6 border border-emerald-100"
      >
        <h4 className="font-semibold text-[#26405B] mb-2">
          Business Hours
        </h4>
        <div className="space-y-1 text-sm text-gray-600">
          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </motion.div>

       {/* Social Media Links */}
      <motion.div
  variants={itemVariants}
  className="mt-6 pt-6 border-t border-gray-200"
>
  <p className="text-sm text-gray-600 mb-3">Follow us on social media:</p>
  <div className="flex gap-3">
    {[
      { name: 'facebook', url: 'https://www.facebook.com/profile.php?id=61559349307416&mibextid=wwXIfr&mibextid=wwXIfr' },
      { name: 'twitter', url: '#' },
      { name: 'tiktok', url: 'https://www.tiktok.com/@jollyhomes7?_t=ZM-8xuNtRE97xd&_r=1' },
      { name: 'linkedin', url: '#' }
    ].map((social) => (
      <motion.a
        key={social.name}
        href={social.url}
        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-emerald-500 hover:text-white transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {getSocialIcon(social.name)}
      </motion.a>
    ))}
  </div>
</motion.div>
    </motion.section>
  );
};

export default ContactInfo;
