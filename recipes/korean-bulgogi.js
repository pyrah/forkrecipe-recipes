export default {
  "repoId": "master_korean_koreanbulgogi_001",
  "parentRepoId": null,
  "slug": "korean-bulgogi",
  "author": "ForkRecipe Kitchen",
  "title": "Bulgogi coréen",
  "description": "De minces rubans de bœuf, laqués dans une marinade de poires, ont frappé un grill chaud criant et caramélisent en quelques secondes — doux, fumé, et incroyablement tendre à chaque morsure carbonisée.",
  "cuisine": "Coréen",
  "culture": "Coréen",
  "category": "proteins",
  "tags": [
    "protéine",
    "Sans gluten",
    "boeuf",
    "coréen",
    "grillé",
    "doux"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "2 hours 20 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Linge rivé ou longe de boeuf, tranché 3 mm de hauteur",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "filet de bœuf",
        "poitrine (par-gel pour une coupe facile)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Poire asiatique râpée (ou kiwi)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "Poire de bosc",
        "moitié de kiwi"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "sauce soja (tamari sans gluten)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "aminos de coco"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre brun",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Chérie",
        "sucre blanc"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Échalons, tranchés finement",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Graines de sésame grillées",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire mariner",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "marinated_beef",
      "instructions": "Râper la poire asiatique sur le côté fin d'une boîte grater directement dans un grand bol — vous voulez le jus et la pulpe les deux. Ajouter la sauce soja, le sucre brun, l'ail haché, les oignons verts, l'huile de sésame et le poivre noir. Incorporer jusqu'à dissolution du sucre. Ajouter le bœuf tranché et tricoter la marinade dans chaque couche avec les mains, en séparant chaque tranche. Couvrir et réfrigérer pendant au moins 2 heures, jusqu'à la nuit. Les enzymes de la poire fendent la viande ; au-delà de 12 heures, la texture devient musquée.",
      "visualCue": {
        "primaryTarget": "Chaque tranche de boeuf enrobée d'une marinade foncée et brillante avec des taches visibles de pétoncle et d'ail.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Certaines tranches sont pâles et les bassins de marinade au fond plutôt que de s'accrocher.",
            "action": "Rejeter avec vos mains, en s'assurant que toutes les surfaces sont enduites. Ajouter 1 c. à soupe plus de soja si trop sec."
          },
          {
            "state": "Perfect",
            "description": "Toutes les tranches sont uniformément recouvertes d'une marinade de couleur acajou. Le sucre s'est dissous et le liquide s'accroche au lieu de s'épuiser.",
            "action": "Couvrir et réfrigérer. La viande s'approfondira en couleur pendant qu'elle marinera."
          },
          {
            "state": "Overdone",
            "description": "Le boeuf a mariné plus de 12 heures — il peut se sentir légèrement collant et la texture sera très douce.",
            "action": "Cuire immédiatement. La saveur sera intense; réduire légèrement le temps de cuisson afin d'éviter le sur-tangage de l'extérieur."
          }
        ]
      },
      "feelCue": "Les tranches de boeuf doivent se sentir soyeuses et se séparer facilement entre vos doigts — si elles s'agrippent en masse solide, les séparer avant de mariner."
    },
    {
      "nodeId": "step_2",
      "action": "Griller",
      "inputs": [
        "marinated_beef"
      ],
      "outputState": "grilled_bulgogi",
      "instructions": "Chauffer un gril en fonte, une grille ou un gril extérieur à la chaleur la plus élevée possible — vous voulez un éclat visible et le premier soupçon de fumée. Agiter l'excès de marinade de chaque tranche et déposer à plat en une seule couche; ne pas surpeupler ou le boeuf va vapeur plutôt que l'omble. Cuire en lots : 60 à 90 secondes par côté. Vous recherchez des bords caramélisés et un léger char sur les marques surélevées. Le sucre dans la marinade veut brûler rapidement — contrôler la chaleur avec une vitesse sûre, pas à basse température.",
      "visualCue": {
        "primaryTarget": "Sear acajou-brun profond avec des taches d'omble sur les bords. Les pétoncles capturés dans la marinade doivent être légèrement frisolés et parfumés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Couleur beige-gris partout. Pas de caramélisation. Pale et mou, libérant de l'eau sur la casserole.",
            "action": "La poêle n'est pas assez chaude ou est surpeuplée. Retirer la moitié du lot, chauffer la manivelle et attendre que la poêle se rétablisse avant de continuer."
          },
          {
            "state": "Perfect",
            "description": "Les bords sont sombres et laqués avec du soja caramélisé. Quelques pourboires carbonisées. La viande est juste cuite à travers — encore juteuse quand pressée.",
            "action": "Transférer immédiatement dans une assiette de service. Garnir de graines de sésame."
          },
          {
            "state": "Overdone",
            "description": "Très sombre, presque noir. Le sucre a brûlé plutôt que caramélisé — une odeur amère et acride.",
            "action": "Coupez les bords les plus sombres et les plus amers. L'intérieur sera encore bon. Utiliser moins de chaleur pour les lots restants."
          }
        ]
      },
      "feelCue": "Appuyez sur une tranche avec des pinces — il devrait revenir fermement mais ne pas sentir dur. Si elle est rigide et sèche, elle a cuit trop longtemps. Le son doit être un étourdissement agressif et humide qui se calme lorsque l'humidité s'évapore."
    },
    {
      "nodeId": "step_3",
      "action": "Dresser",
      "inputs": [
        "grilled_bulgogi",
        "ing_09"
      ],
      "outputState": "finished_bulgogi",
      "instructions": "Transférer le bulgogi chaud dans un plateau de service. Éparpiller les graines de sésame grillées sur le dessus. Servir immédiatement avec du riz à grains courts cuit à la vapeur, du kimchi et des feuilles de laitue fraîche pour l'emballage. Bulgogi n'attend personne — la croûte caramélisée s'adoucit en quelques minutes lorsque la vapeur se construit sous les tranches.",
      "visualCue": {
        "primaryTarget": "Glisser des tranches d'acajou éparpillées de graines de sésame blanc, avec un éclat visible de marinade caramélisée sur chaque morceau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines de sésame sont inégalement distribuées, la plupart sur les bords.",
            "action": "Un coup rapide sur le plateau avant de servir est parfait."
          },
          {
            "state": "Perfect",
            "description": "Même la distribution des graines. La viande est encore légèrement bouillante. Les morceaux d'échalote sont carbonisés et parfumés.",
            "action": "Apportez à la table immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La viande est trop longtemps assise et refroidit. La croûte caramélisée devient collante plutôt que laquée.",
            "action": "Une explosion de 30 secondes dans une casserole la ravive. Ou acceptez - le: le boulogogi froid dans un bol de riz est excellent."
          }
        ]
      },
      "feelCue": "Le plat fini doit sentir le sésame grillé et le soya sucré avec un sous - ton d'omble — un parfum qui devrait attirer les gens à la table immédiatement."
    }
  ]
};
