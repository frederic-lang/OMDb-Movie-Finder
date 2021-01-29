# Free test technique

Le but est de développer une interface permettant de rechercher des films et d'en afficher les informations.

Le choix des éléments UI et du style de l'interface est libre. La librairie Material UI est installée de base mais peut ne pas être utilisée.

## Fonctionalitées

* un champ permet de rechercher des films par titre 
* la liste des résultats contient pour chaque film les informations suivantes :
    * le titre ("Title")
    * l'année ("Year)
* au clic sur un film on affiche les détails suivant (dans une pop-in ou une nouvelle page) :
    * le réalisateur ("Director")
    * l'intrigue ("Plot")
    * l'affiche ("Poster")

Bonus :
* ajouter une fonctionnalité de tri des résultats
* ajouter une pagination
* ajouter des tests unitaires
* utiliser Redux

## API

On utilise pour ce test l'API `omdbapi` :

#### Recherche de film par titre 

http://www.omdbapi.com/?apikey=9ddde0b3&type=movie&s=[titre]`

#### Recherche de film par id     

http://www.omdbapi.com/?apikey=9ddde0b3&i=[IMDbID]`

Documentation complète de l'api : http://www.omdbapi.com/
