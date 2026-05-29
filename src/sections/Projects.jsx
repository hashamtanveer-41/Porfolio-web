import React from 'react'
import {myProjects} from "../constants/index.js";
import Project from "../components/Project.jsx";

const Projects = () => {
    return (
        <section className="relatice c-space section-spacing">
            <h2 className="text-heading">
                My Selected Projects
            </h2>
            <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-12  h-[1px] w-full"/>
            {myProjects.map((project)=> (
                <Project key={project.id} {...project}/>
            ))}
        </section>
    )
}
export default Projects;
