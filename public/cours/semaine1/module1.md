# Module 1 - Semaine 1


---
# **🟢 Module 1 : Introduction à Python et Installation**  
🎯 **Objectif** : Comprendre pourquoi Python est utilisé en cybersécurité, installer son environnement de travail et écrire ses premiers scripts.  

---

## **1️⃣ Pourquoi Python en Cybersécurité ?**  

### **💡 Pourquoi utiliser Python en cybersécurité ?**  
Python est un langage très apprécié des professionnels de la cybersécurité grâce à :  
✅ Sa **simplicité** : Lecture et écriture faciles.  
✅ Sa **rapidité de développement** : Moins de lignes de code qu’en C ou Java.  
✅ Ses **bibliothèques puissantes** : `scapy`, `requests`, `shodan`, `nmap` facilitent l’analyse réseau et la collecte d’informations.  
✅ Son **interopérabilité** : Compatible avec Windows, Linux, et macOS.  
✅ Son **utilisation fréquente en automatisation** : Tests de sécurité, scripts d’analyse de logs, scans de ports, etc.  

Exemples d'applications :  
🔹 Analyse des logs de connexion 🔍  
🔹 Détection de malwares 🛡  
🔹 Scraping et reconnaissance d’empreintes numériques 🕵️‍♂️  
🔹 Automatisation des tests de pénétration 🔨  

---

## **2️⃣ Installation de Python + Environnement Virtuel (VENV)**  

### **🔧 Installation de Python**  
Sur **Windows** :  
1. Télécharger **Python** depuis [python.org](https://www.python.org/downloads/).  
2. Pendant l’installation, cocher **"Add Python to PATH"**.  
3. Vérifier l’installation :  
   ```bash
   python --version
   ```

Sur **Linux/Mac** :  
```bash
sudo apt update && sudo apt install python3 python3-pip -y  # Debian/Ubuntu
brew install python  # macOS
python3 --version
```

---

### **📌 Création d’un Environnement Virtuel**  
L’environnement virtuel permet d’isoler les dépendances des projets.  

1. Créer un dossier de projet :  
   ```bash
   mkdir Python-Cybersecurity-Lab && cd Python-Cybersecurity-Lab
   ```
2. Créer un environnement virtuel nommé **lab** :  
   ```bash
   python -m venv lab
   ```
3. Activer le VENV :  
   - **Windows** :  
     ```bash
     lab\Scripts\activate
     ```
   - **Linux/Mac** :  
     ```bash
     source lab/bin/activate
     ```
4. Vérifier que l’environnement est actif :  
   ```bash
   which python  # Linux/Mac
   where python   # Windows
   ```

Désactiver l’environnement :  
```bash
deactivate
```

---

## **3️⃣ Présentation de l’IDE (VS Code, PyCharm, etc.)**  

### **💡 Quel IDE choisir ?**  
🔹 **VS Code** : Léger, rapide, personnalisable (Extensions Python, Terminal intégré).  
🔹 **PyCharm** : Spécial Python, débogueur avancé, autocomplétion puissante.  
🔹 **Jupyter Notebook** : Idéal pour le testing rapide et les démonstrations.  

### **📌 Installation de VS Code + Extensions**  
1. Télécharger **VS Code** sur [code.visualstudio.com](https://code.visualstudio.com/).  
2. Installer l’extension **Python** depuis le Marketplace.  
3. Configurer l’IDE pour utiliser l’environnement virtuel (`lab`).  

---

## **4️⃣ Premiers Scripts : Print, Variables, Types de Données**  

### **📌 Afficher un message en Python**  
```python
print("Bienvenue dans le monde de la cybersécurité avec Python !")
```

### **📌 Variables et Types de Données**  
```python
nom = "Alice"      # Chaîne de caractères
âge = 25           # Entier
taille = 1.75      # Flottant
est_majeur = True  # Booléen
```

---

## **🎯 Exercice : Afficher des Informations Système avec Python**  

🔹 **Consignes** :  
1. Importer le module `os`.  
2. Afficher :  
   - Le nom du système d’exploitation.  
   - Le nom de l’utilisateur connecté.  
   - Le répertoire de travail actuel.  

💡 **Exemple de sortie attendue** :
```
Système d'exploitation : Windows
Utilisateur : Eurin
Répertoire actuel : C:\Users\Eurin\Python-Cybersecurity-Lab
```

### **📌 Solution possible :**
```python
import os

print("Système d'exploitation :", os.name)
print("Utilisateur :", os.getlogin())
print("Répertoire actuel :", os.getcwd())
```

---

## **✅ Récapitulatif du Module 1**  
✔ Comprendre pourquoi Python est utilisé en cybersécurité.  
✔ Installer Python et configurer un environnement virtuel (VENV).  
✔ Utiliser un IDE (VS Code, PyCharm).  
✔ Écrire un premier script Python.  
✔ Lire des informations système avec Python.  

---