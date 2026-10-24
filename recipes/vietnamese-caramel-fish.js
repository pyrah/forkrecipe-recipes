export default {
  "repoId": "master_vietnamese_vietnamesecaermalfish_001",
  "parentRepoId": null,
  "slug": "vietnamese-caramel-fish",
  "author": "ForkRecipe Kitchen",
  "title": "Poissons caramel vietnamiens (Cá Kho T.)",
  "description": "Poisson-chat braisé dans un caramel vietnamien de sucre brûlé et sauce de poisson dans un pot d'argile jusqu'à ce que la sauce réduit à un glaçage collant et laqué et le poisson tombe dans des flocons sucrés et profondément salés.",
  "cuisine": "Vietnamiens",
  "culture": "Sud du Vietnam",
  "category": "seafood",
  "tags": [
    "Produits de la mer",
    "Sans gluten",
    "vietnamese",
    "Caramel",
    "Poisson-chat",
    "braise",
    "pot d'argile"
  ],
  "difficulty": 2,
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
    "sweet": 4,
    "salty": 4,
    "sour": 0,
    "bitter": 2,
    "umami": 5,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Steaks de poisson-chat (cá tra), épaisseur 3cm",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "Le pangase",
        "steaks de poissons blancs fermes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre granulé (pour caramel)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "Sauce de poisson",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Jeune eau de coco (ou eau)",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": [
        "eau pure"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Échalotes, tranchées finement",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gingembre frais, pièces minces",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Heat",
      "name": "Chili rouge frais, tranché",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "flocons de chili"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Poivre noir, grossièrement moulu",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Oignon vert, tranché",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Caramélisation",
      "inputs": [
        "ing_02"
      ],
      "outputState": "dark_caramel",
      "instructions": "Dans un pot d'argile ou une petite casserole lourde à feu moyen, ajouter le sucre dans une couche uniforme sans remuer. Veillez à ce que le sucre aux bords commence à fondre et à devenir ambre (environ 3 minutes). Ce n'est qu'à ce moment - là que la poêle s'incline en douceur pour favoriser la fusion — ne remuez pas avec une cuillère ou elle se cristallisera. Cuire jusqu'à ce que le caramel soit un brun acajou profond (pas noir) et des odeurs de caramel amer. C'est la saveur qui définit le kho t. Un caramel sombre et légèrement amer qui équilibre la sauce de poisson salée.",
      "visualCue": {
        "primaryTarget": "Caramel liquide acajou-brun profond, fumant très légèrement, avec un parfum de caramel doux et amer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Caramel est doré et goûte seulement sucré, sans profondeur ni amertume.",
            "action": "Continuer la cuisson — la couleur doit atteindre un brun-ambre profond avant d'ajouter la sauce de poisson."
          },
          {
            "state": "Perfect",
            "description": "Deep acajou brun, presque rousseur. Sens de caramel foncé avec un bord amer. À peine fumer.",
            "action": "Ajoutez immédiatement la sauce de poisson — elle éclaboussera violemment; reculez."
          },
          {
            "state": "Overdone",
            "description": "Le caramel est noir et fume fortement, sentant le carbone pur et les cendres.",
            "action": "Jeter et recommencer: un caramel brûlé est impitoyable et rendra le plat tout entier amer."
          }
        ]
      },
      "feelCue": "Tenez-vous près du pot et veillez sur les premières bouffées de fumée aux bords — au moment où vous les voyez et sentez une note sucrée amère profonde, vous avez 5-10 secondes avant qu'il ne brûle."
    },
    {
      "nodeId": "step_2",
      "action": "Brise",
      "inputs": [
        "dark_caramel",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_01"
      ],
      "outputState": "braised_fish",
      "instructions": "Verser la sauce de poisson dans le caramel chaud (avertissement de dispersion!). Ajouter l'eau de coco et remuer — le mélange va buller intensément et le caramel va saisir avant de se dissoudre. Ajouter les échalotes, l'ail, le gingembre, le chili et le poivre noir. Placez les steaks de poisson-chat dans la casserole en une seule couche, en cuillerant la sauce caramel. Couvrir et brasser à feu moyen-doux pendant 15 minutes, tourner le poisson une fois à la marque de 8 minutes.",
      "visualCue": {
        "primaryTarget": "Le poisson a absorbé la couleur caramel et transformé une ambrée-mahoganie profonde, le liquide de braisage a réduit à une sauce de revêtement épaisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poisson est encore pâle; la sauce est fine et aqueuse. Le caramel n'a pas pénétré le poisson.",
            "action": "Augmenter le feu à moyen et continuer à braiser à découvert pendant 5 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "Les steaks de poisson sont brun-ambre profond, scintillant avec la sauce réduite. Le pot sent le caramel foncé et la sauce de poisson – intensément salé et sucré.",
            "action": "Découvrez et réduisez la sauce restante."
          },
          {
            "state": "Overdone",
            "description": "Le poisson a commencé à se briser dans le pot; la chair tombe de l'os avant de servir.",
            "action": "Réduire la sauce avec le poisson hors de la chaleur, puis placer délicatement les morceaux de poisson dans des bols individuels et la sauce à cuillère."
          }
        ]
      },
      "feelCue": "A mi-chemin de la cuisson, enfoncez doucement le pot d'argile — la sauce doit se déplacer dans des vagues lentes et lourdes, épaississant visiblement à chaque minute de passage lorsque le poisson libère son collagène."
    },
    {
      "nodeId": "step_3",
      "action": "Réduire",
      "inputs": [
        "braised_fish",
        "ing_10"
      ],
      "outputState": "finished_caramel_fish",
      "instructions": "Couvrez le pot et augmentez le feu à moyen-élevé. Laisser mijoter la sauce, en abaissant le poisson en continu avec une cuillère, pendant 5 à 8 minutes jusqu'à ce que la sauce ait réduit à une glaçure épaisse, foncée et sirupeuse qui enveloppe chaque surface du poisson. Le pot commencera à étourdir plus intensément lorsque l'eau s'évaporera. Retirer du feu. Éparpiller l'oignon vert sur le dessus. Servir directement de la casserole d'argile avec du riz au jasmin à la vapeur.",
      "visualCue": {
        "primaryTarget": "Le poisson scintille dans une glaçure acajou épaisse et foncée; le fond de la casserole montre un anneau sec caramélisé plutôt qu'un liquide commun.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore fine et aqueuse; le poisson n'a pas été laqué. Test de la cuillère : la sauce s'écoule immédiatement.",
            "action": "Continuer à réduire à feu moyen-vif, en basting constamment."
          },
          {
            "state": "Perfect",
            "description": "La sauce est épaisse et brillante, enrobant le poisson dans une laque foncée et collante. Spoon traîné à travers le pot laisse une trace. Des odeurs de caramel foncé, de sauce de poisson et de gingembre.",
            "action": "Servir immédiatement dans le pot d'argile."
          },
          {
            "state": "Overdone",
            "description": "La sauce a complètement séché et a commencé à brûler; forte odeur de sucre brûlé.",
            "action": "Ajouter 2 c. à soupe d'eau chaude et faire un tourbillon pour déglacer; servir immédiatement."
          }
        ]
      },
      "feelCue": "La glaçure finie doit s'accrocher à l'arrière d'une cuillère comme un mince caramel — tiré par gravité mais tenant un bord propre, ne pas courir librement ou se mettre dans une coquille dure."
    }
  ]
};
