import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <span className="card-title">Project Title - {id}</span>
                <p>Deserunt deserunt sint elit occaecat minim adipisicing in anim id consectetur tempor anim qui esse. Proident excepteur enim laborum magna sunt ut fugiat irure eiusmod voluptate sit. Excepteur do sit irure mollit ut tempor laboris reprehenderit id et esse dolor. In enim dolore dolore anim enim ex. Duis aute voluptate consectetur Lorem occaecat irure esse ullamco sit qui non aute. Magna esse ad ut ad. Est cupidatat ut dolore ipsum labore consectetur eu dolore occaecat culpa veniam velit nulla adipisicing.</p>
            </div>
            <div className="card-action grey-lighten-4 grey-text">
                <div>Posted by the Net Ninja</div>
                <div>9th of July 10 am</div>
            </div>
        </div>
    )
}

export default ProjectDetails
