export default {
  "repoId": "master_chinese_yangzhou_fried_rice_001",
  "parentRepoId": null,
  "slug": "yangzhou-fried-rice",
  "author": "ForkRecipe Kitchen",
  "title": "Riz frit de Yangzhou",
  "description": "Le riz frit chinois le plus célèbre — le jasmin d'un jour cuit sur un wok blister jusqu'à ce que chaque grain soit séparé et embrassé avec wok hei, lié à l'oeuf en deux étapes, parsemé de crevettes douces, smoky char siu, pois et pétoncle. Prestige dans un bol.",
  "cuisine": "Chinois",
  "culture": "Jiangsu",
  "category": "grains",
  "tags": [
    "Chinois",
    "riz",
    "sauté",
    "wok",
    "Sans gluten adapté",
    "sans produits laitiers"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "20 min",
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
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Riz jasmin cuit, froid",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "Riz parfumé thaïlandais",
        "riz blanc à grains longs — doit être froid et sec"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Oeufs",
      "ratioValue": 3,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Crevettes moyennes, pelées et dépeintes",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "viande de crabe cuite",
        "homard"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Protein",
      "name": "Charbon ou jambon glacé au miel, coupé en dés",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "jambon fumé",
        "Saucisse chinoise"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Pois congelés, dégelés",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "Maïs décortiqué",
        "Édamame"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Échalons, tranchés finement",
      "ratioValue": 4,
      "defaultUnit": "stalks",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "sauce de soja légère",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari pour sans gluten"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Umami",
      "name": "sauce à l'huître",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce végétarienne aux huîtres",
        "sauce hoisine"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Huile de sésame grillée",
      "ratioValue": 5,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Poivre blanc moulu",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "poivre noir"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Huile neutre (légume ou arachide)",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": [
        "saindoux pour une saveur wok plus traditionnelle"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation et mise en place",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "prepped_components",
      "instructions": "Ce plat cuit en moins de 5 minutes une fois le wok chaud — tout doit être prêt avant de toucher la chaleur. Séparez le riz froid de vos mains, frottez les amas entre vos paumes jusqu'à ce que chaque grain soit séparé et sec — des vapeurs de riz empilées au lieu de la friture. Battre légèrement les œufs avec une fourchette et une pincée de sel. Faites sécher les crevettes avec des serviettes en papier. Couper le siu char ou le jambon en cubes de 1 cm. Faire mesurer et combiner les sauces dans un petit bol. Couper les pétoncles avec des parties blanches et vertes séparées. Lignez tous les composants à côté du wok dans l'ordre où ils seront ajoutés.",
      "visualCue": {
        "primaryTarget": "Froide, sèche, grains individuels qui s'effondrent lorsqu'ils sont pressés. Pas d'embrouille humide. Tous les composants ont été séparés et à portée de bras du wok.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz est dans de grandes taillis et est humide. Il va chauffer plutôt que de faire frire, faisant tourner le riz frit collé.",
            "action": "Étaler sur un plateau et réfrigérer à découvert pendant 30 minutes pour sécher, puis casser à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain est individuel et froid au toucher. Quand vous lancez une poignée, ils s'éparpillent et tombent comme des cailloux, pas des boum.",
            "action": "Chauffer le wok pour fumer et commencer immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le riz était solide congelé et a maintenant des cristaux de glace qui vont libérer de l'eau dans le wok.",
            "action": "Laisser dégeler à température ambiante pendant 10 minutes, puis rompre — il devrait être très froid mais pas congelé."
          }
        ]
      },
      "feelCue": "Le riz frit sec et froid devrait se sentir presque sablonneux entre les doigts, les grains individuels légèrement durcis à l'extérieur de la réfrigération de nuit. Cette dureté est ce qui permet à chaque grain de frire sans se coller ensemble."
    },
    {
      "nodeId": "step_2",
      "action": "Saisir",
      "inputs": [
        "prepped_components",
        "ing_11",
        "ing_03"
      ],
      "outputState": "seared_shrimp_and_ham",
      "instructions": "Chauffer un wok ou une très grande poêle lourde sur la plus haute chaleur possible pendant 2 minutes complètes — il devrait être de fumer avant toute entrée d'huile. Ajouter 2 cuillères à soupe d'huile et ajouter immédiatement les crevettes en une seule couche. Semer sans remuer pendant 45 secondes jusqu'à ce que rose et frisé, puis lancer et cuire 30 secondes de plus. Retirer immédiatement du wok. Ajouter le diced char siu pendant 30 secondes juste à chaud et légèrement caraméliser les bords. Retirer et réserver avec les crevettes.",
      "visualCue": {
        "primaryTarget": "Les crevettes sont uniformément roses et enroulées en C, avec de légères marques d'omble à la surface. Les pièces en siu de Char ont des bords caramélisés et vitrés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crevettes sont toujours translucides au centre et la viande est douce et gelée.",
            "action": "Retourner au wok pendant 30 secondes de plus — ils devraient simplement être cuits, pas caoutchouteux."
          },
          {
            "state": "Perfect",
            "description": "Les crevettes sont roses à travers et à travers, avec un rebond léger lorsqu'elles sont pressées. Pas caoutchouteux — juste cuit, sucré et juteux.",
            "action": "Retirer immédiatement et réserver — ils continueront la cuisson de la chaleur résiduelle si laissé dans le wok."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes se sont enroulées dans des formes O serrées et se sentent fermes et caoutchouteuses.",
            "action": "Ils sont trop cuits mais vont se fondre dans le riz. Ajoutez-les à la fin de la cuisson pour un minimum de chaleur supplémentaire."
          }
        ]
      },
      "feelCue": "Un wok bien chaud fait siffler les crevettes et cracher immédiatement au contact — si vous entendez un étourdissement doux et humide plutôt qu'un craquement aigu, le wok n'est pas assez chaud. Enlevez ce qui est dedans et réchauffez."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "seared_shrimp_and_ham",
        "ing_11",
        "ing_02",
        "ing_01"
      ],
      "outputState": "fried_rice_base",
      "instructions": "Avec le wok encore chaud, ajouter le reste de l'huile et tourbillonner pour enrober. Versez les œufs battus au centre du wok — ils seront placés presque instantanément. Les frotter très brièvement, jusqu'à ce qu'ils soient fixés à 70% mais encore mouillés et brillants. Ajouter immédiatement le riz froid sur le dessus de l'œuf humide, le presser dans l'œuf. Jetez vigoureusement — toutes les 30 secondes s'arrêtent pour laisser le riz s'asseoir contre le wok chaud, puis jetez à nouveau. Cette alternance entre le contact et le lancer est ce qui crée wok hei, la fumée 'breath du wok'. Cuire 3 à 4 minutes au total.",
      "visualCue": {
        "primaryTarget": "Les grains de riz sont séparés individuellement et certains montrent des taches de golden-tan du contact wok. L'œuf a été enduit et collé aux grains individuels plutôt que de former des morceaux d'oeuf visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz est encore en croûte et semble cuit à la vapeur plutôt que frit. L'œuf est en morceaux pâles visibles, non intégrés.",
            "action": "Continuez à jeter et à presser à feu vif — les touffes doivent se briser contre la surface du wok chaud."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain est séparé, doré et légèrement enrobé d'œuf. Le riz sent la fumée et l'amidon grillé. Certains grains ont des taches d'omble pâle.",
            "action": "Ajouter les sauces, les pois, les parties blanches du pétoncle, les protéines séchées."
          },
          {
            "state": "Overdone",
            "description": "Le riz a complètement séché et de nombreux grains sont brun foncé ou noir du contact prolongé avec le wok.",
            "action": "Ajoutez une éclaboussure d'eau et jetez immédiatement pour se détendre — la vapeur reconstituera une certaine humidité."
          }
        ]
      },
      "feelCue": "Tenez votre main 10 cm au - dessus du wok — vous devriez sentir une chaleur intense et sèche rayonner vers le haut. Cette chaleur rend le wok hei possible. Un foyer est désavantagé; la réponse est la patience et un bon temps de contact."
    },
    {
      "nodeId": "step_4",
      "action": "Saison et fin",
      "inputs": [
        "fried_rice_base",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_05",
        "ing_06",
        "ing_12"
      ],
      "outputState": "finished_yangzhou_fried_rice",
      "instructions": "Verser immédiatement et vigoureusement la sauce de soja et la sauce d'huître sur le riz — les sauces s'évaporent rapidement à feu vif et doivent parfumer plutôt que mouiller le riz. Ajouter les pois et les parties de pétoncle blanc, lancer 30 secondes. Retournez la crevette et l'écu d'omble et jetez juste pour incorporer et réchauffer à travers. Terminer avec du poivre blanc et une bruine d'huile de sésame hors du feu — l'huile de sésame ajoutée à un wok chaud devient amère. Dispersez le dessus de l'échon vert sur le dessus. Servir immédiatement — le riz frit n'attend personne.",
      "visualCue": {
        "primaryTarget": "Un riz glacé et acajou avec des pois visibles, des crevettes roses et du siu d'omble distribué à travers lui. Les grains brillent du soja et du sésame mais ne sont pas humides.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz a un goût plat et fade. La sauce soja et huître est mise en commun au fond du wok plutôt que d'enrober les grains.",
            "action": "Verser plus agressivement — les sauces doivent frapper la surface du wok pour s'évaporer et enrober correctement."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain est assaisonné, séparé, fumé et légèrement brillant. Les crevettes sont sucrées, le jambon est salé, les pois sont simplement chauds. L'huile de sésame soulève tout en parfum.",
            "action": "Assortir immédiatement dans des bols chauds et servir."
          },
          {
            "state": "Overdone",
            "description": "Le soja a été ajouté trop tôt sur une chaleur trop élevée et a caramélisé en une croûte amère sur le wok, transférant l'amertume au riz.",
            "action": "Ajouter un jet d'eau et jeter pour dissoudre la croûte, puis goûter — si amer, il peut être nécessaire de secourir avec une touche plus de soja et une pincée de sucre."
          }
        ]
      },
      "feelCue": "Le riz frit de Yangzhou devrait se sentir léger dans le bol — prendre une cuillère et il devrait se disperser facilement, et non pas roder solidement. L'arôme qui monte est fumé, salé et légèrement sucré de l'omble de siu et du sésame."
    }
  ]
};
