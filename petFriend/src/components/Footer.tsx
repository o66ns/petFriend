import React from "react"
import { Link } from 'react-router-dom'


const Footer: React.FC = () => {
    return (
        <footer className="h-[70svh] bg-black text-gray-200">
            <div className="flex justify-between w-[80svw] mx-auto py-[6svh]">
                <div className="w-[22svw] text-[3.2svh]">
                    OUR LOCATION

                    <iframe
                        className="pt-[3.5svh] h-[47svh] w-[25svw]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0195989927086!2d-122.41941518468126!3d37.774929779759246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2f4e4d6f%3A0x5f3658bfb51c2cdb!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1614727741901!5m2!1sen!2sus"
                        width="300"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>

                    <div className="pt-[2svh] text-[2.5svh] text-gray-400">1234 Main Street Anywhere</div>

                </div>
                <div className="w-[22svw] text-[3.2svh]">
                    CONTACTS

                    <div className="pt-[10vh] text-[3svh] text-gray-300">+380 666 6666</div>
                    <div className="pt-[2svh] text-[3svh] text-gray-300">instagram</div>
                    <div className="pt-[2svh] text-[3svh] text-gray-300">telegram</div>
                    <div className="pt-[2svh] text-[3svh] text-gray-300">facebook</div>
                </div>
                <div className="w-[22svw] text-[3.2svh]">

                    <div> 
                        PAGES
                        <Link to="/" className="block pt-[10vh] text-[3svh] text-gray-300">Home</Link>
                        <Link to="/Favorites" className="block pt-[2svh] text-[3svh] text-gray-300">Favorites</Link>
                        <Link to="/About" className="block pt-[2svh] text-[3svh] text-gray-300">About us</Link>
                    </div>

                    <div className="pt-[22svh] text-[2.5svh] text-gray-400">© Copyright. All right reserved</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
