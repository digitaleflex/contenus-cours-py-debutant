# 📘 **Jour 6-7 : Mini-Projet & Débriefing**  

✅ **Objectif** : Appliquer tous les acquis de la semaine à travers un mini-projet pratique.  

---

## **🔹 Mini-Projet : Gestionnaire de Contacts 📒**  
L'objectif est de créer un programme permettant de gérer des contacts en utilisant des **listes**, des **dictionnaires** et la **gestion de fichiers**.

---

### **🛠️ Fonctionnalités du Projet**
1. **Ajouter un contact** : Stocker un contact avec **Nom, Prénom, Téléphone, Email**.  
2. **Rechercher un contact** : Trouver un contact par son **nom**.  
3. **Afficher tous les contacts** : Lister tous les contacts enregistrés.  
4. **Sauvegarder et charger les contacts** : Utiliser un fichier **contacts.json** pour conserver les données.  

---

## **📌 1. Structure des Données**
Les contacts seront stockés sous forme de **liste de dictionnaires** et sauvegardés dans un fichier JSON.  
💡 **Exemple de structure des données :**
```json
[
    {
        "nom": "Dupont",
        "prenom": "Alice",
        "telephone": "0601020304",
        "email": "alice@example.com"
    },
    {
        "nom": "Martin",
        "prenom": "Bob",
        "telephone": "0611223344",
        "email": "bob@example.com"
    }
]
```

---

## **📌 2. Écriture du Code du Projet**  
💡 **Code Complet :**
```python
import json

# Fichier de stockage des contacts
FICHIER_CONTACTS = "contacts.json"

# Charger les contacts existants depuis le fichier
def charger_contacts():
    try:
        with open(FICHIER_CONTACTS, "r") as fichier:
            return json.load(fichier)
    except (FileNotFoundError, json.JSONDecodeError):
        return []

# Sauvegarder les contacts dans le fichier
def sauvegarder_contacts(contacts):
    with open(FICHIER_CONTACTS, "w") as fichier:
        json.dump(contacts, fichier, indent=4)

# Ajouter un nouveau contact
def ajouter_contact():
    nom = input("Nom : ")
    prenom = input("Prénom : ")
    telephone = input("Téléphone : ")
    email = input("Email : ")
    
    contact = {"nom": nom, "prenom": prenom, "telephone": telephone, "email": email}
    contacts = charger_contacts()
    contacts.append(contact)
    sauvegarder_contacts(contacts)
    
    print(f"✅ Contact {prenom} {nom} ajouté avec succès !")

# Rechercher un contact par nom
def rechercher_contact():
    nom_recherche = input("Entrez le nom à rechercher : ")
    contacts = charger_contacts()
    resultats = [c for c in contacts if c["nom"].lower() == nom_recherche.lower()]
    
    if resultats:
        for c in resultats:
            print(f"📌 {c['prenom']} {c['nom']} - 📞 {c['telephone']} - ✉️ {c['email']}")
    else:
        print("❌ Aucun contact trouvé.")

# Afficher tous les contacts
def afficher_contacts():
    contacts = charger_contacts()
    
    if not contacts:
        print("📭 Aucun contact enregistré.")
    else:
        print("\n📋 Liste des contacts :")
        for c in contacts:
            print(f"📌 {c['prenom']} {c['nom']} - 📞 {c['telephone']} - ✉️ {c['email']}")
    print("")

# Menu principal
def menu():
    while True:
        print("\n📞 GESTIONNAIRE DE CONTACTS 📒")
        print("1️⃣ Ajouter un contact")
        print("2️⃣ Rechercher un contact")
        print("3️⃣ Afficher tous les contacts")
        print("4️⃣ Quitter")
        
        choix = input("> Votre choix : ")
        
        if choix == "1":
            ajouter_contact()
        elif choix == "2":
            rechercher_contact()
        elif choix == "3":
            afficher_contacts()
        elif choix == "4":
            print("👋 Au revoir !")
            break
        else:
            print("❌ Choix invalide, essayez encore.")

# Lancer le programme
menu()
```

---

## **📌 3. Explication du Code**
🔹 **Gestion des fichiers JSON** : `charger_contacts()` et `sauvegarder_contacts()` permettent de stocker les données durablement.  
🔹 **Ajouter un contact** : `ajouter_contact()` demande les infos à l’utilisateur et les ajoute à la liste.  
🔹 **Rechercher un contact** : `rechercher_contact()` permet de chercher un contact par **nom**.  
🔹 **Afficher tous les contacts** : `afficher_contacts()` affiche la liste complète des contacts enregistrés.  
🔹 **Menu interactif** : `menu()` permet à l’utilisateur de naviguer entre les fonctionnalités.  

---

## **📌 4. Résultats Attendus**
🎯 **Exemple d'Utilisation** :
```
📞 GESTIONNAIRE DE CONTACTS 📒
1️⃣ Ajouter un contact
2️⃣ Rechercher un contact
3️⃣ Afficher tous les contacts
4️⃣ Quitter
> 1

Nom : Dupont
Prénom : Alice
Téléphone : 0601020304
Email : alice@example.com
✅ Contact Alice Dupont ajouté avec succès !

📞 GESTIONNAIRE DE CONTACTS 📒
> 3

📋 Liste des contacts :
📌 Alice Dupont - 📞 0601020304 - ✉️ alice@example.com
```

---

## **🔹 Jour 7 : Débriefing & Améliorations**
✅ **Bilan du Mini-Projet**  
L’apprenant doit être capable de :  
✔ **Écrire un programme interactif** en Python.  
✔ **Manipuler des fichiers JSON** pour stocker et récupérer des données.  
✔ **Utiliser les listes et dictionnaires** pour structurer les informations.  
✔ **Créer un menu interactif** avec des entrées utilisateur.  

---

## **🎯 Bonus : Améliorations Possibles**
✨ **Supprimer un contact** en ajoutant une nouvelle option dans le menu.  
✨ **Vérification des entrées** pour éviter les erreurs (ex : format email invalide).  
✨ **Interface graphique (GUI)** avec **Tkinter** pour une meilleure expérience utilisateur.  

---

### **🚀 Fin de la Semaine 0 : Lancement vers la Semaine 1 !** 🎉  
📌 **Prochaine étape** : Approfondissement avec la programmation orientée cybersécurité 🔐.