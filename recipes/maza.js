export default {
  "repoId": "master_ancient_greek_maza_001",
  "parentRepoId": null,
  "slug": "maza",
  "author": "ForkRecipe Kitchen",
  "title": "Maza",
  "description": "L'épine dorsale sans levain de l'ancienne table grecque — la farine d'orge grossièrement rôtie pétrie avec peu plus que l'eau, l'huile et le sel, puis cuite sur une pierre dans un cake dense et noisette. C'était le pain quotidien des paysans, des soldats et des philosophes.",
  "cuisine": "Grec ancien",
  "culture": "Égée",
  "category": "breads",
  "tags": [
    "Maza",
    "ancien-greek",
    "orge",
    "Pain plat",
    "sans levain",
    "ancestral",
    "végétalien"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hour",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Graines d'orge (à coque, pour rôtir et broyer)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "farine d'orge hachée en pierre (piquer le rôti et le grind, faire griller la farine à sec)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude",
      "ratioValue": 70,
      "defaultUnit": "%",
      "substitutions": [
        "vin arrosé pour une touche ancienne"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel de mer",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 8,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Miel (facultatif, pour un gâteau plus riche)",
      "ratioValue": 5,
      "defaultUnit": "%",
      "substitutions": [
        "omit pour le pain du soldat"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Graines de sésame grillées",
      "ratioValue": 6,
      "defaultUnit": "%",
      "substitutions": [
        "graines de coriandre moulues",
        "omit"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "roasted_barley",
      "instructions": "Étendre les grains d'orge décortiqués dans une poêle sèche et lourde à feu moyen et faire griller, agiter et remuer constamment, pendant 8 à 12 minutes. Les grains s'assombrissent de la paille pâle à un bronzage chaud et jettent un arôme de maïs soufflé et noisette — ce rôtissage (l'ancien procédé ?lphita) est ce qui donne à Maza sa saveur torréfié signature et était traditionnellement comment le grain a été préparé avant le fraisage. Laisser refroidir complètement avant de broyer.",
      "visualCue": {
        "primaryTarget": "Les grains sont un tandem d'or uniforme, brillant et sec, sentant fortement les noix grillées et la croûte de pain frais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore pâles et la poêle sent peu grainé, comme les céréales crues.",
            "action": "Continuez à griller et à remuer. La couleur et l'arôme se développent soudainement vers la fin — ne vous en allez pas."
          },
          {
            "state": "Perfect",
            "description": "Un bronzage chaud uniforme, avec quelques grains qui commencent à peine à montrer des taches de rousseur plus foncées et un parfum riche et noisette qui remplit la cuisine.",
            "action": "Astucez immédiatement sur une plaque froide pour arrêter la chaleur de report, et refroidissez complètement avant de meuler."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont brun foncé à brûlé, l'arôme aigu et acride, et l'amertume s'est installée.",
            "action": "Jetez tout grain noir et réduisez la chaleur pour le prochain lot — l'orge brûlée rendra le goût entier du maza dur."
          }
        ]
      },
      "feelCue": "Un grain fini s'éclabousse et se brise entre les dents plutôt que de mâcher doucement. La casserole semble active avec un tic-tac doux constant comme la chaleur des grains."
    },
    {
      "nodeId": "step_2",
      "action": "Grind",
      "inputs": [
        "roasted_barley"
      ],
      "outputState": "barley_meal",
      "instructions": "Mâcher l'orge torréfié refroidie à un repas grossier dans un mortier, un moulin à main ou une grindeuse à impulsions — vise une texture entre la farine fine et la farine de maïs, avec un peu de grain laissé dedans. Le maza ancien était délibérément grossier, pas soyeux; ce corps rustique fait partie de son caractère. Eliminez seulement les plus grandes coques non brisées.",
      "visualCue": {
        "primaryTarget": "Un repas brun pâle avec une texture sablonneuse légèrement inégale — farine-fine en partie mais flanquée de petits grains craquelés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le repas est plein de grains entiers et à peine croqués et ne tiendra pas ensemble lorsqu'il sera mouillé.",
            "action": "Continuez à broyer par lots. Il vous faut assez de farine fine pour lier les morceaux plus grossiers."
          },
          {
            "state": "Perfect",
            "description": "La plupart du temps, le repas est fin, avec une généreuse dispersion de grain, comme du sable humide — assez grossier pour se sentir, assez fin pour s'écraser lorsqu'il est pressé.",
            "action": "Passez au mélange de la pâte."
          },
          {
            "state": "Overdone",
            "description": "Le repas est une poudre fine uniforme sans grain.",
            "action": "Toujours utilisable, le gâteau sera plus dense et plus doux. Mélangez une cuillère d'orge fissurée si vous voulez récupérer la texture traditionnelle."
          }
        ]
      },
      "feelCue": "Frotter entre les doigts le repas est sableux et sec, jamais poudreux comme de la farine de blé, et sent le pain grillé."
    },
    {
      "nodeId": "step_3",
      "action": "Pétrir",
      "inputs": [
        "barley_meal",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "maza_dough",
      "instructions": "Dissoudre le sel (et le miel) dans l'eau chaude. Astucez le repas d'orge dans un bol, ajoutez l'huile d'olive et le sésame, puis versez dans le liquide et tricotez-le avec vos mains. L'orge n'a presque pas de gluten, donc cela ne deviendra jamais une pâte élastique lisse — au lieu de pétrir juste jusqu'à ce qu'il forme une masse cohésive, dense, légèrement collante qui tient une forme. Appuyez ensemble pendant une minute ou deux; le surmenage ne fait que le sécher. Laisser reposer 10 minutes pour que le repas s'hydrate complètement.",
      "visualCue": {
        "primaryTarget": "Une pâte rigide et argileuse qui se maintient en une seule masse, mate et bronzée, avec des taches de sésame et de grain visibles partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est émietté et sec, se brise et refuse de se regrouper en une seule masse.",
            "action": "Ajouter l'eau tiède une cuillère à café à la fois et continuer à presser — l'orge boit lentement, alors donnez-lui un moment entre les ajouts."
          },
          {
            "state": "Perfect",
            "description": "Une pâte dense et souple qui tient une empreinte digitale, se sent à peine collante, et forme une boule lisse sans craquer aux bords.",
            "action": "Reposez-le brièvement, puis formez-vous en un plat rond ou en petits gâteaux."
          },
          {
            "state": "Overdone",
            "description": "La pâte est humide, lâche, et colle à tout, s'écroulant plutôt que de tenir sa forme.",
            "action": "Travailler dans un peu plus de farine d'orge jusqu'à ce qu'il ferme jusqu'à une consistance moulageable."
          }
        ]
      },
      "feelCue": "Il devrait se sentir comme de l'argile douce à modeler — lourde et dense, tenant la forme dans laquelle vous la pressez, avec aucun de l'arrachage printanier d'une pâte de blé."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "maza_dough"
      ],
      "outputState": "finished_maza",
      "instructions": "Placer la pâte dans un rond plat d'environ 1,5 cm d'épaisseur (ou plusieurs petits gâteaux) et cuire sur une pierre chaude ou dans une poêle sèche à feu moyen, 6 à 9 minutes de chaque côté, jusqu'à ce que la surface soit ferme et roussée de taches dorées. Sans le levain, il reste dense et plat — un gâteau à crêpes copieux plutôt qu'un pain moelleux. Mangez au chaud avec l'huile d'olive et le miel, ou laissez-le refroidir et emballez-le pour la route comme les anciens.",
      "visualCue": {
        "primaryTarget": "Un gâteau ferme, plat avec une croûte sèche, légèrement croustillante marbrée d'or profond, l'ensemble intérieur et tendre mais dense dans l'ensemble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est pâle et douce et le centre est encore humide et pâteux lorsqu'il est pressé ou fendu.",
            "action": "Baissez légèrement le feu et continuez à cuisiner — une poêle trop chaude brunit l'extérieur avant les ensembles intermédiaires denses."
          },
          {
            "state": "Perfect",
            "description": "Doré et ferme au robinet, avec un centre qui est cuit à travers, tendre, et vapeur mais pas plus humide.",
            "action": "Tirez - le et laissez - le refroidir quelques minutes avant de déchirer; il se ferme comme il se repose."
          },
          {
            "state": "Overdone",
            "description": "La croûte est sombre et dure, les bords s'écroulent en miettes sèches, et le gâteau entier ressemble à une brique.",
            "action": "Enveloppez - le brièvement dans un chiffon humide pour l'assouplir, le briser et le tremper dans le bouillon ou le vin arrosé comme un porridge — exactement comment les restes ont été utilisés."
          }
        ]
      },
      "feelCue": "Entassés sur le fond, ils semblent fermes et un peu creux; déchirés, ils devraient être denses et légèrement humides, jamais gommés. La croûte porte une odeur de noix, légèrement sucrée, grillée à l'orge."
    }
  ]
};
