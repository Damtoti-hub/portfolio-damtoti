
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [typedName, setTypedName] = useState("");
  const fullName = "Damtoti KANGBIE";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypedName(fullName.slice(0, i));
      i++;
      if (i > fullName.length) clearInterval(timer);
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-[#0a0f1a] text-white min-h-screen font-sans overflow-x-hidden">
      {/* Animated Hero with background particles */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 bg-[#0a0f1a] overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <circle cx="10" cy="10" r="1" fill="#3b82f6">
              <animate attributeName="cy" dur="10s" values="0;100;0" repeatCount="indefinite" />
              <animate attributeName="cx" dur="15s" values="0;100;0" repeatCount="indefinite" />
            </circle>
            <circle cx="80" cy="40" r="1" fill="#3b82f6">
              <animate attributeName="cy" dur="12s" values="100;0;100" repeatCount="indefinite" />
              <animate attributeName="cx" dur="18s" values="100;0;100" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
        <h1 className="text-5xl font-extrabold text-blue-400 z-10 mb-2 tracking-wide">{typedName}</h1>
        <p className="text-gray-400 text-lg z-10">Data Analyst • Valorisation de la Donnée • Projets Impactants</p>
        <a
          href="#projets"
          className="mt-6 inline-block px-6 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-500 rounded-full transition shadow-lg z-10"
        >
          🚀 Voir mes projets
        </a>
      </section>

      {/* About */}
      <section className="p-10 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-300 border-b border-gray-700 pb-2 mb-6">Présentation</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          En fin de Master Chef de Projet Data & IA, je suis passionné par la valorisation des données métiers.
          Fort d'expériences dans la banque privée, le développement durable et l'analyse marketing,
          je conçois des solutions data orientées utilisateur avec Power BI, Python, SQL et Excel.
        </p>
      </section>

      {/* Projects */}
      <section id="projets" className="p-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-[#121d30] p-6 rounded-xl border border-blue-900 shadow-md hover:shadow-blue-500/30 transition">
          <h3 className="text-xl font-semibold text-blue-300 mb-2">Power BI & Excel</h3>
          <p className="text-gray-400 text-sm mb-3">
            Dashboards dynamiques, reportings automatisés, analyse de performances commerciales.
          </p>
          <a href="https://drive.google.com/drive/u/0/folders/1YHdBZBWTA4o9NGcPOTrhsso3o-ykXi2U"
             className="text-blue-400 underline text-sm hover:text-blue-300" target="_blank" rel="noopener noreferrer">
            📊 Voir les projets
          </a>
        </div>
        <div className="bg-[#121d30] p-6 rounded-xl border border-blue-900 shadow-md hover:shadow-blue-500/30 transition">
          <h3 className="text-xl font-semibold text-blue-300 mb-2">Python & Jupyter</h3>
          <p className="text-gray-400 text-sm mb-3">
            Analyse exploratoire, prédictions, visualisations interactives avec Python, pandas, matplotlib, modèles ML.
          </p>
          <a href="https://drive.google.com/drive/u/0/folders/1DJHIBNbenGjifk7iUVuQMdXZButK2uy-"
             className="text-blue-400 underline text-sm hover:text-blue-300" target="_blank" rel="noopener noreferrer">
            🧪 Voir les notebooks
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="p-10 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-300 border-b border-gray-700 pb-2 mb-6">Compétences</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300">
          {["Python", "Power BI", "SQL / SQLite / MySQL", "Excel / Power Query / VBA", "Machine Learning", "Data Visualisation"].map(skill => (
            <div key={skill} className="bg-[#182940] p-3 rounded-md text-center">{skill}</div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="p-10 max-w-5xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-blue-300 border-b border-gray-700 pb-2 mb-6">Contact</h2>
        <p className="text-gray-300 text-sm mb-2">
          ✉️ Email : <a href="mailto:dfkangbie@gmail.com" className="text-blue-400 underline">dfkangbie@gmail.com</a>
        </p>
        <p className="text-gray-300 text-sm mb-2">
          🔗 LinkedIn : <a href="https://linkedin.com/in/damtoti-kangbie-216531252" className="text-blue-400 underline">damtoti-kangbie</a>
        </p>
      </section>
    </main>
  );
}
