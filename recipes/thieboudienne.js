export default {
  "repoId": "master_west_african_thieboudienne_001",
  "parentRepoId": null,
  "slug": "thieboudienne",
  "author": "ForkRecipe Kitchen",
  "title": "Thiéboudienne (poissons et riz sénégalais)",
  "description": "Le plat national du Sénégal est une leçon de patience architecturale : le poisson farci d'une pâte de persil, de chili et d'ail, braisé dans un stock d'oignons de tomates aux côtés de légumes entiers, puis le stock utilisé pour cuire le riz jusqu'à ce qu'il absorbe toutes les couches de saveur, et une croûte fumée se forme en bas comme la récompense finale et précieuse.",
  "cuisine": "Afrique de l ' Ouest",
  "culture": "Sénégal",
  "category": "seafood",
  "tags": [
    "sénégales",
    "poissons",
    "riz",
    "tomates",
    "un seul pot"
  ],
  "difficulty": 4,
  "activeTime": "1 hr",
  "totalTime": "2 hrs",
  "ratioSystem": "parts",
  "stars": 1340,
  "forks": 122,
  "contributors": 17,
  "license": "CC-BY-SA",
  "createdAt": "2025-01-20",
  "updatedAt": "2026-04-05",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 1,
    "bitter": 0,
    "umami": 5,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Poisson entier ferme (twof, snapper, mérou), marqué et nettoyé",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "bar de mer",
        "gros mulet"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Riz à grains longs, rincé",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Pâte de tomates",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates fraîches, mélangées et réduites"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon jaune, à moitié tranché, à moitié en pâte farcie",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Persil à feuilles plates, pour pâte de farce",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "coriandre"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Girofles d'ail, pour pâte de farce",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poivre de bonnet écossais, coupé en deux",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "habanero"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Structure",
      "name": "Légumes-racines: manioc, carottes, navets, aubergines",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "patates douces, carottes, courgettes"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile végétale",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel, poivre noir, cube assaisonnement (Maggi)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Umami",
      "name": "Caroubes fermentées (netetou) ou crevettes séchées",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce de poisson, utilisée avec parcimonie"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Farcir et préparer le poisson",
      "inputs": [
        "ing_01",
        "ing_05",
        "ing_06",
        "ing_04",
        "ing_10"
      ],
      "outputState": "stuffed_fish",
      "instructions": "Mélanger le persil, l'ail, la moitié de l'oignon, la moitié du bonnet de scotch, le sel et le poivre dans une pâte verte grossière — c'est la farce rof. Placer la pâte de rof dans les marques de score du poisson, le presser fermement dans les coupes afin que la pâte remplisse les incisions. En outre frotter une fine couche sur l'extérieur du poisson. Laisser reposer 15 minutes. Cette étape est la signature de la saveur singulière de la thiéboudienne — le rof parfume la chair de l'intérieur comme les braises de poisson.",
      "visualCue": {
        "primaryTarget": "Les marques sont visiblement emballées avec de la pâte vert foncé. L'extérieur du poisson a un revêtement mince et uniforme. Le rof est à l'intérieur et sur le poisson, pas mis en commun autour.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est assise sur la surface seulement, pas emballée dans les marques de score. Il se lavera au cours de la cuisson plutôt que de pénétrer la chair.",
            "action": "Utilisez vos doigts pour pousser fermement la pâte dans chaque coupe. Rendre les coupes plus profondes si nécessaire — elles devraient atteindre presque l'os."
          },
          {
            "state": "Perfect",
            "description": "Chaque marque de score est remplie de pâte de rof verte. L'extérieur du poisson a un revêtement vert mince et uniforme. La pâte est ferme et emballée, pas runny.",
            "action": "Laisser reposer 15 minutes puis procéder à la friture."
          },
          {
            "state": "Overdone",
            "description": "Trop de trombes appliquées — des touffes épaisses tombent du poisson. La pâte brûlera dans la poêle avant que le poisson ne soit séché.",
            "action": "Grattez l'excès à une couche mince et uniforme. Une mince couche est tout ce qui est nécessaire; la farce intérieure porte la saveur primaire."
          }
        ]
      },
      "feelCue": "Appuyez sur les marques de pointage de rof-packed avec votre bout de doigt — la pâte doit se sentir fermement intégrée, ne pas céder ou lâche. Apportez le poisson à votre nez : vous devriez sentir le persil et l'ail immédiatement."
    },
    {
      "nodeId": "step_2",
      "action": "Sear poisson et construire base",
      "inputs": [
        "stuffed_fish",
        "ing_03",
        "ing_04",
        "ing_09",
        "ing_11",
        "ing_07"
      ],
      "outputState": "tomato_broth_with_fish",
      "instructions": "Chauffer l'huile dans un grand pot à feu moyen-vif. Faire frire le poisson farci pendant 3 minutes de chaque côté jusqu'à ce que l'extérieur soit doré et que le rof ait légèrement croqué. Retirer le poisson et réserver. Dans le même pot, faire frire le reste de l'oignon tranché jusqu'à ce qu'il soit doré. Ajouter la pâte de tomate et faire frire, en remuant, pendant 10 minutes jusqu'à ce qu'elle s'assombrisse et que l'huile se sépare. Ajouter les caroubes ou les crevettes séchées et la moitié restante du capot scotch. Ajouter suffisamment d'eau pour couvrir tous les légumes et poissons (environ 1,5 litre). Retournez le poisson dans le pot et faites mijoter.",
      "visualCue": {
        "primaryTarget": "La base de la tomate s'est foncée jusqu'à un orangé profond brûlé et l'huile s'est clairement séparée autour des bords du pot. Le stock est riche en ambre rouge, profondément aromatique.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte de tomate est encore rouge vif et goûtée crue. L'huile n'est pas séparée et la base est humide et mince. L'acidité de la tomate brute dominera le plat final.",
            "action": "Continuer à faire frire la pâte de tomate. Cette étape exige de la patience — 10 minutes de friture active est le minimum."
          },
          {
            "state": "Perfect",
            "description": "Base rouge-orange profonde avec huile clairement séparée aux bords. Le pot sent la tomate caramélisée, l'oignon et une note savoureuse profonde des caroubes.",
            "action": "Ajouter l'eau, retourner le poisson et laisser mijoter pour cuire le poisson et les légumes."
          },
          {
            "state": "Overdone",
            "description": "La pâte de tomate est brun foncé avec une odeur amère et acride. Petits morceaux noirs visibles.",
            "action": "Déglacer avec de l'eau immédiatement. Goûtez le liquide qui en résulte — si trop amer, ajoutez une pincée de sucre et continuez."
          }
        ]
      },
      "feelCue": "L'arôme qui s'élève de la casserole à ce stade devrait être profondément complexe: tomate caramélisée, oignon doux, et la profondeur piquante et fermentée des caroubes toutes stratifiées et distinctes, mais harmonieuses."
    },
    {
      "nodeId": "step_3",
      "action": "Poissons et légumes braisés",
      "inputs": [
        "tomato_broth_with_fish",
        "ing_08"
      ],
      "outputState": "braised_fish_and_vegetables",
      "instructions": "Ajouter les légumes-racines (cassave, carottes, navets, aubergines) dans le pot autour du poisson. Faire mijoter, couvrir et cuire 20 à 25 minutes jusqu'à ce que le poisson soit cuit et que les légumes soient tendres. Lorsque les éléments terminent la cuisson, retirez-les dans un plateau de service et gardez-les au chaud — le manioc et le navet prennent plus de temps que l'aubergine. Réserver TOUS les bouillons — c'est l'ingrédient le plus important du plat.",
      "visualCue": {
        "primaryTarget": "La chair de poisson est complètement opaque et s'étale à la partie la plus épaisse de la colonne vertébrale lorsqu'elle est pressée. Les légumes donnent à un couteau sans résistance. Le stock de braises est profondément coloré et riche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La chair de poisson est toujours translucide près de la colonne vertébrale. Les carottes et le manioc résistent à un couteau. Le liquide de braisage semble mince.",
            "action": "Couvrir et laisser mijoter encore 10 minutes. Les légumes-racines prennent souvent plus de temps que prévu — vérifiez-les individuellement."
          },
          {
            "state": "Perfect",
            "description": "Les poissons flocent proprement à la colonne vertébrale avec une pression douce. Tous les légumes donnent entièrement à un couteau. Le stock est profondément aromatisé et richement coloré, presque comme un bouillon riche en consommés.",
            "action": "Retirer le poisson et tous les légumes dans un plateau. Soucher et réserver chaque goutte de stock pour le riz."
          },
          {
            "state": "Overdone",
            "description": "Le poisson s'est cassé dans le pot. Les légumes sont très doux et certains commencent à se dissoudre. Le stock a considérablement diminué.",
            "action": "Découpez soigneusement le poisson en morceaux. Ajouter de l'eau pour ramener le volume du stock à la quantité nécessaire pour le riz."
          }
        ]
      },
      "feelCue": "Goûtez une cuillerée au bouillon — il devrait être profondément salé, la dégustation de poisson, de tomate, et un fond complexe de caroubes fermentées. C'est l'âme du plat; il devrait vous faire vouloir le boire."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire le riz en stock de poisson",
      "inputs": [
        "braised_fish_and_vegetables",
        "ing_02",
        "ing_10"
      ],
      "outputState": "cooked_thieb_rice",
      "instructions": "Mesurez le stock de culture — vous avez besoin d'un rapport d'environ 1,5 partie de stock à une partie de riz. Garnir d'eau si nécessaire et bien assaisonner le stock (il devrait avoir un goût légèrement salé). Porter le bouillon à ébullition dans la grande casserole, ajouter le riz rincé et remuer une fois. Réduire la chaleur à faible. Couvrir avec du papier et le couvercle (le joint à vapeur serré de la technique jollof). Cuire de 25 à 30 minutes jusqu'à ce que tout le liquide soit absorbé et que le riz soit tendre. Ensuite, découvrez et augmentez la chaleur pendant 3 à 5 minutes pour développer la croûte.",
      "visualCue": {
        "primaryTarget": "Le riz est entièrement cuit et uniformément orange-rouge du stock. La surface est parsemée de bulles de vapeur. La croûte inférieure craque audiblement lorsque le pot est secoué.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains de riz ont un centre blanc dur quand mordu. Certains liquides sont encore enroulés autour des bords de la feuille.",
            "action": "Resceller et cuire encore 5 à 8 minutes. Le joint serré est critique: la vapeur qui s'échappe signifie une cuisson inégale."
          },
          {
            "state": "Perfect",
            "description": "Un riz uniformément cuit, richement aromatisé dans une couleur ambre chaude. Les grains sont séparés et moelleux. La base du pot craque comme le caramel en cas de tremblement — la croûte s'est formée.",
            "action": "Retirer du feu, reposer 2 minutes. Servir le riz avec du poisson et des légumes disposés sur le dessus."
          },
          {
            "state": "Overdone",
            "description": "Le riz est musqué et entassant. La croûte a brûlé au-delà de l'amertume.",
            "action": "Coupez le riz supérieur immédiatement, en laissant la croûte brûlée. Étaler sur une large assiette pour arrêter la cuisson. Goûtez la croûte avant de décider s'il faut la servir."
          }
        ]
      },
      "feelCue": "Grattez le fond de la casserole avec une cuillère après l'étape de la croûte — elle devrait libérer dans des chips fermes caramélisés qui sentent le riz grillé et le stock de poisson épicé, non brûlés ni acrides."
    },
    {
      "nodeId": "step_5",
      "action": "Assiette et service",
      "inputs": [
        "cooked_thieb_rice",
        "braised_fish_and_vegetables"
      ],
      "outputState": "finished_thieboudienne",
      "instructions": "Traditionnellement, la thiéboudienne est servie sur un grand plateau communal : fonder le riz au centre, arranger le poisson sur le dessus (le garder le plus complet possible même si elle a cassé pendant la cuisson), et distribuer les légumes autour du riz. Placez les croustilles à côté ou sur le dessus comme un bonus croustillant. Déposer tout liquide de braisage restant sur le poisson. Servir avec des quartiers de citron vert et un côté de sauce dibi fermentée à l'oignon et au moutarde si disponible.",
      "visualCue": {
        "primaryTarget": "Une montagne de riz rouge-ambre avec un poisson entier (ou de grandes pièces) sur le dessus, entouré de légumes-racines richement colorés. Les morceaux de croûte sont brun-orange foncé, visibles et attrayants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La présentation est complète mais le riz est encore pâle et le poisson semble sec. Le plat ne s'est pas réuni visuellement ou aromatiquement.",
            "action": "Il s'agit d'une note de plat, et non d'une note de cuisson — revenez à l'étape précédente et vérifiez la température du riz et du poisson et l'assaisonnement avant de servir."
          },
          {
            "state": "Perfect",
            "description": "Le plateau est visuellement frappant — couleurs chaudes profondes, le poisson comme la pièce centrale, légumes comme des bijoux autour. La cuisine sent la mer, la tomate et le riz grillé.",
            "action": "Servir à la table et laisser les invités creuser en commun."
          },
          {
            "state": "Overdone",
            "description": "Les poissons se sont complètement décomposés en flocons dispersés dans le riz plutôt que d'être assis comme pièce maîtresse. Les légumes se sont dissous.",
            "action": "Mélangez tout ensemble dans une présentation plus rustique — il aura un goût identique, juste moins majestueux. Présent avec la croûte bien en vue."
          }
        ]
      },
      "feelCue": "Tenez-vous au-dessus du plateau fini et respirez - l'arôme devrait être comme se tenir sur un marché côtier sénégalais: sel de mer, fumée de bois, tomate caramélisée, et quelque chose de fermenté et profond que vous ne pouvez pas tout à fait nommer mais ne peut pas arrêter de sentir."
    }
  ]
};
