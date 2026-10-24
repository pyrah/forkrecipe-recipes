export default {
  "repoId": "master_mexican_hibiscus_agua_fresca_001",
  "parentRepoId": null,
  "slug": "hibiscus-agua-fresca",
  "author": "ForkRecipe Kitchen",
  "title": "Agua de Jamaïque",
  "description": "Fleurs d'hibiscus séchées imprégnées d'eau bouillante, tendues, sucrées et servies froides — une boisson pourpre vive avec une acidulée, florale, semblable à une canneberge et une finale rafraîchissante.",
  "cuisine": "Mexicain",
  "culture": "Mexicain",
  "category": "beverages",
  "tags": [
    "hibiscus",
    "agua-fresca",
    "Mexique",
    "floral",
    "tarte",
    "végétalien",
    "Sans gluten"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "2 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 0,
    "sour": 4,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Fleurs séchées d'hibiscus (Jamaïque / calices de roselle)",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": [
        "sacs à thé hibiscus (2–3 sacs par tasse d'eau)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau bouillante",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": [
        "piloncillo (gâté)",
        "sirop d'agave",
        "Chérie"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Citrus",
      "name": "Jus de chaux frais",
      "ratioValue": 0.3,
      "defaultUnit": "part",
      "substitutions": [
        "jus de citron"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Eau froide supplémentaire (pour dilution et service)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Gingembre frais (2–3 pièces fines, en option)",
      "ratioValue": 0,
      "defaultUnit": "parts",
      "substitutions": [
        "bâton de cannelle"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Streep",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_06"
      ],
      "outputState": "hibiscus_concentrate",
      "instructions": "Porter l'eau à ébullition complète et la verser sur les fleurs d'hibiscus séchées dans un pot ou un bol thermofuge. Ajoutez les pièces de gingembre si vous les utilisez. De 15 à 20 minutes, la couleur passera du rouge magenta profond à un violet pourpre inky dans les 5 premières minutes. Ne pas escarper pendant beaucoup plus de 20 minutes : les notes florales deviennent boueuses et l'amertume tannique passe agréablement. Après s'estomper, enfoncer les fleurs et le gingembre à travers une passoire fine, presser doucement les fleurs avec le dos d'une cuillère pour extraire chaque dernière goutte du concentré vif.",
      "visualCue": {
        "primaryTarget": "Un liquide pourpre inky et profond, la couleur du jus de grenade foncé ou un thé d'hibiscus très fort. Il doit être visuellement frappant: presque opaque dans le pot mais rubis translucide quand maintenu à la lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après seulement 5 minutes de trempage, l'eau est rouge-rose vif mais fine-tâche — les fleurs n'ont pas libéré toute leur tartness ou leur profondeur florale. C'est comme de l'eau de couleur.",
            "action": "Accroche-toi pendant 15 à 20 minutes. Vérifiez par dégustation : elle devrait être agressivement tarte et florale, plus que vous voulez boire propre."
          },
          {
            "state": "Perfect",
            "description": "Concentré cramoisi profond avec un arôme de tarte vif — cranberry-floral, légèrement tannique. Une cuillerée goûte fortement aigre et très florale. C'est du concentré : il sera dilué et sucré.",
            "action": "La souche immédiatement et procéder à l'édulcorant tout en restant chaud, donc le sucre se dissout facilement."
          },
          {
            "state": "Overdone",
            "description": "Passé 30 minutes, le liquide a l'air presque noir et sent le tannique et le médicinal plutôt que le floral. Le goût est agressif et la fraîcheur des canneberges s'estompe.",
            "action": "Continuez quand même — la dilution supplémentaire dans la prochaine étape aidera. Ajouter généreusement le sucre et diluer plus que d'habitude. La note florale est réduite mais la tarte reste."
          }
        ]
      },
      "feelCue": "Goûtez le concentré chaud (proscieusement, il fait chaud): il devrait faire fourmiller vos lèvres et votre langue avec de la tarte. Si elle a seulement un goût légèrement fruité, raide plus longtemps. Le concentré doit être méticuleusement propre, il est destiné à être dilué."
    },
    {
      "nodeId": "step_2",
      "action": "Dissoudre",
      "inputs": [
        "hibiscus_concentrate",
        "ing_03"
      ],
      "outputState": "sweetened_concentrate",
      "instructions": "Alors que le concentré tendu est encore chaud, remuer le sucre granulé jusqu'à dissolution complète. Cette étape de dissolution à chaud est essentielle — essayer d'édulcorer l'hibiscus froid avec des cristaux de sucre non dissous entraîne une agua fresca inégalement sucrée. Commencez par la quantité indiquée, remuez, goûtez et ajoutez plus en petits incréments. Le point d'équilibre est personnel : certains préfèrent une tarte jamaïque avec juste assez de douceur pour couper le bord ; d'autres préfèrent plus près du punch aux fruits. À ce stade, le concentré est encore trop fort pour être jugé avec précision — la dilution changera tout.",
      "visualCue": {
        "primaryTarget": "Le concentré chaud avec du sucre entièrement dissous est un sirop cramoisi brillant et profond, légèrement plus visqueux que l'eau ordinaire à cause du sucre dissous. Pas de cristaux de sucre visibles ou de nuages provenant de particules non dissoutes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sucre n'a pas complètement dissous — vous pouvez voir des cristaux tourbillonner ou se poser au fond du pot. Le liquide a un goût inégalement sucré.",
            "action": "Mélanger plus vigoureusement tout en restant chaud, ou revenir brièvement à feu doux pendant 30 secondes pour aider à dissoudre. Le concentré doit être parfaitement homogène avant la dilution."
          },
          {
            "state": "Perfect",
            "description": "Gloire, concentré entièrement dissous qui semble uniforme et enrobe une cuillère uniformément. Il sent le sirop d'hibiscus — confiture, tarte et floral. Goûtez et confirmez qu'il n'y a pas de grain.",
            "action": "Ajouter le jus de lime, puis diluer à l'eau froide."
          },
          {
            "state": "Overdone",
            "description": "En ajoutant tant de sucre, le concentré est épais et bouillant — il sera encore trop doux après dilution. La tarte à l'hibiscus est enterrée sous la douceur.",
            "action": "Réservez un concentré d'hibiscus non sucré (à partir d'un nouveau lot ou d'un pot différent) et mélangez-le pour rééquilibrer le rapport tartness-sucré."
          }
        ]
      },
      "feelCue": "Mélanger le concentré chaud contre le côté du pot — si vous sentez la légère résistance des cristaux non dissous, continuez à remuer. Le sucre entièrement dissous fait bouger la cuillère à travers le liquide en douceur sans glisser des particules."
    },
    {
      "nodeId": "step_3",
      "action": "Refroidissement",
      "inputs": [
        "sweetened_concentrate",
        "ing_04",
        "ing_05"
      ],
      "outputState": "finished_agua_fresca",
      "instructions": "Incorporer le jus de lime dans le concentré sucré chaud, puis verser dans un grand pichet et ajouter l'eau froide pour la dilution. Bien mélanger et goûter : ajuster la chaux, le sucre ou l'eau. Réfrigérer pendant au moins 1 heure, ou placer au-dessus d'un bol de glace pour accélérer le refroidissement. La saveur s'affine et s'éclaircit lorsque le froid — ce qui a un goût presque trop chaud sera tout à fait rafraîchissant à la température de service. Servir sur beaucoup de glace. Notez que l'hibiscus agua fresca s'estompe d'un pourpre vif à un rouge brique plus terne sur 24 heures au réfrigérateur, mais la saveur n'est pas affectée; remuer avant de servir comme un nuage des pigments fixés est purement esthétique.",
      "visualCue": {
        "primaryTarget": "Une boisson vive et transparente pour enfants lorsqu'elle est versée sur la glace, la couleur du jus de pamplemousse rouge rubis, quelque part entre le rouge et le magenta. Quand vous tenez le verre à la lumière, il brille un rubis presque comme un bijou translucide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours chaud ou légèrement frais, il a un goût plat et la tarte est dure plutôt que rafraîchissante. Hibiscus doit être froid pour montrer son meilleur personnage.",
            "action": "Réfrigérer pendant toute l'heure ou refroidir dans un bain de glace. Ne pas servir au chaud."
          },
          {
            "state": "Perfect",
            "description": "Crimson glacé, vif, tart-sweet avec une note florale. La chaux éclaire l'hibiscus sans goûter distinctement la chaux. Chaque gorgée laisse la bouche propre et fraîche. La couleur est très belle dans un verre.",
            "action": "Servir immédiatement sur la glace avec un coin de lime sur le bord."
          },
          {
            "state": "Overdone",
            "description": "Dilué trop — rose pâle et goût mince, comme de l'eau légèrement aromatisée. La tarte et le caractère floral ont été lavés.",
            "action": "Faites un petit lot frais de concentré sans dilution et remuez-le pour renforcer la saveur."
          }
        ]
      },
      "feelCue": "Cold agua de Jamaica devrait sentir la lumière et presque effervescent sur le palais malgré ne pas contenir de carbonation — les acides citriques et maliques dans l'hibiscus créent cette sensation lumineuse et propre qui fait chaque gorgée se sentir comme elle restaure plutôt que pèse."
    }
  ]
};
