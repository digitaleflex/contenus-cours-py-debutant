Voici le contenu détaillé du **Module 2 : Scan et reconnaissance réseau**, conçu pour aider les débutants à bien assimiler les concepts à l'aide d'exemples clairs et d’explications détaillées.

---

### **Module 2 : Scan et reconnaissance réseau**

#### **Objectifs du module :**
- Apprendre à identifier les machines et services actifs sur un réseau.
- Utiliser **Nmap**, **Socket**, **Whois** et **Shodan** pour scanner des réseaux, détecter les services ouverts et récupérer des informations sur une cible.
  
---

### **1. Introduction à la reconnaissance réseau**
La reconnaissance réseau est une phase cruciale dans le pentesting. Elle permet de découvrir les machines présentes sur un réseau, leurs services, leurs versions, et leurs vulnérabilités potentielles. Pour ce faire, nous allons utiliser plusieurs outils et techniques automatisées en Python.

#### **1.1 Scanner un réseau avec Nmap (python-nmap)**

**Nmap** est l'outil le plus utilisé pour effectuer un scan réseau afin de découvrir les hôtes, les services et leurs versions. Nous allons utiliser la bibliothèque **python-nmap**, qui est un wrapper Python pour Nmap, afin d'automatiser ce processus.

- **Installation de python-nmap** :
  ```bash
  pip install python-nmap
  ```

- **Comment utiliser python-nmap** :
  - Exemple simple de scan pour détecter les ports ouverts d’une machine cible :
    ```python
    import nmap

    # Initialisation de l'objet scanner
    scanner = nmap.PortScanner()

    # Scanner un hôte (exemple : 192.168.1.1)
    scanner.scan('192.168.1.1', '22-1024')  # Scanner les ports 22 à 1024

    # Affichage des résultats du scan
    print(scanner.all_hosts())
    print(scanner['192.168.1.1'].state())
    print(scanner['192.168.1.1']['tcp'].keys())  # Affiche les ports ouverts
    ```

  **Explication :**
  - `scanner.scan()` : Lance le scan sur l'hôte et la plage de ports spécifiés.
  - `scanner.all_hosts()` : Affiche toutes les machines détectées.
  - `scanner['192.168.1.1'].state()` : Affiche l'état de la machine cible.
  - `scanner['192.168.1.1']['tcp'].keys()` : Affiche les ports ouverts de la machine cible.
  
**Conseil** : Familiarisez-vous avec les différentes options de scan proposées par Nmap pour personnaliser vos scans, telles que le scan de ports, la détection de services, et la détection de versions.

---

#### **1.2 Détection des ports ouverts avec Socket**

L'utilisation de **socket** en Python permet de créer des connexions réseau. Cela peut être utilisé pour vérifier si un port est ouvert sur une machine cible.

- **Installation du module socket** : 
  Le module **socket** est intégré dans Python, donc aucune installation supplémentaire n’est nécessaire.

- **Exemple de script pour détecter un port ouvert** :
  ```python
  import socket

  def scan_port(host, port):
      try:
          s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
          s.settimeout(1)
          result = s.connect_ex((host, port))  # Vérifie la connexion
          if result == 0:
              print(f"Port {port} ouvert sur {host}")
          else:
              print(f"Port {port} fermé sur {host}")
          s.close()
      except socket.error as e:
          print(f"Erreur de connexion: {e}")

  # Exemple d'utilisation
  host = '192.168.1.1'
  port = 80
  scan_port(host, port)
  ```

**Explication :**
- `socket.socket(socket.AF_INET, socket.SOCK_STREAM)` : Crée un objet socket pour une connexion IPv4.
- `s.connect_ex((host, port))` : Essaye de se connecter au port spécifié sur l’hôte cible. Si la connexion est réussie, cela signifie que le port est ouvert.
  
---

#### **1.3 Récupération d’informations sur une cible avec Whois et Shodan**

##### **Whois** :
**Whois** permet de récupérer des informations sur un domaine, notamment son propriétaire, son adresse, et les serveurs associés. Ces informations peuvent être utilisées pour mieux comprendre la cible.

- **Installation de whois** :
  ```bash
  pip install python-whois
  ```

- **Exemple de récupération d'informations Whois** :
  ```python
  import whois

  domain = whois.whois('example.com')
  print(domain)
  ```

**Explication** : 
- `whois.whois()` : Permet de récupérer les informations liées à un domaine spécifié.

