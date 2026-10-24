export default {
  "repoId": "master_ukrainian_beet_kvass_001",
  "parentRepoId": null,
  "slug": "beet-kvass",
  "author": "ForkRecipe Kitchen",
  "title": "Kvass de betteraves",
  "description": "Des cubes de betteraves crues immergés dans la saumure de sel, laissés à fermenter dans un coin sombre pendant une semaine — le résultat est un tonique profondément rubis, probiotique avec une douceur terreuse et un tang lactique propre que les cuisiniers de borscht sirotent depuis des générations.",
  "cuisine": "Europe orientale",
  "culture": "Ukrainien",
  "category": "beverages",
  "tags": [
    "Autres",
    "betterave",
    "fermenté",
    "ukrainien",
    "probiotique",
    "boisson"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "7 days 15 min",
  "ratioSystem": "parts",
  "stars": 680,
  "forks": 42,
  "contributors": 14,
  "license": "CC-BY-SA",
  "createdAt": "2025-01-20",
  "updatedAt": "2025-06-05",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 4,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Betteraves crues (lavées, non pelées, cubes de 2 cm)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "betteraves dorées",
        "Betteraves chioggia"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau non chlorée (filtrée ou bouillie et refroidie)",
      "ratioValue": 200,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel non iodé (sel de mer ou casher)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Girofles à l'ail (peautés, facultatifs)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Graines de carvi (facultatif)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "graines d'aneth",
        "poivre noir"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Dissoudre",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "brine",
      "instructions": "Dissoudre le sel dans l'eau en remuant jusqu'à ce qu'il soit complètement clair sans cristaux visibles. Le sel non iodé est essentiel: l'iode tue les bactéries lactobacillus bénéfiques qui alimentent la fermentation. L'eau non chlorée est également importante : l'eau du robinet avec le chlore inhibera la fermentation. Utilisez de l'eau filtrée ou faites bouillir l'eau du robinet et refroidissez-la complètement avant utilisation. La concentration de saumure ici (environ 2 % en poids) est inférieure à la résistance au décapage, permettant la fermentation plutôt que la simple conservation.",
      "visualCue": {
        "primaryTarget": "Eau complètement limpide sans cristaux de sel visibles. L'eau devrait être identique à l'eau pure.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les cristaux de sel sont encore visibles au fond du contenant. Pas complètement dissous.",
            "action": "Remuer plus vigoureusement. Le sel doit être complètement dissous avant d'ajouter des betteraves — le sel non dissous se trouve au fond et ne protège pas les betteraves au-dessus."
          },
          {
            "state": "Perfect",
            "description": "Complètement clair, sel complètement dissous. Une goutte goûtée est nettement mais agréablement salée, comme l'eau de mer douce.",
            "action": "Ajouter les betteraves et les aromatiques."
          },
          {
            "state": "Overdone",
            "description": "Ajouté trop de sel — la saumure a un goût fortement salé, plus du double de la salinité de l'eau de mer.",
            "action": "Diluer avec plus d'eau. Une saumure de 2 % permet la fermentation; des concentrations plus élevées ne font que du cornichon."
          }
        ]
      },
      "feelCue": "Plongez un doigt propre dans la saumure et le goût — il devrait être clairement salé mais pas écrasant. Pensez à l'eau minérale à la plage, pas au bain de bouche."
    },
    {
      "nodeId": "step_2",
      "action": "Appuyez sur",
      "inputs": [
        "brine",
        "ing_01",
        "ing_04",
        "ing_05"
      ],
      "outputState": "packed_kvass_jar",
      "instructions": "Couper les betteraves non pelées en morceaux d'environ 2 cm — le pelage n'est pas nécessaire et la peau porte des levures sauvages et des bactéries qui aident à démarrer la fermentation. Emballez les cubes de betteraves bien dans un pot à large bouche propre avec l'ail et les graines de carvi si vous les utilisez. Verser la saumure pour submerger complètement toutes les betteraves. Les betteraves doivent rester en tout temps sous la saumure. S'ils flottent, les peser avec un petit pot d'eau ou une pierre propre. Laisser 3-4cm d'espace de tête pour l'activité de fermentation.",
      "visualCue": {
        "primaryTarget": "Les betteraves sont bien emballées, entièrement submergées en saumure claire. Aucune surface de betterave n'est exposée à l'air.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les cubes de betterave flottent au-dessus de la ligne de saumure. Les surfaces exposées à l'air développeront des moisissures.",
            "action": "Ajouter plus de saumure si nécessaire, puis peser les betteraves avec quelque chose de propre et lourd."
          },
          {
            "state": "Perfect",
            "description": "Toutes les surfaces de betteraves sont submergées. La saumure est claire. Le pot est plein à 3-4cm du couvercle.",
            "action": "Couvrir librement et commencer la fermentation."
          },
          {
            "state": "Overdone",
            "description": "Jar est rempli jusqu'au sommet sans espace de tête.",
            "action": "Enlevez une saumure — la fermentation produira du gaz CO2 et se développera, et un pot trop plein débordera de désordre."
          }
        ]
      },
      "feelCue": "Le pot emballé doit se sentir lourd et dense dans vos mains — un bon signe que les betteraves sont emballées efficacement et la saumure remplit toutes les lacunes."
    },
    {
      "nodeId": "step_3",
      "action": "Ferment",
      "inputs": [
        "packed_kvass_jar"
      ],
      "outputState": "finished_beet_kvass",
      "instructions": "Couvrir le bocal d'un chiffon fixé à l'aide d'une bande de caoutchouc, ou d'un couvercle lâche — il devrait permettre au gaz de s'échapper mais garder les contaminants dehors. Entreposer à température ambiante (18–22°C) hors de la lumière directe pendant 5–7 jours. Après 24 heures, vous devriez voir de petites bulles à la surface de la saumure. Skim n'importe quelle mousse blanche qui se forme sur le dessus — c'est la levure de kahm inoffensive, pas la moisissure. Au jour 5, la saumure sera un rouge rubis vif et profond et la saveur sera terreuse, douce et agréablement aigre. Plonger dans les bouteilles et réfrigérer. Le froid arrête la fermentation et conserve le tonique pendant 4-6 semaines.",
      "visualCue": {
        "primaryTarget": "Après 5 à 7 jours : saumure rouge rubis vif et translucide. Petites bulles visibles dans le liquide lorsque le pot est légèrement incliné. Les cubes de betteraves se sont légèrement allégés en couleur, le pigment ayant été lixivié dans la saumure.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 3 jours, la saumure est rose-rouge pâle et sent encore principalement la betterave crue et le sel. Pas de note aigre. Quelques bulles.",
            "action": "Attendez encore 2 jours. La vitesse de fermentation dépend de la température — les cuisines plus froides prennent plus de temps."
          },
          {
            "state": "Perfect",
            "description": "Rouge rubis profond, visiblement bubble quand incliné. La saumure sent la terre et la brume: la betterave fermentée plutôt que la betterave crue. Une gorgée est agréablement aigre, terreuse et salée.",
            "action": "Soucher et réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "Fermenté au cours des 10 derniers jours à température ambiante — la saumure est très foncée et très aigre, presque vinaigreuse. Les cubes de betteraves sont pâles et épuisés.",
            "action": "Utiliser en petites quantités et diluer avec l'eau. Excellent comme une base de vinaigrette à salade ou ajouté à borscht pour l'auresse."
          }
        ]
      },
      "feelCue": "Penchez-vous près du pot le jour 3 et penchez légèrement — vous devriez entendre le sifflement faible de l'évasion de CO2 et sentir la première note douce-sour qui vous dit que la lactobacillus a pris place."
    }
  ]
};
