export default {
  "repoId": "master_japanese_onigiri_001",
  "parentRepoId": null,
  "slug": "onigiri",
  "author": "ForkRecipe Kitchen",
  "title": "Onigiri",
  "description": "Boules de riz japonaises pressées à la main — riz assaisonné à grains courts en triangles autour d'un remplissage salé et enveloppé dans le nori, le déjeuner portable le plus parfait jamais conçu.",
  "cuisine": "Japonais",
  "culture": "Tokyo",
  "category": "grains",
  "tags": [
    "Japonais",
    "riz",
    "portable",
    "collation",
    "Vite"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz japonais à grains courts (koshihikari)",
      "ratioValue": 2,
      "defaultUnit": "cups",
      "substitutions": [
        "Riz sushi",
        "riz calrose"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau froide (pour la cuisson du riz)",
      "ratioValue": 2.2,
      "defaultUnit": "cups",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel de mer fin (pour les mains mouillantes)",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Umeboshi (plume pickled) ou remplissage de mayo au thon",
      "ratioValue": 6,
      "defaultUnit": "pieces",
      "substitutions": [
        "flocons de saumon salés",
        "kombu assaisonné"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Garnish",
      "name": "Feuilles de nori, découpées en bandes larges",
      "ratioValue": 3,
      "defaultUnit": "sheets",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel de mer fin (pour l'assaisonnement du riz)",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Riz cuit",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "cooked_rice",
      "instructions": "Rincez le riz dans de l'eau froide, tourbillonnez doucement avec votre main et égouttez-le jusqu'à ce que l'eau soit presque claire — généralement 4-5 rinçages. Cela élimine l'excès d'amidon de surface qui rendrait le riz collant. Égoutter dans un tamis pendant 10 minutes. Mélanger le riz rincé et l'eau froide dans une casserole lourde ou une cuisinière à riz. Si vous utilisez un pot : porter à ébullition à feu vif, puis réduire immédiatement à la flamme la plus basse possible, couvrir soigneusement et cuire pendant 13 minutes sans soulever le couvercle. Retirer du feu et laisser la vapeur encore couverte pendant 10 minutes. L'étape de vapeur n'est pas facultative, elle égalise l'humidité dans chaque grain. Dépliez-vous doucement avec une pagaie de riz ou une large spatule, pliant plutôt que de remuer, ce qui briserait les grains.",
      "visualCue": {
        "primaryTarget": "Grains collants, brillants et séparés, qui s'accrochent ensemble lorsqu'ils sont pressés, mais qui se séparent avec un pliage doux — pas de taches blanches sèches, pas de masses humides entassés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains ont un centre blanc crayeux quand pincée en deux, et le riz cuit a une morsure légèrement croquante au cœur.",
            "action": "Saupoudrer 1 cuillerée à soupe d'eau sur la surface, recouvrir et cuire sur la flamme la plus basse pendant 5 minutes de plus. La vapeur résiduelle de l'eau ajoutée est généralement suffisante."
          },
          {
            "state": "Perfect",
            "description": "Grains translucides et brillants qui sont tout simplement distincts lorsqu'ils sont étalés sur une planche, mais pressez fermement lorsqu'ils sont pressés. Une légère douceur de riz cuit avec une vapeur propre et légèrement féculente montant de la casserole.",
            "action": "Assaisonner légèrement de sel, plier doucement et couvrir d'un chiffon humide pour garder au chaud pendant que vous préparez votre remplissage et vos mains."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont gonflés, fendus et musqués, et se cassent en pâte plutôt qu'en morceaux distincts. Le fond du pot peut être brûlé.",
            "action": "Le riz musqué rend encore l'onigiri comestible, plus doux en texture. Dégraisser toute couche brûlée au fond et procéder — la vapeur montant du riz humide peut masquer une brûlure jusqu'à ce qu'il soit trop tard."
          }
        ]
      },
      "feelCue": "Appuyez sur une petite quantité de riz entre vos paumes : les grains doivent coller assez fermement pour tenir une forme sans aucune pression, mais quand vous retirez la boule, les grains sur la surface de la fracture doivent être visibles comme des individus plutôt qu'une pâte."
    },
    {
      "nodeId": "step_2",
      "action": "Riz de saison",
      "inputs": [
        "cooked_rice",
        "ing_06"
      ],
      "outputState": "seasoned_rice",
      "instructions": "Alors que le riz est encore chaud (pas chaud — le riz chaud scalde vos mains lors de la formation), saupoudrer le sel uniformément sur la surface et le plier doucement avec la pagaie de riz, tourner le riz sur lui-même plutôt que de remuer. Bouche: le riz doit être légèrement, uniformément salé — juste assez pour goûter à l'assaisonnement lors de la première bouchée, pas trop puissant. Le remplissage ajoutera plus de sel, donc errez sur le côté doux. Couvrir le riz assaisonné d'un chiffon humide pour éviter le séchage. Préparez un petit bol d'eau mélangé avec une pincée de sel pour moudre vos mains avant de façonner, ce qui empêche de coller et ajoute une légère croûte à l'extérieur de l'onigiri.",
      "visualCue": {
        "primaryTarget": "Éblouissant uniformément riz chaud avec un éclat uniforme, pas de cristaux de sel visibles à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les cristaux de sel encore visibles, inégalement distribués — les morsures d'onigiri seront variablement molles et salées.",
            "action": "Plier plus doucement mais soigneusement, en veillant à ce que chaque poche de riz soit tournée. Goûtez encore après le pliage."
          },
          {
            "state": "Perfect",
            "description": "Toujours assaisonné, chaud et souple, avec une salinité propre qui améliore la douceur naturelle du riz sans dominer.",
            "action": "Couvrir et procéder à la mise en forme en 15 minutes alors que le riz est encore assez chaud pour être moulé."
          },
          {
            "state": "Overdone",
            "description": "Le riz est trop salé après l'assaisonnement — l'ajout de garnitures rendra chaque bouchée désagréablement bruine.",
            "action": "Mélanger dans une tasse de riz cuit chaud non assaisonné pour diluer. Le ratio de remplissage par rapport au riz changera également, donc ajuster le remplissage en conséquence."
          }
        ]
      },
      "feelCue": "Le riz assaisonné devrait se sentir chaud et légèrement collant sur le bout des doigts — pas gommé, pas sec. S'il se sent frais au toucher, il sera difficile à former et l'onigiri tombera en morceaux. Des liens de riz chauds; des miettes de riz froid."
    },
    {
      "nodeId": "step_3",
      "action": "Forme onigiri",
      "inputs": [
        "seasoned_rice",
        "ing_04",
        "ing_03"
      ],
      "outputState": "shaped_onigiri",
      "instructions": "Mouiller les deux palmiers avec l'eau salée et secouer l'excès — mains humides, pas mouillées. Faites une poignée de riz chaud (environ 120 à 130 g) et aplatissez-la dans votre palmier. Placez la garniture (un umeboshi, ou une cuillère à café de mayo de thon) au centre et pliez le riz dessus, pressez doucement pour envelopper complètement la garniture. Maintenant, coupez le riz dans les deux mains et appuyez fermement dans un triangle en positionnant votre main dominante dans une forme en V (comme une pointe de flèche) sur le dessus, et en courbant votre autre main sur la base plate. Appliquer une pression ferme, même de trois côtés simultanément, en tournant le triangle d'un quart de tour et en pressant à nouveau. Répétez 4–6 fois — vous voulez un triangle compact et dense qui tient sa forme mais qui n'est pas dur. Chaque presse doit se sentir définitive.",
      "visualCue": {
        "primaryTarget": "Un triangle dense et nettement défini avec trois faces plates et des coins pointus soignés, le remplissage invisible et centré à l'intérieur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Onigiri est lâche et émiettée — il s'écroule lorsqu'il est ramassé et le remplissage est visible et incertain.",
            "action": "Appuyez plus fermement et pivotez à travers plus de répétitions. Des liens de riz chauds et bien assaisonnés avec une pression soutenue; le riz froid ou sous-assaisonné ne le fera pas."
          },
          {
            "state": "Perfect",
            "description": "Triangle ferme et compact qui tient sa forme lorsqu'il est tenu dans une main, sans fissures sur les faces. La surface est légèrement collante et dense, non sèche.",
            "action": "Enveloppez le nori immédiatement pour le croquant, ou entreposez le nori plus doux. Mieux manger dans les 4 heures à température ambiante."
          },
          {
            "state": "Overdone",
            "description": "Onigiri a été pressé si dur il est presque solide et le remplissage a été écrasé plat — la texture sera dense et collante à manger, comme une brique de riz comprimé.",
            "action": "Rien à défaire — servir et noter d'utiliser une pression plus légère la prochaine fois. Un bon onigiri nécessite une pression ferme, pas un écrasement."
          }
        ]
      },
      "feelCue": "Tenez le triangle fini dans une main et rebondissez-le doucement une fois — il devrait se sentir suffisamment dense et solide, faisant un bruit calme et muet contre votre paume. Une sensation creuse ou cliquetis signifie trop lâche. Une sensation de poids mort, d'inefficacité, c'est trop comprimé."
    },
    {
      "nodeId": "step_4",
      "action": "Envelopper de nori",
      "inputs": [
        "shaped_onigiri",
        "ing_05"
      ],
      "outputState": "finished_onigiri",
      "instructions": "Pour la présentation classique: couper une feuille de nori en une large bande juste assez large pour couvrir une face du triangle et surplomber des deux côtés. Appuyez fermement sur le nori contre la face inférieure et repliez le surplomb sur les deux côtés. Le nori doit s'accrocher naturellement à la surface du riz — presser doucement mais fermement partout. Servir immédiatement pour une croûte maximale de nori : le nori commence à absorber l'humidité du riz dans les 10 à 15 minutes et deviendra cuireux s'il reste assis. Pour les déjeuners emballés, enveloppez le nori séparément dans un petit morceau de papier et appuyez-le sur le riz juste avant de manger — le truc de dépannage classique pour préserver la croûte.",
      "visualCue": {
        "primaryTarget": "Une feuille de nori noir foncé et brillant est pressée en douceur contre le triangle de riz pâle, faisant un contraste net. Le nori est croquant et plat, pas bubbled ou lifting.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Nori touche à peine le riz et lève les bords — pas assez pressé pour se lier.",
            "action": "Appuyez fermement sur les deux pouces. L'humidité de la surface du riz lie le nori en quelques secondes s'il est serré."
          },
          {
            "state": "Perfect",
            "description": "Nori est lisse et plat, noir brillant profond, avec un craquelin satisfaisant quand l'onigiri est mordu — le contraste de nori croquant et de riz tendre est la texture déterminante.",
            "action": "Servir dans les 10 minutes pour une croûte maximale. Envelopper le papier pour la portabilité."
          },
          {
            "state": "Overdone",
            "description": "Nori est sur le riz depuis plus de 20 minutes et est devenu doux, caoutchouteux et légèrement visqueux contre la surface du riz.",
            "action": "Peler le nori ramolli et le remplacer par une bande fraîche. C'est exactement pourquoi les dépanneurs utilisent le système d'emballage nori-séparé."
          }
        ]
      },
      "feelCue": "Bite à travers le coin: vous devriez sentir le nori craquer proprement avec une touche croquante, puis le rendement, la résistance douce du riz assaisonné, et enfin l'éclatement du remplissage au centre. Trois textures distinctes en une seule bouchée. Cette progression est tout le point."
    }
  ]
};
