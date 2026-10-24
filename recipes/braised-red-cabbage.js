export default {
  "repoId": "master_german_braised-red-cabbage_001",
  "parentRepoId": null,
  "slug": "braised-red-cabbage",
  "author": "ForkRecipe Kitchen",
  "title": "Chou rouge braisé (Rotkohl)",
  "description": "Le chou rouge braisé aux pierres précieuses de l'Allemagne — râpé de rotkohl, saupoudré de pomme, de vinaigre, de girofle et d'une touche de sucre, jusqu'à ce que le chou s'effondre dans un enchevêtrement soyeux de rubans sucrés et épicés qui approfondissent jusqu'à un grenat brillant dans la casserole.",
  "cuisine": "Allemand",
  "culture": "Allemand",
  "category": "vegetables",
  "tags": [
    "allemand",
    "Choux",
    "braisés",
    "pomme",
    "douce-douleur",
    "végétalien",
    "hiver"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "1 hr 20 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 3,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Choux rouges (Rotkohl), décortiqués et finement déchiquetés",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Pommes de cuisson, pelées et râpées",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "Pommes bramley",
        "Grand-mère Smith"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon jaune, en dés",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Graisse d'oie, graisse de canard ou huile végétale neutre",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Saindoux",
        "beurre"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "vinaigre de vin rouge",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre de cidre de pomme",
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "gelée de cassis",
        "confiture de lingonberry (réduire légèrement le vinaigre)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Giroves entières",
      "ratioValue": 4,
      "defaultUnit": "whole",
      "substitutions": [
        "une pincée de gousses de terre"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "baies de genièvre, légèrement broyées",
      "ratioValue": 6,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Liquid",
      "name": "Eau ou vin rouge sec",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "stock de légumes"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saucisse",
      "inputs": [
        "ing_04",
        "ing_03"
      ],
      "outputState": "softened_onion_base",
      "instructions": "Chauffer la graisse dans une grande casserole à fond lourd ou un four hollandais à feu moyen. Ajouter l'oignon en dés avec une pincée de sel et cuire, en remuant occasionnellement, pendant 8-10 minutes jusqu'à ce que l'oignon soit complètement doux, translucide, et commencer à prendre le bord doré le plus faible aux extrémités. L'oignon doit être sucré et effondré, non bruni — c'est un plat sucré-sour et l'oignon caramélisé le rend trop sucré.",
      "visualCue": {
        "primaryTarget": "Des morceaux d'oignon doux, translucides et scintillants avec juste le plus léger blush d'or aux extrémités. La casserole sent doucement l'allium de cuisson sans brunissement sur le fond de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore opaque et croquant. Une odeur crue et nette.",
            "action": "Continuer la cuisson à feu moyen, en remuant occasionnellement. Ne vous précipitez pas — l'oignon cru sous le chou rend le plat entier très goûté."
          },
          {
            "state": "Perfect",
            "description": "Entièrement doux et translucide, brillant, avec un arôme doux et laiteux. Juste l'ambre le plus faible aux bouts.",
            "action": "Ajouter le chou, la pomme, le vinaigre, le sucre, les épices et le liquide."
          },
          {
            "state": "Overdone",
            "description": "L'oignon a bruni de façon significative et sent fortement la caramélisation.",
            "action": "Ajouter une touche de vinaigre pour déglacer et refroidir la poêle. Le plat sera légèrement plus doux que prévu, mais toujours bon."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau d'oignon contre le côté de la casserole avec votre cuillère — il devrait mâcher sans résistance, comme du beurre chaud. N'importe quelle crise signifie qu'elle a besoin de plus de temps."
    },
    {
      "nodeId": "step_2",
      "action": "Brise",
      "inputs": [
        "softened_onion_base",
        "ing_01",
        "ing_02",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "braised_rotkohl",
      "instructions": "Ajouter le chou déchiqueté dans le pot dans de grandes poignées, en tournant avec des pinces — il semblera beaucoup trop mais s'effondrera considérablement. Ajouter la pomme râpée, le vinaigre, le sucre, les girofles, les baies de genièvre, les feuilles de laurier, le sel et l'eau ou le vin. Mélangez tout, pressez le chou dans le liquide. Porter à mijoter à feu moyen-vif, puis réduire à mijoter. Couvrir soigneusement et brasser pendant 45 à 55 minutes, en remuant toutes les 15 minutes, jusqu'à ce que le chou s'est complètement effondré à une masse soyeuse et tendre. Le chou se transformera en un grenat profond, aux tons de joyaux, à mesure que l'acide réagira avec les pigments anthocyaniques, puis se mêlera par la cuisson.",
      "visualCue": {
        "primaryTarget": "Le chou s'est complètement effondré de son volume d'origine, réduit de près de la moitié. La couleur est un grenat rouge foncé et brillant, uniforme et orné de bijoux. Le liquide a été réduit à une glaçure sirupeuse, légèrement enrobée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le chou est encore violet brillant ou magenta dans les endroits, avec une texture et une résistance significatives. Le volume n'a pas beaucoup diminué. Goûté vif et cru.",
            "action": "Continuer le braisage avec le couvercle allumé. Rotkohl a besoin d'un temps de cuisson complet pour développer sa profondeur et sa couleur caractéristiques."
          },
          {
            "state": "Perfect",
            "description": "Deep, uniforme grenat. Les brins de chou sont complètement tendres et soyeux, fondant contre la langue. Le liquide a été réduit à une glaçure légèrement sirupeuse qui enrobe chaque brin. La saveur est complexe : douce, aigre, épicée et terreuse.",
            "action": "Retirer les feuilles de laurier, les gousses entières et les baies de genièvre. Goûtez et ajustez - ajoutez plus de vinaigre pour l'amer, le sucre pour le sucre, le sel pour la profondeur."
          },
          {
            "state": "Overdone",
            "description": "Le chou est devenu gris-violet et est musqué. Le liquide est réduit à une pâte collante et jammy.",
            "action": "Ajouter un jet d'eau ou de vin et remuer pour se détendre. Goût — si la saveur est encore bonne, la texture est le seul problème."
          }
        ]
      },
      "feelCue": "Soulevez quelques brins sur une cuillère et laissez - les draper — ils devraient tomber dans des rubans lents et soyeux, et non dans une touffe raide. Le liquide qui s'accroche à eux doit être suffisamment sirupeux pour enrober la cuillère sans s'enfuir immédiatement."
    },
    {
      "nodeId": "step_3",
      "action": "Saison",
      "inputs": [
        "braised_rotkohl"
      ],
      "outputState": "finished_rotkohl",
      "instructions": "Retirer les girofles entiers, les baies de genièvre et les feuilles de laurier. Goûtez le Rotkohl de façon critique : il doit tenir à la fois sa douceur et sa netteté en équilibre, avec l'épice de girofle et de genièvre en arrière-plan. Ajuster avec plus de vinaigre pour la luminosité, le sucre pour la douceur, ou le sel pour tout soulever. Rotkohl s'améliore considérablement avec le repos: fait une journée d'avance, réfrigéré et légèrement réchauffé, il perd toute netteté restante et toutes les saveurs se mélangent dans un ensemble magnifiquement intégré. Servir au chaud avec le porc rôti, le canard, le sauerbraten ou le bratwurst.",
      "visualCue": {
        "primaryTarget": "Rubans de grenat profonds de chou, brillants et sirupeux, empilés dans un bol chaud. La couleur est profonde et uniforme, sans tons gris ou violet.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les saveurs ont un goût plat ou unidimensionnel — soit simplement sucré ou simplement aigre, sans intégration.",
            "action": "Reposez-vous plus longtemps. Les saveurs ont besoin de temps pour fusionner. S'il est encore aiguisé après le repos, ajouter une pincée plus de sucre et quelques minutes plus de chaleur."
          },
          {
            "state": "Perfect",
            "description": "Doucement, épicé, soyeux. Le vinaigre et le sucre sont en équilibre et ne dominent pas. Clove et genièvre ajoutent de la complexité sans accablant.",
            "action": "Servir immédiatement ou réfrigérer la nuit, ce sera encore mieux le lendemain."
          },
          {
            "state": "Overdone",
            "description": "Une saveur est totalement dominante — amère, ou cloie et sucrée, ou si sur-épicée qu'elle goûte médicinal.",
            "action": "Contrer l'arôme dominant : ajouter du sucre ou une pincée de pomme pour l'excès de aigre; ajouter du vinaigre et une pression de citron pour l'excès de sucre."
          }
        ]
      },
      "feelCue": "Prenez un brin de chou entre vos doigts: il devrait se sentir soyeux et complètement donnant, presque comme des pâtes cuites. Sur la langue, il doit se dissoudre progressivement plutôt que de devoir mâcher. S'il résiste du tout, il lui faut plus de temps de louange."
    }
  ]
};
