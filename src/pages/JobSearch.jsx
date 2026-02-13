import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function JobSearch() {
  const [filters, setFilters] = useState({
    contract: [],
    sector: [],
    experience: '',
    distance: 25
  });

  const jobs = [
    {
      id: 1,
      title: 'Assistant Commercial H/F',
      company: 'Entreprise XYZ',
      location: 'Bordeaux',
      salary: '25-30K€',
      postedDate: '2 jours',
      type: 'CDI'
    },
    {
      id: 2,
      title: 'Chargé de clientèle',
      company: 'ABC Solutions',
      location: 'Bordeaux',
      salary: '28-32K€',
      postedDate: '3 jours',
      type: 'CDI'
    },
    {
      id: 3,
      title: 'Conseiller commercial',
      company: 'TechCorp',
      location: 'Mérignac',
      salary: '24-28K€',
      postedDate: '5 jours',
      type: 'CDD'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="🔍 Poste, mot-clé, entreprise..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-france-blue"
            />
            <input
              type="text"
              placeholder="📍 Localisation"
              className="w-64 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-france-blue"
            />
            <button className="bg-france-blue text-white px-8 py-3 rounded-md hover:bg-blue-700 transition font-semibold">
              Rechercher
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <aside className="w-80 bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Filtres</h2>

            {/* Contract Type */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3">Type de contrat</h3>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                <span>CDI</span>
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                <span>CDD</span>
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                <span>Intérim</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Alternance</span>
              </label>
            </div>

            {/* Sector */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3">Secteur d'activité</h3>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                <span>Commerce</span>
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                <span>Informatique</span>
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                <span>BTP</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Santé</span>
              </label>
            </div>

            {/* Experience */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3">Expérience</h3>
              <label className="flex items-center mb-2">
                <input type="radio" name="experience" className="mr-2" />
                <span>Débutant</span>
              </label>
              <label className="flex items-center mb-2">
                <input type="radio" name="experience" className="mr-2" />
                <span>1-3 ans</span>
              </label>
              <label className="flex items-center mb-2">
                <input type="radio" name="experience" className="mr-2" />
                <span>3-5 ans</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="experience" className="mr-2" />
                <span>5+ ans</span>
              </label>
            </div>

            {/* Distance */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3">Distance</h3>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={filters.distance}
                onChange={(e) => setFilters({...filters, distance: e.target.value})}
                className="w-full"
              />
              <p className="text-sm text-gray-600 mt-2">{filters.distance} km</p>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-france-blue text-white py-2 rounded-md hover:bg-blue-700 transition">
                Appliquer
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition">
                Réinitialiser
              </button>
            </div>
          </aside>

          {/* Results */}
          <main className="flex-1">
            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex items-center justify-between">
              <p className="text-gray-700">
                <span className="font-bold">234</span> offres d'emploi
              </p>
              <div className="flex items-center gap-4">
                <select className="border border-gray-300 rounded-md px-4 py-2">
                  <option>Trier par: Pertinence</option>
                  <option>Date de publication</option>
                  <option>Salaire</option>
                </select>
                <button className="flex items-center gap-2 bg-france-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  <span>🔔</span>
                  <span>Créer une alerte</span>
                </button>
              </div>
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {job.title}
                      </h3>
                      <p className="text-gray-600">
                        {job.company} • {job.location} • {job.salary}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Publié il y a {job.postedDate}
                      </p>
                    </div>
                    <span className="bg-blue-100 text-france-blue px-3 py-1 rounded-full text-sm font-semibold">
                      {job.type}
                    </span>
                  </div>
                  
                  <div className="flex gap-3 mt-4">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-france-blue transition">
                      <span>❤️</span>
                      <span>Sauvegarder</span>
                    </button>
                    <Link 
                      to={`/offre/${job.id}`}
                      className="flex items-center gap-2 bg-france-blue text-white px-6 py-2 rounded-md hover:bg-blue-700 transition ml-auto"
                    >
                      <span>→</span>
                      <span>Voir l'offre</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                &lt;
              </button>
              <button className="px-4 py-2 bg-france-blue text-white rounded-md">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                ...
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                24
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                &gt;
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
