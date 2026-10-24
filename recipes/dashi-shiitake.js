export default {
  "repoId": "master_japanese_dashishiitake_001",
  "parentRepoId": null,
  "slug": "dashi-shiitake",
  "author": "ForkRecipe Kitchen",
  "title": "Shiitake Dashi",
  "description": "Dashi vegan clair ambre à l'aide de shiitake séché — umami terreux profond avec une finition propre qui rend kombu dashi goût brash en comparaison. L'épine dorsale de la cuisine japonaise shojin ryori et végétarienne.",
  "cuisine": "Japonais",
  "culture": "Washoku végétarien",
  "category": "stocks",
  "tags": [
    "Dashi",
    "végétalien",
    "Japonais",
    "umami",
    "shiitake",
    "végétarien",
    "shojin",
    "froid et profond"
  ],
  "difficulty": 1,
  "activeTime": "5 min",
  "totalTime": "8 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Champignons shiitake entiers séchés",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "porcin séché (différent caractère)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau filtrée à froid",
      "ratioValue": 1,
      "defaultUnit": "L",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Glutamate",
      "name": "Kombu (facultatif, 5cm pièce)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "varech séché"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel de mer fin (pour finition)",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "sauce soya légère (ajouter la couleur)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuse",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "cold_steeped_dashi",
      "instructions": "essuyer délicatement les bouchons de shiitake avec un chiffon sec pour enlever toute poussière — ne pas les laver, car l'eau dilue les glutamates de surface. Placer le shiitake (et le kombu, s'il l'utilise) dans un pot en verre ou un contenant non réactif et couvrir d'eau filtrée froide. Sceller et réfrigérer pendant au moins 8 heures et jusqu'à 24 heures. L'extraction à froid dégage des composés de guanylate que la chaleur détruit, produisant un umami plus propre et plus complexe que toute méthode rapide à chaud.",
      "visualCue": {
        "primaryTarget": "Après 8 heures, l'eau est devenue un ambre profond à brun pâle, assez clair pour lire le texte, avec un léger parfum de sol forestier quand le couvercle est levé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est encore presque clair — de l'or pâle au plus — après seulement 3-4 heures. L'extraction de l'umami est incomplète.",
            "action": "Retournez au réfrigérateur. Le dashi chiitake ne peut pas être précipité — le froid en dessous de 10°C nécessite au moins 8 heures."
          },
          {
            "state": "Perfect",
            "description": "Riche ambre, complètement clair, avec un parfum boisé-doux. Les champignons ont doublé de taille et se sentent plombés et productifs.",
            "action": "Retirer les champignons (les presser doucement — le liquide est important) et procéder au chauffage."
          },
          {
            "state": "Overdone",
            "description": "Après 48 heures et plus à température ambiante : odeur amère, boueuse, légèrement fermentée.",
            "action": "Le froid réfrigéré peut durer 24 heures en toute sécurité. S'il est laissé à température ambiante au-delà de 12 heures, jeter et redémarrer."
          }
        ]
      },
      "feelCue": "Soulevez un shiitake réhydraté et appuyez-le entre deux doigts — il devrait se sentir plumé et donner comme une éponge humide, libérant du liquide ambre lorsqu'il est pressé. Réservez ces champignons pour la soupe miso, les plats de riz, ou le braisage."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "cold_steeped_dashi"
      ],
      "outputState": "heated_dashi",
      "instructions": "Transférer le liquide à froid dans une petite casserole. Chauffer à feu doux, surveiller attentivement. Portez à 60-70°C — juste au-dessous d'une mijoteuse, où s'élèvent des spores de vapeur et de petites bulles se forment au fond de la casserole, mais la surface reste immobile. Maintenez cette température pendant 5 minutes. Ne la laissez jamais bouillir : un ébullition complet entraîne des aromatiques volatils, rend le dashi trouble, et introduit une note dure et amère de la panne de guanylate.",
      "visualCue": {
        "primaryTarget": "Petites bulles stationnaires pointent le fond de la poêle. La vapeur s'élève en paresseux. La couleur s'approfondit très légèrement jusqu'à un ambre plus chaud. La surface est complètement calme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est à peine chaud. La vapeur ne se lève pas. Moins de 60°C.",
            "action": "Augmenter légèrement la chaleur. Utilisez un thermomètre si vous n'êtes pas sûr — cette étape récompense la précision."
          },
          {
            "state": "Perfect",
            "description": "60-70°C. Surface calme, fines bulles sur le fond du pot, vapeur douce et stable. Sentez chaudement de champignon et de mer.",
            "action": "Procéder à la déformation dans les 5 minutes."
          },
          {
            "state": "Overdone",
            "description": "Faire mijoter ou bouillir. La surface est agitée. Broth est devenu nuageux.",
            "action": "Retirer immédiatement du feu. Laisser refroidir légèrement. Le dashi est encore utilisable mais sera moins raffiné."
          }
        ]
      },
      "feelCue": "Tenez votre main à quelques centimètres au - dessus de la surface — vous devriez sentir une chaleur douce, mais pas un souffle de vapeur. Une température où vous pourriez garder votre poignet dans le liquide pendant trois secondes complètes avant de tirer en arrière."
    },
    {
      "nodeId": "step_3",
      "action": "Poignée",
      "inputs": [
        "heated_dashi",
        "ing_04"
      ],
      "outputState": "shiitake_dashi",
      "instructions": "Étaler une passoire fine avec un chiffon de mousseline humide et la placer sur un bol propre. Déposer le dashi en douceur — verser de hauteur l'aérer et diminuer la délicatesse. Jeter tout sédiment restant dans le muslin. Assaisonner avec une pincée de sel, goûter et ajuster. Le dashi doit avoir un goût propre, profondément salé et légèrement sucré avec une finale longue et douce. Utiliser immédiatement ou réfrigérer jusqu'à 4 jours.",
      "visualCue": {
        "primaryTarget": "Un liquide ambré brillant et clair, exempt de toute nuance ou particule. La couleur ressemble à un thé ambre faible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Dashi est trouble ou trouble. Sédiment visible lorsqu'il est tenu à la lumière.",
            "action": "Passez à travers la souche une deuxième fois. Si le liquide est encore nuageux, il se peut qu'il ait été bouilli trop fort à l'étape 2."
          },
          {
            "state": "Perfect",
            "description": "Ambre cristalline. Une cuillère déplacée à travers elle ne laisse aucune trace. Goûte propre et profondément salé sans amertume.",
            "action": "Assaisonner au minimum et utiliser. Les champignons shiitake, maintenant entièrement réhydratés, sont prêts pour la soupe miso ou les plats mijotés."
          },
          {
            "state": "Overdone",
            "description": "Dashi goûte amer ou astringent après assaisonnement.",
            "action": "Ajoutez un petit morceau de kombu frais et laissez le froid raide dans le dashi fini pendant 30 minutes — kombu adoucit l'amertume. Goûtez encore avant d'utiliser."
          }
        ]
      },
      "feelCue": "Goûtez une cuillère chaude : la saveur doit fleurir lentement et s'attarder — une richesse boisée et moelleuse plutôt que le coup aigu d'iode de katsuobushi dashi. La finale doit être douce et propre, pas amère."
    }
  ]
};
