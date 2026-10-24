export default {
  "repoId": "master_french_mayonnaise_001",
  "parentRepoId": null,
  "slug": "mayonnaise",
  "author": "ForkRecipe Kitchen",
  "title": "Mayonnaise",
  "description": "La mère des sauces froides — un jaune d'œuf unique s'est mis à accepter son propre poids plusieurs fois dans l'huile, battu goutte à goutte dans une émulsion épaisse et brillante qui se tient dans des pics doux, aiguisé avec de la moutarde, du citron, et juste assez de sel pour lui faire goûter rien que lui-même.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "sauces",
  "tags": [
    "mayonnaise",
    "français",
    "émulsion",
    "Sauce froide",
    "mère-sauce",
    "œuf"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 2,
    "bitter": 0,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Binder",
      "name": "Jaune d'œuf (large, température ambiante)",
      "ratioValue": 18,
      "defaultUnit": "parts",
      "substitutions": [
        "1 œuf entier pour une sauce plus légère et plus versable"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Moutarde de Dijon",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Poudre de moutarde anglaise fleurie dans un peu d'eau"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron frais"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile neutre (grape graine ou canola)",
      "ratioValue": 200,
      "defaultUnit": "parts",
      "substitutions": [
        "partie huile d'olive pour une sauce plus affirmée"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Citrus",
      "name": "Jus de citron frais (pour finir)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Hydration",
      "name": "Eau froide (au besoin pour se détendre)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_05"
      ],
      "outputState": "seasoned_base",
      "instructions": "Réglez un bol moyen sur une serviette pliée humide afin qu'il ne puisse pas tourner pendant que vous fouettez une main. Ajouter le jaune d'œuf, la moutarde, le vinaigre et le sel et fouetter pendant 30 secondes jusqu'à ce que le mélange soit lisse, légèrement plus pâle et légèrement épaissi. Tout doit être à température ambiante — un jaune froid émulsifie lentement et est beaucoup plus rapide à briser. La moutarde n'est pas seulement une saveur ici : c'est un deuxième émulsifiant qui rend la sauce beaucoup plus indulgente.",
      "visualCue": {
        "primaryTarget": "Une base lisse, homogène, jaune pâle avec le gloss de la moutarde a fonctionné pleinement dans et aucune stries de vinaigre séparé pooling aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le jaune, la moutarde et le vinaigre s'assoient dans des stries distinctes et la surface semble cassée et aqueuse.",
            "action": "Continuez à fouetter encore 15 à 20 secondes jusqu'à ce qu'il se rassemble dans une couleur uniforme."
          },
          {
            "state": "Perfect",
            "description": "Un seul liquide lustré, jaune pâle qui enveloppe le fouet d'un mince film et sent fortement la moutarde et le vinaigre.",
            "action": "Commencez à ajouter du pétrole — commencez par une baisse littérale à la fois."
          },
          {
            "state": "Overdone",
            "description": "Vous ne pouvez pas vraiment trop mélanger cette étape; au plus le bol se réchauffe légèrement de l'effort.",
            "action": "Continuez. Si la cuisine est chaude, la base est très bien."
          }
        ]
      },
      "feelCue": "Le fouet doit se déplacer librement avec presque aucune résistance — c'est une base mince, lâche, pas encore une sauce. Elle sent la moutarde crue et le vinaigre."
    },
    {
      "nodeId": "step_2",
      "action": "Émulsionner",
      "inputs": [
        "seasoned_base",
        "ing_04"
      ],
      "outputState": "tight_emulsion",
      "instructions": "C'est tout le jeu. Whisking constamment et dur, ajouter la goutte d'huile par goutte pour le premier quart de celui-ci — attendez que chaque ajout ait complètement disparu avant d'ajouter plus. Alors que le mélange s'épaissit et s'éclaircit, vous pouvez vous détendre jusqu'à un fil d'huile mince et stable, toujours fouettant sans pause. La base attrape les gouttelettes d'huile et les verrouille dans un réseau; précipitez-le et le réseau ne se forme jamais. Au moment où l'huile est entrée, vous aurez un monticule épais, pâle et jonglant.",
      "visualCue": {
        "primaryTarget": "Une émulsion épaisse, opaque et ivoire qui fond sur le fouet, retient les marques des fils, et retombe lentement sur elle-même plutôt que de courir.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore mince, molle et jaune translucide — l'émulsion n'a pas encore pris place.",
            "action": "Arrête d'ajouter de l'huile. fouetter dur jusqu'à ce que ce que vous avez visiblement épaississe, puis reprendre l'ajout d'huile encore plus lentement, goutte à goutte."
          },
          {
            "state": "Perfect",
            "description": "Une masse d'ivoire pâle et brillante qui tient des pics doux et s'accroche épaissement au fouet. Le fil d'huile disparaît au contact.",
            "action": "Arrêtez d'ajouter de l'huile une fois qu'elle est aussi épaisse que vous voulez, puis passez à la finition et assaisonnement."
          },
          {
            "state": "Overdone",
            "description": "La sauce devient soudainement grasse, caillée et lissée, avec de l'huile libre qui pleure et la structure qui s'effondre — elle a cassé.",
            "action": "Mettre un jaune d'œuf frais (ou une cuillère à café de moutarde et une éclaboussure d'eau) dans un bol propre et fouetter la sauce cassée dans elle goutte à goutte pour la réémulsionner."
          }
        ]
      },
      "feelCue": "Vous sentirez exactement le moment où il « prend » — le slosh lâche sous les firmes fouettées dans une résistance lourde et traînante dans la première cuillère à soupe ou deux d'huile. De là, il devient plus épais et plus difficile à fouetter."
    },
    {
      "nodeId": "step_3",
      "action": "Terminer",
      "inputs": [
        "tight_emulsion",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_mayonnaise",
      "instructions": "Goûtez l'émulsion — elle sera plate et riche en huile et aura besoin d'éclaircir. fouetter dans le jus de citron pour l'acidité et lever, puis ajuster le sel. Si la mayonnaise est plus raide que vous ne le souhaitez, ou semble terne et grasse, fouetter à l'eau froide quelques gouttes à la fois : elle détend la sauce et re-resserre une émulsion légèrement huileuse, rétablissant l'éclat de satin. Refroidir au moins une heure avant de servir; les saveurs se complètent et il se ferme légèrement.",
      "visualCue": {
        "primaryTarget": "Une mayonnaise satinée, cuivrable et blanc cassé qui tient un pic doux, a un goût propre et équilibré — riche mais brillant — et ne montre pas de perles d'huile libre à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il a un goût plat, lourd et une note, ou s'assied trop raide et serré sur la cuillère.",
            "action": "Ajouter le jus de citron et le sel au goût, puis quelques gouttes d'eau froide pour se détendre et s'éclaircir jusqu'à ce qu'il goûte vivant et se propage facilement."
          },
          {
            "state": "Perfect",
            "description": "Gloire et juste assez ferme pour tenir sa forme, avec un équilibre net de richesse, d'acidité et de sel et une faible chaleur de moutarde sur la finale.",
            "action": "Couvrir soigneusement et réfrigérer. Utiliser dans les trois à quatre jours."
          },
          {
            "state": "Overdone",
            "description": "Il est allé lâche et coule de trop d'eau ou de citron, ou goût aigu et aigre.",
            "action": "fouetter un peu d'huile fraîche goutte par goutte pour reconstruire le corps, ou équilibrer l'excès d'acide avec une pincée plus de sel."
          }
        ]
      },
      "feelCue": "Une cuillère finie devrait tomber dans une poupée douce et brillante et tenir un pic doux. Sur la langue, il est riche mais jamais gras, l'acide frappant en premier et la profondeur de l'œuf et de la moutarde s'attardant derrière."
    }
  ]
};
