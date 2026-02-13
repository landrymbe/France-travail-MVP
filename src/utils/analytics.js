import ReactGA from 'react-ga4';

// Configuration Google Analytics 4
const TRACKING_ID = 'G-B8XW6NPCYT';

// Initialisation de Google Analytics
export const initGA = () => {
  ReactGA.initialize(TRACKING_ID, {
    gaOptions: {
      siteSpeedSampleRate: 100,
    },
  });
  console.log('✅ Google Analytics initialisé');
};

// Tracking des pages vues
export const logPageView = (path, title) => {
  ReactGA.send({ 
    hitType: 'pageview', 
    page: path,
    title: title 
  });
  console.log(`📊 Page vue trackée: ${path} - ${title}`);
};

// Événements personnalisés pour France Travail MVP
export const trackEvent = (category, action, label = '', value = 0) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
  console.log(`📈 Événement tracké: ${category} - ${action} - ${label}`);
};

// Événements spécifiques au projet
export const analytics = {
  // Navigation
  trackNavigation: (destination) => {
    trackEvent('Navigation', 'Click', destination);
  },

  // Recherche d'emploi (Parcours Lucas)
  trackJobSearch: (searchTerm, filters = {}) => {
    trackEvent('Job Search', 'Search', searchTerm);
    if (Object.keys(filters).length > 0) {
      trackEvent('Job Search', 'Apply Filters', JSON.stringify(filters));
    }
  },

  trackJobView: (jobId, jobTitle) => {
    trackEvent('Job', 'View Details', `${jobId} - ${jobTitle}`);
  },

  trackJobApplication: (jobId, jobTitle) => {
    trackEvent('Job', 'Submit Application', `${jobId} - ${jobTitle}`, 1);
  },

  // Formations (Parcours Sophie)
  trackFormationSearch: (searchTerm, filters = {}) => {
    trackEvent('Formation', 'Search', searchTerm);
    if (Object.keys(filters).length > 0) {
      trackEvent('Formation', 'Apply Filters', JSON.stringify(filters));
    }
  },

  trackFormationView: (formationId, formationTitle) => {
    trackEvent('Formation', 'View Details', `${formationId} - ${formationTitle}`);
  },

  trackFormationCompare: (formationIds) => {
    trackEvent('Formation', 'Compare', `${formationIds.length} formations`, formationIds.length);
  },

  trackFormationEnroll: (formationId, formationTitle) => {
    trackEvent('Formation', 'Start Enrollment', `${formationId} - ${formationTitle}`, 1);
  },

  // Actualisation (Parcours Mohamed)
  trackActualisationStart: () => {
    trackEvent('Actualisation', 'Start', 'Monthly Update');
  },

  trackActualisationStep: (stepNumber, stepName) => {
    trackEvent('Actualisation', 'Complete Step', `Step ${stepNumber} - ${stepName}`);
  },

  trackActualisationSubmit: (hoursWorked, amount) => {
    trackEvent('Actualisation', 'Submit', `${hoursWorked}h - ${amount}€`, amount);
  },

  // Filtres
  trackFilterApplied: (filterType, filterValue) => {
    trackEvent('Filters', 'Apply', `${filterType}: ${filterValue}`);
  },

  trackFilterReset: (page) => {
    trackEvent('Filters', 'Reset', page);
  },

  // Interactions UI
  trackButtonClick: (buttonName, location) => {
    trackEvent('UI Interaction', 'Button Click', `${buttonName} - ${location}`);
  },

  trackFormError: (formName, errorField) => {
    trackEvent('Form Error', formName, errorField);
  },

  // Engagement
  trackTimeOnPage: (pageName, timeInSeconds) => {
    trackEvent('Engagement', 'Time on Page', pageName, timeInSeconds);
  },

  trackDownload: (fileName, fileType) => {
    trackEvent('Download', fileType, fileName);
  },
};

export default analytics;
