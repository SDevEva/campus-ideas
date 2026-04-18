# Campus Ideas 

Une application Angular moderne pour soumettre, liker et gérer les suggestions au sein du campus.

##  Fonctionnalités

- **Liste de Suggestions** : Affichage dynamique des idées proposées avec filtrage instantané par titre ou catégorie.
- **Data Binding complet** : 
  - Interpolation (`{{ }}`) pour l'affichage fluide des données.
  - Property Binding (`[property]`) pour le style dynamique des badges (Accepté/Refusé/En attente).
  - Event Binding (`(event)`) pour les interactions (Likes, Favoris).
  - Two-way Data Binding (`[(ngModel)]`) pour la barre de recherche interactive.
- **Gestion des Favoris** : Système global intégré au Header utilisant les **Angular Signals**.
- **Interface Moderne** : Navigation fluide, interface responsive avec Bootstrap 5 et un design épuré.

##  Installation et Lancement

1. **Cloner le dépôt** :
   ```bash
   git clone [votre-url-github]
   cd campus-ideas
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement** :
   ```bash
   ng serve
   ```
   L'application sera accessible sur `http://localhost:4200/`.

##  Structure du Projet

- **`src/app/core`** : Composants structurels (Header, Footer, ListSuggestion).
- **`src/app/models`** : Définition des interfaces de données Sugggestion.
- **`FavoritesService`** : Service centralisé de gestion d'état utilisant les Signals.

##  Technologies utilisées

- **Angular 19+** (Composants Standalone, Signals)
- **Bootstrap 5 & Lucide Icons**
- **TypeScript**



