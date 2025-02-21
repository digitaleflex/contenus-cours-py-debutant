# Module 5 - Semaine 1
# 📘 **Jour 5 : Fichiers, Listes, Dictionnaires & Interactions avec le Système**  

✅ **Objectif** : Lire et écrire dans des fichiers, manipuler des listes et dictionnaires, et interagir avec l’utilisateur.

---

## **🔹 1. Les Listes : Stocker des Données Ordonnées**  

Une **liste** est une collection d’éléments modifiable et ordonnée.

💡 **Création et manipulation d’une liste** :  
```python
# Création d’une liste
fruits = ["pomme", "banane", "cerise"]

# Accéder aux éléments
print(fruits[0])  # "pomme"

# Ajouter un élément
fruits.append("orange")

# Supprimer un élément
fruits.remove("banane")

# Parcourir une liste
for fruit in fruits:
    print(fruit)
```
📌 **Sortie attendue** :
```
pomme
cerise
orange
```

---

## **🔹 2. Les Dictionnaires : Associer des Clés et des Valeurs**  

Un **dictionnaire** est une structure permettant d’associer des clés à des valeurs.

💡 **Exemple d’utilisation d’un dictionnaire** :
```python
# Création d’un dictionnaire
personne = {"nom": "Alice", "âge": 25, "ville": "Paris"}

# Accéder à une valeur
print(personne["nom"])  # "Alice"

# Modifier une valeur
personne["âge"] = 26

# Ajouter une nouvelle clé
personne["email"] = "alice@example.com"

# Parcourir un dictionnaire
for cle, valeur in personne.items():
    print(cle, ":", valeur)
```
📌 **Sortie attendue** :
```
nom : Alice
âge : 26
ville : Paris
email : alice@example.com
```

---

## **🔹 3. Lire et Écrire dans un Fichier**  

### **📌 Ouvrir et Lire un Fichier**
💡 **Exemple : Lire un fichier `data.txt`**
```python
# Ouvrir un fichier en mode lecture
with open("data.txt", "r") as fichier:
    contenu = fichier.read()
    print(contenu)
```

---

### **📌 Écrire dans un Fichier**
💡 **Exemple : Écrire du texte dans un fichier**
```python
# Ouvrir un fichier en mode écriture et écrire du texte
with open("data.txt", "w") as fichier:
    fichier.write("Bonjour, ceci est un test !")
```
📌 **💡 Remarque** : Le mode `"w"` **écrase** le contenu existant. Pour ajouter du texte sans effacer l’ancien, utiliser `"a"` (append).

---

## **🔹 4. Interagir avec le Système (Modules `os` et `sys`)**  

### **📌 Manipuler les Fichiers et Dossiers avec `os`**
💡 **Exemple : Vérifier si un fichier existe et le supprimer**  
```python
import os

if os.path.exists("data.txt"):
    os.remove("data.txt")
    print("Fichier supprimé")
else:
    print("Le fichier n'existe pas")
```

---

### **📌 Récupérer les Arguments Passés au Script avec `sys`**
💡 **Exemple : Lire des arguments donnés en ligne de commande**
```python
import sys

if len(sys.argv) > 1:
    print("Argument reçu :", sys.argv[1])
else:
    print("Aucun argument fourni")
```
📌 **💡 Remarque** : `sys.argv` est une liste contenant les arguments passés au script.

---

## **🔹 5. Exercices Pratiques**  

🎯 **Exercice 1 : Gestion de Tâches (To-Do List)**  
📌 **Objectif** :  
1. Demander à l’utilisateur d’entrer des tâches.  
2. Sauvegarder les tâches dans un fichier.  
3. Permettre d’afficher la liste des tâches enregistrées.

💡 **Solution attendue :**
```python
# Fonction pour ajouter une tâche
def ajouter_tache(nom_fichier, tache):
    with open(nom_fichier, "a") as fichier:
        fichier.write(tache + "\n")

# Fonction pour afficher les tâches
def afficher_taches(nom_fichier):
    with open(nom_fichier, "r") as fichier:
        print("Liste des tâches :")
        print(fichier.read())

# Programme principal
nom_fichier = "taches.txt"

while True:
    choix = input("1: Ajouter une tâche | 2: Afficher les tâches | 3: Quitter\n> ")
    if choix == "1":
        tache = input("Entrez une nouvelle tâche : ")
        ajouter_tache(nom_fichier, tache)
    elif choix == "2":
        afficher_taches(nom_fichier)
    elif choix == "3":
        break
    else:
        print("Choix invalide, réessayez.")
```
📌 **Fonctionnement attendu** :
```
1: Ajouter une tâche | 2: Afficher les tâches | 3: Quitter
> 1
Entrez une nouvelle tâche : Acheter du lait
1: Ajouter une tâche | 2: Afficher les tâches | 3: Quitter
> 2
Liste des tâches :
Acheter du lait
```

---

🎯 **Exercice 2 : Lire et Analyser un Fichier Texte**  
📌 **Objectif** : Lire un fichier et afficher le nombre de lignes et de mots.

💡 **Solution attendue :**
```python
def analyser_fichier(nom_fichier):
    with open(nom_fichier, "r") as fichier:
        contenu = fichier.readlines()
        nombre_lignes = len(contenu)
        nombre_mots = sum(len(ligne.split()) for ligne in contenu)
        print(f"Le fichier contient {nombre_lignes} lignes et {nombre_mots} mots.")

# Test du programme
analyser_fichier("data.txt")
```

📌 **Sortie attendue** (si `data.txt` contient du texte) :
```
Le fichier contient 5 lignes et 30 mots.
```

---

## **🔹 6. Résumé du Jour 5**  
✔ **Listes** : Stocker et manipuler des collections ordonnées.  
✔ **Dictionnaires** : Associer des clés et des valeurs.  
✔ **Fichiers** : Lire et écrire des données.  
✔ **Modules `os` et `sys`** : Interagir avec le système et les fichiers.  

📌 **🎯 Prochaine étape : Jour 6 - Projets Pratiques & Initiation à la Programmation Sécurisée** 🚀