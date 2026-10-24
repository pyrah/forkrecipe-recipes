export default {
  "repoId": "master_japanese_japanesemisogleazedcod_001",
  "parentRepoId": null,
  "slug": "japanese-miso-glazed-cod",
  "author": "ForkRecipe Kitchen",
  "title": "Cod noir miso-glacé japonais",
  "description": "La morue noire marinée pendant trois jours dans une pâte de miso blanc doux jusqu'à ce que la chair soit parfumée à l'os, puis grillée jusqu'à ce que la glaçure caramélise à une surface laquée de façon éclatante sur des poissons doux au beurre.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "seafood",
  "tags": [
    "Produits de la mer",
    "Sans gluten",
    "Japonais",
    "miso",
    "morue",
    "glaçure",
    "poulet"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "72 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filets de morue noire (sablefish), avec peau",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "Bar chilien",
        "saumon"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Pâte de miso blanche (shiro miso)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "miso jaune (légèrement moins sucré)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Mirin",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Mâcher",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "sherry sec"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Garnish",
      "name": "Gingembre mariné (gari)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Oignon vert tranché finement",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "miso_marinade",
      "instructions": "Dans une petite casserole, mélanger le mirin et le saké. Porter à ébullition à feu moyen pendant 1 minute pour faire cuire l'alcool. Réduire le feu à faible et fouetter dans le miso blanc et le sucre jusqu'à ce qu'il soit complètement lisse. Cuire en remuant pendant 2 à 3 minutes jusqu'à ce que le mélange soit brillant et épais. Retirer de la chaleur et refroidir complètement à la température ambiante avant d'utiliser — ajouter la marinade chaude au poisson commencera à cuire l'extérieur prématurément.",
      "visualCue": {
        "primaryTarget": "Pâte de caramel lisse et brillante qui coule lentement d'une cuillère dans un ruban épais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La marinade est fine et aqueuse; le sucre n'a pas complètement dissous.",
            "action": "Continuer la cuisson à feu doux pendant 2 minutes, en fouettant constamment."
          },
          {
            "state": "Perfect",
            "description": "Pâte épaisse, lisse, brillante — consistance d'un épais beurre d'arachide. Couleur de couleur tane d'or profonde. Goûte sucré-sel-umami dans une mesure égale.",
            "action": "Laisser refroidir complètement avant d'appliquer sur le poisson."
          },
          {
            "state": "Overdone",
            "description": "Marinade a brûlé sur le fond et sent légèrement brûlé; miso a caramélisé au-delà de son idéal.",
            "action": "Entraînez-vous à travers une maille fine; la partie supérieure est probablement récupérable. Réduire le temps de cuisson du prochain lot."
          }
        ]
      },
      "feelCue": "La marinade doit se sentir épaisse et collante lorsqu'elle est frottée entre les doigts — plus comme une pâte qu'un liquide, avec un doux parfum miso qui est incomparablement japonais."
    },
    {
      "nodeId": "step_2",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "miso_marinade"
      ],
      "outputState": "marinated_cod",
      "instructions": "Enrobez chaque filet de morue généreusement de tous les côtés avec la marinade miso refroidie. Placer dans un récipient, bien sceller et réfrigérer pendant 2 à 3 jours (48 à 72 heures). La longue marination est la signature de cette préparation — le sel dans le miso puise doucement l'humidité du poisson tandis que les sucres et les composés de l'umami se diffusent profondément dans la chair. Après la marination, le poisson sera notamment plus ferme et plus aromatisé.",
      "visualCue": {
        "primaryTarget": "Après 72 heures : le filet est fortement recouvert d'une croûte de miso épaisse et foncée. La marinade a visiblement épaissi sur la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après seulement 24 heures : la marinade est encore mince et l'intérieur du poisson n'a pas été affecté. La glaçure ne se comportera pas correctement.",
            "action": "Faire mariner pendant au moins 48 heures; 72 est la cible."
          },
          {
            "state": "Perfect",
            "description": "À 72 heures : la marinade est épaisse et posée à la surface du poisson. Le poisson est plus ferme et plus dense que le poisson frais. La couleur s'est approfondie à un caramel-tan.",
            "action": "Écraser l'excès de marinade avant de griller — le résidu brûlera, et non pas caramélisera."
          },
          {
            "state": "Overdone",
            "description": "Au-delà de 4 jours : le sel a sur-confirmé la chair, qui se sent comprimée et dense plutôt que souple.",
            "action": "Cuire immédiatement; la texture sera plus dense mais la saveur sera exceptionnelle."
          }
        ]
      },
      "feelCue": "Un filet de morue noire bien mariné devrait se sentir comme un gel ferme quand vous le pressez — le remède miso sel a serré les protéines juste assez pour tenir leur forme quand touché."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "marinated_cod",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_miso_cod",
      "instructions": "Retirer les filets de morue de la marinade et essuyer la plupart (pas tous) du miso avec vos doigts ou une spatule. Une fine couche doit rester. Déposer la peau sur une plaque de cuisson légèrement huilée. Faire griller au plus haut niveau du four (230-260°C) pendant 8-10 minutes, en regardant constamment. La miso glaçure va s'assombrir considérablement et certaines sections seront presque brûlées — c'est la réaction de Maillard et la caramélisation des sucres, et c'est le résultat correct. Le poisson se fait lorsque la glaçure est profondément caramélisée et que la chair s'écaille lorsqu'une fourchette est pressée au point le plus épais. Servir avec du gingembre et de l'oignon vert.",
      "visualCue": {
        "primaryTarget": "Glaçage acajou profond aux reflets caramélisés brun et noir — couleur dramatique, presque alarmante à la surface, avec chair blanc ivoire juste visible sous la croûte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La glace est encore jaune doré pâle et n'a pas caramélisé. L'intérieur des poissons est sous-désigné.",
            "action": "Retour à la grille pour 2–3 minutes de plus – la transition de la sous-doine à la parfaite est rapide."
          },
          {
            "state": "Perfect",
            "description": "Glaze est un spectaculaire caramel brun foncé à presque noir avec des reflets brûlés. Les poissons s'étalent dans de grandes sections beurrées à la fourchette. La peau est fraîche. La chair est incroyablement riche et douce.",
            "action": "Servir immédiatement avec du gingembre mariné et des oignons verts."
          },
          {
            "state": "Overdone",
            "description": "La glace s'est entièrement noircie et sent le carbone pur plutôt que le caramel sucré; la peau a séché à une coquille dure.",
            "action": "Retirer, laisser reposer 1 minute, et gratter doucement la couche supérieure de l'omble — la chair en dessous est probablement encore excellente."
          }
        ]
      },
      "feelCue": "Le filet fini devrait s'effondrer sous la pression de fourche la plus douce, se briser en grands flocons blancs brillants qui semblent presque translucides au centre — l'expression ultime du poisson à sable riche en gras à son sommet."
    }
  ]
};
