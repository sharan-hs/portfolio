import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-12">
          I have 2 years of experience as a Middleware Engineer at Accenture,
          where I collaborated with frontend and backend teams to handle
          production requests , resolve issues and optimize multiple
          applications for global clients. Eager to broaden my skillset, I
          transitioned to Full Stack development, specializing in the MERN
          stack.
        </p>

        <br />

        <ul className="text-xl">
          <p className="py-2">
            In my role as a Full Stack Developer, I have gained proficiency in:
          </p>
          <li>
            Frontend development: Building user interfaces using React,
            leveraging state management libraries like Redux, and implementing
            responsive design principles.
          </li>
          <li className="py-2">
            Backend development: Creating RESTful APIs with Node.js and
            Express.js, interacting with MongoDB databases, and implementing
            authentication and authorization mechanisms.
          </li>{" "}
          My hobbies include playing guitar, football and exploring new
          destinations through travel and trekking.
        </ul>
      </div>
    </div>
  );
};

export default About;
