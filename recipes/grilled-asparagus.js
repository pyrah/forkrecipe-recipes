export default {
  "repoId": "master_italian_grilledasparagus_001",
  "parentRepoId": null,
  "slug": "grilled-asparagus",
  "author": "ForkRecipe Kitchen",
  "title": "Asperges grillées au citron et au parmesan",
  "description": "Des lances d'asperges épaisses sont roulées dans l'huile d'olive et grillées à feu vif jusqu'à ce que les bouts de la blister à une frange carbonisée et croustillante et que les tiges prennent de l'omble doux et fumé tout en restant suffisamment tendres pour se casser proprement — finies avec du citron vif et du parmesan rasé de noix.",
  "cuisine": "Italien",
  "culture": "Italien",
  "category": "vegetables",
  "tags": [
    "légumes",
    "Italien",
    "asperges",
    "grillé",
    "Vite",
    "Sans gluten",
    "végétarien"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 1,
    "bitter": 2,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Épaisseurs de lances d'asperges, extrémités boisées cassées",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "asperges minces (réduire de moitié le temps de grillage)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 25,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Parmesan, rasé",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Pecorino Romano",
        "levure nutritionnelle (vegan)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Citrus",
      "name": "Citron (zest et jus)",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel de mer blanc",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "Sel de maldon"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Poivre noir craqué",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_05"
      ],
      "outputState": "dressed_asparagus",
      "instructions": "Pliez chaque lance d'asperges doucement près de la base — elle va craquer naturellement au point où la fibre ligneuse laisse place à une tige tendre. Jeter les extrémités boisées (ou utiliser pour le stock). Mettre les lances dans l'huile d'olive jusqu'à ce que chacune glisse. Assaisonner de sel. Les asperges doivent être sèches avant d'ajouter de l'huile: toute eau va chauffer la grille du grill et les lances vont chauffer plutôt que l'omble.",
      "visualCue": {
        "primaryTarget": "Glisser les asperges uniformément enrobées sans taches sèches. De la même longueur, bien arrangé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les lances sont mouillées avec condensation ou enduites de façon inégale — certaines ont un réservoir d'huile, d'autres semblent sèches.",
            "action": "Pat bien sécher et re-toser avec de l'huile. Une huile inégale signifie une carbonisation inégale."
          },
          {
            "state": "Perfect",
            "description": "Chaque lance a une couche mince et uniforme d'huile, brillante partout sans goutte à goutte. On dirait qu'il a été poli.",
            "action": "Déposer immédiatement sur un grill très chaud."
          },
          {
            "state": "Overdone",
            "description": "Trop d'huile: les lances coulent. Cela provoquera des éruptions sur la grille.",
            "action": "Maintenez chaque lance au-dessus du bol et laissez couler l'excès. Une fine couche, pas une dranche."
          }
        ]
      },
      "feelCue": "Roulé dans l'huile, une lance asperges bien habillée doit se sentir glissante et lisse dans les doigts, mais pas dégoulinante — l'huile doit former un film continu, à peine visible."
    },
    {
      "nodeId": "step_2",
      "action": "Griller",
      "inputs": [
        "dressed_asparagus"
      ],
      "outputState": "grilled_asparagus",
      "instructions": "Placer les lances perpendiculaires aux grilles sur une grille très chaude ou sur une grille en fonte (préchauffée à chaud). Griller sans bouger de 2 à 3 minutes jusqu'à ce que les marques d'omble se développent, puis rouler à 90 degrés et griller encore 2 minutes. Les asperges doivent montrer de l'omble distinct aux marques du gril et les extrémités doivent être frisolées et cloquées. Durée totale de cuisson: 4-6 minutes pour les lances épaisses.",
      "visualCue": {
        "primaryTarget": "Des marques de grill foncées distinctes perpendiculaires à la longueur de la tige. Conseils frisolés et carbonisés. Stalk toujours vert vif entre les marques d'omble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Seulement des marques de grill jaune clair sans ombrage. Les asperges sont encore complètement rigides et savoureuses.",
            "action": "Augmenter la chaleur. Le grill doit être très chaud pour les asperges, il cuit rapidement et les chars encore plus vite."
          },
          {
            "state": "Perfect",
            "description": "Des marques d'omble foncé. Les conseils sont frisottis à une quasi-crisp. La tige entre les marques est vert vif et donne à la pression douce avec un léger coup. Des odeurs d'omble doux.",
            "action": "Transférer immédiatement dans une assiette et une robe."
          },
          {
            "state": "Overdone",
            "description": "Les asperges sont boiteuses et s'effondrent lorsqu'elles sont levées. Toute la surface est carbonisée, pas seulement les lignes de grill-marque. Ça sent l'acre.",
            "action": "Habillez rapidement avec le citron et servez - la saveur sous l'omble est encore bonne, et le citron l'éclaircira."
          }
        ]
      },
      "feelCue": "Faites rouler une lance d'asperges entre le pouce et le doigt au centre de la tige — une lance grillée parfaite se sentira ferme mais courbée légèrement sans craquer, avec un léger donner que les asperges brutes n'ont pas."
    },
    {
      "nodeId": "step_3",
      "action": "Dresser",
      "inputs": [
        "grilled_asparagus",
        "ing_03",
        "ing_04",
        "ing_06"
      ],
      "outputState": "finished_grilled_asparagus",
      "instructions": "Disposer les lances chaudes sur une assiette de service. Pressez généreusement le jus de citron sur tous et zestez le citron directement sur le dessus. Drapé rasé rubans de parmesan sur les lances tout en restant chaud afin qu'ils adoucissent légèrement. Cracher le poivre noir frais sur le dessus. L'acide et le sel du citron doivent être appliqués alors que l'asperge est encore assez chaude pour l'absorber.",
      "visualCue": {
        "primaryTarget": "Argiles d'asperges vertes marquées à l'ombre d'un charbon surmontées de rubans parmesan translucides, d'un éclat de jus de citron et d'un poivre noir.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sous-vêtements — semble sec et le parmesan n'a pas du tout ramolli sur les asperges.",
            "action": "Ajouter plus de jus de citron et laisser le parmesan reposer une autre minute pour adoucir avec la chaleur résiduelle."
          },
          {
            "state": "Perfect",
            "description": "Une présentation lumineuse et vivante. Rubans parmesan adoucis et légèrement translucides. Glisser avec du jus de citron et de l'huile. L'omble est visible. Ça sent la lumière et la noix.",
            "action": "Servir immédiatement — les asperges refroidissent rapidement et perdent leur vitalité."
          },
          {
            "state": "Overdone",
            "description": "L'asperge est restée trop longtemps assise — elle est devenue froide et boiteuse, le parmesan dur et non fondu.",
            "action": "Réchauffez brièvement sous un grill chaud pendant 1 minute, puis redressez avec du citron frais et du parmesan."
          }
        ]
      },
      "feelCue": "Mangez une lance immédiatement — le contraste entre la légère amertume char de la pointe et l'acide vif du citron et le parmesan salé et noisette est le point entier. Il devrait frapper par vagues: char, citron, umami."
    }
  ]
};
