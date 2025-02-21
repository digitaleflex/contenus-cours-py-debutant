#!/bin/bash

# Couleurs pour les messages
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🚀 Création de la structure des modules...${NC}\n"

# Configuration : 5 modules pour chaque semaine
MODULES_PAR_SEMAINE=5
NOMBRE_SEMAINES=4  # De semaine0 à semaine3

# Créer la structure
for semaine in {0..3}; do
    # Créer le dossier de la semaine
    mkdir -p "public/cours/semaine$semaine"
    echo -e "${GREEN}📁 Création du dossier semaine$semaine${NC}"
    
    # Créer les 5 modules pour chaque semaine
    for ((module=1; module<=$MODULES_PAR_SEMAINE; module++)); do
        fichier="public/cours/semaine$semaine/module$module.md"
        
        # Créer le fichier avec un en-tête par défaut
        cat > "$fichier" << EOF
# Module $module - Semaine $semaine

## 🎯 Objectifs
- Objectif 1
- Objectif 2
- Objectif 3

## 📝 Contenu

[Insérez le contenu du module ici]

---
EOF
        
        echo -e "${GREEN}✓ Créé : module$module.md dans semaine$semaine${NC}"
    done
done

echo -e "\n${BLUE}Structure des fichiers :${NC}"
tree public/cours

echo -e "\n${GREEN}✨ Création terminée ! Structure créée avec 5 modules par semaine.${NC}" 