import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Python",
    description:
      "Utilisé pour l'analyse de données et la création de modèles prédictifs, notamment dans l'étude de données Open Food Facts (Nutriscore)."
  },
  {
    title: "Power BI",
    description:
      "Compétence acquise à travers le projet Maven Cycles Reporting, avec création de dashboards interactifs."
  },
  {
    title: "SQL / SQLite / MySQL",
    description:
      "Manipulation de bases de données relationnelles pour extraire et analyser des données dans divers projets Python."
  },
  {
    title: "Excel / Power Query / VBA",
    description:
      "Création de tableaux de bord dynamiques dans le projet Neuflize OBC pour la banque privée."
  },
  {
    title: "Apprentissage automatique",
    description:
      "Implémentation de modèles Machine Learning dans le projet Calories Prediction avec PyTorch."
  },
  {
    title: "Data Visualisation",
    description:
      "Projet Pokémon : exploration visuelle des statistiques et typologies avec Matplotlib et Seaborn."
  },
  {
    title: "Qlikview",
    description:
      "Utilisé dans mes missions chez Neuflize OBC pour visualiser les performances commerciales."
  }
];

export default function Competences() {
  return (
    <div id="competences" className="min-h-screen px-6 py-12 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Compétences
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative group p-6 rounded-2xl bg-gradient-to-br from-blue-800 to-blue-900 shadow-lg hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-200">
              {skill.title}
            </h3>
            <p className="opacity-0 group-hover:opacity-100 text-sm transition-opacity duration-300">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="mt-16 max-w-4xl mx-auto text-center text-gray-300 text-sm">
        <p>
          En fin de Master Chef de Projet Data & IA, je suis actuellement en alternance chez
          <span className="text-white font-semibold"> ABN AMRO - Neuflize OBC</span>. Je suis à la recherche d'un
          <span className="text-white font-semibold"> CDD ou CDI </span> à partir d'octobre 2025 pour continuer à valoriser
          les données métiers par des projets à impact.
        </p>
      </div>
    </div>
  );
}