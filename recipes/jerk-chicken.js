export default {
  "repoId": "master_jamaican_jerkchicken_001",
  "parentRepoId": null,
  "slug": "jerk-chicken",
  "author": "ForkRecipe Kitchen",
  "title": "Poulet jamaïcain",
  "description": "Charred outdoor, fumant à l'intérieur — scotch bonnet-feu, toutspice-heavy poulet sec qui cloques sur le grill et parfume tout pour dix pieds autour.",
  "cuisine": "Jamaïquen",
  "culture": "Jamaïquen",
  "category": "proteins",
  "tags": [
    "poulet",
    "Jamaïcain",
    "grillé",
    "épicé",
    "marinade",
    "Imbécile"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "5 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 2,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Morceaux de poulet désossé (jambes, cuisses, poitrines)",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "de poulet entiers"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Chili de bonnet écossais, tiges enlevées",
      "ratioValue": 3,
      "defaultUnit": "pcs",
      "substitutions": [
        "Piments de habanero"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Échalons, hachés approximativement",
      "ratioValue": 6,
      "defaultUnit": "pcs",
      "substitutions": [
        "oignons verts"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Feuilles de thym fraîches",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "Thym séché (utiliser la moitié de la quantité)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 6,
      "defaultUnit": "pcs",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Gingembre frais, pelé",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "gingembre moulu (5 g)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Baies entières, grillées et moulues",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "tous les poissons"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "moitié d'un bâton de cannelle, mélangé"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Sucre brun foncé",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brun léger",
        "mélasse"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari pour sans gluten"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Acid",
      "name": "Jus de chaux frais",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Fat",
      "name": "Huile neutre (canola ou légumes)",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "Huile d'olive"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "sel de mer fin"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "jerk_paste",
      "instructions": "Mélanger tous les ingrédients de la marinade dans un mélangeur ou un robot culinaire. Blitz à une pâte aromatique lisse et intense. Goûtez - le — il devrait être ardent, parfumé de tout l'aspice, et profondément salé. Régler le sel et la chaux. La couleur doit être un vert olive profond tacheté de rouge.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse et brun-vert foncé qui s'accroche à une cuillère sans goutter. Pas de gros morceaux visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "texture épaisse avec des fragments visibles d'herbe et de poivre; séparation huileuse au sommet.",
            "action": "Mélanger encore 30 secondes, en grattant les côtés. Ajoutez une touche d'huile pour l'aider à émulsifier."
          },
          {
            "state": "Perfect",
            "description": "Pâte dense et uniforme avec une surface légèrement brillante. Couleur vert-brun profond, arôme piquant du nez.",
            "action": "Procédez immédiatement au marquage et au revêtement du poulet."
          },
          {
            "state": "Overdone",
            "description": "Complètement liquéfié et mince — corps perdu et cohésion.",
            "action": "La marinade fonctionnera toujours; elle sera juste plus d'une saumure humide qu'une pâte. Réduire le temps de marinage d'une heure."
          }
        ]
      },
      "feelCue": "La pâte doit être assez épaisse pour être collée sur une cuillère. Lorsque vous le frottez entre vos doigts, il se sent lissé et dense — il devrait s'accrocher à votre peau et faire vos yeux arroser des volatiles."
    },
    {
      "nodeId": "step_2",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "jerk_paste"
      ],
      "outputState": "marinated_chicken",
      "instructions": "À l'aide d'un couteau tranchant, marquer les morceaux de poulet à l'os — trois coupes parallèles profondes par morceau permettent à la pâte de pénétrer. Porter des gants (l'huile de capot scotch est grave), masser la pâte de sourcil dans toutes les surfaces, y compris sous la peau si possible. Emballez fermement dans un sac à fermeture éclair ou un contenant scellé. Réfrigérer pendant au moins 4 heures; la nuit est idéale pour une pénétration complète de la fumée.",
      "visualCue": {
        "primaryTarget": "Poulet entièrement recouvert de pâte foncée. Les coupures ont ouvert légèrement et absorbé la couleur dans la chair.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est assise sur la surface sans pénétrer. Flèche sous la peau encore blanc rose.",
            "action": "Remassage, pression active de la pâte dans les marques de score. Plus longtemps."
          },
          {
            "state": "Perfect",
            "description": "La chair visible à travers les marques de score a pris une tache brun verdâtre de la marinade. La peau est foncée.",
            "action": "Tirez du réfrigérateur 30 minutes avant de griller pour enlever le froid."
          },
          {
            "state": "Overdone",
            "description": "Mariné plus de 24 heures — la chair à la surface a pris une texture musclée de l'acide.",
            "action": "Cuire comme prévu; l'intérieur sera encore bien. Réduire l'acide dans les futurs lots."
          }
        ]
      },
      "feelCue": "La pâte sur la chair marquée doit se sentir collante plutôt que mouillée — appuyez sur un doigt et les bâtons de marinade. Le poulet doit se sentir ferme, pas spongieux."
    },
    {
      "nodeId": "step_3",
      "action": "Grille",
      "inputs": [
        "marinated_chicken"
      ],
      "outputState": "grilled_jerk_chicken",
      "instructions": "Mettre en place un grill à deux zones : feu direct élevé d'un côté, milieu indirect de l'autre. Mettre la peau de poulet sur le côté indirect, couvert, pendant 25 à 30 minutes jusqu'à ce que la température interne atteigne 65°C. Puis passer à feu élevé direct, côté peau vers le bas, pendant 4–6 minutes à l'omble et blister l'extérieur. Flip et charrer le côté chair pendant 2 minutes. L'omble n'est pas une erreur — c'est le point.",
      "visualCue": {
        "primaryTarget": "Croûte acajou profonde avec de vraies marques d'omble et des taches noires cloquées aux bords marqués. La pâte a fondu à la peau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Marron pâle sans ombrage. La pâte a toujours l'air humide et verte. Peau douce et molle.",
            "action": "Continuer avec la chaleur directe. La réaction de Maillard et l'omble sont des événements de saveur critiques — ne vous précipitez pas à l'indirect trop tôt."
          },
          {
            "state": "Perfect",
            "description": "Char presque noir sur les crêtes et les bords. Une acajou profonde partout ailleurs. La peau craque quand elle est pressée. Température interne 74°C.",
            "action": "Transférer sur une planche à découper pour se reposer."
          },
          {
            "state": "Overdone",
            "description": "La surface est uniformément noire et amère. La chair aux points les plus fins est séchée à chamois.",
            "action": "Le salut par enlèvement de la couche extérieure brûlée — la chair en dessous devrait encore être juteuse. Servir avec de la chaux supplémentaire."
          }
        ]
      },
      "feelCue": "Appuyez sur la partie la plus épaisse de la cuisse — elle devrait donner fermement avec une résistance très légère, et non pas squishy. La croûte carbonisée doit se sentir sèche et rigide sous le bout des doigts, tandis que la chair en dessous ressort lentement."
    },
    {
      "nodeId": "step_4",
      "action": "Repos",
      "inputs": [
        "grilled_jerk_chicken"
      ],
      "outputState": "rested_jerk_chicken",
      "instructions": "Reposez le poulet sur une planche en bois, lâchement recouvert de papier, pendant 8-10 minutes. La température interne s'effondrera de 2 à 3 °C. Les jus, qui ont été conduits au centre par la chaleur, redistribuent à travers la viande. Ne pas couper tôt.",
      "visualCue": {
        "primaryTarget": "L'omble est terne jusqu'à un fini mat. Un petit bassin de jus d'épices foncé a été recueilli sous chaque morceau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Reposé moins de 5 minutes — les jus sont rose vif lorsqu'ils sont coupés.",
            "action": "Attendez. Le reste n'est pas facultatif."
          },
          {
            "state": "Perfect",
            "description": "Les jus sont transparents lorsque la cuisse est percée au point le plus épais. Flesh détendu et tirant légèrement loin de l'os.",
            "action": "Servir immédiatement avec du riz et des pois, des boulettes de fête ou en tranches de citron vert."
          },
          {
            "state": "Overdone",
            "description": "Reposé trop longtemps découvert — l'extérieur s'est refroidi et a perdu son craquelin.",
            "action": "Blast sous le grilleur pendant 60 secondes pour raviver la croûte d'omble."
          }
        ]
      },
      "feelCue": "Soulevez une cuisse — l'os doit se sentir lâche dans l'articulation. Lorsque vous coupez, la chair doit se séparer proprement avec un léger craquement de la croûte extérieure. L'odeur, c'est de la fumée de bois, de l'aspice et du scotch."
    }
  ]
};
