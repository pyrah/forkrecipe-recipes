export default {
  "repoId": "master_british_beer_batter_fish_001",
  "parentRepoId": null,
  "slug": "beer-batter-fish",
  "author": "ForkRecipe Kitchen",
  "title": "Poissons à bière",
  "description": "Des filets épais de morue ou d'aiglefin dans une pâte si légère et si croustillante qu'il semble presque audible sur le chemin de votre bouche — or pâle et blister, fissures ouvertes pour révéler des poissons blancs de neige, vapeur à l'intérieur. La bière n'est pas décorative : sa carbonation crée dix mille petites fissures qui rendent la croûte plus aérée que le plomb.",
  "cuisine": "Anglais",
  "culture": "changements climatiques",
  "category": "seafood",
  "tags": [
    "poissons",
    "pâte",
    "frites",
    "britanniques",
    "puces",
    "pub",
    "morue",
    "l'aiglefin"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "45 min",
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
    "bitter": 2,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filets épais de morue ou d'aiglefin, peau enlevée",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "Pollock",
        "flétan"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Farine (toute destination), pour pâte",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "farine de riz (résultat plus grave)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Starch",
      "name": "Farine de maïs",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poivre de Cayenne",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "poivre blanc"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Ale pâle glacé ou bière lager",
      "ratioValue": 330,
      "defaultUnit": "ml",
      "substitutions": [
        "eau gazeuse (non alcoolique)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Structure",
      "name": "Farine pure, pour dragage",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Tournesol ou huile végétale, pour friture profonde",
      "ratioValue": 2000,
      "defaultUnit": "ml",
      "substitutions": [
        "dégoulinage du boeuf (traditionnel)",
        "huile d'arachide"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "beer_batter",
      "instructions": "Couper la farine, la fécule de maïs, la poudre à pâte, le sel et la cayenne dans un grand bol. Faites un puits au centre. Votre bière doit être glacée — si elle est à température ambiante, reposer la bouteille dans un bain de glace pendant au moins 20 minutes, ou la mettre au congélateur pendant 10 minutes. La bière froide conserve plus de dioxyde de carbone, qui est l'épine dorsale structurelle de la croustillante pâte. Verser la bière froide dans le puits à la fois et fouetter avec un fouet ballon, en travaillant rapidement du centre vers l'extérieur. Mélanger seulement jusqu'à ce qu'il soit simplement combiné — la pâte devrait encore avoir quelques petites boules. Le surmélange développe du gluten, ce qui rend la croûte croustillante plutôt que croquante. La pâte finie devrait avoir la consistance de la crème double fine, enrobant une cuillère mais dégoulinant dans un flux lent. S'il est trop épais, ajoutez une touche de bière plus froide; si trop mince, tamisez dans une cuillère à soupe plus de farine. Placez le bol au réfrigérateur ou sur la glace pendant que vous chauffez l'huile.",
      "visualCue": {
        "primaryTarget": "Une pâte pâle, opaque, légèrement bosselée de la couleur de la pâtisserie non cuite — pas lisse comme de la crème, pas visiblement chunky. Les bulles de la bière s'élèvent lentement à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches de farine sèche encore visibles. Les battements sont bosseux et incohérents.",
            "action": "Encore 5 secondes — juste assez pour incorporer les patchs secs, mais arrêtez avant qu'il soit lisse."
          },
          {
            "state": "Perfect",
            "description": "Légèrement grumeux, uniformément pâle, avec quelques petites bulles à la surface. Enrober une cuillère dans un voile d'environ 2 mm d'épaisseur.",
            "action": "Réfrigérer pendant que l'huile chauffe. Utiliser dans les 30 minutes."
          },
          {
            "state": "Overdone",
            "description": "Battre est complètement lisse et brillant — gluten a développé. Il fera frire dense et pâteux plutôt que croquant.",
            "action": "Reposez la pâte 15 minutes au réfrigérateur et continuez — les dégâts sont faits mais un repos peut détendre une partie du réseau de gluten."
          }
        ]
      },
      "feelCue": "Plongez brièvement le bout du doigt dans la pâte — il devrait enrober votre doigt d'une couche mince et uniforme que vous pouvez presque voir à travers les bords, avec de petites bulles accrochées à la surface. Si elle glisse immédiatement comme de l'eau, c'est trop mince."
    },
    {
      "nodeId": "step_2",
      "action": "Frire",
      "inputs": [
        "ing_09",
        "ing_01",
        "ing_08",
        "beer_batter"
      ],
      "outputState": "finished_fish",
      "instructions": "Verser l'huile dans un grand pot profond ou un four hollandais à une profondeur d'au moins 8 cm (3 pouces). Chaleur à 190°C exactement (375°F) – utiliser un thermomètre à friture profonde. Pendant que l'huile chauffe, patter les filets de poisson complètement secs avec des serviettes en papier; l'humidité de surface est l'ennemi de pâte croquante. Assaisonner légèrement le poisson avec du sel des deux côtés. Mettre en place un poste de dragage: une assiette de farine, puis le bol à pâte. Travaillant un filet à la fois, draguer le poisson dans de la farine ordinaire, secouer tout excès — un manteau de farine mince de murmure aide la pâte à adhérer et crée une barrière de vapeur. Abaissez immédiatement le filet fariné dans la pâte, laissant l'excès retomber dans le bol pour un nombre de trois. Baissez lentement le filet battu dans l'huile chaude, en le libérant loin de vous. Ne pas surpeupler — faire frire un ou deux filets à la fois, ou la température de l'huile tombera et la pâte absorbera les graisses au lieu de croustillant. Faire frire pendant 6 à 8 minutes, en tournant une fois à la marque de 3 minutes, jusqu'à ce que la croûte soit profondément dorée et craquant audiblement. Égoutter sur une grille de fils sur une plaque de cuisson — pas sur des serviettes en papier, qui piègent la vapeur en dessous et adoucissent la croûte.",
      "visualCue": {
        "primaryTarget": "Une croûte profondément dorée, blister et cratère à la surface, sans taches pâles ou soyeuses. La croûte doit avoir l'aspect architectural — léger et aéré, non lisse et dense.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est d'or pâle ou jaune, encore souple plutôt que rigide. Quand vous tapez avec des pinces, ça semble doux.",
            "action": "Retourner à l'huile 2 minutes de plus. Vérifiez que l'huile est à 190 °C — il peut avoir chuté lorsque le poisson a été ajouté."
          },
          {
            "state": "Perfect",
            "description": "Deep ambre-or, blister et cratère. Rigide au toucher des pinces. Lorsqu'elle est levée, elle semble creuse et crépitante. À l'intérieur, le poisson est juste opaque.",
            "action": "Égoutter sur la grille et assaisonner avec du sel immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé, presque brun rouge, avec une odeur amère. Les poissons à l'intérieur peuvent être desséchés.",
            "action": "Servir immédiatement. La croûte sera encore croustillante mais a perdu une partie de sa délicatesse — servir avec du vinaigre de malt supplémentaire pour couper l'amertume."
          }
        ]
      },
      "feelCue": "Prenez une pièce finie et écoutez - la croûte devrait craquer doucement dans votre main, comme du papier de tissu croquant. Réglez-le sur la grille et il devrait sonner avec un robinet creux. La vapeur qui s'échappe à travers la croûte lorsque vous la cassez ouverte doit porter une odeur de levure chaude de bière."
    }
  ]
};
