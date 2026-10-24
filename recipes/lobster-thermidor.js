export default {
  "repoId": "master_french_lobster_thermidor_001",
  "parentRepoId": null,
  "slug": "lobster-thermidor",
  "author": "ForkRecipe Kitchen",
  "title": "Lobster Thermidor",
  "description": "Le grand-dame de la cuisine belle-époque — du homard poché doux replié dans une sauce à la crème moutarde et cognac, empilé dans sa propre coquille écarlate, couvert de Gruyère et cours sous le gril jusqu'à ce que les cloques supérieures or et tout le truc arrive bouillonnant, parfumé d'estragon et de brandy flamme.",
  "cuisine": "Français",
  "culture": "Parisien",
  "category": "seafood",
  "tags": [
    "homard",
    "français",
    "Gratin",
    "crème-sauce",
    "Cognac",
    "thermidor",
    "crustacés"
  ],
  "difficulty": 4,
  "activeTime": "50 min",
  "totalTime": "1 hr 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Langoustes vivants (environ 600 g chacun, ou viande de queue et de griffe cuite)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Langoustes épineuses",
        "queues langoustines"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Échalotes (finement hachées)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Échalote de bananes",
        "oignon léger"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Solvent",
      "name": "Cognac (pour flammes)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "Brandy",
        "Armagnac"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Vin blanc sec",
      "ratioValue": 14,
      "defaultUnit": "parts",
      "substitutions": [
        "Vermouth sec",
        "stocks de poissons"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "Crème fraîche"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Moutarde de Dijon",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Moutarde anglaise (utiliser moins)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Binder",
      "name": "Jaune d'œuf",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Tarragone frais (écoulé)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Cerveau",
        "Persil à feuilles plates"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Dairy",
      "name": "Gruyère (finement râpé)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "Comté",
        "Parmesan"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel de mer, Cayenne et poivre blanc",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pochette",
      "inputs": [
        "ing_01",
        "ing_11"
      ],
      "outputState": "cooked_lobster",
      "instructions": "Portez un grand pot d'eau bien salée à ébullition. Plongez les homards dans la tête d'abord et faites cuire jusqu'à ce que les coquilles deviennent écarlates vives et que la viande soit à peine posée — environ 6 minutes pour 600 g d'oiseaux, pas plus. Soulevez-les et choquez brièvement dans l'eau glacée pour arrêter la cuisson. Coupez les queues et les griffes, divisez les corps dans le sens de la longueur et réservez les demi-coquilles vides pour servir.",
      "visualCue": {
        "primaryTarget": "Les coquilles sont un rouge brillant uniforme et la queue est opaque ivoire, sertie mais toujours brillante et tendre au centre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coquilles sont encore vert-bleu et la queue est translucide et molle de gelée lorsque vous appuyez dessus.",
            "action": "Retournez à l'ébullition pendant une autre minute — la viande finit la cuisson dans la sauce, donc visez pour juste-set, pas cru."
          },
          {
            "state": "Perfect",
            "description": "Même les coquilles écarlates, la viande d'ivoire qui est juste opaque et ressort légèrement, les jus sont clairs.",
            "action": "Choquer dans l'eau glacée, casser les coquilles, et cueillir la viande dans des morceaux de morsure."
          },
          {
            "state": "Overdone",
            "description": "La viande a rétréci, est devenue blanche crayeuse et caoutchouteuse, coulant contre la dent.",
            "action": "Couper les morceaux un peu plus gros et garder la sauce lâche et généreuse — le réchauffage doux est le seul secours pour la viande serrée."
          }
        ]
      },
      "feelCue": "L'eau doit rugir, pas seulement mijoter, quand les homards entrent. Tirez-les au moment où les coquillages s'évanouissent entièrement en rouge, car la cuisson est un peu moins importante, car le gratin finit le travail."
    },
    {
      "nodeId": "step_2",
      "action": "Sueur",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "softened_shallots",
      "instructions": "Faire fondre le beurre dans une casserole à feu moyen-doux. Ajouter les échalotes hachées avec une pincée de sel et les transpirer doucement, en remuant, jusqu'à ce qu'elles soient douces, vitreuses et translucides sans prendre de couleur, environ 4-5 minutes. Cette douce base moelleuse porte toute la sauce.",
      "visualCue": {
        "primaryTarget": "Les échalotes sont boiteuses, scintillantes et translucides, se dissolvant dans le beurre mousseux sans aucune trace de brunissement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les échalotes sont encore blanches, fermes et tranchantes, assises croustillantes dans le beurre.",
            "action": "Abaissez la chaleur et gardez la cuisson – l'échalote crue goûtera durement contre le homard délicat."
          },
          {
            "state": "Perfect",
            "description": "Des échalotes douces et claires dans du beurre moussant, sentant doux et rond sans bord acride.",
            "action": "Déglacer avec le cognac et la flamme."
          },
          {
            "state": "Overdone",
            "description": "Les échalotes brunissent aux bords et le beurre devient sombre et noisette.",
            "action": "Retirer immédiatement le feu; si le beurre sent brûlé, essuyer la poêle et recommencer le beurre."
          }
        ]
      },
      "feelCue": "Gardez la chaleur suffisamment basse pour que le beurre ne murmure que — vous voulez que les échalotes fondent, pas les frites. L'arôme doit être doux et beurreux, jamais grillé."
    },
    {
      "nodeId": "step_3",
      "action": "Flambé",
      "inputs": [
        "softened_shallots",
        "ing_04",
        "ing_05"
      ],
      "outputState": "reduced_base",
      "instructions": "Versez dans le cognac et, hors de la flamme ou avec beaucoup de soin, allumez-le pour brûler l'alcool brut — laissez les flammes mourir tout seul. Ajouter le vin blanc, augmenter la chaleur et réduire le liquide d'environ deux tiers jusqu'à ce qu'il soit sirupeux et à peine enrober le plancher de la poêle, en concentrant l'échalote et le brandy dans un glaçage savoureux.",
      "visualCue": {
        "primaryTarget": "La poêle contient une faible quantité de liquide s'accrochant aux échalotes, sentant le cognac grillé et le vin sans piqûre d'alcool.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est mince et aqueux, se mélange librement, et la vapeur pique encore le nez avec de l'alcool.",
            "action": "Continuer à réduire à feu vif jusqu'à ce que le liquide se resserre à un proche glaçage et que les fumées se mêlent."
          },
          {
            "state": "Perfect",
            "description": "Une réduction sirupeuse et brillante filmant à peine la poêle, sentant rond et grillé avec du vin concentré et du cognac.",
            "action": "Incorporer la crème et la moutarde pour construire la sauce."
          },
          {
            "state": "Overdone",
            "description": "La poêle est presque sèche et les échalotes commencent à attraper et à brunir sur le métal nu.",
            "action": "Arrosez un peu plus de vin immédiatement pour se détendre avant que la glaçure scorse et devient amère."
          }
        ]
      },
      "feelCue": "Reculez quand vous allumez le cognac et laissez les flammes bleues s'évanouir. Lorsque la réduction traîne derrière la cuillère et laisse un bref sentier propre, elle est suffisamment concentrée."
    },
    {
      "nodeId": "step_4",
      "action": "Réduire",
      "inputs": [
        "reduced_base",
        "ing_06",
        "ing_07",
        "ing_11"
      ],
      "outputState": "thermidor_sauce",
      "instructions": "Verser la crème et fouetter dans la moutarde de Dijon, une pincée de Cayenne et de poivre blanc. Laisser mijoter doucement, en remuant, jusqu'à ce que la sauce épaississe suffisamment pour enrober l'arrière d'une cuillère, 4-6 minutes. Goût et saison: il devrait être riche, légèrement aiguisé avec la moutarde, et chaud avec la cayenne. Ne le laissez pas bouillir dur, ou il peut se séparer.",
      "visualCue": {
        "primaryTarget": "Une sauce douce et ivoire qui sied une cuillère et tient une ligne propre lorsque vous tirez un doigt à travers le dos, flanqué de moutarde et d'échalote.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et laiteuse, glissante tout droit sur la cuillère et goûtant à plat et non cuit-mustardy.",
            "action": "Laisser mijoter un peu plus longtemps pour épaissir et cuire la bouchée crue du Dijon."
          },
          {
            "state": "Perfect",
            "description": "Sauce à la crème brillante qui s'accroche à la cuillère; richesse équilibrée avec une chaleur propre de moutarde et une chaleur douce.",
            "action": "Tempérer dans le jaune d'œuf et plier à travers le homard et l'estragon."
          },
          {
            "state": "Overdone",
            "description": "La sauce a diminué trop loin et est devenue grasse ou granuleuse, la crème commence à se briser en flocons huileux.",
            "action": "Tirez le feu et fouettez dans une éclaboussure de crème froide pour le ramener ensemble avant qu'il se sépare complètement."
          }
        ]
      },
      "feelCue": "Gardez - le à une mijoter paresseuse avec quelques bulles lentes — un ébullition va déchirer la crème. La sauce est prête quand elle tombe du fouet dans un ruban épais et lisse."
    },
    {
      "nodeId": "step_5",
      "action": "Temper & Bind",
      "inputs": [
        "thermidor_sauce",
        "ing_08",
        "cooked_lobster",
        "ing_09"
      ],
      "outputState": "filled_shells",
      "instructions": "Hors du feu, fouetter une cuillère de la sauce chaude dans le jaune d'œuf pour le tempérer, puis remuer le jaune dans la poêle pour l'enrichir et le lier — ne jamais le laisser bouillir maintenant. Plier dans la viande de homard et l'estragon haché, réchauffer pendant une minute. Déposer généreusement le mélange dans les demi-coquilles réservées sur un plateau de cuisson.",
      "visualCue": {
        "primaryTarget": "Les morceaux de homard sont également recouverts d'une sauce brillante et enrichie, haute dans chaque coquille, l'estragon flanquant le vert de la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce semble mince et le remplissage est bas et clairsemé dans les coquilles; le jaune n'a pas encore prêté son reflet.",
            "action": "Chauffer doucement pendant encore une minute pour épaissir légèrement, mais arrêter bien avant de laisser mijoter pour protéger le jaune."
          },
          {
            "state": "Perfect",
            "description": "Une sauce riche et collante lie le homard à un monticule généreux et brillant dans chaque coquille, sentant l'estragon et le cognac.",
            "action": "Couverture avec Gruyère et passer au gril."
          },
          {
            "state": "Overdone",
            "description": "La sauce s'est brouillée dans des caillés fins parce que le jaune était surchauffé, semble cassé et granuleux.",
            "action": "Il n'y a pas de sauvetage complet une fois bouclé — fouetter dans la crème froide pour le masquer, et garder la chaleur entièrement éteinte la prochaine fois après l'entrée du jaune."
          }
        ]
      },
      "feelCue": "Ajouter le jaune seulement après avoir coupé le brûleur — la chaleur résiduelle est abondante pour l'épaissir. Le mélange doit se sentir velouté et versable, pas raide, comme il va dans les coquilles."
    },
    {
      "nodeId": "step_6",
      "action": "Gratinée",
      "inputs": [
        "filled_shells",
        "ing_10"
      ],
      "outputState": "finished_thermidor",
      "instructions": "Éparpiller le Gruyère râpé épais sur chaque coquille remplie. Faites glisser sous un gril chaud (broiler) à environ 10 cm de l'élément et faites cuire jusqu'à ce que le fromage fond, bulles et blisters en plaques dorées-brun, 3-5 minutes. Regardez constamment — il va de pâle à parfaite pour brûler en quelques secondes. Servir immédiatement, scalder chaud, avec du citron et du pain croustillant.",
      "visualCue": {
        "primaryTarget": "Une croûte de fromage fondue et bouillonnante blister avec des taches d'or profond et d'ambre, la sauce mijotant visiblement aux bords de la coquille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le fromage a fondu, mais reste pâle et lâche, sans couleur ni cloque et sans bouillons.",
            "action": "Laissez-le sous le gril encore une minute et laissez la surface prendre de la couleur et commencer à buller."
          },
          {
            "state": "Perfect",
            "description": "Croûte dorée, blister avec des taches de rousseur plus foncées, la sauce mijotant au bord et toute la coquille parfumée et sifflante.",
            "action": "Tirez immédiatement et servez l'échaudage, avec un coin de citron."
          },
          {
            "state": "Overdone",
            "description": "Le fromage a des taches noires brûlées à amères et la sauce a séché et pris aux bords.",
            "action": "Grattez tout fromage brûlé acride; cuillerez un peu de sauce un peu plus chaude pour remoisser avant de servir."
          }
        ]
      },
      "feelCue": "Ne jamais s'éloigner du grill — restez et regardez le fromage se transformer. Le plat est prêt à l'instant où l'or se transforme en rousseurs ambres et les bords sifflent; quelques secondes de plus est la différence entre glorieuse et brûlée."
    }
  ]
};
