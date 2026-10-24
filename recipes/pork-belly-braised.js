export default {
  "repoId": "master_chinese_porkbellybraised_001",
  "parentRepoId": null,
  "slug": "pork-belly-braised",
  "author": "ForkRecipe Kitchen",
  "title": "Hong Shao Rou (Cercle de porc braisé rouge)",
  "description": "Le ventre épais de porc caramélisé dans le sucre de roche et braisé dans le soja, le vin Shaoxing, et étoiler l'anis jusqu'à ce que les couches de graisse vibrent comme de la soie ambre chaude et la sauce réduit à une glaçure foncée laquée.",
  "cuisine": "Chinois",
  "culture": "Shanghai (Shanghainese)",
  "category": "proteins",
  "tags": [
    "hong-shao-rou",
    "Chinois",
    "de porc",
    "braise rouge",
    "soja",
    "Étoile-anis",
    "Cuisson lente",
    "shanghainese"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "2 hours 30 min",
  "ratioSystem": "parts",
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
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Porc ventre (peau), coupé en cubes de 4 cm",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "épaule de porc (plus jeune)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de roche (bing tang)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre de canne (moins de profondeur de caramel)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "sauce de soja foncé",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "sauce de soja légère",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce de soja régulière"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Vin de riz shaoxant",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "sherry sec",
        "Mirin (sweeter)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Anise de l'étoile (ensemble)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Aboiement de Cassia (ou bâton de cannelle)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Gingembre frais, tranches épaisses",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Allium",
      "name": "Échalons, liés en noeuds",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Eau ou matériel léger",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Huile neutre (pour le sucre caramélisant)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Garnish",
      "name": "Verts d'échalon, tranchés minces",
      "ratioValue": 1,
      "defaultUnit": "parts",
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
      "instructions": "Placer les cubes du ventre de porc dans une casserole froide, couvrir d'eau froide. Porter à ébullition à feu vif et blanchir pendant 5 minutes, en écrémant vigoureusement la mousse grise. Égoutter et rincer chaque pièce sous l'eau froide pour éliminer tous les résidus de protéines grises. Pat complètement sec avec des serviettes en papier. Cette étape est essentielle pour une sauce propre et claire, sans aromatisants.",
      "visualCue": {
        "primaryTarget": "Des cubes de porc gris uniformément pâles, propres et secs, sans résidus de sang ou de mousse. La peau doit être intacte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La mousse grise monte toujours dans le pot. Porc encore partiellement rose à l'intérieur.",
            "action": "Blanchissez encore 2-3 minutes. Les protéines grises doivent coaguler complètement avant de procéder."
          },
          {
            "state": "Perfect",
            "description": "Pale, propre, uniformément gris. L'eau est complètement dégagée lorsqu'elle est rincée. La peau est intacte et ferme.",
            "action": "Pat sec agressivement — toute eau de surface causera des éclaboussures dangereuses lorsque le porc frappera le caramel."
          },
          {
            "state": "Overdone",
            "description": "Le porc commence à se serrer et à se raffermir à partir de l'eau blanchissante.",
            "action": "Aucun mal n'a été fait — la longue braise qui nous attend redeviendra complètement la viande."
          }
        ]
      },
      "feelCue": "Les cubes de porc blanchis et séchés devraient être secs et presque papiers à l'extérieur, comme de la charcuterie froide qui a été brièvement séchée à l'air. Toute humidité sur la surface fera saisir et éclabousser le caramel."
    },
    {
      "nodeId": "step_2",
      "action": "Caramélisation",
      "inputs": [
        "ing_02",
        "ing_11"
      ],
      "outputState": "amber_caramel",
      "instructions": "Dans un grand pot ou wok lourd, chauffer l'huile neutre à feu moyen. Ajouter le sucre de roche et cuire, en remuant doucement, jusqu'à ce qu'il fond et tourne une couleur ambre profonde — comme le vieux whisky. Cela prend environ 4-6 minutes. Ne partez pas. Le caramel passe très rapidement de l'or clair à l'or pâle à l'ambre foncé.",
      "visualCue": {
        "primaryTarget": "Un caramel d'ambre profond et fluide, avec de la fumée qui commence à monter. Couleur du thé noir fort.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Caramel est d'or pâle, à peine ambre. Toujours goûte surtout sucré sans complexité amère.",
            "action": "Continuez à cuisiner. Caramel pâle fera le plat final goût plat et doux."
          },
          {
            "state": "Perfect",
            "description": "Ambre profonde: forte couleur de thé. Remarque amère sur la dégustation. Un peu de fumée. Des odeurs de beurre de coco et de sucre grillé.",
            "action": "Ajouter immédiatement le ventre de porc, se tenir en arrière — il crachera violemment."
          },
          {
            "state": "Overdone",
            "description": "Caramel est devenu brun foncé avec de la fumée acride. Goûts brûlés et amers.",
            "action": "Jeter le caramel et essuyer la casserole. Recommencer — le caramel brûlé rendra la braise amère."
          }
        ]
      },
      "feelCue": "Tenez votre main à 30 cm au-dessus du pot — vous devriez sentir une chaleur radieuse distincte sans toucher la surface. A ce niveau de chaleur, le sucre caramélisant crache et siffle au moment où le porc le frappe, ce qui est exactement ce que vous voulez."
    },
    {
      "nodeId": "step_3",
      "action": "Brise",
      "inputs": [
        "blanched_pork",
        "amber_caramel",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "braised_pork_belly",
      "instructions": "Ajouter le ventre de porc au caramel chaud et mélanger pour enrober (reculer — il crachera). Ajouter le vin Shaoxing, les sauces de soja foncées et légères, l'anis étoilé, la cassie, le gingembre et le noeud de pétoncle. Verser assez d'eau pour couvrir à peine. Porter à ébullition, puis réduire à un très faible mijoter. Couvrir et brasser pendant 1,5 à 2 heures, tourner le porc toutes les 30 minutes.",
      "visualCue": {
        "primaryTarget": "Les cubes de porc dans un liquide de culture en acajou profond. Les couches de graisse se sont adoucies visiblement et la peau s'est détendue en une surface brillante et tremblante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le porc est ferme. Le chopstick inséré répond à la résistance. Les couches de graisse sont encore solides et blanches.",
            "action": "Couvrez-vous et continuez à braquer. La graisse a besoin de temps pour rendre complètement et le collagène pour se dissoudre."
          },
          {
            "state": "Perfect",
            "description": "Le porc est très tendre. Chopstick glisse dans presque aucune résistance. Les couches de graisse sont translucides et vibrantes. La sauce est acajou profond.",
            "action": "Découvrez-vous pour commencer la dernière réduction de glaçure."
          },
          {
            "state": "Overdone",
            "description": "Le porc a commencé à s'effondrer. Les cubes perdent leur forme.",
            "action": "Retirez soigneusement le porc dans une assiette et réduisez la sauce séparément. Regroupement pour vitrage."
          }
        ]
      },
      "feelCue": "Percez le côté de la peau avec un baguette — il devrait glisser à travers les couches de graisse et la peau comme si à travers le beurre à température ambiante, rencontrer seulement une légère prise à la viande maigre en dessous. Deux textures distinctes dans une sonde."
    },
    {
      "nodeId": "step_4",
      "action": "Réduire",
      "inputs": [
        "braised_pork_belly"
      ],
      "outputState": "finished_hong_shao_rou",
      "instructions": "Couvrez le pot et augmentez le feu à moyen-élevé. Abattez le porc en continu avec le liquide de cuisson car il réduit et concentre. Cuire de 10 à 15 minutes, en faisant tourner le porc doucement, jusqu'à ce que la sauce soit épaisse, brillante et collante. Enlever les épices entières, le gingembre et le nœud de pétoncle.",
      "visualCue": {
        "primaryTarget": "Chaque cube de porc est entièrement enduit d'une laque d'acajou foncé, brillant et miroir. La surface grasse est mouillante et translucide. La sauce dans le pot est assez épaisse pour enrober une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sauce encore mince et s'échappe du porc. La couleur est brun moyen, pas acajou profond.",
            "action": "Continuer à réduire avec la chaleur relevée, basting chaque minute. Les sucres doivent se concentrer."
          },
          {
            "state": "Perfect",
            "description": "Laque acajou profonde sur chaque cube. La sauce se déplace à peine dans le pot. Lorsque vous inclinez un cube, la glaçure se déplace lentement comme du miel chaud. Parfum doux-soy.",
            "action": "Assiette et garnir de vert pétoncle."
          },
          {
            "state": "Overdone",
            "description": "La sauce a brûlé et saisi. Les cubes de porc sont collés au pot.",
            "action": "Enlevez immédiatement le porc. Ajoutez une éclaboussure d'eau au pot et grattez ce que vous pouvez. Le porc aura toujours une grande saveur."
          }
        ]
      },
      "feelCue": "Prenez un morceau du ventre de porc fini entre deux doigts et appuyez doucement sur — vous devriez sentir la couche de graisse donner et vibrer comme de la cire chaude, tandis que la peau offre la morsure la plus faible de résistance avant de donner complètement. Si la graisse est solide, elle a besoin de plus de temps."
    }
  ]
};
