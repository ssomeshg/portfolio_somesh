import Resume from '../assets/SOMESHWARAN-Resume.pdf'
import myimg from '../assets/about_img.jpg'
function About() {
    return (

        <>
            <div id='about_section' className="pb-32 md:py-0 h-full">
                <div className="px-3 md:px-5 container mx-auto ">

                    <div className="grid-cols-1 grid md:grid-cols-2 mt-20">
                        <div className='pb-10'>
                            <img src={myimg} alt="" className='md:w-9/12 w-full mx-auto md:mx-0 object-cover rounded-3xl md:block' />
                        </div>
                        <div className="relative my-auto px-3">
                            <h1 className="headline text-[4rem] -top-[10%] md:-top-[20%]">ABOUT ME</h1>
                            <h2 className="text-2xl font-medium mb-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">Creative Web Developer</h2>
                            <p className="text-gray-200 mb-9">As a MERN stack developer, I bring a wealth of experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. With a keen eye for detail and a passion for delivering exceptional user experiences,From designing scalable architectures to implementing efficient backend functionalities and captivating frontend interfaces, I am committed to crafting high-quality solutions that exceed client expectations.</p>
                            <div>
                                <a className="border-pink-950 border-2 font-medium p-4 hover:rounded-xl transition-all transition[2s] hover:border-pink-950 hover:text-pink-950 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text" href={Resume} download="My Cv">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default About