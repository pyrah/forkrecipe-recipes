export default {
  "repoId": "master_eastern_european_lacto_pickles_001",
  "parentRepoId": null,
  "slug": "lacto-pickles",
  "author": "ForkRecipe Kitchen",
  "title": "Lacto-Fermented Dill Pickles",
  "description": "Les concombres submergés dans une saumure de sel froid, lentement transformés en une semaine par des lactobacillus indigènes en croûtes, ailky, cornichons profondément salés qu'aucun pot de vinaigre ne peut imiter. La frondes d'aneth nuage la saumure comme la fermentation s'approfondit, et l'odeur passe de végétal à agréablement aigre — un aliment vivant qui récompense la patience avec des couches sans pot de vinaigre peut imiter.",
  "cuisine": "Europe orientale",
  "culture": "Ashkenazi",
  "category": "fermented",
  "tags": [
    "cornichons",
    "lactofermentés",
    "d'aneth",
    "Europe orientale",
    "probiotique"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "7 days",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 5,
    "bitter": 1,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Concombres picturaux (Kirby, de 3 à 5 pouces)",
      "ratioValue": 1,
      "defaultUnit": "kg",
      "substitutions": [
        "Concombres perses",
        "petits concombres de jardin"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau non chlorée (froide)",
      "ratioValue": 1,
      "defaultUnit": "liter",
      "substitutions": [
        "eau filtrée",
        "eau de source"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel non iodé (fin ou casher)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "sel de mer (non iodé seulement)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Diluant frais (têtes et frondes)",
      "ratioValue": 4,
      "defaultUnit": "heads",
      "substitutions": [
        "2 c. à soupe de graines d'aneth"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail (crues)",
      "ratioValue": 6,
      "defaultUnit": "cloves",
      "substitutions": [
        "tranches d'échalote"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Grains de poivre noirs entiers",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "Poivre craqué"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "flocons de chili séchés ou de chili entier séché",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "tranche de jalapeño fraîche"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Structure",
      "name": "Feuilles de raisins ou de chêne (source tannine)",
      "ratioValue": 2,
      "defaultUnit": "leaves",
      "substitutions": [
        "Feuille de raifort",
        "thé noir (1 c. à thé lâche)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation",
      "inputs": [
        "ing_01"
      ],
      "outputState": "prepped_cucumbers",
      "instructions": "Lavez soigneusement les concombres, frottez toute cire ou saleté de surface. Couper à la fois l'extrémité de la fleur (l'extrémité opposée à la tige — généralement l'extrémité plus étroite et plus plate) et 1–2 mm de l'extrémité de la tige. L'extrémité de la fleur contient des enzymes qui adouciront les cornichons. Si les concombres ne sont pas fraîchement cueillis, trempez-les dans de l'eau glacée pendant 1 heure avant de les rafraîchir.",
      "visualCue": {
        "primaryTarget": "Nettoyer les concombres avec les deux extrémités, montrant une coupe transversale blanche propre à chaque coupe. Ils devraient avoir l'air turgesques et vert vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les concombres ont une apparence légèrement ridée et molle, ils ont commencé à se déshydrater.",
            "action": "Tremper dans l'eau glacée pendant 1 à 2 heures avant d'aller de l'avant; ils s'effondreront."
          },
          {
            "state": "Perfect",
            "description": "Ferme, vert vif, bout fleuri enlevé. Les concombres ont une peau visible et serrée sans taches molles. Sens comme des légumes frais de jardin.",
            "action": "Continuez à emballer le pot."
          },
          {
            "state": "Overdone",
            "description": "Les concombres ont des taches molles ou jaunissantes.",
            "action": "Coupez les taches molles. Les concombres très doux ne feront pas de bons cornichons."
          }
        ]
      },
      "feelCue": "Un bon concombre décapant devrait se sentir aussi dense qu'une boule de billard — le serrer fermement et vous ne devriez pas sentir donner quoi que ce soit."
    },
    {
      "nodeId": "step_2",
      "action": "Dissoudre",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "brine",
      "instructions": "Mélanger de l'eau non chlorée froide et du sel dans un grand bol ou un pichet. Incorporer jusqu'à ce que le sel soit complètement dissous — au moins 1 à 2 minutes de brassage vigoureux. La concentration en sel est de 2% en poids (20g de sel par 1 litre d'eau), ce qui favorise sélectivement les bactéries Lactobacillus tout en inhibant les agents pathogènes. Ne pas utiliser de sel iodé — l'iode tuera les bactéries bénéfiques.",
      "visualCue": {
        "primaryTarget": "De l'eau parfaitement claire. Pas de cristaux de sel visibles au fond du récipient. Le liquide doit être indistinguable de l'eau pure.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les cristaux de sel sont encore visibles sur le fond, ou l'eau semble granuleuse en tourbillonnant.",
            "action": "Continuez à remuer — le sel non dissous signifiera une salinité inégale et une détérioration potentielle."
          },
          {
            "state": "Perfect",
            "description": "Limpide, uniformément salé au goût, comme l'eau de mer, nettement salée mais pas dure.",
            "action": "Utiliser immédiatement; ne pas chauffer."
          },
          {
            "state": "Overdone",
            "description": "La saumure est trouble par le surselage ou le mauvais type de sel.",
            "action": "Goûter — si désagréablement dur et amer, diluer avec plus d'eau."
          }
        ]
      },
      "feelCue": "Plongez un doigt propre: la saumure doit avoir un goût nettement salé, comme une soupe bien assaisonnée — assertive mais pas écrasante."
    },
    {
      "nodeId": "step_3",
      "action": "Boîte",
      "inputs": [
        "prepped_cucumbers",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "packed_jar",
      "instructions": "Coucher le fond d'un pot ou d'une croûte de verre propre de 1 litre avec la moitié de l'aneth, l'ail écrasé, les grains de poivre et le chili. Ajouter les feuilles de raisin ou de chêne (ces derniers fournissent des tanins qui maintiennent les concombres croquants en inhibant les enzymes de dégradation de la pectine libérées pendant la fermentation). Emballez les concombres verticalement, aussi étroitement que possible sans les ecchymoses, plus ils sont serrés, mieux ils restent submergés. Ajouter le reste de l'aneth.",
      "visualCue": {
        "primaryTarget": "Concombres emballés verticalement sans espaces suffisamment grands pour les laisser flotter, l'aneth niché entre eux, l'ail et les épices visibles à travers le verre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Emballez - vous avec de grands espaces d'air entre les concombres — ils flotteront hors de la saumure et de la moisissure.",
            "action": "Reconditionner plus étroitement; utiliser des concombres plus petits pour combler les lacunes, ou les couper en deux pour les coincer."
          },
          {
            "state": "Perfect",
            "description": "Les concombres se tiennent debout comme des soldats, ronflent les uns contre les autres et les murs du pot. Aromatique distribuée uniformément.",
            "action": "Verser la saumure et peser."
          },
          {
            "state": "Overdone",
            "description": "Les concombres emballés avec tant de force ont craqué ou meurtri.",
            "action": "Les concombres meurtris seront encore fermentés, mais peuvent être plus doux — ils sont encore utilisables."
          }
        ]
      },
      "feelCue": "Le pot devrait se sentir solidement lourd, dense avec des concombres — agiter et rien ne devrait se déchirer librement à l'intérieur."
    },
    {
      "nodeId": "step_4",
      "action": "Ferment",
      "inputs": [
        "packed_jar",
        "brine"
      ],
      "outputState": "fermenting_pickles",
      "instructions": "Verser la saumure froide sur les concombres, laissant de 2 à 3 cm d'espace de tête. Tous les concombres doivent rester entièrement submergés — les peser avec un petit sac à fermeture éclair rempli de saumure, d'un poids de fermentation ou d'un pot plus petit rempli d'eau. Couvrir d'un chiffon ou d'un couvercle non étanche. Ferment à température ambiante, 18-22°C, pendant 5-7 jours. Goûtez dès le jour 3. Enterrez tous les gaz et pressez les concombres sous le niveau de saumure quotidiennement.",
      "visualCue": {
        "primaryTarget": "Au jour 3-4 : la saumure est devenue visiblement trouble et laiteuse, de petites bulles s'élèvent lorsque le pot est légèrement perturbé, et les concombres sont passés du vert vif au vert olive plus muté.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Jour 5 et la saumure est encore claire, concombres encore vert vif — la fermentation a à peine commencé. Le goût est toujours cru et salé.",
            "action": "Passez à un endroit plus chaud. S'assurer que tous les concombres sont submergés — l'exposition à l'air arrête la lactofermentation."
          },
          {
            "state": "Perfect",
            "description": "La saumure est laiteuse, agréablement tannante, les concombres sont uniformément vert olive et ont perdu leur bouchée crue. Ils se cassent croustillantment quand ils sont mordus, goûtent aigre, ailky et profondément salés.",
            "action": "Réfrigérer pour arrêter la fermentation à votre niveau d'auresse préféré."
          },
          {
            "state": "Overdone",
            "description": "La saumure est très aigre et tranchante, les concombres sont musclés lorsqu'ils sont mordus, peut-être avec une forte odeur d'acétone ou de soufre.",
            "action": "Si ce n'est que légèrement plus, réfrigérer immédiatement — ils peuvent encore être comestibles. Jeter si la texture est uniformément musquée ou l'odeur est éteinte."
          }
        ]
      },
      "feelCue": "Un cornichon parfaitement fermenté devrait se casser audiblement en mordant, comme casser une tige de céleri fraîche. Si elle fléchit, elle a perdu sa croûte à l'adoucissement enzymatique."
    },
    {
      "nodeId": "step_5",
      "action": "Refroidissement",
      "inputs": [
        "fermenting_pickles"
      ],
      "outputState": "finished_pickles",
      "instructions": "Une fois que les cornichons atteignent l'aurence souhaitée (généralement entre les jours 5 et 7 à température ambiante), transférer le pot au réfrigérateur. Le froid ralentit considérablement la fermentation — les cornichons continueront à s'amer très progressivement mais resteront bons pendant 2 à 3 mois. La saumure nuageuse est pleine de probiotiques et est elle-même un condiment; buvez-le ou utilisez-le pour commencer votre prochain lot.",
      "visualCue": {
        "primaryTarget": "Concombres vert olive en saumure blanche opaque. Le couvercle, une fois ouvert, libère une bouffée d'odeur agréablement aigre, ailky-dill.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Saumure encore claire, concombres vert vif — le lot est allé directement au réfrigérateur avant que la fermentation commence vraiment. Ils sont saumurés, pas lactofermentés.",
            "action": "Retirez-vous et fermentez à température ambiante pendant 2 à 3 jours."
          },
          {
            "state": "Perfect",
            "description": "Saumure opaque, cornichons verts d'olives qui craquent, saveur aigre-savoureuse complexe avec une acidité agréable qui ne pique pas.",
            "action": "Servir froid, réfrigérer et profiter jusqu'à 3 mois."
          },
          {
            "state": "Overdone",
            "description": "Très aigre, presque dur. Les pickles sont nettement doux.",
            "action": "Utiliser dans les recettes (salade de patate, hachée dans des vinaigrettes) où la texture compte moins."
          }
        ]
      },
      "feelCue": "Froid au réfrigérateur, un bon cornichon de lacto doit se sentir dense et réfrigéré jusqu'au bout — et non creux — et se casser entre les doigts sans aucun flex."
    }
  ]
};
