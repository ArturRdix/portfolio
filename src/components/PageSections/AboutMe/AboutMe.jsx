import React from 'react'
import './AboutMe.scss'


export default function AboutMe() {
  return (
    <section className='about-me-wrapper'>
      <div className="img-block">
        <img src="/img/about_me.jpg" alt="laptop" />
      </div>
      <div className="about-me-information">
        <h3>About Me</h3>
        <h4 className='about__title'>Frontend developer from Ukraine</h4>
        <p className='about__text'>
          My name is Artur Satsky. I'm a beginner front-end developer.
          <br /><br />
          My front-end development experience includes over a year of learning and developing pet projects with modern responsive design.
          <br /><br />
          Front-end development is not just a job for me, but something that brings me pleasure and the opportunity to realize myself. I strive to become part of a friendly and professional team in which I could develop my development skills and achieve greater results with it.
        </p>
      </div>
    </section>
  )
}
