export default {
  "repoId": "master_french_roastedbeets_001",
  "parentRepoId": null,
  "slug": "roasted-beets",
  "author": "ForkRecipe Kitchen",
  "title": "Betteraves grillées au sel",
  "description": "Les betteraves entières enfouies dans du sel grossier et torréfiés peu et lentement jusqu'à ce que le sel attire l'humidité et que les sucres naturels de la betterave se concentrent dans une douceur intense et éclatante, une technique qui prend beaucoup plus de temps que le torréfaction des feuilles, mais produit une saveur qui est catégoriquement différente.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "vegetables",
  "tags": [
    "légumes",
    "français",
    "betteraves",
    "grillés",
    "végétalien",
    "Sans gluten",
    "végétarien",
    "sans produits laitiers"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "2 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Betteraves entières, non pelées, lavées (moyenne-grandes)",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "betteraves dorées",
        "betteraves à tourbe"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel de mer grossier ou sel de roche",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile d'olive extra vierge, pour le service",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "vinaigre de vin rouge ou balsamique, pour servir",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "salt_bedded_beets",
      "instructions": "Verser la moitié du sel grossier dans un plat de cuisson profond pour créer un lit de 2 cm. Nettoyez l'ensemble des betteraves non pelées sur le sel, en les espacant afin qu'elles ne touchent pas. Verser le sel restant sur et autour des betteraves pour les couvrir complètement — ils devraient être complètement enterrés sans surface de betterave visible. Le sel tire l'humidité lentement et crée un environnement de cuisson étanche et à température uniforme, concentrant les sucres bien plus que la torréfaction conventionnelle.",
      "visualCue": {
        "primaryTarget": "Betteraves complètement enfouies dans du sel sans surface rouge visible. La surface saline semble plate et non perturbée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les betteraves sont partiellement recouvertes, une peau rougeâtre encore visible à travers le sel.",
            "action": "Verser plus de sel pour couvrir complètement. Les surfaces exposées cuireont inégalement."
          },
          {
            "state": "Perfect",
            "description": "Enterrement complet, la surface du sel bombait légèrement sur l'emplacement de chaque betterave. On dirait un plat salé.",
            "action": "Faire cuire à 190 C (375 F) pendant 1,5 à 2 heures."
          },
          {
            "state": "Overdone",
            "description": "Le sel est empilé trop haut et il faudra beaucoup plus de temps pour se réchauffer.",
            "action": "Redistribuer pour créer une couverture de 2 à 3 cm partout. Plus n'est pas mieux."
          }
        ]
      },
      "feelCue": "Appuyez sur la surface du sel avec une main plate — il devrait se sentir solide et uniformément répandu, comme une plage ferme à marée basse. Pas de bosses ou d'espaces là où les betteraves sont assises."
    },
    {
      "nodeId": "step_2",
      "action": "Rôtis",
      "inputs": [
        "salt_bedded_beets"
      ],
      "outputState": "roasted_beets_in_salt",
      "instructions": "Faire cuire au four préchauffé 190 C (375 F) pendant 1 heure 30 minutes à 2 heures. Le sel durcit partiellement dans une croûte. Pour vérifier la cuisson, poussez une brochette en métal mince à travers le sel dans la plus grande betterave — elle devrait passer à travers sans résistance, comme pousser dans le beurre à température ambiante. Les petites betteraves prennent 80 minutes; les plus grandes peuvent nécessiter 2 heures 15 minutes.",
      "visualCue": {
        "primaryTarget": "La surface saline a partiellement croûté et a pris une faible teinte rose ou rouge où les jus de betterave ont lentement migré à travers elle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La brochette rencontre une résistance au centre: la betterave a encore un noyau dur et brut.",
            "action": "Continuez à rôtir. Retournez la brochette au trou pour éviter de laisser échapper la chaleur. Vérifiez toutes les 20 minutes."
          },
          {
            "state": "Perfect",
            "description": "La brochette traverse le centre sans aucune résistance. Une faible odeur douce et terreuse s'échappe quand la brochette est tirée. Le dessus du sel montre une teinte rose.",
            "action": "Retirer du four et laisser refroidir 15 minutes avant de fendre la croûte salée."
          },
          {
            "state": "Overdone",
            "description": "La brochette passe sans résistance mais il n'y a presque pas de vapeur lorsqu'elle est enlevée — la betterave a commencé à sécher à l'intérieur.",
            "action": "Supprimer immédiatement. La betterave est encore bonne; la saveur sera très concentrée et très douce."
          }
        ]
      },
      "feelCue": "Lorsque la brochette traverse le centre de façon propre, sentez la sortie de l'autre côté — il devrait y avoir une petite bouffée de vapeur chaude qui se lève du trou, signe d'un intérieur bien humide et entièrement cuit."
    },
    {
      "nodeId": "step_3",
      "action": "Peler",
      "inputs": [
        "roasted_beets_in_salt",
        "ing_03",
        "ing_04"
      ],
      "outputState": "finished_roasted_beets",
      "instructions": "Casser la croûte salée avec une cuillère et retirer les betteraves. La peau se détachera en gros morceaux à l'aide de vos doigts et d'une serviette en papier (vêtements si vous ne voulez pas tacher vos mains rouge profond pendant une journée). Tranche, quart, ou servir entier. Porter immédiatement avec de l'huile d'olive et quelques gouttes de vinaigre de vin rouge ou balsamique pour ajouter de la luminosité à la douceur concentrée.",
      "visualCue": {
        "primaryTarget": "Profondeur de chair de betterave rouge rubis, scintillement avec une légère vapeur qui monte encore. La chair doit avoir l'air dense et bijou sans taches pâles ou brutes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lorsqu'elle est coupée, la chair présente un anneau pâle autour du centre — la chaleur ne pénètre pas complètement. La betterave crue est crayeuse et à peine sucrée.",
            "action": "Retourner au four sans sel pendant 15 minutes."
          },
          {
            "state": "Perfect",
            "description": "Rouge rubis uniformément profond, arôme intensément doux, chair donnant et légèrement confiture au centre. La couleur est vive, pas terne.",
            "action": "Habillez et servez immédiatement pendant que vous êtes encore au chaud, ou refroidissez et conservez jusqu'à 3 jours."
          },
          {
            "state": "Overdone",
            "description": "La chair s'est séchée à l'anneau extérieur, apparaissant plus foncée que rubis, avec une texture légèrement cuireuse où la surface s'est desséchée.",
            "action": "Couper la couche externe et habiller fortement la chair intérieure d'huile d'olive pour la réhydrater."
          }
        ]
      },
      "feelCue": "Tenez une betterave pelée chaude – elle devrait vous paraître plus lourde que vous ne l'espérez, dense avec du jus, et légèrement fléchissante lorsqu'elle est pressée. Coupez-en un ouvert et respirez : l'arôme de terre intensément doux est la technique de la croûte de sel qui fonctionne au mieux."
    }
  ]
};
