export default {
  "repoId": "master_american_snickerdoodle_bars_001",
  "parentRepoId": null,
  "slug": "snickerdoodle-bars",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Barres de snickerdood",
  "description": "Des barres de beurre de vanille molles et mâcheuses avec un léger tang de crème de tartre, cuites sous une croûte de sucre de cannelle, tout est bon pour le biscuit, dans une casserole assez grande pour une foule.",
  "cuisine": "Américain",
  "culture": "Cuisson maison américaine",
  "category": "desserts",
  "tags": [
    "barres",
    "cookies",
    "cannelle",
    "snickerdoodle",
    "S'il vous plaît",
    "cuisine maison",
    "Cuisson"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "1 hr 45 min",
  "ratioSystem": "weight",
  "servings": 24,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 5,
    "salty": 1,
    "sour": 1,
    "bitter": 0,
    "umami": 0,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Beurre non salé, ramolli",
      "ratioValue": 225,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre brun clair, emballé",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "tous les sucres granulés (barres de croissant)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Gros œufs, température ambiante",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 340,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Leavener",
      "name": "Crème de tartre",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "remplacer la crème de tartre et de bicarbonate de soude par 8 g de poudre à pâte (perte le tang)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Leavener",
      "name": "Soda au four",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "ajouter une pincée de muscade ou de cardamome"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Crème",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "creamed_butter",
      "instructions": "Chauffer le four à 350°F (175°C). Graisser une poêle métallique de 9 × 13 po (23 × 33 cm) et la garnir d'une élingue parchemin surplombant les longs côtés. Dans un mélangeur de stand avec la pagaie (ou avec un mélangeur à main), battre le beurre ramolli avec les sucres granulés et bruns à vitesse moyenne pendant 2–3 minutes jusqu'à ce qu'il soit plus léger et moelleux.",
      "visualCue": {
        "primaryTarget": "Un mélange pâle, moelleux et extensible nettement plus léger que le beurre de départ.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est dense, granuleux et de la même couleur que le beurre d'origine.",
            "action": "Encore une minute ou deux."
          },
          {
            "state": "Perfect",
            "description": "beige pâle, moelleux, tient des pics doux, et ressemble à du gel.",
            "action": "Ajouter les œufs."
          },
          {
            "state": "Overdone",
            "description": "Le beurre était trop chaud; le mélange semble gras et soupeux.",
            "action": "Refroidir le bol 10 minutes et battre à nouveau brièvement."
          }
        ]
      },
      "feelCue": "Frottez un peu entre vos doigts — il devrait se sentir doux et aéré, avec seulement un léger gras du sucre."
    },
    {
      "nodeId": "step_2",
      "action": "Mélanger la pâte",
      "inputs": [
        "creamed_butter",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "snickerdoodle_dough",
      "instructions": "Battre dans les œufs un à la fois, puis la vanille, grattant le bol. fouetter la farine, la crème de tartre, le bicarbonate de soude et le sel dans un bol séparé, ajouter au mélange de beurre et mélanger à basse vitesse jusqu'à ce qu'il ne reste plus de farine sèche. La pâte sera épaisse et douce, comme la pâte à biscuits.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse, lisse, pâle sans farine visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Flouries et taches sèches au fond du bol.",
            "action": "Terminer pliage à la main avec une spatule."
          },
          {
            "state": "Perfect",
            "description": "Pâte douce, uniforme et légèrement brillante qui tient sa forme lorsqu'elle est écopée.",
            "action": "Répartir dans la poêle."
          },
          {
            "state": "Overdone",
            "description": "Mélanger sur haute pendant longtemps; la pâte semble élastique et grasse.",
            "action": "Continuez — les barres peuvent être un peu plus difficiles."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir douce et légèrement collante, comme jouer de la pâte chaude dans votre main."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "snickerdoodle_dough",
        "ing_10",
        "ing_11"
      ],
      "outputState": "baked_bars",
      "instructions": "Étendre la pâte uniformément dans la casserole avec une spatule offset ou des doigts humides. Incorporer le sucre et la cannelle et le saupoudrer d'une couche uniforme sur toute la surface. Cuire de 22 à 28 minutes, jusqu'à ce que les bords soient dorés et s'éloignent de la poêle et que le centre soit gonflé et mis mais encore doux; un cure-dent au centre devrait sortir avec quelques miettes humides, pas de pâte humide.",
      "visualCue": {
        "primaryTarget": "Une croûte de cannelle-sucre gonflée et crépitée sur les bords dorés, avec un centre fixe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre est brillant, humide sous le sucre, et des jiggles; le cure-dent sort gooey.",
            "action": "Faites cuire encore 3-4 minutes."
          },
          {
            "state": "Perfect",
            "description": "Les bords sont dorés et s'éloignent; le centre est gonflé d'une croûte de cannelle mate riquée; le cure-dent présente des miettes humides.",
            "action": "Refroidir dans la casserole."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brun foncé et dur, et un cure-dent sort complètement sec.",
            "action": "Les barres seront plus fermes et cakey; tirer plus tôt la prochaine fois."
          }
        ]
      },
      "feelCue": "Le centre doit se sentir réglé mais doux et donner légèrement quand pressé, en s'enfonceant un peu comme il refroidit."
    },
    {
      "nodeId": "step_4",
      "action": "Frais",
      "inputs": [
        "baked_bars"
      ],
      "outputState": "snickerdoodle_bars",
      "instructions": "Laisser refroidir dans la poêle sur un support filaire pendant au moins 1 heure afin que le centre termine le réglage. Soulevez avec le parchemin et coupez en 24 barres avec un couteau tranchant, essuyant la lame entre les coupes.",
      "visualCue": {
        "primaryTarget": "Des carrés nettoyés avec une croûte de sucre interne dense et à croûte de sucre intacte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Couper au chaud — les frottis centraux et les barres s'écroulent.",
            "action": "Laisser refroidir complètement le reste de la dalle avant de couper."
          },
          {
            "state": "Perfect",
            "description": "Barres coupées proprement, douces et mâcheuses à l'intérieur, avec un plateau de cannelle crépitante.",
            "action": "Servir; maintenir l'étanchéité à la température ambiante jusqu'à 3 jours."
          },
          {
            "state": "Overdone",
            "description": "A découvert pendant une journée, et les bords ont séché et durci.",
            "action": "Conserver hermétiquement avec une tranche de pain pour les adoucir."
          }
        ]
      },
      "feelCue": "Le fond de la poêle doit se sentir complètement frais au toucher avant de couper."
    }
  ]
};
