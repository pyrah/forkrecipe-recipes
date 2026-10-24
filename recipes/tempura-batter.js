export default {
  "repoId": "master_japanese_tempura_batter_001",
  "parentRepoId": null,
  "slug": "tempura-batter",
  "author": "ForkRecipe Kitchen",
  "title": "Batterie Tempura",
  "description": "Un lisier à peine mélangé d'eau froide et de farine à faible teneur en protéines — intentionnellement grumelé, dangereusement mince, et utilisé immédiatement avant la formation du gluten. Dans l'huile chauffée à exactement la bonne température, il se met dans une croûte si légère et translucide qu'il semble à peine exister, mais se brise à la morsure pour révéler ce qui était à l'intérieur.",
  "cuisine": "Japonais",
  "culture": "Edo-ère Tokyo",
  "category": "sauces",
  "tags": [
    "Japonais",
    "tempura",
    "pâte",
    "frites",
    "technique",
    "adaptable au gluten"
  ],
  "difficulty": 3,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 1,
    "sour": 0,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de gâteau ou farine molle à faible teneur en protéines",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "50g de farine plate + 50g de fécule de maïs pour une légèreté supplémentaire",
        "farine de riz sans gluten"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau froide (avec glaçons dans la cruche)",
      "ratioValue": 160,
      "defaultUnit": "g",
      "substitutions": [
        "eau minérale pétillante (ajoute des bulles de CO2 pour le levage supplémentaire)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Jaune d'oeuf (1 grand, froid)",
      "ratioValue": 18,
      "defaultUnit": "g",
      "substitutions": [
        "omit pour une pâte plus légère et plus translucide"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile de friture neutre (bron de riz, tournesol ou canola)",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "pur saindoux à 180 °C pour une croûte plus riche"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Réfrigérer",
      "inputs": [
        "ing_02"
      ],
      "outputState": "iced_water",
      "instructions": "Remplissez une grande cruche d'eau froide et ajoutez une généreuse poignée de glaçons. La mesure 160g de cette eau froide-glace comprend de petits morceaux de glace s'ils tombent. La température de l'eau doit être inférieure ou égale à 4 °C. L'eau froide est la variable la plus critique de tempura : elle ralentit le développement du gluten (puisque le gluten se forme plus rapidement dans l'eau chaude) et maintient la pâte dans un état d'instabilité perpétuelle jusqu'à ce qu'elle touche l'huile chaude. Placez la cruche au congélateur pendant 5 minutes si l'eau du robinet n'est pas assez froide.",
      "visualCue": {
        "primaryTarget": "Eau visiblement froide: condensation à l'extérieur de la cruche, écoulement de glace dans le liquide, température à ou près de la congélation.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est fraîche, mais pas glacée — vers 15°C. Pas de condensation.",
            "action": "Ajouter plus de glace et attendre 3 minutes. La tempura faite avec de l'eau trop froide sera collante et épaisse."
          },
          {
            "state": "Perfect",
            "description": "Le jug a une condensation; la température de l'eau est de 2-4 C; les lions de glace restent flottants.",
            "action": "Mesurer immédiatement et procéder au mélange. La vitesse est maintenant critique."
          },
          {
            "state": "Overdone",
            "description": "L'eau est partiellement congelée — trop épaisse pour se verser facilement.",
            "action": "Laisser reposer à température ambiante pendant 60 secondes et remuer. Vous avez besoin d'un liquide, pas d'un liquide."
          }
        ]
      },
      "feelCue": "Touchez l'extérieur de la cruche — il devrait se sentir comme une vitre froide en hiver, nettement froid plutôt que simplement frais."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "ing_03",
        "iced_water"
      ],
      "outputState": "egg_water",
      "instructions": "Battre légèrement le jaune d'œuf froid dans un bol avec des baguettes — seulement 3 ou 4 coups, assez pour le casser. Verser dans l'eau glacée et remuer avec une seule baguette ou la poignée d'une cuillère, juste assez pour se combiner. Ne fouettez pas. L'objectif est d'avoir de l'eau écailleuse de jaune, et non une émulsion lisse; les stries de jaune créent des micro-poches de richesse dans la croûte finale.",
      "visualCue": {
        "primaryTarget": "Une eau jaune pâle avec des stries visibles distinctes de jaune qui n'ont pas complètement dispersé — comme une soupe à goutte d'oeufs très diluée avant la cuisson.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Yolk est toujours assis comme un dôme cassé sur le dessus de l'eau.",
            "action": "Donnez deux autres bras doux avec une baguette à distribuer."
          },
          {
            "state": "Perfect",
            "description": "Le jaune est dispersé dans de longs rubans d'or pâle à travers l'eau. Non émulsifié — encore strié et inhomogène.",
            "action": "Continuer immédiatement à ajouter de la farine. Chaque seconde compte d'ici."
          },
          {
            "state": "Overdone",
            "description": "Les jaunes et l'eau sont complètement émulsifiés dans un liquide pâle uniforme.",
            "action": "Toujours utilisable — la croûte sera un peu moins molle mais encore légère. Procédez d'urgence."
          }
        ]
      },
      "feelCue": "L'eau de l'œuf doit se sentir indistinguable de l'eau très froide au bout des doigts — vous n'essayez pas de construire le corps, seulement pour enrichir légèrement un liquide froid."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_04",
        "egg_water"
      ],
      "outputState": "tempura_batter",
      "instructions": "Faites tremper la farine et le sel dans l'eau de l'œuf en même temps. À l'aide de baguettes (pas un fouet), remuer avec de grandes figures paresseuses de huit coups — pas plus de 10 à 12 coups. La pâte doit rester visiblement grumelée avec des poches de farine sèche qui flottent encore à la surface. Cette contrainte est toute la technique : chaque agit supplémentaire développe du gluten et vous déplace vers une pâte lourde et pâteuse qui frite comme des anneaux de calamar plutôt que de tempura légère. Utiliser immédiatement — la pâte se détériore en quelques minutes car le gluten continue de se développer, même s'il n'est pas mis au rebut. Conserver le bol sur ou dans le plateau de glace pour maintenir la température.",
      "visualCue": {
        "primaryTarget": "Une pâte jaune pâle et mince, pleine de morceaux visibles et de stries de farine sèche — elle semble inachevée et fausse. Lorsqu'une brochette est trempée et levée, la pâte s'écoule dans une mince feuille irrégulière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De grandes touffes de farine sèche sur le dessus qui n'ont pas été incorporées du tout — plus sèches que humides.",
            "action": "Deux ou trois coups plus doux pour humidifier les poches sèches restantes. Ne pas trop mélanger pour compenser."
          },
          {
            "state": "Perfect",
            "description": "Mince, bosselée et visuellement mal mélangée. Drips dans une mince feuille d'une brochette avec des bosses visibles passant par. La température est encore froide lorsque vous touchez le bol.",
            "action": "Utiliser dans les 5 minutes. Plonger les ingrédients dans une mince couche seulement — la pâte devrait à peine s'accrocher."
          },
          {
            "state": "Overdone",
            "description": "La patte est lisse, uniforme et quelque peu visqueuse; elle enrobe une brochette épaissement et coule dans un ruisseau lent, semblable à une corde. Le gluten s'est développé.",
            "action": "Vous ne pouvez pas annuler le développement du gluten. Tirez le meilleur parti de ce produit : faire frire immédiatement à la température correcte et accepter une croûte plus épaisse et plus croustillante."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir froide au bout des doigts et les égoutter presque aussi librement que l'eau — si elle drape et s'accroche dans des draps, elle a été trop mélangée ou trop chaude."
    },
    {
      "nodeId": "step_4",
      "action": "Frire",
      "inputs": [
        "tempura_batter",
        "ing_05"
      ],
      "outputState": "finished_tempura",
      "instructions": "Chauffer l'huile de friture dans un pot ou un wok à fond lourd à 175-180 C — utilisez un thermomètre. Plongez brièvement l'ingrédient (crevettes, patates douces, brocolis, etc.) dans une légère poussière de farine sèche, secouez l'excédent, puis trempez dans la pâte froide et baissez immédiatement dans l'huile. Faire frire en petits lots — l'engorgement diminue la température de l'huile de façon catastrophique. Faire frire jusqu'à ce que la pâte soit sertie et dorée, environ 2 à 3 minutes. Le signal visuel clé est quand le bouillonnement initial furieux s'abaisse à un étourdissement plus calme et intermittent. Retirer avec une souche d'araignée et égoutter verticalement sur un support de fil, jamais plat sur des serviettes en papier (qui vapeur la croûte douce). Servir dans les 2 minutes.",
      "visualCue": {
        "primaryTarget": "Une croûte dorée pâle, presque translucide, avec des bulles irrégulières et aérées à travers la surface — pas de revêtement épais, à la peau lisse, mais une texture ouverte, lacy comme un vaporisateur de mer congelé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La batte est blanche pâle, elle a toujours l'air crue. Les bulles sont violentes et la croûte n'a pas été mise. Ça déchire quand tu essaies de soulever la pièce.",
            "action": "Retourner à l'huile et ne pas agiter — laisser la croûte se régler pendant 30 secondes avant de toucher."
          },
          {
            "state": "Perfect",
            "description": "Ambre pâle-or avec une surface nettement aérée, blister. Le grésillement s'est apaisé à l'occasion. Soulève proprement de l'huile avec une souche d'araignée.",
            "action": "Transférez-le sur une grille. Servir en 2 minutes avec un bouillon de trempe de tentesuyu ou juste du sel de mer."
          },
          {
            "state": "Overdone",
            "description": "La croûte est profondément dorée, presque brune. La qualité légère et translucide a disparu — elle semble opaque et uniforme.",
            "action": "La tempura est encore croquante mais la saveur délicate du revêtement est compromise. Réduire la température de 5 C pour le prochain lot."
          }
        ]
      },
      "feelCue": "Écoutez l'huile: la tempura fraîche ressemble à un rugissement soutenu d'une rivière qui coule rapidement. Lorsque ce rugissement s'abaisse à des pops dispersés, la pièce est faite. Faites confiance à vos oreilles devant vos yeux."
    }
  ]
};
