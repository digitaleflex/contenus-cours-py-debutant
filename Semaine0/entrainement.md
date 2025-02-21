
---  

## **📘 Jour 2 : Variables, Types de Données & Opérations**  
✅ **Objectif** : Comprendre les variables, manipuler les différents types de données en Python et utiliser les opérations de base.  

Chaque exercice suit ta méthodologie avec **des instructions claires, un exemple de script partiel et des résultats attendus**.  

---

### **🔹 Exercice 1 : Déclaration et Affichage de Variables**  
#### **Objectif**  
Comprendre comment déclarer une variable, lui affecter une valeur et l'afficher.  

#### **Consignes détaillées**  
1. Déclare une variable `nom` contenant ton prénom.  
2. Déclare une variable `âge` contenant ton âge (nombre entier).  
3. Déclare une variable `taille` contenant ta taille en mètres (nombre flottant).  
4. Affiche toutes ces variables en une seule phrase formatée.  

#### **Exemple de script (indication générale, pas complet)**  
```python
nom = "Alice"
âge = 25
taille = 1.75

print(f"Je m'appelle {nom}, j'ai {âge} ans et je mesure {taille} m.")
```

#### **Résultats attendus**  
```
Je m'appelle Alice, j'ai 25 ans et je mesure 1.75 m.
```

#### **Bonus**  
- Demande à l'utilisateur de saisir son propre nom, âge et taille avec `input()`, puis affiche les résultats.  

---

### **🔹 Exercice 2 : Conversions de Types**  
#### **Objectif**  
Apprendre à convertir les types de données en Python (casting).  

#### **Consignes détaillées**  
1. Demande à l'utilisateur d'entrer un nombre entier.  
2. Convertis ce nombre en flottant et affiche-le.  
3. Convertis ce nombre en chaîne de caractères et affiche son type.  

#### **Exemple de script**  
```python
nombre = int(input("Entrez un nombre entier : "))
nombre_flottant = float(nombre)
nombre_chaine = str(nombre)

print("Nombre en flottant :", nombre_flottant)
print("Type après conversion en chaîne :", type(nombre_chaine))
```

#### **Résultats attendus**  
```
Entrez un nombre entier : 10
Nombre en flottant : 10.0
Type après conversion en chaîne : <class 'str'>
```

#### **Bonus**  
- Convertis une chaîne `"3.14"` en flottant et affiche le résultat.  

---

### **🔹 Exercice 3 : Opérations Mathématiques**  
#### **Objectif**  
Maîtriser les opérations arithmétiques en Python.  

#### **Consignes détaillées**  
1. Déclare deux nombres `a = 15` et `b = 4`.  
2. Effectue et affiche le résultat des opérations suivantes : addition, soustraction, multiplication, division, division entière, puissance et modulo.  

#### **Exemple de script**  
```python
a = 15
b = 4

print("Addition :", a + b)
print("Soustraction :", a - b)
print("Multiplication :", a * b)
print("Division :", a / b)
print("Division entière :", a // b)
print("Puissance :", a ** b)
print("Modulo :", a % b)
```

#### **Résultats attendus**  
```
Addition : 19
Soustraction : 11
Multiplication : 60
Division : 3.75
Division entière : 3
Puissance : 50625
Modulo : 3
```

#### **Bonus**  
- Demande à l'utilisateur deux nombres et effectue ces opérations dessus.  

---

### **🔹 Exercice 4 : Manipulation de Chaînes de Caractères**  
#### **Objectif**  
Savoir manipuler les chaînes de caractères en Python.  

#### **Consignes détaillées**  
1. Déclare une chaîne de caractères `phrase = "Python est puissant !"`.  
2. Affiche la longueur de la phrase.  
3. Transforme la phrase en majuscules et affiche le résultat.  
4. Remplace `"puissant"` par `"incroyable"` et affiche le résultat.  

#### **Exemple de script**  
```python
phrase = "Python est puissant !"

print("Longueur de la phrase :", len(phrase))
print("En majuscules :", phrase.upper())
print("Remplacement :", phrase.replace("puissant", "incroyable"))
```

#### **Résultats attendus**  
```
Longueur de la phrase : 21
En majuscules : PYTHON EST PUISSANT !
Remplacement : Python est incroyable !
```

#### **Bonus**  
- Demande une phrase à l’utilisateur et applique les mêmes transformations.  

---

### **🔹 Exercice 5 : Concaténation et Formatage**  
#### **Objectif**  
Apprendre à concaténer et formater du texte avec `+`, `f-string` et `.format()`.  

#### **Consignes détaillées**  
1. Déclare deux variables `prenom = "Alice"` et `ville = "Paris"`.  
2. Affiche une phrase qui dit `"Alice habite à Paris"` en utilisant :  
   - La concaténation `+`  
   - Les f-strings  
   - La méthode `.format()`  

#### **Exemple de script**  
```python
prenom = "Alice"
ville = "Paris"

# Concaténation avec "+"
print(prenom + " habite à " + ville)

# f-string
print(f"{prenom} habite à {ville}")

# format()
print("{} habite à {}".format(prenom, ville))
```

#### **Résultats attendus**  
```
Alice habite à Paris
Alice habite à Paris
Alice habite à Paris
```

#### **Bonus**  
- Demande le prénom et la ville à l’utilisateur avant d’afficher la phrase.  

---

### **🔹 Exercice 6 : Interactions avec l’Utilisateur**  
#### **Objectif**  
Savoir récupérer et afficher des informations saisies par l'utilisateur.  

#### **Consignes détaillées**  
1. Demande à l'utilisateur son **nom** et **son âge**.  
2. Affiche un message personnalisé, par exemple :  
   `"Bonjour Alice, dans 5 ans tu auras 30 ans !"`  

#### **Exemple de script**  
```python
nom = input("Quel est ton nom ? ")
age = int(input("Quel est ton âge ? "))

age_futur = age + 5
print(f"Bonjour {nom}, dans 5 ans tu auras {age_futur} ans !")
```

#### **Résultats attendus**  
```
Quel est ton nom ? Alice
Quel est ton âge ? 25
Bonjour Alice, dans 5 ans tu auras 30 ans !
```

#### **Bonus**  
- Permettre à l'utilisateur d'entrer son année de naissance au lieu de son âge et calculer son âge actuel automatiquement.  

---

## **💡 Récapitulatif des Compétences Acquises**  
✔ Déclarer et afficher des variables  
✔ Manipuler les types de données (int, float, str)  
✔ Convertir entre différents types (`int()`, `float()`, `str()`)  
✔ Effectuer des opérations mathématiques de base  
✔ Manipuler les chaînes de caractères (longueur, majuscules, remplacement)  
✔ Concaténer et formater des chaînes de plusieurs façons  
✔ Récupérer et traiter des entrées utilisateur  

---

### **📌 Conclusion**  
Ces exercices progressifs permettent aux étudiants d'acquérir une solide base sur les variables, les types de données et les opérations en Python. Le **bonus** dans chaque exercice encourage l’exploration et la créativité.  

