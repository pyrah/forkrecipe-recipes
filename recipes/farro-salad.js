export default {
  "repoId": "master_italian_farrosalad_001",
  "parentRepoId": null,
  "slug": "farro-salad",
  "author": "ForkRecipe Kitchen",
  "title": "Salade de Farro",
  "description": "Une salade italienne de grain construite sur la base de noix, mâcheuse de farro entier — jeté encore chaud avec des tomates cerises, concombre, roquette poivrée, pecorino aiguisé, et une vinaigrette à l'huile d'olive de citron qui trempe dans chaque grain.",
  "cuisine": "Italien",
  "culture": "Italien",
  "category": "grains",
  "tags": [
    "grains",
    "Italien",
    "Farro",
    "salade",
    "végétarien",
    "Céréales"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "45 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 2,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Farro entier (semi-poiré)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "baies d'épeautre",
        "baies de blé"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Tomates cerises (chaudées)",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Concombre (découpé, graines enlevées)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Fusée sauvage (arugule)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "bébé épinards"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Pecorino Romano (caché)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "Parmigiano-Reggiano",
        "Fromage dur végétalien"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Jus de citron fraîchement pressé",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel de mer fin et poivre noir",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Persil frais à feuilles plates (coiffé)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "basilic frais"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire bouillir",
      "inputs": [
        "ing_01",
        "ing_08"
      ],
      "outputState": "cooked_farro",
      "instructions": "Rincez le farro. Cuire dans un grand pot d'eau bouillante généreusement salée pendant 25-35 minutes (farro semi-poiré) jusqu'à ce que les grains soient tendres mais aient encore une bouchée ferme et mâcheuse — pensez aux pâtes al dente, pas au porridge doux. Égoutter et étaler sur un grand plateau pour refroidir et relâcher la vapeur. Assaisonner immédiatement avec du sel et une bruine d'huile d'olive tout en restant chaud afin que les grains absorbent le goût.",
      "visualCue": {
        "primaryTarget": "Graines enflées de pruneaux qui ont triplé en taille, bronzage léger à brun doré. Certains grains se sont peut - être séparés — c'est normal et souhaitable.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore difficiles au centre. Un grain mordu grince et est blanc crayeux à l'intérieur.",
            "action": "Cuire encore 5-10 minutes. Farro prend plus de temps qu'il ne semble — vérifiez fréquemment après 25 minutes."
          },
          {
            "state": "Perfect",
            "description": "Prêter tout le long, mais avec un mâchement distinct et agréable quand mordu. Le grain cède le pas proprement — pas de croûte, pas de mousse. Noix, saveur légèrement sucrée.",
            "action": "Égoutter immédiatement et s'étendre sur un plateau pour sécher à la vapeur."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont très doux, musqués, et certains se sont désintégrés. Il ne reste aucun intérêt textuel.",
            "action": "Égoutter et refroidir rapidement. La salade peut être un peu plus mushi que l'idéal, mais la saveur est inchangée."
          }
        ]
      },
      "feelCue": "Mordre dans un grain égoutté — il devrait donner une certaine résistance avant de céder, comme mordre à travers une pâte très al dente, puis libérer une saveur douce et noisette qui enrobe la langue."
    },
    {
      "nodeId": "step_2",
      "action": "Mélanger",
      "inputs": [
        "cooked_farro",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_09"
      ],
      "outputState": "finished_farro_salad",
      "instructions": "Alors que le farro est encore chaud (pas chaud), le combiner dans un grand bol avec les tomates cerises, le concombre, le persil et la fusée. Mélanger le jus de citron et l'huile d'olive avec une pincée de sel et verser sur la salade. Jetez bien. Scatter le pecorino rasé sur le dessus. Goûtez et ajustez - la salade devrait être lumineuse et citronnée, le farro fournissant une colonne vertébrale chaude et noisette.",
      "visualCue": {
        "primaryTarget": "Un bol brillant et coloré où le farro doré est uniformément enrobé dans la vinaigrette au citron, les tomates et le concombre vif, la fusée vert foncé et les copeaux de pécorino dispersés comme de la neige pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La salade a l'air sèche. Farro ne brille pas, la vinaigrette n'a pas recouvert les grains. Toujours chaud dans un tas.",
            "action": "Ajouter plus d'huile d'olive et de jus de citron. Le farro chaud absorbe rapidement l'habillage — il a toujours besoin de plus que vous ne le pensez."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain brille, les tomates ont libéré un peu de jus qui a mélangé avec la vinaigrette, la roquette est légèrement flétrie par la chaleur du grain chaud. Équilibré, lumineux, noisette, citronné.",
            "action": "Servir immédiatement à la température ambiante, ou réfrigérer et ramener à la température ambiante avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Rocket a complètement flétri et est sombre et visqueux. Les concombres sont devenus doux et aqueux. La salade était habillée trop loin à l'avance.",
            "action": "Égoutter l'excès de liquide, ajouter une poignée de fusée fraîche, et ré-saisonner avec une pression de citron."
          }
        ]
      },
      "feelCue": "Fourche une bouche — les grains doivent être assez frais pour manger, mais encore chauds au cœur, et la morsure doit alterner entre la mâche du farro, la pop de la tomate, et la croûte du concombre."
    }
  ]
};
