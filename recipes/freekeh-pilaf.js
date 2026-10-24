export default {
  "repoId": "master_levantine_freekehpilaf_001",
  "parentRepoId": null,
  "slug": "freekeh-pilaf",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Freekeh Pilaf aux oignons caramélisés",
  "description": "Freekeh entier — blé récolté vert et rôti au-dessus des feux ouverts — mijoté dans un bouillon épicé jusqu'à ce qu'il livre sa fumée de feu de camp signature, enterré sous une couronne d'oignons caramélisés lents qui s'effondrent en brins d'or foncé et doux.",
  "cuisine": "Levantine",
  "culture": "Syrien",
  "category": "grains",
  "tags": [
    "végétalien",
    "Pilaf",
    "Freekeh",
    "lévantine",
    "blé fumé",
    "oignons",
    "Moyen-Orient"
  ],
  "difficulty": 2,
  "activeTime": "40 min",
  "totalTime": "1 hour 20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 0,
    "bitter": 2,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Fromage entier (blé rôti vert)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Fissuré freekeh (temps de cuisson de moitié)",
        "Farro"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Stocks de légumes ou de poulet",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "eau plus un cube de stock"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gros oignons jaunes, coupés en deux et tranchés finement",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive ou beurre clarifié",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Allspice (baharat), sol",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "épices mélangées",
        "Mélange libanais de 7 spices"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 0.02,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Pignons ou amandes grillés",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "Graines de citrouille grillées (sans noix)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel de mer fin et poivre noir",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Caraméliser",
      "inputs": [
        "ing_03",
        "ing_04"
      ],
      "outputState": "caramelized_onions",
      "instructions": "Chauffer la graisse dans une grande poêle à feu moyen-doux. Ajouter tous les oignons avec une pincée généreuse de sel. Mélanger pour enrober, puis laisser la plupart du temps intact, en remuant toutes les 3 à 4 minutes. Après 10 minutes, les oignons se seront flétris et translucides. Après 25 minutes, ils deviendront dorés. Après 40 minutes, ils seront profondément acajou-brun, réduit à environ un quart de leur volume original, et intensément doux. Cela ne peut être précipité — augmenter la chaleur seulement à la fin si nécessaire pour un approfondissement final.",
      "visualCue": {
        "primaryTarget": "Fils brun acajou foncé d'oignon effondré, brillant et parfumé. Le volume est étonnamment petit — un quart de l'endroit où vous avez commencé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont dorés et doux mais encore blonds. Ils goûtent doux mais doux, pas profondément complexe. Pas de bords sombres.",
            "action": "Continuez à cuisiner. La vraie caramélisation prend du temps — ce qui est trop long est généralement juste."
          },
          {
            "state": "Perfect",
            "description": "Les oignons sont un brun rougeâtre profond, presque jammy, s'arrachant dans des fils doux et soyeux. Une cuillerée goûte comme une douceur d'oignon concentrée avec un bord amer. La poêle sent le caramel et la terre.",
            "action": "Retirer la moitié de la garniture; utiliser le reste pour cuire le freekeh."
          },
          {
            "state": "Overdone",
            "description": "Les oignons sont noirs aux bords et ont un goût amer: les sucres se sont croisés en carbonisation.",
            "action": "Jeter les fils les plus noirs. Utilisez les oignons restants — ils ont encore une bonne saveur en dessous."
          }
        ]
      },
      "feelCue": "Passez une cuillère en bois dans les oignons. Ils doivent glisser et se rassembler comme des écharpes de soie, pas se casser ou résister. Ils devraient paraître incroyablement petits pour la quantité que vous avez commencé avec."
    },
    {
      "nodeId": "step_2",
      "action": "Faire griller",
      "inputs": [
        "caramelized_onions",
        "ing_01",
        "ing_05",
        "ing_06"
      ],
      "outputState": "toasted_freekeh",
      "instructions": "Ajouter le freekeh dans la poêle avec les oignons caramélisés (réserver la moitié des oignons pour garnir). Incorporer le freekeh dans les oignons à feu moyen-vif. Ajouter toutspice et cannelle. Toast, en remuant constamment, pendant 3-4 minutes jusqu'à ce que le freekeh soit chaud tout au long, sent la noix légèrement, et quelques grains commencent à éclater. Cette étape approfondit la fumée innée du grain.",
      "visualCue": {
        "primaryTarget": "Grains de Freekeh enduits d'un mince film d'huile scintillante, avec quelques grains montrant des taches sombres faibles de la chaleur directe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Freekeh se sent toujours frais dans la poêle et sent peu cru et herbacé.",
            "action": "Toast plus longtemps, en remuant constamment. Le grain doit absorber la graisse résiduelle et chauffer avant que le stock ne soit ajouté."
          },
          {
            "state": "Perfect",
            "description": "Les grains sont chauds. Une odeur chaude, fumée et fumée se lève: le caractère torréfié du freekeh s'est amplifié. Quelques grains aux bords de la poêle commencent à s'assombrir.",
            "action": "Verser le stock immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Beaucoup de grains ont carbonisé au noir et la poêle sent aiguisée.",
            "action": "Retirer immédiatement du feu, ajouter le stock pour arrêter le feu et procéder. Jetez les grains brûlés que vous pouvez repérer."
          }
        ]
      },
      "feelCue": "Le freekeh devrait se sentir chaud lorsque vous appuyez sur l'arrière d'une cuillère contre les grains et le tenir là pendant 3 secondes. Pas chaud, chaud. C'est quand il est prêt pour le liquide."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "toasted_freekeh",
        "ing_02",
        "ing_08"
      ],
      "outputState": "cooked_freekeh_pilaf",
      "instructions": "Versez le bouillon chaud sur le freekeh grillé. Ça va siffler. Assaisonner de sel et de poivre. Porter à ébullition modérément, remuer une fois, puis réduire au plus bas ébullition possible. Couvrir avec un couvercle serré et cuire de 35 à 40 minutes pour un freekeh entier (15 à 20 minutes pour une fissuration). Ne pas lever le couvercle pendant la cuisson. Après le temps de cuisson, retirer du feu et laisser la vapeur non perturbée, couvrir, pendant 10 minutes.",
      "visualCue": {
        "primaryTarget": "Les grains ont triplé en taille et sont passés de gris d'olive à un brun verdâtre chaud et terreux. La casserole n'a pas de bassin liquide au fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le freekeh a absorbé le liquide mais les grains sont encore mâchés avec un centre amidon, dur. Ils grincent quand ils sont mordus.",
            "action": "Ajouter 100 ml d'eau chaude, recouvrir et cuire encore 10 minutes."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain est tendre à travers le centre avec une agréable et ferme mâche — comme al dente farro, mais plus fumé. Pas de liquide. Le fond du pot a une peau mince et sèche qui soulève proprement.",
            "action": "Flûtez doucement avec une fourchette et une assiette avec garniture."
          },
          {
            "state": "Overdone",
            "description": "Le freekeh a absorbé tout le liquide et le fond brûle. Une odeur brûlée se lève sous le couvercle.",
            "action": "Retirer immédiatement du feu sans remuer. Poser une serviette à thé sous le couvercle pour absorber la vapeur et laisser refroidir. Servir du haut — la croûte inférieure, sinon amère, peut être grattée séparément en bonus."
          }
        ]
      },
      "feelCue": "Après la période de repos, lever un coin du couvercle et renifler. Vous devriez sentir la fumée de bois et l'oignon doux, pas l'amidon brûlé. La vapeur devrait décoller dans un voile doux, pas une rafale."
    },
    {
      "nodeId": "step_4",
      "action": "Assembler",
      "inputs": [
        "cooked_freekeh_pilaf",
        "caramelized_onions",
        "ing_07"
      ],
      "outputState": "finished_freekeh_pilaf",
      "instructions": "Déposer le freekeh sur un grand plateau chaud. Dispersez les oignons caramélisés sur le dessus. Faire griller les pignons dans une poêle sèche à feu moyen jusqu'à ce qu'ils soient dorés, puis les disperser sur les oignons. Servir immédiatement aux côtés de la labneh, d'une salade de concombre-tomate ou de légumes rôtis. Le freekeh tient bien sa chaleur et est également bon à la température ambiante.",
      "visualCue": {
        "primaryTarget": "Un monticule chaud et terreux de freekeh brun verdâtre couronné de brins d'oignon caramélisé foncé et de pignons dorés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le plat a l'air pâle et les pignons sont intouchés et blanc ivoire.",
            "action": "Verser les noix — même 90 secondes dans une poêle sèche les transforme de farineux à riches et dorés."
          },
          {
            "state": "Perfect",
            "description": "Un beau contraste de couleurs : grain vert olive, oignons acajou, noix d'ambre. Tout le plat sent le feu du camp et la douceur caramélisée. Il est sous-estimé et convaincant.",
            "action": "Servir avec du pain plat chaud et du yaourt."
          },
          {
            "state": "Overdone",
            "description": "Les pignons sont bruns et amers. Les oignons sont séchés dans le four chaud ou réchauffés.",
            "action": "Scatter une poignée de persil frais pour relancer le visuel. Remplacer par de nouvelles noix grillées si possible."
          }
        ]
      },
      "feelCue": "Un freekeh fourkful parfaitement cuit devrait offrir une résistance satisfaisante — une mâche douce et fumée qui n'est rien comme le riz et tout comme la nourriture."
    }
  ]
};
