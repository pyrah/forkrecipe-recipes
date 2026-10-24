export default {
  "repoId": "master_mexican_pico-de-gallo_001",
  "parentRepoId": null,
  "slug": "pico-de-gallo",
  "author": "ForkRecipe Kitchen",
  "title": "Pico de Gallo",
  "description": "La salsa de tomate fraîche et épaisse du Mexique — tomate mûre, oignon blanc, jalapeño, coriandre et jus de lime coupée finement et macérée juste assez longtemps pour que les jus se mettent dans le bol.",
  "cuisine": "Mexicain",
  "culture": "Mexicain central",
  "category": "condiments",
  "tags": [
    "Mexique",
    "tomates",
    "sel fraisa",
    "Vite",
    "végétalien",
    "cru"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "20 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 3,
    "bitter": 1,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Ripe Roma ou tomates de vigne, graines enlevées, dés fins",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "tomates héritières (plus d'eau; égoutter brièvement)",
        "tomates entières en conserve, très bien drainées (dernière station)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon blanc, très fins dés",
      "ratioValue": 20,
      "defaultUnit": "%",
      "substitutions": [
        "oignon rouge (arôme cru doux)",
        "échalote (plus élégante)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Heat",
      "name": "Jalapeño ou serrano, graines et côtes enlevées à feu moyen, hachées",
      "ratioValue": 8,
      "defaultUnit": "%",
      "substitutions": [
        "Fresno chili (fruitier)",
        "piment vert (mince)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Coriandre fraîche, feuilles et tiges tendres, hachées",
      "ratioValue": 8,
      "defaultUnit": "%",
      "substitutions": [
        "persil à feuilles plates (très différent mais pour coriandre-averse)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Jus de chaux frais",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": [
        "jus de citron (légèrement différent mais acceptable)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Gousse d'ail hachée (facultatif, non traditionnelle)",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sérum",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "diced_vegetables",
      "instructions": "C'est une recette de couteau. Commencez par l'oignon: désez-le très fin (3–4 mm), puis placez-le dans un petit bol et rincer à l'eau froide pour réduire la morsure brute dure — pressez à sec dans une serviette en papier. Noyez et coupez de moitié les tomates, arrosez les graines et le gel avec une cuillère (ce qui empêche la salsa finie de devenir aqueuse), puis découpez la chair en morceaux de 5 à 8 mm — pas trop fine ou la salsa devient musquée, pas trop grossière ou elle n'enrobera pas de puce. Émincer le jalapeño le plus fin possible; commencer par seulement la moitié si le niveau de chaleur est incertain. Chopez la coriandre grossièrement — elle macérera et adoucira, afin que vous ne vouliez pas qu'elle se mêle à rien.",
      "visualCue": {
        "primaryTarget": "Un bol de tomates coupées en dés, d'oignons fins et de jalapeño hachés — pas de morceau beaucoup plus grand ou plus petit que les autres, tous les bords propres et non broyés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les morceaux de tomates sont très grands et irréguliers; les graines et le gel restent, l'eau visible pooling dans le bol déjà.",
            "action": "Couper plus uniformément les graines et le gel — l'eau de tomate est l'ennemi d'une bonne texture de pico."
          },
          {
            "state": "Perfect",
            "description": "Nettoyer, même dés — les trois légumes se distinguent par leur taille et leur couleur, suffisamment sec pour qu'aucun liquide ne soit encore mis en commun.",
            "action": "Mélanger dans un bol et procéder à la macération."
          },
          {
            "state": "Overdone",
            "description": "Tout a été réduit à presque bouillir; les surfaces coupées ont déjà commencé à libérer de l'eau et à s'oxyder.",
            "action": "Utilisez vite. Le pico très fin doit être assaisonné et mangé dans les 30 minutes avant qu'il ne devienne aqueux."
          }
        ]
      },
      "feelCue": "Passez votre main sur les tomates coupées en dés — les morceaux doivent se sentir fermes et secs au toucher, aucun gel lisse restant. Si vos doigts sont mouillés, vous n'avez pas bu assez de graines. La tomate sèche signifie un contrôle d'assaisonnement contrôlé plus tard."
    },
    {
      "nodeId": "step_2",
      "action": "Saison",
      "inputs": [
        "diced_vegetables",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "seasoned_pico",
      "instructions": "Mélanger tous les légumes en dés dans un bol. Ajouter la coriandre, le jus de lime et le sel. Plier doucement avec une cuillère — ne pas remuer vigoureusement ou les tomates se décomposent. Goûtez immédiatement : la chaux doit être affirmée et le sel doit tout sauter vers l'avant. Ne pas sous-sel; le pico de gallo a besoin de plus de sel que de se sentir à l'aise lors de la dégustation d'une cuillère simple parce qu'il est servi avec des croustilles de tortillas non salées ou du maïs uni. Laissez le pico s'asseoir pendant 10 minutes avant de servir afin que le sel tire les jus de tomate et qu'ils se mettent dans le bol, créant une saumure naturelle légère.",
      "visualCue": {
        "primaryTarget": "Une salsa scintillante et scintillante — les tomates commencent juste à pleurer un peu de jus dans le bol, la coriandre vert vif et parfumée, toute la chose rouge vif et vert avec l'oignon blanc montrant clairement à travers.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Aucun jus n'a encore été mis en réserve dans le bol; la salsa semble sèche et les saveurs ont un goût plat et séparé.",
            "action": "Qu'il macère — 10 minutes de repos après le salage est le minimum; les saveurs s'assemblent à mesure que les jus sortent."
          },
          {
            "state": "Perfect",
            "description": "Un petit bassin de jus de rose au fond du bol ; tout brille et est profondément parfumé avec de la chaux et de la coriandre ; les saveurs vives, lumineuses et équilibrées.",
            "action": "Goûtez pour l'ajustement final de la chaux et du sel, puis servez en 20 minutes pour une texture optimale."
          },
          {
            "state": "Overdone",
            "description": "Laissé trop longtemps — assis dans son propre jus pendant plus d'une heure; les tomates sont molles, l'oignon s'est envahi par son intensité brute, la coriandre est flétrie et sombre.",
            "action": "Égoutter l'excès de jus et remuer dans une petite quantité de tomates et de coriandre fraîche pour rafraîchir."
          }
        ]
      },
      "feelCue": "Goûtez une petite cuillère : la texture doit être assez épaisse — vous devriez pouvoir la mâcher — avec l'acide de la chaux qui frappe immédiatement, la douceur de la tomate qui suit, et une chaleur de construction lente du jalapeño à la fin. Si tout a le même goût à la fois, il faut plus de sel pour soulever les saveurs individuelles."
    }
  ]
};
