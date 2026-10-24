export default {
  "repoId": "master_thai_shrimppadthai_001",
  "parentRepoId": null,
  "slug": "shrimp-pad-thai",
  "author": "ForkRecipe Kitchen",
  "title": "Crevettes Pad Thai",
  "description": "Les nouilles de riz frites à la chaleur volcanique avec des crevettes à la prune, des œufs brouillés directement dans la poêle, et une sauce de tamarin, de sauce de poisson et de sucre de palme — finies avec un blizzard d'arachides écrasées, un coin de citron vert, et le coup de germes de haricots frais.",
  "cuisine": "Thaï",
  "culture": "Centre thaïlandais",
  "category": "seafood",
  "tags": [
    "pad thai",
    "Thaï",
    "wok",
    "nouilles",
    "crevettes",
    "Tamarin",
    "Alimentation de rue"
  ],
  "difficulty": 3,
  "activeTime": "25 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 4,
    "sour": 3,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Crevettes crues, pelées et dépeintes (16/20 nombre)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "lanières de poitrine de poulet",
        "cubes de tofu fermes",
        "Anneaux de calmars"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Nouilles de riz sen lek séchées (3 mm de large), trempées jusqu'à pliable mais toujours fermes",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "nouilles fraîches de thaï",
        "pad voir ew nouilles"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Oeufs",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Pâte de tamarin (à partir d'un bloc dissous dans de l'eau chaude, tendue)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "concentré de tamarin (utiliser la moitié de la quantité)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Umami",
      "name": "sauce de poisson (Tiparos ou Megachef)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce soja légère + une pincée de sel"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre de palme, finement râpé ou cassé",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun",
        "Sucre de coco"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile neutre (bron, légume ou saindoux)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Échalotes, tranchées finement",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon rouge, finement coupé en dés"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Allium",
      "name": "Gousses d'ail, finement hachées",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Umami",
      "name": "Radis conservés (chai poh), rincés et hachés",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "radis kimchi (puits de rinçage)"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Protein",
      "name": "Tofu ferme, coupé en petits cubes (facultatif)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Garnish",
      "name": "Choux de haricots frais",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "concombre julienned"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Garnish",
      "name": "Cacahuètes grillées, grossièrement broyées",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "noix de cajou grillées"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Herb",
      "name": "Coriandre fraîche (cilantro), feuilles seulement",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Basilic thaïlandais"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Citrus",
      "name": "Coins de citron vert",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_16",
      "role": "Heat",
      "name": "Flacons de chili séchés (phrik bon)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "chili frais à l'œil d'oiseau thaïlandais, tranché finement"
      ]
    },
    {
      "ingId": "ing_17",
      "role": "Allium",
      "name": "Oignons verts coupés en 4 cm de longueur",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "pad_thai_sauce",
      "instructions": "Pour faire la sauce thai, dissoudre la pâte de tamarin: casser un morceau de 50 g du bloc, verser plus de 100 ml d'eau chaude, et le travailler avec vos doigts jusqu'à dissolution. Passer à travers un tamis fin, en appuyant sur les solides, pour produire un liquide doux, doux et doux. Combinez cette eau de tamarin avec la sauce de poisson et le sucre de palme dans un petit bol. Faites fouetter jusqu'à ce que le sucre de palme soit complètement dissous — vous devrez peut - être réchauffer le mélange doucement si vous utilisez du sucre de palme dur. Bouche : La sauce doit équilibrer le sucré, le salé et la tarte en moyenne à peu près égale, un peu plus salé que le sucré, sans qu'une seule note domine. Ajuster avec la sauce de poisson pour la salinité, le sucre de palme pour la douceur, ou le tamarin pour l'auresse. Cette sauce doit être faite avant le début de la cuisson du wok — vous ne pouvez pas arrêter mi-wok pour ajuster.",
      "visualCue": {
        "primaryTarget": "Une sauce ambrée foncée, légèrement sirupeuse qui enveloppe l'arrière d'une cuillère et sent le tamarin, le sel de poisson et la mélasse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sucre de palme non complètement dissout — cristaux visibles, sauce goûte granuleuse et inégalement sucrée.",
            "action": "Chauffer doucement à feu doux et fouetter jusqu'à ce qu'il soit lisse."
          },
          {
            "state": "Perfect",
            "description": "Doux, équilibré, foncé. Doux et aigre et salé simultanément, légèrement visqueux.",
            "action": "Réserver à côté du wok prêt à être ajouté immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La sauce n'a qu'un goût: trop sucré, trop salé ou trop aigre.",
            "action": "Ajouter l'élément opposé goutte à goutte : une goutte de sauce de poisson compense trop sucrée, une pincée de sucre compense trop-sour, un peu d'eau compense trop-salté."
          }
        ]
      },
      "feelCue": "Plongez un doigt — la sauce doit s'accrocher un moment avant de s'enfuir, laissant une tache de complexité sucrée-saucière qui persiste pendant plusieurs secondes."
    },
    {
      "nodeId": "step_2",
      "action": "Saisir",
      "inputs": [
        "ing_07",
        "ing_01",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "wok_base",
      "instructions": "Chauffer un wok sur la flamme la plus haute possible jusqu'à ce qu'il commence à fumer — le métal devrait être si chaud qu'une goutte d'eau s'évapore instantanément avec une seule fissure. Ajouter l'huile d'un seul coup; il devrait mijoter et onduler immédiatement. Ajouter les crevettes en une seule couche et ne pas les toucher pendant 60 secondes. Le but est un léger char à la surface — vous ne pouvez pas atteindre cela si vous foulez la casserole ou remuez trop tôt. Flip et cuire 30 secondes de plus. Les crevettes devraient être simplement cuites, enroulées en forme de «C». Poussez-les sur le côté du wok. Ajouter les échalotes et l'ail au centre vide du wok et cuire en remuant constamment pendant 30 secondes jusqu'à odorat. Ajouter le radis et le tofu conservés (si vous l'utilisez) et mélanger tout pendant 1 minute.",
      "visualCue": {
        "primaryTarget": "Les crevettes sont rose corail et légèrement carbonisées aux bords; les échalotes et l'ail sont dorés et parfumés; le fond du wok développe un fond fumé et caramélisé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crevettes sont rose pâle et translucides — le wok n'était pas assez chaud ou elles ont été déplacées trop tôt.",
            "action": "Augmenter la chaleur au maximum et saisir sans toucher pendant 60 secondes."
          },
          {
            "state": "Perfect",
            "description": "Les crevettes sont rouge corail vif avec de légères marques d'omble, enroulées dans un 'C'. L'ail et les échalotes sont dorés, parfumés, non brûlés.",
            "action": "Passez immédiatement aux nouilles — ne laissez pas le wok refroidir."
          },
          {
            "state": "Overdone",
            "description": "L'ail s'obscurcit jusqu'au brun et commence à devenir amer; les crevettes sont entièrement courbées et raidies.",
            "action": "Ajouter un jet d'eau pour déglacer et refroidir, puis procéder immédiatement avec des nouilles."
          }
        ]
      },
      "feelCue": "Le wok devrait avoir l'impression qu'il est vivant — la chaleur rayonnante intense qui en sort devrait être ressentie sur votre visage à 30 cm de distance. S'il ne se sent pas dangereux, il n'est pas assez chaud pour le pad thai authentique."
    },
    {
      "nodeId": "step_3",
      "action": "Mélanger",
      "inputs": [
        "wok_base",
        "ing_02",
        "pad_thai_sauce"
      ],
      "outputState": "sauced_noodles",
      "instructions": "Ajouter les nouilles de riz trempées (mais toujours fermes) au wok. Versez immédiatement la sauce thai sur les nouilles. En utilisant des pinces ou deux longues baguettes, remuer et plier constamment, soulevant les nouilles du fond du wok et les retournant, pendant 2–3 minutes. La sauce devrait réduire et caraméliser légèrement car elle touche la surface du wok chaud, enrobant chaque brin de nouilles dans une glaçure collante et ambre. Si les nouilles commencent à coller sévèrement, ajoutez 2 à 3 cuillères à soupe d'eau au wok et jetez à nouveau. Les nouilles sont prêtes quand elles sont molles mais ont encore la morsure la plus faible (al dente), et la sauce a réduit à un glaçage collant plutôt qu'un bassin de liquide.",
      "visualCue": {
        "primaryTarget": "Les nouilles sont uniformément recouvertes d'ambre, brillantes, et commencent à montrer des bords caramélisés légers. Il ne reste plus de piscines de sauce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les nouilles sont encore pâles et raides, les piscines de sauce au fond du wok plutôt que le revêtement.",
            "action": "Continuer à jeter à feu vif. Ajouter 2 c. à soupe d'eau s'ils collent et le wok est sec."
          },
          {
            "state": "Perfect",
            "description": "Chaque brin de nouilles est vitré et légèrement collant. Certains bords montrent un char léger. La sauce a été réduite à un revêtement collant.",
            "action": "Poussez les nouilles sur le côté et faites cuire l'œuf."
          },
          {
            "state": "Overdone",
            "description": "Les nouilles sont entachées d'une masse collante, ou certaines commencent à se briser et à se déchiqueter après avoir trop cuit.",
            "action": "Ajouter immédiatement un jet d'eau et séparer délicatement avec les pinces. Passez à l'oeuf sans tarder."
          }
        ]
      },
      "feelCue": "Lorsque vous soulevez les pinces, les nouilles devraient retomber dans le wok en un seul mouvement, ne pas s'accrocher ensemble dans un bloc solide — chaque brin légèrement recouvert et séparé."
    },
    {
      "nodeId": "step_4",
      "action": "Incorporer délicatement",
      "inputs": [
        "sauced_noodles",
        "ing_03",
        "ing_17"
      ],
      "outputState": "egg_integrated_noodles",
      "instructions": "Poussez les nouilles d'un côté du wok, créant un espace clair de l'autre. Ajouter une petite bruine d'huile dans l'espace vide et cracher les œufs directement. Laissez les blancs d'œuf commencer à se fixer pendant 15 secondes sans remuer, puis cassez les jaunes et brouillez les oeufs en grands caillés crépus avec une spatule — faites cela dans la chaleur résiduelle et la flamme du wok, pas au centre. Avant que les œufs ne soient entièrement enfilés (bien qu'ils soient encore brillants et légèrement mouillés), pliez les nouilles sur les œufs et jetez tout ensemble, de sorte que les œufs se brisent et enrobent les nouilles de rubans jaunes crémeux. Ajouter les oignons verts et mélanger pendant 30 secondes de plus. L'œuf doit être entièrement réglé et intégré, mais toujours humide et crépuscule — pas sec ou brouillé.",
      "visualCue": {
        "primaryTarget": "Rubans jaunes d'oeufs enrobant les nouilles, morceaux d'oignon vert distribués à travers l'enchevêtrement, pas de piscines séparées d'œuf humide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les blancs d'oeufs sont toujours transparents et crus, pas entièrement fixés. Les Yolks sont trop runny et tout est mouillé.",
            "action": "Faire sauter à feu vif pendant 30 secondes jusqu'à ce que l'oeuf soit réglé."
          },
          {
            "state": "Perfect",
            "description": "L'œuf est serti mais humide et brillant, cassé en rubans de crème tissés à travers les nouilles. Pas de texture caoutchouteuse ou sèche.",
            "action": "Ajouter les germes de haricots et mélanger pendant 10 secondes seulement — ils doivent rester croquants."
          },
          {
            "state": "Overdone",
            "description": "L'œuf est sec, émietté et caoutchouteux — bruni aux bords de la surcuisson sur la surface du wok à haute chaleur.",
            "action": "Procéder à des pousses de haricots et garnir immédiatement. Le plat global compensera par des composants frais."
          }
        ]
      },
      "feelCue": "Goûtez une bouchée de nouilles-plus-œuf: l'œuf doit se dissoudre dans la nouille plutôt que d'être un composant distinct et mâcheur — crémeux et léger, non dense et sec."
    },
    {
      "nodeId": "step_5",
      "action": "Dresser",
      "inputs": [
        "egg_integrated_noodles",
        "ing_12",
        "ing_13",
        "ing_14",
        "ing_15",
        "ing_16"
      ],
      "outputState": "finished_pad_thai",
      "instructions": "Retirer le wok du feu. Ajouter les germes de haricots et mélanger deux fois — la chaleur résiduelle du wok les réchauffera légèrement mais ils ne doivent pas cuire à travers; crunch cru est structurelle au plat fini. Assiette immédiatement dans un monticule au centre d'une assiette chaude. Disposer un petit nid de pousses de haricots frais sur le dessus (brut, pas du wok), disperser généreusement les cacahuètes écrasées, ajouter des feuilles de coriandre, et ajouter un coin ou deux de citron vert sur le côté. Fournir une petite pincée de flocons de chili séchés sur l'assiette. En Thaïlande, pad thai est servi avec un plateau latéral de condiments (sauce de poisson, sucre, flocons de chili et piment séché au vinaigre) pour l'auto-assaisonnement à la table — le plat à la table est le point de départ, pas la déclaration finie.",
      "visualCue": {
        "primaryTarget": "Un monticule de nouilles dorées surmonté de pousses de haricots blancs, de cacahuètes écrasées, de coriandres vertes et d'un coin de citron vert brillant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La plaque a l'air plate et monochromatique — pas de garniture contrastante ou de fraîcheur pour compenser la base frite wok.",
            "action": "Ne sautez jamais les garnitures — elles sont structurales à l'équilibre de saveur de pad thai, pas la décoration en option."
          },
          {
            "state": "Perfect",
            "description": "Un contraste vif de nouilles dorées, de pousses blanches, d'herbes vertes, de cacahuètes fauves et de citron vert jaune vert vif. L'assiette sent le wok carbonisé et le tamarin.",
            "action": "Servir immédiatement pendant que les nouilles sont encore chaudes et que les germes sont froids et croquants."
          },
          {
            "state": "Overdone",
            "description": "Pad Thai est resté assis plus de 3 minutes — les nouilles s'agrippent, se réchauffent et se flétrissent, les pousses de haricots libèrent l'eau dans la base.",
            "action": "Servir immédiatement. Pad thai est un plat qui n'attend pas."
          }
        ]
      },
      "feelCue": "Le plat fini doit toucher au moins quatre textures en une seule bouchée : nouilles glissantes, oeufs crémeux, cacahuète croquante et germe de croûte froide — chacun présent et distinct."
    }
  ]
};
