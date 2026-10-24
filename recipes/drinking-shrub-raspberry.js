export default {
  "repoId": "master_american_drinkingshrub_raspberry_001",
  "parentRepoId": null,
  "slug": "drinking-shrub-raspberry",
  "author": "ForkRecipe Kitchen",
  "title": "Arbuste à la framboise",
  "description": "Un arbuste de vinaigre de framboise et de cidre de pomme à froid vieilli dans le réfrigérateur pendant trois jours — assez de tarte pour vous faire gagner seul, mais transformé par l'eau de soude en quelque chose de lumineux, complexe, et vivant avec des fruits. Une tradition coloniale américaine relancée par le mouvement des cocktails artisanaux, elle fonctionne également comme une base de mocktail ou un mélangeur de whisky.",
  "cuisine": "Américain",
  "culture": "Colonial américain",
  "category": "beverages",
  "tags": [
    "américains",
    "arbuste",
    "framboise",
    "vinaigre",
    "boisson",
    "Mélangeur de cocktails",
    "vinaigre de boisson",
    "végétalien"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "3 days",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
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
      "role": "Structure",
      "name": "Framboises fraîches ou congelées",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "mûres",
        "bleuets",
        "fraises",
        "baies d'été mélangées"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de canne blanche (ou sucre cru de canne)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "miel (ajoute des notes florales)",
        "sucre de coco (ajoute la profondeur du caramel)",
        "sucre d'érable"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme brut non filtré (avec la mère)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc (plus propre, moins complexe)",
        "vinaigre de champagne (délicate)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saler et laisser reposer",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "macerated_raspberries",
      "instructions": "Mélanger les framboises et le sucre dans un pot ou un bol en verre propre. Mâcher les baies en douceur avec une fourchette ou un boudin — juste assez pour briser les peaux et libérer le jus, mais pas si soigneusement que vous faites une purée lisse (une certaine texture aide l'extraction). Bien mélanger pour enrober chaque baie de sucre. Couvrir et réfrigérer pendant au moins 8 heures, idéalement 24 heures. Pendant ce temps, le sucre tirera le jus des baies à travers l'osmose, créant un sirop épais et brillant de bijou. Mélanger ou agiter une fois après 4 heures.",
      "visualCue": {
        "primaryTarget": "Après 24 heures : les framboises sont effondrées et entourées d'un sirop de crimson-magenta profond. Le sucre est presque entièrement dissous dans le jus de baies.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sucre est encore surtout granulaire. Les baies sont encore fermes avec peu de jus extrait. Moins de 4 heures.",
            "action": "Incorporer vigoureusement et retourner au réfrigérateur. Le processus osmotique prend du temps — le sucre doit tirer pleinement le jus."
          },
          {
            "state": "Perfect",
            "description": "Des baies effondrées, profondes et brillantes, entourent la piscine. Le sucre est complètement dissous. Sentez intensément de framboise fraîche avec une douce profondeur de confiture.",
            "action": "Ajouter le vinaigre."
          },
          {
            "state": "Overdone",
            "description": "Laisser à température ambiante trop longtemps — moule commençant à se former à la surface, ou le mélange sent fermenté.",
            "action": "Jetez et redémarrez. Pour les cuisines chaudes, macérer toujours au réfrigérateur."
          }
        ]
      },
      "feelCue": "Frottez un peu de sirop entre le pouce et l'index — il devrait se sentir épais et légèrement collant, comme de la confiture fine, et laisser une tache de framboise profonde qui persiste même après le rinçage."
    },
    {
      "nodeId": "step_2",
      "action": "Infuser",
      "inputs": [
        "macerated_raspberries",
        "ing_03"
      ],
      "outputState": "finished_shrub",
      "instructions": "Placer le sirop macéré de framboise-sucre à travers un tamis à mailles fines dans un bocal en verre propre, en pressant fermement les baies solides avec le dos d'une cuillère pour extraire chaque goutte. Jeter les solides usés ou les utiliser dans un smoothie. Ajouter le vinaigre de cidre de pomme au sirop tendu et mélanger soigneusement. Le mélange changera immédiatement de caractère — le vinaigre coupe à travers la douceur et l'ensemble devient plus complexe. Scellez le pot et réfrigérez pendant au moins 24 heures et idéalement 48 à 72 heures avant d'utiliser : la macération froide permet au vinaigre de se marier complètement avec le sirop de fruits, adoucissant ainsi ses bords tranchants. Pour servir, mélanger 2 à 3 cuillères à soupe d'arbuste avec 200 ml d'eau pétillante et de glace, ou ajouter aux cocktails.",
      "visualCue": {
        "primaryTarget": "Un liquide translucide et rubis qui attrape la lumière comme un grenat. Lorsqu'il est dilué avec de l'eau pétillante, il fleurit dans un rose vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'arbuste goûte du vinaigre cru avec les fruits et la douceur de combattre plutôt que d'intégrer. Moins de 24 heures.",
            "action": "Retourner au réfrigérateur pendant 24 à 48 heures. Le temps est le seul remède: les acides doivent se mouiller et se marier avec les sucres de fruits."
          },
          {
            "state": "Perfect",
            "description": "Sharp mais arrondi. Fruit en avant sur le nez, tarte en bouche, avec une longue finale propre. Le vinaigre est perceptible mais pas agressif. A 3 jours.",
            "action": "A conserver réfrigéré jusqu'à 3 mois. La saveur continue à se fondre au fil du temps."
          },
          {
            "state": "Overdone",
            "description": "Après des mois au réfrigérateur, l'arbuste est devenu très aiguisé et le caractère fruitier s'estompe, goûtant principalement du vinaigre.",
            "action": "Ajoutez une cuillère à soupe de miel frais et secouez-la pour la combiner. Toujours excellent comme mélangeur de cocktails."
          }
        ]
      },
      "feelCue": "Versez une petite quantité sur le dos de votre main et de l'odeur — le vinaigre devrait lever la surface rapidement, laissant derrière l'odeur de framboises et quelque chose de presque vin, complexe et doux fruité."
    }
  ]
};
