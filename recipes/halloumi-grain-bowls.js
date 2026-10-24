export default {
  "repoId": "master_mediterranean_halloumigrainbowls_001",
  "parentRepoId": null,
  "slug": "halloumi-grain-bowls",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Bols à grains Halloumi",
  "description": "Farro à la noix, à la mâchette, jeté dans une vinaigrette citron-origan avec du concombre croustillant, des tomates douces et des olives brinées, surmontées de dalles d'Halloween cousues à une croûte dorée.",
  "cuisine": "Méditerranée",
  "culture": "d ' inspiration chypriote",
  "category": "grains",
  "tags": [
    "cuisine maison",
    "végétarien",
    "Halloween",
    "Farro",
    "Céréales",
    "Préparation des repas"
  ],
  "difficulty": 1,
  "activeTime": "25 min",
  "totalTime": "45 min",
  "ratioSystem": "weight",
  "servings": 4,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 3,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Farro semi-pair, rincé",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "orge perlée",
        "quinoa (cuites en 15 min)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau, pour cuisiner le farro",
      "ratioValue": 2000,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Citrus",
      "name": "Jus de citron",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de vin rouge"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Chérie",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "sirop d'érable"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Ail, râpé finement",
      "ratioValue": 1,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Origan séché",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Concombre en dés",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Base",
      "name": "Tomates cerises, coupées en deux",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Allium",
      "name": "Oignon rouge, tranché finement",
      "ratioValue": 0.5,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Umami",
      "name": "Olives de Kalamata, piquées et coupées en deux",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Herb",
      "name": "Menthe et persil frais, hachés",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "d'aneth"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Dairy",
      "name": "Halloumi (rennet végétalien), coupé en dalles de 1 cm",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "panneau",
        "tofu ferme"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Seasoning",
      "name": "Sel et poivre noir",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Bouillir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_14"
      ],
      "outputState": "cooked_farro",
      "instructions": "Porter l'eau à ébullition avec 2 cuillères à café de sel. Ajouter le farro et faire bouillir comme des pâtes pendant 20 à 25 minutes jusqu'à tendre mais mâcher. Drainez bien et étalez-vous sur un plateau pendant 5 minutes pour éteindre la vapeur et refroidir légèrement.",
      "visualCue": {
        "primaryTarget": "Plumeau, grains de bronzage, certains commencent juste à se diviser, séparés et brillants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont durs et blanc crayeux au cœur.",
            "action": "Faites bouillir 3 à 5 minutes de plus et goûtez encore."
          },
          {
            "state": "Perfect",
            "description": "Les grains sont gonflés et tendres avec une mâche ferme et printanière.",
            "action": "Égoutter et se disperser."
          },
          {
            "state": "Overdone",
            "description": "Beaucoup de grains se sont ouverts et sont devenus musqués.",
            "action": "Égoutter immédiatement et rincer sous l'eau fraîche pour arrêter la cuisson."
          }
        ]
      },
      "feelCue": "Mâcher un grain — il devrait sauter avec une mâche satisfaisante, comme les pâtes al dente, sans grit."
    },
    {
      "nodeId": "step_2",
      "action": "Émulsifier",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_14"
      ],
      "outputState": "lemon_oregano_dressing",
      "instructions": "Dans un pot, mélanger 45 ml d'huile d'olive avec le jus de citron, le miel, l'ail, l'origan, 1/2 cuillère à café de sel et beaucoup de poivre. Sceller et agiter pendant 15 secondes.",
      "visualCue": {
        "primaryTarget": "Un pansement nuageux, jaune pâle, avec de l'origan.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile se trouve dans une couche claire sur le citron.",
            "action": "Agiter de plus en plus."
          },
          {
            "state": "Perfect",
            "description": "uniformément nuageux, légèrement épaissi.",
            "action": "Utilisez immédiatement ou secouez à nouveau avant d'utiliser."
          },
          {
            "state": "Overdone",
            "description": "L'ail s'est assis dans le citron trop longtemps (sur une journée) et a un goût dur et chaud.",
            "action": "Faites-le frais, ou équilibrez avec un peu plus d'huile et de miel."
          }
        ]
      },
      "feelCue": "Il devrait avoir un goût assez vif pour vous faire gagner un peu par lui - même — il se calme une fois qu'il frappe le farro."
    },
    {
      "nodeId": "step_3",
      "action": "Découpe",
      "inputs": [
        "cooked_farro",
        "lemon_oregano_dressing",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "dressed_farro_salad",
      "instructions": "Jeter le farro chaud avec les deux tiers de la vinaigrette et laisser reposer 5 minutes pour absorber. Ajouter le concombre, les tomates, l'oignon rouge, les olives et les herbes et mélanger à nouveau. Goûtez et ajustez le sel.",
      "visualCue": {
        "primaryTarget": "Glossy farro clouté uniformément avec des morceaux verts, rouges et noirs.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains semblent secs et ternes; la saveur est plate.",
            "action": "Ajouter plus de vinaigrette et une pincée de sel."
          },
          {
            "state": "Perfect",
            "description": "Les grains brillent et le goût assaisonné sur leur propre; les légumes restent croquants.",
            "action": "Divisez en bols."
          },
          {
            "state": "Overdone",
            "description": "Une réserve de liquide est prélevée au fond des jus de tomates.",
            "action": "Servir avec une cuillère à fentes."
          }
        ]
      },
      "feelCue": "Chaque cuillère doit avoir croquant du concombre et mâcher du farro dans une mesure égale."
    },
    {
      "nodeId": "step_4",
      "action": "Sear",
      "inputs": [
        "ing_13",
        "ing_03"
      ],
      "outputState": "seared_halloumi",
      "instructions": "C'est très sec. Chauffer le reste de 15 ml d'huile d'olive dans une poêle antiadhésive à feu moyen-élevé. Ajouter l'alloumi en une seule couche et cuire 2 à 3 minutes de chaque côté, sans bouger, jusqu'à ce qu'il soit bien doré. Servir en quelques minutes — halloumi durcit en refroidissant.",
      "visualCue": {
        "primaryTarget": "Draps avec une croûte d'or sur les deux faces et des centres pâles et doux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pale, légèrement tacheté et collé à la poêle.",
            "action": "Laissez-la encore une minute — elle libère une fois croûtée."
          },
          {
            "state": "Perfect",
            "description": "Toujours bronzé, avec du fromage brun lacy autour des bords.",
            "action": "Transférer directement sur les bols."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé à noir et dur jusqu'au bout.",
            "action": "Abaissez la chaleur pour le prochain lot; coupez les bords brûlés."
          }
        ]
      },
      "feelCue": "L'halloumi devrait s'étourdir pendant qu'il frappe la casserole, puis retourner librement une fois que la croûte se forme."
    },
    {
      "nodeId": "step_5",
      "action": "Assemblage",
      "inputs": [
        "dressed_farro_salad",
        "seared_halloumi",
        "lemon_oregano_dressing"
      ],
      "outputState": "finished_halloumi_bowls",
      "instructions": "Divisez la salade de farro dans quatre bols, garnissez chacun d'un halloumi chaud et faites une cuillère sur le reste de la vinaigrette.",
      "visualCue": {
        "primaryTarget": "Bols à grains colorés couronnés de dalles dorées et scintillantes d'Halloween.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Halloumi a refroidi et est devenu caoutchouteux en attendant.",
            "action": "Réchauffer les dalles 30 secondes par côté dans la poêle."
          },
          {
            "state": "Perfect",
            "description": "Halloumi encore à la vapeur, bols lumineux et fraîchement habillés.",
            "action": "Servez."
          },
          {
            "state": "Overdone",
            "description": "Les bols sont assez longs pour que les légumes soient boiteux.",
            "action": "Gardez le farro et les légumes séparés pour la préparation des repas et combiner à la commande."
          }
        ]
      },
      "feelCue": "L'halloumi devrait s'écraser légèrement contre vos dents, avec une coquille croquante donnant à un centre doux et salé."
    }
  ]
};
