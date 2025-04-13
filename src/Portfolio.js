
export default function Portfolio() {
  return (
    <main className="bg-[#0d1117] text-white min-h-screen font-sans">
      {/* Header */}
      <header className="p-8 border-b border-gray-800 flex items-center gap-6 bg-[#161b22]">
        <img
          src="https://drive.google.com/uc?export=view&id=1DJHIBNbenGjifk7iUVuQMdXZButK2uy-"
          alt="Damtoti KANGBIE"
          className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-extrabold text-blue-400">Damtoti KANGBIE</h1>
          <p className="text-gray-400 mt-1 text-lg">Data Analyst | Valorisation de la Donnée | Projets Impactants</p>
        </div>
      </header>

      {/* About Me */}
      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-400 mb-4 border-b border-gray-700 pb-2">Présentation</h2>
        <p className="text-gray-300 leading-relaxed">
          En fin de Master Chef de Projet Data & IA, je suis passionné par la valorisation des données métiers.
          Fort d'expériences dans la banque privée, le développement durable et l'analyse marketing,
          je conçois des solutions data orientées utilisateur avec Power BI, Python, SQL et Excel.
        </p>
      </section>

      {/* Projects - Power BI & Excel */}
      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-400 mb-4 border-b border-gray-700 pb-2">Power BI & Excel</h2>
        <div className="bg-[#1c2128] p-5 rounded-xl shadow-md hover:shadow-blue-500/30 transition duration-300">
          <p className="text-gray-400 text-sm mb-3">
            Dashboards dynamiques, reportings automatisés, analyse de performances commerciales en environnement Excel et Power BI.
          </p>
          <a href="https://drive.google.com/drive/u/0/folders/1YHdBZBWTA4o9NGcPOTrhsso3o-ykXi2U"
             className="text-blue-400 underline text-sm hover:text-blue-300" target="_blank" rel="noopener noreferrer">
            Voir les projets Power BI & Excel
          </a>
        </div>
      </section>

      {/* Projects - Python & Jupyter */}
      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-400 mb-4 border-b border-gray-700 pb-2">Python & Jupyter</h2>
        <div className="bg-[#1c2128] p-5 rounded-xl shadow-md hover:shadow-blue-500/30 transition duration-300">
          <p className="text-gray-400 text-sm mb-3">
            Analyse exploratoire, prédictions, visualisations interactives avec Python, pandas, matplotlib et modèles ML.
          </p>
          <a href="https://drive.google.com/drive/u/0/folders/1DJHIBNbenGjifk7iUVuQMdXZButK2uy-"
             className="text-blue-400 underline text-sm hover:text-blue-300" target="_blank" rel="noopener noreferrer">
            Voir les notebooks Python & Jupyter
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-400 mb-4 border-b border-gray-700 pb-2">Compétences</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-300 text-sm">
          <li className="bg-[#1c2128] p-2 rounded-md text-center">Python</li>
          <li className="bg-[#1c2128] p-2 rounded-md text-center">Power BI</li>
          <li className="bg-[#1c2128] p-2 rounded-md text-center">SQL / SQLite / MySQL</li>
          <li className="bg-[#1c2128] p-2 rounded-md text-center">Excel / Power Query / VBA</li>
          <li className="bg-[#1c2128] p-2 rounded-md text-center">Machine Learning</li>
          <li className="bg-[#1c2128] p-2 rounded-md text-center">Data Visualisation</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="p-8 max-w-5xl mx-auto mb-10">
        <h2 className="text-3xl font-semibold text-blue-400 mb-4 border-b border-gray-700 pb-2">Contact</h2>
        <p className="text-gray-300 text-sm">
          Email : <a href="mailto:dfkangbie@gmail.com" className="text-blue-400 underline">dfkangbie@gmail.com</a>
        </p>
        <p className="text-gray-300 text-sm">
          LinkedIn : <a href="https://linkedin.com/in/damtoti-kangbie-216531252" className="text-blue-400 underline">damtoti-kangbie</a>
        </p>
        <div className="mt-4">
          <a href="https://docs.google.com/document/d/1buDRXHu40cRuy9aT3He8YWBdUh6dfpYUhupCYXuo_78/edit?usp=sharing"
             className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-md font-semibold text-sm shadow-md"
             target="_blank" rel="noopener noreferrer">
            📄 Voir mon CV
          </a>
        </div>
      </section>
    </main>
  );
}
