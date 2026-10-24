export default {
  "repoId": "master_korean_american_gochujang_mayo_001",
  "parentRepoId": null,
  "slug": "gochujang-mayo",
  "author": "ForkRecipe Kitchen",
  "title": "Gochujang Mayo",
  "description": "La mayonnaise grimpait avec la pâte coréenne de gochujang — chaleur douce, profondeur de l'umami et crémosité dans une cuillère pourpre. De même à la maison sur le poulet frit, les tacos, ou les légumes rôtis.",
  "cuisine": "Coréen-Américain",
  "culture": "Fusion coréenne-américaine",
  "category": "condiments",
  "tags": [
    "coréen",
    "Mayo",
    "Gochujang",
    "sauce",
    "condiment",
    "épicé",
    "fusion",
    "Vite"
  ],
  "difficulty": 1,
  "activeTime": "5 min",
  "totalTime": "5 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Mayonnaise",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Mayo kewpie japonais"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Base",
      "name": "Gochujang (Pâte de chili coréen)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Vin de riz",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron vert"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poudre d'ail",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "1 petite gousse d'ail, râpée"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Chérie",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre",
        "sirop d'érable"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whisk",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "combined_gochujang_mayo",
      "instructions": "Mélanger tous les ingrédients dans un petit bol. fouetter vigoureusement jusqu'à ce que le gochujang soit complètement intégré dans la mayonnaise et que la couleur soit uniforme dans l'ensemble — il ne reste pas de stries rouge foncé. La sauce finie doit être un saumon-orange uniforme, lisse et brillant.",
      "visualCue": {
        "primaryTarget": "Une sauce orange-saumon uniforme à rouge-orange foncé sans stries foncées ni tourbillons de gochujang non mélangés. Gloire et lisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des traces sombres de gochujang rouge-brun continuent de traverser la mayo blanche. La pâte n'est pas encore complètement dispersée.",
            "action": "Continuez à fouetter. La pâte de Gochujang est dense et nécessite de 30 à 45 secondes de mélange vigoureux pour être totalement homogénéisée avec la mayonnaise."
          },
          {
            "state": "Perfect",
            "description": "Couleur uniforme saumon-orange, brillant et lisse. Des odeurs d'huile de sésame, de chili fermenté et de miel. Goûts équilibrés — crémeux, riche en umami, et réchauffement dans cet ordre.",
            "action": "Goûtez et ajustez avant de réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "Surgissant, avec de l'air — la sauce est aérée et mousseuse plutôt que dense et crémeuse.",
            "action": "Appuyez sur le bol sur le comptoir pour faire sauter les bulles d'air et remuer doucement pour lisser. La mousse se déposera dans une minute."
          }
        ]
      },
      "feelCue": "La sauce doit avoir l'air d'une crème épaisse et légèrement collante; elle enrobe l'arrière d'une cuillère et ne s'enfuit pas immédiatement lorsque la cuillère est levée horizontalement."
    },
    {
      "nodeId": "step_2",
      "action": "Saison",
      "inputs": [
        "combined_gochujang_mayo"
      ],
      "outputState": "gochujang_mayo",
      "instructions": "Goûtez la sauce et ajustez : plus de gochujang pour la chaleur et la profondeur fermentée, plus de miel pour adoucir la chaleur, plus de vinaigre pour la luminosité, plus d'huile de sésame pour la noix. Transférer dans un contenant scellé et réfrigérer. Utiliser dans 1 semaine. Les saveurs s'approfondissent et se mélangent sensiblement après quelques heures de réfrigération.",
      "visualCue": {
        "primaryTarget": "La sauce tient légèrement sa forme lorsqu'elle est poussée avec une cuillère — plus épaisse que le ketchup, plus lâche que le beurre d'arachide — avec une surface brillante et uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a un goût plat — la mayonnaise domine et le gochujang n'est pas passé. L'acidité manquante le rend bouillant.",
            "action": "Ajouter une cuillère à café à la fois, puis ajouter quelques gouttes de vinaigre. Le coup de pied et l'acide fermentés font vivre cette sauce."
          },
          {
            "state": "Perfect",
            "description": "Une couche transparente de riche onctuosité, de la chaleur douce, de la profondeur de l'umami, et une finition vinaigre vif. Chaque élément est présent mais aucun ne domine.",
            "action": "Réfrigérer dans un pot scellé. Mélanger avant chaque utilisation."
          },
          {
            "state": "Overdone",
            "description": "Trop de gochujang — la saveur brute de la pâte fermentée est écrasante et la chaleur brûle plutôt que de se réchauffer.",
            "action": "Ajouter plus de mayonnaise dans les incréments de cuillère à soupe pour diluer la chaleur, puis rééquilibrer avec une touche de miel et de vinaigre."
          }
        ]
      },
      "feelCue": "Faites glisser un doigt dans la sauce – il devrait laisser une tranchée propre qui tient ses bords pendant plusieurs secondes avant de fermer lentement, indiquant le bon corps et la teneur en graisse."
    }
  ]
};
