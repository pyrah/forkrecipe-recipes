export default {
  "repoId": "master_american_buttermilk_pancakes_001",
  "parentRepoId": null,
  "slug": "buttermilk-pancakes",
  "author": "ForkRecipe Kitchen",
  "title": "Pancakes au lait de vache",
  "description": "La crêpe de dîner américaine définitive, épaisse et nuageuse, avec un léger tang du vrai babeurre et une croûte d'or caramel sur les deux visages. La pâte est gratinée, la grille est assaisonnée et le beurre est bruni. Tout le reste n'est que du sirop.",
  "cuisine": "Américain",
  "culture": "Diner américain",
  "category": "eggs",
  "tags": [
    "Crêpes",
    "Petit déjeuner",
    "beurre",
    "dîner",
    "brunch",
    "grille"
  ],
  "difficulty": 1,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 2,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
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
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Beurre, température ambiante",
      "ratioValue": 300,
      "defaultUnit": "ml",
      "substitutions": [
        "lait entier + 1 c. à soupe de vinaigre blanc"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Binder",
      "name": "Gros œufs",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Beurre non salé, fondu et légèrement refroidi",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "huile neutre"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whisk",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "dry_mix",
      "instructions": "Dans un grand bol, fouetter ensemble la farine, la poudre à pâte, le bicarbonate de soude, le sel et le sucre jusqu'à ce qu'ils soient uniformément combinés. Faites un puits au centre. Les ingrédients secs n'ont pas besoin de tamiser, mais doivent être entièrement mélangés avant d'ajouter du liquide.",
      "visualCue": {
        "primaryTarget": "Une poudre pâle homogène avec un bien formé au centre. Pas de grumeaux de poudre blanche visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poudre de cuisson visible comme des taches blanches. Sel non distribué.",
            "action": "fouetter encore 30 secondes, pour atteindre les coins du puits."
          },
          {
            "state": "Perfect",
            "description": "Uniforme, moelleux, poudre pâle. Bien centré et propre.",
            "action": "Passer au mélange humide."
          },
          {
            "state": "Overdone",
            "description": "Sans objet.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "Le mélange sec doit se sentir soyeux et léger quand vous passez vos doigts à travers elle — pas de graisse du sel non dissout ou des amas de sucre."
    },
    {
      "nodeId": "step_2",
      "action": "Whisk",
      "inputs": [
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "wet_mix",
      "instructions": "Dans un bol intermédiaire séparé, fouetter ensemble le babeurre, les œufs et le beurre fondu (mais non chaud) jusqu'à ce qu'il soit combiné. Le beurre fondu doit être assez chaud pour rester liquide mais pas si chaud qu'il commence à cuire les œufs. Le mélange sera légèrement caillé ou cassé — c'est normal et fin.",
      "visualCue": {
        "primaryTarget": "Un liquide jaune pâle, légèrement strié avec le beurre incorporé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Beurre s'est solidifié en flocons cireux d'être ajouté trop froid.",
            "action": "Chauffer brièvement le bol ou fouetter plus vigoureusement. Le beurre légèrement grumelé sera distribué dans la pâte."
          },
          {
            "state": "Perfect",
            "description": "Liquide jaune pâle lisse. Légèrement mousseux des œufs. Beurre incorporé dans tout.",
            "action": "Bien verser dans les ingrédients secs."
          },
          {
            "state": "Overdone",
            "description": "Le beurre s'est séparé vers le haut comme une couche claire — trop chaude lorsqu'il est ajouté.",
            "action": "Laisser refroidir pendant 2 minutes et fouetter à nouveau avant de combiner."
          }
        ]
      },
      "feelCue": "Plongez un doigt — le mélange humide devrait se sentir à la température du corps ou plus frais, jamais chaud au toucher. Le beurre chaud fera cuire les œufs et créera des morceaux à cordes."
    },
    {
      "nodeId": "step_3",
      "action": "Plier",
      "inputs": [
        "dry_mix",
        "wet_mix"
      ],
      "outputState": "pancake_batter",
      "instructions": "Verser les ingrédients humides dans le puits dans les ingrédients secs. À l'aide d'une spatule en caoutchouc, plier en même temps que de grands traits circulaires — grattant le fond du bol avec chaque passe — jusqu'à ce qu'ils soient à peine combinés. Il ne reste plus de traces de farine sèche. La pâte doit être épaisse et grumelée avec des bosses et des poches visibles. Les lumps sont obligatoires : ce sont des poches de farine et de gaz qui créent l'intérieur moelleux. Laisser reposer la pâte 5 minutes avant la cuisson.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse et bosselée avec des bosses bien visibles. Pas de stries de farine sèche mais pas lisse — la texture doit ressembler à de l'avoine.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des éclats de farine sèche encore visibles. Séchage au fond du bol.",
            "action": "Plier encore trois fois, gratter le fond. Alors arrête."
          },
          {
            "state": "Perfect",
            "description": "C'est juste une pâte épaisse. Surface lumpy. Des rubans de battement épais sur la spatule. De grandes bulles se forment comme des levains s'activent.",
            "action": "Laisser reposer 5 minutes, puis cuire immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Batter est complètement lisse et courir mince. Gluten développé, gaz battu.",
            "action": "Laissez reposer 10 minutes — il fera encore des crêpes décentes mais elles seront légèrement denses."
          }
        ]
      },
      "feelCue": "Lorsque vous soulevez la spatule, la pâte doit tomber dans des rubans épais et lents et bomber brièvement avant de se déposer — si elle s'écoule dans un cours d'eau mince, elle est soit trop fine, soit trop mélangée."
    },
    {
      "nodeId": "step_4",
      "action": "Fry",
      "inputs": [
        "pancake_batter"
      ],
      "outputState": "buttermilk_pancakes",
      "instructions": "Chauffer une poêle en fonte ou une poêle antiadhésive à feu moyen. Ajouter une petite tape de beurre et laisser mousser, puis laisser tomber. Lorsque la mousse meurt et que la poêle sent peu le beurre grillé, elle est prête. Verser 1/3 tasse de pâte par crêpe. Cuire jusqu'à ce que les bulles se forment sur toute la surface et que les bords soient fixés et mats — pas brillants — environ 2 à 3 minutes. Plongez une fois et faites cuire jusqu'à ce que le second côté soit doré-brun, 1 à 2 minutes de plus. Ne pressez pas les crêpes.",
      "visualCue": {
        "primaryTarget": "Premier côté doré-brun avec un bord mat, entièrement enroulé. Surface couverte de bulles soufflées avant le flip. Deuxième côté, un or profond assorti.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des bords encore brillants et mouillés. Seulement quelques bulles. Blond pâle quand flippé — intérieur est pâte crue.",
            "action": "Revenez à la chaleur. Ne pas retourner jusqu'à ce que les bords soient complètement mates et fixés."
          },
          {
            "state": "Perfect",
            "description": "De l'or caramel profond des deux côtés. Le pancake s'est levé visiblement — il devrait être léger et oreiller lorsqu'il est levé. Les bords sont croquants et secs.",
            "action": "Servir immédiatement. Mettez-vous sur une assiette chaude."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé approchant brûlé. Le centre a séché. Deuxième côté développé avant l'intérieur a été cuit à travers.",
            "action": "Abaissez la chaleur pour les crêpes suivantes. Une grille bien chauffée produit de l'or, pas du brun foncé."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur le centre du crêpe d'un doigt — il devrait revenir immédiatement et sentir la lumière, comme presser un oreiller. Si ça laisse une bosse, retournez-la et faites cuire plus."
    }
  ]
};
