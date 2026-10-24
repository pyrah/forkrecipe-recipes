export default {
  "repoId": "master_ancient_roman_puls_001",
  "parentRepoId": null,
  "slug": "puls",
  "author": "ForkRecipe Kitchen",
  "title": "Puls",
  "description": "Le porridge qui alimentait un empire — le blé d'emmer fissuré coaxe dans l'eau salée jusqu'à ce qu'il se rende dans un pot épais et noisette, brillant d'huile et couronné de fromage et d'herbes tranchantes. C'est le bol de la légionnaire, plus vieux que le pain dans la cuisine romaine et la roche de la table méditerranéenne.",
  "cuisine": "Ancien romain",
  "culture": "Latial",
  "category": "grains",
  "tags": [
    "romaine",
    "Emmer",
    "Farro",
    "porridge",
    "anciens",
    "Légion",
    "végétarien"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "9 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Blé emmer / farro (gros ou entier)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "baies d'épeautre",
        "Farro perlé (brûlure/cuisson plus courte)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau",
      "ratioValue": 350,
      "defaultUnit": "parts",
      "substitutions": [
        "bouillon de légumes légers pour un puls plus riche"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel de mer",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "gras de porc fondu pour une version légionnaire sans viande"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Fromage dur vieilli (pécorino), râpé",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "caciocavallo âgé",
        "Parmigiano"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Feuilles de livage ou de céleri frais, hachées",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Persil à feuilles plates",
        "Origan frais"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poivre noir craqué",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre long pour une morsure plus authentiquement romaine"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Huile d'olive (pour finir)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "une cuillère de garum ou de sauce de poisson pour une bruine salée"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trempage",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "soaked_emmer",
      "instructions": "Rincer l'emmère dans l'eau froide jusqu'à ce qu'elle soit claire, puis la couvrir généreusement d'une partie de l'eau et la laisser toute la nuit, 8 heures ou plus. L'emmère entière est un grain dur et coquillé; la longue trempe réhydrate le son et laisse les grains gonfler pour qu'ils cuisent doux et tendre plutôt que de rester crayeux au cœur. Réserver le reste de l'eau pour le cuisinier.",
      "visualCue": {
        "primaryTarget": "Amandes plumées et brillantes qui ont visiblement gonflées et adoucies aux bords, assises dans de l'eau légèrement nuageuse et amidonisée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore petits, durs et secs, et l'eau de trempe est presque claire.",
            "action": "Continuez à tremper. Un emmère vieux ou très complet peut avoir besoin d'une durée complète de 12 heures — donnez - lui plus de temps dans un endroit frais."
          },
          {
            "state": "Perfect",
            "description": "Les amandes sont nettement gonflées et se plient légèrement sous un ongle sans se fractionner. L'eau est devenue trouble avec de l'amidon libéré.",
            "action": "Égoutter de l'eau d'imprégnation (ou la garder pour un corps supplémentaire) et passer à l'immersion."
          },
          {
            "state": "Overdone",
            "description": "L'eau sent l'aurore ou la levure et les bulles s'accrochent à la surface — le grain fermenté dans une pièce chaude.",
            "action": "Si seulement légèrement aigre, rincer très bien et procéder. S'il est clairement fermenté, jeter et recommencer avec un trempage plus froid."
          }
        ]
      },
      "feelCue": "Un amande trempée doit se sentir cuir et rendement, pas vitreux-dur. Bitten, il donne une résistance mâcheuse sans centre sec et poudreux."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "soaked_emmer",
        "ing_02",
        "ing_03"
      ],
      "outputState": "cooked_porridge",
      "instructions": "Mettre l'emmère égouttée dans un pot lourd avec l'eau réservée et le sel. Porter à ébullition, puis laisser mijoter et cuire à découvert, en remuant souvent en épaississant, 45 minutes à plus d'une heure selon le grain. Au fur et à mesure que les grains éclatent, ils libèrent de l'amidon et le pot passe d'un pot pot pot pot pot pot pot pot pot. Ajouter de l'eau chaude au besoin; vous voulez les grains cassés et crémeux, pas secs. Le sel s'écoule maintenant de l'intérieur comme l'amidon absorbe le liquide.",
      "visualCue": {
        "primaryTarget": "Un porridge épais, semblable à de la farine d'avoine, où de nombreux grains s'ouvrent dans une matrice d'amidon crémeux, et une cuillère traînée laisse un sentier qui se ferme lentement à travers le fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore distincts et fermes avec un centre crayeux, nageant dans un liquide mince et aqueux.",
            "action": "Continuer à mijoter et remuer plus souvent. Le porridge ne s'épaissit qu'une fois que les grains éclatent — soyez patient et remplissez d'eau chaude s'il se resserre trop tôt."
          },
          {
            "state": "Perfect",
            "description": "Un potage cohésif et crémeux qui fond doucement sur la cuillère; les grains sont tendres avec une agréable mâche et le liquide a tout sauf disparu dans un corps brillant.",
            "action": "Tirer de la chaleur et passer à la finition alors qu'il est encore lâche et chaud — il se ferme rapidement comme il refroidit."
          },
          {
            "state": "Overdone",
            "description": "Les pulsations sont rigides et collantes, collées au fond du pot et menaçant de scorcher.",
            "action": "Incorporer une éclaboussure d'eau chaude pour se détendre et racler le pot de la chaleur avant qu'il ne prenne et devienne amer."
          }
        ]
      },
      "feelCue": "Le pot devrait se casser paresseusement, pas bouillir, et le porridge tirera plus lourd sur la cuillère comme il va. Écraser un amande contre le côté — il devrait frotter à une pâte douce et sucrée avec seulement une douceur de mâcher."
    },
    {
      "nodeId": "step_3",
      "action": "Terminer",
      "inputs": [
        "cooked_porridge",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_puls",
      "instructions": "Hors de la chaleur, battre dans l'huile d'olive et la plupart du fromage râpé jusqu'à ce que les pulsations deviennent brillantes et riches; la chaleur résiduelle fait fondre le fromage dans l'amidon pour une profondeur savoureuse. Incorporer le love haché et le poivre. Goûter et corriger le sel. Spoon dans des bols, disperser le reste du fromage sur le dessus, et finir avec un fil d'huile d'olive — ou, pour l'effet romain complet, quelques gouttes de garum.",
      "visualCue": {
        "primaryTarget": "Un porridge brillant, cohésif, vert flanqué d'herbe, sa surface brillait d'huile et parsemé de fromage à moitié fondu, bombant doucement sans pleurer liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pulses ont un goût plat et féculent, l'huile et le fromage sont assis sur le dessus plutôt que mélangés.",
            "action": "Incorporer plus vigoureusement l'huile dans l'amidon chaud et ajouter du sel ou un peu plus de fromage jusqu'à ce qu'elle ait un goût salé et arrondi."
          },
          {
            "state": "Perfect",
            "description": "Riche, brillant et bien assaisonné — grain de noix, fromage salé, herbe verte et poivre chaud en équilibre, assez lâche pour tomber doucement de la cuillère.",
            "action": "Servir à la fois à la chaleur et à la production, avec le filet final d'huile ou de garum."
          },
          {
            "state": "Overdone",
            "description": "Étirés trop longtemps hors de la chaleur, les pulsations se refroidissent et se raidissent en une masse dense et serrée.",
            "action": "Loyer avec un jet d'eau chaude ou de bouillon et réchauffer doucement, en remuant, pour ramener sa texture douce et cuillerable."
          }
        ]
      },
      "feelCue": "Il devrait s'effondrer, ne pas verser — assez épais pour tenir une forme sur la cuillère mais assez doux pour se propager. Le premier goût est la noix et chaud, puis le fromage frappe salé et aiguisé, avec le love le levant comme le céleri sauvage."
    }
  ]
};
