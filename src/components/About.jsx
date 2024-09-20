import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Saptam, a passionate Web developer with a keen eye for MERN
          Stack .I strive to create impactful and visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          B.Tech in Mechanical Engineering From NM Institute of Engg. & Technology,BBSR in the year 2021.<br/>
          MERN Stack Devloper from the institute TECHMENTOR CORE in the year 2024.
          {/* [Degree/Certification],
          [Institution], [Year] [Relevant Course], [Platform/Institution],
          [Year] */}
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
        Front-End Development: Proficient in React.js, HTML5, CSS3, and JavaScript. I enjoy creating clean and intuitive user interfaces with a focus on responsive design.<br/>
        Back-End Development: Experienced in building robust server-side applications using Node.js, Express.js, and MongoDB. I also have experience working with RESTful APIs and integrating third-party services.<br/>
        Version Control: Comfortable with Git and GitHub for version control, allowing me to efficiently manage and collaborate on projects.<br/>
        UI/UX Design: I have a keen interest in UI/UX design principles and strive to create visually appealing and user-centric designs.<br/>
        Problem Solving: With a strong analytical mindset, I’m adept at identifying issues and developing creative solutions to overcome technical challenges.

          {/* Proficient in [Programming Languages] Experienced with [Software
          Tools/Technologies] Strong grasp of [Design Principles/Concepts]
          Excellent problem-solving skills Effective communicator and
          collaborator */}
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          MERN Stack Intern at GLOWTECHMOR Pvt. Ltd.
          {/* [Job Title], [Company/Organization], [Dates] [Brief description of
          responsibilities and achievements] [Job Title],
          [Company/Organization], [Dates] [Brief description of responsibilities
          and achievements] [Freelance/Contract Work], [Client/Organization],
          [Dates] [Brief description of projects and contributions] */}
        </span>
        <br />
        <br />
        {/* <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          [Award/Recognition], [Organization/Institution], [Year] [Achievement],
          [Organization/Platform], [Year]
        </span> */}
        {/* <br />
        <br /> */}
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
