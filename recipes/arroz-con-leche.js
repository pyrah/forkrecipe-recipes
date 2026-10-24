export default {
  "repoId": "master_spanish_arroz_con_leche_001",
  "parentRepoId": null,
  "slug": "arroz-con-leche",
  "author": "ForkRecipe Kitchen",
  "title": "Arroz con Leche",
  "description": "Un pudding de riz espagnol cuit lentement où l'amidon du riz épaissit naturellement le lait jusqu'à ce qu'il devienne une masse unique et onctueuse qui se forme lorsque le pot est agité. Le zeste de citron et un bâton de cannelle infusent alors que le riz gonfle, et le pudding fini est servi froid, avec une bande de cannelle au sol à travers le sommet qui disparaît dans sa surface comme la terre dans la neige.",
  "cuisine": "Espagnol",
  "culture": "Espagnol",
  "category": "desserts",
  "tags": [
    "riz pudding",
    "Espagnol",
    "arroz-con-leche",
    "cannelle",
    "dessert"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 1,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz blanc à grains courts (Arborio ou Bomba)",
      "ratioValue": 1,
      "defaultUnit": "cup",
      "substitutions": [
        "riz pudding"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 4,
      "defaultUnit": "cups",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 0.5,
      "defaultUnit": "cup",
      "substitutions": [
        "lait condensé (réduire le lait par 1 tasse)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Bâton de cannelle",
      "ratioValue": 1,
      "defaultUnit": "stick",
      "substitutions": [
        "1/4 c. à thé de cannelle rajoutée à la fin"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Zeste de citron (2 bandes, pas de piqûre)",
      "ratioValue": 2,
      "defaultUnit": "strips",
      "substitutions": [
        "zeste d'orange"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1,
      "defaultUnit": "pinch",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Cannelle au sol, pour garniture",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "Sucre de cannelle"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_04",
        "ing_05",
        "ing_07"
      ],
      "outputState": "cooking_rice",
      "instructions": "Rincer brièvement le riz sous l'eau froide. Mélanger le lait, le riz, le bâton de cannelle, les zestes de citron et le sel dans une casserole à fond lourd à feu moyen. Porter à mijoter doucement, en remuant fréquemment pour éviter que le lait ne brûle à la base. Une fois qu'il mijote, réduire à la température la plus basse.",
      "visualCue": {
        "primaryTarget": "Le lait bouillonne doucement autour des bords avec un mouvement lent et paresseux à la surface. Le riz commence à gonfler et le lait prend une faible couleur ivoire.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait est à peine chaud, pas mijotant, le riz n'a pas commencé à absorber. La cannelle et le citron n'ont pas commencé à infuser.",
            "action": "Augmenter le feu à moyen; le pot doit atteindre un mijot doux avant de réduire."
          },
          {
            "state": "Perfect",
            "description": "Une mijotée constante et douce: de petites bulles brisent régulièrement la surface. La vapeur s'élève. Le lait est infusé de la cannelle et du citron.",
            "action": "Réduire au feu le plus bas et remuer toutes les 2 à 3 minutes."
          },
          {
            "state": "Overdone",
            "description": "Le lait est bouillant de manière agressive — de grandes bulles, risque de brûler ou de bouillir.",
            "action": "Retirer brièvement du feu pour réduire la vigueur, puis revenir au réglage le plus bas. Mélanger le fond immédiatement pour vérifier la corvée."
          }
        ]
      },
      "feelCue": "Tenez-vous près de la casserole, vous devriez pouvoir sentir la cannelle en 5 minutes. Si vous ne pouvez pas, la chaleur est trop faible."
    },
    {
      "nodeId": "step_2",
      "action": "Réduire",
      "inputs": [
        "cooking_rice",
        "ing_03"
      ],
      "outputState": "thickened_pudding",
      "instructions": "Après 10 minutes, ajouter le sucre et mélanger pour dissoudre. Continuer la cuisson à feu doux, en remuant toutes les 3 à 4 minutes, pour un total de 30 à 35 minutes à partir du point d'ajout du riz. Le pudding est fait quand il s'est épaissi à une crème lâche et fluide — il devrait encore regarder légèrement sous-done dans la casserole, car il s'épaissira plus loin qu'il refroidit.",
      "visualCue": {
        "primaryTarget": "Un pudding crémeux et fluide avec des grains de riz qui sont entièrement gonflés et tendres. Le mélange enrobe la cuillère en remuant dans une couche constante mais coule quand le pot est incliné.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait est encore très liquide avec des grains individuels de riz qui sont durs au centre quand mordu. La cuillère n'est pas enduite.",
            "action": "Continuer la cuisson; vérifier la texture du riz toutes les 5 minutes en dégustant un grain."
          },
          {
            "state": "Perfect",
            "description": "La cuillère est enduite d'une fine crème lorsqu'elle est levée. Le pudding coule mais lentement. Les grains de riz sont gonflés, tendres jusqu'au bout, et commencent à verser leur amidon visiblement au lait épaississant. Souvenez-vous : il s'épaissira davantage sur le refroidissement.",
            "action": "Retirer du feu. Retirer le bâton de cannelle et le zeste de citron. Incorporer le beurre."
          },
          {
            "state": "Overdone",
            "description": "Le pudding est devenu une masse rigide et collante qui tient sa forme lorsqu'il est agité, les grains de riz commençant à se décomposer et à fusionner avec la crème. Sera mis à un bloc de ciment-comme quand refroidi.",
            "action": "Incorporer un jet de lait chaud pour se détendre. Servir chaud plutôt que froid — il sera trop épais quand il fera froid."
          }
        ]
      },
      "feelCue": "Verser une cuillère dans la casserole à partir d'une hauteur de 30 cm — elle devrait tomber dans un ruban épais et continu, non pas une éclaboussure et non une gorgée."
    },
    {
      "nodeId": "step_3",
      "action": "Frais",
      "inputs": [
        "thickened_pudding",
        "ing_06"
      ],
      "outputState": "set_pudding",
      "instructions": "Retirer le bâton de cannelle et les lanières de citron zeste. Incorporer le beurre jusqu'à ce qu'il soit fondu — il ajoute une soyosité qui enrichit la finale. Verser dans des bols individuels ou un grand plat. Appuyez sur un morceau d'enveloppe plastique directement sur la surface du pudding pour empêcher une peau de se former. Réfrigérer pendant au moins 2 heures, ou jusqu'à ce qu'il soit complètement froid et réglé.",
      "visualCue": {
        "primaryTarget": "Un pudding en ivoire pâle et crémeux dans les bols de service avec une surface lisse et intacte sous l'enveloppe en plastique. Ferme, mais en laissant tomber lorsqu'on presse à travers l'enveloppe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours chaud et très runny — n'a pas commencé à se mettre. La peau se forme déjà si le plastique n'a pas été pressé.",
            "action": "Appuyez immédiatement sur l'enveloppe plastique directement sur la surface. Réfrigérer et vérifier après 2 heures."
          },
          {
            "state": "Perfect",
            "description": "Réfrigéré à une consistance légèrement agitée, comme une panna cotta très légère. La surface est lisse et blanc crème, prête pour la poussière de cannelle.",
            "action": "Retirer le plastique, la poussière avec la cannelle moulue dans une couche fine, uniforme, et servir à froid."
          },
          {
            "state": "Overdone",
            "description": "La pudding est solide, rigide et sèche. Il a été trop réduit et trop refroidi.",
            "action": "Incorporer une petite quantité de lait froid et laisser revenir à la température ambiante pendant 20 minutes pour ramollir avant de servir."
          }
        ]
      },
      "feelCue": "Appuyez sur la surface réfrigérée à travers l'enveloppe en plastique — il doit pousser comme de la crème caillotée froide et maintenir l'indentation pendant 2 secondes avant de monter lentement."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir",
      "inputs": [
        "set_pudding",
        "ing_08"
      ],
      "outputState": "finished_arroz_con_leche",
      "instructions": "Enlevez l'enveloppe en plastique. Poussez la surface avec de la cannelle moulue dans un tamis fin, en traçant une bande nette ou en couvrant uniformément toute la surface. Servir immédiatement du réfrigérateur — arroz con leche est le meilleur froid. Ne pas remuer la cannelle; elle est assise sur le dessus, à la fois comme saveur et comme marque visuelle d'achèvement.",
      "visualCue": {
        "primaryTarget": "Une surface crème pâle croisée avec une bande brun cannelle chaude. Le contraste entre pudding blanc crème et épices foncées est la présentation espagnole classique.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Trop peu de cannelle — le pudding semble inachevé et la saveur est trop unidimensionnelle.",
            "action": "Ajouter plus de cannelle dans le tamis; ne soyez pas timide."
          },
          {
            "state": "Perfect",
            "description": "Une couche de cannelle, bien définie, qui est assise sur la surface sans se dissoudre en elle. Parfumé et épicé au-dessus, frais et laiteux au-dessous.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Trop de cannelle — une couche supérieure acride et poussiéreuse qui prend dans la gorge.",
            "action": "Faire souffler doucement sur la surface pour enlever un excès, ou lisser avec un doigt propre le long du bord de chaque bol."
          }
        ]
      },
      "feelCue": "Servez les bols directement du réfrigérateur — ils devraient vous sentir froid dans les mains. Le froid fait partie de l'expérience alimentaire."
    }
  ]
};
