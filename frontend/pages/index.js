// pages/index.js
import { useEffect, useState } from "react";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);
  const [openProject, setOpenProject] = useState(null);

  useEffect(() => {
    fetch("https://mginasuzie.onrender.com/api/portfolio") // adjust if backend URL differs
      .then(res => res.json())
      .then(data => setPortfolio(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  if (!portfolio) {
    return <p className="text-center mt-10 text-gray-600">Loading...</p>;
  }

  return (
    <div className="font-sans bg-gradient-to-b from-indigo-50 to-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-indigo-700 text-white py-12 text-center shadow-lg">
        <h1 className="text-4xl font-bold">{portfolio.name}</h1>
        <p className="mt-2 text-lg">{portfolio.title}</p>
        <p className="mt-3 max-w-2xl mx-auto text-indigo-100">{portfolio.profile}</p>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto px-8 py-14 space-y-14">
        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-700 border-b-2 border-indigo-700 pb-2 mb-6">Skills</h2>
          <p className="text-gray-700 text-lg">{portfolio.skills.join(" • ")}</p>
        </section>

        {/* Qualifications */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-700 border-b-2 border-indigo-700 pb-2 mb-6">Qualifications</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {portfolio.qualifications.map((q, i) => <li key={i}>{q}</li>)}
          </ul>
        </section>

        {/* Projects with dropdown */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-700 border-b-2 border-indigo-700 pb-2 mb-6">Projects</h2>
          <div className="space-y-6">
            {portfolio.projects.map((proj, i) => (
              <div key={i} className="bg-indigo-50 rounded-lg shadow hover:shadow-md transition p-4">
                <button
                  onClick={() => setOpenProject(openProject === i ? null : i)}
                  className="w-full text-left text-xl font-bold text-indigo-800 focus:outline-none"
                >
                  {proj.title}
                </button>
                {openProject === i && (
                  <p className="mt-3 text-gray-700">{proj.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-700 border-b-2 border-indigo-700 pb-2 mb-6">Contact</h2>
          <ul className="space-y-2 text-gray-700 text-lg">
            <li>Email: {portfolio.contact.email}</li>
            <li>Phone: {portfolio.contact.phone}</li>
            <li>Location: {portfolio.contact.location}</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-700 text-white text-center py-6 mt-10">
        <p className="text-sm">© {new Date().getFullYear()} {portfolio.name} Portfolio | All Rights Reserved</p>
      </footer>
    </div>
  );
}
