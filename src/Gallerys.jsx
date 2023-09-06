// Gallerys.jsx
import PropTypes from 'prop-types';
import './Gallery.css';
import { motion } from 'framer-motion';

export default function Gallerys({ desktopSrc, mobileSrc, alt, text, texts }) {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className='fleximages'>
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: 'tween' }}
      >
        <div id='to'>
        <img
          src={isMobile ? mobileSrc : desktopSrc}
          alt={alt} 
          className='image'
          style={{
            width: isMobile ? 'mobileWidth' : 'desktopWidth',
            height: isMobile ? 'mobileHeight' : 'desktopHeight',
          }}
          
        />
        <div className='image-text' >
          <h4>
            {text} <br /> {texts}
          </h4>
          
        </div>
        </div>
      </motion.div>
    </div>
  );
}

Gallerys.propTypes = {
  desktopSrc: PropTypes.string.isRequired,
  mobileSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired, 
  text: PropTypes.string.isRequired,
  texts: PropTypes.string.isRequired,
};