export default {
  "repoId": "master_vietnamese_vietnamese_caramel_pork_001",
  "parentRepoId": null,
  "slug": "vietnamese-caramel-pork",
  "author": "ForkRecipe Kitchen",
  "title": "Thit Kho To (Porque caramel vietnamienne)",
  "description": "Le ventre de porc braisé dans un caramel ambré foncé, une sauce de poisson et de l'eau de coco fraîche jusqu'à ce que la graisse soit translucide-douce et les boissons de viande dans la glaçure salée-douce - le plat quintessence de la cuisine maison du Sud vietnamien.",
  "cuisine": "Vietnamiens",
  "culture": "Sud du Vietnam",
  "category": "proteins",
  "tags": [
    "vietnamese",
    "porc",
    "braisés",
    "Caramel",
    "poisson-sauce",
    "sud-vietname"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hour 30 min",
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
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Porc ventre, peau coupée en morceaux de 4 cm",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "épaule de porc"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau de coco douce",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "eau pure (moins sucrée)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "sauce de poisson (nuoc mam)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "sauce soja pour végétarien"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre blanc granulé (pour le caramel)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre de palme ou cassonade",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Échalotes tranchées",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Girofles d'ail, tranchés",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Protein",
      "name": "Oeufs durs et pelés",
      "ratioValue": 4,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Poivre noir, moulu",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Oignons verts, tranchés",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Heat",
      "name": "Chili des yeux thaïlandais, tranché (facultatif)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Caramélisation",
      "inputs": [
        "ing_04"
      ],
      "outputState": "dry_caramel",
      "instructions": "Placer un pot d'argile ou un pot à fond lourd à feu moyen. Ajouter le sucre blanc dans une couche mince et uniforme. Veillez bien sans remuer, car les bords commencent à fondre et à tourner en ambre (environ 4 à 5 minutes), inclinez la poêle pour la distribuer. Lorsque le sucre est entièrement liquide et la couleur de l'acajou foncé, avec de minces wisps de fumée juste en début, retirer de la chaleur immédiatement.",
      "visualCue": {
        "primaryTarget": "Caramel liquide de la couleur de l'acajou foncé — plus profond que le miel, approchant de la couleur du café noir tenu à la lumière. Une faible fumée commence juste à apparaître aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Caramel est ambre clair ou doré. Il aura un goût purement sucré et le braise sera bouillant sans amertume.",
            "action": "Retournez à la chaleur et continuez à regarder. Le changement de couleur s'accélère — ne partez pas."
          },
          {
            "state": "Perfect",
            "description": "L'acajou sombre, presque noir au centre. Des odeurs de caramel amer et de fumée. Une goutte sur une plaque froide se met à une perle sombre et vitreuse.",
            "action": "Ajouter le porc immédiatement — la chaleur résiduelle continue à cuire le sucre."
          },
          {
            "state": "Overdone",
            "description": "Caramel est noir et fume acridement. Une odeur brûlante.",
            "action": "Jeter et recommencer — le caramel brûlé rend le plat entier amer et ne peut être sauvé."
          }
        ]
      },
      "feelCue": "Le caramel à ce stade sent le caramel doux amer avec un léger bord fumé — cette légère amertume est le fondement de la complexité du plat."
    },
    {
      "nodeId": "step_2",
      "action": "Sear",
      "inputs": [
        "ing_01",
        "dry_caramel"
      ],
      "outputState": "caramel_coated_pork",
      "instructions": "Ajouter les morceaux du ventre de porc au caramel chaud et remuer rapidement pour enrober. Reculez — la graisse causera de violentes éclaboussures. Placer le porc dans le caramel pendant 3 à 4 minutes, en tournant avec des pinces, jusqu'à ce que chaque morceau soit enduit dans le caramel foncé et commence à brunir.",
      "visualCue": {
        "primaryTarget": "Chaque morceau de porc est enrobé de noir, caramel accroché à la surface et commençant à caraméliser sur la viande. Il n'y a pas de caramel au fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le caramel est encore baigné au fond et ne adhère pas au porc. Les pièces sont nues.",
            "action": "Mélanger plus activement et laisser réduire légèrement le caramel avant d'ajouter le liquide."
          },
          {
            "state": "Perfect",
            "description": "Chaque pièce a un revêtement noir et collant de caramel. La poêle est presque sèche. La surface de la viande est étourdie et parfumée.",
            "action": "Ajouter les échalotes et l'ail, puis déglacer."
          },
          {
            "state": "Overdone",
            "description": "Caramel a brûlé au fond du pot. Une forte odeur brûlée.",
            "action": "Enlevez le porc. Nettoyer le pot avec de l'eau chaude, déglacer et extirper les morceaux carbonisés avant de continuer."
          }
        ]
      },
      "feelCue": "Le porc doit siffler et craquer fort quand il frappe le caramel — s'il est silencieux, le caramel a trop refroidi et ne s'enrobera pas correctement."
    },
    {
      "nodeId": "step_3",
      "action": "Brise",
      "inputs": [
        "caramel_coated_pork",
        "ing_06",
        "ing_07",
        "ing_02",
        "ing_03",
        "ing_05",
        "ing_09"
      ],
      "outputState": "braising_pork",
      "instructions": "Ajouter les échalotes et l'ail dans le pot et remuer 1 minute. Verser dans l'eau de coco et la sauce de poisson — le liquide saisira et éclaboussera en frappant le caramel, puis le dissoudrea rapidement. Ajouter le sucre de palme et le poivre noir. Porter à ébullition, écrémer toute mousse, puis réduire au plus bas ébullition possible. Couvrir et cuire pendant 45 minutes.",
      "visualCue": {
        "primaryTarget": "Un bouillon d'ambre foncé, à peine mijotant avec de petites bulles brisées aux bords. Les morceaux de porc sont à moitié submergés et prennent progressivement de la couleur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le papillon est pâle et mince. Caramel n'est pas complètement dissous dans le liquide.",
            "action": "Augmenter brièvement la chaleur et remuer pour dissoudre le caramel restant du fond du pot."
          },
          {
            "state": "Perfect",
            "description": "Broth est ambre foncé, clair et parfumé. Quelques petites bulles brisent la surface paresseusement. Le porc est pâle sur le côté submergé et bruni sur le dessus.",
            "action": "Couvrez et maintenez cette mijot douce."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon est bouillant, le porc rebondit. La graisse émulsifie et rend le bouillon nuageux.",
            "action": "Réduire immédiatement la chaleur. Un ébullition en rouleau durcit le porc et rend la sauce grasse."
          }
        ]
      },
      "feelCue": "Après 30 minutes, pressez le porc avec l'arrière d'une cuillère — il doit s'enfoncer légèrement mais ne pas se sentir musqué. La couche grasse doit être légèrement translucide aux bords."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "braising_pork",
        "ing_08"
      ],
      "outputState": "finished_caramel_pork",
      "instructions": "Après 45 minutes, ajouter les œufs pelés durs. Tourne-les doucement dans le bouillon. Cuire à découvert pendant encore 20 à 25 minutes, parfois en cuillerant du bouillon sur le porc, jusqu'à ce que le bouillon ait réduit à une sauce sirupeuse brillante et que la graisse sur le porc soit complètement tendre et translucide.",
      "visualCue": {
        "primaryTarget": "La couche de graisse de porc est complètement translucide — on peut presque la voir. Les œufs sont teints d'une acajou profonde de tous les côtés. La sauce est épaisse et brillante, enrobant l'arrière d'une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le gras est encore blanc opaque. Le papillon est encore mince. Les œufs sont à peine colorés.",
            "action": "Continuer à mijoter à découvert — la graisse a besoin de temps pour rendre et faire fondre le collagène."
          },
          {
            "state": "Perfect",
            "description": "La graisse est une belle ambre translucide. La viande a légèrement tiré aux bords. Les œufs sont acajous. La sauce est assez épaisse pour enrober une cuillère mais pas collante.",
            "action": "Garnir et servir sur le riz."
          },
          {
            "state": "Overdone",
            "description": "La graisse de porc a complètement décomposé et est grasse. La sauce est très épaisse et collante. Les œufs sont caoutchouteux.",
            "action": "Ajouter une éclaboussure d'eau pour desserrer la sauce et retirer immédiatement de la chaleur."
          }
        ]
      },
      "feelCue": "Appuyez sur la graisse de porc avec une cuillère — à la perfection, il donne complètement sans résistance, comme le tofu doux. La viande en dessous devrait avoir la texture de porc tiré, pas une mâche sèche."
    },
    {
      "nodeId": "step_5",
      "action": "Garnir",
      "inputs": [
        "finished_caramel_pork",
        "ing_10",
        "ing_11"
      ],
      "outputState": "plated_caramel_pork",
      "instructions": "Déposer le porc, les œufs et la sauce dans des bols ou sur un plateau. Éparpiller les oignons verts et le chili facultatif sur le dessus. Servir immédiatement avec du riz au jasmin à la vapeur et du daikon mariné.",
      "visualCue": {
        "primaryTarget": "Porc laqué foncé et oeufs macajou dans une piscine ambre de sauce. Des anneaux d'oignon vert et du chili rouge éclairent la richesse monochrome.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le plat a l'air pâle et la sauce ne recouvre pas uniformément le porc.",
            "action": "Réduire encore la sauce avant de la déposer."
          },
          {
            "state": "Perfect",
            "description": "Tout brille et sombre. Les piscines de sauce autour du riz et les œufs coupés en deux révèlent un jaune d'or entièrement teinté.",
            "action": "Servez."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été congelée. Le porc a l'air sec.",
            "action": "Ajouter une touche d'eau chaude et réchauffer doucement avant de servir."
          }
        ]
      },
      "feelCue": "La sauce à la consistance parfaite devrait tomber de la poche dans des feuilles épaisses, et non des gouttes — et elle devrait laisser un revêtement à l'intérieur de la casserole."
    }
  ]
};
