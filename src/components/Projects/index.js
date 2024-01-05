import React, { useState } from "react";
import "./index.css";

const Projects = ({ projects, addProject }) => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const handleAddProject = () => {
    const newProject = {
      name: projectName,
      description: projectDescription,
    };

    addProject(newProject);

    setProjectName("");
    setProjectDescription("");
  };

  return (
    <div>
      <h1 className="whole">Projects</h1>

      <div>
        <label>Project Name:</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>

      <div>
        <label>Project Description:</label>
        <textarea
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
      </div>

      <button className="btn" onClick={handleAddProject}>
        Add Project
      </button>

      <div>
        <h2 className="whole">Projects View</h2>
        <ul className="list list-item">
          <li className="list-item">
            <div>
              <p className="name-pro">Insta Clone</p>
              <p className="para">
                InstaClone is my brainchild, a dynamic full-stack application
                meticulously crafted to replicate the essence of Instagram.
                Utilizing React for the front end and Node.js for the back end,
                I ensured a seamless user experience. The project showcased my
                prowess in UI/UX design, real-time updates, and efficient
                database management. Through meticulous deployment and
                optimization, InstaClone not only mirrored Instagram's
                functionalities but also introduced innovative features,
                standing as a testament to my technical proficiency and
                commitment to pushing the boundaries of full-stack development.
              </p>
            </div>
            <div>
              <p className="name-pro">Todo List</p>
              <p className="para">
                The Todo List project reflects my expertise in developing an
                intuitive task management system. Using JavaScript, HTML, and
                CSS, I created a responsive front end with React, enabling users
                to effortlessly add, edit, and mark tasks as completed. On the
                back end, Node.js powered seamless communication, ensuring a
                smooth user experience. This project showcased my attention to
                detail and ability to deliver practical solutions, emphasizing
                my commitment to enhancing user productivity through efficient
                and user-friendly applications.
              </p>
            </div>
            <div>
              <p className="name-pro"> QR Code Generator</p>
              <p className="para">
                In the QR Code Generator project, I harnessed JavaScript, HTML,
                and CSS to craft a dynamic and user-friendly application. Using
                React for the front end and Node.js for the back end, the
                project allows users to generate QR codes effortlessly.
                Meticulous attention was given to optimizing performance, and
                the project showcased my dedication to leveraging technology for
                simplicity and improved user experiences. This project is a
                testament to my innovation and proficiency in creating practical
                solutions that simplify tasks.
              </p>
            </div>
          </li>
          {projects.map((project, index) => (
            <li className="list-item" key={index}>
              <div>
                <p className="name-pro">{project.name}</p>
                <p className="para"> {project.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
