# **📝 Série d'Exercices Pratiques – Validation de la Semaine 0**  
🎯 **Objectif** : Vérifier la compréhension des concepts fondamentaux de Python et s'assurer que l'apprenant est prêt pour la suite du programme.  

Chaque exercice reprend des notions abordées durant la semaine 0 avec une difficulté progressive.  

---

## **📌 Exercice 1 : Variables et Opérations**  
✅ **Objectif** : Manipuler les variables et réaliser des opérations mathématiques.  

🔹 **Consignes** :
1. Demander à l’utilisateur d’entrer deux nombres.
2. Afficher leur **somme, différence, produit et quotient**.
3. Afficher le **reste** de la division du premier par le second.  

💡 **Exemple de sortie** :
```
Entrez le premier nombre : 12
Entrez le second nombre : 5

Somme : 17
Différence : 7
Produit : 60
Quotient : 2.4
Reste : 2
```

---

## **📌 Exercice 2 : Vérification Pair/Impair**  
✅ **Objectif** : Utiliser les conditions `if-else`.  

🔹 **Consignes** :
1. Demander un nombre à l’utilisateur.
2. Vérifier si ce nombre est **pair ou impair**.
3. Afficher un message correspondant.  

💡 **Exemple de sortie** :
```
Entrez un nombre : 8
Le nombre 8 est pair.
```

---

## **📌 Exercice 3 : Vérification d’Âge**  
✅ **Objectif** : Manipuler les conditions `if-elif-else`.  

🔹 **Consignes** :
1. Demander à l’utilisateur son âge.
2. Afficher un message :
   - "🔞 Vous êtes majeur" si l'âge est **18 ans ou plus**.
   - "👶 Vous êtes mineur" si l'âge est **inférieur à 18 ans**.

💡 **Exemple de sortie** :
```
Entrez votre âge : 16
👶 Vous êtes mineur.
```

---

## **📌 Exercice 4 : Tables de Multiplication (Boucles)**  
✅ **Objectif** : Utiliser les boucles `for` et `while`.  

🔹 **Consignes** :
1. Demander à l’utilisateur d’entrer un nombre.
2. Afficher la **table de multiplication** de ce nombre (jusqu’à 10).  

💡 **Exemple de sortie** :
```
Entrez un nombre : 5
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
```

---

## **📌 Exercice 5 : Manipulation des Listes**  
✅ **Objectif** : Utiliser les listes et les boucles.  

🔹 **Consignes** :
1. Créer une liste contenant `["pomme", "banane", "orange", "mangue"]`.
2. Afficher chaque élément de la liste **avec une boucle**.
3. Ajouter un fruit à la liste et réafficher la liste mise à jour.

💡 **Exemple de sortie** :
```
Liste des fruits :
- pomme
- banane
- orange
- mangue

Ajoutez un fruit : ananas

Nouvelle liste des fruits :
- pomme
- banane
- orange
- mangue
- ananas
```

---

## **📌 Exercice 6 : Manipulation des Dictionnaires**  
✅ **Objectif** : Comprendre les **dictionnaires** et l'accès aux valeurs.  

🔹 **Consignes** :
1. Créer un dictionnaire avec les informations suivantes :
   - Nom : `"Alice"`
   - Âge : `25`
   - Métier : `"Développeuse"`
2. Afficher chaque **clé et valeur** sous forme structurée.
3. Permettre à l’utilisateur **de modifier l’âge** et afficher la nouvelle valeur.

💡 **Exemple de sortie** :
```
Nom : Alice
Âge : 25
Métier : Développeuse

Entrez un nouvel âge : 26
Nouvel âge enregistré : 26
```

---

## **📌 Exercice 7 : Manipulation des Chaînes de Caractères**  
✅ **Objectif** : Travailler avec les **fonctions et les chaînes**.  

🔹 **Consignes** :
1. Demander une phrase à l'utilisateur.
2. Afficher la phrase en **majuscules** et **minuscules**.
3. Afficher **le nombre de mots** dans la phrase.

💡 **Exemple de sortie** :
```
Entrez une phrase : Python est génial !
Majuscules : PYTHON EST GÉNIAL !
Minuscules : python est génial !
Nombre de mots : 3
```

---

## **📌 Exercice 8 : Gestion des Fichiers**  
✅ **Objectif** : Lire et écrire dans un fichier texte.  

🔹 **Consignes** :
1. Demander un **nom de fichier** à l'utilisateur.
2. Lui permettre **d’écrire du texte** dans ce fichier.
3. Lire et afficher le **contenu** du fichier.

💡 **Exemple de sortie** :
```
Entrez le nom du fichier : notes.txt
Entrez votre texte : Ceci est un test.

✅ Texte sauvegardé dans notes.txt.

📂 Contenu du fichier :
Ceci est un test.
```

---

## **📌 Exercice 9 : Programme de Sauvegarde de Notes (Mini-Projet)**  
✅ **Objectif** : Mettre en pratique **les fichiers, les listes et les dictionnaires**.  

🔹 **Consignes** :
1. Créer un programme permettant **d'ajouter des notes** (titre + contenu).
2. Sauvegarder ces notes dans un fichier JSON.
3. Permettre d'afficher toutes les notes enregistrées.

💡 **Exemple de sortie** :
```
1️⃣ Ajouter une note
2️⃣ Afficher les notes
3️⃣ Quitter

> 1
Titre : Cours Python
Contenu : Les listes et les dictionnaires sont très utiles.

✅ Note ajoutée !

> 2
📜 Notes enregistrées :
- Cours Python : Les listes et les dictionnaires sont très utiles.
```

---

## **📌 Exercice 10 : Sécurité & Détection de Mot de Passe Faible (Cybersecurity)**  
✅ **Objectif** : Introduire la **cybersécurité** en analysant un mot de passe.  

🔹 **Consignes** :
1. Demander un **mot de passe** à l'utilisateur.
2. Vérifier si le mot de passe est **faible** :
   - Moins de **8 caractères**.
   - Ne contient pas de **chiffres**.
   - Ne contient pas de **lettres majuscules**.
3. Donner un **score de sécurité** (ex : **Faible, Moyen, Fort**).

💡 **Exemple de sortie** :
```
Entrez un mot de passe : password123
⚠️ Mot de passe faible ! Ajoutez des majuscules.

Entrez un mot de passe : P@ssw0rd!
✅ Mot de passe sécurisé !
```

---

## **🎯 Objectif Final : Validation de la Semaine 0**
À la fin de ces exercices, l’apprenant doit être capable de :  
✔ **Créer des scripts interactifs** en Python.  
✔ **Manipuler des variables, boucles et conditions**.  
✔ **Utiliser des listes, dictionnaires et fichiers**.  
✔ **Créer un petit programme structuré et utile**.  
✔ **Commencer à réfléchir aux aspects cybersécurité**.  

---

### **🚀 Prochaine Étape : Semaine 1 – Programmation Orientée Cybersécurité !** 🔐