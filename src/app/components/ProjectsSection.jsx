"use client"
import React,{useState, useRef} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {animate, motion, useInView} from 'framer-motion'
const projectsData = [
  {
    id: "1",
    title: "Full Stack FYP Project 1",
    description: "Created with the help of technologies like JavaScript, React.Js , Node.Js, Express.Js and redux for state management, in order to automate the process of creating coucnils and adding members into it at SZABIST.",
    image: "/images/project/fyp-demo.png",
    tag: ["All", "Web"],
    gitUrl: '/',
    previewUrl: '/'
  },
  {
    id: "2",
    title: "Full Stack FYP Project 2",
    description: "A fully functional and responsive users list of my FYP project created with MERN Stack.",
    image: "/images/project/fyp-demo-2.png",
    tag: ["All", "Web"],
     gitUrl: '/',
    previewUrl: '/'
  },
  {
    id: "3",
    title: "MERN Blogging Web App",
    description: "The MERN blogging web app is a full-stack application that enables users to create, read, update, and delete blog posts. Leveraging the MERN stack (MongoDB, Express.js, React.js, and Node.js) and Redux Toolkit for state management, the app provides a seamless blogging experience with features like user authentication, post management, and a responsive design.",
    image: "/images/project/mern-home-page.png",
    tag: ["All", "Web"],
     gitUrl: '/',
    previewUrl: '/'
  },
  {
    id: "4",
    title: "MERN Blogging App ",
    description: "The login page of the MERN blogging web app allows users to securely authenticate their accounts. Users can enter their email and password to access their profiles and blog management features. The page includes validation checks and error messages to guide users in correcting any login issues",
    image: "/images/project/mern-login.png",
    tag: ["All"],
     gitUrl: '/',
    previewUrl: '/'
  },
  {
    id: "5",
    title: "Iylus Dashboard",
    description: "The Iylus Dashboard App is a React-based application designed for managing and visualizing data through a user-friendly dashboard interface. It features interactive charts, data filters, and real-time updates, providing users with comprehensive insights and efficient management tools.",
    image: "/images/project/iylus-dash.png",
    tag: ["All", "Web"],
    gitUrl: '/',
    previewUrl: '/'
  },
  {
    id: "6",
    title: "Iylus Dashboard",
    description: "The login page of the Iylus Dashboard App allows users to securely sign in to their accounts. Users can enter their credentials to gain access to the dashboard features. The page includes real-time validation and clear error messages to ensure a smooth login process.",
    image: "/images/project/iylus-log.png",
    tag: ["All", "Mobile"],
     gitUrl: '/',
    previewUrl: '/'
  },
];
const ProjectsSection = () => {

    const [tag, setTag] = useState('All')
    const ref = useRef(null);
    const isInView = useInView(ref,{once:true})
    const handleTagChange=(selectedTag)=>{
setTag(selectedTag)

    }
    const filterProjects = projectsData.filter((project)=>(
        project.tag.includes(tag)
    ))

    const cardVariants = {
      initial: {y:50, opacity:0},
      animate:{y:0, opacity:1}
    }
  return (
    <section id='projects' >
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 '>My Projects</h2>
     <div className='text-white flex flex-row items-center justify-center py-6 gap-2'>
        <ProjectTag onClick={handleTagChange} isSelected={tag === "All"} name={"All"}/>
        <ProjectTag onClick={handleTagChange} isSelected={tag === "Web"} name={"Web"}/>
        <ProjectTag onClick={handleTagChange} isSelected={tag === "Mobile"} name={"Mobile"}/>
        {/* <button className='rounded-full border-2 border-purple-500 px-6 py-2 text-xl cursor-pointer'>All</button>
        <button className='rounded-full border-2 border-slate-500 hover:border-white px-6 py-2 text-xl cursor-pointer'>Web</button> */}
     </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
      {filterProjects.map((project, index) => (
        <motion.li key={index} variants={cardVariants}
         initial="initial" animate={isInView? "animate":"initial"}
         transition={{duration:0.3, delay: index*0.4}}
         > 
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imgUrl={project.image}
          tags={project}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
        />
        </motion.li>
      ))}
      </ul>
     
    </section>
  );
};

export default ProjectsSection;
