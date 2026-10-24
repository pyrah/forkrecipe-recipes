export default {
  "repoId": "master_vegan_roasted_vegetable_stock_001",
  "parentRepoId": null,
  "slug": "roasted-vegetable-stock",
  "author": "ForkRecipe Kitchen",
  "title": "Stock de légumes grillés",
  "description": "L'oignon, la carotte, le céleri, le poireau, le fenouil et les peaux de champignons torréfiés à brun doré profond, puis mijotés d'herbes et de grains de poivre noirs, la torréfaction donne à ce stock végétalien une profondeur et un corps qui le rendent vraiment utile à la place des stocks de viande légers.",
  "cuisine": "Mondial",
  "culture": "Français",
  "category": "stocks",
  "tags": [
    "les produits végétaux",
    "végétalien",
    "grillés",
    "stock",
    "bouillon",
    "marque à l'avance"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "2 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Aromatic",
      "name": "Oignons jaunes, quartiers (peau sur)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Carottes (approximativement hachées, non pelées)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Pâtes de céleri (approximativement hachées)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Fuite (chute longitudinale, lavée)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Ampoule de fenouil et frondes (approximativement hachées)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "Peaux de champignons séchés ou tiges de shiitake (ou 30g de porcins séchés)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Tête d'ail (causée horizontalement, non pelée)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile d'olive ou huile neutre",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Feuilles de baies, tiges de persil à feuilles plates, thym frais",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Maïs de poivre noir (ensemble)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Umami",
      "name": "Pâte de tomate (pour la couleur et la profondeur)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Liquid",
      "name": "Eau filtrée à froid",
      "ratioValue": 400,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_07",
        "ing_08",
        "ing_11"
      ],
      "outputState": "roasted_vegetables",
      "instructions": "Préchauffer le four à 220°C (425°F). Étendre tous les légumes sur deux grandes casseroles — ne les foulez pas. Arroser d'huile et mélanger pour enrober. Déposer la pâte de tomate dans des cuillères à soupe à travers les légumes. Faire rôtir 35 à 40 minutes, en jetant une fois à la marque de 20 minutes, jusqu'à ce que les légumes soient profondément caramélisés et sombres aux bords — oignons dorés, bords presque noircis des carottes, poireaux à taches foncées. Plus la couleur est profonde ici, plus le stock est riche et complexe.",
      "visualCue": {
        "primaryTarget": "Les légumes sont profondément caramélisés et foncés — bords dorés à acajous sur l'oignon et la carotte, avec un peu d'omble sur les bords du poireau et du fenouil. La pâte de tomate est devenue rouge brique et concentrée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont dorés mais non caramélisés. L'oignon est encore blanc à l'intérieur. Pas de bords carbonisés.",
            "action": "Retourner au four 10-15 minutes de plus. Les légumes grillés pâles produisent un stock pâle et mince. S'engager à la couleur."
          },
          {
            "state": "Perfect",
            "description": "Couleur acajou profonde sur les faces coupées, char noir aux bords exposés de poireau et de fenouil. La pâte de tomates est devenue brun brique. Le plateau sent intensément caramélisé et salé.",
            "action": "Déglacer la casserole et la transférer à la réserve."
          },
          {
            "state": "Overdone",
            "description": "Les légumes sont uniformément noirs et ont une odeur amère et amère plutôt que caramélisée et sucrée.",
            "action": "Jeter les morceaux les plus brûlés. Ceux qui sont un peu trop sombres sont bien — une petite quantité d'amertume est acceptable. Recommencer avec une meilleure gestion du four si tout est brûlé."
          }
        ]
      },
      "feelCue": "Les légumes rôtis devraient se libérer facilement de la poêle — s'ils collent et déchirent, ils ont besoin de plus de temps au four. La surface de la poêle aura un fond sombre et caramélisé collé à elle — c'est de l'or liquide pour le stock."
    },
    {
      "nodeId": "step_2",
      "action": "Déglacer",
      "inputs": [
        "roasted_vegetables"
      ],
      "outputState": "deglazed_pan",
      "instructions": "Retirer les casseroles du four. Ajoutez une petite quantité d'eau froide (environ 2 cuillerées à soupe par poêle) à chaque poêle et grattez vigoureusement avec une cuillère en bois ou une spatule pour dissoudre tout le fond caramélisé foncé de la surface de la poêle. Ce matériau concentré caramélisé est extrêmement riche en produits de réaction Maillard et est un moteur principal de la profondeur des stocks.",
      "visualCue": {
        "primaryTarget": "La croûte caramélisée sombre se lève de la poêle dans le liquide, transformant la petite quantité d'eau en un glaçage brun foncé, intensément parfumé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le fond n'est pas dissolvant: l'eau n'est pas assez chaude ou vous ne grattez pas assez vigoureusement.",
            "action": "Utilisez une spatule métallique et plus de pression physique. Le fond est lié à la poêle et doit être mécaniquement levé et dissous."
          },
          {
            "state": "Perfect",
            "description": "Tous les morceaux sombres sont dissous et l'eau s'est transformée en un riche liquide brun foncé avec un arôme de caramel intensément salé.",
            "action": "Transférez tout à la réserve."
          },
          {
            "state": "Overdone",
            "description": "Le fond fut brûlé, non caramélisé, et la déglaze goûta amer et acride.",
            "action": "Jeter le liquide de déglacement de cette casserole. Les composés amers du fond brûlé ruineront le stock."
          }
        ]
      },
      "feelCue": "Le liquide de déglaçage devrait se sentir légèrement épais et collant sur vos doigts — les composés de Maillard dissous lui donnent un corps et une richesse. Sens-le : si ça sent le doux et le caramélisé, utilisez-le. Si ça sent l'acride et le feu, jetez."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "deglazed_pan",
        "roasted_vegetables",
        "ing_06",
        "ing_09",
        "ing_10",
        "ing_12"
      ],
      "outputState": "simmering_stock",
      "instructions": "Transférer tous les légumes rôtis et déglacer le liquide dans une grande réserve. Ajouter les champignons secs, le paquet d'herbes, les grains de poivre et l'eau froide. Portez à ébullition, puis réduisez immédiatement à un mijot nu — juste des bulles occasionnelles brisant la surface. Laisser mijoter 1 heure 30 minutes. Écraser toute mousse qui se forme dans les 15 premières minutes. Ne pas remuer — remuer rend le stock nuageux. Ne la laissez pas bouillir dur à aucun moment après le début du come-up.",
      "visualCue": {
        "primaryTarget": "Une mijoter calme et stable — une bulle toutes les 2 à 3 secondes à la surface. Le liquide est d'or-ambre profond et clair, pas nuageux. Les légumes abandonnent lentement leur couleur et leur saveur au bouillon.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 1 heure, le stock est encore doré pâle et mince. Peu de profondeur ou de corps.",
            "action": "Continuez à mijoter. Le stock de légumes développe la saveur rapidement dans la première heure, mais a besoin de la pleine 90 minutes pour la profondeur."
          },
          {
            "state": "Perfect",
            "description": "Deep or-ambre, clair, avec un arôme savore complexe et un bon corps. Goûté, il devrait enrober la langue légèrement.",
            "action": "Peau et cool."
          },
          {
            "state": "Overdone",
            "description": "Le stock a considérablement diminué et est devenu très sombre et amer à cause de la surextraction des légumes.",
            "action": "Diluer avec de l'eau jusqu'à l'équilibre des saveurs. Peau et cool. Pour les futurs lots, maintenir un mijot nu et limiter à 90 minutes."
          }
        ]
      },
      "feelCue": "A la limite d'une heure, goûtez le stock et remarquez s'il est passé de mince à quelque chose avec la profondeur réelle — un manteau sur la langue, une résonance savoureuse qui s'attarde. Cette transition est votre repère."
    },
    {
      "nodeId": "step_4",
      "action": "Filtrer",
      "inputs": [
        "simmering_stock"
      ],
      "outputState": "roasted_vegetable_stock",
      "instructions": "Réglez un tamis à mailles fines sur un grand bol ou un pot. Placer le stock à travers le tamis — ne pas verser directement du pot, ce qui forcerait le liquide nuageux à travers. Ne pressez pas les légumes. Laisser drainer le stock pendant 5 minutes. Jetez les légumes épuisés. Laisser refroidir à la température ambiante pendant 1 heure, puis réfrigérer. Arrosez toute huile de la surface à froid. Utiliser dans les 5 jours ou congeler en portions de 500ml pendant 6 mois.",
      "visualCue": {
        "primaryTarget": "Le stock fini est clair, en or ambré profond, chatoyant lorsque le bol est incliné. Pas de nuages, pas de débris flottants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock est pâle et mince, dépourvu de corps. Quand goûté, il a peu de profondeur au-delà de saveur végétale aqueuse.",
            "action": "Retourner dans le pot et réduire d'un tiers à feu moyen-vif pour se concentrer."
          },
          {
            "state": "Perfect",
            "description": "Deep, limpide ambre-or, avec une saveur savoureuse pleine et arrondie qui enveloppe la langue. Lorsqu'elle est réduite de moitié, elle devient une demi-glace végétale d'une intensité remarquable.",
            "action": "Laisser refroidir et réfrigérer ou congeler."
          },
          {
            "state": "Overdone",
            "description": "Le stock est très foncé et légèrement amer de rôtir et de mijoter.",
            "action": "Diluer de 25 à 30 % avec de l'eau froide et du goût. L'équilibre devrait être rétabli. Un stock très amer peut avoir besoin d'une petite quantité de crème ou de beurre lorsqu'il est utilisé dans les sauces pour le moeller."
          }
        ]
      },
      "feelCue": "Plongez un doigt propre dans le stock fini refroidi — à température ambiante, le bon stock devrait se sentir légèrement plus important que l'eau, avec la suggestion la plus faible du corps. Exécutez votre doigt sur votre paume: il devrait laisser un revêtement très léger, pas rien, pas un film."
    }
  ]
};
