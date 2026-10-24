export default {
  "repoId": "master_chinese_scallion-oil_001",
  "parentRepoId": null,
  "slug": "scallion-oil",
  "author": "ForkRecipe Kitchen",
  "title": "Huile d'échouement",
  "description": "Le condiment le plus polyvalent de Shanghai — l'huile neutre lentement infusée de gingembre et d'une montagne de pétoncles jusqu'à ce qu'ils deviennent dorés et parfumés, laissant derrière eux une huile qui élève tout ce qu'elle touche.",
  "cuisine": "Chinois",
  "culture": "Shanghainese",
  "category": "condiments",
  "tags": [
    "Chinois",
    "scalpel",
    "huile",
    "condiment",
    "végétalien",
    "marque à l'avance"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "25 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Huile neutre (cacahuète, canola ou graines de raisin)",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "Huile de son de riz",
        "huile de tournesol"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Échalons (oignons verts), entiers",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "oignons de printemps",
        "Ciboulette chinoise (plus affirmée)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Gingembre frais, pelé et tranché de 5 mm d'épaisseur",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "infused_scallion_oil",
      "instructions": "Trimez et lavez soigneusement les pétoncles — toute humidité piégée provoquera une éclaboussure agressive de l'huile lorsqu'elle touchera la casserole. Pat complètement sec avec des serviettes en papier, ou mieux, les déposer pendant 30 minutes à l'air sec. Mélanger l'huile, les pétoncles entiers et les tranches de gingembre dans une casserole froide ou moyenne. Mettre à feu moyen-doux. Il est essentiel de commencer par le froid — il donne au pétoncle et au gingembre le temps de libérer lentement leurs composés aromatiques volatils dans l'huile avant qu'un brunissement ne se produise. À mesure que l'huile chauffe, les pétoncles commencent à se faner, puis adoucissent, puis bullent. Le bouillonnement est la teneur en eau de la cuisson du pétoncle — tant qu'il bouillonnera vigoureusement, la température restera en dessous du brunissement. Laissez l'huile infuser lentement pendant 10 à 12 minutes, en retournant parfois les pétoncles avec des pinces.",
      "visualCue": {
        "primaryTarget": "Les écailles qui se trouvent dans l'huile, entièrement submergées, bouillonnent activement (par leur propre humidité) mais ne brunissent pas encore — elles devraient être limpides et jade-vertes, l'huile autour d'elles commençant à devenir légèrement dorée et sentant distinctement l'écaille grillée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pétoncles sont encore raides et crus-verts, l'huile est à peine chaude, et il n'y a ni bouillonnement ni arôme. L'huile semble et sent complètement neutre.",
            "action": "Augmenter le feu légèrement à moyen-doux. La perfusion nécessite une chaleur soutenue pour extraire les composés aromatiques du pétoncle — l'huile froide ne peut pas le faire."
          },
          {
            "state": "Perfect",
            "description": "Les pétoncles sont ramollis et translucides, immergés dans de l'huile bouillonnante. L'huile a pris une faible teinte dorée et la cuisine sent doucement de l'échon et du gingembre.",
            "action": "Continuez à surveiller de près — une fois que le bouillonnement ralentira, le brunissement commencera rapidement."
          },
          {
            "state": "Overdone",
            "description": "L'huile est arrivée à ébullition vigoureuse avec les pétoncles et est éclaboussante — la chaleur est trop élevée et l'extraction aromatique va trop vite, risquant de brûler.",
            "action": "Réduire immédiatement la chaleur au réglage le plus bas et remuer pour refroidir légèrement les pétoncles. Laisser infuser doucement."
          }
        ]
      },
      "feelCue": "L'huile devrait se sentir à peine chaude lorsque vous tenez votre main à 15 cm au - dessus de la surface — pas assez chaude pour s'approcher, mais assez chaude pour se sentir clairement sur votre paume. Cette chaleur douce et patiente sépare une huile de pétoncle avec une douceur délicate de l'une avec un bord cru ou amer."
    },
    {
      "nodeId": "step_2",
      "action": "Aromates frits",
      "inputs": [
        "infused_scallion_oil"
      ],
      "outputState": "fried_scallion_oil",
      "instructions": "Après la perfusion initiale, augmenter le feu à moyen et laisser l'huile continuer à cuire les pétoncles jusqu'à ce qu'ils passent du vert jade à un jaune doré pâle, les bords commençant à montrer les premiers signes de brunissement. Cette étape prend 5 à 8 minutes après le réchauffement. Surveillez le moment où les bouillonnements vigoureux ralentissent, ce qui signifie que les pétoncles ont perdu la plus grande partie de leur humidité et commencent maintenant à frire dans l'huile plutôt que dans la vapeur. C'est quand le brunissement accélère rapidement. Dès que les pétoncles sont jaune-or avec des bouts d'ambre pâle, retirer de la chaleur — ils continueront à cuire dans la chaleur résiduelle de l'huile.",
      "visualCue": {
        "primaryTarget": "Les pétoncles qui se sont effondrés de leur état rigide vert vif à doux, jaune doré, rubans légèrement translucides avec ambre pâle aux extrémités et aux extrémités les plus fines. L'huile qui les entoure est une couleur claire et claire.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pétoncles sont encore verts et mou, mais pas encore dorés — la couleur n'est pas passée du jade à l'or jaune, et le bouillonnement est encore vigoureux, ce qui signifie que l'humidité s'évapore encore.",
            "action": "Continuez à frire avec patience. La transition de couleur du vert à l'or est le signal clé, pas un minuteur."
          },
          {
            "state": "Perfect",
            "description": "Un jaune d'or pâle uniforme dans l'ensemble, jaune-auto aux extrémités, l'huile clairement teintée et sentant l'allium doux et grillé — miellé et rond plutôt que vif. Les pétoncles sont entièrement tendres et légèrement croquants aux parties les plus minces.",
            "action": "Retirer immédiatement du feu et ajouter le sel."
          },
          {
            "state": "Overdone",
            "description": "Les écailles sont devenues brun moyen à brun foncé et sentent l'acre ou l'amertume. L'huile est une couleur ambre profonde avec un bord vif, légèrement brûlé à son parfum.",
            "action": "Retirez les pétoncles immédiatement. L'huile peut encore être utilisable si le brunissement a été pris tôt — goûtez - le; si amer, jeter. Si simplement plus profond et plus grillé, l'utiliser dans des plats qui peuvent absorber des saveurs plus fortes."
          }
        ]
      },
      "feelCue": "Écoutez attentivement au fur et à mesure que l'infusion progresse : le craquage vigoureux de l'humidité qui s'échappe ralentira à un étourdissement plus calme et plus doux lorsque les pétoncles s'assècheront et commenceront à frire. Ce silence du son est votre signal que le brunissement est imminent — ne laissez pas la poêle à ce stade."
    },
    {
      "nodeId": "step_3",
      "action": "Filtrer",
      "inputs": [
        "fried_scallion_oil",
        "ing_04"
      ],
      "outputState": "finished_scallion_oil",
      "instructions": "Retirer la poêle du feu et remuer immédiatement le sel — elle se dissoudrea dans l'huile chaude et l'assaisonnera. Laisser refroidir légèrement l'huile pendant 2 à 3 minutes (les pétoncles continueront à cuire dans la chaleur résiduelle, approfondissement légèrement de l'ambre doré à pâle). Puis enfoncez l'huile dans un tamis à mailles fines dans un pot ou un récipient propre et résistant à la chaleur, en appuyant doucement sur les solides pour extraire chaque goutte d'huile aromatisée. Jeter les solides de pétoncle et de gingembre usés — ils ont tout donné à l'huile et n'ont plus rien à offrir. Laisser refroidir l'huile à température ambiante avant de sceller. Il conserve réfrigéré jusqu'à 3 semaines et se solidifie légèrement à froid; porter à température ambiante avant d'utiliser. Arrosez les nouilles froides, les poissons cuits à la vapeur, les conges ou utilisez n'importe où le parfum doux et doux de l'échon devrait être présent sans la texture de l'échon cru.",
      "visualCue": {
        "primaryTarget": "Une huile claire, jaune-ambre avec une teinte dorée et chaude – nettement plus profonde que l'huile neutre mais non opaque ou sombre. La surface est parfaitement lisse et propre, sans solides flottants. Porté à la lumière, il brille l'or.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile est encore pâle et presque claire, à peine teintée. Les pétoncles ont été enlevés avant de transférer suffisamment de couleur et d'arôme.",
            "action": "L'huile est encore utile mais douce. Pour l'intensifier, réchauffez-le avec du pétoncle frais et réinfusez-le."
          },
          {
            "state": "Perfect",
            "description": "Une belle, claire, huile d'ambre chaude qui sent l'échalote douce, caramélisée et le gingembre doux lorsqu'il est tenu près du nez. Une bruine sur une plaque blanche montre instantanément sa couleur.",
            "action": "Conserver dans un pot scellé. Utilisez toujours une cuillère propre et sèche pour prévenir la contamination."
          },
          {
            "state": "Overdone",
            "description": "L'huile est un ambre foncé profond qui s'approche du brun et a un bord amer au goût. Les pétoncles étaient surnommés avant d'être tendus.",
            "action": "Goûtez bien. Si simplement plus intense et grillé sans amertume, utilisez-le dans les marinades ou les frites à remuer où il sera cuit plus loin. Si amer, jetez et recommencez."
          }
        ]
      },
      "feelCue": "Une bruine d'huile de pétoncle finie sur le dos de votre main doit se sentir soyeuse et propre, pas grasse ou lourde. Il devrait sentir de façon indiscutable de l'échalote douce et grillée — si vous fermez les yeux, il devrait vous transporter directement au comptoir d'un magasin de nouilles de Shanghai."
    }
  ]
};
