export default {
  "repoId": "master_german_sauerkraut_001",
  "parentRepoId": null,
  "slug": "sauerkraut",
  "author": "ForkRecipe Kitchen",
  "title": "Sauerkraut traditionnel",
  "description": "Le chou, le sel, le temps et la confiance — une fermentation bavaroise qui transforme une tête humble en quelque chose de tannant, de probiotique et de profondément vivant.",
  "cuisine": "Allemand",
  "culture": "Bavarois",
  "category": "fermented",
  "tags": [
    "fermenté",
    "allemand",
    "Choux",
    "probiotique",
    "préservation"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "14 days",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2024-05-15",
  "updatedAt": "2024-12-10",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 8,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Choux verts",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "chou rouge",
        "Choux savoy"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel marin non iodé",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "sel casher",
        "sel de décapage"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Graines de Carave",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "baies de genièvre"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mûr",
      "inputs": [
        "ing_01"
      ],
      "outputState": "shredded_cabbage",
      "instructions": "Quartez le chou et retirez le noyau. Couper chaque quart en minces rubans d'environ 3 mm de large. Homogénéité: ferment inégal à différents rythmes, créant des poches de croûte aux côtés de poches de mousse.",
      "visualCue": {
        "primaryTarget": "Un monticule de rubans uniformément minces, vert pâle, sans morceaux épais ni pièces de noyau attachées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des coins épais et des morceaux irréguliers. Certaines pièces sont de 1cm ou plus.",
            "action": "Prenez le temps de recouper. Les morceaux épais resteront durs tandis que les petits surferment."
          },
          {
            "state": "Perfect",
            "description": "Rubans minces cohérents, larges de 2 à 4 mm. Une poignée se sent légère et printanière.",
            "action": "Peser le chou et calculer le sel."
          },
          {
            "state": "Overdone",
            "description": "La consistance est réduite à une finesse presque râpée, presque de la pulpe.",
            "action": "Continuez, mais attendez-vous à un kraut plus doux et moins croquant."
          }
        ]
      },
      "feelCue": "Une bonne râpe ressort quand on presse une poignée. S'il s'effondre dans un amas humide, les morceaux sont trop fins."
    },
    {
      "nodeId": "step_2",
      "action": "Sel et massage",
      "inputs": [
        "shredded_cabbage",
        "ing_02",
        "ing_03"
      ],
      "outputState": "wilted_salted_cabbage",
      "instructions": "Mettre le chou déchiqueté dans un grand bol. Saupoudrer le sel et les graines de carvi uniformément sur le dessus. Massage avec les deux mains, serrer et pétrir fermement le chou. Le sel va puiser de l'eau dans les cellules. Continuer pendant 8-10 minutes jusqu'à ce que le chou se flétrisse significativement et se trouve dans sa propre saumure.",
      "visualCue": {
        "primaryTarget": "Le chou a réduit à la moitié de son volume. Un bassin de saumure nuageuse a été recueilli au fond du bol — assez pour submerger le chou lorsqu'il est emballé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le chou est encore raide et printanier. Seulement un mince film d'humidité sur les feuilles.",
            "action": "Continuez à masser. Partez pendant 10 minutes et revenez — le sel a besoin de temps pour osmoser. Et puis à nouveau knead."
          },
          {
            "state": "Perfect",
            "description": "Le chou est mou et translucide. Une généreuse piscine de saumure en bas. Quand vous pressez un poing, le liquide coule.",
            "action": "Emballez dans votre vaisseau de fermentation."
          },
          {
            "state": "Overdone",
            "description": "Le chou est presque bouché. Très humide.",
            "action": "C'est rare avec juste du sel — continuez. La texture sera plus douce mais la saveur fine."
          }
        ]
      },
      "feelCue": "Le chou se transforme sous vos mains, du croustillant au soyeux et mou. Vos mains seront taillées à partir de la saumure, ce qui signifie qu'il y a assez de sel et assez de liquide."
    },
    {
      "nodeId": "step_3",
      "action": "Boîte",
      "inputs": [
        "wilted_salted_cabbage"
      ],
      "outputState": "packed_vessel",
      "instructions": "Transférer le chou et toute sa saumure dans un pot en verre propre ou une roche céramique. Poussez-le en poignées avec votre poing, en emballer le plus étroitement possible. La saumure doit se lever au-dessus de la surface du chou. Placez un poids sur le dessus — un sac à fermeture éclair rempli de saumure fonctionne bien. Couvrir avec un chiffon pour éviter la poussière mais laisser échapper le gaz.",
      "visualCue": {
        "primaryTarget": "Le chou est submergé sous une couche de saumure d'au moins 2 cm de profondeur. Aucune feuille n'est exposée à l'air. Le poids est fermement en place.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le chou est en train de planter au-dessus de la saumure. Poches d'air visibles entre les couches.",
            "action": "Appuyez plus fort. S'il n'y a pas assez de saumure, dissoudre 1 c. à thé de sel dans 1 tasse d'eau et l'ajouter."
          },
          {
            "state": "Perfect",
            "description": "Tout le chou est submergé. La saumure est de 2-3cm au-dessus de la surface. Le poids est à son niveau.",
            "action": "Couvrir et placer dans un endroit frais (18-22 C) loin du soleil direct."
          },
          {
            "state": "Overdone",
            "description": "Le navire est rempli au bord d'une saumure débordante.",
            "action": "Enlevez une saumure — vous avez besoin d'espace pour le CO2 que la fermentation produira."
          }
        ]
      },
      "feelCue": "Lorsque vous appuyez sur le poids vers le bas et relâchez, la saumure devrait monter autour des bords. Si vous entendez un squuelch, le paquet est assez serré."
    },
    {
      "nodeId": "step_4",
      "action": "Fermenter",
      "inputs": [
        "packed_vessel"
      ],
      "outputState": "active_fermentation",
      "instructions": "Laisser à température ambiante (18-22 C) 3-14 jours, dégustation tous les deux jours après trois jours. Appuyez sur le poids vers le bas tous les jours et éjaculez toute écume de la surface. Le bouillonnement est un signe de fermentation active et saine.",
      "visualCue": {
        "primaryTarget": "De belles bulles se lèvent à travers la saumure quand le pot est tapé. La saumure est devenue trouble et légèrement effervescente. Le chou est passé de vert à une couleur de paille d'or muette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Jour 3: Pas de bulles, la saumure est encore claire, le chou est encore vert et croquant.",
            "action": "L'environnement peut être trop froid. Passez à un endroit plus chaud (20-22 C). Si aucune activité au jour 5, vérifiez que le sel n'a pas été iodé."
          },
          {
            "state": "Perfect",
            "description": "Stabilisez quand vous êtes agité. La saumure est trouble. Dégustation révèle une ameresse propre et acidulée avec croquant résiduel dans le chou.",
            "action": "Lorsque la saveur vous plaît, transfert au réfrigérateur pour arrêter la fermentation."
          },
          {
            "state": "Overdone",
            "description": "Très aigre, presque vinaigre. Le chou est très doux et olive-drabe de couleur. Peut-être un film rose ou flou sur la surface.",
            "action": "Skim n'importe quel moule (la levure de surface de kahm est inoffensive). Si c'est bon pour vous, c'est fait. Si trop aigre, utilisez-le dans des plats cuits où d'autres saveurs l'équilibreront."
          }
        ]
      },
      "feelCue": "Penchez-vous et reniflez — la fermentation précoce sent l'herbe fraîchement coupée, puis se déplace vers un agréable tang mariné. Si ça sent le putride ou les œufs pourris, ça a mal tourné. Un léger fizz sur la langue quand vous goûtez la saumure est le signe d'une lactation saine."
    }
  ]
};
