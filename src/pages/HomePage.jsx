import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Alert Banner */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl mr-3">⚠️</span>
            <p className="font-medium">
              N'oubliez pas d'actualiser votre situation avant le 28/02
            </p>
          </div>
          <Link 
            to="/actualisation" 
            className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition"
          >
            Actualiser maintenant
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Bonjour YOHANN,
          </h1>
          <p className="text-gray-600">
            Vous avez 3 nouvelles offres correspondant à votre recherche
          </p>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link 
            to="/mes-candidatures" 
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-3">📋</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Mes candidatures
            </h3>
            <p className="text-gray-600">5 en cours</p>
          </Link>

          <Link 
            to="/recherche" 
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-3">💼</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Offres d'emploi
            </h3>
            <p className="text-gray-600">234 nouvelles</p>
          </Link>

          <Link 
            to="/formations" 
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Mes formations
            </h3>
            <p className="text-gray-600">Découvrir</p>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            to="/paiements" 
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-3">💶</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Mes paiements
            </h3>
            <p className="text-gray-600">Consulter</p>
          </Link>

          <Link 
            to="/rendez-vous" 
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-3">📅</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Mes RDV
            </h3>
            <p className="text-gray-600">1 à venir</p>
          </Link>

          <Link 
            to="/messages" 
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-3">💬</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Messages
            </h3>
            <p className="text-gray-600">2 non lus</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
