export default {
  "repoId": "master_british_yorkshire-pudding_001",
  "parentRepoId": null,
  "slug": "yorkshire-pudding",
  "author": "ForkRecipe Kitchen",
  "title": "Pudding du Yorkshire",
  "description": "Le grand pudding de pâte britannique — une pâte mince et riche en œufs versé dans la graisse d'eau chaude puis cuit jusqu'à ce qu'il se gonfle dans une couronne d'or dramatique, à paroi croustillante et creuse à l'intérieur, le compagnon essentiel du rôti de boeuf.",
  "cuisine": "Anglais",
  "culture": "Le Yorkshire",
  "category": "eggs",
  "tags": [
    "britanniques",
    "œuf",
    "Boeuf rôti",
    "pâte",
    "four",
    "yorkshire"
  ],
  "difficulty": 2,
  "activeTime": "10 min",
  "totalTime": "1 hr 10 min",
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
    "sour": 1,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine plate (tout usage)",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Gros œufs",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Lait entier",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": [
        "moitié lait, moitié eau pour un résultat plus croustillant"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.01,
      "defaultUnit": "part",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Boeuf dégoulinant ou saindoux (ou huile neutre)",
      "ratioValue": 0.1,
      "defaultUnit": "part",
      "substitutions": [
        "gras de canard",
        "huile végétale"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whisk",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "rested_batter",
      "instructions": "Mesurer la farine et le sel dans un grand bol et faire un puits au centre. Casser les œufs dans le puits et les fouetter graduellement dans la farine, en tirant de la farine des bords jusqu'à ce qu'une pâte épaisse et sans grumeaux se forme — c'est essentiel, car les grumeaux introduits à la fin ne se lissent jamais complètement. Une fois la pâte lisse, verser dans le lait dans un ruisseau mince, fouettant constamment. La pâte finie doit être la consistance de la crème unique et absolument lisse. Couvrir le bol et le reposer à température ambiante pendant au moins une heure, ou jusqu'à la nuit au réfrigérateur. Le repos permet aux granules d'amidon d'hydrater complètement et le gluten se détendre, donnant l'élasticité de la pâte sans ténacité.",
      "visualCue": {
        "primaryTarget": "Une pâte fine, lisse, de couleur crème sans grumeaux visibles, pâle et légèrement aérée. Lorsqu'il est versé d'une hauteur, il tombe dans un ruban lisse et intact.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est grumelée ou présente des stries visibles de farine sèche. Trop épais pour verser en douceur.",
            "action": "fouetter plus vigoureusement et passer à travers un tamis à mailles fines pour enlever les grumeaux tenaces avant de se reposer."
          },
          {
            "state": "Perfect",
            "description": "Soie et fluide, la couleur de l'ivoire. Enrobe le fouet mais tombe proprement. Ça sent les œufs.",
            "action": "Couvrir et reposer à température ambiante pendant au moins 1 heure."
          },
          {
            "state": "Overdone",
            "description": "La batterie a été sur-reposée au réfrigérateur et sent légèrement acide, ou a été mélangée jusqu'à ce qu'elle soit recouverte de mousse et suraérée.",
            "action": "Une pâte légèrement aigre est encore utilisable — elle va bien gonfler. Éliminez l'excès de mousse avant de verser."
          }
        ]
      },
      "feelCue": "Plongez votre bout de doigt dans la pâte — il doit se sentir frais, soyeux, et laisser un mince, même manteau sur votre peau sans tache de farine gritty. Le mélange doit verser votre poignet dans une feuille propre, pas dans des gouttes."
    },
    {
      "nodeId": "step_2",
      "action": "Chaleur",
      "inputs": [
        "ing_05"
      ],
      "outputState": "smoking_hot_fat",
      "instructions": "Préchauffer le four à 230 C (450 F) — ce n'est pas une suggestion, c'est toute la raison pour laquelle les puddings du Yorkshire s'élèvent. Placer une boîte de 12 tasses ou un grand plateau de cuisson dans le four avec une cuillère à café qui coule dans chaque tasse (ou une piscine généreuse dans le plateau). Chauffer la graisse au four pendant au moins 15 minutes, jusqu'à ce qu'elle éclate, qu'elle fume à la légère et qu'elle crache fort. La graisse doit être violemment chaude : elle éclaire le liquide de la pâte dans un jet de vapeur qui entraîne la montée avant que la structure ne s'installe.",
      "visualCue": {
        "primaryTarget": "La graisse est visiblement ondulante et fumant, une mince brume montant de l'étain. Il brille avec un mirage de chaleur lorsque la porte du four est fissurée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La graisse est chaude mais ne fume pas. Le battement s'étourdira faiblement lorsqu'il sera ajouté et les puddings ne monteront pas correctement.",
            "action": "Retournez l'étain au four pendant encore 5-10 minutes. Ne faites pas de compromis sur cette étape."
          },
          {
            "state": "Perfect",
            "description": "La graisse envoie une faible fumée bleue, scintillant violemment, et une goutte d'eau froide tombe dans une tasse crache agressivement. La température est d'environ 230 °C.",
            "action": "Travail rapide : retirer l'étain du four, verser la pâte immédiatement et retourner au four sans tarder."
          },
          {
            "state": "Overdone",
            "description": "La graisse brûle, fume noir ou s'enflamme. La cuisine se remplit de fumée amère.",
            "action": "Retirer l'étain, jeter la graisse brûlée, essuyer l'étain, ajouter la graisse fraîche et réchauffer. Ne versez jamais de pâte sur la graisse brûlée."
          }
        ]
      },
      "feelCue": "Lorsque vous ouvrez le four, une vague de chaleur farouche, sèche, presque métallique devrait vous rouler. Cette intensité est ce dont vous avez besoin. S'il est simplement chaud, le four n'est pas assez chaud."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "smoking_hot_fat",
        "rested_batter"
      ],
      "outputState": "baked_yorkshire_pudding",
      "instructions": "Travaillant avec une vitesse décisive, retirez l'étain très chaud du four et placez-le sur une surface thermofuge. Versez la pâte d'une cruche dans chaque tasse, en remplissant chacun environ un tiers plein. La pâte doit étourdir et commencer immédiatement à cuire autour des bords au contact de la graisse. Retourner l'étain au four instantanément — chaque seconde de retard coûte augmenter. Faire cuire à 230 C (450 F) pendant 20 à 25 minutes. N'ouvrez pas la porte du four pendant les 15 premières minutes en aucune circonstance : une rafale d'air est suffisante pour les effondrer.",
      "visualCue": {
        "primaryTarget": "Les puddings ont grimpé de façon spectaculaire au-dessus du bord de l'étain — de hautes couronnes creuses avec des murs profondément dorés, croustillants et un plancher intérieur plus léger et crépuscule.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pale, plat ou légèrement gonflé. Les centres semblent mouillés et les murs sont doux. L'intérieur sent l'oeuf cru.",
            "action": "Retournez immédiatement au four. Ne pas enlever jusqu'à ce que les murs soient visiblement rigides et dorés. Un centre humide signifie 5 minutes de plus minimum."
          },
          {
            "state": "Perfect",
            "description": "De l'or carbonisé avec des crêtes brun foncé. Les murs sont rigides et creux lorsqu'ils sont tapés. Les gobelets ont grimpé au moins 5 cm au-dessus du bord en étain.",
            "action": "Retirer et servir immédiatement — ils commencent à se dégonfler quelques minutes après avoir quitté le four."
          },
          {
            "state": "Overdone",
            "description": "Les murs sont brun très foncé et s'approchent du noir aux extrémités. La base sent la graisse brûlée.",
            "action": "Trim n'importe quel bord vraiment carbonisé. L'intérieur est presque certainement encore bon — la couleur dramatique est surtout sur la croûte extérieure."
          }
        ]
      },
      "feelCue": "Soulevez un pudding et tapez sur le côté avec votre knuckle — il devrait sembler creux et sec, comme frapper sur une casserole en céramique. Les murs devraient être assez rigides pour tenir leur forme, et non pas pour trembler. Si elle dégonfle lorsque vous la touchez, elle a besoin de plus de temps."
    }
  ]
};
