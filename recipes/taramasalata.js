export default {
  "repoId": "master_greek_taramasalata_001",
  "parentRepoId": null,
  "slug": "taramasalata",
  "author": "ForkRecipe Kitchen",
  "title": "Taramasalata",
  "description": "L'huile d'olive (tarama) séchée rose pâle émulsionnée de pain, de citron et d'huile d'olive trempée dans une trempe crémeuse, salée, intensément salée, la bombe umami originale de mezze grec.",
  "cuisine": "Grec",
  "culture": "Grec",
  "category": "sauces",
  "tags": [
    "trempette",
    "grec",
    "Oie de poisson",
    "rose",
    "pain",
    "citron"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 2,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Carpe rose ou cabillaud (tarama, pas la tartinade prête à l'emploi)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "Oies de morue fumées"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Pain blanc (crustes enlevées, trempées dans l'eau 5 min)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "brioche d'un jour, croûte enlevée"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon blanc (finement râpé)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Échalote"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile d'olive extra vierge légère (ou huile d'olive légère)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "huile de tournesol pour une saveur plus douce"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Garnish",
      "name": "Huile d'olive et olives noires (à servir)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrate",
      "inputs": [
        "ing_02"
      ],
      "outputState": "soaked_bread",
      "instructions": "Faire tremper le pain blanc (les croûtes enlevées) dans des morceaux rugueux et submerger dans l'eau froide pendant 5 minutes jusqu'à ce qu'il soit complètement adouci. Prenez des poignées de pain trempé et pressez fermement — vous voulez du pain qui est humide, mais pas imprégné d'eau. Le pain pressé devrait tenir sa forme brièvement avant de se détendre. Peser ou mesurer après avoir serré, car l'excès d'eau jette l'équilibre de la trempe.",
      "visualCue": {
        "primaryTarget": "Des morceaux de pain comprimé pâles qui tiennent leur forme mais ne laissent pas couler au-dessus du bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le pain est encore raide au centre et seulement mouillé en surface.",
            "action": "Revenez à l'eau pendant 2 minutes et pressez à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Uniformement doux, souple et suffisamment sec pour tenir la forme. Pas de gouttes actives.",
            "action": "Ajouter directement au processeur avec l'huile d'olive."
          },
          {
            "state": "Overdone",
            "description": "Le pain a été trempé si longtemps qu'il s'est désintégré dans un lisier.",
            "action": "Tresser à travers un chiffon et utiliser la pâte compacte; réduire tout citron ajouté pour compenser l'excès d'eau."
          }
        ]
      },
      "feelCue": "Le pain pressé doit avoir l'air d'une pâte très douce — qui donne, ne glisse pas, et qui refroidit à partir de l'eau froide."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "soaked_bread",
        "ing_01",
        "ing_03",
        "ing_04"
      ],
      "outputState": "roe_base",
      "instructions": "Mélanger le pain pressé, le tarama, le jus de citron et l'oignon râpé dans un robot alimentaire. Mélanger haut pendant 60 à 90 secondes jusqu'à ce qu'il soit complètement lisse et uniforme. Le mélange sera épais et en pâte à ce stade - c'est la base d'émulsion. Descendre les côtés une fois à mi-chemin.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse et rose pâle sans texture de pain ou d'oeuf visible. Uniforme, presque souple en apparence.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est ample avec du pain visible et des morceaux d'oeuf. Ça a l'air séparé et inégal.",
            "action": "Mélanger encore 30 secondes et racler les côtés."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, pâte rose saumon pâle. Ça sent le brillance et le citron. Léger et aéré du mélange.",
            "action": "Commencer à arroser l'huile avec le moteur en marche."
          },
          {
            "state": "Overdone",
            "description": "Le surchauffe a fait chauffer le mélange, il n'émulsionnera pas correctement l'huile.",
            "action": "Laisser refroidir le bol 5 minutes avant d'ajouter de l'huile."
          }
        ]
      },
      "feelCue": "La base des oeufs doit sentir intensément le brin et la saline, un coup qui sera apprivoisé et étiré par l'émulsion d'huile."
    },
    {
      "nodeId": "step_3",
      "action": "Émulsifier",
      "inputs": [
        "roe_base",
        "ing_05"
      ],
      "outputState": "finished_taramasalata",
      "instructions": "Avec le robot alimentaire fonctionnant à vitesse moyenne, arrosez l'huile d'olive dans un cours d'eau très lent et stable, exactement comme lors de la mayonnaise. L'émulsion s'éclaircira et gonflera visiblement en volume comme l'huile l'inclut. Après la moitié de l'huile est dans, goût: si trop salé, ajouter un peu plus de citron; si trop mince, ajouter plus de pain. Finissez d'ajouter toute l'huile. Refroidir avant de servir.",
      "visualCue": {
        "primaryTarget": "Une trempette crémeuse pâle, presque rose-pastel, qui a au moins doublé en volume. Doux et brillant sans reflet huileux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile est mise en commun sur le dessus et le mélange semble séparé — pâte pâle avec une couche huileuse.",
            "action": "Ralentissez l'addition d'huile et augmentez légèrement la vitesse du mélangeur pour forcer l'émulsion."
          },
          {
            "state": "Perfect",
            "description": "Rose pâle, volumineux, uniformément crémeux. Pas d'huile. Goûte salé, citronné et salé en une seule note ronde.",
            "action": "Refroidir 30 minutes, puis servir avec du pain et des olives."
          },
          {
            "state": "Overdone",
            "description": "Trop d'huile ajoutée trop vite a brisé l'émulsion — elle est grasse et granuleuse.",
            "action": "Commencer un petit lot de pain et de roe base et mélanger dans le lot cassé lentement pour le sauver."
          }
        ]
      },
      "feelCue": "Taramasalata doit se sentir comme un fromage à la crème très léger sur la langue - lisse et riche, mais pas lourd ou gras."
    }
  ]
};
