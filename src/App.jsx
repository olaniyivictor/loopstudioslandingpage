import './index.css'
import Navbar from './Navbar';
import Picture from './Picture';
import Word from './Word';
import Gallery from './Gallery';
import Footers from './Footers'



export default function App(){
  return(
    <div>
      <Navbar/>
      <Picture/>
      <Word/>
      <Gallery/>
      <Footers/>

    

    </div>
  )
}