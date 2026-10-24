export default {
  "repoId": "master_moroccan_tagine_lamb_chickpea_001",
  "parentRepoId": null,
  "slug": "tagine-lamb-chickpea",
  "author": "ForkRecipe Kitchen",
  "title": "L'agneau, le pois chiche et l'abricot Tagine",
  "description": "L'épaule d'agneau braisée sous le couvercle conique d'un tagine dans une sauce parfumée au ras el hanout, au safran et au citron conservé — la vapeur circulant sans fin de la base à l'extrémité du cône, se condensant et pleuvant vers le bas sur la viande pour la garder incroyablement tendre sans une goutte de liquide ajouté. Les abricots séchés et les pois chiches se dissolvent dans la sauce pendant deux heures jusqu'à ce que l'équilibre sucré-savori se termine exactement là où la cuisine marocaine a toujours su qu'elle devrait.",
  "cuisine": "Maroc",
  "culture": "Maroc/Berbère",
  "category": "proteins",
  "tags": [
    "agneau",
    "Maroc",
    "Tagine",
    "Le ras-el-hanout",
    "Sans gluten",
    "abricot",
    "pois chiches",
    "braise"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "2 hr 30 min",
  "ratioSystem": "parts",
  "stars": 1432,
  "forks": 96,
  "contributors": 30,
  "license": "CC-BY-SA",
  "createdAt": "2026-01-15",
  "updatedAt": "2026-01-15",
  "flavorRadar": {
    "sweet": 3,
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
      "name": "Épaule d'agneau désossée, coupée en morceaux de 7 cm",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "chèvres désossées",
        "côtes courtes de bœuf"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Le Président",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon jaune, en dés",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Gousses d'ail hachées",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Abricots séchés, coupés en deux",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "Pruneaux séchés",
        "raisins dorés"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Protein",
      "name": "Pois chiches cuits (en conserve, égouttés)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Ronde de citron conservée, tranchée",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "1 c. à thé zeste de citron + sel de pincée"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Fils de safran, fleuris dans 2 c. à soupe d'eau chaude",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre",
        "huile d'argan"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Coriandre fraîche et persil à feuilles plates, haché",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
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
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_04",
        "ing_11"
      ],
      "outputState": "marinated_lamb",
      "instructions": "Mélanger les morceaux d'agneau avec ras el hanout, ail, sel et poivre dans un bol. Massage du mélange d'épices dans chaque surface. Couvrir et réfrigérer pendant au moins 1 heure ou pendant la nuit. Le ras el hanout est un mélange pré-fait de jusqu'à 30 épices; un bon comprend le gingembre, la cannelle, la coriandre, le cumin et les pétales de rose. L'agneau mariné devrait être profondément parfumé et les épices devraient avoir commencé à s'hydrater contre la surface de la viande.",
      "visualCue": {
        "primaryTarget": "L'agneau est uniformément enduit dans le mélange d'épices. Pas de taches nues visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange d'épices se trouve dans des zones sèches à la surface et n'a pas adhéré.",
            "action": "Massage plus vigoureusement pendant 2 minutes. Une petite quantité d'huile d'olive aide à l'adhésion."
          },
          {
            "state": "Perfect",
            "description": "Chaque surface est recouverte d'épices dorées parfumées. L'agneau sent les épices marocaines chaudes et complexes.",
            "action": "Allez brunir l'agneau."
          },
          {
            "state": "Overdone",
            "description": "L'agneau a mariné plus de 24 heures. La surface est légèrement collante et commence à guérir.",
            "action": "Cuire immédiatement. La saveur sera très intense, ce qui n'est pas indésirable."
          }
        ]
      },
      "feelCue": "Après avoir mariné, la surface de l'agneau devrait se sentir légèrement collante à partir des huiles du ras el hanout, ce qui indique que les épices se sont collées à la surface des protéines."
    },
    {
      "nodeId": "step_2",
      "action": "Sear",
      "inputs": [
        "marinated_lamb",
        "ing_09"
      ],
      "outputState": "seared_lamb",
      "instructions": "Dans la base d'un tagine ou d'un four hollandais lourd, chauffer l'huile d'olive à feu moyen-vif. Casser les morceaux d'agneau de tous les côtés, en travaillant par lots, jusqu'à ce qu'ils soient profondément dorés. Ne vous précipitez pas et ne foulez pas le pot. La croûte épicée a besoin de 3-4 minutes sur chaque surface pour se développer. Mettez de côté l'agneau mariné. Dans le reste de la graisse et de l'huile, ajouter les dés d'oignon et cuire à feu moyen pendant 10 minutes jusqu'à ce que tendre et doré.",
      "visualCue": {
        "primaryTarget": "Une croûte dorée profonde sur l'agneau. L'oignon est doux et doré partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'agneau a une surface dorée pâle. Les épices n'ont pas correctement caramélisé.",
            "action": "Revenez à la chaleur élevée. La croûte est le fondement de la saveur du tagine."
          },
          {
            "state": "Perfect",
            "description": "L'agneau a une croûte acajou profonde. L'oignon est doux, translucide et doré. La base de tagine sent la viande caramélisée et l'oignon sucré.",
            "action": "Retournez l'agneau dans la casserole et ajoutez les ingrédients de la cuisson."
          },
          {
            "state": "Overdone",
            "description": "L'oignon est devenu sombre et amer. Le Fonds commence à brûler.",
            "action": "Déglacer avec un jet d'eau immédiatement et réduire la chaleur."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur un morceau d'agneau mariné — la croûte doit se sentir ferme et légèrement texturée sous pression, comme du carton, pas lisse comme de la viande non sayée."
    },
    {
      "nodeId": "step_3",
      "action": "Brise",
      "inputs": [
        "seared_lamb",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "braised_tagine",
      "instructions": "Retourner l'agneau mariné et l'oignon ramolli à la base de tagine. Ajouter les abricots, les pois chiches égouttés, le citron conservé et le safran fleuri avec son liquide absorbant. Ajoutez juste assez d'eau pour monter à mi - chemin l'agneau — environ 200 ml. Placer le couvercle conique du tagine, ou bien couvrir le four hollandais. Cuire au-dessus de la flamme la plus basse possible (utiliser un diffuseur de flamme si disponible) pendant 1,5 à 2 heures. Ne levez pas le couvercle pendant les 60 premières minutes.",
      "visualCue": {
        "primaryTarget": "L'agneau est complètement tendre. La sauce est épaisse, dorée et brillante. Les abricots ont été partiellement dissous dans la sauce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lamb est toujours ferme au centre. La sauce est fine et aqueuse. Les abricots sont toujours intacts.",
            "action": "Continuez à faire l'éloge 30 minutes de plus. Vérifiez le niveau de liquide et ajoutez un jet d'eau si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "L'agneau tombe de l'os avec une pression douce. La sauce est épaisse et complexe — douce d'abricot, aigre de citron préservé, chaude de safran et de ras el-hanout. Les pois chiches sont crémeux.",
            "action": "Garnir et servir directement à partir du tagine."
          },
          {
            "state": "Overdone",
            "description": "L'agneau a séché. La sauce a été réduite à une pâte brûlée au fond.",
            "action": "Ajouter l'eau chaude et remuer doucement du fond. Couvrir et reposer le feu pendant 10 minutes."
          }
        ]
      },
      "feelCue": "Penchez-vous dans le tagine et inhalez-vous à travers le petit trou dans le couvercle à la marque de 90 minutes – la vapeur qui s'échappe devrait porter un parfum de safran, d'épices chaudes et de fruits doux qui vous rend presque vertigineuse."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir",
      "inputs": [
        "braised_tagine",
        "ing_10"
      ],
      "outputState": "finished_tagine_lamb_chickpea",
      "instructions": "Réglez l'assaisonnement avec du sel, du poivre et du jus de citron supplémentaire ou conservez le citron si nécessaire. Dispersez la coriandre hachée et le persil sur le tagine dans une couche épaisse et parfumée. Servir directement à la table dans la marmite, accompagné de pain marocain chaud (khobz) ou couscous pour absorber la sauce. La viande doit être si tendre qu'elle est servie avec une cuillère, pas un couteau.",
      "visualCue": {
        "primaryTarget": "Un ragoût doré-orange avec des morceaux d'agneau tendre et de pois chiches. Garnir d'herbes vertes vivaces contrastant la sauce ambre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les herbes ont été ajoutées trop tôt et se sont flétries et jaunies.",
            "action": "Ajouter toujours la garniture d'herbe fraîche immédiatement avant de servir."
          },
          {
            "state": "Perfect",
            "description": "Coriandre verte vive et persil contre la sauce dorée. Le contraste de couleur est aussi important que la fraîcheur de la saveur que les herbes ajoutent.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La garniture s'est complètement flétrie après s'être assise trop longtemps avant de servir.",
            "action": "Ajouter une deuxième couche d'herbes fraîches immédiatement avant d'apporter à la table."
          }
        ]
      },
      "feelCue": "Lorsque vous soulevez un morceau d'agneau avec la cuillère de service, il devrait trembler et menacer de s'effondrer — cette fragilité est le signe de deux heures de patience qui paye."
    }
  ]
};
