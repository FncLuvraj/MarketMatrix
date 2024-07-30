import Brokerage from './Brokerage';
import Hero from './Hero';
import Navbar from '../common/Navbar';
function PricingPage(){
    return(
        <div>
            <Navbar />
            <Hero></Hero>
            <Brokerage></Brokerage>
        </div>
    )
}
export default PricingPage;