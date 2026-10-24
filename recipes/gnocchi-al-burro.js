export default {
  "repoId": "master_italian_gnocchi-al-burro_001",
  "parentRepoId": null,
  "slug": "gnocchi-al-burro",
  "author": "ForkRecipe Kitchen",
  "title": "Gnocchi al Burro e Salvia",
  "description": "Les gnocchis de pommes de terre faits à droite ont la texture des nuages condensés en quelque chose que vous pouvez tenir — une lumière impossible, à peine structurée, donnant au toucher d'une fourchette. Faire revenir le beurre à la noisette, faire frire les feuilles de sauge jusqu'à ce qu'elles se brisent, et tout cela devient l'hiver du nord de l'Italie dans un bol.",
  "cuisine": "Italien",
  "culture": "Nord italien",
  "category": "grains",
  "tags": [
    "Italien",
    "gnocchi",
    "pommes de terre",
    "beurre",
    "Sauge",
    "confort"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "1 hr",
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
    "sour": 0,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Pommes de terre floues, telles que Russet ou King Edward (environ 700g avant cuisson)",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "Or du Yukon (gnocchi légèrement plus dense)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "00 farine (plus plus pour le banc)",
      "ratioValue": 130,
      "defaultUnit": "g",
      "substitutions": [
        "Farine à usage unique"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Jaune d'œuf (1 grande)",
      "ratioValue": 18,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé (de type européen, 84% de matières grasses)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Feuilles fraîches de sauge (8-10 grandes)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Parmigiano Reggiano (finalement râpé, pour finir)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "Grana Padano"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Cuire",
      "inputs": [
        "ing_01"
      ],
      "outputState": "riced_potato",
      "instructions": "Cuire les pommes de terre non pelées à 200 °C (400 °F) directement sur la grille du four jusqu'à ce qu'elles soient complètement tendres — une brochette insérée ne présente aucune résistance, environ 50 à 60 minutes. La cuisson, non l'ébullition, est essentielle : l'ébullition ajoute de l'eau à la pomme de terre, ce qui vous force à ajouter plus de farine pour la structure, et plus de farine signifie gnocchi plus lourd. Alors qu'elle est encore chaude, la moitié des pommes de terre, écoper la chair et passer immédiatement à travers un rizier de pomme de terre ou un tamis à tambour fin sur une surface propre, légèrement farineuse. Étendre la patate de riz et laisser la vapeur s'échapper pendant 3 minutes.",
      "visualCue": {
        "primaryTarget": "Une neige sèche à grain fin de pomme de terre sur la surface de travail – légère, moelleuse, sans bosses mouillées ou avec des taches d'eau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des brins denses, collants et humides qui passent par le rizier. Une odeur de patate crue.",
            "action": "Retournez la pomme de terre au four pendant 10 minutes. Il doit être complètement cuit."
          },
          {
            "state": "Perfect",
            "description": "sec, aéré, léger comme neige. Une vapeur douce qui monte de la surface. Pas d'embrouille.",
            "action": "Travaillez rapidement tout en restant chaud — la pomme de terre fraîche et rizée devient collante."
          },
          {
            "state": "Overdone",
            "description": "La pomme de terre est sèche et farineuse, borderline grainy. Pas d'humidité.",
            "action": "Ajouter le jaune d'œuf plus tôt que d'habitude à lier — la pomme de terre peut avoir besoin d'un toucher plus d'humidité."
          }
        ]
      },
      "feelCue": "Appuyez sur une pincée de pomme de terre rizisée entre le pouce et l'index — il doit sentir léger et sablonneux, se dissoudre à la moindre pression, pas gommé ou humide."
    },
    {
      "nodeId": "step_2",
      "action": "Plier",
      "inputs": [
        "riced_potato",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "gnocchi_dough",
      "instructions": "Faites un puits au centre de la patate de riz. Ajouter le jaune d'œuf, le sel et environ 100g de farine. À l'aide d'un racleur de banc ou du bout des doigts, tricotez la farine dans la pomme de terre avec un mouvement de coupe et de pliage — sans pétrir. Ajouter plus de farine une cuillère à soupe à la fois seulement au besoin. La pâte est prête dès qu'elle se réunit et ne colle plus aux mains. Le surmenage développe du gluten et rend le gnocchi dur — la pâte doit se sentir oreiller et à peine cohésive, presque impossiblement douce.",
      "visualCue": {
        "primaryTarget": "Une pâte pâle, lisse et douce qui tient ensemble, mais saigne doucement sous son propre poids. Pas de fissures, pas de collants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pâte collante et humide qui s'accroche au banc et aux larmes quand elle est levée.",
            "action": "Ajouter la farine une cuillère à soupe à la fois, plier doucement — farine minimale, patience maximale."
          },
          {
            "state": "Perfect",
            "description": "Douce comme une joue de bébé. Pas collant. Il tient une empreinte douce. Sags mais ne se propage pas.",
            "action": "Divisez et roulez immédiatement — ne laissez pas la pâte reposer ou elle deviendra collante."
          },
          {
            "state": "Overdone",
            "description": "Pâte sèche qui résiste au pliage. Des fissures aux bords.",
            "action": "Vous avez ajouté trop de farine — le gnocchi sera dense. De toute façon, ils seront toujours comestibles."
          }
        ]
      },
      "feelCue": "La pâte doit avoir l'impression d'entrer dans une pêche mûre à travers le velours, c'est - à - dire de donner, d'être amortie, d'être incroyablement douce, avec le moindre empilement qui disparaît lorsque vous farinez vos mains."
    },
    {
      "nodeId": "step_3",
      "action": "Forme",
      "inputs": [
        "gnocchi_dough"
      ],
      "outputState": "shaped_gnocchi",
      "instructions": "Divisez la pâte en 6 portions. Sur une surface légèrement farinée, rouler chaque portion dans une corde d'environ 1,5 cm de diamètre — rouler du centre vers l'extérieur avec des paumes plates, en appliquant une pression uniforme. Couper en morceaux de 2cm avec un racleur ou un couteau tranchant. Pour les gnocchi à crêtes classiques, rouler chaque pièce à l'arrière d'une fourchette avec votre pouce, créant une légère boucle et des crêtes qui accrochent la sauce. Placer sur une plaque de cuisson farinée en une seule couche. Cuire dans les 30 minutes ou congeler immédiatement.",
      "visualCue": {
        "primaryTarget": "Même, les oreillers plombés environ la taille d'un gros joint du pouce, avec des crêtes douces d'un côté et une empreinte de pouce dévot sur l'autre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Cordes inégales — épaisses au milieu, minces aux extrémités. Gnocchi cuisinera à des taux différents.",
            "action": "Reroulez la corde, en appliquant plus de pression du centre."
          },
          {
            "state": "Perfect",
            "description": "Même des morceaux d'oreiller avec des crêtes cohérentes. Flottant légèrement pour qu'ils ne se collent pas.",
            "action": "Cuire immédiatement dans de l'eau bouillante bien salée."
          },
          {
            "state": "Overdone",
            "description": "Ropes laminées et denses. Gnocchi se sent lourd et serré.",
            "action": "Continuez — ils seront plus denses que l'idéal, mais ils cuisineront encore bien."
          }
        ]
      },
      "feelCue": "Tenez un gnocco en forme et appuyez - le doucement — il devrait revenir immédiatement, comme un coussin en mousse très doux qui se souvient de sa forme."
    },
    {
      "nodeId": "step_4",
      "action": "Bouillir",
      "inputs": [
        "shaped_gnocchi",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_gnocchi_al_burro",
      "instructions": "Portez un grand pot d'eau bien salée à ébullition. Pendant ce temps, dans une grande poêle, faire fondre le beurre à feu moyen et continuer à cuire jusqu'à ce que les solides de lait deviennent dorés et que le beurre sente les noisettes grillées, environ 3 à 4 minutes. Ajouter les feuilles de sauge et faire frire jusqu'à ce que croustillant et translucide, 30 à 45 secondes. Baisser la chaleur au minimum. Déposer les gnocchi dans l'eau bouillante en un seul lot — ils sont prêts environ 30 secondes après avoir flotté à la surface. Retirer avec une araignée directement dans la poêle au beurre brun, en ajoutant une éclaboussure d'eau de pâtes. Mélanger doucement à feu moyen pendant 30 secondes, puis servir immédiatement avec du parmesan râpé.",
      "visualCue": {
        "primaryTarget": "Les gnocchi sont gonflés, brillants et enrobés de beurre brun-ambre. Les feuilles de sauge sont croquantes, translucides et dispersées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Gnocchi coule au fond et n'a pas encore flotté. Sensé et froid au centre.",
            "action": "Attendez le flotteur — puis à 30 secondes de ce point."
          },
          {
            "state": "Perfect",
            "description": "Plump, léger, glacé de beurre brun. La sauge est croquante. Le parmesan fond au contact. Gnocchi saute quand la poêle est secouée.",
            "action": "Servir dans des bols chauds immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Gnocchi est resté trop longtemps dans l'eau bouillante — pâle, gonflé, commençant à s'effondrer.",
            "action": "Retirer immédiatement, bien égoutter et mélanger dans le beurre pour croquer légèrement l'extérieur dans une poêle chaude."
          }
        ]
      },
      "feelCue": "Mangez l'un immédiatement de la cuillère — il devrait se dissoudre entre la langue et le palais avec presque aucune résistance, laissant derrière le beurre, la sauge, et un fantôme de pomme de terre."
    }
  ]
};
