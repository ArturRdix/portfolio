import React, { useState } from "react";
import "./MyProjects.scss";
import MyProjectItems from "./MyProjectList/MyProjectItems";

export default function MyProjects() {
  const [projectList, setProjectList] = useState([
    {
      name: "Cleaning House",
      stack: "HTML/CSS, SASS/SCSS",
      link: "https://arturrdix.github.io/cleaning_landing/",
      git: "https://github.com/ArturRdix/cleaning_landing",
      img: "/img/project_img/cleaning_house.webp",
    },
    {
      name: "Box",
      stack: "HTML/CSS, React, React icons, VK API",
      link: "http://box.energizet.ru/",
      git: "https://github.com/ArturRdix/lingerie-store-app",
      description:
        "loremloremloremlorem lorem lorem lorem loremloremloremloremloremloremlorem loremloremloreml oremlorem",
    },
  ]);

  return (
    <section>
      <div className="projects-wrapper">
        {" "}
        {projectList.map((item) => (
          <MyProjectItems
            name={item.name}
            img={item.img}
            stack={item.stack}
            link={item.link}
            git={item.git}
          />
        ))}
      </div>
    </section>
  );
}
