// Gallery.jsx
import Button from './Button';
import { motion } from 'framer-motion';
import Gallerys from './Gallerys';
import deepEarthDesktop from "../src/assets/images/desktop/image-deep-earth.jpg";
import mobiledeepEarth from  "../src/assets/images/mobile/image-deep-earth.jpg";
import arcadeDesktop from "../src/assets/images/desktop/image-night-arcade.jpg";
import mobilearcade from "../src/assets/images/mobile/image-night-arcade.jpg";
import soccerteamDesktop from "../src/assets/images/desktop/image-soccer-team.jpg";
import soccerteammobile from "../src/assets/images/mobile/image-soccer-team.jpg";
import gridDestop from "../src/assets/images/desktop/image-grid.jpg";
import gridmobile from "../src/assets/images/mobile/image-grid.jpg";
import fromaboveDesktop  from  "../src/assets/images/desktop/image-from-above.jpg";
import fromabovemobile from "../src/assets/images/mobile/image-from-above.jpg";
import pocketborealisDesktop  from "../src/assets/images/desktop/image-pocket-borealis.jpg";
import pocketborealismobile from "../src/assets/images/mobile/image-pocket-borealis.jpg";
import curiosityDesktop from "../src/assets/images/desktop/image-curiosity.jpg";
import curiositymobile from "../src/assets/images/mobile/image-curiosity.jpg";
import fisheyeDesktop from "../src/assets/images/desktop/image-fisheye.jpg";
import fisheyemobile from"../src/assets/images/mobile/image-fisheye.jpg";
const InitialImage = [
  {
    desktop: deepEarthDesktop,
    mobile: mobiledeepEarth,
    text: 'DEEP',
    texts: 'EARTH',
  },
  {desktop:arcadeDesktop,
  mobile:mobilearcade,
  text:'NIGHT',
  texts:'ARCADE'
},
  {desktop:soccerteamDesktop,
  mobile:soccerteammobile,
  text:'SOCCER',
  texts:'TEAM VR',
},
  {desktop:gridDestop,
  mobile:gridmobile,
  text:'THE',
  texts:'GRID',
},
 {desktop: fromaboveDesktop,
 mobile:fromabovemobile,
 text:'FROM UP',
 texts:'ABOVE VR',
},
{desktop:pocketborealisDesktop,
mobile:pocketborealismobile,
text:'POCKET',
texts:'BOREALIS',
},
{desktop:curiosityDesktop,
 mobile:curiositymobile,
 text:'THE',
 texts:'CURIOSITY',
 },
 {
  desktop:fisheyeDesktop,
  mobile:fisheyemobile,
  text:'MAKE IT',
  texts:'FISHEYE',
 }
];

  // ... Other image objects


export default function Gallery() {
  return (
    <div>
      <div className="flexman">
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: -10 }}
          transition={{ delay: 0.2, type: 'tween' }}
        >
          <h3>OUR CREATIONS</h3>
        </motion.div>
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: -10 }}
          transition={{ delay: 0.2, type: 'tween' }}
        >
          <Button>SEE ALL</Button>
        </motion.div>
      </div>
      <div className='imager-container'>
        {InitialImage.map((Galleryimages, index) => (
          <Gallerys
            key={index}
            desktopSrc={Galleryimages.desktop}
            mobileSrc={Galleryimages.mobile}
            text={Galleryimages.text}
            texts={Galleryimages.texts}

          />
        ))}
      </div>
      <motion.div className='buttons' initial={{ x: -50 }} animate={{ x: -10 }} transition={{ delay: 0.2, type: 'tween' }}>
        <Button>SEE ALL</Button>
      </motion.div>
    </div>
  );
}
