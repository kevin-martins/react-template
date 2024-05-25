import { useState } from 'react';
import { routes } from '../constants/routes';
import { motion } from 'framer-motion';
import { LinkProps } from '../models/route';

const ComponentButton = (link: LinkProps): JSX.Element => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.a
      key={link.text}
      href={link.to}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: .95 }}
      className='relative grid place-content-center w-[200px] h-[55px] overflow-hidden border-2 hover:border-blue-500 rounded-lg duration-300'
    >
      <motion.div
        animate={isHover ? { x: [0, 196, 196, 0, 0], y: [0, 0, 51, 51, 0], transition: { duration: 1.8, repeat: Infinity } } : { opacity: 0 }}
        className='absolute -z-10 -top-[4px] -left-[4px] rounded-[100%] bg-blue-800 p-2 shadow-[0_0_20px_20px_rgb(30,64,175)]'
      />
      <div className='bg-blue-600 text-white rounded-lg absolute inset-1 grid place-content-center'>
        <span>
          {link.text}
        </span>
      </div>
    </motion.a>
  );
};

const ComponentPage = () => {
  return (
    <div>
      <h2 className='text-4xl mb-8'>All components available</h2>
      <p className='max-w-2xl'>Components are build to support React.js, TailwindCSS and framer-motion. The site is still in development so components are not available for personal use but you can still check them out !</p>
      <div className='space-y-5 mb-10'>
        {routes
          .map(route => (
            <section key={route.title}>
              <h2 className='text-2xl mb-3 text-slate-700'>{route.title}</h2>
              <div className='flex flex-wrap gap-10 ml-5'>
                {route.links.map(link => (
                  <ComponentButton key={link.text} {...link} />
                ))}
              </div>
            </section>
          ))
        }
      </div>
    </div>
  );
};

export default ComponentPage;
