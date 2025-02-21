# Module 3 - Semaine 0

### **📘 Jour 3 : Structures Conditionnelles et Boucles**  
✅ **Objectif** : Comprendre comment exécuter du code sous conditions et répéter des actions.

---

## **🔹 1. Les Structures Conditionnelles**  

### **📌 `if`, `elif`, `else` : Exécuter du code sous conditions**  
Les conditions permettent d’exécuter un bloc de code **seulement si** une condition est remplie.

💡 **Exemple simple :**
```python
age = 18

if age >= 18:
    print("Vous êtes majeur.")
else:
    print("Vous êtes mineur.")
```
📌 **Explication** :  
- Si `age` est supérieur ou égal à `18`, on affiche `"Vous êtes majeur."`  
- Sinon, on affiche `"Vous êtes mineur."`  

---

### **📌 `elif` : Ajouter des conditions intermédiaires**
L’instruction `elif` permet d’ajouter plusieurs cas possibles.

💡 **Exemple :** Vérification d’une note scolaire  
```python
note = 75

if note >= 85:
    print("Très bien !")
elif note >= 65:
    print("Bien")
elif note >= 50:
    print("Moyen")
else:
    print("Insuffisant")
```
📌 **Explication** :  
- Si la note est supérieure ou égale à 85 → `"Très bien !"`  
- Si la note est entre 65 et 84 → `"Bien"`  
- Si la note est entre 50 et 64 → `"Moyen"`  
- Sinon → `"Insuffisant"`  

---

## **🔹 2. Les Boucles : Répéter des actions**  

### **📌 La boucle `for` : Répéter un bloc de code un nombre précis de fois**
La boucle `for` est utilisée pour **parcourir une séquence** (ex: une liste, une plage de nombres).

💡 **Exemple : Afficher les nombres de 1 à 5**
```python
for i in range(1, 6):
    print(i)
```
📌 **Explication** :  
- `range(1, 6)` génère les nombres `1, 2, 3, 4, 5` (le `6` est exclu).  
- La boucle affiche chaque nombre à chaque itération.  

---

### **📌 La boucle `while` : Répéter tant qu'une condition est vraie**
La boucle `while` continue **tant qu’une condition reste vraie**.

💡 **Exemple : Compter jusqu'à 5**
```python
x = 1

while x <= 5:
    print(x)
    x += 1  # Incrémentation
```
📌 **Explication** :  
- On initialise `x` à `1`.  
- Tant que `x` est ≤ 5, on affiche `x` et on l’incrémente (`x += 1`).  

⚠ **Attention aux boucles infinies !** Si la condition **ne devient jamais fausse**, la boucle ne s’arrête pas.

💡 **Exemple d’erreur :**
```python
x = 1
while x > 0:  # Cette boucle ne s'arrêtera jamais
    print(x)
```
📌 **Solution** : Assurez-vous d’avoir une condition de sortie (`x -= 1` par exemple).

---

## **🔹 3. Introduction aux Listes et Itérations**  

### **📌 Les Listes : Stocker plusieurs valeurs dans une seule variable**
Une **liste** est une structure qui permet de stocker plusieurs valeurs.

💡 **Exemple : Liste de noms**
```python
noms = ["Alice", "Bob", "Charlie"]
print(noms[0])  # Alice
```

### **📌 Parcourir une liste avec `for`**
On utilise une boucle `for` pour parcourir une liste.

💡 **Exemple : Afficher tous les noms**
```python
noms = ["Alice", "Bob", "Charlie"]

for nom in noms:
    print("Bonjour", nom)
```
📌 **Sortie attendue** :
```
Bonjour Alice
Bonjour Bob
Bonjour Charlie
```

---

## **🔹 4. Exercices Pratiques**  

🎯 **Exercice 1 : Vérifier si un utilisateur est majeur ou mineur**  
📌 **Objectif** : Demander l’âge d’un utilisateur et afficher s’il est majeur ou mineur.

💡 **Solution attendue :**
```python
# Demander l'âge
age = int(input("Entrez votre âge : "))

# Vérifier la majorité
if age >= 18:
    print("Vous êtes majeur.")
else:
    print("Vous êtes mineur.")
```
📌 **Exécution attendue :**
```
Entrez votre âge : 17
Vous êtes mineur.
```

---

🎯 **Exercice 2 : Générer une table de multiplication**  
📌 **Objectif** : Demander un nombre et afficher sa table de multiplication jusqu’à 10.

💡 **Solution attendue :**
```python
# Demander un nombre à l'utilisateur
nombre = int(input("Entrez un nombre : "))

# Afficher la table de multiplication
print(f"Table de {nombre} :")
for i in range(1, 11):
    print(f"{nombre} x {i} = {nombre * i}")
```
📌 **Exécution attendue :**
```
Entrez un nombre : 5
Table de 5 :
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
5 x 10 = 50
```

---

## **🔹 5. Résumé du Jour 3**  
✔ **`if`, `elif`, `else`** : Exécuter du code sous conditions.  
✔ **Boucles `for` et `while`** : Répéter une action plusieurs fois.  
✔ **Listes et itérations** : Manipuler plusieurs valeurs facilement.  

