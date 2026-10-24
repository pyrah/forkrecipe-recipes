export default {
  "repoId": "master_french_flamiche_001",
  "parentRepoId": null,
  "slug": "flamiche",
  "author": "ForkRecipe Kitchen",
  "title": "Flamiche aux Poireaux",
  "description": "Une tarte riche, à visage ouvert, aux poireaux et crèmes lentement ragoûtées, dans une coquille de pâté broyée, simple, réchauffante et profondément salée, la grande tarte aux poireaux du nord de la France.",
  "cuisine": "Français",
  "culture": "Français du Nord / flamand",
  "category": "proteins",
  "tags": [
    "tarte",
    "poireaux",
    "français",
    "crème",
    "pâtisserie"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "2 hr",
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
    "sour": 0,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre froid non salé (cube)",
      "ratioValue": 55,
      "defaultUnit": "parts",
      "substitutions": [
        "Saindoux"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Poireaux (parties blanches et vert pâle seulement, tranchés de 1 cm d'épaisseur)",
      "ratioValue": 120,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé (pour la cuisson des poireaux)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "Crème fraîche"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Protein",
      "name": "Gros œufs",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Dairy",
      "name": "Gruyère ou Comté (finement râpé)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "Beaufort"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Refroidissement",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "pate_brisee_shell",
      "instructions": "Dans un grand bol, mélanger la farine et le sel. Ajouter le beurre glacé et frotter rapidement entre les doigts jusqu'à ce que le mélange ressemble à des chapelures grossières et de taille de pois. Arroser dans l'eau froide glacée une cuillère à soupe à la fois, en mélangeant avec une fourchette jusqu'à ce que la pâte se réunisse sans être mouillée ou collante. Appuyez sur le disque, enveloppez le plastique et réfrigérez pendant 30 minutes. Rouler sur un cercle de 3 mm et tracer une boîte de tarte de 24 à 26 cm. Piquez la base avec une fourchette. Réfrigérer encore 15 minutes, puis cuire à l'aveugle à 190°C (375°F) doublé de parchemin et de haricots pendant 15 minutes; retirer les haricots et cuire encore 8-10 minutes jusqu'à ce que la base soit en or pâle et sertie.",
      "visualCue": {
        "primaryTarget": "Une coquille dorée pâle avec une base sèche, set et des bords nets et définis — pas de taches brutes visibles ou de rétrécissement des parois en étain.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La base a l'air pâle et brillante, elle est encore crue et pâteuse. Il fera bouillir une fois le remplissage ajouté.",
            "action": "Retourner au four sans les haricots pendant 5 minutes. La base doit être sèche et légèrement mate."
          },
          {
            "state": "Perfect",
            "description": "Couleur de crème dorée pâle, complètement réglée et sèche au toucher. Pas de rétrécissement. La base fait un léger craquement quand elle est tapée avec un ongle.",
            "action": "Laisser refroidir légèrement avant d'ajouter le remplissage."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brun foncé et légèrement brûlés. La base s'est rétrécie des côtés, laissant un vide.",
            "action": "Remplir et cuire immédiatement — la tarte est encore utilisable. Trim n'importe quel bord très sombre avec des ciseaux après la cuisson finale."
          }
        ]
      },
      "feelCue": "Lorsque vous appuyez légèrement sur la base après la cuisson à l'aveugle, elle doit se sentir ferme et sèche, avec un petit crack de résistance — pas doux ou souple."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_04"
      ],
      "outputState": "stewed_leeks",
      "instructions": "Laver soigneusement les poireaux tranchés dans l'eau froide et bien égoutter. Faire fondre le beurre dans une grande casserole à feu doux. Ajouter les poireaux avec une pincée de sel et remuer pour enrober. Cuire sur la chaleur la plus basse possible, couvert, pendant 20 à 25 minutes, en remuant de temps en temps, jusqu'à ce que les poireaux soient complètement doux, sucrés, et donnant — ils ne devraient avoir aucune morsure. Retirer le couvercle et cuire encore 5 minutes pour évaporer toute humidité restante. Les poireaux devraient avoir l'air translucides et soyeux, pas aqueux.",
      "visualCue": {
        "primaryTarget": "Levains qui se sont effondrés complètement dans des brins soyeux pâles, presque translucides, sans mise en commun de liquide visible dans la casserole.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les poireaux ont encore une couleur crue verte et résistent à la morsure. Il y a du liquide dans la casserole.",
            "action": "Continuer la cuisson couverte à feu doux. La longue cuisson douce est la seule façon de développer la douceur des poireaux."
          },
          {
            "state": "Perfect",
            "description": "Complètement doux, pâle, légèrement translucide. Doux plutôt que vif. Pas de liquide de mise en commun. Lorsqu'ils sont pressés avec une cuillère, ils n'offrent aucune résistance.",
            "action": "Retirer du feu et laisser refroidir légèrement avant de se combiner avec la crème."
          },
          {
            "state": "Overdone",
            "description": "Les poireaux sont musqués, légèrement brunâtres, et ont perdu leur texture distincte: ils sentent un peu de chou cuit.",
            "action": "Continuez. La saveur est encore bonne; la texture sera fine une fois cuit dans la crème."
          }
        ]
      },
      "feelCue": "Appuyez sur un fil de poireau entre les doigts — il devrait se désintégrer instantanément sans résistance filaire, complètement remis au beurre."
    },
    {
      "nodeId": "step_3",
      "action": "Whisk",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_04"
      ],
      "outputState": "leek_custard",
      "instructions": "Dans un bol, fouetter ensemble la crème, les œufs et la moitié du Gruyère jusqu'à ce qu'ils soient complètement combinés. Assaisonner généreusement de sel et de poivre blanc. Pliez les poireaux ragoûts refroidis dans le mélange de crème jusqu'à une distribution uniforme. Le mélange doit avoir l'air crémeux et cohésif, et non séparé.",
      "visualCue": {
        "primaryTarget": "Un mélange pâle et crémeux où les grains de poireaux sont entièrement enduits dans la crème aux œufs, sans réserve de liquide au fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les poireaux et la crème n'ont pas été mélangés — ils se séparent dans le bol. Les oeufs ne sont pas entièrement intégrés.",
            "action": "fouetter la crème et les œufs d'abord jusqu'à ce qu'ils soient combinés, puis plier dans les poireaux."
          },
          {
            "state": "Perfect",
            "description": "Un mélange cohésif et crémeux vert pâle. Les levains sont distribués partout. Sens de crème, de fromage et d'allium sucré.",
            "action": "Verser immédiatement dans la coquille et le dessus avec le reste de Gruyère."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a été stimulé trop vigoureusement et la crème s'est séparée ou les œufs ont commencé à mousser.",
            "action": "Continuez, peu importe: le four stabilisera la crème."
          }
        ]
      },
      "feelCue": "La crème doit couler d'une cuillère comme une crème visqueuse épaisse — lente et enduite, non aqueuse."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "pate_brisee_shell",
        "leek_custard"
      ],
      "outputState": "finished_flamiche",
      "instructions": "Versez la crème de poireau dans la coquille à poil aveugle. Dispersez le Gruyère restant uniformément à travers la surface. Placer sur une plaque de cuisson et cuire à 180°C (355°F) pendant 30 à 35 minutes, jusqu'à ce que la crème soit simplement mise avec seulement un très léger tremblement au centre, la surface est dorée, et le fromage a formé des taches de brun doré profond.",
      "visualCue": {
        "primaryTarget": "Une surface de tarte dorée, sertie de taches de fromage brun plus profond et d'un très faible galbe au centre même lorsque l'étain est légèrement secoué.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème est liquide au centre, elle s'enroule librement lorsque l'étain est déplacé. La surface est pâle et pas encore réglée.",
            "action": "Retournez pour 5 à 8 minutes de plus. Vérifiez toutes les 3 minutes — la transition entre le sous - mort et le parfait est rapide."
          },
          {
            "state": "Perfect",
            "description": "La surface est dorée avec des taches de fromage foncé. Les trois quarts extérieurs sont entièrement réglés. Le centre a encore un tremblement très doux — il sera ferme comme il repose. Des odeurs de beurre chaud et de gruyère.",
            "action": "Retirer du four et laisser reposer 15 minutes avant de trancher."
          },
          {
            "state": "Overdone",
            "description": "Custard a gonflé de façon spectaculaire et commence à craquer aux bords. La surface est très sombre. L'œuf a trop cuit et sera légèrement caoutchouteux.",
            "action": "Supprimer immédiatement. Il est encore comestible mais mieux mangé rapidement tout en restant chaud."
          }
        ]
      },
      "feelCue": "Lorsque vous touchez le centre de la tarte très doucement avec un bout de doigt, il devrait se sentir réglé mais donner une petite réponse tremblante sous la surface — comme de la gelée très ferme."
    }
  ]
};
