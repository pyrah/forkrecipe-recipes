export default {
  "repoId": "master_italian_tonnato_sauce_001",
  "parentRepoId": null,
  "slug": "tonnato-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce au Tonnato",
  "description": "Une émulsion de mélangeur de thon, d'anchois, de câpres et de mayonnaise, froide, soyeuse et non apologétique, la sauce qui fait du vitello tonnato ce qu'il est et transforme les légumes rôtis en quelque chose d'extraordinaire.",
  "cuisine": "Italien",
  "culture": "Piémontais",
  "category": "sauces",
  "tags": [
    "Italien",
    "piémontais",
    "thon",
    "Sauce froide",
    "anchois",
    "Câpres",
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
      "name": "Thon décortiqué, bien drainé (questions de qualité)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Filets d'anchois dans l'huile, égouttés",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Récipients, rincés (favorisé pour le sel)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "baies de câpres, coupées en deux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Mayonnaise (à base d'œufs, pleine graisse)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "Yogourt grec pour une version plus légère"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "Vinaigre de Champagne"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "huile d'olive légère pour une saveur plus subtile"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Poivre blanc, fraîchement moulu",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre noir"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mixer",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_05",
        "ing_06"
      ],
      "outputState": "tuna_base",
      "instructions": "Ajouter le thon égoutté, les filets d'anchois, les câpres rincés, le jus de citron et le vinaigre de vin blanc dans un mélangeur. La qualité du thon est le plafond de cette sauce — utilisez le meilleur thon rempli d'huile que vous pouvez trouver; le thon rempli d'eau produit un résultat granuleux et terne. Mélanger en haut pendant 60 à 90 secondes jusqu'à ce que le mélange soit complètement lisse. Il ne doit pas y avoir de flocons de thon visibles, de morceaux d'anchois ou de peaux de câpres. À ce stade, le mélange sera épais, blond-bêti et intensément salé, presque très salé et aigre avant d'ajouter la mayo.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, uniforme et beige pâle, sans flocons de poissons visibles, de morceaux d'herbes ou de peaux de câpres, suffisamment texturée pour s'écouler du pot de mélangeur lorsqu'il est touffu.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le thon est encore visible comme des morceaux distincts. Le mélange est granuleux et volumineux plutôt que pâte-mousse. L'anchois peut encore être identifiable comme ruban mince.",
            "action": "Mélanger encore 30 à 45 secondes à pleine vitesse. Si les lames se battent, ajoutez un jet de jus de citron ou une cuillère à soupe d'eau froide pour libérer le mélange."
          },
          {
            "state": "Perfect",
            "description": "Entièrement lisse, émulsion beige pâle uniforme. La texture est fine et cohésive, plus proche de l'hummus que du pâté. L'odeur est intensément bruine et salée, avec un lift d'agrumes propre du vinaigre et du citron.",
            "action": "Ajouter la mayonnaise et mélanger à nouveau brièvement pour créer l'émulsion finie."
          },
          {
            "state": "Overdone",
            "description": "La base de thon a été mélangée si longtemps qu'elle est chaude par friction et commence à avoir un aspect légèrement aéré; elle apparaîtra plus légère et plus mousseuse qu'une pâte lisse.",
            "action": "Procéder immédiatement à l'ajout de la mayonnaise; la mayonnaise plus froide et plus dense refroidira et désaérera le mélange."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité de la base de thon entre les doigts — elle doit se sentir parfaitement lisse, dense et légèrement collante des protéines, sans grain. Toute rugosité signifie plus de mélange est nécessaire."
    },
    {
      "nodeId": "step_2",
      "action": "Mixer",
      "inputs": [
        "tuna_base",
        "ing_04"
      ],
      "outputState": "tonnato_emulsion",
      "instructions": "Ajouter la mayonnaise au mélangeur avec la base de thon. Mélanger à vitesse moyenne de 20 à 30 secondes jusqu'à ce qu'il soit complètement combiné — ne pas surbriller à ce stade, car la mayonnaise peut se briser sous un mélange prolongé à grande vitesse. La sauce se transformera de la pâte de thon, trop salée, en quelque chose de beaucoup plus arrondi, crémeux et pâle. La mayonnaise fournit la structure émulsifiante, la graisse et le corps qui relie tout ensemble. Grattez les côtés et mélangez pendant 5 secondes si une mayo non mélangée est visible.",
      "visualCue": {
        "primaryTarget": "Une sauce à la crème d'ivoire lisse et pâle – nettement plus légère que la base du thon, avec une texture uniforme et crémeuse et une surface brillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des écharpes de mayonnaise blanche sont encore visibles contre la base de thon beige. La texture est inégale et le goût est disjoint — thon salé dans une bouchée, mayo plat dans la prochaine.",
            "action": "Mélanger encore 10-15 secondes, en grattant bien les côtés avant. Les deux composants se combineront rapidement lorsque la lame atteindra toutes les surfaces."
          },
          {
            "state": "Perfect",
            "description": "Une sauce à la crème d'ivoire lisse et homogène sans stries visibles ni variations de couleur. La saveur est maintenant cohésive: savoureuse, bricolée, crémeuse et lumineuse avec de l'acide.",
            "action": "Arroser l'huile d'olive et assaisonner de sel et de poivre blanc pour finir."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été mélangée trop longtemps et l'émulsion de mayonnaise commence à se briser — la surface semble grasse et la texture se sépare.",
            "action": "Transférer dans un bol et fouetter dans une cuillère à soupe d'eau glacée pour aider à réémulsionner. Ne retournez pas au mélangeur."
          }
        ]
      },
      "feelCue": "Un tonnato correctement émulsifié devrait enrober une cuillère dans une couche lisse et uniforme qui s'accroche sans courir, semblable à une mayonnaise légèrement délavée. Si elle glisse comme de l'eau, l'émulsion a besoin de plus de corps."
    },
    {
      "nodeId": "step_3",
      "action": "Assaisonner",
      "inputs": [
        "tonnato_emulsion",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "tonnato_sauce",
      "instructions": "Transférer la sauce dans un bol. Rincer l'huile d'olive tout en fouettant à la main — cela ajoute une dernière couche de richesse et ajuste la consistance. L'huile d'olive desserre légèrement la sauce; ajouter autant que nécessaire pour atteindre la consistance que vous voulez: plus épais pour étendre sur un plateau de veau tranché, plus mince pour arroser sur le chou-fleur rôti ou les œufs bouillis. Assaisonner de sel (le thon, les anchois et les câpres portent beaucoup de sel) et de poivre blanc. Goûtez et ajustez l'acide si nécessaire. Réfrigérer immédiatement; la sauce tonnato conserve 3 jours et est toujours servie à froid.",
      "visualCue": {
        "primaryTarget": "Une sauce d'ivoire pâle avec une légère consistance drizzleable et un reflet subtil de l'huile d'olive — il devrait verser régulièrement d'une cuillère dans un ruisseau intact.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est trop épaisse et raide — elle frotte sur la cuillère plutôt que de couler. La saveur est plate et unidimensionnelle avant que l'huile d'olive le ronge.",
            "action": "Ajouter plus d'huile d'olive une cuillère à café à la fois, en fouettant après chaque addition jusqu'à ce que la sauce atteigne une consistance à soupe lente."
          },
          {
            "state": "Perfect",
            "description": "La sauce coule dans une goutte lente et régulière, enrobe l'arrière d'une cuillère dans une couche généreuse et uniforme, et révèle une saveur complexe : d'abord la crémosité de mayo, puis l'umami profond de thon et d'anchois, puis la coupe d'acide vif de citron, puis une finale saumure douce des câpres.",
            "action": "Réfrigérer jusqu'à froid avant de servir. La sauce ferme légèrement quand le froid et la saveur s'approfondit — fait en avance de 2 à 3 heures est idéal."
          },
          {
            "state": "Overdone",
            "description": "Trop d'huile d'olive — la sauce est fine et grasse, courant immédiatement plutôt qu'enrobée. Il peut également avoir l'air légèrement cassé, avec un pool d'huile à la surface.",
            "action": "fouetter dans une autre cuillère à soupe de mayonnaise pour réémulsionner et ajouter le corps. Si l'huile s'est séparée, ne pas se fondre à nouveau — fouetter vigoureusement à la main."
          }
        ]
      },
      "feelCue": "Le tonnato fini devrait se sentir soyeux et dense sur la langue — il enrobe le palais et libère la saveur lentement, le brininess et l'umami arrivant en séquence plutôt que tout à la fois. Servez-le froid et généreux."
    }
  ]
};
