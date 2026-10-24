export default {
  "repoId": "master_peruvian_lomo-saltado_001",
  "parentRepoId": null,
  "slug": "lomo-saltado",
  "author": "ForkRecipe Kitchen",
  "title": "Lomo Saltado",
  "description": "Au Pérou, les lanières de sirloine et de tomate ont été frappées dans un wok chaud et criant avec de la sauce de soja et du vinaigre, jetées avec des pommes de terre frites et de l'oignon rouge dans un plat de fusion juteux, fumé, unique au Pérou.",
  "cuisine": "Pérou",
  "culture": "Lima",
  "category": "proteins",
  "tags": [
    "périuvien",
    "Chifa",
    "boeuf",
    "sauté",
    "de soja",
    "tomates",
    "frites"
  ],
  "difficulty": 3,
  "activeTime": "25 min",
  "totalTime": "40 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 3,
    "bitter": 0,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Linge de boeuf ou filet, tranché 1cm d'épaisseur contre le grain",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "longe de la bande de bœuf",
        "Filet d'agneau"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Pommes de terre jaunes (Yukon Gold ou similaires), coupées en frites épaisses",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "Pommes de terre russes"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon rouge, coupé en coins épais (8 coins par oignon)",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "oignon blanc"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Tomates de ripe, coupées en quartiers épais",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "tomates cerises, coupées en deux"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Heat",
      "name": "Ají amarillo (ou 1 ají amarillo frais, ensemencé et tranché)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "habanero utilisé avec parcimonie"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "tamari (sans gluten)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "vinaigre de vin rouge",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre de cidre de pomme"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Cumin",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Huile végétale (pour la friture et le wok)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "huile d'arachide"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Herb",
      "name": "Coriandre fraîche (cilantro), grossièrement hachée",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel de mer fin et poivre noir",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Garnish",
      "name": "Riz blanc cuit, à servir",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Frire",
      "inputs": [
        "ing_02",
        "ing_10",
        "ing_12"
      ],
      "outputState": "fried_potatoes",
      "instructions": "Chauffer environ 4cm d'huile végétale dans un grand pot profond ou wok à 175C / 350F. Testez avec une bande de pommes de terre – elle doit étourdir immédiatement et vigoureusement. Faire frire les bandes de pommes de terre en lots, ne jamais encombrer l'huile, pendant 6 à 8 minutes par lot jusqu'à ce qu'elles soient cuites et dorées à l'extérieur. Transférer sur un porte-fils sur une serviette en papier et assaisonner immédiatement avec du sel à chaud — le sel adhère à la surface de la pomme de terre chaude. Ne couvrez pas; vous voulez qu'ils restent croustillants. Ces pommes de terre seront ajoutées au wok à la fin. Cette double présence de frites et de riz dans un seul plat est l'une des choses qui rend le lomo salado uniquement péruvien – l'abondance de glucides est intentionnelle et joyeuse.",
      "visualCue": {
        "primaryTarget": "Bandes de pommes de terre dorées et croustillantes avec un intérieur mat et féculent visible aux extrémités coupées. Ils devraient se tenir debout sur la grille sans plier.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pommes de terre sont pâles, boiteuses et encore courbées lorsqu'elles sont ramassées; elles sèment dans le wok.",
            "action": "Retournez à l'huile pendant 2-3 minutes de plus; assurez-vous que la température de l'huile est à 175C — si l'huile n'était pas assez chaude, les pommes de terre ont absorbé l'huile plutôt que le croustillant."
          },
          {
            "state": "Perfect",
            "description": "Extérieur doré-brun, croustillant, cuit à travers mais pas creux ou sombre. Ils se cassent proprement quand ils sont cassés. Assaisonner avec du sel tout en restant à vapeur.",
            "action": "Placer sur une grille et conserver dans un four chaud (100C / 210F) pendant que vous faites cuire le sauté."
          },
          {
            "state": "Overdone",
            "description": "Brun profond approchant sombre; l'extérieur est très croquant mais l'intérieur a séché; ils sentent l'huile chaude.",
            "action": "Encore utilisable — il suffit de réduire le temps de wok final pour éviter d'autres couleurs. Les saveurs plus foncées travailleront en fait avec la sauce soja."
          }
        ]
      },
      "feelCue": "Prenez une frite et raplez - la doucement contre le bord du bol. Une bonne frite semble creuse et presque fragile, comme tapoter un biscuit sec. Il faut plus de temps dans l'huile."
    },
    {
      "nodeId": "step_2",
      "action": "Faire mariner",
      "inputs": [
        "ing_01",
        "ing_09",
        "ing_12"
      ],
      "outputState": "marinated_beef",
      "instructions": "Pendant que les pommes de terre frisent, assaisonner les bandes de boeuf avec du cumin moulu, du sel et du poivre noir. Jetez-le uniformément. Laissez le boeuf s'asseoir à température ambiante pendant 10 minutes — ce n'est pas une longue marinade, mais un court repos assaisonné qui permet au sel d'attirer une petite quantité d'humidité à la surface, ce qui aide la viande à se saisir plus rapidement et plus uniformément. Point crucial : le boeuf doit être sec à la surface avant de toucher le wok. Portez-le avec des serviettes en papier si l'humidité a mis en commun. La vapeur de boeuf humide plutôt que les sears, et le sear est tout dans lomo salado — c'est ce qui crée la signature fumée, bords carbonisés que aucune quantité de sauce ne peut remplacer.",
      "visualCue": {
        "primaryTarget": "Bandes de boeuf uniformément sèches à la surface, recouvertes d'une faible poussière foncée de cumin et de poivre, resplendissant seulement légèrement de l'humidité naturelle de la viande.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Bandes de boeuf encore humides et brillantes à partir de l'humidité de surface, les épices glissent au lieu d'adhérer.",
            "action": "Séchez-vous avec des serviettes en papier, puis lancez à nouveau avec des assaisonnements."
          },
          {
            "state": "Perfect",
            "description": "La surface est sèche et mate; les épices sont distribuées uniformément; le boeuf a une faible odeur de cumin terreux. Température ambiante plutôt que frigo-froid.",
            "action": "Que le wok crie chaud avant que le boeuf entre — le timing est tout."
          },
          {
            "state": "Overdone",
            "description": "Le boeuf a été si longtemps assis avec du sel qu'il a attiré l'humidité importante et semble à nouveau humide, commençant à guérir plutôt que de la saison.",
            "action": "Laisser bien sécher et cuire immédiatement."
          }
        ]
      },
      "feelCue": "Touchez la surface d'une bande de bœuf — votre bout de doigt devrait sortir avec le fantôme d'une tache des épices, pas mouillé ou glissant. La bande doit se sentir ferme et légèrement collante, comme de la viande bien séchée avant la couture."
    },
    {
      "nodeId": "step_3",
      "action": "Saisir",
      "inputs": [
        "marinated_beef",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_10"
      ],
      "outputState": "stir_fried_beef",
      "instructions": "Chauffer votre wok ou votre plus grande poêle en fonte sur la plus haute chaleur absolue que votre poêle puisse produire pendant deux minutes complètes. Ajoutez un mince film d'huile végétale et laissez-le commencer à fumer — c'est le signal que vous êtes à la bonne température. Ajouter les bandes de bœuf dans une seule couche et laisser intact pendant 60 secondes pour développer une couche foncée profonde. Jetez-le une fois et faites-le saisir encore 30 secondes. Retirez le boeuf dans une assiette — vous voulez qu'il soit cuit à moyen, pas au-delà. Dans le même wok chaud et criant (ajouter une éclaboussure plus d'huile si nécessaire), ajouter les coins d'oignon rouge et l'ail. Rouler constamment pendant 90 secondes — vous voulez que l'oignon s'affiche légèrement aux bords tout en restant croustillant au cœur. Ajouter les quartiers de tomate et la pâte ají amarillo, mélanger pendant 30 secondes, puis retourner le bœuf. Verser la sauce de soja et le vinaigre de vin rouge directement dans le centre du wok — ils cracheront, vapeurront et vaporiseront partiellement, créant la \"fumée de chifa\" caractéristique de lomo salado. Jetez tout ensemble vigoureusement pendant 60 secondes.",
      "visualCue": {
        "primaryTarget": "Bandes de boeuf aux bords foncés et carbonisés et au centre juteux; coins d'oignon carbonisés aux extrémités mais structurellement intacts; tomates s'effondrent et pleurent le jus dans la sauce soya-vinegar sombre et brillante enrobant tout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le boeuf est gris et cuit à la vapeur, sans omble; l'oignon est adouci mais non carbonisé; les tomates sont crues; la sauce n'a pas diminué et sent fortement le soja cru et le vinaigre.",
            "action": "Le wok n'était pas assez chaud. Retournez tout au wok sur la plus haute chaleur possible et lancez rapidement; l'objectif maintenant est de chasser rapidement l'excès de liquide."
          },
          {
            "state": "Perfect",
            "description": "Le boeuf est carbonisé aux bords, cuit à l'intérieur juste au-delà de l'épicéa; l'oignon a des bouts noirs mais une croûte satisfaisante; les tomates sont éclatées et confitures; la sauce est un revêtement foncé, brillant et concentré. Le wok sent la fumée, le soja et quelque chose d'uniquement péruvien.",
            "action": "Ajouter les pommes de terre frites et la coriandre et jeter une fois de plus."
          },
          {
            "state": "Overdone",
            "description": "Le boeuf est gris tout au long et dur; l'oignon est doux et effondré; les tomates se sont désintégrées dans la sauce; tout a un goût plat et ragoûté plutôt qu'au wok-charred.",
            "action": "Rien à réparer: ce lot est un ragoût, pas un bouillon. Servir sur le riz comme une version braisée et noter les leçons pour la prochaine fois: wok plus chaud, mains plus rapides, petits lots."
          }
        ]
      },
      "feelCue": "Vous devriez sentir la chaleur du wok à partir de 30cm au-dessus avant que la nourriture entre. Lorsque la sauce de soja frappe, la vapeur et la fumée devraient faire vos yeux arroser brièvement. C'est le bon niveau de chaleur. Si vous ne ressentez rien d'autre qu'une mijotée douce, le wok est trop frais."
    },
    {
      "nodeId": "step_4",
      "action": "Mélanger",
      "inputs": [
        "stir_fried_beef",
        "fried_potatoes",
        "ing_11",
        "ing_13"
      ],
      "outputState": "finished_lomo_saltado",
      "instructions": "Ajoutez les bandes de pommes de terre frites au wok et jetez une fois avec le bœuf et les légumes sautés — juste une ou deux fois; vous voulez que les pommes de terre ramassent la sauce foncée et brillante sans se laisser pousser par un remuant excessif. Dispersez la coriandre fraîche au-dessus du sommet et jetez à nouveau. Goûtez un morceau de boeuf et une pomme de terre : le boeuf doit être salé, légèrement carbonisé, à l'ombre chaude du cumin, avec la luminosité aigre du vinaigre; la pomme de terre doit être croquante à l'extérieur et porter un enrobage de la sauce foncée. Servir immédiatement, en empilant directement le riz blanc. Les pommes de terre devraient encore avoir leur croquant — lomo salado n'attend personne.",
      "visualCue": {
        "primaryTarget": "Un tumble de lanières de bœuf foncées et brillantes, de coins d'oignons carbonisés, de tomates éclatées et de frites dorées, toutes enrobées d'une sauce acajou-soya-vinegar foncé, avec une coriandre vert vif dispersée dans l'ensemble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pommes de terre ne sont pas enrobées et semblent pâles et séparées; la coriandre est flétrie et agitée plutôt qu'éparpillée comme garniture fraîche.",
            "action": "Jetez une fois de plus et immédiatement l'assiette — ne continuez pas la cuisson une fois que les pommes de terre sont entrées, ou ils vont vapeur et adoucir."
          },
          {
            "state": "Perfect",
            "description": "Pommes de terre enrobées dans la sauce foncée mais encore audiquement croquantes; boeuf foncé et carbonisé aux bords; coriandre vert vif; l'assiette sent la fumée de wok, le soja, le vinaigre d'agrumes et le cumin — le tout à la fois.",
            "action": "Servir avec du riz blanc cuit à la vapeur."
          },
          {
            "state": "Overdone",
            "description": "Les pommes de terre sont devenues farcies par l'excès de sauce ou trop de mouvements de lancer; les frites sont boiteuses et le plat entier semble humide et ragoûté.",
            "action": "Rien à réparer — servir immédiatement et cuire des frites fraîches la prochaine fois; les ajouter dans les 30 dernières secondes seulement."
          }
        ]
      },
      "feelCue": "Lancez une frite qui a été dans le wok — il devrait encore craquer proprement entre vos dents au début avant de céder la place à un intérieur doux et enrobé de sauce. Ce contraste textural — croquant à l'extérieur, soudé à l'intérieur — est la sensation de la bouche d'un lomo salado bien exécuté."
    }
  ]
};
