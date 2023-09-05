import './Footers.css';
import logosvg from "../src/assets/images/logo.svg"
import facebooksvg from "../src/assets/images/icon-facebook.svg";
import instagramsvg  from "../src/assets/images/icon-instagram.svg";
import pinteressvg from "../src/assets/images/icon-pinterest.svg";
import twittersvg from "../src/assets/images/icon-twitter.svg";

export default function Footers(){
    return(
        <div>
            <footer className='footer'>
                <div className='desktop-footer'>
                <div className='desktopfooter'> 
                <div>
                <img src={logosvg} alt='logosvg'className="logosvg"  />
                
                </div>
                <div className='icon-flex'>
                <div>
                    <div><img src={facebooksvg}/></div>
                </div>
                <div>
                    <div><img src={twittersvg}/></div>
                </div>
                <div>
                    <div><img src={pinteressvg}/></div>
                </div>
                <div>
                    <div><img src={instagramsvg}/></div>
                </div>
                </div>
                </div>
                <div id='footer'>
                    
                    <ul className='list'>
                    
                    <div><li><a href='#'>About</a></li></div>
                    <div><li><a href='#'>Careers</a></li></div>
                    <div><li><a href='#'>Events</a></li></div>
                    <div><li><a href='#'>Products</a></li></div>
                    <div><li><a href='#'>Support</a></li></div>
                    </ul>
                    
                    <div>
                    <h5>© 2021 Loopstudios. All rights reserved.</h5>
                    </div>
                </div>
                </div>
                
                <div id='mobile'>
                    <div className='mobilefooters'>
                        <div>  <img src={logosvg} alt='logosvg'/> </div>
                    
                    <div className='footerdiv'>
                     <ul>
                    <div><li><a href='#'>About</a></li></div>
                    <div><li><a href='#'>Careers</a></li></div>
                    <div><li><a href='#'>Events</a></li></div>
                    <div><li><a href='#'>Products</a></li></div>
                    <div><li><a href='#'>Support</a></li></div>
                  
                      </ul>
                      </div>
                      <div className='mobile-icon'>
                      <div>
                    <div><img src={facebooksvg} alt='facebooksvg'/></div>
                   </div>
                  <div>
                    <div><img src={twittersvg} alt='twittersvg'/></div>
                    </div>
                   <div>
                    <div><img src={pinteressvg} alt='pinterestsvg'/></div>
                    </div>
                   <div>
                    <div><img src={instagramsvg} alt='instagramsvg'/></div>
                   </div>

                      </div>
                      <div><h5>© 2021 Loopstudios. All rights reserved.</h5></div>
                   
                     </div>
                      </div>
                    

                
                 
            </footer>
        </div>
    )
} 