export default {
  "repoId": "master_korean_kimchi-jjigae-broth_001",
  "parentRepoId": null,
  "slug": "kimchi-jjigae-broth",
  "author": "ForkRecipe Kitchen",
  "title": "Kimchi Jjigae Broth",
  "description": "Un bouillon rouge rouille qui frappe avec une profondeur fermentée funky avant que la graisse de porc enrobe votre langue — construit à partir de kimchi vieilli qui s'effondre dans un stock soyeux et adhésif qui sent l'intérieur du réfrigérateur d'une grand-mère coréenne de la meilleure façon possible.",
  "cuisine": "Coréen",
  "culture": "Cuisine maison coréenne",
  "category": "stocks",
  "tags": [
    "kimchi",
    "ragoût",
    "coréen",
    "porc",
    "fermenté"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 4,
    "bitter": 1,
    "umami": 5,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Choux de napa kimchi (âgés d'au moins 2 semaines), hachés approximativement",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Porc, ventre ou épaule, coupé en cubes de 3 cm",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "tofu ferme pour végétarien"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Dashi anchois-kelp ou eau",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "Stock de poulet à faible teneur en sodium"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Saumure de Kimchi (réservée du pot de kimchi)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Gochugaru (poivrons rouges coréens)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "Doenjang (pâte de soja fermentée)",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": [
        "miso blanc"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sauce de poisson",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce de soja"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Ail, haché (4 girofles)",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Huile de sésame, pour finir",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Échalote, tranchée sur le biais",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saisir",
      "inputs": [
        "ing_02"
      ],
      "outputState": "browned_pork",
      "instructions": "Mettre un pot à fond lourd ou un dolsot coréen en faïence à feu moyen-élevé sans huile. Ajouter les cubes de porc en une seule couche et les laisser intacts pendant 2 à 3 minutes. Vous voulez rendre gras pooling dans le pot et croûtes brun caramel sur au moins deux côtés — cette base Maillard est ce qui donne le corps de bouillon. Tourner une fois et brunir le côté opposé pendant 90 secondes. Le porc ne doit pas être cuit.",
      "visualCue": {
        "primaryTarget": "Croûte brun acajou sur au moins deux faces de chaque cube. La graisse s'est transformée en pot et le porc s'étourne fort dans sa propre graisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande est gris-blanc et vapeur plutôt que mer. La graisse n'a pas rendu.",
            "action": "Levez la chaleur et arrêtez de toucher la viande — la patience verse ici des dividendes en profondeur de bouillon."
          },
          {
            "state": "Perfect",
            "description": "Des croûtes brunes profondes, de la graisse blanchie, le pot sent la viande rôtie. Du porc encore cru au centre.",
            "action": "Réduire le feu à moyen et ajouter l'ail et le gochugaru."
          },
          {
            "state": "Overdone",
            "description": "La croûte devient très sombre ou brûlante. Le fond de la marmite est brûlant.",
            "action": "Ajouter immédiatement une touche de dashi pour déglacer, puis procéder. Le fond est encore parfumé, sinon noir."
          }
        ]
      },
      "feelCue": "Vous devriez entendre un étourdissement soutenu et agressif au moment où le porc frappe le pot — un bruit calme ou vapeur signifie que le pot ou le porc est trop humide; faire sécher le porc et augmenter la chaleur."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "browned_pork",
        "ing_08",
        "ing_05"
      ],
      "outputState": "bloomed_base",
      "instructions": "Poussez le porc d'un côté. Déposer l'ail et le gochugaru dans la graisse rendue au centre du pot. Mélanger et cuire pendant 60 à 90 secondes jusqu'à ce que l'ail soit parfumé mais non doré et que le gochugaru ait transformé la graisse en rouge brique vif. Cela fleurit les composés de capsaïcine solubles dans la graisse et ajoute de la couleur au bouillon dès le début.",
      "visualCue": {
        "primaryTarget": "La graisse est uniformément rouge-orange. L'ail sent doux et cuit, pas vif. Pas de taches brun foncé sur l'ail.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le gras est encore jaune orange. L'ail cru sent encore aiguisé et piquant.",
            "action": "Continuer à remuer à feu moyen pendant 30 secondes."
          },
          {
            "state": "Perfect",
            "description": "La graisse est riche en briques rouges. L'ail est adouci et sucré. La cuisine sent le chili grillé.",
            "action": "Ajouter le kimchi et mélanger pour enrober l'huile rouge."
          },
          {
            "state": "Overdone",
            "description": "L'ail est bronzé ou brun. Gochugaru s'est obscurci et sent amer.",
            "action": "Ajouter kimchi immédiatement et déglacer — le bouillon absorbera et apaisera l'amertume."
          }
        ]
      },
      "feelCue": "La graisse doit sentir chaud et profondément épicé, pas acride — une odeur de chili brûlé signifie que la chaleur est trop élevée."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "bloomed_base",
        "ing_01",
        "ing_04",
        "ing_06"
      ],
      "outputState": "braised_kimchi",
      "instructions": "Ajouter le kimchi haché et sa saumure réservée, puis le doenjang. Mélanger tout ensemble, enrober le kimchi dans la graisse rouge. Élevez le feu à feu moyen et faites cuire le kimchi pendant 5 à 7 minutes, en remuant occasionnellement. Les kimchis commenceront à s'assouplir et à s'amplifier de rouge-orange vif à un maroon brique plus foncé. L'odeur passe d'une fermentation brusque à une fermentation plus ronde et plus complexe.",
      "visualCue": {
        "primaryTarget": "Kimchi s'est flétrie et a foncé dans un maroon de brique. La casserole sent le chou fermenté cuit — punchy et complexe, pas cru.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Kimchi est encore orange vif et à peine flétri. La saumure sent cru et acide.",
            "action": "Cuire encore 2 à 3 minutes en remuant. Le kimchi a besoin de frire un peu dans la graisse."
          },
          {
            "state": "Perfect",
            "description": "Kimchi est visiblement adouci, plus foncé et parfumé. Le doenjang s'est dissous dans le mélange et sent savoureux.",
            "action": "Verser le dashi et faire bouillir la chaleur."
          },
          {
            "state": "Overdone",
            "description": "Kimchi s'est effondré et commence à rester. Le pot sent brûlé.",
            "action": "Ajouter immédiatement le dashi et gratter le fond. La saveur est concentrée mais pas perdue."
          }
        ]
      },
      "feelCue": "Lorsque vous appuyez sur un morceau de kimchi avec une cuillère en bois, il doit donner facilement et se sentir soyeux plutôt que croustillant ou sournois."
    },
    {
      "nodeId": "step_4",
      "action": "Mijoter",
      "inputs": [
        "braised_kimchi",
        "ing_03",
        "ing_07"
      ],
      "outputState": "developed_broth",
      "instructions": "Verser le dashi anchois-kelp et la sauce de poisson. Porter à ébullition vigoureuse à feu vif, puis laisser mijoter doucement et régulièrement. Cuire à découvert pendant 20 à 25 minutes. Le bouillon diminuera légèrement et le porc deviendra tendre. Écraser toute mousse grise qui monte dans les 5 premières minutes — après cela, la hausse de graisse est aromatisée et doit être laissée dedans.",
      "visualCue": {
        "primaryTarget": "Broth est un rouge brique profond, légèrement opaque, avec des gouttelettes de graisse qui brillent à la surface. Les cubes de porc sont tendres lorsqu'ils sont pressés avec une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est mince et a encore un goût vif et kimchi acide. Le porc mâche.",
            "action": "Continuez à mijoter — 10 minutes de plus le tricoteront ensemble."
          },
          {
            "state": "Perfect",
            "description": "Broth a corps, une profondeur ronde fermentée, et le porc donne à la pression douce. La graisse a partiellement émulsifié dans le liquide, lui donnant une sensation soyeuse sur la lèvre.",
            "action": "Goûter et assaisonner, puis finir avec de l'huile de sésame."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon a été réduit à une pâte très épaisse. Kimchi se désintègre.",
            "action": "Ajouter 1/4 tasse d'eau chaude pour le ramener, laisser mijoter 2 minutes pour ré-intégrer."
          }
        ]
      },
      "feelCue": "Plonger une cuillère et laisser le bouillon enrober le dos — il devrait laisser un film mince, légèrement collant plutôt que de draper comme de l'eau propre."
    },
    {
      "nodeId": "step_5",
      "action": "Assaisonner",
      "inputs": [
        "developed_broth",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_kimchi_jjigae_broth",
      "instructions": "Goûtez le bouillon et ajustez-le : si vous avez besoin de sel, ajoutez la sauce de poisson en tranches 1/4-teaspon plutôt que le sel de table. Si elle est trop aigre, une petite pincée de sucre (pas dans la recette — utiliser le jugement) l'entourera. Si elle est plate, ajoutez un peu plus de saumure kimchi. Retirer du feu et arroser l'huile de sésame sur la surface — ne pas l'agiter complètement, laissez - le mettre en morceaux. Éparpillement de pétoncle sur le dessus et servir immédiatement dans la casserole.",
      "visualCue": {
        "primaryTarget": "Glissements de surface avec piscines de sésame. L'échalon est vert vif contre le bouillon rouge foncé. La vapeur porte un arôme chaud, complexe, fermenté et épicé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Huile de sésame non ajoutée. C'est cru. L'assaisonnement du bouillon n'a pas été goûté et ajusté.",
            "action": "Terminer l'étape d'assaisonnement — l'huile de sésame est structurelle à l'arôme, pas facultatif."
          },
          {
            "state": "Perfect",
            "description": "Broth est complexe, lip-smacking, et profondément salé avec une finition de chili propre. L'oignon ajoute un contraste frais.",
            "action": "Servir dans le pot immédiatement pendant qu'il est encore à mijoter."
          },
          {
            "state": "Overdone",
            "description": "Trop d'huile de sésame a rendu le bouillon gras et l'arôme de sésame domine.",
            "action": "Blot surface avec une serviette en papier ou ajouter une éclaboussure plus de dashi pour diluer."
          }
        ]
      },
      "feelCue": "Le bouillon fini devrait faire saliver l'intérieur de vos joues immédiatement sur le premier goût — sel, acide, et umami tous frappent simultanément avant que la chaleur de chili ne s'accumule sur le dos de la gorge."
    }
  ]
};
