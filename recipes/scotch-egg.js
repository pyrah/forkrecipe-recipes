export default {
  "repoId": "master_british_scotchegg_001",
  "parentRepoId": null,
  "slug": "scotch-egg",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Oeufs écossais",
  "description": "Un œuf d'élevage doux, coconné de saucisses assaisonnées, armuré de miettes de pain dorées, ouvert pour révéler un jaune au centre des coraux bringé d'un collier de porc parfaitement rose.",
  "cuisine": "Anglais",
  "culture": "changements climatiques",
  "category": "eggs",
  "tags": [
    "œufs",
    "britanniques",
    "Saucisse",
    "frits",
    "pub-food",
    "porc"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "60 min",
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
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Œufs (grands, pour bouillir, très frais)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Viande de saucisse de porc (graisse élevée, 20%+)",
      "ratioValue": 120,
      "defaultUnit": "parts",
      "substitutions": [
        "Viande de saucisse de Cumberland",
        "Merguez mélange d'agneau"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Pâte à pain Panko",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "chapelures fines séchées"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Œufs (battus, pour revêtement)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Starch",
      "name": "Farine pure",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poivre noir, poivre blanc, mélange macé",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre blanc seulement"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile neutre (pour friture profonde)",
      "ratioValue": 500,
      "defaultUnit": "parts",
      "substitutions": [
        "Saindoux"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Bouillir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "soft_boiled_eggs",
      "instructions": "Abaissez doucement les œufs dans un pot d'eau bouillante. Cuire exactement 6 minutes 30 secondes pour un jaune de corail. Transférer immédiatement dans un bain de glace et refroidir pendant 10 minutes, ce qui arrête la cuisson de report qui rend les jaunes gris. Peler soigneusement sous l'eau froide courante, en maintenant le blanc intact. Sèche-toi avec des serviettes en papier.",
      "visualCue": {
        "primaryTarget": "Oeufs pelés avec des blancs intacts et brillants. L'œuf, lorsqu'il est coupé, présente une couche de jaune externe et un intérieur fluide et orangé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le blanc a encore des taches translucides près du jaune. L'oeuf se sent doux tout le long du trajet et est difficile à peler proprement.",
            "action": "Faites bouillir un oeuf de remplacement pendant 7 minutes — vous avez besoin d'intégrité structurale pour l'emballage. Une larme blanche trop molle quand on applique la saucisse."
          },
          {
            "state": "Perfect",
            "description": "Le blanc est entièrement réglé, suffisamment ferme pour tenir forme pendant l'emballage. Yolk est crépuscule au centre, un or orange profond. Peler dans des draps propres.",
            "action": "Bain de glace et pelage rapide — tout retard porte sur la chaleur jusqu'au jaune."
          },
          {
            "state": "Overdone",
            "description": "Le yolk est entièrement jaune pâle, sec et poudreux lorsqu'il est coupé. Anneau gris-vert possible si laissé trop longtemps.",
            "action": "L'œuf fonctionnera toujours pour un œuf écossais — un jaune entièrement set est un choix de style légitime — mais le centre d'écoulement est perdu."
          }
        ]
      },
      "feelCue": "Maintenez un œuf pelé dans votre paume et fermez vos doigts doucement — il devrait se sentir ferme mais produire très légèrement sous pression, comme un raisin dur, pas une boule de ping-pong."
    },
    {
      "nodeId": "step_2",
      "action": "Saison",
      "inputs": [
        "ing_02",
        "ing_06",
        "ing_07"
      ],
      "outputState": "seasoned_sausage",
      "instructions": "Mélanger la viande de saucisse avec le sel et l'épice jusqu'à ce qu'elle soit assaisonnée uniformément. Faire frire une petite patty dans une poêle sèche et goûter — la saucisse devrait être assaisonnée avec hardiesse, car l'oeuf et la chapelure dilueront sa saveur. Réglez. Divisez la viande en portions égales — une par oeuf. Aplatissez chaque portion dans un disque mince, même sur une feuille de film collant.",
      "visualCue": {
        "primaryTarget": "Un disque uniforme, rose pâle, de viande de saucisse d'environ 12 cm de long et 5 mm d'épaisseur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Disque trop épais ou inégal — un bout 1 cm, l'autre 3 mm. Laissera des taches nues sur l'œuf lorsqu'il sera emballé.",
            "action": "Répressez le film dans une épaisseur uniforme. Utilisez un rouleau si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Même, disque souple qui s'accroche au film sans déchirer. Fat visible comme des stries plus légères. Des odeurs de porc et d'épices.",
            "action": "Procédez immédiatement à l'emballage — les emballages de viande de saucisse froide sont plus propres."
          },
          {
            "state": "Overdone",
            "description": "Surmené dans une pâte gommée et dense qui ne montre plus de marbrures de graisse. La température a grimpé au-dessus de 10 °C par la chaleur de la main.",
            "action": "Réfrigérer pendant 15 minutes avant d'emballer — les saucisses chaudes et surmenées se mettent aux mains et aux larmes."
          }
        ]
      },
      "feelCue": "Pressée entre deux doigts, la viande de saucisse doit se sentir collante et plastique — elle s'empresse plutôt que glisse, tient sa forme sans retomber."
    },
    {
      "nodeId": "step_3",
      "action": "Assemblage",
      "inputs": [
        "soft_boiled_eggs",
        "seasoned_sausage",
        "ing_05",
        "ing_04",
        "ing_03"
      ],
      "outputState": "breaded_scotch_eggs",
      "instructions": "Poussez chaque œuf bouilli légèrement avec de la farine, ce qui aide la saucisse à saisir. Poser un disque de saucisse aplati sur un film de collage et centrer l'oeuf sur le dessus. Utilisez le film pour soulever et envelopper la saucisse autour de l'œuf, la sceller avec des mains mouillées et pincer toutes les coutures fermées. Rouler dans la farine, tremper dans l'œuf battu, puis bien enrober le panko, presser pour adhérer. Reposez-vous au réfrigérateur pendant 20 minutes.",
      "visualCue": {
        "primaryTarget": "Une sphère lisse et uniforme d'oeufs enrobés de saucisses complètement encaissés dans des miettes de panko sans taches de viande nues ou de trous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Morceaux de saucisses minces ou manquantes visibles. Les coutures ne sont pas scellées.",
            "action": "Reprendre l'oeuf battu partout où la miette est mince ou absente, puis retourner dans le panko. Scellez fermement toutes les coutures — des trous s'ouvrent dans la friteuse."
          },
          {
            "state": "Perfect",
            "description": "Même, sphère en forme de boule, entièrement or blanc avec panko. Pas de viande ou d'œuf visible. Se sent ferme et légèrement lourd lorsqu'il est soulevé.",
            "action": "Réfrigérer pour raffermir le revêtement avant la friture."
          },
          {
            "state": "Overdone",
            "description": "Double-enduit et trop épais — la couche de chapelure est de 5 mm et volumineuse comme une croquette. Il brûlera avant que la saucisse ne passe.",
            "action": "C'est presque impossible à sur-poiler avec un seul passage. Si vous avez des taches épaisses, pressez-les doucement."
          }
        ]
      },
      "feelCue": "En tenant l'œuf pané, il devrait se sentir comme une boule de cricket — lisse, ferme et agréablement lourd, avec un faible donner de la couche de saucisse en dessous."
    },
    {
      "nodeId": "step_4",
      "action": "Fry",
      "inputs": [
        "breaded_scotch_eggs",
        "ing_08"
      ],
      "outputState": "finished_scotch_eggs",
      "instructions": "Chauffer l'huile à 170 C (338 F) dans un pot profond et lourd. Des œufs scotch plus bas dans soigneusement — ne foulez pas le pot. Faire frire 7-8 minutes, tourner toutes les 2 minutes pour une couleur uniforme, jusqu'à ce que la miette soit profonde, même acajou et que la saucisse atteigne 70 C (158 F) à l'intérieur. Égoutter sur un support, pas des serviettes en papier. Reposez-vous 5 minutes avant de couper.",
      "visualCue": {
        "primaryTarget": "Une sphère crépitante profondément dorée, avec une croûte jaune foncé uniforme, sans taches pâles, sans taches brûlées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Croûte dorée pâle avec taches blanches ou légères. Température intérieure inférieure à 70 °C — saucisses sous-cuites.",
            "action": "Réduisez la température de l'huile à 10 degrés (il peut avoir été trop chaud, cuire l'extérieur rapidement pendant que l'intérieur est en retard) et continuez à frire. Utilisez un thermomètre à sonde."
          },
          {
            "state": "Perfect",
            "description": "Deep amber-mahogany partout, craquelant audiblement quand tapoté avec un ongle. Saucisson à 70-72 C. Couper ouvert : intérieur propre de la chapelure blanche autour d'un anneau de saucisse rose autour d'un jaune de corail.",
            "action": "Égoutter sur une grille et reposer 5 minutes. Servir avec de la moutarde anglaise et une salade habillée."
          },
          {
            "state": "Overdone",
            "description": "Très brun foncé à croûte presque noire. Une odeur amère de chapelure brûlée. L'huile peut être trop chaude.",
            "action": "L'intérieur peut encore être beau — couper ouvert et vérifier. Couper la croûte la plus foncée avec un couteau tranchant et servir. Température d'huile inférieure pour les lots suivants."
          }
        ]
      },
      "feelCue": "Tapotez la surface avec une cuillère en métal — une croûte parfaite ronge le dos avec un coup sec et aigu, et non pas un bruit terne. L'œuf doit se sentir nettement ferme sous la croûte."
    }
  ]
};
