import { Route, Routes, BrowserRouter, Link } from "react-router-dom"
import About from "./About"
function Navbar() {

    return (
        <>
            <div className="backdrop-blur-md sticky top-0 z-10">
                <div className=" py-5 flex justify-between items-center container mx-auto ">
                    <h1 className="uppercase font-bold text-lg text-purple-950">PORTFOLIO<span style={{color:"#3AA700"}}>.</span></h1>
                    <div className="flex gap-7 justify-end items-center">
                        <Link to={"/"} className="text-[16px] font-semibold hover:text-pink-950">Home</Link>
                        <Link to={"/about"} className="text-[16px] font-semibold">About me</Link>
                       
                        <Link to={"/contact"} className="text-[16px] font-semibold">Contact</Link>
                    </div>
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