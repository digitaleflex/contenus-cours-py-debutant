# Module 3 - Semaine 2

Voici le contenu détaillé du **Module 3 : Programmation réseau avec Python** :

---

### 🟢 Module 3 : Programmation réseau avec Python

**Objectifs du module** :  
Ce module vous permet d'apprendre à interagir avec des machines distantes et à utiliser les protocoles réseau via Python. Vous apprendrez à manipuler des sockets pour communiquer avec d'autres machines, à scanner les ports ouverts pour détecter les services actifs et à analyser les paquets réseau à l'aide de la bibliothèque **Scapy**.

---

#### 3.1 - **Introduction aux Sockets en Python**

Les **sockets** sont des points d'accès permettant à deux programmes d’échanger des données sur un réseau. Ils font partie du modèle client-serveur où un programme (le serveur) écoute les connexions et un autre programme (le client) envoie des données.

- **Socket TCP/IP** : C'est le type de socket le plus courant pour la communication réseau. Il assure une transmission fiable et ordonnée des données.

##### Exemple de serveur TCP (écoute les connexions sur un port donné) :
```python
import socket

# Créer un socket serveur
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Lier le socket à un adresse IP et un port
server_socket.bind(("0.0.0.0", 12345))  # 0.0.0.0 signifie que toutes les interfaces peuvent se connecter

# Écouter les connexions entrantes
server_socket.listen(5)
print("En attente de connexions...")

# Accepter une connexion entrante
client_socket, client_address = server_socket.accept()
print(f"Connexion acceptée depuis {client_address}")

# Recevoir un message du client
message = client_socket.recv(1024).decode()
print(f"Message reçu : {message}")

# Répondre au client
client_socket.send("Hello from server!".encode())

# Fermer la connexion
client_socket.close()
server_socket.close()
```

##### Exemple de client TCP (envoie un message au serveur) :
```python
import socket

# Créer un socket client
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Connexion au serveur
client_socket.connect(("127.0.0.1", 12345))  # Se connecter au serveur local

# Envoyer un message au serveur
client_socket.send("Hello from client!".encode())

# Recevoir la réponse du serveur
response = client_socket.recv(1024).decode()
print(f"Réponse du serveur : {response}")

# Fermer la connexion
client_socket.close()
```

**Pourquoi c'est utile en cybersécurité ?**  
Les sockets sont utilisés pour établir des connexions réseau et pour la communication entre machines. Vous pouvez utiliser cette fonctionnalité pour développer des outils d'analyse de réseau ou pour interagir avec des serveurs distants dans des scripts de cybersécurité.

---

#### 3.2 - **Scanner des ports ouverts avec Socket**

Un des usages les plus courants des sockets est de scanner les ports d'une machine distante pour savoir quels services sont ouverts et accessibles. Ce processus est essentiel pour les tests de pénétration et l'audit de sécurité.

##### Exemple de scanner de ports basique :
```python
import socket

def scan_ports(target_ip, ports):
    open_ports = []
    for port in ports:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)  # Timeout de 1 seconde
        result = sock.connect_ex((target_ip, port))  # Retourne 0 si le port est ouvert
        if result == 0:
            open_ports.append(port)
        sock.close()
    return open_ports

# Exemple d'utilisation
target = "192.168.1.1"
ports_to_scan = [22, 80, 443, 8080]
open_ports = scan_ports(target, ports_to_scan)
print(f"Ports ouverts sur {target} : {open_ports}")
```

**Pourquoi c'est utile en cybersécurité ?**  
Scanner les ports est un moyen courant pour tester la sécurité d'un réseau. Cela vous permet de découvrir des services potentiellement vulnérables ou non sécurisés.

---

#### 3.3 - **Envoi et réception de données sur un réseau**

Une fois qu'une connexion est établie via un socket, vous pouvez envoyer et recevoir des données. Dans ce contexte de cybersécurité, vous pourriez être amené à exécuter des commandes à distance ou récupérer des informations sensibles.

##### Exemple de script d’envoi et réception de données via TCP :
```python
import socket

# Créer un socket serveur
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(("0.0.0.0", 12345))
server_socket.listen(1)
print("En attente de connexion...")

# Accepter la connexion du client
client_socket, client_address = server_socket.accept()
print(f"Connexion de {client_address}")

# Recevoir des données
data = client_socket.recv(1024).decode()
print(f"Données reçues : {data}")

# Envoyer une réponse
client_socket.send("Données reçues".encode())

client_socket.close()
server_socket.close()
```

---

#### 3.4 - **Analyse de paquets réseau avec Scapy (Introduction)**

**Scapy** est une bibliothèque Python puissante qui vous permet de manipuler et analyser des paquets réseau. C’est un outil très utilisé dans les tests de pénétration et pour effectuer des analyses réseau en profondeur.

- **Installation de Scapy** :
  ```bash
  pip install scapy
  ```

##### Exemple d'envoi et réception de paquets ICMP (ping) avec Scapy :
```python
from scapy.all import *

# Créer un paquet ICMP
packet = IP(dst="8.8.8.8")/ICMP()

# Envoyer le paquet et afficher la réponse
response = sr1(packet, timeout=1)
if response:
    print(f"Réponse reçue : {response.summary()}")
else:
    print("Pas de réponse.")
```

**Pourquoi c'est utile en cybersécurité ?**  
Scapy permet de manipuler des paquets réseau de manière détaillée. Vous pouvez l’utiliser pour effectuer des attaques de type **man-in-the-middle**, analyser des paquets pour des données sensibles, ou tester la connectivité de réseaux distants.

---

### 🎯 Exercice pratique : Développer un scanner de ports pour détecter les services actifs sur une machine cible

**Objectif de l'exercice** :
- Créer un scanner de ports simple à l’aide de la bibliothèque `socket` en Python.
- Scanner les ports d'une machine distante pour détecter quels services sont ouverts et actifs.
- À la fin de l’exercice, vous pourrez identifier les services actifs sur une machine cible et alerter l'utilisateur si des ports importants sont ouverts.

**Indications** :
1. Utilisez le module `socket` pour établir une connexion sur les ports spécifiés.
2. Affichez les ports ouverts et identifiez le service (ex: HTTP, SSH, FTP).
3. Optionnel : Utilisez la bibliothèque `argparse` pour ajouter des arguments de ligne de commande (par exemple, l’adresse IP de la cible et les ports à scanner).

---

Si ce module est validé, nous pourrons passer à la rédaction du **Module 4**.
