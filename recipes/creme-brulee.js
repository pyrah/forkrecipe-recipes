export default {
  "repoId": "master_french_creme_brulee_001",
  "parentRepoId": null,
  "slug": "creme-brulee",
  "author": "ForkRecipe Kitchen",
  "title": "Crème Brûlée",
  "description": "Le bistro classique en deux textures — une crème de vanille pâle et tremblante cuite juste à un carquois dans son propre bain d'eau, puis scellée sous une fine laque de sucre caramélisé qui éclate sous la cuillère comme une feuille de verre dans la crème fraîche en dessous.",
  "cuisine": "Français",
  "culture": "Parisien",
  "category": "desserts",
  "tags": [
    "Creme-brulee",
    "français",
    "Coutard",
    "vanille",
    "Caramel",
    "dessert"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "5 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 0,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Crème lourde (35% de matières grasses)",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "moitié crème, moitié lait entier pour un ensemble plus léger"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Fèves de vanille (split, graines raclées)",
      "ratioValue": 1,
      "defaultUnit": "pod",
      "substitutions": [
        "2 c. à thé de vanille",
        "1 c. à soupe d'extrait de vanille pur (ajouter le feu)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Jaunes d'œufs (grandes)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre granulé (pour la crème)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "sucre de ricin"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre granulé (pour le dessus de la brûlée)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "turbinado/demerara pour une fissure plus épaisse et plus grossière"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "vanilla_cream",
      "instructions": "Séparer le fève de vanille dans le sens de la longueur et racler les graines collantes dans la crème, puis déposer dans la goupille épuisée aussi. Chauffer délicatement la crème à feu moyen-doux jusqu'à ce que les vapeurs s'élèvent et que les bulles frangent le bord de la poêle — ne la laissez pas bouillir. Tirez-le du feu, couvrez-le et laissez-le descendre de 15 à 30 minutes. Cela attire le parfum de la vanille et de petites graines dans toute la crème et vous donne une base chaude (pas chaude) qui ne brouille pas les jaunes.",
      "visualCue": {
        "primaryTarget": "La crème est à la vapeur avec un bord mouillant de petites bulles, tachetées uniformément avec des milliers de graines de vanille foncée, sentant douxment floral.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème est fraîche à tiède, sans vapeur, et les graines de vanille s'agrippent au lieu de se disperser.",
            "action": "Maintenir le réchauffement doucement et remuer pour briser les grumeaux. Vous voulez de la chaleur pour libérer l'arôme — mais restez en dessous d'un mijot."
          },
          {
            "state": "Perfect",
            "description": "La vapeur se lève et un anneau de bulles fines lacets le bord. La cuisine sent fortement la vanille et la crème est chaude mais pas bouillante.",
            "action": "Couvrir et escarpés de 15 à 30 minutes, puis pêcher le goupille (scraper les graines qui s'accrochent) avant de tempérer."
          },
          {
            "state": "Overdone",
            "description": "La crème a atteint un ébullition enrouleur et peut avoir moulu ou brûlé sur le fond, sentant légèrement cuit.",
            "action": "Si seulement bouilli, refroidissez-le quelques minutes et continuez. S'il est brûlé, s'il s'agit d'une souche et d'un nouveau départ, une note de lait brûlé détruit la crème."
          }
        ]
      },
      "feelCue": "Plongez un doigt (précieusement) — la crème doit se sentir chaude, autour du corps-chauffe-plus, pas douloureusement écalée. Une longue pente est la différence entre la douceur de fond et la vanille incomparable."
    },
    {
      "nodeId": "step_2",
      "action": "Tempérer",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "vanilla_cream"
      ],
      "outputState": "custard_base",
      "instructions": "fouetter les jaunes avec le sucre et le sel jusqu'à ce qu'ils soient lisses et pâles — ne fouettez pas dans l'air, vous voulez une crème plate, pas une mousse. Maintenant tempérer : verser la crème chaude de vanille dans les jaunes dans un cours d'eau mince, fouetter constamment, de sorte que les œufs réchauffent graduellement au lieu de saisir dans des caillés brouillés. Stir, ne t'en fais pas. Placer le mélange à travers un tamis fin dans une cruche à verser pour attraper la chalaza et les morceaux cuits errants, puis écrémer la mousse de surface afin que les hauts cuits restent glacés.",
      "visualCue": {
        "primaryTarget": "Une crème douce, versable, jaune pâle sans grumeaux et seulement un mince film de mousse, légèrement tachetée de graines de vanille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les jaunes et le sucre sont encore granuleux et striés, ou les jaunes froids ont été jetés en une seule fois et vous pouvez voir des flecks d'oeufs.",
            "action": "fouetter le jaune-sucre lisse avant d'ajouter de la crème, et ajouter la crème plus lentement. Retirez fermement les taches caillées."
          },
          {
            "state": "Perfect",
            "description": "Une crème liquide uniforme et satinée qui enveloppe le fouet et verse dans un ruban lisse. Pas de fils d'œufs visibles après déformation.",
            "action": "Essuyez la mousse et laissez les bulles restantes s'installer pendant que vous préparez le bain d'eau."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est visiblement brouillé — caillés jaunes suspendus dans un liquide fin — parce que la crème était trop chaude ou trop rapide.",
            "action": "S'il est mal cuit, la crème n'est pas soyeuse et est mieux refaite."
          }
        ]
      },
      "feelCue": "Ajouter la crème dans un fil que vous pouvez voir, en fouettant tout le temps — le bol ne devrait sentir que chaud, jamais chaud, après avoir trempé. Frothing maintenant signifie une surface pétillante, pochée plus tard, donc remuer bas et lent."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "custard_base"
      ],
      "outputState": "baked_custard",
      "instructions": "Mettre des ramequins peu profonds dans une poêle à rôtir profonde et diviser la crème entre eux. Faites glisser la poêle dans un four à 150 °C (300 °F), puis versez de l'eau chaude dans la poêle jusqu'à ce qu'elle atteigne la moitié des ramequins, ce bain-marie tamponne les œufs de la chaleur directe, pour qu'ils se mettent en satin au lieu d'être courbés. Cuire de 30 à 45 minutes, jusqu'à ce que les bords soient fixés, mais les centres encore agités. Soulevez les ramequins de l'eau, refroidissez à la température ambiante, puis refroidissez au moins 4 heures ou nuit pour les entreprises de crème et refroidissez.",
      "visualCue": {
        "primaryTarget": "Les custaves sont disposées aux bords avec un centre qui saute comme de la gelée lâche — un or pâle uniforme, une surface mate et intacte, sans fissures ni brunissement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Un coup de pouce de la poêle envoie une ondulation liquide sur toute la surface et le centre semble soupirant.",
            "action": "Cuire encore 5-10 minutes et revérifier. La chaleur résiduelle maintient la cuisson après avoir quitté le four, alors errez légèrement."
          },
          {
            "state": "Perfect",
            "description": "Le pouce extérieur est ferme et le centre oscille comme une masse douce, comme la surface d'un ballon d'eau — fixé mais tremblant.",
            "action": "Retirer immédiatement du bain d'eau pour arrêter la cuisson, refroidir, puis refroidir au moins 4 heures jusqu'à ce qu'il soit froid et tranché."
          },
          {
            "state": "Overdone",
            "description": "La surface s'est gonflée, fissurée ou dorée, et toute la crème se déplace de façon raide sans hésitation, signe de surchauffe ou de chaleur trop élevée.",
            "action": "Baisser le four ou vérifier plus tôt la prochaine fois. Ils goûteront aux œufs et la texture deviendra granuleuse ; encore comestible, mais la soie est perdue."
          }
        ]
      },
      "feelCue": "Tapez sur le côté d'un ramekin — la crème parfaite qui vibre au centre comme de la gelée, tandis que la jante tient ferme. Le bain d'eau ne devrait jamais mijoter; si vous le voyez bouillonner, glissez un glaçon dans la casserole pour baisser la température."
    },
    {
      "nodeId": "step_4",
      "action": "Caraméliser",
      "inputs": [
        "baked_custard",
        "ing_06"
      ],
      "outputState": "finished_creme_brulee",
      "instructions": "Juste avant de servir, éplucher toute condensation du haut de crème froide avec une serviette en papier afin que le sucre adhère. Saupoudrer une fine couche uniforme de sucre granulé sur chacun d'eux — inclinez et arrosez l'excès de sorte qu'il ne reste plus de taches nues ou épaisses. Balayer une torche de cuisine en ronds lents à quelques pouces au-dessus de la surface, fondre le sucre jusqu'à ce qu'il bulle, liquéfie, et tourne en ambre profonde. Laisser le caramel préparer pendant une minute ou deux jusqu'à ce qu'il durcisse à une vitre fragile, puis servir à la fois pendant que la crème est froide et la croûte est croquante.",
      "visualCue": {
        "primaryTarget": "Une croûte continue, lustrée, profonde, fine et dure, scellant la crème froide pâle en dessous, avec une faible odeur amère de caramel grillé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sucre n'a fondu qu'en partie, laissant des taches pâles, granuleuses et blanches qui croquent comme du sucre brut plutôt que de craquer comme du verre.",
            "action": "Continuer à brûler les taches ternes jusqu'à ce que chaque grain liquéfie et couleurs. Le sucre de bare a un goût gritty et ne formera pas la signature éclater."
          },
          {
            "state": "Perfect",
            "description": "Une feuille uniforme de caramel de la couleur du miel foncé, vitreux et lisse, qui tape dur et craque proprement sous une cuillère pour révéler la crème froide sous.",
            "action": "Reposez 1-2 minutes pour que la croûte durcisse complètement, puis servez immédiatement avant qu'elle absorbe l'humidité et adoucit."
          },
          {
            "state": "Overdone",
            "description": "Le caramel est devenu noir en acajou foncé, fumant et sentant l'acride — il aura un goût amer et brûlé.",
            "action": "Torche plus doucement et plus loin. S'il est mal brûlé, qu'il se mette en marche, qu'il lève le dard brûlé, qu'il résume et retorque le dessus."
          }
        ]
      },
      "feelCue": "La récompense est le son : tapotez la croûte refroidie avec le dos d'une cuillère et elle doit sonner légèrement, puis laissez place avec une fissure aiguë dans la crème froide. Caramélisez seulement à la dernière minute — une brûlée haut pleure et adoucit dans une heure de debout."
    }
  ]
};
