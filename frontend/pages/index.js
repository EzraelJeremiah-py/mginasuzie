import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetch("https://mginasuzie.onrender.com/api/portfolio")
      .then(res => res.json())
      .then(data => setPortfolio(data))
      .catch(err => console.error("Error fetching portfolio:", err));
  }, []);

  if (!portfolio) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
  {/* Hero */}
    <header 
    className="text-center py-5 text-white shadow"
      style={{
        backgroundColor: "magenta"
      }}
>
  <h1 className="fw-bold">{portfolio.name}</h1>
  <h3 className="fw-light">{portfolio.title}</h3>
  <p className="mt-3">{portfolio.profile}</p>
  </header>


      {/* Content */}
      <main className="container py-5 flex-grow-1">
      {/* Skills */}
        <section className="mb-5 text-center">
        <h2 className="text-white mb-3">Skills</h2>
      {portfolio.skills.map((s, i) => (
        <span 
        key={i} 
        className="badge rounded-pill me-2 mb-2 fs-6 shadow-sm"
          style={{
            backgroundColor: "cyan",   // card color
            color: "black"             // text color for contrast
              }}
>
{s}
</span>
  ))}
    </section>


        {/* Qualifications */}
        <section className="mb-5 text-center">
          <h2 className="text-info mb-3">Qualifications</h2>
          {portfolio.qualifications.map((q, i) => (
            <span key={i} className="badge rounded-pill bg-dark text-warning me-2 mb-2 fs-6 shadow-sm">
              🎓 {q}
            </span>
          ))}
        </section>

        {/* Projects Dropdown */}
        <section className="mb-5">
          <h2 className="text-warning mb-3 text-center">Projects</h2>
          <div className="accordion" id="projectsAccordion">
            {portfolio.projects.map((p, i) => (
              <div className="accordion-item" key={i}>
                <h2 className="accordion-header" id={`heading${i}`}>
                  <button 
                    className="accordion-button collapsed fw-semibold" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#collapse${i}`}
                  >
                    {p.title}
                  </button>
                </h2>
                <div 
                  id={`collapse${i}`} 
                  className="accordion-collapse collapse" 
                  data-bs-parent="#projectsAccordion"
                >
                  <div className="accordion-body text-muted">
                    {p.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-5 text-center">
          <h2 className="text-danger mb-3">Contact</h2>
          <p>📧 {portfolio.contact.email}</p>
          <p>📍 {portfolio.contact.location}</p>
          <p>📞 {portfolio.contact.phone}</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-3 bg-gradient text-white" 
        style={{background: "linear-gradient(90deg, #0d6efd, #20c997)"}}>
        <small>© {new Date().getFullYear()} {portfolio.name} Portfolio</small>
      </footer>

      {/* Gradient Animation */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
