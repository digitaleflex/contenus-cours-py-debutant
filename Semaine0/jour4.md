### **📘 Jour 4 : Fonctions & Manipulation des Chaînes**  
✅ **Objectif** : Organiser le code avec des fonctions et manipuler du texte.

---

## **🔹 1. Les Fonctions : Organiser son Code**  

### **📌 Définition et Appel d'une Fonction**  
Une **fonction** permet de regrouper du code réutilisable sous un nom spécifique.

💡 **Syntaxe de base** :
```python
def nom_de_la_fonction():
    # Bloc de code
    print("Bonjour, ceci est une fonction !")

# Appel de la fonction
nom_de_la_fonction()
```
📌 **Sortie attendue** :
```
Bonjour, ceci est une fonction !
```

---

### **📌 Fonctions avec Paramètres**  
On peut **passer des valeurs** à une fonction sous forme de paramètres.

💡 **Exemple : Fonction qui salue une personne**  
```python
def saluer(nom):
    print(f"Bonjour, {nom} !")

# Appel avec un argument
saluer("Alice")
```
📌 **Sortie attendue** :
```
Bonjour, Alice !
```

---

### **📌 Fonctions avec Valeur de Retour**  
Une fonction peut **renvoyer un résultat** avec `return`.

💡 **Exemple : Fonction qui additionne deux nombres**  
```python
def addition(a, b):
    return a + b

resultat = addition(5, 3)
print("Le résultat est :", resultat)
```
📌 **Sortie attendue** :
```
Le résultat est : 8
```

---

## **🔹 2. Manipulation des Chaînes de Caractères**  

### **📌 Convertir une Chaîne en Majuscules / Minuscules**  
💡 **Exemple :**
```python
texte = "Bonjour tout le monde"

print(texte.upper())  # Convertir en majuscules
print(texte.lower())  # Convertir en minuscules
```
📌 **Sortie attendue** :
```
BONJOUR TOUT LE MONDE
bonjour tout le monde
```

---

### **📌 Découper une Chaîne (`split`)**  
💡 **Exemple : Séparer une phrase en mots**
```python
phrase = "Python est génial"
mots = phrase.split()  # Par défaut, split() coupe par les espaces
print(mots)
```
📌 **Sortie attendue** :
```
['Python', 'est', 'génial']
```

---

### **📌 Joindre une Liste de Mots en une Chaîne (`join`)**  
💡 **Exemple : Transformer une liste en phrase**
```python
mots = ['Python', 'est', 'génial']
phrase = " ".join(mots)
print(phrase)
```
📌 **Sortie attendue** :
```
Python est génial
```

---

### **📌 Remplacer du Texte (`replace`)**  
💡 **Exemple : Remplacer un mot dans une phrase**
```python
texte = "J'aime Python"
nouveau_texte = texte.replace("Python", "JavaScript")
print(nouveau_texte)
```
📌 **Sortie attendue** :
```
J'aime JavaScript
```

---

## **🔹 3. Exercices Pratiques**  

🎯 **Exercice 1 : Écrire une Fonction qui Inverse une Chaîne**  
📌 **Objectif** : Écrire une fonction qui prend une chaîne en entrée et retourne son inverse.

💡 **Solution attendue :**
```python
def inverser_chaine(chaine):
    return chaine[::-1]

# Test
texte = "Python"
print("Texte inversé :", inverser_chaine(texte))
```
📌 **Sortie attendue** :
```
Texte inversé : nohtyP
```

---

🎯 **Exercice 2 : Convertir un Texte en Majuscules / Minuscules et Compter les Mots**  
📌 **Objectif** : Demander une phrase à l’utilisateur et afficher :  
1. Le texte en majuscules  
2. Le texte en minuscules  
3. Le nombre de mots  

💡 **Solution attendue :**
```python
def analyser_texte(texte):
    print("Texte en majuscules :", texte.upper())
    print("Texte en minuscules :", texte.lower())
    print("Nombre de mots :", len(texte.split()))

# Demander un texte à l'utilisateur
phrase = input("Entrez une phrase : ")
analyser_texte(phrase)
```
📌 **Exécution attendue** :
```
Entrez une phrase : Python est un langage puissant
Texte en majuscules : PYTHON EST UN LANGAGE PUISSANT
Texte en minuscules : python est un langage puissant
Nombre de mots : 5
```

---

## **🔹 4. Résumé du Jour 4**  
✔ **Les Fonctions** : Organiser le code et le rendre réutilisable.  
✔ **Paramètres & Valeurs de Retour** : Permettre l’interaction avec la fonction.  
✔ **Manipulation des Chaînes** : Convertir, découper, joindre et remplacer du texte.  

📌 **🎯 Prochaine étape : Jour 5 - Listes, Dictionnaires & Manipulation de Données** 🚀