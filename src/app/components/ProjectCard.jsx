import React from 'react'
import { HiMiniCodeBracket } from "react-icons/hi2";
import { GoEyeClosed } from "react-icons/go";
import Link from 'next/link';
const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl}) => {
  return (
    <div>
     <div className=" relative h-52 md:h-72 group " style={{background:`url(${imgUrl})`, backgroundSize:'cover'}}>
<div className='overlay flex gap-2 items-center justify-center  absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
<Link href={gitUrl} className='h-14 w-14 border-2 relative group/link rounded-full border-[#ABD7BE] hover:border-white'>
<HiMiniCodeBracket className='h-10 w-10 text-[#ABD7BE]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
</Link>
<Link href={previewUrl} className='h-14 w-14 border-2 relative group/link rounded-full border-[#ABD7BE] hover:border-white'>
<GoEyeClosed className='h-10 w-10 text-[#ABD7BE]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
</Link>
</div>
     </div>
     <div className='text-white mt-4 rounded-b-xl bg-[#181818]py-6 px-4'>
        <h2 className='text-xl font-semibold mb-2'>{title}</h2>
        <p className='text-[#ADB7BE]'> {description}</p>

     </div>
    </div>
  )
}

export default ProjectCard
