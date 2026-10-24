export default {
  "repoId": "master_moroccan_harira_001",
  "parentRepoId": null,
  "slug": "harira",
  "author": "ForkRecipe Kitchen",
  "title": "Harira",
  "description": "La soupe aux tomates, aux lentilles et aux pois chiches du Maroc a été mangée pour briser le jeûne du Ramadan: l'agneau, les lentilles et les pois chiches mijotés de cannelle, de gingembre et de coriandre, épaissies d'une pâte de farine-tomate appelée tedouira et éclaircies de citron conservé.",
  "cuisine": "Maroc",
  "culture": "Maroc",
  "category": "proteins",
  "tags": [
    "Maroc",
    "agneau",
    "lentilles",
    "pois chiches",
    "tomates",
    "épicé",
    "ramadan"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Épaule d'agneau, coupée en cubes de 2 cm",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "cou d'agneau osseux",
        "mandrin de boeuf"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon jaune, en dés",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "oignon blanc"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Starch",
      "name": "Lentilles vertes ou brunes, rincées",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "lentilles rouges (réduire le temps de cuisson)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Protein",
      "name": "Pois chiches cuits (ou en conserve, égouttés)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "haricots blancs en conserve"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Tomates râpées, râpées ou en conserve broyées",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "Passata"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "beurre"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Gingembre moulu",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "gingembre frais, râpé fin"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Herb",
      "name": "Coriandre fraîche, hachée (tiges et feuilles séparées)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Herb",
      "name": "Persil à feuilles plates, haché",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Acid",
      "name": "Ronde de citron conservée, moelle blanche enlevée, hachée",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "jus de citron frais, 2 c. à soupe"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Binder",
      "name": "Farine à usage général (pour tedouira)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Farine de pois chiches"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Liquid",
      "name": "Eau froide (pour tedouira, fouettée avec de la farine)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_16",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_17",
      "role": "Liquid",
      "name": "Stock d'eau ou d'agneau léger",
      "ratioValue": 1500,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sear",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_16"
      ],
      "outputState": "spiced_lamb_base",
      "instructions": "Mettre un grand pot lourd (au moins 5 litres) à feu moyen-vif et ajouter l'huile d'olive. Lorsque l'huile mijote, ajouter les cubes d'agneau en une seule couche — ne pas fouler ou la viande va vapeur plutôt que de semer. Faire brunir sur deux ou trois côtés, environ 3 minutes de chaque côté, en développant une croûte acajou profonde. Retirez l'agneau brun dans une assiette. Dans la même casserole, réduire le feu à moyen et ajouter l'oignon en dés avec une pincée de sel. Cuire en grattant le fond pendant 5 à 7 minutes jusqu'à ce que l'oignon soit doux et translucide. Ajouter les tiges de coriandre (réserver les feuilles), la cannelle, le gingembre, le curcuma et le poivre noir directement à l'oignon. Mélanger et faire frire les épices pendant 60 à 90 secondes jusqu'à ce qu'elles sentent intensément parfumées et qu'elles aient séché toute autre humidité d'oignon. Retournez l'agneau mariné dans le pot et remuez pour enrober.",
      "visualCue": {
        "primaryTarget": "Les cubes d'agneau portent une couche sombre sur leurs visages exposés. L'oignon est doux d'or et les épices ont fleuri dans une pâte aromatique foncée s'accrochant à la viande et à l'oignon, avec la base de pot montrant un fond brun-ambre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'agneau est gris et cuit à la vapeur plutôt que bruni; l'oignon est encore cru et vif; les épices sentent la poussière plutôt que la floraison.",
            "action": "Faire revenir l'agneau par lots et faire cuire l'oignon plus longtemps; ne pas précipiter l'étape de floraison — épices frites à sec avec l'oignon est ce qui construit la base de saveur."
          },
          {
            "state": "Perfect",
            "description": "Sear acajou profond sur l'agneau, oignons dorés, épices parfumées et cuites à sec contre le pot chaud. La chambre sent une cuisine marocaine.",
            "action": "Ajouter les tomates, l'eau et les lentilles immédiatement avant que les épices ne crèvent."
          },
          {
            "state": "Overdone",
            "description": "Les épices sont noires aux bords et sentent l'amertume; la base du pot est passée de l'affection à l'omble.",
            "action": "Ajoutez immédiatement un jet d'eau pour déglacer et arrêter la brûlure; goûtez — si les épices sont vraiment amères, vous pourriez avoir besoin de recommencer."
          }
        ]
      },
      "feelCue": "Lorsque les épices entrent dans le pot, elles doivent s'échauffer dans la graisse résiduelle et l'humidité de l'oignon. Vous devriez sentir une vague de parfums chauds et complexes frapper votre visage — cannelle, gingembre et terre tout d'un coup. Si vous ne sentez rien, le pot n'est pas assez chaud."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "spiced_lamb_base",
        "ing_03",
        "ing_05",
        "ing_17"
      ],
      "outputState": "simmering_soup",
      "instructions": "Verser les tomates râpées ou concassées sur l'agneau épicé et remuer pour les combiner, en grattant tout fond de la casserole. Ajouter les lentilles rincées et verser dans l'eau ou le bouillon d'agneau. Porter à ébullition vigoureuse à feu vif, puis réduire à une mijotée régulière et douce — couvercle légèrement ajar. Éjaculez toute mousse grise qui se lève dans les dix premières minutes ; c'est une protéine sanguine coagulée de l'agneau et vous voulez qu'elle sorte de la surface pour un bouillon propre. Laisser mijoter pendant 45 à 50 minutes, en remuant de temps en temps, jusqu'à ce que les lentilles se soient complètement adoucies et commencent à se dissoudre dans le bouillon et que l'agneau soit complètement tendre et productif. La soupe aurait dû diminuer et épaissir légèrement à partir de l'amidon de lentilles.",
      "visualCue": {
        "primaryTarget": "Une soupe rouge rouille profonde avec des lentilles qui se sont adoucies jusqu'à presque bouillir, un agneau qui tombe à l'écart sous la pression de la cuillère, et une surface avec un motif doux et paresseux aux bords plutôt qu'un ébullition.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les lentilles sont encore fermes et résistent à la cuillère; les cubes d'agneau sont mâcheux plutôt que de donner; le bouillon est mince et les tomates ont un goût vif et cru.",
            "action": "Continuer à mijoter — l'amidon de lentilles a besoin de temps pour cuisiner et adoucir; ne pas précipiter à feu vif, ce qui va durcir l'agneau."
          },
          {
            "state": "Perfect",
            "description": "Les lentilles se sont dissoutes dans le bouillon, l'épaississant naturellement; l'agneau se sépare avec une pression douce; la tomate s'est membrée à une richesse profonde et douce. La soupe recouvre légèrement l'arrière d'une cuillère.",
            "action": "Incorporer les pois chiches et préparer la tedouira."
          },
          {
            "state": "Overdone",
            "description": "La soupe a trop bouilli; elle est très épaisse et collante; les cubes d'agneau ont séché malgré leur immersion.",
            "action": "Ajouter plus d'eau chaude pour restaurer la consistance, le goût et la saison."
          }
        ]
      },
      "feelCue": "Goûtez le bouillon à la marque de 40 minutes — il aurait dû passer d'un liquide de tomate fine et tranchant à quelque chose de plus profond et plus riche, avec l'amidon de lentilles créant un très léger revêtement sur votre langue. L'agneau doit glisser entre deux cuillères sans effort."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "ing_14",
        "ing_15"
      ],
      "outputState": "tedouira",
      "instructions": "Dans un petit bol, fouetter la farine tout-usage avec l'eau froide jusqu'à ce qu'elle soit complètement lisse et sans grumeaux – c'est la tedouira, l'épaississant traditionnel d'Harira et l'une des choses qui la rend nettement marocaine plutôt qu'une soupe générique de lentilles. L'eau froide est essentielle; l'eau chaude commence à cuire l'amidon et crée des morceaux. fouetter vigoureusement, en partant du centre et en travaillant vers l'extérieur, et mettre le bol pour vérifier les coins où la farine sèche se cache. Qu'il reste 2 minutes, puis fouetter à nouveau — les morceaux restants apparaîtront. Un lisier blanc laiteux propre et parfaitement lisse est ce que vous cherchez.",
      "visualCue": {
        "primaryTarget": "Un lisier fin parfaitement lisse, blanc laiteux, sans grumeaux visibles, particules ou farine sèche; il doit verser comme de la crème légère dans le bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux visibles de farine sèche; le lisier semble granuleux lorsqu'il est tenu à la lumière.",
            "action": "Continuez à fouetter vigoureusement ou à passer à travers un tamis à mailles fines et à fouetter à nouveau; une tedouira grumelée fait de la soupe grumelée."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, coule comme de la crème fine, blanc pur, sent peu la farine crue. Lorsqu'il est versé dans une cuillère, il enrobe uniformément sans texture.",
            "action": "Ajouter les pois chiches à la soupe, puis verser dans la tedouira immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La boue a été faite avec de l'eau chaude ou chaude; elle a commencé à cuire et s'épaissit déjà inégalement dans le bol.",
            "action": "Whisk avec de l'eau froide à partir de zéro — un lisier prégélatinisé s'écrasera mal quand il frappera la soupe chaude."
          }
        ]
      },
      "feelCue": "Frottez une goutte de tedouira entre vos doigts — il devrait se sentir lisse et lisse, comme de la colle fine, avec absolument aucune sensation gritty de farine non dissoute. Tout grain signifie qu'il lui faut plus de fouet."
    },
    {
      "nodeId": "step_4",
      "action": "Finition",
      "inputs": [
        "simmering_soup",
        "tedouira",
        "ing_04",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "finished_harira",
      "instructions": "Ajouter les pois chiches à la soupe à mijoter et mélanger. Alors que la soupe est à mijoter régulièrement (sans bouillir), verser dans la tedouira dans un ruisseau lent et régulier tout en remuant constamment avec une longue cuillère en grands cercles. Verser lentement et remuer continuellement — c'est le mouvement qui empêche les grumeaux. La soupe s'épaissira nettement en 2 à 3 minutes au fur et à mesure que l'amidon de farine se prépare. Conservez-le à une mijotée douce pendant 5 minutes pour cuire complètement la farine; la farine crue fera de la soupe un goût féculent plutôt que soyeux. Dans la dernière minute, mélanger la croûte de citron, les feuilles de coriandre hachées et le persil à feuilles plates. Goûtez et ajustez le sel. Servir immédiatement dans des bols profonds — Harira n'attend personne.",
      "visualCue": {
        "primaryTarget": "Une soupe épaisse, rouge rouille aux couleurs profondes avec des pois chiches et de l'agneau visibles, des taches brillantes d'herbe verte à travers tout, et un corps brillant et cohésif qui part comme du velours quand la cuillère est tirée à travers elle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La soupe est encore fine et aqueuse après l'ajout de la tedouira; les herbes sont simplement brassées et le citron conservé est cru et tranchant.",
            "action": "Continuer à mijoter 5 minutes de plus — la farine a besoin de chaleur pour se gélatiniser complètement; remuer fréquemment pour éviter que la soupe plus épaisse ne brûle à la base."
          },
          {
            "state": "Perfect",
            "description": "Une soupe épaisse, brillante et aromatisée qui enveloppe la cuillère d'une couche riche et veloutée. Les herbes sont vert vif. La saveur est aigre, réchauffante, profondément savore, et complexe — tomate douce, épices chaudes, herbes vives, et la note saline-citrus particulière de citron conservé.",
            "action": "Servir immédiatement avec des dattes et des msémens (flatbread flaky) comme le dicte la tradition."
          },
          {
            "state": "Overdone",
            "description": "La soupe est si épaisse qu'elle est devenue un porridge dense qui colle dans les griffes; le goût de la farine est encore présent malgré une longue cuisson; la couleur s'est assombrie à un brun inappétissant.",
            "action": "Arroser d'eau chaude ou de bouillon, remuer vigoureusement, goûter et refaire la saison. Si le goût de la farine crue persiste, continuer à mijoter avec le couvercle."
          }
        ]
      },
      "feelCue": "Plongez une cuillère et laissez la soupe retomber dans la casserole — elle devrait tomber dans un ruban épais et lisse qui tient une seconde avant de se fondre. Trop mince et il verse comme de l'eau; trop épais et il tombe dans de lourdes touffes. La bonne consistance est quelque part entre la soupe à la crème et un ragoût léger."
    }
  ]
};
