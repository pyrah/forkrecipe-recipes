export default {
  "repoId": "master_french_ravigote_001",
  "parentRepoId": null,
  "slug": "ravigote",
  "author": "ForkRecipe Kitchen",
  "title": "Ravigote",
  "description": "Une sauce de brasserie française froide — une base de vinaigrette aigüe chargée de câpres, de cornichons, d'échalotes et d'un enchevêtrement d'herbes fraîches, construite pour couper à travers la richesse de tête de veau, de cervelle de veau ou de toute viande pochée ayant besoin d'un papier acide confiant. Son nom vient du vieux français pour \"vivre\", et il le gagne.",
  "cuisine": "Français",
  "culture": "Brasserie française",
  "category": "sauces",
  "tags": [
    "ravigote",
    "français",
    "herbe",
    "vinaigrette",
    "brasserie"
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
    "salty": 3,
    "sour": 5,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de champagne",
        "vinaigre d'estragon pour ascenseur d'herbe supplémentaire"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile neutre (grape-semence ou tournesol)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "huile d'olive légère — pas extra-vierge, trop affirmée"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Échalote, très finement hachée",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon rouge, haché et rincé"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Câpres, rincées et hachées approximativement",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Cornichons, hachés finement",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": [
        "petits cornichons d'aneth"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Persil frais à feuilles plates, haché finement",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Estragon frais, haché finement",
      "ratioValue": 0.5,
      "defaultUnit": "part",
      "substitutions": [
        "estragon séché, 1/4 de la quantité"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Cerveau ou ciboulette frais, haché finement",
      "ratioValue": 0.5,
      "defaultUnit": "part",
      "substitutions": [
        "persil supplémentaire si cerveau non disponible"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Binder",
      "name": "Moutarde de Dijon",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "moutarde à grains entiers pour une sauce plus rustique"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin et poivre noir",
      "ratioValue": 1,
      "defaultUnit": "to taste",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Macérer l'échalote",
      "inputs": [
        "ing_03",
        "ing_01"
      ],
      "outputState": "macerated_shallot",
      "instructions": "Mélanger l'échalote très finement hachée avec le vinaigre de vin blanc dans un petit bol. Laisser macérer au moins 5 minutes — le vinaigre tempérera la netteté brute de l'échalote et prendra une partie de sa saveur. Cela commence également à «cuire» légèrement l'échalote à travers l'acide, adoucissant sa texture et son bord sans aucune chaleur.",
      "visualCue": {
        "primaryTarget": "L'échalote s'est légèrement adoucie et le vinaigre a tourné un peu rose-violet à partir des pigments de l'allium. Les échalotes semblent translucides sur leurs bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'échalote vient d'être ajoutée et le vinaigre est encore clair — le bord brut de l'allium n'a pas du tout été trempé.",
            "action": "Attendez 5 minutes. Une ravigote précipitée aura un goût agressif d'oignon cru plutôt que d'échalote moelleuse."
          },
          {
            "state": "Perfect",
            "description": "L'échalote s'est détendu, le vinaigre est légèrement teinté, et l'odeur est passée d'oignon cru vif à quelque chose de plus vineux et arrondi.",
            "action": "fouetter dans la moutarde et l'huile pour émulsifier la base."
          },
          {
            "state": "Overdone",
            "description": "L'échalote s'est adoucie et est devenue boiteuse, quelques morceaux commencent à tomber dans le vinaigre.",
            "action": "Procéder — la saveur est en fait mieux ici, comme l'échalote a complètement mélangé. Pas de problème."
          }
        ]
      },
      "feelCue": "L'échalote doit se sentir douce lorsqu'elle est pressée contre le bol avec une cuillère, non pas pour se dissoudre, mais pour céder. Le vinaigre sera nettement plus net de l'huile d'allium qu'il a absorbée."
    },
    {
      "nodeId": "step_2",
      "action": "Emulsionner la base de vinaigrette",
      "inputs": [
        "macerated_shallot",
        "ing_02",
        "ing_09"
      ],
      "outputState": "vinaigrette_base",
      "instructions": "fouetter la moutarde de Dijon dans le mélange échalote-vinegar. Puis coulez lentement dans l'huile tout en fouettant constamment pour former une émulsion temporaire. Le ravigote n'est pas une émulsion stable comme un pansement crémeux — il se brisera en quelques minutes, ce qui est bien. La moutarde aide simplement l'huile et le vinaigre cohabitent assez longtemps pour être bien combiné quand cuilleré sur la nourriture.",
      "visualCue": {
        "primaryTarget": "Une vinaigrette légèrement nuageuse, jaune pâle, qui semble cohésive lorsqu'elle est fraîchement fouettée mais qui commence à se séparer aux bords lorsqu'elle est assise.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile et le vinaigre se séparent visiblement immédiatement — ils n'ont pas été fouettés assez vigoureusement et la moutarde n'est pas encore travaillée.",
            "action": "Plus fort encore pendant 30 secondes; la moutarde agit comme un pont. Il n'a pas besoin de durer, juste pour être suffisamment combiné pour ajouter les solides."
          },
          {
            "state": "Perfect",
            "description": "Une émulsion temporairement cohésive et légèrement trouble: les gouttelettes d'huile en suspension dans le vinaigre par la moutarde. Il se brisera s'il reste debout, mais lorsqu'il sera fraîchement agité, il enrobera uniformément.",
            "action": "Ajouter immédiatement les câpres, les cornichons et les herbes."
          },
          {
            "state": "Overdone",
            "description": "Surgissant dans une émulsion crémeuse et stable plus comme une bonne vinaigrette — inhabituelle pour cette sauce.",
            "action": "Continuez — la ravigote sera toujours délicieuse. La sauce peut tendance à être plus crémeuse sans se tromper."
          }
        ]
      },
      "feelCue": "Passez le fouet à travers et le soulever — la sauce devrait tomber dans des gouttelettes plutôt qu'un ruban lisse. Ravigote a une qualité d'émulsion lâche et cassée qui fait partie de son charme."
    },
    {
      "nodeId": "step_3",
      "action": "Plier dans les solides et les herbes",
      "inputs": [
        "vinaigrette_base",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_10"
      ],
      "outputState": "finished_ravigote",
      "instructions": "Incorporer les câpres hachés, les cornichons, le persil, l'estragon et le cerveau. Assaisonner généreusement de sel et de poivre noir. Goûtez et ajustez l'acide : la ravigote doit être acidulée avec assurance – le nom signifie « revigoré », et une ravigote timidite va à l'encontre de l'objectif. Servir immédiatement ou dans une heure; les herbes perdent leur luminosité au fil du temps.",
      "visualCue": {
        "primaryTarget": "Une sauce jaune pâle et verte avec des morceaux visibles de câpres et de cornichons, les herbes distribuées dans l'ensemble, vibrantes et parfumées. Il semble texturé et vivant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les herbes viennent d'être ajoutées et la sauce a l'air crue et non intégrée — les solides s'assoient sur le dessus de la vinaigrette plutôt que par elle.",
            "action": "Incorporer soigneusement jusqu'à ce que les herbes et les solides soient uniformément distribués. L'huile devrait enrober chaque morceau."
          },
          {
            "state": "Perfect",
            "description": "Les câpres et les cornichons se répartissent tout au long de la chaîne. Il sent fortement le vinaigre, l'estragon et les câpres. Une cuillère à café sur la langue délivre une note de tarte électrique immédiate.",
            "action": "Servir immédiatement sur tête de veau, poulet poché, légumes blanchis ou poisson grillé."
          },
          {
            "state": "Overdone",
            "description": "Les herbes se flétrissent et s'obscurcissent depuis trop longtemps dans l'acide, le vert virant gris-vert et le goût terni.",
            "action": "Incorporer une petite poignée de persil fraîchement haché pour éclaircir la couleur et lever l'arôme."
          }
        ]
      },
      "feelCue": "Goûtez une cuillère pleine : le vinaigre devrait arriver vif et vif, les herbes après une demi-seconde, puis la saumure des câpres, la douceur des cornichons, et enfin la brève richesse de l'huile à l'arrière. Chaque élément doit être présent."
    }
  ]
};
