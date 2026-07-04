import { certImg } from '../images';
import './Certificate.css';

const certificates = [
  {
    title: 'SOLIDWORKS 3D CAD for Education',
    issuer: 'Coursera — Dassault Systèmes',
    image: certImg,
  },
];

export default function Certificate() {
  return (
    <section id="certificate" className="section certificate">
      <div className="container">
        <h2 className="section-title">Certificate</h2>

        <div className="certificate-grid">
          {certificates.map((cert) => (
            <div className="certificate-card" key={cert.title}>
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
