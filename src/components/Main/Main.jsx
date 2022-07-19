import React from "react"
import Intro from "./Intro/Intro"
import classes from "./Main.module.scss"
import Work from "./Work/Work"

const Main = (props) => {
    return (
        <div>
            <div className={classes.backgroundWrap}>
                <div className={classes.backgroundFirst}></div>
                <div className={classes.backgroundSecond}></div>
            </div>
            <div className={classes.contentSection}>
                <Intro/>
                <Work/>
            </div>
        </div>
    )
}

export default Main