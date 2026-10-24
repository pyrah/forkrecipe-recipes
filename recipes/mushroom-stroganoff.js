export default {
  "repoId": "master_russian_mushroom_stroganoff_001",
  "parentRepoId": null,
  "slug": "mushroom-stroganoff",
  "author": "ForkRecipe Kitchen",
  "title": "Les champignons Stroganoff",
  "description": "Un riff végétarien sur le classique russe — champignons sauvages sautés dur dans le beurre jusqu'à ce que leurs bords char et leur liquide ont entièrement cuit, puis réunis avec des échalotes, thym et cognac, fini avec de la crème aigre dans une sauce riche, brun pâle qui s'accroche à chaque brin de nouilles d'œuf.",
  "cuisine": "Russe",
  "culture": "Russe",
  "category": "vegetables",
  "tags": [
    "Russe",
    "champignon",
    "végétarien",
    "pâtes"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Champignons mélangés (crémini, shiitake, porcini), tranchés épaisement",
      "ratioValue": 700,
      "defaultUnit": "g",
      "substitutions": [
        "tous crémini",
        "Champignons d'huître",
        "porcin séché réhydraté pour un umami plus profond"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Échalotes, tranchées finement",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "1 oignon brun moyen"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "huile d'olive et une touche de beurre pour la saveur"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Solvent",
      "name": "Brandy ou Cognac",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "sherry sec",
        "stock supplémentaire"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Stocks de légumes",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": [
        "champignon liquide de trempe plus eau",
        "stock de viande bovine pour la version non végétarienne"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Crème aigre pleine graisse",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "crème fraîche (richissante)",
        "yogourt grec plein gras (léger)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Umami",
      "name": "Moutarde de Dijon",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "moutarde à grains entiers"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 4,
      "defaultUnit": "sprigs",
      "substitutions": [
        "Thym séché (utiliser la moitié de la quantité)"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Persil à feuilles plates, approximativement haché",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Starch",
      "name": "Nouilles ou tagliatelles d'oeufs, cuites pour servir",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "riz blanc",
        "purée de pommes de terre"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel de mer fin et poivre noir",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Champignons de mer",
      "inputs": [
        "ing_01",
        "ing_04",
        "ing_12"
      ],
      "outputState": "seared_mushrooms",
      "instructions": "C'est l'étape la plus importante et la plus souvent bâclée. Chauffer une poêle large et lourde, idéale en fonte, à feu vif jusqu'à ce qu'elle fume. Ajouter la moitié du beurre. Lorsque la mousse s'abaisse et que le beurre commence à brunir, ajouter les champignons en une seule couche. Ne remuez pas. Ne pas ajouter tous les champignons à la fois s'ils foulent la poêle — faites - les en deux ou trois lots. Qu'ils s'asseyent et souillent, sans gêne, pendant 2-3 minutes jusqu'à ce qu'une croûte brune profonde se forme sur le dessous, puis les tournent. Initialement, les champignons libèrent une grande quantité de liquide; c'est normal. Restez à feu vif et laissez ce liquide s'évaporer complètement. Le bruit dans la poêle passe d'un sifflement de vapeur à un étourdissement lorsque l'humidité est partie — c'est votre signal. Les champignons doivent être profondément dorés, environ 70% en volume, leurs bords légèrement croustillants. Assaisonner de sel et de poivre et transférer dans une assiette.",
      "visualCue": {
        "primaryTarget": "Les champignons foncés, bronzés, presque charnus dans leur profondeur de couleur, ont diminué jusqu'à environ la moitié de leur volume d'origine, avec des bords caramélisés et une surface scintillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les champignons sont pâles, à la vapeur et aqueux, assis dans une piscine de leur propre liquide, doux et glissant plutôt que brunis.",
            "action": "Vous en avez ajouté trop à la poêle à la fois, ou la chaleur était trop faible. Égoutter du liquide, élever le feu à haute température et cuire jusqu'à ce que le liquide s'évapore et commence à brunir."
          },
          {
            "state": "Perfect",
            "description": "Profond, même brun de tous les côtés, les champignons se sont rétrécis et denses, sentant intensément l'umami brun, terreux. La poêle a un fond brun sur la base.",
            "action": "Transférer dans une assiette et procéder avec les échalotes dans la même casserole — ne pas essuyer le fond, il est saveur."
          },
          {
            "state": "Overdone",
            "description": "Les champignons sont passés du brun au noir sur les bords, certains morceaux sont acrides et secs poudreux plutôt que tendres.",
            "action": "Réduire la chaleur pour les lots suivants. Retirer les morceaux entièrement noirs avant de terminer la sauce."
          }
        ]
      },
      "feelCue": "Un champignon bien cousu se sent ferme et presque charnu lorsqu'il est pressé avec une spatule, non spongieuse ou arrosée. Le bord devrait avoir un léger éclat de croûte caramélisée, et toute la poêle devrait sentir comme le plancher de forêt rôti sur le feu."
    },
    {
      "nodeId": "step_2",
      "action": "Construire la base de sauce",
      "inputs": [
        "seared_mushrooms",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_09"
      ],
      "outputState": "sauce_base",
      "instructions": "Réduire le feu à moyen. Ajouter le reste du beurre dans la même casserole — le fond brun sur la base commencera immédiatement à se libérer dans le beurre, l'assombrissant magnifiquement. Ajouter les échalotes et le thym et cuire, en remuant régulièrement, pendant 5-6 minutes jusqu'à ce que les échalotes soient tendres et dorées. Ajouter l'ail et cuire encore 1 minute. Verser le cognac — reculez car il peut brûler brièvement si la poêle est assez chaude. Gratter vigoureusement la base de la poêle, car le cognac réduit à presque rien en environ 1 minute. Verser le stock et retourner les champignons dans la poêle. Laisser mijoter pendant 5 minutes jusqu'à ce que le stock ait diminué d'environ la moitié et que le liquide soit légèrement épaissé et brillant.",
      "visualCue": {
        "primaryTarget": "Liquide brun moyen et brillant dans la poêle, les échalotes y ont fondu, les champignons sont assis dans une sauce bouillonnante de couleur acajou pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock est encore mince, aqueux et pâle, les échalotes ont encore de la texture, et la sauce court librement autour de la casserole.",
            "action": "Laisser mijoter plus longtemps pour réduire. Une sauce fine ne tiendra pas la crème aigre et rendra les nouilles aqueuses."
          },
          {
            "state": "Perfect",
            "description": "Réduction de moitié, la sauce est lustrée et légèrement sirupeuse, le fond incorporé, le thym parfumé et les champignons se réchauffent.",
            "action": "Passez immédiatement à la crème sure."
          },
          {
            "state": "Overdone",
            "description": "Le stock a surréduit à un liquide collant, presque sirupeux qui est trop concentré et salé.",
            "action": "Ajouter un éclaboussure plus de stock pour se détendre, puis procéder avec prudence — la crème aigre ajoutera plus de corps."
          }
        ]
      },
      "feelCue": "Inclinez la poêle — la sauce doit couler et mettre en piscine dans le coin dans un ruban épais et lent, pas un jet d'eau. L'odeur doit être profonde et savoureuse : la chaleur du brandy, le beurre-fond, le thym."
    },
    {
      "nodeId": "step_3",
      "action": "Finir avec de la crème aigre",
      "inputs": [
        "sauce_base",
        "ing_07",
        "ing_08",
        "ing_12"
      ],
      "outputState": "stroganoff_sauce",
      "instructions": "Réduisez la chaleur au réglage le plus bas absolu — la crème aigre ne doit jamais bouillir ou elle se divisera en morceaux granuleux et cassés. Ajouter la moutarde de Dijon dans la poêle et remuer. Spoon dans la crème aigre et plier doucement dans la sauce en petits coups. Laissez-la chauffer pendant 1 à 2 minutes, à peine mijotant, la surface devrait trembler doucement mais ne jamais buller activement. La sauce passera de brun à une couleur chaude et pâle car la crème est incorporée. Goûtez et ajustez soigneusement le sel et le poivre — la réduction aura déjà concentré le sel. La sauce finie doit être crémeuse, acidulée de la crème sure, chaudement salée des champignons et brillante de la moutarde.",
      "visualCue": {
        "primaryTarget": "Une sauce douce, brun pâle, crémeuse, juste sous une mijotée douce — la couleur du café au lait — enrobant les champignons et laissant une trace visible et durable lorsque la cuillère est traînée à travers.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème aigre est brassée, mais encore étirée à froid et pas entièrement incorporée, la sauce rayée plutôt que uniforme, et le tang trop tranchant.",
            "action": "Incorporer doucement et maintenir le feu le plus bas jusqu'à ce que la crème soit complètement intégrée et que la température soit uniforme."
          },
          {
            "state": "Perfect",
            "description": "Une sauce lisse, uniforme, brun pâle avec un doux tang de la crème, la chaleur de la moutarde, et profonde, terreux champignons savoureux. Il enveloppe une cuillère et tombe dans un ruisseau lent.",
            "action": "Ajouter les nouilles immédiatement et servir."
          },
          {
            "state": "Overdone",
            "description": "La crème aigre a été chauffée trop agressivement — la sauce s'est divisée en un gâchis huileux et granuleux avec des taches blanches caillées et un liquide mince et gras.",
            "action": "La sauce est cassée. Hors de la chaleur, fouetter dans une cuillère à soupe de crème aigre froide vigoureusement pour essayer de le ramener. Ou servir sur les nouilles et l'appeler rustique — la saveur est toujours là."
          }
        ]
      },
      "feelCue": "Exécutez une cuillère sur la surface de la sauce finie — elle devrait laisser une rainure qui se ferme lentement et uniformément, la sauce ni trop épaisse pour remuer ni si mince qu'elle glisse. La tange de la crème sure doit être présente mais arrondie, non pointue."
    },
    {
      "nodeId": "step_4",
      "action": "Verser et servir",
      "inputs": [
        "stroganoff_sauce",
        "ing_11",
        "ing_10"
      ],
      "outputState": "finished_mushroom_stroganoff",
      "instructions": "Ajouter les nouilles d'oeufs cuites et égouttées directement dans la poêle avec la sauce et mélanger pour enrober chaque brin. Si la sauce est trop épaisse pour enrober les nouilles librement, ajoutez une éclaboussure d'eau de cuisson de pâtes à desserrer. Divisez en bols chauds et douchez généreusement avec du persil plat fraîchement haché. Servir avec rien de plus qu'un broyage de poivre noir et une simple salade verte. Les nouilles doivent être enrobées et non noyées; chaque brin doit porter un revêtement visible et crémeux.",
      "visualCue": {
        "primaryTarget": "Les nouilles d'œufs enroulées enrobées dans une sauce crémeuse, brun pâle, les champignons visibles dans l'ensemble, le persil vert vif contre les tons mutés — aromatique et vapeur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est trop épaisse pour enrober les nouilles et s'assied en croûtes plutôt que de les enrober uniformément.",
            "action": "Ajouter l'eau de pâtes à la fois, jeter vigoureusement. Il relâche la sauce et l'aide à s'accrocher aux nouilles."
          },
          {
            "state": "Perfect",
            "description": "Chaque brin de nouilles porte une couche crémeuse, les champignons distribués uniformément, le persil brillant. Le bol sent la crème chaude, la terre et les herbes.",
            "action": "Mangez immédiatement — Stroganoff n'attend personne."
          },
          {
            "state": "Overdone",
            "description": "Les nouilles ont été jetées à la chaleur et la sauce a encore diminué et est en train de sécher, d'empiler et de coller.",
            "action": "Ajouter un éclaboussure d'eau chaude ou de stock pour relancer, lancer rapidement et servir sans plus tarder."
          }
        ]
      },
      "feelCue": "Twirl un fourche et levez - les nouilles devraient traquer une couche soyeuse de sauce et résister légèrement avant de relâcher, comme des pâtes parfaitement habillées. Les champignons sur la fourchette doivent se sentir denses et satisfaisants, presque charnus, contre les nouilles douces."
    }
  ]
};
