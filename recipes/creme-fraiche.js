export default {
  "repoId": "master_french_creme_fraiche_001",
  "parentRepoId": null,
  "slug": "creme-fraiche",
  "author": "ForkRecipe Kitchen",
  "title": "Crème Fraîche",
  "description": "Crème lourde inoculée avec du babeurre ou une cuillerée de culture vivante, laissée à température ambiante de 12 à 24 heures jusqu'à ce qu'elle épaississe à une crème tannante, soyeuse et cuillerée qui tient sans casser lorsqu'elle est chauffée.",
  "cuisine": "Français",
  "culture": "Pays-Bas",
  "category": "condiments",
  "tags": [
    "crème-fraîche",
    "français",
    "crème cultivée",
    "condiment",
    "laitière",
    "végétarien"
  ],
  "difficulty": 1,
  "activeTime": "5 min",
  "totalTime": "16 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 0,
    "sour": 3,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Crème lourde (au moins 35 % de matières grasses, non pasteurisées)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "crème double (Royaume-Uni)",
        "crème fouettée (faible graisse, résultat plus mince)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Beurre cultivé (cultures vivantes)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "yaourt de culture vivante",
        "crème aigre",
        "la crème fraîche existante comme entrée"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Combiner",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "inoculated_cream",
      "instructions": "Verser la crème lourde dans un pot ou un bol en verre propre. Ajouter le babeurre et remuer doucement avec une cuillère propre pendant 20 secondes — juste assez pour répartir uniformément les cultures dans toute la crème. Ne pas fouetter ou aérer; vous introduisez des bactéries vivantes, sans incorporer l'air. La crème ultra-pasteurisée a été chauffée à un point qui détruit les lipides nécessaires pour que les cultures s'y accrochent, c'est pourquoi il faut l'éviter.",
      "visualCue": {
        "primaryTarget": "Une crème lisse, blanc ivoire sans séparation visible entre le babeurre et la crème. Il verse comme un liquide épais, ne montrant aucun signe d'épaississement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait de beurre est assis comme une couche blanche et aqueuse sur le dessus plutôt que d'intégrer — vous pouvez voir les deux liquides clairement séparés.",
            "action": "Mélanger plus soigneusement pendant encore 30 secondes avec une cuillère propre pour distribuer les cultures."
          },
          {
            "state": "Perfect",
            "description": "Une crème uniforme, légèrement épaissie avec une odeur propre et fraîche. Pas de séparation visible. Les cultures sont maintenant distribuées et la fermentation peut commencer.",
            "action": "Couvrir lâchement d'un chiffon propre ou d'une enveloppe plastique (non hermétique) et laisser à température ambiante."
          },
          {
            "state": "Overdone",
            "description": "Ne s'applique pas au stade du mélange — il n'y a pas moyen de trop mélanger à ce stade au-delà de l'introduction d'un excès d'air.",
            "action": "Procéder à la fermentation; toutes les bulles provenant de l'enrobage se dissipent lorsque la crème s'épaissit."
          }
        ]
      },
      "feelCue": "Le mélange doit se sentir lisse et même sur la cuillère sans taches granuleuses ni caillé visible — le babeurre est entièrement incorporé lorsque la consistance est complètement uniforme."
    },
    {
      "nodeId": "step_2",
      "action": "Ferment",
      "inputs": [
        "inoculated_cream"
      ],
      "outputState": "fermenting_creme_fraiche",
      "instructions": "Couvrez le pot de façon lâche — pas hermétique, car les cultures doivent respirer — et laissez-le dans un endroit chaud à température ambiante, idéalement de 20 à 24 °C / 68 à 75 °F. Vérifiez-le après 12 heures. Dans les cuisines chaudes, il peut être fait en 12 heures; dans les cuisines plus froides, il peut prendre jusqu'à 24. Vous attendez que la crème s'épaississe à une consistance semi-solide et développe un tang doux et agréable. Ne pas remuer pendant la fermentation.",
      "visualCue": {
        "primaryTarget": "La crème a une consistance épaisse et cuillerable — lorsque vous inclinez le pot, elle se déplace en une seule masse plutôt que de sloffer. La surface est lisse et blanche, peut-être avec une très légère teinte d'ivoire.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours liquide et versable — le pot s'incline librement lorsqu'il est incliné. Goûte comme de la crème fraîche avec seulement un léger soupçon de tang.",
            "action": "Remplacer la housse et laisser 4 à 8 heures de plus. Si votre cuisine est très fraîche, placez le pot près d'un endroit chaud — sur le dessus du réfrigérateur, près d'une lampe pilote, ou dans un four avec seulement la lumière allumée."
          },
          {
            "state": "Perfect",
            "description": "Épais, cuilleré et légèrement tanné — il se déplace comme une masse lorsque vous inclinez le pot et tient une forme brièvement quand cuilleré. La saveur est crémeuse, riche et agréablement aigre sans être acide.",
            "action": "Réfrigérer immédiatement pour arrêter la fermentation. Il s'épaissira un peu plus loin pendant qu'il refroidit."
          },
          {
            "state": "Overdone",
            "description": "Très épais, presque caillé avec un lactosérum liquide visible qui se sépare autour des bords. Goûte fortement aigre, presque comme la crème aigre ou le yaourt plutôt que la crème fraîche.",
            "action": "Encore utilisable: égouttez le lactosérum et fouettez le caillé lisse. Il est plus riche et plus aigre que l'idéal, mais excellent agité dans les soupes ou les produits de boulangerie."
          }
        ]
      },
      "feelCue": "Après 12 heures, inclinez le pot lentement. Si la crème bouge à peine et que la surface a un doux frottement plutôt qu'un slosh, les cultures ont fait leur travail. Si votre cuillère rencontre la résistance propre de la crème de set plutôt que de courir propre dans le liquide, vous êtes là."
    },
    {
      "nodeId": "step_3",
      "action": "Refroidissement",
      "inputs": [
        "fermenting_creme_fraiche"
      ],
      "outputState": "finished_creme_fraiche",
      "instructions": "Transférer la crème fraîche au réfrigérateur, de façon lâche. Il se raffermira plus loin au cours des 2 à 4 prochaines heures lorsque le froid arrêtera l'activité bactérienne et que la graisse se cristallisera légèrement. Le produit fini se conserve 1 à 2 semaines au réfrigérateur. Pour faire le prochain lot, réservez une cuillère à soupe à la place du babeurre, les cultures se régénèrent indéfiniment avec chaque lot.",
      "visualCue": {
        "primaryTarget": "Une crème épaisse, lisse, blanc ivoire qui tient sa forme sur une cuillère et tombe dans des plis doux et lents. Il a la consistance d'un yogourt grec doux et riche mais avec une texture plus fine et plus soyeuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours libre et versable du réfrigérateur. Les cultures n'avaient pas assez de temps ni de chaleur pour mettre la crème.",
            "action": "Retourner à la température ambiante pendant 4 à 6 heures, puis réfrigérer à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Épais, cuilleré, soyeux et tanné. Il tombe de la cuillère dans une feuille lente et uniforme. Le goût est riche, propre et doux — comme la crème qui a grandi. Il ne se fendra pas ou ne courbera pas lorsqu'il sera mélangé dans une sauce chaude.",
            "action": "Utiliser tel quel, ou assaisonner avec du sel pour une application salée. Incorporer les soupes, les pâtes ou la cuillère sur les tartes et les baies."
          },
          {
            "state": "Overdone",
            "description": "Graineux ou séparé avec un mélange visible de lactosérum — surfermenté et proche de devenir de la crème aigre ou un fromage mou.",
            "action": "fouetter lisse et égoutter tout excès de lactosérum. Utiliser immédiatement plutôt que de stocker, ou utiliser dans la cuisson où la texture est moins critique."
          }
        ]
      },
      "feelCue": "Une cuillerée de crème fraîche parfaite doit se sentir soyeuse et légèrement résistante car vous écoper — pas moelleuse ou aérée, pas dense et en caoutchouc. Il devrait enrober le dos de la cuillère dans une couche uniforme et crémeuse qui ne se brise pas ou ne pleure pas."
    }
  ]
};
