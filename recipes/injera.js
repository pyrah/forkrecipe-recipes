export default {
  "repoId": "master_ethiopian_injera_001",
  "parentRepoId": null,
  "slug": "injera",
  "author": "ForkRecipe Kitchen",
  "title": "Injera éthiopienne",
  "description": "Un vaste disque de teff spongieux, rempli de mille cratères minuscules, profondément aigre, peu terreux, la plaque comestible de l'Éthiopie. Chaque bulle est un bien conçu pour piéger les dernières gouttes du ragoût que vous empilez sur le dessus.",
  "cuisine": "Éthiopien",
  "culture": "Amhara",
  "category": "breads",
  "tags": [
    "enjera",
    "ethiopienne",
    "Pain plat",
    "fermenté",
    "Teff",
    "levain naturel"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "4 days",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 5,
    "bitter": 0,
    "umami": 1,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de teff entière (dark ou ivoire)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "farine de sarrasin (partielle)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude (30 C)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "eau filtrée"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "Ersho (culture de fermentation de teff, ou 2 c. à soupe d'un lot antérieur)",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": [
        "oublions — le teff s'autoferment en 3–4 jours"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile végétale neutre (à l'huile légère mitade)",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre clarifié"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "initial_batter",
      "instructions": "Mélanger la farine de teff, l'eau chaude et la culture de fermentation ersho dans un grand bol en céramique ou en verre jusqu'à ce qu'elle soit complètement lisse sans grumeaux. La pâte doit être assez mince — plus mince que la pâte à crêpes, plus proche de la crème lourde en consistance. Couvrir le bol de façon lâche avec un chiffon (non hermétique — la culture a besoin d'air) et laisser à température ambiante (22–26 C). La pâte fermentera pendant 3 jours. Ne pas réfrigérer.",
      "visualCue": {
        "primaryTarget": "Une pâte mince, uniforme, brun foncé — la couleur du lait de chocolat noir. Pas de grumeaux visibles quand on trempe une cuillère et qu'on la laisse s'enfuir.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lumps de farine de teff sec visibles, pâte est inégale en couleur avec des stries plus pâles.",
            "action": "fouetter vigoureusement ou mélanger brièvement jusqu'à ce qu'il soit complètement lisse avant de commencer la fermentation."
          },
          {
            "state": "Perfect",
            "description": "Un brun foncé uniforme, verse une cuillère dans un ruban fin et lisse, entièrement hydraté.",
            "action": "Couvrir librement et commencer la fermentation à température ambiante de 3 jours."
          },
          {
            "state": "Overdone",
            "description": "Le battement est trop épais — la cuillère tient sa forme lorsqu'elle est tombée. Ne se répandra pas dans une mince injera.",
            "action": "Ajouter l'eau en petites quantités, fouetter après chaque addition, jusqu'à ce qu'elle verse comme de la crème fine."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir soyeuse et complètement lisse entre les doigts — il ne reste pas de granules de teff. Il devrait être versable sans aucune résistance."
    },
    {
      "nodeId": "step_2",
      "action": "Fermenter",
      "inputs": [
        "initial_batter"
      ],
      "outputState": "fermented_batter",
      "instructions": "Laisser fermenter la pâte à température ambiante pendant 3 jours complets (72 heures). Mélanger une fois par matin. Au jour 2, vous verrez de petites bulles se former à la surface et la pâte sentira l'odeur aigre et légèrement terreuse. Au jour 3, la surface sera mousseuse, la couleur s'est approfondie, et l'odeur sera fortement acide, le tangage caractéristique de l'injera authentique. Un liquide mince (eau de sortie) peut se séparer du dessus; le remuer.",
      "visualCue": {
        "primaryTarget": "Après 3 jours : la surface est légèrement mousseuse, la pâte s'est séparée en un liquide plus clair sur le dessus et une couche dense en dessous. Stirring révèle des bulles actives. L'odeur est fortement aigre et agréablement funky.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La batteuse ne sent que faiblement acide après 2 jours; le bouillonnage est minime; la surface est plate. Pas assez de fermentation pour une saveur authentique ou la structure de bulles.",
            "action": "Attendez encore 24 heures dans un endroit plus chaud (24–26 C idéal). La fermentation ne peut pas être précipitée."
          },
          {
            "state": "Perfect",
            "description": "Surface effilée, bulles actives lorsqu'il est agité, odeur aigre aiguë, légère séparation du liquide sur le dessus. Le batteur est devenu vivant.",
            "action": "Ajouter le sel et cuire immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Sensation extrêmement piquante, ammoniaque après plus de 4 jours; la pâte peut avoir une teinte rose ou orange. Surfermenté.",
            "action": "Jetez et redémarrez. Une pâte à injera surfermentée peut être désagréable et potentiellement dangereuse."
          }
        ]
      },
      "feelCue": "La pâte au teff entièrement fermentée sent comme une croix entre le début du sarde et la bière noire — piquante et vivante. Lorsque vous faites glisser une cuillère à travers elle, les parties de la pâte et puis revient lentement avec des bulles visibles en arrière."
    },
    {
      "nodeId": "step_3",
      "action": "Assaisonner",
      "inputs": [
        "fermented_batter",
        "ing_04"
      ],
      "outputState": "seasoned_batter",
      "instructions": "Bien mélanger la pâte fermentée pour réintégrer les couches séparées. Ajouter le sel fin et fouetter pour combiner. Bouche: la pâte doit être fortement aigre avec une agréable terre du teff. La saison pour équilibrer, ne pas neutraliser — injera est censé être aigre. Si la pâte semble très épaisse après fermentation (teff absorbe l'eau au fil du temps), mincez-la avec une petite quantité d'eau à température ambiante jusqu'à ce qu'elle coule librement.",
      "visualCue": {
        "primaryTarget": "Une pâte uniforme, librement versable qui sort de la louche dans un flux mince et continu. Pas de bosses. Le sel est complètement dissous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Battre encore épais et gloussant après avoir remué; verser dans des gouttes plutôt qu'un ruisseau; cristaux de sel blanc encore visibles.",
            "action": "Continuez à fouetter jusqu'à ce qu'il soit lisse et fin pour verser librement. Ajouter de l'eau une cuillère à soupe à la fois si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Elle coule librement d'une louche dans un ruisseau uniforme, sombre et uniforme, entièrement assaisonné. Goûte aigre et peu terreux.",
            "action": "Chauffer la mitade ou la poêle antiadhésive et commencer la cuisson."
          },
          {
            "state": "Overdone",
            "description": "La batterie est aqueuse — plus mince que le lait entier. Il s'étendra trop fin et ne tiendra pas la structure du trou.",
            "action": "Laisser reposer la pâte pendant 15 minutes pour absorber une partie de l'excès d'eau."
          }
        ]
      },
      "feelCue": "Plongez un doigt — la pâte devrait la mettre légèrement et s'enfuir proprement. S'il s'écoule comme de l'eau, c'est trop mince. Si elle s'accroche dans une couche épaisse, ajouter de l'eau."
    },
    {
      "nodeId": "step_4",
      "action": "Frire",
      "inputs": [
        "seasoned_batter",
        "ing_05"
      ],
      "outputState": "finished_injera",
      "instructions": "Chauffer à feu moyen une poêle antiadhésive de 35 à 40 cm, en fonte ou en argile traditionnelle. Légèrement huile juste le premier injera — les suivants n'ont pas besoin d'huile car l'humidité naturelle de la pâte empêche de coller. Verser une louche de pâte dans une spirale rapide vers l'extérieur du centre (comme une crêpe mais n'inclinez pas la poêle — versez-la et laissez-la s'étendre). La pâte doit recouvrir la poêle en une seule fois. Couvrir immédiatement avec un couvercle bombé. Cuire 2 à 3 minutes jusqu'à ce que tous les « yeux » (les trous caractéristiques) se soient ouverts sur toute la surface et que les bords se soient levés de la casserole. Ne pas retourner — injera est cuit d'un seul côté. Faites glisser sur un chiffon propre pour refroidir. Stack refroidis injeras — ils colleront légèrement et se détacheront magnifiquement.",
      "visualCue": {
        "primaryTarget": "Un injera entièrement cuit a des centaines d'yeux ouverts sur toute sa surface sans piscines de pâte mouillée et non sertie. Les bords se sont légèrement recourbés et se sont levés proprement de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mouille, taches brillantes dans le centre où la pâte n'a pas mis. Moins de bulles que prévu; certains yeux n'ont pas ouvert. Des bords encore attachés à la casserole.",
            "action": "Remplacer le couvercle et cuire encore 60 à 90 secondes. Le centre prend toujours plus de temps."
          },
          {
            "state": "Perfect",
            "description": "Chaque centimètre carré couvert des yeux ouverts, la surface est mate (pas de brillance de la pâte crue), les bords se levant naturellement. La couleur est un brun moyen à brun foncé uniforme selon la variété de teff.",
            "action": "Déposez la casserole sur un chiffon. L'injera doit se relâcher avec un remorqueur doux et tenir sa forme circulaire."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont bruns et croquants; le fond est foncé; l'injera sent le teff grillé plutôt que le teff aigre. La texture sera fragile plutôt que spongieuse.",
            "action": "Moins de chaleur pour les injeras ultérieurs. Un injera surcuit est comestible mais perd sa pliabilité caractéristique."
          }
        ]
      },
      "feelCue": "Un injera fini se sent comme une éponge mince et humide — légèrement humide au toucher, printanière et suffisamment souple pour se plier autour de la nourriture sans craquer. S'il s'écroule, il était cuit trop chaud ou trop long."
    }
  ]
};
