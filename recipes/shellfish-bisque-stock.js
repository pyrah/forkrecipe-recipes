export default {
  "repoId": "master_french_shellfish_bisque_stock_001",
  "parentRepoId": null,
  "slug": "shellfish-bisque-stock",
  "author": "ForkRecipe Kitchen",
  "title": "Poisson blanc",
  "description": "Crevettes, crabes ou homards et têtes rôties dans un four chaud jusqu'à ce que leurs caroténoïdes fleurissent l'orange corallienne, puis déglacées avec du cognac et de la tomate et mijotées dans une écarlate, essence profondément océanique — la base sous chaque véritable bisque. Ce que vous extrayez vraiment, c'est de la chitine, un pigment soluble dans la graisse et une douceur océanique concentrée qu'aucun stock de poissons ne peut reproduire.",
  "cuisine": "Français",
  "culture": "Norvège",
  "category": "stocks",
  "tags": [
    "stock",
    "français",
    "crustacés",
    "Produits de la mer",
    "Sans gluten",
    "sans produits laitiers"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "1 hr 30 min",
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
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Coquilles et têtes de crevettes ou de homard",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "Coquilles et griffes de crabe",
        "têtes de crevettes mixtes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Échalotes, grossièrement hachées",
      "ratioValue": 90,
      "defaultUnit": "g",
      "substitutions": [
        "moitié d'oignon blanc"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles d'ail brisées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "2 tomates prunes fraîches, concassées"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Solvent",
      "name": "Cognac",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "brandy sec",
        "Calvados"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Vin blanc sec",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "Vermouth sec",
        "stocks de poissons supplémentaires"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Stocks ou eaux de poissons",
      "ratioValue": 1500,
      "defaultUnit": "g",
      "substitutions": [
        "jus de palourde dilué 1:1 avec de l'eau"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Tours d'estragon frais",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "Thym frais",
        "une feuille de laurier"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Feuille de la baie",
      "ratioValue": 1,
      "defaultUnit": "piece",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "huile neutre"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "roasted_shells",
      "instructions": "Préchauffer le four à 220°C (425°F). Étendre les coquillages et les têtes en une seule couche sur une plaque de cuisson à bord lourd — ne pas les fouler, ou ils vapeur plutôt que rôtir. Arroser d'huile d'olive et mélanger pour enrober. Faire bouillir 15 à 20 minutes, agiter une fois la poêle à mi-chemin, jusqu'à ce que les coquilles aient transformé un corallien-orange vif en brique-rouge et soient parfumées dans toute la cuisine. La tête étourdira et toute humidité résiduelle s'évaporera. Les pigments caroténoïdes dans les coquilles, qui sont solubles dans la graisse, sont activés par la chaleur sèche et saignent leur couleur et leur saveur dans la graisse que vous faites cuire dans la prochaine.",
      "visualCue": {
        "primaryTarget": "Des coquilles profondément bronzées et sèches, avec un parfum intense de fruits de mer — caramel-doux et océanique. Les têtes devraient avoir l'air presque grillées, les taches humides étant complètement évaporées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coquilles sont pâles, semblent toujours crues, et ne sentent que des fruits de mer crus sans douceur caramélisée.",
            "action": "Retourner au four encore 5 minutes. Les coquilles pâles produisent un stock aqueux et terne avec peu de couleur."
          },
          {
            "state": "Perfect",
            "description": "Coral brillant à rouge brique, sec, parfumé avec un arôme de fruits de mer torréfié doux. Un fond blanc (résidus de coquille séché) peut apparaître sur la plaque de cuisson, c'est - à - dire une saveur.",
            "action": "Transférer immédiatement les coquillages dans le pot et déglacer la plaque de cuisson avec le cognac pour recueillir chaque morceau de fond."
          },
          {
            "state": "Overdone",
            "description": "Les coquilles sont brun foncé ou noir dans les taches, sentant l'acridité et brûlé plutôt que torréfié sucré.",
            "action": "Choisissez des morceaux carbonisés. Quelques taches sombres sont fines, mais l'ombrage significatif rendra le stock amer. Utilisez comme il est et goût critique avant de réduire."
          }
        ]
      },
      "feelCue": "Les coquillages grillés doivent se casser croustillantement et se sentir secs, pas caoutchouteux. Quand vous l'écrasez entre vos doigts, il doit s'effondrer plutôt que de plier — complètement sec et caramélisé."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "roasted_shells",
        "ing_10",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "pinced_base",
      "instructions": "Faire fondre le beurre dans une grande casserole lourde à feu vif jusqu'à ce qu'il mousse et commence à brunir. Ajouter les coquilles grillées et les écraser à peu près avec le dos d'une cuillère lourde pour exposer plus de surface — ce n'est pas facultatif. Ajouter les échalotes et l'ail et cuire en remuant pendant 3 minutes jusqu'à ce qu'ils soient adoucis et translucides. Poussez tout sur le côté et ajoutez la pâte de tomate, en la pressant à plat contre la surface du pot chaud (pinçage). Laissez-la cuire pendant 2 minutes, puis remuez-le dans les coquilles — il se transformera d'écarlate à une brique-brun profonde, perdant son bord teinté brut et gagnant en profondeur et en douceur.",
      "visualCue": {
        "primaryTarget": "Un mélange richement parfumé, brun rougeâtre de coquilles concassées, d'échalotes douces et de tomates caramélisées, avec le beurre rouge-orange des pigments de coquille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte de tomate est encore rouge vif et goûte vif et cru; les échalotes sont à peine translucides.",
            "action": "Cuire la pâte de tomate plus longtemps contre la surface du pot chaud — il devrait tourner un brun brique terne et sentir doux et noisette avant de procéder."
          },
          {
            "state": "Perfect",
            "description": "Un arôme profond et complexe de mollusques et de tomates caramélisées s'élève du pot. Le beurre est devenu un rouge orange vif des caroténoïdes. La pâte est sombre et sent bon.",
            "action": "Verser le cognac et le flammé ou simplement cuire à feu vif pour brûler l'alcool."
          },
          {
            "state": "Overdone",
            "description": "La pâte de tomate a brûlé à noir sur le fond de la poêle et sent l'acride, ou les échalotes ont brûlé à brun foncé.",
            "action": "Déglacer immédiatement avec le cognac, en grattant ce que vous pouvez. Goûtez le stock de façon critique après avoir mijoté et envisagez d'ajouter une touche de crème ou de tomate fraîche pour émousser la note amère."
          }
        ]
      },
      "feelCue": "Les coquilles doivent être légères et croustillantes lorsque vous les appuyez, se rendant facilement à la cuillère. Le pot doit siffler et cracher à chaque remuement."
    },
    {
      "nodeId": "step_3",
      "action": "Déglacer",
      "inputs": [
        "pinced_base",
        "ing_05",
        "ing_06"
      ],
      "outputState": "deglazed_base",
      "instructions": "Verser le cognac dans la casserole. En cas d'utilisation d'une flamme à gaz, mettre la poêle en feu; à l'électricité, laisser bouillir vigoureusement jusqu'à ce que l'alcool soit cuit (environ 30 secondes). Ne flippez pas du flambeau — il brûle l'alcool dur et laisse derrière le fruit et le caractère vanille du cognac. Ajouter le vin blanc et réduire de moitié à feu vif, environ 3 à 4 minutes. L'acidité du vin permettra d'extraire les autres composés solubles des coquilles.",
      "visualCue": {
        "primaryTarget": "Un liquide brillant et aromatique réduit à un éclat sirupeux, la couleur de l'orange brûlée, la vapeur avec l'odeur mêlée de fruits de mer, de caramel et de vin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le vin a encore un goût cru et vif avec de l'alcool évident; la réduction est lâche et aqueuse.",
            "action": "Continuer à réduire à feu vif, en remuant occasionnellement, jusqu'à ce que le liquide ait diminué de moitié et que la brûlure d'alcool brut soit éliminée."
          },
          {
            "state": "Perfect",
            "description": "Concentré, brillant et profondément parfumé. Le liquide s'est réduit à une épaisse glaçure enrobant les coquilles, avec un caractère vin doux et rond remplaçant l'alcool cru vif.",
            "action": "Ajouter le stock de poisson, les herbes et la feuille de laurier et laisser mijoter."
          },
          {
            "state": "Overdone",
            "description": "Surréduit à un caramel foncé collant qui peut attraper sur le fond du pot.",
            "action": "Ajouter immédiatement une éclaboussure de poisson pour le soulever, en grattant le fond. Le fond qui décolle est toujours bon goût."
          }
        ]
      },
      "feelCue": "Le moment d'ajouter le stock est quand vous faites glisser une cuillère à travers la casserole et le frottis de réduction tient sa forme pour un battement avant de revenir — concentré mais pas jammy."
    },
    {
      "nodeId": "step_4",
      "action": "Mijoter",
      "inputs": [
        "deglazed_base",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "finished_bisque_stock",
      "instructions": "Ajouter le stock de poisson, l'estragon et la feuille de laurier et laisser mijoter à nu — jamais un ébullition, ce qui rend le stock de mollusques amer et nuageux. Laisser mijoter doucement 30 à 40 minutes. Écraser la mousse couleur rouille qui monte dans les 10 premières minutes. Le stock est prêt quand il a réduit d'environ un quart et la couleur est une couleur profonde, rouge orange clair. Plongez dans un tamis à mailles fines sur un bol, pressez fermement les coquilles pour extraire chaque goutte. Jetez les coquilles épuisées. Bouche : il doit être intensement océanique, doux et plein, sans amertume ni amerie. Utiliser comme base pour le bisque, les sauces de mollusques ou le risotto.",
      "visualCue": {
        "primaryTarget": "Un stock orange-rouge clair et profondément coloré — transparent plutôt que nuageux, tourné à travers avec la couleur comme l'ambre tenu à la lumière. L'arôme est océanique, doux et légèrement fumé des coquilles grillées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pâle, mince et aqueuse après seulement 15 minutes, dégustation principalement de vin et d'échalote crue avec peu de profondeur de mollusques.",
            "action": "Continuer à mijoter au moins 20 minutes. L'extraction des coquilles grillées est lente et récompense la patience."
          },
          {
            "state": "Perfect",
            "description": "Un rouge-orange vif, intensément parfumé, et profondément salé avec une douceur océanique propre et aucune amertume. Il devrait enrober l'arrière d'une cuillère d'un éclat de gélatine de mollusques.",
            "action": "Étrier, presser les coquilles et utiliser immédiatement ou refroidir sur la glace et réfrigérer jusqu'à 2 jours."
          },
          {
            "state": "Overdone",
            "description": "Un ébullition complet a rendu le stock nuageux et légèrement amer, ou il a surréduit à une pâte concentrée et salée.",
            "action": "Si le temps est nuageux mais pas amer, utilisez-le comme pour le bisque, l'étape finale de la purée lissera. Si amer, diluer avec de l'eau ou de la crème et ajuster le sel à la fin."
          }
        ]
      },
      "feelCue": "À la température de service — sans bouillir, juste à la vapeur — le stock doit se sentir presque soyeux sur la langue à partir de la gélatine et de la graisse dissoutes. Un arrière-goût métallique ou tranchant signifie qu'il a besoin de plus de crème (en bisque) ou a été trop cuit."
    }
  ]
};
