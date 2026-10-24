export default {
  "repoId": "master_southeast_asian_crispy_shallots_001",
  "parentRepoId": null,
  "slug": "crispy-shallots",
  "author": "ForkRecipe Kitchen",
  "title": "Échalotes frites croustillantes",
  "description": "La garniture essentielle de l'Asie du Sud-Est - les anneaux translucides d'échalote frits lentement dans l'huile à partir du froid jusqu'à ce qu'ils se transforment en boucles minces en papier, or ambre, incroyablement croquantes qui sentent l'oignon caramélisé et le goût de la profondeur douce et salée. La touche finale sur nasi goreng, pho, gado-gado, et une centaine d'autres plats.",
  "cuisine": "Asie du Sud-Est",
  "culture": "Indonésien",
  "category": "condiments",
  "tags": [
    "Échalotes",
    "frits",
    "par an",
    "garniture",
    "Sud-Est asiatique",
    "végétalien",
    "croquant"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Allium",
      "name": "Échalotes (petites échalotes asiatiques à peau mince préférées)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "Échalotes de bananes européennes",
        "oignon rouge, tranché très fin"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile neutre (légume, son de riz ou arachide)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Starch",
      "name": "Farine de riz ou farine pure (facultatif, pour crunch supplémentaire)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Échalotes de tranche",
      "inputs": [
        "ing_01"
      ],
      "outputState": "sliced_shallots",
      "instructions": "Peler les échalotes et les couper en rondelles d'environ 2 mm d'épaisseur – minces et cohérentes. Une trancheuse de mandoline est idéale pour l'uniformité, ce qui est critique : des tranches inégales signifient que certains anneaux brûlent avant que d'autres ne soient dorés. Séparez les anneaux en tranches. Si vous utilisez la méthode de la farine, jetez les anneaux légèrement dans la farine de riz, en agitant l'excès — juste un mince revêtement. Faites sécher les anneaux avec un chiffon avant d'ajouter de la farine, car l'humidité de surface provoque de violentes éclaboussures d'huile.",
      "visualCue": {
        "primaryTarget": "Petits anneaux d'échalote blanc-violet pâle, séparés, secs, éventuellement pulvérisés avec de la farine.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tranches sont épaisses et inégales — environ 5 mm, environ 1 mm. Les tranches épaisses seront sous-cuites pendant que les fines brûlent.",
            "action": "Recoupez les morceaux épais ou triez par épaisseur et faites frire en lots séparés."
          },
          {
            "state": "Perfect",
            "description": "Anneaux cohérents de 2 mm, séparés, pâles et secs. Une fine poudre de farine s'accroche uniformément en cas d'utilisation.",
            "action": "Passez immédiatement à la friture à froid."
          },
          {
            "state": "Overdone",
            "description": "Les échalotes ont été laissées à l'écart et pleurent l'humidité des surfaces coupées. Les anneaux sont doux et humides.",
            "action": "Pat très sec avec des serviettes en papier et procéder. L'humidité supplémentaire provoque la mousse agressive au début."
          }
        ]
      },
      "feelCue": "Les anneaux minces d'échalote doivent se sentir légers et papiers entre vos doigts, presque translucides lorsqu'ils sont tenus à la lumière. Si un anneau déchire le moment où vous le ramassez, l'échalote était trop humide ou coupée trop fine — encore utilisable, mais maniez doucement."
    },
    {
      "nodeId": "step_2",
      "action": "Friandises à démarrage froid",
      "inputs": [
        "sliced_shallots",
        "ing_02"
      ],
      "outputState": "golden_shallots",
      "instructions": "Placer les échalotes dans une poêle froide et verser l'huile sur elles pour les submerger complètement. Placer sur feu moyen et commencer à frire à partir de froid — c'est la technique critique de bawang gong indonésien. Le démarrage à froid déshydrate doucement les échalotes avant que l'huile n'atteigne la température de friture, assurant qu'elles croquent progressivement plutôt que de brûler à l'extérieur tout en restant douces à l'intérieur. Remuer de temps en temps. L'huile va buller doucement à mesure que l'humidité se libère. Augmenter progressivement à moyen-élevé lorsque le bouillonnement ralentit. Tout le processus prend 15 à 20 minutes. Regardez attentivement pendant les 3 à 4 dernières minutes — la transition de l'or pâle à l'ambre parfait pour brûler se fait en 90 secondes.",
      "visualCue": {
        "primaryTarget": "Les échalotes sont d'or ambré profond, enroulées et translucides, flottant dans de l'huile de bouillonnement actif. Le bouillonnement s'est considérablement ralenti par rapport à son rythme vigoureux antérieur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les échalotes sont d'or pâle et encore un peu douces, pliantes plutôt que croquantes lorsqu'elles sont levées. L'huile continue de bouillonner vigoureusement à cause de la libération d'humidité.",
            "action": "Continuez à frire. Le bouillonnement vigoureux ralentira sensiblement lorsque les échalotes seront presque terminées. Reste à la casserole."
          },
          {
            "state": "Perfect",
            "description": "Deep ambre-or, enroulé dans des anneaux serrés et croustillants, huile minimale bouillonnant. Si vous en soulevez un, il se raidit immédiatement et s'écroule — et non se courbe.",
            "action": "Retirez immédiatement avec une souche d'araignée sur un plateau recouvert de papier. Assaisonner de sel bien chaud. Ils croqueront plus loin qu'ils refroidiront."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé, odeur d'oignon brûlé, les anneaux commencent à rétrécir et à s'effondrer. L'huile sent l'acre.",
            "action": "Supprimer immédiatement. Étaler sur des serviettes en papier frais. Bouche: les échalotes légèrement foncées ont un bord amer agréable; les échalotes fortement brûlées doivent être rejetées."
          }
        ]
      },
      "feelCue": "Atteindre avec une araignée ou une cuillère à fentes et lever un anneau de l'huile — il devrait se sentir immédiatement rigide et sécher le moment où l'air le touche, croustillant comme vous regardez. Si elle reste souple et fléchit, elle a besoin de plus de temps. La couleur de l'huile aurait dû s'amplifier et s'édulcorer dans l'odeur, infusée d'échalote."
    },
    {
      "nodeId": "step_3",
      "action": "Égoutter et refroidir",
      "inputs": [
        "golden_shallots",
        "ing_04"
      ],
      "outputState": "finished_crispy_shallots",
      "instructions": "Transférer immédiatement les échalotes frites sur un plateau recouvert de papier-serviettes en une seule couche. Assaisonner avec une pincée de sel fin alors qu'ils sont encore chauds. Ne les empilez pas — ils doivent rester dans une seule couche pendant qu'ils refroidissent, ou la vapeur des couches intérieures fera les couches extérieures soggy. Laisser refroidir complètement à température ambiante. Ils seront croquants de façon spectaculaire car ils refroidissent de très chaud à ambiant. Conserver dans un pot hermétique à température ambiante jusqu'à 1 semaine. La réfrigération les fait perdre leur croûte.",
      "visualCue": {
        "primaryTarget": "Anneaux d'or ambrés, refroidis et profonds, disposés en une seule couche aérée. Lorsque le pot est incliné, ils se froissent et se plient — complètement secs et rigides.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les échalotes sont encore chaudes et se sentent douces et un peu grasses. Ils n'ont pas encore croqué.",
            "action": "Laisser en une seule couche et attendre — ne pas les toucher pendant au moins 5 minutes pendant qu'ils refroidissent. La croustillante arrive avec la chute de température."
          },
          {
            "state": "Perfect",
            "description": "Complètement frais, profondément doré, éclatant et croustillant. Une pincée produit une croûte satisfaisante. Une odeur d'oignon doux et caramélisé.",
            "action": "Entreposer hermétiquement à température ambiante. Utiliser comme garniture sur les soupes, les nouilles, le riz, les salades ou manger directement dans le pot."
          },
          {
            "state": "Overdone",
            "description": "Entreposées hermétiquement au réfrigérateur ou dans un pot humide, les échalotes sont devenues boiteuses et mâcheuses.",
            "action": "Étaler sur un plateau et re-crisp dans un four à 150°C pendant 5 minutes. Refroidir sur le plateau avant de jarreter à nouveau."
          }
        ]
      },
      "feelCue": "Une échalote croustillante correctement refroidie devrait se briser lorsque vous la mordez, non pas en croquant doucement, mais en se brisant véritablement en fines attelles ambres. Ils doivent se sentir presque sans poids dans votre main, comme si toute l'humidité a été remplacée par la croustillante. L'odeur qui ouvre un pot frais est l'une des plus belles de la cuisine."
    }
  ]
};
