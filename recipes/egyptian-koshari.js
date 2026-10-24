export default {
  "repoId": "master_egyptian_koshari_001",
  "parentRepoId": null,
  "slug": "egyptian-koshari",
  "author": "ForkRecipe Kitchen",
  "title": "Koshari égyptien",
  "description": "La nourriture de rue bien-aimée du Caire : un assemblage dramatique de riz, de lentilles brunes et de macaronis courts couronnés d'oignons frits crépitants, puis consommés à table avec une sauce tomate épicée ardente et du vinaigre ailky aiguisé.",
  "cuisine": "Égyptienne",
  "culture": "Égyptienne",
  "category": "grains",
  "tags": [
    "kashari",
    "Égyptienne",
    "végétalien",
    "Produits de la rue",
    "lentilles",
    "riz",
    "pâtes"
  ],
  "difficulty": 3,
  "activeTime": "1 hr",
  "totalTime": "1 hr 45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 3,
    "bitter": 1,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz blanc à grains longs",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Lentilles brunes ou vertes",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Starch",
      "name": "Macaronis courts ou ditalini",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "macaroni du coude"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Oignons jaunes, gros (pour la friture)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile neutre (pour les oignons frits)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Structure",
      "name": "Tomates concassées en conserve",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates fraîches, pelées et broyées"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Gousses d'ail (pour sauce hachée)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Cumin moulu (pour sauce)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Coriandre moulue (pour sauce)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Heat",
      "name": "Flacons de chili séchés ou sauce shatta",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Acid",
      "name": "Vin rouge (pour la sauce)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Allium",
      "name": "Gousses d'ail (pour vinaigre haché)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Fat",
      "name": "Huile d'olive (pour la base de sauce)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_15",
      "role": "Starch",
      "name": "Nouilles Vermicelli (brochées, grillées)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "fidéos fins"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_02"
      ],
      "outputState": "cooked_lentils",
      "instructions": "Rincer les lentilles et déposer dans une casserole à l'eau froide pour couvrir de 5cm. Porter à ébullition, laisser mijoter régulièrement. Cuire de 20 à 25 minutes jusqu'à ce qu'ils soient tendres — ils doivent tenir leur forme complètement mais n'ont pas de craie au centre lorsqu'ils sont mordus. Égoutter, assaisonner légèrement de sel et réserver.",
      "visualCue": {
        "primaryTarget": "Les lentilles ont gonflé et sont passées du vert gris au brun olive uniforme. Les peaux sont intactes — pas de division.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les lentilles sont fermes et crayeuses au centre. Une lentille mordue montre un noyau bleu pâle.",
            "action": "Retourner à la mijoter encore 5 minutes et tester à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Complètement tendres à travers les peaux intactes, tenant leur forme ronde. Terreux, agréablement féculent sur la langue.",
            "action": "Drainez bien et assaisonnez."
          },
          {
            "state": "Overdone",
            "description": "Les lentilles sont divisées, musquées ou dissolues. Ils ne fourniront pas de texture distincte dans le plat final.",
            "action": "Procéder — ils contribueront encore à la saveur. À l'avenir, vérifiez 5 minutes plus tôt."
          }
        ]
      },
      "feelCue": "Couper une lentille en deux — la coupe transversale doit être de la même couleur dans l'ensemble, sans anneau intérieur pâle, avec une texture comme un pois chiche ferme."
    },
    {
      "nodeId": "step_2",
      "action": "Fry",
      "inputs": [
        "ing_04",
        "ing_05"
      ],
      "outputState": "crispy_onions",
      "instructions": "Couper les oignons très finement et uniformément (utiliser un couteau à la mandoline ou au patient — 2mm). Chauffer l'huile neutre à 170°C (340°F) dans une grande casserole (assez d'huile pour submerger les oignons – au moins 2cm de profondeur). Faire frire les oignons par lots, en remuant occasionnellement, jusqu'à ce qu'ils soient profondément dorés et visiblement croquants, 12–18 minutes par lot. Ils continuent à s'assombrir après leur enlèvement — les tirer à l'ambre, et non au brun. Égoutter immédiatement sur les serviettes en papier et le sel.",
      "visualCue": {
        "primaryTarget": "Anneaux ambre-goldés profonds, visiblement secs et croustillants. L'huile s'est arrêtée avec une forte saillie: l'eau s'est complètement évaporée des oignons.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont dorés, mais encore boiteux et gras — ils ne croqueront pas sur l'assiette. Saupoudrer encore vigoureux.",
            "action": "Continuer à frire — la transition entre le limon et le croustillant est brusque. Donne-leur encore 3 minutes."
          },
          {
            "state": "Perfect",
            "description": "Ambre-brun, visiblement sec et léger. Ils craquent quand ils sont pressés entre les doigts. L'odeur est caramélisée et sucrée.",
            "action": "Retirer avec une araignée, égoutter, saler immédiatement pendant la chaleur."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé approchant noir. Une odeur amère et acride. Ils goûteront au sucre brûlé.",
            "action": "Jetez ce lot. La température de l'huile était trop élevée ou le lot trop grand — ajuster avant le prochain lot."
          }
        ]
      },
      "feelCue": "Soulevez quelques brins d'oignon et pressez - les entre vos doigts — ils devraient se briser et s'effondrer, complètement secs, sans donner d'huile."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_13",
        "ing_07",
        "ing_06",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_14"
      ],
      "outputState": "tomato_sauce",
      "instructions": "Dans une casserole séparée, faire chauffer l'huile d'olive à feu moyen. Ajouter l'ail haché pour la sauce et cuire jusqu'à ce qu'il soit doré, de 1 à 2 minutes. Ajouter le cumin, la coriandre et les flocons de chili; fleurir pendant 30 secondes. Ajouter les tomates concassées et le sel. Laisser mijoter à feu moyen-doux, en remuant occasionnellement, pendant 20 à 25 minutes jusqu'à ce que la sauce s'épaississe à une pâte molle et concentrée et que le goût cru de la tomate soit disparu. Mélanger séparément l'ail cru haché avec du vinaigre de vin rouge et une pincée de sel pour le toum el-khal ( vinaigre d'ail).",
      "visualCue": {
        "primaryTarget": "La sauce tomate a diminué d'environ un tiers, est profondément colorée, et la surface a un reflet subtil de l'huile se séparant légèrement. Pas d'odeur acide crue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore mince et aqueuse avec une acidité brute de tomate.",
            "action": "Continuez à mijoter à découvert. Concentré, saveur de tomate douce vient seulement avec le temps."
          },
          {
            "state": "Perfect",
            "description": "Épais, brillant, profondément rouge-orange. Doux et épicé avec une chaleur de fond. Tient un léger monticule lorsqu'il est cuillé.",
            "action": "Restez au chaud."
          },
          {
            "state": "Overdone",
            "description": "La sauce est devenue très épaisse, collante, et commence à attraper sur le fond du pot. Bord légèrement caramélisé.",
            "action": "Ajouter un petit jet d'eau et remuer vigoureusement."
          }
        ]
      },
      "feelCue": "Passez une cuillère dans la sauce — elle devrait laisser un sentier qui se remplit très lentement, comme une sauce avec le corps, pas un liquide mince."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_01",
        "ing_15"
      ],
      "outputState": "rice_and_vermicelli",
      "instructions": "Rincer le riz jusqu'à ce que l'eau coule. Dans une casserole moyenne à feu moyen, faire griller les vermicelles cassées dans une casserole sèche (ou dans 1 c. à thé d'huile) jusqu'à ce qu'elles soient dorées. Ajouter le riz et le toast 1 minute de plus. Ajouter l'eau (1,75x le volume de riz + vermicelli combiné) et le sel. Porter à ébullition, remuer une fois, couvrir soigneusement, réduire au feu le plus bas. Cuire 17 minutes, puis reposer le feu pendant 5 minutes. Fluff avec une fourchette.",
      "visualCue": {
        "primaryTarget": "Grains de riz secs et séparés entrecoupés de brins vermicelli dorés. Trous à vapeur visibles sur la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains de riz sont légèrement fermes avec un petit centre crayeux.",
            "action": "Couvrez encore et faites chauffer la vapeur pendant encore 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "Riz moelleux, séparé avec vermicelle dorée grillée. Les grains sont entièrement cuits mais pas collants.",
            "action": "Flûte et tenir pour montage."
          },
          {
            "state": "Overdone",
            "description": "Le riz est musclé et collant, les vermicelles se sont dissoutes dans la masse.",
            "action": "Répartir sur un plateau pour refroidir et sécher avant de l'assembler — les textures individuelles sont essentielles à l'attrait de kochari."
          }
        ]
      },
      "feelCue": "Les vermicelles cuites doivent être juste visibles comme des fils dorés distincts tissés à travers le riz moelleux — non dissous, non croquants, mais tendres avec un soupçon de noix."
    },
    {
      "nodeId": "step_5",
      "action": "Assemblage",
      "inputs": [
        "rice_and_vermicelli",
        "cooked_lentils",
        "ing_03",
        "crispy_onions",
        "tomato_sauce",
        "ing_12",
        "ing_11"
      ],
      "outputState": "koshari",
      "instructions": "Faire cuire les macaronis dans de l'eau bouillante bien salée jusqu'à ce que l'al dente soit juste. Égoutter. A assembler : coucher le fond d'un bol profond avec du riz-vermicelli, puis des lentilles, puis des macaronis. Garnir d'une généreuse poignée d'oignons frits croustillants. A la table, ajouter une cuillère de vinaigre d'ail. Le bon ordre de manger est de tout mélanger.",
      "visualCue": {
        "primaryTarget": "Un monticule élevé et texturé : base de riz pâle, lentilles plus foncées, pâtes ivoire, couronnées d'une dentelle ambre foncée d'oignons croustillants. Trois sauces dans les récipients sur le côté.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Un ou plusieurs composants sont sous-cuits ou l'assemblage n'a pas de contraste structurel — tout est de même couleur ou texture.",
            "action": "Assurez-vous que chaque élément est entièrement cuit et assaisonné indépendamment avant l'assemblage."
          },
          {
            "state": "Perfect",
            "description": "Chaque composant est distinct en texture et en couleur. Les oignons frits éclatent sous la cuillère. La sauce tomate tache et enveloppe tout en dessous.",
            "action": "Servir immédiatement — les oignons croustillants adoucissent rapidement une fois sauce."
          },
          {
            "state": "Overdone",
            "description": "Assemblé trop loin à l'avance — les oignons sont passés de la vapeur à la vapeur, la sauce tomate a tout trempé à une masse humide uniforme.",
            "action": "Servir les oignons et les sauces sur le côté pour les invités à s'ajouter, toujours."
          }
        ]
      },
      "feelCue": "La première cuillerée doit contenir quatre textures distinctes simultanément: la lentille qui donne, la légère mâche des pâtes, le riz doux et la fracturation de l'oignon frit, toutes unifiées par la sauce piquante et épicée."
    }
  ]
};
