import logosvg from "../src/assets/images/logo.svg"
import hamburgersvg from "../src/assets/images/icon-hamburger.svg"
import iconclose from "../src/assets/images/icon-close.svg";
import {motion} from 'framer-motion';
import './Navbar.css'
import { useState } from "react"
export default function Navbar(){
    //let's create a usestate for the navbar
    const [isnavbar,setIsnavbar] = useState(false);

    const toggleNav = () => {
        setIsnavbar(!isnavbar);
      };
    return(
    <div className="div1"> 
        <nav 
        >   
        <img src={logosvg} alt='logosvg'className="logosvg"  />
    <div >
        <ul id='navbar' className={`${isnavbar?`#navbar active`:`#navbar`}`}>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Careers</a></li>
            <li><a href='#'>Events</a></li>
            <li><a href='#'>Products</a></li>
            <li><a href='#'>Support</a></li>
        </ul>
    </div>
    <div id='mobile' onClick={toggleNav}>
        <div>
        <div className={`${isnavbar?`iconclose`:`hamburger`}`}>
            {isnavbar?<img src={iconclose} alt='iconclose svg'/>:<img src={hamburgersvg} alt='hamburgersvg'/>}
        </div>
        </div>
    </div>
    
        </nav>
        <motion.div className="immersive"   initial={{y:-250}}
        animate={{y:-30}}
        transition={{delay:0.2,type:'tween',}}>
        <h1 >IMMERSIVE<br/>EXPERIENCES <br/> THAT DELIVER </h1>
        </motion.div>
     </div>
     


    )

}
