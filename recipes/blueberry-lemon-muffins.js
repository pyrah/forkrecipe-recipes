export default {
  "repoId": "master_american_blueberry_lemon_muffins_001",
  "parentRepoId": null,
  "slug": "blueberry-lemon-muffins",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Muffins de citron de myrtilles",
  "description": "De grands muffins tendres couronnés d'un haut de sucre croquant, leur mijot doux à la crème aigre éclatant de bleuets confitureux et éclairés de zeste de citron frais.",
  "cuisine": "Américain",
  "culture": "Cuisson maison américaine",
  "category": "desserts",
  "tags": [
    "Muffins",
    "bleuets",
    "citron",
    "Petit déjeuner",
    "brunch",
    "cuisine maison",
    "Cuisson"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "45 min",
  "ratioSystem": "weight",
  "servings": 12,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 2,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 260,
      "defaultUnit": "g",
      "substitutions": [
        "60 g de farine de pâte de blé entier au lieu de 60 g de PA"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "Soda au four",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 170,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Citrus",
      "name": "Citron, zeste et jus",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Binder",
      "name": "Gros œufs, température ambiante",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Dairy",
      "name": "Crème aigre, pleine graisse",
      "ratioValue": 180,
      "defaultUnit": "g",
      "substitutions": [
        "yogourt grec à lait entier"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Beurre non salé fondu et légèrement refroidi",
      "ratioValue": 115,
      "defaultUnit": "g",
      "substitutions": [
        "huile neutre, 100 ml"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 5,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Sweetener",
      "name": "Bleuets frais (ou congelés, non dégelés)",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "framboises",
        "fraises hachées"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Garnish",
      "name": "Sucre Turbinado, pour garniture",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": [
        "sucre granulé mélangé avec une pincée de zeste de citron"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "fouetter les ingrédients humides",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "muffin_wet_mix",
      "instructions": "Chauffer le four à 400°F (200°C) et allonger une boîte à muffins standard de 12 tasses avec des doublures en papier (ou bien graisser). Dans un grand bol, frotter le zeste de citron dans le sucre avec le bout des doigts jusqu'à odorat. fouetter les œufs jusqu'à ce qu'ils soient lisses, puis la crème sure, le lait, le beurre fondu, la vanille et 15 ml du jus de citron.",
      "visualCue": {
        "primaryTarget": "Un mélange lisse, épais, jaune pâle sans grumeaux de crème aigre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux blancs de crème sure flottent dans le mélange.",
            "action": "Continuez à fouetter jusqu'à ce qu'il soit lisse."
          },
          {
            "state": "Perfect",
            "description": "Lisses et crémeuses, l'épaisseur de la crème lourde.",
            "action": "Ajouter les ingrédients secs."
          },
          {
            "state": "Overdone",
            "description": "Le beurre était froid et s'est emparé de petites taches jaunes.",
            "action": "Placer le bol sur de l'eau tiède brièvement et fouetter jusqu'à ce qu'il soit lisse."
          }
        ]
      },
      "feelCue": "Le mélange doit s'écouler du fouet dans un ruisseau épais, même sans râpe du sucre."
    },
    {
      "nodeId": "step_2",
      "action": "Incorporer délicatement",
      "inputs": [
        "muffin_wet_mix",
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_12"
      ],
      "outputState": "muffin_batter",
      "instructions": "Dans un bol séparé, fouetter la farine, la poudre à pâte, le bicarbonate de soude et le sel. Prenez 1 c. à soupe et lancez avec les bleuets. Ajouter le reste au mélange humide et plier avec une spatule 10-12 coups, juste jusqu'à ce que la plupart combinés avec quelques stries farineuses. Ajouter les bleuets et plier 3 à 4 traits de plus jusqu'à ce qu'aucune farine sèche ne montre. La pâte doit être épaisse et bosselée.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse et grumelée avec des bleuets distribués dans toutes les poches et sans poches sèches.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les poches de farine sèche sont visibles sur le fond.",
            "action": "Plier 2 à 3 coups de plus du bas vers le haut."
          },
          {
            "state": "Perfect",
            "description": "Épais, grumeaux et écorcables, avec des baies intactes et quelques petites stries violettes.",
            "action": "Portion immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La batte est lisse, stretchy et striée fortement pourpre avec des baies concassées.",
            "action": "Faites-le cuire, attendez-vous à une miette plus serrée et à des sommets plus plats."
          }
        ]
      },
      "feelCue": "La spatule devrait sentir la résistance, comme plier les épais flocons d'avoine, plutôt que de glisser à travers une pâte versable."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "muffin_batter",
        "ing_13"
      ],
      "outputState": "baked_muffins",
      "instructions": "Divisez la pâte uniformément parmi les 12 tasses (environ 85 g chacune) – elles seront remplies au sommet, ce qui donne un grand dôme. Saupoudrer généreusement de sucre turbinado. Cuire de 18 à 22 minutes, jusqu'à ce qu'un dôme et un cure-dent au centre d'un muffin sortent propres ou avec quelques miettes humides (les streaks de jus de baies violettes sont fins; pâte humide n'est pas). Laisser refroidir 5 minutes dans l'étain, puis transférer sur un rack.",
      "visualCue": {
        "primaryTarget": "Dômes hauts, dorés, fissurés avec des croûtes de sucre mousseux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les dessus sont pâles et brillants dans les fissures, et le cure-dent sort avec une pâte humide.",
            "action": "Faire cuire encore 2-3 minutes et tester à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Dômes dorés à bord brun clair, croûte de sucre croustillante, cure-dent propre ou avec miettes humides, et le dessus ressort quand pressé.",
            "action": "Laisser refroidir 5 minutes dans l'étain."
          },
          {
            "state": "Overdone",
            "description": "Des côtés brun foncé et une miette sèche et friable.",
            "action": "Servir au chaud avec du beurre; tirer le lot suivant 3 minutes plus tôt."
          }
        ]
      },
      "feelCue": "Une légère pression sur le dôme devrait revenir immédiatement, et la croûte de sucre devrait craquer sous votre bout de doigt."
    }
  ]
};
