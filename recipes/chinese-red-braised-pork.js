export default {
  "repoId": "master_chinese_chineseredbraisedpork_001",
  "parentRepoId": null,
  "slug": "chinese-red-braised-pork",
  "author": "ForkRecipe Kitchen",
  "title": "Hong Shao Rou (Shanghai, clochette de porc braisée rouge)",
  "description": "Les cubes du ventre de porc braisés pendant des heures dans le vin Shaoxing, le soja et le sucre de roche jusqu'à ce que la peau tremble et la graisse n'est plus grasse mais la laque jaune-ambre, la plus aimée de Shanghai.",
  "cuisine": "Chinois",
  "culture": "Shanghainese",
  "category": "proteins",
  "tags": [
    "protéine",
    "porc",
    "Chinois",
    "braise",
    "soja",
    "Shanghai"
  ],
  "difficulty": 3,
  "activeTime": "25 min",
  "totalTime": "2 hours 30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Porc ventre, peau sur, coupé en cubes de 4cm",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "côtes de porc (temps de braise plus court)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "sauce de soja foncé",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "sauce de soja régulière (soya léger)",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Solvent",
      "name": "Vin de riz shaoxant",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": [
        "sherry sec",
        "mirine (sucre de lait)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre de roche (ou cassonade)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brun",
        "sucre de palme"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Échalons, liés en nœuds",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gingembre frais, tranché en pièces",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Anis étoilé",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Bâton de cannelle",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 400,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanch",
      "inputs": [
        "ing_01"
      ],
      "outputState": "blanched_pork",
      "instructions": "Placez les cubes du ventre de porc dans une casserole d'eau froide. Porter à ébullition à feu vif. Faire bouillir pendant 5 minutes — vous verrez la mousse grise s'élever. C'est de la myoglobine et des impuretés. Égoutter, jeter l'eau et rincer chaque cube de porc sous l'eau courante froide. Cette étape n'est pas facultative: elle assure un liquide de braisage clair et propre plutôt qu'un liquide flou et funky. Faites sécher le porc avec des serviettes en papier.",
      "visualCue": {
        "primaryTarget": "Mousse grise à la surface de l'eau blanche. Des cubes de porc propres et blancs après rinçage.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il n'y a que 2 minutes de blanchage — une mousse limitée est apparue. Le porc est encore cru au cœur.",
            "action": "Continuer à bouillir jusqu'à ce que la mousse soit abondante et que les surfaces de porc ne soient plus crues-rouges."
          },
          {
            "state": "Perfect",
            "description": "5 minutes d'ébullition vigoureuse ont extrait la mousse. Après le rinçage, les cubes de porc sont propres et inodores. La peau est opaque et légèrement serrée.",
            "action": "Pat sécher et procéder à la caramélisation."
          },
          {
            "state": "Overdone",
            "description": "Le porc a blanchi plus de 10 minutes et l'extérieur est entièrement cuit et gris.",
            "action": "Procéder — l'extérieur sera reflavé pendant la longue braise. Ça n'affectera pas significativement le résultat final."
          }
        ]
      },
      "feelCue": "Le porc rincé doit se sentir propre et neutre — pas d'odeur inodore, pas de liquéfaction de la myoglobine. Si ça sent toujours le funky, rincez encore."
    },
    {
      "nodeId": "step_2",
      "action": "Caramélisation",
      "inputs": [
        "blanched_pork",
        "ing_05",
        "ing_10"
      ],
      "outputState": "caramelized_pork",
      "instructions": "Chauffer l'huile dans un wok ou un pot lourd à feu moyen. Ajouter le sucre de roche et remuer jusqu'à ce qu'il fond dans un caramel doré — environ 3 minutes. Le caramel devrait être ambre, pas sombre. Ajouter immédiatement les cubes du ventre de porc et les tourner pour les enrober dans le caramel. La peau doit passer le plus de temps en contact avec la poêle. Cuire 3 à 4 minutes, en tournant, jusqu'à ce que le porc soit légèrement caramélisé et que la peau devienne dorée.",
      "visualCue": {
        "primaryTarget": "cubes de porc avec un mince revêtement de caramel doré. La peau passe du blanc à l'ambre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sucre est toujours en morceaux et pas complètement fondu.",
            "action": "Continuer à remuer à feu moyen. Ne pas se précipiter avec une chaleur élevée ou il brûlera instantanément."
          },
          {
            "state": "Perfect",
            "description": "Un caramel mince et ambre recouvre toutes les surfaces. La peau commence à colorier. La casserole sent le sucre brûlé et la graisse de porc.",
            "action": "Ajouter le vin Shaoxing — il sifflera dramatiquement. Ajouter les sauces de soja et les autres ingrédients."
          },
          {
            "state": "Overdone",
            "description": "Caramel est devenu très sombre et fume. La peau de porc a des taches brûlées foncées.",
            "action": "Ajouter immédiatement le vin Shaoxing pour arrêter la cuisson. Le caramel se dissout encore dans le braise."
          }
        ]
      },
      "feelCue": "Le porc doit se sentir collant et glacé à mesure que vous le tournez — le caramel recouvre chaque surface. Le son est riche et collant."
    },
    {
      "nodeId": "step_3",
      "action": "Brise",
      "inputs": [
        "caramelized_pork",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_11"
      ],
      "outputState": "finished_red_braised_pork",
      "instructions": "Ajouter le vin Shaoxing à la casserole, il fera un étourdissement et de la vapeur dramatiquement. Ajouter le soja foncé, le soja clair, les nœuds d'échon, les pièces de gingembre, l'anis étoilé, le bâton de cannelle et assez d'eau pour couvrir le porc. Porter à ébullition, puis laisser mijoter au minimum. Couvrir et brasser pendant 1,5 heure, tourner le porc toutes les 30 minutes. Retirez le couvercle pour les dernières 20 à 30 minutes et augmentez le feu à moyen-doux pour réduire la sauce à une consistance lustrée et laquée qui enveloppe fortement chaque cube. Retirer les épices entières et les pétoncles avant de servir.",
      "visualCue": {
        "primaryTarget": "Après 2 heures de cuisson et de réduction, chaque cube de porc est recouvert d'une épaisse glaçure rouge acajou. La peau est profondément colorée et translucide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 1 heure, le porc est tendre à la surface, mais la couche grasse est encore cireuse et la peau est opaque et caoutchouteuse.",
            "action": "Continuez à faire des larmes. La couche de graisse a besoin de 30 à 45 minutes pour convertir complètement."
          },
          {
            "state": "Perfect",
            "description": "La couche grasse est translucide et tremblante. La peau est profondément colorée et coupe avec une cuillère. La sauce a réduit à un glaçage brillant qui enrobe le porc épais. Le plat sent l'anis étoilé, le soja et le porc sucré.",
            "action": "Enlever les épices et les pétoncles. Servir immédiatement sur le riz blanc."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été complètement réduite à une pâte collante. La peau de porc s'est effondrée et les cubes se brisent.",
            "action": "Ajouter 2-3 c. à soupe d'eau chaude et remuer doucement. Servir immédiatement."
          }
        ]
      },
      "feelCue": "Appuyez sur un cube avec une cuillère — la peau et la graisse devraient donner complètement et la viande maigre en dessous devrait être à peine rendement. Tout le cube devrait se dissoudre."
    }
  ]
};
