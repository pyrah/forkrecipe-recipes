export default {
  "repoId": "master_french_bouillabaisse_001",
  "parentRepoId": null,
  "slug": "bouillabaisse",
  "author": "ForkRecipe Kitchen",
  "title": "Bouillabaisse",
  "description": "La fête du pêcheur de Marseille — un bouillon safran construit à partir d'une épave de sébaste, de fenouil et d'écorce d'orange, mijoté dur puis tendu lisse, dans lequel des poissons méditerranéens fermes braconnent en soie. Servi en deux actes avec des toasts croustillants et une rouille de couleur rouille qui fume avec de l'ail et du piment.",
  "cuisine": "Français",
  "culture": "Provençal",
  "category": "seafood",
  "tags": [
    "Produits de la mer",
    "français",
    "d ' origine",
    "d'un poids au mètre carré",
    "safran",
    "Rouille",
    "marseille"
  ],
  "difficulty": 4,
  "activeTime": "1 hr",
  "totalTime": "2 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Petits sébastes entiers et cadres de poissons (gornard, conger, wrasse, scorpion – branchus, vidés, rincés)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "tout poisson blanc osseux non huileux",
        "cadres de snapper"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Poissons fermes pour servir (poissons, John Dory, bar, coupés en steaks épais)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "flétan",
        "groupe"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile d'olive extra vierge (provençal)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignons et poireaux (découpés)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Ampoule en fenouil (verrouillée, frondes réservées)",
      "ratioValue": 18,
      "defaultUnit": "parts",
      "substitutions": [
        "pincée de graines de fenouil"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Ail (à moitié broyé pour le bouillon, à moitié cru pour le rouille)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "Tomates de ripe (choupées) et une cuillère de pâte de tomate",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "étamé San Marzano"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Fils de safran (à l'eau chaude)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Bande de peau et bouquet d'orange séchée (thyme, baie, tiges de persil)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "zeste d'orange frais"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Binder",
      "name": "Pommes de terre et jaunes d'œufs bouillis (pour le corps de rouille)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "pain blanc trempé"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Heat",
      "name": "Cayenne ou piment d'Espelette (pour rouille)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Poivre d'Alep"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel de mer & poivre noir",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sueur",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "softened_aromatics",
      "instructions": "Chauffer une généreuse lécherette d'huile d'olive dans un grand pot lourd à feu moyen. Ajouter l'oignon tranché, le poireau et le fenouil avec la moitié de l'ail et transpirer doucement, en remuant, jusqu'à ce qu'il soit doux et translucide mais non coloré, 8-10 minutes. Vous construisez une fondation de légumes doux, sans la faire brunir. La couleur ici rend le bouillon boueux et amer.",
      "visualCue": {
        "primaryTarget": "Les légumes sont limpides, brillants et translucides, l'oignon est passé en verre sans bords bruns, toute la casserole sentant l'anis doux et l'allium.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Légumes encore fermes et blanc opaque, avec une odeur d'oignon cru et vif.",
            "action": "Baissez la chaleur et continuez à transpirer jusqu'à ce qu'ils s'effondrent et deviennent vitreux."
          },
          {
            "state": "Perfect",
            "description": "Doux, translucide et soyeux dans l'huile; arôme doux d'anis, ail parfumé mais non doré.",
            "action": "Ajouter les tomates, la pâte et les arômes."
          },
          {
            "state": "Overdone",
            "description": "Les bords brunissent et l'ail devient doré et acride.",
            "action": "Retirez le feu, abaissez la flamme et continuez doucement — les aromatiques brunis obscurciront le bouillon fini."
          }
        ]
      },
      "feelCue": "La cuillère doit glisser à travers les légumes adoucissants sans coller, et la vapeur doit sentir le fenouil de réglisse doux — jamais de friture ni de brûlure."
    },
    {
      "nodeId": "step_2",
      "action": "Construire",
      "inputs": [
        "softened_aromatics",
        "ing_07",
        "ing_09",
        "ing_01"
      ],
      "outputState": "rockfish_mass",
      "instructions": "Incorporer les tomates hachées et la pâte de tomate et cuire 3-4 minutes jusqu'à ce qu'elles se décomposent et perdent leur bord brut. Ajouter l'écorce d'orange séchée et le bouquet garni, puis empiler dans le sébaste entier et les cadres. Mélanger pour enrober les arômes huileux et tachés de tomates et cuire 2-3 minutes afin que le poisson commence à se raffermir et que ses arômes fleurissent dans la graisse.",
      "visualCue": {
        "primaryTarget": "Une masse lâche et rouge rouille de légumes adoucis et de tomates accrochées au sébaste, parfumée d'orange et de thym, les peaux de poissons deviennent opaques.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tomates encore brillantes, aqueuses et crues; poissons lissés et translucides.",
            "action": "Conservez la cuisson brièvement pour sortir le tang cru de tomate avant d'ajouter du liquide."
          },
          {
            "state": "Perfect",
            "description": "La tomate s'obscurcit en brique et fondit dans l'huile, les bords des poissons blanchissant, l'orange et l'arôme d'herbe s'élevant.",
            "action": "Ajouter l'eau et le safran et porter à ébullition dure."
          },
          {
            "state": "Overdone",
            "description": "La tomate captive et brunissante sur le plancher de la casserole, sentant le toast-bitter.",
            "action": "Grattez immédiatement et ajoutez immédiatement le liquide pour arrêter la brûlure."
          }
        ]
      },
      "feelCue": "Appuyez sur un cadre de poisson avec la cuillère — il devrait donner et la chair commence à flocer. Le pot sent la mer chaude, la tomate et l'orange tout à la fois."
    },
    {
      "nodeId": "step_3",
      "action": "Faire bouillir",
      "inputs": [
        "rockfish_mass",
        "ing_08",
        "ing_12"
      ],
      "outputState": "saffron_broth",
      "instructions": "Verser juste assez d'eau pour couvrir le poisson par un doigt, ajouter le safran fleuri et son eau de trempe, et assaisonner de sel. Porter à un ébullition laminant et vigoureux — c'est le secret de la vraie bouillabaisse, l'ébullition dure qui émulsifie l'huile d'olive dans le bouillon, de sorte qu'elle devient opaque et dorée plutôt que se fractionner. Faire bouillir dur, à découvert, pendant 20-25 minutes.",
      "visualCue": {
        "primaryTarget": "Un bouillon turbulent et opaque, safran-or, légèrement crémeux où l'huile a émulsifié, le sébaste s'écroulant dans des chiffons en laissant sa saveur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est mince, limpide et jaune, avec une nappe d'huile séparée flottant sur le dessus.",
            "action": "Levez la chaleur — seul un véritable ébullition va fouetter l'huile dans le liquide et construire le corps."
          },
          {
            "state": "Perfect",
            "description": "Opaque, orange doré et légèrement émulsifié, sentant profondément le safran et le poisson sucré.",
            "action": "Étrier et presser le bouillon, en jetant les solides usés."
          },
          {
            "state": "Overdone",
            "description": "Broth réduit trop loin, collant et surconcentré, pendant vers l'amertume des os longs.",
            "action": "Garnir d'un peu d'eau chaude et de goût; tendre rapidement avant qu'il se resserre davantage."
          }
        ]
      },
      "feelCue": "Garder la surface dans un mouvement authentique et criant — un mijot paresseux n'émulsionnera pas l'huile. La cuisine se remplit d'un arôme de safran et de mer."
    },
    {
      "nodeId": "step_4",
      "action": "Filtrer",
      "inputs": [
        "saffron_broth"
      ],
      "outputState": "clear_base",
      "instructions": "Jeter le bouquet et la peau d'orange. Astucez le bouillon et adoucissez le poisson à travers un tamis grossier ou un moulin à nourriture placé sur un pot propre, pressez fermement les solides pour extraire chaque goutte de liqueur d'or — mais arrêtez avant de forcer à travers les os et la peau. Vous voulez un bouillon versable, intensément aromatisé, pas une purée. Jeter les solides usés et remettre le bouillon tendu dans un pot propre.",
      "visualCue": {
        "primaryTarget": "Un bouillon doré lisse et opaque dans le pot propre, exempt d'os et de fragments, brillant avec de l'huile émulsifiée et suffisamment épais pour enrober une cuillère légèrement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Broth mince et faible, avec beaucoup de saveur encore coincée dans les solides non pressés dans le tamis.",
            "action": "Appuyez de plus en plus sur les solides pour arracher la liqueur concentrée."
          },
          {
            "state": "Perfect",
            "description": "Bouillon doré versable mais corsé, exempt de grain et d'os, en éponge légèrement la cuillère.",
            "action": "Ajuster l'assaisonnement et revenir à une mijoter douce pour pocher le poisson servant."
          },
          {
            "state": "Overdone",
            "description": "Broth gritty et nuageux avec l'os écrasé et la peau forcé à travers le tamis.",
            "action": "Passez-le encore à travers un tamis plus fin pour le nettoyer avant de servir."
          }
        ]
      },
      "feelCue": "Le bouillon doit verser dans un ruban lisse et non cassé — s'il traîne ou se sent gritty sur la langue, il a été surpressé et a besoin d'une seconde pression."
    },
    {
      "nodeId": "step_5",
      "action": "Émulsionner",
      "inputs": [
        "clear_base",
        "ing_06",
        "ing_10",
        "ing_11",
        "ing_03"
      ],
      "outputState": "broth_and_rouille",
      "instructions": "Faire le rouille: livrez le reste de l'ail cru avec le piment et une pincée de sel à une pâte, travaillez dans la pomme de terre bouillie et le jaune d'œuf, puis bruissez dans l'huile d'olive fouettant constamment jusqu'à ce qu'il se construit dans une épaisse émulsion rouge rouille, desserrant avec une cuillère du bouillon chaud. Goûtez le bouillon tendu et corrigez le sel, le poivre et le safran. Tenez les deux au chaud — le bouillon à mijoter nu, le rouille à prêt.",
      "visualCue": {
        "primaryTarget": "Une rouille épaisse, brillante et orange brique qui tient un pic doux sur le fouet, à côté d'un bouillon doré assaisonné tenu juste en dessous d'un mijot.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Rouille mince et rudimentaire, l'huile assise lâche plutôt que liée, goût plat.",
            "action": "Continuez à fouetter lentement dans l'huile; si elle refuse de s'épaissir, tricotez-le dans une goutte de jaune frais."
          },
          {
            "state": "Perfect",
            "description": "Stiff, lisse, profondément ailky rouille la couleur de la terre cuite; bouillon brillant avec safran et bien salé.",
            "action": "Pocher le poisson servi dans le bouillon."
          },
          {
            "state": "Overdone",
            "description": "Rouille fendue et huileuse, ou si farouche avec l'ail et le piment submerge le plat.",
            "action": "Re-émulsionner avec un peu de bouillon chaud, ou plier dans la pomme de terre supplémentaire pour apprivoiser la chaleur."
          }
        ]
      },
      "feelCue": "La rouille doit s'accrocher au fouet dans un pic doux et lent et sentir agressivement l'ail cru. Plongez une cuillère — elle devrait rester un moment avant de couler."
    },
    {
      "nodeId": "step_6",
      "action": "Pochette et service",
      "inputs": [
        "broth_and_rouille",
        "ing_02",
        "ing_12"
      ],
      "outputState": "finished_bouillabaisse",
      "instructions": "Portez le bouillon à mijoter doucement et glissez dans les steaks de poisson fermes, les plus épais d'abord, donc tous terminer ensemble. Pochette à peine — 6-10 minutes selon l'épaisseur — jusqu'à ce que la chair devienne opaque et floconne au toucher mais reste juteuse. Servir en deux actes : d'abord le bouillon doré sur des toasts tartinés de rouille, puis le poisson poché, avec plus de rouille à côté.",
      "visualCue": {
        "primaryTarget": "Poissons simplement sertis, opaques et perlés jusqu'au centre, se reposant dans un bouillon de safran brillant, avec des toasts rouille-streaking au bord.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poisson encore translucide et vitreux au centre, résistant à la fourche.",
            "action": "Poché encore une minute ou deux et tester à nouveau — il devrait être opaque mais seulement."
          },
          {
            "state": "Perfect",
            "description": "Poisson opaque et nacré, en flocons dans des couches propres et humides, le bouillon parfumé et doré.",
            "action": "Soulevez doucement et servez à la fois avec des toasts et des rouille."
          },
          {
            "state": "Overdone",
            "description": "Poisson sec, éparpillé et cotonneux, qui commence à tomber dans le bouillon.",
            "action": "Arrêtez le pochage immédiatement et servez immédiatement; cuillerez un bouillon supplémentaire pour masquer la sécheresse."
          }
        ]
      },
      "feelCue": "Touchez un steak — il doit se sentir ferme et printanier, non plus doux et cru, et la chair doit se diviser en flocons propres sous la plus douce pression de fourche. Gardez le bouillon à un tremblement, ne jamais faire bouillir, ou le poisson va durcir et casser."
    }
  ]
};
