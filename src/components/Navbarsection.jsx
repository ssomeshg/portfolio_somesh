import { Route, Routes, BrowserRouter, Link } from "react-router-dom"
import About from "./About"
import menu from '../assets/menu.png'
function Navbar() {

    return (
        <>
            <div className="backdrop-blur-md sticky top-0 z-10">
                <div className="px-3 md:px-0 py-5 flex justify-between items-center container mx-auto ">
                    <h1 className="uppercase font-bold text-lg text-purple-950">PORTFOLIO<span style={{color:"#3AA700"}}>.</span></h1>
                    <div className="hidden md:block flex gap-7 justify-end items-center">
                        <Link to={"/"} className="text-[16px] font-semibold hover:text-pink-950">Home</Link>
                        <Link to={"/about"} className="text-[16px] font-semibold">About me</Link>
                       
                        <Link to={"/contact"} className="text-[16px] font-semibold">Contact</Link>
                    </div>
                    <img src={menu} alt="" className="w-6 block md:hidden" />

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