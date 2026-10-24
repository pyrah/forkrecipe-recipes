export default {
  "repoId": "master_american_pot_roast_root_vegetables_001",
  "parentRepoId": null,
  "slug": "pot-roast-root-vegetables",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Rôti de pot avec des légumes-racines",
  "description": "Un poulet bien marbré rôti noir et braisé bas dans le vin rouge et le stock jusqu'à ce qu'il donne à une cuillère, entouré de carottes, de panais, et de pommes de terre qui boivent la sauce profonde et bœuf.",
  "cuisine": "Américain",
  "culture": "Cuisine maison américaine",
  "category": "proteins",
  "tags": [
    "boeuf",
    "braise",
    "rôtis",
    "Rôti du dimanche",
    "les légumes-racines;",
    "confort",
    "cuisine maison",
    "weekend"
  ],
  "difficulty": 2,
  "activeTime": "45 min",
  "totalTime": "4 hr",
  "ratioSystem": "weight",
  "servings": 6,
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-09-29",
  "updatedAt": "2026-09-29",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Boeuf rôti, désossé (environ 1,6 kg), attaché",
      "ratioValue": 1600,
      "defaultUnit": "g",
      "substitutions": [
        "rond inférieur (plus léger; peut tourner à sec)",
        "poitrine plate"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 18,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "suif de bœuf"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignons jaunes, coupés en quartiers épais",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Ail, cassé",
      "ratioValue": 6,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Vin rouge sec",
      "ratioValue": 240,
      "defaultUnit": "ml",
      "substitutions": [
        "stock supplémentaire plus 1 c. à soupe de vinaigre de vin rouge"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Boeuf ou bouillon de poulet, faible teneur en sodium",
      "ratioValue": 480,
      "defaultUnit": "ml",
      "substitutions": [
        "eau plus 1 c. à soupe de sauce soja"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Glutamate",
      "name": "sauce Worcestershire",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "sauce de soja"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Herb",
      "name": "Thym",
      "ratioValue": 5,
      "defaultUnit": "sprigs",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 2,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Sweetener",
      "name": "Carottes, pelées, coupées en longueurs de 5 cm",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Aromatic",
      "name": "Panais, pelés, coupés en longueurs de 5 cm",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "navets, coupés en quatre",
        "racine de céleri, en morceaux"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Starch",
      "name": "Petites pommes de terre cireuses, coupées en deux",
      "ratioValue": 700,
      "defaultUnit": "g",
      "substitutions": [
        "Ors du Yukon, coupés en morceaux de 5 cm"
      ]
    },
    {
      "ingId": "ing_16",
      "role": "Herb",
      "name": "Persil à feuilles plates, haché",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sear",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "seared_chuck",
      "instructions": "Chauffer le four à 300 °F (150 °C). Faire sécher le mandrin et assaisonner avec 14 g de sel et de poivre. Chauffer l'huile dans un four hollandais lourd de 6 à 7 qt (6 l) à feu moyen-vif jusqu'à ce qu'elle mijote. Placer le rôti de 4 à 5 minutes de chaque côté, y compris les bords, jusqu'à ce qu'il soit profondément doré — environ 15 à 20 minutes au total. Transférer dans une assiette.",
      "visualCue": {
        "primaryTarget": "Une croûte brun marron foncé sur chaque face du rôti.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est gris-tan et humide, avec peu d'affection dans le pot.",
            "action": "Garder la mer; ne pas déplacer le rôti jusqu'à ce qu'il se soulève librement."
          },
          {
            "state": "Perfect",
            "description": "Croûte brun foncé, presque couleur noix, avec une odeur riche et torréfié; le fond du pot est glacé d'un goût brun.",
            "action": "Retirer le boeuf et ajouter les oignons."
          },
          {
            "state": "Overdone",
            "description": "Patches de croûte noire et une odeur brûlée; le fond est noir.",
            "action": "Essuyez la marmite avant de continuer — l'affection brûlée rendra toute la braise amère."
          }
        ]
      },
      "feelCue": "La viande doit se libérer du pot avec un doux coup de nez lorsqu'un côté est bien séché; si elle colle et larmes, donnez-lui une autre minute."
    },
    {
      "nodeId": "step_2",
      "action": "Déglacement",
      "inputs": [
        "seared_chuck",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "braising_pot",
      "instructions": "Abaissez le feu à moyen, ajoutez les oignons et faites cuire 5 à 6 minutes jusqu'à ce qu'ils prennent la couleur aux bords. Ajouter l'ail et la pâte de tomate et remuer 2 minutes jusqu'à ce que la pâte s'assombrisse. Verser le vin, racler le fond propre et laisser mijoter 3 minutes. Ajouter le stock, Worcestershire, le thym et les feuilles de laurier, puis retourner le boeuf et les jus. Le liquide devrait venir à la moitié du rôti; ajouter de l'eau si nécessaire. Faites frémir.",
      "visualCue": {
        "primaryTarget": "Boeuf à moitié submergé dans un liquide sombre, légèrement bouillonnant, le fond du pot raclé propre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le fond est toujours collé au fond et le vin sent cru et vif.",
            "action": "Grattez plus fort et laissez mijoter encore une minute ou deux."
          },
          {
            "state": "Perfect",
            "description": "Le liquide est brun rubis profond, sent le vin et la viande rôtie, et est à un doux mijoter autour du rôti submergé à mi-chemin.",
            "action": "Couvrir et passer au four."
          },
          {
            "state": "Overdone",
            "description": "Le rôti est complètement submergé — il fera bouillir plutôt que du braise et du goût plat.",
            "action": "Retirez le liquide jusqu'à ce qu'il atteigne la moitié; conservez le supplément pour le rajouter plus tard si nécessaire."
          }
        ]
      },
      "feelCue": "La cuillère en bois devrait racler à travers un fond de pot lisse sans résistance de gritty de fond collé."
    },
    {
      "nodeId": "step_3",
      "action": "Brise",
      "inputs": [
        "braising_pot"
      ],
      "outputState": "half_braised_beef",
      "instructions": "Couvrir soigneusement et brasser au four pendant 2 heures, en retournant le rôti une fois à la marque d'une heure. Le liquide à l'intérieur devrait être à peine bouillonnant; s'il est bouillant dur, baisser le four à 275°F (135°C).",
      "visualCue": {
        "primaryTarget": "Le boeuf rétrécit légèrement et s'obscurcit, une fourchette glisse avec une résistance modérée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le boeuf se sent encore serré et printanier; la fourchette rencontre une forte résistance.",
            "action": "C'est ce que l'on attend à ce stade; continuez jusqu'aux légumes."
          },
          {
            "state": "Perfect",
            "description": "La viande s'est resserrée et a commencé à se détendre; le liquide est légèrement bouillonnant et s'est un peu épaissi.",
            "action": "Ajouter les légumes."
          },
          {
            "state": "Overdone",
            "description": "Le liquide a été réduit à moins d'un quart de la hauteur du rôti et brûle aux bords.",
            "action": "Ajouter 240 ml d'eau chaude ou de bouillon et couvrir plus étroitement."
          }
        ]
      },
      "feelCue": "Lever le couvercle devrait libérer une cuillerée de vapeur foncée, et le liquide devrait trembler plutôt que rouler."
    },
    {
      "nodeId": "step_4",
      "action": "Braise aux légumes",
      "inputs": [
        "half_braised_beef",
        "ing_13",
        "ing_14",
        "ing_15",
        "ing_02"
      ],
      "outputState": "tender_pot_roast",
      "instructions": "Nettoyez les carottes, les panais et les pommes de terre autour du boeuf, en les poussant dans le liquide et en saupoudrant de sel de 4 g. Couvrir et retourner au four pendant 1 heure à 1 heure 15 minutes, jusqu'à ce que le boeuf soit tendre à la fourchette et que les légumes soient doux mais tiennent leur forme.",
      "visualCue": {
        "primaryTarget": "Boeuf qui se sépare le long de son grain avec une fourchette, et les légumes qui sont tendres tout le chemin à travers.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Une fourche tordue dans le boeuf rencontre la résistance; les tranches tiennent fermement. Les pommes de terre sont dures au centre.",
            "action": "Couvrez et continuez à braquer, en vérifiant toutes les 15 minutes."
          },
          {
            "state": "Perfect",
            "description": "Le boeuf s'écaille en lambeaux épais et juteux lorsqu'une fourchette y est tordue; les carottes et les pommes de terre n'offrent aucune résistance à un couteau à parure, mais ne s'effondrent pas.",
            "action": "Terminer."
          },
          {
            "state": "Overdone",
            "description": "Le boeuf est sec et stringé aux bords; les pommes de terre s'écroulent dans le liquide.",
            "action": "Incorporer la pomme de terre cassée dans la sauce pour l'épaissir; servir le boeuf en morceaux avec beaucoup de sauce."
          }
        ]
      },
      "feelCue": "La fourchette devrait couler dans le rôti presque sous son propre poids et tordre libre un morceau tendre et humide."
    },
    {
      "nodeId": "step_5",
      "action": "Réduire",
      "inputs": [
        "tender_pot_roast",
        "ing_16"
      ],
      "outputState": "pot_roast_dinner",
      "instructions": "Déplacez le boeuf et les légumes sur un plateau et tente avec du papier. Jeter les tiges de thym et les feuilles de laurier. Essuyez la graisse du liquide de graissage avec une louche, puis laissez-la mijoter sur la cuisinière 5-10 minutes jusqu'à ce qu'elle soit réduite à une légère sauce. Goûtez au sel. Couper ou tirer le bœuf en morceaux épais, verser sur la sauce et disperser avec du persil.",
      "visualCue": {
        "primaryTarget": "Une sauce brun foncé brillante qui enrobe légèrement la viande et les légumes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est mince et une couche de graisse flotte sur le dessus.",
            "action": "Skim plus de graisse et continuer à réduire."
          },
          {
            "state": "Perfect",
            "description": "Gravy est brillant et enrobe une cuillère, dégustation riche et bien assaisonnée.",
            "action": "Servez."
          },
          {
            "state": "Overdone",
            "description": "La graisse est épaisse et a un goût trop salé.",
            "action": "Arroser d'eau une cuillère à la fois."
          }
        ]
      },
      "feelCue": "La sauce doit se sentir légèrement collante entre les doigts de la gélatine dans le mandrin."
    }
  ]
};
