export default {
  "repoId": "fork_french_robert_001",
  "parentRepoId": "fork_french_demiglace_001",
  "slug": "sauce-robert",
  "parentSlug": "demi-glace",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce Robert",
  "description": "Un des plus vieux enfants de l'espagnole — une sauce brune construite sur des oignons lentement transpirés, aiguisé avec du vin blanc réduit, et fini par un tourbillon de Dijon. Tangy, moutarde-brillante et savoureuse à la fois, c'est le compagnon classique de rôtir le porc et les viandes grillées.",
  "cuisine": "Français",
  "culture": "Classique",
  "category": "sauces",
  "tags": [
    "sauce",
    "français",
    "moutarde",
    "sauce brune",
    "porc"
  ],
  "difficulty": 4,
  "activeTime": "45 min",
  "totalTime": "1 hour",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2025-06-09",
  "updatedAt": "2025-06-09",
  "forkNote": "Espagnole construit sur des oignons transpirés, du vin blanc, et une finale de moutarde - vif et salé, classique avec du porc.",
  "changes": {
    "ingredientsAdded": 3,
    "ingredientsRemoved": 0,
    "ingredientsModified": 0,
    "stepsAdded": 2,
    "stepsRemoved": 0,
    "stepsModified": 0
  },
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Stock brun (veau)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "viande bovine brune",
        "de poulet riche"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre clarifié",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "gras de boeuf fondu",
        "huile neutre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Mirepoix (oignon, carotte, céleri)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates écrasées (réduites)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Bouquet garni",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "Thym, laurier, persil, tiges attachées en tissu de fromage"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Allium",
      "name": "Oignon (en dés)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Échalote (en dés)"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Acid",
      "name": "Vin blanc sec",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Vermouth sec",
        "vinaigre de vin blanc (réduit, plus petite quantité)"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Moutarde de Dijon",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "moutarde à grains entiers"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Caraméliser",
      "inputs": [
        "ing_04",
        "ing_02"
      ],
      "outputState": "browned_mirepoix",
      "instructions": "Faire fondre environ un tiers du beurre clarifié dans un pot à fond lourd à feu moyen. Ajouter le mirpoix et cuire, en remuant occasionnellement, jusqu'à ce qu'il soit profondément doré et sucré — 12 à 18 minutes. Construire un fond de couleur rouille sur le fond du pot; que la caramélisation est l'épine dorsale de la base espagnole.",
      "visualCue": {
        "primaryTarget": "Mirepoix ramolli et effondré, bords d'oignon doré-ambre, avec un fond de couleur rouille formant sur le fond de la poêle. La cuisine sent bon et salé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont translucides et mou mais encore pâles — sans couleur, sans affection, et l'odeur est crue et herbacée.",
            "action": "Levez légèrement la chaleur et faites cuire. Browning est d'où vient la profondeur."
          },
          {
            "state": "Perfect",
            "description": "Les oignons sont ambres aux bords, les carottes scintillent et se ramollissent, et un fond brun s'accroche au fond du pot.",
            "action": "Poussez le mirepix de côté et ajoutez le beurre restant pour commencer le roux."
          },
          {
            "state": "Overdone",
            "description": "Les légumes sont noircis, le fond est passé du brun au noir, et il y a une odeur acride et brûlée.",
            "action": "Baissez immédiatement la chaleur. Si le fond est vraiment brûlé, déglacer avec un jet de stock, essuyer le pot, et redémarrer le mirepoïx."
          }
        ]
      },
      "feelCue": "Les légumes doivent étourdir régulièrement, pas violemment. Traîner une cuillère sur le fond devrait rencontrer la traînée collante de l'affection, pas une lécher lisse de graisse."
    },
    {
      "nodeId": "step_2",
      "action": "Faire griller",
      "inputs": [
        "browned_mirepoix",
        "ing_02",
        "ing_03",
        "ing_05"
      ],
      "outputState": "brown_roux_base",
      "instructions": "Faites fondre le reste du beurre dans la partie dégagée de la casserole, saupoudrez la farine et faites cuire le roux jusqu'à ce qu'il soit brun châtaignier profond, en remuant presque constamment — 10 à 20 minutes, jusqu'à ce qu'il sente la noix et le toast. Incorporer la pâte de tomate et la faire cuire pendant 3 à 5 minutes jusqu'à ce qu'elle s'assombrisse à la rouille de brique et sente sucrée plutôt que tranchante. Doucement et patient; le roux brun brûle dans un battement de cœur.",
      "visualCue": {
        "primaryTarget": "Un roux brun marron profond qui sent les noix grillées, avec la pâte de tomate cuite dans elle à une couleur de rouille brique et un arôme doux et rôti.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Roux est pâle ou blond et sent la farine crue; la pâte de tomate est encore rouge-orange vif et sent le teint.",
            "action": "Continuer à cuire et à remuer à feu doux jusqu'à ce que le roux brunisse et que la tomate devienne rouge brique et douce."
          },
          {
            "state": "Perfect",
            "description": "Roux brun-châtaigne portant une pâte de tomate cuite, rouille brique, sentant toast et sucré, avec un profond goût pour la poêle.",
            "action": "Whisk dans le stock brun pour construire l'espagnole lâche."
          },
          {
            "state": "Overdone",
            "description": "Roux ou tomate a foncé au noir, avec une odeur brûlée acride et des taches brûlées partout.",
            "action": "Jeter et recommencer le roux. Burnt roux est amer et perd son pouvoir épaississant — il ne peut être sauvé."
          }
        ]
      },
      "feelCue": "Le roux passe du sable grisâtre à la boue soyeuse lorsqu'il cuit, puis la pâte de tomate se raidit et se ressaisit avant de s'assombrir. Un étourdissement doux et stable est juste; un craquement aigu signifie trop de chaleur."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "brown_roux_base",
        "ing_01",
        "ing_07",
        "ing_06"
      ],
      "outputState": "finished_espagnole",
      "instructions": "Verser dans le bouillon brun quelques louches à la fois, en remuant des morceaux avant d'ajouter plus. Ajouter le bouquet garni, laisser mijoter et tenir 2 à 3 heures, écrémer la graisse et la mousse de la surface et assaisonner légèrement de sel près de la fin. Lorsqu'elle est réduite d'environ un tiers et qu'elle enrobe une cuillère, il faut passer par un tamis fin. C'est ton espagnole de base.",
      "visualCue": {
        "primaryTarget": "Une sauce claire, brillante et mahoganie profonde qui enrobe légèrement l'arrière d'une cuillère, réduite d'environ un tiers, à la surface propre de la graisse et de la souillure.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est mince et aqueuse, brun pâle, sort d'une cuillère, et la surface est grasse et nuageuse.",
            "action": "Continuez à mijoter et à écrémer. L'espagnole a besoin de temps pour construire le corps et verser les impuretés avant qu'il ne devienne la base de Sauce Robert."
          },
          {
            "state": "Perfect",
            "description": "Acajou profond, brillant et propre, enrobant l'arrière d'une cuillère ainsi une ligne de doigt tient. Pas de farine crue ou de tomate dure dans le goût.",
            "action": "Plongez dans un tamis fin et tenez au chaud pendant que vous construisez l'oignon et la réduction du vin."
          },
          {
            "state": "Overdone",
            "description": "Réduit trop loin — épais, lugubre et sursalé.",
            "action": "Whisk dans un peu de stock chaud pour le ramener à une bonne nappe et rééquilibrer l'assaisonnement."
          }
        ]
      },
      "feelCue": "Un espagnole fini tiré sur une cuillère laisse un sentier propre et durable. La surface doit être polie plutôt que lissée avec du gras, avec un arôme torréfié profond."
    },
    {
      "nodeId": "step_4",
      "action": "Faire revenir",
      "inputs": [
        "ing_09",
        "ing_02"
      ],
      "outputState": "sweated_onions",
      "instructions": "Dans une casserole propre séparée, faire fondre un peu de beurre clarifié à feu doux et ajouter l'oignon finement coupé en dés. Plongez doucement, en remuant souvent, jusqu'à ce qu'il soit doux, translucide, et commencez à tourner en or aux bords — 8 à 12 minutes. Le but est la douceur et la tendresse sans brunissement dur; gardez la chaleur basse afin que l'oignon fond plutôt que les croustillants.",
      "visualCue": {
        "primaryTarget": "L'oignon est complètement adouci, vitreux et translucide, avec seulement la teinte dorée la plus faible aux bords et un arôme doux et moelleux, sans couleur foncée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore ferme, vif et blanc, avec une bouchée crue et piquante à l'odeur.",
            "action": "Continuez à transpirer doucement à feu doux. La sauce Robert dépend d'une base d'oignon douce et douce – l'oignon cru goûtera dur dans la sauce finie."
          },
          {
            "state": "Perfect",
            "description": "Oignon doux, translucide, vitreux, à peine doré aux bords, sentant doux et moelleux.",
            "action": "Verser le vin blanc pour déglacer et réduire."
          },
          {
            "state": "Overdone",
            "description": "L'oignon a bruni dur ou brûlé, devenant amer et sombre.",
            "action": "Abaissez le feu et ajoutez immédiatement le vin pour arrêter la cuisson; en cas de grave brûlure, recommencez les oignons pour garder la sauce propre et douce."
          }
        ]
      },
      "feelCue": "L'oignon doit siffler doucement et devenir mou et glissant, se dissolvant presque avec la cuillère. Il ne devrait pas y avoir de crépitement de brunissement, seulement un doux et doux étourdissement."
    },
    {
      "nodeId": "step_5",
      "action": "Faire réduire",
      "inputs": [
        "sweated_onions",
        "ing_10"
      ],
      "outputState": "wine_reduction",
      "instructions": "Verser le vin blanc sec sur les oignons transpirés et lever le feu pour le faire mijoter. Réduire en grattant n'importe quel fond, jusqu'à ce que le vin ait cuit à une glaçure sirupeuse couvrant à peine les oignons et que l'odeur d'alcool vive ait cuit — 5 à 8 minutes. Cette réduction concentre l'acidité du vin dans une colonne vertébrale brillante pour la sauce.",
      "visualCue": {
        "primaryTarget": "Le vin réduit à une glaçure sirupeuse et peu abondante enrobant les oignons, avec l'odeur d'alcool cru disparue et un arôme vineux et moelleux à sa place.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours un bassin de vin mince et aqueux autour des oignons, sentant fortement l'alcool cru.",
            "action": "Continuer à mijoter pour chasser l'alcool et concentrer le vin; le vin sous-réduit laisse une dureté mince et boueuse."
          },
          {
            "state": "Perfect",
            "description": "Vin cuit jusqu'à un glaçage brillant et sirupeux enrobant les oignons, sentant lumineux et moelleux sans brûlure d'alcool.",
            "action": "Ajouter l'espagnole tendu et laisser mijoter les deux ensemble."
          },
          {
            "state": "Overdone",
            "description": "La poêle est sèche et la glaçure commence à brûler et à devenir amère.",
            "action": "Retirer le feu et ajouter l'espagnole à la fois pour déglacer et arrêter la cuisson avant l'amertume."
          }
        ]
      },
      "feelCue": "Au fur et à mesure que le vin diminue, la fraiche mijote lentement et les bulles s'épaississent dans un sirop brillant qui traîne derrière la cuillère. La forte vapeur d'alcool devrait laisser place à un arôme de vin doux et doux."
    },
    {
      "nodeId": "step_6",
      "action": "Terminer",
      "inputs": [
        "wine_reduction",
        "finished_espagnole",
        "ing_11"
      ],
      "outputState": "finished_robert",
      "instructions": "Verser l'espagnole tendue dans l'oignon et la réduction du vin et laisser mijoter doucement pendant 8 à 10 minutes, en écrèment jusqu'à ce qu'elle soit mariée et lisse. Puis retirez complètement la poêle du feu et laissez-la cesser de bouillonner avant de fouetter dans la moutarde de Dijon. Ne laissez jamais la sauce bouillir après l'entrée de la moutarde — la moutarde bouillante devient dure et amère. Goûtez, ajustez le sel et servez au chaud.",
      "visualCue": {
        "primaryTarget": "Une sauce marron lisse et brillante, pétrie d'oignon doux, avec la moutarde fouettée hors du feu jusqu'à une finale brillante, acidulée, moelleuse, sans amertume, sans aspect cassé ou granuleux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La moutarde s'agite, mais l'espagnole et la réduction de l'oignon ne se sont pas encore mariés.",
            "action": "Laissez l'espagnole mijoter avec la réduction quelques minutes plus longtemps AVANT que la moutarde entre, donc les saveurs se mélangent; ajouter la moutarde seulement à la fin, hors chaleur."
          },
          {
            "state": "Perfect",
            "description": "Une sauce acajou brillante, cohésive et tendre à l'oignon tout entier et un tang équilibré – base salée levée par de la moutarde vive et moelleuse. Doux et chaud, sans bouillir.",
            "action": "Goûtez, corrigez le sel et servez immédiatement sur le porc rôti ou les viandes grillées."
          },
          {
            "state": "Overdone",
            "description": "La sauce était bouillie après l'entrée de la moutarde — elle a un goût vif et amer, et la moutarde a perdu sa chaleur arrondie.",
            "action": "Il n'y a pas de moutarde bouillie entièrement; fouetter un peu de Dijon frais sur le feu et une pincée de sucre pour adoucir l'amertume, et ne jamais la laisser bouillir à nouveau."
          }
        ]
      },
      "feelCue": "La moutarde devrait disparaître dans la sauce avec quelques tours de fouet, la laissant brillante et lisse. La poêle doit être chaude, mais quand même: aucune bulle ne brise la surface lorsque le Dijon entre."
    }
  ]
};
