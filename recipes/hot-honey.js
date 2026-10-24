export default {
  "repoId": "master_american_hot_honey_001",
  "parentRepoId": null,
  "slug": "hot-honey",
  "author": "ForkRecipe Kitchen",
  "title": "Miel chaud",
  "description": "Le miel cru se réchauffe délicatement avec des flocons de chili rouge séchés jusqu'à ce que la capsaïcine infuse la douceur — une bruine qui transforme la pizza, le fromage, le poulet frit et tout ce qui se trouve entre les deux.",
  "cuisine": "Américain",
  "culture": "Américain",
  "category": "condiments",
  "tags": [
    "Le miel chaud",
    "américains",
    "condiment",
    "Chili",
    "Chérie",
    "chaleur douce",
    "Sans gluten",
    "végétalien"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 5,
    "salty": 0,
    "sour": 0,
    "bitter": 0,
    "umami": 0,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Sweetener",
      "name": "Miel cru ou de fleurs sauvages",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Miel de trèfle",
        "miel de sarrasin pour une saveur plus robuste"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Heat",
      "name": "flocons de chili rouges séchés (calabrien ou standard)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "gochugaru pour une chaleur coréenne",
        "flocons de chipotle pour la fumée"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "infusing_honey",
      "instructions": "Verser le miel dans une petite casserole. Ajouter les flocons de chili. Réglez - vous sur la chaleur la plus basse possible: vous voulez que le miel soit chaud et fluide, sans mijoter ni bouillonner. Mélanger à l'occasion pendant 5 minutes, puis retirer du feu et laisser tremper le chili dans la chaleur résiduelle pendant 10 minutes supplémentaires. La capsaïcine est soluble dans la graisse mais se dissout également dans le sirop de sucre chaud; la perfusion fonctionne le mieux entre 60 et 70 C / 140 à 158 F. Trop chaud et vous chassez les volatiles aromatiques qui donnent au chili frais sa complexité fruitée.",
      "visualCue": {
        "primaryTarget": "Le miel est fluide et légèrement vapeur, une nuance plus profonde d'or que cru, avec les flocons de chili suspendus uniformément tout au long. Pas de bulles qui brisent la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le miel est encore épais et chaud, des flocons de chili flottant sur le dessus. À peine toute chaleur dans la poêle — la capsaïcine n'infuse pas.",
            "action": "Levez la chaleur très légèrement et remuez pour submerger les flocons. Vous avez besoin du miel pour devenir fluide et chaud au toucher."
          },
          {
            "state": "Perfect",
            "description": "Le miel est aminci à une consistance lâche et fluide, chaud mais ne fumant pas vigoureusement. La couleur s'est approfondie. L'arôme de chili est vif et fruité dans la vapeur au-dessus de la poêle.",
            "action": "Retirer du feu et laisser le chili continuer à tremper le feu pendant 10 minutes."
          },
          {
            "state": "Overdone",
            "description": "Le miel est bouillonnant et brunissant aux bords — il a atteint la température de caramélisation et aura un goût amer et brûlé plutôt que floral et chaud.",
            "action": "Retirer immédiatement du feu. Le miel est encore utilisable si seulement légèrement caramélisé, mais le prochain lot devrait passer beaucoup moins de chaleur."
          }
        ]
      },
      "feelCue": "Tenez votre main à 10 cm au-dessus de la surface de la poêle — vous devriez sentir une chaleur douce rayonnant du miel mais pas de vraie chaleur contre votre peau. Si vous devez retirer votre main, il est trop chaud."
    },
    {
      "nodeId": "step_2",
      "action": "Infuser",
      "inputs": [
        "infusing_honey",
        "ing_03",
        "ing_04"
      ],
      "outputState": "steeped_hot_honey",
      "instructions": "Incorporer le vinaigre de cidre de pomme et le sel pendant que le miel est encore chaud. Le vinaigre n'est pas traditionnel dans toutes les recettes, mais il soulève la douceur et empêche le miel de goûter à la coagulation. Mélanger, puis laisser refroidir jusqu'à température ambiante pendant 10 minutes avant la dégustation, car la chaleur du chili s'épanouit davantage pendant qu'elle refroidit.",
      "visualCue": {
        "primaryTarget": "Un miel ambré profond avec des flocons distribués uniformément, légèrement plus mince que le miel cru en raison de la chaleur et de la petite addition de liquide. La surface capte la lumière dans une coulée lente et brillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le miel a encore le goût de chili cru et de douceur droite sans intégration entre les deux — le temps de perfusion était trop court.",
            "action": "Retourner à feu doux pendant 5 minutes, puis descendre le feu pour 10 minutes supplémentaires."
          },
          {
            "state": "Perfect",
            "description": "Doux avant avec une chaleur de bâtiment qui arrive 2 à 3 secondes après la dégustation et s'attarde chaudement sur le dos de la gorge. Le vinaigre offre une luminosité à peine perceptible.",
            "action": "Verser dans un pot et laisser refroidir à la température ambiante avant de sceller."
          },
          {
            "state": "Overdone",
            "description": "L'arrosage des yeux, la brûlure soutenue qui envahit la douceur du miel — trop de flocons de chili ou trop de perfusion.",
            "action": "Plonger dans un tamis fin dans un plus grand volume de miel frais chaud pour diluer la chaleur, goûter et ajuster jusqu'à équilibrer."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt et goût: la douceur devrait arriver en premier, la chaleur en second. Si la chaleur est à l'avant et au centre et que la douceur est enterrée, le rapport du chili au miel est coupé."
    },
    {
      "nodeId": "step_3",
      "action": "Filtrer",
      "inputs": [
        "steeped_hot_honey"
      ],
      "outputState": "finished_hot_honey",
      "instructions": "Pour une bruine lisse et propre, versez le miel dans un pot stérilisé à l'aide d'une passoire fine, en pressant les flocons de chili sur la passoire avec le dos d'une cuillère pour extraire autant de miel infusé que possible. Alternativement, laissez les flocons dans le bocal — ils continuent à infuser au fil du temps, augmentant le niveau de chaleur semaine par semaine. Entreposé à température ambiante, le miel se conserve indéfiniment; le chili ne se gâtera pas dans l'environnement du miel à faible odeur et à haute teneur en sucre.",
      "visualCue": {
        "primaryTarget": "S'il est tendu: un miel ambré brillant et clair — plus profond que cru, complètement lisse. S'il n'est pas entraîné: le même miel avec des flocons rouges vifs suspendus tout au long, beau et rustique.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le miel est encore pâle et mince, la couleur à peine changée de brute — la perfusion était trop courte ou la chaleur trop faible.",
            "action": "Retourner le miel tendu (sans flocons) dans la poêle avec du chili frais et répéter le processus de perfusion."
          },
          {
            "state": "Perfect",
            "description": "Or profond, brillant et versable avec une bruine lente et onctueuse. Le niveau de chaleur est présent mais équilibré — assez épicé pour être remarqué immédiatement, pas si féroce qu'il submerge.",
            "action": "Jar, étiquette et stockage à température ambiante. La saveur mûrit au cours des 24 à 48 premières heures."
          },
          {
            "state": "Overdone",
            "description": "Ambre très foncé, presque brun, avec un bord amer et caramélisé sous la chaleur — le miel était cuit plutôt que infusé.",
            "action": "Toujours utilisable sur le fromage ou la pizza où la légère amertume lira comme complexité; évitez de bruir sur les desserts délicats."
          }
        ]
      },
      "feelCue": "Versez une petite bruine de la cuillère dans le bocal — elle devrait tomber dans un ruban lent et intact qui se serpente à la surface avant de couler. Trop mince signifie qu'il était surchauffé; trop raide signifie qu'il a trop refroidi et a besoin d'un doux réchauffement avant de servir."
    }
  ]
};
