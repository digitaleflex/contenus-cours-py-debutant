# Module 1 - Semaine 3

D'accord, je vais étoffer le contenu du module 1 pour qu’il soit plus accessible aux débutants, avec des exemples détaillés et des explications simplifiées.

---

### 🟢 **Module 1 : Introduction au Pentesting avec Python**

#### ✅ **Objectifs du module** :
- **Comprendre le rôle de Python dans le pentesting** : Apprendre pourquoi et comment Python est utilisé dans les tests d'intrusion.
- **Présentation des outils utilisés** : Familiarisez-vous avec des outils essentiels dans le pentesting.
- **Notions juridiques et cadre légal du pentesting** : Prendre conscience des limites et des règles légales à respecter.
- **Configuration d’un lab de test sécurisé** : Créer un environnement sûr pour tester vos compétences.

---

### 1. **Rôle de Python dans le hacking éthique**

**Le pentesting** est une méthode utilisée pour tester la sécurité des systèmes informatiques en simulant des attaques afin d’en découvrir les vulnérabilités. Python est largement utilisé dans cette pratique car il permet d’automatiser de nombreuses tâches et de créer des scripts personnalisés pour analyser les systèmes.

#### **Pourquoi Python ?**

- **Facilité d’apprentissage** : Python est un langage simple à apprendre, même pour les débutants, grâce à une syntaxe claire.
- **Automatisation** : Vous pouvez automatiser des tâches répétitives, comme la collecte d'informations sur une cible ou l'analyse de réseaux.
- **Puissant et flexible** : Il dispose de nombreuses bibliothèques (comme `requests`, `scapy`, `nmap`, etc.) qui vous permettent de réaliser des actions avancées, comme l'analyse réseau ou l'exécution d'attaques.
- **Interopérabilité** : Python peut interagir avec des outils externes, comme **Metasploit** et **Nmap**, pour automatiser des tâches complexes.

#### **Exemple** : Si vous devez analyser un site Web pour détecter des vulnérabilités (comme des injections SQL), vous pourriez créer un script Python avec la bibliothèque **Requests** pour envoyer des requêtes et analyser les réponses, et avec **BeautifulSoup** pour analyser le HTML.

---

### 2. **Présentation des outils utilisés en Pentesting**

Voici une vue d'ensemble des outils que vous utiliserez dans ce module :

#### **Nmap** (Network Mapper)
- **Qu'est-ce que c’est ?**  
  Nmap est un scanner de réseau qui permet de découvrir des hôtes et des services sur un réseau informatique. Il peut identifier les ports ouverts et les services associés sur une machine.
  
- **Pourquoi l’utiliser ?**  
  Nmap est utilisé pour scanner un réseau à la recherche de machines actives et de services accessibles. Cela permet aux pentesters de détecter des points d'entrée potentiels dans un réseau.
  
- **Exemple de commande Nmap** :
  ```bash
  nmap -sP 192.168.1.0/24
  ```
  Cette commande scanne les machines dans le sous-réseau 192.168.1.0/24 pour découvrir les hôtes actifs.
  
- **Python-Nmap** : C’est une bibliothèque Python qui permet d’automatiser l’utilisation de Nmap.  
  **Exemple en Python** :
  ```python
  import nmap

  nm = nmap.PortScanner()
  nm.scan('192.168.1.1', '22-443')  # Scan de l'IP et des ports spécifiés
  print(nm.all_hosts())  # Affiche tous les hôtes trouvés
  ```

#### **Metasploit**  
- **Qu'est-ce que c’est ?**  
  Metasploit est un framework d’exploitation utilisé pour tester les vulnérabilités. Il contient une bibliothèque d'exploits pour attaquer des systèmes et vérifier leur sécurité.

- **Exemple d'utilisation** :
  Pour exploiter une vulnérabilité, vous pourriez utiliser un module Metasploit en ligne de commande ou par Python avec la bibliothèque `msfrpc`.

#### **Scapy**  
- **Qu'est-ce que c’est ?**  
  Scapy est un outil Python utilisé pour manipuler et analyser des paquets réseau. Vous pouvez envoyer, recevoir, et analyser les paquets pour détecter des vulnérabilités ou des attaques.

