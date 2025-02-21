#!/bin/bash

# Couleurs pour les messages
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🔄 Restauration des dossiers et fichiers...${NC}\n"

# Restaurer les dossiers Semaine0 à Semaine3
for i in {0..3}; do
    mkdir -p "Semaine$i"
    echo -e "${GREEN}✓ Dossier Semaine$i créé${NC}"
done

# Restaurer les fichiers de Semaine0
mv public/cours/semaine0/module1.md Semaine0/jour2.md
mv public/cours/semaine0/module2.md Semaine0/jour3.md
mv public/cours/semaine0/module3.md Semaine0/jour4.md
mv public/cours/semaine0/module4.md Semaine0/jour5.md
mv public/cours/semaine0/module5.md Semaine0/jour6-7.md
mv public/cours/semaine0/module6.md Semaine0/exercices.md

# Restaurer les fichiers de Semaine1
mv public/cours/semaine1/module1.md Semaine1/Module1.md
mv public/cours/semaine1/module2.md Semaine1/Module3.md
mv public/cours/semaine1/module3.md Semaine1/Module4.Md

# Restaurer les fichiers de Semaine2
mv public/cours/semaine2/module1.md Semaine2/Module4.md
mv public/cours/semaine2/module2.md Semaine2/exercices.md

# Restaurer les fichiers de Semaine3 (si existants)
if [ -f "public/cours/semaine3/module1.md" ]; then
    mv public/cours/semaine3/module1.md Semaine3/Module1.md
fi

# Supprimer les dossiers vides dans public/cours
rm -rf public/cours/semaine{0..3}

echo -e "\n${BLUE}Structure restaurée :${NC}"
tree Semaine{0..3}

echo -e "\n${GREEN}✨ Restauration terminée !${NC}" 