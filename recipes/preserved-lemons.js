export default {
  "repoId": "master_moroccan_preserved_lemons_001",
  "parentRepoId": null,
  "slug": "preserved-lemons",
  "author": "ForkRecipe Kitchen",
  "title": "Cimons conservés",
  "description": "Des citrons entiers emballés dans leur propre jus avec du sel grossier et des épices, scellés dans un pot et laissés pendant un mois — transformant la croûte de la moelle amère en une conserve soyeuse, moelleuse, intensément salée et parfumée.",
  "cuisine": "Maroc",
  "culture": "Afrique du Nord",
  "category": "fermented",
  "tags": [
    "de conservation",
    "Maroc",
    "nord-africain",
    "condiment",
    "fermenté",
    "végétalien",
    "Sans gluten"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "30 days",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 5,
    "sour": 3,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Citrons à peau mince (Meyer ou Eureka, non épilés)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "chaux (les chaux conservées sont également classiques dans certaines traditions nord-africaines)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sels de mer non iodés grossiers ou kasher",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Citrus",
      "name": "Jus de citron frais (à partir de citrons supplémentaires pour saumure)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Feuilles de baies séchées",
      "ratioValue": 0.5,
      "defaultUnit": "part",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Bâton de cannelle (une petite pièce)",
      "ratioValue": 0.3,
      "defaultUnit": "part",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Grains de poivre noirs entiers",
      "ratioValue": 0.2,
      "defaultUnit": "part",
      "substitutions": [
        "Graines de coriandre",
        "Pousses de cardamome"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Girofles entiers (2–3)",
      "ratioValue": 0.1,
      "defaultUnit": "part",
      "substitutions": [
        "anis des étoiles (une demi-pode)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparer",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "salt_packed_lemons",
      "instructions": "Frottez soigneusement les citrons sous l'eau chaude pour enlever toute cire de surface ou tout résidu de pesticide — les citrons non dilatés sont fortement préférés, car la croûte est le prix et vous ne voulez rien entre le sel et les huiles de citron naturelles. Couper chaque citron presque en quartiers du haut, en arrêtant 1 à 2 cm avant la base, de sorte que le citron se tient ensemble en forme de ventilateur. Cette coupe quartied-but-hinged maximise la surface exposée au sel tout en conservant le citron entier pour une présentation attrayante. Conditionnez 1 à 2 cuillères à soupe de sel grossier généreusement dans l'ouverture de chaque citron coupé, en pressant le sel dans la chair. La quantité de sel n'est pas négociable — le sous-sel permettra une croissance bactérienne nuisible plutôt que la fermentation souhaitée.",
      "visualCue": {
        "primaryTarget": "Chaque citron ouvert comme une fleur à quatre pétales, densément garni de sel grossier blanc qui est pressé dans chaque crevasse des surfaces coupées. Le citron devrait être presque cristallisé sur les faces coupées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Trop peu de sel dans les découpes — les surfaces de citron ne sont que légèrement pulvérisées et le sel n'a pas été pressé dans la chair. Le sel insuffisant crée des conditions pour les moisissures nocives plutôt que la fermentation sûre.",
            "action": "Ouvrir les coupes plus larges et les emballer en sel supplémentaire. Vous ne pouvez pas surgeler à ce stade — les citrons seront finalement rincés avant utilisation, et le sel est le mécanisme de conservation."
          },
          {
            "state": "Perfect",
            "description": "Chaque surface coupée est épaissement recouverte de sel, pressée dans la chair, avec des cristaux de sel visibles emballés dans l'ouverture. Lorsque vous pressez doucement le citron, une petite quantité de perles de jus à la coupe — le sel commence déjà à attirer l'humidité.",
            "action": "Passez à l'emballage du pot."
          },
          {
            "state": "Overdone",
            "description": "Lemon a coupé tout le chemin en quatre quartiers séparés — ils ne sont plus réunis. Ce n'est pas une catastrophe, mais les citrons entiers sont plus serrés et plus traditionnels.",
            "action": "Emballez les quartiers séparés dans le pot de toute façon — ils fonctionneront toujours parfaitement, juste avec une apparence moins traditionnelle."
          }
        ]
      },
      "feelCue": "Lorsque vous pressez un citron salin, il doit déjà se sentir plus souple qu'un citron frais, parce que le sel a commencé à extraire du jus de chair. Cet adoucissement est le début du processus de préservation."
    },
    {
      "nodeId": "step_2",
      "action": "Boîte",
      "inputs": [
        "salt_packed_lemons",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "packed_preservation_jar",
      "instructions": "Stériliser un pot de verre à large bouche (assez grand pour tenir fermement tous les citrons) en bouillant ou en passant par le cycle chaud d'un lave-vaisselle. Placer une feuille de laurier, un petit morceau de cannelle, une pincée de grains de poivre et les girofles à la base du pot. Conditionnez les citrons salés le plus étroitement possible dans le pot, en les pressant et en les pressant pour que les citrons compressent et libèrent leur jus. Sucez des épices supplémentaires entre les citrons pendant que vous couchez. Une fois que tous les citrons sont emballés, appuyez fermement avec votre poing — vous voulez que le pot soit si serré les citrons ne peuvent pas hocher ou bouger. Verser le jus de citron frais sur le dessus jusqu'à ce que les citrons soient complètement submergés. Au besoin, ajouter une petite quantité de sel supplémentaire dissous dans le jus de citron. Fermez bien.",
      "visualCue": {
        "primaryTarget": "Un pot bien emballé de citrons comprimé au point de libérer du jus visible dans le pot. Le jus de citron se lève autour et sur les citrons emballés. Le pot a l'air dense et plein, sans vide d'air entre les citrons.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les citrons emballés avec des espaces vides entre eux et le pot — ils flotteront au-dessus du niveau de jus à mesure qu'il monte, exposant les citrons supérieurs à l'air et aux moisissures potentielles.",
            "action": "Ajouter plus de citrons (même de fines tranches peuvent combler les vides), presser plus fermement, ou ajouter un poids de fermentation sur le dessus avant de sceller."
          },
          {
            "state": "Perfect",
            "description": "Les citrons sont si serrés qu'ils ne peuvent pas bouger. Le niveau de jus de pot atteint ou couvre le citron supérieur. Feuilles de baie et épices visibles entre les citrons. Le couvercle du pot se ferme avec une résistance du contenu comprimé.",
            "action": "Sceller et conserver à température ambiante ou dans un garde-manger frais."
          },
          {
            "state": "Overdone",
            "description": "Jarre suremballé et le couvercle ne peut pas fermer sans écraser les citrons à une pulpe cassée. Bien qu'il ne soit pas nocif, une confiture de citron concassée plutôt que des citrons entiers conservés en est le résultat.",
            "action": "Retirer un citron pour permettre au couvercle de bien fermer. Les citrons légèrement broyés conserveront encore bien."
          }
        ]
      },
      "feelCue": "Appuyez sur le pot scellé sur le comptoir et agitez doucement — vous ne devriez pas entendre ni sentir les citrons se déplacer. Un bocal qui râle a des citrons lâches qui boberont au-dessus de la saumure. Rouvrir et emballer plus étroitement."
    },
    {
      "nodeId": "step_3",
      "action": "Cure",
      "inputs": [
        "packed_preservation_jar"
      ],
      "outputState": "curing_preserved_lemons",
      "instructions": "Conservez le pot scellé à température ambiante (18–24°C / 65–75°F) pendant 30 jours minimum, en retournant le pot une fois par jour pendant la première semaine pour redistribuer le sel et les jus, en veillant à ce que toutes les surfaces de citron soient baignées dans la saumure. Les citrons s'enfonceront progressivement au fur et à mesure qu'ils s'adoucissent et le niveau de jus sera différent d'un jour à l'autre. Après une semaine, le virage est moins critique, mais la rotation occasionnelle aide. A 30 jours, goût: la croûte doit être tendre, translucide et moelleuse, non pas très amère, mais salée et parfumée. La chair est généralement éliminée lors de la cuisson des citrons conservés; seule la croûte est utilisée.",
      "visualCue": {
        "primaryTarget": "Après 30 jours : les citrons se sont ramollis et coulés, leurs croûtes translucides et légèrement dorées du sel et de leurs propres jus. La saumure dans le pot est maintenant un sirop doré nuageux, plus épais que le jus de citron.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "À 2 semaines, les croûtes de citron sont encore fermes et opaques lorsqu'elles sont coupées, elles ont un goût fortement amer et salé plutôt que moelleux et soyeux. La moelle a encore son amertume blanche agressive.",
            "action": "Scellez et continuez à guérir. Deux semaines, c'est le demi-point — la véritable transformation se produit dans les semaines 3 à 4. La patience est le seul ingrédient dont vous avez besoin ici."
          },
          {
            "state": "Perfect",
            "description": "À 30+ jours: la croûte est translucide, tendre à une coupe propre avec un couteau, et goûte intensément savore-salé-fragmenté avec seulement un soupçon d'amertume agréablement moelleuse. La pint s'est adoucie du blanc étoilé à une texture gélatineuse et moelleuse.",
            "action": "Réfrigérer. Les citrons conservés sont prêts à l'emploi et resteront réfrigérés pendant 6 à 12 mois."
          },
          {
            "state": "Overdone",
            "description": "Laisser à température ambiante 60 jours après — les citrons peuvent développer une saumure très forte, presque fermentée-alcoolique et les croûtes peuvent devenir musquées plutôt que soyeuses. La saveur devient plus intensément funky que parfumée.",
            "action": "Transférer immédiatement au réfrigérateur. Les citrons conservés sont encore utiles, particulièrement dans les braises lentes et les ragoûts où la profondeur extra fermentée s'intègre bien."
          }
        ]
      },
      "feelCue": "À 30 jours, découper un citron conservé : la croûte doit donner à un couteau tranchant sans résistance et la pint doit avoir l'air translucide-gélatine plutôt que blanc crayeux. Appuyez sur un petit morceau entre les doigts — il devrait se taper facilement, comme du légume cuit, ne pas résister comme de la peau crue."
    },
    {
      "nodeId": "step_4",
      "action": "Finition",
      "inputs": [
        "curing_preserved_lemons"
      ],
      "outputState": "finished_preserved_lemons",
      "instructions": "Une fois guéri, réfrigérer le pot. À utiliser: retirer un quart de citron, rincer le sel de la croûte sous l'eau froide, puis racler et jeter la chair et la moelle — seule la croûte soyeuse et translucide est utilisée. Couper ou hacher la croûte et l'utiliser dans les tagines, les salades de grains, les pâtes, les beurres composés ou les vinaigrettes. La saumure dans le pot est également excellente : utilisez-la comme substitut de sel assaisonné dans les sauces et les braises. Les citrons conservés peuvent transformer un plat de bon à mémorable avec juste une petite quantité — leur saveur est concentrée, donc utiliser avec retenue jusqu'à ce que vous comprenez leur puissance.",
      "visualCue": {
        "primaryTarget": "Un pot de citrons conservés prêts à l'emploi montre des croûtes translucides teintées d'ambre immergées dans une saumure épaisse, dorée et nuageuse. Lorsque vous retirez un quart et que vous le rincez, la croûte doit avoir l'air presque laquée, lisse et légèrement brillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte, après le rinçage, semble encore opaque et blanche dans les taches — la pointe n'a pas complètement transformé. Le goût est vif et amer plutôt que soyeux et salé.",
            "action": "Retournez le citron dans le pot et guérissez encore 1 à 2 semaines. Tous les citrons ne s'adoucissent pas à la même vitesse — les Meyers à peau mince conservent plus vite que les Eurekas à peau épaisse."
          },
          {
            "state": "Perfect",
            "description": "La croûte rincée est translucide, douce et parfumée, intensément citronnée mais sans morsure dure. Il sent le zeste de citron concentré et le sel. Séché fin, il se dissout presque sur la langue, libérant un éclat de saveur de citron salé.",
            "action": "Utiliser immédiatement ou conserver au réfrigérateur. Ajouter à tout plat qui a besoin d'un accent profond, savoureux-citrus."
          },
          {
            "state": "Overdone",
            "description": "La croûte s'est brisée jusqu'à une texture musquée, presque pâteuse, difficile à trancher proprement. Toujours savoureux mais pas les bandes soyeuses qui rendent les citrons conservés si élégants.",
            "action": "Utiliser comme pâte mélangée en vinaigrettes, hummus ou beurre composé lorsque la texture n'est pas pertinente."
          }
        ]
      },
      "feelCue": "Une croûte de citron parfaitement conservée, pincée : elle doit se sentir comme une fine pièce de silicone – souple, lisse, légèrement cireuse, sans grain ni rugosité des parois cellulaires intactes. Il devrait glisser entre vos doigts plutôt que de glisser."
    }
  ]
};
