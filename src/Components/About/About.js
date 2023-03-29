import React from "react"
import Styles from './About.module.css'

export function AboutMe(){
    return(
        <>
    <div className={Styles.detail}>
      <div className={Styles.des}>
        <ul>
          <h1 className={Styles.name} id={Styles.firstname}>Shubham</h1>
          <h1 className={Styles.name} id={Styles.secondname}>Sharma</h1>
          <h3 className={Styles.about}>
            Hi, I've done my Bachelors in Technology from Guru Jambheshwar
            University as a Mechanical Engineer with the CGPA of 7.0.2.
            Currently I am dedicating my time to become a next great
            <b>DEVELOPER!</b> With the help of Functionup.
          </h3>
          <h2 className={Styles.heading}>General info</h2>
          <div className={Styles.generalinfo}>
            <p className={Styles.font}>Date of Birth</p>
            <p className={Styles.light}>Sep 15, 1997</p>
          </div>
          <div className={Styles.generalinfo}>
            <p className={Styles.font}>E-mail</p>
            <p className={Styles.light}>shub98897@gmail.com</p>
          </div>
          <div className={Styles.generalinfo}>
            <p className={Styles.font}>Phone</p>
            <p className={Styles.light}>+91-9466698897</p>
          </div>
        </ul>
      </div>

      <div>
        <img
          src="http://drive.google.com/uc?export=view&id=1mbm00S8pHCq-KmNd_YdSyyUniFEYJspT"
          alt="image"
        />
      </div>
    </div>
        </>
    )
}