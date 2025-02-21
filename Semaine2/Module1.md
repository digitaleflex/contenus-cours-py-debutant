
---

### 🟢 Module 1 : Programmation avancée en Python

**Objectif du module** : 
Ce module a pour but de vous enseigner des concepts avancés en Python qui sont essentiels en cybersécurité. Nous allons aborder des structures de données comme les listes, les tuples, les dictionnaires, et les ensembles, et explorer comment gérer les erreurs et les exceptions. Ce module introduira également la gestion des fichiers, les logs et les expressions régulières pour l’analyse de données en cybersécurité.

#### 1.1 - **Les collections : Listes, Tuples, Dictionnaires et Ensembles**

**Qu’est-ce qu’une collection ?**

Les collections sont des structures qui permettent de stocker plusieurs valeurs dans une même variable. Voici les types de collections les plus utilisés en Python :

- **Liste** : Une liste est une séquence de valeurs qui peuvent être modifiées.
  - Exemple : `fruits = ["pomme", "banane", "orange"]`
  - Vous pouvez ajouter, supprimer ou modifier des éléments dans une liste.
  
- **Tuple** : Un tuple est similaire à une liste, mais il est **immuable**. Cela signifie que ses valeurs ne peuvent pas être modifiées une fois qu'elles ont été définies.
  - Exemple : `couleurs = ("rouge", "bleu", "vert")`

- **Dictionnaire** : Un dictionnaire est une collection de paires clé-valeur. Les clés doivent être uniques.
  - Exemple : `personne = {"nom": "John", "âge": 25, "ville": "Paris"}`

- **Ensemble** : Un ensemble est une collection non ordonnée d'éléments uniques.
  - Exemple : `nombres = {1, 2, 3, 4, 5}`

**Pourquoi les utiliser en cybersécurité ?**

- Les **listes** sont utiles pour stocker plusieurs objets ou valeurs, comme une liste d'adresses IP ou des fichiers à analyser.
- Les **dictionnaires** sont parfaits pour stocker des données comme des informations d'utilisateur, où chaque donnée est associée à une clé (par exemple, un utilisateur à son identifiant).
- Les **tuples** sont souvent utilisés pour des informations fixes que vous ne souhaitez pas modifier.
- Les **ensembles** sont utilisés pour stocker des éléments uniques, comme une liste d’adresses IP sans doublons.

#### 1.2 - **Gestion des erreurs et exceptions**

Les erreurs peuvent se produire dans n'importe quel programme. Python a un mécanisme de gestion des erreurs appelé **exceptions** qui permet de traiter ces erreurs de manière propre sans arrêter l'exécution du programme.

- **try/except** : Cela permet de tester du code qui peut causer une erreur, et de la gérer si elle se produit.

**Exemple :**

```python
try:
    fichier = open("fichier_inexistant.txt", "r")
except FileNotFoundError:
    print("Le fichier n'existe pas !")
```

- Le bloc `try` contient le code à tester.
- Si une erreur se produit, Python passe à la section `except` pour gérer l’erreur, sans interrompre le programme.

#### 1.3 - **Manipulation des fichiers et logs**

En cybersécurité, vous devrez souvent analyser des fichiers et des logs pour détecter des anomalies ou des attaques.

- **Ouvrir et lire un fichier** :

```python
# Ouvrir un fichier en lecture
fichier = open("log.txt", "r")
contenu = fichier.read()
print(contenu)
fichier.close()
```

- **Écrire dans un fichier** :

```python
# Ouvrir un fichier en écriture
fichier = open("resultats.txt", "w")
fichier.write("Analyse terminée")
fichier.close()
```

- **Lire ligne par ligne** :

```python
# Ouvrir un fichier et lire ligne par ligne
fichier = open("log.txt", "r")
for ligne in fichier:
    print(ligne)
fichier.close()
```

**Pourquoi c’est important en cybersécurité ?**
- L'analyse des fichiers journaux (`logs`) est cruciale pour détecter les tentatives d'intrusion ou d'autres anomalies sur un système.
- Les **fichiers de log** peuvent contenir des informations sur les utilisateurs, les erreurs système et des actions importantes.

#### 1.4 - **Expressions régulières (re)**

Les **expressions régulières (re)** sont un moyen puissant de rechercher et manipuler des textes dans un programme. Elles sont utilisées pour trouver des motifs (comme des adresses IP, des emails, etc.) dans des chaînes de caractères.

**Exemple de base :**

```python
import re

# Recherche d'un nombre de 3 chiffres
texte = "Le code est 123 et l'autre code est 456"
resultat = re.findall(r'\d{3}', texte)
print(resultat)  # ['123', '456']
```

Les expressions régulières sont utiles pour extraire des informations spécifiques à partir de textes, comme rechercher des adresses IP dans des fichiers de log ou détecter des comportements anormaux.

---

### 🎯 Exercice pratique : Analyser un fichier de logs et extraire les erreurs critiques

**Objectif de l’exercice :**
- Créer un programme qui analyse un fichier de log et extrait les lignes contenant des erreurs ou des avertissements.
- Utiliser des **expressions régulières** pour rechercher des mots-clés comme "ERREUR", "Avertissement", etc.

**Indications** :
1. Ouvrir le fichier de logs.
2. Lire chaque ligne et vérifier si elle contient un mot-clé lié à une erreur.
3. Si oui, extraire cette ligne et l’afficher.
4. Optionnel : Sauvegarder les erreurs extraites dans un nouveau fichier.

---
