### Semaine 0 : Immersion dans la programmation en python

### **📘 Jour 2 : Variables, Types de Données & Opérations**  

✅ **Objectif** : Comprendre les variables et manipuler les données en Python.

---

## **🔹 1. Introduction aux Variables**  

### **📌 Qu'est-ce qu'une variable ?**  

Une **variable** est un espace en mémoire qui stocke une valeur. Elle permet de manipuler des données dans un programme.

💡 **Exemple :**
```python
nom = "Alice"
age = 25
```
Ici :  
- `nom` contient la chaîne de caractères `"Alice"`.  
- `age` contient l’entier `25`.

### **📌 Règles de nommage des variables**

✔ Doit commencer par une lettre ou un underscore `_`  
✔ Peut contenir des lettres, des chiffres et `_`  
✔ Sensible à la casse (`age` ≠ `Age`)  
✔ Éviter les mots-clés réservés (`if`, `while`, `def`, etc.)  

💡 **Bonnes pratiques :**
```python
prenom_utilisateur = "Alice"  # Utiliser des noms clairs
AGE_MAX = 100  # Constante (majuscule)
```

---

## **🔹 2. Les Types de Données en Python**  

Python propose plusieurs types de données couramment utilisés :

| Type        | Exemple |
|------------|---------|
| Entier (`int`) | `10`, `-5`, `2024` |
| Flottant (`float`) | `3.14`, `-0.5`, `2.0` |
| Chaîne (`str`) | `"Bonjour"`, `'Python'` |
| Booléen (`bool`) | `True`, `False` |

### **📌 Vérifier le type d'une variable**  

Utiliser `type()` pour afficher le type d'une variable :
```python
x = 10
print(type(x))  # <class 'int'>

y = 3.5
print(type(y))  # <class 'float'>

nom = "Alice"
print(type(nom))  # <class 'str'>

est_connecte = True
print(type(est_connecte))  # <class 'bool'>
```

---

## **🔹 3. Conversion entre types de données**  

### **📌 Changer le type d’une variable (Casting)**

On peut convertir un type en un autre :
```python
# Convertir un entier en chaîne
age = 25
age_str = str(age)  # "25"

# Convertir une chaîne en nombre
nombre = int("42")  # 42

# Convertir un nombre en flottant
nombre_decimal = float("3.14")  # 3.14
```

💡 **Attention !**
```python
int("3.14")  # Erreur ! "3.14" n'est pas un entier
```

---

## **🔹 4. Opérations Mathématiques**  

Python permet d'effectuer des opérations mathématiques de base :

| Opérateur | Description | Exemple |
|-----------|------------|---------|
| `+` | Addition | `5 + 3` → `8` |
| `-` | Soustraction | `10 - 4` → `6` |
| `*` | Multiplication | `6 * 3` → `18` |
| `/` | Division (résultat flottant) | `10 / 4` → `2.5` |
| `//` | Division entière | `10 // 4` → `2` |
| `%` | Modulo (reste de division) | `10 % 3` → `1` |
| `**` | Puissance | `2 ** 3` → `8` |

💡 **Exemple :**
```python
a = 10
b = 3

print(a + b)  # 13
print(a - b)  # 7
print(a * b)  # 30
print(a / b)  # 3.333...
print(a // b) # 3
print(a % b)  # 1
print(a ** b) # 1000 (10^3)
```

---

## **🔹 5. Opérations Logiques & Comparaisons**  

### **📌 Opérateurs de comparaison**

Utilisés pour comparer des valeurs et renvoient `True` ou `False` :

| Opérateur | Description | Exemple (`a = 5`, `b = 3`) |
|-----------|------------|-----------------------------|
| `==` | Égal à | `a == b` → `False` |
| `!=` | Différent de | `a != b` → `True` |
| `>` | Supérieur à | `a > b` → `True` |
| `<` | Inférieur à | `a < b` → `False` |
| `>=` | Supérieur ou égal à | `a >= b` → `True` |
| `<=` | Inférieur ou égal à | `a <= b` → `False` |

### **📌 Opérateurs logiques**

| Opérateur | Description | Exemple |
|-----------|------------|---------|
| `and` | Retourne `True` si **les deux** conditions sont vraies | `(5 > 3) and (10 > 5)` → `True` |
| `or` | Retourne `True` si **au moins une** condition est vraie | `(5 > 3) or (10 < 5)` → `True` |
| `not` | Inverse le résultat | `not (5 > 3)` → `False` |

💡 **Exemple d'utilisation :**
```python
a = 10
b = 5

print(a > b and b < 3)  # False
print(a > b or b < 3)   # True
print(not (a == b))     # True
```

---

## **🔹 6. Exercices Pratiques**  

🎯 **Exercice 1 : Calcul de somme, différence et produit**  
📌 **Objectif** : Demander à l’utilisateur deux nombres et afficher leur somme, différence et produit.

💡 **Solution attendue :**
```python
# Demander deux nombres à l'utilisateur
a = float(input("Entrez le premier nombre : "))
b = float(input("Entrez le deuxième nombre : "))

# Effectuer les calculs
somme = a + b
difference = a - b
produit = a * b

# Afficher les résultats
print("Somme :", somme)
print("Différence :", difference)
print("Produit :", produit)
```
📌 **Exécution attendue :**
```
Entrez le premier nombre : 10
Entrez le deuxième nombre : 4
Somme : 14.0
Différence : 6.0
Produit : 40.0
```

---

🎯 **Exercice 2 : Vérifier si un nombre est pair ou impair**  
📌 **Objectif** : Demander à l’utilisateur un nombre et afficher s’il est **pair ou impair**.

💡 **Solution attendue :**
```python
# Demander un nombre
nombre = int(input("Entrez un nombre : "))

# Vérifier la parité
if nombre % 2 == 0:
    print("Le nombre est pair.")
else:
    print("Le nombre est impair.")
```
📌 **Exécution attendue :**
```
Entrez un nombre : 7
Le nombre est impair.
```

---

## **🔹 7. Résumé du Jour 2**  

✔ Une **variable** stocke une valeur (nombre, texte, booléen).  
✔ **Types de données** : `int`, `float`, `str`, `bool`.  
✔ **Opérations mathématiques** et **logiques**.  
✔ `if-else` pour **vérifier si un nombre est pair ou impair**.  

📌 **🎯 Prochaine étape : Jour 3 - Conditions et Boucles** 🚀