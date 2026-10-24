export default {
  "repoId": "master_french_creme_patissiere_001",
  "parentRepoId": null,
  "slug": "creme-patissiere",
  "author": "ForkRecipe Kitchen",
  "title": "Crème pâtissière",
  "description": "Le cheval de travail de la cuisine de pâtisserie française — une crème épaisse, parfumée à la vanille profonde qui met assez ferme pour pipe en clair ou couronner une tarte, mais se dissout sur la langue en pure soie et chaleur.",
  "cuisine": "Français",
  "culture": "Français",
  "category": "desserts",
  "tags": [
    "Pâtisserie",
    "Coutard",
    "vanille",
    "remplissage",
    "français",
    "classique",
    "base"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "2 hours",
  "ratioSystem": "parts",
  "stars": 1870,
  "forks": 423,
  "contributors": 71,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 0,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 500,
      "defaultUnit": "ml",
      "substitutions": [
        "Lait d'avoine (moins riche)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Fèves de vanille, fendues et raclées (ou extrait de 2 c. à thé)",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "pâte de haricots vanille (1 c. à thé)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Jaunes d'œuf",
      "ratioValue": 6,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Starch",
      "name": "Farine de maïs",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "farine pure (45 g, résultat moins brillant)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre froid non salé, cube",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "infused_milk",
      "instructions": "Répartir le haricot vanillé dans le sens de la longueur, racler les graines et ajouter les deux gousses et les graines au lait dans une casserole moyenne. Chauffer à feu moyen, en remuant de temps en temps, jusqu'à ce que le lait n'arrive qu'à mijoter — petites bulles aux bords, vapeur montante. Retirer du feu, couvrir et tremper pendant 10 minutes pour approfondir la perfusion de vanille. Retirer le gout (rincer et le sécher pour le sucre vanille).",
      "visualCue": {
        "primaryTarget": "Lait avec une teinte dorée des graines de vanille, en vapeur doucement. Les graines de vanille sont également distribuées, visibles comme de minuscules taches noires.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait est encore froid et la couleur vanille n'a pas évolué. Les graines sont accrochées autour du goupille.",
            "action": "Chauffer jusqu'à ce qu'il fasse mijoter et tremper pendant 10 minutes."
          },
          {
            "state": "Perfect",
            "description": "Lait crémeux et chaud avec une vapeur de vanille dorée et parfumée. La vanille est répartie uniformément.",
            "action": "Frottez ensemble les jaunes d'œufs, le sucre et la farine de maïs pendant que le lait s'enfonce."
          },
          {
            "state": "Overdone",
            "description": "Le lait a bouilli de façon agressive et légèrement diminué. La surface peut avoir une peau.",
            "action": "Éjaculer toute peau, remplir de lait froid jusqu'à 500 ml et poursuivre."
          }
        ]
      },
      "feelCue": "La cuisine doit être remplie de l'odeur chaude, presque florale de vanille dans la laiterie chaude — pas une note synthétique pointue, mais une douceur profonde et arrondie."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "yolk_paste",
      "instructions": "Dans un grand bol, fouetter vigoureusement les jaunes d'œufs et le sucre pendant 1 à 2 minutes jusqu'à ce que le mélange soit pâle, épais et forme un ruban. Faire tremper dans la farine de maïs et fouetter de nouveau jusqu'à ce qu'elle soit complètement lisse sans grumeaux. Cette pâte doit être complètement sans morceaux ou la crème finie aura des poches d'amidon.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse et jaune pâle qui tombe du fouet dans un ruban large et lent. Lisse sans grumeaux de farine de maïs.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours un mélange jaune fin et granuleux. Des morceaux de farine de maïs visibles.",
            "action": "Plus vigoureusement. Toutes les farines de maïs doivent être entièrement incorporées avant la trempe."
          },
          {
            "state": "Perfect",
            "description": "Pale, épais, lisse. Des chutes dans un large ruban. Pas de grumeaux quand on les tient à la lumière.",
            "action": "Temper avec le lait infusé chaud."
          },
          {
            "state": "Overdone",
            "description": "Je ne peux pas me défaire à ce stade.",
            "action": "Passez à la tempérance."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir lisse et légèrement fébrile entre les doigts — pas de graisse, pas de poches poudreuses. Il devrait être assez épais pour tenir un monticule doux lorsqu'il est tombé d'une cuillère."
    },
    {
      "nodeId": "step_3",
      "action": "Tempérer",
      "inputs": [
        "yolk_paste",
        "infused_milk"
      ],
      "outputState": "tempered_custard",
      "instructions": "Verser une louche de lait infusé chaud dans la pâte de jaune d'œuf, fouetter constamment et vigoureusement pour élever doucement la température des jaunes sans les brouiller. Une fois combiné, verser le reste du lait chaud dans un cours d'eau lent et stable tout en fouettant. Retourner le mélange entier dans la casserole.",
      "visualCue": {
        "primaryTarget": "Un liquide lisse, uniforme, jaune pâle avec des graines de vanille. Pas d'oeuf brouillé, pas de bosses.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Seule une petite quantité de lait ajouté et de mélange est encore froide et épaisse.",
            "action": "Ajouter progressivement du lait chaud, en fouettant continuellement."
          },
          {
            "state": "Perfect",
            "description": "Doux, fluide, chaud. Tous les composants combinés. Graines de vanille visibles partout. Pas de grumeaux.",
            "action": "Verser dans la casserole et faire cuire."
          },
          {
            "state": "Overdone",
            "description": "Ajouter le lait trop rapidement sans fouetter — de petits flocons d'oeufs cuits visibles.",
            "action": "Plongez dans un tamis avant de retourner dans la poêle."
          }
        ]
      },
      "feelCue": "Le mélange doit se réchauffer doucement dans le bol pendant que vous fouettez dans le lait chaud — vous devriez le sentir mince et desserrer comme chaque addition incorpore, sans grumelage ou résistance soudaine."
    },
    {
      "nodeId": "step_4",
      "action": "Faire bouillir",
      "inputs": [
        "tempered_custard",
        "ing_06"
      ],
      "outputState": "finished_creme_patissiere",
      "instructions": "Retournez la crème dans la casserole et faites cuire à feu moyen, fouettant constamment et atteignant chaque coin de la casserole. Le mélange semble d'abord s'épaissir légèrement, puis s'empare soudainement et devient très épais — continuez à fouetter en passant de la pâte liquide à la pâte épaisse. C'est l'amidon gélatinisant. Crucieusement, une fois que la crème s'est épaissie, continuer à cuire à ébullition complète pendant 1-2 minutes, fouettant dur, pour faire cuire l'arôme d'amidon cru. Retirer du feu, battre le beurre froid et presser le film de collage directement sur la surface. Réfrigérer jusqu'à froid et ferme (au moins 1,5 heure).",
      "visualCue": {
        "primaryTarget": "Une crème épaisse, brillante, à la vanille qui tombe du fouet dans des monticules lourds et lents. Lorsqu'une ligne est tracée à travers la surface avec un doigt, elle tient propre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est encore éclaboussé ou seulement épaississant. Il ne mettra pas ferme dans le frigo. Les arômes étoilés et crus persistent.",
            "action": "Continuer la cuisson et fouetter à feu moyen — cuire 2 minutes à ébullition après avoir épaissi."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, brillant et profondément parfumé. Il tient sa forme sur le fouet. Un doigt tiré à travers la surface laisse un canal propre. Goût propre — pas d'amidon.",
            "action": "Ajouter le beurre froid, mélanger, couvrir la surface avec le film de collage, réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "La crème a commencé à coller à la poêle et sent légèrement l'amidon brûlé. La surface est bosselée.",
            "action": "Plongez dans un bon tamis immédiatement. Jetez tout résidu brûlé."
          }
        ]
      },
      "feelCue": "Pour le moment, la crème se met entièrement dans la poêle, le fouet va glisser avec une résistance soudaine et dramatique — c'est la gélatinisation de l'amidon tout à la fois. Poussez et continuez à fouetter pendant 2 minutes pour faire cuire le goût farineux."
    }
  ]
};
