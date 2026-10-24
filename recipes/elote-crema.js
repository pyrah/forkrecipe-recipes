export default {
  "repoId": "master_mexican_elote-crema_001",
  "parentRepoId": null,
  "slug": "elote-crema",
  "author": "ForkRecipe Kitchen",
  "title": "Éloté Créma",
  "description": "La crème mayonnaise épicée et tannante qui enrobe le maïs de rue mexicain — créma, mayo et citron vert se mélange avec de la poudre de chili dans la sauce essentielle pour les éloutes et les esquites.",
  "cuisine": "Mexicain",
  "culture": "Mexico",
  "category": "condiments",
  "tags": [
    "Mexique",
    "maïs",
    "Produits de la rue",
    "Mayo",
    "Chili",
    "Chaux"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 3,
    "bitter": 0,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Mayonnaise (gros gras, de préférence de marque Hellmann ou mexicaine)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "mayo végétalien"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Créma mexicain (ou crème sure)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Crème fraîche",
        "labneh éclairci avec un peu de crème"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Jus de chaux frais",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Poudre de chili (mélange pur ancho ou Nouveau-Mexique)",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika fumé",
        "Assaisonnement de Tajín"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Garnish",
      "name": "Fromage Cotija finement émietté",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "fromage feta (moins salé)",
        "Parmesan, râpé finement"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Poudre de chili supplémentaire ou Tajín, pour la poussière",
      "ratioValue": 0,
      "defaultUnit": "to taste",
      "substitutions": []
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
        "ing_05"
      ],
      "outputState": "elote_crema_base",
      "instructions": "Dans un bol moyen, mélanger la mayonnaise et le créma mexicain. Frottez ensemble jusqu'à ce qu'il y ait une homogénéité complète — aucune stries de chaque composant ne doit rester. Ajouter le jus de lime frais un peu à la fois, fouetter en continu; il éclaircira légèrement le mélange et le rendra brillant. Ajouter la poudre de chili et le sel. Frottez vigoureusement pendant 30 secondes. Le créma doit être lisse, brillant et assez épais pour s'accrocher à une cuillère sans courir immédiatement. Goûtez à ce point - la chaux devrait être clairement présente, le chili devrait donner de la chaleur plutôt que de la chaleur, et la saveur globale devrait être crémeuse, tannante et plus.",
      "visualCue": {
        "primaryTarget": "Une sauce lisse, pâle-corale avec une couleur uniforme à travers — pas de stries de mayo blanc ou de crème — assez brillante pour attraper la lumière, et assez épaisse pour tenir sa forme sur une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries blanches de mayo ou de crème non mélangées visibles; poudre de chili assise dans des touffes non mélangées; le mélange semble séparé.",
            "action": "fouetter plus vigoureusement jusqu'à ce qu'il soit complètement émulsifié; la poudre de chili doit être complètement incorporée ou elle fleurira inégalement."
          },
          {
            "state": "Perfect",
            "description": "Une crème uniforme pâle-corale, lisse et brillante, avec une saveur qui est tannante, crémeuse et chaudement épicée dans une mesure égale.",
            "action": "Goûtez et ajustez la chaux pour la tarte et le sel pour l'épine dorsale salée avant d'ajouter la garniture."
          },
          {
            "state": "Overdone",
            "description": "La sauce est très fine et aqueuse — probablement trop de jus de lime cassé l'émulsion, ou le créma était très mince.",
            "action": "fouetter dans une autre cuillère de mayo pour recoller et épaissir."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère à travers la sauce et soulevez - la — le ruban devrait tomber lentement, en tenant sa forme un moment avant de se fondre. Trop arrosé et il s'écoulera tout droit du maïs; trop épais et il ne s'enveloppera pas uniformément."
    },
    {
      "nodeId": "step_2",
      "action": "Saison",
      "inputs": [
        "elote_crema_base",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_elote_crema",
      "instructions": "Pliez la moitié du cotija émietté dans la base créma et remuez pour le combiner — le sel du cotija assaisonnera la sauce. Goûtez encore et ajustez si nécessaire. Transférer dans un bol peu profond pour tremper des épis entiers, ou dans une bouteille de compression pour esquites (gottes de maïs). Juste avant de servir, époussetez généreusement la surface avec de la poudre de chili supplémentaire ou Tajín et dispersez le cotija restant. La sauce peut être composée jusqu'à 3 jours à l'avance et réfrigérée; les saveurs s'améliorent pendant la nuit comme la chaux moelle et les fleurs de chili.",
      "visualCue": {
        "primaryTarget": "Une sauce aux tons coralliens et à la crème épaisse parsemée de croûtes de cotija blanc, surmontée d'une poussière de poudre de chili rouge vif, prête à être roulée à l'intérieur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Cotija non encore incorporé, la sauce a l'air claire et pâle, sans garniture — elle aura un goût sous-assaisonné et unidimensionnel.",
            "action": "Pliez dans le fromage et la poussière avec du chili — ce ne sont pas seulement des garnitures mais des assaisonnements essentiels dans la sauce."
          },
          {
            "state": "Perfect",
            "description": "Une sauce richement parfumée et crémeuse avec cotija fournissant des poches salées, poudre de chili donnant la couleur et la chaleur, la chaux gardant tout lumineux.",
            "action": "Servir immédiatement avec du maïs grillé ou réfrigérer jusqu'à 3 jours."
          },
          {
            "state": "Overdone",
            "description": "Trop de cotija a rendu la sauce gritty et très salée.",
            "action": "Ajouter une autre poupée de créma et une pression de chaux pour équilibrer le sel et lisser la texture."
          }
        ]
      },
      "feelCue": "Rouler une herbe à travers la sauce finie — elle devrait adhérer dans une couche généreuse, même sans être si épaisse qu'elle s'entremêle. Lorsque vous mordez dans une élote habillée de cette façon, la crème froide et acidulée devrait frapper d'abord, puis le chili fumé, puis le doux char du maïs."
    }
  ]
};
