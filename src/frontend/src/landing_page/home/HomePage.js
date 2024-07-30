import {React} from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../common/OpenAccount';
import Navbar from '../common/Navbar';


function HomePage(){
    return(
        <div>
            <Navbar />
            <Hero></Hero>
           <Awards></Awards>
              <Stats></Stats>
          <Pricing></Pricing>
           <Education></Education>
            <OpenAccount></OpenAccount>
             
        </div>
    )
}

export default HomePage;