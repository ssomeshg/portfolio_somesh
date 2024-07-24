import { useState } from 'react'
import reacticon from '../assets/react.webp'
import node from '../assets/node.webp'
import web from '../assets/webtech.webp'
import bootstrap from '../assets/bs5.webp'
import tailwind from '../assets/tailwind.webp'
import mango from '../assets/mongodb.webp'
import git from '../assets/git.webp'
import figma from '../assets/figma.webp'
import photoshop from '../assets/ps.webp'
import illustrator from '../assets/ai.webp'
const Skill = () => {

    const [skills, mySkills] = useState([
        {
            icon: web,
            techo: "HTML,CSS,JS",
            
        },
        {
            icon: reacticon,
            techo: "React",
            
        },
        {
            icon: node,
            techo: "Node js",
            
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
            
        },
        {
            icon: git,
            techo: "GitHub",
            
        },
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
    ])
    return (
        <>
            <div className="sk h-full">
                <div className="px-3 md:px-5 container mx-auto relative mt-32">
                    <h1 className="headline text-[7rem] -top-[100px]">SKILLS</h1>
                    <h2 className="text-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text font-medium mb-3">My Top skills</h2>
                    <div className="grid grid-cols-2  md:grid-cols-5 gap-4 mt-16">
                        {
                            skills.map(function (items) {
                                return (
                                    <div className="skill__box grid  md:flex gap-3 items-center justify-around bg-[#202E4B] shadow-lg shadow-[#202E4B] border border-gray-200 rounded-lg p-4">
                                        <img src={items.icon} className='skill__box--img mx-auto md:mx-0 w-12 h-12' alt="" />
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
        </>
    )
}


export default Skill