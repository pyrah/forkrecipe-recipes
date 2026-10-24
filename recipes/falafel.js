export default {
  "repoId": "master_lebanese_falafel_001",
  "parentRepoId": null,
  "slug": "falafel",
  "author": "ForkRecipe Kitchen",
  "title": "Falafel",
  "description": "Le Levantine street-corner standard — pois chiches séchés jamais cuits, seulement trempés et broyés crus avec des herbes et des épices dans des décombres verts humides, puis frits dur afin que la croûte se brise dans une coquille d'acajou et les vapeurs intérieures s'ouvrent doux, lumineux et herbacé.",
  "cuisine": "Libanais",
  "culture": "Levantine",
  "category": "proteins",
  "tags": [
    "falafel",
    "lébanèse",
    "pois chiches",
    "frits",
    "mezze",
    "végétalien",
    "Produits de la rue"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "24 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 1,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Pois chiches séchés (JAMAIS en conserve ou cuits)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "fèves de fève à moitié séchées pour un mélange de levantine ta'ameya"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Herb",
      "name": "Persil à feuilles plates (feuilles et tiges tendres)",
      "ratioValue": 18,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Cilantro (feuilles et tiges tendres)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "plus de persil en cas de coriandre"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon jaune, haché approximativement",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "graines de cumin fraîchement grillées et moulues"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Heat",
      "name": "Poivre de Cayenne ou d'Alep",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "pincée de poivre noir sans chaleur"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Leavener",
      "name": "Soda au four",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Starch",
      "name": "Graines de sésame grillées (pour laminage)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "omit"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Fat",
      "name": "Huile neutre pour friture profonde",
      "ratioValue": 200,
      "defaultUnit": "parts",
      "substitutions": [
        "huile de tournesol ou de canola"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trempage",
      "inputs": [
        "ing_01"
      ],
      "outputState": "soaked_chickpeas",
      "instructions": "Couvrez les pois chiches secs d'au moins trois pouces d'eau froide — ils triplent — et trempez de 18 à 24 heures, en changeant l'eau une fois si votre cuisine est chaude. C'est la seule règle non négociable du falafel : les pois chiches ne sont JAMAIS cuits. Ils réhydratent à juste-tendre cru, et cette amidon brut est ce qui lie la friteuse sans farine ou oeuf. Ne pas utiliser de pois chiches en conserve ou bouillis; ils se transforment en bouillis dans l'huile et s'effondrent.",
      "visualCue": {
        "primaryTarget": "Les pois chiches ont enflé jusqu'à deux à trois fois leur taille sèche, lustré et à la peau lisse, mais l'un d'eux est encore crayeux-pale et ferme au centre — clairement cru.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pois chiches sont petits, durs et ridés; un pois fendus est dense et vitreux.",
            "action": "Continuez à tremper. Les pois chiches vieux ou trempés à froid ont besoin d'une période complète de 24 heures — les haricots trempés moulussent au gravier et restent crus dans les frites."
          },
          {
            "state": "Perfect",
            "description": "Plume, entièrement réhydratée, et facilement divisée en deux avec une vignette, l'intérieur mat et blanc craie. Ils claquent plutôt que de frotter.",
            "action": "Égoutter très soigneusement et s'étendre sur une serviette — l'eau de surface dans la mouture fait un mélange humide et glissant qui ne tiendra pas."
          },
          {
            "state": "Overdone",
            "description": "Les pois chiches sentent l'odeur aigre ou fermentée et l'eau est mousseuse; ils sont trempés trop longtemps au chaud.",
            "action": "Si seulement légèrement amer, rincez fort et continuez. S'il est clairement fermenté, jeter — les haricots acides ruinent le lot."
          }
        ]
      },
      "feelCue": "Un pois chiche cru bien trempé se divise avec un SNAP doux et ferme et se sent frais et amidon, jamais doux ou pasté. Les haricots drainés devraient se déchirer sèchement quand vous secouez la calandre."
    },
    {
      "nodeId": "step_2",
      "action": "Grind",
      "inputs": [
        "soaked_chickpeas",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "falafel_paste",
      "instructions": "Dans un robot culinaire, combiner les pois chiches, persil, coriandre, oignon, ail, cumin, coriandre, cayenne et sel. Pulse — ne pas purifier — grattant à plusieurs reprises, jusqu'à ce que le mélange soit un décombre humide, uniforme, vert brillant la texture de sable ou couscous humides grossiers. Vous êtes à la recherche de broyage, pas de pâte: il devrait être assez fin pour s'accrocher quand pressé mais toujours montrer des grains distincts. Arrête le moment où ça se tient.",
      "visualCue": {
        "primaryTarget": "Un crumble vert vif, d'une finesse égale — comme un gros grain de maïs humide, flanqué d'herbe — qui se range dans une boule lorsqu'il est pressé dans le poing et tient la forme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De gros morceaux de pois chiches non cassés restent et le mélange glisse à l'écart au lieu de s'écraser lorsqu'il est pressé.",
            "action": "Pulse plus et racler les côtés. Le broyage grossier signifie des friseuses qui se désintègrent dans l'huile."
          },
          {
            "state": "Perfect",
            "description": "Fine, sablonneuse et cohésive; une poignée pressée tient sa forme avec une surface légèrement collante et des flocons d'herbe visibles partout.",
            "action": "Arrête. Refroidissez le mélange de 30 à 60 minutes afin qu'il se ferme et s'hydrate uniformément avant de façonner."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est devenu doux, gommant et pâle comme l'hummus, l'eau qui pleure.",
            "action": "Pâte de frites denses et lourdes. Plier dans une cuillère de pois chiches frais et grossiers pour reconstruire la texture si vous le pouvez, ou accepter une friteuse plus dense."
          }
        ]
      },
      "feelCue": "Pressez une poignée : elle doit tenir sa forme avec une faible résistance et laisser votre palmier vert et humide mais pas humide. Il sent fortement l'oignon cru, l'ail et l'herbe coupée."
    },
    {
      "nodeId": "step_3",
      "action": "Forme",
      "inputs": [
        "falafel_paste",
        "ing_10",
        "ing_11"
      ],
      "outputState": "shaped_falafel",
      "instructions": "Juste avant de frire — pas avant — saupoudrer le bicarbonate de soude sur le mélange réfrigéré et le travailler rapidement; il allège l'intérieur et donne une croûte plus croustillante, mais il perd l'ascenseur s'il est assis. Formez des boules de noix ou de petites galettes, appuyez fermement pour les tenir, puis roulez la surface dans des graines de sésame grillées. Ajouter le soda à la dernière minute : mélangé tôt, il s'active et s'aplatit, et les frites frisent le plomb.",
      "visualCue": {
        "primaryTarget": "Balles serrées, sans fissures ou disques épais d'environ 1,5 pouces, surface légèrement encroûtée en sésame, tenant leur forme sans s'effondrer sur le plateau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange ne cohere pas et les boules craquent et s'effondrent aux bords pendant que vous les formez.",
            "action": "La mouture était trop grossière ou trop sèche — poussez une portion plus fine, ou ajoutez une cuillère à café d'eau ou de farine de pois chiche pour se lier, puis re-test."
          },
          {
            "state": "Perfect",
            "description": "Des beignets lisses et fermes qui tiennent un rond propre et se sentent frais et dense dans la main, surface uniformément clouée de sésame.",
            "action": "Faire frire immédiatement pendant que le bicarbonate de soude est fraîchement actif et que les friteuses sont froides."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes en forme sont humides et s'effondrent, laissant un frottis humide sur le plateau.",
            "action": "La pâte est trop lâche; refroidir plus longtemps à fermer, ou travailler dans un peu de farine de pois chiches. Les beignets mouillés crachent et se brisent dans l'huile."
          }
        ]
      },
      "feelCue": "Un bon friser se sent froid, lourd, et emballé, comme du sable humide pressé dans un poing. Il devrait tenir une crête ferme lorsque vous appuyez sur le bord avec un ongle sans s'effondrer."
    },
    {
      "nodeId": "step_4",
      "action": "Fry",
      "inputs": [
        "shaped_falafel",
        "ing_12"
      ],
      "outputState": "finished_falafel",
      "instructions": "Chauffer l'huile à 175°C / 350°F — assez chaud pour qu'une pincée de mélange s'échauffe instantanément et flotte. Faire frire les frites en lots sans encombrer, en tournant une fois, pendant 3 à 4 minutes jusqu'à ce que l'acajou-brun profond et craquelé partout. Trop frais et ils boivent de l'huile et restent gras et crus; trop chaud et la croûte brûle avant que le centre cru ne cuise. Égoutter sur une grille, saler légèrement pendant qu'il fait chaud et servir à la fois avec de la sauce tahini, des cornichons et du pain chaud.",
      "visualCue": {
        "primaryTarget": "Une croûte profonde, même brune d'acajou, qui craque audiblement lorsqu'elle est pressée; scintillante, l'intérieur est à la vapeur, moelleux et vert vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle et doux, le friser est bas dans l'huile et l'intérieur est dense, pâteux et cruellement herbacé quand mordu.",
            "action": "Relever la température de l'huile et faire frire plus longtemps. Les falafels pâles sont gras et peu cuits au cœur — ils doivent atteindre le brun profond."
          },
          {
            "state": "Perfect",
            "description": "Dark, robuste et croustillant, flottant haut dans l'huile avec un flux constant de fines bulles; l'intérieur est léger, humide, et vivement vert.",
            "action": "Soulevez - vous sur une grille, assaisonnez - la d'un peu de sel et mangez chaud; la croûte s'adoucit rapidement une fois refroidie."
          },
          {
            "state": "Overdone",
            "description": "Proche noir et acride, avec un intérieur dur, creux, sec.",
            "action": "Baissez la température de l'huile pour le prochain lot et tirez-les plus tôt. Le falafel brûlé goût amer — le reste peut être récupéré émietté dans une salade."
          }
        ]
      },
      "feelCue": "Un falafel fini est léger pour sa taille et la croûte donne un crépitement fragile et se brise sous un pouce; vapeur et un arôme herbacé chaud au cumin se précipitent alors qu'il s'ouvre."
    }
  ]
};
