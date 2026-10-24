export default {
  "repoId": "master_vietnamese_vietnamese_pork_meatballs_001",
  "parentRepoId": null,
  "slug": "vietnamese-pork-meatballs",
  "author": "ForkRecipe Kitchen",
  "title": "Boules de viande de Bun Cha",
  "description": "La réponse de Hanoi au gril : des galettes de porc carbonisées de graisse carbonaient sur le charbon jusqu'à ce qu'elles blister et caramélisent aux bords, puis plongeaient dans une cham fraîche et douce qui tempère la fumée et tire la profondeur de la viande. L'omble n'est pas accessoire, c'est la recette.",
  "cuisine": "Vietnamiens",
  "culture": "Hanoï",
  "category": "proteins",
  "tags": [
    "Bun-cha",
    "vietnamese",
    "porc",
    "boulettes de viande",
    "grillé",
    "HANOI"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 4,
    "sour": 4,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Porc haché (80/20 gras à l'huile)",
      "ratioValue": 1,
      "defaultUnit": "lb",
      "substitutions": [
        "ventre de porc haché finement à la main"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Échalotes hachées",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": [
        "oignon jaune, haché"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sauce de poisson",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "sauce soja + pincée de sel"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 1.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Eau chaude (pour tremper le bouillon)",
      "ratioValue": 0.75,
      "defaultUnit": "cup",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "Jus de citron vert frais",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": [
        "vinaigre de riz"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "sauce de poisson (pour tremper le bouillon)",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Sweetener",
      "name": "Sucre (pour tremper le bouillon)",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Allium",
      "name": "Ail, tranché finement (pour le bouillon)",
      "ratioValue": 2,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Heat",
      "name": "Chili rouge, tranché finement (pour le bouillon)",
      "ratioValue": 1,
      "defaultUnit": "small",
      "substitutions": [
        "Sambal oelek, 1 c. à thé"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "seasoned_pork_mix",
      "instructions": "Mélanger le porc haché, les échalotes hachées, l'ail, la sauce de poisson, le sucre et le poivre dans un grand bol. Mélangez avec vos mains pendant 2-3 minutes à l'aide d'un mouvement serré, pliant, sans remuer. Le mélange doit devenir légèrement collant et cohésif. La graisse doit commencer à émulsifier avec la viande maigre. Réfrigérer 30 minutes à ferme.",
      "visualCue": {
        "primaryTarget": "Masse rose pâle avec taches visibles d'échalote et d'ail. Le mélange se maintient lorsqu'il est pressé et laisse un léger éclat sur le bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange semble lâche et friable. Le porc et les assaisonnements n'ont pas de lien: le pressage produit une poignée de cailloux, et non une masse cohésive.",
            "action": "Continuez à mélanger avec plus de force. Les protéines de myosine ont besoin d'une action mécanique pour lier le mélange."
          },
          {
            "state": "Perfect",
            "description": "Le mélange est lisse et collant — il s'accroche au bol et à vos mains. Une poignée pressée conserve sa forme. Sensation intense de sauce de poisson et d'échalote.",
            "action": "Réfrigérer 30 minutes, puis former en galettes."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est très chaud de la manipulation et est devenu doux et gras. La graisse se sépare.",
            "action": "Réfrigérer immédiatement pendant au moins 45 minutes. La graisse froide est ce qui maintient les galettes intactes sur le grill."
          }
        ]
      },
      "feelCue": "Le porc bien mélangé s'accroche à votre paume quand vous le tournez à l'envers — il devrait y rester une seconde avant de tomber. Cette collance est le signe d'une liaison active aux protéines."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "nuoc_cham_broth",
      "instructions": "Dissoudre le sucre dans l'eau chaude. Ajouter la sauce de poisson, le jus de lime, l'ail tranché et le chili. Mélanger et goûter — le bouillon devrait atterrir en harmonie en quatre parties: salé, doux, aigre et funky, sans aucune note dominante. C'est le bouillon de trempage dans lequel les galettes cuites reposeront, de sorte qu'il doit être un peu plus intense que vous boirez — la viande le diluera.",
      "visualCue": {
        "primaryTarget": "Un liquide d'or clair et pâle avec des tranches de chili rouge et d'ail flottant à la surface. La couleur vient de la sauce de poisson — ambre profonde éclaircie au champagne.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Broth a un goût plat: la sauce de poisson est crue et dure, le sucre n'est pas dissous. Une note domine.",
            "action": "Incorporer pour dissoudre le sucre et laisser reposer 5 minutes. Ajuster chaque élément en petits ajouts jusqu'à équilibrer."
          },
          {
            "state": "Perfect",
            "description": "Les quatre saveurs arrivent en séquence — salée, puis sucrée, puis aigre, avec la base de sauce de poisson funky en dessous. Aucune note ne crie sur les autres.",
            "action": "Réserver à température ambiante."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon est trop doux ou trop aigre — un ajustement est allé trop loin.",
            "action": "Corriger progressivement: ajouter du citron vert pour l'aur, du sucre pour le sucré, de la sauce de poisson pour le sel et la profondeur, de l'eau pour diluer."
          }
        ]
      },
      "feelCue": "Plongez l'extrémité d'un doigt — le bouillon doit piquer légèrement de l'acide, chatouiller avec douceur, et laisser un agréable sel sur la lèvre."
    },
    {
      "nodeId": "step_3",
      "action": "Griller",
      "inputs": [
        "seasoned_pork_mix"
      ],
      "outputState": "grilled_patties",
      "instructions": "Former le porc réfrigéré en galettes plates de 3/4 de pouce d'épaisseur (ou de petites boulettes rondes pour le pain). Griller sur une chaleur de charbon élevée ou une poêle en fonte chaude. Cuire 3-4 minutes de chaque côté sans bouger — vous voulez carbonisation agressive, pas vapeur. La graisse coulera, éclatera et ajoutera une saveur de fumée. Authentic bun cha a des marques d'omble noir et un extérieur caramélisé.",
      "visualCue": {
        "primaryTarget": "L'omble distinct traverse une surface brune profondément caramélisée. La graisse a rendu aux bords, qui sont cloqués et légèrement croustillants. Le centre est juste cuit.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Extérieur gris pâle avec marques de grill mais pas de caramélisation. Les pâtés sont à la vapeur et doux. Les sucres dans la sauce de poisson n'ont pas commencé à carboniser.",
            "action": "Retournez à la chaleur élevée. La teneur élevée en sucre de la sauce de poisson nécessite une chaleur intense pour caraméliser — ne pas se précipiter avec une chaleur faible."
          },
          {
            "state": "Perfect",
            "description": "Mahogany-brun avec l'omble noir aux points de contact. Les bords gras sont cloqués. Sens de sauce de poisson caramélisée et de graisse de porc. Le centre est tout simplement opaque.",
            "action": "Transférer immédiatement dans le bouillon nuoc cham."
          },
          {
            "state": "Overdone",
            "description": "Les pâtés sont uniformément noirs, séchés et éparpillés. L'omble est devenu du carbone plutôt que du caramel.",
            "action": "Transfert de toute façon. Le bouillon les réhydratera un peu. L'omble amer s'équilibrera avec le bouillon doux."
          }
        ]
      },
      "feelCue": "Une patte finie pressée avec un doigt doit se sentir comme une poignée de main ferme — résistance à la source sans donner cru. La croûte doit craquer faiblement lorsqu'elle est pressée."
    },
    {
      "nodeId": "step_4",
      "action": "Assembler",
      "inputs": [
        "grilled_patties",
        "nuoc_cham_broth"
      ],
      "outputState": "finished_bun_cha",
      "instructions": "Transférer les galettes grillées à chaud directement dans les bols de bouillon nuoc cham. Servir avec une assiette d'herbes fraîches, vermicelli nouilles sur le côté, et chili supplémentaire. Les galettes continueront à cuire à la vapeur dans le bouillon, ramassant le nouoc chan et tempérant la fumée. Ceci est destiné à être mangé immédiatement, scooping nouilles dans le bol de bouillon à la table.",
      "visualCue": {
        "primaryTarget": "Des paties chaudes et fumées se reposent dans le bouillon d'or pâle, libérant de la vapeur. Le bouillon nuage très légèrement autour de la viande.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Patties et bouillon servis séparément, ou patties placées dans un bouillon froid — le contraste thermique est perdu et le bouillon ne pénètre pas.",
            "action": "Servir toujours les galettes directement du grill au bouillon à température ambiante."
          },
          {
            "state": "Perfect",
            "description": "Les patties chaudes reposent dans la cham nuoc, la graisse se rendant légèrement dans le bouillon. Le bouillon se réchauffe sans cuisson. Herbes fraîches et nouilles à côté.",
            "action": "Mangez immédiatement pendant que le contraste entre la viande chaude et le bouillon à la crème fraîche est à son maximum."
          },
          {
            "state": "Overdone",
            "description": "Les patties se sont assises trop longtemps dans le bouillon et sont arrosées — la croûte s'est complètement adoucie et le bouillon est devenu gras.",
            "action": "Mangez dans les 10 minutes suivant l'assemblage pour un contraste textural maximal."
          }
        ]
      },
      "feelCue": "Soulevez une patty avec des baguettes du bouillon — elle doit se sentir lourde et ferme, non pas à l'eau. Le bouillon doit sortir de la surface au lieu de saturer l'extérieur."
    }
  ]
};
