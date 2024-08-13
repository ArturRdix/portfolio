import React from 'react'
import './MainContent.scss'

export default function MainContent() {

    return (
        <section className='main-container'>
            <div className="hero-main">
                <div className="hero-text">
                    <h1 className='hero__title'>
                    Front-End React Developer
                    </h1>
                    <p className='hero__text'>
                        Hello, I'm Arthur Satsky. Passionate React frontend developer from Ukraine.
                    </p>
                </div>
                <div className="hero-img">
                    <img
                        src="./public/img/my_photo.jpg"
                        alt="My photo" />
                </div>
            </div>
            <div className="hero-skills">
                <p>
                    Tech Stack
                </p>
                <div className="skills-icons">
                    <img src="./public/img/skill_icons/html_icon.png" alt="html_icon" />
                    <img src="./public/img/skill_icons/css_icon.png" alt="css_icon" />
                    <img src="./public/img/skill_icons/js_icon.png" alt="js_icon" />
                    <img src="./public/img/skill_icons/react_icon.png" alt="react_icon" />
                </div>
            </div>
        </section>
    )
}
