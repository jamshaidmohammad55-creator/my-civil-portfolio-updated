import './Projects.css';

const projects = [
  {
    title: 'Geospatial Mapping of Water Distribution System',
    description:
      'Developed a comprehensive GIS map of the existing water distribution network at GIK Institute for spatial analysis and infrastructure assessment.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path
          d="M6 10l12-4 12 4 12-4v28l-12 4-12-4-12 4V10z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M18 6v28M30 10v28" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="22" r="3" fill="currentColor" />
        <path
          d="M24 22c4-4 4-9 0-9s-4 5 0 9z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: 'Masjid Architectural Planning using AutoCAD',
    description:
      'Prepared a detailed Masjid plan using AutoCAD including layouts, dimensions and functional spaces.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 40V20l16-10 16 10v20" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M24 10V4M21 6h6" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="16" r="2" fill="currentColor" />
        <rect x="20" y="30" width="8" height="10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 40V26M36 40V26" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Smart Parking Analysis System',
    description:
      'Developed a Smart Parking Analysis System using Python for data collection, processing and visualization.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="6" y="6" width="36" height="36" rx="6" stroke="currentColor" strokeWidth="2" />
        <path
          d="M18 32V16h7a5 5 0 010 10h-7"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-icon">{project.icon}</div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
