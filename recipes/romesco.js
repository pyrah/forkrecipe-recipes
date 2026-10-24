export default {
  "repoId": "master_spanish_romesco_001",
  "parentRepoId": null,
  "slug": "romesco",
  "author": "ForkRecipe Kitchen",
  "title": "Romesco",
  "description": "La sauce rouge brique de Catalogne — poivrons rouges torréfiés doux et chiles de ñora réhydratés pillées de tomates carbonisées, amandes grillées et pain frit, puis desserré avec de l'huile d'olive fruitée et aiguisé avec du vinaigre de sherry dans une pâte rustique, noisette, fumée qui s'accroche aux calçots grillés, au poisson ou aux légumes rôtis.",
  "cuisine": "Espagnol",
  "culture": "Catalan",
  "category": "sauces",
  "tags": [
    "Romesco",
    "catalan",
    "Espagnol",
    "Cuivre rôti",
    "Amandes",
    "calottes"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hour",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 3,
    "bitter": 1,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "poivrons rouges (rôtis, pelés, ensemencés)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "poivrons piquillo grillés en pot"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Chiles Ñora (séchés, trempés, chair raclée)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "piment de chocolat",
        "1 c. à thé paprika fumé sucré"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "Tomates râpées (fourrées)",
      "ratioValue": 45,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates entières en conserve, égouttées"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Amandes blanchies",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "noisettes",
        "moitié amandes moitié noisettes"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Pain de campagne vieux d'un jour (vendu à l'huile d'olive)",
      "ratioValue": 18,
      "defaultUnit": "parts",
      "substitutions": [
        "tranche de baguette grillée"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail (friées avec le pain)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Ail grillé"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "vinaigre de sherry (Jerez)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin rouge"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel de mer blanc",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Char et réhydrater",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "roasted_produce",
      "instructions": "Faire cuire les poivrons au-dessus d'une flamme ou sous un gril chaud jusqu'à ce que les peaux noircissent et blister partout, puis les cuire dans un bol couvert pendant 10 minutes et glisser des peaux; jeter les tiges et les graines. Faire rôtir les tomates entières de la même façon jusqu'à ce qu'elles se soient effondrées et carbonisées. Pendant ce temps, la tige et la graine de chiles de ñora, couvrir d'eau chaude, et tremper 20 minutes jusqu'à tendre ; racler la chair ramollie des peaux avec une cuillère et jeter les peaux de papier.",
      "visualCue": {
        "primaryTarget": "Les poivrons sont effondrés et soyeux, la peau disparue, la chair profondément colorée et sucrée. Les tomates sont douces et fumées avec des plaquettes thermoformées. La chair de ñora est une pâte épaisse, rouge foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les peaux de poivre sont simplement dorées, non cloquées, et attachées obstinément. Ñora chair est cuir et ne se grattera pas.",
            "action": "Retourner les poivrons à la flamme jusqu'à ce que les peaux noircissent; tremper les ñoras plus longtemps dans de l'eau plus chaude jusqu'à ce que la chair produise."
          },
          {
            "state": "Perfect",
            "description": "Les peaux s'épluchent dans des feuilles laissant la chair brillante et fumée. Les tomates sont carbonisées. La pâte Ñora racle proprement les peaux dans un frottis rouge profond.",
            "action": "Mettre de côté les produits nettoyés et griller les amandes et faire frire le pain."
          },
          {
            "state": "Overdone",
            "description": "La chair de poivre est devenue grise et papier, brûlée à travers; la tomate est amère et acride par le surcharnage.",
            "action": "Éliminez n'importe quelle chair amère. Un peu d'omble est saveur; la chair carbonisée n'est pas — jeter le pire de lui."
          }
        ]
      },
      "feelCue": "Le poivre pelé doit se sentir glissant et boiteux comme de la soie humide, et la cuisine doit sentir de la fumée douce. La pâte de ñora doit être collante et tacher votre cuillère d'un bourgogne profond."
    },
    {
      "nodeId": "step_2",
      "action": "Toast et frites",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "fried_aromatics",
      "instructions": "Faire griller les amandes blanchies dans une poêle sèche à feu moyen, en tremblant constamment, jusqu'à ce qu'elles soient dorées et parfumées, de 4 à 6 minutes; mettre le bout et réserver. Dans la même casserole, réchauffer un tiers de l'huile d'olive et faire frire la tranche de pain et les gousses d'ail entières jusqu'à ce que les deux soient en or profond et que l'ail soit doux, environ 3 minutes de chaque côté. Le pain épaissira la sauce; l'ail frit donne une douceur moelleuse sans bouchée crue.",
      "visualCue": {
        "primaryTarget": "Les amandes sont uniformément bronzées avec un arôme de noix grillées. Le pain est croquant et doré, saturé d'huile. Les gousses d'ail sont douces, dorées et sucrées, sans taches brûlées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les amandes sont encore pâles et goûtent crus et herbacés. Le pain est doux et imbibé d'huile plutôt que croquant; l'ail est vif et blanc à l'intérieur.",
            "action": "Continuer à griller les amandes jusqu'à ce qu'elles colorent; faire frire le pain et l'ail plus longtemps à feu doux jusqu'à ce qu'elles soient dorées."
          },
          {
            "state": "Perfect",
            "description": "Les amandes crachent avec une saveur propre grillée. Le pain est croustillant et richement doré. L'ail est doux et beurreux.",
            "action": "Combinez tout dans le mortier ou le robot culinaire."
          },
          {
            "state": "Overdone",
            "description": "Les amandes sont brun foncé et acrides; l'ail est bruni au point d'amertume.",
            "action": "Jeter les amandes brûlées et l'ail et re-toast un lot frais — l'amertume ici apprivoise la sauce entière."
          }
        ]
      },
      "feelCue": "Écoutez les amandes pour commencer à craquer faiblement et sentir la noix juste avant qu'elles colorent — tirez - les alors. L'ail ne doit pas résister lorsqu'il est pressé contre la poêle."
    },
    {
      "nodeId": "step_3",
      "action": "Livre",
      "inputs": [
        "roasted_produce",
        "fried_aromatics",
        "ing_09"
      ],
      "outputState": "rough_paste",
      "instructions": "Traditionnellement fait dans un grand mortier: livrez les amandes grillées, l'ail frit, et une pincée de sel à un repas grossier, puis travaillez dans le pain frit, la chair de la ñora, les poivrons rôtis, et la tomate carbonisée, frapper jusqu'à ce que vous ayez une pâte épaisse et texturée. Un robot d'alimentation fonctionne aussi: d'abord, poussez les noix et le pain, puis ajoutez le reste et le pouls, en conservant un peu de grain. Tu veux de la texture, pas une purée lisse.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse rouge brique, grossière et rustique, avec des taches visibles d'amande. Il fond sur une cuillère et tient sa forme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De grands morceaux d'amande et de poivre restent; le mélange est lâche et tombe de la cuillère en morceaux plutôt que de se tenir ensemble.",
            "action": "Continuez à frapper ou à pousser jusqu'à ce que les noix se décomposent en un repas et que la pâte cohère."
          },
          {
            "state": "Perfect",
            "description": "Pâte cohésive, à cuiller, rouge foncé, avec un agréable grain des amandes. Il tient un pic doux.",
            "action": "Commencez l'émulsion dans l'huile d'olive."
          },
          {
            "state": "Overdone",
            "description": "Douce, pâteuse et pâle, fourrée dans une purée homogène sans texture, presque gommée de pain surmené.",
            "action": "Acceptez-le comme un style plus lisse, ou repliez-le dans quelques amandes grillées à la main pour reconstruire la texture."
          }
        ]
      },
      "feelCue": "La pâte devrait sentir grainé et légèrement sablonneux des amandes quand vous frottez un peu entre vos doigts — ce grain est la signature de la vraie romesco."
    },
    {
      "nodeId": "step_4",
      "action": "Émulsifier",
      "inputs": [
        "rough_paste",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_dish",
      "instructions": "Avec le mortier ou le processeur en cours d'exécution, arrosez dans le reste de l'huile d'olive dans un ruisseau lent afin qu'il émulsifie dans la pâte, l'épaississant dans une sauce souple et brillante. Aiguisez avec le vinaigre de sherry, puis goûtez et ajustez le sel et le vinaigre — la romesco doit goûter sucré, noisette et légèrement fumé avec un lifting acide vif. Laisser reposer 30 minutes avant de servir ainsi les saveurs se marient.",
      "visualCue": {
        "primaryTarget": "Une sauce brillante, cohésive et orange brique qui enrobe une cuillère et s'installe lentement de nouveau au niveau. Il a un goût équilibré: poivre doux à l'avant, noisette au milieu, une finition vinaigre propre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les piscines d'huile sont séparées sur la surface et la sauce a un goût plat et terne, sans ascenseur acide.",
            "action": "Continuez à couler l'huile pendant que la machine fonctionne pour l'émulsionner, puis ajoutez du vinaigre quelques gouttes à la fois jusqu'à ce que la saveur s'éclaircisse."
          },
          {
            "state": "Perfect",
            "description": "Épais mais versable, uniformément brillant sans huile libre, équilibré entre sucré, noisette, fumée et aigre.",
            "action": "Reposez-vous 30 minutes, puis servez avec des calçots grillés, du poisson ou des légumes grillés."
          },
          {
            "state": "Overdone",
            "description": "Broyé et gras, avec de l'huile qui pleure, ou si tranchant de l'excès de vinaigre, il vous fait treuil.",
            "action": "fouetter dans une cuillère de la pâte réservée ou un peu de pain frit supplémentaire pour recoller; équilibrer l'acidité dure avec une pincée de sel et une touche plus d'huile."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère à travers elle — la sauce devrait se refermer lentement sur le sentier et laisser un revêtement brillant sur la cuillère. Sur la langue, il doit se sentir riche et légèrement granulaire, finissant propre et lumineux, jamais huileux."
    }
  ]
};
