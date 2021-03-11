# README contenant :
# Le titre du projet
"recettes-app recherche"
# Description du projet
Une application web compilant des recettes de cuisine (cocktail, petit-déjeuner, entrée, plat etc..) provenant aussi bien
de la communauté professionnelle que du particulier. Chacun pourra fournir du contenu et  le partager via l'application ou aller s'inspirer selon son besoin ou son envie en la consultant.
L'application est connectée à  plusieurs apis de recettes de cuisine qu'il consomme et les données pourront être stockées en base de données selon le besoin.
A partir l'app, l'utilisateur peut effectuer un certain nombre d'opérations comme :
- rechercher une recette à partir de:
  - nom de la recette
  - la catégorie
  - l'origine de recette
  - d'un ou plusieurs ingrédients
- ajouter une recette,
- suggérer une idée de recette
- s'enregistrer et se connecter
- ajouter une ou des recettes dans sa wishlist
## L'équipe
Dina et Xavier
## La liste des fonctionnalités
- barre de recherche
- menu de navigation
- Wishlist
- Sign Up
- Log In
- Recette proposée de manière aléatoire (suggestion de menu)
- Ajouter une recette de l'utilisateur
- Supprimer une recette ajoutée par l'utilisateur
- Afficher la recette ajoutée dans la section nouveauté
- Recette par thèmes
- Recette par catégories
- Recette par ingrédients
- Suggestion de menu du jour
## Le lien du Trello avec les user stories
    https://trello.com/b/7TDbtGf2/recettes-projet
## Les maquettes fonctionnelles
- Chaque fonctionnalité est accompagnée d'un ensemble de maquettes
- Description du schéma fonctionnel via les wireframes (Etape 1: on va sur Page 1, Etape 2: On clique sur le bouton, etc.)
---
## dans page d'Accueil, on retrouve :
---
A - une barre de navigation : Accueil | Recette | Categories | Idée de menu
B - une barre de recherche et des icones: Wishlist | Sign Up
C - une barre latérale qui va contient les lien pour naviguer vers toutes les pages de l'application - idée des recettes - toutes les recettes - recettes par thèmes - recettes par ingrédients - recettes par catégories - apéritifs et buffets - petit-déjeuner - entrée - plat principal - dessert - ajouter une recette
---
## cas de user stories:
# Description d’une recherche effectué par l’utilisateur:
    L’utilisateur démarre sur la page d’Accueil
        b- Depuis la barre de recherche de recettes, il saisit le nom de la recette et valide;
        il accède à la page Les recettes où s’affiche la liste des recettes comportant le mot saisi
        c- Sur la page Les recettes, il peut sélectionner la recette qui l’intéresse en cliquant sur l’image et
        accéder à la page détail de la recette;
        d- A partir de la page Détail de la recette, l'utilisateur peut visualiser la recette;
# Description découverte de recette par l'onglet Recette de l'utilisateur :
    L'utilisateur démarre sur la page d'accueil
       a- L'utilisateur clique sur l'onglet Recette et la page des Recettes apparaît;
       b- Il peut découvrir la listes de toutes les recettes et choisir celle qui l'intéresse;
       c- Après avoir cliqué sur la photo de la recette, la recette s'affiche dans la page Détail de la recette;
# Description découverte des recettes par l’onglet “Catégories” par l’utilisateur:
      L’utilisateur démarre sur la page d’accueil;
      a- Depuis l’onglet “Catégories” de la barre de navigation, l’utilisateur accède à la page Catégories qui contient la
      liste des recettes. Il doit cliquer sur la carte d’une catégorie pour accéder  la page des recettes ;
      b- Depuis la page “Recettes”, il accède à la liste des recettes  et  doit cliquer sur la carte recette de son choix pour visualiser
      la recette dans  la  page détail de la recette;
      c- Depuis la page Détail de la recette, l’utilisateur peut visualiser la recette  qu’il a sélectionné;
# Description de sélection de recette par thèmes par l'utilisateur:
      L’utilisateur démarre sur la page d’accueil;
      a- il clique sur les points hamburger dans la barre de navigation et fait apparaître le menu latéral;
      b- il clique sur l'onglet Recettes par thèmes pour atteindre la page des thèmes
      c- l'utilisateur clique sur la carte des thèmes pour afficher la recette dans la page Détail de la recette;
