export default {
  "repoId": "master_indian_golden_milk_001",
  "parentRepoId": null,
  "slug": "golden-milk",
  "author": "ForkRecipe Kitchen",
  "title": "Lait d'or (Haldi Doodh)",
  "description": "Lait de curcuma chaud, jaune vif et chaud avec du gingembre et du poivre noir — un tonique ayurvédique devenu rituel quotidien bien-aimé, doux et délicatement épicé avec une finale poivrée.",
  "cuisine": "Indiens",
  "culture": "Ayurvédique",
  "category": "beverages",
  "tags": [
    "curcuma",
    "indienne",
    "ayurvédique",
    "boisson chaude",
    "anti-inflammatoire",
    "végétalien-adaptable"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "12 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 2,
    "salty": 0,
    "sour": 0,
    "bitter": 2,
    "umami": 0,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Lait entier ou lait végétal",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Lait d'avoine",
        "lait d'amande",
        "lait de coco"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Gingembre moulu",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "gingembre frais, râpé finement"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poivre noir fraîchement moulu",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Miel ou sirop d'érable",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Sucre de coco",
        "sirop de date"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile de coco (facultatif)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "ghee"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Cardamome au sol",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fouetter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_07",
        "ing_08"
      ],
      "outputState": "spiced_milk_mixture",
      "instructions": "Verser le lait dans une petite casserole. Ajouter le curcuma, le gingembre, la cannelle, le poivre noir, la cardamome et l'huile de coco. fouetter vigoureusement pour disperser les épices moulues dans le lait — le curcuma s'enfonce particulièrement dans les poches sèches si elles ne sont pas travaillées immédiatement avant l'application de la chaleur.",
      "visualCue": {
        "primaryTarget": "Un liquide jaune d'or uniforme sans croûtes sèches visibles ni stries d'épices foncées. L'huile de coco, si elle est utilisée, a commencé à fondre dans le lait.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'épice jaune-orange est visible à la surface ou aux parois de la casserole. Le lait est encore surtout blanc.",
            "action": "fouetter plus vigoureusement et utiliser le fouet pour briser les touffes à la base. Le curcuma doit être complètement dispersé avant l'application de la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Un liquide jaune doré lisse et uniforme. Les épices se sont dissoutes dans un nuage faible. La couleur est vive et saturée même avant la chaleur.",
            "action": "Placer sur feu moyen-doux et commencer le réchauffement."
          },
          {
            "state": "Overdone",
            "description": "Le lait a été fouetté trop agressivement sur la chaleur existante et est déjà gelé et vapeur vigoureusement.",
            "action": "Abaissez immédiatement la chaleur — ne faites pas bouillir. La dénature bouillante des protéines du lait et mute le délicat arôme d'épice."
          }
        ]
      },
      "feelCue": "Exécutez un doigt le long des dents de fouet — le mélange doit se sentir lisse et uniformément enduit, et non gritty avec de la poudre d'épices non dissoutes."
    },
    {
      "nodeId": "step_2",
      "action": "Chauffer",
      "inputs": [
        "spiced_milk_mixture"
      ],
      "outputState": "warmed_golden_milk",
      "instructions": "Chauffer le lait à feu moyen-doux, fouetter à l'occasion, jusqu'à ce qu'il atteigne environ 70 °C (160 °F) – vapeur constante mais sans mijoter. Ne le laissez pas bouillir. Cela prend environ 4-5 minutes. La cuisine sent le curcuma et la cannelle.",
      "visualCue": {
        "primaryTarget": "Un liquide d'or profond produisant une colonne constante de vapeur parfumée, avec de minuscules bulles se formant aux bords de la poêle, mais sans ébullition au centre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait est simplement chaud, sans montée de vapeur. Les épices ne sont pas encore pleinement fleuries dans le liquide.",
            "action": "Continuer à feu moyen. Les épices ont besoin de chaleur pour s'ouvrir — une minute ou deux autres transformeront complètement l'arôme."
          },
          {
            "state": "Perfect",
            "description": "Le lait fume librement et sent intensément le curcuma, le gingembre et la cannelle. De petites bulles se forment au bord — pas d'ébullition au centre.",
            "action": "Retirer du feu et ajouter l'édulcorant avant de l'extraire."
          },
          {
            "state": "Overdone",
            "description": "Le lait est arrivé à ébullition. La surface est mousseuse et le liquide a commencé à diminuer.",
            "action": "Retirer immédiatement du feu. Le lait est encore potable, mais les épices aromatiques volatiles peuvent avoir cuit — goût et assaisonner."
          }
        ]
      },
      "feelCue": "Tenez votre main à 10 cm au-dessus de la poêle — vous devriez sentir la chaleur régulière et douce de la vapeur. Si la vapeur brûle, la chaleur est trop élevée."
    },
    {
      "nodeId": "step_3",
      "action": "Filtrer",
      "inputs": [
        "warmed_golden_milk",
        "ing_06"
      ],
      "outputState": "golden_milk",
      "instructions": "Retirer du feu et mélanger le miel ou le sirop d'érable au goût. Verser à travers une passoire fine dans une tasse chaude pour attraper des granulés d'épices ou des solides d'huile de coco. Bois bien.",
      "visualCue": {
        "primaryTarget": "Un liquide doré lisse et brillant dans la tasse — jaune-orange vif, dégagé de grain, avec une faible mousse de la goutte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Aucun édulcorant n'est ajouté; le bord amer du curcuma et de l'épice crue domine sans équilibre.",
            "action": "Ajouter plus de miel par petits incréments — l'édulcorant arrondit également la chaleur du poivre et adoucit la terre du curcuma."
          },
          {
            "state": "Perfect",
            "description": "Or brillant, texture lisse, vapeur montante. La saveur est épicée au chaud et sucrée avec une finale poivrée sur le dos de la gorge.",
            "action": "Buvez immédiatement, enveloppé dans quelque chose de chaud."
          },
          {
            "state": "Overdone",
            "description": "Trop de miel; la boisson est bouillante et l'arôme d'épice est enterré.",
            "action": "Ajouter une pression de citron ou une pincée plus de poivre noir pour couper à travers la douceur et restaurer l'équilibre."
          }
        ]
      },
      "feelCue": "Le liquide doit se sentir comme du lait chaud, légèrement visqueux sur la langue — plus riche que le lait ordinaire provenant de la graisse et des épices, sans résidu de graisse après l'ingestion."
    }
  ]
};
