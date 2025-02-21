# Module 4 - Semaine 2

Voici le contenu détaillé du **Module 4 : Sécurité des fichiers et gestion des permissions** :

---

### 🟢 Module 4 : Sécurité des fichiers et gestion des permissions

**Objectifs du module** :  
Ce module vous apprendra à manipuler des fichiers sensibles, à gérer leurs permissions et à appliquer des mesures de sécurité pour les protéger. Vous découvrirez comment détecter des fichiers cachés ou suspects, comment compresser et chiffrer des fichiers pour renforcer leur sécurité.

---

#### 4.1 - **Gestion des Permissions des Fichiers**

Les permissions des fichiers définissent quels utilisateurs ou groupes peuvent lire, écrire ou exécuter un fichier. Comprendre la gestion des permissions est essentiel pour sécuriser les fichiers sensibles.

- **`os.chmod`** : Permet de modifier les permissions d'un fichier.
- **`stat`** : Permet de récupérer des informations sur les fichiers, y compris leurs permissions.

##### Exemple : Modifier les permissions d’un fichier avec `os.chmod` :
```python
import os

# Modifier les permissions d'un fichier
file_path = "example.txt"
os.chmod(file_path, 0o644)  # Permissions de lecture et écriture pour le propriétaire, lecture seule pour les autres
```

##### Exemple : Vérifier les permissions d’un fichier avec `stat` :
```python
import os
import stat

# Obtenir les informations sur le fichier
file_stat = os.stat("example.txt")

# Vérifier les permissions
permissions = oct(file_stat.st_mode)[-3:]
print(f"Permissions du fichier : {permissions}")
```

**Pourquoi c'est utile en cybersécurité ?**  
La gestion des permissions des fichiers est cruciale pour limiter l’accès non autorisé aux fichiers sensibles. Cela permet d’empêcher les attaques qui exploitent des fichiers non protégés.

---

#### 4.2 - **Détection des Fichiers Cachés et Suspects**

En cybersécurité, il est essentiel de pouvoir détecter les fichiers cachés qui peuvent être utilisés pour masquer des malwares ou des données sensibles.

- **Fichiers cachés sous Linux/Unix** : Un fichier est considéré comme caché s'il commence par un point (`.`).
- **Détection des fichiers cachés** : Vous pouvez utiliser `os.listdir()` pour lister les fichiers d’un répertoire et rechercher ceux qui commencent par un point.

##### Exemple : Détecter les fichiers cachés :
```python
import os

def detect_hidden_files(directory):
    hidden_files = []
    for file in os.listdir(directory):
        if file.startswith('.'):
            hidden_files.append(file)
    return hidden_files

# Exemple d'utilisation
directory = "/path/to/directory"
hidden_files = detect_hidden_files(directory)
print(f"Fichiers cachés détectés : {hidden_files}")
```

**Pourquoi c'est utile en cybersécurité ?**  
Les fichiers cachés peuvent dissimuler des programmes malveillants ou des données compromettantes. Savoir les détecter est important pour identifier des menaces potentielles.

---

#### 4.3 - **Compression et Chiffrement des Fichiers**

Le chiffrement et la compression des fichiers sont des techniques couramment utilisées pour protéger les données sensibles, en particulier lorsqu’elles doivent être envoyées ou stockées de manière sécurisée.

##### Compression des fichiers avec `zipfile` :
```python
import zipfile

def compress_file(file_path, archive_path):
    with zipfile.ZipFile(archive_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        zipf.write(file_path, os.path.basename(file_path))

# Exemple d'utilisation
compress_file("sensitive_data.txt", "archive.zip")
```

##### Chiffrement des fichiers avec `cryptography` :
```python
from cryptography.fernet import Fernet

# Générer une clé de chiffrement
key = Fernet.generate_key()
cipher_suite = Fernet(key)

# Chiffrer un fichier
def encrypt_file(file_path, key):
    with open(file_path, 'rb') as file:
        data = file.read()
    encrypted_data = cipher_suite.encrypt(data)
    with open(file_path + ".enc", 'wb') as file:
        file.write(encrypted_data)

# Exemple d'utilisation
encrypt_file("sensitive_data.txt", key)
```

**Pourquoi c'est utile en cybersécurité ?**  
La compression permet de réduire la taille des fichiers, mais elle peut aussi être utilisée pour regrouper plusieurs fichiers à protéger. Le chiffrement permet de rendre les fichiers illisibles sans la clé appropriée, protégeant ainsi les données sensibles contre l'accès non autorisé.

---

### 🎯 Exercice pratique : Créer un outil qui détecte et archive automatiquement les fichiers suspects dans un dossier sécurisé

**Objectif de l'exercice** :  
L'exercice consiste à développer un script Python qui détecte les fichiers cachés dans un répertoire donné, les archive dans un fichier ZIP sécurisé et les chiffre pour les protéger contre tout accès non autorisé.

**Indications** :
1. **Étape 1** : Utilisez `os.listdir()` pour lister les fichiers du répertoire et détecter les fichiers cachés (ceux qui commencent par un point `.`).
2. **Étape 2** : Utilisez `zipfile` pour compresser les fichiers cachés dans un fichier ZIP.
3. **Étape 3** : Utilisez `cryptography` pour chiffrer le fichier ZIP créé.
4. **Étape 4** : Déplacez le fichier chiffré dans un répertoire sécurisé pour le stockage.

**Critères de succès** :
- Le script doit être capable de détecter tous les fichiers cachés dans un répertoire spécifié.
- Il doit être capable de compresser ces fichiers dans un fichier ZIP.
- Le fichier ZIP doit être chiffré et déplacé dans un répertoire sécurisé.
  
**Exemple d'exécution** :
```
Détection des fichiers cachés...
Fichiers cachés détectés : ['.hidden_file1.txt', '.hidden_file2.sh']
Compression des fichiers dans archive.zip...
Chiffrement du fichier archive.zip...
Déplacement de archive.zip.enc vers le dossier sécurisé...
```

---

Une fois que ce module est validé, nous aurons couvert les bases de la gestion des fichiers sensibles et des processus de sécurité associés. Nous pourrons alors passer à la création d'exercices pratiques et à la validation du module complet.