# Description de consulter la Wishlist par l'utilisateur:
      L’utilisateur démarre sur la page d’accueil;
        a- il doit être inscrit et connecté pour accéder à sa Wishlist;
        b- il clique sur l'onglet Wishlist pour accéder la page Wishlist qui contient la liste de ses recettes préférées;
        c- il doit cliquer sur une carte recette pour la visualiser dans la page Détail de recette
      L'utilisateur non inscrit est rediriger sur la page SignUp, pour créer son compte et valider;
        a- il choisit de s'inscrire et complète le formulaire:
          -nom
          -prénom
          -email
          -password
        b- un email de confirmation est envoyé à l'utilisateur à la validation;
        e- Depuis la page Login, il doit s'identifier et valider pour accéder à sa Wishlist dans la page Wishlist;
      L'utilisateur est inscrit mais non connecté:
        a- il clique sur l'onglet SignIn et accède à la page LogIn pour saisir:
          -email
          -password
        b- une icone de profile apparaît avec un message de login
# En cliquant sur le hamburger on accède à liste des liens de l'application:
        a- Idée de recettes :
           - lien qui redirige sur la page qui contient des idées de recettes ;
           - en cliquant sur une carte de recette,
           on accède au détail de la recette;
        b- Toutes les recettes:
           - lien qui redirige sur la page contenant toutes les recettes;
           - cliquant sur une carte de recettes dans la liste,
           on accède au détail de la recette;
        c- Recettes par thèmes :
           - lien qui redirige sur la page de contenant la carte des thèmes;
           - En cliquant sur la carte du thèmes par saison et évènement marquant,
           on accède au détail de la recette dans la page Détail de recette;
        d- Recettes par ingrédients:
           - lien qui redirige sur la page résultats de recherche dans laquelle l'on peut effectuer :
              => une recherche de recette par ingrédient:
              => une recherche de recette à partir d'un ou plusieurs ingrédients contenus dans le frigo;
           -  Après saisi le ou les ingrédients et validé, la page de recettes affiche la ou les recettes si elle(s)
           existe(nt);
           - cliquer sur la carte de recette choisie pour accéder au détail de la recette;
        e- Recettes par catégories:
          - lien qui redirige sur la page contenant les recettes par catégories;
          - cliquer sur une des capsules catégories pour être redirigé dans la page Catégories contenant
          toutes les recettes classée par catégories de genre.
          - cliquer sur une catégorie pour être redirigé dans la page Recettes contenant la liste des recettes;
          - cliquer sur la carte recette choisie pour afficher la recette dans la page Détail de la recette;
        f- Apéritifs et buffets:
          - lien qui redirige sur la page contenant la section apéritif et buffet;
          - cliquer sur la carte Apéritifs et buffets pour atteindre la liste des recettes dans la page recettes;
          - cliquer sur la carte de recette choisie pour affiche la recette dans la page Détail de recette
        g- Petit-déjeuner:
          - lien qui redirige sur la page contenant la section petit-déjeuner;
          - cliquer sur la carte Petit-déjeuner pour atteindre la liste des recettes dans la page recettes;
          - cliquer sur la carte de recette choisie pour affiche la recette dans la page Détail de recette;
        h- Entrée:
          - lien qui redirige sur la page contenant la section  entrée;
          - cliquer sur la carte Entrée pour atteindre la liste des recettes dans la page recettes;
          - cliquer sur la carte de recette choisie pour affiche la recette dans la page Détail de recette;
        i- Plat principale:
          - lien qui redirige sur la page contenant la section Plat principal;
          - cliquer sur la carte plat principal pour affiche la recette dans la page Détail de recette;
        j- Dessert:
          - lien qui redirige sur la page contenant la section Dessert;
          - cliquer sur la carte dessert pour affiche la recette dans la page Détail de recette;
        k- Ajouter une recette :
          - lien qui redirige sur la page ajouter une recette;
          - seul l'utilisateur inscrit et connecté peut accéder à la page ajouter une recette;
          - remplir tous les champs du formulaire et valider pour enregistrer la nouvelle recette;
          - la recette récemment enregistrée est affichée dans la section nouveauté avec son nom;---
## Planning prévisionnel avec les différents jalons
- Vous pouvez utiliser Gantt Project
- Chaque Jalon doit être accompagné d'une date et d'une Release
  (avec les fonctionnalités associées)