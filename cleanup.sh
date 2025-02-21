#!/bin/bash

# Couleurs pour les messages
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🧹 Nettoyage des fichiers obsolètes...${NC}\n"

# Liste des fichiers et dossiers à supprimer
obsolete_files=(
    "Semaine0"
    "Semaine1"
    "Semaine2"
    "Semaine3"
    "*.md"
)

# Supprimer les fichiers obsolètes
for item in "${obsolete_files[@]}"; do
    if [ -e "$item" ]; then
        rm -rf "$item"
        echo -e "${GREEN}✓ Supprimé : $item${NC}"
    fi
done

# Vérifier la structure des dossiers
echo -e "\n${BLUE}Structure actuelle des dossiers :${NC}"
tree public/cours

echo -e "\n${GREEN}✨ Nettoyage terminé !${NC}" 