import React from "react";

function About() {
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="display-4">Hey there, I'm Surya Teja! 🌟</h1>
        <p className="lead">Welcome to my world of code and creativity.</p>
      </div>

      <div className="about-main">
        <p>
          Hello, I'm Surya Teja, a passionate Computer Science Engineering
          student at Vellore Institute of Technology, Chennai. I'm currently in
          my 3rd year, exploring the vast world of technology and learning new
          programming languages.
        </p>

        <ul className="list-unstyled">
          <li>
            🚀 I’m currently diving deep into various programming languages and
            technologies.
          </li>
          <li>💡 Proficient in C, C++, Java, and Python.</li>
          <li>💻 Enthusiastic about Competitive Coding in C++.</li>
          <li>🛠️ Actively working on exciting Development Projects.</li>
          <li>
            🌐 Passionate about Artificial Intelligence and Web Development.
          </li>
        </ul>

        <div className="text-center">
          <h4 className="mb-3">Education Journey 🎓</h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Qualification</th>
                <th scope="col">Institute</th>
                <th scope="col">Grade</th>
                <th scope="col">Year of Completion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">B.Tech</th>
                <td>VIT Chennai</td>
                <td>91 %</td>
                <td>2021 - Present</td>
              </tr>
              <tr>
                <th scope="row">12th</th>
                <td>Sri Chaitanya Junior College, Vijayawada</td>
                <td>98.0 %</td>
                <td>2019 - 2021</td>
              </tr>
              <tr>
                <th scope="row">10th</th>
                <td>Sri Chaitanya Techno School, Vijayawada</td>
                <td>10 GPA</td>
                <td>2019</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default About;
