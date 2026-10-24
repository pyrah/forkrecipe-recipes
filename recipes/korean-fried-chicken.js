export default {
  "repoId": "master_korean_korean_fried_chicken_001",
  "parentRepoId": null,
  "slug": "korean-fried-chicken",
  "author": "ForkRecipe Kitchen",
  "title": "Poulet frit coréen",
  "description": "La double frire n'est pas une technique, c'est une philosophie. La première frite sert la croûte et commence à la rendre grasse; la seconde frite brise la croûte en quelque chose qui approche du verre, une coquille si fine et si croquante qu'elle craque audiblement dans une pièce. La sauce yangnyeom — une laque de gochujang, de miel et d'ail — s'accroche sans la ramollir, et toute la chose brille sous la lumière de la cuisine comme de la laque.",
  "cuisine": "Coréen",
  "culture": "Coréen",
  "category": "proteins",
  "tags": [
    "korean-fried-chicken",
    "coréen",
    "à double friture",
    "Yangnyeom",
    "croustillant"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "2 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Ailes ou tambours de poulet (ou morceaux d'os)",
      "ratioValue": 2,
      "defaultUnit": "lb",
      "substitutions": [
        "morceaux de cuisse désossés, morceaux de 2 pouces"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Fécule de pomme de terre",
      "ratioValue": 0.5,
      "defaultUnit": "cup",
      "substitutions": [
        "fécule de maïs",
        "Amidon de tapioca"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Starch",
      "name": "Farine à usage général",
      "ratioValue": 0.25,
      "defaultUnit": "cup",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 0.5,
      "defaultUnit": "cup",
      "substitutions": [
        "eau de soude froide (crispier)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Poivre noir",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poudre d'ail",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile neutre pour friture profonde (canola ou son de riz)",
      "ratioValue": 4,
      "defaultUnit": "cups",
      "substitutions": [
        "huile végétale"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Gochujang (Pâte de piment rouge fermentée coréenne)",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": [
        "sriracha (moins de profondeur, plus d'acide)"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Sweetener",
      "name": "Chérie",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "sirop de maïs",
        "sirop de riz"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Sweetener",
      "name": "Sucre brun",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Allium",
      "name": "Giroves d'ail hachées à la pâte",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Seasoning",
      "name": "sauce soja",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_15",
      "role": "Acid",
      "name": "Vinaigre de riz",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_16",
      "role": "Garnish",
      "name": "Graines de sésame grillées et pétoncles tranchés",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire mariner",
      "inputs": [
        "ing_01",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "seasoned_chicken",
      "instructions": "Pat poulet complètement sec avec des serviettes en papier — ce n'est pas négociable. Assaisonner de sel, poivre et poudre d'ail. Jetez-le uniformément. Laisser reposer à température ambiante pendant 30 minutes, ou réfrigérer à découvert jusqu'à 2 heures pour une surface plus sèche et un résultat plus croustillant. La surface sèche, la croûte plus croustillante.",
      "visualCue": {
        "primaryTarget": "Des morceaux de poulet qui ont l'air mats et complètement secs, avec une robe assaisonnée uniforme et pâle. Pas de perles d'humidité à la surface de la peau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poulet est encore humide ou humide. Le sel n'a pas eu le temps d'extraire l'humidité de surface.",
            "action": "Pat sèche encore et attends plus longtemps. L'humidité est l'ennemi de la croustillante, elle transforme l'amidon en pâte, et non en croûte."
          },
          {
            "state": "Perfect",
            "description": "La surface est complètement sèche et légèrement collante. L'assaisonnement est également distribué. La peau a l'air serrée et déshydratée, pas diluvienne.",
            "action": "Mélanger la pâte et procéder."
          },
          {
            "state": "Overdone",
            "description": "S.O. — le poulet ne peut pas être sursaisonné à cette étape à ces ratios.",
            "action": "Allez-y."
          }
        ]
      },
      "feelCue": "Exécutez votre doigt le long de la peau — il devrait se sentir comme un parchemin sec, attraper légèrement votre bout de doigt plutôt que de glisser. N'importe quelle glissière signifie plus de séchage est nécessaire."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "seasoned_chicken"
      ],
      "outputState": "battered_chicken",
      "instructions": "Dans un grand bol, fouetter la fécule de pomme de terre et la farine. Ajouter l'eau froide et mélanger jusqu'à ce qu'une pâte fine et grumelée se forme — ne pas trop mélanger. La pâte doit être plus mince que la pâte à crêpes et légèrement grumelée. Ajouter les morceaux de poulet assaisonnés et mélanger pour enrober soigneusement. Certaines pièces auront une couche mince et irrégulière; d'autres auront des gouttes et des arêtes — cette incohérence crée la surface craquante et ultra-crispy. Laisser reposer le poulet battu 5 minutes.",
      "visualCue": {
        "primaryTarget": "Poulet enrobé d'une pâte fine, inégale et pâle avec des arêtes visibles et des gouttes. Certaines zones montrent la peau de poulet à travers la pâte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La batterie est trop épaisse et uniforme — appliquée comme une pâte épaisse. Il créera une croûte panifiable, pas une croûte brisée.",
            "action": "Arroser d'eau froide supplémentaire 1 c. à soupe à la fois. La pâte au poulet frit coréenne devrait être beaucoup plus mince que la pâte américaine."
          },
          {
            "state": "Perfect",
            "description": "Manteau mince et irrégulier avec pics et vallées à partir des morceaux de la pâte. Des ailerons de pâte créent des ailerons et des arêtes qui feront frire des croustillants.",
            "action": "Fry immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La pâte a été trop longue — l'amidon a hydraté et épaissi la pâte dans une pâte.",
            "action": "Ajouter plus d'eau froide pour restaurer la consistance fine. Travaillez plus vite pour le prochain lot."
          }
        ]
      },
      "feelCue": "Tenez un morceau de pâte au - dessus du bol — la pâte doit s'écouler dans des ruisseaux minces plutôt que de s'accrocher à des taches épaisses. Ce manteau est devenu une coquille mince."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "battered_chicken",
        "ing_08"
      ],
      "outputState": "double_fried_chicken",
      "instructions": "Chauffer l'huile à 330 F (165 C) dans un pot profond. Faire frire le poulet battu dans des lots non encombrés pendant 8-10 minutes jusqu'à ce qu'il soit légèrement doré et cuit. Enlever et égoutter sur un porte-fils — pas des serviettes en papier. Reposez-vous 10 minutes. Augmenter la température de l'huile à 375 F (190 C). Faites frire les mêmes morceaux une seconde fois pendant 3-4 minutes jusqu'à ce qu'ils tournent en or ambré profond et craquent audiblement lorsqu'ils sont sortis de l'huile. Retirer et égoutter immédiatement.",
      "visualCue": {
        "primaryTarget": "Après la deuxième friture : une croûte d'ambre profonde, avec une surface à facettes qui prend de la lumière à différents angles. Le poulet est visiblement rétréci et la croûte est loin de la viande.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après la première frite : or pâle, encore légèrement doux. C'est intentionnel: la première frite ne doit pas être dorée. Après la deuxième friture : pâle avec une croûte molle. L'huile n'était pas assez chaude pour la deuxième friture.",
            "action": "Retourner à l'huile 375 F pendant 2 minutes. La seconde friture haute température est l'étape critique pour la texture de la déchirure."
          },
          {
            "state": "Perfect",
            "description": "Après la deuxième friture : croûte d'or ambre profonde aux facettes visibles et aux pics de la pâte grumelée. Ça a l'air creux. La croûte craque quand une pièce est coupée en deux. Température interne 165 F+.",
            "action": "Ajouter immédiatement la sauce yangnyeom."
          },
          {
            "state": "Overdone",
            "description": "Croûte brun foncé avec noir aux pics. Une odeur amère. La croûte a pu se contracter et se fissurer.",
            "action": "Ajouter rapidement dans la sauce — la sauce masquera certaines notes amères. Servir immédiatement."
          }
        ]
      },
      "feelCue": "Après la deuxième friture, tenez un morceau près de l'oreille et pressez - le — une croûte parfaite craque et s'écrase audiblement, comme en appuyant sur une mince couche de glace. S'il compresse en silence, la croûte n'est pas réglée."
    },
    {
      "nodeId": "step_4",
      "action": "Glacer",
      "inputs": [
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13",
        "ing_14",
        "ing_15",
        "double_fried_chicken",
        "ing_16"
      ],
      "outputState": "finished_korean_fried_chicken",
      "instructions": "Mélanger le gochujang, le miel, la cassonade, la pâte d'ail, la sauce soja, l'huile de sésame et le vinaigre de riz dans une petite casserole. Chauffer à feu moyen, en remuant, jusqu'à ce que le sucre se dissout et que la sauce mijote à peine — environ 2 minutes. Ne pas faire bouillir. Travailler rapidement, ajouter le poulet à deux frites dans un grand bol et verser la sauce tiède. Jeter rapidement pour enrober chaque pièce. Garnir de graines de sésame et de pétoncles. Servir dans les 5 minutes, la croûte reste croustillante environ 10 minutes après le saucisson.",
      "visualCue": {
        "primaryTarget": "Chaque morceau de poulet enrobé d'une sauce yangnyeom rouge-orange foncé brillant qui s'accroche sans noyer la croûte. La croûte reste visible à travers la sauce comme une surface texturée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est froide ou épaisse: elle est entaillée sur certains morceaux et ne adhère pas aux autres. Certains morceaux sont soudés, d'autres sont secs.",
            "action": "Chauffer la sauce jusqu'à ce qu'elle coule librement. Ajouter une cuillère à café d'eau si nécessaire. Encore plus vigoureusement."
          },
          {
            "state": "Perfect",
            "description": "Même un manteau brillant sur toutes les pièces. La sauce n'a pas été mise en réserve au fond du bol — chaque morceau tient sa sauce. Graines de sésame et pétoncles éparpillés. La croûte est encore audiblement croustillante lorsqu'elle est pressée.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Trop de sauce appliquée ou le poulet s'asseyait trop longtemps dans la sauce. La croûte s'est adoucie de l'humidité.",
            "action": "Égoutter l'excès de sauce et servir immédiatement. Le poulet frit coréen est impitoyable après avoir sauté."
          }
        ]
      },
      "feelCue": "Ramassez un morceau de sauce — l'extérieur doit se sentir tendu et légèrement collant de la sauce mais structurellement rigide. Si la croûte fléchit ou fléchit sous le poids de la sauce, la servir immédiatement avant qu'elle ne s'adoucisse davantage."
    }
  ]
};