##### **Shodan** :
**Shodan** est un moteur de recherche spécialisé dans les appareils connectés à Internet. Il permet de rechercher des systèmes vulnérables et des services exposés. Vous pouvez utiliser **Shodan** pour obtenir des informations sur des appareils spécifiques.

- **Installation de Shodan** :
  ```bash
  pip install shodan
  ```

- **Exemple de récupération d'informations avec Shodan** :
  ```python
  import shodan

  API_KEY = 'votre_clé_API_shodan'
  api = shodan.Shodan(API_KEY)

  try:
      # Recherche d'un hôte spécifique
      result = api.host('8.8.8.8')  # Adresse IP de Google DNS
      print(result)
  except shodan.APIError as e:
      print(f"Erreur Shodan: {e}")
  ```

**Explication** : 
- `api.host()` : Permet d’obtenir des informations sur un hôte en fonction de son adresse IP.
  
---

#### **2. Exercice : Créer un scanner avancé qui identifie les services actifs et leurs versions**

**But** : Vous allez créer un scanner réseau complet qui analyse les hôtes sur un réseau donné, détecte les services actifs, et récupère leurs versions à l'aide de Nmap et Socket.

**Instructions :**
1. **Scanner les hôtes d'un réseau** : Utilisez Nmap (python-nmap) pour scanner les adresses IP du réseau local. Par exemple, `192.168.1.0/24` pour scanner toutes les adresses IP de ce sous-réseau.
2. **Identifier les services et leurs versions** : Pour chaque hôte détecté, récupérez les ports ouverts et identifiez les services associés avec Nmap. Utilisez des sockets pour vérifier certains ports spécifiques si nécessaire.
3. **Récupérer les informations de version** : Utilisez Nmap pour obtenir des informations de version des services détectés sur les ports ouverts.
4. **Générer un rapport** : Écrivez un script qui génère un rapport détaillé (format texte ou CSV) avec les informations suivantes :
   - Adresse IP de l'hôte
   - Ports ouverts
   - Services associés
   - Versions des services

**Exemple de résultat attendu :**
```
Hôte: 192.168.1.1
  - Port 22 ouvert : SSH (version 7.4)
  - Port 80 ouvert : HTTP (version 2.4.38)
  
Hôte: 192.168.1.2
  - Port 443 ouvert : HTTPS (version 1.1)
```

---

#### **Résumé du module 2 :**

Dans ce module, vous avez appris à utiliser Python pour effectuer des scans réseau avancés en utilisant des outils comme **Nmap** et **Socket**. Vous avez également exploré des outils externes comme **Whois** et **Shodan** pour récupérer des informations précieuses sur des cibles. L’exercice vous a permis de créer un scanner complet pour identifier les services actifs et leurs versions sur un réseau donné, en générant un rapport détaillé.

Avant de passer au module suivant, assurez-vous d’être à l’aise avec la mise en œuvre de ces outils et techniques.

### **Guide des notions à maîtriser avant de passer au module suivant : Scan et reconnaissance réseau**

Avant de passer au **Module 3 : Analyse et manipulation des paquets réseau**, il est essentiel de bien comprendre et maîtriser les concepts abordés dans ce module. Voici un guide détaillé pour vous aider à bien assimiler les notions clés du **Module 2**.

---

### **1. Scanner un réseau avec Nmap en Python (python-nmap)**

#### **Notions clés à maîtriser :**
- **Nmap** : Un des outils les plus utilisés pour le scan de réseau, permettant de découvrir les hôtes actifs, leurs services et leurs versions.
- **python-nmap** : Une bibliothèque Python permettant d'interagir avec Nmap directement depuis un script Python. Elle permet de lancer des scans et d'analyser les résultats.
- **Ports ouverts** : Les ports d'une machine sont comme des portes par lesquelles les services (applications) de l'hôte communiquent avec l'extérieur. Un port ouvert signifie que le service est accessible depuis le réseau.

#### **Exemples pratiques à maîtriser :**
- Scannez un hôte spécifique pour détecter les ports ouverts dans une plage donnée.
  - Exemple : `scanner.scan('192.168.1.1', '22-1024')` pour scanner les ports 22 à 1024 de l'hôte 192.168.1.1.
- Exécutez un scan pour détecter les services (HTTP, SSH, etc.) et obtenir leurs versions.

#### **Conseils :**
- Utilisez les différents types de scan fournis par Nmap : `-sS` (scan SYN), `-sU` (scan UDP), etc.
- Envisagez d'ajouter des options comme `-sV` pour obtenir des versions des services.
  
---

### **2. Détection des ports ouverts avec Socket**

