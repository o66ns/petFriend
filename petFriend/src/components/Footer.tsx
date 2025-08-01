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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83910.03009298761!2d24.634555076921554!3d48.91180192580711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c16c34b0381d%3A0xd6d32394e59e41c2!2z0IbQstCw0L3Qvi3QpNGA0LDQvdC60ZbQstGB0YzQuiwg0IbQstCw0L3Qvi3QpNGA0LDQvdC60ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3NjAwMA!5e0!3m2!1suk!2sua!4v1753972123630!5m2!1suk!2sua"
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

                    <Link to="" className="block pt-[10vh] text-[3svh] text-gray-300">+380 666 6666</Link>
                    <Link to="" className="block pt-[2svh] text-[3svh] text-gray-300">instagram</Link>
                    <Link to="" className="block pt-[2svh] text-[3svh] text-gray-300">telegram</Link>
                    <Link to="" className="block pt-[2svh] text-[3svh] text-gray-300">facebook</Link>
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
