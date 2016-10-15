# Ajouter une date

Vos dates sont toutes dans le répertoire `_data` dans le fichier `concerts.yml`.

Vous pouvez le modifier en cliquant [dessus](https://github.com/ftmftrs/ftmftrs.github.io/blob/master/_data/concerts.yml)
et cliquer sur l'icone avec le crayon à droite.

Il faut absolument garder l'indentation dans le fichier. Chaque concert est
décrit par 3 champs (titre, date, adresse) :

    - title: festival trad'hivernale
      date: 15 janvier
      address: Sommières (30)

Pour pouvoir sauvegarder vos modifications, vous devez aller en bas de la page
et cliquer sur `Commit changes`.

Vérifier que les modifications sont correctement pris en compte directement sur
la page : http://fatumfatras.com/concert/


# Ajouter une année

Vous devez modifier le fichier [`concerts.yml`](https://github.com/ftmftrs/ftmftrs.github.io/blob/master/_data/concerts.yml)

Ajouter directement une nouvelle année :

    - name: 2019
      dates:
        - title: Votre super concert
          date: 42 mars
          address: Par ici (42)
