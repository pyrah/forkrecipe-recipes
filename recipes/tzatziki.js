export default {
  "repoId": "master_greek_tzatziki_001",
  "parentRepoId": null,
  "slug": "tzatziki",
  "author": "ForkRecipe Kitchen",
  "title": "Tzatziki",
  "description": "Le contrepoint frais de la table grecque — yogourt épais et tendu de concombre, aiguisé par de l'ail cru et arrondi avec de l'huile d'olive herbacée. Sécher le concombre et retenir l'ail, et il goûte de l'été; le faire mouiller ou dur, et il goûte du réfrigérateur.",
  "cuisine": "Grec",
  "culture": "Athéniens",
  "category": "sauces",
  "tags": [
    "tzatziki",
    "grec",
    "yaourt",
    "concombre",
    "trempette",
    "meze",
    "pas de cuisson"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "1 hr 20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 3,
    "bitter": 0,
    "umami": 1,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Yogourt grec plein gras (entraînement)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "yogourt plein de matière grasse, en nappe de fromage 4 heures",
        "labneh éclairci avec du lait"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Concombre (grainé, ensemencé)",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "Concombre anglais",
        "Concombres perses"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Ail (finement râpé à une pâte)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Ail rôti pour une version plus douce"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Vin rouge (ou jus de citron)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron frais"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Dill frais (finement haché)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "menthe fraîche",
        "mélange d'aneth + menthe"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Égoutter",
      "inputs": [
        "ing_02",
        "ing_07"
      ],
      "outputState": "drained_cucumber",
      "instructions": "Râper le concombre sur les grands trous d'un grat de boîte (semencer d'abord s'il est aqueux). Jeter les grilles avec un tiers du sel et laisser reposer dans un tamis pendant 15-20 minutes. Ensuite, rassemblez le concombre dans une serviette propre ou vos poings et pressez fort, plusieurs fois, jusqu'à ce qu'il cesse de libérer du liquide. C'est la seule étape qui décide si votre tzatziki est une trempette ou une soupe.",
      "visualCue": {
        "primaryTarget": "Un tas sec et moelleux de morceaux de concombre vert pâle qui tiennent ensemble lorsqu'ils sont pressés et ne libèrent plus de liquide lorsqu'ils sont pressés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le concombre est encore brillant et humide; une pression produit un flux d'eau.",
            "action": "Saler à nouveau légèrement et continuer à presser en lots. Le concombre humide éclaircira le yogourt en quelques minutes."
          },
          {
            "state": "Perfect",
            "description": "Les limaces sont mates, printanières et empilées. Une compression dure ne donne que quelques gouttes.",
            "action": "Enlevez la pince pressée avec vos doigts et mettez de côté."
          },
          {
            "state": "Overdone",
            "description": "Le concombre est meurtri à la pâte et goûte plat et sursalté.",
            "action": "Vous avez perdu un peu de croquant et sur saison. Utilisez-le, mais coupez le sel plus tard et sautez d'ajouter plus."
          }
        ]
      },
      "feelCue": "Le concombre pressé devrait se sentir comme une éponge humide qui a été arrachée — cohésive et à peine humide, ne dégouttant jamais. Vos paumes restent presque sèches sur la pression finale."
    },
    {
      "nodeId": "step_2",
      "action": "Whisk",
      "inputs": [
        "ing_01",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "garlic_yogurt_base",
      "instructions": "Dans un bol, fouetter le yaourt tendu jusqu'à ce qu'il soit doux et crémeux. fouetter dans la pâte d'ail, l'huile d'olive ajoutée dans un ruisseau lent et le vinaigre. L'huile devrait disparaître dans le yogourt, lui donnant un léger reflet et un corps plus riche. Goûtez à l'ail cru maintenant — il sera moelleux comme il repose, donc il devrait se sentir un peu trop affirmé en ce moment.",
      "visualCue": {
        "primaryTarget": "Une base de yogourt d'ivoire brillant, lisse, sans lécher d'huile sur le dessus, portant une odeur nette et propre d'ail et une note herbacée de l'huile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile flotte en perles à la surface; la base semble mince et ne goûte que du yogourt ordinaire.",
            "action": "fouetter plus vigoureusement pour émulsifier l'huile, et confirmer que l'ail est râpé à une vraie pâte, non haché."
          },
          {
            "state": "Perfect",
            "description": "Uniforme, satinée et légèrement brillante. L'ail est en avant mais pas acride; le vinaigre éclaire l'arrière du palais.",
            "action": "Pliez dans le concombre et l'aneth."
          },
          {
            "state": "Overdone",
            "description": "Il fait très chaud avec de l'ail ou de l'ail, amer et aiguisé par trop de vinaigre.",
            "action": "fouetter quelques cuillères supplémentaires de yogourt pour le tamponner avant de continuer."
          }
        ]
      },
      "feelCue": "La base doit tirer le fouet dans un ruban épais et lisse. Il sent lumineux et piquant — s'il sent plat, l'ail n'est pas assez fin ou l'huile n'a pas été travaillée."
    },
    {
      "nodeId": "step_3",
      "action": "Plier",
      "inputs": [
        "garlic_yogurt_base",
        "drained_cucumber",
        "ing_06"
      ],
      "outputState": "finished_dish",
      "instructions": "Pliez le concombre séché et l'aneth haché dans la base ail-yogurt. Incorporer jusqu'à ce qu'il soit uniformément distribué. Goûtez et ajustez avec le sel restant et un éclaboussure plus de vinaigre si elle a besoin de soulever. Couvrir et réfrigérer au moins 30 minutes (idéalement une heure) avant de servir — c'est ce qui marie l'ail à l'ensemble et met la texture. Terminer avec un fil d'huile d'olive sur le dessus.",
      "visualCue": {
        "primaryTarget": "Une tartinade épaisse et écorcable, verte, tenant des pics doux lorsqu'elle est agitée et ne pleurant pas de liquide au bord du bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Plonger et arroser; le concombre et l'aneth passent à travers l'ail non marié, toujours cru et dur.",
            "action": "Ça ne s'est pas reposé. Refroidissez - le: les firmes de yaourts et l'ail se terminent dans la demi - heure. Si vraiment trop mince, égoutter plus ou plier dans le yogourt trop tendu."
          },
          {
            "state": "Perfect",
            "description": "Cohésif et crémeux, collant à une cuillère, avec de l'ail frais équilibré, doux tang, et des flocons visibles de concombre et d'aneth partout.",
            "action": "Servir au frais avec des pita chauds, des viandes grillées ou des légumes."
          },
          {
            "state": "Overdone",
            "description": "Piscine aqueuse collectant autour des bords; saveur diluée et lavée après s'être assise trop longtemps.",
            "action": "Verser le liquide et recommencer la saison avec une pincée de sel et d'aneth. La prochaine fois, pressez le séchoir au concombre."
          }
        ]
      },
      "feelCue": "Une cuillère à cuiller doit se poser et tenir, et non pas s'étendre à plat. Après son repos, l'ail doit humer fraîchement plutôt que de mordre — goûter de nouveau avant de servir et s'éclaircir avec du vinaigre ou du sel au besoin."
    }
  ]
};
