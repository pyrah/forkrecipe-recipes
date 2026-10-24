export default {
  "repoId": "master_medieval-european_hypocras_001",
  "parentRepoId": null,
  "slug": "hypocras",
  "author": "ForkRecipe Kitchen",
  "title": "Hypocras",
  "description": "Un vin d'épices médiéval des grandes fêtes — vin rouge fleuri avec de la cannelle, du gingembre et des grains de paradis, sucré avec du miel, puis tiré encore et encore à travers une manche en feutre jusqu'à ce qu'il soit clair et grenat-brillant, parfumé comme un magasin d'épices marchand.",
  "cuisine": "Moyen Âge",
  "culture": "Europe occidentale médiévale tardive",
  "category": "beverages",
  "tags": [
    "hypocras",
    "médiévale",
    "Vin épicé",
    "Vin haché",
    "Chérie",
    "historique"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "26 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 4,
    "salty": 0,
    "sour": 2,
    "bitter": 1,
    "umami": 0,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Vin rouge sec (un rouge robuste et fruité)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "vin blanc sec pour une hypocras plus pâle",
        "mélange de type claret"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Chérie",
      "ratioValue": 18,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre de canne fin pour une période de sucre version"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Cinnamon (Ceylan, bâtons cassés)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "cassie (sharper, utiliser moins)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Gingembre séché (en tranches broyées)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "gingembre frais, cassé"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Grains du paradis (légèrement craqués)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre long",
        "maïs poivré noir"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Giroves entières",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Nutemeg (râpé fraîchement)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "lames de mac"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Galangal (découpes séchées)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "un peu de gingembre"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Feuille de la baie",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Crush",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "spice_blend",
      "instructions": "Briser la cannelle en shards, écraser le gingembre et les tranches de galangal avec le plat d'un couteau, et casser les grains du paradis juste assez pour diviser leurs défenses — vous voulez que les épices s'ouvrent, pas pulvérisées, donc ils libèrent la saveur propre et se fatiguent plus tard. Râper la muscade fraîche. Mélanger toutes les épices avec les gousses et la feuille de laurier. Les cuisiniers médiévaux ont appelé cela la poudre pour les hypocras, bien que les meilleures versions gardent les morceaux grossiers.",
      "visualCue": {
        "primaryTarget": "Un tas grossier et parfumé d'épices craquées — des éclats visibles d'écorce, des grains fendus de maïs poivré et des tranches de gingembre, tous encore en morceaux identifiables plutôt que de la poussière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épices sont entières et non broyées: tranches de gingembre lisse, grains intacts du paradis, longs bâtonnets de cannelle.",
            "action": "Bruise et casse-les plus loin. Les épices scellées aromatisent à peine le vin dans le froid raide; ils doivent être ouverts."
          },
          {
            "state": "Perfect",
            "description": "Tout est fissuré et fendu mais grossier, de sorte qu'il parfume l'air brusquement lorsqu'il est agité et va attraper dans le tissu plutôt que de glisser à travers.",
            "action": "Réchauffez le vin et fleurissez ces épices."
          },
          {
            "state": "Overdone",
            "description": "Les épices ont été broyées dans une poudre fine, poussiéreuse et entaillée.",
            "action": "La poudre va obscurcir le vin et passer à travers la manche, saillant la clarté. Utilisez-le de toute façon si c'est fait, mais plan sur la pression supplémentaire passe par un tissu plus fin."
          }
        ]
      },
      "feelCue": "Les grains cassés du paradis devraient sentir du poivre, de la cardamome et des agrumes à la fois; le gingembre meurtri vif et résineux. Une épice qui ne donne pas d'odeur lorsqu'elle est écrasée est étouffée — remplacez - la."
    },
    {
      "nodeId": "step_2",
      "action": "Chaleur",
      "inputs": [
        "ing_01",
        "ing_02",
        "spice_blend"
      ],
      "outputState": "honeyed_wine",
      "instructions": "Versez le vin dans une casserole non réactive et réchauffez-le doucement jusqu'à ce qu'il s'échauffe — ne le laissez jamais mijoter, ou vous faites bouillir le parfum du vin et le durcissez. Incorporer le miel jusqu'à dissolution complète, puis ajouter le mélange d'épices fissurées. Tenez-le à la vapeur nue, sous une mijoter, pendant 10 à 15 minutes pour fleurir les épices et épouser le miel, puis tirez-le de la chaleur. La cuisine doit remplir de cannelle, de girofle et de poivre chaud.",
      "visualCue": {
        "primaryTarget": "Vin rubis profond, brillant et juste à la vapeur, avec des épices qui dérivent et qui enflent et un mince ruban de vapeur parfumée qui monte — pas de bulles qui brisent la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le vin est frais, le miel est assis dans une couche collante au fond, et il y a peu d'arôme.",
            "action": "Chauffer plus loin et remuer jusqu'à ce que le miel se dissout complètement et que la vapeur de surface. Vin froid extrait presque rien."
          },
          {
            "state": "Perfect",
            "description": "Le vin s'évapore régulièrement, le miel est complètement dissous, et toute la casserole sent fort d'épices douces. Un goût chaud, sucré et aromatique.",
            "action": "Retirer du feu et couvrir pour la longue pente."
          },
          {
            "state": "Overdone",
            "description": "Le vin est arrivé à un ébullition enroulé; il sent le boozy-flat et pique le nez avec de la vapeur d'alcool.",
            "action": "Enlève-le immédiatement. Vous avez perdu un peu de parfum et de luminosité — compensez avec un peu plus d'épices et une touche plus de miel pendant la pente."
          }
        ]
      },
      "feelCue": "Plongez un doigt sur le bord de la casserole — il devrait lire chaud, autour de la température d'un bain confortable pour juste-trop-chaud thé, sans bulles de courbure. La vapeur transporte la cannelle d'abord, puis la girofle, puis une chaleur poivrée des grains du paradis."
    },
    {
      "nodeId": "step_3",
      "action": "Streep",
      "inputs": [
        "honeyed_wine"
      ],
      "outputState": "infused_wine",
      "instructions": "Couvrez la casserole et laissez le vin mielé épicé absorber la chaleur — quelques heures au minimum, mais la nuit à une journée complète est la norme médiévale et donne une infusion beaucoup plus ronde et plus profonde. Le vin s'assombrit et devient aromatique en se refroidissant et en s'asseyant. Goûtez-le de temps en temps : il devrait se construire vers un équilibre fort, doux, épicé, puisque l'entraînement du feutre le radoucira légèrement. Le froid plus long raide favorise la cannelle ronde et le miel sur l'alcool cru dur.",
      "visualCue": {
        "primaryTarget": "Vin devenu plus foncé et légèrement nuageux avec des sédiments d'épices en suspension, profondément colorés et intensément parfumés, les épices étant fixées au fond et adoucies.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après seulement un court repos, le vin a encore un goût fin et aigu, les notes d'épices s'évanouissent et le miel n'est pas encore intégré.",
            "action": "Continuez à vous piéger. Un bon hypocras veut des heures, idéalement du jour au lendemain, pour les saveurs à approfondir et se marier."
          },
          {
            "state": "Perfect",
            "description": "Le vin est foncé, parfumé et plein, goûtant hardiment de cannelle, de gingembre et de miel avec une finale poivrée tiède — assez forte pour que la pression l'équilibre.",
            "action": "Passez à travers la manche."
          },
          {
            "state": "Overdone",
            "description": "Après une très longue pente, le vin goûte amer et sur-spicé, avec les girofles et les grains du paradis qui deviennent vifs et médicinaux.",
            "action": "Arrêtez de tremper et de s'étirer à la fois; mince avec un peu de vin frais et une touche plus de miel pour ramener l'amertume dans l'équilibre."
          }
        ]
      },
      "feelCue": "L'arôme doit passer de chaud et boueux à rond, doux et moelleux au fur et à mesure que le bord de l'alcool s'adoucit et que le miel et la cannelle prennent la tête. Une tiède tiède de piment devrait persister après chaque goût."
    },
    {
      "nodeId": "step_4",
      "action": "Poignée",
      "inputs": [
        "infused_wine"
      ],
      "outputState": "finished_hypocras",
      "instructions": "Accrochez une manche conique propre de feutre épais ou de plusieurs couches de flanelle — la Manche d'Hippocras, la manche hippocratique qui donne son nom à l'hypocras — et versez le vin infusé à travers elle dans un récipient propre. Le premier passage est nuageux avec des sédiments; il l'attrape et le verse à nouveau dans la manche, et une troisième fois, jusqu'à ce que le vin coule brillamment clair et grenat-brillant. La lente filtration du feutre polit le vin à une transparence comme un bijou. Bouteille et servir frais, dans de petites tasses, comme un jour de fête cordiale.",
      "visualCue": {
        "primaryTarget": "Un vin clair, brillant et rouge grenat courant dans une goutte lente et régulière du point de la manche, exempt de sédiments et si transparent vous pouvez lire la lumière à travers le verre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le vin qui coule est brumeux et tacheté de fines particules d'épices, terne plutôt que brillant.",
            "action": "Versez-le à nouveau dans la même manche. Chaque passe clarifie davantage — répétez jusqu'à ce qu'elle soit libre, ce qui prend généralement deux ou trois passes."
          },
          {
            "state": "Perfect",
            "description": "Le vin jaillit de clair de cristal et lumineux, un grenat rubis profond sans sédiments visibles, sentant douxment la cannelle et le miel.",
            "action": "Bouteillez-le, refroidissez légèrement et servez dans de petites tasses. Il garde pendant plusieurs jours, scellé et froid."
          },
          {
            "state": "Overdone",
            "description": "L'entraînement s'est arrêté, le feutre s'est obstrué avec des sédiments et des gouttes d'eau à peine, et le tissu pousse les lies nuageuses dans le vin.",
            "action": "Ne pressez pas la manche. Inverser dans un chiffon frais et propre et verser le vin à travers cela au lieu de terminer la clarification."
          }
        ]
      },
      "feelCue": "Laissez la manche travailler par la gravité seule — ne la déchirez jamais, ou vous forcez les lies à traverser et ruiner la clarté que vous avez construit. Les hypocras finis devraient se sentir soyeux et juste-syrupy sur la langue du miel, se réchauffer comme il descend, doux et épicé avec une chaleur propre et persistante poivrée."
    }
  ]
};
