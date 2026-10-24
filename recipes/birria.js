export default {
  "repoId": "master_mexican_birria_001",
  "parentRepoId": null,
  "slug": "birria",
  "author": "ForkRecipe Kitchen",
  "title": "Birria de Res (Jalisco Beef Birria)",
  "description": "Le boeuf braisé dans un bouillon de guajillo et d'anchos grillés, de tomates carbonisées et d'épices aromatiques jusqu'à ce que la viande tombe en morceaux — le riche consommé servi aux côtés pour tremper des tacos de birrias.",
  "cuisine": "Mexicain",
  "culture": "Jalisco",
  "category": "proteins",
  "tags": [
    "Mexique",
    "Jalisco",
    "boeuf",
    "birria",
    "Chili",
    "braise",
    "Consommation",
    "tacos"
  ],
  "difficulty": 4,
  "activeTime": "1 hour",
  "totalTime": "5 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 2,
    "umami": 5,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Mâchoire de boeuf, côtes courtes désossées et queue de bœuf mélangée",
      "ratioValue": 2000,
      "defaultUnit": "g",
      "substitutions": [
        "épaule de chèvre",
        "épaule d'agneau"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Chilies de guajillo séchées, tiges et graines enlevées",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Chilies ancho séchées, tiges et graines enlevées",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Chipotle séché ou piments morita",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Tomates roms, coupées en deux",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Oignon blanc, quartiers",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Gousses d'ail, non pelées",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Origan séché (Mexicain)",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": [
        "Origan italien"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Gousses de terre",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 4,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Aromatic",
      "name": "Fils de thym frais",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "Thym séché"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Liquid",
      "name": "Viande bovine ou eau",
      "ratioValue": 1500,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_16",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_17",
      "role": "Garnish",
      "name": "Oignon blanc, finement coupé en dés",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_18",
      "role": "Garnish",
      "name": "Coriandre fraîche, hachée",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_19",
      "role": "Acid",
      "name": "Coins de chaux",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "toasted_chilies",
      "instructions": "Chauffer une poêle en comal sec ou en fonte à feu moyen. Faire cuire les chilis séchés un par un : presser chaque plat contre la surface chaude pendant 15 à 20 secondes de chaque côté, jusqu'à ce qu'ils approfondissent en couleur, blister légèrement, et libérer un arôme riche et fumé. Ne brûlez pas — ils doivent sentir le chocolat et la fumée, pas l'omble d'acre.",
      "visualCue": {
        "primaryTarget": "Chaque chili est légèrement gonflé et blister, la couleur s'est approfondie jusqu'à un proche noir aux taches pressées. La cuisine sent le chocolat fumé et les fruits secs.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les chilis ressemblent à ceux d'avant le toast: plat, sombre et sans cloques. L'odeur est plate et poussiéreuse.",
            "action": "Retournez au comal. Le moment clé est quand vous sentez l'arôme de fumée au chocolat."
          },
          {
            "state": "Perfect",
            "description": "Des cloques légères, une légère fumée, et la peau est devenue légèrement souple. L'odeur est riche, complexe — chocolat, raisins secs, fumée.",
            "action": "Mettre dans un bol, couvrir d'eau bouillante et tremper 20 minutes."
          },
          {
            "state": "Overdone",
            "description": "Les chilies fument et sentent amère et amère. Des taches noires qui s'effondrent.",
            "action": "Jetez ces piments et commencez à être frais. Le guajillo brûlé fait un birria intensément amer qui ne peut être fixé."
          }
        ]
      },
      "feelCue": "Un chili bien grillé devient pliable et presque coriace — il fléchit plutôt que craquelures. Les sous-vêtements se cassent, les survêtements s'effondrent."
    },
    {
      "nodeId": "step_2",
      "action": "Objet",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "charred_aromatics",
      "instructions": "Sur le même comal sec ou directement au-dessus d'une flamme à gaz, charrer les tomates coupées en deux côtés jusqu'à ce que noircisse. Charr l'oignon en quartiers et les gousses d'ail non pelées de tous les côtés jusqu'à ce qu'elles soient profondément dorées, presque noires dans les taches. Cet ombrage ajoute une fumée profonde et légèrement amère essentielle à la birria.",
      "visualCue": {
        "primaryTarget": "Les tomates sont noires sur le côté coupé et se sont effondrées. L'oignon est carbonisé aux bords avec un intérieur adouci. Les gousses d'ail sont brun foncé dans les taches et ramollies.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes ne sont que légèrement dorés, pas d'omble. Les tomates n'ont pas libéré leur jus.",
            "action": "Continuer — les légumes doivent être véritablement carbonisés, et pas seulement dorés."
          },
          {
            "state": "Perfect",
            "description": "Des marques de char sur tous les légumes. Les tomates s'effondrent et juteuses. Les bords de l'oignon sont noirs avec un centre doux. L'ail est presque doux.",
            "action": "Ajouter directement aux piments."
          },
          {
            "state": "Overdone",
            "description": "Complètement noir et acride. Les légumes sont entièrement carbone.",
            "action": "Couper le pire omble des tomates et de l'oignon mais en conserver. L'ail doit être jeté s'il est complètement brûlé."
          }
        ]
      },
      "feelCue": "Appuyez sur une tomate carbonisée — elle devrait complètement céder et libérer des jus. L'omble sur la peau devrait être presque croquant, contrastant avec l'intérieur doux et vapeur."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "toasted_chilies",
        "charred_aromatics",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_14"
      ],
      "outputState": "birria_sauce",
      "instructions": "Égoutter les piments trempés, réservant 250 g de liquide trempé. Peler l'ail carbonisé. Mélanger les chilis, les tomates carbonisées, l'oignon, l'ail, toutes les épices et le vinaigre avec le liquide absorbant réservé jusqu'à ce qu'il soit complètement lisse. La sauce doit être soyeuse sans fibre visible ni morceaux. Passez à travers un filtre à mailles moyennes pour une douceur maximale.",
      "visualCue": {
        "primaryTarget": "Une sauce rouge brique profonde et foncée, presque bordeaux, complètement lisse, sans morceaux visibles. Des odeurs de chili grillé, chocolat, fumée et épices.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est épaisse avec une peau de chili visible et des morceaux de graines. La texture est rude.",
            "action": "Mélanger plus longtemps et passer à travers une souche. Les peaux de Chili laissées dans fera la sauce amère et gritty."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, brique profonde, parfumée et légèrement épaisse. Il passe à travers une souche ne laissant derrière lui qu'une petite quantité de matière fibreuse.",
            "action": "Faire frire la sauce pour approfondir la saveur, puis brasser la viande."
          },
          {
            "state": "Overdone",
            "description": "Mélange trop long et la sauce est très chaude et mousseuse.",
            "action": "Laisser refroidir avant la manipulation. Continuez."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité de sauce tendue entre vos doigts — elle devrait se sentir complètement lisse, comme une fine peinture, sans grain."
    },
    {
      "nodeId": "step_4",
      "action": "Sear",
      "inputs": [
        "ing_01",
        "ing_16"
      ],
      "outputState": "seared_beef",
      "instructions": "Assaisonner généreusement le bœuf de sel. Dans un grand four néerlandais à feu vif, saisir tous les morceaux en lots jusqu'à ce qu'ils soient profondément dorés de tous les côtés, soit environ 4 minutes de chaque côté. Ne foulez pas le pot. La couture construit le fond qui donne au consommé sa profondeur.",
      "visualCue": {
        "primaryTarget": "Croûte acajou-brun profonde sur toutes les surfaces de mer. Un amour sombre et collant sur le fond du pot. La cuisine sent le boeuf rôti.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le boeuf est gris et cuit à la vapeur, non bruni. La viande colle au pot.",
            "action": "Le pot n'est pas assez chaud. Retirer le boeuf, laisser la poêle réchauffer, et essayer à nouveau en petits lots."
          },
          {
            "state": "Perfect",
            "description": "Croûte brune profonde, la viande libère proprement. C'est sombre et riche.",
            "action": "Retirer le boeuf, réduire le feu et faire frire la sauce chili."
          },
          {
            "state": "Overdone",
            "description": "Le fond est très sombre et commence à brûler. Une odeur amère.",
            "action": "Déglacer immédiatement avec un jet de bouillon avant d'ajouter la sauce chili."
          }
        ]
      },
      "feelCue": "Lorsque le boeuf est bien mis en mer, il doit d'abord coller, puis se libérer proprement lorsqu'une croûte appropriée s'est formée. Ne le force jamais prématurément."
    },
    {
      "nodeId": "step_5",
      "action": "Brise",
      "inputs": [
        "seared_beef",
        "birria_sauce",
        "ing_15",
        "ing_12",
        "ing_13"
      ],
      "outputState": "braised_birria",
      "instructions": "Dans la même casserole, ajouter la sauce chili à feu moyen et faire frire pendant 3-4 minutes, en remuant constamment, jusqu'à ce qu'elle s'assombrisse légèrement et sente grillée. Ajouter le bœuf avec le stock, les feuilles de laurier et le thym. Porter à ébullition, écrémer abondamment, puis couvrir et cuire dans un four de 160 C (320 F) ou au-dessus de la plaque de cuisson la plus basse mijoter pendant 3 à 3,5 heures.",
      "visualCue": {
        "primaryTarget": "Après 3 heures, le bouillon est rouge grenat profond et clair, le bœuf s'est effondré en morceaux au moindre toucher, et une couche de graisse rouge-tinte flotte au sommet.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande bovine est tendre mais conserve sa forme. Broth est mince et plus léger en couleur.",
            "action": "Continuez à faire des larmes. Le collagène a besoin de 3 heures complètes pour se dissoudre dans le bouillon."
          },
          {
            "state": "Perfect",
            "description": "Le boeuf tombe en morceaux. Broth est un grenat clair et profond avec une belle casquette rouge. Le goût est complexe, fumé et profondément salé.",
            "action": "Écraser le bœuf dans le bouillon et servir."
          },
          {
            "state": "Overdone",
            "description": "Le boeuf s'est complètement dissous dans le bouillon. Le papillon peut être nuageux.",
            "action": "Strain et servir de soupe. La viande déchiquetée peut être pressée et frite pour les tacos."
          }
        ]
      },
      "feelCue": "Après 3 heures, approchez avec des pinces et pressez un morceau de bœuf — il devrait s'effondrer entre vos doigts comme du papier mouillé, offrant aucune résistance du tout."
    },
    {
      "nodeId": "step_6",
      "action": "Garnir",
      "inputs": [
        "braised_birria",
        "ing_17",
        "ing_18",
        "ing_19"
      ],
      "outputState": "finished_birria",
      "instructions": "Écraser le bœuf avec deux fourchettes et revenir au consommé. Goûtez et ajustez le sel. Déposer la viande et le bouillon dans des bols. Garnir d'oignon blanc en dés et de coriandre. Servir les coins de chaux à côté. Pour les tacos, tremper les tortillas dans la casquette rouge du consommé avant le grillage, remplir de viande et de fromage de biria, et servir avec le consommé pour tremper.",
      "visualCue": {
        "primaryTarget": "Garnet profond consommé avec des lambeaux de bœuf foncé et tendre. Oignon blanc vif et coriandre verte sur le dessus. Le bouchon gras de la surface du bouillon est un rouge vif de l'huile de chili.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Consommé est mince et manque de profondeur. Les morceaux de boeuf sont encore un peu fermes.",
            "action": "Laisser mijoter à découvert pendant 20 minutes pour concentrer le bouillon."
          },
          {
            "state": "Perfect",
            "description": "Consommé riche et de couleur profonde qui goûte intensément au chili, au boeuf et à la fumée. Le bœuf écrémé est doux de soie. Garnir lumineux et frais.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Consommé est très salé ou très épais à cause de la surréduction.",
            "action": "Ajouter l'eau pour diluer et ajuster l'assaisonnement."
          }
        ]
      },
      "feelCue": "Le consommé fini devrait enrober vos lèvres quand vous le sirotez — non pas aqueuse, mais le corps plein de collagène rendu, avec une chaleur persistante du chipotle."
    }
  ]
};
