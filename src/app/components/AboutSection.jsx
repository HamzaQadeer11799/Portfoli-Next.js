"use client";
import React, {useState, useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA= [{
    title: "Skills",
    id: "skills",
    content: (
        <ul className='list-disc pl-2'>
            <li>HTML&CSS</li>
            <li>JavaScript</li>
            <li>React.Js</li>
            <li>Node.Js</li>
            <li>Express.Js</li>
            <li>MongoDB</li>
            <li>Redux</li>
            <li>Next.Js</li>
        </ul>
    )
},
{
    title:"Education",
    id:"education",
    content:(
        <ul className='list-disc pl-2'>
            <li>Bachelor&apos; of Science in Software Engineering</li>
            <li>SZABIST University, Isb</li>
            <li>CGPA: 3.51</li>
        </ul>
    )
},{
    title: 'Experience',
    id: 'experience',
    content:(
        <ul className='list-disc pl-2'>
            <li>FrontEnd Developer At Zigron</li>
            <li>FullStack Developer At Zigron</li>
        </ul>
    )
}]
const AboutSection = () => {
    const [tab, setTab] = useState('skills')
    const [isPending, startTransiton] = useTransition();
    const handleTabChange= (id)=>{
        startTransiton(()=>{
            setTab(id)
        })
    }
  return (
    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gapp-16 sm:py-16 xl:px-16'>
<Image src={'/images/about-image.png'} alt={"about image"} width={500} height={500} />
      <div className=''>
        <h2 className='text-4xl font-bold text-white md: mb-4'>About Me</h2>
        <p className='text-base lg:text-lg'>
            I am a full stack web developer with a 
            passion for creating Interactive and responsive
            web applications. I have experience working wih HTML, CSS,
            JavaScript, React, Redux, Node.Js, Express,
            MongoDB and Next.Js. I am a quick learner and I am
            always looking to expand my knowledge and skill set.
            I am a team player and I am excited to work with
            others to create amazing applications.
        </p>
        <div className='flex flex-row mt-8'>
            <TabButton selectTab={()=>handleTabChange("skills")} active={tab === 'skills'}>Skills</TabButton>
            <TabButton selectTab={()=>handleTabChange("education")} active={tab === 'education'}>Education</TabButton>
            <TabButton selectTab={()=>handleTabChange("experience")} active={tab === 'experience'}>Experience</TabButton>

        </div>
        <div className='mt-8'>
            {TAB_DATA.find((t)=> t.id === tab).content}
        </div>
      </div>
      </div>
    </section>
  )
}

export default AboutSection
