---

# **🟢 Module 3 : Modules et Bibliothèques pour la Sécurité**  
🎯 **Objectif** : Apprendre à utiliser des bibliothèques Python pour interagir avec le système, surveiller les processus et automatiser des tâches de cybersécurité.  

---

## **1️⃣ Importer et utiliser des modules**  

Python possède de nombreux modules intégrés permettant d'interagir avec le système et d'automatiser des tâches. Voici quelques modules essentiels en cybersécurité :

| Module | Description |
|--------|------------|
| `os` | Manipulation du système (fichiers, processus, commandes) |
| `sys` | Informations système et arguments en ligne de commande |
| `subprocess` | Exécution de commandes système |
| `psutil` | Surveillance des processus et des ressources système |

### **📌 Exemple d’importation et d’utilisation de modules**
```python
import os
import sys

print("Nom du système :", os.name)
print("Arguments en ligne de commande :", sys.argv)
```

---

## **2️⃣ Interaction avec le système d’exploitation**  

### **📌 Lister les fichiers et répertoires**  
```python
import os

dossier = "C:/Users"  # Modifier selon votre système
contenu = os.listdir(dossier)

print("Fichiers et dossiers dans", dossier, ":", contenu)
```
💡 **Utilisation en cybersécurité** : Explorer un répertoire à la recherche de fichiers sensibles.

---

## **3️⃣ Exécution de commandes système avec `subprocess`**  

Le module `subprocess` permet d’exécuter des commandes shell directement depuis Python.

### **📌 Exemple : Obtenir l'adresse IP locale**
```python
import subprocess

resultat = subprocess.run(["ipconfig"], capture_output=True, text=True)
print(resultat.stdout)
```

💡 **Utilisation en cybersécurité** : Lancer un scan réseau, récupérer des configurations système.

---

## **4️⃣ Manipulation des processus avec `psutil`**  

Le module `psutil` permet de surveiller les processus et les ressources système.

### **📌 Exemple : Lister les processus en cours**
```python
import psutil

for process in psutil.process_iter(attrs=["pid", "name"]):
    print(process.info)
```

💡 **Utilisation en cybersécurité** : Détecter des processus suspects, analyser les performances du système.

---

## **🎯 Exercice : Lister les processus et surveiller leur consommation**  

### **Consignes**  
1. Lister les processus en cours d’exécution avec leur ID et leur nom.  
2. Afficher l'utilisation CPU et mémoire de chaque processus.  
3. Filtrer et afficher uniquement les processus consommant plus de 5% du CPU.  

💡 **Exemple de sortie attendue**  
```
PID: 1234 - Nom: chrome.exe - CPU: 10.2% - Mémoire: 100MB
PID: 5678 - Nom: python.exe - CPU: 6.8% - Mémoire: 80MB
```

### **📌 Solution possible :**
```python
import psutil

print("Processus consommant plus de 5% du CPU :")
for process in psutil.process_iter(attrs=["pid", "name", "cpu_percent", "memory_info"]):
    cpu = process.info["cpu_percent"]
    mem = process.info["memory_info"].rss / (1024 * 1024)  # Conversion en MB
    if cpu > 5:
        print(f"PID: {process.info['pid']} - Nom: {process.info['name']} - CPU: {cpu}% - Mémoire: {mem:.2f}MB")
```

---

## **✅ Récapitulatif du Module 3**  
✔ Importer et utiliser des modules Python.  
✔ Lister et analyser les fichiers et dossiers du système.  
✔ Exécuter des commandes système avec `subprocess`.  
✔ Surveiller les processus avec `psutil`.  
✔ Détecter les processus gourmands en ressources.  

---

Prêt pour **le Module 4 : Scripts d’automatisation pour la cybersécurité** ? 🚀