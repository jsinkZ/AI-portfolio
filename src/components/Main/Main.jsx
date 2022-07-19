import React from "react"
import BusinessInfo from "./BusinessInfo/BusinessInfo"
import classes from "./Main.module.scss"
import WorkExample from "./WorkExample/WorkExample"

const Main = (props) => {
    return (
        <div>
            <div className={classes.backgroundWrap}>
                <div className={classes.backgroundFirst}></div>
                <div className={classes.backgroundSecond}></div>
            </div>
            <div className={classes.contentSection}>
                <BusinessInfo/>
                {/* <WorkExample/> */}
            </div>
        </div>
    )
}

export default Main