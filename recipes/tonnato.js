export default {
  "repoId": "master_italian_tonnato_001",
  "parentRepoId": null,
  "slug": "tonnato",
  "author": "ForkRecipe Kitchen",
  "title": "Tonnato",
  "description": "Une sauce froide soyeuse et dorée du Piémont — thon, anchois et câpres, emballés à l'huile, émulsifiés de mayonnaise en quelque chose de profondément océanique et salé, avec une fraîcheur qui rend les viandes riches soudainement légères. Il est connu pour être servi avec du veau froid finement tranché en vitello tonnato, mais également à la maison sur des poivrons rôtis ou des œufs durs.",
  "cuisine": "Italien",
  "culture": "Nord italien",
  "category": "sauces",
  "tags": [
    "Tonnato",
    "Italien",
    "thon",
    "Vitello-tonnato",
    "Sauce froide"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 2,
    "bitter": 0,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Thon décortiqué, drainé",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "thon farci à l'eau (la sauce sera plus maigre)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Inosinate",
      "name": "Filets d'anchois dans l'huile",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "Câpres, rincées (brinées ou salines)",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Mayonnaise (bonne qualité ou maison)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "aioli pour une version plus riche"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Eau froide ou liquide de braconnage de veau froid",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "poisson froid ou bouillon de poulet"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin et poivre blanc",
      "ratioValue": 1,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Câpres et zeste de citron, pour servir",
      "ratioValue": 1,
      "defaultUnit": "to taste",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélanger la base",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_05"
      ],
      "outputState": "tuna_paste",
      "instructions": "Mélanger le thon égoutté, les filets d'anchois, les câpres rincés et le jus de citron dans un robot culinaire ou un mélangeur. Procéder jusqu'à ce que le mélange devienne une pâte lisse et homogène, grattant les côtés au besoin. Il ne devrait pas y avoir de morceaux visibles de thon — l'objectif est une purée complètement lisse et dense qui se mêlera uniformément à la mayonnaise.",
      "visualCue": {
        "primaryTarget": "Une pâte beige pâle uniforme avec une texture peu grainée, la couleur du papier écru, sentant intensément la mer — brio, salé, avec une luminosité de citron.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux visibles de thon et de baies de câpres entières, le mélange est encore émietté plutôt que pâteux.",
            "action": "Continuer le traitement, s'arrêter pour racler les côtés. Ajouter une cuillère à café d'huile d'olive si les lames ne sont pas attraper."
          },
          {
            "state": "Perfect",
            "description": "Une pâte complètement lisse et dense, elle tombe de la spatule dans un ruban lent et lourd. L'arôme est arrondi et océanique, pas cru-pêche.",
            "action": "Ajouter la mayonnaise et l'huile d'olive."
          },
          {
            "state": "Overdone",
            "description": "Surtransformé jusqu'à ce qu'il sente métallique de la chaleur du moteur mélangeur — la graisse du thon peut avoir légèrement cassé.",
            "action": "Laisser refroidir une minute avant d'ajouter la mayonnaise. La saveur va récupérer."
          }
        ]
      },
      "feelCue": "Étendre une petite quantité sur la spatule avec le pouce — elle devrait se sentir soyeuse et uniforme, comme l'hummus lisse, sans graisse ni morceaux."
    },
    {
      "nodeId": "step_2",
      "action": "Emulsion avec la mayonnaise",
      "inputs": [
        "tuna_paste",
        "ing_04",
        "ing_06"
      ],
      "outputState": "emulsified_tonnato",
      "instructions": "Avec le processeur fonctionnant à basse température, cuillerer dans la mayonnaise et arroser dans l'huile d'olive. Procéder brièvement — juste assez pour s'intégrer. Le surtraitement après ajout de la mayo peut rendre la sauce collante. Gratter et plier une fois à la main si nécessaire. La sauce doit être d'or pâle, épaisse et absolument lisse.",
      "visualCue": {
        "primaryTarget": "Une sauce dorée pâle et crémeuse — la couleur de la mousse de mer avec un sous - ton chaud — complètement lisse et brillante, assez épaisse pour s'étendre mais trop lâche pour tenir un pic.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Streaks de mayonnaise blanche visibles à travers la pâte de thon plus foncée — pas encore complètement combinés.",
            "action": "Procédez brièvement en 3 secondes jusqu'à ce que la couleur soit uniforme."
          },
          {
            "state": "Perfect",
            "description": "Or pâle uniforme avec une surface soyeuse et brillante. Il tombe d'une spatule dans un rideau lisse et intact. Pas de poolage d'huile visible.",
            "action": "Ajuster la consistance avec l'eau froide ou le liquide de braconnage et la saison."
          },
          {
            "state": "Overdone",
            "description": "La sauce est devenue collante et légèrement grisâtre; la mayonnaise a été surmenée et commence à se briser.",
            "action": "fouetter dans une cuillère à café d'eau froide et un filet d'huile d'olive fraîche pour restaurer l'émulsion."
          }
        ]
      },
      "feelCue": "Plongez le doigt et le goût — la sauce doit se sentir lisse et enrobée sur la langue, avec la graisse de la mayonnaise portant le thon et l'anchois. Il ne devrait pas y avoir de grittness."
    },
    {
      "nodeId": "step_3",
      "action": "Assaisonner et ajuster la cohérence",
      "inputs": [
        "emulsified_tonnato",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_tonnato",
      "instructions": "Ajouter de l'eau froide (ou du liquide de braconnage de veau froid pour une saveur plus complexe) une cuillère à soupe à la fois pour mincer la sauce à une consistance de revêtement versable mais toujours — il devrait enrober le dos d'une cuillère et tomber dans un ruban lent, ne pas courir comme de l'eau. Assaisonner avec du poivre blanc et du sel, goûter soigneusement depuis que les anchois et les câpres ont ajouté du sel significatif. Réfrigérer au moins 30 minutes avant de servir pour laisser fondre les saveurs.",
      "visualCue": {
        "primaryTarget": "Une sauce en or pâle, versable qui enveloppe complètement une cuillère, tombe dans un ruban, et a un léger reflet brillant. Il devrait ressembler à une sauce crème très douce, très raffinée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Trop épais, il s'arrache de la cuillère et doit être étalé avec un couteau plutôt que versé sur de la viande.",
            "action": "Ajouter une cuillère à café d'eau froide à la fois, en remuant doucement, jusqu'à ce qu'elle atteigne une consistance de ruban versable."
          },
          {
            "state": "Perfect",
            "description": "Verse dans un ruban lent, même sur la viande tranchée et les piscines doucement aux bords. Or pâle, brillant et parfaitement lisse. Goûte salé, légèrement océanique, avec une finition citron propre.",
            "action": "Refroidir avant de servir. Verser généreusement sur du veau froid ou des légumes rôtis."
          },
          {
            "state": "Overdone",
            "description": "Doublée trop — la sauce sort de la viande et des piscines sur l'assiette, trop fluide pour s'accrocher.",
            "action": "fouetter dans une cuillère à soupe de mayonnaise supplémentaire pour restaurer le corps, puis vérifier l'assaisonnement à nouveau."
          }
        ]
      },
      "feelCue": "Versez un mince ruban de la cuillère sur le dos de votre main — il devrait s'accrocher une seconde avant de glisser, frais et soyeux, laissant un film en or pâle. L'arôme doit être subtil : un murmure de la mer, un lifting de citron."
    }
  ]
};
