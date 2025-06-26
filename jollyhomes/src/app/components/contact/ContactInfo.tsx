'use client';

import { motion, Variants } from 'framer-motion';
import { ContactInfoProps } from './types';
import { 
  HomeIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  MapPinIcon 
} from '@heroicons/react/24/outline';

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
      return (
        <svg {...iconProps}>
          <path d="M23.44 4.83c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C19.5 3.95 18.44 3.5 17.3 3.5c-1.27 0-2.43.49-3.29 1.29-1.27.78-2.15 2.05-2.15 3.44 0 .26.03.52.09.76C8.26 8.39 5.5 6.85 3.8 4.55c-.9.77-1.44 1.75-1.44 2.86 0 1.11.5 2.1 1.25 2.76-.83-.03-1.6-.2-2.25-.6v.06c0 1.56.73 2.77 1.7 3.45-.68-.03-1.3-.2-1.83-.49v.02c0 2.15 1.52 3.93 3.53 4.34-.37.1-.75.14-1.13.14-.27 0-.55-.02-.82-.07.56 1.7 2.18 2.92 4.08 2.96A8.51 4.52 0 0 1 2 19.92a12.04 4.52 0 0 0 6.62-2.1c-.38.48-.8 1-1.3 1.42C4.66 19.37 3.6 20 2.45 20c-.5 0-.99-.05-1.48-.15 1.1 1.1 2.46 1.77 3.95 1.95v2.33c-1.58-.3-3.06-1.1-4.25-2.15 1.24.23 2.53.37 3.84.37 11.6 0 17.96-9.6 17.96-17.96 0-.27-.01-.54-.02-.81.72-.52 1.35-1.17 1.86-1.9z" fill="currentColor" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...iconProps}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.14 4.771 1.691 4.912 4.913.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.14 3.222-1.66 4.771-4.912 4.913-1.266.058-1.645.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.14-4.771-1.699-4.913-4.913-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.139-3.227 1.66-4.771 4.912-4.913 1.266-.057 1.645-.069 4.85-.069zM12 0C8.74 0 8.333.014 7.053.06 2.725.222 0 2.71 0 7.052c0 4.343.222 6.831 2.71 7.053 1.281.046 1.688.06 4.947.06 3.26 0 3.666-.014 4.947-.06 4.342-.222 6.83-2.71 6.83-7.053 0-4.342-.222-6.83-2.71-7.052C13.666.014 13.26 0 12 0zm0 5.838a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 0 1 0-12.324zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" fill="currentColor" />
        </svg>
      );
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
    {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
      <motion.a
        key={social}
        href={`#${social}`}
        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-emerald-500 hover:text-white transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        {getSocialIcon(social)}
      </motion.a>
    ))}
  </div>
</motion.div>
    </motion.section>
  );
};

export default ContactInfo;
