import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function JobDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('description');

  const job = {
    title: 'Assistant Commercial H/F',
    company: 'Entreprise XYZ Solutions',
    location: 'Bordeaux (33000)',
    salary: '25 000 - 30 000 € brut/an',
    type: 'CDI',
    postedDate: '01/02/2026'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-france-blue">Accueil</Link>
          <span className="mx-2">&gt;</span>
          <Link to="/recherche" className="hover:text-france-blue">Recherche d'emploi</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-800">{job.title}</span>
        </div>

        <div className="flex gap-6">
          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white p-8 rounded-lg shadow-md">
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-3">
                  {job.title}
                </h1>
                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <span className="font-semibold">{job.company}</span>
                  <span>📍 {job.location}</span>
                  <span>💰 {job.salary}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="bg-blue-100 text-france-blue px-3 py-1 rounded-full font-semibold">
                    {job.type}
                  </span>
                  <span>📅 Publié le {job.postedDate}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mb-8 pb-6 border-b">
                <Link 
                  to={`/postuler/${id}`}
                  className="bg-france-blue text-white px-8 py-3 rounded-md hover:bg-blue-700 transition font-semibold text-lg"
                >
                  POSTULER
                </Link>
                <button className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 transition">
                  <span>❤️</span>
                  <span>Sauvegarder</span>
                </button>
                <button className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 transition">
                  <span>📤</span>
                  <span>Partager</span>
                </button>
              </div>

              {/* Tabs */}
              <div className="flex gap-6 border-b mb-6">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`pb-3 px-2 font-semibold transition ${
                    activeTab === 'description'
                      ? 'text-france-blue border-b-2 border-france-blue'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('profil')}
                  className={`pb-3 px-2 font-semibold transition ${
                    activeTab === 'profil'
                      ? 'text-france-blue border-b-2 border-france-blue'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Profil recherché
                </button>
                <button
                  onClick={() => setActiveTab('entreprise')}
                  className={`pb-3 px-2 font-semibold transition ${
                    activeTab === 'entreprise'
                      ? 'text-france-blue border-b-2 border-france-blue'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Entreprise
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'description' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Missions</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Gestion de la relation client et suivi commercial</li>
                      <li>Traitement et suivi des commandes</li>
                      <li>Élaboration de propositions commerciales</li>
                      <li>Reporting hebdomadaire des activités</li>
                      <li>Participation aux salons professionnels</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Profil recherché</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Bac+2 minimum en commerce ou équivalent</li>
                      <li>Première expérience en assistanat commercial souhaitée</li>
                      <li>Excellente maîtrise du Pack Office (Excel, Word, PowerPoint)</li>
                      <li>Bon relationnel et sens du service client</li>
                      <li>Autonomie, rigueur et organisation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Avantages</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Tickets restaurant (valeur 9€)</li>
                      <li>Mutuelle d'entreprise prise en charge à 60%</li>
                      <li>Télétravail possible 2 jours par semaine</li>
                      <li>Primes sur objectifs</li>
                      <li>Comité d'entreprise</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'profil' && (
                <div className="space-y-4 text-gray-700">
                  <p className="font-semibold">Le candidat idéal possède :</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Formation Bac+2 minimum (BTS, DUT) en commerce, vente ou gestion</li>
                    <li>Expérience de 1 à 2 ans en assistanat commercial ou relation client</li>
                    <li>Maîtrise des outils informatiques (Pack Office, CRM)</li>
                    <li>Excellent sens de la communication écrite et orale</li>
                    <li>Capacité d'adaptation et esprit d'équipe</li>
                    <li>Anglais professionnel apprécié</li>
                  </ul>
                </div>
              )}

              {activeTab === 'entreprise' && (
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>XYZ Solutions</strong> est une entreprise dynamique spécialisée dans 
                    les solutions B2B pour les PME. Avec plus de 50 collaborateurs, nous accompagnons 
                    nos clients dans leur transformation digitale depuis 2015.
                  </p>
                  <p>
                    Notre équipe commerciale est au cœur de notre développement. Nous recherchons 
                    des profils motivés pour rejoindre notre aventure et participer à notre croissance.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-md mt-4">
                    <h4 className="font-semibold mb-2">Informations entreprise :</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Effectif : 50-100 salariés</li>
                      <li>• Secteur : Services B2B</li>
                      <li>• Site web : www.xyz-solutions.fr</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="w-80 space-y-6">
            {/* Compatibility */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-800 mb-4">Compatibilité profil</h3>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-green-600">80%</span>
                  <span className="text-sm text-gray-600">Bon match</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span>
                  <span>Niveau d'études OK</span>
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✓</span>
                  <span>Localisation OK</span>
                </li>
                <li className="flex items-center text-yellow-600">
                  <span className="mr-2">⚠</span>
                  <span>Expérience recommandée</span>
                </li>
              </ul>
            </div>

            {/* Similar Jobs */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-800 mb-4">Offres similaires</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/offre/2" className="text-france-blue hover:underline">
                    • Assistant ADV H/F
                  </Link>
                  <p className="text-sm text-gray-600">Bordeaux • CDI</p>
                </li>
                <li>
                  <Link to="/offre/3" className="text-france-blue hover:underline">
                    • Commercial Junior
                  </Link>
                  <p className="text-sm text-gray-600">Mérignac • CDI</p>
                </li>
                <li>
                  <Link to="/offre/4" className="text-france-blue hover:underline">
                    • Chargé de clientèle
                  </Link>
                  <p className="text-sm text-gray-600">Bordeaux • CDD</p>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
