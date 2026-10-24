export default {
  "repoId": "master_american_hushpuppies_001",
  "parentRepoId": null,
  "slug": "hushpuppies",
  "author": "ForkRecipe Kitchen",
  "title": "Autres",
  "description": "Fritters de maïs décortiquées, avec un noyau d'oignon sucré, lâchées par la cuillère dans de l'huile chaude jusqu'à ce qu'elles s'accroupissent à la surface avec une croûte ambre profonde.",
  "cuisine": "Américain",
  "culture": "Sud",
  "category": "breads",
  "tags": [
    "farine de maïs",
    "frits",
    "sud",
    "côté",
    "végétarien"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 5,
    "sour": 2,
    "bitter": 1,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de maïs jaune (mouture moyenne)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "farine de maïs blanche (arôme doux)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "Soda au four",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Beurre",
      "ratioValue": 3.5,
      "defaultUnit": "parts",
      "substitutions": [
        "lait entier + 1 c. à thé vinaigre (laisser reposer 5 min)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Binder",
      "name": "Grand œuf",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Oignon jaune, râpé finement",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "pétoncles (mineurs, moins sucrés)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "omit pour la version savoureuse"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Huile de friture (pois ou légumes), pour friture profonde",
      "ratioValue": 16,
      "defaultUnit": "parts",
      "substitutions": [
        "saindoux (plus authentique et plus savoureux)"
      ]
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
        "ing_05",
        "ing_09"
      ],
      "outputState": "dry_mix",
      "instructions": "Dans un grand bol, fouetter la farine de maïs, la poudre à pâte, le bicarbonate de soude, le sel et le sucre jusqu'à ce que les levains soient uniformément distribués. C'est important: la poudre à pâte et le bicarbonate de soude doivent être répartis uniformément dans le mélange sec avant que les ingrédients humides ne soient ajoutés, ou vous aurez des augmentations inégales et des poches de goût chimique.",
      "visualCue": {
        "primaryTarget": "Mélange à sec jaune pâle uniforme sans croûtes visibles de poudre à pâte ou de stries d'un seul ingrédient.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des amas blancs visibles de poudre à pâte ou de soude à pâte ne sont pas encore distribués dans la farine de maïs.",
            "action": "Frottez encore 10 à 15 secondes pour atteindre les coins du bol."
          },
          {
            "state": "Perfect",
            "description": "Poudre uniformément jaune pâle avec distribution uniforme de tous les ingrédients secs. Pas de bosses.",
            "action": "Faites un puits au centre et ajoutez les ingrédients humides."
          },
          {
            "state": "Overdone",
            "description": "S/O — les ingrédients secs ne peuvent pas être trop mélangés.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "Passez un doigt à travers le mélange sec — il devrait se sentir comme du sable jaune fin avec une texture légèrement grisâtre de la farine de maïs. Pas de taches collantes, pas de touffes humides."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "dry_mix",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "hushpuppy_batter",
      "instructions": "Dans un bol séparé, fouetter ensemble le babeurre, l'œuf et l'oignon râpé (utiliser les grands trous d'une boîte râpée — l'oignon râpé libère plus de jus que les dés et s'intègre plus uniformément). Verser les ingrédients humides dans le puits dans le mélange sec et remuer avec une fourchette jusqu'à ce qu'ils soient combinés — 15-20 coups maximum. Les lumps sont attendus et corrects. La pâte hushpuppy surmélangée développe trop de gluten et produit des beignets durs et denses au lieu de tendres. Reposez la pâte pendant 5 minutes avant de faire frire.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse et écorcable — à peu près la consistance d'une pâte épaisse à muffin — avec des morceaux visibles et sans poches sèches de farine ou de farine de maïs.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries sèches ou des poches de farines de maïs non mélangées sont visibles au fond du bol.",
            "action": "Plier dans les poches sèches avec 3 à 4 coups de plus. Ne pas trop corriger."
          },
          {
            "state": "Perfect",
            "description": "Légèrement grumeux, épais, pâte jaune pâle. Déposer une cuillère dans un seul blob plutôt que de couler. Parfums de babeurre et d'oignon cru.",
            "action": "Reposez-vous 5 minutes pendant le chauffage de l'huile pour laisser les levains s'activer."
          },
          {
            "state": "Overdone",
            "description": "La batterie est lisse et extensible — le gluten s'est développé. La pâte peut déjà se sentir élastique lorsqu'elle est agitée.",
            "action": "Reposez la pâte 10 minutes avant de faire frire et ne remuez plus. Les chushpuppies seront plus durs mais toujours bons."
          }
        ]
      },
      "feelCue": "La pâte devrait tomber d'une cuillère dans une seule patte lourde plutôt que de couler en douceur. Si vous maintenez la cuillère chargée de pâte à l'envers, elle devrait s'accrocher pendant 2-3 secondes avant de tomber. Trop mince signifie trop de liquide; trop épais signifie pas assez."
    },
    {
      "nodeId": "step_3",
      "action": "Chaleur",
      "inputs": [
        "ing_10"
      ],
      "outputState": "hot_fry_oil",
      "instructions": "Verser au moins 5 à 6 cm d'huile dans un pot lourd (four hollandais en fonte idéal). Chauffer sur une température moyennement élevée à 185 C (365 F). Utilisez un thermomètre — la température est la variable la plus importante dans la friture. Trop frais et les chiots absorbent l'huile et sont gras et pâles. Trop chaud et l'extérieur brûle avant que l'intérieur ne passe.",
      "visualCue": {
        "primaryTarget": "L'huile est chatoyante avec un mouvement doux à la surface. Une petite goutte de pâte est tombée brièvement dans les puits, puis s'élève immédiatement, entouré de bulles vigoureuses.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pièce d'essai de battement coule et s'assied sur le fond. Les bulles sont lentes et paresseuses. Température inférieure à 175 C.",
            "action": "Continuez le chauffage. La friture dans l'huile fraîche produit des hushpuppies huileux et denses."
          },
          {
            "state": "Perfect",
            "description": "L'éprouvette de battement coule 2 cm, puis se lève en 5 secondes, entourée de bouillons vigoureux et actifs. La température est de 183 à 188 C.",
            "action": "Réduire le feu à moyen pour maintenir la température pendant la friture. Ajouter les hushpuppies en lots."
          },
          {
            "state": "Overdone",
            "description": "L'huile fume et l'éprouvette brunit en moins de 30 secondes. Température supérieure à 200 C.",
            "action": "Retirer du feu et laisser refroidir 2–3 minutes. L'huile surchauffée brûlera l'extérieur tout en laissant l'intérieur brut."
          }
        ]
      },
      "feelCue": "Tenez votre paume à 15 cm au - dessus de la surface de l'huile — vous devriez sentir une chaleur forte et constante poussant vers le haut. L'air directement au-dessus du pot devrait mijoter visiblement lorsqu'il est vu du côté."
    },
    {
      "nodeId": "step_4",
      "action": "Fry",
      "inputs": [
        "hushpuppy_batter",
        "hot_fry_oil"
      ],
      "outputState": "finished_hushpuppies",
      "instructions": "Utilisez deux cuillères mouillées ou une petite boule de crème glacée pour déposer des portions de pâte de noyer dans l'huile, en travaillant en lots de 6 à 8 (surpeuplement baisse la température de l'huile). Les hushpuppies couleront brièvement, commenceront à former une croûte, puis se rouleront comme les levains créent une poche de vapeur inégale — cette auto-roulement est le signe d'une pâte bien faite. Fry 3-4 minutes au total, tourner une fois s'ils ne roulent pas sur leur propre, jusqu'à ce que l'or profond brun partout. Égoutter sur un porte-fils, pas des serviettes en papier.",
      "visualCue": {
        "primaryTarget": "De tous les côtés, de couleur ambrée, uniforme, avec une surface légèrement irrégulière de la farine de maïs et une croûte visible. Le hushpuppy doit avoir l'air gonflé et arrondi, et non plat.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle avec une croûte douce et productive qui vacille facilement lorsqu'on la presse. L'intérieur sera gommé ou cru.",
            "action": "Retourner à l'huile pendant 60 à 90 secondes de plus. La couleur extérieure est un guide fiable, c'est - à - dire pâle."
          },
          {
            "state": "Perfect",
            "description": "Deep ambre-brun, complètement arrondi, avec une croûte ferme qui résiste à la légère pression. L'intérieur doit se sentir aéré lorsqu'il est pressé très doucement.",
            "action": "Égoutter sur une grille. Servir immédiatement — les chushpuppies sont préférables dans les 10 minutes suivant la friture."
          },
          {
            "state": "Overdone",
            "description": "Marron foncé aux bords noirs. La croûte a craqué. Une odeur amère de farine de maïs brûlée.",
            "action": "Couper les bords les plus sombres avec des ciseaux ou jeter. L'intérieur peut encore être bon. Réduire la chaleur pour le prochain lot."
          }
        ]
      },
      "feelCue": "Un hushpuppy parfaitement frit ramassé entre deux doigts devrait se sentir rigide à l'extérieur, mais avoir un léger don au centre — comme un guimauve ferme avec une coquille croquante. La croûte devrait faire un léger bruit de craquelage sec lorsqu'elle est pressée légèrement."
    }
  ]
};
