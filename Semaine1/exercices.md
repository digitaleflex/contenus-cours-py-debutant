
---

### **Exercices de Validation pour la Semaine 2**

---

#### **Niveau 1 (Facile)**

1. **Calculer la moyenne de 3 nombres**  
   Demandez à l'utilisateur de saisir trois nombres. Affichez la moyenne de ces trois nombres.  
   _Exemple de sortie_ :  
   ```
   Entrez trois nombres : 4 6 8
   La moyenne est : 6
   ```

2. **Vérifier si un nombre est divisible par 3**  
   Demandez à l'utilisateur de saisir un nombre. Vérifiez si ce nombre est divisible par 3 et affichez un message approprié.  
   _Exemple de sortie_ :  
   ```
   Entrez un nombre : 9
   Le nombre est divisible par 3
   ```

3. **Créer une table de multiplication**  
   Demandez à l'utilisateur de saisir un nombre et générez une table de multiplication jusqu’à 10 pour ce nombre.  
   _Exemple de sortie_ :  
   ```
   Entrez un nombre : 5
   5 x 1 = 5
   5 x 2 = 10
   ...
   ```

---

#### **Niveau 2 (Moyenne)**

4. **Compter les voyelles dans une chaîne de texte**  
   Demandez à l'utilisateur de saisir une phrase. Affichez le nombre de voyelles présentes dans la phrase.  
   _Exemple de sortie_ :  
   ```
   Entrez une phrase : Bonjour tout le monde
   Nombre de voyelles : 8
   ```

5. **Calculer la somme des chiffres d’un nombre**  
   Demandez à l'utilisateur de saisir un nombre. Calculez la somme des chiffres de ce nombre.  
   _Exemple de sortie_ :  
   ```
   Entrez un nombre : 12345
   La somme des chiffres est : 15
   ```

6. **Inverser une chaîne de caractères**  
   Demandez à l'utilisateur de saisir une chaîne de caractères et affichez la chaîne inversée.  
   _Exemple de sortie_ :  
   ```
   Entrez une chaîne : Python
   Chaîne inversée : nohtyP
   ```

7. **Créer un programme qui génère les N premiers nombres de Fibonacci**  
   Demandez à l'utilisateur de saisir un nombre N et générez les N premiers nombres de Fibonacci.  
   _Exemple de sortie_ :  
   ```
   Entrez un nombre : 6
   0, 1, 1, 2, 3, 5
   ```

---

#### **Niveau 3 (Difficile)**

8. **Calculer le facteur d’un nombre**  
   Demandez à l'utilisateur de saisir un nombre et calculez son facteur (facteur d'un nombre est le produit de tous les entiers positifs jusqu’à ce nombre).  
   _Exemple de sortie_ :  
   ```
   Entrez un nombre : 5
   Le facteur est : 120
   ```

9. **Vérifier si un nombre est un palindrome**  
   Demandez à l'utilisateur de saisir un nombre. Vérifiez si ce nombre est un palindrome (le même à l’envers).  
   _Exemple de sortie_ :  
   ```
   Entrez un nombre : 121
   Le nombre est un palindrome.
   ```

10. **Compter le nombre d’occurrences d’un mot dans une phrase**  
    Demandez à l'utilisateur de saisir une phrase et un mot. Comptez le nombre de fois où le mot apparaît dans la phrase.  
    _Exemple de sortie_ :  
    ```
    Entrez une phrase : Python est un langage puissant. Python est facile.
    Entrez un mot : Python
    Le mot 'Python' apparaît 2 fois.
    ```

11. **Calculer le PGCD de deux nombres**  
    Demandez à l'utilisateur de saisir deux nombres. Calculez et affichez leur plus grand commun diviseur (PGCD).  
    _Exemple de sortie_ :  
    ```
    Entrez deux nombres : 36 60
    Le PGCD est : 12
    ```

12. **Calculer la factorisation d’un nombre**  
    Demandez à l'utilisateur de saisir un nombre et affichez sa décomposition en facteurs premiers.  
    _Exemple de sortie_ :  
    ```
    Entrez un nombre : 56
    La factorisation est : 2 x 2 x 2 x 7
    ```

---

#### **Niveau 4 (Très difficile)**

13. **Analyser un fichier de logs (fichier texte)**  
    Demandez à l'utilisateur de saisir le chemin d’un fichier texte (log) et analysez les erreurs dans ce fichier. Affichez les lignes contenant le mot "ERROR".  
    _Exemple de sortie_ :  
    ```
    Entrez le chemin du fichier de logs : logs.txt
    Erreurs trouvées :
    ERROR: Failed login attempt at 2025-02-18 09:00:01
    ERROR: Invalid input at 2025-02-18 09:05:23
    ```

14. **Générer un rapport de mots de passe faibles**  
    Demandez à l'utilisateur de saisir une liste de mots de passe (séparés par des espaces). Analysez chaque mot de passe et affichez ceux qui sont considérés comme faibles (moins de 6 caractères ou ne contenant pas de chiffres).  
    _Exemple de sortie_ :  
    ```
    Entrez les mots de passe : python 12345 mypassword hello123
    Mots de passe faibles : python, 12345
    ```

15. **Créer un programme qui surveille un fichier et envoie une alerte si un changement est détecté**  
    Demandez à l'utilisateur de spécifier un fichier à surveiller. Le programme doit vérifier toutes les 10 secondes si le fichier a été modifié et envoyer une alerte.  
    _Exemple de sortie_ :  
    ```
    Surveille le fichier : logs.txt
    Fichier modifié à 14:30:10
    ```

---

### **Exercices Contextualisés en Situation Réelle**

---

1. **Analyser les logs d'un serveur pour détecter des tentatives de connexion échouées**  
    Vous avez un fichier de logs contenant des informations sur les connexions à un serveur. Utilisez Python pour extraire toutes les tentatives de connexion échouées et en faire une liste.  

2. **Surveiller l’utilisation du CPU sur un serveur distant**  
    Écrivez un script Python qui, à intervalles réguliers, récupère les informations sur l'utilisation du CPU d’un serveur distant et alerte si l’utilisation dépasse un seuil. Utilisez `psutil` pour récupérer ces informations.

3. **Vérification d’un fichier de configuration pour la présence de mots-clés sensibles**  
    Un fichier de configuration peut contenir des informations sensibles (ex. : clés API, mots de passe). Créez un script qui parcourt ce fichier et vous alerte s’il trouve des mots-clés sensibles comme `password`, `secret`, ou `apikey`.

4. **Écrire un script qui surveille l’activité des processus sur un serveur**  
    Vous devez surveiller les processus actifs sur un serveur et vous alerter en cas de processus non autorisé. Créez un script qui surveille les processus et envoie une alerte si un processus suspect est détecté.

5. **Scanner un répertoire à la recherche de fichiers malveillants**  
    Écrivez un script qui scrute un répertoire pour vérifier la présence de fichiers malveillants en fonction de leurs extensions (par exemple : `.exe`, `.bat`, `.js`). Ce script doit générer un rapport d’analyse.  

---