import React from "react";
import FabFashionImg from "../assets/fabfashion.png";
import AiFlixImg from "../assets/ai-flix.png";
import DevConnectImg from "../assets/devconnect.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      src: FabFashionImg,
      weblink: "https://fab-fashion.vercel.app/",
      githublink: "https://github.com/sharan-hs/FabFashion",
    },
    {
      id: 2,
      src: AiFlixImg,
      weblink: "https://ai-flix-lake.vercel.app/",
      githublink: "https://github.com/sharan-hs/AI-flix",
    },
    {
      id: 3,
      src: DevConnectImg,
      weblink: "https://dev-connect-frontend.vercel.app/",
      githublink: "https://github.com/sharan-hs/dev_connect_frontend",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="flex flex-wrap gap-10">
          {projectsList?.map(({ id, src, weblink, githublink }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg flex flex-col"
            >
              <img
                src={src}
                alt=""
                className="rounded-md min-h-[200px] duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <Link target="_blank" to={weblink}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </Link>
                <Link target="_blank" to={githublink}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
