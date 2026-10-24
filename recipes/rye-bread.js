export default {
  "repoId": "master_scandinavian_rye_bread_001",
  "parentRepoId": null,
  "slug": "rye-bread",
  "author": "ForkRecipe Kitchen",
  "title": "Pain scandinave",
  "description": "Un pain dense, foncé et tannant de farine de seigle, de grains entiers et de graines, fermenté à long terme avec une entrée de seigle aurdough dans une miette humide et trancheuse qui se conserve pendant des semaines.",
  "cuisine": "Scandinave",
  "culture": "Danois",
  "category": "breads",
  "tags": [
    "seigle",
    "pain",
    "scandinave",
    "végétalien",
    "dense",
    "ensemencées"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "20 hr",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 4,
    "bitter": 2,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de seigle foncé (grain entier)",
      "ratioValue": 70,
      "defaultUnit": "%",
      "substitutions": [
        "farine de seigle moyenne (boue plus légère)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Farine de pain",
      "ratioValue": 30,
      "defaultUnit": "%",
      "substitutions": [
        "farine d'épeautre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau (température froide ou ambiante)",
      "ratioValue": 80,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "Démarrage au sarcophage (hydratation 100%)",
      "ratioValue": 25,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Starch",
      "name": "Seigle craqué ou baies de seigle (soleillé 12 heures)",
      "ratioValue": 30,
      "defaultUnit": "%",
      "substitutions": [
        "avoine laminée (même trempe)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Graines de tournesol",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": [
        "Graines de citrouille",
        "Graines de sésame"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Graines de Carave",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "graines de fenouil",
        "graines d'anis"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Mélasses foncées ou sirop de malt",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": [
        "Treacle foncé",
        "sirop de malt d'orge"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrate",
      "inputs": [
        "ing_06",
        "ing_03"
      ],
      "outputState": "soaked_grains",
      "instructions": "Couvrir d'eau froide les baies de seigle cassées ou les baies entières de seigle et laisser tremper pendant 12 heures ou toute la nuit. Ils absorberont une quantité importante d'eau et s'adouciront considérablement. Égoutter avant d'utiliser. Ce soaker ajoute de la texture, de l'humidité et une mâche aux noix au pain fini: les grains non assommés seraient désagréablement durs et voleraient l'hydratation de la pâte elle - même pendant la cuisson.",
      "visualCue": {
        "primaryTarget": "Des grains de seigle ramollis qui pressent à plat entre deux doigts sans croquer. Ils ont l'air terne et gonflés par rapport aux baies crues et ont presque doublé en taille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore durs au centre — ils croquent ou résistent quand ils sont mordus. Seule la coquille extérieure a ramolli.",
            "action": "Faire tremper encore 4 à 6 heures. L'eau froide ralentit l'absorption; passer à l'eau à température ambiante pour l'accélérer."
          },
          {
            "state": "Perfect",
            "description": "Les grains pressent à plat sans résistance mais conservent leur forme. Ils ont absorbé l'eau partout. L'eau imbibée est féculente et légèrement trouble.",
            "action": "Égoutter et ajouter directement à la pâte. L'humidité du grain est maintenant calculée dans l'hydratation de la pâte."
          },
          {
            "state": "Overdone",
            "description": "Les grains fermentent légèrement dans l'eau de trempage — elle sent l'aurore ou l'alcool. Les grains sont mous et peuvent s'effondrer.",
            "action": "Égoutter et rincer. Le grain est encore utilisable et peut ajouter un tang agréable, mais réduire l'hydratation globale de 2 à 3 % car ils libéreront plus d'eau libre dans la pâte."
          }
        ]
      },
      "feelCue": "Les baies de seigle bien trempées doivent se sentir comme des lentilles cuites — assez douces pour se tarir, suffisamment fermes pour tenir leur forme. Mâchez-en un : pas de croûte dure au centre, juste une mâche uniforme qui donne."
    },
    {
      "nodeId": "step_2",
      "action": "Plier",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_09",
        "soaked_grains",
        "ing_07",
        "ing_08"
      ],
      "outputState": "mixed_rye_dough",
      "instructions": "Mélanger toutes les farines, le seigle, l'eau restante (ajuster à l'humidité des grains), le sel et la mélasse dans un grand bol. Mélanger vigoureusement avec une cuillère en bois ou un racleur de pâte — la pâte de seigle ne contient presque aucun gluten et se comporte plus comme une pâte épaisse que la pâte à pain. Aucun pétrissage n'est nécessaire ou utile : les protéines de seigle ne forment pas de brins de gluten. Pliez dans le soaker égoutté, les graines de tournesol et les graines de carvi jusqu'à répartition uniforme. La pâte sera très collante et raide; elle doit tenir sa forme lorsqu'elle est écorcée mais pas s'étirer. Couvrir et fermenter à température ambiante de 8 à 12 heures.",
      "visualCue": {
        "primaryTarget": "Une pâte dense, collante et très foncée avec des inclusions de grains et de graines visibles. Il tient un pic quand on le prend avec une cuillère — il ne coule pas mais il ne s'étire pas non plus. La surface semble mate et fortement texturée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange semble strié — la farine de seigle foncé et la farine de pain pâle n'ont pas été entièrement intégrés. Des poches de farine sèche sont visibles. Starter n'est pas distribué.",
            "action": "Mélanger encore 3 à 5 minutes avec la cuillère. La pâte de seigle est entièrement mélangée lorsque la couleur est brun foncé uniforme sans stries pâles et que les graines sont uniformément dispersées."
          },
          {
            "state": "Perfect",
            "description": "Masse uniforme, profondément brune, collante avec des grains et des graines distribués uniformément. Il tient sa forme lorsqu'il est écopé et la cuillère tire proprement. Ça sent le bronzage et le malt.",
            "action": "Transférer dans la boîte de pain et lisser le dessus avec les mains mouillées. Marque et ferment."
          },
          {
            "state": "Overdone",
            "description": "Dough semble mince ou versable — trop d'eau a été ajoutée ou le soaker n'a pas été drainé. Les graines coulent au fond plutôt que de rester suspendues.",
            "action": "Travaillez dans une cuillère à soupe plus de farine de seigle à la fois jusqu'à ce que la pâte retienne un pic. La fermentation se poursuit normalement."
          }
        ]
      },
      "feelCue": "La pâte de seigle doit s'accrocher à la cuillère et exiger une traction ferme pour libérer. Lorsque vous faites glisser la cuillère à travers la surface, elle devrait laisser un réveil qui se remplit lentement, comme un hummus raide. S'il recule comme de la pâte de blé ou s'aplatit comme de la pâte à crêpes, il y a un problème."
    },
    {
      "nodeId": "step_3",
      "action": "Preuve",
      "inputs": [
        "mixed_rye_dough"
      ],
      "outputState": "pan_ready_loaf",
      "instructions": "Transférer la pâte dans une boîte de pain bien huilée de 9 × 5 pouces. Plongez vos mains ou une spatule dans l'eau et lissez le dessus dans un dôme uniforme — la pâte de seigle ne peut pas être façonnée au sens traditionnel; l'étain fait tout le travail. Saupoudrer quelques graines de tournesol supplémentaires ou de caraway à la surface. Couvrir de façon souple d'un enveloppement en plastique et l'épreuve à température ambiante jusqu'à ce que le dôme couronne environ 1 cm au-dessus du bord de l'étain et que des fissures apparaissent à la surface, de 2 à 4 heures. La pâte de seigle n'atteindra pas l'augmentation spectaculaire du pain de blé — une augmentation de 20 à 30 % est idéale. Préchauffer le four à 425 °F / 220 °C.",
      "visualCue": {
        "primaryTarget": "La couronne de pâte s'est relevée de 1 à 2 cm au-dessus du bord de l'étain et la surface présente de petites fissures. Le pain doit être bombé et mat, et non plat.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La touffe se trouve toujours sous le bord de l'étain, la surface est plate et uniformément humide. Aucune fissure visible.",
            "action": "Plus longtemps. Déplacer vers un endroit plus chaud — 75°F / 24°C est idéal. Vérifiez encore dans 1 heure. Le seigle sous-proof est dense avec une stries gommées."
          },
          {
            "state": "Perfect",
            "description": "Les crêtes de la couronne juste au-dessus de la jante; les fissures de surface sont visibles, mais le pain n'est pas étalé sur les côtés. L'intérieur sent la brume.",
            "action": "Cuire immédiatement, à découvert, à 425 °F / 220 °C."
          },
          {
            "state": "Overdone",
            "description": "La toux s'est répandue sur les côtés de l'étain, les fissures de surface sont grandes et la pâte semble coulé au centre — la fermentation a atteint un pic et la structure s'effondre.",
            "action": "Faites cuire immédiatement, peu importe. Le pain aura un dessus plus plat et une saveur plus aigre. Réduire la preuve la prochaine fois."
          }
        ]
      },
      "feelCue": "Touchez doucement la couronne avec un bout de doigt mouillé – il doit se sentir légèrement ferme et printanier sur la surface, mais il doit donner doucement en dessous, comme une épaisse éponge humide. S'il se sent uniformément dense et résiste au toucher, il lui faut plus de temps. Si elle s'effondre au toucher le plus faible, elle est surpropriété."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "pan_ready_loaf"
      ],
      "outputState": "finished_rye_loaf",
      "instructions": "Cuire à 425 °F / 220 °C pendant 15 minutes, puis réduire à 375 °F / 190 °C et cuire encore 45 à 55 minutes. La température interne devrait atteindre 205°F / 96°C. Le pain se rétrécira légèrement des côtés de l'étain lorsqu'il sera fait. Se former et refroidir complètement sur une grille — au moins 8 heures, de préférence 24 heures — avant de trancher. La miette est gommée et déréglée lorsqu'elle est chaude; le slice trop tôt produit un intérieur collant et mal cuit, quel que soit le niveau réel de cuisson. L'intérieur du pain continue à se régler à mesure qu'il refroidit.",
      "visualCue": {
        "primaryTarget": "Un pain brun chocolat foncé fortement dompté, avec une croûte sèche, légèrement fissurée et un fini ferme et mat. C'est creux. Les côtés et le bas doivent être brun foncé, et non pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le dessus est bruni mais les côtés sont pâles et doux. Température intérieure inférieure à 200°F / 93°C. Lorsque le pain est pressé, il se sent printanier et squishy plutôt que ferme.",
            "action": "Retourner au four sans l'étain, directement sur la grille, pendant 10 à 15 minutes pour développer la croûte latérale et inférieure."
          },
          {
            "state": "Perfect",
            "description": "Un brun foncé uniforme partout, ferme et rigide. Ça semble creux de tous les côtés quand on tape. Température intérieure 205–210°F / 96–99°C. Le pain s'éloigne complètement des côtés de l'étain.",
            "action": "Refroidir complètement — minimum 8 heures. Enveloppez le parchemin et reposez-vous. Le pain de seigle s'améliore considérablement sur 24 heures à mesure que les entreprises de miettes et les saveurs se mélangent."
          },
          {
            "state": "Overdone",
            "description": "La croûte est très sombre, presque noire dans les endroits, avec un arôme amer. Le pain a nettement rétréci et se sent extrêmement dur et dense.",
            "action": "Cool comme d'habitude. L'intérieur est probablement beau malgré la croûte dure. Un pain de seigle foncé peut absorber une couleur importante avant de devenir vraiment brûlé. Si la croûte a un goût amer, couper en tranches plus fines."
          }
        ]
      },
      "feelCue": "Un pain de seigle refroidi doit se sentir dense et substantiel — nettement plus lourd qu'un pain de blé de même taille. Appuyez sur le centre : il ne devrait pas donner du tout. Lorsque vous le coupez finalement 24 heures plus tard, la miette doit se sentir humide et légèrement cireuse plutôt que mijotée ou gommée, comme presser un gel épais et ferme."
    }
  ]
};
