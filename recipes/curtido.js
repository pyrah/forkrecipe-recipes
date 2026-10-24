export default {
  "repoId": "master_salvadorian_curtido_001",
  "parentRepoId": null,
  "slug": "curtido",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Curtido",
  "description": "La réponse du Salvador à la choucroute — chou vert légèrement fermenté avec la carotte et l'origan, brillant avec le vinaigre, avec juste assez de tang et de croquant pour couper la richesse d'une pupusa et rendre chaque bouchée plus fraîche que la dernière.",
  "cuisine": "Salvadorien",
  "culture": "Salvadorien",
  "category": "fermented",
  "tags": [
    "curtido",
    "salvadorien",
    "fermenté",
    "Choux",
    "végétalien",
    "Sans gluten",
    "condiment",
    "pupusa"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "24 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 4,
    "bitter": 0,
    "umami": 0,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Choux verts, décortiqués et finement broyés",
      "ratioValue": 4,
      "defaultUnit": "cups (packed)",
      "substitutions": [
        "Choux de napa"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Carottes pelées et juliennes ou râpées",
      "ratioValue": 1,
      "defaultUnit": "large",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc, finement coupé en demi-lunes",
      "ratioValue": 0.5,
      "defaultUnit": "medium onion",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "vinaigre blanc (ou vinaigre de cidre de pomme)",
      "ratioValue": 0.5,
      "defaultUnit": "cup",
      "substitutions": [
        "vinaigre de vin de riz"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Eau bouillante",
      "ratioValue": 0.5,
      "defaultUnit": "cup",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Origan mexicain séché",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "Origan frais (montant double)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "flocons de poivre rouge ou chile de árbol séché, émietté",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "serrano frais, haché"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanchir",
      "inputs": [
        "ing_01",
        "ing_05"
      ],
      "outputState": "wilted_cabbage",
      "instructions": "Mettre le chou déchiqueté dans un grand bol. Verser l'eau bouillante sur le chou, mélanger pour enrober et laisser reposer 3 minutes. Égoutter immédiatement et rincer sous l'eau froide pour arrêter toute cuisson. L'objectif est le chou nauséabonde, toujours croustillant mais souple, avec la dureté végétale crue adoucie.",
      "visualCue": {
        "primaryTarget": "Le chou a perdu sa rigidité raide et est allé légèrement translucide aux bords de coupe tout en restant vert pâle. Elle s'empile de façon lâche plutôt que de se tenir debout en morceaux raides.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le chou est toujours cru et très raide. L'eau bouillante n'a pas pénétré. Il sera trop croquant et lent pour absorber la saumure.",
            "action": "Verser plus d'eau bouillante et laisser reposer encore 2 minutes avant de s'égoutter."
          },
          {
            "state": "Perfect",
            "description": "Légèrement adouci mais tenant toujours une croûte définitive. Le vert translucide du chou flétri. Pliable mais pas mou.",
            "action": "Rincer avec de l'eau froide pour arrêter le flétrissement et bien égoutter avant de combiner."
          },
          {
            "state": "Overdone",
            "description": "Le chou est devenu mou, olive-drabe et humide — il a été laissé trop longtemps dans l'eau chaude ou l'eau était trop volumineuse.",
            "action": "Égoutter très bien, presser l'excès d'eau avec vos mains, et procéder. La texture sera plus douce que idéale, mais le curtido sera encore bon."
          }
        ]
      },
      "feelCue": "Prenez une petite poignée de chou égoutté et pressez — il devrait donner librement sans croûte mais puis ressortent partiellement, comme serrer une éponge légèrement humide. L'eau ne doit pas couler sans serrer."
    },
    {
      "nodeId": "step_2",
      "action": "Mélanger",
      "inputs": [
        "wilted_cabbage",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "assembled_curtido",
      "instructions": "Dans un grand bol, mélanger le chou flétri, la carotte julienne et l'oignon tranché. Verser sur le vinaigre et saupoudrer de sel, d'origan séché et de flocons de poivre. Mélanger soigneusement avec des mains ou des pinces propres jusqu'à ce que tout soit uniformément combiné et que les légumes soient enduits. Goûtez et ajustez : il doit être nettement tart, légèrement salé, et avoir une chaleur d'origane à base de plantes.",
      "visualCue": {
        "primaryTarget": "Une griffe colorée, uniformément combinée — chou vert pâle fileté de carottes orange vif et de rondelles d'oignon blanc, scintillement avec une légère couche de vinaigre. Les taches d'origan sont également distribuées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La carotte et l'oignon sont mis en commun au fond, le vinaigre n'a pas enrobé le chou. Le mélange semble sec sur le dessus.",
            "action": "Jeter plus soigneusement, soulever du bas et tourner sur le dessus. Utilisez vos mains pour le mélange le plus complet."
          },
          {
            "state": "Perfect",
            "description": "Chaque morceau de chou et chaque bâton de carottes brille. Les légumes sont distribués uniformément. Il sent le vinaigre, l'origan et les légumes frais.",
            "action": "Conditionner dans un pot ou un contenant et réfrigérer pendant au moins 1 heure, idéalement pendant la nuit."
          },
          {
            "state": "Overdone",
            "description": "Le sel a attiré tellement d'eau des légumes que le mélange nage dans le liquide et le chou semble très mou et pâle.",
            "action": "Égoutter l'excès de liquide, ajouter une cuillère à soupe de vinaigre frais et réfrigérer. Le curtido sera plus doux mais toujours bon."
          }
        ]
      },
      "feelCue": "Jetez le curtido et puis sentez vos mains — vous devriez attraper un coup lumineux d'origan et de vinaigre ensemble, une combinaison qui sent propre et tranchant, comme le comptoir d'un très bon pupusería."
    },
    {
      "nodeId": "step_3",
      "action": "Fermenter",
      "inputs": [
        "assembled_curtido"
      ],
      "outputState": "finished_curtido",
      "instructions": "Emballez fermement le curtido dans un pot propre, en pressant vers le bas afin que les légumes soient immergés dans leur propre liquide libéré (ou sous la saumure de vinaigre). Couvrez-vous librement — non hermétiquement — et laissez-les à température ambiante pendant 12 à 24 heures. Ce bref repos à température ambiante commence par une lactofermentation très légère qui ajoute une touche de tang naturel au-delà du vinaigre. Puis réfrigérer. Il est prêt à manger tout de suite mais s'améliore considérablement du jour au lendemain. Conserve pendant 2 semaines au réfrigérateur.",
      "visualCue": {
        "primaryTarget": "Après 24 heures au total (temps de la chambre + réfrigérateur): le chou est pâle, légèrement translucide et bien comprimé. Le liquide dans le pot est passé de clair à légèrement nuageux, ambre pâle. L'odeur est fortement vinaigreuse avec une note d'origan chaude.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours blanc brillant avec croûte de chou cru et sans tangent au vinaigre ajouté. Les saveurs n'ont pas fondu.",
            "action": "Laisser à température ambiante pendant 24 heures, puis réfrigérer. La transformation est dans le temps, pas dans la technique."
          },
          {
            "state": "Perfect",
            "description": "Choux pâle, translucide, bien comprimé. Tangy, brillant, à base de plantes, avec un croquant propre qui ne donne presque aucune résistance. Le liquide est légèrement nuageux et aromatisé. Goûte essentielle à côté d'une pupusa.",
            "action": "Réfrigérer et utiliser dans les 2 semaines."
          },
          {
            "state": "Overdone",
            "description": "A gauche à température ambiante pendant 3+ jours : très aigre et funky, les oignons se sont adoucis, le vinaigre a été submergé par un tang acide lactique. L'odeur est puissante.",
            "action": "Encore comestible — le curtido peut fermenter jusqu'à une conserve de type choucroute. Égoutter et servir de condiment plus fermenté, ou utiliser dans les plats cuits."
          }
        ]
      },
      "feelCue": "Pincez un brin de curtido dans le bocal après une journée – il devrait se casser proprement avec une petite croûte, et non entre les doigts. Tenez-le à la lumière : la translucidité du chou juste-fermenté est distinctement différente de celle du chou cru, avec une qualité aquarelle aux bords."
    }
  ]
};
