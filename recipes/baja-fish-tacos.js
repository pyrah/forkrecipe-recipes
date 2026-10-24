export default {
  "repoId": "master_mexican_baja_fish_tacos_001",
  "parentRepoId": null,
  "slug": "baja-fish-tacos",
  "author": "ForkRecipe Kitchen",
  "title": "Tacos de poissons de Baja",
  "description": "Le poisson blanc grillé à la bière frit à une coquille dorée éclatantement croustillante, enveloppé dans des tortillas chaudes de maïs avec du chou déchiqueté, du créma et un éjaculation de chaux — le taco qui a mis Ensenada sur la carte.",
  "cuisine": "Mexicain",
  "culture": "Baja Californien",
  "category": "seafood",
  "tags": [
    "poisson-tacos",
    "Baja",
    "Mexique",
    "bière-batterie",
    "frits",
    "tacos",
    "Produits de la rue"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 3,
    "bitter": 0,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filets de poissons blancs (cod, flétan ou tilapia), peau dénaturée",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Mahi-mahi",
        "bar de mer"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Farine polyvalente et fécule de maïs, parties égales combinées",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Mélange de farine de riz pour une croûte plus légère"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Solvent",
      "name": "Bière lager mexicaine (Modelo Especial ou Pacifico), froide",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "eau pétillante pour version sans alcool"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Poivre Cayenne et poudre d'ail, parties égales",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika fumé et poudre d'oignon"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre pour friture profonde (végétable ou canola)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "saindoux (traditionnel)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Starch",
      "name": "Tortilles de maïs (6 pouces)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "tortillas de farine"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Choux blancs éraflés, créma mexicain, quartiers de citron vert et sauce chaude",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "crème aigre pour créma, coleslaw mix"
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
        "ing_05"
      ],
      "outputState": "beer_batter",
      "instructions": "Mélanger le mélange farine-amidon de maïs, la Cayenne, la poudre d'ail et le sel dans un bol moyen. Verser la bière froide en même temps et remuer avec une fourchette jusqu'à ce qu'elle soit combinée — 8 à 10 coups au maximum. La pâte doit être bosselée, pas lisse. Les lumps de farine non mélangée sont votre ami : ils créent des poches inégales qui frisent en patchs extra-crunchy. Ne pas trop mélanger. Gardez la pâte froide — placez le bol sur la glace si votre cuisine est chaude. La pâte froide frappe l'huile chaude et crée une rupture maximale.",
      "visualCue": {
        "primaryTarget": "Une pâte molle et grumelée quelque part entre la pâte à crêpes et la tempura — pâle, pétillante de la carbonation de la bière, avec des amas visibles de farine.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Farine sèche encore assise sur le dessus, non incorporée du tout. Bière mise en commun au fond séparément.",
            "action": "Agiter encore quelques fois jusqu'à ce que la farine soit juste humide, mais arrêtez immédiatement — quelques morceaux sont non négociables."
          },
          {
            "state": "Perfect",
            "description": "La patte s'écoule d'une fourchette en rubans épais et inégaux. Lumpy tout au long, beige pâle, encore légèrement vertigineuse de la carbonation de la bière.",
            "action": "Passer une éprouvette de poisson pour vérifier l'épaisseur du revêtement. Si la pâte glisse, elle est trop fine — ajoutez une cuillère à soupe plus de farine."
          },
          {
            "state": "Overdone",
            "description": "La batterie a été battue lisse et la carbonation a été arrachée de la bière. On dirait une grosse pâte à crêpes grise.",
            "action": "La croûte sera mâcheuse et dense plutôt qu'écrasante. Ajoutez une touche de bière froide et une pincée de poudre à pâte pour restaurer une légèreté."
          }
        ]
      },
      "feelCue": "La pâte devrait se sentir à peine plus lourde que l'eau quand vous trempez votre doigt — assez mince pour enrober, mais pas si épaisse qu'elle glisse dans une masse lourde."
    },
    {
      "nodeId": "step_2",
      "action": "Fry",
      "inputs": [
        "ing_01",
        "beer_batter",
        "ing_06"
      ],
      "outputState": "fried_fish",
      "instructions": "Chauffer au moins 5 cm d'huile dans un pot lourd ou une poêle profonde à 180°C (350°F). Utilisez un thermomètre — la précision de la température est importante ici. Couper le poisson en bandes de 2 x 8 cm le long du grain. Faites-les sécher avec des serviettes en papier, puis assaisonnez avec du sel. Travaillant en lots de 3-4 bandes (jamais fouler le pot), plongez chaque bande dans la pâte, laissez l'excès couler pendant 3 secondes, puis baissez-la dans l'huile loin de vous. Faire frire 3-4 minutes, tourner une fois, jusqu'à ce que la pâte soit un ambre d'or profond et que le poisson flotte librement dans l'huile. Égoutter sur un porte-fils — pas des serviettes en papier, qui vaporisent la croûte.",
      "visualCue": {
        "primaryTarget": "Bandes très dorées, inégales et texturées avec une coquille très croustillante. Le poisson doit flotter librement dans l'huile lorsqu'il est fait.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La batte est beige pâle à l'or clair, semble encore humide dans les patchs. Les poissons coulent plutôt que les flotteurs. La chair interne est translucide au point le plus épais.",
            "action": "Laisser dans l'huile jusqu'à ce qu'elle s'élève et flotte librement, et la couleur atteint l'ambre profond. Une pâte pâle signifie un poisson sous-détoné à l'intérieur."
          },
          {
            "state": "Perfect",
            "description": "Marron d'or profond — la couleur d'une ale pâle, pas d'un bec. Le battement est craquant et inégal dans la texture. Le poisson flotte et roule facilement dans l'huile. Lorsqu'elle est levée, elle semble creuse lorsqu'elle est tapée de pinces.",
            "action": "Transférez-le immédiatement sur la grille. Assaisonner avec une pincée de sel à l'instant il sort de l'huile tandis que la surface est encore humide avec l'huile."
          },
          {
            "state": "Overdone",
            "description": "La croûte est brun foncé à brun rougeâtre. Les bords commencent à paraître sombres. Le poisson est rigide.",
            "action": "Supprimer immédiatement. Le poisson à l'intérieur est probablement encore bien; la croûte aura juste un goût plus amer. Vérifiez la température de l'huile — elle a peut - être chuté et le poisson a passé trop longtemps dans de l'huile plus froide."
          }
        ]
      },
      "feelCue": "Tenez un morceau et il doit sentir rigide et incroyablement léger — comme du carton, pas comme de la pâte mouillée. Cette rigidité est la croûte."
    },
    {
      "nodeId": "step_3",
      "action": "Toast",
      "inputs": [
        "ing_07"
      ],
      "outputState": "warmed_tortillas",
      "instructions": "Réglez une poêle ou un comal en fonte sèche à feu vif. Faire bouillir chaque tortilla de maïs directement sur la surface chaude pendant 20 à 30 secondes de chaque côté jusqu'à ce qu'elle souffle légèrement, qu'elle sente la masa grillée et qu'elle développe de faibles taches d'omble. Empiler et envelopper dans un chiffon propre pour garder chaud et souple — les tortillas froides et raides craquent lorsqu'elles sont pliées autour du poisson.",
      "visualCue": {
        "primaryTarget": "Tortillas gonflées, avec de faibles taches d'omble foncé des deux côtés, pliables lorsqu'elles sont pliées et sentant le maïs grillé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La tortilla est encore froide et légèrement crue. Pale des deux côtés sans ombrage. Plie fermement et menace de craquer.",
            "action": "Maintenez la chaleur plus longtemps. La saveur de tortilla brute concurrence le poisson plutôt que de le soutenir."
          },
          {
            "state": "Perfect",
            "description": "Faint empreinte léopard des deux côtés. Tortilla est entièrement pliable, fumant légèrement et sent le maïs sucré et la fumée de bois.",
            "action": "Empiler et envelopper immédiatement pour les empêcher de sécher."
          },
          {
            "state": "Overdone",
            "description": "Tortilla est devenue rigide et rigide avec de lourdes charges sur la majeure partie de la surface. Des odeurs brûlées.",
            "action": "Il est encore comestible, mais le goût de l'omble peut dominer le poisson. Utilisez une main plus légère avec le prochain lot."
          }
        ]
      },
      "feelCue": "Une tortilla de maïs parfaitement grillée se replie sans craquer, ressort légèrement, et se sent à peine chaude — pas chaude — à travers le tissu."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "fried_fish",
        "warmed_tortillas",
        "ing_08"
      ],
      "outputState": "baja_fish_tacos",
      "instructions": "Travailler rapidement alors que le poisson est encore chaud et croustillant, déposer deux tortillas chaudes légèrement chevauchant sur une plaque (style Baja utilise deux par taco pour le support structurel). Ajouter une bande de poisson frit dans le centre. Garnir d'un monticule lâche de chou déchiqueté, d'une généreuse bruine de créma, d'une pression de lime et d'un soupçon de sauce chaude. Mangez immédiatement — la pâte s'adoucit dans les 5 minutes suivant le contact avec les garnitures humides.",
      "visualCue": {
        "primaryTarget": "Taco double-tortille pliée avec une bande de poisson doré visible au sommet, chou blanc et crème drapant les côtés, lime-brillant et vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poisson n'a pas encore été ajouté. Garnitures assemblées sur une tortilla froide et intacte.",
            "action": "Toujours construire sur les tortillas fraîchement grillées et ajouter du poisson au dernier moment avant de manger."
          },
          {
            "state": "Perfect",
            "description": "Le poisson est encore chaud et visiblement croquant, les garnitures sont fraîches et rafraîchissantes contre le poisson chaud, la tortilla est souple et doublée. Le contraste des textures — pâte croustillante, chou frais, créma soyeux — est tout le point.",
            "action": "Mangez dans les 2 minutes suivant l'assemblage."
          },
          {
            "state": "Overdone",
            "description": "Le poisson a été ajouté au taco il y a plusieurs minutes et la croûte de pâte est devenue molle et mâcheuse de la vapeur et de l'humidité.",
            "action": "Faites revenir le prochain lot juste avant d'être prêt à manger. Le plat entier existe dans la fenêtre de 90 secondes entre l'assemblage et la première bouchée."
          }
        ]
      },
      "feelCue": "Tenez le taco du bas — il devrait se sentir chaud et étonnamment léger. S'il est soyeux et lourd, le poisson est trop longtemps assis."
    }
  ]
};
