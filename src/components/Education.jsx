import './Education.css';

const education = [
  {
    degree: 'BSc Civil Engineering',
    years: '2023 - 2027',
    school: 'Ghulam Ishaq Khan Institute of Engineering Sciences & Technology (GIKI)',
    detail: 'CGPA: 3.20 / 4.00',
    side: 'left',
  },
  {
    degree: 'FSc Pre-Engineering',
    years: '2021 - 2023',
    school: 'Army Burn Hall College, Abbottabad',
    detail: 'Marks: 85%',
    side: 'right',
  },
  {
    degree: 'Matriculation',
    years: '2019 - 2021',
    school: 'Army Public School & College, Abbottabad',
    detail: 'Marks: 90%',
    side: 'left',
  },
];

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="timeline">
          {education.map((item) => (
            <div className={`timeline-row timeline-${item.side}`} key={item.degree}>
              <div className="timeline-card">
                <h3>{item.degree}</h3>
                <span className="timeline-years">{item.years}</span>
                <p>{item.school}</p>
                <p className="timeline-detail">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
