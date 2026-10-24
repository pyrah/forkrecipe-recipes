export default {
  "repoId": "master_peruvian_ceviche_de_camarones_001",
  "parentRepoId": null,
  "slug": "ceviche-de-camarones",
  "author": "ForkRecipe Kitchen",
  "title": "Ceviche de Camarones",
  "description": "Contrairement au ceviche de poisson, le ceviche de crevettes commence par un bref braconnage — la chaleur douce mettant la protéine juste assez pour donner aux crevettes leur éclat caractéristique avant que la chaux et ají amarillo prennent le dessus et illuminent chaque bord. La leche de tigre qui s'accumule au fond du bol est tellement bonne qu'elle est traditionnellement ivre directement du verre.",
  "cuisine": "Péroun/Équateur",
  "culture": "Côte Amérique du Sud",
  "category": "seafood",
  "tags": [
    "crevettes",
    "Ceviche",
    "périuvien",
    "Produits de la mer",
    "Sans gluten",
    "agrumes",
    "froid"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 1456,
  "forks": 103,
  "contributors": 28,
  "license": "CC-BY-SA",
  "createdAt": "2026-01-15",
  "updatedAt": "2026-01-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 5,
    "bitter": 1,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Grandes crevettes (21 à 25 têtes), pelées et dépinées",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Citrus",
      "name": "Jus de chaux frais",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Ají amarillo pâte",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Flacons de chile jaune péruvien"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon rouge, très finement tranché",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Coriandre fraîche, grossièrement déchirée",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Aile hachée",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Starch",
      "name": "Choclo (maïs andin gros noyau), bouilli",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "maïs-cancha grillé"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pochette",
      "inputs": [
        "ing_01"
      ],
      "outputState": "poached_shrimp",
      "instructions": "Porter un pot d'eau bien salée à ébullition. Retirer complètement du feu et attendre 2 minutes — l'eau devrait être d'environ 80 °C (176 F), ne plus bouillir. Laissez tomber les crevettes. Remuer une fois. Laisser intact pendant exactement 90 secondes, puis égoutter immédiatement et transférer dans un bol d'eau glacée pour arrêter la cuisson. Les crevettes devraient être à peine opaques dans le centre même — elles continueront à être fermes à mesure qu'elles refroidiront. Une crevette qui est entièrement rose et bouclé serrée est déjà trop cuite.",
      "visualCue": {
        "primaryTarget": "Les crevettes sont un rose corallien pâle uniforme avec une translucidité très faible au centre même de la partie la plus épaisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre des crevettes est gris et translucide. Ils se sentent boiteux et doux.",
            "action": "Retourner à l'eau chaude (pas bouillante) pendant 30 à 45 secondes."
          },
          {
            "state": "Perfect",
            "description": "Extérieur rose, intérieur à peine fixé. Les crevettes se bouclent en forme de C (pas un O serré). Ils claquent légèrement quand ils sont mordus.",
            "action": "Bain de glace immédiatement pour arrêter la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes sont étroites. Rose tout au long sans translucidité. La texture est caoutchouteuse.",
            "action": "Le ceviche sera encore bon mais moins raffiné. Continuez."
          }
        ]
      },
      "feelCue": "Une crevette parfaitement pochée devrait donner une résistance ferme et effilée quand elle est mordue — comme mordre à travers une bande de caoutchouc douce et humide — pas musquée, pas crayeuse."
    },
    {
      "nodeId": "step_2",
      "action": "Saison",
      "inputs": [
        "ing_04",
        "ing_08"
      ],
      "outputState": "macerated_onion",
      "instructions": "Couper le papier d'oignon rouge sur une mandoline ou à la main. Dans un bol, mélanger avec une pincée généreuse de sel et frotter entre les paumes pendant 30 secondes. Couvrir d'eau froide et tremper pendant 10 minutes, ce qui élimine les solides composés de soufre qui rendent l'oignon brut tranchant sans détruire leur croûte et leur couleur. Égoutter et presser à sec dans un chiffon propre.",
      "visualCue": {
        "primaryTarget": "Les tranches d'oignon sont un magenta-pink vif et complètement flexibles — elles se plient sans casser.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore rigide et piquant. L'odeur de soufre est agressive.",
            "action": "Laisser tremper encore 5 minutes dans de l'eau froide."
          },
          {
            "state": "Perfect",
            "description": "L'oignon est soyeux, flexible et dynamique. Goûte sucré sans arrière-brûlage aiguisé.",
            "action": "Égoutter et presser très sec avant de combiner."
          },
          {
            "state": "Overdone",
            "description": "L'oignon est pâle et flasque. Il a perdu sa couleur et s'est écrasé à l'eau.",
            "action": "Utilisez-le quand même. La question textuelle est moins importante que l'oignon dans le ceviche."
          }
        ]
      },
      "feelCue": "L'oignon rincé doit se sentir soyeux entre les doigts plutôt que cireux ou papier — cette transition dans la texture indique que les composés de soufre ont été tirés par le sel et l'eau."
    },
    {
      "nodeId": "step_3",
      "action": "Marinaté",
      "inputs": [
        "poached_shrimp",
        "macerated_onion",
        "ing_02",
        "ing_03",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_ceviche_de_camarones",
      "instructions": "Mélanger les crevettes refroidies, l'oignon macéré, le jus de lime, la pâte ají amarillo, le gingembre râpé, l'ail et la coriandre dans un bol froid. Mélanger doucement. Assaisonner de sel. Faire mariner 15 à 20 minutes au réfrigérateur — suffisamment de temps pour que la leche de tigre (lait de tigre — liquide de durcissement) se développe et que la chaux finisse la surface de la crevette. Servir immédiatement après la miction dans des bols réfrigérés, avec du maïs chocolaté sur le côté pour le contraste textural.",
      "visualCue": {
        "primaryTarget": "Les crevettes sont des coraux brillants dans une leche de tigre jaune-vert vif et nuageux. L'oignon est magenta. Cilantro est vert vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le jus de chaux est aqueux et mince. Aucun leche de tigre n'a été développé. Les saveurs ne sont pas intégrées.",
            "action": "Faire mariner 10 minutes de plus. L'amidon libéré de la crevette pochée a besoin de temps pour épaissir le liquide."
          },
          {
            "state": "Perfect",
            "description": "Leche de tigre est légèrement trouble et visqueux, enrobant les crevettes dans une émulsion acide brillante. Le bol sent fortement la chaux et ají amarillo.",
            "action": "Servir immédiatement dans des bols froids. Ne pas tenir plus de 30 minutes au total."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes sont devenues farineuses et grises à cause du surcuisson acide. Le jus de chaux est devenu écrasant.",
            "action": "Servir immédiatement et ajouter ají amarillo supplémentaire et sel pour rééquilibrer."
          }
        ]
      },
      "feelCue": "La leche de tigre devrait se sentir légèrement visqueuse sur la lèvre du bol lorsque vous l'inclinez — que le corps provient des protéines de crevettes que le jus de lime a dissout, et cela indique un timing parfait de la marination."
    }
  ]
};
