import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import JobSearch from './pages/JobSearch';
import JobDetail from './pages/JobDetail';
import ApplicationForm from './pages/ApplicationForm';
import FormationsPage from './pages/FormationsPage';
import ActualisationPage from './pages/ActualisationPage';
import ActualisationConfirmation from './pages/ActualisationConfirmation';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recherche" element={<JobSearch />} />
            <Route path="/offre/:id" element={<JobDetail />} />
            <Route path="/postuler/:id" element={<ApplicationForm />} />
            <Route path="/formations" element={<FormationsPage />} />
            <Route path="/actualisation" element={<ActualisationPage />} />
            <Route path="/actualisation/confirmation" element={<ActualisationConfirmation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">France Travail</h3>
                <p className="text-sm text-gray-400">
                  Votre partenaire pour l'emploi et la formation
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Services</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/recherche" className="hover:text-white">Recherche d'emploi</a></li>
                  <li><a href="/formations" className="hover:text-white">Formations</a></li>
                  <li><a href="/actualisation" className="hover:text-white">Actualisation</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Aide</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/faq" className="hover:text-white">Questions fréquentes</a></li>
                  <li><a href="/contact" className="hover:text-white">Nous contacter</a></li>
                  <li><a href="/aide" className="hover:text-white">Guide d'utilisation</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Légal</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/cgu" className="hover:text-white">CGU</a></li>
                  <li><a href="/confidentialite" className="hover:text-white">Confidentialité</a></li>
                  <li><a href="/accessibilite" className="hover:text-white">Accessibilité</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>© 2026 France Travail - Prototype MVP - Projet UX Design</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
