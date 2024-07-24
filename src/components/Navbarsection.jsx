import {Link} from "react-router-dom"

import menu from '../assets/menu.png'
import navbtn from '../App'


function Navbar() {
    return (
        <>
            <div className="backdrop-blur-md fixed w-full top-0 z-10">
                <div className="px-3 md:px-3 py-5 flex justify-between items-center container mx-auto relative">
                    <h1 className="uppercase font-bold text-lg text-white">SOM<span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text'>ESH</span></h1>
                    <div id="navItem" className="grid absolute left-[50%] -top-[10rem] md:left-0 md:top-0 md:relative gap-7 justify-end items-center md:flex">
                        <Link to={"/"} className="text-[16px] font-semibold text-white hover:text-pink-950">Home</Link>
                        <Link to={""} className="text-[16px] font-semibold text-white">About me</Link>

                        <Link to={"/contact"} className="text-[16px] font-semibold text-white">Contact</Link>
                    </div>
                    <a onClick={navbtn} className="block md:hidden navbar-button"><img src={menu} alt="" className="w-6 " /></a>

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