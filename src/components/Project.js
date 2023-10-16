import React from "react";
function Project() {
  return (
    <div>
      <h1 className="text-center">Projects</h1>
      <div className="project-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Language</th>
            <th scope="col">Project Link</th>
          </tr>
        </thead>
      </table>
      </div>
      <br />
    </div>
  );
}

export default Project;