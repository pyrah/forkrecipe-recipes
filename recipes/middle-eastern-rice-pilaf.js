export default {
  "repoId": "master_middleeastern_middleeasternricepilaf_001",
  "parentRepoId": null,
  "slug": "middle-eastern-rice-pilaf",
  "author": "ForkRecipe Kitchen",
  "title": "Pilaf de riz du Moyen-Orient avec Vermicelli",
  "description": "Des fils de vermicelli minces grillés au beurre jusqu'à l'ambre, puis cuits avec du riz à grains longs dans un pilaf parfumé éparpillé de pignons dorés, l'épine dorsale de la table Levantine.",
  "cuisine": "Moyen-Orient",
  "culture": "Levantine",
  "category": "grains",
  "tags": [
    "grains",
    "végétalien",
    "riz",
    "Moyen-Orient",
    "vermicelli",
    "de pins"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "35 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz blanc à grains longs (basmati)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "Riz égyptien à grains courts"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Nouilles vermicelles fines, cassées",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "pâtes de cheveux d'ange brisées en morceaux de 2cm"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "huile d'olive pour version végétalienne"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Bouillon de poulet ou de légumes",
      "ratioValue": 550,
      "defaultUnit": "ml",
      "substitutions": [
        "eau avec une pincée de curcuma"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Garnish",
      "name": "Noix de pin",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "Amandes liquéfiées",
        "Graines de citrouille grillées"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Versail au sol (bahar)",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "épices mélangées"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Persil frais à feuilles plates, haché",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrate",
      "inputs": [
        "ing_01"
      ],
      "outputState": "soaked_rice",
      "instructions": "Rincer le riz dans plusieurs changements d'eau froide jusqu'à ce que l'eau coule clair, libérant de l'amidon de surface excédentaire qui rendrait le pilaf collant. Couvrir d'eau froide et tremper pendant 20 minutes. Égoutter soigneusement dans une passoire à mailles fines et tapoter légèrement à sec — l'humidité résiduelle fera éclabousser le beurre.",
      "visualCue": {
        "primaryTarget": "L'eau est claire lorsqu'elle est versée sur du riz; les grains sont blancs et légèrement gonflés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est toujours blanc laiteux, chargée d'amidon de surface.",
            "action": "Rincer encore 2 à 3 fois à l'eau froide, agiter les grains à chaque fois."
          },
          {
            "state": "Perfect",
            "description": "L'eau est presque limpide, les grains sont légèrement translucides aux bords du trempage. Draine librement.",
            "action": "Égoutter bien et faire griller les vermicelles."
          },
          {
            "state": "Overdone",
            "description": "Le riz est trempé trop longtemps (plus de 2 heures) et a commencé à s'assouplir et à se briser.",
            "action": "Égoutter et réduire le temps de cuisson de 2 minutes."
          }
        ]
      },
      "feelCue": "Le riz rincé et trempé doit couler à travers vos doigts comme du sable fin sans collants."
    },
    {
      "nodeId": "step_2",
      "action": "Toast",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_06"
      ],
      "outputState": "toasted_vermicelli",
      "instructions": "Faire fondre le beurre dans une casserole à fond lourd à feu moyen. Ajouter les pignons et mélanger 1 à 2 minutes jusqu'à ce qu'ils soient dorés. Retirer avec une cuillère à fentes et mettre de côté — ils brûlent rapidement. Ajouter les vermicelles cassées dans le reste du beurre et jeter constamment pendant 3 à 4 minutes jusqu'à ce que les nouilles tournent une profonde ambre-brun et odeur de noisettes grillées. C'est le caractère déterminant du plat.",
      "visualCue": {
        "primaryTarget": "Vermicelli est un brun-ambre profond et uniforme, plus sombre que vous ne le pensez, presque roussé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Vermicelli est encore pâle ou seulement légèrement jaune — il sera sans saveur et ne contribue pas à la noix.",
            "action": "Continuer à griller à feu moyen, en remuant constamment."
          },
          {
            "state": "Perfect",
            "description": "Ambre profonde au marron brun, sent intensément les noix grillées et le beurre. Cracher légèrement lorsqu'il est agité.",
            "action": "Ajouter immédiatement le riz égoutté."
          },
          {
            "state": "Overdone",
            "description": "Vermicelli est passé brun à noir et sent brûlé et amer.",
            "action": "Retirer les fils brûlés, essuyer la poêle et recommencer avec des vermicelles fraîches dans du beurre frais."
          }
        ]
      },
      "feelCue": "Le beurre dans la poêle doit sentir le beurre brun noisette — noisette et riche, pas vif ou acride — qui est le moment d'arrêter et d'ajouter le riz."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "toasted_vermicelli",
        "soaked_rice",
        "ing_04",
        "ing_05",
        "ing_07"
      ],
      "outputState": "cooked_pilaf",
      "instructions": "Ajouter le riz égoutté aux vermicelles grillées et mélanger pour enrober le beurre pendant 1 minute. Verser le bouillon chaud, ajouter le sel et l'aspice. Remuer une fois. Porter à ébullition à feu vif, puis laisser mijoter au minimum, couvrir soigneusement et cuire 15 minutes. Retirer du feu et de la vapeur, couvert, pendant 10 minutes. Ne pas soulever le couvercle pendant la cuisson ou la vapeur.",
      "visualCue": {
        "primaryTarget": "Chaque grain de riz est séparé et moelleux; les fils vermicelli ambres sont tissés tout au long sans devenir musqués.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz a encore une morsure crayeuse; des taches humides visibles à la surface du pot.",
            "action": "Récupérer et éteindre la vapeur pendant 5 minutes, la chaleur résiduelle finira le riz."
          },
          {
            "state": "Perfect",
            "description": "Les grains sont séparés, moelleux et parfumés. Les fils Vermicelli sont tendres mais distincts. Pas de liquide en bas.",
            "action": "Fluff avec une fourchette et une plaque."
          },
          {
            "state": "Overdone",
            "description": "Les grains de riz ont explosé et s'est emparé; vermicelli s'est dissout dans la masse.",
            "action": "Étaler légèrement sur une plaque de cuisson; les arômes sont intacts même si la texture est plus douce."
          }
        ]
      },
      "feelCue": "Soulevez le couvercle après la vapeur et respirez profondément — le pilaf devrait exhaler un nuage chaud de toutspice et de beurre grillé, la marque d'un riz bien reposé."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir",
      "inputs": [
        "cooked_pilaf",
        "toasted_vermicelli",
        "ing_06",
        "ing_08"
      ],
      "outputState": "finished_rice_pilaf",
      "instructions": "Flûtez le pilaf avec une fourchette, en tournant doucement du bas vers le haut. Sur un plateau de service chaud. Éparpiller les noix de pin doré sur le dessus et finir avec le persil haché. Servir immédiatement.",
      "visualCue": {
        "primaryTarget": "Un monticule de riz blanc d'ambre couronné de pignons de pin dorés et de persil vert vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les noix de pin sont pâles et farineuses plutôt que dorées; elles n'apportent aucune saveur.",
            "action": "Servir séparément dans une casserole sèche pendant 1 minute avant de disperser."
          },
          {
            "state": "Perfect",
            "description": "Les pignons dorés brillent contre le riz; le persil est vert vif et frais. Le monticule tient sa forme mais n'est pas comprimé.",
            "action": "Servir en 10 minutes pour une meilleure texture."
          },
          {
            "state": "Overdone",
            "description": "Pilaf a été plaqué trop longtemps; les vermicelles ont continué à absorber l'humidité et le plat semble lourd.",
            "action": "Servir immédiatement — le pilaf est un plat d'immédiateté."
          }
        ]
      },
      "feelCue": "Le pilaf fini doit se sentir léger et aéré sur la cuillère de service, chaque fil de révélation fourchu de nouilles grillées et la croûte occasionnelle de noix de pin."
    }
  ]
};
