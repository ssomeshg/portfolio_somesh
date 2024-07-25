
import menu from '../assets/menu.png'
import Close from '../assets/close.png'
import { useState } from "react"


function Navbar() {

    const [navbar, setNavbar] = useState(false)

    const navbtn = () => {
        setNavbar(!navbar)
    }
   

    return (
        <>
            <div className="backdrop-blur-md fixed w-full top-0 z-10">
                <div className="px-3  md:px-5 py-5 flex justify-between items-center container mx-auto relative">
                    <h1 className="font-bold text-2xl text-white">Som<span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text font-bold'>Esh</span></h1>
                    <div id="navItem" className={navbar ? "bg-gray-900 py-10 md:py-0  md:bg-transparent  grid grid-cols-1 translate-y-16 transition-all md:transition-none text-center md:text-left w-full  md:w-auto absolute left-[0] top-[0] md:left-0 md:top-0 md:relative gap-7 md:justify-end md:items-center md:flex":"-translate-y-[200px] md:translate-y-[0px] gap-7 md:justify-end md:items-center md:flex"} style={{}}>
                        <a href="#homesec" className="text-[16px] font-semibold text-white hover:text-pink-500">Home</a>
                        <a href="#about_section" className="text-[16px] font-semibold text-white hover:text-pink-500">About me</a>
                        <a href="#skills" className="text-[16px] font-semibold text-white hover:text-pink-500">Skills</a>
                        <a href="#projects" className="text-[16px] font-semibold text-white hover:text-pink-500">Projects</a>
                        <a href="#contact" className="text-[16px] font-semibold text-white hover:text-pink-500">Contact Me</a>
                    </div>
                    {
                        !navbar?<a onClick={navbtn} className="block md:hidden navbar-button" rel="noreferrer"><img src={menu} alt="" className="w-6 " /></a>:<a onClick={navbtn} className="block md:hidden navbar-button"><img src={Close} alt="" className="w-4"/></a>
                    }
                    

                </div>
            </div>
        </>
    )
}

function Navbutton() {
    return (
        <>
            <button>Contact Us</button>
        </>
    )
}

export { Navbar, Navbutton }