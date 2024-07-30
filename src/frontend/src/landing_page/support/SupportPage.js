import CreateTicket from "./CreateTicket"
import Hero from "./Hero"
import Navbar from "../common/Navbar"

function SupportPage()
{
    return (
        <div>
            <h1>
                <Navbar />
                <Hero></Hero>
                <CreateTicket></CreateTicket>
            </h1>
        </div>
    )
}
export default SupportPage