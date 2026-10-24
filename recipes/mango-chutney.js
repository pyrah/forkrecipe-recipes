export default {
  "repoId": "master_indian_mango_chutney_001",
  "parentRepoId": null,
  "slug": "mango-chutney",
  "author": "ForkRecipe Kitchen",
  "title": "Mango Chutney",
  "description": "La mangue coupée cuit avec du vinaigre, du sucre, du gingembre et du chili dans une épaisse conserve de confitures, épicée et dorée, également à la maison avec du fromage, des viandes froides ou à côté du curry.",
  "cuisine": "Indiens",
  "culture": "Anglo-Indien",
  "category": "condiments",
  "tags": [
    "Chutney",
    "indienne",
    "Mango",
    "condiment",
    "doux",
    "tannie",
    "préserver"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 3,
    "bitter": 0,
    "umami": 0,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Base",
      "name": "Mangue mûre ferme (peautée, coupée en cubes de 1 cm)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "mangue verte pour chutney plus aiguisé"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre brun clair",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre de canne",
        "Jaggé"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de cidre",
        "vinaigre de malt"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Gingembre frais (finement râpé)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Ail (finement haché)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Heat",
      "name": "flocons de chili rouges séchés",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "piment rouge frais, haché",
        "cayenne"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Combiner",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "raw_chutney_mix",
      "instructions": "Mélanger la mangue en dés, le sucre, le vinaigre, le gingembre, l'ail, les flocons de chili, le cumin, la coriandre, le sel et l'eau dans une grande casserole à base lourde. Mélanger à feu moyen jusqu'à dissolution du sucre — 2 à 3 minutes. La mangue commencera à libérer son propre jus dans le sirop.",
      "visualCue": {
        "primaryTarget": "Une piscine lisse et dorée entourant les cubes de mangues, bouillonnant doucement aux bords. Le sucre s'est dissous et vous ne voyez pas de granules.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Granulés de sucre encore visibles, le mélange semble nuageux et raide.",
            "action": "Continuer à remuer à feu moyen jusqu'à ce que le sucre soit complètement dissous avant d'augmenter la température."
          },
          {
            "state": "Perfect",
            "description": "Liquide ambré clair et pâle entourant les morceaux de mangue; premières bulles douces se formant au bord de la poêle.",
            "action": "Élevez la chaleur jusqu'à ce qu'elle mijote régulièrement et passez à l'étape de cuisson."
          },
          {
            "state": "Overdone",
            "description": "La chaleur était trop élevée avant la dissolution — le sirop réduit déjà inégalement autour de la mangue crue.",
            "action": "Abaissez la chaleur et ajoutez une éclaboussure d'eau pour ralentir la réduction pendant que la mangue rattrape."
          }
        ]
      },
      "feelCue": "La cuillère doit se déplacer facilement dans le mélange. Pas de résistance à la graisse du sucre non dissous."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "raw_chutney_mix"
      ],
      "outputState": "reducing_chutney",
      "instructions": "Soulevez le feu jusqu'à ce que le chutney atteigne une mijoteuse, puis réduisez à moyen-doux. Cuire à découvert, en remuant toutes les 5 minutes, pendant 30 à 40 minutes. La mangue se décompose peu à peu : la chair externe s'effondre dans le sirop tandis que certains cubes tiennent leur forme. Vous chassez l'eau et concentrez les sucres dans une confiture.",
      "visualCue": {
        "primaryTarget": "Une masse jammy profondément dorée — certains cubes de mangue intacts, d'autres dissous dans une sauce épaisse et brillante. La surface a des bulles lentes et lourdes plutôt qu'un ébullition vigoureux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours aqueux et versable; la mangue semble parboulée et pâle, pas jammy. La cuillère laisse une trace qui se remplit instantanément.",
            "action": "Continuer à mijoter à découvert; il faut plus de temps pour réduire. Mélanger plus fréquemment pour éviter de coller à la base."
          },
          {
            "state": "Perfect",
            "description": "Épais et lent, un or ambré profond. Une cuillère traînée à travers la base laisse un sentier propre qui tient 3 à 4 secondes. La mangue est translucide et aromatisée.",
            "action": "Retirer du feu. Le chutney s'épaissit davantage au fur et à mesure qu'il refroidit."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé, collant et très raide. Le chutney prend sur la base et sent le sucre brûlé. La mangue s'est complètement désintégrée.",
            "action": "Retirez immédiatement la chaleur et ajoutez un jet de vinaigre ou d'eau pour se détendre, en remuant vigoureusement pour sauver la texture."
          }
        ]
      },
      "feelCue": "Inclinez la poêle — le chutney devrait couler lentement comme du miel chaud, et non pas slosh comme de l'eau. Quand il se déplace à peine sous son propre poids, il est fait."
    },
    {
      "nodeId": "step_3",
      "action": "Assaisonner",
      "inputs": [
        "reducing_chutney"
      ],
      "outputState": "seasoned_chutney",
      "instructions": "Goûtez le chutney tout en restant chaud. L'équilibre que vous recherchez est doux d'abord, puis une note nette propre de vinaigre, et une chaleur de fond du chili et du gingembre. Ajuster avec une pincée plus de sel pour aiguiser les autres saveurs, une éclaboussure de vinaigre s'il a un goût plat ou cloisant, ou une pincée de chili si vous voulez plus de chaleur. Les saveurs vont se fondre et s'approfondir pendant 24 heures.",
      "visualCue": {
        "primaryTarget": "Un chutney d'ambre brillant et translucide avec un éclat riche et jammy. La surface tient sa forme lorsque vous appuyez doucement sur le dos de la cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Goûte vif et unidimensionnel – trop de vinaigre cru, une profondeur insuffisante de la caramélisation du sucre.",
            "action": "Revenez à une mijoter douce pendant 5 minutes pour moeller l'acide et intégrer la douceur."
          },
          {
            "state": "Perfect",
            "description": "Douce, nette, chaudement épicée et complexe. Aucune note ne domine. Un soupçon de chaleur persistante de chili dans la gorge.",
            "action": "Verser dans des pots stérilisés encore chauds ou laisser refroidir avant de réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "Goûte plat, cloie et unidimensionnelle — l'acidité a été cuite et le sucre domine.",
            "action": "Incorporer une cuillère à soupe de vinaigre et une pincée de sel sur la chaleur pour rétablir la luminosité."
          }
        ]
      },
      "feelCue": "Touchez une petite cuillère à l'arrière de votre poignet – elle devrait être épaisse et chaude, se refroidissant rapidement à une texture collante-jammy plutôt que de s'enfuir comme une sauce."
    },
    {
      "nodeId": "step_4",
      "action": "Jaune",
      "inputs": [
        "seasoned_chutney"
      ],
      "outputState": "finished_mango_chutney",
      "instructions": "Placer le chutney chaud dans des pots en verre stérilisé, en remplissant à moins de 1 cm de la jante. Sceller immédiatement avec des couvercles stérilisés. Comme le chutney refroidit le couvercle s'incline vers l'intérieur, créant un joint sous vide. Non ouvert, le chutney garde jusqu'à un an dans un endroit frais et sombre. Une fois ouvert, réfrigérer et utiliser dans les 8 semaines. La saveur s'améliore significativement après un repos de 48 heures à mesure que les épices s'intègrent pleinement.",
      "visualCue": {
        "primaryTarget": "Des jarres remplies d'un chutney en or, épais et jammy avec des pièces de mangue visibles et sans poches d'air. Lids scellés avec une fossette douce vers l'intérieur après refroidissement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Chutney est trop liquide — il sera mis dans le pot avec les solides flottant et une couche de sirop d'eau se formant en dessous.",
            "action": "Retourner dans la poêle et laisser mijoter encore 10 minutes avant de repotter."
          },
          {
            "state": "Perfect",
            "description": "Assez épais pour tenir sa forme dans le bocal mais avec une répartition uniforme de la mangue tout au long. Couvercle scellé proprement sur le refroidissement.",
            "action": "Étiquette avec date et repos pendant au moins 48 heures avant ouverture."
          },
          {
            "state": "Overdone",
            "description": "Chutney est si épais qu'il est difficile à loucher — il s'est placé presque solide dans la poêle.",
            "action": "Chauffer doucement avec une éclaboussure de vinaigre pour se détendre avant de mettre en pot, ou servir comme une propagation épaisse plutôt qu'un condiment versable."
          }
        ]
      },
      "feelCue": "Appuyez sur le couvercle scellé une fois refroidi — il ne doit pas fléchir. Un couvercle concave étanche au tambour signifie un bon joint. Si elle fléchit encore après 30 minutes, le pot n'a pas scellé; réfrigérer et utiliser d'abord."
    }
  ]
};
