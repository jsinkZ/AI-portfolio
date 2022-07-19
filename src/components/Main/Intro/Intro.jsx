import React from "react"
import AboutMe from "./AboutMe/AboutMe"
import classes from "./Intro.module.scss"
import Socials from "./Socials/Socials"
import emailIcon from "./email-icon.png"
import phoneIcon from "./telephone-icon.png"


const Intro = () => {
    return(
            <div className={classes.introSection}>
                <p className={classes.pTitle}> ВСТУПЛЕНИЕ </p>
                <h2 className={classes.h2Greetings}> Аленичев Илья Владимирович </h2>
                <h3 className={classes.h3JobPosition}> Member of Rosatom Junior Council </h3>
                <AboutMe/>
                <p className={classes.pTitle}> КОНТАКТЫ </p>
                <div className={classes.myContacts}>
                    <div>
                        <a href="tel:+79260005005"> <img className={classes.contactIcon} src={phoneIcon} alt="phone"/> +7 926 000 50 05</a>
                    </div>
                    <div>
                        <a href="mailto:ilyaalenichev@gmail.com">  <img className={classes.contactIcon} src={emailIcon} alt="mail" /> ilyaalenichev@gmail.com  </a>
                    </div>
                </div>
                <div className={classes.socialSection}>
                    <p className={classes.pTitle}> ТАКЖЕ ЕСТЬ </p>
                    <Socials/>
                </div>
            </div>
    )
}

export default Intro