export default {
  "repoId": "master_american_spatchcocked_herb_chicken_001",
  "parentRepoId": null,
  "slug": "spatchcocked-herb-chicken-potatoes",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Poulet aux herbes spatchcockées avec pommes de terre",
  "description": "Un poulet entier s'ouvrit à plat pour qu'il rôtisse uniformément et rapidement, sa peau éclatant sur le beurre d'herbe ailky tandis que les pommes de terre en dessous frisaient dans le schmaltz goutte à goutte jusqu'à ce qu'elles soient croustillantes et assaisonnées.",
  "cuisine": "Américain",
  "culture": "Cuisine maison américaine",
  "category": "proteins",
  "tags": [
    "poulet",
    "rôti",
    "Rôti du dimanche",
    "pommes de terre",
    "herbes",
    "1 pan",
    "cuisine maison",
    "weekend"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "2 hr 15 min",
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
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Poulet entier (environ 2 kg / 4,5 lb), séché",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "deux petits oiseaux de 1,3 kg, rôtis côte à côte"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 22,
      "defaultUnit": "g",
      "substitutions": [
        "sel de mer fin (utiliser environ 15 g)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé, ramolli",
      "ratioValue": 45,
      "defaultUnit": "g",
      "substitutions": [
        "huile d'olive (la peau brunit moins profondément)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Ail, râpé finement",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Thym, feuilles dépouillées",
      "ratioValue": 6,
      "defaultUnit": "sprigs",
      "substitutions": [
        "origan"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Rosaire, feuilles finement hachées",
      "ratioValue": 2,
      "defaultUnit": "sprigs",
      "substitutions": [
        "Sauge"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Citrus",
      "name": "Citron (zest dans le beurre, moitié torréfié dans la poêle)",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Starch",
      "name": "Yukon Pommes de terre d'or, coupées en morceaux de 4 cm",
      "ratioValue": 1300,
      "defaultUnit": "g",
      "substitutions": [
        "Pommes de terre à peau rouge",
        "Aiguilles, coupées en deux"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Spatchcock et saumure sèche",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "brined_flat_chicken",
      "instructions": "Pose la poitrine de poulet. Avec des cisailles de cuisine robustes, couper les deux côtés de l'épine dorsale et l'enlever (enregistrer pour le stock). Dépliez l'oiseau, éjaculez les jambes, et appuyez fermement sur la poitrine avec le talon de votre main jusqu'à ce que vous le sentiez craquer et l'oiseau se couche à plat. Sécher la pate, puis arroser environ 16 g de sel uniformément sur les deux côtés. Réfrigérer à découvert sur une grille pendant au moins 1 heure, ou jusqu'à 24 heures pour la peau la plus croustillante.",
      "visualCue": {
        "primaryTarget": "Un oiseau d'épaisseur uniforme, les jambes tournées vers l'extérieur, la poitrine aplatie, la peau sèche et légèrement mate.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'os du sein n'est pas fissuré — la poitrine est encore haut au-dessus des cuisses, ce qui la laissera trop cuite au moment où les jambes sont faites.",
            "action": "Appuyez plus fort sur la quille avec les deux mains empilées jusqu'à ce que vous entendiez une fissure et l'oiseau se détend à plat."
          },
          {
            "state": "Perfect",
            "description": "Les seins et les cuisses s'assoient à peu près à la même hauteur; après le repos découvert la peau semble tendue, sèche et légèrement translucide sur la graisse.",
            "action": "Passez au beurre d'herbe."
          },
          {
            "state": "Overdone",
            "description": "Brisée beaucoup plus longtemps qu'une journée — la peau est cireuse et les bords les plus fins ont obscurci.",
            "action": "Toujours utilisable ; sautez tout sel sur le poulet et frottez généreusement le beurre."
          }
        ]
      },
      "feelCue": "Après la saumure sèche, la peau doit se sentir comme un parchemin sec sous le bout des doigts, sans crosse, sans perles d'humidité."
    },
    {
      "nodeId": "step_2",
      "action": "Beurre sous la peau",
      "inputs": [
        "brined_flat_chicken",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_10"
      ],
      "outputState": "buttered_chicken",
      "instructions": "Chauffer le four à 450°F (250°C) avec une grille en position médiane supérieure. Mâcher le beurre ramolli avec l'ail, les feuilles de thym, le romarin, le zeste du citron et beaucoup de poivre noir. Faites glisser vos doigts sous la peau de la poitrine et des cuisses pour le desserrer sans déchirer, puis poussez la plupart du beurre en dessous et massez-le uniformément de l'extérieur. Enlevez le reste sur la peau.",
      "visualCue": {
        "primaryTarget": "Une couche uniforme de beurre d'herbe tacheté visible à travers la peau, couvrant la poitrine et les cuisses.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Beurre assis dans une masse près de l'ouverture du cou; les cuisses et la poitrine loin n'ont pas.",
            "action": "Appuyez de l'extérieur de la peau et glissez le beurre vers les jambes et sur la poitrine."
          },
          {
            "state": "Perfect",
            "description": "Un film mince et vert montre partout la peau, la peau restant intacte.",
            "action": "Allez aux pommes de terre."
          },
          {
            "state": "Overdone",
            "description": "La peau s'est déchirée à travers la poitrine et le beurre est frotté à l'extérieur seulement.",
            "action": "Retirez la peau lâche sur la déchirure; quelques trous vont juste brunir un peu inégalement."
          }
        ]
      },
      "feelCue": "Le beurre doit être assez doux pour se répandre comme du fromage à la crème à température ambiante — s'il résiste, réchauffez le bol dans vos mains pendant une minute."
    },
    {
      "nodeId": "step_3",
      "action": "Rôtis",
      "inputs": [
        "buttered_chicken",
        "ing_08",
        "ing_09",
        "ing_02"
      ],
      "outputState": "roasted_chicken_potatoes",
      "instructions": "Mélanger les pommes de terre avec l'huile d'olive, le sel restant et le poivre, et les répartir en une seule couche dans une grande poêle à feuilles bordées (environ 33 × 46 cm). Nettoyez le citron zesté, coupé en deux et coupé en deux. Placez la peau de poulet sur le dessus des pommes de terre, les jambes pointées vers l'arrière du four. Faire rôtir 45 à 55 minutes, jusqu'à ce que la peau soit d'or profond et qu'un thermomètre à lecture instantanée dans la partie la plus épaisse de la cuisse (sans toucher l'os) indique 165°F (74°C); lire au moins 155 à 160°F (68 à 71°C).",
      "visualCue": {
        "primaryTarget": "Peau d'or profond, blister, jus qui sort de l'articulation de la cuisse et pommes de terre croustillantes et dorées où elles touchent la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est d'or pâle et douce; les jus roses s'infiltrent lorsque vous percez entre la jambe et le corps; la cuisse se situe en dessous de 165°F (74°C).",
            "action": "Retournez au four et vérifiez toutes les 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "La peau est acajou-or et crépitée, la cuisse lit 165°F (74°C), et les pommes de terre sont brillantes avec de la graisse et dorées sur leur face inférieure.",
            "action": "Retirer du four et se reposer."
          },
          {
            "state": "Overdone",
            "description": "La peau a noirci au bout des ailes et la poitrine est bien au-dessus de 165°F (74°C); les pommes de terre aux bords sont sombres et durs.",
            "action": "Repose-le de toute façon et cuillere le jus de poêle sur la poitrine tranchée pour l'aider."
          }
        ]
      },
      "feelCue": "Percez un pilon — il devrait se déplacer librement dans l'articulation. La peau doit craquer audiquement lorsqu'elle est tapée d'une cuillère."
    },
    {
      "nodeId": "step_4",
      "action": "Repos",
      "inputs": [
        "roasted_chicken_potatoes"
      ],
      "outputState": "carved_chicken_dinner",
      "instructions": "Déplacez le poulet sur une planche à découper et reposez 10 à 15 minutes. Pendant ce temps, jetez les pommes de terre dans les jus de cuisson et retournez-les au four pendant 5 minutes s'ils ont besoin de plus de croquant. Découpez le poulet en jambes, cuisses, ailes et poitrine coupée, pressez le citron rôti sur tout et servez sur les pommes de terre.",
      "visualCue": {
        "primaryTarget": "Les tranches de poitrine qui sont humides et scintillent, pas le jus de pulpe à travers le bord.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Séparé immédiatement — le jus inonde la planche et les tranches sèchent en quelques minutes.",
            "action": "Attendez les 10 prochaines minutes; cuillerez le jus de planche sur la viande maintenant."
          },
          {
            "state": "Perfect",
            "description": "Les tranches sont brillantes et tiennent leurs jus; la peau reste croquante; les pommes de terre sont enrobées de gouttes salées.",
            "action": "Servez."
          },
          {
            "state": "Overdone",
            "description": "Reposé 40+ minutes — la viande est tiède et la peau s'est adoucie.",
            "action": "Faites clignoter les morceaux sculptés côté peau sous le grille-pain pendant une minute."
          }
        ]
      },
      "feelCue": "Presser un pouce dans la poitrine reposée devrait se sentir printanière et ferme, comme la base charnue de votre pouce, sans liquide se précipitant."
    }
  ]
};
