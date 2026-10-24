export default {
  "repoId": "master_french_mushroom_bourguignon_001",
  "parentRepoId": null,
  "slug": "mushroom-bourguignon",
  "author": "ForkRecipe Kitchen",
  "title": "Champignon Bourguignon",
  "description": "Un braise de champignons sauvages et cultivés remis au vin de Bourgogne jusqu'à ce que le bouillon soit épais, profondément violet, parfumé de thym — toute la gravité du boeuf bourgignon, aucun de la viande.",
  "cuisine": "Français",
  "culture": "Burgundian",
  "category": "vegetables",
  "tags": [
    "français",
    "champignon",
    "végétalien",
    "Vin rouge",
    "bourgignon"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr 20 min",
  "ratioSystem": "parts",
  "stars": 1843,
  "forks": 214,
  "contributors": 31,
  "license": "CC-BY-SA",
  "createdAt": "2024-03-10",
  "updatedAt": "2025-11-22",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 2,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Champignons mélangés (cremini, shiitake, huître royale), approximativement déchirés",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "portobello",
        "porcins"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Échalotes, classées",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "Oignons perlés"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Solvent",
      "name": "Bourgogne ou autre vin rouge sec",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "Pinot Noir",
        "Merlot"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Stocks de légumes",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "Matériel de champignons",
        "eau"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre végétal"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Fils de thym frais et feuilles de laurier",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Thym séché"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel de mer fin et poivre noir",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sear",
      "inputs": [
        "ing_01",
        "ing_05",
        "ing_07"
      ],
      "outputState": "seared_mushrooms",
      "instructions": "Chauffer l'huile d'olive dans une grande casserole à fond lourd ou un four hollandais à feu vif jusqu'à ce qu'elle mijote. Ajouter les champignons en une seule couche — travailler en lots si nécessaire. Assaisonner de sel et ne pas remuer pendant 2 minutes. Laisser les champignons libérer leur humidité et ensuite l'absorber, en développant une couche d'acajou profonde sur chaque face coupée.",
      "visualCue": {
        "primaryTarget": "Chaque morceau de champignon porte une croûte dorée profonde sur au moins un côté. Le fond du pot est sec et commence à faire preuve d'affection.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les champignons sont à vapeur et pâles, l'humidité s'accumule dans le pot. Aucune couleur n'est apparue.",
            "action": "Augmentez la chaleur et attendez — ne remuez pas. Stirring libère plus d'humidité et empêche le brunissement."
          },
          {
            "state": "Perfect",
            "description": "Riche taille acajou sur les visages plats. Fond (mèches brunes) enrobant le fond du pot. Les champignons ont diminué d'environ un tiers.",
            "action": "Transférer dans un bol et saisir le prochain lot."
          },
          {
            "state": "Overdone",
            "description": "Les champignons sont très sombres, presque noirs aux bords. Le fond du pot est presque brûlé.",
            "action": "Déglacer immédiatement avec un jet de vin. Réduire la chaleur avant le prochain lot."
          }
        ]
      },
      "feelCue": "Les champignons doivent se sentir nettement plus légers et plus denses que lorsqu'ils sont crus — l'humidité a cuit et leurs fibres se sont resserrées, comme serrer une éponge."
    },
    {
      "nodeId": "step_2",
      "action": "Sueur",
      "inputs": [
        "ing_02",
        "ing_05"
      ],
      "outputState": "softened_shallots",
      "instructions": "Dans la même casserole à feu moyen, ajouter les échalotes. Cuire en remuant occasionnellement pendant 6 à 8 minutes jusqu'à ce que les bords soient adoucis et dorés. Les échalotes doivent être translucides tout au long du cycle, mais elles doivent garder leur forme. Grattez tout fond restant avec une cuillère en bois lorsque les échalotes libèrent leur liquide.",
      "visualCue": {
        "primaryTarget": "Les échalotes sont translucides et boiteuses, bords légèrement dorés, assises dans une fine glaçure de leur propre jus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les échalotes sont toujours blanches fermes et opaques au centre. La netteté de l'allium brut est toujours dominante.",
            "action": "Continuer la cuisson à feu moyen. L'ajout du vin cessera de ramollir et laissera une bouchée crue."
          },
          {
            "state": "Perfect",
            "description": "Entièrement translucide, légèrement dorée, sucrée. Ils s'effondrent doucement lorsqu'ils sont pressés avec une cuillère.",
            "action": "Ajouter le vin et les herbes."
          },
          {
            "state": "Overdone",
            "description": "Les échalotes sont profondément brunes, se rétrécissant au caramel. Les bords attrapent.",
            "action": "Ajoutez un peu de stock pour arrêter le brunissement. La saveur sera plus douce et plus intense mais toujours utilisable."
          }
        ]
      },
      "feelCue": "La cuisine devrait se remplir d'un parfum d'oignon doux caramélisé — si vous sentez encore la netteté brute, les échalotes ont besoin de plus de temps."
    },
    {
      "nodeId": "step_3",
      "action": "Réduire",
      "inputs": [
        "softened_shallots",
        "ing_03",
        "ing_06"
      ],
      "outputState": "reduced_wine_base",
      "instructions": "Verser le vin rouge dans le pot avec les échalotes et ajouter le thym et les feuilles de laurier. Porter à feu moyen-élevé et porter à ébullition. Réduire le vin de moitié, environ 8-10 minutes. Elle fait cuire l'alcool, concentre les fruits et permet aux tanins de se moeller avant que les champignons ne se joignent.",
      "visualCue": {
        "primaryTarget": "Le vin a réduit à un sirop pourpre profond et brillant enrobant les échalotes. Le volume a diminué d'environ la moitié.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le vin est encore mince et alcoolisé. La vapeur est tranchante et abreuvante.",
            "action": "Continuez à réduire. L'ajout d'un stock permettra maintenant de piéger l'alcool et de donner une saveur dure et boueuse."
          },
          {
            "state": "Perfect",
            "description": "Le vin est concentré et brillant, sent les fruits foncés et la terre. La netteté de l'alcool a disparu. Le volume a diminué de moitié.",
            "action": "Ajouter le stock et les champignons."
          },
          {
            "state": "Overdone",
            "description": "Le vin est réduit à une glaçure collante, presque sèche. Les tannins sentent dur et brûlé.",
            "action": "Ajouter le stock immédiatement. La saveur sera très intense — vous devrez peut-être équilibrer avec une petite pincée de sucre à la fin."
          }
        ]
      },
      "feelCue": "Plongez une cuillère et laissez tomber une goutte — elle devrait former une perle distincte qui tient brièvement avant de s'étendre, ne pas disparaître instantanément dans la poêle."
    },
    {
      "nodeId": "step_4",
      "action": "Brise",
      "inputs": [
        "reduced_wine_base",
        "seared_mushrooms",
        "ing_04"
      ],
      "outputState": "braised_bourguignon",
      "instructions": "Retourner les champignons séchés dans le pot, verser dans le bouillon de légumes et remuer pour mélanger. Porter à mijoter doucement, puis réduire la chaleur à faible. Couvrir partiellement et cuire de 40 à 45 minutes, en remuant toutes les 10 minutes. Le liquide devrait maintenir une bulle lente et paresseuse dans l'ensemble de l'organisme.",
      "visualCue": {
        "primaryTarget": "Le bouillon a tourné le grenat profond et épaissi pour enrober une cuillère. Les champignons sont très tendres et ont absorbé la couleur du vin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Broth est mince et de couleur claire. Les champignons ont encore une certaine résistance quand ils sont mordus. Les saveurs sont séparées.",
            "action": "Continuer à mijoter à découvert pour se concentrer. Encore 15 minutes."
          },
          {
            "state": "Perfect",
            "description": "Le bouillon est épais, grenat et brillant. Il enrobe une cuillère et s'écoule lentement. Les champignons sont soyeux et productifs. Les arômes sont unifiés et profonds.",
            "action": "Goûtez, assaisonnez et servez."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon est réduit à une consistance épaisse, presque en pâte. Les champignons sont très doux et s'effondrent.",
            "action": "Ajouter une touche de stock pour se détendre. La saveur sera très concentrée — goût avant d'ajouter plus de sel."
          }
        ]
      },
      "feelCue": "Le bouillon doit se sentir velouté sur un bout de doigt — pas aqueux, pas collant, mais avec un corps doux qui s'accroche légèrement lorsque vous frottez vos doigts ensemble."
    }
  ]
};
