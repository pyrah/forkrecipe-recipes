export default {
  "repoId": "master_italian_sfogliatelle_001",
  "parentRepoId": null,
  "slug": "sfogliatelle",
  "author": "ForkRecipe Kitchen",
  "title": "Sfogliatelle Ricce",
  "description": "La plus grande réussite de la pâtisserie de Naples : une coquille en couches de pâte laminée à la fine feuille de papier, chaque feuille à peine plus épaisse qu'une page, craquant un remplissage de ricotta, de crème de semoule et d'agrumes confits – la coquille se brise en mille fragments croquants à la première bouchée tandis que l'intérieur se transforme en une crème dense, parfumée, à peine sucrée. Chaque sfogliatella est un exploit de patience rendu comestible.",
  "cuisine": "Italien",
  "culture": "Napolitaine",
  "category": "desserts",
  "tags": [
    "pâtisserie",
    "Italien",
    "napolitaine",
    "laminés",
    "ricotta",
    "avancé",
    "occasion spéciale",
    "sémoline"
  ],
  "difficulty": 5,
  "activeTime": "3 hr",
  "totalTime": "6 hr",
  "ratioSystem": "weight",
  "stars": 2456,
  "forks": 287,
  "contributors": 54,
  "license": "CC-BY-SA",
  "createdAt": "2026-01-15",
  "updatedAt": "2026-01-15",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 1,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de semoule (fine)",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude",
      "ratioValue": 180,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Lard (ou beurre non salé froid), pour la plastification",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "beurre froid non salé (moins croquant mais plus accessible)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Ricotta de lait entier, bien drainée",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Starch",
      "name": "Semoule fine (pour la crème de remplissage)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Lait entier (pour la crème de remplissage)",
      "ratioValue": 250,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Peau d'orange confite, en dés",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "Citron confié",
        "Abricot séché"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Extrait de vanille pur ou pâte de vanille",
      "ratioValue": 5,
      "defaultUnit": "ml",
      "substitutions": [
        "1 gousse de vanille grattée"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Binder",
      "name": "Oeufs (gros) pour fixation à la pâte",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Garnish",
      "name": "Sucre (poncelé) pour la poussière",
      "ratioValue": 20,
      "defaultUnit": "g",
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
        "ing_11"
      ],
      "outputState": "semolina_dough",
      "instructions": "Mélanger la farine de semoule et le sel dans un grand bol. Fais un bien. Ajouter l'œuf battu et l'eau chaude au puits. Mélanger à la main jusqu'à ce qu'une pâte rigide et cohésive se forme — cette pâte doit être très ferme et lisse, comme la pâte à pâtes. Agenouillez sur le banc pendant 10-12 minutes jusqu'à très doux. La pâte sera raide et vous combattra — c'est exact. Une pâte raide s'étend dans des feuilles très fines sans déchirer. Enveloppez bien le plastique et reposez-le pendant 30 minutes.",
      "visualCue": {
        "primaryTarget": "Pâte très lisse et ferme, plus rigide que la pâte à pâtes, presque comme de l'argile à modeler. Surface complètement uniforme, sans collants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Dough est encore dur et shuggy. Des larmes tendues.",
            "action": "Continuer le pétrissage — cette pâte a besoin d'un développement complet pour être stratifiée sans déchirer."
          },
          {
            "state": "Perfect",
            "description": "Surface complètement lisse, très ferme. Ne colle pas aux mains ou au banc. Peut être étendu sans déchirer. Comme de la pâte épaisse.",
            "action": "Envelopper et reposer 30 minutes."
          },
          {
            "state": "Overdone",
            "description": "Il n'est pas vraiment possible d'écraser cette pâte rigide à la main.",
            "action": "Reposez la pâte — elle se détendrea."
          }
        ]
      },
      "feelCue": "Appuyez sur un pouce dans la pâte reposée — il devrait laisser un tiret de remplissage lent, comme presser dans la pâte fraîche et raide."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "ing_07",
        "ing_06",
        "ing_08"
      ],
      "outputState": "semolina_cream",
      "instructions": "Portez le lait à mijoter dans une casserole. Pluie dans la semoule dans un cours d'eau mince tout en fouettant constamment. Cuire à feu moyen-doux, fouetter pendant 5 à 7 minutes jusqu'à ce que le mélange devienne très épais et s'éloigne des côtés de la poêle. Retirer du feu. Battre dans le sucre, la vanille et la peau d'orange confite. Étaler sur un plateau, couvrir de plastique touchant la surface et refroidir complètement au réfrigérateur — au moins 2 heures.",
      "visualCue": {
        "primaryTarget": "Une crème très épaisse et lisse qui tient un sillon quand une cuillère est traînée à travers elle. Tire des côtés de la poêle lorsqu'elle est agitée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème est encore versable et mince. La sémoline n'a pas complètement absorbé le lait.",
            "action": "Continuer la cuisson et le fouet: la crème doit être très épaisse pour être propre."
          },
          {
            "state": "Perfect",
            "description": "Très épais, presque solide. Semolina entièrement hydratée. Surface lisse et brillante. Il tient sa forme quand il scoop. Parfumé d'orange et de vanille.",
            "action": "Laisser refroidir complètement avant de combiner la ricotta."
          },
          {
            "state": "Overdone",
            "description": "La crème est en train de saisir et de coller dur à la poêle. Une odeur brûlée.",
            "action": "Retirer immédiatement du feu. Ajouter une touche de lait et remuer vigoureusement pour se détendre. Souche si nécessaire."
          }
        ]
      },
      "feelCue": "Appuyez sur la crème refroidie entre les doigts – elle doit se sentir ferme, fraîche polenta: dense et donnant mais tenant une forme complètement."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "semolina_cream",
        "ing_05",
        "ing_09",
        "ing_10"
      ],
      "outputState": "ricotta_filling",
      "instructions": "Battre la crème de semoule froide pour la casser légèrement. Ajouter la ricotta bien drainée (l'excès de liquide rendra le remplissage trop humide pour tenir sa forme dans la coquille de pâtisserie) et mélanger jusqu'à ce que lisse et uniforme. Plier en peau d'orange confite et vanille. Bouche: le remplissage doit être doux, légèrement citronné à partir de l'orange, et avoir la texture grainy-smooth de la semoule. Réfrigérer jusqu'à ce que nécessaire.",
      "visualCue": {
        "primaryTarget": "Remplissage épais, uniforme et crémeux avec des morceaux visibles de peau confite. Elle tient sa forme lorsqu'elle est cuillé — pas rincée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le remplissage est trop doux et lâche de l'excès d'humidité dans la ricotta.",
            "action": "Égoutter la ricotta pendant 1 heure avant de mélanger."
          },
          {
            "state": "Perfect",
            "description": "Remplissage dense, scoopable et sucré. Prend une cuillère debout brièvement. Flecks de peau d'orange visibles.",
            "action": "Réfrigérer couvert. Utiliser froid."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage est trop rigide et sec. Difficile à se propager.",
            "action": "Ajouter une cuillère à soupe de lait et mélanger jusqu'à douceur."
          }
        ]
      },
      "feelCue": "Le remplissage doit avoir l'air d'un gel épais et frais lorsqu'il est pressé entre deux cuillères — assez dense pour tenir une forme, mais pas émietté."
    },
    {
      "nodeId": "step_4",
      "action": "Incorporer délicatement",
      "inputs": [
        "semolina_dough",
        "ing_04"
      ],
      "outputState": "laminated_dough",
      "instructions": "Divisez la pâte en deux. À l'aide d'une machine à pâtes, rouler la première pièce du réglage le plus large au plus fin (réglage 7–9 sur la plupart des machines), s'étirant dans une longue feuille mince. Badigeonner généreusement toute la surface avec du saindoux ou du beurre très doux (non fondu). Pliez la feuille comme une lettre — troisièmes — et roulez à nouveau au réglage le plus fin. Encore un pinceau. Roulez la feuille dans une bille serrée d'un bout court. Réfrigérer le journal pendant 30 minutes. Répétez avec la deuxième pièce.",
      "visualCue": {
        "primaryTarget": "Un log serré de pâte avec des couches spirales visibles lorsqu'on le voit de l'extrémité. Surface lisse et légèrement grasse de la graisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La tôle a été déchirée pendant le laminage. Les couches sont inégales ou le log est enroulé.",
            "action": "Appuyez sur les zones déchirées. La lamination est moins parfaite, mais la pâtisserie sera encore en couches."
          },
          {
            "state": "Perfect",
            "description": "Tôle très mince, presque translucide. Log serré et uniforme avec de nombreuses couches de spirale visibles. Ferme après réfrigération.",
            "action": "Procéder au découpage et à la mise en forme."
          },
          {
            "state": "Overdone",
            "description": "La feuille est trop fine et cassée. Des larmes comme tu travailles.",
            "action": "Réinitialisez la machine à pâtes à un réglage légèrement plus épais. Les couches seront moins nombreuses, mais la coquille tiendra."
          }
        ]
      },
      "feelCue": "La feuille laminée devrait se sentir comme un morceau de papier ciré très rigide et frais — ferme et à peine souple, avec la graisse lui donnant une légère résistance cireuse."
    },
    {
      "nodeId": "step_5",
      "action": "Façonner",
      "inputs": [
        "laminated_dough",
        "ricotta_filling"
      ],
      "outputState": "shaped_sfogliatelle",
      "instructions": "Couper la bûche réfrigérée en rondelles de 1,5 cm. En utilisant vos pouces, appuyez et étirez chaque tour en forme de cône — les couches spirales s'éventeront comme les pages d'un livre. Travailler doucement du centre vers l'extérieur, en gardant le point du cône fermé tandis que l'ouverture s'élargit dans une coquille ovale. Remplir chaque coquille d'une cuillère à soupe de remplissage de la ricotta et presser les bords fermement fermés. Placer le bord de la couture sur une plaque de cuisson parcheminée.",
      "visualCue": {
        "primaryTarget": "Pâtisserie en forme de coquille avec des couches visibles et aventurées. Couture fermée à la base. Plump avec remplissage.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les couches n'ont pas disparu — la coquille est encore un disque plat. Cône non formé.",
            "action": "Appuyez plus fermement depuis le centre avec les deux pouces, travaillant vers l'extérieur dans un mouvement tournant."
          },
          {
            "state": "Perfect",
            "description": "Forme spectaculaire de la coque avec de multiples couches fanées clairement visibles. Seam fermé et assis à plat. Plump sans éclater.",
            "action": "Cuire immédiatement ou réfrigérer jusqu'à 2 heures."
          },
          {
            "state": "Overdone",
            "description": "Toux arrachée aux bords en appuyant trop fort. Le remplissage s'échappe.",
            "action": "Pincez les bords déchirés avec un peu d'eau comme de la colle. Continuez."
          }
        ]
      },
      "feelCue": "Lorsqu'elle est en forme, la sfogliatella doit se sentir comme une coquille compacte, pleine d'une base ferme et d'une ouverture en couches aérées, les couches doivent être aventurées comme des pages quand vous regardez à l'intérieur."
    },
    {
      "nodeId": "step_6",
      "action": "Cuire au four",
      "inputs": [
        "shaped_sfogliatelle",
        "ing_12"
      ],
      "outputState": "finished_sfogliatelle",
      "instructions": "Préchauffer le four à 200 C (400 F). Cuire la sfogliatelle de 20 à 25 minutes jusqu'à ce qu'elle soit bien dorée et que les couches s'ouvrent de façon spectaculaire et croustillante. La pâtisserie s'ouvrira et se séparera en couches de coquille distinctes lorsque la graisse fondra et que la vapeur les soufflera. Laisser refroidir pendant 5 minutes, la poussière généreusement avec du sucre glacé et manger chaud — sfogliatelle doit être mangée dans les 30 minutes suivant la cuisson tandis que les couches sont à la croustillante maximale.",
      "visualCue": {
        "primaryTarget": "Des couches de pâte dorée et croustillante, dramatisées. Shell clairement ouvert. Neige de sucre glace sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les calques sont encore pâles et ne sont pas complètement séparés. La pâtisserie est douce quand on la tape.",
            "action": "Retourner au four 5 minutes de plus. Les couches ont besoin de chaleur complète pour se séparer et croustillant."
          },
          {
            "state": "Perfect",
            "description": "Des couches d'or profond, d'un éclat spectaculaire — chaque feuille de pâte croustillante et séparée. La coque se brise lorsqu'elle est pressée. Remplissage visible par l'ouverture. Lourd avec du sucre glace.",
            "action": "Mangez dans 30 minutes."
          },
          {
            "state": "Overdone",
            "description": "Très brun foncé, presque caramélisé. Des couches carbonisées.",
            "action": "Des pourboires carbonisés. L'intérieur et le remplissage sont probablement bien."
          }
        ]
      },
      "feelCue": "Mordre à la fin — il devrait se briser fort dans une cascade de shards effilés et croustillants, puis immédiatement céder à la crème de ricotta dense, fraîche et douce à l'intérieur."
    }
  ]
};
