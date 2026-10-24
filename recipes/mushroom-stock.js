export default {
  "repoId": "master_international_mushroom_stock_001",
  "parentRepoId": null,
  "slug": "mushroom-stock",
  "author": "ForkRecipe Kitchen",
  "title": "Stock de champignons",
  "description": "Un stock d'umami végétalien construit à partir de champignons séchés, aromatiques et kombu — ambre foncé et profondément salé, avec une terre propre, plancher de forêt qui enrichit les soupes, risottos et braises.",
  "cuisine": "internationaux relatifs",
  "culture": "internationaux relatifs",
  "category": "stocks",
  "tags": [
    "stock",
    "végétalien",
    "végétarien",
    "champignon",
    "umami",
    "Sans gluten"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Champignons de porcins séchés",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Morilles séchées",
        "Matsutake séché"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Champignons shiitake séchés",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "champignons huîtres séchés"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Glutamate",
      "name": "Kombu (poule séchée), propre",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "1 c. à thé blanc miso remué à la fin"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon jaune (chaud, non pelé)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "Blancs poireaux"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Pâtes de céleri avec feuilles",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Gousses d'ail (crues, non pelées)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Thym séché"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Maïs de poivre noir (légèrement craqué)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 200,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Acid",
      "name": "sauce soja (facultatif, à finir)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari pour un strict sans gluten"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuse",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_10"
      ],
      "outputState": "cold_infused_base",
      "instructions": "Mélanger le porcin séché, le shiitake séché et le kombu dans un grand pot et verser sur l'eau froide. Laisser infuser à froid à température ambiante pendant au moins 30 minutes ou réfrigérer pendant la nuit pour obtenir un résultat plus profond et plus propre. Les glutamates s'éteignent à froid en douceur, sans l'amertume que l'ébullition rapide peut extraire des champignons séchés. Le kombu devrait s'adoucir d'une feuille noire rigide à une fronde souple et glissante — le sortir avant que le stock ne vienne à ébullition, car il devient amer et visqueux si cuit à un mijot dur.",
      "visualCue": {
        "primaryTarget": "Après 30 minutes à température ambiante, l'eau a transformé un riche brun-ambre et sent le sol forestier et la mer. Les champignons ont enflé et adouci; le kombu s'est détendu d'une feuille raide à un ruban pliant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est à peine teintée, les champignons encore raides et papiers, le kombu inchangé. Le petit umami a été libéré.",
            "action": "Laisser plus de temps pour la perfusion froide — au moins 20 minutes de plus. La chaleur aide; placer le pot sur une chaleur très basse pour apporter une chaleur douce sans bouillir."
          },
          {
            "state": "Perfect",
            "description": "Le liquide est ambre foncé, les champignons sont complètement réhydratés et tendres, et le kombu est adouci et glissant au toucher. L'arôme est terreux, brillant et salé.",
            "action": "Retirer le kombu maintenant, avant d'appliquer la chaleur. Ajouter les aromatiques et laisser mijoter."
          },
          {
            "state": "Overdone",
            "description": "Kombu a été laissé trop longtemps et a commencé à se dissoudre aux bords, libérant une texture visqueuse et une amertume océanique aiguë dans l'eau.",
            "action": "Retirer immédiatement le kombu et goûter le liquide. Si l'amertume est perceptible mais légère, procédez — elle sera diluée une fois le stock terminé. S'il est fortement amer, jetez le kombu et compensez avec une cuillère à café de miso blanc remué à la fin."
          }
        ]
      },
      "feelCue": "Courez le kombu entre vos doigts — il devrait se sentir comme un cuir mouillé, glissant, souple mais intact, sans se dissoudre ni se briser. L'eau devrait se sentir soyeuse, pas épaisse."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "cold_infused_base",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "simmering_stock",
      "instructions": "Retirer et réserver le kombu. Ajouter l'oignon à moitié (avec sa peau papier — la peau approfondit la couleur à un ambre riche), le céleri, l'ail écrasé, le thym et les grains de poivre cassés. Portez - vous à feu moyen à feu nu: de petites bulles s'élèvent régulièrement, la surface tremble mais ne gronde pas. Laisser mijoter 45 minutes. Ne pas faire bouillir dur : les stocks de champignons deviennent boueux, amers et gritty à un ébullition enrouleur. Un mijot doux maintient le stock clair et la saveur propre.",
      "visualCue": {
        "primaryTarget": "Un liquide ambre foncé, à peine en mouvement, avec de la vapeur qui monte de la surface. Les champignons se sont complètement effondrés et l'oignon s'est adouci et ouvert. La couleur est un brun profond, riche comme le thé noir brassé fort.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock est encore pâle ambre et légèrement aqueux — les aromatiques n'ont pas eu le temps de libérer toute leur saveur. Moins de 30 minutes ont passé.",
            "action": "Continuez à mijoter. La profondeur de la saveur se construit sensiblement dans les 20 dernières minutes que l'oignon et le céleri contribuent à leur douceur."
          },
          {
            "state": "Perfect",
            "description": "Liquide ambré sombre et clair qui sent la terre, les herbes fraîches et une légère douceur minérale. Tiré à travers une cuillère, il fonctionne propre sans aucun sédiment. La surface est à peine perturbée — une bulle chaque seconde ou deux.",
            "action": "Retirer du feu et laisser reposer 10 minutes avant la déformation, de sorte que les sédiments se déposent."
          },
          {
            "state": "Overdone",
            "description": "Stock a diminué de plus d'un quart, la couleur est presque noire, et l'arôme a un tranchant amer. Les champignons sentent peu le caoutchouc de la cuisson excessive.",
            "action": "Diluer avec une petite mesure d'eau chaude, le goût, et vérifier que l'amertume est douce. Soucher rapidement sans autre réduction."
          }
        ]
      },
      "feelCue": "Le pot devrait produire une patte douce et rythmique toutes les quelques secondes — et non un ébullition dur. Placez votre main au-dessus de la surface : vous devriez sentir une chaleur constante, pas une explosion de vapeur d'échouement. Ce stock a besoin de patience, pas d'agression."
    },
    {
      "nodeId": "step_3",
      "action": "Poignée",
      "inputs": [
        "simmering_stock"
      ],
      "outputState": "strained_mushroom_stock",
      "instructions": "Déposer une souche fine avec un morceau de fromage ou un chiffon de cuisine propre et le placer sur un grand bol ou une casserole. Placez le bouillon en douceur — ne pressez pas ou ne pressez pas les champignons et les légumes usés, car la pression force les solides amers et féculents à travers le bouillon. Jetez les solides usés. Vous pouvez hacher les porcines réhydratés et les shiitake qui ont repris pendant la cuisson et les utiliser dans un autre plat — ils sont encore pleins de saveur.",
      "visualCue": {
        "primaryTarget": "Le stock tendu est un ambre clair et profond, la couleur d'un thé glacé fort et non sucré, sans particules flottantes ni sédiments lorsqu'il est versé dans un verre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock est toujours dans le pot, non entraîné, avec des solides usés se trouvant au fond.",
            "action": "La souche maintenant avant que le stock se refroidit davantage et les solides installés sont perturbés."
          },
          {
            "state": "Perfect",
            "description": "Ambre foncé clair, pas de nuages, pas de sédiments. L'arôme est la terre, les herbes, et une saumure propre du kombu. Il brille lorsqu'il est tenu à la lumière.",
            "action": "Assaisonner de sel et de sauce de soja en option; conserver ou utiliser immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le stock est moulu ou opaque, avec de l'asphalte et des sédiments de champignons fins, il a été pressé à travers la souche ou le tissu était trop grossier.",
            "action": "Passer à travers un filtre à café en papier ou une nappe de fromage double couche pour clarifier. Cela prendra du temps, mais le résultat sera acceptablement clair."
          }
        ]
      },
      "feelCue": "Une goutte du stock sur votre langue devrait s'enregistrer immédiatement comme savore — un coup d'umami propre qui s'étend sur les côtés de la langue et persiste. Il doit goûter vivant et terreux, pas plat ou aqueux."
    },
    {
      "nodeId": "step_4",
      "action": "Saison",
      "inputs": [
        "strained_mushroom_stock",
        "ing_09",
        "ing_11"
      ],
      "outputState": "finished_mushroom_stock",
      "instructions": "Goûtez le stock et assaisonnez avec du sel fin, en commençant avec prudence — la plupart des applications ajouteront plus d'assaisonnement à partir d'autres ingrédients. Si vous utilisez de la sauce de soja, ajoutez-le maintenant: juste une petite quantité approfondit l'umami et ajoute une complexité chaude, caramel sans faire le goût de stock asiatique. Il est facultatif mais recommandé pour les applications où la couleur n'est pas une préoccupation. Conserver le stock fini au réfrigérateur jusqu'à 5 jours ou geler en portions mesurées jusqu'à 3 mois.",
      "visualCue": {
        "primaryTarget": "Un champignon fini est un liquide ambré clair, brillant et foncé. Dans un bol blanc, il ressemble à un consommé profondément coloré, translucide plutôt qu'opaque, avec un léger éclat.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Goûte plat et sans saison — l'umami est présent mais étouffé, sans définition ni ascenseur.",
            "action": "Ajouter graduellement le sel, goûter après chaque pince. Le sel agit comme un amplificateur de saveur pour les glutamates: même une petite quantité apporte dramatiquement la terre vers l'avant."
          },
          {
            "state": "Perfect",
            "description": "Propre, profond, salé — avec un caractère champignon terreux, une légère douceur minérale, et une longue finale umami satisfaisante qui enveloppe l'arrière de la gorge. Le sel suffit à équilibrer, pas à dominer.",
            "action": "Utiliser immédiatement ou conserver. Excellent comme base pour risotto, ramen, braises, gravies et sauces."
          },
          {
            "state": "Overdone",
            "description": "Sur-salé ou sur-réduit — goût aigu et agressif, avec une amertume qui mord à la finale.",
            "action": "Diluer avec de l'eau non salée pour apprivoiser l'assaisonnement, ou équilibrer avec une petite mesure de l'eau froide utilisée dans la perfusion originale."
          }
        ]
      },
      "feelCue": "Le stock doit se sentir léger et propre en bouche — rien ne reste désagréable. L'arrière-goût est une terre profonde et satisfaisante, comme l'odeur d'une forêt après la pluie. S'il y a une finale amère ou métallique, le kombu a été laissé trop longtemps ou le stock a été bouilli plutôt que mijoté."
    }
  ]
};
