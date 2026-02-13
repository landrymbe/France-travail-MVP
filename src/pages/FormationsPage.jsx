import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FormationsPage() {
  const [cpfAmount, setCpfAmount] = useState(2450);
  const [selectedFormations, setSelectedFormations] = useState([]);
  
  const formations = [
    {
      id: 1,
      title: 'Concepteur Designer UI',
      organisme: 'OpenClassrooms',
      price: 5400,
      duration: '450h',
      mode: 'Distanciel',
      rating: 4.3,
      reviews: 128,
      eligible: true,
      certification: 'Titre RNCP Niveau 6',
      type: 'Diplômante'
    },
    {
      id: 2,
      title: 'Développeur Web',
      organisme: 'La Capsule',
      price: 7000,
      duration: '600h',
      mode: 'Hybride',
      rating: 4.7,
      reviews: 256,
      eligible: true,
      certification: 'Titre RNCP Niveau 5',
      type: 'Certifiante'
    },
    {
      id: 3,
      title: 'Marketing Digital',
      organisme: 'Google Ateliers Numériques',
      price: 0,
      duration: '40h',
      mode: 'Distanciel',
      rating: 4.5,
      reviews: 512,
      eligible: true,
      certification: 'Certificat Google',
      type: 'Qualifiante'
    }
  ];

  const toggleComparison = (formationId) => {
    if (selectedFormations.includes(formationId)) {
      setSelectedFormations(selectedFormations.filter(id => id !== formationId));
    } else {
      if (selectedFormations.length < 3) {
        setSelectedFormations([...selectedFormations, formationId]);
      } else {
        alert('Vous pouvez comparer maximum 3 formations');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">
            Trouvez la formation qui vous correspond
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Donnez un nouveau souffle à votre carrière
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-lg p-2 flex gap-2 max-w-3xl">
            <input
              type="text"
              placeholder="🔍 Rechercher une formation, un métier..."
              className="flex-1 px-4 py-3 text-gray-800 focus:outline-none"
            />
            <button className="bg-france-blue text-white px-8 py-3 rounded-md hover:bg-blue-700 transition font-semibold">
              Rechercher
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 -mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex items-center justify-between mb-3">
              <div className="text-4xl">💰</div>
              <span className="text-2xl font-bold text-green-600">
                {cpfAmount.toLocaleString()}€
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mon CPF</h3>
            <p className="text-sm text-gray-600 mb-3">disponibles pour mes formations</p>
            <button className="text-france-blue hover:underline text-sm font-semibold">
              Voir le détail →
            </button>
          </div>

          <Link 
            to="/bilan-competences"
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Bilan de compétences
            </h3>
            <p className="text-sm text-gray-600">
              Clarifiez votre projet professionnel
            </p>
          </Link>

          <Link 
            to="/mes-formations"
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-3">📋</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Mes formations
            </h3>
            <p className="text-sm text-gray-600">
              Suivez vos inscriptions en cours
            </p>
          </Link>
        </div>

        {/* Comparison Banner */}
        {selectedFormations.length > 0 && (
          <div className="bg-france-blue text-white p-4 rounded-lg mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔄</span>
              <span className="font-semibold">
                {selectedFormations.length} formation(s) sélectionnée(s) pour comparaison
              </span>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setSelectedFormations([])}
                className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-france-blue transition"
              >
                Annuler
              </button>
              {selectedFormations.length >= 2 && (
                <button className="px-4 py-2 bg-white text-france-blue rounded-md hover:bg-gray-100 transition font-semibold">
                  Comparer →
                </button>
              )}
            </div>
          </div>
        )}

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <aside className="w-80 bg-white p-6 rounded-lg shadow-md h-fit sticky top-4">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Filtres</h2>

            {/* Type */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3">Type de formation</h3>
              <label className="flex items-center mb-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span>Certifiante</span>
              </label>
              <label className="flex items-center mb-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span>Diplômante</span>
              </label>
              <label className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span>Qualifiante</span>
              </label>
            </div>

            {/* Domain */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3">Domaine</h3>
              <label className="flex items-center mb-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span>Digital / Web</span>
              </label>
              <label className="flex items-center mb-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span>Commerce</span>
              </label>
              <label className="flex items-center mb-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span>Gestion / Compta</span>
              </label>
              <label className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span>Langues</span>
              </label>
            </div>

            {/* Duration */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3">Durée</h3>
              <label className="flex items-center mb-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span>&lt; 100h</span>
              </label>
              <label className="flex items-center mb-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span>100-300h</span>
              </label>
              <label className="flex items-center mb-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span>300-600h</span>
              </label>
              <label className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span>&gt; 600h</span>
              </label>
            </div>

            {/* Mode */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3">Modalité</h3>
              <label className="flex items-center mb-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span>Présentiel</span>
              </label>
              <label className="flex items-center mb-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span>Distanciel</span>
              </label>
              <label className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <span>Hybride</span>
              </label>
            </div>

            {/* CPF Filter */}
            <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-3 w-4 h-4" defaultChecked />
                <div>
                  <span className="font-semibold text-gray-800 block">
                    Éligibles à mon CPF
                  </span>
                  <span className="text-sm text-gray-600">
                    Max {cpfAmount}€
                  </span>
                </div>
              </label>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-france-blue text-white py-3 rounded-md hover:bg-blue-700 transition font-semibold">
                Appliquer
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-50 transition">
                Réinitialiser
              </button>
            </div>
          </aside>

          {/* Results */}
          <main className="flex-1">
            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex items-center justify-between">
              <p className="text-gray-700">
                <span className="font-bold">156</span> formations trouvées
              </p>
              <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-france-blue">
                <option>Trier par: Pertinence</option>
                <option>Prix croissant</option>
                <option>Prix décroissant</option>
                <option>Durée</option>
                <option>Meilleures notes</option>
              </select>
            </div>

            {/* Formation Cards */}
            <div className="space-y-6">
              {formations.map((formation) => (
                <div 
                  key={formation.id} 
                  className={`bg-white rounded-lg shadow-md hover:shadow-lg transition ${
                    selectedFormations.includes(formation.id) ? 'ring-2 ring-france-blue' : ''
                  }`}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-800">
                            {formation.title}
                          </h3>
                          {formation.eligible && (
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                              ✓ CPF Éligible
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-3">
                          {formation.organisme}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <span className="text-yellow-500">★</span>
                            <span className="font-semibold">{formation.rating}</span>
                            <span className="text-gray-400">({formation.reviews} avis)</span>
                          </span>
                          <span>•</span>
                          <span>{formation.certification}</span>
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-3xl font-bold text-france-blue mb-1">
                          {formation.price === 0 ? 'Gratuit' : `${formation.price}€`}
                        </div>
                        {formation.price > 0 && formation.price <= cpfAmount && (
                          <span className="text-sm text-green-600 font-semibold">
                            Reste à charge: 0€
                          </span>
                        )}
                        {formation.price > cpfAmount && (
                          <span className="text-sm text-orange-600 font-semibold">
                            Reste à charge: {(formation.price - cpfAmount).toLocaleString()}€
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-6 mb-4 text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <span>⏱</span>
                        <span>{formation.duration}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <span>🏠</span>
                        <span>{formation.mode}</span>
                      </span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {formation.type}
                      </span>
                    </div>

                    <div className="flex gap-3 pt-4 border-t">
                      <button
                        onClick={() => toggleComparison(formation.id)}
                        className={`flex items-center gap-2 px-4 py-2 border rounded-md transition ${
                          selectedFormations.includes(formation.id)
                            ? 'bg-france-blue text-white border-france-blue'
                            : 'text-gray-600 border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <span>🔄</span>
                        <span>{selectedFormations.includes(formation.id) ? 'Retirer' : 'Comparer'}</span>
                      </button>
                      <Link 
                        to={`/formation/${formation.id}`}
                        className="flex items-center gap-2 px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition"
                      >
                        <span>En savoir +</span>
                      </Link>
                      <button className="flex items-center gap-2 bg-france-blue text-white px-8 py-2 rounded-md hover:bg-blue-700 transition ml-auto font-semibold">
                        <span>M'inscrire</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Help Section */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span>💡</span>
                <span>Besoin d'aide pour choisir ?</span>
              </h3>
              <p className="text-gray-700 mb-4">
                Nos conseillers sont là pour vous accompagner dans votre projet de reconversion.
              </p>
              <div className="flex gap-3">
                <Link 
                  to="/prendre-rdv"
                  className="bg-france-blue text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-semibold"
                >
                  Prendre rendez-vous
                </Link>
                <button className="border border-france-blue text-france-blue px-6 py-3 rounded-md hover:bg-blue-50 transition">
                  En savoir plus sur le CPF
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
