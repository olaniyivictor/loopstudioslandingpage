import PropTypes from 'prop-types';
import './Gallery.css';
import {motion} from 'framer-motion';
export default function Galleryimage({ desktopSrc, mobileSrc, alt,text ,texts}) {
  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

  return (
    <div className='fleximages'>
      <motion.div
        initial={{y:-50}}
        animate={{y:-10}}
        transition={{delay:0.2,type:'tween',}}
      >
        <img
          src={isMobile ? mobileSrc : desktopSrc}
          alt={alt}
          className='image'
          style={{
            width: isMobile ? 'mobileWidth' : 'desktopWidth',
            height: isMobile ? 'mobileHeight' : 'desktopHeight',
          }}
        
        />
          <div className='image-text'><h4>{text} <br/> {texts}</h4></div>
      </motion.div>
    </div>
  );
}

Galleryimage.propTypes = {
  desktopSrc: PropTypes.string.isRequired,
  mobileSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  texts:PropTypes.string.isRequired,
};
