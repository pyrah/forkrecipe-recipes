export default {
  "repoId": "master_spanish_spanishgambasalajillo_001",
  "parentRepoId": null,
  "slug": "spanish-gambas-al-ajillo",
  "author": "ForkRecipe Kitchen",
  "title": "Espagnol Gambas al Ajillo",
  "description": "Plump crevettes grésiller dans un cazuela en faïence d'huile d'olive si parfumée avec l'ail et la guindilla que l'huile elle-même devient la sauce que vous frottez avec du pain croustillant.",
  "cuisine": "Espagnol",
  "culture": "Castille",
  "category": "seafood",
  "tags": [
    "Produits de la mer",
    "Sans gluten",
    "crevettes",
    "Espagnol",
    "Ail",
    "Huile d'olive",
    "Tapas"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "15 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Grandes crevettes crues, décortiquées ou pelées",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "Crevettes tigres",
        "queues langoustines"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 8,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Heat",
      "name": "Piments séchés, entiers",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": [
        "flocons de chili rouge séché"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Sherry sec (fino ou manzanilla)",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "vin blanc sec"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Persil frais à feuilles plates, approximativement haché",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Coins de citron",
      "ratioValue": 1,
      "defaultUnit": "lemon",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "garlic_oil",
      "instructions": "Verser l'huile d'olive dans un cazuela en faïence (ou poêle lourd) et placer à feu moyen-doux. Ajouter l'ail tranché et les piments entiers séchés. Laissez l'ail pétrir doucement dans l'huile froide à mesure qu'elle chauffe, infuser l'huile pendant 3-4 minutes. L'ail doit devenir doré, mais pas brun. L'huile devrait buller paresseusement autour des tranches d'ail.",
      "visualCue": {
        "primaryTarget": "Les tranches d'ail sont dorées pâles et translucides dans l'huile, qui est visiblement bouillonnant avec de la vapeur parfumée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est encore blanc et cru; l'huile ne présente aucune bulle. La saveur d'ail n'a pas été infusée.",
            "action": "Continuer à feu moyen-doux — la patience est essentielle; l'ail infuse le mieux dans l'huile de chauffage lentement."
          },
          {
            "state": "Perfect",
            "description": "L'ail est d'or pâle partout, les bords commencent à peine à colorier. L'huile est parfumée et bouillonnante doucement. Les piments sont rouge vif et gonflés.",
            "action": "Augmenter la chaleur et ajouter immédiatement les crevettes."
          },
          {
            "state": "Overdone",
            "description": "Les bords de l'ail brunissent à l'or foncé ou brun. Une odeur d'ail amère de la poêle.",
            "action": "Ajouter immédiatement la crevette — la chaleur plus élevée de la crevette empêchera l'ail de progresser davantage."
          }
        ]
      },
      "feelCue": "Tenez-vous au-dessus de la poêle et respirez - la cuisine doit se remplir d'un parfum d'ail chaud et moelleux avec un léger piment du chili. Toute netteté signifie que la chaleur est trop élevée."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "garlic_oil",
        "ing_01",
        "ing_05",
        "ing_06"
      ],
      "outputState": "cooked_gambas",
      "instructions": "Augmentez la chaleur à haute intensité. Ajouter les crevettes en une seule couche et assaisonner de sel. Ils s'étourdiront considérablement dans l'huile chaude. Ajouter le sherry dans un tourbillon autour de la casserole — il éclaboussera et la vapeur. Cuire sans bouger pendant 1 minute jusqu'à ce que le dessous soit rose et opaque, puis retourner chaque crevette une fois. Faire cuire 30 à 45 secondes de plus. Temps total de cuisson: 2 minutes maximum. Tirez de la chaleur au moment où toutes les crevettes sont roses et simplement frisés.",
      "visualCue": {
        "primaryTarget": "Les crevettes sont uniformément orange-rose avec des queues serrées et un bord doré clair de l'huile chaude.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crevettes présentent encore des sections gris-translucides à la partie la plus épaisse. Trop de queue non enroulée.",
            "action": "Cuire 30 secondes de plus à feu vif — les crevettes finissent rapidement."
          },
          {
            "state": "Perfect",
            "description": "Entièrement rose de la queue à la tête avec une légère boucle (C-forme, pas O). La chair est opaque mais scintille avec de l'huile, non séchée.",
            "action": "Retirer du feu instantanément et ajouter le persil."
          },
          {
            "state": "Overdone",
            "description": "Crevettes ont frisé en Os serré et se sentent caoutchouteux au toucher. La couleur est rose terne plutôt que vive.",
            "action": "Servir immédiatement sans autre cuisson. Une pression de citron aidera à couper la ténacité."
          }
        ]
      },
      "feelCue": "Un gambas parfaitement cuit devrait presser comme un gel juste-set — assez ferme pour tenir sa forme mais donnant avec un léger coup quand mordu, jamais mâcher."
    },
    {
      "nodeId": "step_3",
      "action": "Dresser",
      "inputs": [
        "cooked_gambas",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_gambas_al_ajillo",
      "instructions": "Hors de la chaleur, dispersez le persil approximativement déchiré sur la crevette et l'huile. Le persil étourdira la chaleur résiduelle et libérera son parfum de chlorophylle dans l'huile. Apportez la cazuela directement à la table tout en étourdissant. Servir avec des quartiers de citron et du pain croustillant pour absorber chaque goutte d'huile parfumée de crevette à l'ail — l'huile n'est pas un sous-produit, c'est le point.",
      "visualCue": {
        "primaryTarget": "Crevettes roses vives en or, huile à l'ail avec des taches de persil vert vif, toujours bouillonnant à la table.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le plat est froid et immobile; les crevettes ont l'air terne plutôt que d'éclater.",
            "action": "Réchauffer brièvement dans la poêle jusqu'à ce que le persil soit étourdi, puis ajouter le persil et servir."
          },
          {
            "state": "Perfect",
            "description": "Cazuela arrive à table encore étourdissante, huile bouillonnant autour des crevettes, persil vert vif et parfumé. L'arôme précède le plat.",
            "action": "Mangez immédiatement avec du pain."
          },
          {
            "state": "Overdone",
            "description": "Le persil s'est assombri et s'est complètement flétri dans l'huile; les crevettes se sont durcies à cause de la chaleur résiduelle.",
            "action": "Servir immédiatement — la saveur est intacte même si la fraîcheur visuelle est disparue."
          }
        ]
      },
      "feelCue": "L'huile d'un grand gambas al ajillo doit se sentir soyeuse sur les lèvres et presque sucrée — l'huile d'olive chauffée donne son bord herbacé et devient ronde et voluptueuse avec l'ail et les jus de crevettes dissous en elle."
    }
  ]
};
