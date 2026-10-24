export default {
  "repoId": "master_lebanese_mujadara_001",
  "parentRepoId": null,
  "slug": "mujadara",
  "author": "ForkRecipe Kitchen",
  "title": "Mujadara",
  "description": "L'ancien plat libanais de lentilles et de riz cuits ensemble en un pilaf salé et parfumé de cumin, couronné d'un glissement d'oignons caramélisés si sombres et si doux qu'ils goûtent de temps concentré, et fini avec des échalotes croustillantes qui éclatent au dessus comme du verre comestible. La nourriture paysanne élevée à la poésie.",
  "cuisine": "Libanais",
  "culture": "Libanais",
  "category": "grains",
  "tags": [
    "lentilles",
    "riz",
    "lébanèse",
    "végétalien",
    "Sans gluten",
    "sans produits laitiers",
    "oignon caramélisé",
    "protéine",
    "confort"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 1743,
  "forks": 152,
  "contributors": 41,
  "license": "CC-BY-SA",
  "createdAt": "2026-01-15",
  "updatedAt": "2026-01-15",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Lentilles vertes ou brunes, rincées",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "Lentilles françaises ( texture ferme)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Riz à grains longs, rincé",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "basmati (plus parfumée)",
        "blé craqué (bulgur)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Grand oignons jaunes, tranchés finement",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Échalotes, tranchées finement en anneaux",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "oignon supplémentaire"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Vers le sol",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Stock d'eau ou de légumes légers",
      "ratioValue": 700,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Caraméliser",
      "inputs": [
        "ing_03",
        "ing_05"
      ],
      "outputState": "caramelized_onions",
      "instructions": "Chauffer les deux tiers de l'huile d'olive dans une grande poêle lourde à feu moyen. Ajouter tous les oignons tranchés avec une pincée de sel. Faites cuire en remuant toutes les 3-4 minutes, pour 35-45 minutes au total — la patience ici n'est pas facultative. Les oignons vont réduire considérablement : d'abord ils libèrent de l'eau et deviennent translucides (15 min), puis ils commencent à colorier (25 min), puis s'assombrissent et se concentrent dans une riche douceur acajou (35–45 min). Ne vous précipitez pas avec une chaleur élevée — les sucres doivent caraméliser lentement.",
      "visualCue": {
        "primaryTarget": "Oignons brun acajou profonds, réduits à une petite fraction de leur volume d'origine. Une odeur très douce, pas de netteté brute.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont dorés mais pas sombres. Il a encore du volume et une netteté résiduelle.",
            "action": "Continuez à cuisiner. La vraie caramélisation nécessite 35 minutes minimum."
          },
          {
            "state": "Perfect",
            "description": "Une acajou très sombre, presque jammy. Volume réduit de 80%. Le goût est une douceur concentrée pure sans netteté. Se détacher en longs brins.",
            "action": "Réserve un tiers pour la garniture. Utilisation restante pour la base de lentilles."
          },
          {
            "state": "Overdone",
            "description": "Très sombre, presque noire. Une odeur amère de sucre brûlé.",
            "action": "Ajouter une éclaboussure d'eau dans la casserole et racler. Enlevez les morceaux les plus sombres. Les autres peuvent encore être bons."
          }
        ]
      },
      "feelCue": "Les oignons caramélisés devraient se sentir comme de la confiture lorsqu'ils sont pressés entre deux cuillères — complètement doux, presque dissolvants, avec un arôme concentré et intensement sucré."
    },
    {
      "nodeId": "step_2",
      "action": "Frire",
      "inputs": [
        "ing_04",
        "ing_05"
      ],
      "outputState": "crispy_shallots",
      "instructions": "Dans une petite casserole séparée, faire chauffer le reste de l'huile d'olive à feu moyen-élevé. Ajouter les anneaux d'échalote — l'huile doit s'étourdir immédiatement. Faire frire, en remuant souvent, pendant 8-10 minutes jusqu'à ce que les anneaux soient profondément dorés et commencent à s'assombrir. Ils seront croustillants à mesure qu'ils refroidissent, alors retirez-les quand ils sont encore légèrement flexibles. Égoutter sur des serviettes en papier. Ils deviennent croustillants dans les 2 minutes suivant leur égouttage.",
      "visualCue": {
        "primaryTarget": "Anneaux dorés, un peu plus foncés aux bords. Toujours légèrement souple quand chaud, mais croustillant quand refroidi.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle, encore doux et gras. Ne sera pas croquant sur le refroidissement.",
            "action": "Continuer à frire jusqu'à ce que l'or soit au moins moyen."
          },
          {
            "state": "Perfect",
            "description": "Or profond avec des bords plus foncés. Juste enlevé tout en légèrement flexible. Drainer sur les serviettes. Sera complètement croustillant dans 2 minutes.",
            "action": "Réserve pour garnir. Ne pas couvrir."
          },
          {
            "state": "Overdone",
            "description": "Très brun foncé. Amère. Crombissement quand il est manipulé.",
            "action": "Utilisez parcimonieusement comme accent — l'amertume peut être compensée par l'oignon caramélisé sucré en dessous."
          }
        ]
      },
      "feelCue": "Ramassez un anneau d'échalote refroidi — il devrait se casser proprement comme une croustille de pomme de terre, ne pas plier ou se sentir gras entre les doigts."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "ing_01",
        "ing_08",
        "ing_06",
        "ing_07",
        "ing_09"
      ],
      "outputState": "cooked_lentils",
      "instructions": "Dans le même pot caramélisé-oignon (avec les oignons encore dedans moins la portion réservée), ajouter les lentilles et couvrir d'eau ou de stock. Ajouter le cumin et le toutspice. Porter à ébullition, puis laisser mijoter pendant 15 minutes jusqu'à ce que les lentilles soient environ deux tiers cuites, toujours avec une légère fermeté. Assaisonner de sel à ce stade.",
      "visualCue": {
        "primaryTarget": "Les lentilles ont absorbé la couleur caramélisée de l'oignon et commencent à s'adoucir. Bouillon épicé et parfumé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les lentilles sont encore dures et durs. Moins de 12 minutes de cuisson.",
            "action": "Continuer à mijoter avant d'ajouter du riz."
          },
          {
            "state": "Perfect",
            "description": "Lentilles ont une légère bouchée — environ 70% cuits. Le bouillon est épicé et parfumé. L'oignon s'est dissous dans la base.",
            "action": "Ajouter le riz immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les lentilles ont complètement ramolli et certains commencent à éclater.",
            "action": "Ajouter le riz immédiatement et réduire la chaleur. Les lentilles continueront à cuire avec le riz."
          }
        ]
      },
      "feelCue": "Mange une lentille — elle devrait être tendre au bord extérieur, mais elle doit toujours avoir un centre d'amidon ferme lorsque tu la presses avec ta langue."
    },
    {
      "nodeId": "step_4",
      "action": "Mijoter",
      "inputs": [
        "cooked_lentils",
        "ing_02"
      ],
      "outputState": "finished_mujadara",
      "instructions": "Incorporer le riz rincé. S'assurer qu'il y a suffisamment de liquide pour cuire le riz — environ 1,5 cm au-dessus de la surface du mélange de lentilles et de riz. Ramener à ébullition, puis bien couvrir avec un couvercle et cuire à feu très doux pendant 15 minutes. Retirer du feu, garder couvert et vapeur 5 minutes de plus. Fluffer doucement avec une fourchette. Les lentilles et le riz doivent être cohésifs mais pas musclés.",
      "visualCue": {
        "primaryTarget": "Pilaf uni, teinté foncé. Riz et lentilles cuits, sans excès de liquide. Surface sèche et moelleuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz est toujours crayeux. Crunchy au centre.",
            "action": "Couvrir et vapeur encore 5 minutes avec un jet d'eau."
          },
          {
            "state": "Perfect",
            "description": "Riz entièrement cuit, tendre, moelleux. Lentilles douces mais pas musclées. Dark, doux, parfumé au cumin. Pilaf s'accroche librement.",
            "action": "Assiette immédiatement, garnir d'oignons caramélisés et d'échalotes croustillantes."
          },
          {
            "state": "Overdone",
            "description": "Le riz et les lentilles se sont fondus dans une masse épaisse, semblable au porridge.",
            "action": "Encore délicieux — le mujadara existe sur un spectre allant du pilaf au porridge dans différentes régions. Servez-le comme il est."
          }
        ]
      },
      "feelCue": "Appuyez sur une cuillère entre l'arrière de la cuillère et le bol — il doit tenir ensemble doucement mais ne pas être dense ou raide, en tombant dans des grains séparés avec une légère pression."
    }
  ]
};
