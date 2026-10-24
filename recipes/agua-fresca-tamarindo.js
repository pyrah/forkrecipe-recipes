export default {
  "repoId": "master_mexican_agua_fresca_tamarindo_001",
  "parentRepoId": null,
  "slug": "agua-fresca-tamarindo",
  "author": "ForkRecipe Kitchen",
  "title": "Agua Fresca de Tamarindo",
  "description": "Une agua fresca mexicaine faite à partir de gousses de tamarin cuites jusqu'à ce que leur tarte, pulpe de type datte se dissout dans l'eau sombre et terreuse, puis tendue et sucrée à un parfait équilibre de aigre et doux, illuminé d'une pincée de sel qui rend chaque gorgée froide goût comme le centre d'un bonbon de tamarin.",
  "cuisine": "Mexicain",
  "culture": "Centre-Mexique",
  "category": "beverages",
  "tags": [
    "agua-fresca",
    "Tamarindo",
    "Mexique",
    "boisson froide",
    "Tamarin",
    "acide",
    "été"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "45 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 5,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Acid",
      "name": "Bloc de pâte de tamarin (non concentré) ou gousses de tamarin frais",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "3 c. à soupe de concentré de tamarin (supprimer l'étape de mijotage)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Solvent",
      "name": "Eau (pour mijoter le tamarin)",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Solvent",
      "name": "Eau froide (pour diluer à boire)",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de canne ou sirop simple",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "piloncillo",
        "Chérie",
        "sirop d'agave"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel de mer fin (une pincée)",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Citrus",
      "name": "Jus de chaux frais (facultatif, à aiguiser)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter le tamarin",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "tamarind_liquid",
      "instructions": "Coupez le bloc de pâte de tamarin en morceaux ou retirez les coquilles des gousses fraîches et retirez les graines. Placer le tamarin dans une casserole moyenne avec l'eau mijotée. Faire mijoter à feu moyen, puis réduire à feu doux et cuire 10 à 15 minutes, en masquant la pulpe contre les côtés de la poêle avec une cuillère en bois ou une purée de pommes de terre pendant qu'elle s'adoucit. La pulpe se dissout dans l'eau, la transformant en acajou brun profond. Les graines, les fibres et les morceaux de coquille resteront séparés. L'odeur est intensément aigre, fruitée et légèrement sucrée, l'arôme caractéristique du tamarin utilisé dans les cuisines en Asie, en Afrique et en Amérique latine.",
      "visualCue": {
        "primaryTarget": "Un liquide brun foncé profond avec la couleur du thé glacé très foncé, épais avec pulpe de tamarin dissous, graines et brins fibreux visibles partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux de tamarins encore intacts et visibles. L'eau est légèrement teintée. La pâte n'est pas dissoute.",
            "action": "Continuer à mijoter et à mijoter encore 5 minutes. La pulpe doit se dissoudre complètement dans l'eau pour extraire toute la saveur et la tarte."
          },
          {
            "state": "Perfect",
            "description": "Liquide acajou profond avec pulpe complètement dissoute. Les graines et les fibres restent mais flottent librement. Ça sent le tamarin. Le goût est très aigre, légèrement sucré et plein d'arôme.",
            "action": "Refroidissement légèrement et déformation."
          },
          {
            "state": "Overdone",
            "description": "Le liquide est très épais et sirupeux à cause de la surréduction. Plutôt sombre.",
            "action": "Ajouter de l'eau supplémentaire pour se détendre avant la déformation. Le tamarin surréduit est fortement concentré, juste dilué."
          }
        ]
      },
      "feelCue": "Le liquide de tamarin à ce stade goûtera intensément aigre et presque inconfortablement concentré — c'est exact. Il sera dilué avec de l'eau froide dans la prochaine étape, et la boisson finale devrait avoir un goût équilibré, non punissant."
    },
    {
      "nodeId": "step_2",
      "action": "Poignée",
      "inputs": [
        "tamarind_liquid"
      ],
      "outputState": "strained_tamarind_base",
      "instructions": "Verser le liquide de tamarin à travers un tamis à mailles fines placé sur un grand bol ou un pichet, en appuyant fermement sur les solides avec le dos d'une cuillère pour extraire chaque dernière goutte de pulpe. Jeter les graines, les fibres et tout autre morceau de coquille. Le liquide tendu sera épais, très sombre et intensément aigre — c'est votre concentré de tamarin. Il peut être fabriqué à l'avance et entreposé réfrigéré jusqu'à une semaine à ce stade avant de diluer et d'édulcorer.",
      "visualCue": {
        "primaryTarget": "Un liquide lisse, brun foncé, visqueux, exempt de graines et de fibres. Presque opaque et épais, plus foncé que n'importe quelle boisson commerciale de tamarin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines et les fibres traversent le tamis. Le liquide est encore bouché.",
            "action": "Utilisez un tamis à mailles plus fines ou alignez le tamis avec du linge de fromage."
          },
          {
            "state": "Perfect",
            "description": "Liquide lisse, sans fibres, brun profond. Elle coule de la cuillère dans un ruisseau épais. Pas de grit au goût.",
            "action": "Ajouter l'eau froide, le sucre, le sel et le jus de lime pour compléter l'agua fresca."
          },
          {
            "state": "Overdone",
            "description": "Tu as pressé si fort que le matériel fibreux a traversé le tamis. Le liquide est légèrement gris.",
            "action": "Plongez encore dans un tissu plus fin. Une petite quantité de fibres n'est pas nuisible, juste désagréable dans la texture."
          }
        ]
      },
      "feelCue": "Goûtez une petite cuillerée de concentré tendu non diluée: elle devrait être aigre, terreuse et légèrement sucrée à la fois, comme des bonbons au tamarin concentré. S'il a un goût plat ou aplati, laisser mijoter un peu plus longtemps avant de s'étirer."
    },
    {
      "nodeId": "step_3",
      "action": "Douces et diluées",
      "inputs": [
        "strained_tamarind_base",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_agua_fresca_tamarindo",
      "instructions": "Ajouter l'eau froide au concentré de tamarin tendu et mélanger. Ajouter le sucre (ou le sirop simple pour une dissolution plus rapide) et une pincée de sel — le sel n'est pas pour l'assaisonnement au sens traditionnel mais fonctionne comme un amplificateur de saveur, rendant la saveur sucrée-sour-terre du goût du tamarin plus vif et complet. Ajouter le jus de lime si vous l'utilisez pour une luminosité supplémentaire. Goûtez et ajustez : plus de sucre si trop acide, plus de tamarin concentré si trop sucré, plus de sel s'il a un goût plat. Servir le glaçon sur un grand verre de glace, en remuant avant de verser chaque fois que les sédiments du tamarin se déposent rapidement.",
      "visualCue": {
        "primaryTarget": "Une boisson translucide d'ambre foncé à brun versé sur la glace, de couleur plus claire que le concentré mais encore profondément pigmenté, avec un anneau de mousse faible sur la surface du verre de la verser.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Encore très aigre et concentrée — pas assez d'eau ou de sucre. La couleur est très sombre.",
            "action": "Ajouter plus d'eau en petites quantités jusqu'à ce que la saveur soit équilibrée entre aigre, doux et terreux. Goûtez après chaque ajout."
          },
          {
            "state": "Perfect",
            "description": "Équilibré aigre-doux, terreux, avec le sel amplifiant chaque élément. La couleur est un riche brun-ambre sur la glace. Froide, rafraîchissante, et complètement contrairement aux boissons commerciales de tamarin.",
            "action": "Servir immédiatement sur un verre de glace."
          },
          {
            "state": "Overdone",
            "description": "Surdoué — la tarte a été enterrée par le sucre. La couleur semble aqueuse et pâle.",
            "action": "Ajouter plus de concentré de tamarin ou une pression de chaux pour rétablir l'équilibre aigre."
          }
        ]
      },
      "feelCue": "Un tamarindo agua fresca bien équilibré devrait vous faire vivre la triade à la fois aigre-douce-salée dans les trois premières secondes de dégustation — sucrée devant, aigre fleurissant au milieu, sel prolongeant la finale. Si l'un des trois est manquant, la boisson est incomplète."
    }
  ]
};
