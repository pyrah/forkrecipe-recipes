export default {
  "repoId": "master_indian_kulfi_001",
  "parentRepoId": null,
  "slug": "kulfi",
  "author": "ForkRecipe Kitchen",
  "title": "Kulfi",
  "description": "L'ancien dessert congelé du Sous-continent — le lait entier réduit à une pâte épaisse et fugace, puis sucrée avec du lait condensé, puis transpercée de cardamome, de safran et de pistaches broyées avant d'être mise dans des moules coniques.",
  "cuisine": "Indiens",
  "culture": "Inde du Nord",
  "category": "desserts",
  "tags": [
    "desserts",
    "indienne",
    "congelés",
    "laitière",
    "Cardamome",
    "safran",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "45 min",
  "totalTime": "8 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 0,
    "sour": 0,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Lait entier (graisse pleine)",
      "ratioValue": 1000,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Lait condensé sucré",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "sucre de palme"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Gousses de cardamome vert",
      "ratioValue": 8,
      "defaultUnit": "whole",
      "substitutions": [
        "Cardamome au sol"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Fils de safran",
      "ratioValue": 0.5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Double crème",
      "ratioValue": 100,
      "defaultUnit": "ml",
      "substitutions": [
        "crème lourde"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Pistaches non salées (amende d'emballage)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "Amandes blanchies"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_05"
      ],
      "outputState": "saffron_milk",
      "instructions": "Chauffer 3 cuillerées à soupe de lait pour laisser mijoter. Faire fondre les brins de safran dans le lait chaud et laisser tremper pendant 20 minutes — le liquide va tourner un cuivre-or profond. Réserve. Dans le reste du lait, chauffer sur feu moyen, en remuant avec une cuillère en bois lourde pour éviter les brûlures à la base de la poêle.",
      "visualCue": {
        "primaryTarget": "Un petit bol de lait intensément doré et parfumé, presque orange aux bords. La couleur doit être profonde et uniforme, non pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait est à peine teinté de jaune pâle. Safran n'a pas libéré toute sa couleur ni sa saveur.",
            "action": "Plus longtemps, le safran a besoin d'au moins 15 minutes dans un liquide chaud (non bouillant) pour fleurir complètement."
          },
          {
            "state": "Perfect",
            "description": "Riche en or de cuivre, le liquide sent floral et légèrement médicinal. Quelques brins sont incurvés et sont passés du rouge à l'orange.",
            "action": "Réserver jusqu'à ce que la réduction du lait soit complète."
          },
          {
            "state": "Overdone",
            "description": "Le lait était trop chaud et le safran a donné une note légèrement amère et acride.",
            "action": "Utilisez-le de toute façon — l'amertume sera diluée dans la quantité finale de lait, mais ajouter moins de safran la prochaine fois."
          }
        ]
      },
      "feelCue": "Le lait au safran doit sentir comme une prairie d'été chaude — florale, légèrement miellée, avec une profondeur terreuse lointaine. S'il sent plat, il n'est pas assez trempé."
    },
    {
      "nodeId": "step_2",
      "action": "Faire réduire",
      "inputs": [
        "ing_01",
        "ing_03",
        "ing_04"
      ],
      "outputState": "reduced_milk",
      "instructions": "Chauffer l'ensemble du lait à feu moyen-élevé dans une grande poêle à fond lourd. Mélanger fréquemment avec une spatule de silicone, grattant les côtés et la base. Alors qu'il diminue, baissez la chaleur. Ajouter le sucre et la cardamome au sol lorsque le lait a diminué de moitié. Continuer à cuire en remuant constamment jusqu'à ce que le mélange ait réduit à environ un tiers de son volume d'origine, soit environ 30 à 35 minutes. Il devrait envelopper l'arrière d'une cuillère.",
      "visualCue": {
        "primaryTarget": "Une pâte crémeuse, épaisse et pâle qui enveloppe la spatule d'une couche de 3 mm et tombe dans des feuilles lentes et larges — et non des gouttes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours assez liquide, verse facilement, s'échappe rapidement de la cuillère. Une ligne tirée à travers le revêtement sur la cuillère ne tient pas.",
            "action": "Continuez à cuisiner. La réduction doit être patiente — se précipiter avec une chaleur élevée provoque des brûlures."
          },
          {
            "state": "Perfect",
            "description": "Épais comme du lait évaporé avec du corps. Une ligne tirée à travers le revêtement de la cuillère conserve sa forme pendant 3 secondes. Blanc-ivoire avec une faible note de caramel.",
            "action": "Retirer du feu, mélanger le lait condensé et le lait de safran, puis la crème."
          },
          {
            "state": "Overdone",
            "description": "Graineux, commençant à caraméliser aux bords. Des odeurs de protéines de lait cuites et de beurre.",
            "action": "Retirer immédiatement du feu et filtrer dans un tamis fin. La note de caramel sera agréable dans le kulfi fini."
          }
        ]
      },
      "feelCue": "Plongez un doigt propre — le lait réduit doit se sentir épais et légèrement collant, comme du lait condensé dilué de moitié. Il devrait enrober votre doigt sans vous égoutter immédiatement."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "reduced_milk",
        "saffron_milk",
        "ing_02",
        "ing_06",
        "ing_07"
      ],
      "outputState": "kulfi_mixture",
      "instructions": "Retirer le lait réduit du feu. Incorporer le lait de safran, le lait condensé et la double crème. Bien mélanger jusqu'à ce que la couleur soit complètement uniforme — un or chaud avec des taches de pistaches. Goûtez à la douceur et ajustez. Réserver quelques pincées de pistaches pour garnir.",
      "visualCue": {
        "primaryTarget": "Un mélange chaud d'or ambré avec une texture veloutée et unie — pas de couches séparées de crème ou de lait visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait condensé est une bande séparée, plus foncée. Le mélange n'est pas homogène.",
            "action": "Mélanger vigoureusement pendant 2 minutes jusqu'à ce qu'il soit complètement combiné."
          },
          {
            "state": "Perfect",
            "description": "Couleur dorée uniforme, consistance crémeuse, tachetée de pistaches vertes. Doux, aromatique, légèrement plus épais que la crème lourde.",
            "action": "Verser dans des moules kulfi et congeler."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est granuleux ou a caillé — le lait réduit peut avoir été trop chaud lorsque la crème a été ajoutée.",
            "action": "Mélanger brièvement avec un mélangeur de bâtons jusqu'à ce qu'il soit lisse."
          }
        ]
      },
      "feelCue": "Le mélange doit se sentir significativement plus lourd que la crème pure lorsque vous le tourbillonnez dans le bol — dense et lent, avec une légère résistance qui parle à tous les solides de lait réduits."
    },
    {
      "nodeId": "step_4",
      "action": "Congeler",
      "inputs": [
        "kulfi_mixture"
      ],
      "outputState": "finished_kulfi",
      "instructions": "Verser le mélange dans des moules kulfi, des petites tasses métalliques ou un plateau de glaçons. Couvrir soigneusement avec du papier et insérer un bâton en bois dans le papier avant qu'il ne se déroule. Geler pendant au moins 6 heures, idéalement pendant la nuit. Démoudre en courant l'extérieur du moule sous l'eau chaude pendant 10 secondes et inverser sur une plaque.",
      "visualCue": {
        "primaryTarget": "Un cône ou un cylindre solide, dense et pâle, avec une surface sèche qui libère proprement du moule sans déchirement ni fissuration.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Doucement au centre quand pressé. Le bâton sort sans résistance. La surface est glacée et humide plutôt que sèche et ferme.",
            "action": "Retourner au congélateur pendant au moins 2 heures de plus. Kulfi est plus dense que la crème glacée et prend plus de temps à geler."
          },
          {
            "state": "Perfect",
            "description": "Solide-roche jusqu'au bout, couleur or ivoire, pistaches visibles. Rejets du moule avec une pop propre. La surface est sèche et sans gel.",
            "action": "Servir immédiatement sur une assiette, garnie des pistaches réservées et une pincée de safran supplémentaire."
          },
          {
            "state": "Overdone",
            "description": "Extrêmement dur, difficile à mordre, et a développé un bord de grands cristaux de glace à la surface.",
            "action": "Reposez-vous à température ambiante pendant 3-4 minutes avant de servir. La teneur en gras dense signifie qu'elle adoucit rapidement une fois sortie du congélateur."
          }
        ]
      },
      "feelCue": "Contrairement à la crème glacée, le kulfi devrait se sentir presque solide tout au long de la course lorsque vous poussez le bâton à travers — pas de donner doux dans le centre. Sa densité est sa vertu."
    }
  ]
};
