import React, {Component} from "react";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
    };
  }

  render() {
    let navToUrl = url => {
      window.open(url, "_blank");
    };

    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className='col-sm-12 col-md-6 col-lg-4'
            key={projects.title}
            style={{cursor: "pointer"}}>
            <span className='portfolio-item d-block'>
              <div className='foto' onClick={() => navToUrl(projects.url)}>
                <div>
                  <img
                    src={projects.images[0]}
                    alt='projectImages'
                    height='230'
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                    }}
                  />
                  <span className='project-date'>{projects.startDate}</span>
                  <br />
                  <p className='project-title-settings mt-3'>
                    {projects.title}
                    <i
                      className='fas fa-external-link-alt'
                      style={{marginLeft: "10px"}}></i>
                  </p>
                  <p className='modal-description'>{projects.description}</p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id='portfolio'>
        <div className='col-md-12'>
          <h1 className='section-title' style={{color: "black"}}>
            <span>{sectionName}</span>
          </h1>
          <div className='col-md-12 mx-auto'>
            <div className='row mx-auto'>{projects}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
