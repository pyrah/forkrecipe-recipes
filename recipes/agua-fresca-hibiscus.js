export default {
  "repoId": "master_mexican_hibiscus_agua_fresca_001",
  "parentRepoId": null,
  "slug": "agua-fresca-hibiscus",
  "author": "ForkRecipe Kitchen",
  "title": "Hibiscus Agua Fresca (Jamaïque)",
  "description": "Des fleurs d'hibiscus séchées, imprégnées d'un thé pur-pourpre vibrant, sucrées et servies sur la glace avec une touche de chaux, la couleur du coucher de soleil dans un verre.",
  "cuisine": "Mexicain",
  "culture": "Mexicain",
  "category": "beverages",
  "tags": [
    "hibiscus",
    "agua-fresca",
    "Mexique",
    "boisson froide",
    "végétalien",
    "été",
    "jamaïque"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 2,
    "salty": 0,
    "sour": 4,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Fleurs séchées d'hibiscus (jamaïque)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "sacs à thé hibiscus, 3 par tasse"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau bouillante",
      "ratioValue": 400,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau froide",
      "ratioValue": 400,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre ou sirop d'agave",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "Chérie",
        "piloncillo"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Jus de chaux frais",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Garnish",
      "name": "Coins de chaux",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Streep",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "hibiscus_tea",
      "instructions": "Placer les fleurs d'hibiscus séchées dans un grand cruche ou un bol thermofuge. Versez l'eau bouillante au-dessus d'eux et à découvert pendant 10 minutes. L'eau va tourner en profondeur pourpre presque immédiatement. Ne pas raide plus de 15 minutes — la saveur devient trop tannique.",
      "visualCue": {
        "primaryTarget": "Une infusion richement saturée pourpre pourpre — la couleur des cerises sombres — avec les fleurs séchées ayant ramolli et coulé au fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Moins de 8 minutes : l'eau est rose-rose mais mince et translucide. Les fleurs sont encore fermes et partiellement flottantes.",
            "action": "Plus longtemps. La couleur profonde est la marque visuelle pour l'extraction complète — rose pâle signifie que l'aurore et le corps n'ont pas encore complètement développé."
          },
          {
            "state": "Perfect",
            "description": "Deep, opaque pourpre pourpre qui bloque la lumière. Les fleurs sont douces, gonflées et entièrement submergées. L'arôme est floral, tarte et presque comme des baies.",
            "action": "Retirez les fleurs et remuez le sucre pendant que le thé est encore chaud."
          },
          {
            "state": "Overdone",
            "description": "Plus de 15 minutes : la couleur est très foncée, presque bordeaux-noir, et un goût sec de tanin astringent s'est développé.",
            "action": "Diluer plus agressivement avec de l'eau froide extra pour tonifier le tanin, et ajouter plus de sucre pour compenser."
          }
        ]
      },
      "feelCue": "Une fleur adoucie d'hibiscus pressée entre les doigts devrait s'effondrer complètement sans croquant restant, libérant une tache profonde de cramoisi."
    },
    {
      "nodeId": "step_2",
      "action": "Poignée",
      "inputs": [
        "hibiscus_tea",
        "ing_04"
      ],
      "outputState": "sweetened_hibiscus_concentrate",
      "instructions": "Verser le thé chaud à l'hibiscus à travers une passoire fine dans un pichet, presser les fleurs doucement pour extraire le dernier liquide. Jeter les fleurs épuisées. Alors que le liquide est encore chaud, remuer le sucre ou l'agave jusqu'à ce qu'il soit complètement dissous.",
      "visualCue": {
        "primaryTarget": "Un liquide cramoisi clair et profondément pigmenté, sans fragments de fleurs, avec du sucre complètement dissous et sans grain visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sucre n'a été dissous que partiellement — grains visibles se trouvant au fond du pichet.",
            "action": "Incorporer vigoureusement pendant que le liquide est encore chaud. Si elle a refroidi, réchauffer un quart de tasse au micro-ondes, dissoudre le sucre restant dans celui-ci, et le remuer."
          },
          {
            "state": "Perfect",
            "description": "Doux, brillant, uniforme. Pas de grains visibles. Goûte de tarte avec une douceur propre et équilibrée.",
            "action": "Ajouter l'eau froide et le jus de lime, puis refroidir."
          },
          {
            "state": "Overdone",
            "description": "Trop de sucre ajouté — le liquide a plus un goût de sirop de bonbons qu'une boisson rafraîchissante.",
            "action": "Compenser avec de l'eau froide et du jus de lime. La tarte de l'hibiscus nécessite plus d'acide, pas moins de sucre, pour rester en équilibre."
          }
        ]
      },
      "feelCue": "Frottez une goutte entre vos doigts — il devrait se sentir lisse comme un sirop léger, pas granuleux. La couleur va tacher vos doigts d'un rose profond instantané."
    },
    {
      "nodeId": "step_3",
      "action": "Refroidissement",
      "inputs": [
        "sweetened_hibiscus_concentrate",
        "ing_03",
        "ing_05",
        "ing_06"
      ],
      "outputState": "hibiscus_agua_fresca",
      "instructions": "Incorporer l'eau froide et le jus de citron vert frais dans le concentré sucré d'hibiscus. Goûtez et ajustez - plus de chaux pour la tarte, plus de sirop de sucre pour la douceur. Réfrigérer jusqu'à froid ou servir immédiatement sur la glace. Garnir d'un coin de chaux.",
      "visualCue": {
        "primaryTarget": "Une boisson vive et semi-transparente servie sur glace, la couleur reste profonde même lorsqu'elle est diluée, avec un coin de chaux perché sur le bord du verre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas encore réfrigéré — la boisson est à température ambiante et les saveurs ont un goût vif et désarticulé.",
            "action": "Ajouter beaucoup de glace au verre ou réfrigérer 20 minutes. La température adoucit considérablement le bord acide."
          },
          {
            "state": "Perfect",
            "description": "Cramoisi froid, vif, tart-sweet équilibré avec une finition lime vive. La couleur est dramatique contre la glace et sent floral et fruité.",
            "action": "Servir immédiatement. Incorporer avant de verser chaque jus de lime."
          },
          {
            "state": "Overdone",
            "description": "Surdilué — la couleur s'estompe au rose pâle et la saveur est plate et aqueuse.",
            "action": "Ajouter plus de concentré d'hibiscus si disponible, ou presser dans la chaux supplémentaire et une pincée de sucre pour ramener la saveur."
          }
        ]
      },
      "feelCue": "L'agua fresca doit se sentir léger et propre en bouche, plus mince que le jus, rafraîchissant, sans arrière-goût collant."
    }
  ]
};
