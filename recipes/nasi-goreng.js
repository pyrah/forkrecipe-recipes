export default {
  "repoId": "master_indonesian_nasi-goreng_001",
  "parentRepoId": null,
  "slug": "nasi-goreng",
  "author": "ForkRecipe Kitchen",
  "title": "Nasi Goreng",
  "description": "Le riz frit national de l'Indonésie — le riz vieux d'un jour sauté dans un wok chaud et criant avec de la pâte de crevettes, du kecap manis et du sambal, brouillé d'oeufs jusqu'à ce que chaque grain soit enrobé dans la glaçure sombre et sucrée et que les bords du wok fument.",
  "cuisine": "Indonésien",
  "culture": "Javanese",
  "category": "grains",
  "tags": [
    "par an",
    "javanais",
    "Riz frit",
    "kécap-manis",
    "œuf",
    "Pâte à crevettes",
    "nuit"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 4,
    "sour": 0,
    "bitter": 0,
    "umami": 5,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz jasmin cuit, froid et séparé",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "basmati vieux d'un jour",
        "riz à grains longs d'un jour"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Oeufs grands",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "Terasi (pâte de crevettes), grillé",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "1 c. à thé sauce de poisson + 1 c. à thé miso blanc (option végétalienne)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Masque de kécap (sauce de soja sucrée)",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": [
        "2 c. à soupe de soja régulier + 1 c. à thé de sucre de palme, mijoté pour dissoudre"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "sauce de soja ou kecap asine",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce de poisson"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Heat",
      "name": "Sambal oelek ou chili rouge frais, tranché",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "1 tsp sriracha"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Échalotes, tranchées finement",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "1 petit oignon rouge, finement haché"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile neutre (légume ou arachide)",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Échalotes frites, tranches de concombre, oignons de printemps et/ou oeufs frits pour servir",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparer",
      "inputs": [
        "ing_01",
        "ing_03"
      ],
      "outputState": "prepped_components",
      "instructions": "Brisez le riz froid d'un jour avec vos doigts ou une fourchette jusqu'à ce qu'il ne reste plus d'entailles — chaque grain doit être individuel et sec. Froide, grains séparés frire; le riz frais chaud vapeurs et se transforme en pâte. Si vous utilisez de la térasie solide (pâte de crevette), coupez la quantité requise et faites-la griller brièvement : enveloppez-la en feuilles et maintenez-la au-dessus d'une flamme à gaz faible pendant 1 minute par côté, ou faites frire dans une petite poêle jusqu'à ce qu'elle soit parfumée et légèrement émiettée. Le toast tue toute crudité de poisson et convertit la pâte en un puissant composé de noix. Écraser le térasi grillé dans un petit plat. Avoir tous les autres ingrédients mesurés et à portée de bras — nasi goreng se déplace rapidement.",
      "visualCue": {
        "primaryTarget": "Des grains de riz secs et séparés qui ressemblent à des perles individuelles plutôt qu'à une croûte. Térase grillée émiettée à une poudre foncée, légèrement sèche, intensément parfumée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains de riz sont encore collés ensemble dans des touffes. Le terasi est encore frais, piquant et ammoniaque.",
            "action": "Séparez tous les morceaux de riz avant que le wok ne chauffe — il n'y a pas de temps pour le faire une fois la cuisson commencée. Toast terasi plus longtemps à feu doux jusqu'à ce que la note d'ammoniaque pointue se convertisse à une profondeur torréfié et salée."
          },
          {
            "state": "Perfect",
            "description": "Le riz est complètement lâche et sec au toucher — les grains glissent de vos mains. Terasi est parfumé, légèrement sec, et sent la noix et très salé.",
            "action": "Installez votre station wok — huile, échalote, ail, térasie, riz et sauces à portée de bras. Chauffer le wok."
          },
          {
            "state": "Overdone",
            "description": "Les grains de riz ont été brisés — ils ont l'air écrasés ou pulvérisés aux bords. Terasi est brûlé et sent brûlé.",
            "action": "Procéder avec les grains cassés — la texture sera mushier mais la saveur n'est pas affectée. Jetez la térase brûlée et utilisez plutôt une plus petite quantité de sauce de poisson."
          }
        ]
      },
      "feelCue": "Pincez une petite poignée de riz cassé: il devrait couler à travers vos doigts comme du sable sec, pas de colle, pas de griffes. Une poignée collante prédit un wok collant."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "prepped_components",
        "ing_07",
        "ing_08",
        "ing_06",
        "ing_09"
      ],
      "outputState": "fragrant_wok_base",
      "instructions": "Chauffer un wok ou une grande poêle en fonte au-dessus de la plus haute flamme que vous avez jusqu'à ce qu'une goutte d'eau vaporise instantanément au contact — cela prend 2–3 minutes. Ajouter l'huile; elle doit s'arroser et mijoter immédiatement. Ajouter les échalotes tranchées et faire revenir pendant 60 secondes jusqu'à translucide et commencer à colorier. Ajouter l'ail haché et le térase émietté, presser le térase contre le wok chaud avec la spatule pour le briser. Faire revenir pendant 30 secondes — la cuisine se remplira d'un arôme puissant, salé, légèrement funky qui devient rapidement complexe et grillé. Ajouter le sambal et lancer pendant 15 secondes. Le wok devrait fumer légèrement.",
      "visualCue": {
        "primaryTarget": "Échalotes translucides, dorées, à l'ail parfumé, et térasie foncée, émiettée, dans un wok très aromatique, fumant légèrement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les échalotes sont encore blanches et ont une odeur crue. Terasi sent toujours le poisson cru et piquant plutôt que le goût grillé.",
            "action": "Le wok n'est pas assez chaud. Augmenter la chaleur au maximum. Nasi goreng nécessite wok hei — ce caractère fumé et chaud ne se développe que sur une flamme intense."
          },
          {
            "state": "Perfect",
            "description": "Les échalotes sont translucides avec des bords dorés. L'ail est parfumé et commence à devenir or. Terasi sent puissantment salé et grillé. Wok fume légèrement.",
            "action": "Poussez les aromatiques sur le côté, fendez les œufs au centre et brouillez-les immédiatement."
          },
          {
            "state": "Overdone",
            "description": "L'ail est devenu brun foncé ou noir, les échalotes sont carbonisées, et le térasi sent amer et acride.",
            "action": "Enlevez immédiatement les arômes brûlés — jetez si mal carbonisé, car l'ail brûlé rend le plat entier amer. Recommencer les aromatiques dans de l'huile fraîche si nécessaire."
          }
        ]
      },
      "feelCue": "La chaleur au bord du wok devrait être assez intense pour être inconfortable à distance. Au moment où les échalotes ont frappé, le grésillement devrait être un rugissement fort, agressif, pas un fizz poli."
    },
    {
      "nodeId": "step_3",
      "action": "Écrasement",
      "inputs": [
        "fragrant_wok_base",
        "ing_02"
      ],
      "outputState": "scrambled_egg_in_wok",
      "instructions": "Poussez les aromatiques d'un côté du wok. Casser les deux œufs dans l'espace vide. Laissez-les régler 10 à 15 secondes sans toucher — le jaune devrait commencer à se fixer aux bords. Puis brouillez-les à peu près avec la spatule, se cassant en gros caillés irréguliers. Avant que l'oeuf ne soit complètement réglé et bien qu'il ait l'air légèrement humide et brillant, repoussez les aromatiques sur les œufs et pliez tout ensemble. L'œuf partiellement coupé s'intègre mieux dans le riz que l'œuf brouillé entièrement cuit, qui s'agrippe séparément.",
      "visualCue": {
        "primaryTarget": "Grand caillé d'oeufs, dorés, irréguliers, légèrement brillants, mélangés à travers les aromatiques — pas entièrement réglé, encore un peu brillant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oeuf est encore liquide et arrosé, se regroupant au fond du wok sous les aromatiques.",
            "action": "Laissez cuire encore 10 secondes avant de plier — ajoutez le riz seulement lorsque l'oeuf est au moins à mi-chemin, ou le riz absorbera inégalement le liquide d'oeuf cru."
          },
          {
            "state": "Perfect",
            "description": "Grand, doux, légèrement humide cords dorés tout au long du wok. Toujours éblouissant mais tenant leur forme.",
            "action": "Ajouter immédiatement le riz — l'œuf finira la cuisson en se repliant dans le riz."
          },
          {
            "state": "Overdone",
            "description": "L'oeuf est entièrement serti, sec et cassé en petits miettes sèches.",
            "action": "Ajouter le riz immédiatement et procéder. L'œuf surcuit dans la nasi goreng est un défaut mineur — il sera caché dans le riz et la saveur n'est pas affectée."
          }
        ]
      },
      "feelCue": "Surveillez la surface de l'œuf tel qu'il se présente : la transition entre le lustré et le mat se produit en quelques secondes à cette chaleur. Au moment où la brillance commence à quitter la surface, il est temps de plier."
    },
    {
      "nodeId": "step_4",
      "action": "Découpe",
      "inputs": [
        "scrambled_egg_in_wok",
        "ing_01",
        "ing_04",
        "ing_05"
      ],
      "outputState": "glazed_nasi_goreng",
      "instructions": "Ajoutez le riz séparé au wok en deux ajouts, en jetant vigoureusement après chacun d'eux — utilisez une spatule et un mouvement rapide de scooping-and-flipping. Verser la manie du kecap et la sauce de soja régulière sur le riz (pas les aromatiques directement, qui peut brûler) et jeter en continu pendant 2–3 minutes. Chaque grain doit être recouvert d'un glaçure brun acajou foncé. Le riz peut craquer et sauter comme des grains individuels toast contre la surface du wok — c'est le wok hei que vous voulez. Goûtez et ajustez avec du soja ou du kecap manis. Tout de suite.",
      "visualCue": {
        "primaryTarget": "Grains recouverts d'une glaçure acajou foncé et brillant, uniformément colorés sans grains blanc pâle visibles et sans flaques foncées de sauce non absorbée au fond du wok.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des grains blancs pâles encore visibles parmi les grains glacés. Kecap manis est assis dans une piscine au fond du wok.",
            "action": "Mettre la chaleur plus vigoureusement et s'assurer que la chaleur est maximale. La sauce doit enrober tous les grains — ajouter un éclaboussure de manies de kecap et continuer à jeter."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain d'un brun acajou uniforme, brillant, légèrement sec. Le wok sent le soja caramélisé et le riz grillé. Cords d'oeufs distribués partout. Craquant audible.",
            "action": "Boucher — ajuster le sel ou la douceur — et assietter immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le riz a été pris sur le wok dans des patchs, les grains sentent brûlés, et des morceaux de croûte sombre sont distribués à travers le riz.",
            "action": "Retirer immédiatement du feu. Plier doucement pour mélanger — les morceaux brûlés ajoutent de l'amertume. La prochaine fois, ne laissez pas le riz immobile pendant plus de 5 secondes à feu maximum."
          }
        ]
      },
      "feelCue": "Coupez une cuillère et laissez-la retomber — chaque grain devrait rebondir et se séparer proprement plutôt que d'empiler. L'odeur doit être toute la fumée caramélisée et sucrée. Le bord du wok devrait encore être trop chaud pour toucher."
    },
    {
      "nodeId": "step_5",
      "action": "Garnir",
      "inputs": [
        "glazed_nasi_goreng",
        "ing_10"
      ],
      "outputState": "finished_nasi_goreng",
      "instructions": "Associez immédiatement la nasi grog — elle n'attend pas bien. Garnir d'un œuf frit (le côté du soleil vers le haut, le jaune qui coule), d'échalotes frites croustillantes éparpillées sur le dessus, de concombre tranché le long et d'oignon de printemps. Le jaune d'œuf frit, cassé à table, sert de sauce au riz. Les échalotes frites ajoutent une croûte finale et une douceur dont la recette a cruellement besoin après toute cette chaleur. Quelques tranches de concombre coupées à travers la richesse. Servir avec du sambal supplémentaire sur le côté pour ceux qui veulent plus de chaleur.",
      "visualCue": {
        "primaryTarget": "Un monticule d'acajou de riz couronné d'un oeuf parfaitement frit (ensemble blanc, jaune encore brillant et runny), dispersé avec des échalotes frites dorées, avec l'oignon émeraude de printemps et le concombre frais et pâle à côté.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le jaune d'œuf est solide. Les échalotes frites sont molles et pâles.",
            "action": "Cuire un œuf frais frit. Les échalotes frites doivent être ajoutées au dernier moment, ou à partir d'un lot frais, les échalotes molles vont à l'encontre du but de la garniture."
          },
          {
            "state": "Perfect",
            "description": "Blanc d'oeufs, complètement enroulé, opaque. Yolk un orange vif, bombé, et runny quand percé. Échalotes frites dorées et croquantes. Tout est assemblé et à la bonne température.",
            "action": "Apportez immédiatement à la table et dites à votre invité de casser le jaune d'abord."
          },
          {
            "state": "Overdone",
            "description": "La nasi grog a été plaquée et assise pendant plus de 5 minutes — le riz s'est soûlé de sa propre chaleur et a perdu la croûte.",
            "action": "Réchauffer dans un wok chaud avec une bruine d'huile pendant 60 secondes pour restaurer un peu de croquant. La nasi goreng est toujours la meilleure droite du wok."
          }
        ]
      },
      "feelCue": "La fourche parfaite devrait avoir des couches texturales : une échalote croquante frite sur le dessus, un grain de riz glacé à texture douce sous le dessous, un enrobage soyeux de jaune d'œuf, et une morsure de concombre propre et fraîche sur le côté pour rafraîchir la bouche entre bouches."
    }
  ]
};
