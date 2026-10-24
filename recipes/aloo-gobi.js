export default {
  "repoId": "master_indian_aloo-gobi_001",
  "parentRepoId": null,
  "slug": "aloo-gobi",
  "author": "ForkRecipe Kitchen",
  "title": "Aloo Gobi",
  "description": "Le chou-fleur de pommes de terre et de choux-fleurs, au Punjabi, maison, est un légume enrobé de curcuma et de cumin et cuit jusqu'à ce qu'il soit tendre et tacheté d'or, sans sauce, à l'exception du ghee parfumé dans lequel il a été jeté.",
  "cuisine": "Indiens",
  "culture": "Punjabi",
  "category": "vegetables",
  "tags": [
    "indienne",
    "pommes de terre",
    "chou-fleur",
    "végétalien",
    "curry sec",
    "nuit"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "35 min",
  "ratioSystem": "weight",
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
    "bitter": 2,
    "umami": 1,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Pommes de terre de cire (or yukon), coupées en cubes de 2 cm",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "patate douce pour une version plus sucrée"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Choux-fleurs, coupés en petits fleurons de 2 à 3 cm",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "Roumanie",
        "brocoli"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Ghee ou huile neutre",
      "ratioValue": 35,
      "defaultUnit": "g",
      "substitutions": [
        "Huile de coco"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Graines de cumin",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "graines de carvi"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon jaune, tranché finement",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé finement",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Garam masala",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Heat",
      "name": "Poudre de chili cachemiri ou de chili rouge doux",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "paprika doux avec une pincée de Cayenne"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 7,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Herb",
      "name": "Coriandre fraîche, grossièrement hachée",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Acid",
      "name": "Jus de citron",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "amchur (poudre de mangue séchée)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saucisse",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "aromatic_base",
      "instructions": "Chauffer le ghee dans une grande poêle ou un karahi à feu moyen-vif. Ajouter les graines de cumin — elles devraient s'assombrir immédiatement et commencer à s'assombrir en 30 secondes. Ajouter l'oignon tranché et cuire, en remuant fréquemment, pendant 8 à 10 minutes jusqu'à ce qu'il soit bien doré et doux. Ajouter l'ail haché et le gingembre râpé et remuer encore 60 secondes jusqu'à ce que l'odeur brute de l'ail se soit membrée à sucré. Toute la casserole doit sentir le cumin grillé et l'oignon caramélisant — c'est la base de la saveur que tout le reste absorbera.",
      "visualCue": {
        "primaryTarget": "L'oignon est profondément doré aux bords avec quelques brins bruns caramélisés; les graines de cumin ont obscurci jusqu'à un brun teck et la graisse est richement aromatisée; l'ail s'est adouci au translucide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore pâle et limpide; les graines de cumin sont encore de l'or pâle; la poêle sent l'oignon cru et la vapeur.",
            "action": "Continuer la cuisson à feu moyen-vif, en remuant plus fréquemment."
          },
          {
            "state": "Perfect",
            "description": "Oignon ambré-or profond; graines de cumin foncé; graisse parfumée, sucrée et épicée qui enveloppe l'arrière d'une cuillère richement.",
            "action": "Ajouter les épices immédiatement."
          },
          {
            "state": "Overdone",
            "description": "L'oignon ou le cumin est brun foncé et amer; l'huile sent l'acride.",
            "action": "Ajouter immédiatement les légumes pour arrêter la cuisson; une petite quantité d'amertume se dispersera dans le plat plus grand."
          }
        ]
      },
      "feelCue": "L'oignon doit glisser de l'arrière d'une cuillère sans résistance lorsqu'il est pressé — complètement doux et productif. N'importe quelle croûte ou springness signifie plus de temps de cuisson est nécessaire."
    },
    {
      "nodeId": "step_2",
      "action": "Bloom",
      "inputs": [
        "aromatic_base",
        "ing_08",
        "ing_09",
        "ing_11",
        "ing_12"
      ],
      "outputState": "spiced_base",
      "instructions": "Ajouter le curcuma moulu, la coriandre moulue et la poudre de chili cachemiri à l'oignon doré dans la casserole. Mélanger constamment à feu moyen pendant 45 à 60 secondes, cuire les épices directement dans le ghee. Le mélange deviendra très parfumé et raide; s'il commence à coller, ajouter une cuillère à soupe d'eau et remuer pour libérer. Assaisonner de sel. La pâte d'épices est prête lorsque l'arôme poussiéreux brut des épices s'est transformé en un parfum torréfié, chaud et complexe et que la graisse s'est légèrement séparée aux bords de la pâte.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse et orangée enrobant l'oignon; la graisse commence à se séparer visiblement aux bords; l'arôme est passé d'épices crues à chaudes, grillées et complexes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La poudre d'épices sent toujours cru et poussiéreux; le mélange est humide et ne colle ni ne se sépare pas.",
            "action": "Cuire encore 30 secondes, en remuant constamment — les épices ont besoin d'un contact direct avec la graisse chaude pour fleurir correctement."
          },
          {
            "state": "Perfect",
            "description": "Aromatique, pâte d'épices grillée; curcuma a coloré l'oignon un or brillant; la graisse se sépare aux bords.",
            "action": "Ajouter immédiatement la pomme de terre."
          },
          {
            "state": "Overdone",
            "description": "La pâte est passée d'orange à brun foncé; elle sent amer et brûlé.",
            "action": "Ajouter immédiatement un jet d'eau pour arrêter la cuisson; sauver ce qui reste en ajoutant les légumes immédiatement."
          }
        ]
      },
      "feelCue": "Penchez - vous sur la poêle: si vous inhalez et que vous sentez clairement les épices individuelles — la note d'agrumes de la coriandre, la terre du curcuma, la chaleur du chili — la floraison fonctionne. Une odeur de poussière brute leur demande plus de temps."
    },
    {
      "nodeId": "step_3",
      "action": "Saucisse",
      "inputs": [
        "spiced_base",
        "ing_01"
      ],
      "outputState": "spiced_potato",
      "instructions": "Ajouter les cubes de pomme de terre à la base épicée et mélanger pour enrober chaque surface dans la pâte d'épices d'orange-turcuma. Répartir en une seule couche et cuire à feu moyen-vif, en remuant toutes les 2 à 3 minutes plutôt qu'en permanence, ce qui permet à la pomme de terre de développer des marques dorées plutôt que de simplement cuire à la vapeur. Cuire de 8 à 10 minutes jusqu'à ce que les cubes de pommes de terre soient dorés sur plusieurs côtés et demi-tendre lorsqu'ils sont percés avec l'extrémité d'un couteau. Ils devraient encore avoir un peu de résistance à ce stade; ils finiront la cuisson avec le chou-fleur.",
      "visualCue": {
        "primaryTarget": "Les cubes de pommes de terre sont enrobés de pâte d'épices orange-or et ont développé des marques de couture doré-brun sur leurs surfaces planes coupées; ils sentent le curcuma grillé et le cumin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les cubes de pommes de terre sont encore blancs à l'intérieur et offrent une résistance significative; ils ont à peine coloré.",
            "action": "Continuer la cuisson en remuant moins fréquemment pour construire la croûte; ils ont besoin de plus de temps avant que le chou-fleur entre."
          },
          {
            "state": "Perfect",
            "description": "Des marques dorées sur des surfaces plates; l'intérieur est mi-cuit et offre une résistance modérée — un couteau y va avec effort.",
            "action": "Ajoutez le chou-fleur maintenant."
          },
          {
            "state": "Overdone",
            "description": "Les cubes de pommes de terre sont entièrement cuits et commencent à se décomposer.",
            "action": "Ajouter immédiatement le chou-fleur et réduire la chaleur — la pomme de terre continuera à cuire doucement pendant que le chou-fleur rattrape."
          }
        ]
      },
      "feelCue": "Percez un cube de pomme de terre avec l'extrémité d'un couteau à trier — vous devriez sentir qu'il pénètre facilement la première moitié, mais rencontre une vraie résistance dans la seconde moitié. Cet état mi-cuit est parfait pour ajouter le chou-fleur."
    },
    {
      "nodeId": "step_4",
      "action": "Saucisse",
      "inputs": [
        "spiced_potato",
        "ing_02",
        "ing_10"
      ],
      "outputState": "cooked_aloo_gobi",
      "instructions": "Ajouter les fleurs de chou-fleur dans la poêle et mélanger pour enrober le ghee épicé. Saupoudrer le garam masala sur tout ce qui est maintenant — ajouté à ce milieu de scène, il fleurit doucement dans la graisse résiduelle plutôt que de brûler dans une poêle vide. Si la poêle a l'air très sèche, ajouter une cuillère à soupe d'eau et couvrir d'un couvercle pendant 3-4 minutes pour cuire à la vapeur le chou-fleur. Puis retirez le couvercle et faites cuire à découvert 5 minutes de plus, en jetant toutes les 2 minutes, jusqu'à ce que la pomme de terre et le chou-fleur soient complètement tendres et que la poêle soit sèche.",
      "visualCue": {
        "primaryTarget": "La pomme de terre et le chou-fleur sont tous deux jaune-or du curcuma, tachetés de marques dorées et enrobés d'une pâte d'épices sèche et parfumée. Les fleurs de chou-fleur sont juste au bord du brunissement et entièrement tendres.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le chou-fleur est encore blanc à l'intérieur et n'a pas absorbé la couleur curcuma uniformément; la pomme de terre est encore trop ferme.",
            "action": "Ajouter une éclaboussure d'eau, de couverture et de vapeur pendant 3 minutes avant de découvrir à sécher."
          },
          {
            "state": "Perfect",
            "description": "Légumes uniformément dorés, enrobés d'épices; à la fois très tendres et qui commencent tout juste à s'ombrager; la poêle est sèche sans liquide en réserve.",
            "action": "Retirer du feu et finir avec du citron et de la coriandre."
          },
          {
            "state": "Overdone",
            "description": "Le chou-fleur s'est effondré, les cubes de pomme de terre se sont brisés, le contenu de la casserole ressemble à un mash.",
            "action": "Assaisonner agressivement et servir — les saveurs sont toujours excellentes; présenter comme un côté à peu près texturé plutôt que des morceaux distincts."
          }
        ]
      },
      "feelCue": "Appuyez sur un fleuron de chou-fleur sur le côté de la poêle avec une cuillère — un fleuron parfaitement cuit devrait donner complètement sans croûte, mais tenir sa forme et non pas frotter. Il devrait se sentir comme un morceau ferme d'avocat mûr."
    },
    {
      "nodeId": "step_5",
      "action": "Saison",
      "inputs": [
        "cooked_aloo_gobi",
        "ing_13",
        "ing_14"
      ],
      "outputState": "finished_aloo_gobi",
      "instructions": "Retirer la poêle du feu. Presser le jus de citron sur toute la casserole et jeter immédiatement — l'acide éclaire toutes les épices et coupe à travers la richesse du ghee. Dispersez la coriandre fraîche au-dessus du sommet et donnez une dernière chance. Goûtez au sel et ajoutez une pincée plus si nécessaire. L'aloo gobi fini ne doit goûter que les légumes eux-mêmes et les épices – profondément salés, épicés chaudement, avec un lifting citronné propre. Servir immédiatement avec roti ou paratha. Il ne tient pas bien; les légumes perdent leur texture en s'asseyant.",
      "visualCue": {
        "primaryTarget": "Un mélange sec, doré et coloré de pommes de terre et de chou-fleur enrobés d'épices avec une coriandre vert vif distribuée partout et un éclat de ghe épicé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas d'acide ajouté; le plat a un goût plat et lourd malgré les épices; coriandre pas encore dispersée.",
            "action": "Ajouter le jus de citron et la coriandre — le plat n'est pas fini sans eux."
          },
          {
            "state": "Perfect",
            "description": "Lumineux, vif, en couches: la terre épicée des légumes, la chaleur aromatique du garam masala, un agrumes propre étincelle du citron. Complètement sec, sans sauce.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Jus de citron ajouté trop tôt et mijoté; le caractère acide frais a cuit et le plat goûte plat.",
            "action": "Ajouter une autre petite pression de citron frais juste avant de servir."
          }
        ]
      },
      "feelCue": "Le plat fini doit se sentir complètement sec dans la poêle — pas de liquide mis en commun, juste des légumes enrobés de graisse épicée. Soulevez un morceau de pomme de terre: il devrait retomber dans la poêle proprement, pas faire glisser la sauce avec."
    }
  ]
};
