
---

# **🟢 Module 4 : Scripts d’Automatisation pour la Cybersécurité**  
🎯 **Objectif** : Automatiser des tâches de sécurité avec Python en manipulant des fichiers, en exécutant des commandes système et en détectant des anomalies.  

---

## **1️⃣ Gestion des fichiers et dossiers**  

Les fichiers et dossiers sont des cibles cruciales en cybersécurité. Il est important de savoir comment les analyser et détecter d’éventuels fichiers malveillants.

### **📌 Lister les fichiers d’un dossier**
```python
import os

dossier = "C:/Users"  # Modifier selon votre système
for fichier in os.listdir(dossier):
    print(fichier)
```
💡 **Utilisation en cybersécurité** : Repérer des fichiers suspects, analyser des logs.

---

## **2️⃣ Exécution de commandes système**  

### **📌 Vérifier la connectivité réseau**
```python
import subprocess

hote = "google.com"
resultat = subprocess.run(["ping", "-n", "4", hote], capture_output=True, text=True)
print(resultat.stdout)
```
💡 **Utilisation en cybersécurité** : Vérifier la connectivité d’une machine, tester la disponibilité d’un serveur.

---

## **3️⃣ Introduction aux scripts d’automatisation (Bash vs Python)**  

Python est souvent préféré au Bash pour son extensibilité et sa compatibilité multi-plateforme.

| **Tâche** | **Bash** | **Python** |
|-----------|---------|------------|
| Lister un dossier | `ls /home/user` | `os.listdir('/home/user')` |
| Lire un fichier | `cat fichier.txt` | `open('fichier.txt').read()` |
| Exécuter une commande | `ping google.com` | `subprocess.run(['ping', 'google.com'])` |

💡 **Utilisation en cybersécurité** : Automatiser des scans, récupérer des informations système.

---

## **4️⃣ Détection de fichiers suspects dans un répertoire**  

Certains fichiers peuvent être suspects en raison de leur extension, leur taille ou leur date de modification.

### **📌 Script pour détecter les fichiers suspects**
```python
import os

dossier = "C:/Users/Public/Documents"  # Modifier selon votre système
extensions_suspectes = [".exe", ".bat", ".vbs"]

for fichier in os.listdir(dossier):
    if fichier.endswith(tuple(extensions_suspectes)):
        print("[ALERTE] Fichier suspect trouvé :", fichier)
```
💡 **Utilisation en cybersécurité** : Scanner un répertoire à la recherche de fichiers exécutables suspects.

---

## **🎯 Exercice : Écrire un script pour analyser un répertoire et détecter les fichiers suspects**  

### **Consignes**  
1. Demander à l’utilisateur un chemin de dossier à analyser.  
2. Vérifier la présence de fichiers suspects (.exe, .bat, .vbs).  
3. Afficher les fichiers suspects détectés.  
4. Ajouter une option pour supprimer les fichiers suspects.  

💡 **Exemple de sortie attendue**  
```
Entrez le dossier à analyser : C:/Users/Public/Documents
[ALERTE] Fichier suspect trouvé : virus.exe
[ALERTE] Fichier suspect trouvé : script.bat
Voulez-vous les supprimer ? (oui/non) : oui
Suppression en cours...
```

### **📌 Solution possible :**
```python
import os

def analyser_dossier(dossier):
    extensions_suspectes = [".exe", ".bat", ".vbs"]
    fichiers_suspects = []

    for fichier in os.listdir(dossier):
        if fichier.endswith(tuple(extensions_suspectes)):
            fichiers_suspects.append(fichier)

    if fichiers_suspects:
        print("\nFichiers suspects trouvés :")
        for fichier in fichiers_suspects:
            print("[ALERTE] :", fichier)
        
        reponse = input("\nVoulez-vous les supprimer ? (oui/non) : ").lower()
        if reponse == "oui":
            for fichier in fichiers_suspects:
                os.remove(os.path.join(dossier, fichier))
                print(f"Supprimé : {fichier}")
    else:
        print("Aucun fichier suspect détecté.")

# Demander un dossier à l'utilisateur
chemin = input("Entrez le dossier à analyser : ")
if os.path.exists(chemin):
    analyser_dossier(chemin)
else:
    print("Dossier introuvable.")
```

---

## **✅ Récapitulatif du Module 4**  
✔ Gérer et analyser des fichiers et dossiers en Python.  
✔ Exécuter des commandes système pour la sécurité.  
✔ Comparer l’automatisation avec Python vs Bash.  
✔ Détecter et supprimer des fichiers suspects automatiquement.  

---

🔥 **Fin de la Semaine 1 !** L’apprenant peut maintenant utiliser Python pour analyser un système et automatiser des tâches en cybersécurité.  

On passe à la **Semaine 2 : Programmation avancée pour la cybersécurité** ? 🚀