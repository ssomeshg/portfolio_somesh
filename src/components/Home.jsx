import { Link } from 'react-router-dom'
import hero from '../assets/New_Project.png'
function Home() {
    return (
        <>
            <div className='bg-gradient h-full'>

                <div className="container mx-auto h-full ">
                    <div className="grid md:grid-cols-2 ">
                        <div className='py-6 my-auto'>
                            <h1 className="my-auto text-[3rem] text-center md:text-left md:text-[5rem]" >Hy!! I'm </h1>
                            <h1 className='text-[3rem] text-center md:text-left md:text-[5rem] w-full'>SOMESHWARAN</h1>
                            <p className="my-auto text-center md:text-left ">Frontend Developer with high level of experience in web designing and development, producting the Quality work</p>
                            <div className='mt-7 text-center md:text-left '>
                                <Link to={"/"} className='bg-pink-900 text-white p-3 px-10'>Hire Me</Link>
                            </div>
                        </div>
                        <div>
                            <img src={hero} alt="" className='w-full'/>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home