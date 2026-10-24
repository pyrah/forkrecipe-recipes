export default {
  "repoId": "master_american_blackened_catfish_001",
  "parentRepoId": null,
  "slug": "blackened-catfish",
  "author": "ForkRecipe Kitchen",
  "title": "Poisson-chat noirci",
  "description": "Filets de poisson-chat recouverts d'épices de cajun, cuits dans une poêle en fonte chaude jusqu'à ce que les chars extérieurs soient presque noirs et que l'intérieur reste humide – intensément fumé et épicé.",
  "cuisine": "Américain",
  "culture": "Cajun",
  "category": "seafood",
  "tags": [
    "Poisson-chat",
    "cajun",
    "noirci",
    "épicé",
    "américains",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 2,
    "umami": 3,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filets de poissons-chats (peau de 180 à 220 g chacun, épaisseur égale)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "tilapia",
        "sébaste",
        "filets de snapper"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Paprika doux",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Poivre de Cayenne",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Paprika chaud"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Origan séché",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Thym séché"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Thym séché",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Poudre d'ail",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Poudre d'oignon",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Sel de céleri"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Poivre noir fraîchement moulu",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Beurre non salé fondu",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Citrus",
      "name": "Piments de citron frais, à servir",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Garnish",
      "name": "Persil frais à feuilles plates, haché",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Construisez le frottage des épices",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "cajun_spice_rub",
      "instructions": "Mélanger le paprika, la cayenne, l'origan séché, le thym séché, la poudre d'ail, la poudre d'oignon, le sel et le poivre noir dans un petit bol et bien mélanger. Goûtez une petite pincée — elle doit être assaisonnée intensément et modérément à chaud. Le paprika forme la masse et fournit la couleur; les herbes séchées portent la complexité végétale; la Cayenne et le poivre noir construisent la chaleur. Ce frottage devrait vous faire hésiter légèrement avant de mettre une portion complète sur le poisson — c'est le bon niveau.",
      "visualCue": {
        "primaryTarget": "Un mélange rouge-orange profond avec des taches visibles de vert foncé (herbes) et des taches de noir (pepper). La couleur est uniformément saturée, pas pâle ou poussiéreuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Rub a l'air pâle et poussiéreux-orange — pas assez de paprika ou la Cayenne est morte. Goûte plat et unidimensionnel.",
            "action": "Ajouter plus de paprika et de Cayenne fraîche. Les épices de stale sont la raison la plus commune que les poissons noircis sont décevants."
          },
          {
            "state": "Perfect",
            "description": "Profond, l'orange rouge saturé avec des taches d'herbe. Un goût procure une chaleur et une complexité immédiates, sans qu'une seule épice domine. Il vous fait tousser légèrement si inhalé.",
            "action": "Appliquer généreusement sur le poisson immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le frotte est si agressivement cayenne-avant qu'il est tout feu et aucune complexité de saveur.",
            "action": "Diluer avec plus de paprika pour rétablir l'équilibre. L'omble intensifiera tout sur la chaleur, donc l'équilibre compte avant la cuisson."
          }
        ]
      },
      "feelCue": "Pincez le frottage entre vos doigts – il devrait vous sembler fin, sec, légèrement collant. S'il s'entremêle dans une pâte, l'humidité s'est introduite; l'étaler sur une surface sèche pour s'aérer pendant une minute."
    },
    {
      "nodeId": "step_2",
      "action": "Filets de manteaux",
      "inputs": [
        "ing_01",
        "cajun_spice_rub",
        "ing_10"
      ],
      "outputState": "coated_catfish",
      "instructions": "Les filets de poissons-chats sont complètement secs avec des serviettes en papier des deux côtés. Badigeonner généreusement chaque filet des deux côtés du beurre fondu. Appuyez immédiatement sur l'épice pour frotter fermement dans toutes les surfaces de chaque filet — bords supérieurs, inférieurs et fins. Le beurre agit comme l'adhésif; le frottage doit former une croûte complète, même sans tache nue de poisson visible. Ne pas mariner — le sel dans la masse commencera à arracher l'humidité. Cuire dans les 5 minutes suivant le revêtement.",
      "visualCue": {
        "primaryTarget": "Chaque filet est entièrement recouvert d'une croûte d'épices rouge-orange profonde, sans poisson blanc nu visible nulle part. Le frottage semble légèrement humide du beurre, mais pas humide ou dissolvant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le rubis est trop clairsemé: des taches de poisson blanc sont visibles et le revêtement semble poussiéreux et sec, non respecté.",
            "action": "Brossez plus de beurre et pressez plus fermement avec vos paumes. Le revêtement a besoin de pression pour adhérer à la surface du poisson."
          },
          {
            "state": "Perfect",
            "description": "Complètement et uniformément revêtu, le filet ressemble à une brique d'épices rouge-orange profonde. Le frottage est fermement collé, pas coulissant ou lâche.",
            "action": "Cuire dans les 5 minutes ou le sel va attirer l'humidité et desserrer le revêtement."
          },
          {
            "state": "Overdone",
            "description": "Le frottage est si épais qu'il est de plus de 3 mm de profondeur et semble tomber en morceaux.",
            "action": "Badigeonner doucement l'excédent. Un frottement très épais empêche le contact direct entre le poisson et la surface de la casserole, ce qui crée l'omble."
          }
        ]
      },
      "feelCue": "Appuyez fermement sur la surface de frotter avec votre paume: il devrait rester mis, avec le beurre le tenant comme de la colle contre le poisson. Le filet doit se sentir ferme et enduit, pas glissant."
    },
    {
      "nodeId": "step_3",
      "action": "Noir",
      "inputs": [
        "coated_catfish"
      ],
      "outputState": "blackened_catfish",
      "instructions": "Cette technique nécessite la poêle la plus chaude et la plus grande ventilation possible: ouvrez les fenêtres et allumez tous les ventilateurs disponibles. Chauffer une poêle en fonte sèche sur la chaleur la plus élevée possible pendant au moins 4 à 5 minutes, jusqu'à ce qu'elle soit visiblement brillante et qu'une goutte d'eau vaporise instantanément. N'ajoutez pas de graisse dans la poêle — le beurre sur le poisson est suffisant, et l'huile supplémentaire provoquera des éruptions dangereuses. Poser les filets dans la poêle chaude — il y aura un nuage dramatique de fumée noire et un étourdissement agressif. Ne bougez pas le poisson. Cuire de 2 à 3 minutes de chaque côté jusqu'à ce que l'extérieur soit vraiment presque noir avec seulement un léger sous-ton rougeâtre — c'est exact, pas brûlé. La chair interne doit rester blanche opaque et humide.",
      "visualCue": {
        "primaryTarget": "L'extérieur est un brun très profond qui approche du noir, avec les épices carbonisées plutôt que simplement obscurcies. L'intérieur, visible aux bords, est blanc et opaque. La surface est sèche et légèrement mate, pas mouillée ou scintillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le frotte a foncé à brun moyen mais l'extérieur est encore poudré dans les taches et n'a pas vraiment carbonisé. Le poisson n'a pas développé la croûte fumée caractéristique.",
            "action": "Gardez la chaleur élevée et laissez-la intacte. La transition de l'omble brun foncé à l'omble authentique se produit rapidement, habituellement dans les 30 à 60 dernières secondes."
          },
          {
            "state": "Perfect",
            "description": "Extérieur presque noir avec l'arôme profond et complexe des épices carbonisées, comme l'huile de chili brûlée. Pas d'odeur d'épice crue. Le poisson aux bords est blanc et opaque. Un poke produit un don doux.",
            "action": "Flip immédiatement et char le deuxième côté. Le temps total est de 4 à 6 minutes selon l'épaisseur."
          },
          {
            "state": "Overdone",
            "description": "L'extérieur est uniformément carbonisé et sent acride et dur — pas la fumée complexe d'épices carbonées mais l'amertume pure du carbone. Le poisson a séché.",
            "action": "Écraser le pire de la croûte carbonisée. Le poisson sous-jacent peut encore être comestible. Pour la prochaine fois: la transition de parfait à surdosé est d'environ 45 secondes à ce niveau de chaleur — regardez attentivement."
          }
        ]
      },
      "feelCue": "Ne touchez pas le poisson pendant les 2 premières minutes — résistez à l'envie. Lorsque vous le faites, la croûte devrait se sentir dure et sèche, comme taper une mince coquille d'argile cuite. Tout ce qui donne ou pâteux signifie qu'il n'est pas encore complètement carbonisé."
    },
    {
      "nodeId": "step_4",
      "action": "Finition et plaque",
      "inputs": [
        "blackened_catfish",
        "ing_11",
        "ing_12"
      ],
      "outputState": "finished_blackened_catfish",
      "instructions": "Retirez immédiatement les filets de la casserole lorsque le deuxième côté est carbonisé et que la partie la plus épaisse des flocons de poisson est pressée doucement avec un doigt, ou lisez 63°C / 145°F. Transférer directement dans des assiettes chaudes — le poisson-chat noirci n'a pas besoin de se reposer. La croûte carbonisée agit comme une barrière qui ralentit le refroidissement. Pressez immédiatement la moitié d'un citron sur le filet — le jus siffle contre l'omble et conduit sa luminosité à travers l'extérieur. Scatter persil. Servir avec du riz blanc, de la coleslaw ou des chiots.",
      "visualCue": {
        "primaryTarget": "Un filet presque noir sur une assiette chaude, le char mat et sec. Le jus de citron fait mijoter brièvement la surface avant d'absorber. Le persil est le seul contraste de couleur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre du filet ne s'épanouit pas — il est encore translucide et légèrement gélatineux lorsqu'il est pressé.",
            "action": "Retournez dans la poêle pendant 1 minute de chaque côté. Si la croûte est déjà parfaite, terminer au four à 200°C pendant 3 minutes."
          },
          {
            "state": "Perfect",
            "description": "Flakes propre le long des lignes naturelles quand pressé. L'intérieur est blanc et humide. Char est sec et prêt. Le citron active un nuage d'arôme épicé et fumé.",
            "action": "Servir immédiatement. Ne pas couvrir — la vapeur adoucira la croûte."
          },
          {
            "state": "Overdone",
            "description": "Les filets se détachent en lambeaux secs lorsqu'ils sont pressés et la chair semble cotonneuse et blanche à travers et à travers.",
            "action": "Servir avec plus de beurre et de citron pour compenser la perte d'humidité. Le poisson-chat noirci peut sécher rapidement — 30 secondes peuvent faire la différence à cette chaleur."
          }
        ]
      },
      "feelCue": "Appuyez sur le point le plus épais du filet d'un bout de doigt : il devrait donner et flotter sous la coquille de char comme du sable humide compacté donnant le chemin. Toute résistance printanière signifie qu'elle a besoin de plus de temps; un effondrement musclé signifie qu'elle est passée."
    }
  ]
};
