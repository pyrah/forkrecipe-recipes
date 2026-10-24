export default {
  "repoId": "master_british_beef_wellington_001",
  "parentRepoId": null,
  "slug": "beef-wellington",
  "author": "ForkRecipe Kitchen",
  "title": "Boeuf Wellington",
  "description": "La grande pièce centrale britannique — un filet entier de bœuf cousu dur, peint avec de la moutarde, recouvert d'une duxelle de champignons secs et d'une couche de prosciutto, puis enveloppé dans de la pâtisserie dorée soufflée et rôti jusqu'à ce que la croûte se brise au-dessus d'une âme rose roussâtre.",
  "cuisine": "Anglais",
  "culture": "changements climatiques",
  "category": "proteins",
  "tags": [
    "rôti",
    "britanniques",
    "boeuf",
    "Filet",
    "Pâtisserie",
    "pièce centrale",
    "Bien sûr."
  ],
  "difficulty": 5,
  "activeTime": "1 hr 15 min",
  "totalTime": "3 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filet de bœuf coupé au centre (lié, paré, température ambiante)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Chateaubriand",
        "filet épais des yeux"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile neutre (pour la mer)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Boeuf qui coule",
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "Châtaigne & champignons bouton (finement haché)",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "champignons sauvages",
        "crémini"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Échalotes et ail (finement hachés)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Thym frais (feuilles cueillies)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "estragon"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Moutarde anglaise",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Moutarde de Dijon"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Protein",
      "name": "Prosciutto (découpes minces)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "jambon de parme",
        "pancetta mince"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Structure",
      "name": "Pâtisserie soufflée à beurre entier (froid, laminée)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "bouffée brute",
        "bouffée de beurre entièrement achetée"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Binder",
      "name": "Jaune d'œuf (battue, pour le lavage)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "oeuf entier battu avec un jet de lait"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel de mer et poivre noir craquelé",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sear",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_10"
      ],
      "outputState": "seared_fillet",
      "instructions": "Saupoudrer le filet d'os et l'assaisonner de sel et de poivre. Chauffer l'huile dans une poêle lourde jusqu'à ce qu'elle mijote et fume, puis saisir le filet sur chaque visage — y compris les extrémités — pendant environ 60 à 90 secondes chacun, jusqu'à ce qu'une croûte brune profonde se forme. L'objectif est la couleur et la saveur, pas la cuisson à l'intérieur. Soulevez-la et laissez-la reposer et refroidir complètement ; en se couchant un filet chaud puis en l'enveloppant, la pâte s'échaufferait.",
      "visualCue": {
        "primaryTarget": "Une croûte brun foncé uniforme sur toute la surface du filet, sans taches grises ou crues et le centre encore complètement cru et frais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le filet est pâle et gris dans les taches, pleure le liquide dans la poêle et s'échauffe plutôt que de grincer.",
            "action": "Levez la chaleur et séchez à nouveau la surface — la poêle est trop froide pour croûter, et l'humidité est l'ennemi."
          },
          {
            "state": "Perfect",
            "description": "Une croûte d'acajou brûlée sur tous les visages, la viande ferme et sèche, l'intérieur encore cru et frais au toucher.",
            "action": "Reposez-vous et rafraîchissez complètement le filet avant de brosser avec de la moutarde."
          },
          {
            "state": "Overdone",
            "description": "La croûte est noircie et la chaleur a entraîné une épaisse bande de viande grise cuite bien dans le filet.",
            "action": "Retirez-le immédiatement; vous ne pouvez pas défaire la profondeur cuite, alors refroidissez-la rapidement et raccourcissez le four final pour protéger le centre."
          }
        ]
      },
      "feelCue": "Le filet doit siffler violemment l'instant où il touche la poêle et se sentir ferme et sec à l'extérieur, mais il doit céder et froid au cœur lorsque vous appuyez dessus. Pas de flaque à cracher, c'est - à - dire de l'eau, pas une flaque."
    },
    {
      "nodeId": "step_2",
      "action": "Réduire",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "dry_duxelles",
      "instructions": "Blitz ou hacher finement les champignons dans une pâte grossière. Faire cuire avec les échalotes, l'ail et le thym dans une poêle sèche ou à peine huilée à feu moyen-élevé, en remuant souvent. Les champignons libéreront un flot d'eau — faites cuire, 15-20 minutes, jusqu'à ce que chaque goutte s'évapore et que la masse s'assombrisse dans une duxelle épaisse, sèche, intensément salée. Assaisonner et refroidir complètement. Toute humidité résiduelle ici transformera la pâte en pâte.",
      "visualCue": {
        "primaryTarget": "Une pâte de champignons sombre, dense et presque sèche qui tient sa forme dans un monticule et ne laisse pas de piscine d'eau lorsqu'elle est poussée d'un côté de la casserole.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est humide et lâche, glissant en arrière pour combler tout trou que vous grattez, avec des pleurs liquides aux bords.",
            "action": "Continuez à cuisiner et à remuer à feu vif — les duxelles doivent perdre toute leur eau avant de pouvoir s'approcher de la pâtisserie."
          },
          {
            "state": "Perfect",
            "description": "Une pâte brune, concentrée, qui se plante et se maintient, sentant fortement le champignon et le thym sans bord d'allium brut.",
            "action": "Laisser refroidir complètement avant de s'étendre sur la couche de prosciutto."
          },
          {
            "state": "Overdone",
            "description": "Les duxelles sont brûlantes et deviennent amères, collantes et noircies sur le plancher de la casserole.",
            "action": "Abaissez la chaleur et grattez les morceaux lâches; si vous avez un goût brûlé, laissez-les derrière dans la poêle."
          }
        ]
      },
      "feelCue": "Faites glisser votre cuillère sur le plancher de la casserole — tôt sur elle patine sur un lisier humide; quand prêt, il laisse un canal propre et sec qui tient ouvert. L'arôme passe du champignon brut à la terre torréfié profonde."
    },
    {
      "nodeId": "step_3",
      "action": "Enveloppe",
      "inputs": [
        "seared_fillet",
        "dry_duxelles",
        "ing_06",
        "ing_07"
      ],
      "outputState": "wrapped_log",
      "instructions": "Poser des feuilles de prosciutto superposées sur une grande feuille de film de collage pour former un rectangle assez grand pour enfermer le filet. Étendre les duxelles refroidies uniformément sur le jambon. Badigeonner le filet refroidi de moutarde, le placer le long du bord des duxelles, et utiliser le film de collage pour rouler le jambon et le champignon étroitement autour du bœuf dans un log ferme, même. Tordre les extrémités comme un craquelin pour le compresser, puis refroidir pendant au moins 20 minutes pour régler la forme.",
      "visualCue": {
        "primaryTarget": "Un log serré, uniformément cylindrique avec le prosciutto et les duxelles scellant complètement le filet, pas de trous et pas de poches d'air, assez ferme pour tenir sa forme ronde.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le rouleau est lâche et grumelé, les duxelles étant groupées d'un côté et l'air coincé entre le jambon et le bœuf.",
            "action": "Déroulez et redistribuez les duxelles uniformément, puis roulez à nouveau, tirant le film de collage taut pour chasser l'air."
          },
          {
            "state": "Perfect",
            "description": "Un cylindre ferme et lisse, le jambon entièrement enveloppé autour du filet recouvert de champignons, tenant sa forme lorsqu'il est soulevé.",
            "action": "Refroidissez la maison de bois avant d'emballer dans la pâtisserie."
          },
          {
            "state": "Overdone",
            "description": "L'enveloppe est si serrée que le prosciutto a déchiré ou les extrémités ont fendue, exposant le boeuf nu.",
            "action": "Raccordez les trous avec un morceau supplémentaire de prosciutto et reroulez plus doucement."
          }
        ]
      },
      "feelCue": "Roulez-le comme un sac de couchage serré — le tronc devrait se sentir dense et printanier à travers le film, sans taches creuses et douces. Les extrémités tordues devraient résister quand vous les remorquez."
    },
    {
      "nodeId": "step_4",
      "action": "Encas",
      "inputs": [
        "wrapped_log",
        "ing_08",
        "ing_09"
      ],
      "outputState": "pastry_parcel",
      "instructions": "Rouler la pâte soufflée réfrigérée dans un rectangle assez grand pour enfermer le tronc avec un peu de chevauchement. Déposez le grume réfrigéré sur la pâtisserie, brossez les bords de la pâtisserie avec du jaune d'œuf, et roulez-le, scellez la couture en dessous et pressez tout air. Étaler et coller les extrémités, les sceller avec le lavage des oeufs. Refroidir le colis 15-20 minutes pour que la pâtisserie reste froide, puis brosser avec du jaune d'œuf, marquer légèrement le dessus dans un treillis diagonal, et saupoudrer de sel flocé.",
      "visualCue": {
        "primaryTarget": "Une parcelle de pâtisserie soigneusement scellée et réfrigérée avec la couture en dessous, la surface brillante avec le lavage des oeufs et légèrement marquée, sans pâtisserie déchirée ni remplissage exposé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâtisserie est chaude et molle, déchirante pendant que vous la soulevez et que vous vous écartez à la couture où le remplissage se manifeste.",
            "action": "Patch larmes avec des déchets de pâtisserie et lavage d'oeufs, puis refroidir dur avant de cuire ainsi le beurre se re-sets."
          },
          {
            "state": "Perfect",
            "description": "Une parcelle tendue, froide, couture scellée et cachée en dessous, surface uniformément vitrée et marquée, bords nettement parés.",
            "action": "Cuire immédiatement dans un four chaud pendant que la pâtisserie est encore froide."
          },
          {
            "state": "Overdone",
            "description": "L'excès de pâte est emballé dans des plis épais et pâteux aux extrémités qui resteront crus et gommés dans le four.",
            "action": "Trim le lourd recoupe une seule couche afin que la pâtisserie puisse cuire uniformément."
          }
        ]
      },
      "feelCue": "La pâtisserie doit être fraîche, ferme et légèrement cireuse avec du beurre — jamais molle ou grasse. S'il commence à se sentir chaud ou collant pendant que vous travaillez, arrêtez et retournez-le au réfrigérateur."
    },
    {
      "nodeId": "step_5",
      "action": "Rôtis",
      "inputs": [
        "pastry_parcel",
        "ing_10"
      ],
      "outputState": "beef_wellington",
      "instructions": "Cuire sur un plateau préchauffé dans un four chaud (200°C / 400°F) pendant 35-45 minutes, jusqu'à ce que la pâtisserie soit bien dorée et croustillante. Utilisez un thermomètre à viande poussé au centre de la viande : tirez-le à 50-52°C / 122-126°F pour un rare moyen rosé, car il passera au repos. Reposez la Wellington sur une planche pendant 10-15 minutes avant de la trancher, ce qui permet aux jus de s'installer afin qu'ils ne sèment pas la croûte. Couper en tranches épaisses avec un couteau dentelé.",
      "visualCue": {
        "primaryTarget": "Une coquille de pâtisserie bien dorée, brillante, éclatante et croustillante, et lorsqu'elle est coupée, un anneau propre de pâtisserie et de jambon autour d'un noyau juteux et rose-rose.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est pâle et la face inférieure est pâle et humide; une sonde lit bien au-dessous de 50°C et le noyau coupé serait frais et cru.",
            "action": "Remettez-le au four, en tentant le dessus avec du papier s'il brunit trop vite, jusqu'à ce que le centre atteigne la température."
          },
          {
            "state": "Perfect",
            "description": "Croûte profondément dorée et croustillante sur le dessus et le fond, au centre à 50-52°C, la tranche reposée montrant un filet rose-rose et une croûte sèche et en couches.",
            "action": "Reposez-vous 10-15 minutes, puis découpez en tranches épaisses et servez."
          },
          {
            "state": "Overdone",
            "description": "La pâte est foncée et le noyau a grimpé au-delà du milieu, le filet grisant du rose au brun terne et se dessèche.",
            "action": "Servir immédiatement et couper plus épais pour préserver ce qui reste de jus; la prochaine fois tirer plus tôt et faire confiance au report."
          }
        ]
      },
      "feelCue": "Tapez sur la pâtisserie — elle doit sembler creuse et croustillante, pas molle. Résistez à la coupe tôt : coupez trop tôt et les jus bousculent sur la planche ; reposé à droite, la première coupe murmure à travers la croûte dans un centre chaud, tendre et rosé."
    }
  ]
};
