# Module 2 - Semaine 1

Super ! Voici le **Module 2 : Structures de contrôle et fonctions** de la semaine 1.  

---

# **🟢 Module 2 : Structures de contrôle et fonctions**  
🎯 **Objectif** : Apprendre à contrôler le flux d’exécution des programmes avec des conditions et des boucles, ainsi qu’à structurer le code avec des fonctions.  

---

## **1️⃣ Conditions : if, else, elif**  

### **📌 Utilisation des conditions en Python**  
Les structures conditionnelles permettent d’exécuter du code en fonction de certaines conditions.  

#### **Exemple simple : Vérifier si un utilisateur est majeur**  
```python
age = int(input("Entrez votre âge : "))

if age >= 18:
    print("Vous êtes majeur.")
else:
    print("Vous êtes mineur.")
```

#### **Utilisation de elif (plusieurs conditions)**  
```python
score = int(input("Entrez votre score : "))

if score >= 80:
    print("Très bien !")
elif score >= 50:
    print("Peut mieux faire.")
else:
    print("Échec.")
```

💡 **Utilisation en cybersécurité** : Vérifier si un mot de passe respecte certaines règles (longueur, caractères spéciaux, etc.).

---

## **2️⃣ Boucles : for et while**  

### **📌 Boucle `for` (Parcours d'une liste ou d'un intervalle)**  
```python
for i in range(5):
    print("Tentative", i + 1)
```

💡 **Utilisation en cybersécurité** : Scanner une liste d’adresses IP, parcourir un fichier de logs.

---

### **📌 Boucle `while` (Exécution tant qu'une condition est vraie)**  
```python
tentatives = 0

while tentatives < 3:
    print("Connexion échouée, réessayez...")
    tentatives += 1
```

💡 **Utilisation en cybersécurité** : Attendre une connexion réseau ou surveiller un processus.

---

## **3️⃣ Fonctions et passage de paramètres**  

### **📌 Définition et appel d’une fonction**  
```python
def afficher_bienvenue(nom):
    print(f"Bienvenue, {nom} !")

afficher_bienvenue("Eurin")
```

💡 **Utilisation en cybersécurité** : Organiser le code en modules réutilisables pour scanner un réseau, analyser des logs, etc.

---

### **📌 Fonction avec retour de valeur**  
```python
def addition(a, b):
    return a + b

resultat = addition(5, 3)
print("Résultat :", resultat)
```

---

## **4️⃣ Manipulation des fichiers (open, read, write)**  

### **📌 Lire un fichier**  
```python
with open("logs.txt", "r") as fichier:
    contenu = fichier.read()
    print(contenu)
```

### **📌 Écrire dans un fichier**  
```python
with open("logs.txt", "a") as fichier:
    fichier.write("Nouvelle entrée de log\n")
```

💡 **Utilisation en cybersécurité** : Lire des fichiers de logs, analyser des tentatives de connexion.

---

## **🎯 Exercice : Scanner et analyser un fichier texte (logs, mots de passe, etc.)**  

### **Consignes**  
1. Demander à l’utilisateur de saisir un nom de fichier.  
2. Ouvrir et lire le fichier.  
3. Compter le nombre de lignes contenant le mot "ERROR".  
4. Afficher le nombre total d'erreurs détectées.  

💡 **Exemple de sortie attendue**  
```
Fichier analysé : logs.txt
Nombre d'erreurs trouvées : 5
```

### **📌 Solution possible :**
```python
def analyser_fichier(nom_fichier):
    try:
        with open(nom_fichier, "r") as fichier:
            lignes = fichier.readlines()
            erreurs = [ligne for ligne in lignes if "ERROR" in ligne]
            print(f"Nombre d'erreurs trouvées : {len(erreurs)}")
    except FileNotFoundError:
        print("Fichier introuvable.")

nom_fichier = input("Entrez le nom du fichier à analyser : ")
analyser_fichier(nom_fichier)
```

---

## **✅ Récapitulatif du Module 2**  
✔ Comprendre et utiliser les conditions (`if`, `elif`, `else`).  
✔ Manipuler les boucles (`for`, `while`).  
✔ Définir et utiliser des fonctions.  
✔ Lire et écrire dans des fichiers en Python.  
✔ Analyser un fichier log en Python.  

---

