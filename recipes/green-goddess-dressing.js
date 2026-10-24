export default {
  "repoId": "master_american_green_goddess_001",
  "parentRepoId": null,
  "slug": "green-goddess-dressing",
  "author": "ForkRecipe Kitchen",
  "title": "Robe de déesse verte",
  "description": "Une sauce de mélangeur San Francisco des années 1920 de mayonnaise, de crème aigre, d'anchois et d'un généreux poing d'estragon, de ciboulette et de persil, mélangée lisse à un vert herbacé vif.",
  "cuisine": "Américain",
  "culture": "Californien",
  "category": "sauces",
  "tags": [
    "américains",
    "californien",
    "vinaigrette",
    "herbe",
    "anchois",
    "Crémeux",
    "Mélangeur"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 3,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Mayonnaise (bonne qualité, à base d'oeufs)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "mayo végétalien"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Crème acides",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "yogourt grec plein gras",
        "Crème fraîche"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Feuilles fraîches d'estragon",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "l'estragon séché (utiliser 1 c. à thé, pas une substitution complète)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Persil à feuilles plates, feuilles et tiges",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Ciboulette fraîche, grossièrement hachée",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "dessus d'oignon vert"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "Filets d'anchois dans l'huile, égouttés",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "1 c. à thé sauce Worcestershire pour un umami plus doux"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Gousse d'ail",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Ail rôti pour un résultat plus sucré"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "Vinaigre de Champagne"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "herb_blend",
      "instructions": "Ajouter l'estragon, le persil, la ciboulette, les filets d'anchois, l'ail, le vinaigre de vin blanc et le jus de citron dans un mélangeur. Mélanger en haut pendant 30 à 45 secondes jusqu'à ce que les herbes soient complètement pulvérisées et que le mélange soit lisse. Le mélange sera intensément vert à ce point — presque lumineux — et l'ail cru et les anchois se seront complètement dissous dans la purée d'herbe. Une fois, grattez les côtés si nécessaire.",
      "visualCue": {
        "primaryTarget": "Un liquide lisse vif, vert électrique, sans morceaux visibles d'herbes ou de pièces d'anchois, la couleur d'un jardin d'été sous forme mélangée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux d'herbe visibles encore identifiables. Le liquide est vert mais tacheté plutôt que uniformément coloré. L'anchois peut encore être en morceaux.",
            "action": "Mélanger encore 20 à 30 secondes à pleine vitesse, s'arrêtant pour racler les parois du pot si les herbes s'accrochent."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, uniforme, vert vif. La couleur est profonde et saturée — plus brillante qu'un pesto, plus transparente qu'une purée. La cuisine sent intensément l'estragon frais et le persil.",
            "action": "Ajouter la mayonnaise, la crème aigre et saler et mélanger à nouveau brièvement."
          },
          {
            "state": "Overdone",
            "description": "Le mélange d'herbes a été mélangé si longtemps que la friction le chauffe légèrement, ce qui provoque l'oxydation des herbes fraîches et le vert s'attarde légèrement vers l'olive.",
            "action": "Continuez immédiatement. Les composants laitiers ajoutés à la prochaine étape refroidiront et stabiliseront le mélange."
          }
        ]
      },
      "feelCue": "Frottez une goutte de l'herbe entre vos doigts – elle devrait se sentir légèrement grasse à partir des huiles d'herbe, complètement lisse, et laisser une tache verte vive sur le bout des doigts."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "herb_blend",
        "ing_01",
        "ing_02",
        "ing_10"
      ],
      "outputState": "green_goddess_base",
      "instructions": "Ajouter la mayonnaise, la crème aigre et le sel au mélangeur avec le mélange d'herbes. Mélanger en haut pendant 20 à 30 secondes jusqu'à ce qu'il soit complètement lisse et uniformément coloré. La laiterie transformera l'intense vert herbe en un plus léger, légèrement plus pastel vert sage. Goûtez immédiatement et ajustez : plus de vinaigre ou de jus de citron s'il a besoin de luminosité, plus de sel s'il a un goût plat, plus d'anchois s'il manque l'épine dorsale de l'umami. Le pansement doit être versable mais épais, semblable à un ranch léger.",
      "visualCue": {
        "primaryTarget": "Une vinaigrette lisse, uniformément verte-sage – plus légère et légèrement plus crémeuse que le mélange d'herbes pures, opaque de la crème mayo et aigre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La vinaigrette présente des tourbillons de mayo blanc et de crème contre la purée d'herbe verte — les deux n'ont pas été entièrement incorporés. La texture est inégale.",
            "action": "Mélanger encore 15 secondes. L'émulsion mayonnaise a besoin d'un moment pour se décomposer et réémulsionner avec le liquide d'herbe."
          },
          {
            "state": "Perfect",
            "description": "Entièrement lisse, pansement uniforme de sauge-vert qui coule du pot de mélangeur dans une verser lente et régulière. La saveur frappe avec de l'herbe brillante et de l'acide, suivie par la richesse crémeuse, suivie d'un faible écho umami de l'anchois.",
            "action": "Réfrigérer pendant au moins 15 minutes avant de servir pour laisser les arômes d'herbe se fondre et la vinaigrette s'épaissir légèrement."
          },
          {
            "state": "Overdone",
            "description": "La vinaigrette est trop fine — le mélangeur a fouetté dans l'air et éclairci les composants laitiers. Il coule comme de l'eau plutôt que de verser comme de la crème.",
            "action": "C'est difficile à réparer sans ajouter plus de mayo. Incorporer une cuillère à soupe supplémentaire de mayonnaise et fouetter à la main pour restaurer le corps sans éclaircir davantage."
          }
        ]
      },
      "feelCue": "Plonger un doigt et l'enrober légèrement — la vinaigrette devrait s'accrocher dans une couche mince et uniforme qui ne court pas immédiatement. L'estragon doit être la saveur d'herbe la plus importante en bouche."
    },
    {
      "nodeId": "step_3",
      "action": "Refroidissement",
      "inputs": [
        "green_goddess_base"
      ],
      "outputState": "green_goddess_dressing",
      "instructions": "Transférer la vinaigrette dans un récipient scellé et réfrigérer au moins 15 minutes avant de servir, idéalement 30 minutes. Le froid épaissit légèrement la base de la crème mayo-sour et permet à l'ail cru de se moeller et aux herbes fraîches de libérer plus d'huiles aromatiques dans la graisse environnante. La couleur s'approfondira légèrement comme elle repose. La déesse verte peut être réfrigérée jusqu'à 3 jours ; les saveurs d'herbes se développent et s'intensifient le deuxième jour.",
      "visualCue": {
        "primaryTarget": "Une vinaigrette froide, épaisse et verte-sage qui verse dans un cours d'eau visqueux, intact et s'accroche généreusement aux verts, légumes ou crudité trempée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La vinaigrette est encore à température ambiante — elle verse trop finement, l'ail goûte cru et tranchant, et les herbes n'ont pas encore complètement intégré à la base crémeuse.",
            "action": "Réfrigérer pendant au moins 15 minutes. Le froid s'épaissit et harmonise cette vinaigrette de manière que la température ambiante ne puisse pas se reposer."
          },
          {
            "state": "Perfect",
            "description": "Froid, légèrement épaissi, sauge-vert vif. Les saveurs sont harmonieuses — l'estragon est proéminent mais équilibré par la fraîcheur du persil, l'anchois est présent comme une profondeur de fond plutôt qu'une pêche, et l'acide est lumineux et propre.",
            "action": "Servir sur la laitue au beurre, la romaine, le concombre ou les asperges. Il est également excellent comme trempette pour les crudités ou comme tartinade pour les sandwichs au poulet froid."
          },
          {
            "state": "Overdone",
            "description": "La vinaigrette est réfrigérée depuis plus de 24 heures et la couleur de l'herbe fraîche s'estompe du vert sauge au gris olive. La saveur d'ail est devenue dominante.",
            "action": "La saveur reste bonne pour jusqu'à 3 jours, bien que la couleur ne récupérera pas. Incorporer une cuillère à soupe de persil fraîchement haché avant de servir pour restaurer la luminosité."
          }
        ]
      },
      "feelCue": "La vinaigrette réfrigérée doit se sentir froide, épaisse et légèrement résistante, et faire passer une cuillère à travers elle devrait nécessiter une légère poussée, contrairement à une vinaigrette qui coule immédiatement."
    }
  ]
};
