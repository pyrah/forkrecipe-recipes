export default {
  "repoId": "master_mexican_mexicancarnitas_001",
  "parentRepoId": null,
  "slug": "mexican-carnitas",
  "author": "ForkRecipe Kitchen",
  "title": "Carnitas mexicains",
  "description": "L'épaule de porc braisée basse et lente en saindoux avec de l'orange et de la baie jusqu'à ce qu'elle se rende complètement, puis croustillante sous le grilleur en éclats caramélisés, le taco essentiel de la rue Michoacán.",
  "cuisine": "Mexicain",
  "culture": "Michoacán",
  "category": "proteins",
  "tags": [
    "protéine",
    "porc",
    "Mexique",
    "cuits lentement",
    "croustillant",
    "Carnites"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "3 hours 30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Épaule de porc (de préférence désossée), coupée en morceaux de 8 cm",
      "ratioValue": 1200,
      "defaultUnit": "g",
      "substitutions": [
        "fesses de porc",
        "épaule désossée"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Lard (ou huile neutre comme substitut)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "Écourtement des légumes",
        "huile neutre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Citrus",
      "name": "Oranges (jus et demi pelés)",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "1 pamplemousse"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Girofles d'ail, non pelées, cassées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Origan mexicain séché",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "Origan méditerranéen"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel grossier",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Lait condensé sucré (le secret Michoacán)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "2 c. à thé sucre + 2 c. à thé lait"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Brise",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "braised_pork",
      "instructions": "Placez les morceaux de porc dans un grand four hollandais ou une poêle profonde. Ajouter le saindoux, le jus d'orange, les moitiés d'écorces d'oranges (côté pressé vers le bas), l'ail cassé, les feuilles de laurier, l'origan, le cumin et le sel. Ajouter juste assez d'eau froide pour couvrir à peine le porc — environ 500ml. Porter à ébullition à feu vif, puis laisser mijoter régulièrement. Cuire à découvert, en maintenant une mijotée modérée. Ne couvrez pas — vous voulez que le liquide s'évapore. Après 1 heure, ajouter le lait condensé. Continuer la cuisson pendant encore 1,5 à 2 heures. Lorsque l'eau s'évaporera, le porc passera de la culture à la friture dans le saindoux rendu.",
      "visualCue": {
        "primaryTarget": "Après 2,5 heures, le liquide s'est complètement évaporé et le porc est frit dans son propre saindoux. Les pièces sont dorées et commencent à caraméliser.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 1,5 heure, il y a encore un liquide important. Le porc résiste à une fourchette — le collagène n'a pas converti.",
            "action": "Continuez à mijoter. N'augmentez pas la chaleur — la méthode est la transition progressive de la cuisson à la friture."
          },
          {
            "state": "Perfect",
            "description": "Le liquide s'est évaporé. Le porc est doré et commence à développer des taches caramélisées dans le saindoux. Il déchique facilement lorsqu'il est pressé avec une spatule.",
            "action": "Commencez à remuer toutes les quelques minutes pour caraméliser uniformément. Passez à croquant."
          },
          {
            "state": "Overdone",
            "description": "Tous les liquides s'évaporent trop tôt — le porc est encore dur et fait maintenant frire dur dans le saindoux.",
            "action": "Ajouter un éclaboussure de jus d'orange ou d'eau et poursuivre la cuisson, couvert, pendant 30 minutes."
          }
        ]
      },
      "feelCue": "À la fin du braise, pressez un morceau de porc à l'aide d'une cuillère en bois — il doit se séparer sans résistance, tomber dans des shards naturels et striés."
    },
    {
      "nodeId": "step_2",
      "action": "Crisp",
      "inputs": [
        "braised_pork"
      ],
      "outputState": "crisped_carnitas",
      "instructions": "Une fois le liquide évaporé et le porc frit, commencez à tourner les morceaux toutes les 2–3 minutes. Le lait condensé caramélisera avec les sucres oranges, créant des taches foncées et laquées. Découpez de plus grandes pièces avec une spatule au fur et à mesure. Lorsque le porc est un patchwork de taches caramélisées dorées profondes et foncées, ou un transfert sur une plaque de cuisson doublée de feuilles et finition sous le plus haut grilleur pendant 5 à 7 minutes pour une croustillante éclatante.",
      "visualCue": {
        "primaryTarget": "Des morceaux d'or pâle, des acajous, des bords foncés et croustillants. Une variété de textures de l'intérieur tendre à l'extérieur craqué.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toutes les pièces sont uniformément blondes. Pas de caramélisation. La saveur est encore douce et vapeur.",
            "action": "Augmentez légèrement la chaleur et remuez moins — laissez le porc entrer en contact avec la poêle chaude plus longtemps entre les virages."
          },
          {
            "state": "Perfect",
            "description": "Mosaïque textuelle : bords caramélisés croustillants, taches acajou foncées, intérieur pâle et tendre. La cuisine sent le caramel orange et le porc rôti. Chaque pièce est auto-aspirante dans le saindoux.",
            "action": "Retirer du feu. Pressez le reste du jus d'orange sur le dessus. Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les morceaux sont uniformément très foncés et secs. Caramel a brûlé amer. Lard peut fumer.",
            "action": "Retirer du feu. Ajouter une pression de jus de lime frais pour introduire de l'acide frais et couper l'amertume."
          }
        ]
      },
      "feelCue": "Prenez un morceau de carnitas — l'extérieur doit se sentir rigide et papier, tandis que l'intérieur donne immédiatement sous pression. Si tout est croquant et sans rendement, c'est exagéré."
    },
    {
      "nodeId": "step_3",
      "action": "Saison",
      "inputs": [
        "crisped_carnitas"
      ],
      "outputState": "finished_carnitas",
      "instructions": "Goûtez les carnitas et ajustez le sel. Pressez le reste du jus d'orange frais sur la viande chaude – l'acide crèvera contre le saindoux chaud et illuminera la saveur de façon spectaculaire. Servir immédiatement sur des tortillas de maïs chaudes avec des oignons blancs en dés, de la coriandre fraîche, de la salsa verde et des quartiers de chaux. Les carnitas sont les meilleurs dans les 30 minutes suivant la cuisson — la texture change à mesure qu'ils refroidissent.",
      "visualCue": {
        "primaryTarget": "Coller des tranches de porc avec des taches dorées visibles, acajou et foncées. La vapeur monte quand le jus d'orange frappe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les carnitas semblent pâles et humides. La saveur est douce et porcine sans profondeur caramélisée.",
            "action": "Retourner à feu vif pendant 5 minutes de plus, ou terminer sous le gril."
          },
          {
            "state": "Perfect",
            "description": "Une mosaïque de textures et de couleurs – bords croustillants, noyau tendre. L'acide brillant du jus d'orange traverse le riche saindoux.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les carnitas sont sèches, aucun contraste textural.",
            "action": "Ajouter un très petit filet de saindoux frais ou d'huile avant de servir pour restaurer une certaine richesse."
          }
        ]
      },
      "feelCue": "L'odeur en ce moment devrait être extraordinaire: porc rôti, agrumes caramélisés et saindoux grillés. S'il ne vous donne pas envie de manger immédiatement, il a besoin de plus de couleur."
    }
  ]
};
