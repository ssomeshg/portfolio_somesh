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
            content: "lorem ipsum dolor sit amet"
        },
        {
            icon: reacticon,
            techo: "React",
            content: "lorem ipsum dolor sit amet"
        },
        {
            icon: node,
            techo: "Node js",
            content: "lorem ipsum dolor sit amet"
        },
        {
            icon: mango,
            techo: "Mongo DB",
            content: "lorem ipsum dolor sit amet"
        },
        {
            icon: bootstrap,
            techo: "Bootstrap",
            content: "lorem ipsum dolor sit amet"
        },
        {
            icon: tailwind,
            techo: "Tailwind",
            content: "lorem ipsum dolor sit amet"
        },
        {
            icon: git,
            techo: "GitHub",
            content: "lorem ipsum dolor sit amet"
        },
        {
            icon: figma,
            techo: "Figma",
            content: "lorem ipsum dolor sit amet"
        },
        {
            icon: photoshop,
            techo: "Photoshop",
            content: "lorem ipsum dolor sit amet"
        },
        {
            icon: illustrator,
            techo: "Illustrator",
            content: "lorem ipsum dolor sit amet"
        }
    ])
    return (
        <>
            <div className="sk h-[100vh]">
                <div className="px-3 md:px-0 container mx-auto relative mt-32">
                    <h1 className="headline text-[7rem] -top-[100px]">SKILLS</h1>
                    <h2 className="text-lg font-medium mb-3">My Top skills</h2>
                    <div className="grid md:grid-cols-3 gap-4 mt-16">
                        {
                            skills.map(function (items) {
                                return (
                                    <div className="skill__box flex gap-3 items-center justify-around bg-white shadow-lg shadow-gray-200 border border-gray-200 rounded-lg p-4">
                                        <img src={items.icon} className='skill__box--img w-12 h-12' alt="" />
                                        <div>
                                            <h1 className='text-xl'>{items.techo}</h1>
                                            <p>{items.content}</p>
                                        </div>
                                        <p>→</p>
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