import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:satyajitpatri05@gmail.com" data-cursor="disable">
                satyajitpatri05@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+917205076958" data-cursor="disable">
                +91 7205076958
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech – Computer Science & Engineering
              <br />
              BPUT, Odisha (2018 – 2022) · CGPA: 7.3/10
            </p>
          </div>
          <div className="contact-box">
            <h4>Connect</h4>
            <a
              href="https://satyajitpatri.netlify.app/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Portfolio <MdArrowOutward />
            </a>
            <a
              href="mailto:satyajitpatri05@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="tel:+917205076958"
              data-cursor="disable"
              className="contact-social"
            >
              Phone <MdArrowOutward />
            </a>
            <h4 style={{ marginTop: "24px" }}>Certifications</h4>
            <p>HTML, CSS, JavaScript – J Spider (2024)</p>
            <p>Java & MySQL – J Spider (2024)</p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Satyajit Patri</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
