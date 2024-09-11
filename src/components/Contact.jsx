
import React from 'react'
import linkArrow from '../assets/expand-arrows.png'
import git from '../assets/git.webp'
import email from '../assets/gmail.png'
import linkedin from '../assets/linkedin.png'
import whatsapp from '../assets/whatsapp.png'
export default function Contact() {
    const contactDetail = [
        {
            contactIcon: linkedin,
            contactName: "Linkedin",
            contactLink: `https://www.linkedin.com/in/someshwaran-g-4a4b2830b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bu7%2FO%2BVY1QZSJV2EzJPKB9A%3D%3D`
        },
        {
            contactIcon: email,
            contactName: "Gmail",
            contactLink: `mailto:[ssomeshg740@gmail.com]`
        },
        {
            contactIcon: git,
            contactName: "GitHub",
            contactLink: `https://github.com/ssomeshg/SOMESHWARAN`
        },
        {
            contactIcon: whatsapp,
            contactName: "WhatsApp",
            contactLink: `https://api.whatsapp.com/send/?phone=917639749250&text&type=phone_number&app_absent=0`
        }
    ]
    return (
        <div className='py-10' id='contact'>
            <div className="px-3  md:px-5 container mx-auto relative mt-32 text-center">
                <h1 className="headline text-[6rem] -top-[100px] left-1/2 -translate-x-1/2">Contact</h1>
                <h2 className="text-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text font-medium mb-3">My Contact Details</h2>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-4 mt-14 px-5 md:px-5'>
                    {

                        contactDetail.map((data) => {
                            return (
                                <a href={data.contactLink} target='_blank'>
                                    <div className='bg-[#202E4B] border-gray-700 flex justify-center gap-5 items-center relative p-5 rounded-2xl'>
                                        <div className='absolute bg-pink-900 h-10 w-10 -right-3 -top-3 rounded-full flex items-center justify-center'><img src={linkArrow} alt="" className='w-4 h-auto' /></div>
                                        <div>
                                            <img src={data.contactIcon} className='w-8 h-8' alt="" />
                                        </div>
                                        <div className="text-base text-white font-medium">{data.contactName}</div>

                                    </div>
                                </a>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}
