import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-france-blue text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">France Travail</div>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-200 transition">
              Accueil
            </Link>
            <Link to="/recherche" className="hover:text-gray-200 transition">
              Recherche d'emploi
            </Link>
            <Link to="/formations" className="hover:text-gray-200 transition">
              Formations
            </Link>
            <Link to="/mon-profil" className="hover:text-gray-200 transition">
              Mon profil
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="relative">
              <span className="text-2xl">🔔</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
            <button className="bg-white text-france-blue px-4 py-2 rounded-md hover:bg-gray-100 transition">
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
