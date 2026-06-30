import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Hardware & Software Engineer</h4>
                <h5>Angia Rx Life Science Pvt. Ltd., Roorkee</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Supporting IT infrastructure for pharmaceutical manufacturing unit.
              Assisting in CSV documentation (URS, FS, DS, IQ, OQ, PQ), managing
              secure data backup & archival systems, ERP and plant software
              configuration, user access control, audit trail monitoring, and IT
              SOP preparation for regulated environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Hardware & Software Engineer</h4>
                <h5>Pritam International Pvt. Ltd.</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Hardware troubleshooting & network setup, ERP support & system
              configuration, server maintenance & backup monitoring, IT support for
              operations, and camera system setup.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hardware & Software Engineer</h4>
                <h5>Dravinlabs Pvt. Ltd., Bangalore</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              LAN/WAN setup & IP configuration, router & firewall configuration,
              system troubleshooting & maintenance, and software installation &
              support across enterprise environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
