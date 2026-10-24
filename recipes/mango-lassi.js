export default {
  "repoId": "master_indian_mango-lassi_001",
  "parentRepoId": null,
  "slug": "mango-lassi",
  "author": "ForkRecipe Kitchen",
  "title": "Mango Lassi",
  "description": "La boisson fraîche de yaourt de Punjabi faite avec la mangue d'Alphonso mûre — épaisse, douce et légèrement goudronnée, avec la richesse de la laiterie refroidissant le palais comme rien d'autre par une journée chaude.",
  "cuisine": "Indiens",
  "culture": "Punjabi",
  "category": "beverages",
  "tags": [
    "indienne",
    "Mango",
    "yaourt",
    "boisson",
    "doux",
    "refroidissement"
  ],
  "difficulty": 1,
  "activeTime": "5 min",
  "totalTime": "10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 2,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Sweetener",
      "name": "Pâte de mangue Ripe Alphonso (Kesar frais ou en conserve)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Mangue d'Ataulfo mûre",
        "morceaux de mangues congelés, dégelés"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Yogourt plein gras, frais",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "kéfir lait entier",
        "yaourt de noix de coco"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Lait entier, froid",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "eau froide pour corps plus léger"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre ou miel",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "nectar d'agave"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Cardamome au sol (fraîchir à partir de gousses vertes)",
      "ratioValue": 0.01,
      "defaultUnit": "parts",
      "substitutions": [
        "une bande de cardamome trempée et enlevée"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Eau de rose",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": [
        "eau de fleur d'orange"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Pince de fils de safran, fleuri dans 1 c. à thé de lait chaud",
      "ratioValue": 0.005,
      "defaultUnit": "parts",
      "substitutions": [
        "pincée de curcuma pour la couleur"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Bloom",
      "inputs": [
        "ing_07"
      ],
      "outputState": "bloomed_saffron",
      "instructions": "Crumblez une petite pincée de fils de safran dans une cuillère à café de lait chaud (sans bouillir) ou d'eau. Mélanger et laisser tremper pendant 5 minutes. Le liquide deviendra doré-orange et la pièce se remplira d'un parfum légèrement floral et miellé. Cette brève floraison extrait à la fois la couleur et les composés aromatiques qu'un mélangeur seul ne peut pas libérer. Si vous utilisez de la pulpe de mangue en conserve (qui est déjà en or profond), vous pouvez sauter cette étape — le safran est avant tout un fleuron de luxe.",
      "visualCue": {
        "primaryTarget": "La petite quantité de lait a tourné un orange doré vif du safran; les fils eux-mêmes se sont adoucis et libèrent la couleur uniformément lorsqu'ils sont remués.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est encore pâle; les fils de safran semblent secs et n'ont pas complètement libéré la couleur.",
            "action": "Attendez encore 2-3 minutes; la floraison est passive — ne la précipitez pas avec du liquide bouillant."
          },
          {
            "state": "Perfect",
            "description": "Liquide orangé d'or vif; les fils sont plumés et teintés d'orange pâle; l'arôme est nettement floral et sucré au safran.",
            "action": "Réserver jusqu'au mélange."
          },
          {
            "state": "Overdone",
            "description": "Le liquide s'est refroidi; aucun mal n'a été fait — le safran ne brûle pas dans le liquide. Le sursaut du liquide chaud ne fait qu'approfondir légèrement la couleur.",
            "action": "Utiliser comme-est."
          }
        ]
      },
      "feelCue": "Une suspension de safran bien fleurie sent comme du miel chaud qui rencontre une prairie de fleurs sauvages, une odeur qui se sent chère et ensoleillée. Si vous ne sentez rien, le safran peut être vieux ou falsifié."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "bloomed_saffron"
      ],
      "outputState": "blended_lassi",
      "instructions": "Mélanger la pâte de mangue, le yogourt froid, le lait froid, le sucre, la cardamome et l'eau de rose dans un mélangeur. Ajouter le safran fleuri et tout son liquide. Mélanger en haut pendant 60 à 90 secondes jusqu'à ce qu'il soit complètement lisse, mousseux et homogène. Goûtez et ajustez : ajoutez plus de sucre si la mangue est tarte, plus de yogourt si vous voulez un résultat plus épais, plus tannant, ou un éclaboussure de lait si vous préférez le verser comme une boisson plutôt que d'être mangé avec une cuillère. Servir immédiatement ou réfrigérer jusqu'à une heure — plus longtemps et la mousse s'effondre et la mangue peut se séparer.",
      "visualCue": {
        "primaryTarget": "Une boisson épaisse, mousseuse, dorée-orange vive avec un bouchon de mousse riche; pas de morceaux visibles de mangue ou de stries de yogourt blanc; la couleur est uniforme mangue-or.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est grumelé; le yogourt blanc est visible; le mélangeur a couru pendant trop peu de temps.",
            "action": "Mélanger encore 30 à 60 secondes en haut jusqu'à ce qu'il soit parfaitement lisse."
          },
          {
            "state": "Perfect",
            "description": "Épais, homogène, doré et mousseux; verse lentement; goût équilibré entre la mangue douce et le yogourt tanné avec un lift floral cardamome.",
            "action": "Verser dans de grands verres sur de la glace ou servir au frais."
          },
          {
            "state": "Overdone",
            "description": "Mélangeé si longtemps, la mousse a déjà commencé à dégonfler; la température a augmenté et le lassi goûte chaud et plat.",
            "action": "Ajouter une petite poignée de glace, mélanger pendant 10 secondes pour re-froidir et re-froth."
          }
        ]
      },
      "feelCue": "Le lassi doit verser comme un épais milkshake — pas aussi liquide que le jus, pas aussi solide que le smoothie. Elle doit recouvrir légèrement l'intérieur du verre avant de glisser. Un bon lassi est assis en bouche un moment avant de refroidir la gorge."
    },
    {
      "nodeId": "step_3",
      "action": "Refroidissement",
      "inputs": [
        "blended_lassi"
      ],
      "outputState": "chilled_lassi",
      "instructions": "Si vous servez immédiatement, verser dans des verres réfrigérés sur quelques cubes de glace. Si vous avancez, passez sur un pichet, couvrez et réfrigérez jusqu'à 1 heure. Donnez au pichet une secousse vigoureuse ou un remuant de 10 secondes avant de verser, car la pulpe de mangue et le yogourt peuvent se déposer en couches. Le lassi devrait arriver à la table assez froid pour brouiller le verre — tout son but est le soulagement thermique.",
      "visualCue": {
        "primaryTarget": "Un grand verre emboîté de boisson d'or dense; condensation se formant à l'extérieur; un faible bouchon de mousse pâle de mousse de mousse; colorer un riche or safran-mango.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lassi est à température ambiante ou légèrement frais; la mousse s'est effondrée; le verre n'est pas froid.",
            "action": "Ajouter la glace et réfrigérer les verres pendant 5 minutes avant de servir."
          },
          {
            "state": "Perfect",
            "description": "Profondément froid, condensation sur le verre, encore mousseux au sommet, couleur dorée vive.",
            "action": "Servir immédiatement et boire lentement."
          },
          {
            "state": "Overdone",
            "description": "Séparé après plus de 2 heures au réfrigérateur; couche supérieure mince et aqueuse, solides de mangue coulés.",
            "action": "Reremplir pendant 20 secondes avant de servir."
          }
        ]
      },
      "feelCue": "Tenez le verre un moment — vous devriez sentir le froid immédiatement à travers le verre. Sur la première gorgée, le froid frappe d'abord, puis la douceur fleurit, puis le yaourt tang arrive à l'arrière de la gorge. Cette séquence est tout le point."
    }
  ]
};
