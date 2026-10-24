export default {
  "repoId": "master_indonesian_beef_rendang_001",
  "parentRepoId": null,
  "slug": "beef-rendang",
  "author": "ForkRecipe Kitchen",
  "title": "Rendang Daging",
  "description": "Le boeuf mijoté pendant des heures dans du lait de noix de coco avec du galangal, de la citronnelle et une pâte d'épices ardentes jusqu'à ce que tout le liquide s'évapore et que les frites de viande dans son propre gras libéré, sombre, mâche et aromatique explosive.",
  "cuisine": "Indonésien",
  "culture": "Minangkabau",
  "category": "proteins",
  "tags": [
    "rendang",
    "par an",
    "boeuf",
    "cuits lentement",
    "noix de coco",
    "épicé",
    "Sans gluten"
  ],
  "difficulty": 4,
  "activeTime": "1 hr",
  "totalTime": "4 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 2,
    "umami": 4,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Bouchée de boeuf ou côte courte de bœuf (coupée en morceaux de 5 cm)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "poitrine de boeuf",
        "Croupe de bœuf"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Lait de coco plein gras",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Galangal (fraîche ou congelée), tranché en pièces",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "doubler la quantité de gingembre frais"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Pâtes de citronnelle, meurtries et nouées",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Feuilles fraîches de chaux kaffir (makrut), déchirées",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "bandes de zeste de chaux kaffir"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Feuilles de curcuma séchées, liées",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "une feuille de chaux supplémentaire"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Échalotes (Échalotes rouges asiatiques), pelées",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "petits oignons rouges"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Giroves d'ail, pelées",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Gingembre frais, pelé et tranché",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Piments rouges séchés (poêlés et ensemencés) ou chili rouge long frais",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Sambal oléek pâte"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Bougies (kemiri) ou noix de macadamia",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Amandes blanchies"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "1 cm de curcuma frais"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Seasoning",
      "name": "Kerisik (noix de coco broyée, broyée à la pâte)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "flocons de noix de coco grillés, grillés à sec"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Seasoning",
      "name": "Sucre de palme (gula merah), râpé",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun foncé"
      ]
    },
    {
      "ingId": "ing_16",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Construire le rempah (pâte d'épices)",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "rempah_paste",
      "instructions": "Mélanger les échalotes, l'ail, le gingembre, les piments, les chandelles, la coriandre moulue et le curcuma dans un mélangeur ou un robot culinaire. Ajoutez une petite éclaboussure d'eau pour la faire bouger et mélanger à une pâte complètement lisse sans morceaux visibles — c'est le rempa, la pâte parfumée qui est l'âme de la cuisine indonésienne. Alternativement, livrez un pilon et un mortier pour une pâte plus grossière et plus texturée avec une plus grande complexité aromatique. L'objectif est une masse homogène où tous les aromatiques sont complètement décomposés. Cette étape libère les huiles volatiles dans les aromatiques qui parfumeront le plat entier.",
      "visualCue": {
        "primaryTarget": "Une pâte rouge-orange profonde, complètement lisse avec une texture brillante et cohésive. Pas de morceaux visibles d'échalote, de gingembre ou de chili. L'arôme est agressivement cru et piquant: chili aigu, gingembre chaud et base florale galangale-hallot.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte a encore des morceaux visibles d'échalote ou de gingembre. Ça a l'air rude et hétérogène.",
            "action": "Continuer le mélange, gratter les côtés. Ajoutez encore une cuillère à café d'eau si elle est trop épaisse pour se fondre en douceur."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, brillant, pâte rouge-orange profonde. Lorsqu'on frotte entre les doigts, on dirait de l'argile dense et humide, sans particules rugueuses.",
            "action": "Utiliser immédiatement ou conserver dans le réfrigérateur pendant 2 jours maximum."
          },
          {
            "state": "Overdone",
            "description": "La pâte a été mélangée si longtemps qu'elle a été aérée et devenue plus pâle et légèrement mousseuse.",
            "action": "Utilisation telle quelle — la saveur n'est pas affectée. La mousse sera cuite dans les premières minutes dans la casserole."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité de rempa entre vos doigts — il devrait se sentir comme de l'argile dense, huileuse, humide avec une chaleur qui construit immédiatement. Vos doigts vont tacher l'orange jaune du curcuma et du chili. Cette coloration est concentrée dans les huiles aromatiques."
    },
    {
      "nodeId": "step_2",
      "action": "Fry rempah et aromatiques",
      "inputs": [
        "rempah_paste",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "fried_rempah",
      "instructions": "Chauffer un grand pot, large, à fond lourd ou wok à feu moyen — pas d'huile ajoutée est encore nécessaire car la graisse de lait de coco le fournira. Ajouter la pâte de rempa et faire frire, en remuant constamment, pendant 8-12 minutes jusqu'à ce que la pâte s'obscurcisse de l'orange vif à un brun rouge-brun profond, grillé et l'odeur brute et nette se transforme en quelque chose torréfié et complexe. La pâte colle et résiste à la cuillère. Ajouter le galangal, la citronnelle meurtrie, les feuilles de lime kaffir et la feuille de curcuma. Faire frire 2 minutes de plus jusqu'à ce que les feuilles aromatiques libèrent leurs huiles dans la pâte.",
      "visualCue": {
        "primaryTarget": "Le rempah est passé d'une orange vive à un rouge brique foncé profond. La pâte s'est serrée et frite dans ses propres huiles naturelles — vous pouvez voir de petites piscines d'huile d'orange se séparant aux bords de la masse de la pâte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte sent encore cru et piquant, le chili aigu et l'échalote cru dominent. La couleur est encore orange vif et la pâte est lâche et humide.",
            "action": "Continuer à frire à feu moyen. La transformation de la pâte crue en pâte cuite prend du temps — se précipiter avec une chaleur élevée brûle la surface pendant que le centre reste brut."
          },
          {
            "state": "Perfect",
            "description": "Rouge brique profonde, parfumé d'épices grillées et de citronnelle florale. L'huile se sépare visiblement. Le bord brut a complètement disparu. La pâte est épaisse et confitureuse.",
            "action": "Ajouter les morceaux de boeuf et le lait de coco. Commencez la longue mijoter."
          },
          {
            "state": "Overdone",
            "description": "La pâte a brûlé sur le plancher de la casserole — vous sentez des taches acrides, amères, brûlantes et brun foncé noir se forment.",
            "action": "Ajouter immédiatement une touche de lait de coco pour déglacer. Si le goût brûlé est prononcé dans la pâte, jetez - le et commencez à l'état frais."
          }
        ]
      },
      "feelCue": "La pâte doit sentir comme vous pourriez la manger avec une cuillère — torréfié, complexe et profondément parfumée. Le bruit de friture passe d'un étourdissement agressif et humide tôt à un bruit de friture plus silencieux et plus sec que l'humidité cuit. Ce bruit sec est le signal."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter dans le lait de coco",
      "inputs": [
        "fried_rempah",
        "ing_01",
        "ing_02",
        "ing_14",
        "ing_15",
        "ing_16"
      ],
      "outputState": "simmering_rendang",
      "instructions": "Ajouter les morceaux de boeuf au rempa frit et remuer pour enrober chaque morceau de la pâte. Verser dans tout le lait de coco, puis ajouter le kérisik, le sucre de palme et le sel. Mélanger. Porter à ébullition vigoureuse, puis laisser mijoter régulièrement et visiblement. Cuire à découvert en remuant toutes les 15 à 20 minutes pendant 2,5 à 3 heures. Le lait de coco passera par des phases distinctes: d'abord un liquide pâle et bouillonnant; puis une sauce épaississante et jaunissante comme la graisse se sépare; puis une sauce s'assombrissant progressivement comme l'humidité s'évapore et les sucres se concentrent. Les morceaux de boeuf s'adoucissent complètement, puis se raffermissent légèrement dans la phase finale de friture à sec.",
      "visualCue": {
        "primaryTarget": "Après 2,5 heures : le liquide a considérablement diminué et la graisse de noix de coco s'est séparée et fait maintenant frire le boeuf et les résidus d'épices. Le mélange est très foncé acajou-brun et à peine liquide, avec le boeuf enrobé dans une pâte épaisse et collante foncée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est encore une sauce liquide à 2 heures — lâche, orange-brun, et visiblement liquide plutôt qu'enduit. Le boeuf résiste à une fourchette.",
            "action": "Continuez à mijoter à découvert. Mélanger plus fréquemment car il épaissit pour éviter les brûlures. La phase de friture à sec ne vient qu'après que le liquide est presque complètement parti."
          },
          {
            "state": "Perfect",
            "description": "Le liquide s'est presque entièrement évaporé. La graisse de noix de coco séparée fait frire le boeuf dans une pâte concentrée brun foncé. Le bœuf se sépare facilement avec deux fourchettes. Le pot sent intensément de noix de coco et d'épices caramélisées.",
            "action": "Regardez de près à partir de ce point — la transition de parfait à brûlé est rapide. Incorporer constamment et baisser la chaleur."
          },
          {
            "state": "Overdone",
            "description": "Le boeuf a brûlé sur le plancher de la casserole — vous entendez craqueler et sentir brûler le sucre de coco. Des taches sombres et amères apparaissent sur la viande.",
            "action": "Retirer immédiatement du feu. Transférer ce qui est récupérable, laissant tout résidu brûlé sur la casserole. Ne grattez pas les morceaux brûlés — ils sont amers. Goûtez et évaluez si le lot peut être sauvé en diluant avec un jet de lait de coco frais."
          }
        ]
      },
      "feelCue": "À la marque de 2 heures, tremper une cuillère et sentir le revêtement : si elle coule comme de la sauce, il faut plus de temps. Au bon moment, le revêtement s'accroche à la cuillère et s'égoutte à peine — épais comme de la mélasse. Appuyez sur un morceau de bœuf; il devrait compresser avec une légère résistance, comme une poitrine bien cuite."
    },
    {
      "nodeId": "step_4",
      "action": "Faire frire à sec pour finir",
      "inputs": [
        "simmering_rendang"
      ],
      "outputState": "finished_beef_rendang",
      "instructions": "Une fois le liquide presque disparu et l'huile de coco séparée est visiblement frit la viande et la pâte, abaissez le feu au minimum et remuez constamment avec une cuillère en bois ou une spatule. Le rendang s'assombrira rapidement à ce stade, car les sucres caramélisent et la croûte d'épices du boeuf s'approfondit de brun foncé à presque noir. Faire frire à l'état sec pendant 10 à 20 minutes, en retournant fréquemment le boeuf, jusqu'à ce que les morceaux soient uniformément sombres et que le revêtement en pâte ait séché jusqu'à un fini mat. La viande de boeuf doit être tendre, mais légèrement mâcheuse, et non pas molle, mais sèche. Retirer et jeter la citronnelle, le galangal et les feuilles de lime avant de servir.",
      "visualCue": {
        "primaryTarget": "Des morceaux de bœuf brun-noir très foncés et presque enrobés d'une croûte sèche d'épices mates. Le pot a très peu de liquide restant — juste une petite quantité d'huile sombre concentrée à la base. Chaque morceau de bœuf semble avoir été laqué.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le boeuf est encore enrobé de sauce humide et brillante qui flaque à la base du pot. L'extérieur est brun moyen, pas acajou foncé. La viande peut encore être trop molle — s'effondrer plutôt que de tenir forme.",
            "action": "Poursuivre la phase de friture à sec. Cette dernière étape est celle où Rendang devient Rendang — ne vous arrêtez pas."
          },
          {
            "state": "Perfect",
            "description": "Revêtement presque noir, mat et sec. Le boeuf tient sa forme mais donne à une presse légère avec une fourchette. L'arôme est intensément complexe: noix de coco grillée, épices caramélisées, bœuf profond. L'huile dans le pot est parfumée et sombre.",
            "action": "Retirer les arômes entiers, laisser reposer 5 minutes et servir sur du riz à la vapeur."
          },
          {
            "state": "Overdone",
            "description": "Le boeuf est complètement déshydraté, l'extérieur est vraiment noirci et les morceaux sont durs et secs. Aucune humidité ne reste au centre.",
            "action": "Rendang peut être réhydraté : ajouter 2 cuillères à soupe de lait de coco frais, remuer et chauffer doucement pendant 3 minutes. Il ne se rétablira pas complètement mais deviendra plus agréable."
          }
        ]
      },
      "feelCue": "Ramassez un morceau de boeuf — il devrait se sentir lourd et dense, presque comme un petit morceau de bois avec une coquille extérieure sèche. Pressez-la entre deux cuillères : elle doit produire et compresser légèrement, révélant un intérieur fibreux humide sous la croûte caramélisée. Le revêtement d'épices ne doit pas frotter sur votre cuillère — il doit être collé à la viande."
    }
  ]
};
