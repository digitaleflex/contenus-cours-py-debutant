### 🛠 Projet de fin de semaine : Développement d'un outil de pentesting automatisé

**🎯 Objectif :**  
Développer un outil tout-en-un pour tester la sécurité d’une machine cible, en automatisant plusieurs processus de pentesting essentiels. Cet outil devra combiner diverses fonctionnalités de scan, de tests de vulnérabilité et de collecte d’informations.

---

### **Fonctionnalités à implémenter :**

#### 1. **Scan de réseau et ports ouverts :**
   - **Objectif :** Identifier les machines actives sur un réseau et les ports ouverts sur chacune d'elles.
   - **Outils à utiliser :** `nmap` via `python-nmap` ou le module `socket` pour un scan plus basique.

   **Exemple d’implémentation (utilisant `python-nmap`):**
   ```python
   import nmap

   def scan_ports(target_ip):
       scanner = nmap.PortScanner()
       print(f"Scanning {target_ip}...")
       scanner.scan(target_ip, '1-1024')  # Scanne les ports 1 à 1024
       print(scanner.all_hosts())
       for host in scanner.all_hosts():
           print(f"Host: {host}")
           print(f"Ports ouverts: {scanner[host].all_tcp()}")
   scan_ports("192.168.1.100")
   ```
   Ce script utilise `nmap` pour scanner les ports de la machine cible et lister les ports ouverts.

---

#### 2. **Détection de services vulnérables :**
   - **Objectif :** Identifier les services actifs sur les ports ouverts et vérifier leur version pour détecter des vulnérabilités.
   - **Outils à utiliser :** Utiliser `nmap` pour scanner les services et leurs versions. Vous pouvez utiliser des bases de données comme CVE pour vérifier la présence de vulnérabilités.
   
   **Exemple d'implémentation (scan des services avec `nmap`):**
   ```python
   def scan_services(target_ip):
       scanner = nmap.PortScanner()
       print(f"Scanning services on {target_ip}...")
       scanner.scan(target_ip, arguments='-sV')  # Scan des services et de leurs versions
       for host in scanner.all_hosts():
           for protocol in scanner[host].all_protocols():
               print(f"Protocol: {protocol}")
               for port in scanner[host][protocol].keys():
                   service = scanner[host][protocol][port]['name']
                   version = scanner[host][protocol][port]['version']
                   print(f"Port: {port}, Service: {service}, Version: {version}")
   scan_services("192.168.1.100")
   ```

---

#### 3. **Test de force brute sur SSH/FTP :**
   - **Objectif :** Tester la robustesse des services SSH et FTP contre les attaques par force brute.
   - **Outils à utiliser :** `paramiko` pour SSH et `ftplib` pour FTP.
   
   **Exemple d'implémentation de brute force sur SSH :**
   ```python
   import paramiko

   def ssh_brute_force(host, username, password_list):
       for password in password_list:
           try:
               print(f"Testing password: {password}")
               ssh = paramiko.SSHClient()
               ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
               ssh.connect(host, username=username, password=password)
               print(f"Password found: {password}")
               break
           except paramiko.AuthenticationException:
               continue
           finally:
               ssh.close()

   passwords = ['password1', '123456', 'admin']
   ssh_brute_force('192.168.1.100', 'user', passwords)
   ```

---

#### 4. **Capture et analyse des paquets réseau :**
   - **Objectif :** Capturer et analyser les paquets réseau pour détecter les anomalies ou les attaques (comme le MITM).
   - **Outils à utiliser :** `scapy` ou `socket` pour capturer les paquets.

   **Exemple d’implémentation avec Scapy :**
   ```python
   from scapy.all import sniff

   def packet_callback(packet):
       if packet.haslayer('IP'):
           print(f"Packet captured: {packet[IP].src} -> {packet[IP].dst}")
           print(packet.show())

   def capture_packets(interface):
       print(f"Sniffing packets on {interface}...")
       sniff(iface=interface, prn=packet_callback, store=0)

   capture_packets('eth0')
   ```

---

#### 5. **Génération d’un rapport d’audit (.txt, .csv) :**
   - **Objectif :** Générer un rapport détaillé sur l’ensemble des tests effectués et des résultats obtenus.
   - **Outils à utiliser :** `csv` pour générer un rapport en CSV ou `txt` pour un rapport simple.

   **Exemple d’implémentation (rapport en CSV) :**
   ```python
   import csv

   def generate_report(scan_results):
       with open('audit_report.csv', mode='w') as file:
           writer = csv.writer(file)
           writer.writerow(['IP', 'Port', 'Service', 'Version'])
           for result in scan_results:
               writer.writerow(result)
       print("Report generated: audit_report.csv")

   scan_results = [('192.168.1.100', 80, 'http', 'Apache 2.4')]
   generate_report(scan_results)
   ```

---

#### **Bonus : Ajout d’une interface CLI interactive :**
   - **Objectif :** Créer une interface en ligne de commande (CLI) interactive permettant à l'utilisateur de choisir les actions à effectuer et de saisir les paramètres nécessaires (comme l’IP de la cible).
   - **Outils à utiliser :** `argparse` pour créer des arguments CLI ou `click` pour des interfaces plus avancées.

   **Exemple d'implémentation (avec `argparse`):**
   ```python
   import argparse

   def main():
       parser = argparse.ArgumentParser(description='Pentesting Tool')
       parser.add_argument('--scan', help='Scan network and open ports', action='store_true')
       parser.add_argument('--brute-ssh', help='Test brute force on SSH', action='store_true')
       parser.add_argument('--report', help='Generate an audit report', action='store_true')
       parser.add_argument('--target', help='Target IP address')

       args = parser.parse_args()

       if args.scan:
           scan_ports(args.target)
       if args.brute_ssh:
           passwords = ['password1', '123456', 'admin']
           ssh_brute_force(args.target, 'user', passwords)
       if args.report:
           scan_results = [('192.168.1.100', 80, 'http', 'Apache 2.4')]
           generate_report(scan_results)

   if __name__ == '__main__':
       main()
   ```

---

### **Conclusion du projet :**

Le projet de fin de semaine vous permet de mettre en pratique une large gamme de compétences acquises durant les modules précédents. Vous allez développer un outil automatisé capable d’effectuer des tests de sécurité sur une machine cible et de produire un rapport d’audit.

L’outil développé peut être utilisé pour :
- Identifier les services vulnérables
- Tester la robustesse des connexions SSH/FTP
- Capturer et analyser le trafic réseau
- Générer des rapports d'audit détaillés en différents formats.

Ce projet est un excellent moyen de solidifier vos connaissances en pentesting avec Python tout en développant un outil pratique et fonctionnel.