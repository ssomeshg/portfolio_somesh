
import reacticon from '../assets/react.webp'
import node from '../assets/node.webp'
import web from '../assets/pngegg.png'
import bootstrap from '../assets/bs5.webp'
import tailwind from '../assets/tailwind.webp'
import mango from '../assets/mongodb.webp'
import git from '../assets/git.webp'
import figma from '../assets/figma.webp'
import photoshop from '../assets/ps.webp'
import illustrator from '../assets/ai.webp'
import vercel from '../assets/vercel.png'
import render from '../assets/render.png'
const Skill = () => {

    const skills = [
        {
            icon: web,
            techo: "HTML,CSS,JS",

        },
        {
            icon: reacticon,
            techo: "React JS",

        },
        {
            icon: node,
            techo: "Node JS",

        },
        {
            icon: mango,
            techo: "Mongo DB",

        },
        {
            icon: bootstrap,
            techo: "Bootstrap",

        },
        {
            icon: tailwind,
            techo: "Tailwind",

        }
        
    ]
    const tools  = [
        
        {
            icon: git,
            techo: "GitHub",

        },
        {
            icon: vercel,
            techo: "Vercel"
        },
        {
            icon: render,
            techo: "Render"
        }
        ]
        const design  = [
        
            
            {
                icon: figma,
                techo: "Figma",
    
            },
            {
                icon: photoshop,
                techo: "Photoshop",
    
            },
            {
                icon: illustrator,
                techo: "Illustrator",
    
            }
            ]

    return (
        <>
            <div className="sk h-full" id='skills'>
                <div className="px-3 md:px-5 container mx-auto relative mt-32 text-center">
                    <h1 className="headline text-[7rem] -top-[100px] left-1/2 -translate-x-1/2">SKILLS</h1>
                    <h2 className="text-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text font-medium mb-3">My Top skills</h2>
                    <div className="grid grid-cols-2  md:grid-cols-5 gap-4 mt-16">
                        {
                            skills.map(function (items) {
                                return (
                                    <div className="skill__box grid  md:grid gap-3 items-center justify-items-center bg-[#202E4B] shadow-lg shadow-[#202E4B] border border-gray-700 rounded-lg p-4">
                                        <img src={items.icon} className='skill__box--img mx-auto md:mx-0 w-16 h-16' alt="" />
                                        <div>
                                            <h1 className='text-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text font-medium'>{items.techo}</h1>

                                        </div>

                                    </div>
                                )
                            })
                        }


                    </div>
                    <div className='mt-10'>
                        <h2 className="text-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text font-medium mb-3">Tools</h2>
                        <div className="grid grid-cols-2  md:grid-cols-5 items-center gap-4 mt-16">
                            {
                                tools.map(function(items) {
                                    return (
                                        <div className="skill__box grid  md:grid gap-3 items-center justify-items-center bg-[#202E4B] shadow-lg shadow-[#202E4B] border border-gray-700 rounded-lg p-4">
                                            <img src={items.icon} className='skill__box--img mx-auto md:mx-0 w-16 h-16' alt="" />
                                            <div>
                                                <h1 className='text-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text font-medium'>{items.techo}</h1>

                                            </div>

                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                    <div className='mt-10'>
                        <h2 className="text-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text font-medium mb-3">Designing Tools</h2>
                        <div className="grid grid-cols-2  md:grid-cols-5 gap-4 mt-16">
                            {
                                design.map(function(items) {
                                    return (
                                        <div className="skill__box grid  md:grid gap-3 items-center justify-items-center bg-[#202E4B] shadow-lg shadow-[#202E4B] border border-gray-700 rounded-lg p-4">
                                            <img src={items.icon} className='skill__box--img mx-auto md:mx-0 w-16 h-16' alt="" />
                                            <div>
                                                <h1 className='text-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text font-medium'>{items.techo}</h1>

                                            </div>

                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Skill