export default {
  "repoId": "master_portuguese_pasteis_de_nata_001",
  "parentRepoId": null,
  "slug": "pasteis-de-nata",
  "author": "ForkRecipe Kitchen",
  "title": "Pastéis de Nata (Custard Tarts portugais)",
  "description": "Conçus par des moines de Jerónimo à Lisbonne, ces tartes existent à l'intersection de la violence et de la délicatesse — des coquilles de pâtisserie effrénées tenant une crème à peine sertie qui émerge d'un inferno d'un four tacheté de taches de léopard foncé de sucre caramélisé.",
  "cuisine": "Portugais",
  "culture": "Lisbonne",
  "category": "desserts",
  "tags": [
    "portugais",
    "Coutard",
    "tarte",
    "pâtisserie",
    "dessert"
  ],
  "difficulty": 4,
  "activeTime": "1 hr",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 3210,
  "forks": 412,
  "contributors": 48,
  "license": "CC-BY-SA",
  "createdAt": "2024-02-14",
  "updatedAt": "2025-10-30",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 0,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "00 farine"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé, ramolli à température ambiante",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "saindoux (plus traditionnel, flakier)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "mélange crème + lait"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre superfin"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Jaunes d'œufs (5 au total)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Starch",
      "name": "Farine pure (pour épaississement de la crème, petite quantité)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "fécule de maïs"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Bande zeste de citron et bâton de cannelle",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "haricots vanille"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Agenouillement",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "laminated_pastry",
      "instructions": "Mélanger la farine avec une pincée de sel et suffisamment d'eau froide (environ 50 parties) pour former une pâte chaotique. Agenouillez pendant 5 minutes jusqu'à ce qu'il soit lisse. Reposez-vous 10 minutes, puis roulez dans un grand rectangle sur une surface farinée. Étaler les deux tiers du beurre ramolli dans une couche mince et uniforme à la surface. Plier en troisièmes (pli de lettres), faire tourner 90 degrés, rouler à nouveau, et répéter avec le beurre restant. Plier en troisièmes une dernière fois. Refroidir pendant 20 minutes avant de façonner.",
      "visualCue": {
        "primaryTarget": "Un paquet de pâte en couches qui, coupé au bord, révèle des strates distinctes de pâte pâle et de beurre blanc avec des lignes propres et séparées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre s'est frotté dans la pâte plutôt qu'en couches; le bord coupé présente un jaune pâle uniforme et non des rayures distinctes. La pâte est grasse.",
            "action": "Refroidir pendant 15 minutes et essayer de rouler plus doucement. Le beurre chaud se décompose en couches; le beurre froid les maintient."
          },
          {
            "state": "Perfect",
            "description": "Nettoyer les couches distinctes visibles lorsque le bloc plié est coupé au bord. La pâte est lisse à l'extérieur, fraîche et souple mais pas collante. Le beurre est en feuilles minces et plates entre les couches de pâte.",
            "action": "Refroidir 20 minutes, puis rouler dans un log et couper en rondelles pour les boîtes de tarte."
          },
          {
            "state": "Overdone",
            "description": "La touffe a été surmenée et devient élastique, en ressortant quand elle est roulée. Les couches de beurre commencent à fusionner. Le gluten se développe excessivement.",
            "action": "Reposez la pâte au réfrigérateur pendant 30 minutes. La pâte feuilletée sur-collée ne sera jamais aussi molle, mais elle produira toujours une pâtisserie acceptable."
          }
        ]
      },
      "feelCue": "La pâte laminée, lorsqu'elle est pressée avec un bout de doigt, doit se sentir fraîche et ferme à la surface avec un intérieur légèrement productif, comme appuyer sur un livre de papier fermé. Il ne devrait pas laisser une marque de graisse sur vos doigts quand vous le ramassez."
    },
    {
      "nodeId": "step_2",
      "action": "Forme",
      "inputs": [
        "laminated_pastry"
      ],
      "outputState": "lined_tins",
      "instructions": "Rouler la pâte réfrigérée dans un cylindre serré d'environ 4cm de diamètre. Couper le cylindre en rondelles de 2cm d'épaisseur. Appuyez chaque tour dans une boîte de tarte légèrement graissée, en travaillant du centre vers l'extérieur avec vos pouces pour tracer les côtés, créant une mince, même coquille qui s'étend juste au-dessus du bord de l'étain. Les murs devraient être plus minces que vous ne le pensez — les couches de beurre vont souffler dans le four. Réfrigérer les boîtes doublées pendant 15 minutes avant de les remplir.",
      "visualCue": {
        "primaryTarget": "Boîtes uniformément doublées avec des parois minces (environ 3mm) qui viennent juste au-dessus de la jante. Les couches de pâte coupées sont visibles au bord supérieur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les parois de la pâte sont trop épaisses (6mm+) et inégales. Le fond est épais et les côtés minces. Une pâte épaisse ne fera pas cuire avant les décors de crème.",
            "action": "Tricoter la pâte en appuyant plus fermement du centre. Visez la translucence — vous devriez presque voir vos doigts à travers la pâte sur les côtés."
          },
          {
            "state": "Perfect",
            "description": "Les murs sont un uniforme 3mm avec des couches de laminage visibles propres. Le bord supérieur est légèrement inégal et texturé à partir du cylindre coupé, c'est exact et formera le bord le plus flou.",
            "action": "Réfrigérer 15 minutes avant le remplissage."
          },
          {
            "state": "Overdone",
            "description": "La pâte a été manipulée tellement elle est très douce et grasse à partir des mains chaudes qui fondent le beurre. Les couches ont commencé à fusionner.",
            "action": "Retourner au congélateur pendant 10 minutes. Le beurre doit se solidifier avant la cuisson ou la pâtisserie ne souffle pas."
          }
        ]
      },
      "feelCue": "Exécutez votre pouce autour de l'intérieur de l'étain après la doublure — vous devez sentir une résistance uniforme et la pâte en couches doit sentir frais et légèrement papier, pas chaud et gras. N'importe quelle tache épaisse fera cuire dense et cru."
    },
    {
      "nodeId": "step_3",
      "action": "Whisk",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "custard_filling",
      "instructions": "Chauffer le lait dans une casserole avec le zeste de citron et la cannelle jusqu'à ce qu'il soit cuit à la vapeur mais pas bouillant. Dans un bol séparé, fouetter ensemble le sucre, la farine et les jaunes d'œufs jusqu'à ce qu'ils soient pâles et lisses. Retirer les aromatiques du lait. Versez progressivement le lait chaud dans le mélange d'œufs, en fouettant constamment — n'ajoutez jamais de lait chaud aux œufs froids. Retourner le mélange dans la casserole et cuire à feu moyen, en remuant constamment, jusqu'à ce qu'il commence à épaissir et que les premières bulles apparaissent. Retirer immédiatement du feu. La crème aura l'air trop lâche — c'est exact; elle sera placée dans le four.",
      "visualCue": {
        "primaryTarget": "Une crème lisse, brillante, jaune pâle qui enrobe une cuillère mais coule librement. Lorsque vous tirez un doigt sur l'arrière de la cuillère, la ligne se maintient pendant 3-4 secondes avant que la crème ne recule.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Custard est mince et aqueux. Pas de revêtement sur la cuillère. La ligne tracée en elle disparaît instantanément. La farine n'a pas cuit et laissera un goût d'amidon cru.",
            "action": "Retourner à feu moyen et remuer jusqu'à ce que la consistance du revêtement soit atteinte. N'arrêtez pas de remuer ou le fond sera caillé."
          },
          {
            "state": "Perfect",
            "description": "Custard enveloppe la cuillère dans une couche mince et uniforme. Une fois versé, il tombe dans un ruban stable, pas dans un ruisseau. Ça sent le lait chaud, l'œuf et la cannelle. La couleur est jaune doré profond des jaunes.",
            "action": "Passer à travers un tamis fin dans une cruche pour verser facilement. À utiliser au chaud."
          },
          {
            "state": "Overdone",
            "description": "Le custard est brouillé — des bosses jaunes sont visibles. Le mélange sent l'oeuf cuit plutôt que la crème. Il est granuleux lorsqu'il est agité.",
            "action": "Passez d'urgence à travers un bon tamis, appuyez fort. Certaines custardes peuvent être sauvées de cette façon si les morceaux ne sont pas trop grands. Réduire la température du four de 20 °C lors de la cuisson afin d'éviter que la crème pré-égratignée ne soit complètement durcie."
          }
        ]
      },
      "feelCue": "Plongez un doigt propre dans la crème chaude — il devrait se sentir soyeux et enduit, comme de la crème lourde, sans grain sur le bout des doigts. La chaleur devrait être agréablement chaude, mais pas scalding, autour de 60-65°C."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "lined_tins",
        "custard_filling"
      ],
      "outputState": "finished_pasteis",
      "instructions": "Préchauffer votre four à sa température maximale – au minimum 240°C (465°F), idéalement 260°C ou plus. La chaleur élevée n'est pas négociable : c'est ce qui crée la caramélisation caractéristique des points léopards sur la surface de la crème. Remplir les coquillages réfrigérés des trois quarts pleins de crème chaude. Cuire sur le plateau supérieur pendant 12-15 minutes jusqu'à ce que la pâtisserie soit dorée et que la surface de la crème soit blister avec des taches caramélisées foncées. Laisser refroidir 5 minutes avant de manger.",
      "visualCue": {
        "primaryTarget": "Les coquillages de pâte sont brun doré profond avec des couches apparentes. La surface de la crème a des taches irrégulières brun foncé à noir caramélisé, comme la peau d'un léopard. La crème devrait encore trembler légèrement au centre lorsque l'étain est secoué.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface du custard est jaune pâle sans taches caramélisées. La pâtisserie est blonde mais pas dorée. Le centre de crème est complètement liquide lorsque l'étain est légèrement secoué.",
            "action": "Retourner au four pour 3 à 5 minutes de plus. Les taches caramélisées ne sont pas facultatives — elles sont le caractère déterminant du pastel de nata."
          },
          {
            "state": "Perfect",
            "description": "La pâte est en or ambré profond et flocée aux bords visibles. La crème a un motif dramatique de taches sombres de caramélisation intense. Lorsque l'étain est secoué, le centre oscille légèrement comme de la gélatine à peine mise — pas liquide, pas rigide.",
            "action": "Laisser refroidir au moins 5 minutes avant de manger — la crème est liquide et brûlera. Ils sont les mieux chauds, mangés dans les 30 minutes du four."
          },
          {
            "state": "Overdone",
            "description": "Custard a gonflé considérablement et s'est ensuite effondré, laissant un centre coulé. Les taches ont fusionné en une surface entièrement noire brûlée. Les bords de crème sont devenus caoutchouteux.",
            "action": "Le centre caramélisé peut être récupérable si vous épluchez le pire de la surface. Réduire le temps de cuisson de 3 minutes."
          }
        ]
      },
      "feelCue": "Soulevez une tarte refroidie de son étain — le fond de la pâtisserie doit se sentir rigide et sec, pas soyeux. Tapez sur la base avec un ongle et il devrait sembler creux, comme un bon craquelin. La crème supérieure, lorsqu'elle est touchée par un bout de doigt, doit résister doucement, puis revenir lentement."
    }
  ]
};
