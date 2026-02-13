import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="text-9xl font-bold text-france-blue mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Page introuvable
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            to="/"
            className="bg-france-blue text-white px-8 py-3 rounded-md hover:bg-blue-700 transition font-semibold"
          >
            Retour à l'accueil
          </Link>
          <Link 
            to="/recherche"
            className="border border-france-blue text-france-blue px-8 py-3 rounded-md hover:bg-blue-50 transition font-semibold"
          >
            Rechercher un emploi
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-bold text-gray-800 mb-4">Liens utiles</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <Link to="/formations" className="text-france-blue hover:underline">
              • Formations
            </Link>
            <Link to="/actualisation" className="text-france-blue hover:underline">
              • Actualisation
            </Link>
            <Link to="/mon-profil" className="text-france-blue hover:underline">
              • Mon profil
            </Link>
            <Link to="/aide" className="text-france-blue hover:underline">
              • Aide & Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