- **Exemple** :
  Pour créer un paquet **ping** (ICMP) en Python avec Scapy :
  ```python
  from scapy.all import *

  # Création d'un paquet ICMP
  ping = IP(dst="192.168.1.1")/ICMP()
  
  # Envoi du paquet
  send(ping)
  ```

#### **Requests**  
- **Qu'est-ce que c’est ?**  
  Requests est une bibliothèque Python qui simplifie l'envoi de requêtes HTTP, utile pour tester les applications web.
  
- **Exemple** : Pour envoyer une requête GET et vérifier si une page est vulnérable aux injections SQL :
  ```python
  import requests

  url = "http://example.com/login"
  data = {"username": "admin", "password": "' OR '1'='1"}
  
  response = requests.post(url, data=data)
  
  if "Welcome" in response.text:
      print("Vulnérabilité SQL Injection détectée")
  ```

---

### 3. **Notions juridiques et cadre légal du Pentesting**

Avant d’effectuer un test de pénétration, il est crucial de comprendre l'importance de respecter les lois et d'agir de manière éthique.

- **Autorisation écrite** : Avant de réaliser tout test sur un système, vous devez obtenir une autorisation formelle (par exemple, une lettre ou un contrat signé) du propriétaire du système.
  
- **Réglementation** : Le hacking non autorisé est illégal dans la plupart des pays. En France, par exemple, la loi sur la cybersécurité impose des sanctions sévères pour les intrusions informatiques non autorisées. Aux États-Unis, la **CFAA** (Computer Fraud and Abuse Act) criminalise l'accès non autorisé aux systèmes informatiques.
  
- **Ethique** : Le pentesting éthique repose sur le respect de la vie privée et de la sécurité des systèmes. Vous ne devez jamais exploiter une vulnérabilité pour causer des dommages, mais plutôt pour aider à renforcer la sécurité.

---

### 4. **Configuration d’un lab de test sécurisé**

Avant de commencer à tester quoi que ce soit sur des systèmes réels, il est essentiel de créer un laboratoire sécurisé, une sorte de "bac à sable" pour apprendre et tester sans danger.

#### **Etapes pour créer votre lab de test** :

1. **Installation de VirtualBox ou VMware** :
   - **VirtualBox** est un logiciel de virtualisation gratuit qui permet de créer des machines virtuelles sur votre ordinateur. Installez-le sur votre machine.
   
2. **Télécharger Kali Linux** :
   - Kali Linux est une distribution Linux spécialisée dans les tests de pénétration. Téléchargez l’ISO de Kali Linux sur le site officiel.
   - Créez une machine virtuelle dans VirtualBox et installez Kali Linux.
   
