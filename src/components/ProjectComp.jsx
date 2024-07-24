import myimg from '../assets/my_img.jpg'
import About from './About'
import { Link, ScrollRestoration } from 'react-router-dom'
import Viewproject from './ViewProject'


function ProjectComp() {

  function handleView() {
    return <Viewproject />

  }
  const skill = [
    {
      projectName: "First Project",
      projectDetails: "lorem ipsum dor"
    }, {
      projectName: "First Project",
      projectDetails: "lorem ipsum dor"
    }, {
      projectName: "First Project",
      projectDetails: "lorem ipsum dor"
    }, {
      projectName: "First Project",
      projectDetails: "lorem ipsum dor"
    }
  ]

  return (

    <div className="sk h-[100vh]">
      <div className="px-3 md:px-0 container mx-auto relative mt-32">
        <h1 className="headline text-[4rem] md:text-[7rem] -top-[100px]">PROJECTS</h1>
        <h2 className="text-lg font-medium mb-3">My Creations</h2>


        <div className="grid md:grid-cols-3 gap-4 mt-16">
          {
            skill.map(function (items) {
              return (

                <div className="">



                  <div className="bg-white rounded-xl border border-gray-200 shadow-lg  overflow-hidden">
                    <img src={myimg} alt="" className=' h-36 w-full object-cover mb-3 hover:scale-105 transition-all rounded-xl' />
                    <div className='mx-4 '>

                      <h1 className=' text-xl font-semibold uppercase'>{items.projectName}</h1>
                      <p className='mt-1 text-base'>{items.projectDetails}</p>

                      <div className='mt-1 mb-3'>
                        <button onClick={handleView} className='text-sm text-pink-950 w-full'>View Projects →</button>
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