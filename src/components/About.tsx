import "./styles/About.css";

const photos = [
  {
    src: "/images/satyajit-photo-1.png",
    alt: "Satyajit Patri",
  },
  {
    src: "/images/satyajit-photo-2.png",
    alt: "Satyajit Patri",
  },
];

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-photos">
        {photos.map((photo) => (
          <div className="about-photo-frame" key={photo.src}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </div>
        ))}
      </div>
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Results-driven IT Engineer with hands-on experience in Pharmaceutical IT
          Infrastructure, Computer System Validation (CSV), Network Security,
          ServiceNow Administration, ERP Systems, and Software Development. Strong
          understanding of EU-GMP compliance requirements and regulated plant
          environments. Skilled in IT compliance documentation, system validation
          lifecycle, secure data management, and plant software configuration.
        </p>
      </div>
    </div>
  );
};

export default About;
