#!/bin/bash

# Couleurs pour les messages
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Début de la réorganisation des cours...${NC}"

# Créer la structure des dossiers
echo -e "${GREEN}📁 Création des dossiers...${NC}"
mkdir -p public/cours/{semaine0,semaine1,semaine2,semaine3}

# Déplacer les fichiers de la Semaine 0
echo -e "${GREEN}📦 Déplacement des fichiers de la Semaine 0...${NC}"
mv Semaine0/jour2.md public/cours/semaine0/module1.md
mv Semaine0/jour3.md public/cours/semaine0/module2.md
mv Semaine0/jour4.md public/cours/semaine0/module3.md
mv Semaine0/jour5.md public/cours/semaine0/module4.md
mv Semaine0/jour6-7.md public/cours/semaine0/module5.md
mv Semaine0/exercices.md public/cours/semaine0/module6.md

# Déplacer les fichiers de la Semaine 1
echo -e "${GREEN}📦 Déplacement des fichiers de la Semaine 1...${NC}"
mv Semaine1/Module1.md public/cours/semaine1/module1.md
mv Semaine1/Module3.md public/cours/semaine1/module2.md
mv Semaine1/Module4.Md public/cours/semaine1/module3.md

# Déplacer les fichiers de la Semaine 2
echo -e "${GREEN}📦 Déplacement des fichiers de la Semaine 2...${NC}"
mv Semaine2/Module4.md public/cours/semaine2/module1.md
mv Semaine2/exercices.md public/cours/semaine2/module2.md

# Déplacer les fichiers de la Semaine 3
echo -e "${GREEN}📦 Déplacement des fichiers de la Semaine 3...${NC}"
if [ -d "Semaine3" ]; then
    for file in Semaine3/*.md; do
        if [ -f "$file" ]; then
            # Extraire le nom du fichier sans extension et le convertir en module
            filename=$(basename "$file" .md)
            mv "$file" "public/cours/semaine3/module${filename##*[^0-9]}.md"
        fi
    done
fi

# Supprimer les dossiers vides
echo -e "${GREEN}🗑️ Nettoyage des dossiers vides...${NC}"
rm -rf Semaine0 Semaine1 Semaine2 Semaine3

# Vérifier la nouvelle structure
echo -e "${GREEN}✅ Vérification de la structure...${NC}"
tree public/cours

echo -e "${BLUE}✨ Réorganisation terminée !${NC}" 