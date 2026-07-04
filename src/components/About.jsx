import { profileImg } from '../images';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-card">
          <div className="about-photo">
            <img src={profileImg} alt="Muhammad Khan" />
          </div>

          <div className="about-text">
            <h3>Hello! I'm Muhammad Khan</h3>
            <p>
              An ambitious Civil Engineering undergraduate with a strong
              inclination toward innovative infrastructure solutions,
              geospatial analysis, and data-driven problem solving.
            </p>
            <p>
              Passionate about integrating engineering principles with modern
              technologies such as GIS, AutoCAD and Python.
            </p>
            <p>
              Adept at transforming complex technical challenges into
              practical solutions through analytical thinking, precision and
              continuous learning.
            </p>
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
