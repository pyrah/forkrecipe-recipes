export default {
  "repoId": "master_french_vichyssoise_001",
  "parentRepoId": null,
  "slug": "vichyssoise",
  "author": "ForkRecipe Kitchen",
  "title": "Vichyssoise",
  "description": "Une soupe française froide aussi pâle et lisse que de la porcelaine – poireaux et pommes de terre mijotées délicatement en stock, mélangées jusqu'à soyeuses, puis enrichies de crème et réfrigérées jusqu'à ce que les saveurs s'approfondissent et que la texture devienne quelque chose entre velours et satin liquide.",
  "cuisine": "Français",
  "culture": "Français",
  "category": "vegetables",
  "tags": [
    "français",
    "poireaux",
    "pommes de terre",
    "Soupe froide",
    "végétarien"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "1 hr 20 min",
  "ratioSystem": "parts",
  "stars": 876,
  "forks": 64,
  "contributors": 11,
  "license": "CC-BY-SA",
  "createdAt": "2025-02-11",
  "updatedAt": "2025-10-30",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Allium",
      "name": "Levains (blanc et vert pâle seulement), nettoyés, tranchés",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "Oignons de printemps",
        "Oignons blancs (récolte)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Pommes de terre mousseuses (Maris Piper ou russet), pelées et cubes",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "Or du Yukon (plus crémeux, moins féculent)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Stock de poulet ou de légumes (bonne qualité, pas trop salé)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Crème double (lourde)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "crème fraîche (ajoute un léger tang)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel, poivre blanc (pas noir — il fait des taches foncées)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Poêles, finement fouettées (pour servir)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "une bruine de crème et d'huile de ciboulette"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saucisse",
      "inputs": [
        "ing_01",
        "ing_03",
        "ing_06"
      ],
      "outputState": "sweated_leeks",
      "instructions": "Faire fondre le beurre dans une casserole à feu moyen-doux. Ajouter les poireaux tranchés et une pincée généreuse de sel. Plongez doucement pendant 10 à 12 minutes, en remuant occasionnellement, jusqu'à ce qu'il soit complètement doux, translucide et sucré. Ne laissez pas les poireaux colorer — la soupe finie devrait être blanc ivoire. Utilisez un couvercle pendant les 5 premières minutes pour les cuire plus vite sans brunir.",
      "visualCue": {
        "primaryTarget": "Les poireaux sont complètement translucides, effondrés et blanc vert pâle. Ils sentent doux et doux à l'oignon, pas vifs. Le beurre dans la poêle est clair, pas doré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les poireaux sont encore partiellement opaques avec une texture ferme restante. Ils sentent crus et légèrement tranchants. Certains brins sont encore vert vif.",
            "action": "Continuez à transpirer avec le couvercle allumé. Les poireaux sous-dosés laisseront un bord cru et herbacé dans la soupe finie."
          },
          {
            "state": "Perfect",
            "description": "Entièrement translucide, doux, sucré. La couleur est blanche-sauge pâle. Le beurre reste clair et léger. Les poireaux s'effondrent sous une légère pression.",
            "action": "Ajouter les pommes de terre et le bouillon."
          },
          {
            "state": "Overdone",
            "description": "Les poireaux commencent à devenir dorés aux bords. Une certaine caramélisation se produit. Le beurre peut commencer à brunir.",
            "action": "Ajouter immédiatement un jet de stock pour refroidir la poêle. La soupe aura un goût légèrement plus sucré, plus noisette, mais reste acceptable."
          }
        ]
      },
      "feelCue": "Appuyez sur un brin de poireau contre le côté de la casserole avec une cuillère — il devrait s'aplatir immédiatement sans résistance, comme presser un tissu mou, ne pas ressortr avec une fermeté quelconque."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "sweated_leeks",
        "ing_02",
        "ing_04"
      ],
      "outputState": "cooked_soup",
      "instructions": "Ajouter les pommes de terre en cube et verser dans le bouillon chaud. Porter à mijoter et cuire de 20 à 25 minutes jusqu'à ce que les pommes de terre soient complètement tendres. Ne vous précipitez pas avec une chaleur élevée — une mijotée douce préserve les saveurs propres et délicates. Le liquide deviendra très légèrement nuageux à mesure que la fécule de pomme de terre sera libérée.",
      "visualCue": {
        "primaryTarget": "Les pommes de terre sont complètement tendres — un couteau de triage inséré répond à une résistance zéro et le cube tombe quand le couteau est retiré. Le stock est légèrement nuageux et pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les cubes de pommes de terre sont fermes et opaques au centre. Un couteau rencontre la résistance. La soupe a un goût féculent et maigre.",
            "action": "Continuez à mijoter. La pomme de terre sous-done laissera une texture granuleuse même après mélange."
          },
          {
            "state": "Perfect",
            "description": "Les pommes de terre tombent lorsqu'elles sont pressées avec une cuillère. Le stock est légèrement nuageux. La combinaison a un goût doux, féculent et sucré.",
            "action": "Retirer du feu et mélanger."
          },
          {
            "state": "Overdone",
            "description": "Les pommes de terre se sont complètement dissoutes dans le stock. Le mélange est déjà très épais et amylacé.",
            "action": "Procéder au mélange — la soupe sera encore plus veloutée et pourrait avoir besoin d'un stock supplémentaire pour ajuster la consistance."
          }
        ]
      },
      "feelCue": "Mâcher un cube de pomme de terre de la soupe mijotée — il devrait s'effondrer à une pâte immédiatement sur la langue sans grain, comme une pomme de terre farinée parfaitement cuite dans une veste."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "cooked_soup",
        "ing_05"
      ],
      "outputState": "blended_soup",
      "instructions": "Utilisez un mélangeur d'immersion directement dans le pot, ou transférez soigneusement en lots dans un mélangeur de peuplement (ne remplir jamais plus de la moitié de liquide chaud). Mélanger pendant au moins 2 minutes jusqu'à ce qu'il soit complètement lisse. Passer à travers un tamis à mailles fines, presser fermement avec une louche pour extraire tout le liquide et forcer la pulpe végétale. Incorporer la crème double froide. Cette étape de tamisage n'est pas négociable pour la texture vichyssoise soyeuse caractéristique.",
      "visualCue": {
        "primaryTarget": "Une soupe entièrement lisse, blanc ivoire avec la consistance de la crème fine. Lorsqu'il est versé, il tombe dans un seul ruban non cassé sans grumeaux, brins fibreux ou taches opaques.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mélanges mais non tamisés — brins fibreux visibles provenant des poireaux, petits morceaux, texture légèrement granuleuse. La soupe est blanc cassé mais pas entièrement lisse.",
            "action": "Passez par un tamis à mailles fines. Cette étape est essentielle pour la vichyssoise — la différence de texture est dramatique."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, blanc ivoire, coulant comme de la crème fine. Pas de particules visibles. La crème est entièrement incorporée et la soupe a un léger reflet.",
            "action": "Assaisonner soigneusement avec du poivre blanc et du sel. Refroidir au moins 1 heure avant de servir."
          },
          {
            "state": "Overdone",
            "description": "La crème a peut-être été partiellement séparée ou la pomme de terre est devenue légèrement collante.",
            "action": "Sieve encore et ajouter une petite quantité de stock froid pour se détendre. Refroidir complètement."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité de soupe mélangée et tamisée entre vos doigts – elle devrait être entièrement lisse avec la légère goutte de crème, comme une fine lotion à la main, sans grain."
    },
    {
      "nodeId": "step_4",
      "action": "Refroidissement",
      "inputs": [
        "blended_soup",
        "ing_07"
      ],
      "outputState": "finished_vichyssoise",
      "instructions": "Transférer la soupe mélangée dans un contenant et réfrigérer pendant au moins 1 heure, idéalement 4 heures ou une nuit. Les températures froides transforment la soupe — les saveurs s'approfondissent et se mélangent, et la texture s'enchaîne légèrement à une consistance plus riche et plus veloutée. Avant de servir, goûtez à nouveau — la soupe froide a toujours besoin de plus de sel que la soupe chaude. Réglez l'assaisonnement. Servir dans des bols réfrigérés avec de la ciboulette finement coupée.",
      "visualCue": {
        "primaryTarget": "Une soupe d'ivoire pâle dans un bol réfrigéré, parfaitement calme et lisse comme un miroir. La ciboulette éparpillée sur toute la surface offre le seul contraste de couleur: vert vif contre blanc.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Servi trop chaud — au-dessus de 10°C. La soupe a un goût plat et la texture est mince. La crème n'est pas complètement intégrée.",
            "action": "Retournez au réfrigérateur. Vichyssoise doit être vraiment froid pour le goût correct — la chaleur aplatit les saveurs entièrement."
          },
          {
            "state": "Perfect",
            "description": "Servi à 4-8°C — agréablement froid, comme un milkshake salé. Les arômes sont propres, arrondis et doux. Les chives sont lumineuses et parfumées contre la surface pâle.",
            "action": "Servir immédiatement à partir de bols froids au réfrigérateur."
          },
          {
            "state": "Overdone",
            "description": "La soupe est presque gelée — les cristaux de glace ont commencé à se former aux bords. L'arôme est muté et la texture est légèrement granuleuse.",
            "action": "Incorporer doucement et laisser monter jusqu'à 5°C avant de servir. Alternativement, mélanger les patchs glacés en douceur."
          }
        ]
      },
      "feelCue": "Une cuillère de vichyssoise correctement réfrigérée sur la langue doit se sentir frais et soyeux simultanément — la température froide crée une netteté minérale propre tandis que la crème enveloppe le palais en richesse."
    }
  ]
};
