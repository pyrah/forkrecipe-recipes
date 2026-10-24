export default {
  "repoId": "master_scandinavian_darkryebread_001",
  "parentRepoId": null,
  "slug": "dark-rye-bread",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Pain de seigle foncé scandinave",
  "description": "Un rugbrød serré, densément emballé, construit à partir de seigle entier, de baies de seigle craquelées et de fermentation de la courge – terreuse, légèrement aigre, et de noix, tranché mince pour smørrebrød ou mangé avec du beurre froid.",
  "cuisine": "Scandinave",
  "culture": "Danois",
  "category": "breads",
  "tags": [
    "pain",
    "seigle",
    "Pâtes alimentaires",
    "danois",
    "scandinave",
    "sain",
    "fermenté"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "30 hours",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 4,
    "bitter": 2,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de seigle entière (pierre)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "farine de seigle foncé"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Graisses de seigle craquées (poêlées la nuit)",
      "ratioValue": 60,
      "defaultUnit": "%",
      "substitutions": [
        "flocons de seigle"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau (température ambiante)",
      "ratioValue": 90,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "Démarrage actif du seigle aurifère (hydratation 100%)",
      "ratioValue": 30,
      "defaultUnit": "%",
      "substitutions": [
        "entrée de blé rigide (ajouter 2 % de vinaigre pour l'amerie)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2.5,
      "defaultUnit": "%",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Graines de Caraway, légèrement grillées",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": [
        "graines de fenouil",
        "Graines de cumin"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Mélasses foncées ou sirop de malt foncé",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": [
        "Treacle",
        "sucre brun foncé"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrate",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "soaked_grains",
      "instructions": "La veille de la cuisson, mélanger les baies de seigle fissurées avec un poids d'eau égal. Bien mélanger, couvrir et laisser à température ambiante pendant la nuit (8-12 heures). Les grains absorberont la plus grande partie de l'eau et gonfleront de façon significative — ce mousqueton les empêche de voler l'humidité de la pâte pendant la cuisson et donne au pain ses poches caractéristiques de grains à croquer.",
      "visualCue": {
        "primaryTarget": "Les grains ont gonflé à près de deux fois leur volume sec, la plupart de l'eau absorbée. Le mélange ressemble à un porridge épais humide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Grains encore durs et crayeux au centre. Peu d'eau absorbée.",
            "action": "Donnez-leur plus de temps, ou utilisez de l'eau chaude pour accélérer l'imprégnation. Ne pas cuire avec des grains sous-poêlés."
          },
          {
            "state": "Perfect",
            "description": "Les grains sont rampants et donnent — vous pouvez en écraser un entre vos doigts sans grain. Le mélange est épais et humide mais pas soupeux.",
            "action": "Utiliser dans la pâte immédiatement après mélange."
          },
          {
            "state": "Overdone",
            "description": "Les grains ont trempé si longtemps qu'ils sont musqués et l'eau sent légèrement fermenté.",
            "action": "C'est encore très bien — un peu fermenté, le soaker ajoute de la complexité. Égoutter toute eau libre avant d'utiliser."
          }
        ]
      },
      "feelCue": "Une baie de seigle bien trempée écrase entre le pouce et l'index avec une résistance douce et induisante — pas de centre dur, pas de grain."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "soaked_grains"
      ],
      "outputState": "rye_batter",
      "instructions": "Dans un grand bol, mélanger la farine de seigle, l'auriculum, le sel, les graines de carvi et la mélasse. Ajouter le mélange de grains trempés avec toute eau de trempage résiduelle. Mélanger soigneusement avec une spatule rigide ou un racleur à pâte pendant 3-4 minutes — la pâte de seigle ne knead pas comme la pâte de blé parce que le seigle n'a presque pas de gluten. Ce que vous construisez est une pâte collante et cohésive, pas une pâte. Mélanger jusqu'à uniformisation complète — pas de poches de farine ou de démarrage non mélangé.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse, foncée et collante qui ne peut pas être pétrie — elle tient sa forme brièvement lorsqu'elle est écorcée, mais qui revient lentement. Couleur brun foncé gris du seigle et de la mélasse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Streaks de farine plus légère ou de démarrage non mélangé visibles. Une couleur inégale.",
            "action": "Continuez à mélanger — la pâte au seigle doit être complètement incorporée. Pas de raccourcis; seigle mal mélangé avec des stries gommées."
          },
          {
            "state": "Perfect",
            "description": "Couleur foncée uniforme partout. Épaisseur, collant et homogène. Graines de Caraway régulièrement suspendues. Des odeurs de démarrage aigre et de mélasse.",
            "action": "Transférez immédiatement dans la casserole."
          },
          {
            "state": "Overdone",
            "description": "Vous ne pouvez pas trop mélanger une pâte au seigle — il n'y a pas de gluten à endommager. Mélanger aussi longtemps que nécessaire.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "La pâte au seigle colle à tout — vos mains, la spatule, le bol. Il est plus lourd et plus dense que n'importe quelle pâte de blé, et devrait se sentir comme de l'argile humide avec des graines encastrées."
    },
    {
      "nodeId": "step_3",
      "action": "Preuve",
      "inputs": [
        "rye_batter"
      ],
      "outputState": "proofed_loaf",
      "instructions": "Lignez une poêle à pain de 23 x 11 cm (9 x 4 pouces) avec du parchemin huilé. Grattez la pâte et lissez le dessus avec une spatule humide — la pâte au seigle ne se mettra pas à niveau. Couvrir d'enveloppe en plastique et laisser la preuve à température ambiante (20–22 C) pendant 3–5 heures, ou jusqu'à ce que la surface ait atteint 1 cm de la jante de la casserole et montre de petites fissures et bulles. Le seigle augmente lentement et seulement entre 20 et 30 % en volume. Ne vous attendez pas à une augmentation spectaculaire — ce pain prouve sa fermentation par la texture et la saveur, pas par la hauteur.",
      "visualCue": {
        "primaryTarget": "La surface est montée juste au-dessous de la jante. De petites fissures rayonnent en haut. De petits trous à bulles sont visibles à la surface. Le pain a un aspect mat, légèrement poreux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est encore dense, lisse et au-dessous du demi-point de la poêle. Pas de fissures, pas de bulles.",
            "action": "Attendez — la fermentation du seigle est patiente. Une cuisine plus froide peut nécessiter un total de 6 à 7 heures. Le pain n'est pas prêt."
          },
          {
            "state": "Perfect",
            "description": "Surface à moins de 1 cm du bord, fissurée, poreuse, et sent profondément acide et malté. Le pain oscille très légèrement si vous déplacez la poêle.",
            "action": "Faites cuire immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La surface s'est levée au-dessus du bord et a commencé à s'effondrer vers l'intérieur. Les fissures s'effondrent.",
            "action": "Faites cuire immédiatement — ne tardez pas. Le seigle surproof devient gommé et dense."
          }
        ]
      },
      "feelCue": "Mouillez un bout de doigt et appuyez doucement sur la surface — un pain de seigle parfaitement éprouvé ressort à peine du tout. Il tient le tiret comme une crème ferme, pas comme un pain de levure."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "proofed_loaf"
      ],
      "outputState": "baked_rye_loaf",
      "instructions": "Préchauffer le four à 200 C (390 F) avec une grille dans le tiers inférieur. Retirez l'enveloppe plastique et placez la poêle directement dans le four. Cuire 60 à 70 minutes. À 20 minutes, couvrir le pain de façon lâche avec du papier pour éviter que le dessus ne durcisse trop vite. La température interne devrait atteindre 97 à 99 °C (206 à 210 °F). C'est un pain dense — ne le précipitez pas. Si vous avez un thermomètre de four, utilisez-le: le seigle foncé doit frapper la température pour éviter un centre de gomme.",
      "visualCue": {
        "primaryTarget": "Un haut acajou-brun profond avec un centre craqué, légèrement bombé. Le pain a légèrement tiré des côtés de la poêle. Ça sonne creux quand le fond est rappé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Top semble sombre mais la température interne est inférieure à 95 °C. Une brochette sort avec des résidus collants et gommés.",
            "action": "Couvrir avec du papier, baisser la température à 180 C et cuire encore 15 à 20 minutes. Vérifiez la température interne."
          },
          {
            "state": "Perfect",
            "description": "Brun profond, croûte ferme, température interne 97-99 C, brochette sort propre sans collants. Le pain tire proprement de la poêle.",
            "action": "Laisser refroidir complètement dans la casserole pendant 30 minutes, puis sur une grille."
          },
          {
            "state": "Overdone",
            "description": "Top est très sombre et dur. Température interne supérieure à 102 °C.",
            "action": "Le pain sera plus sec que l'idéal mais toujours comestible. Couper finement et servir avec des garnitures grasses."
          }
        ]
      },
      "feelCue": "Ne coupez pas ce pain pendant au moins 12 à 24 heures après la cuisson — les amidons ont besoin de temps pour être entièrement mis. Un pain de seigle fraîchement cuit est presque gommé à l'intérieur; du jour au lendemain, il s'insère dans sa texture dense et trancheable caractéristique. L'attente n'est pas facultative."
    }
  ]
};
