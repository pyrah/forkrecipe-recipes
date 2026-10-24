export default {
  "repoId": "master_chinese_scallion_oil_noodles_001",
  "parentRepoId": null,
  "slug": "scallion-oil-noodles",
  "author": "ForkRecipe Kitchen",
  "title": "Nouilles d'huile d'oignon de Shanghai (Cong You Ban Mian)",
  "description": "Des nouilles de blé clair jetées dans une huile d'échalote foncée et lente qui prend quarante minutes pour construire à partir d'un paquet d'oignons verts et d'une tasse d'huile — les pétoncles caramélisent à un confetti sombre, doux et croustillant tandis que l'huile absorbe toute leur force vitale, devenant quelque chose de complètement différent de n'importe quelle huile que vous avez jamais goûté. Un plat de quatre ingrédients qui insiste sur la qualité dans chacun.",
  "cuisine": "Chinois",
  "culture": "Shanghainese",
  "category": "grains",
  "tags": [
    "Shanghai",
    "nouilles",
    "scalpel",
    "simple",
    "végétalien",
    "nuit",
    "Cellier",
    "minimaliste"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "55 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Nouilles fraîches fines de Shanghai (ou lo mein séché)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "spaghettis minces",
        "nouilles ramen"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Échalons, coupés en morceaux de 5 cm",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Ciboulette chinoise (jiu cai)",
        "Échalotes"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile neutre (légume ou tournesol)",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": [
        "huile d'arachide légère"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "sauce de soja légère",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "sauce de soja foncé (lao chou)",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "sirop de sucre de roche"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_03",
        "ing_02"
      ],
      "outputState": "scallion_oil",
      "instructions": "Combiner les morceaux de pétoncle et l'huile neutre dans une petite casserole froide ou un wok – commencer par l'huile froide est essentiel. Si vous ajoutez des pétoncles à de l'huile déjà chaude, ils feront frire dur et rapide, brunissant trop rapidement avant qu'ils aient le temps de libérer leurs aromatiques dans l'huile. Placez sur le feu le plus bas possible et faites cuire 30 à 40 minutes. Les 15 premières minutes verront très peu d'activité — l'huile se réchauffera lentement et les pétoncles commenceront à s'assouplir et à se faner. De 15 à 25 minutes, les pétoncles commenceront à diminuer considérablement et vous verrez les premiers signes de brunissement aux bouts verts. De 25 à 40 minutes, les pétoncles se caraméliseront progressivement des pointes vers les racines blanches, allant de l'or à l'ambre à un brun rougeâtre profond. L'objectif est que les pétoncles deviennent presque complètement sombres, amers et croustillants, tandis que l'huile devient un ambre d'or profond et sent comme rien d'autre : un allium doux, salé, profondément caramélisé. Mélanger toutes les 5 minutes, plus fréquemment dans les 10 dernières minutes. Lorsque les morceaux de pétoncle sont uniformément brun-or foncé et croustillant, retirer de la chaleur.",
      "visualCue": {
        "primaryTarget": "Morceaux d'échon brun-or foncé qui ont rétréci à environ un quart de leur taille originale, avec des bords croustillants et frisés. L'huile qui l'entoure est un or ambré profond et légèrement trouble des sucres extraits.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pétoncles sont encore verts et flétris, pas encore brunis. L'huile est encore pâle et sent cru plutôt que doux.",
            "action": "Continuer la cuisson à feu doux. Le changement de couleur se produit dans les 10-15 dernières minutes — soyez patient. Ne pas augmenter la chaleur pour la précipiter."
          },
          {
            "state": "Perfect",
            "description": "Les échalotes sont un brun rougeâtre profond — presque la couleur des échalotes frites — et sont devenues croustillantes et frisées. L'huile est d'or ambré profond et sent intensément l'oignon vert doux et caramélisé. Une pièce devrait se briser entre les doigts quand elle est fraîche.",
            "action": "Retirer du feu et laisser refroidir pendant 5 minutes. Retirez-vous dans un pot ou un bol, en réservant les morceaux de pétoncle croustillant séparément comme garniture."
          },
          {
            "state": "Overdone",
            "description": "Les écailles sont devenues noires et acrides, et l'huile a pris une note brûlée. Toute amertume à ce stade sera transférée aux nouilles.",
            "action": "Si seulement quelques morceaux sont noirs, souchez immédiatement et jetez juste ces morceaux. Si l'huile elle-même sent brûlée, jetez tout et recommencez."
          }
        ]
      },
      "feelCue": "À la marque de 30 minutes, arrachez soigneusement un morceau d'échon avec des baguettes et laissez refroidir sur le comptoir pendant 30 secondes. Il doit se sentir rigide et croustillant quand on le pince — comme une fine puce — pas souple et souple. Cette croustillante vous dit que l'eau a été entièrement cuite et les sucres ont caramélisé."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "scallion_oil",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "scallion_sauce",
      "instructions": "Dans un grand bol à mélanger qui servira aussi de bol à jeter pour les nouilles, combiner l'huile chaude de pétoncle (environ 3 cuillères à soupe par portion), la sauce de soja léger, la sauce de soja foncé et le sucre. Mélanger avec une cuillère ou des baguettes jusqu'à ce que le sucre soit complètement dissous. La sauce sera un liquide foncé, brillant, très aromatique — le soja foncé apporte couleur et profondeur, le soja clair fournit salinité et luminosité. Goûtez-le: il doit être très salé et intensément sucré-savori, parce qu'il se diluera de façon spectaculaire quand il sera jeté avec les nouilles d'amidon. Le rapport de l'huile de pétoncle à la sauce de soja est important: trop d'huile et les nouilles sont grasses; trop de soja et elles sont une dimension salée. Ajustez-vous à votre préférence – plus de soja foncé pour une couleur plus profonde et une saveur sucrée en mélasse, plus de soja léger pour un résultat plus brillant et plus salé.",
      "visualCue": {
        "primaryTarget": "Une sauce acajou foncée et brillante qui tourne ensemble en brun foncé uniforme sans granules de sucre visibles. L'huile et le soja devraient être suffisamment émulsifiés pour se déplacer ensemble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sucre est encore visiblement granulé au fond du bol et le soja et l'huile se séparent, l'huile flotte sur le dessus.",
            "action": "Mélanger vigoureusement pendant 30 secondes jusqu'à dissolution du sucre. La chaleur résiduelle de l'huile chaude aide."
          },
          {
            "state": "Perfect",
            "description": "Acajou foncé uniforme, parfumé d'échalote caramélisée et de soja. La sauce se déplace comme un seul liquide légèrement visqueux. Lorsque vous plongez une baguette dedans et le maintenez, la sauce coule dans un ruisseau lent et continu.",
            "action": "Ajouter immédiatement les nouilles cuites chaudes."
          },
          {
            "state": "Overdone",
            "description": "Sans objet à ce stade de mélange — mais si l'huile de pétoncle a complètement refroidi avant mélange, l'huile et le soja ne seront pas émulsifiés. Chauffer doucement l'huile avant de mélanger si cela se produit.",
            "action": "Chauffer l'huile de pétoncle pendant 30 secondes à feu doux avant de combiner."
          }
        ]
      },
      "feelCue": "Plongez un doigt dans la sauce et frottez-le entre vos doigts — il devrait se sentir lissé et enduit, comme un vernis mince, pas aqueux. Cette viscosité provient des sucres caramélisés de pétoncle qui se sont dissous dans l'huile pendant la cuisson lente."
    },
    {
      "nodeId": "step_3",
      "action": "Mélanger",
      "inputs": [
        "ing_01",
        "scallion_sauce",
        "ing_02"
      ],
      "outputState": "plated_scallion_oil_noodles",
      "instructions": "Cuire les nouilles dans un grand pot d'eau chaudement bouillante, légèrement salée jusqu'à ce qu'elles viennent de se terminer — les nouilles fraîches de Shanghai prennent de 2 à 3 minutes, séchées 4 à 5 minutes, de fines spaghettis 7 à 8 minutes. Drainez bien, secouez la calandre. Transférer immédiatement dans le bol de la sauce au pétoncle alors que les nouilles sont encore très chaudes — la chaleur aide la sauce à enrober chaque brin. Mélanger vigoureusement et rapidement avec des baguettes ou des pinces, soulever et plier les nouilles en continu pendant 60 à 90 secondes jusqu'à ce que chaque brin soit uniformément enduit dans la sauce foncée et brillante. Les nouilles chaudes absorberont le soja rapidement, donc travailler rapidement. Goûtez et ajustez : plus de soja pour le sel, plus d'huile pour la richesse, quelques gouttes d'huile de pétoncle pour l'arôme. Transférer dans une assiette ou un bol et disperser une quantité généreuse des morceaux de pétoncle croustillant réservés sur le dessus. Servir immédiatement — les nouilles à l'huile de pétoncle sont un plat du moment, et la texture se détériore rapidement.",
      "visualCue": {
        "primaryTarget": "Nouilles foncées de couleur acajou qui sont brillantes et uniformément enrobées, avec des durs d'échon brun vif et croustillant dispersés sur la surface. Pas de nouilles pâles et déshabillées visibles. Le bol sent intensément l'allium caramélisé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les nouilles sont inégalement enrobées — un peu de brun foncé, un peu encore pâle et sans soja. La sauce est mise au fond du bol.",
            "action": "Continuer à jeter pendant 30 secondes, en soulevant les nouilles du bas jusqu'à ce qu'elles soient uniformes."
          },
          {
            "state": "Perfect",
            "description": "Chaque brin est une acajou profonde et uniforme. Les nouilles sont brillantes et séparées, non empilées. La garniture est croquante, foncée et aromatique. Lorsque vous soulevez une portion de baguettes, elle se présente en brins lâches recouverts de sauce.",
            "action": "Mangez immédiatement, en ramassant des nouilles et des pétoncles dans chaque bouchée."
          },
          {
            "state": "Overdone",
            "description": "Les nouilles se sont assises trop longtemps après avoir jeté et absorbé toute la sauce — elles ont l'air sèches et la garniture de pétoncles est tombée de la vapeur.",
            "action": "Arrosez un peu d'huile de pétoncle supplémentaire au-dessus du dessus et jetez de nouveau brièvement pour re-coat."
          }
        ]
      },
      "feelCue": "Lorsque vous ramassez un enchevêtrement de nouilles avec des baguettes, elles doivent glisser et glisser légèrement l'une contre l'autre. S'ils se collent comme des pâtes laissées trop longtemps, il n'y a pas assez d'huile dans la sauce."
    }
  ]
};
