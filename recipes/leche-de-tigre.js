export default {
  "repoId": "master_peruvian_leche-de-tigre_001",
  "parentRepoId": null,
  "slug": "leche-de-tigre",
  "author": "ForkRecipe Kitchen",
  "title": "Leche de Tigre",
  "description": "Le puissant liquide d'agrumes laissé au fond d'un bol de ceviche — un mélange de jus de lime, de poisson, d'amarillo ají, de gingembre, de céleri et de coriandre qui est simultanément un sous-produit, une sauce et un coup réparateur servi dans son propre verre.",
  "cuisine": "Pérou",
  "culture": "Lima",
  "category": "condiments",
  "tags": [
    "périuvien",
    "Ceviche",
    "marinade",
    "agrumes",
    "épicé",
    "Produits de la mer"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 5,
    "bitter": 1,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Acid",
      "name": "Jus de lime frais, tendu (à partir d'environ 12 limes)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron vert clé",
        "jus de citron (moins amer)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Stock de poisson froid ou jus de palourde",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Poulet léger"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Déchets de poisson blanc ou 50g de poisson blanc ferme (basse de mer, sole)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Heat",
      "name": "Ají amarillo pâte",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "1 ají amarillo frais, ensemencé"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gingembre frais, pelé et tranché approximativement",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Pâte de céleri, grossièrement hachée",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Feuilles de céleri"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Gousse d'ail",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Feuilles et tiges de coriandre fraîches",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Allium",
      "name": "Oignon rouge, tranché approximativement",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Cancha (graines de maïs grillées), pour servir",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": [
        "maïs soufflé",
        "croustilles de tortilla"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Réfrigérer",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "cold_citrus_base",
      "instructions": "Verser le jus de lime et le stock de poisson froid dans un bol. Ajouter une poignée de glace et remuer jusqu'à ce que le mélange soit soigneusement refroidi — vous voulez entre 2 et 4C / 36–40F avant de mélanger. Ce n'est pas négociable: leche de tigre est mélangé froid, servi froid, et le plus froid il reste pendant la préparation, le plus brillant, plus propre, et plus vif le goût des agrumes. Le froid empêche également la protéine de poisson de cuisiner pendant l'étape de mélange, en maintenant le liquide fini propre et translucide plutôt que trouble et cuisson. Retirer la glace avant de la mélanger.",
      "visualCue": {
        "primaryTarget": "Un liquide cristallin, glacé et tranchant de paille pâle avec une faible teinte verdâtre du citron vert. Le bol doit être perlé avec condensation à l'extérieur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est la température ambiante; vous pouvez sentir la chaleur sur votre poignet lorsqu'il est maintenu au-dessus du bol; pas de condensation à l'extérieur.",
            "action": "Ajouter plus de glace et remuer vigoureusement pendant 2 minutes, ou placer le bol sur un bain de glace et remuer jusqu'à ce qu'il soit vraiment froid."
          },
          {
            "state": "Perfect",
            "description": "Le bol est très froid au toucher, le liquide est presque gelé, sent intensément le citron vert fraîche. Lorsque vous plongez un doigt dedans, il fait froid dans 2 secondes.",
            "action": "Enlever la glace et procéder immédiatement au mélange — ne pas la laisser se réchauffer."
          },
          {
            "state": "Overdone",
            "description": "Le jus de citron vert est assis à la température ambiante depuis plus d'une heure et a perdu ses aromatiques volatils; le bord aigu des agrumes est terni.",
            "action": "Presser le jus de lime frais et l'ajouter pour rafraîchir la base avant de mélanger."
          }
        ]
      },
      "feelCue": "Plongez un doigt propre dans la base réfrigérée et maintenez-le là pendant trois secondes — il devrait se sentir activement, inconfortablement froid. Ce froid soutenu est votre assurance contre un résultat fastidieux."
    },
    {
      "nodeId": "step_2",
      "action": "Mixer",
      "inputs": [
        "cold_citrus_base",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "blended_leche",
      "instructions": "Placer la base d'agrumes réfrigérée dans un mélangeur. Ajouter les morceaux de poisson cru, la pâte ají amarillo, le gingembre tranché, le céleri, l'ail, les feuilles de coriandre et les tiges, l'oignon rouge et le sel. Mélanger à haute vitesse pendant 45 secondes — pas plus. Le surbrillance oxyde la coriandre et réchauffe le mélange de friction, qui aplatissent tous les deux la saveur. L'objectif est un blitz puissant mais bref qui décompose tous les solides dans le liquide sans transformer l'ensemble en une soupe chaude et mousseuse. Le poisson fournit le corps et une crémosité subtile comme ses protéines émulsifient dans l'acide — c'est le «lait» du lait de tigre.",
      "visualCue": {
        "primaryTarget": "Un liquide glacé, pâle, légèrement opaque, avec une teinte vert pâle de la coriandre, un aspect doux tacheté, et un arôme d'agrumes-herbe-spice extrêmement vif et vif qui remplit la pièce instantanément.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux de gingembre, de céleri ou de poisson visibles dans le mélangeur; le liquide est trop clair et mince; les aromatiques n'ont pas se décomposer en la base.",
            "action": "Mélanger encore 20 secondes en courts éclats; vérifier à nouveau — le gingembre et le céleri sont les plus difficiles à intégrer pleinement."
          },
          {
            "state": "Perfect",
            "description": "Pale, légèrement opaque, froid et sauvagement parfumé. Pas de gros morceaux visibles. Le liquide a une crémosité faible où les protéines de poisson ont émulsifié. L'odeur est aigre, herbacée, épicée et océanique tout à la fois.",
            "action": "Sourire immédiatement pendant le froid."
          },
          {
            "state": "Overdone",
            "description": "Le mélangeur a réchauffé le liquide; la coriandre a tourné le kaki et le liquide a une couleur vert terne plutôt que pâle vif; la mousse sur le dessus indique une suraération.",
            "action": "Plongez immédiatement et refroidissez au-dessus d'un bain de glace pour récupérer une certaine luminosité; ajoutez une pression de jus de lime frais pour rafraîchir."
          }
        ]
      },
      "feelCue": "Sentez le mélangeur avant de l'ouvrir — l'arôme qui s'échappe devrait être presque écrasant, un coup concentré d'acide, d'herbe et de chaleur qui fait vos yeux arroser légèrement. Si ça sent le museau ou le plat, il vous faut plus de citron vert ou plus d'ají."
    },
    {
      "nodeId": "step_3",
      "action": "Filtrer",
      "inputs": [
        "blended_leche"
      ],
      "outputState": "strained_leche_de_tigre",
      "instructions": "Réglez un tamis à mailles fines sur un bol reposant dans un bain de glace. Verser la lèche mélangée dans le tamis et utiliser le dos d'une louche ou d'une cuillère pour presser doucement et extraire le plus de liquide possible des solides. Ne forcez pas — appuyez trop fort pousse à travers le céleri fibreux et le gingembre, qui fait tourner le liquide amer et herbacé. Vous voulez extraire le liquide aromatisé tout en laissant les solides plus grossiers derrière. Jeter les solides pressés. Le liquide tendu doit être très froid, presque complètement clair avec juste l'opalescence laiteuse la plus faible, et l'odeur très vive.",
      "visualCue": {
        "primaryTarget": "Un liquide pâle froid, presque translucide, avec une légère opalescence blanc crème, assis dans le bol sur la glace. Il devrait ressembler à du lait de coco dilué dans la clarté, avec aucun nuage vert des légumes mélangés surpressés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est trop mince et clair — peu a été pressé à travers; le tamis est encore plein de solides humides avec beaucoup de saveur laissée en eux.",
            "action": "Appuyez plus fermement avec le dos d'une louche dans des cercles lents et contrôlés, mais arrêtez avant que les solides commencent à passer."
          },
          {
            "state": "Perfect",
            "description": "Un liquide peu opalescente, très froid qui goûte intensément aigre, épicé, herbacé et océanique en séquence. Chaque gorgée change en bouche. La surface n'a pas de mousse, juste une légère lueur.",
            "action": "Goûtez et ajustez le sel, puis servez immédiatement, très froid."
          },
          {
            "state": "Overdone",
            "description": "Le liquide est vert nuageux et légèrement amer de surpression; la fibre de céleri a poussé à travers et laissé une qualité herbeuse et dure.",
            "action": "Passez à nouveau à travers le tamis sans presser; le second passe nettoiera une partie des nuages."
          }
        ]
      },
      "feelCue": "Plongez l'extrémité d'une cuillère dans le liquide et le goût tendus — la première sensation devrait être une aurence aiguë, presque violente du citron vert, suivie par la chaleur de réchauffement de l'ají, puis la profondeur océanique du poisson, puis une finition fraîche et à base de plantes de la coriandre. Si un élément est absent, ajuster avant de servir."
    },
    {
      "nodeId": "step_4",
      "action": "Assaisonner",
      "inputs": [
        "strained_leche_de_tigre",
        "ing_11"
      ],
      "outputState": "finished_leche_de_tigre",
      "instructions": "Goûtez la leche de tigre tendue. Réglez le sel. Si les agrumes sont écrasants, ajoutez une petite quantité de poisson supplémentaire pour adoucir le bord acide sans perdre la vivacité. Si elle manque de chaleur, fouetter dans une touche plus ají amarillo pâte. Servir immédiatement de deux façons : comme une sauce versée sur le ceviche (où il devient le curage et servir le liquide simultanément), ou comme une piqûre dans un petit verre réfrigéré surmonté de canche (grains grillés) – la façon traditionnelle de commencer un repas de ceviche. Leche de tigre ne se maintient pas bien; les aromatiques s'estompent et l'acide continue de s'épuiser en une heure. Faire et utiliser immédiatement.",
      "visualCue": {
        "primaryTarget": "Servi dans un petit verre ou versé sur ceviche — un liquide froid, à peine opaque, lumineux et pâle avec la lueur opalescente de quelque chose de puissant contenu. La canche sur le dessus ajoute croquant et contraste.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Plat, mince, pas très aigre ou épicé; la saveur se dissout en bouche sans construire; a besoin plus de citron vert, plus ají, ou plus de sel.",
            "action": "Ajouter le jus de lime frais en petites quantités, goûter au fur et à mesure; ajouter plus de pâte ají amarillo pour la chaleur; reformer."
          },
          {
            "state": "Perfect",
            "description": "Assez aigre pour vous faire clignoter, assez chaud pour réchauffer l'arrière de la gorge, savourer du poisson et du sel, herbes et nettoyer de la coriandre. La cancha s'écrase contre le liquide comme une note de percussion. Une chance de guérir la gueule de bois, disent-ils à Lima.",
            "action": "Servir sans délai."
          },
          {
            "state": "Overdone",
            "description": "L'acide est devenu amer et dur; soit trop de citron vert a été utilisé, la mauvaise partie du citron vert (pinthe) a été extraite, ou il s'est assis trop longtemps et les acides volatils se sont détériorés dans une amertume plate.",
            "action": "Équilibrez avec une petite quantité de poisson et une pincée de sel; servez immédiatement."
          }
        ]
      },
      "feelCue": "Prenez une petite gorgée et maintenez-la au milieu du palais pendant cinq secondes. Il devrait évoluer: commencer vif et lumineux, puis se réchauffer avec la chaleur du chili, puis laisser une fraîcheur propre, légèrement saline, à base de plantes sur l'expiration. S'il a juste un goût uniformément aigre et tranchant sans évolution, il a besoin plus de la profondeur de l'umami du poisson ou du sel."
    }
  ]
};
