import React, { useEffect, useState } from "react";

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
      <nav className="bg-black text-white p-4 sticky top-0">
        <div className="flex justify-center gap-8 text-lg">
          <a href="#profile" className="hover:text-gray-300">Profile</a>
          <a href="#skills" className="hover:text-gray-300">Skills</a>
          <a href="#qualifications" className="hover:text-gray-300">Qualifications</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">{portfolio.name}</h1>
        <p className="text-xl text-gray-600">{portfolio.title}</p>
      </section>

      {/* Profile */}
      <section id="profile" className="max-w-5xl mx-auto p-10">
        <div className="bg-white p-10 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-5">Personal Profile</h2>
          <p className="text-lg leading-8">{portfolio.profile}</p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto p-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {portfolio.skills.map((skill, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Qualifications */}
      <section id="qualifications" className="max-w-5xl mx-auto p-10">
        <div className="bg-white p-10 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-5">Qualifications</h2>
          <ul className="list-disc pl-6 text-lg space-y-3">
            {portfolio.qualifications.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto p-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolio.projects.map((project, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-blue-500 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
        <p className="text-lg mb-3">Email: {portfolio.contact.email}</p>
        <p className="text-lg mb-3">Phone: {portfolio.contact.phone}</p>
        <p className="text-lg">Location: {portfolio.contact.location}</p>
      </section>
    </div>
  );
}
