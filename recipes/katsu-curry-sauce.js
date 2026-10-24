export default {
  "repoId": "master_japanese_katsu_curry_sauce_001",
  "parentRepoId": null,
  "slug": "katsu-curry-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce de Curry Katsu",
  "description": "Une sauce de curry japonaise épaisse, dorée à l'ambre, construite sur des oignons et des pommes caramélisés lentement, épaissie par des blocs de roux achetés en magasin et douce avec un faible mijoter jusqu'à ce qu'elle verse comme de la soie sur une coupe panée — douce, légèrement sucrée et parfumée avec une note de curry chaude qui ne déborde jamais. C'est la cuisine yoshiku japonaise de style occidental à son plus réconfortant.",
  "cuisine": "Japonais",
  "culture": "Yoshoku japonais",
  "category": "sauces",
  "tags": [
    "Japonais",
    "curry",
    "sauce",
    "yoshiku",
    "confort",
    "légère",
    "katsu"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "45 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Allium",
      "name": "Oignon (2 rond, tranché finement)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Pommes (1 petite, râpée ou finement dés)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "Carotte râpée",
        "sauce de pomme (utiliser 60g)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "huile neutre sans lait"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Blocs roux de curry japonais (S&B Golden Curry, feu moyen)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "Blocs de curry du Vermont",
        "roux maison avec poudre de curry et farine"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Stock de poulet (ou dashi)",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "eau (la sauce sera plus légère dans le corps)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "sauce Tonkatsu (ou sauce Worcestershire)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "sauce HP",
        "kécap manis (utiliser la moitié de la quantité)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "sauce soja",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Ail (2 girofles hachés)",
      "ratioValue": 12,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Caraméliser",
      "inputs": [
        "ing_01",
        "ing_03"
      ],
      "outputState": "caramelized_onions",
      "instructions": "Faire fondre le beurre dans une casserole à fond lourd ou un four hollandais à feu moyen. Ajouter les oignons tranchés avec une pincée de sel et cuire en remuant toutes les 2 à 3 minutes, pendant 15 à 20 minutes au total. Les oignons vont d'abord devenir translucides, puis dorés, puis commencer à développer des taches ambres et un arôme doux, presque noisette. Ne précipitez pas cette étape avec une chaleur élevée — la caramélisation lente construit la fondation douce qui distingue le curry japonais des currys de style indien plus vif. Après 15 minutes, ajouter l'ail haché et cuire encore 2 minutes.",
      "visualCue": {
        "primaryTarget": "Les oignons ont diminué à moins d'un tiers de leur volume de départ et sont un ambre d'or profond, la couleur du miel foncé, avec quelques brins caramélisés accrochés au fond de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont translucides et doux, mais encore d'or pâle. A peine n'importe quelle couleur sur le fond de la poêle. Ça sent bon mais pas encore grillé.",
            "action": "Continuer la cuisson — la réaction de Maillard n'a pas encore complètement évolué. Résistez à l'envie d'élever la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Ambre profonde, confiture, odeur très douce. Volume réduit à une fine couche à travers la casserole. Pan bas a des dépôts de caramel qui se lèvent facilement lorsque le liquide est ajouté.",
            "action": "Ajouter l'ail et cuire 2 minutes, puis ajouter la pomme râpée."
          },
          {
            "state": "Overdone",
            "description": "Les oignons sont brun foncé à noir dans les taches, odeur de sucre brûlé. Le fond de la poêle a une croûte carbonisée qui ne se lève pas.",
            "action": "Déglacer avec du stock de 50ml, racler les morceaux sombres qui ne sont pas noir-brûlé. Choisissez les pièces entièrement carbonisées."
          }
        ]
      },
      "feelCue": "Mélanger et écouter — caraméliser correctement les oignons font un doux étourdissement qui baisse en hauteur lorsque l'eau s'évapore, passant d'un sifflement aqueux à un murmure sec et doux. Quand il semble calme et que la cuillère ne rencontre presque aucune résistance liquide, la couleur est sur le point de se développer rapidement."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "caramelized_onions",
        "ing_02",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "curry_base",
      "instructions": "Ajouter la pomme râpée aux oignons caramélisés et remuer 1 minute pour faire cuire n'importe quel bord cru. Verser le bouillon de poulet, la sauce tonkatsu et la sauce soja. Faire mijoter doucement à feu moyen, en grattant tous les morceaux caramélisés du fond de la poêle — ce sont des arômes purs. Laisser mijoter à découvert pendant 10 minutes, en remuant occasionnellement, jusqu'à ce que la pomme se soit dissoute dans la sauce et que le liquide ait légèrement diminué. La base doit sentir riche, sucrée et salée, sans note de pomme brute nette restante.",
      "visualCue": {
        "primaryTarget": "Un bouillon doré-brun avec une profondeur de couleur visible, pas de morceaux distincts de pomme, et une surface qui mijote doucement avec de petites bulles autour du bord.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pomme est encore dans des morceaux distincts; le bouillon est pâle et aqueux; l'odeur brute persiste.",
            "action": "Continuer à mijoter 5 minutes de plus et écraser les morceaux de pomme restants contre le côté de la poêle."
          },
          {
            "state": "Perfect",
            "description": "Le bouillon est d'or profond, la pomme s'est dissoute et le liquide sent complexe et sucré. Une cuillère est mince.",
            "action": "Réduire la chaleur à très faible et ajouter les blocs de courgettes."
          },
          {
            "state": "Overdone",
            "description": "Broth a trop réduit et commence à brûler aux bords.",
            "action": "Ajouter 100ml de bouillon supplémentaire et réduire immédiatement la chaleur."
          }
        ]
      },
      "feelCue": "Plongez une cuillère et goûtez la base avant d'ajouter le roux — il doit goûter agréablement sucré et salé mais trop mince, presque comme une soupe d'oignon raffinée. Le roux transformera cette fondation."
    },
    {
      "nodeId": "step_3",
      "action": "Faire réduire",
      "inputs": [
        "curry_base",
        "ing_04"
      ],
      "outputState": "finished_curry_sauce",
      "instructions": "Briser les blocs de curry roux en morceaux et les ajouter à la base mijotante du feu. Incorporer une cuillère en bois jusqu'à ce que chaque bloc soit complètement dissous et qu'il ne reste plus de grumeaux, ce qui prend 2 à 3 minutes de brassage du patient. Retourner à feu très doux et laisser mijoter doucement pendant 10 minutes, en remuant fréquemment pour éviter les brûlures au fond. La sauce s'épaissira de façon spectaculaire lorsque l'amidon dans le roux sera cuit. Il devrait enrober une cuillère fortement et verser dans un cours d'eau lent et contrôlé. Goûtez et ajustez avec une pincée de sel ou une touche de sauce de soja si nécessaire. La sauce finie doit avoir un goût très salé, légèrement épicé et légèrement arrondi, non salé ni unidimensionnel.",
      "visualCue": {
        "primaryTarget": "Une sauce ambre épaisse, brillante et profonde qui verse dans un ruban lent d'une louche inclinée, enrobe l'arrière d'une cuillère épais, et a une surface lisse et uniforme sans grumeaux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et les blocs roux n'ont pas complètement dissous: morceaux visibles, couleur pâle, consistance aqueuse.",
            "action": "Continuer à remuer le feu jusqu'à ce que tous les morceaux se dissolvent, puis revenir à feu doux et cuire encore 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "Deep ambre-or, assez épais pour enrober une cuillère dans un film distinct, coule lentement, sent le curry grillé et l'oignon caramélisé. Pas de bosses.",
            "action": "Maintenez au chaud sur le feu le plus bas, en remuant toutes les quelques minutes, jusqu'à ce qu'il soit prêt à servir. Peut être fait un jour d'avance — réchauffe magnifiquement avec un jet de stock pour ajuster la consistance."
          },
          {
            "state": "Overdone",
            "description": "La sauce s'est épaissie à la pâte et s'accroche au pot dans des feuilles lourdes. Une odeur brûlée.",
            "action": "Ajouter 100 ml de bouillon, remuer vigoureusement le feu jusqu'à ce qu'il soit lisse, puis goûter à l'assaisonnement."
          }
        ]
      },
      "feelCue": "Déposer une cuillère sur l'arrière d'une assiette froide et basculer — la sauce doit s'écouler lentement et tenir son bord proprement comme une ganache au chocolat chaud, ne pas se propager instantanément comme de l'eau ou refuser de bouger comme de la pâte."
    }
  ]
};
