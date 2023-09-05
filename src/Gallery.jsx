import Button from './Button';
import {motion} from 'framer-motion';
import Gallerys from './Gallerys';

const InitialImage = [
  {desktop:"../src/assets/images/desktop/image-deep-earth.jpg",
  mobile:"../src/assets/images/mobile/image-deep-earth.jpg",
  text:'DEEP',
  texts:'EARTH'
},
  {desktop:"../src/assets/images/desktop/image-night-arcade.jpg",
  mobile:"../src/assets/images/mobile/image-night-arcade.jpg",
  text:'NIGHT',
  texts:'ARCADE'
},
  {desktop:"../src/assets/images/desktop/image-soccer-team.jpg",
  mobile:"../src/assets/images/mobile/image-soccer-team.jpg",
  text:'SOCCER',
  texts:'TEAM VR',
},
  {desktop:"../src/assets/images/desktop/image-grid.jpg",
  mobile:"../src/assets/images/mobile/image-grid.jpg",
  text:'THE',
  texts:'GRID',
},
 {desktop: "../src/assets/images/desktop/image-from-above.jpg",
 mobile:"../src/assets/images/mobile/image-from-above.jpg",
 text:'FROM UP',
 texts:'ABOVE VR',
},
{desktop:"../src/assets/images/desktop/image-pocket-borealis.jpg",
mobile:"../src/assets/images/mobile/image-pocket-borealis.jpg",
text:'POCKET',
texts:'BOREALIS',
},
{desktop:"../src/assets/images/desktop/image-curiosity.jpg",
 mobile:"../src/assets/images/mobile/image-curiosity.jpg",
 text:'THE',
 texts:'CURIOSITY',
 },
 {
  desktop:"../src/assets/images/desktop/image-fisheye.jpg",
  mobile:"../src/assets/images/mobile/image-fisheye.jpg",
  text:'MAKE IT',
  texts:'FISHEYE',
 }
];

export default function Gallery() {
  return (
    <div>
      <div className="flexman">
        <motion.div
        initial={{x:-50}}
        animate={{x:-10}}
        transition={{delay:0.2,type:'tween',}}
        >
          <h3>OUR CREATIONS</h3>
        </motion.div>
        <motion.div
         initial={{x:-50}}
         animate={{x:-10}}
         transition={{delay:0.2,type:'tween',}}
        >
       
        <Button>SEE ALL</Button>
        </motion.div>
      </div>
      <div className='imager-container'>
      {InitialImage.map((Galleryimages, index) => (
  <Gallerys
   // Corrected the prop name here
  key={index}
  desktopSrc={Galleryimages.desktop}
  mobileSrc={Galleryimages.mobile}
  text={Galleryimages.text}
  texts={Galleryimages.texts}
/>

))}

      </div>
      <motion.div className='buttons'
        initial={{x:-50}}
        animate={{x:-10}}
        transition={{delay:0.2,type:'tween',}}
      >

     <Button>SEE ALL</Button>
     </motion.div>
     </div>
      
)
}
