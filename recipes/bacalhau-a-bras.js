export default {
  "repoId": "master_portuguese_bacalhau_a_bras_001",
  "parentRepoId": null,
  "slug": "bacalhau-a-bras",
  "author": "ForkRecipe Kitchen",
  "title": "Bacalhau à Brás",
  "description": "La morue salée bien-aimée du Portugal se brouillait — bacalhau mince éparpillé de pommes de terre de paille croustillantes et d'œufs à égratignures lentes, puis fini avec des olives noires et du persil à feuilles plates vives. Le plat est une étude en contraste : sel et soie, croquant et crème.",
  "cuisine": "Portugais",
  "culture": "Portugais",
  "category": "proteins",
  "tags": [
    "morue salée",
    "BACALHAU",
    "portugais",
    "œufs",
    "pommes de terre",
    "confort"
  ],
  "difficulty": 2,
  "activeTime": "40 min",
  "totalTime": "1 hr (plus overnight soak)",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Cabillaud salé (bacalhau), filets de peau",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "morue fraîche (réduire le trempage, ajouter le sel)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Pommes de terre de cire, pelées",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "Yukon Pommes de terre d'or"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Oeufs grands",
      "ratioValue": 6,
      "defaultUnit": "ea",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon blanc, tranché finement",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Girofles d'ail, tranchés minces",
      "ratioValue": 4,
      "defaultUnit": "ea",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Persil à feuilles plates, approximativement haché",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Olives noires piquées (Kalamata ou Gaeta)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Poivre noir, fraichement craqué",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trempage",
      "inputs": [
        "ing_01"
      ],
      "outputState": "desalted_cod",
      "instructions": "Placer la morue salée dans un grand bol d'eau froide, côté peau vers le haut. Réfrigérer et changer l'eau trois fois sur 24 heures – à intervalles de 8 heures est idéal. Les poissons doivent goûter à la mer, pas à la saumure. Après tremper, sécher soigneusement et enlever les os restants avec des pinces.",
      "visualCue": {
        "primaryTarget": "La chair a plumé et est passée de raide et ivoire à blanc doux et légèrement translucide, presque comme du poisson frais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La chair est toujours très raide, visiblement réduite. Goûte intensément, douloureusement salée, comme manger un cube assaisonné.",
            "action": "Changez l'eau et retournez au réfrigérateur pendant encore 8 heures. Goûtez encore avant de continuer."
          },
          {
            "state": "Perfect",
            "description": "Le poisson est pliable, se déchire facilement le long des lignes de flocons, et goûte agréablement saline — comme un bouillon bien assaisonné, pas un lécher de sel.",
            "action": "Égoutter et sécher. Passez à l'étape du braconnage."
          },
          {
            "state": "Overdone",
            "description": "Le poisson est devenu fade et waterlogged, perdant toute sa profondeur caractéristique de bacalhau. La chair se déchire d'un coup.",
            "action": "Continuez — les olives et l'assaisonnement soigneux rétabliront l'équilibre. N'ajoutez pas de sel avant de goûter le plat fini."
          }
        ]
      },
      "feelCue": "Le bacalhau bien désalté devrait se sentir semblable à un filet de poisson frais — souple et productif — mais avec une légère fermeté qui l'aidera à tenir ses fils pendant la cuisson."
    },
    {
      "nodeId": "step_2",
      "action": "Pochette",
      "inputs": [
        "desalted_cod"
      ],
      "outputState": "poached_shredded_cod",
      "instructions": "Abaissez la morue dans une large casserole d'eau à peine mijotante (pas d'ébullition en roulant — l'eau devrait trembler). Pocher 5 à 7 minutes jusqu'à ce que la chair soit cuite mais encore humide. Retirer avec une cuillère à fentes et laisser refroidir assez pour manipuler. Épluchez la peau, puis utilisez vos doigts et deux fourchettes pour déchiqueter la morue en morceaux fins, en forme de filet, aussi mince que possible sans la réduire en bouillie.",
      "visualCue": {
        "primaryTarget": "La morue éraflée devrait ressembler à du porc tiré à la texture — de longs fils fins plutôt qu'à des morceaux, aucun plus grand qu'un petit bâtonnet.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Centre de filets épais encore translucides et gélatineux. Ne pas déchiqueter proprement — tient ensemble en gros morceaux.",
            "action": "Retournez à l'eau mijotante pendant 2 minutes. La chaleur douce la fera cuire à travers sans durcir l'extérieur."
          },
          {
            "state": "Perfect",
            "description": "La chair est entièrement blanche opaque, se sépare en flocons naturels, et les râpes en longs fils blancs dorés qui tiennent leur forme.",
            "action": "Réserver et faire frire les pailles de pommes de terre."
          },
          {
            "state": "Overdone",
            "description": "La chair est sèche, crayeuse et se brise en minuscules granules plutôt qu'en fils. A une faible résistance caoutchouteuse.",
            "action": "Procéder — le brouillon d'oeufs lent réhydratera et liera la morue sèche. Une bruine d'huile d'olive supplémentaire vous aidera."
          }
        ]
      },
      "feelCue": "Chaque fil de bacalhau doit avoir un léger ressort à lui — pas musqué, pas caoutchouteux — et l'odeur de la mer avec des tons doux et laiteux du braconnier doux."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "ing_02",
        "ing_06"
      ],
      "outputState": "potato_straws",
      "instructions": "Couper les pommes de terre pelées en julienne d'allumette — environ 2mm × 2mm × 6cm — en utilisant une mandoline ou un couteau tranchant. Rincer à l'eau froide, puis sécher complètement sur les serviettes (pomme de terre humide plutôt que frites). Chauffer de 2 à 3 cm de l'huile d'olive dans une casserole large à 180°C (une paille d'essai doit étourdir immédiatement). Faire frire les pommes de terre en lots jusqu'à ce que l'or soit léger et croquant, environ 3 à 4 minutes par lot. Égoutter sur un porte-fils, pas des serviettes en papier, qui adoucissent le fond.",
      "visualCue": {
        "primaryTarget": "Les pailles sont d'or pâle — pas brun foncé — assez croustillantes pour se serrer l'une contre l'autre dans le bol, avec une légère translucidité au centre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pailles sont blondes et boiteuses, pliantes sans craquer. Les centres sont encore féculents et denses.",
            "action": "Retourner à l'huile pendant 60 à 90 secondes. Assurez-vous que la température de l'huile est assez élevée — les lots encombrés baissent la température."
          },
          {
            "state": "Perfect",
            "description": "Or léger, rigide et croustillant. Ils sonnent comme des carillons de verre quand ils sont jetés. L'intérieur est moelleux et cuit.",
            "action": "Assaisonner légèrement avec du sel (le bacalhau ajoute plus) et réserver jusqu'à assemblage."
          },
          {
            "state": "Overdone",
            "description": "Ambre profond à brun, amer dans l'arrière-goût. Certains ont peut-être obscurci aux extrémités.",
            "action": "Utilisez - les — Bacalhau à Brás est pardon. L'oeuf et l'huile d'olive adoucissent l'amertume. Ensuite, baissez légèrement la chaleur."
          }
        ]
      },
      "feelCue": "Une paille parfaite s'enclenche proprement entre deux doigts avec une fissure sèche, ne laissant aucune graisse au bout des doigts. Si elle fléchit, il lui faut plus de temps de pétrole."
    },
    {
      "nodeId": "step_4",
      "action": "Saucisse",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "softened_aromatics",
      "instructions": "Dans la même casserole (sauter l'excès d'huile de friture, laisser un mince film), chauffer 2 cuillères à soupe d'huile d'olive fraîche à feu moyen. Ajouter l'oignon et faire cuire lentement pendant 10 à 12 minutes, en remuant occasionnellement, jusqu'à ce qu'il soit profondément doux, translucide et légèrement doré aux bords. Ajouter l'ail dans les 2 dernières minutes et remuer jusqu'à ce qu'il soit parfumé mais non coloré.",
      "visualCue": {
        "primaryTarget": "L'oignon est confitureux, translucide et effondré, avec des bords dorés. L'ail est doux et parfumé, mais encore crème pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore opaque et a une netteté brute sur la langue. L'ail sent vif et cru.",
            "action": "Abaissez le feu et donnez-lui encore 3-4 minutes, couvert. La vapeur aidera à faire tomber l'oignon."
          },
          {
            "state": "Perfect",
            "description": "L'oignon s'est complètement sucré, les bords montrent des notes de caramel, et l'ail sent la noix et le sucre. Le fond de la poêle a un faible goût doré.",
            "action": "Ajouter la morue déchiquetée et les pailles de pomme de terre et mélanger."
          },
          {
            "state": "Overdone",
            "description": "L'oignon est brun et croustillant aux bords, l'ail est foncé jusqu'à l'ambre ou au-delà.",
            "action": "Déglacer avec un jet d'eau pour arrêter le brunissement. La douceur de l'œuf compensera, mais notez pour la prochaine fois."
          }
        ]
      },
      "feelCue": "Lorsque vous pressez un morceau d'oignon entre le pouce et le doigt après 10 minutes, il devrait s'effondrer complètement sans résistance — comme presser la cire chaude."
    },
    {
      "nodeId": "step_5",
      "action": "Plier",
      "inputs": [
        "softened_aromatics",
        "poached_shredded_cod",
        "potato_straws",
        "ing_03",
        "ing_09",
        "ing_10"
      ],
      "outputState": "assembled_bras",
      "instructions": "Ajouter la morue déchiquetée aux oignons et à l'ail. Mélanger doucement à feu moyen-doux pendant 1 minute pour réchauffer et épouser les saveurs. Ajoutez encore les pailles de pommes de terre et jetez - vous voulez qu'elles soient encore croustillantes à ce stade. Battre légèrement les oeufs avec une fourchette (ne pas assaisonner — la morue fait cela) et verser sur le mélange. Plier continuellement avec une spatule à feu doux, en tirant les œufs à travers le mélange en vagues lentes. Retirer de la chaleur pendant que les œufs sont encore un peu sous-dosés — ils feront cuire.",
      "visualCue": {
        "primaryTarget": "Les oeufs forment des rubans mous, crémeux et à peine sertis qui s'accrochent à la morue et aux pommes de terre et les enrobent sans se regrouper en liquide brut au fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les œufs sont encore visiblement liquides, se superposant au fond de la poêle lorsqu'ils sont inclinés. Le mélange glisse plutôt que de se tenir ensemble.",
            "action": "Continuer à plier à feu doux. Soyez patient — n'élèvez pas la chaleur, ou vous obtiendrez des caillés caoutchouteux."
          },
          {
            "state": "Perfect",
            "description": "Les œufs sont simplement sertis, brillants et crémeux, la consistance des oeufs brouillés français. Le plat tient ensemble sur la spatule dans une masse humide et cohésive.",
            "action": "Retirer immédiatement du feu et servir. Chaque seconde sur la chaleur passé ce point est une seconde trop."
          },
          {
            "state": "Overdone",
            "description": "Les oeufs sont secs et granulés, entièrement sertis et séparés de la morue et de la pomme de terre. Le mélange semble émietté et sablonneux.",
            "action": "Ajoutez une cuillerée à soupe d'huile d'olive et pliez-la au feu. Servir immédiatement."
          }
        ]
      },
      "feelCue": "La poêle devrait sentir la lumière et le mélange devrait se déplacer en une seule masse molle lorsque vous l'inclinez — pas slosh comme des œufs crus, pas résister comme un brouillon sec. Il y a une fenêtre de 30 secondes où elle est parfaite."
    },
    {
      "nodeId": "step_6",
      "action": "Garnir",
      "inputs": [
        "assembled_bras",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_bacalhau_bras",
      "instructions": "Dispersez généreusement le persil grossièrement haché sur le dessus — ce n'est pas seulement une garniture ici, mais une plante brillante, contrepoint au sel et à la richesse. Ajouter les olives, éparpillées entières ou coupées en deux. Arrosez avec un fil de votre meilleure huile d'olive. Goûtez et ajustez le sel seulement si nécessaire — il le sera rarement. Servir immédiatement dans la poêle ou sur des assiettes chaudes; ce plat n'attend pas.",
      "visualCue": {
        "primaryTarget": "Une masse dorée et crémeuse parsemée de bijoux d'olive foncés et de paillettes de persil vert vif. L'huile d'olive brille à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le persil n'a pas encore été ajouté — le plat semble monochrome et lourd sans la note à base de plantes brillantes.",
            "action": "Ajoutez le persil maintenant. Ne le sautez pas; il est structurel à la saveur, pas de décoration en option."
          },
          {
            "state": "Perfect",
            "description": "Un contraste vif d'or pâle, de noir de jet et de vert émeraude. L'odeur de l'huile d'olive, du sel et du persil est immédiate et arrêtante.",
            "action": "Servir immédiatement. Bacalhau à Brás n'attend personne."
          },
          {
            "state": "Overdone",
            "description": "Le persil a été ajouté trop tôt et s'est flétri à une couleur olive-drabe, perdant sa luminosité.",
            "action": "Ajouter une poignée de persil frais sur le dessus juste avant de servir pour restaurer la vivacité."
          }
        ]
      },
      "feelCue": "Servir dans une poêle chaude ou sur une assiette chauffée — au moment où le plat atteint une surface froide, l'huile d'olive congeals et les œufs serrer. La meilleure morsure est prise directement dans la poêle."
    }
  ]
};
