import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            {/*If we have projects map through project else don't*/}
           {projects && projects.map(project => {
                return (
                    <ProjectSummary project={project} key={project.id}/>
                )
           })}
        </div>
    )
}

export default ProjectList;