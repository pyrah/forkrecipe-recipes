export default {
  "repoId": "master_american_brown_butter_chocolate_chip_cookies_001",
  "parentRepoId": null,
  "slug": "brown-butter-chocolate-chip-cookies",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Cookies au chocolat au beurre brun",
  "description": "Chewy, biscuits au caramel construit sur le beurre cuit jusqu'à ce qu'il sente comme des noisettes grillées, emballé avec des flaques de chocolat noir haché et fini avec une pincée de sel flocé.",
  "cuisine": "Américain",
  "culture": "Cuisson maison américaine",
  "category": "desserts",
  "tags": [
    "cookies",
    "chocolat",
    "Beurre brun",
    "Mâche",
    "cuisine maison",
    "Cuisson"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "2 hr",
  "ratioSystem": "weight",
  "servings": 22,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 5,
    "salty": 2,
    "sour": 0,
    "bitter": 2,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Beurre non salé, cube",
      "ratioValue": 225,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre brun foncé, emballé",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brun clair (arôme sans mélasse)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Gros œufs, température ambiante",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Jaune d'œuf, d'un gros œuf",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 280,
      "defaultUnit": "g",
      "substitutions": [
        "farine de pain"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Leavener",
      "name": "Soda au four",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Sweetener",
      "name": "Chocolat noir (60-70%), haché en morceaux",
      "ratioValue": 280,
      "defaultUnit": "g",
      "substitutions": [
        "chips de chocolat semi-sweet",
        "chocolat au lait, haché"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Sel de mer, pour garniture",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Hydration",
      "name": "Eau (pour remplacer l'humidité perdue par le brunissement)",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "lait"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Beurre brun",
      "inputs": [
        "ing_01",
        "ing_12"
      ],
      "outputState": "brown_butter",
      "instructions": "Faire fondre le beurre dans une casserole de couleur claire à feu moyen. Il fera mousser et pulvériser pendant que l'eau cuit, puis calmer. Faites pivoter constamment pendant 5 à 8 minutes au total jusqu'à ce que le lait solide au fond tourne un brun grillé et qu'il sent la noix. Verser immédiatement dans un grand bol thermofuge, en grattant tous les morceaux bruns. Incorporer l'eau et laisser refroidir de 20 à 30 minutes jusqu'à ce qu'elle soit chaude mais plus chaude (environ 100 °F / 38 °C).",
      "visualCue": {
        "primaryTarget": "Beurre d'or clair avec des flecks brun noisette fixés au fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est jaune et mousse encore fort; les solides sont pâles ou blancs.",
            "action": "Continuez à tourner au-dessus de la chaleur; elle change rapidement une fois que l'aspersion s'arrête."
          },
          {
            "state": "Perfect",
            "description": "La mousse a baissé, les solides sont dorés-brun comme les noix grillées, et il sent comme les noisettes et le caramel.",
            "action": "Verser immédiatement hors de la casserole pour arrêter la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Les solides sont noirs et ils sentent acri et brûlé.",
            "action": "Recommencer — le beurre brûlé rendra les biscuits amers."
          }
        ]
      },
      "feelCue": "Écoutez: le fort craquement de l'eau bouillante s'estompe jusqu'au silence immédiat juste avant que le beurre brunisse — ce calme est votre signal de regarder de près."
    },
    {
      "nodeId": "step_2",
      "action": "fouetter les ingrédients humides",
      "inputs": [
        "brown_butter",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "sugar_butter_base",
      "instructions": "Ajouter les deux sucres au beurre brun refroidi et fouetter 1 minute. Ajouter l'œuf, le jaune et la vanille et fouetter vigoureusement pendant environ 1 minute jusqu'à ce que la couleur soit épaisse, brillante et plus claire.",
      "visualCue": {
        "primaryTarget": "Un mélange épais et brillant de couleur caramel sans réservoir de graisse visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Grainé, avec le beurre se séparant aux bords.",
            "action": "Plus fort pendant 30 secondes."
          },
          {
            "state": "Perfect",
            "description": "Doux et brillant comme le caramel épais, tenant des rubans doux quand le fouet est levé.",
            "action": "Ajouter les ingrédients secs."
          },
          {
            "state": "Overdone",
            "description": "Le beurre était encore chaud, et les œufs ont commencé à se mettre en brins.",
            "action": "Si ce n'est que quelques brins, appuyez sur; la prochaine fois refroidir le beurre plus longtemps."
          }
        ]
      },
      "feelCue": "Le mélange doit se sentir lourd et satiné sur le fouet, pas gras ou gras."
    },
    {
      "nodeId": "step_3",
      "action": "Plier",
      "inputs": [
        "sugar_butter_base",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "cookie_dough",
      "instructions": "fouetter la farine, le bicarbonate de soude et le sel dans un bol séparé, ajouter au mélange humide, et plier avec une spatule juste jusqu'à ce qu'il reste quelques traces de farine. Ajouter le chocolat et plier jusqu'à ce qu'aucune farine sèche ne soit visible. Couvrir et réfrigérer au moins 1 heure (jusqu'à 72 heures pour une saveur plus profonde) afin que la farine hydrate et les biscuits se répandent moins.",
      "visualCue": {
        "primaryTarget": "Une pâte douce et brillante clouée uniformément au chocolat, sans stries sèches.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches de farine sèche au fond du bol.",
            "action": "Gratter le fond et plier encore quelques fois."
          },
          {
            "state": "Perfect",
            "description": "Pâte uniforme, brillante et douce qui tient sa forme dans un monticule, chocolat uniformément distribué.",
            "action": "Du calme."
          },
          {
            "state": "Overdone",
            "description": "La pâte a tellement l'air grasse et serrée.",
            "action": "Refroidir plus longtemps avant de faire cuire pour le remettre en place."
          }
        ]
      },
      "feelCue": "La pâte fraîche doit se sentir ferme comme de l'argile froide et scoop propre sans coller à vos mains."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "cookie_dough",
        "ing_11"
      ],
      "outputState": "baked_cookies",
      "instructions": "Chauffer le four à 350°F (175°C) et recouvrir de parchemin deux plaques. Coupez des boules de 50 g (environ 3 c. à soupe), en les espacant de 7 cm — environ 8 par poêle, pour environ 22 biscuits. Cuire une poêle à la fois sur la grille du milieu 10-12 minutes, jusqu'à ce que les bords soient dorés et mis mais les centres semblent gonflés et légèrement sous-cuits. Saupoudrer de sel flocé dès qu'ils sortent. Laisser refroidir 10 minutes sur la casserole pour terminer le réglage, puis transférer sur un rack.",
      "visualCue": {
        "primaryTarget": "Anneaux dorés-bruns aux bords avec des centres pâles, doux, juste sertis.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les bords sont pâles et tout le biscuit est brillant et humide.",
            "action": "Faire cuire 1-2 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "Bords dorés et sertis, centres gonflés et mats mais encore mous; ils s'installent et rident comme ils refroidissent.",
            "action": "Saler et refroidir sur la poêle."
          },
          {
            "state": "Overdone",
            "description": "Marronné tout le chemin, plat et ferme directement depuis le four.",
            "action": "Ils seront croustillants plutôt que croustillants — tirez le prochain lot 2 minutes plus tôt."
          }
        ]
      },
      "feelCue": "Mordez le bord d'un biscuit avec une spatule : le bord doit se sentir ferme alors que le milieu donne encore doucement."
    }
  ]
};
