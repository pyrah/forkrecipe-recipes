export default {
  "repoId": "master_italian_carbonara_001",
  "parentRepoId": null,
  "slug": "carbonara",
  "author": "ForkRecipe Kitchen",
  "title": "Pasta Carbonara",
  "description": "Le plus grand traîneau de la main de Rome, le guanciale croustillé dans sa propre graisse, les jaunes d'œufs et le Pecorino Romano, a tempéré le feu avec de l'eau de pâtes féculentes jusqu'à ce que les pâtes soient laquées dans une sauce brillante et sans crème qui s'accroche à chaque brin. Pas de crème, pas de beurre. La seule technique fait la soie.",
  "cuisine": "Italien",
  "culture": "Romain",
  "category": "grains",
  "tags": [
    "Italien",
    "pâtes",
    "romaine",
    "Sans gluten adapté"
  ],
  "difficulty": 3,
  "activeTime": "25 min",
  "totalTime": "25 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Rigatoni ou spaghetti",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "mezze rigatoni",
        "tonnarelli (square-section romaine spaghetti)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Guanciale (douceau de porc, coupée en lardons ou en bâtons)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "pancetta — la graisse est différente mais le résultat est excellent"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Jaunes d'œufs (4 jaunes plus 1 œuf entier)",
      "ratioValue": 5,
      "defaultUnit": "eggs",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Pecorino Romano (très finement râpé, presque poudreux)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "Grana Padano — saveur plus douce"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Parmigiano-Reggiano (très finement râpé)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Poivre noir (très grossièrement craqué — pas finement moulu)",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Eau de cuisson des pâtes (salée, féculente — réservée juste avant égouttage)",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rendu",
      "inputs": [
        "ing_02"
      ],
      "outputState": "rendered_guanciale",
      "instructions": "Placer la guanciale dans une poêle froide, sèche, lourde et à feu moyen-doux. Cuire lentement, en remuant de temps en temps, pendant 8 à 10 minutes jusqu'à ce que la graisse s'éteigne complètement et que les morceaux soient dorés et croustillants, mais encore légèrement souples au centre. Enlevez la guanciale avec une cuillère à fentes, laissant toute la graisse rendue dans la poêle. Éteignez la chaleur et laissez refroidir légèrement la graisse. Ce devrait être un liquide jaune clair et pâle dans la casserole.",
      "visualCue": {
        "primaryTarget": "Des matraques guanciales dorées, légèrement translucides, assises dans une généreuse piscine de graisse limpide et dorée, les pièces ressemblent presque à des bijoux, semi-translucides aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La guanciale est pâle et douce, la graisse est encore blanche et opaque et largement non livrée. Graisse minimale dans la poêle.",
            "action": "Continuer la cuisson à feu moyen-doux. La graisse a besoin de rendre pleinement — c'est le milieu de cuisson pour les pâtes lancer et doit être abondant."
          },
          {
            "state": "Perfect",
            "description": "Les chauves-souris sont dorées et légèrement croustillantes mais conservent un peu de donner. La graisse rendue est abondante, claire et ambre. Il sent le porc chaud et la douceur.",
            "action": "Retirer la guanciale et laisser la graisse dans la poêle. Mettez la poêle de côté de la chaleur."
          },
          {
            "state": "Overdone",
            "description": "Le guanciale est brun foncé et dur, avec une texture sèche et jarreteuse au bacon. La graisse a peut-être commencé à fumer et à sentir fort.",
            "action": "La guanciale est encore utilisable comme garniture, mais la graisse peut avoir un goût légèrement brûlé. Envisager de remplacer la graisse par une petite bruine d'huile d'olive fraîche si elle sent l'acride."
          }
        ]
      },
      "feelCue": "Ramassez un morceau de guanciale après la cuisson — il devrait se sentir comme un morceau de porc frit ferme plutôt qu'une puce croustillante et rigide. Appuyez légèrement et il devrait avoir un faible rendement au centre, ce qui signifie que la graisse intérieure est encore fondue et riche."
    },
    {
      "nodeId": "step_2",
      "action": "Bouillir",
      "inputs": [
        "ing_01",
        "ing_07"
      ],
      "outputState": "al_dente_pasta",
      "instructions": "Cuire les pâtes dans un grand pot d'eau généreusement salée — il faut goûter à la mer. Cuire 1 à 2 minutes de moins que le mode d'emploi de l'emballage: vous voulez les pâtes simplement timides d'al dente, car il continuera à cuisiner dans la poêle. Une minute avant l'égouttage, déposer au moins 200 ml d'eau de cuisson trouble et féculente dans une tasse et réserver. Égoutter les pâtes mais ne pas rincer.",
      "visualCue": {
        "primaryTarget": "Les pâtes sont fermes, mais elles donnent quand elles sont mordues — une fine ligne blanche d'amidonité encore visible dans la section transversale. L'eau réservée est visiblement trouble et épaisse avec de l'amidon.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pâtes ont un centre dur et crayeux lorsqu'elles sont mordues — la ligne d'amidon brut occupe plus de la moitié de la section transversale.",
            "action": "Continuez à bouillir. Les pâtes sous-dosées n'émulsionnent pas bien avec la sauce et se sentent gritty."
          },
          {
            "state": "Perfect",
            "description": "Juste-shy d'al dente : une ligne d'amidon très fine au centre, les pâtes sont fermes et printanières. Il finira la cuisson dans la casserole avec la sauce.",
            "action": "Drainez, réservez l'eau et transférez-la immédiatement dans la casserole."
          },
          {
            "state": "Overdone",
            "description": "Les pâtes sont entièrement douces sans résistance, la lignée d'amidon a disparu. Il va devenir musqué dans le lancer final et la sauce ne s'accrochera pas correctement.",
            "action": "Continuez de toute façon — travaillez rapidement et gardez la chaleur éteinte. La technique de la sauce peut compenser un peu les pâtes surcuites, bien que la texture en souffrira."
          }
        ]
      },
      "feelCue": "Mordre à travers un brin et sentir la légère résistance du centre — il devrait se sentir comme mordre à travers un noyau ferme, légèrement résistant enveloppé dans quelque chose de tendre. Ce noyau est exactement ce que vous voulez aller dans la casserole."
    },
    {
      "nodeId": "step_3",
      "action": "Émulsifier",
      "inputs": [
        "al_dente_pasta",
        "rendered_guanciale",
        "ing_06"
      ],
      "outputState": "tossed_pasta",
      "instructions": "Ajouter les pâtes égouttées directement dans la poêle avec la graisse guanciale à feu moyen-doux. Ajoutez la guanciale. Mélanger vigoureusement pendant 1 à 2 minutes, en ajoutant des éclaboussures d'eau de pâtes réservées au besoin pour construire une émulsion – l'eau fébrile et la graisse se combineront en un revêtement brillant. Faire cuire le poivre noir fissuré dans la graisse pendant 30 secondes jusqu'à odorat. Les pâtes doivent être brillantes, brillantes et entièrement enrobées dans la sauce émulsionnée à l'eau et aux graisses. Retirer la poêle de tout feu.",
      "visualCue": {
        "primaryTarget": "Les pâtes sont étincelantes et légèrement collantes; chaque brin ou tube est recouvert d'une émulsion mince, brillante et ambre de graisse et d'eau féculente, avec du poivre noir dispersé dans l'ensemble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pâtes ont l'air sèches et la graisse est assise dans une piscine au fond de la casserole plutôt que de les enrober.",
            "action": "Ajouter une éclaboussure d'eau de pâtes et jeter vigoureusement — l'amidon dans l'eau est l'émulsionneur. Le mouvement du lancer crée la sauce."
          },
          {
            "state": "Perfect",
            "description": "Toutes les pâtes sont uniformément enrobées d'une émulsion ambre brillante qui s'accroche à chaque surface. La base de la casserole est à peine sèche. Poivre noir visible partout.",
            "action": "Retirer immédiatement du feu et ajouter le mélange d'oeufs. La chaleur est maintenant l'ennemi."
          },
          {
            "state": "Overdone",
            "description": "Les pâtes sont assemblées et la graisse s'est séchée, absorbée entièrement dans les pâtes sans former d'émulsion.",
            "action": "Ajouter plus d'eau de pâtes et mélanger à nouveau pour se détendre. L'émulsion peut généralement être reformée avec de l'eau douce et un mouvement vigoureux."
          }
        ]
      },
      "feelCue": "Enlevez la poêle de la chaleur et inclinez - la — les pâtes doivent glisser et se déplacer librement, scintillant avec un revêtement léger, ne pas coller dans une masse dense, grasse ou glisser dans une piscine de graisse séparée."
    },
    {
      "nodeId": "step_4",
      "action": "Température",
      "inputs": [
        "tossed_pasta",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "finished_carbonara",
      "instructions": "Dans un bol, fouetter les 4 jaunes d'œufs et 1 oeuf entier avec le Pecorino très finement râpé et le Parmesan jusqu'à ce qu'ils soient combinés dans une pâte jaune pâle épaisse. Avec la poêle complètement hors de la chaleur, verser le mélange d'oeufs et de fromages sur les pâtes. Mélanger continuellement et vigoureusement — la chaleur résiduelle des pâtes fera cuire doucement et épaissir les œufs sans les brouiller. Ajouter une cuillère à soupe d'eau de pâtes à la fois au besoin : la sauce finale doit être fluide, brillante et de consistance crème. Goûtez et ajustez le poivre noir. Servir immédiatement dans des bols chauds.",
      "visualCue": {
        "primaryTarget": "Les pâtes sont laquées dans une sauce lustrée, dorée pâle, crémeuse — il devrait sembler qu'elles étaient habillées d'une sauce crème très légère et fluide qui s'accroche à chaque brin et tube sans se mettre au fond du bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange d'oeufs a l'air liquide et liquide, enrobant à peine les pâtes, avec une odeur nette et crue d'oeuf.",
            "action": "Verser plus vigoureusement à feu très doux (ou maintenir la poêle sur un brûleur à peine chaud), en ajoutant moins d'eau, jusqu'à ce que la sauce épaississe. Les œufs ont besoin de plus de chaleur à mettre, mais ne doivent pas brouiller."
          },
          {
            "state": "Perfect",
            "description": "Une sauce fluide, brillante, dorée pâle enveloppe chaque brin d'une consistance crémeuse — pas écoulement, pas collant, pas brouillé. Les pâtes coulent lâchement quand le bol est incliné.",
            "action": "Servir immédiatement — le carbonara n'attend personne. Il s'épaissit en quelques minutes."
          },
          {
            "state": "Overdone",
            "description": "L'œuf est brouillé dans des caillés jaunes visibles dans la sauce, petits morceaux d'œuf cuit mélangés aux pâtes. La sauce sent distinctement l'oeuf cuit.",
            "action": "Si seulement légèrement brouillé, ajouter une éclaboussure d'eau de pâtes froides et jeter vigoureusement pour lisser les caillés autant que possible. Servir rapidement et l'appeler rustique. Commencez la sauce hors-chauffer la prochaine fois et soyez plus patient."
          }
        ]
      },
      "feelCue": "Inclinez le bol et regardez les pâtes bouger — dans un carbonara parfait, les pâtes glissent librement dans la sauce avec un mouvement fluide et crémeux. Si elle est assise dans une masse raide et collante, l'œuf est trop rapide. Si la sauce s'éloigne des pâtes, ajoutez plus de fromage et jetez à nouveau."
    }
  ]
};
