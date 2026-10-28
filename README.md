# 001 — CV React avec Vite

Un CV de démonstration construit avec React et Vite. Les coordonnées, expériences, compétences et formations affichées sont des exemples : remplacez-les par vos propres informations avant de publier le site.

## Créer le projet depuis zéro

Dans un terminal PowerShell, placez-vous dans le dossier où vous souhaitez créer le projet, puis exécutez :

```powershell
npm create vite@latest 001 -- --template react
cd 001
npm install
npm run dev
```

Le navigateur s'ouvre à l'adresse indiquée par Vite, généralement `http://localhost:5173`. Le serveur de développement recharge la page lorsque les fichiers changent.

Pour générer et prévisualiser la version de production :

```powershell
npm run build
npm run preview
```

## Étapes réalisées dans ce projet

1. Création d'un projet Vite avec le modèle React JavaScript et le nom `001`.
2. Installation des dépendances du projet avec `npm install`.
3. Configuration des scripts `dev`, `build` et `preview` dans `package.json`.
4. Création du point d'entrée `src/main.jsx` : il charge le CSS et monte l'application React dans l'élément `#root`.
5. Création de `src/App.jsx` : les données du CV y sont regroupées et transmises aux composants.
6. Séparation du CV en composants réutilisables : informations personnelles, expériences et compétences.
7. Mise en forme responsive et ajout d'une feuille de style d'impression pour enregistrer le CV en PDF depuis le navigateur.
8. Lancement de l'application avec `npm run dev`, puis vérification de la compilation avec `npm run build`.

## Organisation des dossiers et fichiers

```text
001/
├── index.html
├── package.json
├── vite.config.js
├── public/                 (fichiers statiques, si besoin)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    └── components/
        ├── PersonalInfo.jsx
        ├── Experiences.jsx
        └── Competences.jsx
```

- **`public/`** : ressources statiques servies telles quelles, par exemple une icône ou un fichier PDF. Il n'est pas nécessaire de l'utiliser tant que le projet n'en a pas besoin.
- **`src/`** : code source de l'application. Vite surveille et transforme les fichiers de cette partie.
- **`src/components/`** : petits composants React spécialisés, chacun responsable d'une partie de l'interface.
- **`index.html`** : page HTML de départ. L'élément `<div id="root">` accueille l'application.
- **`src/main.jsx`** : point d'entrée JavaScript. `createRoot` attache React au DOM et affiche `<App />`.
- **`src/App.jsx`** : assemble les composants et contient les données de démonstration du CV.
- **`src/styles.css`** : règles CSS, adaptation aux petits écrans et présentation pour l'impression.
- **`vite.config.js`** : configuration de Vite et activation du plugin React.
- **`package.json`** : nom du projet, dépendances et commandes disponibles avec npm.
- **`package-lock.json`** : créé par npm, il verrouille les versions exactes des dépendances installées.
- **`node_modules/`** : bibliothèques installées par npm. Ce dossier est généré automatiquement et ne doit pas être ajouté au dépôt Git.
- **`dist/`** : résultat généré par `npm run build`, prêt à être déployé. Ce dossier est généré automatiquement.

## Notions et types de fichiers indispensables

- **`.jsx`** : JavaScript qui peut contenir du JSX, une syntaxe ressemblant au HTML pour décrire l'interface. Par exemple, `<PersonalInfo profile={profile} />`.
- **Composant React** : fonction JavaScript qui retourne du JSX. Un composant commence généralement par une majuscule et peut recevoir des **props** (données transmises par son parent). Ici, `PersonalInfo`, `Experiences` et `Competences` reçoivent leurs données avec des props.
- **`props`** : entrées en lecture seule d'un composant. Cela permet de séparer les données de leur affichage et de réutiliser le composant.
- **Tableaux et `.map()`** : les expériences et compétences sont des tableaux d'objets. `.map()` crée un élément d'interface par objet ; chaque élément reçoit une `key` stable pour aider React à mettre à jour la liste.
- **`.css`** : feuille de style qui contrôle couleurs, espacements, mise en page, affichage mobile et impression.
- **`.html`** : document d'accueil chargé par le navigateur ; Vite y injecte le module JavaScript de l'application.
- **`.json`** : format de configuration structuré. Dans `package.json`, les scripts définissent les commandes npm et les dépendances listent les bibliothèques du projet.
- **`npm`** : gestionnaire de paquets fourni avec Node.js. `npm install` installe les dépendances et `npm run dev` exécute un script du projet.

## Personnaliser le CV

Modifiez les objets `profile`, `experiences` et `skillGroups` dans `src/App.jsx`. Ajoutez ou retirez des entrées en gardant la même structure de données. Le bouton **Imprimer le CV** ouvre la boîte d'impression du navigateur ; choisissez « Enregistrer au format PDF » pour exporter le CV.
