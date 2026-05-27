import React, { useEffect, useState } from "react";

// Reusable Card Component
function Card({ title, children }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
      {title && <h3 className="text-2xl font-bold mb-4 text-blue-600">{title}</h3>}
      {children}
    </div>
  );
}

// Navbar Component
function Navbar() {
  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50">
      <div className="flex justify-center gap-8 text-lg">
        <a href="#profile" className="hover:text-gray-300">Profile</a>
        <a href="#skills" className="hover:text-gray-300">Skills</a>
        <a href="#qualifications" className="hover:text-gray-300">Qualifications</a>
        <a href="#projects" className="hover:text-gray-300">Projects</a>
        <a href="#contact" className="hover:text-gray-300">Contact</a>
      </div>
    </nav>
  );
}

// Hero Component
function Hero({ name, title }) {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-blue-500 py-20 text-center text-white">
      <h1 className="text-5xl font-bold mb-4">{name}</h1>
      <p className="text-xl">{title}</p>
    </section>
  );
}

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetch("https://suzana-mgina-2.onrender.com/api/portfolio")
      .then((res) => res.json())
      .then((data) => setPortfolio(data))
      .catch((err) => console.error("Error fetching portfolio:", err));
  }, []);

  if (!portfolio) {
    return <p className="text-center mt-20">Loading portfolio...</p>;
  }

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero name={portfolio.name} title={portfolio.title} />

      {/* Profile */}
      <section id="profile" className="max-w-5xl mx-auto p-10">
        <Card title="Personal Profile">
          <p className="text-lg leading-8">{portfolio.profile}</p>
        </Card>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto p-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {portfolio.skills.map((skill, i) => (
            <Card key={i}>
              <p className="text-gray-700">{skill}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Qualifications */}
      <section id="qualifications" className="max-w-5xl mx-auto p-10">
        <Card title="Qualifications">
          <ul className="list-disc pl-6 text-lg space-y-3">
            {portfolio.qualifications.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto p-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolio.projects.map((project, i) => (
            <Card key={i} title={project.title}>
              <p className="text-gray-700">{project.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
        <p className="text-lg mb-3">Email: {portfolio.contact.email}</p>
        <p className="text-lg mb-3">Phone: {portfolio.contact.phone}</p>
        <p className="text-lg">Location: {portfolio.contact.location}</p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        <p>© 2026 {portfolio.name} Portfolio | Built with Next.js & Flask</p>
      </footer>
    </div>
  );
}
