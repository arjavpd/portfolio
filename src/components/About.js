import React, {Component} from "react";
import {Icon} from "@iconify/react";
import firebaseIcon from "@iconify/icons-logos/firebase";
import reactIcon from "@iconify/icons-logos/react";
import pythonIcon from "@iconify/icons-logos/python";
import awsIcon from "@iconify/icons-logos/aws";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id='about'>
        <div className='col-md-12'>
          <h1 style={{color: "black"}}>
            <span>{sectionName}</span>
          </h1>
          <div
            style={{marginTop: "4%", marginBottom: "4%"}}
            className='col-md-8 mx-auto center'>
            <div className='col-md-10'>
              <div className='card'>
                <div
                  className='card-body font-trebuchet text-justify ml-3 mr-3'
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}>
                  <br />
                  <span className='wave'>{hello} :) </span>
                  <br />
                  <br />
                  {about}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
