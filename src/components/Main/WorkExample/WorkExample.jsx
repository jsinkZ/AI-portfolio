import React from "react"
import Projects from "./Projects/Projects"
import classes from "./WorkExample.module.scss"

const Work = () => {
    return(
        <div className={classes.workSection}> 
            <p className={classes.pTitle}> МОИ РАБОТЫ </p>
            <Projects/>
        </div>
    )
}

export default Work