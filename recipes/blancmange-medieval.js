export default {
  "repoId": "master_medieval_european_blancmange_001",
  "parentRepoId": null,
  "slug": "blancmange-medieval",
  "author": "ForkRecipe Kitchen",
  "title": "Blancmange médiéval",
  "description": "Un plat des grands livres de cuisine de la fin du Moyen Âge — finement déchiqueté poulet mijoté jusqu'à ce qu'il tombe dans des fils, puis lié avec du riz et du lait d'amande douce dans un pot pâle et parfumé. Ni tout à fait savoureux ni tout à fait un pudding, il est assis à la table médiévale entre les deux, doucement sucré avec du sucre et couronné d'amandes frites. La « nourriture blanche » qui lui donne son nom était une marque de raffinement, servie aux malades comme aux nobles.",
  "cuisine": "Moyen Âge",
  "culture": "Anglo-Norman / Cour française",
  "category": "proteins",
  "tags": [
    "médiévale",
    "historique",
    "poulet",
    "lait d'amande",
    "riz",
    "sous-marin",
    "le-viandier",
    "pottage"
  ],
  "difficulty": 2,
  "activeTime": "45 min",
  "totalTime": "2 hr 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Poulet (capon entier ou poitrine, sur l'os)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "faisan",
        "veau (variantes par période)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Lait d'amande (riche en amandes blanchies)",
      "ratioValue": 120,
      "defaultUnit": "parts",
      "substitutions": [
        "lait de vache (moderne, moins authentique)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Starch",
      "name": "Riz blanc (grain court, moulu à un repas grossier)",
      "ratioValue": 18,
      "defaultUnit": "parts",
      "substitutions": [
        "Farine de riz",
        "riz haché"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre (blanc, finement pincé)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "miel (variante plus ancienne)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Bouillon de cuisson de poulet (la liqueur de braconnage, tendue)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "Poulet léger"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Eau de rose (quelques gouttes, parfum de période en option)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "pincée de mac"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Amandes entières, blanchies et frites dans un peu de graisse",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "aux amandes grillées"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pochette",
      "inputs": [
        "ing_01",
        "ing_05"
      ],
      "outputState": "poached_chicken",
      "instructions": "Placer le poulet dans un pot profond, couvrir d'eau froide, ajouter une pincée de sel et laisser mijoter lentement. Écraser la mousse grise à mesure qu'elle monte. Pocher doucement, ne jamais bouillir dur, pendant environ 45 minutes pour les seins ou jusqu'à 75 minutes pour un oiseau entier, jusqu'à ce que la viande soit cuite et tendre. Soulevez le poulet et réservez-le, et souchez et gardez le bouillon de braconnage.",
      "visualCue": {
        "primaryTarget": "Bouillon clair et doré à peine tremblant à la surface, et poulet dont les jus sont clairs lorsqu'ils sont percés au point le plus épais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La chair près de l'os est encore rose et serrée; les jus sont rosés et la viande résiste à la traction.",
            "action": "Retournez - le à la mijoter et faites cuire — la viande mal cuite ne sera pas déchiquetée plus tard."
          },
          {
            "state": "Perfect",
            "description": "La viande est opaque et tendre, sort facilement de l'os, et le bouillon est clair et salé.",
            "action": "Soulevez le poulet pour le refroidir et filtrez le bouillon pour le pottage."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon a été bouilli dur et est devenu nuageux; la viande est sèche et à cordes.",
            "action": "Tirez-le maintenant avant qu'il ne s'aggrave; penchez-vous sur le lait d'amande et le bouillon pour réhydrater la chair déchiquetée."
          }
        ]
      },
      "feelCue": "Gardez la surface à un murmure — la bulle paresseuse occasionnelle, jamais un ébullition. Une bouillie dure durcit la poitrine et fait bouillir le bouillon dans lequel vous cuireez le riz."
    },
    {
      "nodeId": "step_2",
      "action": "Mûr",
      "inputs": [
        "poached_chicken"
      ],
      "outputState": "shredded_chicken",
      "instructions": "Quand le poulet est assez frais pour le manipuler, dépouiller la peau et les os et tirer la viande de poitrine dans les meilleurs fils que vous pouvez — les cuisiniers médiévaux l'arracheraient avec le point d'un couteau ou le livreraient petit. La texture du vrai blanc-mange en dépend : des fibres longues et fines plutôt que des morceaux. Réservez la viande déchiquetée.",
      "visualCue": {
        "primaryTarget": "Un tas doux et moelleux de fils de poulet pâles, fins et même, sans grumeaux ni tendons laissés derrière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande est encore en morceaux grossiers ou en morceaux courts; les brins sont épais et inégaux.",
            "action": "Continuez à arracher et à séparer les fibres — travaillez le long du grain jusqu'à ce qu'elles soient vraiment fines."
          },
          {
            "state": "Perfect",
            "description": "Des fils uniformes, fins et moelleux qui s'éloignent lorsqu'ils sont levés, toute la peau et le filet sont enlevés.",
            "action": "Réserver et se tourner vers le lait d'amande et le riz."
          },
          {
            "state": "Overdone",
            "description": "Pounded si dur il s'est tourné vers une pâte dense, perdant la texture caractéristique filetée.",
            "action": "Déposez-le à la main avec un peu de bouillon et acceptez un plat plus lisse; arrêtez de frapper plus tôt la prochaine fois."
          }
        ]
      },
      "feelCue": "Travaillez chaud mais pas chaud. Les fils devraient sentir la lumière et se séparer entre vos doigts — cette délicatesse est ce qui met blancmange au-dessus d'un potage ordinaire."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_06"
      ],
      "outputState": "rice_pottage",
      "instructions": "Verser le riche lait d'amande et le bouillon de poulet réservé dans un pot lourd et laisser mijoter. Pluie dans le riz moulu, fouettant pour éviter les grumeaux. Cuire bas et lent, en remuant souvent pour ne pas attraper, pendant 20-30 minutes jusqu'à ce que le riz ait gonflé et que le mélange épaississe à un pot doux et cuilleré qui tient sa forme.",
      "visualCue": {
        "primaryTarget": "Un porridge d'ivoire lisse et assez épais pour broder doucement sur une cuillère, les grains de riz gonflés et tendres sans noyau crayeux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est mince et laiteux, le riz est encore sec et dur au centre lorsqu'il est pressé.",
            "action": "Continuer à mijoter et à remuer — le riz a besoin de plus de temps pour gonfler et libérer son amidon."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, brillant et lisse; une cuillère tirée à travers les feuilles d'un sentier de fermeture lente et le riz est entièrement doux.",
            "action": "Incorporer le poulet déchiqueté, le sucre et l'assaisonnement."
          },
          {
            "state": "Overdone",
            "description": "Le potage s'est raidi jusqu'à une pâte lourde et le fond s'attrape et grince avec une odeur grillée.",
            "action": "Retirez immédiatement le feu, desserrez-vous avec un jet de bouillon chaud ou de lait d'amande, et ne grattez pas la base brûlée."
          }
        ]
      },
      "feelCue": "Incorporer la figure-huit lente et sentir la cuillère rencontrer une résistance montante. Quand il traîne plutôt que glisse, l'amidon a fait son travail."
    },
    {
      "nodeId": "step_4",
      "action": "Enrichir",
      "inputs": [
        "rice_pottage",
        "shredded_chicken",
        "ing_04",
        "ing_05",
        "ing_07"
      ],
      "outputState": "blancmange_body",
      "instructions": "Pliez le poulet déchiqueté dans le pot de riz afin que les fils disparaissent dans le blanc. Adoucir avec le sucre fourré et assaisonner avec un peu de sel, goûter au fur et à mesure — il devrait être légèrement sucré, légèrement salé, et goût propre. Incorporer quelques gouttes d'eau de rose (ou une pincée de mac) pour parfumer. Chauffer doucement sans bouillir.",
      "visualCue": {
        "primaryTarget": "Une masse uniforme, pâle et parfumée, flocée de fils de poulet fins, sucrée et parfumée, épaisse mais encore douce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poulet est assis dans des taillis visibles, le plat a un goût plat, et la douceur et le sel ne sont pas encore équilibrés.",
            "action": "Mélanger plus soigneusement pour distribuer les fils et ajuster le sucre et le sel un peu à la fois jusqu'à ce qu'il chante."
          },
          {
            "state": "Perfect",
            "description": "Doux, uniformément fileté, doucement doux contre une profondeur salée tranquille, soulevé par un murmure de rose.",
            "action": "Il est prêt à étaler et garnir avec les amandes frites."
          },
          {
            "state": "Overdone",
            "description": "Surdoué ou sur-parfumé de sorte que l'eau de rose devient savonneuse et domine tout.",
            "action": "Muer en remuant dans un pot ou un bouillon de riz plus uni pour diluer la douceur et l'odeur."
          }
        ]
      },
      "feelCue": "Goûtez sur une cuillère chaude. La douceur devrait arriver d'abord et doucement, la saveur du poulet derrière elle — et non plus surpasser. L'eau de rose est un parfum, pas une saveur; une goutte trop de ruines le plat."
    },
    {
      "nodeId": "step_5",
      "action": "Garnir et servir",
      "inputs": [
        "blancmange_body",
        "ing_08"
      ],
      "outputState": "finished_blancmange",
      "instructions": "Déposer le blanc-mange chaud dans des bols peu profonds et lisser la surface. Éparpiller sur les amandes blanchies qui ont été frites dorées dans un peu de graisse, à la manière des cuisiniers médiévaux qui 'plantaient' le plat avec des amandes. Servir au chaud comme un plat raffiné du second plat.",
      "visualCue": {
        "primaryTarget": "Un monticule pâle, brillant, parsemé d'amandes frites dorées, qui semble propre et blanc comme son nom le promet.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les amandes sont pâles et douces, et la surface a l'air de liquide lâche et pleurant aux bords.",
            "action": "Faire frire les amandes une ombre plus profonde pour la croûte, et laisser le blancmange se poser un moment à ferme avant de servir."
          },
          {
            "state": "Perfect",
            "description": "Corps blanc lisse tenant sa forme, couronné d'amande dorée croustillante, chaud et parfumé.",
            "action": "Servir immédiatement tout en étant chaud et parfumé."
          },
          {
            "state": "Overdone",
            "description": "Le corps s'est raidi et refroidi dans un bloc stodgy, et les amandes sont brûlées et amères.",
            "action": "Loyer avec un peu de lait d'amande chaud et le réchauffer doucement; choisir les amandes brûlées et faire frire quelques-unes fraîches."
          }
        ]
      },
      "feelCue": "Le contraste est le point — une cuillère douce, douce, qui donne cassée par la croûte d'amande frite. Servir chaud ; froid, il serre et perd sa grâce."
    }
  ]
};
