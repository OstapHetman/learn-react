import React from 'react'

const ProjectDeatils = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, recusandae quis cum sint aspernatur veniam. Cupiditate sint eum nihil, inventore nobis, cumque facilis dolores rem temporibus debitis dicta non? Praesentium!</p>
                </div>
                <div className="card-action grey lighten-4">
                    <div>Posted by the Ostap</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDeatils

