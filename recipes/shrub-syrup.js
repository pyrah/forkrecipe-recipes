export default {
  "repoId": "master_american_raspberry_shrub_001",
  "parentRepoId": null,
  "slug": "shrub-syrup",
  "author": "ForkRecipe Kitchen",
  "title": "Le sirop d'arbuste de framboise",
  "description": "Un vinaigre à boire de framboises macérées, de sucre et de vinaigre de cidre de pomme — tarte, fruité et complexe, agité dans de l'eau pétillante ou des cocktails pour un poinçon acidulé sophistiqué.",
  "cuisine": "Américain",
  "culture": "Colonial américain",
  "category": "condiments",
  "tags": [
    "arbuste",
    "vinaigre de boisson",
    "framboise",
    "cocktail",
    "coloniale",
    "marque à l'avance",
    "fruits"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "48 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 3,
    "salty": 0,
    "sour": 5,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Base",
      "name": "Framboises fraîches",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "mûres",
        "fraises"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre blanc",
        "Chérie"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme cru",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc",
        "vinaigre de champagne"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Appuyez sur",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "sugared_berries",
      "instructions": "Mélanger les framboises et le sucre dans un bol ou un pot propre et non réactif. Mêle - toi doucement avec une fourchette ou un boudlier — juste assez pour écraser les baies et commencer à libérer leur jus. Ne pas purifier. Le sucre commencera à extraire l'humidité du fruit par osmose en quelques minutes. Couvrir librement et laisser à température ambiante pendant 24 heures.",
      "visualCue": {
        "primaryTarget": "Des framboises broyées mais non purées, assises dans une réserve de sirop pourpre profond, le sucre se dissolvant visiblement dans le jus de baies.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les baies sont encore en grande partie entières et le sucre n'est pas encore dissout — la réserve de liquide est minime.",
            "action": "Mouillez plus fermement et assurez-vous que toutes les baies sont cassées. Le sucre a besoin de contact avec l'humidité des fruits pour commencer à se dissoudre."
          },
          {
            "state": "Perfect",
            "description": "Les baies s'effondrent et sont complètement saturées de sucre dissous. Une piscine de sirop rouge profond couvre le fond du bol. Les granules de sucre ne sont plus visibles.",
            "action": "Couvrir et laisser pendant 24 heures. Plus la macération est longue, plus la profondeur de saveur se développe."
          },
          {
            "state": "Overdone",
            "description": "Les baies sont devenues pâles, épuisées après trop d'agitation — la plupart des couleurs et des saveurs ont déjà été pressées.",
            "action": "Passez au repos 24 heures sur 24. L'osmose continuera avec tout ce qui reste; la couleur peut être légèrement mutée."
          }
        ]
      },
      "feelCue": "Frottez une baie entre vos doigts — elle devrait se sentir embrouillée et s'effondrer complètement, libérant une tache de jus pourpre qui est nettement plus sucrée que les fruits crus."
    },
    {
      "nodeId": "step_2",
      "action": "Repos",
      "inputs": [
        "sugared_berries"
      ],
      "outputState": "berry_syrup",
      "instructions": "Couvrir le bol et réfrigérer pendant 24 heures. Le sucre tirera tout le jus des baies, créant un sirop pourpre lumineux. À la fin, les baies auront l'air pâles et épuisées, presque blanches, après avoir abandonné tout leur pigment et leur saveur au liquide environnant.",
      "visualCue": {
        "primaryTarget": "Une piscine de sirop rouge cramoisi vif qui se déplace comme du miel lorsqu'il est incliné, environné, des écailles de baies pâles qui ont transféré leur couleur entièrement au liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les baies sont encore rouges et la piscine de sirop est mince. Moins de 12 heures ont passé.",
            "action": "Pars plus longtemps. La différence de saveur entre un arbuste de 12 heures et un arbuste de 24 heures est importante — le temps est l'ingrédient principal ici."
          },
          {
            "state": "Perfect",
            "description": "Sirop pourpre profond qui enrobe une cuillère. Les baies sont rose pâle à presque blanches, dégonflées et épuisées. L'odeur est intensement fruitée et florale.",
            "action": "Retirez et ajoutez le vinaigre."
          },
          {
            "state": "Overdone",
            "description": "Laisser plus de 36 heures à température ambiante — une faible fermentation a commencé, avec de petites bulles dans le sirop et un bord légèrement leveux à l'odeur.",
            "action": "Souchez immédiatement et ajoutez le vinaigre — l'acide arrêtera la fermentation. La légère effervescence est en fait une variation traditionnelle et ajoute du caractère."
          }
        ]
      },
      "feelCue": "Inclinez le bol — le sirop doit couler lentement et visqueusement, en faisant glisser avec lui les baies épuisées, épaisses comme une mince confiture, mais toujours librement versables."
    },
    {
      "nodeId": "step_3",
      "action": "Poignée",
      "inputs": [
        "berry_syrup",
        "ing_03"
      ],
      "outputState": "raspberry_shrub",
      "instructions": "Verser le mélange de baies macérées à l'aide d'une passoire fine dans un pot propre, presser doucement les baies épuisées avec le dos d'une cuillère pour extraire tout le sirop. Jetez la pulpe. Ajouter le vinaigre de cidre de pomme au sirop et mélanger. Bouteille et réfrigérer. L'arbuste s'améliore pendant plusieurs jours à mesure que les saveurs s'intègrent. Utilisez 2 cuillères à soupe par verre d'eau pétillante.",
      "visualCue": {
        "primaryTarget": "Un brillant sirop pourpre translucide dans la bouteille, plus épais que l'eau, plus mince que la confiture, avec un arôme de vinaigre vif et fruité qui se lève du cou.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Fraîchement fait — tranchant et vinaigre avec la saveur de fruits pas encore intégré. L'acide domine et la framboise se lit presque comme une note plutôt qu'une présence.",
            "action": "Attendez 2 à 3 jours. Les arbustes se mêlent énormément dans le frigo à mesure que les fruits et le vinaigre se marient. Goûtez tous les jours — la transformation est remarquable."
          },
          {
            "state": "Perfect",
            "description": "3-7 jours : le vinaigre est présent mais harmonieux avec la framboise. L'équilibre est transparent. La couleur est un rouge clair et profond.",
            "action": "Utilisez 2 cuillères à soupe par verre d'eau pétillante ou 1 cuillère à soupe dans un cocktail de whisky."
          },
          {
            "state": "Overdone",
            "description": "Plus d'un mois : la saveur s'est aplatie et la note de fruits frais s'estompe dans un sirop de vinaigre uni.",
            "action": "Utilisez-le pour cuisiner : un éclaboussure déglace une poêle ou remue dans une vinaigrette où le caractère fruitier passe encore."
          }
        ]
      },
      "feelCue": "Une goutte sur la langue devrait frapper avec une piqûre immédiate de tarte sucrée, suivie d'une floraison lente d'arôme de framboise — comme mordre dans le fruit lui-même, le vinaigre arrivant plus tard à respirer."
    }
  ]
};