#### **Notions clés à maîtriser :**
- **Sockets** : Un socket est un point de communication dans un réseau. En utilisant le module **socket** en Python, vous pouvez tester la connectivité à différents ports d'une machine.
- **Port ouvert** : Un port est ouvert lorsque l’hôte écoute des connexions sur ce port. Un test de connexion réussi à un port signifie qu'il est ouvert.
- **Timeout** : Le timeout est essentiel pour éviter que votre programme se bloque indéfiniment si un port est fermé ou inactif.

#### **Exemples pratiques à maîtriser :**
- Écrire un script pour tester la connexion à un port sur un hôte donné. Exemple :
  ```python
  def scan_port(host, port):
      try:
          s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
          s.settimeout(1)  # Délai d'attente de 1 seconde
          result = s.connect_ex((host, port))
          if result == 0:
              print(f"Port {port} ouvert sur {host}")
          else:
              print(f"Port {port} fermé sur {host}")
          s.close()
      except socket.error as e:
          print(f"Erreur: {e}")
  ```

#### **Conseils :**
- Utilisez le délai de connexion (timeout) pour éviter un blocage prolongé lors de la vérification des ports.
- Pratiquez avec des plages de ports spécifiques comme les ports populaires (22 pour SSH, 80 pour HTTP, etc.).

---

### **3. Récupération d'informations avec Whois et Shodan**

#### **Notions clés à maîtriser :**
- **Whois** : Permet d’obtenir des informations sur le propriétaire d’un domaine, son adresse IP, les serveurs associés et d'autres détails administratifs.
- **Shodan** : Moteur de recherche permettant de découvrir des appareils connectés à Internet. Il peut fournir des informations sur des machines vulnérables ou des services exposés.
- **API Shodan** : Shodan propose une API qui permet de récupérer des informations directement dans vos scripts Python.

#### **Exemples pratiques à maîtriser :**
- Utilisez **whois** pour récupérer des informations sur un domaine :
  ```python
  import whois
  domain = whois.whois('example.com')
  print(domain)
  ```
- Utilisez **Shodan** pour obtenir des informations sur un hôte avec une clé API :
  ```python
  import shodan
  API_KEY = 'votre_clé_API_shodan'
  api = shodan.Shodan(API_KEY)
  result = api.host('8.8.8.8')
  print(result)
  ```

#### **Conseils :**
- Obtenez votre clé API Shodan gratuite pour explorer la base de données.
- Familiarisez-vous avec les données retournées par Whois et Shodan pour pouvoir les interpréter.

---

### **4. Générer des rapports détaillés des scans réseau**

#### **Notions clés à maîtriser :**
- **Format CSV** : Le format CSV est idéal pour structurer et exporter des données de manière lisible et portable. Cela vous permet de générer des rapports détaillés sur les services détectés et leurs versions.
- **Rapports textuels** : La génération de rapports sous forme de texte peut également être utile pour stocker les résultats dans un fichier simple à consulter.
  
#### **Exemples pratiques à maîtriser :**
- Générer un fichier texte contenant les informations des services détectés :
  ```python
  with open('rapport_scan.txt', 'w') as f:
      f.write("Hôte: 192.168.1.1\n")
      f.write("Port 22 ouvert : SSH (version 7.4)\n")
  ```
- Exporter les résultats sous forme de fichier CSV :
  ```python
  import csv
  with open('rapport_scan.csv', 'w', newline='') as f:
      writer = csv.writer(f)
      writer.writerow(['Hôte', 'Port', 'Service', 'Version'])
      writer.writerow(['192.168.1.1', 22, 'SSH', '7.4'])
  ```

#### **Conseils :**
- Assurez-vous que le format du rapport est clair et structuré afin que les informations puissent être facilement interprétées.

---

### **Résumé des notions à maîtriser avant de passer au module suivant :**

Avant de passer au **Module 3** sur l'analyse des paquets, vous devez être à l'aise avec les éléments suivants :
1. Utiliser **Nmap** (via **python-nmap**) pour scanner des réseaux et obtenir des informations sur les hôtes et services.
2. Tester les **ports ouverts** avec le module **socket** en Python.
3. Utiliser **Whois** et **Shodan** pour récupérer des informations sur des cibles et leurs services.
4. Générer des **rapports détaillés** pour consigner les résultats de vos scans sous différents formats (texte, CSV).

Une fois ces concepts maîtrisés, vous serez prêt à aborder l'analyse de paquets réseau et l’exploitation des vulnérabilités dans le prochain module.