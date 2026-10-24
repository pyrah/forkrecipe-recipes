export default {
  "repoId": "master_french_beurre_blanc_001",
  "parentRepoId": null,
  "slug": "beurre-blanc",
  "author": "ForkRecipe Kitchen",
  "title": "Beurre Blanc",
  "description": "La grande sauce au beurre blanc de la Loire — une réduction de tarte de vin, de vinaigre et d'échalote fouettée goutte à goutte avec du beurre froid jusqu'à ce qu'elle se gonfle dans une lumière d'émulsion pâle et brillante assez pour enrober un filet de poisson pourtant assez riche pour le faire chanter. Une sauce qui vit ou meurt à la température: trop fraîche et elle ne se réunit jamais, trop chaude et se divise en ruine huileuse.",
  "cuisine": "Français",
  "culture": "Nantais",
  "category": "sauces",
  "tags": [
    "sauce",
    "français",
    "beurre",
    "émulsion",
    "beurre-blanc",
    "monté"
  ],
  "difficulty": 3,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 3,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Beurre froid non salé (découpé en cubes de 2 cm, conservé réfrigéré)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Beurre cultivé de style européen"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Vin blanc sec (Muscadet ou Sauvignon Blanc)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "Vermouth sec"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de champagne"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Échalote (très finement hachée)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "échalote grise"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Crème lourde (facultatif, pour la stabilité)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Crème fraîche"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "fleur de sel"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Citrus",
      "name": "Jus de citron (pour finir, pour goûter)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Poivre blanc et ciboulette ennivée (facultatif)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "estragon"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Réduire",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "shallot_reduction",
      "instructions": "Dans une petite casserole non réactive, mélanger le vin blanc, le vinaigre et l'échalote hachée. Porter à mijoter à feu moyen et réduire jusqu'à ce qu'il soit presque sec — seulement 1 à 2 cuillères à soupe de sirupeux, le liquide brillant reste parmi les échalotes douces, 5 à 7 minutes. Cette base concentrée et acide est ce qui tiendra le beurre en suspension.",
      "visualCue": {
        "primaryTarget": "La poêle contient une petite flaque sirupeuse de liquide qui s'accroche aux échalotes douces et translucides, à peine mouillée sans vin libre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Beaucoup de liquides minces slottent encore dans la poêle et le vinaigre sent vif et cru.",
            "action": "Continuez à mijoter — l'acide doit se concentrer et les fortes fumées de vinaigre se mêlent avant de monter le beurre."
          },
          {
            "state": "Perfect",
            "description": "Environ une cuillère à soupe ou deux de liquide sirupeux reste, les échalotes douces et brillantes, l'arôme de tarte mais arrondi.",
            "action": "Abaissez la chaleur à son réglage le plus bas et, si vous l'utilisez, fouettez dans la crème."
          },
          {
            "state": "Overdone",
            "description": "La poêle est sèche, les échalotes brunissent et commencent à frire, et l'odeur devient brûlée.",
            "action": "Retirez immédiatement la chaleur; ajoutez une touche de vin pour déglacer et réinitialiser avant de continuer."
          }
        ]
      },
      "feelCue": "Inclinez la poêle — la réduction doit se déplacer comme un sirop lâche, et ne pas éclabousser comme un liquide. La vapeur sent la lumière et la tarte, ne pique plus le nez avec du vinaigre cru."
    },
    {
      "nodeId": "step_2",
      "action": "Température",
      "inputs": [
        "shallot_reduction",
        "ing_05"
      ],
      "outputState": "stabilized_base",
      "instructions": "Réduisez la chaleur à la flamme la plus basse possible — la réduction doit être chaude, ne jamais mijoter. Si vous utilisez de la crème, fouettez-la dans la réduction maintenant et laissez-la chauffer pendant une minute; les émulsifiants de la crème rendent la sauce beaucoup plus pardonnante. La casserole doit se sentir chaude à une main plane mais le liquide ne doit pas buller.",
      "visualCue": {
        "primaryTarget": "Une base chaude et calme sans bulles qui brise la surface; si de la crème est ajoutée, elle se détache dans une piscine pâle et légèrement épaissie.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La base est devenue froide et la poêle ne dégage plus de chaleur; le beurre ajouté aujourd'hui serait tout simplement fondu et mis en réserve sans émulsifiant.",
            "action": "Retournez brièvement à la chaleur douce jusqu'à ce que la poêle soit à nouveau chaude — visez la chaleur de l'eau de bain chaude, pas une mijoter."
          },
          {
            "state": "Perfect",
            "description": "La réduction est chaude mais parfaitement immobile, pas de bulles, la crème (si utilisée) facilement incorporée.",
            "action": "Commencez à fouetter dans le beurre froid quelques cubes à la fois."
          },
          {
            "state": "Overdone",
            "description": "La base mijote ou crache; elle est trop chaude et rompt l'émulsion du beurre instantané.",
            "action": "Soulevez la poêle de la chaleur pendant trente secondes pour refroidir, puis faites chauffer si votre poêle est chaud."
          }
        ]
      },
      "feelCue": "Tenez une paume juste au - dessus de la poêle — elle devrait vous sentir chaude avec insistance, mais jamais vous forcer à vous en tirer. Pas de bruit de frémissant, seulement de calme."
    },
    {
      "nodeId": "step_3",
      "action": "Monter",
      "inputs": [
        "stabilized_base",
        "ing_01"
      ],
      "outputState": "mounted_emulsion",
      "instructions": "Whisking constamment, ajouter le beurre froid deux ou trois cubes à la fois, laissant chaque addition fondre et émulsifier dans une masse crémeuse avant d'ajouter plus. Ne laissez jamais le beurre fondre à l'huile claire — il doit s'adoucir et disparaître dans une sauce épaisse et opaque. Déplacez la poêle sur et hors de la chaleur douce au besoin pour la garder au chaud mais jamais au chaud, construisant le cube d'émulsion par cube jusqu'à ce que tout le beurre soit incorporé.",
      "visualCue": {
        "primaryTarget": "Une sauce ivoire pâle et brillante assez épaisse pour enrober le fouet et laisser des rubans à fermeture lente, sans lécher d'huile libre nulle part sur la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse et le beurre fond dans une couche huileuse jaune plutôt que d'épaissir.",
            "action": "Arrêter d'ajouter du beurre; fouetter dur sur le feu pour ramener l'émulsion, et réchauffer la poêle seulement si elle est devenue froide."
          },
          {
            "state": "Perfect",
            "description": "Opaque, pâle et satinée, la sauce se colle au fouet, nappant et homogène sans huile visible.",
            "action": "Tirez du feu et terminez avec du sel, du citron et du poivre."
          },
          {
            "state": "Overdone",
            "description": "La sauce s'est cassée — des cords jaunes granuleux flottent dans un bassin de beurre fondu clair, souvent par surchauffe.",
            "action": "fouetter une cuillère de crème chaude ou d'eau dans un bol propre, puis dribber la sauce cassée lentement pour la réémulsionner."
          }
        ]
      },
      "feelCue": "Sentez que le fouet rencontre une résistance croissante à mesure que la sauce s'épaissit — il devrait glisser comme de la crème douce, pas glisser comme de l'huile. Gardez le beurre juste au bord de la fusion; au moment où vous voyez la piscine jaune clair, la poêle est trop chaude."
    },
    {
      "nodeId": "step_4",
      "action": "Saison & Finition",
      "inputs": [
        "mounted_emulsion",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_beurre_blanc",
      "instructions": "Hors de la chaleur, assaisonner la sauce avec du sel fin et quelques gouttes de jus de citron, goûter pendant que vous allez équilibrer la richesse contre l'acidité. Pour une sauce soyeuse classique, filtrez les échalotes à travers un tamis fin; pour une version rustique, laissez-les entrer. Ajouter le poivre blanc et la ciboulette si vous l'utilisez. Servir immédiatement — le beurre blanc ne peut pas être réchauffé ou tenu chaud longtemps sans casser. Gardez-le à peine au chaud dans un bain d'eau si vous devez attendre quelques minutes.",
      "visualCue": {
        "primaryTarget": "Une sauce ivoire versable mais collante, brillante et équilibrée, assez tarte pour égayer les poissons riches sans goûter de beurre cru, qui enrobe une cuillère dans une feuille lisse et uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a un goût plat et fortement beurreux, sans l'ascenseur acide brillant qui définit le beurre blanc.",
            "action": "Ajoutez encore quelques gouttes de jus de citron et une pincée de sel, en dégustant jusqu'à ce que la richesse s'équilibre."
          },
          {
            "state": "Perfect",
            "description": "Gloire, pâle et versable, le beurre arrondi par une tarte propre, assaisonné ainsi l'acide et le sel cadrent la richesse.",
            "action": "Déposer immédiatement sur des poissons, des pétoncles ou des légumes à la vapeur et servir."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été trop acidulée ou maintenue trop longtemps et goûte vif, ou a commencé à se séparer aux bords de l'assise.",
            "action": "fouetter dans un cube de beurre froid pour l'arroser; si elle se sépare, réémulsionner le feu et servir immédiatement."
          }
        ]
      },
      "feelCue": "Dessinez une cuillère à travers la sauce et soulevez - la; elle devrait s'enrouler lentement dans un rideau lisse et uniforme. Sur la langue il se sent riche et velouté à l'avant, puis se termine propre et lumineux de l'acide."
    }
  ]
};
