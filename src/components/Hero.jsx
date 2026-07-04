import './Hero.css';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <h1>Civil Engineer &amp; Geospatial Analyst</h1>
        <p>
          Passionate about GIS, Drone Mapping, AutoCAD, Python Programming and
          Sustainable Infrastructure.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
