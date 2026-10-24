export default {
  "repoId": "master_american_drinkingshrub_001",
  "parentRepoId": null,
  "slug": "drinking-shrub",
  "author": "ForkRecipe Kitchen",
  "title": "Boire de l'arbuste",
  "description": "Un sirop de vinaigre de fruits de l'époque coloniale — des baies de saison macérées dans du sucre jusqu'à ce que leurs jus soient libres, puis vieillies avec du vinaigre de cidre de pomme pendant une semaine dans un concentré de boisson complexe et tannant qui réveille l'eau pétillante ou les cocktails.",
  "cuisine": "Américain",
  "culture": "Américain",
  "category": "beverages",
  "tags": [
    "boissons",
    "américains",
    "arbuste",
    "vinaigre",
    "fruits",
    "végétalien",
    "Sans gluten"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "7 days",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 0,
    "sour": 4,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Aromatic",
      "name": "baies saisonnières (framboise, framboise ou mûre)",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "Fruits en pierre, piqués et coupés en deux",
        "Pêches",
        "prunes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brut",
        "miel (méthode chaude)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme brut non filtré",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de champagne",
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Herbes fraîches ou épices entières (facultatif: romarin, poivre noir, cardamome)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saler et laisser reposer",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_04"
      ],
      "outputState": "macerated_fruit",
      "instructions": "Mélanger les baies et le sucre dans un pot en verre propre. Ajouter n'importe quel aromatique — un brin de romarin ou quelques grains de poivre fissurés travaillent magnifiquement avec les fraises. Incorporer, couvrir librement et laisser à température ambiante pendant 24-48 heures. Le sucre tire l'humidité du fruit par osmose, créant un sirop vif et intensément aromatisé au moment où le fruit commence à s'effondrer.",
      "visualCue": {
        "primaryTarget": "Au bout de 24 heures, les fruits sont clairs et clairs, entourés d'une piscine de sirop de fruits visqueux richement coloré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 6 heures : à peine tout liquide libéré. Le sucre semble humide mais le fruit est toujours intact.",
            "action": "Remuer une fois et attendre. L'osmose prend du temps. La température ambiante compte aussi."
          },
          {
            "state": "Perfect",
            "description": "Le fruit a abandonné la plupart de son liquide. Pool de sirop de couleur foncée et brillant enrobe les fruits. Sensation intense de fruits mûrs et de douceur.",
            "action": "Retirer les fruits et ajouter le vinaigre."
          },
          {
            "state": "Overdone",
            "description": "Laisser plus de 48 heures — le fruit commence à fermenter. Une odeur étourdie.",
            "action": "C'est très bien, un arbuste légèrement fermenté a plus de complexité. Continuez."
          }
        ]
      },
      "feelCue": "Inclinez le pot — le sirop doit couler épais et lentement, en enrobant le verre dans un film de couleur bijou. Il doit sentir agressivement les fruits mûrs."
    },
    {
      "nodeId": "step_2",
      "action": "Filtrer",
      "inputs": [
        "macerated_fruit"
      ],
      "outputState": "fruit_syrup",
      "instructions": "Verser le fruit macéré dans un pot propre, en appuyant sur le fruit pour extraire chaque goutte de sirop. Jeter la pulpe de fruits usés (ou l'utiliser pour la cuisson). Vous ne voulez que le liquide vif et concentré. Vous devriez avoir environ 150-200 ml de sirop.",
      "visualCue": {
        "primaryTarget": "Un sirop dense et de couleur bijou: rubis pour fraise, magenta profonde pour framboise, presque noir pour mûre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il n'y a pas assez de liquide pressé: les fruits contiennent encore trop de sirop.",
            "action": "Appuyez plus fermement avec le dos d'une cuillère."
          },
          {
            "state": "Perfect",
            "description": "Sirop riche et intensément coloré avec une consistance de revêtement épaisse. Goûte explosivement de fruits concentrés et de sucre.",
            "action": "Ajouter le vinaigre."
          },
          {
            "state": "Overdone",
            "description": "Pousser si fort que la pulpe et les graines passèrent à travers — texture nuageuse et grisâtre.",
            "action": "Retransformez-vous à travers une nappe de fromage ou un filtre à café."
          }
        ]
      },
      "feelCue": "Une goutte sur le bout des doigts devrait se sentir collante et dense — il tire dans les cordes lorsque vous appuyez sur le doigt pour le pouce et se détacher."
    },
    {
      "nodeId": "step_3",
      "action": "Infuser",
      "inputs": [
        "fruit_syrup",
        "ing_03"
      ],
      "outputState": "finished_drinking_shrub",
      "instructions": "Incorporer le vinaigre dans le sirop de fruits dans le pot jusqu'à combinaison. Sceller et réfrigérer pendant 5 à 7 jours, en agitant une fois par jour. La période de repos est essentielle — le dur bord brut du vinaigre s'intègre au sirop de fruits et s'achève dans quelque chose d'harmonieux et complexe. Goûtez après 5 jours. Servir 2 c. à soupe par verre recouvert d'eau pétillante sur la glace.",
      "visualCue": {
        "primaryTarget": "Après le repos : un sirop limpide, aux tons de bijoux qui sent le fruit et le vinaigre mais où aucun élément ne domine. Ni purement sucré, ni purement acide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Vinaigre odeur nette et dure, bord brut non intégré. Goûte comme du vinaigre avec des fruits dedans.",
            "action": "Sceller et réfrigérer au moins 5 jours de plus. Le temps fait le travail."
          },
          {
            "state": "Perfect",
            "description": "Harmonieux: fruits, vinaigre et douceur dans la conversation. Dilué 1:5 avec de l'eau pétillante, il est lumineux, complexe et addictif. Réfrigéré, il garde 3 mois.",
            "action": "Utiliser dans l'eau pétillante, les cocktails ou la crème glacée à la vanille."
          },
          {
            "state": "Overdone",
            "description": "La fermentation excessive — l'arbuste a fait alcooliser les levures sauvages sur les fruits. Fausse odeur boueuse.",
            "action": "Toujours potable et intéressant. Utiliser comme mélangeur de cocktails."
          }
        ]
      },
      "feelCue": "L'arbuste fini devrait faire de votre bouche de l'eau au moment où vous ouvrez le pot — l'acidité déclenche la salivation avant même de le goûter."
    }
  ]
};
