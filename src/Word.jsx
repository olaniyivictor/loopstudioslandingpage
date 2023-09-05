import './Word.css';
import './index.css';
import imageinteractive from "../src/assets/images/desktop/image-interactive.jpg"
import {motion} from 'framer-motion';
export default function Word(){
    return(
        <div className='word'>
           <div>
            <motion.div className='images'
              initial={{x:-250}}
              animate={{x:-50}}
              transition={{delay:0.2,type:'tween',}}
            >
               <div className='imager'>
                    <h2>THE LEADER IN <br/> INTERACTIVE VR</h2>
                    <p>
        Founded in 2011, Loopstudios has been producing world-class  virtual reality 
        projects for some of the best companies around the   globe. Our award-winning 
        creations have transformed  businesses through digital experiences that bind 
        to their brand.
                    </p>
                </div>
            </motion.div>
           </div>
           <div className='mobile'>
            <div className='flexbox'>
                <motion.div className='div4'
                  initial={{y:-50}}
                  animate={{y:-10}}
                  transition={{delay:0.2,type:'tween',}}
                >
                    <img src={imageinteractive} alt='imageinteractive' className='mobile-image'/>

                </motion.div>
                <motion.div className='div5'
                  initial={{y:50}}
                  animate={{y:10}}
                  transition={{delay:0.2,type:'tween',}}
                >
                <h2>THE LEADER IN <br/> INTERACTIVE VR</h2>
                    <p>
                    
                    Founded in 2011, Loopstudios has been producing world-class <span className='virtual'> virtual reality  projects for some of the best companies around the</span>   globe. Our award-winning  creations have transformed <span className='business'>
                    businesses through digital experiences that bind to their <span className='brand'> brand.</span> 
                    </span>
                     </p>
                </motion.div>
            </div>
           </div>

        </div>

    )
}