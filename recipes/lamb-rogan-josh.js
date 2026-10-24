export default {
  "repoId": "master_kashmiri_lamb_rogan_josh_001",
  "parentRepoId": null,
  "slug": "lamb-rogan-josh",
  "author": "ForkRecipe Kitchen",
  "title": "Lamb Rogan Josh",
  "description": "Le joyau de la couronne de la cuisine kashmiri wazwan - l'agneau ossé lent-brasé dans une sauce rouge brique construite de chilis cachemiri, yogourt, et un régiment d'épices entières, arrivant à la table profondément parfumé et modérément épicé, avec une sauce soyeuse et enveloppante qui enveloppe la viande dans des nuances de rouille et de crimson.",
  "cuisine": "Indiens",
  "culture": "Cachemire",
  "category": "proteins",
  "tags": [
    "ROMAN-JOSH",
    "Autres",
    "agneau",
    "curry",
    "braise",
    "indienne",
    "épis entiers",
    "yaourt"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "2 hr 30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Épaule ou cou d'agneau (en morceaux de 5 cm)",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "Chèvre (en os)",
        "morceaux de jambe d'agneau"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Ghee (ou huile neutre)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Chilis Cachemireis séchés (gros, ensemencés et ensemencés)",
      "ratioValue": 12,
      "defaultUnit": "g",
      "substitutions": [
        "2 c. à soupe de chili cachemiri en poudre",
        "paprika doux + Cayenne (2:1) pour la couleur et la chaleur"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Poudre de chili cachemiri (pour la base de la sauce)",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "paprika doux + Cayenne (3:1)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Feuilles de la baie (Tejpatta indienne, ou baie standard)",
      "ratioValue": 2,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Gousses de cardamome noir (badi elaichi, fissurées)",
      "ratioValue": 3,
      "defaultUnit": "pods",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Gousses de cardamome vert (hari elaichi, légèrement craquées)",
      "ratioValue": 5,
      "defaultUnit": "pods",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Vêtements entiers",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Maïs de poivre noir",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Bâton de cannelle (5cm pièce)",
      "ratioValue": 1,
      "defaultUnit": "piece",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Graines de fenouil (saunf)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Spice",
      "name": "Poudre de gingembre séchée",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Dairy",
      "name": "Yogourt plein gras (moulu doux)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "labneh éclairci avec un peu d'eau"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Allium",
      "name": "Asafoetida (hing, une pincée – la version traditionnelle cachemiri Pandit n'a ni oignon ni ail)",
      "ratioValue": 0.5,
      "defaultUnit": "g",
      "substitutions": [
        "omit pour la version wazwan musulmane, qui ajoute l'oignon et l'ail"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Liquid",
      "name": "Eau chaude ou matière légère",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_16",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Bloom",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_14"
      ],
      "outputState": "bloomed_spice_oil",
      "instructions": "Chauffer le ghee dans un pot à fond lourd à feu moyen jusqu'à ce qu'il mijote. Ajouter le chilis du Cachemir et toutes les épices — feuilles de laurier, cardamomes, girofles, grains de poivre et cannelle — avec une pincée d'asafoetida s'il l'utilise. Mélanger et faire frire pendant 60 à 90 secondes jusqu'à ce que les épices gonflent, que les peaux de cardamome commencent à souffler légèrement, que le chilis séché s'assombrisse, et que le ghe coule un profond, rouge-orange des huiles de chili. La cuisine doit se remplir d'un arôme parfumé d'épices résineuses — chaud, complexe et presque comme de l'encens. Cette floraison d'épices entières dans la graisse chaude est appelée tarka ou chaunk et est le fondement structurel de tout le plat.",
      "visualCue": {
        "primaryTarget": "Le ghee a tourné un orange rougeâtre vif et profond des huiles de chili cachemiri; toutes les épices semblent fleuries et légèrement gonflées, les feuilles de laurier ont obscurci et frisé aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le ghee est encore jaune pâle, les épices n'ont pas l'air modifiées, et peu de parfum a été libéré.",
            "action": "La chaleur est trop faible ou le temps trop court. Continuez à remuer à feu moyen jusqu'à ce que l'huile de chili colore visiblement la graisse."
          },
          {
            "state": "Perfect",
            "description": "Le Ghee est rouge-orange vif, la cuisine sent la cardamome et le chili chauds, et les girofles et les grains de poivre ont visiblement fleuri.",
            "action": "Ajouter immédiatement l'agneau et les épices en contact avec la viande."
          },
          {
            "state": "Overdone",
            "description": "Les épices commencent à fumer et à sentir amer; les girofles et les grains de poivre s'assombrissent au-delà de leur couleur naturelle.",
            "action": "Tirez immédiatement la casserole du feu et laissez refroidir 30 secondes avant d'ajouter l'agneau."
          }
        ]
      },
      "feelCue": "Penchez - vous soigneusement sur le pot et respirez - les épices cachemiriennes bien fleuries sentent comme un monastère de montagne à l'aube: profondément résineux, chaud et légèrement fumé de la cardamome. Si elle pique vos yeux, la chaleur est trop élevée."
    },
    {
      "nodeId": "step_2",
      "action": "Sear",
      "inputs": [
        "bloomed_spice_oil",
        "ing_01",
        "ing_16"
      ],
      "outputState": "browned_lamb",
      "instructions": "Assaisonner les morceaux d'agneau avec du sel. Ajoutez-les dans le ghee infusé d'épices et faites cuire à feu moyen-vif, en tournant occasionnellement, jusqu'à ce qu'ils soient dorés de tous les côtés, de 8 à 10 minutes. Ne pas fouler — travailler en lots si nécessaire. Le ghee rouge tachera la viande d'une couleur de rouille profonde comme il brunit. L'agneau doit développer une croûte visible de chaque côté; le fond du pot devient sombre et aromatique. Cette étape de brunissement n'est pas à propos de la couleur profonde Maillard (le ghee rouge masque le développement de la couleur), mais à propos de chasser l'humidité de surface et de développer le corps dans la sauce éventuelle.",
      "visualCue": {
        "primaryTarget": "Les morceaux d'agneau sont enduits d'une couleur rouge rouille du ghee chili cachemiri, avec une croûte visible sur les surfaces exposées; le fond de pot porte un fond sombre et parfumé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'agneau est encore pâle sous l'huile de chili et s'assied dans le liquide plutôt que le grésillement; les morceaux sont en vapeur et le fond est minimal.",
            "action": "Élevez la chaleur et espacez les morceaux plus à l'écart — réduisez les lots afin que chaque morceau ait chaud, gras sec à saisir."
          },
          {
            "state": "Perfect",
            "description": "Une croûte ferme, de couleur rouille, les morceaux d'agneau libèrent le sol propre du pot. Le fond est sombre et aromatique, pas brûlé.",
            "action": "Commencez à ajouter le yogourt par étapes pour construire la sauce."
          },
          {
            "state": "Overdone",
            "description": "Les épices sur le plancher de pot ont brûlé à du carbone amer, le ghee fume sombre, et l'agneau sent acride plutôt que aromatique.",
            "action": "Déglacer immédiatement avec une éclaboussure d'eau, baisser la chaleur, et continuer — le fond de teint amer s'intégrera si ce n'est trop extrême."
          }
        ]
      },
      "feelCue": "L'agneau doit siffler avec assurance dans le ghêtre rouge et ne pas être mobile pendant les 2 premières minutes — cela signifie qu'une croûte se forme. Mouvement forcé avant de relâcher déchire la croûte en développement et lèche l'humidité."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "browned_lamb",
        "ing_04",
        "ing_11",
        "ing_12",
        "ing_13",
        "ing_15"
      ],
      "outputState": "braised_rogan_josh",
      "instructions": "Abaissez le feu à moyen-doux. Ajouter la poudre de chili cachemiri, les graines de fenouil et le gingembre séché dans le pot et remuer 1 minute dans la graisse autour de l'agneau. Ajouter ensuite le yogourt fouetté 2 à 3 cuillères à soupe à la fois, en remuant vigoureusement après chaque addition de sorte que le yogourt est entièrement incorporé dans le ghee avant l'ajout suivant, ce qui empêche le yogourt de se caresser en grumeaux dans la graisse chaude. Ajouter l'eau chaude ou le bouillon, bien remuer et laisser mijoter. Couvrir et brasser sur le feu le plus bas pendant 1,5 à 2 heures jusqu'à ce que l'agneau soit très tendre et s'éloigne de l'os.",
      "visualCue": {
        "primaryTarget": "Une sauce profonde, rouge brique brillante à couleur rouille dans laquelle l'agneau est à peine submergé, avec une léchée d'huile de ghe teinté rouge visible aux bords, et des bulles lentes et paresseuses montant à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le yogourt s'est divisé en caillés blancs dans un liquide fin et granuleux; l'agneau est encore dur et résiste à une fourchette.",
            "action": "Mélanger vigoureusement pour briser les caillés; si vous les divisez fortement, ajouter une éclaboussure d'eau et mélanger brièvement avec un mélangeur d'immersion. La graine devrait être lisse avec une mijotation continue."
          },
          {
            "state": "Perfect",
            "description": "Une sauce soyeuse, rouge rouille unifiée qui s'accroche à l'agneau; la graisse s'est légèrement séparée à la surface dans l'huile caractéristique sur le dessus d'un curry sud-asiatique bien cuit, et la viande donne complètement à l'os.",
            "action": "Goûtez, ajustez le sel et terminez avec un peu de cardamome noir entier écrasé pour la fraîcheur."
          },
          {
            "state": "Overdone",
            "description": "L'agneau s'est désintégré et la sauce a été réduite à une pâte épaisse, sur-sel et trop concentrée.",
            "action": "Ajouter de l'eau tiède une éclaboussure à la fois pour se détendre; goûter et ajuster le sel. Poignez la viande doucement pour préserver la texture qui reste."
          }
        ]
      },
      "feelCue": "Lorsque le yogourt est correctement incorporé, la sauce doit se sentir soyeuse et enrobée sur la cuillère en remuant, jamais granuleuse. L'odeur après 90 minutes de braisage — gras d'agneau profond, chili cachemirien, fenouil, cardamome — devrait être chaudement enveloppante, comme un bazar d'épices le matin d'une montagne froide."
    },
    {
      "nodeId": "step_4",
      "action": "Finition",
      "inputs": [
        "braised_rogan_josh"
      ],
      "outputState": "finished_lamb_rogan_josh",
      "instructions": "Découvrez la casserole pendant les 15 dernières minutes pour réduire légèrement la sauce et concentrer les saveurs. La sauce doit être brillante et collante — si elle est trop fine, mijoter à découvert jusqu'à ce qu'elle épaississe pour faire une sieste. Goûtez et ajustez le sel. Poissonr et jeter les grandes épices entières (feuilles de baie, cannelle, les plus grandes gousses de cardamome) avant de servir, ou avertir vos invités. Le curry fini devrait avoir une huile rouge-orange éclatante à la surface — c'est le maα (ghee se séparant en arrière), un signe d'un curry sud-asiatique bien cuit. Servir avec du riz à la vapeur (Kashmiri basmati) ou du naan chaud.",
      "visualCue": {
        "primaryTarget": "Un curry rouge brique brillant avec un léché de rouge aromatique à la surface, de tendres morceaux d'agneau encore sur l'os, sentant l'épice cachemirienne et la viande cuite lentement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse avec un goût plat; l'huile rouge n'a pas séparé de la sauce, et les arômes d'épices n'ont pas complètement fondu.",
            "action": "Laisser mijoter plus longtemps, en remuant occasionnellement. Rogan Josh a besoin de l'eau pour cuisiner complètement pour la sauce à maturité."
          },
          {
            "state": "Perfect",
            "description": "sauce épaisse et brillante avec l'huile rouge caractéristique à la surface, profondément aromatique et modérément épicée, avec agneau tendre à la chute.",
            "action": "Servir immédiatement avec du riz basmati et un raita rafraîchissant."
          },
          {
            "state": "Overdone",
            "description": "L'huile est complètement séparée dans une couche épaisse et grasse et la masse solide est sèche et surréduite.",
            "action": "Incorporer un peu d'eau tiède et la laisser émulsifier brièvement à feu doux."
          }
        ]
      },
      "feelCue": "Le josh rogan bien fini devrait enrober une cuillère dans un film lisse, légèrement huileux, rouge foncé. L'arôme doit arriver en couches: d'abord la chaleur du chili rouge, puis le fenouil et la cardamome, puis la richesse animale profonde de l'agneau à bec lent en dessous."
    }
  ]
};
