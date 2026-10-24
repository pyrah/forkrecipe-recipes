export default {
  "repoId": "master_indian_lassi_001",
  "parentRepoId": null,
  "slug": "lassi",
  "author": "ForkRecipe Kitchen",
  "title": "Lassi",
  "description": "La boisson de yaourt rafraîchissante du Pendjab — épaisse, laiteuse tannée fouettée avec de l'eau froide jusqu'à ce que mousseux et pâle, offert doux avec de l'eau de rose et du safran ou salé avec du cumin rôti et du sel noir; l'antidote parfait à tout repas épicé.",
  "cuisine": "Indiens",
  "culture": "Punjabi indien du Nord",
  "category": "beverages",
  "tags": [
    "végétarien",
    "Sans gluten",
    "indienne",
    "boisson",
    "yaourt",
    "punjabi"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 2,
    "bitter": 0,
    "umami": 0,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Yogourt à lait entier (graisse pleine)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "Yogourt grec (fin avec de l'eau supplémentaire)",
        "yaourt de bison pour ultra-riche"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau froide ou glaçons",
      "ratioValue": 150,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre ou miel (version sucrée)",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": [
        "jaggery pour la douceur terreuse"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Eau de rose (version sucrée)",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": [
        "eau de kewra"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Fils de safran (version douce)",
      "ratioValue": 0.2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Lait chaud, 1 c. à soupe (pour la floraison du safran)",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poudre de cumin grillée / jera (version salée)",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel noir / kala namak (version salée)",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "sel régulier (perte la profondeur sulfureuse)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Feuilles de menthe fraîches (version salée)",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé (version salée)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Pistaches concassées (doux) ou graines de cumin frites (savori)",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Spice",
      "name": "Cardamome au sol (version sucrée)",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Bloom",
      "inputs": [
        "ing_05",
        "ing_06"
      ],
      "outputState": "saffron_milk",
      "instructions": "Pour la version lassi douce: combiner les fils de safran avec le lait chaud (environ 50°C – très chaud mais pas écalage) dans une petite tasse. Crushez les fils très doucement entre vos doigts en les ajoutant. Incorporer et laisser fleurir pendant 5 minutes. Le lait tournera progressivement un orange doré vif, et la pièce se remplira d'un parfum de safran floral et frais. Cette étape de floraison maximise l'extraction de la couleur et de la saveur — fils de safran ajoutés directement au yaourt froid libèrent beaucoup moins de leurs composés. Si vous faites du lassi salé, sautez cette étape entièrement.",
      "visualCue": {
        "primaryTarget": "Le lait chaud a transformé un safran-orange profond et vif avec des stries pourpres des fils. Le liquide sent fortement le safran — floral, légèrement métallique, miellé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait est à peine jaune après 2 minutes. Les fils n'ont pas encore libéré leur pigment ou leur arôme.",
            "action": "Utilisez du lait légèrement plus chaud (mais pas bouillant, ce qui endommage les composés aromatiques) et attendez les 5 minutes complètes."
          },
          {
            "state": "Perfect",
            "description": "Vivant or profond à couleur orange. Parfum de safran intense. Les fils sont devenus pâles et de couleur crème, ayant renoncé à la plupart de leur couleur.",
            "action": "Utiliser immédiatement dans le mélangeur."
          },
          {
            "state": "Overdone",
            "description": "Le lait était trop chaud et bouilli, faisant cuire les aromatiques volatils du safran. La couleur est là mais le parfum est muet.",
            "action": "Toujours utilisable — la couleur reste même si un certain arôme est perdu. Continuer et ajouter une goutte d'eau de rose supplémentaire pour compenser."
          }
        ]
      },
      "feelCue": "Tenez la tasse près de votre nez — une forte floraison de safran devrait vous frapper immédiatement, un parfum floral-argent-métallique distinctif contrairement à tout autre. Si vous ne sentez rien, les fils étaient de mauvaise qualité."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_12",
        "saffron_milk"
      ],
      "outputState": "sweet_lassi_blend",
      "instructions": "Pour le lassi sucré : combiner le yaourt, l'eau froide ou les glaçons, le sucre, l'eau de rose, la cardamome et le lait infusé de safran dans un mélangeur. Pour le lassi salé : utiliser du yogourt, de l'eau froide, de la poudre de cumin grillée, du sel noir, des feuilles de menthe fraîches et du gingembre râpé. Mélanger à haute vitesse pendant 60 secondes complètes. La clé de la texture caractéristique de la mousse aérée de lassi se mélange à grande vitesse assez longtemps pour que l'air soit incorporé — ne pas s'arrêter à 20 secondes. Le mélange doit passer de jaune-blanc pâle à une consistance visiblement plus pâle, plus mousseuse lorsque l'air est fouetté. Une méthode traditionnelle du Pendjabi utilise un churner à la main (mathani) pour obtenir un résultat profondément mousseux.",
      "visualCue": {
        "primaryTarget": "Une boisson chaudement mousseuse, uniformément pâle, avec un épais capuchon de petites bulles blanches au sommet. La couleur est un doux or-ivory pour doux, ou blanc pur pour salé. Pas de grumeaux de yaourt visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est mélangé mais non mousseux — il verse comme du lait épais plutôt qu'une boisson mousseuse. Mélange de moins de 30 secondes.",
            "action": "Continuer le mélange à vitesse maximale pendant 30 à 45 secondes. La vraie lassi est définie par sa mousse."
          },
          {
            "state": "Perfect",
            "description": "Une mousse épaisse et aérée s'est formée au sommet. Le corps principal de la boisson est uniformément pâle et visiblement plus clair de couleur que le yogourt original. Verse avec une légère trace de bulle.",
            "action": "Verser immédiatement dans des verres réfrigérés sur de la glace."
          },
          {
            "state": "Overdone",
            "description": "Mélange trop long et la glace a complètement fondu, rendant la lassi trop fine et aqueuse. Ou la chaleur du mélangeur l'a chauffée.",
            "action": "Ajouter plus de glace et mélanger brièvement (5 secondes) pour re-froidir et récupérer un peu de mousse."
          }
        ]
      },
      "feelCue": "Versez une petite quantité sur le dos de votre main — elle doit être fraîche, lisse et légèrement soyeuse, non aqueuse ou épaisse. La mousse doit être maintenue pendant au moins 10 secondes avant le dégonflage."
    },
    {
      "nodeId": "step_3",
      "action": "Saison",
      "inputs": [
        "sweet_lassi_blend"
      ],
      "outputState": "seasoned_lassi",
      "instructions": "Goûtez la lassi mélangée immédiatement. Version douce : ajuster le sucre vers le haut si trop de tarte (l'acidité du yogourt varie significativement selon la marque), ajouter une touche plus d'eau de rose si la note florale est absente, ou une pincée plus de cardamome pour la chaleur. Version savore: le kala namak (sel noir) est crucial — il fournit une qualité ovoïde sulfureuse distinctive qui est caractéristique de la lassi salée et doit être perceptible, mais pas en excès. Ajouter plus de cumin si la boisson a un goût plat. Pour les deux versions, l'équilibre entre sucré ou salé contre l'auresse naturelle du yogourt est la clé. Goûtez plusieurs fois — les réglages changent considérablement la boisson.",
      "visualCue": {
        "primaryTarget": "Pour le doux : une boisson dorée, parfumée, magnifiquement mousseuse. Pour sarriette : boisson mousseuse blanc pur avec des taches visibles de cumin et de menthe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lassi a un goût plat — pas assez assaisonnement pour équilibrer l'acidité du yogourt. Ça semble aigre sans profondeur.",
            "action": "Ajouter plus de sucre pour la version sucrée ou plus de kala namak et de cumin pour le savory; mélanger à nouveau brièvement à incorporer."
          },
          {
            "state": "Perfect",
            "description": "Une saveur complète, stratifiée: le yaourt tang est présent mais en équilibre. Version douce : florale, douce, avec safran et rose. Saveur: refroidissement, cumin-avant, rafraîchissant avec un bord de sel noir funky.",
            "action": "Servir immédiatement — le lassi ne s'améliore pas en attendant."
          },
          {
            "state": "Overdone",
            "description": "Trop assaisonné : trop sucré et bouillant, ou si salé, il est désagréable de boire.",
            "action": "Ajouter plus de yogourt et d'eau froide; mélanger pour diluer et rééquilibrer, puis réalimenter."
          }
        ]
      },
      "feelCue": "Sirotez une cuillère à soupe et maintenez-la sur votre langue — l'acidité fraîche du yogourt devrait arriver d'abord, puis l'arôme (rose et safran ou cumin et sel noir), puis une finale laitière douce et crémeuse."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir",
      "inputs": [
        "seasoned_lassi",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "finished_lassi",
      "instructions": "Verser immédiatement le lassi dans des grands verres ou des gobelets d'argile pré-réfrigérés sur une généreuse poignée de glace. La mousse est la partie la plus prisée — versez soigneusement pour conserver le plus de mousse possible, plutôt que directement sur la glace où les bulles s'effondreront. Pour le lassi sucré : garnir d'une pincée de pistaches concassées, d'une légère poussière de cardamome moulu et de quelques fils de safran supplémentaires posés sur la mousse. Pour le lassi salé: flotter quelques feuilles entières de menthe sur la mousse, la poussière avec une pincée de cumin rôti, et ajouter une légère saupoudrée de sel noir. Servir immédiatement — Lassi n'attend personne.",
      "visualCue": {
        "primaryTarget": "Un grand verre portant une fière casquette de mousse avec des garnitures reposant sur le dessus. La mousse doit être visiblement distincte du corps de la boisson pendant au moins les 2 à 3 premières minutes de service.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La mousse s'est complètement effondrée avant de servir. Le verre ressemble à du lait pâle plutôt qu'à du lassi mousseux.",
            "action": "Remonter à haute vitesse pendant 30 secondes et verser immédiatement."
          },
          {
            "state": "Perfect",
            "description": "Tête généreuse de mousse fine et stable. Les garnitures s'assoient joliment sur la mousse sans couler. Le corps ci-dessous est uniformément coloré et réfrigéré.",
            "action": "Servir et boire immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Surmené au point d'obscurcir la boisson. Ou le verre n'était pas refroidi et le lassi se réchauffe immédiatement.",
            "action": "Aucun rétablissement une fois plaqué — servir et boire dans les 2 minutes pendant le froid et la mousse."
          }
        ]
      },
      "feelCue": "Soulevez le verre et sentez le froid contre votre paume — un lassi parfait devrait se sentir aussi froid qu'un verre d'eau glacée, le froid se transférant immédiatement à travers le verre, avec de la mousse qui chatouille la lèvre supérieure quand vous buvez."
    }
  ]
};
