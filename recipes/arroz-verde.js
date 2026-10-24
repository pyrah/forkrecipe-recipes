export default {
  "repoId": "master_mexican_arroz_verde_001",
  "parentRepoId": null,
  "slug": "arroz-verde",
  "author": "ForkRecipe Kitchen",
  "title": "Arroz Verde",
  "description": "Riz vert mexicain – riz à grains longs grillé à l'huile jusqu'à ce que chaque grain devienne translucide et noisette, puis cuit dans une purée mélangée de poivre poblano, jalapeño, coriandre, ail et oignon jusqu'à ce que chaque grain soit teinté d'un vert vif et verdant et parfumé avec du chile rôti.",
  "cuisine": "Mexicain",
  "culture": "Mexicain central",
  "category": "grains",
  "tags": [
    "végétalien",
    "Sans gluten",
    "Mexique",
    "riz",
    "poblano",
    "coriandre"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Riz blanc à grains longs",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "riz basmati (résultat légèrement plus parfumé)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Poivrons (approximativement hachés)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "2 poivrons Anaheim",
        "1 poivron vert + pincée extra cayenne"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Heat",
      "name": "Jalapeño (approximativement haché, graines en option)",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "Le chile de serrano (haut)",
        "omit pour version légère"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Coriandre fraîche (feuilles et tiges)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon blanc (approximativement haché)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Stocks de poulet ou de légumes",
      "ratioValue": 500,
      "defaultUnit": "ml",
      "substitutions": [
        "eau (moins de saveur)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile neutre (fleur de soleil ou légumes)",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 7,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "green_puree",
      "instructions": "Mélanger le poblano, le jalapeño, la coriandre, l'oignon et l'ail dans un mélangeur. Ajouter 250 ml du stock. Blitz sur haut pendant 60-90 secondes jusqu'à ce que complètement lisse sans pièces visibles. La purée sera d'abord un vert vif, presque vert néon, elle s'assombrira pendant qu'elle cuisine. Assaisonner légèrement la purée de sel avant de l'ajouter au riz. Mesurez-le — vous avez besoin d'environ 500 ml de purée totale; si vous en avez plus, réservez-le. Si moins, ajoutez un peu plus de stock.",
      "visualCue": {
        "primaryTarget": "Une purée liquide lisse et vert vif sans morceaux. La couleur est électrique — quelque part entre vert herbe et jade.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux visibles de poivre et d'oignon flottant dans la purée. Le mélangeur n'est pas assez long.",
            "action": "Mélanger encore 30-45 secondes. Tous les morceaux non mélangés cuireont inégalement dans le riz."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, versable, un vert brillant. Sensation intense de coriandre fraîche et de chile cru.",
            "action": "Allez-y pour griller le riz."
          },
          {
            "state": "Overdone",
            "description": "Le mélangeur a réchauffé le mélange de façon notable à partir d'un mélange prolongé.",
            "action": "C'est bien — continuez. La chaleur n'affecte pas le résultat."
          }
        ]
      },
      "feelCue": "Enroulée entre le bout des doigts, la purée doit se sentir soyeuse et uniforme, sans texture aigüe."
    },
    {
      "nodeId": "step_2",
      "action": "Toast",
      "inputs": [
        "ing_01",
        "ing_08"
      ],
      "outputState": "toasted_rice",
      "instructions": "Rincez le riz sous l'eau froide jusqu'à ce que l'eau soit claire, puis étendez-le sur une serviette de cuisine propre et tapez le plus sec possible — le riz humide éclaboussera violemment dans l'huile chaude et la vapeur au lieu de griller. Chauffer l'huile dans un grand pot à fond lourd avec un couvercle serré à feu moyen-élevé jusqu'à ce que l'huile mijote. Ajouter le riz sec et le répartir dans une couche uniforme. Cuire, en remuant constamment, pendant 4-5 minutes jusqu'à ce que les grains tournent du blanc à une couleur pâle, même dorée et sentent la noix et grillé.",
      "visualCue": {
        "primaryTarget": "Les grains sont d'une couleur dorée pâle et uniforme, pas blanche, pas brune, mais la blonde spécifique du pain grillé. Chaque grain semble opaque et légèrement brillant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore majoritairement blancs et translucides sans arôme de noix. Seuls les bords commencent à colorier.",
            "action": "Continuer à remuer à feu moyen-vif — le riz sous-testé goûtera mal et peut ne pas absorber la purée uniformément."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain est uniformément d'or pâle. La cuisine sent le pop-corn et le grain chaud. Le riz sonne sec et clique alors qu'il se déplace dans la casserole.",
            "action": "Ajouter immédiatement la purée verte."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont brun doré profond, certains s'approchant brûlés. Une odeur vive, presque amère, grillée.",
            "action": "Réduire la chaleur et ajouter la purée immédiatement pour arrêter la cuisson. La couleur supplémentaire ajoute de l'amertume — réduire légèrement le temps de cuisson."
          }
        ]
      },
      "feelCue": "À l'étape du toast, les grains de riz qui glissent contre la casserole font un bruit sec et sablonneux — un chuchotement continu qui vous dit que l'humidité est partie et que l'amidon est prêt."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "toasted_rice",
        "green_puree"
      ],
      "outputState": "color_absorbed_rice",
      "instructions": "Verser toute la purée verte sur le riz grillé tout d'un coup — elle sifflera et éclaboussera alors qu'elle touche l'huile chaude et le riz, alors reculez. Incorporer immédiatement pour empêcher tout riz de coller. Cuire à feu moyen-vif, en remuant fréquemment, pendant 3-4 minutes lorsque la purée sèche et que le riz absorbe la couleur verte. Vous faites essentiellement frire la purée dans le riz — quand elle n'a plus l'air humide et que le riz a absorbé la couleur vert vif, il est prêt pour le stock restant.",
      "visualCue": {
        "primaryTarget": "Le riz a absorbé la purée verte et semble uniformément teinté d'un vert mat profond. La base semble généralement sèche avec seulement un léger éclat d'huile restant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La purée est encore visiblement mouillée et pooling autour du riz. Le mélange sent les herbes crues et fraîches.",
            "action": "Continuer à remuer à feu moyen-vif — la purée doit sécher et absorber avant l'ajout du stock, ou le riz sera arrosé."
          },
          {
            "state": "Perfect",
            "description": "Le riz est teinté d'un vert profond et semble généralement sec. Pas de réservoir de liquide. L'odeur est passée d'un piment cru à un piment cuit — plus foncé, plus doux, plus complexe.",
            "action": "Ajouter le reste du stock et le sel immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La purée s'est complètement séchée et le riz commence à coller et à brûler au fond.",
            "action": "Ajouter immédiatement le bouillon et déglacer le fond en grattant avec une cuillère."
          }
        ]
      },
      "feelCue": "Lorsque la purée est correctement absorbée, le riz sonne différemment lorsqu'il est agité, de l'eau humide et lourde à un son plus léger et légèrement crépitant, comme si l'eau était partie et que seule l'essence verte restait."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "color_absorbed_rice",
        "ing_07",
        "ing_09"
      ],
      "outputState": "cooked_arroz_verde",
      "instructions": "Verser le reste du stock (250 ml) sur le riz, ajouter le sel et remuer une fois pour distribuer. Porter à ébullition à feu vif. Une fois bouillant, réduire à la chaleur absolue la plus basse, couvrir soigneusement et cuire pendant 15 minutes sans soulever le couvercle. Le riz a besoin de vapeur dans cette étape finale — chaque fois que le couvercle est levé, vous perdez de la vapeur et le riz cuirea inégalement. Réglez une minuterie et n'ouvrez pas le pot.",
      "visualCue": {
        "primaryTarget": "Avant que le couvercle continue : une masse de riz vert vif en quantité suffisante pour couvrir. Après 15 minutes: cratères de trou de vapeur sur la surface, aucun liquide visible debout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 15 minutes, le liquide est encore visible à la surface et les trous de vapeur ne se sont pas formés.",
            "action": "Remplacez le couvercle et faites cuire 3-5 minutes de plus sur le feu le plus bas."
          },
          {
            "state": "Perfect",
            "description": "Des trous de vapeur à travers la surface. Pas de liquide debout. Un arôme propre et doux-chile s'élève du pot lorsque le couvercle est levé.",
            "action": "Retirer du feu, garder le couvercle allumé et reposer 5 minutes."
          },
          {
            "state": "Overdone",
            "description": "Le riz a séché et le fond sent la brûlure avant l'heure.",
            "action": "Retirer immédiatement du feu et ne pas racler le fond en flippant. La croûte au fond est acceptable."
          }
        ]
      },
      "feelCue": "Le couvercle de la casserole après 10 minutes doit se sentir chaud au toucher et la condensation doit être visiblement perlée sur le dessous — signes que la vapeur circule et le riz cuit correctement."
    },
    {
      "nodeId": "step_5",
      "action": "Finition",
      "inputs": [
        "cooked_arroz_verde"
      ],
      "outputState": "finished_arroz_verde",
      "instructions": "Retirer du feu et laisser reposer le riz, couvert, pendant 5 minutes pour permettre à la vapeur de se redistribuer uniformément à travers les grains. Découvrez-la doucement avec une fourchette, en levant et en séparant le mouvement du fond du pot. Goûtez et ajustez le sel. Le riz devrait être profond, même vert, dans chaque grain, et pas seulement à la surface. Servir comme un plat latéral à côté du poulet, du poisson ou des haricots, ou comme une base pour un bol à grains.",
      "visualCue": {
        "primaryTarget": "Chaque grain est vert profond à travers et à travers, distinct et moelleux, non empilé. La couleur est un vert riche et chaud plutôt que le néon vif de la purée brute.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Certains grains au centre sont encore fermes et vert pâle, indiquant une cuisson insuffisante ou pas assez de vapeur.",
            "action": "Retourner au feu le plus bas, ajouter 2 cuillerées à soupe d'eau, couvrir et cuire encore 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "Grains tendres, moelleux, profondément verts qui sentent le chile rôti et la coriandre. Chaque grain est séparé. Le fond a une croûte mince, légèrement grillée qui libère proprement.",
            "action": "Servir immédiatement pour la meilleure texture, ou garder couvert d'un chiffon jusqu'à 20 minutes."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont mous et commencent à s'écraser. La couleur verte est légèrement terne à l'ombre d'olive.",
            "action": "Servir immédiatement — il ne s'améliorera pas avec plus de repos. C'est toujours délicieux."
          }
        ]
      },
      "feelCue": "Un grain d'arroz verde pincée entre les doigts devrait être uniformément vert tout au long de la traversée — si le centre est encore blanc, le riz a absorbé la couleur à l'extérieur mais la purée n'a pas pénétré pleinement pendant l'étape de friture."
    }
  ]
};
