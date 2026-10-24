export default {
  "repoId": "master_west_african_jollof_rice_001",
  "parentRepoId": null,
  "slug": "jollof-rice",
  "author": "ForkRecipe Kitchen",
  "title": "Fête Jollof Rice",
  "description": "Le plat le plus célèbre de l'Afrique de l'Ouest - le riz à grains longs cuit directement dans une base de bonnet de tomate, de poivre et de scotch vif jusqu'à ce que chaque grain soit teinté rouge profond et infusé de la saveur fumée et irremplaçable du pot de fête.",
  "cuisine": "Afrique de l ' Ouest",
  "culture": "Nigéria/Ghanaïen",
  "category": "grains",
  "tags": [
    "Sans gluten",
    "Afrique de l ' Ouest",
    "riz",
    "tomates",
    "un seul pot"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Riz à grains longs",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "riz jasmin (réduire le temps de cuisson de 5 min)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Tomates entières en conserve",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "4 grandes tomates prunes fraîches, blanchies et pelées"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Poivrons rouges",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "poivrons"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Heat",
      "name": "Poivre de bonnet écossais",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "Poivre habanero",
        "1⁄2 cayenne si non disponible"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon blanc (approximativement haché)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gingembre frais (peauté, approximativement haché)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Stocks de poulet ou de légumes",
      "ratioValue": 500,
      "defaultUnit": "ml",
      "substitutions": [
        "eau + 1 cube de stock"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 2,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Poudre de curry",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Herb",
      "name": "Thym séché",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "thym frais (double quantité)"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Fat",
      "name": "Huile neutre (arachide ou tournesol)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "huile végétale"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "plus d'huile pour la version végétalienne"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mixer",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "tomato_pepper_puree",
      "instructions": "Mélanger les tomates en conserve, les poivrons rouges, le bonnet à scotch, la moitié de l'oignon, l'ail et le gingembre dans un mélangeur. Blitz jusqu'à ce qu'il soit complètement lisse sans morceaux visibles — vous voulez un lisier liquide, pas une salsa épaisse. La couleur sera une brique-orange vive à ce stade. Réserver; la purée libérera beaucoup de vapeur quand elle frappera l'huile chaude, alors préparez le pot avant de mélanger.",
      "visualCue": {
        "primaryTarget": "Un liquide lisse, de couleur vibrante, allant de l'orange profonde au rouge brique, avec une consistance légèrement plus épaisse que passata.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux visibles de peau de poivre ou de tomate flottent dans le mélange.",
            "action": "Mélangez encore 30 secondes et vérifiez à nouveau; les morceaux entiers provoqueront une cuisson inégale."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, versable, un rouge orange foncé uniforme sans solides. Il verse proprement une cuillère.",
            "action": "Passez immédiatement à la pâte."
          },
          {
            "state": "Overdone",
            "description": "Le mélangeur a fonctionné si longtemps qu'il a réchauffé le mélange de façon notable.",
            "action": "C'est bien — continuez. Le réchauffement n'a aucun effet significatif sur le résultat."
          }
        ]
      },
      "feelCue": "La base mélangée doit se sentir liquide et soyeuse lorsqu'elle est frottée entre le bout des doigts."
    },
    {
      "nodeId": "step_2",
      "action": "Frire",
      "inputs": [
        "ing_13",
        "ing_05",
        "ing_08",
        "tomato_pepper_puree",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_15"
      ],
      "outputState": "fried_tomato_base",
      "instructions": "Chauffer l'huile dans un pot à fond lourd à feu moyen-vif jusqu'à ce qu'elle mijote. Ajouter le reste de l'oignon tranché et faire frire pendant 4 minutes jusqu'à ramollir et translucide. Ajouter la pâte de tomate et faire frire, en remuant constamment, pendant 3 minutes jusqu'à ce qu'elle s'assombrisse à un rouge-rouille profond. Verser dans la purée de tomates-poivrons mélangée — Reculez, il s'effacera de façon spectaculaire. Incorporer les feuilles de laurier, la poudre de curry, le thym et le sel. Cuire à feu moyen à découvert, en remuant toutes les 3-4 minutes, pendant 20-25 minutes au total, jusqu'à ce que la pâte ait diminué d'environ la moitié, foncé à un rouge brique profond, et l'huile s'est séparée et flotte visiblement sur le dessus.",
      "visualCue": {
        "primaryTarget": "Une pâte rouge brique foncée profondément réduite avec des piscines d'huile scintillante à la surface. La pâte doit tenir sa forme brièvement lorsqu'une cuillère la sépare, puis remonter lentement ensemble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore orange vif et aqueuse. L'huile n'est pas séparée. Il sent cru et légèrement acide.",
            "action": "Continuer la cuisson: l'eau de la tomate doit s'évaporer avant que la pâte ne soit prête à transporter le riz. Cette étape ne peut être précipitée."
          },
          {
            "state": "Perfect",
            "description": "Une pâte rouge acajou profonde. Le pétrole flotte dans des piscines ambres distinctes sur le dessus. L'odeur est passée d'acide à sucré et fumé. Une cuillère traînée à travers le pot laisse un canal momentané.",
            "action": "Ajouter le bouillon, mélanger, puis ajouter le riz rincé."
          },
          {
            "state": "Overdone",
            "description": "La pâte est brun très foncé, presque noire aux bords, avec une odeur aiguë et acride.",
            "action": "Ajouter immédiatement le stock pour arrêter la cuisson et déglacer les morceaux brûlés du bas. La légère amertume peut se fondre dans le plat final."
          }
        ]
      },
      "feelCue": "Vous entendrez la pâte passer d'un étourdissement fort et agressif à un mijotement plus profond et plus silencieux au fur et à mesure que l'eau cuit — que le changement de signal sonore la pâte est proche de prêt."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "fried_tomato_base",
        "ing_09"
      ],
      "outputState": "seasoned_cooking_liquid",
      "instructions": "Verser le bouillon dans la pâte réduite et remuer vigoureusement pour incorporer, en grattant les morceaux caramélisés du fond du pot. Goûtez le liquide — il devrait être agréablement assaisonné, légèrement plus salé que vous voulez le riz fini, car le riz absorbera et diluera l'assaisonnement. Ajustez le sel maintenant. Porter à ébullition.",
      "visualCue": {
        "primaryTarget": "Un liquide uni, brun rougeâtre profond avec un arôme plein et salé et la texture de la soupe de tomate légère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock et la pâte ne sont pas encore entièrement combinés — des stries de stock pâle visibles.",
            "action": "Mélanger plus soigneusement, en veillant à gratter le fond. Porter à ébullition avant d'ajouter du riz."
          },
          {
            "state": "Perfect",
            "description": "Un bouillon rouge uniformément coloré et profondément aromatisé qui a un goût audacieux de poivre et de tomate. Légèrement sursauté au palais — c'est exact.",
            "action": "Ajoutez le riz maintenant."
          },
          {
            "state": "Overdone",
            "description": "Vous l'avez laissé réduire davantage et le bouillon est très épais, plus comme une sauce.",
            "action": "Ajouter un peu plus de bouillon ou d'eau à mincer — il doit y avoir assez de liquide pour que le riz puisse cuire."
          }
        ]
      },
      "feelCue": "Goûtez une cuillerée; il devrait être comme boire une soupe de tomate bien assaisonnée et robuste avec de la chaleur à l'arrière de la gorge à partir du capot de scotch."
    },
    {
      "nodeId": "step_4",
      "action": "Faire bouillir",
      "inputs": [
        "ing_01",
        "seasoned_cooking_liquid"
      ],
      "outputState": "rice_in_pot",
      "instructions": "Rincer le riz par huilé dans de l'eau froide jusqu'à ce que l'eau soit généralement claire, puis bien égoutter. Ajouter le riz rincé à la base bouillante de la tomate et remuer une fois — juste un brassage ferme pour distribuer uniformément le riz et s'assurer qu'aucun grain ne flotte au-dessus du niveau liquide. Ajouter le beurre en petits morceaux sur le dessus. Ne remuez plus. Placer le couvercle sur la casserole, réduire la chaleur à son réglage absolu le plus bas, et cuire pendant 30 minutes sans gêne.",
      "visualCue": {
        "primaryTarget": "Tout le riz submergé et uniformément distribué dans le liquide de tomate, le beurre fondant sur le dessus, le couvercle fermé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Certains riz sont visibles au-dessus du niveau liquide — des pics secs se détachent.",
            "action": "Ajouter 50 ml de plus de bouillon ou d'eau chaude, incliner le pot pour distribuer et remplacer immédiatement le couvercle."
          },
          {
            "state": "Perfect",
            "description": "Le riz est complètement submergé dans un liquide rouge profond qui recouvre à peine les grains. La vapeur commence à se lever. Le beurre commence à fondre.",
            "action": "Fermez le couvercle et réduisez la chaleur au minimum. Ne levez pas le couvercle pendant 30 minutes."
          },
          {
            "state": "Overdone",
            "description": "Trop de liquide: le riz flotte librement plutôt que de rester assis dans la base.",
            "action": "Égoutter un peu de liquide avant de sceller. Le riz doit cuire à la vapeur, et non pas bouillir dans du liquide."
          }
        ]
      },
      "feelCue": "Après 15 minutes, appuyez doucement sur le couvercle — vous devriez sentir le pouls rythmique de la pression de vapeur sous votre paume, un signe que le pot fait son travail."
    },
    {
      "nodeId": "step_5",
      "action": "Laisser reposer",
      "inputs": [
        "rice_in_pot"
      ],
      "outputState": "finished_jollof_rice",
      "instructions": "Après 30 minutes, levez le couvercle rapidement et recherchez des trous de vapeur — petits cratères à la surface du riz où la vapeur a traversé les grains. Ces signaux indiquent que le riz est cuit. À l'aide d'une longue cuillère, grattez doucement le fond du pot : vous devriez trouver la « croûte de fête » (conkon en Nigéria), une fine couche de riz fumé légèrement carbonisé collée au plancher du pot. Pliez cette croûte à travers le riz — elle n'est pas brûlée; c'est le prix. Remplacer le couvercle et laisser reposer le riz pendant 10 minutes avant de servir.",
      "visualCue": {
        "primaryTarget": "Chaque grain est uniformément teinté rouge profond, séparé et moelleux, avec des cratères visibles à la surface. La croûte inférieure est sombre, fumée et parfumée, et non acride.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains au centre sont encore fermes et crayeux quand mordus. Pas encore de trous de vapeur.",
            "action": "Ajouter 3 cuillères à soupe d'eau autour du bord, remplacer le couvercle et cuire encore 8-10 minutes sur le feu le plus bas."
          },
          {
            "state": "Perfect",
            "description": "Des trous de vapeur à travers la surface. Les grains sont tendres, moelleux et rouge foncé. La croûte au fond est fumée et intacte. L'odeur est incontestablement plaisante.",
            "action": "Grattez la croûte dans le riz, remplacez le couvercle et reposez-la pendant 10 minutes."
          },
          {
            "state": "Overdone",
            "description": "La croûte est allée au - delà de la fumée pour être réellement brûlée — la casserole sent aiguisée et acride plutôt que sucrée.",
            "action": "Retirer immédiatement la casserole du feu. Transférer soigneusement le riz dans un plat de service propre sans racler le fond même, laissant la couche brûlée derrière."
          }
        ]
      },
      "feelCue": "Chaque grain doit se sentir distinct et ferme entre les doigts — pas empilé, pas musqué — et teint complètement avec la base rouge plutôt que simplement revêtu sur l'extérieur."
    }
  ]
};
