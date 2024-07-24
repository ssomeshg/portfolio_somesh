import { Link } from 'react-router-dom'
import Skill from './Skill';
import ProjectComp from './ProjectComp';
import About from './About'
import hero from '../assets/ban.png'
import { Typewriter, Cursor } from 'react-simple-typewriter'
function Home() {


    return (
        <>



            <div className='bg-gray-900 md:px-3 h-full pt-24 md:pt-40'>

                <div className="container mx-auto h-full ">
                    <div className="grid md:grid-cols-2 ">
                        <div className='py-6 my-auto'>
                            <h1 className="my-auto text-[1rem] text-center font-medium md:text-left md:text-[1.1rem] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text" >Hy!! My Name is </h1>
                            <h1 className='text-[2rem] text-center md:text-left md:text-[3rem] w-full my-3 font-bold text-white leading-9'>SOMESHWARAN</h1>

                            <div className='text-center md:text-left'>
                                <span className="my-auto text-[1rem] font-semibold text-center md:text-left md:text-[1.5rem] relative text-white" >I'm a </span><span className='text-[1rem] font-semibold text-center md:text-left md:text-[1.5rem] change_txt bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text'><Typewriter
                                    words={['React Js Developer', "Mern Stack Developer"]}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle=''
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                /></span> <span><Cursor cursorColor='white'/></span>
                            </div>

                            <p className="my-auto text-sm font-medium text-center md:text-left text-white mt-5">Frontend Developer with high level of experience in web designing and development, producting the Quality work</p>
                            <div className='mt-7 text-center md:text-left '>
                                <Link to={"/"} className='bg-pink-900 text-white p-3 px-10'>Hire Me</Link>
                            </div>
                        </div>
                        <div className='w-full'>
                            <img src={hero} alt="" className='w-full p-5 md:w-[50%] mx-auto' />
                        </div>
                    </div>
                </div>
                <About />
                <Skill />
                <ProjectComp />
            </div>

        </>
    )
}

export default Home