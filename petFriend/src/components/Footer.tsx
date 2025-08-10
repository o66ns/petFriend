import React, { useState } from "react"
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
    const [openBlock, setOpenBlock] = useState<null | 'location' | 'contacts' | 'pages'>(null)

    const toggle = (block: typeof openBlock) => {
        setOpenBlock(prev => (prev === block ? null : block))
    }

    return (
        <footer className="bg-black text-gray-200 py-[6vh]">
            <div className="w-[90vw] mx-auto flex flex-col gap-[6vh] items-center
                            landscape:flex-row landscape:justify-between landscape:items-start landscape:w-[80svw]">

                <div className="w-full text-center text-[2.5vh] 
                                landscape:text-left landscape:w-[22svw] landscape:text-[3.2svh]">
                    <button onClick={() => toggle('location')} className="w-full flex justify-between items-center">
                        <span>OUR LOCATION</span>
                        <span className="landscape:hidden text-[3vh]">
                            {openBlock === 'location' ? '▲' : '▼'}
                        </span>
                    </button>

                    <div className={`mt-[2vh] ${openBlock === 'location' ? '' : 'hidden'} landscape:block`}>
                        <iframe
                            className="h-[30vh] w-[90vw] 
                                       landscape:pt-[3.5svh] landscape:h-[47svh] landscape:w-[25svw]"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83910.03009298761!2d24.634555076921554!3d48.91180192580711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c16c34b0381d%3A0xd6d32394e59e41c2!2z0IbQstCw0L3Qvi3QpNGA0LDQvdC60ZbQstGB0YzQuiwg0IbQstCw0L3Qvi3QpNGA0LDQvdC60ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3NjAwMA!5e0!3m2!1suk!2sua!4v1753972123630!5m2!1suk!2sua"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="pt-[2vh] text-[2vh] text-gray-400
                                        landscape:pt-[2svh] landscape:text-[2.5svh]">
                            1234 Main Street Anywhere
                        </div>
                    </div>
                </div>

                <div className="w-full text-center text-[2.5vh] 
                                landscape:text-left landscape:w-[22svw] landscape:text-[3.2svh]">
                    <button onClick={() => toggle('contacts')} className="w-full flex justify-between items-center">
                        <span>CONTACTS</span>
                        <span className="landscape:hidden text-[3vh]">
                            {openBlock === 'contacts' ? '▲' : '▼'}
                        </span>
                    </button>

                    <div className={`mt-[2vh] ${openBlock === 'contacts' ? '' : 'hidden'} landscape:block`}>
                        <Link to="" className="block pt-[4vh] text-[2.3vh] text-gray-300
                                              landscape:pt-[10vh] landscape:text-[3svh]">+380 666 6666</Link>
                        <Link to="https://www.instagram.com/" className="block pt-[2vh] text-[2.3vh] text-gray-300
                                              landscape:text-[3svh]">instagram</Link>
                        <Link to="https://www.facebook.com/" className="block pt-[2vh] text-[2.3vh] text-gray-300
                                              landscape:text-[3svh]">facebook</Link>
                    </div>
                </div>

                <div className="w-full text-center text-[2.5vh] 
                                landscape:text-left landscape:w-[22svw] landscape:text-[3.2svh]">
                    <button onClick={() => toggle('pages')} className="w-full flex justify-between items-center">
                        <span>PAGES</span>
                        <span className="landscape:hidden text-[3vh]">
                            {openBlock === 'pages' ? '▲' : '▼'}
                        </span>
                    </button>

                    <div className={`mt-[2vh] ${openBlock === 'pages' ? '' : 'hidden'} landscape:block`}>
                        <Link to="/" className="block pt-[4vh] text-[2.3vh] text-gray-300
                                              landscape:pt-[10vh] landscape:text-[3svh]">Home</Link>
                        <Link to="/Favorites" className="block pt-[2vh] text-[2.3vh] text-gray-300
                                                       landscape:text-[3svh]">Favorites</Link>
                        <Link to="/About" className="block pt-[2vh] text-[2.3vh] text-gray-300
                                                    landscape:text-[3svh]">About us</Link>

                        <div className="hidden landscape:block pt-[22svh] text-[2.5svh] text-gray-400">
                            © Copyright. All right reserved
                        </div>
                    </div>
                </div>
            </div>

            <div className="block pt-[4vh] text-[1.8vh] text-gray-400 landscape:hidden text-center">
                © Copyright. All right reserved
            </div>
        </footer>
    )
}

export default Footer
