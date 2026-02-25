# France Travail - MVP Prototype 

Prototype d'application web pour la recherche d'emploi inspiré de France Travail. Développé dans le cadre de l'Atelier 4 - Prototypage MVP du projet UX Design.

## 📝 Description du projet

<<<<<<< HEAD
Ce prototype complet couvre **les 3 parcours utilisateurs** identifiés dans l'analyse UX :
- ✅ **YOHANN** (jeune diplômé) - Recherche d'emploi et candidature
- ✅ **STEPHANIE** (reconversion) - Recherche de formations
=======
Ce prototype complet couvre **les 2 parcours utilisateurs** identifiés dans l'analyse UX :
- ✅ **Yohann** (jeune diplômé) - Recherche d'emploi et candidature
- ✅ **Stéphanie** (reconversion) - Recherche de formations
>>>>>>> ee592c8255db0913fc34b4185e885d6f6d2a9be6


## 🎯 Fonctionnalités implémentées

<<<<<<< HEAD
### ✅ PARCOURS YOHANN (Jeune diplômé)
=======
### ✅ PARCOURS Yohann (Jeune diplômé)
>>>>>>> ee592c8255db0913fc34b4185e885d6f6d2a9be6
1. **Page d'accueil (Dashboard)** - Vue personnalisée avec alertes et accès rapide
2. **Recherche d'emploi** - Filtres avancés, 234 offres, pagination
3. **Détail de l'offre** - Onglets, compatibilité profil 80%, offres similaires
4. **Formulaire de candidature** - 3 étapes (infos, documents, confirmation)

<<<<<<< HEAD
### ✅ PARCOURS Stephanie (Reconversion)
=======
### ✅ PARCOURS STÉPHANIE (Reconversion)
>>>>>>> ee592c8255db0913fc34b4185e885d6f6d2a9be6
5. **Page Formations** 
   - Recherche avec filtres (type, domaine, durée, modalité)
   - Affichage du solde CPF (2 450€)
   - Comparaison de formations (jusqu'à 3)
   - 156 formations disponibles
   - Indicateurs d'éligibilité CPF

<<<<<<< HEAD

=======
>>>>>>> ee592c8255db0913fc34b4185e885d6f6d2a9be6

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
│   ├── FormationsPage.jsx      # Formations (STÉPHANIESTÉPHANIE)
│   ├── ActualisationPage.jsx   # Actualisation 
│   ├── ActualisationConfirmation.jsx
│   └── NotFound.jsx            # Page 404
├── App.jsx                     # Router principal
└── index.css                   # Styles Tailwind
```

<<<<<<< HEAD
## 🎓 Lien avec le travail UX

### Atelier 2 - Cartes d'empathie
✅ 3 profils implémentés avec leurs besoins spécifiques

### Atelier 3 - User Flows
✅ Tous les parcours principaux sont développés :
- yohann: Accueil → Recherche → Offre → Candidature
- Stephanie: Accueil → Formations → Comparaison → Inscription
- Mohamed: Accueil → Actualisation → Validation → Confirmation

✅ Scénarios d'erreur gérés :
- Champs obligatoires manquants
- Actualisation hors délai
- Limite de comparaison (3 formations max)

### Atelier 3 - Wireframes
✅ 9 écrans développés (7 wireframes + 2 bonus)

## 🚀 Fonctionnalités bonus

Au-delà du MVP minimal :
- Comparaison de formations
- Calcul automatique CPF
- Indicateurs de compatibilité profil
- Progression visuelle dans les formulaires
- Système de notifications
- Footer complet
- Page 404 personnalisée

## 👥 Équipe

**Équipe de développement - Atelier 4**
- [Votre Nom 1]
- [Votre Nom 2]
- [Votre Nom 3]
- [Votre Nom 4]

## 📄 Licence

Projet pédagogique - Utilisation libre

---

**Développé avec ❤️ dans le cadre du cours UX Design**
=======
>>>>>>> ee592c8255db0913fc34b4185e885d6f6d2a9be6

*Dernière mise à jour: Février 2026 - Version 2.0 Complète*
