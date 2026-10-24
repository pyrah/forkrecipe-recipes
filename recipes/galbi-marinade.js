export default {
  "repoId": "master_korean_galbi-marinade_001",
  "parentRepoId": null,
  "slug": "galbi-marinade",
  "author": "ForkRecipe Kitchen",
  "title": "Marinade de Galbi",
  "description": "Un bain sucré, fruité et profondément salé pour les côtes courtes coréennes, construit sur les enzymes de la poire asiatique, amplifie avec du soja, du sésame et un murmure de gingembre. Après même quelques heures dans cette marinade, les côtes courtes coupées en flanken caramélisent à une finition laquée foncée sur le grill avec des bords qui sentent l'omble doux.",
  "cuisine": "Coréen",
  "culture": "Coréen",
  "category": "sauces",
  "tags": [
    "coréen",
    "marinade",
    "- Oui.",
    "côtes courtes",
    "soja",
    "poire",
    "grillage"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "4 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 4,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari",
        "aminos de coco"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Poire asiatique râpée (avec jus)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "Poire de bosc",
        "kiwi (utiliser la moitié de la quantité — très puissant)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre brun",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "sucre blanc",
        "Chérie"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Ail, râpé",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "gingembre haché (3 g)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile de sésame",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Échalons, tranchés finement",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Poivre noir, grossièrement moulu",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Solvent",
      "name": "Mirin ou saké",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "sherry sec"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mixer",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "marinade_base",
      "instructions": "Râper la poire asiatique sur le côté grossier d'un grater de boîte, en capturant tout le jus — ces enzymes sont le point entier. Râper l'ail et le gingembre sur le côté fin. Mélanger tout dans un bol et fouetter jusqu'à ce que le sucre soit complètement dissous. Ne mélangez pas cela dans une machine à moins que vous ne vouliez une marinade très lisse; les petits fragments de poire et de pétoncle contribuent à la texture qui adhère à la viande et caramélise sur le grill. Goûtez la marinade crue : elle doit être fortement sucrée, profondément salée et légèrement boueuse du mirin, avec le fruité floral de la poire clairement reconnaissable sous le soja. L'huile de sésame sera assise sur le dessus; un fouet rapide avant de verser sur la viande est tout ce dont il a besoin. La marinade est intentionnellement audacieuse — elle doit pénétrer et assaisonner les côtes coupées en flanken qui sont plus d'un centimètre d'épaisseur.",
      "visualCue": {
        "primaryTarget": "Un liquide ambré foncé avec de la pulpe de poire pâle, du pétoncle vert et des flocons de poivre, parfumés, brillants et légèrement translucides.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains de sucre sont encore visibles comme des éclats blancs qui se déposent au fond du bol.",
            "action": "fouetter vigoureusement pendant 30 secondes; le sucre doit être complètement dissous avant de pouvoir pénétrer la viande."
          },
          {
            "state": "Perfect",
            "description": "Ambre foncé uniforme avec l'huile de sésame créant un reflet arc-en-ciel à la surface; tout sucre dissous; l'arôme est doux, umami, et floral de la poire.",
            "action": "Goûtez et ajustez - plus de sucre pour la douceur, plus de soja pour la profondeur. Versez ensuite sur les côtes."
          },
          {
            "state": "Overdone",
            "description": "La marinade a été surmenée dans un robot culinaire et transformée en un lisier mousseux et homogène — elle fonctionnera encore, mais enrobera les grilles de grillage et brûlera plus rapidement.",
            "action": "Utilisez comme-est; surveillez les côtes de près sur le grill pour les brûler."
          }
        ]
      },
      "feelCue": "Exécutez un doigt propre à travers la marinade — il devrait se sentir lissé et légèrement sirupeux, s'accrocher juste assez longtemps pour enrober le bout des doigts avant de s'égoutter proprement."
    },
    {
      "nodeId": "step_2",
      "action": "Faire mariner",
      "inputs": [
        "marinade_base"
      ],
      "outputState": "marinated_ribs",
      "instructions": "Marquer les côtes courtes coupées en flanken jusqu'à l'os à des intervalles de 2 cm pour permettre une pénétration plus profonde de la marinade. Placez les côtes dans un sac à fermeture éclair ou un plateau profond et versez la marinade, en tournant pour enrober chaque surface, y compris entre les os. Appuyez sur l'air et le sceau. Réfrigérer pendant au moins 4 heures; pendant la nuit (12 à 14 heures), produire le résultat le plus tendre et le plus aromatisé. Ne pas dépasser 24 heures — les enzymes protéolytiques de la poire finiront par décomposer les fibres musculaires en une texture musculo-pastique. Si le temps est court, les enzymes de la poire asiatique sont assez efficaces que même 1 heure produit une côte sensible et aromatisée. Avant de griller, retirez les côtes du réfrigérateur 30 minutes avant de les refroidir; les côtes froides se contractent lorsqu'elles sont chaudes.",
      "visualCue": {
        "primaryTarget": "Côtes complètement submergées ou transformées et pressées dans la marinade, leurs surfaces beige pâle s'assombrissant au brun-ambre du soja en 30 minutes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les côtes ont été dans la marinade moins de 30 minutes — leur couleur de surface est encore pâle et la marinade a à peine pénétré.",
            "action": "Continuez; la patience est obligatoire ici."
          },
          {
            "state": "Perfect",
            "description": "Après 4 à 12 heures, les côtes sont brun-ambre profond sur toute leur surface, et lorsqu'elles sont tranchées légèrement ouvertes, elles montrent la couleur pénétrant au moins 3 mm dans la chair.",
            "action": "Retirer, laisser couler l'excès de marinade et griller."
          },
          {
            "state": "Overdone",
            "description": "Après plus de 24 heures la surface de la viande a pris une sensation douce, presque spongieuse et la couleur est contre nature uniforme — les enzymes de la poire ont sur-tendré.",
            "action": "Griller immédiatement et manipuler doucement; ils seront très tendres, mais peuvent tomber en morceaux."
          }
        ]
      },
      "feelCue": "Après 12 heures, pressez la viande avec un bout de doigt — elle devrait donner plus facilement que le boeuf cru et laisser une impression qui se remplit lentement, un signe que les brins de protéines se sont détendus sans se dissoudre."
    },
    {
      "nodeId": "step_3",
      "action": "Griller",
      "inputs": [
        "marinated_ribs"
      ],
      "outputState": "finished_galbi",
      "instructions": "Préparez une grille de charbon avec une zone chaude (vous devriez pouvoir tenir votre main à 5 cm au-dessus de la grille pendant pas plus de 2 secondes) ou faites chauffer une grille de fonte à feu maximum jusqu'à ce qu'elle commence à fumer. Agiter l'excès de marinade des côtes — trop de liquide de surface causera de la vapeur et empêchera la caramélisation. Placez les côtes sur les grilles en une seule couche et ne les déplacez pas pendant 2 minutes. Le sucre de la marinade caramélise rapidement et crée la croûte laquée foncée caractéristique. Flip une fois et cuire encore 2 minutes. Le galbi est mince et cuit en 4 à 5 minutes au total. Couper en morceaux individuels de côtes à la table avec des ciseaux — la façon traditionnelle de servir. Veillez attentivement pendant la dernière minute; le sucre rend ces côtes sujettes à la brûlure.",
      "visualCue": {
        "primaryTarget": "Les côtes avec une surface caramélisée acajou-noire laquée, les marques de grill, les bords carbonisés et légèrement croustillés – l'odeur doit être douce et fumée salée simultanément.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les côtes sont gris-brun sans caramélisation; la surface semble à la vapeur et la marinade s'est dissoute en une couche pâle.",
            "action": "Augmenter la chaleur, faire sécher les côtes et revenir à la partie la plus chaude de la grille."
          },
          {
            "state": "Perfect",
            "description": "Laque foncée et profonde avec un léger omble aux bords les plus fins; le centre de la viande est juste cuit à travers avec un peu de rose à l'os; l'arôme est intensément doux-fumée.",
            "action": "Reposez-vous 2 minutes avant de couper entre les os."
          },
          {
            "state": "Overdone",
            "description": "Le sucre est entièrement carbonisé au noir et les bords de la viande sont raides et séchés; l'odeur est acride plutôt que agréablement carbonée.",
            "action": "Trim les bords noircis; l'intérieur sera encore bon."
          }
        ]
      },
      "feelCue": "Lorsqu'une côte est faite, elle doit se sentir ferme, mais céder lorsqu'elle est pressée au centre — pas de printemps comme de la viande crue, pas rigide comme un cuir de chaussure. La croûte laquée devrait craquer faiblement lorsqu'elle est pliée."
    }
  ]
};
