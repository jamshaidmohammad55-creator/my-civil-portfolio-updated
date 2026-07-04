import './Contact.css';

export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="container contact-inner">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:jamshaidmohammad55@gmail.com">jamshaidmohammad55@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/muhammad-khan-660b1a31b" target="_blank" rel="noopener noreferrer">linkedin.com/in/muhammad-khan-660b1a31b</a></p>
        <p className="contact-copyright">© {new Date().getFullYear()} Muhammad Khan. All rights reserved.</p>
      </div>
    </footer>
  );
}
