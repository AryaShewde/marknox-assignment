import React from "react";
import "./Portfolio.css"
import img1 from "../../images/pjimg1.png";
import img2 from "../../images/pjimg2.png";
import img3 from "../../images/pjimg3.png";
import img4 from "../../images/pjimg4.png";

const projectList = [
  {
    title: "Real Estate website using React JS and TailwindCss.",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: img1,
    link: "https://homesweethomeweb.netlify.app/",
    code: "https://github.com/AryaShewde/Real-estate-web"
  },
  {
    title: "Shoes E-com website using React JS, Redux and Bootstrap.",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: img2,
    link: "https://homesweethomeweb.netlify.app/",
    code: "https://github.com/AryaShewde/Shoes-shop-web"
  },
  {
    title: "Udemy Clone website using React JS and Styled-Components.",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: img3,
    link: "https://shoeenchant.netlify.app/",
    code: "https://github.com/AryaShewde/Udemy-clone"
  },
  {
    title: "Bloging website using React JS, MongoDB, ExpressJS, NodeJS (MERN)",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: img4,
    link: "https://eventsandnews.netlify.app/",
    code: "https://github.com/AryaShewde/ean-updated.git"
  },
];

const Portfolio = () => {
  return (
    <section>
      <div className="projects" id="portfolio">
        <div className="heading-projects">
          <h1>My Latest Projects</h1>
        </div>
        <div className="main-projects">
          <div className="col-projects">
            {projectList.map((project, i) => (
              <div key={i} className="sub-col-projects">
                <img className="img-projects card-img-top"
                  src={project.url} alt="..." />
                <div className="card-body">
                  <h1 id="tit">{project.title}</h1>
                  <p id="desc">{project.description}</p>
                  <a href={project.link} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                      className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd"
                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                      <path fillRule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                    </svg>
                  </a>
                  <a href={project.code} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;