import React from "react"
import { NavLink } from "react-router-dom"
import classes from "./Projects.module.scss"

const Projects = () => {
    return(
            <NavLink to="/" className={classes.projNav}>
                <div className={classes.project}> Название проекта </div>
            </NavLink>
        )
}

export default Projects