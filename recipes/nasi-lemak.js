export default {
  "repoId": "master_malaysian_nasilemak_001",
  "parentRepoId": null,
  "slug": "nasi-lemak",
  "author": "ForkRecipe Kitchen",
  "title": "Nasi Lemak",
  "description": "Le matin national malaisien : du riz jasmin cuit dans du lait de coco à la feuille de pandane jusqu'à ce que chaque grain soit individuellement riche et parfumé, servi avec un sambal profond caramélisé, des anchois croustillants frits et des arachides grillées, une architecture de contrastes dans un seul bol.",
  "cuisine": "Malaisien",
  "culture": "Malay",
  "category": "grains",
  "tags": [
    "riz",
    "noix de coco",
    "sambal",
    "anchois",
    "Cacahuètes",
    "Malaysian",
    "Petit déjeuner"
  ],
  "difficulty": 3,
  "activeTime": "35 min",
  "totalTime": "1 hour",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 4,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz jasmin, rincé",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "riz à grains longs"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Lait de coco plein gras",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "crème de coco éclaircie avec de l'eau"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Feuilles de pandan, nouées",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "une goutte d'extrait de pandan"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Protein",
      "name": "Anchovies séchées (ikan bilis)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "crevettes séchées"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Cacahuètes grillées",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "noix de cajou grillées"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Heat",
      "name": "Piments rouges séchés, trempés et mélangés",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "sambal oelek"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Échalotes, mélangées",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "Huile de coco"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Sweetener",
      "name": "Sucre de palme (gula Melaka)",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun",
        "muscovado foncé"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "coconut_rice",
      "instructions": "Mélanger le riz rincé, le lait de coco, les feuilles de pandan et le sel dans une casserole lourde. Ajouter suffisamment d'eau pour que le liquide total se trouve exactement à 1,5 cm au-dessus de la surface du riz. Porter à ébullition à feu moyen, remuer une fois, puis réduire immédiatement au plus bas feu possible, couvrir soigneusement et cuire 12 minutes. Retirer du feu et de la vapeur, non perturbé, pendant 10 minutes de plus. Retirer le pandan avant de servir.",
      "visualCue": {
        "primaryTarget": "Les grains sont séparés, brillants et légèrement translucides aux bords. Un faible parfum de noix de coco-pandan remplit la pièce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz est crayeux et dur au centre. Liquide encore visible sur le dessus.",
            "action": "Remplacez le couvercle et faites cuire 5 minutes de plus à feu minimum, puis rééquipez."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain se sépare et légèrement collant, scintille avec de la graisse de noix de coco. Aucun liquide ne reste. La poêle sent le pandan chaud et la crème de coco.",
            "action": "Arroser avec une fourchette et reposer 5 minutes avant de servir."
          },
          {
            "state": "Overdone",
            "description": "La couche inférieure est collée et brunie. Les grains en haut sont moelleux.",
            "action": "Gratter la couche supérieure douce dans un plat de service. La croûte inférieure (kerak) est en fait prisée — un bonus, pas un échec."
          }
        ]
      },
      "feelCue": "Un grain pressé entre le pouce et le doigt devrait s'effondrer sans résistance, mais laisser un frottis propre et sec — pas une pâte humide."
    },
    {
      "nodeId": "step_2",
      "action": "Frire",
      "inputs": [
        "ing_09",
        "ing_05"
      ],
      "outputState": "crispy_anchovies",
      "instructions": "Chauffer l'huile dans un wok jusqu'à ce qu'elle mijote (environ 175 C). Ajouter les anchois séchés en une seule couche et faire frire, en remuant constamment, pendant 3 à 5 minutes jusqu'à ce qu'ils soient dorés et croquants. Retirer avec une cuillère à fentes et égoutter sur du papier. Ils continueront à croquer à mesure qu'ils refroidiront. Dans la même huile, faire frire les cacahuètes pendant 2 minutes jusqu'à ce qu'elles soient dorées. Égoutter séparément.",
      "visualCue": {
        "primaryTarget": "Les anchois sont uniformes en or profond, enroulés, secs et audiquement croquants lorsqu'ils sont tapés avec une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les anchois sont pâles et flexibles, pliant sans craquer. Toujours goûteux et cru.",
            "action": "Retourner à l'huile pendant 1 à 2 minutes de plus — ils doivent complètement déshydrater."
          },
          {
            "state": "Perfect",
            "description": "Ambre profond, complètement rigide, éclatant quand mordu. Une odeur de poisson frit.",
            "action": "Égoutter immédiatement — ils brunissent rapidement de la chaleur résiduelle."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé, amer, odeur de poisson brûlé.",
            "action": "Jetez. Ils rendront le plat désagréablement amer. Commencez un nouveau lot."
          }
        ]
      },
      "feelCue": "Ramassez une seule anchois et pliez - à la fin parfaite, il claque propre, comme un bretzel stick, sans plissement du tout."
    },
    {
      "nodeId": "step_3",
      "action": "Caraméliser",
      "inputs": [
        "ing_09",
        "ing_07",
        "ing_08",
        "ing_10"
      ],
      "outputState": "sambal",
      "instructions": "Dans le même wok (ajouter de l'huile si nécessaire), faire revenir les échalotes mélangées et la pâte de chili à feu moyen, en remuant constamment pendant 12 à 15 minutes. La pâte crachera, s'assombrira et se rétrécira considérablement. Ajouter le sucre de palme et continuer à cuire, grattant le fond, pendant 5 minutes jusqu'à ce que le sambal soit très foncé rouge brique, brillant, et l'huile a séparé à la surface. Assaisonner avec du sel et une petite pression de tamarin si disponible.",
      "visualCue": {
        "primaryTarget": "Une pâte rouge brique profonde et brillante qui tient sa forme sur une cuillère et a l'huile visible scintille autour des bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore humide et orange. Sens brut et vif. Un liquide aqueux continue de cuisiner.",
            "action": "Continuer à feu moyen en remuant constamment — le changement de couleur se produit dans les dernières minutes."
          },
          {
            "state": "Perfect",
            "description": "Dark, jammy, rouge brique avec des bords noirs à la poêle. Des piscines pétrolières autour du sambal. Douce, épicée, odeur de caramel.",
            "action": "Retirer du feu et goûter au sel et à l'équilibre sucre."
          },
          {
            "state": "Overdone",
            "description": "Très foncé, presque noir, amer vif odeur de chili brûlé.",
            "action": "Ajouter une cuillère à soupe d'eau et une pincée de sucre et remuer à feu doux pour la ramener du bord."
          }
        ]
      },
      "feelCue": "Une cuillère qui tombe sur une assiette froide devrait tenir un monticule un instant avant de s'étendre très lentement — il ne devrait pas courir ou s'accumuler immédiatement."
    },
    {
      "nodeId": "step_4",
      "action": "Assembler",
      "inputs": [
        "coconut_rice",
        "sambal",
        "crispy_anchovies",
        "ing_06"
      ],
      "outputState": "finished_nasi_lemak",
      "instructions": "Riz de coco fondu au centre d'une feuille de banane ou d'une assiette. Ajouter une cuillère généreuse de sambal à côté. Des anchois frits et des cacahuètes grillées. Les accompagnements classiques comprennent un demi-œuf dur et du concombre tranché. Servir immédiatement — le contraste entre le riz chaud, le sambal à température ambiante et les garnitures croquantes est le point.",
      "visualCue": {
        "primaryTarget": "Le monticule de riz blanc flanqué de sambal rouge brique foncé, d'anchois dorés et de cacahuètes pâles — un spectre tonal complet sur une assiette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sambal est trop humide et trempe dans le riz avant de manger. Les anchois sont devenus mous.",
            "action": "La prochaine fois, gardez le sambal et les garnitures complètement séparées jusqu'au moment de servir."
          },
          {
            "state": "Perfect",
            "description": "Chaque composant est distinct: riz doux, sambal brillant qui reste mis, anchois croustillants et fermes.",
            "action": "Servez."
          },
          {
            "state": "Overdone",
            "description": "A gauche, trop longtemps — tous les composants se sont fusionnés en une seule masse de gazon.",
            "action": "Pour la restauration, gardez les composants séparés et assemblez sur commande."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère dans l'assiette assemblée — le riz doit être livré, le sambal doit résister et rester mis, et les anchois doivent croquer audiblement en cas de compression."
    }
  ]
};
