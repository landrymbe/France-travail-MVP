# France Travail - MVP Prototype (Version Complète)

Prototype d'application web pour la recherche d'emploi inspiré de France Travail. Développé dans le cadre de l'Atelier 4 - Prototypage MVP du projet UX Design.

## 📝 Description du projet

Ce prototype complet couvre **les 3 parcours utilisateurs** identifiés dans l'analyse UX :
- ✅ **Lucas** (jeune diplômé) - Recherche d'emploi et candidature
- ✅ **Sophie** (reconversion) - Recherche de formations
- ✅ **Mohamed** (chômage longue durée) - Actualisation mensuelle

## 🎯 Fonctionnalités implémentées

### ✅ PARCOURS LUCAS (Jeune diplômé)
1. **Page d'accueil (Dashboard)** - Vue personnalisée avec alertes et accès rapide
2. **Recherche d'emploi** - Filtres avancés, 234 offres, pagination
3. **Détail de l'offre** - Onglets, compatibilité profil 80%, offres similaires
4. **Formulaire de candidature** - 3 étapes (infos, documents, confirmation)

### ✅ PARCOURS SOPHIE (Reconversion)
5. **Page Formations** 
   - Recherche avec filtres (type, domaine, durée, modalité)
   - Affichage du solde CPF (2 450€)
   - Comparaison de formations (jusqu'à 3)
   - 156 formations disponibles
   - Indicateurs d'éligibilité CPF

### ✅ PARCOURS MOHAMED (Actualisation)
6. **Page Actualisation mensuelle**
   - Formulaire en 4 étapes
   - Déclaration d'activité (heures, employeur, montant)
   - Déclaration de formation
   - Déclaration d'absence/indisponibilité
   - Calcul automatique impact sur indemnités
   - Page de confirmation avec date de paiement

### 🎨 AMÉLIORATIONS UX
- ✨ Messages d'erreur clairs et contextuels
- 🔄 États de chargement et feedback visuel
- 📱 Design responsive (mobile + desktop)
- ♿ Navigation accessible au clavier
- 🎭 Animations douces et micro-interactions
- 🚨 Alertes importantes (actualisation, bannières)
- 📄 Page 404 personnalisée
- 🦶 Footer complet avec liens utiles

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
# 1. Cloner le dépôt
git clone https://github.com/Romix299/France-travail-MVP.git
cd France-travail-MVP

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
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
│   ├── FormationsPage.jsx      # Formations (Sophie)
│   ├── ActualisationPage.jsx   # Actualisation (Mohamed)
│   ├── ActualisationConfirmation.jsx
│   └── NotFound.jsx            # Page 404
├── App.jsx                     # Router principal
└── index.css                   # Styles Tailwind
```

## 🎓 Lien avec le travail UX

### Atelier 2 - Cartes d'empathie
✅ 3 profils implémentés avec leurs besoins spécifiques

### Atelier 3 - User Flows
✅ Tous les parcours principaux sont développés :
- Lucas: Accueil → Recherche → Offre → Candidature
- Sophie: Accueil → Formations → Comparaison → Inscription
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

*Dernière mise à jour: Février 2026 - Version 2.0 Complète*
