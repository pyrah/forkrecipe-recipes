export default {
  "repoId": "master_chinese_xo_sauce_001",
  "parentRepoId": null,
  "slug": "xo-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce XO",
  "description": "Le condiment le plus célèbre de Hong Kong — une collision lente de pétoncles séchés, de crevettes séchées, de jambon chinois, de piment et d'ail, chaque ingrédient est transformé séparément en son propre aromatique le plus concentré avant d'être uni dans une piscine d'huile chatoyante. Le résultat est une pâte foncée, rouge rouille, intensément salée qui élève tout ce qu'elle touche : nouilles, riz, frites, poissons à la vapeur.",
  "cuisine": "Chinois",
  "culture": "Hong Kong",
  "category": "condiments",
  "tags": [
    "xo-sauce",
    "Chinois",
    "hong-kong",
    "umami",
    "Produits de la mer séchés",
    "luxe"
  ],
  "difficulty": 4,
  "activeTime": "1 hr",
  "totalTime": "1.5 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 5,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Escalade séchée, trempée 2 heures",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Crevettes séchées, trempées 30 min",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Inosinate",
      "name": "Jambon haché chinois (Jinhua ou prosciutto di Parma)",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Jambon ibérique",
        "prosciutto"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Échalotes (très finement hachées)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Ail (très finement haché)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Heat",
      "name": "Piments rouges séchés (árbol ou tianjin), finement hachés",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Gochugaru coréen"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile neutre (bron de riz, arachide ou graines de raisin)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "sauce soja",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Solvent",
      "name": "Vin de riz shaoxant",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "sherry sec"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "prepped_seafood_and_ham",
      "instructions": "Faire tremper les pétoncles séchés dans l'eau froide pendant 2 heures; tremper les crevettes séchées séparément dans l'eau froide pendant 30 minutes. Réserver le liquide de trempage du pétoncle — il est intensément aromatisé et sera ajouté à la sauce. Égoutter et déchiqueter les pétoncles réhydratés à la main en petits brins le long de leurs fibres naturelles — ils devraient se séparer comme du poulet cuit. Hacher grossièrement les crevettes réhydratées. Couper finement le jambon en morceaux de 5 mm au maximum.",
      "visualCue": {
        "primaryTarget": "Les pétoncles sont déchiquetés en délicats brins d'or pâle. Les crevettes sont en petits morceaux. Le jambon est coupé en dés. Tous les trois sont prêts et séparés avant que la friture commence.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pétoncles sont encore fermes et résistent au déchiquetage, ils se sentent caoutchouteux et denses.",
            "action": "Laisser tremper encore 30 minutes. Les pétoncles souillés ne déchiqueteront pas dans la bonne texture et frireront inégalement."
          },
          {
            "state": "Perfect",
            "description": "Les pétoncles se séparent facilement en fibres dorées soyeuses. Les crevettes sont de la plomberie et donnent. Le liquide absorbant est ambre et profondément parfumé.",
            "action": "Commencez à frire immédiatement ou réfrigérez les composants préparés pendant 8 heures."
          },
          {
            "state": "Overdone",
            "description": "Les pétoncles ont trempé si longtemps qu'ils sont ligotés par l'eau et tombent en morceaux plutôt qu'en brins.",
            "action": "Pressez doucement l'excès d'eau et continuez. La texture sera moins distincte mais la saveur n'est pas affectée."
          }
        ]
      },
      "feelCue": "Un pétoncle bien trempé tiré le long de son grain devrait se sentir comme de la soie humide — il se sépare en brins sans résistance. Si elle déchire en morceaux, il faut plus de trempe."
    },
    {
      "nodeId": "step_2",
      "action": "Fry",
      "inputs": [
        "prepped_seafood_and_ham",
        "ing_07"
      ],
      "outputState": "fried_seafood_and_ham",
      "instructions": "Chauffer la moitié de l'huile dans un wok ou une poêle épaisse à feu moyen-doux. Ajouter d'abord les pétoncles déchiquetés — ils prennent plus longtemps. Faire frire lentement, en remuant fréquemment, pendant 10 à 12 minutes jusqu'à ce qu'ils deviennent dorés et légèrement croustillants aux bords, mais restent tendres à l'intérieur. Ajouter les crevettes et le jambon et continuer à frire pendant 5 à 6 minutes jusqu'à ce que les crevettes soient dorées et parfumées et que la graisse du jambon soit rendue. L'huile deviendra orange à partir du collagène pétoncle. Retirer tout de l'huile avec une cuillère à fentes et réserver, réserver l'huile aromatisée.",
      "visualCue": {
        "primaryTarget": "Les brins de pétoncles devraient être légers, voire dorés, croustillants aux extrémités, mais toujours tendres et productifs au milieu. L'huile de friture transforme un orange ambré chaud.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pétoncles sont encore pâles et mous, ils ont cuit à la vapeur plutôt que frits. L'huile n'est pas assez chaude.",
            "action": "Augmenter le feu à moyen et continuer à frire. Les pétoncles underdones feront goûter la sauce à la vapeur, pas frite."
          },
          {
            "state": "Perfect",
            "description": "Filets de pétoncle doré aux bords légèrement croustillants. Le wok sent les fruits de mer caramélisés. Les morceaux de jambon sont rendus et légèrement dorés.",
            "action": "Retirer de l'huile et réserver. Gardez l'huile."
          },
          {
            "state": "Overdone",
            "description": "Les brins de pétoncle sont brun foncé et cassants — ils sentent les fruits de mer brûlés.",
            "action": "Goûtez un morceau. S'ils sont simplement grillés (non brûlés), ils peuvent travailler. Si amer, jetez et recommencez cette étape."
          }
        ]
      },
      "feelCue": "Un brin de pétoncle frit pincée entre les doigts devrait avoir une légère croûte aux extrémités et donner doucement au centre — le contraste de la texture est le prix."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "fried_seafood_and_ham",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "aromatics_cooked_into_oil",
      "instructions": "Dans le même wok avec l'huile aromatisée réservée, réduire la chaleur à faible. Ajouter le reste d'huile. Lorsque l'huile brille mais ne fume pas, ajouter les échalotes et faire frire lentement, en remuant constamment, pendant 8-10 minutes jusqu'à ce qu'elles soient profondément dorées et commencent à croquer. Ajouter l'ail et faire frire encore 3 à 4 minutes. L'ail brûle plus vite que les échalotes. Ajouter le piment séché et faire frire 2 minutes. La base entière de l'allium-chilli doit être profondément dorée, parfumée et légèrement croustillante aux bords.",
      "visualCue": {
        "primaryTarget": "Les échalotes sont profondes, même dorées, légèrement croustillantes aux bords, encore cohésives. L'ail devient en or. Chilli a obscurci et est parfumé mais pas brûlé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les échalotes sont encore pâles et douces — aucune couleur ne s'est développée et elles sentent crus et tranchants.",
            "action": "Continuer à frire à feu doux. La patience est essentielle: la précipitation des alliums rend la sauce dure."
          },
          {
            "state": "Perfect",
            "description": "Échalotes d'or profond légèrement croustillantes. L'ail est doré et pétillant. Le piment s'est ouvert et a fait l'huile rouge-orange. Le wok sent extraordinaire — doux, vif, océanique et épicé tout à la fois.",
            "action": "Retournez les pétoncles frits, les crevettes et le jambon au wok."
          },
          {
            "state": "Overdone",
            "description": "L'ail ou les échalotes sont devenues brun foncé et sentent amers. L'huile est acride.",
            "action": "Si un peu plus, procédez rapidement — les fruits de mer et le jambon équilibreront une certaine amertume. S'il est clairement brûlé, commencer les aromatiques pas plus."
          }
        ]
      },
      "feelCue": "Tenez - vous près du wok: vous devriez sentir la chaleur douce de l'huile, et non la chaleur agressive. Faible et lent est le seul moyen de construire la base complexe d'allium de XO."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "aromatics_cooked_into_oil",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "combined_xo_sauce",
      "instructions": "Retournez les pétoncles frits, les crevettes et le jambon au wok. Ajouter la sauce de soja, le sucre et le vin de riz Shaoxing. Ajouter 2 à 3 cuillères à soupe du liquide de trempage de pétoncle réservé. Mélanger tout et laisser mijoter à feu moyen-doux pendant 5-8 minutes, en remuant fréquemment, jusqu'à ce que le vin ait cuit, le sucre s'est dissous, et la sauce s'est réunie dans un condiment cohésif, brillant, rouge rouille foncé. Goûtez et ajustez le sel.",
      "visualCue": {
        "primaryTarget": "Un mélange noir, rouge rouille, huile-glissure où tous les composants sont distincts mais unifiés - l'or pétoncle déchiqueté, huile de piment rouge orange, alliums ambres. La sauce doit avoir l'air riche et grasse, pas sèche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce sent encore fortement le vin ou le soja. Les composants semblent séparés et non intégrés.",
            "action": "Continuer à mijoter jusqu'à ce que le vin s'évapore et que la sauce se combine."
          },
          {
            "state": "Perfect",
            "description": "Une sauce rouge rouille profondément parfumée et cohésive. Tout brille dans l'huile. La saveur est intensément savoureuse, légèrement épicée et incroyablement complexe — la somme est plus que les parties.",
            "action": "Retirer du feu et refroidir complètement avant de jarrer."
          },
          {
            "state": "Overdone",
            "description": "La sauce a séché, l'huile a été absorbée et le mélange a l'air émietté et sec.",
            "action": "Ajouter une petite quantité d'huile neutre et remuer à feu doux jusqu'à ce qu'elle soit à nouveau brillante."
          }
        ]
      },
      "feelCue": "Une cuillerée de sauce XO finie devrait être lissée et lourde; l'huile devrait se mettre autour des solides. Si la cuillère est sèche et que le mélange s'agrippe, ajouter plus d'huile."
    },
    {
      "nodeId": "step_5",
      "action": "Frais",
      "inputs": [
        "combined_xo_sauce"
      ],
      "outputState": "finished_xo_sauce",
      "instructions": "Laisser refroidir la sauce à température ambiante avant de la transférer dans des pots en verre stérilisé. Assurez-vous que la sauce est complètement immergée dans l'huile — ajoutez une fine couche d'huile neutre sur le dessus si nécessaire pour la sceller. Réfrigérer. L'huile se solidifiera légèrement au réfrigérateur — c'est normal. La sauce XO reste réfrigérée pendant 1 mois et congelée pendant 3 mois. Utilisez une cuillère propre et sèche à chaque fois.",
      "visualCue": {
        "primaryTarget": "La sauce Jarred doit montrer une couche d'huile rouge-orange profonde sur le dessus scellant le mélange ci-dessous. Une fois réfrigérée, la couche d'huile devient légèrement opaque et cireuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore chaude lorsque jarrée et la chaleur a créé la condensation dans le couvercle du pot, qui va introduire l'humidité et réduire la durée de conservation.",
            "action": "Refroidir complètement avant de jarrer. La condensation introduit l'eau, qui risque d'être endommagée."
          },
          {
            "state": "Perfect",
            "description": "Sauce à température ambiante entièrement immergée dans l'huile. Un pot propre et stérilisé avec un joint serré. La sauce se conserve parfaitement un mois au réfrigérateur.",
            "action": "Réfrigérer et laisser fondre les arômes au moins 24 heures avant la première utilisation."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été laissée pour refroidir trop longtemps et a congelé. Difficile à transférer proprement dans le pot.",
            "action": "Chauffer très doucement à feu doux jusqu'à ce qu'il soit à nouveau fluide, puis pot."
          }
        ]
      },
      "feelCue": "Un pot refroidi de sauce XO incliné sur le côté devrait montrer l'huile se déplaçant lentement, comme un liquide visqueux — beaucoup plus lent que l'eau. Que la viscosité est le collagène pétoncle rendu et l'huile aromatisée portant des semaines de travail."
    }
  ]
};
