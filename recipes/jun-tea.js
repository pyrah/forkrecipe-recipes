export default {
  "repoId": "master_global_juntea_001",
  "parentRepoId": null,
  "slug": "jun-tea",
  "author": "ForkRecipe Kitchen",
  "title": "Jun Tea",
  "description": "Le cousin rare de kombucha — thé vert et miel cru fermenté avec un Jun SCOBY en quelque chose de floral, effervescent et délicatement aigre, avec une douceur de miel qui ne disparaît jamais tout à fait.",
  "cuisine": "Mondial",
  "culture": "Fermentation",
  "category": "fermented",
  "tags": [
    "fermenté",
    "végétalien",
    "Sans gluten",
    "thé",
    "Chérie",
    "probiotique",
    "boisson"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "10 days",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 0,
    "sour": 3,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Eau filtrée ou de source",
      "ratioValue": 2000,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Thé vert ou sachets de thé vert de haute qualité",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "sencha",
        "Dragonwell",
        "poudre verte"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Miel brut non filtré",
      "ratioValue": 160,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "Jun SCOBY (culture symbiotique de bactéries et de levures)",
      "ratioValue": 1,
      "defaultUnit": "piece",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Liquide de démarrage (précédent lot de thé Jun ou kombucha non aromatisé)",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "En option: gingembre, citron, fruits pour la deuxième fermentation aromatisante",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Streep",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "cooled_green_tea",
      "instructions": "Porter 1 litre d'eau filtrée à 80°C — sans bouillir. L'eau bouillante échaude le thé vert, le rendant amer. Penchez le thé vert pendant 3-4 minutes — ne dépassez pas cela ou le thé devient dur. Éteignez les feuilles ou retirez les sacs. Ajouter le reste de 1 litre d'eau à température ambiante pour refroidir le thé à moins de 35°C avant d'ajouter du miel. C'est essentiel: le miel ajouté au liquide chaud détruit les enzymes bénéfiques et les cultures probiotiques qu'il contient naturellement.",
      "visualCue": {
        "primaryTarget": "Une liqueur de thé vert or pâle, claire et délicate, avec un parfum floral herbacé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Jaune pâle avec à peine toute couleur. Bouche plate et aqueuse sans caractère thé.",
            "action": "Encore 1-2 minutes. Le thé vert extrait relativement rapidement à 80°C."
          },
          {
            "state": "Perfect",
            "description": "Vert doré pâle, clair et délicat. Arôme floral, frais, légèrement végétal. Des goûts de bon thé vert, pas amers, pas faibles. Température inférieure à 35°C après dilution.",
            "action": "Ajouter le miel cru et remuer jusqu'à dissolution complète."
          },
          {
            "state": "Overdone",
            "description": "Thé brun-ambre foncé qui goûte amer et astringent. L'eau était trop chaude ou le thé truffé trop longtemps.",
            "action": "Diluer avec de l'eau fraîche supplémentaire. L'amertume se calmera un peu pendant la fermentation mais ne disparaîtra pas complètement."
          }
        ]
      },
      "feelCue": "Testez le thé refroidi contre l'intérieur de votre poignet — il devrait se sentir à peine chaud ou à température ambiante, jamais chaud. Le miel ajouté au liquide chaud bénéficie encore, mais il est préférable de refroidir."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "cooled_green_tea",
        "ing_03"
      ],
      "outputState": "sweetened_tea",
      "instructions": "Une fois le thé refroidi à moins de 35°C, ajouter le miel cru. Mélanger doucement mais soigneusement jusqu'à dissolution complète — le miel cru se dissout plus facilement dans un liquide légèrement chaud qu'au froid. Le thé sucré doit goûter nettement et agréablement sucré — le SCOBY et les bactéries consommeront une grande partie de ce sucre pendant la fermentation, donc vous devez commencer par assez. Verser le thé sucré dans un pot en verre propre de 3 litres.",
      "visualCue": {
        "primaryTarget": "Un thé doux clair, vert doré, entièrement dissous sans stries de miel visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le miel est encore visible: il n'est pas complètement dissous. Le fond de la jarre peut avoir du miel.",
            "action": "Remuer plus vigoureusement. Si le thé est trop froid, le miel peut prendre 3-5 minutes pour se dissoudre complètement."
          },
          {
            "state": "Perfect",
            "description": "Limpide, vert doré et très doux. Une gorgée doit avoir un goût nettement sucré. Aucun résidu visible.",
            "action": "Ajouter le liquide de démarrage et SCOBY."
          },
          {
            "state": "Overdone",
            "description": "Trop de miel a été ajouté — le thé a un goût extrêmement doux, presque bouillant.",
            "action": "La fermentation consommera une grande partie du sucre, mais un début trop sucré peut entraîner une douceur résiduelle qui masque l'aurore. Diluer avec 200 ml de thé supplémentaire."
          }
        ]
      },
      "feelCue": "Goûtez le thé sucré — il devrait goûter comme une boisson de thé agréablement sucrée, florale et verte au miel. C'est avec ça que le Jun travaillera."
    },
    {
      "nodeId": "step_3",
      "action": "Ferment",
      "inputs": [
        "sweetened_tea",
        "ing_04",
        "ing_05"
      ],
      "outputState": "fermented_jun",
      "instructions": "Ajouter le liquide de démarrage d'abord — cela acidifie l'environnement immédiatement et protège contre les moisissures. Baissez doucement le SCOBY dans le pot (il peut couler, flotter ou angle latéralement — tous sont normaux). Couvrez le pot d'un tissu serré, d'un filtre à café ou d'une serviette en papier fixée avec une bande de caoutchouc — PAS un couvercle solide. Le ferment a besoin d'air. Placez-le à 21-27°C, hors de la lumière directe du soleil, et à l'écart des forts courants d'air ou autres ferments. Ferment pour 7-14 jours. Goûtez à partir du jour 5 en insérant une paille au-delà du SCOBY. Un nouveau SCOBY se formera à la surface — c'est normal et sain.",
      "visualCue": {
        "primaryTarget": "Un SCOBY couleur bronzée à la surface, des bulles fines actives s'élevant à travers le thé, et une nouvelle couche de gel se formant à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 3-4 jours: pas de bulles, pas de nouvelle couche de SCOBY formant, liquide encore très doux et pas aigre du tout.",
            "action": "Déplacez-vous dans un endroit plus chaud. Vérifiez que le liquide de démarrage est suffisamment acide. Débuts très doux ou températures froides significativement lentes Juin."
          },
          {
            "state": "Perfect",
            "description": "Jour 7-10 : Le Jun sent le vinaigre floral, lavé au miel. Bouche : nettement aigre, encore légèrement sucré, effervescent sur la langue. Une nouvelle couche SCOBY s'est formée. Les bulles sont actives lorsque vous perturbez la surface.",
            "action": "Fraise et bouteille immédiatement, ou ajouter des arômes pour la deuxième fermentation."
          },
          {
            "state": "Overdone",
            "description": "Très fortement aigre, presque entièrement non sucré. Fortement acide. SCOBY est très épais et le liquide a obscurci.",
            "action": "Soucher immédiatement et utiliser comme liquide de départ pour les futurs lots. Le Jun surfermenté peut être dilué avec du thé sucré frais pour boire."
          }
        ]
      },
      "feelCue": "Insérez une paille au-delà du SCOBY et goûtez au Jun — il devrait y avoir une belle et vive teinte sur la langue du CO2. S'il se sent plat, la fermentation peut avoir bloqué."
    },
    {
      "nodeId": "step_4",
      "action": "Bouteille",
      "inputs": [
        "fermented_jun",
        "ing_06"
      ],
      "outputState": "finished_jun_tea",
      "instructions": "Enlevez le SCOBY et réservez-le avec 200ml de Jun comme démarreur pour le prochain lot. Faites passer le Jun à travers un tamis à mailles fines dans des bouteilles swing-top propres. Pour une seconde fermentation (pour développer plus de carbone et de complexité): ajouter une petite quantité d'arôme optionnel à chaque bouteille — quelques tranches de gingembre, une bande de citron, une cuillère à soupe de jus de fruits. Scellez les bouteilles et laissez-les à température ambiante pendant 2-4 jours jusqu'à ce que la carbonation se développe (test quotidien en ouvrant doucement une bouteille). Puis réfrigérer pour arrêter la fermentation. Le Jun réfrigéré dure 2-4 semaines.",
      "visualCue": {
        "primaryTarget": "Flacons d'ambre clair à légèrement nuageux avec carbonation visible à l'ouverture. Une légère mousse s'élève de la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les bouteilles s'ouvrent sans fizz ni sifflement. Flat, toujours Jun sans seconde carbonation fermentée.",
            "action": "Re-sceller et laisser à température ambiante pendant encore 1-2 jours. Assurez-vous que les bouteilles sont complètement scellées."
          },
          {
            "state": "Perfect",
            "description": "Un sifflement satisfaisant quand la bouteille est ouverte. Verser légèrement. Le goût est floral, légèrement aigre, avec un dessous de miel. Une couleur jaune-ambre claire.",
            "action": "Réfrigérer et profiter en 2-4 semaines."
          },
          {
            "state": "Overdone",
            "description": "La bouteille éclate avec de la mousse à l'ouverture — surcarbonée. Risque d'explosion de bouteille. Un goût très aigre.",
            "action": "Ouvrir chaque jour pour relâcher la pression (bourrage). Réfrigérer immédiatement. La prochaine fois, réfrigérer après seulement 1 jour de seconde fermentation."
          }
        ]
      },
      "feelCue": "Le flacon scellé, deuxième fermentation doit se sentir ferme lorsqu'il est pressé (pour le plastique) - la résistance indique une carbonation active. Les bouteilles en verre doivent être ouvertes sur un évier en cas de débordement."
    }
  ]
};
