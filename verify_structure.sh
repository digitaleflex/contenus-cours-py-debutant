#!/bin/bash

# Couleurs pour les messages
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🔍 Vérification de la structure des cours...${NC}\n"

# Vérifier l'existence des dossiers principaux
echo -e "${BLUE}Vérification des dossiers principaux :${NC}"
for week in {0..3}; do
    if [ -d "public/cours/semaine$week" ]; then
        echo -e "${GREEN}✓ public/cours/semaine$week existe${NC}"
    else
        echo -e "${RED}✗ public/cours/semaine$week n'existe pas${NC}"
    fi
done

# Vérifier les fichiers de la Semaine 0
echo -e "\n${BLUE}Vérification des fichiers de la Semaine 0 :${NC}"
for i in {1..6}; do
    if [ -f "public/cours/semaine0/module$i.md" ]; then
        echo -e "${GREEN}✓ module$i.md existe${NC}"
    else
        echo -e "${RED}✗ module$i.md manquant${NC}"
    fi
done

# Vérifier les fichiers de la Semaine 1
echo -e "\n${BLUE}Vérification des fichiers de la Semaine 1 :${NC}"
for i in {1..3}; do
    if [ -f "public/cours/semaine1/module$i.md" ]; then
        echo -e "${GREEN}✓ module$i.md existe${NC}"
    else
        echo -e "${RED}✗ module$i.md manquant${NC}"
    fi
done

# Vérifier les fichiers de la Semaine 2
echo -e "\n${BLUE}Vérification des fichiers de la Semaine 2 :${NC}"
for i in {1..2}; do
    if [ -f "public/cours/semaine2/module$i.md" ]; then
        echo -e "${GREEN}✓ module$i.md existe${NC}"
    else
        echo -e "${RED}✗ module$i.md manquant${NC}"
    fi
done

# Vérifier que les anciens dossiers ont été supprimés
echo -e "\n${BLUE}Vérification de la suppression des anciens dossiers :${NC}"
for dir in Semaine{0..3}; do
    if [ ! -d "$dir" ]; then
        echo -e "${GREEN}✓ $dir a été supprimé${NC}"
    else
        echo -e "${RED}✗ $dir existe encore${NC}"
    fi
done

# Afficher la structure complète
echo -e "\n${BLUE}Structure complète des dossiers :${NC}"
tree public/cours

echo -e "\n${BLUE}✨ Vérification terminée !${NC}" 