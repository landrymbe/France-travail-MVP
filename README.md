# France Travail - MVP Prototype 

Prototype d'application web pour la recherche d'emploi inspiré de France Travail. Développé dans le cadre de l'Atelier 4 - Prototypage MVP du projet UX Design.

## 📝 Description du projet
Ce prototype complet couvre **les 2 parcours utilisateurs** identifiés dans l'analyse UX :
- ✅ **Yohann** (jeune diplômé) - Recherche d'emploi et candidature
- ✅ **Stéphanie** (reconversion) - Recherche de formations


## 🎯 Fonctionnalités implémentées
### ✅ PARCOURS Yohann (Jeune diplômé)
1. **Page d'accueil (Dashboard)** - Vue personnalisée avec alertes et accès rapide
2. **Recherche d'emploi** - Filtres avancés, 234 offres, pagination
3. **Détail de l'offre** - Onglets, compatibilité profil 80%, offres similaires
4. **Formulaire de candidature** - 3 étapes (infos, documents, confirmation)

### ✅ PARCOURS STÉPHANIE (Reconversion)
5. **Page Formations** 
   - Recherche avec filtres (type, domaine, durée, modalité)
   - Affichage du solde CPF (2 450€)
   - Comparaison de formations (jusqu'à 3)
   - 156 formations disponibles
   - Indicateurs d'éligibilité CPF

## 🛠️ Stack technique

- **React 18** - Framework JavaScript
- **Vite** - Build tool moderne
- **React Router 6** - Navigation SPA
- **Tailwind CSS** - Framework CSS utilitaire

## 🚀 Installation et lancement

### Prérequis
- Node.js (version 18+)
- npm

### Étapes

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
```

L'application sera accessible à: `http://localhost:5173`

### Build pour production

```bash
npm run build
npm run preview
```

## 📊 Analytics

Pour ce MVP, tracking simple avec console.log.

**Événements trackés:**
- Navigation entre pages
- Recherches effectuées
- Filtres appliqués
- Candidatures soumises
- Formations consultées
- Actualisation validée

**Pour production:** Google Analytics 4, Plausible ou Mixpanel

## 📁 Structure du projet

```
src/
├── components/
│   └── Header.jsx              # Navigation principale
├── pages/
│   ├── HomePage.jsx            # Dashboard
│   ├── JobSearch.jsx           # Recherche emploi
│   ├── JobDetail.jsx           # Détail offre
│   ├── ApplicationForm.jsx     # Candidature
│   ├── FormationsPage.jsx      # Formations (STÉPHANIE)
│   ├── ActualisationPage.jsx   # Actualisation 
│   ├── ActualisationConfirmation.jsx
│   └── NotFound.jsx            # Page 404
├── App.jsx                     # Router principal
└── index.css                   # Styles Tailwind
```
