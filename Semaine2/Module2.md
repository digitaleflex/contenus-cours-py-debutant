
---

### 🟢 Module 2 : Automatisation des tâches en cybersécurité

**Objectif du module** :  
L'objectif de ce module est d’apprendre à automatiser des tâches courantes en cybersécurité. Vous allez interagir avec le système d’exploitation, surveiller les processus, et exécuter des tâches répétitives pour renforcer la sécurité du système. Ce module met l’accent sur l’automatisation via des scripts Python.

---

#### 2.1 - **Interaction avec le système d’exploitation**

En cybersécurité, il est crucial de pouvoir interagir avec le système pour automatiser des processus, contrôler les fichiers, et exécuter des commandes systèmes. Python offre plusieurs modules permettant de gérer cela facilement.

- **Module `os`** : Utilisé pour interagir avec le système d'exploitation. Il permet de gérer les fichiers, répertoires et d’exécuter des commandes système.

  **Exemples :**

  - **Vérifier l'existence d'un fichier :**
    ```python
    import os

    if os.path.exists("fichier.txt"):
        print("Le fichier existe.")
    else:
        print("Le fichier n'existe pas.")
    ```

  - **Obtenir des informations sur le système (ex: plateforme, répertoire actuel) :**
    ```python
    import os

    print("Nom du système :", os.name)
    print("Répertoire actuel :", os.getcwd())
    ```

- **Module `shutil`** : Il permet de manipuler des fichiers et des répertoires, notamment pour copier, déplacer ou supprimer des fichiers.

  **Exemples :**

  - **Copier un fichier :**
    ```python
    import shutil

    shutil.copy("source.txt", "destination.txt")
    ```

  - **Supprimer un fichier :**
    ```python
    import shutil

    shutil.remove("fichier.txt")
    ```

- **Module `subprocess`** : Il permet d’exécuter des commandes système directement depuis Python et d’obtenir leur résultat.

  **Exemple :**

  - **Exécuter une commande système :**
    ```python
    import subprocess

    result = subprocess.run(["ls", "-l"], capture_output=True, text=True)
    print(result.stdout)
    ```

**Pourquoi c'est utile en cybersécurité ?**  
Automatiser ces tâches vous permet de rapidement inspecter le système, manipuler des fichiers ou exécuter des commandes de sécurité (comme un scan, ou vérifier les utilisateurs connectés).

---

#### 2.2 - **Surveillance des processus et services avec `psutil`**

Dans le contexte de la cybersécurité, surveiller les processus système et leur utilisation des ressources est crucial. Cela peut vous aider à détecter des processus suspects ou gourmands en ressources.

Le module **`psutil`** (Process and System Utilities) est idéal pour surveiller les processus, récupérer des informations sur la mémoire, le CPU, et gérer les processus système.

- **Installation de `psutil` :**
  ```bash
  pip install psutil
  ```

- **Exemples d'utilisation :**

  - **Lister tous les processus actifs :**
    ```python
    import psutil

    for proc in psutil.process_iter(['pid', 'name']):
        print(proc.info)
    ```

  - **Obtenir les informations sur l’utilisation du CPU et de la mémoire :**
    ```python
    import psutil

    print("Utilisation CPU :", psutil.cpu_percent(interval=1), "%")
    print("Utilisation mémoire :", psutil.virtual_memory().percent, "%")
    ```

  - **Surveiller l’utilisation de la mémoire d'un processus spécifique :**
    ```python
    import psutil

    pid = 1234  # Remplacer par l'ID de processus voulu
    process = psutil.Process(pid)
    print(f"Utilisation de la mémoire par le processus {pid} : {process.memory_info().rss / 1024} KB")
    ```

**Pourquoi c'est utile en cybersécurité ?**  
L’analyse des processus système permet de détecter des processus inhabituels ou malveillants qui peuvent représenter des attaques ou des logiciels malveillants.

---

#### 2.3 - **Automatisation des tâches répétitives**

En cybersécurité, certaines tâches doivent être exécutées de manière régulière, comme la vérification des journaux, la surveillance des ressources ou l'exécution de scripts de sécurité. Python peut automatiser ces tâches grâce à des scripts et des outils comme **cron** (Linux) ou **Task Scheduler** (Windows).

- **Automatisation avec `cron` (Linux) :**
  - Vous pouvez planifier l'exécution d’un script Python via `cron` en ajoutant une tâche dans le fichier `crontab` :

    **Exemple de crontab** :
    ```
    0 3 * * * python3 /chemin/vers/script.py
    ```
    Cela exécutera le script à 3h00 tous les jours.

- **Automatisation avec `Task Scheduler` (Windows) :**
  - Sur Windows, vous pouvez planifier l'exécution d'un script Python avec l'outil **Task Scheduler**. Vous définissez un déclencheur, puis l’action qui exécutera votre script.

**Pourquoi c’est utile en cybersécurité ?**
L’automatisation permet d’effectuer des vérifications de sécurité régulières sans intervention manuelle. Par exemple, vous pouvez exécuter un scan de vulnérabilité ou surveiller les processus à intervalles réguliers.

---

### 🎯 Exercice pratique : Créer un script qui surveille les processus gourmands en ressources et alerte l’administrateur

**Objectif de l’exercice** :
- Créer un script Python qui surveille les processus système pour identifier ceux qui consomment beaucoup de ressources (CPU ou mémoire).
- Lorsque le script détecte un processus avec une consommation de ressources élevée, il envoie une alerte à l'administrateur (par exemple, un message dans la console ou un e-mail).

**Indications :**
1. Utilisez `psutil` pour lister tous les processus et vérifier leur utilisation CPU et mémoire.
2. Définissez un seuil (par exemple, un processus utilisant plus de 80% de CPU ou de mémoire).
3. Si un processus dépasse le seuil, envoyez une alerte. L'alerte peut être un message dans la console ou un e-mail.
4. Optionnel : Exécutez le script régulièrement via `cron` (Linux) ou `Task Scheduler` (Windows).

---
