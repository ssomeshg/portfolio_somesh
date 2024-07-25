import sone from '../assets/letter-s.gif'
import myimg from '../assets/about_img.jpg'
function About() {
    return (

        <>
            <div id='about_section' className="pb-32 md:py-0 h-full">
                <div className="px-3 md:px-5 container mx-auto ">

                    <div className="grid-cols-1 grid md:grid-cols-2 mt-32">
                        <div>
                            <img src={myimg} alt="" className='w-9/12 mx-auto md:mx-0 object-cover rounded-3xl md:block' />
                        </div>
                        <div className="relative my-auto px-3">
                            <h1 className="headline text-[4rem] -top-[20%]">ABOUT ME</h1>
                            <h2 className="text-2xl font-medium mb-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">Creative Web Developer</h2>
                            <p className="text-gray-200 mb-9">I am <span className="text-pink-500 font-medium">SOMESHWARAN</span> a Web Developer, and I'm very passionate and dedicated to my work.

                                With 1.5 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
                            <div>
                                <a className="border-pink-950 border-2 font-medium p-4 hover:rounded-xl transition-all transition[2s] hover:border-pink-950 hover:text-pink-950 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text" href={sone} download="My Cv">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default About