3. **Télécharger Metasploitable** :
   - Metasploitable est une machine virtuelle vulnérable. Téléchargez-la depuis [Metasploit Unleashed](https://www.metasploit.com/).
   
4. **Configurer les réseaux** :
   - Configurez vos machines pour qu’elles soient sur le même réseau privé (NAT ou réseau interne), pour garantir que seules ces machines puissent communiquer entre elles, et non votre réseau local.

#### **Test de connectivité** :
Une fois vos VM installées, vérifiez que Kali Linux et Metasploitable peuvent se pinger mutuellement pour s'assurer qu'elles sont sur le même réseau.

```bash
ping 192.168.1.100  # Ping de Metasploitable depuis Kali Linux
```

---

### 5. **Exercice : Installation et configuration des outils de pentesting en Python**

**Objectif** : Apprendre à installer et à utiliser Nmap, Scapy, et Requests dans un environnement de test.

#### **Consignes** :
1. **Installation des outils** :
   - Installez **python-nmap**, **requests** et **scapy** :
     ```bash
     pip install python-nmap requests scapy
     ```

2. **Scanner un réseau avec Nmap** :
   - Depuis Kali Linux, utilisez Nmap pour scanner un réseau privé (par exemple, `192.168.1.0/24`).
   - Utilisez Python pour automatiser cette tâche avec la bibliothèque `python-nmap` :
     ```python
     import nmap
     nm = nmap.PortScanner()
     nm.scan(hosts='192.168.1.0/24', arguments='-sP')
     print(nm.all_hosts())
     ```

3. **Analyser des paquets avec Scapy** :
   - Utilisez Scapy pour envoyer un ping ICMP et analyser les réponses :
     ```python
     from scapy.all import *
     response = sr1(IP(dst="192.168.1.1")/ICMP(), timeout=1)
     if response:
         print("Réponse reçue de 192.168.1.1")
     ```

4. **Tester la sécurité d'un formulaire web avec Requests** :
   - Créez un script Python qui tente une injection SQL sur un formulaire de connexion.
   - Exemple :
     ```python
     import requests
     url = "http://example.com/login"
     data = {"username": "admin", "password": "' OR '1'='1"}
     response = requests.post(url, data=data)
     if "Welcome" in response.text:
         print("SQL Injection détectée")
     ```

**Livrables attendus** :
- Capture d’écran de la configuration de votre lab.
- Script Python qui automatise le scan réseau avec Nmap et analyse les paquets avec Scapy.
- Exemple de test d’injection SQL avec Requests.

---

### **Résumé du module 1 :**

Dans ce module, vous avez appris à comprendre le rôle de Python dans le pentesting et à configurer un environnement de test sécurisé. Vous avez installé les outils de base (Nmap, Metas, Scapy, et Requests), et vous avez appris à les utiliser pour effectuer des tâches de pentesting telles que le scan réseau, l'analyse de paquets et la simulation d'attaques.

### **Compétences acquises** :
- **Compréhension du rôle de Python** dans le pentesting, et des avantages qu'il offre en termes d'automatisation et de flexibilité.
- **Installation et configuration des outils essentiels** (Nmap, Scapy, Requests) pour les tests d'intrusion.
- **Création d'un laboratoire sécurisé** pour tester vos compétences en toute sécurité, en utilisant des machines virtuelles (VM Kali Linux et Metasploitable).
- **Exécution d'un scan réseau** avec Nmap et d'analyse de paquets avec Scapy.
- **Simulation d'attaques** sur des sites Web à l'aide de Requests pour tester des vulnérabilités comme l'injection SQL.

### **Prochaines étapes** :
- Dans le module suivant, vous apprendrez à scanner des réseaux plus complexes et à identifier les services et versions actives.
- Vous découvrirez également des techniques avancées d'analyse et de manipulation des paquets réseau pour détecter des vulnérabilités.

---

Cela conclut le module 1, mais avant de passer à la suite, assurez-vous de maîtriser ces outils de base, car ils serviront de fondation pour les modules à venir. Le pentesting repose fortement sur la pratique, alors prenez votre temps pour expérimenter avec les exemples donnés et comprendre en profondeur le fonctionnement de chaque outil.



Avant de passer au module 2, voici une liste d'outils de base à maîtriser pour être prêt à attaquer les étapes suivantes du pentesting avec Python. Ces outils sont essentiels pour bien comprendre et utiliser Python dans un contexte de tests d'intrusion.

### **Outils de base à maîtriser :**

1. **Python** :
   - La base même du pentesting avec Python. Vous devez être à l'aise avec les concepts de Python, tels que les fonctions, les bibliothèques externes, la gestion des erreurs, la manipulation des fichiers et l’utilisation des modules spécifiques au pentesting (comme `socket`, `requests`, `scapy`).
   - **Exercice préalable** : Créez un script Python simple qui utilise des fonctions de réseau et de traitement de texte pour automatiser des tâches répétitives.

2. **Nmap** :
   - **Description** : Un scanner de réseau populaire permettant de détecter les hôtes et services actifs sur un réseau. En tant que pentesteur, cet outil vous aidera à découvrir les machines vulnérables et à analyser les services ouverts.
   - **Outils Python associés** : `python-nmap` – une bibliothèque Python pour automatiser l’utilisation de Nmap.
   - **Exercice préalable** : Lancez un scan de réseau pour découvrir des ports ouverts sur une machine cible.

3. **Metasploit** :
   - **Description** : Un cadre d'exploitation très utilisé dans le pentesting pour exploiter des vulnérabilités spécifiques sur des systèmes.
   - **Outils Python associés** : Utilisez `msfrpc` ou l'interface de ligne de commande de Metasploit avec Python pour automatiser des attaques.
   - **Exercice préalable** : Configurez Metasploit sur une machine virtuelle (Kali Linux) et apprenez à l'utiliser pour tester des vulnérabilités.

4. **Scapy** :
   - **Description** : Un outil puissant pour l'analyse et la manipulation des paquets réseau. Utilisé pour l’analyse du trafic, l'injection de paquets et la création de vos propres outils de tests réseau.
   - **Outils Python associés** : Utilisez la bibliothèque Scapy en Python pour analyser les paquets et effectuer des attaques comme le spoofing.
   - **Exercice préalable** : Créez un script Python utilisant Scapy pour scanner un réseau et analyser des paquets en temps réel.

5. **Requests** :
   - **Description** : Une bibliothèque Python pour envoyer des requêtes HTTP, très utile pour interagir avec des sites Web et tester des vulnérabilités telles que les injections SQL et les attaques XSS.
   - **Exercice préalable** : Effectuez des requêtes GET et POST simples pour interagir avec une page Web et analyser les réponses.

6. **Wireshark** :
   - **Description** : Un analyseur de paquets réseau qui vous permet de capturer et d'analyser le trafic en temps réel.
   - **Outils Python associés** : Vous pouvez utiliser Wireshark en combinaison avec Scapy ou d’autres outils Python pour affiner votre analyse de réseau.
   - **Exercice préalable** : Capturez des paquets réseau pour identifier les informations sensibles transmises en clair.

### **Autres outils et concepts à connaître :**

- **Kali Linux** :
  - Un système d’exploitation spécialisé dans le pentesting et la sécurité, qui contient une multitude d'outils comme Nmap, Metasploit, Burp Suite, John the Ripper, etc.
  - **Exercice préalable** : Familiarisez-vous avec Kali Linux et explorez ses outils de sécurité.

- **VirtualBox / VMware** :
  - Outil de virtualisation pour exécuter des machines virtuelles (VM), indispensable pour configurer des environnements de test sécurisés (comme Metasploitable).
  - **Exercice préalable** : Installez VirtualBox et configurez des machines virtuelles pour tester vos attaques en toute sécurité.

- **Shodan** :
  - Un moteur de recherche pour les appareils connectés à Internet. Cela vous permet de découvrir des appareils vulnérables exposés sur Internet.
  - **Exercice préalable** : Recherchez des appareils vulnérables sur Shodan et analysez les informations retournées.

### **Indications supplémentaires avant de passer au module 2 :**

- **Pratiquez régulièrement** : Plus vous pratiquez, plus vous devenez compétent dans l’utilisation de ces outils. Consacrez du temps à explorer les fonctionnalités des outils, à écrire des scripts Python qui les automatisent, et à résoudre des exercices pratiques.
  
- **Environnement sécurisé** : Toujours effectuer vos tests dans un environnement sécurisé. Utilisez des machines virtuelles (VM) et des réseaux isolés pour éviter d’endommager un réseau ou des systèmes réels. **Ne testez jamais un système sans l’autorisation explicite du propriétaire.**

- **Recherchez des vulnérabilités réelles** : Essayez de tester des environnements de test comme Metasploitable, DVWA (Damn Vulnerable Web Application), ou Hack The Box pour perfectionner vos compétences sans risque.

- **Exercice de révision** : Avant de continuer, assurez-vous de bien maîtriser les concepts du module 1. Un bon exercice de révision pourrait être de créer un petit projet Python qui combine les outils appris jusqu’à présent (par exemple, un scanner de réseau automatisé avec Nmap et une analyse de paquets en utilisant Scapy).

En maîtrisant ces outils et en pratiquant les exercices, vous serez prêt à aborder le module 2, où vous apprendrez à scanner des réseaux, détecter des services actifs, et interagir avec des cibles distantes pour identifier des vulnérabilités.