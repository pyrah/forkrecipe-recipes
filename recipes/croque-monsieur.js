export default {
  "repoId": "master_french_croque_monsieur_001",
  "parentRepoId": null,
  "slug": "croque-monsieur",
  "author": "ForkRecipe Kitchen",
  "title": "Croque-Monsieur",
  "description": "Le sandwich au café parisien élevé par le béchamel approprié — pain beurreux, bon jambon, sauce blanche parfumée de muscade, et Gruyère qui bulle et cloque sous le grilleur dans une croûte savoureuse et légèrement carbonisée qui craque lorsque l'on presse dessus.",
  "cuisine": "Français",
  "culture": "Café parisien",
  "category": "proteins",
  "tags": [
    "français",
    "sandwich",
    "jambon",
    "fromage",
    "béchamel"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 1560,
  "forks": 143,
  "contributors": 19,
  "license": "CC-BY-SA",
  "createdAt": "2024-08-30",
  "updatedAt": "2025-12-09",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Pain blanc épais (pain de mie préféré)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "brioche",
        "amer (un peu plus robuste)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "jambon cuit de bonne qualité, tranché",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "jambon de Paris",
        "Cotto prosciutto"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Gruyère, râpé grossièrement (travail mixte ou emmental aussi)",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "Comté",
        "Emmental"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Lait entier (pour béchamel)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Starch",
      "name": "Farine pure (pour béchamel roux)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel, poivre blanc et muscade fraîchement râpée",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Émulsionner",
      "inputs": [
        "ing_04",
        "ing_06",
        "ing_05",
        "ing_07"
      ],
      "outputState": "bechamel",
      "instructions": "Faire fondre le beurre dans une petite casserole à feu moyen. Ajouter la farine à la fois et remuer vigoureusement avec une cuillère en bois ou fouetter pendant 90 secondes — le roux devrait devenir blond pâle et sentir peu de noix, pas cru. Verser graduellement dans du lait chaud, fouetter constamment pour éviter les grumeaux. Incorporer à feu moyen jusqu'à ce que la sauce s'épaississe à une consistance qui enveloppe fortement le dos d'une cuillère. Assaisonner de sel, de poivre blanc et d'une généreuse grille de muscade.",
      "visualCue": {
        "primaryTarget": "Une sauce blanche lisse et brillante qui enveloppe l'arrière d'une cuillère dans une couche épaisse et uniforme et tient une ligne lorsque vous tirez votre doigt à travers elle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et laiteuse. Aucun revêtement sur la cuillère — il s'écoule immédiatement. Goût de flocons lors de l'échantillonnage.",
            "action": "Continuer à remuer à feu moyen. Béchamel a besoin d'atteindre un niveau proche pour cuire complètement l'amidon et épaissir correctement."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, brillant, lisse. Un doigt tiré à travers le manteau sur une cuillère laisse une ligne propre qui tient 5+ secondes. Goûte riche en noix de muscade chaude, sans bord cru farineux.",
            "action": "Retirer du feu. Incorporer une poignée de Gruyère si on désire une sauce au fromage (Mornay)."
          },
          {
            "state": "Overdone",
            "description": "La sauce est très raide et collante — elle frotte sur la cuillère plutôt que de couler. Les lumps peuvent apparaître de coller au fond de la poêle.",
            "action": "fouetter dans du lait chaud une cuillère à soupe à la fois pour se détendre. Passez par un tamis si des grumeaux restent."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité de béchamel entre vos doigts — la sauce bien cuite doit sentir soyeuse-smooth sans granulés farineux gritty, et elle doit s'accrocher à votre peau dans un film mince, même."
    },
    {
      "nodeId": "step_2",
      "action": "Faire griller",
      "inputs": [
        "ing_01",
        "ing_04"
      ],
      "outputState": "toasted_bread",
      "instructions": "Étaler le beurre sur un côté de chaque tranche de pain. Faire cuire le côté beurré dans une poêle sèche à feu moyen pendant 2 à 3 minutes jusqu'à ce qu'il soit doré et parfumé. Cette étape est souvent sautée dans des raccourcis, mais le pré-toating empêche le pain du bas de se mettre en l'air sous le béchamel humide. Retirer du feu.",
      "visualCue": {
        "primaryTarget": "Le côté beurré est un brun doré pâle et uniforme, et non brun foncé. Le pain sent le toast et la noix. Le côté non bouché reste doux et blanc.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le côté beurré est encore blanc ou très jaune pâle. Le pain est doux partout sans croûte.",
            "action": "Revenez à la chaleur. Le pain non botté deviendra soyeux et s'effondrera sous le béchamel."
          },
          {
            "state": "Perfect",
            "description": "Même couleur blonde dorée sur la surface beurrée. Le pain est rigide et légèrement croquant au toucher. Des odeurs de beurre brun.",
            "action": "Retirer de la casserole et assembler."
          },
          {
            "state": "Overdone",
            "description": "Le côté beurre est brun foncé, bordé de brûlures. Une odeur amère. Le pain est très dur.",
            "action": "Procéder — le béchamel et le poulet masqueront un peu d'amertume, mais seront doux avec la chaleur pendant l'étape du poulet."
          }
        ]
      },
      "feelCue": "Tapez la surface grillée avec un ongle — il devrait donner un clic léger et sec, comme tapoter une planche à découper en bois, et non le doux bruit du pain grillé."
    },
    {
      "nodeId": "step_3",
      "action": "Assembler",
      "inputs": [
        "toasted_bread",
        "ing_02",
        "ing_03",
        "bechamel"
      ],
      "outputState": "assembled_croque",
      "instructions": "Étendre une généreuse couche de béchamel sur le côté intact de la tranche de pain du bas. Étendre les tranches de jambon pour couvrir complètement. Ajouter une couche de Gruyère râpé. Déposer la deuxième tranche sur le dessus, le côté grillé. Répartir plus de béchamel sur le dessus du sandwich — c'est le mouvement déterminant du croque-monsieur — et empiler le Gruyère restant sur le dessus.",
      "visualCue": {
        "primaryTarget": "Un sandwich bien construit avec béchamel s'étendant jusqu'aux bords de la surface supérieure et un monticule de Gruyère couvrant entièrement le dessus. Pas de pain nu visible à travers le fromage.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Trop peu de béchamel sur le dessus — pain encore visible. Pas assez de fromage. Le dessus séchera sous le grilleur plutôt que de former une croûte.",
            "action": "Ajouter plus de béchamel et de fromage. Il ne devrait pas y avoir d'escroquerie — l'excès est ce qui crée la croûte dorée."
          },
          {
            "state": "Perfect",
            "description": "Béchamel atteint les bords et le fromage couvre entièrement le dessus dans un monticule uniforme. Le sandwich semble légèrement sur-construit — c'est exact.",
            "action": "Transférer dans une plaque de cuisson et griller."
          },
          {
            "state": "Overdone",
            "description": "Tellement de béchamel qu'il glisse sur les côtés avant même d'atteindre le four. Très difficile à gérer.",
            "action": "Réfrigérer 5 minutes pour fixer le béchamel avant de griller."
          }
        ]
      },
      "feelCue": "Ramassez le croque assemblé — il devrait se sentir assez lourd pour sa taille, le fromage et la sauce créant une substance réelle, pas un sandwich sec léger."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "assembled_croque"
      ],
      "outputState": "finished_croque_monsieur",
      "instructions": "Placer le croque assemblé sur une plaque de cuisson sous un grille-croûte chaud à haut, positionné à 15 cm de l'élément. Faire griller 3 à 5 minutes en observant constamment, jusqu'à ce que le Gruyère sur le dessus soit bouillonnant, doré et développe des taches sombres. Les bords du béchamel doivent être caramélisants. Servir immédiatement — la croûte est la meilleure dans les 90 premières secondes.",
      "visualCue": {
        "primaryTarget": "Gruyère fait des bulles vigoureuses sur toute la surface, avec des taches dorées et quelques taches foncées carbonisées dispersées. Les bords du béchamel sont caramélisés et légèrement plus foncés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le fromage a fondu mais est pâle et à peine doré. Pas de taches bouillantes. La surface semble humide et scintillante mais non dorée.",
            "action": "Continuez à faire griller. La transformation de la saveur se produit dans les 90 dernières secondes lorsque le fromage commence à colorier."
          },
          {
            "state": "Perfect",
            "description": "Des bulles d'or profond à la surface. Les taches sombres visibles — ce sont les meilleures morsures. Les bords de la sauce sont ambrés et légèrement caramélisés. Une odeur écrasante de fromage brun remplit la cuisine.",
            "action": "Supprimer immédiatement. Transférer dans une assiette et servir dans les 90 secondes."
          },
          {
            "state": "Overdone",
            "description": "Le fromage est uniformément brun foncé ou noir. La fumée monte de la plaque de cuisson. L'odeur acride de la laiterie brûlée remplit la cuisine.",
            "action": "Supprimer immédiatement. Grattez la couche la plus noircie du dessus — le milieu est probablement encore fin et fondu en dessous."
          }
        ]
      },
      "feelCue": "Appuyez légèrement sur le dessus du croque fini avec un bout de doigt — la croûte de fromage doit craquer et donner une légère croûte avant de céder à la couche fondue en dessous, comme presser la surface d'un gratin fraîchement cuit."
    }
  ]
};
