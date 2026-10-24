export default {
  "repoId": "master_universal_lactofermentedgarlic_001",
  "parentRepoId": null,
  "slug": "lacto-fermented-garlic",
  "author": "ForkRecipe Kitchen",
  "title": "Aile fermentée à lactosérum",
  "description": "Des gousses d'ail entières transformées par des semaines de fermentation saline en quelque chose de moelleux, légèrement tannant et profondément complexe — plus crus, cuits en couches.",
  "cuisine": "Universel",
  "culture": "Préservation traditionnelle",
  "category": "fermented",
  "tags": [
    "fermenté",
    "Ail",
    "lactofermentation",
    "préservation",
    "condiment",
    "probiotique"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "4 weeks",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Gousses d'ail entières, pelées",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "ail noir (préfermenté, sautez cette recette)",
        "Ail d'éléphant (plus doux, plus gros)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau filtrée ou non chlorée",
      "ratioValue": 500,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel non iodé (2 % du poids total de l'eau)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "sel de décapage",
        "sel casher — sel jamais iodé"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Feuille de laurier séchée",
      "ratioValue": 2,
      "defaultUnit": "leaves",
      "substitutions": [
        "feuilles fraîches de laurier"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Graines de poivre noires, entières",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "grains de poivre roses"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "salt_brine",
      "instructions": "Dissoudre complètement le sel non iodé dans l'eau filtrée à température ambiante, en remuant jusqu'à ce qu'il ne reste plus de cristaux. L'objectif est une saumure de 2 % en poids — 20 g de sel par 1 litre d'eau. Utilisez toujours du sel non iodé : l'iode est un agent antimicrobien ajouté au sel de table spécifiquement pour tuer les bactéries, y compris les Lactobacillus bénéfiques que vous cultivez.",
      "visualCue": {
        "primaryTarget": "Saumure parfaitement limpide, sans cristaux de sel visible au fond du récipient lorsqu'il est agité. Ça ressemble à de l'eau pure.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Cristaux de sel encore visibles au fond du récipient.",
            "action": "Incorporer plus longtemps ou ajouter une petite quantité d'eau chaude pour aider à dissoudre les cristaux restants. Ne jamais procéder avec du sel non dissous — une concentration inégale inhibe la fermentation."
          },
          {
            "state": "Perfect",
            "description": "Complètement clair, aucun cristal visible sous aucun angle. Un goût propre et légèrement salé lorsqu'une goutte est placée sur la langue.",
            "action": "Passez à l'emballage du pot."
          },
          {
            "state": "Overdone",
            "description": "La saumure accidentellement trop salée — plus de 3% de salinité ralentira considérablement la fermentation.",
            "action": "Diluer avec plus d'eau filtrée et re-piser. Un brinomètre (testeur de salinité) élimine les suppositions de cette étape."
          }
        ]
      },
      "feelCue": "Frottez une goutte de 2 % de saumure bien proportionnée entre les doigts — elle doit avoir un goût agréablement salé, à peu près comme un bouillon de poulet léger, et non pas de bruine agressive."
    },
    {
      "nodeId": "step_2",
      "action": "Assembler",
      "inputs": [
        "ing_01",
        "ing_04",
        "ing_05"
      ],
      "outputState": "packed_garlic_jar",
      "instructions": "Stériliser un pot de 500 ml à large bouche avec de l'eau bouillante et égoutter à l'envers. Emballez les gousses d'ail épluchées étroitement dans le bocal, en tupant les feuilles de laurier et les grains de poivre. Ne pas écraser ou écraser les gousses — les gousses intactes ferment plus lentement et uniformément, développant une saveur plus complexe. Laisser 3 cm d'espace au-dessus de l'ail.",
      "visualCue": {
        "primaryTarget": "Emballage serré, intact, épluché uniformément les gousses d'ail qui remplissent le pot à moins de 3 cm du bord. Feuilles de baie et grains de poivre visibles partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Ail emballé trop lâchement, girofles flottant librement avec de grands espaces vides.",
            "action": "Ajouter d'autres gousses d'ail pour combler les lacunes. L'ail légèrement emballé flotte au-dessus de la saumure et ne ferment pas uniformément."
          },
          {
            "state": "Perfect",
            "description": "Girofles denses, bien emballés, avec des trous minimes. Aromatique entrecoupée. La masse tient quand le pot est renversé.",
            "action": "Verser la saumure de sel immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Des girofles d'ail ont été broyées pendant l'emballage — morceaux et liquides visibles dans le bocal.",
            "action": "Continuez, mais notez que les ferments d'ail broyés plus agressivement et la saveur finale sera plus nette et plus piquante."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur l'ail emballé avec un doigt propre — les girofles doivent donner légèrement mais pas écraser, et la masse doit se sentir dense et uniforme."
    },
    {
      "nodeId": "step_3",
      "action": "Infuser",
      "inputs": [
        "packed_garlic_jar",
        "salt_brine"
      ],
      "outputState": "brined_garlic",
      "instructions": "Verser la saumure de sel préparée sur l'ail emballé jusqu'à ce que tous les gousses soient complètement submergées et que la saumure atteigne à moins de 2 cm du bord. Si les gousses d'ail flottent, placez un petit poids de fermentation ou un sac ziplock rempli de saumure supplémentaire sur le dessus pour les garder submergés. Tout l'ail doit rester sous la saumure pendant toute la fermentation.",
      "visualCue": {
        "primaryTarget": "Tous les gousses d'ail sont entièrement submergés. La saumure est parfaitement claire au-dessus de l'ail. Pas de gousses qui brisent la surface du liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Girofles d'ail flottant au-dessus du niveau de saumure, exposés à l'air. Risque de moisissure sur les gousses exposées.",
            "action": "Peser avec un poids de fermentation, un petit ramequin ou un sac scellé de saumure supplémentaire. Submerger l'ail n'est pas négociable."
          },
          {
            "state": "Perfect",
            "description": "Cloves entièrement immergés avec 2 cm de saumure au-dessus du sommet de l'ail. La saumure est cristalline.",
            "action": "Capuchon lâche (pour permettre l'évacuation du CO2) ou encastré avec un sas. Procéder à la fermentation."
          },
          {
            "state": "Overdone",
            "description": "La saumure surremplie à la jante même — débordera à mesure que la fermentation produit des bulles de CO2.",
            "action": "Verser une petite quantité de saumure pour créer le bon espace de tête de 2 cm."
          }
        ]
      },
      "feelCue": "Lancez une baguette ou une brochette autour du bord intérieur du pot pour libérer des bulles d'air piégées entre les gousses d'ail — vous devriez les sentir dériver vers le haut à travers la saumure."
    },
    {
      "nodeId": "step_4",
      "action": "Fermenter",
      "inputs": [
        "brined_garlic"
      ],
      "outputState": "lacto_fermented_garlic",
      "instructions": "Capturer le pot de manière lâche (de sorte que le CO2 puisse s'échapper) ou s'adapter avec un sas. Conserver à température ambiante (18–22°C) hors du soleil direct. Pour la première semaine, \"bourrer\" le pot tous les jours en ouvrant brièvement le couvercle pour libérer la pression. Vous remarquerez des bulles de 3 à 5 jours — c'est une fermentation active de Lactobacillus. Goûtez chaque semaine de la semaine 2. Ferment de 2 à 4 semaines à votre niveau de tang souhaité.",
      "visualCue": {
        "primaryTarget": "À la semaine 2 : la saumure est devenue légèrement trouble par l'activité des bactéries lactiques. De fines bulles s'élèvent de l'ail lorsque le pot est tapé. L'ail a tourné une couleur légèrement translucide, bleu-vert ou jaune pâle — c'est normal.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 2 semaines : saumure encore claire, sans bulles, l'ail a un goût cru et purement salé.",
            "action": "Déplacez-vous vers un endroit plus chaud (22-25°C). La fermentation peut être inhibée par le sel iodé ou l'eau chlorée — vérifiez votre source de sel et d'eau."
          },
          {
            "state": "Perfect",
            "description": "Saumure légèrement nuageuse, production active de bulles lorsqu'elle est tapée, l'ail a un goût moelleux, salé et agréablement tanné; la bouchée brute a été remplacée par la profondeur et la complexité.",
            "action": "Réfrigérer pour arrêter la fermentation. L'ail continuera à se développer lentement au réfrigérateur."
          },
          {
            "state": "Overdone",
            "description": "La saumure est très nuageuse, l'ail est très doux et trop aigre. Les vêtements peuvent tomber en morceaux.",
            "action": "Réfrigérer immédiatement. L'ail lacto très acide est encore utilisable – mélangez-le dans des sauces ou des vinaigrettes où le tang se moellera."
          }
        ]
      },
      "feelCue": "Un pot de fermentation approprié, lorsqu'il est tenu à l'oreille pendant la première semaine, devrait émettre un faible tic-tac intermittent ou siffler comme de minuscules bulles de CO2 s'échappent au-delà d'un couvercle lâche."
    },
    {
      "nodeId": "step_5",
      "action": "Réfrigérer",
      "inputs": [
        "lacto_fermented_garlic"
      ],
      "outputState": "finished_lacto_garlic",
      "instructions": "Une fois que la saveur a atteint votre niveau désiré de tangisme, scellez le pot bien et réfrigérez. La température froide ralentit considérablement l'activité de Lactobacillus, en arrêtant la fermentation. L'ail se conserve réfrigéré jusqu'à 6 mois et continue à se fondre et à s'approfondir lentement. Servir entier, tranché ou mélangé. Utilisez la saumure de fermentation comme condiment riche en probiotiques.",
      "visualCue": {
        "primaryTarget": "Girofles d'ail légèrement translucides, ivoire-pale-or dans une saumure aromatique légèrement nuageuse. Les vêtements tiennent leur forme et leur texture.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail a été transféré au réfrigérateur avant une fermentation adéquate. Les vêtements sentent toujours crus et tranchants, la saumure a un goût purement salé.",
            "action": "Revenez à la température ambiante pendant une autre semaine et laissez la fermentation progresser avant le refroidissement."
          },
          {
            "state": "Perfect",
            "description": "Arôme d'ail doux et complexe avec un doux tang lactique. Les vêtements sont fermes mais pas durs, légèrement translucides. La saumure est agréablement salée et aigre.",
            "action": "Conserver au réfrigérateur et utiliser dans les 6 mois."
          },
          {
            "state": "Overdone",
            "description": "L'ail est devenu très doux et moelleux au réfrigérateur depuis des mois. Le goût est très aigre et la texture est désagréable pour manger cru.",
            "action": "Mélanger en sauces, soupes ou vinaigrettes. Les composés de saveur sont encore excellents même à ce stade."
          }
        ]
      },
      "feelCue": "Une gousse d'ail finie lactofermentée devrait offrir une résistance ferme mais douce lorsqu'elle est pressée — non pas crue croquante, pas bouillie, mais quelque part magnifiquement entre les deux."
    }
  ]
};
