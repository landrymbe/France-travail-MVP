import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { logPageView } from '../utils/analytics';

// Hook personnalisé pour tracker automatiquement les changements de page
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Mapping des routes vers des titres lisibles
    const pageTitles = {
      '/': 'Accueil - Dashboard',
      '/jobs': 'Recherche d\'emploi',
      '/jobs/:id': 'Détail de l\'offre',
      '/application/:id': 'Formulaire de candidature',
      '/formations': 'Recherche de formations',
      '/actualisation': 'Actualisation mensuelle',
      '/actualisation/confirmation': 'Confirmation actualisation',
    };

    // Déterminer le titre de la page
    let pageTitle = pageTitles[location.pathname];
    
    // Si le titre exact n'est pas trouvé, chercher une correspondance partielle
    if (!pageTitle) {
      if (location.pathname.startsWith('/jobs/')) {
        pageTitle = 'Détail de l\'offre';
      } else if (location.pathname.startsWith('/application/')) {
        pageTitle = 'Formulaire de candidature';
      } else if (location.pathname.includes('actualisation')) {
        pageTitle = 'Actualisation';
      } else {
        pageTitle = 'Page non référencée';
      }
    }

    // Envoyer la page view à Google Analytics
    logPageView(location.pathname + location.search, pageTitle);

    // Timer pour mesurer le temps passé sur la page
    const startTime = Date.now();

    return () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      if (timeSpent > 2) { // Ignore les visites très courtes (< 2 secondes)
        console.log(`⏱️ Temps passé sur ${pageTitle}: ${timeSpent}s`);
      }
    };
  }, [location]);
};

export default usePageTracking;
