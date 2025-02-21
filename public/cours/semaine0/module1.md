---

# **📘 Jour 1 : Introduction & Installation**  
✅ **Objectif** : Installer Python et comprendre l'environnement de travail.  

---

## **🔹 1. Introduction à Python**  

### **📌 Qu'est-ce que Python ?**  
Python est un langage de programmation **simple, puissant et polyvalent**. Il est utilisé dans :  
✔ Le développement web (Django, Flask).  
✔ La cybersécurité (automatisation, analyse de logs, pentesting).  
✔ L'analyse de données et l'IA (Pandas, TensorFlow).  
✔ L'automatisation de tâches (scripts d'administration système).  

### **📌 Pourquoi apprendre Python ?**  
- **Facile à apprendre** : syntaxe claire et lisible.  
- **Très utilisé** : supporté par une grande communauté.  
- **Polyvalent** : peut être utilisé pour presque tout.  

### **📌 Exemples d'applications concrètes**  
✅ Script de détection d'intrusions.  
✅ Automatisation d'audit de sécurité.  
✅ Génération automatique de rapports.  

---

## **🔹 2. Installation de Python & Environnement de Travail**  

### **📌 Étape 1 : Télécharger Python**  
1. Aller sur le site officiel : [https://www.python.org/downloads/](https://www.python.org/downloads/)  
2. Télécharger la version la plus récente pour votre système (Windows, macOS, Linux).  
3. **Important** : Cocher l'option **"Add Python to PATH"** avant d'installer !  

### **📌 Étape 2 : Vérifier l'installation**  
Ouvrir un terminal ou l'invite de commande et taper :  
```bash
python --version
```
Si Python est installé correctement, vous verrez quelque chose comme :  
```
Python 3.x.x
```  

### **📌 Étape 3 : Installer un éditeur de code**  
🔹 **VS Code** (Recommandé pour débuter) : [https://code.visualstudio.com/](https://code.visualstudio.com/)  
🔹 **PyCharm** (Plus complet, mais plus lourd) : [https://www.jetbrains.com/pycharm/](https://www.jetbrains.com/pycharm/)  

---

## **�� 3. Découverte de l'Interpréteur Python**  

Python peut être exécuté de deux manières :  
1️⃣ **Mode interactif** (interpréteur Python)  
2️⃣ **Mode script** (exécution d'un fichier `.py`)  

### **📌 Mode interactif**  
Ouvrir un terminal et taper :  
```bash
python
```
Puis essayer les commandes suivantes :  
```python
print("Bonjour, je découvre Python !")
2 + 3
```
⚡ **Le mode interactif permet de tester rapidement des commandes.**  

### **📌 Mode script**  
1️⃣ Créer un fichier `mon_script.py`  
2️⃣ Ajouter ce code dedans :  
```python
print("Bienvenue dans mon premier script Python !")
```
3️⃣ Exécuter le script avec :  
```bash
python mon_script.py
```

---

## **🔹 4. Premier Exercice Pratique**  

🎯 **Exercice 1 : Afficher un message personnalisé**  
📌 Objectif : Écrire un script qui affiche un message simple.  
💡 **Instruction** :  
- Ouvrir un éditeur de texte (VS Code, PyCharm).  
- Créer un fichier `premier_programme.py`.  
- Ajouter ce code :  
```python
print("Bonjour, je débute en Python !")
```
- Exécuter avec :  
```bash
python premier_programme.py
```

🎯 **Exercice 2 : Demander un prénom et afficher un message**  
📌 Objectif : Interagir avec l'utilisateur.  
💡 **Instruction** :  
- Modifier `premier_programme.py` pour demander le prénom de l'utilisateur.  
- Afficher un message de bienvenue personnalisé.  
💡 **Solution attendue** :  
```python
prenom = input("Quel est ton prénom ? ")
print("Bienvenue, " + prenom + " !")
```
📌 **Exécution attendue** :  
```
Quel est ton prénom ? Alice
Bienvenue, Alice !
```

---

## **🔹 5. Résumé du Jour 1**  
✔ Python est un langage **polyvalent et simple** à apprendre.  
✔ Installation de Python + configuration de l'éditeur de code.  
✔ Différence entre **mode interactif** et **mode script**.  
✔ Premier script exécuté avec **print()** et **input()**.  

📌 **🎯 À retenir :**  
- `print()` affiche du texte.  
- `input()` permet de lire une entrée utilisateur.  

---

## **🔹 6. Challenge Bonus (Facultatif) 🔥**  
🎯 **Objectif : Créer un mini chatbot basique**  
💡 **Consigne :**  
- Demander le prénom et l'âge de l'utilisateur.  
- Afficher un message indiquant son âge dans 5 ans.  

💡 **Exemple de sortie attendue :**  
```
Quel est ton prénom ? John
Quel âge as-tu ? 25
Bonjour John, dans 5 ans tu auras 30 ans !
```

**📌 Solution possible :**  
```python
prenom = input("Quel est ton prénom ? ")
age = int(input("Quel âge as-tu ? "))
print("Bonjour " + prenom + ", dans 5 ans tu auras " + str(age + 5) + " ans !")
```

---

📢 **🎯 Prochaine étape : Jour 2 - Variables et Types de Données**  
🚀 **Bravo, tu as écrit ton premier programme en Python !** 🎉

# Test Module 1
Ceci est un test pour vérifier le chargement des modules.