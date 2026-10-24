export default {
  "repoId": "master_american_apple_pie_001",
  "parentRepoId": null,
  "slug": "apple-pie",
  "author": "ForkRecipe Kitchen",
  "title": "Pâte à pommes américaine classique double croûte",
  "description": "La norme américaine — une croûte de saindoux et de beurre encombrée d'un sucre brun cannelle rempli de pommes finement coupées qui ont libéré et réabsorbé leur jus dans un intérieur brillant et confitureux. La croûte supérieure est lattée, brûlée avec des œufs et du sucre, crépitée et ambre aux bords.",
  "cuisine": "Américain",
  "culture": "Américain",
  "category": "desserts",
  "tags": [
    "tarte",
    "pomme",
    "dessert",
    "Cuisson",
    "pâtisserie",
    "jour férié",
    "à double croûte"
  ],
  "difficulty": 3,
  "activeTime": "60 min",
  "totalTime": "3 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 2,
    "bitter": 0,
    "umami": 0,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général (pour croûte)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé, très froid, cube",
      "ratioValue": 115,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Shortening lard ou légume, froid",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "tout beurre (ajouter 1 c. à soupe de farine)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Hydration",
      "name": "Eau glacée",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin (pour croûte)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Granny Smith et Honeycrisp pommes (mélangées), pelées, décortiquées, coupées en tranches de 5 mm",
      "ratioValue": 1.2,
      "defaultUnit": "kg",
      "substitutions": [
        "Tout Granny Smith pour une tarte aux tartes"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Sucre brun clair + sucre granulé (mixed egal parts)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Starch",
      "name": "Farine de maïs (remplissage épaississant)",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": [
        "Amidon de tapioca",
        "Farine universelle (utilisation 35 g)"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Binder",
      "name": "Oeufs + 1 c. à soupe de crème (pour laver les œufs)",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "pie_dough",
      "instructions": "Dans un grand bol, fouetter la farine et le sel. Ajouter le beurre froid et le saindoux. À l'aide de votre bout des doigts, tricotez les graisses dans la farine jusqu'à ce que le mélange ressemble à des miettes grossières avec des flocons de beurre plus larges et plats — ces flocons créent des couches de flocons. Ne pas surmener. Plongez dans l'eau glacée 1 cuillerée à soupe à la fois, jetant avec une fourchette. Arrêtez d'ajouter de l'eau quand la pâte se tient juste ensemble lorsqu'elle est pincée. Divisez en deux, aplatissez en disques, enveloppez et réfrigérez au moins 2 heures ou pendant la nuit.",
      "visualCue": {
        "primaryTarget": "Un disque de pâte rugueux avec des flocons de beurre plats visibles. Shaggy aux bords mais tient sa forme lorsqu'il est pressé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux s'écroule lorsqu'elle est pressée. Trop sec ou pas assez d'eau.",
            "action": "Ajouter de l'eau glacée 1 c. à thé à la fois, jeter, jusqu'à ce que la pâte se maintienne lorsqu'elle est pincée."
          },
          {
            "state": "Perfect",
            "description": "Disque dur et chaotique avec des stries de beurre plat visibles. Se tient ensemble sous pression légère mais pas collant ou lisse.",
            "action": "Envelopper en plastique et réfrigérer au moins 2 heures."
          },
          {
            "state": "Overdone",
            "description": "Pâte lisse et élastique. Le gluten s'est développé, pas de stries graisseuses visibles.",
            "action": "Enrouler et réfrigérer 2 heures avant de rouler — le reste relâchera un peu le gluten."
          }
        ]
      },
      "feelCue": "Le disque de pâte doit se sentir frais et légèrement cireux de la graisse — pas chaud et pâteux. Appuyez sur un pouce : l'indentation tient, mais la pâte ne colle pas à votre pouce."
    },
    {
      "nodeId": "step_2",
      "action": "Faire mariner",
      "inputs": [
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "macerated_apples",
      "instructions": "Mélanger les pommes coupées avec le sucre, la cannelle, la fécule de maïs et le jus de citron. Mets-toi à manteaur. Laisser reposer 30 minutes à température ambiante — le sucre sortira du liquide des pommes. Égoutter le jus libéré dans une petite casserole, le réduire à un sirop épais à feu moyen et le verser sur les pommes. Cette étape de préréduction empêche l'écart qui se forme entre la croûte et le remplissage lorsque les jus ébullition pendant la cuisson.",
      "visualCue": {
        "primaryTarget": "Des tranches de pommes scintillent dans un sirop épais, teinté de caramel. Aucun excès de liquide libre dans le bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tranches sont encore sèches et blanches. Très peu de jus a été tiré.",
            "action": "Attendez plus longtemps — 30 minutes est minimum. Les pommes froides peuvent nécessiter 45 minutes."
          },
          {
            "state": "Perfect",
            "description": "Les tranches de pommes sont légèrement brillantes avec un sirop de caramel. Le jus réduit a été réabsorbé. Pas de flaque aqueuse au fond du bol.",
            "action": "Remplissez la coquille de tarte immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les pommes sont devenues si macérées qu'elles commencent à devenir douces et musquées.",
            "action": "Égoutter complètement et cuire rapidement. Le remplissage sera jammy mais toujours délicieux."
          }
        ]
      },
      "feelCue": "Ramassez une tranche — elle doit être souple et brillante, se pliant légèrement plutôt que de se casser, et se sentir légèrement collante du sirop."
    },
    {
      "nodeId": "step_3",
      "action": "Assembler",
      "inputs": [
        "pie_dough",
        "macerated_apples"
      ],
      "outputState": "assembled_pie",
      "instructions": "Sur une surface légèrement farinée, rouler le premier disque de pâte dans un cercle de 30 cm, d'environ 3 à 4 mm d'épaisseur. Drapé dans un plat à tarte de 23 cm, presser dans les coins sans s'étirer. Pile le remplissage de la pomme dans la coquille, la foulant plus haut que la jante — il se déposera pendant la cuisson. Rouler le deuxième disque et le déposer sur le dessus, ou couper en bandes pour un treillis. Trim à 1,5 cm de surplomb, plier sous et sertir le bord. Couper les évents de vapeur en utilisant une croûte pleine. Réfrigérer la tarte assemblée pendant 30 minutes avant de la cuire.",
      "visualCue": {
        "primaryTarget": "Une coquille de tarte bien sertie remplie d'un monticule de tranches de pomme, en croûte supérieure lattis ou éventée, assise uniformément sur le remplissage.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Remplir d'un côté. La croûte supérieure n'est pas scellée. Des bords qui craquent.",
            "action": "Reformer les bords, recentrer le remplissage et réfrigérer 30 minutes pour régler la forme."
          },
          {
            "state": "Perfect",
            "description": "Même le monticule de remplissage, le bord serré serti, la croûte supérieure lisse avec des évents bien coupés. La croûte semble froide et ferme.",
            "action": "Badigeonner avec les œufs et cuire."
          },
          {
            "state": "Overdone",
            "description": "Sans objet pour le montage. Passer à la cuisson.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "La tarte assemblée doit se sentir froide et raide lorsqu'elle est levée du réfrigérateur — la graisse de la croûte doit être complètement solidifiée. Une tarte chaude et douce entrant dans le four se rétrécira et perdra sa forme."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "assembled_pie",
        "ing_11"
      ],
      "outputState": "baked_apple_pie",
      "instructions": "Préchauffer le four à 220 °C (425 °F) avec une plaque sur la grille inférieure (ce qui conduit à la chaleur de la croûte inférieure). Badigeonner le dessus de la croûte avec un lavage d'oeufs et disperser une pincée de sucre granulé dessus. Cuire à 220 °C pendant 20 minutes jusqu'à ce que les bords commencent à se fixer et à colorer. Réduisez le feu à 190 C (375 F) et continuez à cuire 35 à 45 minutes jusqu'à ce que la croûte soit profondément dorée et que le remplissage soit visiblement bouillonnant dans les évents. Laisser refroidir sur une grille pendant au moins 3 heures avant de trancher — le remplissage épaissit à mesure qu'il refroidit.",
      "visualCue": {
        "primaryTarget": "Un treillis ou une croûte brun-ambre profond, doré et craqué. Remplir visiblement par des évents ou entre des bandes de treillis. Pas de taches pâles de pâte non cuite.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Une croûte blonde pâle. Remplir sans bouillonner du tout à travers les évents. La croûte inférieure est probablement encore crue.",
            "action": "Continuer la cuisson. Tente les bords avec du papier s'ils s'obscurcissent alors que le centre est encore pâle."
          },
          {
            "state": "Perfect",
            "description": "Tope ambre-brun profond avec bords caramélisés. Remplir activement dans les évents, le remplissage n'est pas aqueux. Des bruits de mijotage doux à l'intérieur lorsqu'ils sont levés.",
            "action": "Laisser refroidir sur une grille au moins 3 heures avant de trancher."
          },
          {
            "state": "Overdone",
            "description": "Une croûte brun très foncé. Les bords sont presque brûlés. Le remplissage a fait des bulles sur le plancher du four.",
            "action": "Couvrir de papier et retirer du four. Le remplissage intérieur est probablement parfait — la croûte est le sacrifice."
          }
        ]
      },
      "feelCue": "Lorsque vous inclinez légèrement la tarte refroidie, le remplissage ne devrait pas s'enliser — s'il se déplace encore comme du liquide après 3 heures de refroidissement, il n'a pas complètement réglé et s'écoule lorsque tranché. La patience est structurelle ici."
    }
  ]
};
