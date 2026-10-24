export default {
  "repoId": "master_austrian_apple_strudel_001",
  "parentRepoId": null,
  "slug": "apple-strudel",
  "author": "ForkRecipe Kitchen",
  "title": "Strudel de pomme",
  "description": "Apfelstrudel viennoise — une pâte fine de tissu étirée sur une nappe de farine jusqu'à ce que vous puissiez lire un journal à travers elle, rempli de pommes épicées et de chapelures, roulé dans une bûche, et cuit jusqu'à ce que la pâtisserie se brise en couches translucides au beurre.",
  "cuisine": "Autriche",
  "culture": "Viennese",
  "category": "desserts",
  "tags": [
    "strudel",
    "pomme",
    "autrien",
    "Viennese",
    "pâtisserie",
    "main tendue",
    "cannelle"
  ],
  "difficulty": 4,
  "activeTime": "75 min",
  "totalTime": "2 hr 30 min",
  "ratioSystem": "parts",
  "stars": 987,
  "forks": 76,
  "contributors": 22,
  "license": "CC-BY-SA",
  "createdAt": "2025-01-25",
  "updatedAt": "2025-06-20",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 2,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de pain à haute teneur en gluten ou farine à usage général",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau chaude",
      "ratioValue": 55,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile neutre (pour la pâte)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Saindoux fondus"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Pommes tartines (Granny Smith ou Cox), pelées, tranchées finement",
      "ratioValue": 200,
      "defaultUnit": "parts",
      "substitutions": [
        "Pommes de Boskoop"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Structure",
      "name": "Pain sec, grillé au beurre",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "amandes hachées"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Beurre non salé, fondu, pour brossage",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Sucre en poudre (givrage), destiné à la dépoussiérage",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pétrir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "rested_strudel_dough",
      "instructions": "Mélanger la farine, l'eau chaude, l'huile et le sel, en mélangeant jusqu'à ce qu'une pâte chaotique se forme. Knead vigoureusement pendant 10 minutes complètes — cette pâte nécessite un développement sérieux du gluten, ce qui lui permet d'être étiré à une finesse presque impossible sans déchirer. Agenouiller en giflant la pâte contre la surface de travail et la plier. La pâte finie doit être lisse comme de la soie, chaude du pétrissage, et extrêmement élastique. Formez une boule, brossez avec de l'huile et reposez-vous pendant 45 minutes à température ambiante. Le reste n'est pas facultatif — il détend le gluten au point où l'étirement devient possible.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte lisse et satinée sans taches rugueuses. Lorsqu'il est étiré doucement, il s'étend sans déchirer. La surface doit être aussi lisse qu'un lobe d'oreille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est encore légèrement rugueuse et déchire lorsqu'elle est étirée même légèrement. Ressort immédiatement quand poussé — gluten très serré.",
            "action": "Agenouillez encore 5 minutes. La pâte strudel insuffisamment pétrie se déchirera pendant l'étirement."
          },
          {
            "state": "Perfect",
            "description": "Parfaitement lisse, boule satinée. Lorsque vous le poke, l'indentation revient lentement — le gluten est développé mais pas trop serré. Il s'étend déjà légèrement sans déchirer.",
            "action": "Badigeonner d'huile, bien couvrir et reposer 45 minutes avant d'étirer."
          },
          {
            "state": "Overdone",
            "description": "Impossible d'atteindre cet objectif par pétrissage à la main — il est possible de recouvrir la machine mais il est peu probable qu'elle soit faite à la main. Repose-toi.",
            "action": "Reposez-vous comme indiqué."
          }
        ]
      },
      "feelCue": "Tirer un petit morceau de la pâte et l'étirer entre les doigts — après avoir bien pétri et reposé, il devrait s'étirer dans une membrane translucide avant de déchirer, comme une peau de ballon épais. Si elle déchire immédiatement sans étirement, elle a besoin de plus de repos."
    },
    {
      "nodeId": "step_2",
      "action": "Remplissage de la préparation",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "apple_filling",
      "instructions": "Jetez les pommes finement coupées avec du sucre et de la cannelle et laissez macérer pendant 15 minutes. Égoutter soigneusement l'excès de jus, car trop d'humidité fera le strudel soggy. Faire griller la chapelure dans le beurre jusqu'à ce qu'elle soit dorée et parfumée, ce qui absorbe l'humidité résiduelle des pommes pendant la cuisson, en maintenant la pâte croustillante de l'intérieur. Mélanger les pommes drainées et la chapelure beurrée juste avant de remplir la pâte étirée.",
      "visualCue": {
        "primaryTarget": "Des tranches de pommes brillantes de la macération du sucre mais bien drainées — pas de jus de piscine. Des chapelures dorées et beurrées mélangées uniformément.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tranches de pomme encore rigides et sèches — aucun liquide de macération libéré. Fil d'Arianes encore pâles et intouchées.",
            "action": "Laissez les pommes macérer plus longtemps et griller la chapelure plus. Les chapelures crues n'absorbent pas efficacement l'humidité."
          },
          {
            "state": "Perfect",
            "description": "Les pommes ont libéré du jus, ont été drainées, et semblent adoucies et brillantes. Fil d'Ariane sont profondément dorés et odeur de beurre grillé.",
            "action": "Combiner et remplir immédiatement — ne laissez pas le remplissage s'asseoir ou la chapelure réhydratera."
          },
          {
            "state": "Overdone",
            "description": "Les pommes ont été sur-macérées et ont lâché tellement de jus qu'elles ont l'air d'eau. Même après égouttage, ils restent très humides.",
            "action": "Égoutter aussi soigneusement que possible, en appuyant légèrement. Ajoutez une poignée supplémentaire de chapelure grillée pour compenser."
          }
        ]
      },
      "feelCue": "Une poignée de remplissage doit se sentir légèrement humide, mais pas dégoulinante — si vous le pressez dans votre poing, seulement quelques gouttes doivent apparaître. La chapelure doit être croustillante et sablonneuse, et non molle."
    },
    {
      "nodeId": "step_3",
      "action": "Pâte stretch",
      "inputs": [
        "rested_strudel_dough",
        "ing_09"
      ],
      "outputState": "stretched_strudel_dough",
      "instructions": "Couvrir une grande table d'un chiffon propre et la poussière légèrement de farine. Placer la pâte reposée au centre et la rouler avec une épingle à environ 40x60cm. Puis commencer à s'étirer à la main: placer les deux mains sous la pâte, les paumes vers le bas, et s'étirer vers l'extérieur du centre en utilisant le dos de vos mandrins. Marcher autour de la table, s'étirant dans toutes les directions, jusqu'à ce que la pâte soit fine (environ 1mm) et presque transparente — environ 60x80cm. La pâte doit être si mince que vous pouvez lire le texte à travers elle. Badigeonner soigneusement le beurre fondu pendant que vous travaillez.",
      "visualCue": {
        "primaryTarget": "Une feuille de pâte presque transparente. Le texte du journal sous la pâte étirée doit être clairement lisible à travers lui. Pas de taches épaisses, de larmes ou de trous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est translucide mais encore blanche et opaque dans la plupart des endroits. Vous ne pouvez pas lire. Il fait encore plusieurs millimètres d'épaisseur.",
            "action": "Continuer à s'étirer — c'est l'habileté du strudel et prend patience. Travaillez du centre vers l'extérieur et maintenez vos mains à plat."
          },
          {
            "state": "Perfect",
            "description": "Presque complètement transparent au centre. Le texte est lisible. Assez pour voir votre main. Les bords sont légèrement plus épais — coupez-les.",
            "action": "Badigeonner de beurre et ajouter le remplissage."
          },
          {
            "state": "Overdone",
            "description": "La pâte a été déchirée en plusieurs endroits. Les trous sont dispersés.",
            "action": "Patch déchire en chevauchant la pâte et en appuyant doucement. Quelques petits trous sont inoffensifs et scellent pendant le laminage. Travaillez autour de grosses larmes."
          }
        ]
      },
      "feelCue": "La pâte étirée devrait se sentir presque sans poids dans vos mains, comme manipuler un très grand tissu légèrement humide. Lorsque vous soufflez sur elle doucement à quelques centimètres de distance, il devrait flutter visiblement."
    },
    {
      "nodeId": "step_4",
      "action": "Rouleaux et gâteaux",
      "inputs": [
        "stretched_strudel_dough",
        "apple_filling"
      ],
      "outputState": "finished_apple_strudel",
      "instructions": "Étendre la chapelure beurrée sur les deux tiers de la pâte, laissant une bordure de 5 cm. Pile le remplissage de la pomme uniformément sur la chapelure. En utilisant la nappe pour aider, rouler le strudel dans un log serré, en utilisant le tissu pour soulever et plier plutôt que vos mains. Placer le bord de la couture sur une plaque de cuisson parcheminée, en courbant dans un fer à cheval si nécessaire. Badigeonner généreusement de beurre fondu. Cuire à 190°C (375°F) pendant 35 à 40 minutes, brossant encore une fois avec du beurre à la marque de 20 minutes. Poussière avec du sucre en poudre et servir au chaud.",
      "visualCue": {
        "primaryTarget": "Un log d'or-ambre avec des couches visibles flocons sur la surface. Beurre a basculé l'extérieur à une couleur profonde, même dorée. La surface se fissure audiquement lorsque la casserole est déplacée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le strudel est d'or pâle, pas d'ambre profond. La surface semble lisse plutôt que flocée. Presser doucement révèle que la pâtisserie est encore douce.",
            "action": "Badigeonner avec plus de beurre et continuer la cuisson — le strudel pâle manque de la croûte essentielle et le remplissage ne sera pas complètement chaud."
          },
          {
            "state": "Perfect",
            "description": "Deep or-ambre avec des couches visibles et nettes. La pâtisserie craque audiblement quand elle est touchée. La poudre de sucre sur le dessus commence à se dissoudre aux bords. Le remplissage des pommes est parfumé et chaud.",
            "action": "Laisser refroidir pendant 10 minutes, la poussière avec du sucre en poudre et servir."
          },
          {
            "state": "Overdone",
            "description": "Surface brun très foncé avec quelques bords noir croustillant. La pâte aux extrémités a considérablement obscurci.",
            "action": "Retirer du four. Tente lâchement avec du papier pour les dernières minutes la prochaine fois pour protéger les extrémités."
          }
        ]
      },
      "feelCue": "Un strudel bien cuit doit se sentir léger et craquant — tapez - le avec un doigt et entendez un son creux et net des couches de pâtisserie. Lorsque vous le coupez, la pâtisserie devrait se briser au toucher du couteau, libérant un nuage de vapeur de cannelle."
    }
  ]
};
