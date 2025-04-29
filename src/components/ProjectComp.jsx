
import github from '../assets/github-sign.png'
import link from '../assets/link.png'
import tripAdvisor from '../assets/Macbook-Air-tripadviser-clone.vercel.app.png'
import tripAdvisorMobile from '../assets/iPhone-13-PRO-MAX-tripadviser-clone.vercel.app.png'
import eshopkyweb from '../assets/Macbook-Air-e-shopky-frontend.vercel.app.png'
import eshopkyMobile from '../assets/iPhone-13-PRO-MAX-e-shopky-frontend.vercel.app.png'
import soldWeb from '../assets/sold_web.png'
import soldMob from '../assets/sold_mob.png'

function ProjectComp() {

 
  const skill = [
   {
      projectImg: soldWeb,
      mobileImg: soldMob,
      projectName: "Sold4U2Day (UK-based Property Sale Broker Website)",
      projectDetails: "Developed a responsive property sale broker website for the UK-based platform Sold4U2Day. Built using HTML, CSS, and Tailwind CSS, the site features a clean, professional design with a focus on usability and responsiveness. Implemented key UI components to showcase property listings, contact forms, and location-based content tailored for the UK market.",
      githubLink : `https://www.sold4u2day.co.uk/`,
      websiteUrl : `https://www.sold4u2day.co.uk/`
    },
    {
      projectImg: tripAdvisor,
      mobileImg: tripAdvisorMobile,
      projectName: "Trip Advisor Clone",
      projectDetails: "Develop a fully responsive TripAdvisor clone website using React.js. The website will allow users to search for and review travel destinations, hotels, restaurants, and attractions. It will feature user authentication, dynamic content updates, and an intuitive user interface. The project will use modern web development practices to ensure a seamless and enjoyable user experience across all devices.",
      githubLink : `https://tripadviser-clone.vercel.app/`,
      websiteUrl : `https://tripadviser-clone.vercel.app/`
    }, {
      projectImg: eshopkyweb,
      mobileImg: eshopkyMobile,
      projectName: "E-shopky",
      projectDetails: "Develop a fully responsive e-commerce website, E-Shopky, using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Axios for API requests. The website will offer a seamless shopping experience with features like product browsing, user authentication, shopping cart, checkout process, and order management. It will be designed to be fully responsive, ensuring an optimal user experience on all devices.",
      githubLink : `https://e-shopky-frontend.vercel.app/`,
      websiteUrl : `https://e-shopky-frontend.vercel.app/`
    },
  ]

  return (

    <div className="pb-20" id='projects'>
      <div className="px-3 md:px-5 container mx-auto relative mt-32 text-center">
        <h1 className="headline text-[5rem] md:text-[7rem] -top-[50px] left-1/2 -translate-x-1/2">PROJECTS</h1>
        <h2 className="text-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text font-medium mb-3">My Creations</h2>


        <div className="grid md:grid-cols-3 gap-4 mt-28">
          {
            skill.map(function (items) {
              return (

                <div className="mt-3 relative hover:scale-105 transition-all hover:shadow-lg hover:shadow-[#202E4B] hover:rounded-xl">



                  <div className="hover:bg-[#202E4B]  rounded-xl border border-gray-800 overflow-hidden">
                    <div className='overflow-hidden p-3 relative'>
                      <img src={items.projectImg} alt="" className=' object-cover mb-3 w-full  rounded-xl' />
                      <img src={items.mobileImg} alt="" className=' object-cover mb-3 absolute w-28 h-auto top-2 right-10' />

                    </div>
                    <div className='mx-4 '>

                      <h1 className='text-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold'>{items.projectName}</h1>
                      <p className='mt-1 text-sm text-white text-justify'>{items.projectDetails}</p>

                      <div className='mt-5 mb-3 flex items-center justify-center gap-10'>
                        <div>
                          <a href={items.githubLink} className='text-center text-white text-xs hover:text-pink-300' target='_blank' rel="noreferrer">
                          <img src={github} alt=""  className='w-8 h-8 mx-auto mb-2'/>
                          <p>Github</p>
                          </a>
                        </div>
                        <div>
                        <a href={items.websiteUrl} className='text-center text-white text-xs hover:text-pink-300' target='_blank' rel="noreferrer">
                          <img src={link} alt=""  className='w-8 h-8 mx-auto mb-2'/>
                          <p>Website Link</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="bg-green-300 h-80 rounded-2xl shadow-lg absolute  w-full">sas</div> */}
                </div>

              )
            })
          }
        </div>
      </div>
    </div>

  )
}
export default ProjectComp
