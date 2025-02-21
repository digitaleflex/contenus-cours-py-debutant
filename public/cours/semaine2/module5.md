# Module 5 - Semaine 2
Voici un guide détaillé pour le projet de fin de semaine qui consiste à développer un mini outil de surveillance système. Ce projet met en application les concepts appris durant les modules de la semaine, et va permettre à l'apprenant de combiner différentes techniques pour réaliser un SIEM (Security Information and Event Management) basique.

---

### 🛠 Projet de fin de semaine : Développer un outil de surveillance système

**Objectif** :  
Créer un script Python permettant de surveiller certains aspects critiques du système, comme les ports ouverts, les processus actifs, et l'analyse de logs pour détecter des tentatives d'attaque. Le tout, avec la génération d'un rapport structuré.

#### **Fonctionnalités principales** :

1. **Scanner les ports ouverts** :
   - Votre script devra scanner les ports d'une machine cible pour détecter les services actifs.
   - Utilisez les sockets Python (`socket`) pour effectuer des connexions aux ports et déterminer si ces derniers sont ouverts.

2. **Surveiller les processus actifs** :
   - Surveillez les processus qui tournent sur le système. Cela peut inclure la vérification des processus gourmands en ressources, des processus suspects, ou même des processus systèmes importants.
   - Vous pouvez utiliser le module `psutil` pour obtenir des informations sur les processus en cours d'exécution et leur utilisation des ressources.

3. **Analyser les logs et identifier les tentatives d’attaques** :
   - Analyser des fichiers de logs (par exemple des logs systèmes ou des logs d’accès SSH) pour repérer des motifs qui indiquent des tentatives d'attaque.
   - Utilisez des expressions régulières pour rechercher des termes comme "failed", "error", ou des motifs spécifiques de tentatives de connexion.
   - Vous pouvez utiliser la bibliothèque `re` pour les expressions régulières et ouvrir les fichiers de logs en mode lecture pour les analyser ligne par ligne.

4. **Générer un rapport** :
   - Une fois les scans de ports et l’analyse des logs effectués, générez un rapport détaillant les résultats de l’analyse.
   - Ce rapport peut être sauvegardé dans un fichier `.txt` ou `.csv` avec des informations sur les ports ouverts, les processus surveillés, et les résultats d'analyse des logs.
   - Utilisez la bibliothèque `csv` pour les fichiers CSV et l’écriture classique avec `open()` pour un fichier texte.

#### **Bonus** : Ajouter une interface CLI interactive
- Le script peut être amélioré avec une interface en ligne de commande (CLI) interactive, permettant à l’utilisateur de choisir les actions à effectuer, par exemple, scanner les ports, surveiller les processus, ou analyser les logs.
- Utilisez la bibliothèque `argparse` pour créer des options et des arguments en ligne de commande, rendant l’outil plus flexible.

---

### **Instructions détaillées** :

#### 1. **Scanner les ports ouverts**
- Créez une fonction qui tente de se connecter à une liste de ports sur une machine cible.
- Si la connexion est réussie (c’est-à-dire qu’un service écoute sur ce port), le port sera marqué comme ouvert.
  
**Exemple d'algorithme** :
- Utiliser un tableau de ports communs (par exemple : 80, 443, 21, 22).
- Pour chaque port, utiliser `socket` pour vérifier la connexion.
- Générer une sortie indiquant les ports ouverts.

#### 2. **Surveiller les processus actifs**
- Créez une fonction qui récupère les informations sur les processus en cours d'exécution, comme l'ID du processus (PID), le nom, l'utilisation CPU/mémoire.
- Identifiez les processus gourmands en ressources (ex. plus de 80% CPU ou mémoire).
  
**Exemple d'algorithme** :
- Utilisez `psutil.process_iter()` pour itérer sur les processus.
- Vérifiez l’utilisation des ressources (CPU/mémoire) pour identifier les processus suspects.

#### 3. **Analyser les logs et identifier les tentatives d'attaques**
- Lisez un fichier de logs (par exemple, les logs SSH ou d'accès) et recherchez des modèles indiquant des échecs de connexion ou des attaques par force brute.
- Utilisez des expressions régulières pour rechercher des termes comme "failed", "error", ou des motifs spécifiques à des tentatives d'attaques.
  
**Exemple d'algorithme** :
- Ouvrir un fichier de log (par exemple `/var/log/auth.log`).
- Parcourez chaque ligne et recherchez des occurrences des mots-clés d’erreur.
- Enregistrez les lignes suspectes ou les motifs pertinents dans une liste pour un rapport.

#### 4. **Générer un rapport**
- Rassemblez les informations collectées par les trois fonctionnalités précédentes (ports ouverts, processus actifs, analyse des logs).
- Créez un fichier `.txt` ou `.csv` contenant un résumé des résultats.
  
**Exemple d'algorithme** :
- Si un fichier `.txt`, utilisez `open()` pour écrire les informations sous forme de texte lisible.
- Si un fichier `.csv`, utilisez `csv.writer` pour écrire les résultats dans un format structuré.

#### 5. **Bonus : Interface CLI interactive**
- Utilisez `argparse` pour permettre à l'utilisateur de choisir les actions à effectuer :
  - Scannez les ports.
  - Surveillez les processus.
  - Analysez les logs.
  
**Exemple d’interface CLI** :
```python
import argparse

def create_parser():
    parser = argparse.ArgumentParser(description="Outil de surveillance système")
    parser.add_argument('--scan-ports', help="Scanner les ports ouverts", action='store_true')
    parser.add_argument('--monitor-processes', help="Surveiller les processus actifs", action='store_true')
    parser.add_argument('--analyze-logs', help="Analyser les logs", action='store_true')
    return parser

def main():
    parser = create_parser()
    args = parser.parse_args()

    if args.scan_ports:
        scan_ports()
    if args.monitor_processes:
        monitor_processes()
    if args.analyze_logs:
        analyze_logs()

if __name__ == "__main__":
    main()
```

---

### **Critères d'évaluation** :
- **Fonctionnalité** : Le projet doit être capable de scanner les ports, surveiller les processus, analyser les logs et générer un rapport.
- **Structure du code** : Le code doit être bien organisé, avec des fonctions distinctes pour chaque tâche (scannage de ports, surveillance des processus, analyse des logs, etc.).
- **Interaction avec l'utilisateur** : Le script CLI doit être interactif et permettre à l'utilisateur de choisir les actions qu'il souhaite réaliser.
- **Rapport généré** : Le rapport doit contenir des informations claires et détaillées, que ce soit en format `.txt` ou `.csv`.

Ce projet va permettre de consolider les compétences acquises durant la semaine, tout en créant un outil utile en cybersécurité pour surveiller l'intégrité d'un système.