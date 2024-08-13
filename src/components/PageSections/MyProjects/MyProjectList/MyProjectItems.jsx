import React from "react";
import "./MyProjectItems.scss";
import { FaGithub } from "react-icons/fa";
import { PiLinkSimpleHorizontalDuotone } from "react-icons/pi";

export default function MyProjectItems({ name, stack, link, git, img }) {
  return (
    <article className="project-item__wrapper">
      <a target="_blank" href={link}>
        <img src={img} alt="" />
      </a>
      <div className="info__block">
        <h3>{name}</h3>
        <div className="info__block-link"><a target="_blank" href={link} className="info__block-link__item">
          Page  <PiLinkSimpleHorizontalDuotone />
        </a>
        <a target="_blank" href={git} className="info__block-link__item">
          GitHub  <FaGithub />
        </a></div>
        <p>STACK: <span>{stack}</span></p>
      </div>
    </article>
  );
}
