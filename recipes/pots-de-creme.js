export default {
  "repoId": "master_french_pots_de_creme_001",
  "parentRepoId": null,
  "slug": "pots-de-creme",
  "author": "ForkRecipe Kitchen",
  "title": "Chocolat Pots de Crème",
  "description": "Des crèmes individuelles au chocolat cuites – plus riches que la crème brûlée, plus foncées dans la tasse, avec un wobble qui donne à une cuillère comme du velours. A peine serti, à peine doux, profondément amer, le café amplifie les notes les plus sombres du chocolat.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "desserts",
  "tags": [
    "pots-de-creme",
    "français",
    "chocolat",
    "Coutard",
    "cuits",
    "Chocolat foncé",
    "expresso"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "4 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 0,
    "bitter": 4,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Base",
      "name": "Chocolat noir 70%, finement haché",
      "ratioValue": 170,
      "defaultUnit": "g",
      "substitutions": [
        "65% chocolat pour un résultat légèrement plus sucré",
        "Valrhona Caraibe 66%"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Jaunes d'œufs (grandes)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Crème lourde (35%+ gras)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "crème unique pour un ensemble plus léger"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "lait d'avoine (les résultats seront moins riches)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 50,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brun clair pour une note plus complexe, mélasse"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Espresso ou café brassé très fort",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "1 c. à thé poudre instantanée d'espresso dissous dans 30 g d'eau chaude"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "pâte de haricots vanille"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Fleur de sel",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": [
        "Sel de mer maldon, broyé"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire fondre",
      "inputs": [
        "ing_01"
      ],
      "outputState": "melted_chocolate",
      "instructions": "Placez le chocolat finement haché dans un bol thermofuge sur un pot d'eau à peine mijotante — le bol ne doit pas toucher l'eau. Incorporer occasionnellement jusqu'à ce que le chocolat soit complètement fondu et parfaitement lisse. Alternativement, fondre dans un micro-ondes en 30 secondes éclate à 50% de puissance, en remuant entre chacun. Retirer de la chaleur dès que les derniers morceaux se dissolvent — la chaleur résiduelle finit le travail. Le chocolat fondu doit être lisse, brillant et entre 45°C et 50°C.",
      "visualCue": {
        "primaryTarget": "Une piscine lisse, brillante et complètement liquide de chocolat noir — pas de grumeaux, pas de prise, pas de grain. Acajou profond et réfléchissant uniformément.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les morceaux non fondus restent dans le chocolat liquide. Le mélange est grumeux et hétérogène.",
            "action": "Continuer à remuer à feu doux. Ne vous précipitez pas avec une chaleur plus élevée — le chocolat se saisit et devient granuleux en cas de surchauffe. La patience ici prévient le désastre."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse et liquide. Il coule d'une spatule dans un ruban brillant et non cassé. La température est chaude mais pas douloureusement chaude à un doigt plongé brièvement dans — environ 45°C.",
            "action": "Retirer du bain marie et réserver. Ne la laissez pas refroidir et solidifier avant de la combiner avec la base de crème."
          },
          {
            "state": "Overdone",
            "description": "Le chocolat s'est emparé — il est devenu granuleux, raide et terne, peut - être avec de la vapeur ou de l'eau qui s'est éclaboussée. Alternativement, il a été surchauffé et sent brûlé.",
            "action": "On peut parfois saisir du chocolat à la vapeur : ajouter une cuillère à soupe de crème chaude et remuer vigoureusement en cercles. S'il est brûlé, jetez - le et recommencez."
          }
        ]
      },
      "feelCue": "Touchez brièvement le dos de votre poignet au bol de chocolat fondu — il devrait se sentir chaud mais pas chaud, sur la température d'un bain chaud. Trop chaud et il fera cuire les jaunes d'œufs lorsqu'il sera combiné; trop frais et il saisira quand la crème se joindra."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_06",
        "ing_07"
      ],
      "outputState": "infused_cream",
      "instructions": "Mélanger la crème lourde, le lait entier, l'espresso et la vanille dans une casserole. Chauffer à feu moyen, en remuant de temps à autre, jusqu'à ce que des oscillations de vapeur et de petites bulles se forment autour du bord même de la poêle — juste en dessous d'une mijotée, autour de 80°C à 85°C. Ne pas faire bouillir : un ébullition échaudera le lait, encouragera le caillé lorsqu'il est ajouté aux jaunes et dissipera les délicats composés aromatiques de la vanille. Retirer du feu le moment où un anneau de bulles apparaît au bord de la poêle.",
      "visualCue": {
        "primaryTarget": "Liquide pâle, de couleur crème foncée (tinté faiblement par l'espresso) avec un anneau de bulles très fines au bord de la poêle et de vapeur stable. Pas encore bouillant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème n'est que tiède. Pas de vapeur, pas de bulles de bord. La vanille n'a pas eu le temps d'infuser et la température ne réchauffera pas adéquatement les jaunes d'oeufs pendant la tempérance.",
            "action": "Continuer à chauffer jusqu'à ce que les bulles de bord apparaissent. Le sous-chauffage signifie que la crème ne mettra pas les jaunes de façon adéquate pendant le tempérament et que la crème finie peut ne pas cuire à un ensemble propre."
          },
          {
            "state": "Perfect",
            "description": "Une fine bague de bulles apparaît au bord de la poêle. La vapeur augmente régulièrement. La cuisine sent le café noir et la vanille. Le thermomètre à sonde indique 82-85°C.",
            "action": "Retirer immédiatement du feu. Tempérer dans les jaunes en 2 minutes tout en restant très chaud."
          },
          {
            "state": "Overdone",
            "description": "La crème a atteint un point d'ébullition, elle s'est émoussée et le liquide a légèrement diminué. Ça sent le lait trop cuit.",
            "action": "Laisser refroidir 2 minutes avant de tempérer. La crème bouillante est ajoutée directement aux jaunes, elle peut les brouiller instantanément."
          }
        ]
      },
      "feelCue": "Tenez votre main à plat 10 cm au-dessus de la surface de la poêle — vous devriez sentir une chaleur claire et régulière monter. Si vous ne sentez rien, il n'est pas assez chaud. Si vous tirez votre main instinctivement, il est déjà trop chaud et peut être sur le point de bouillir."
    },
    {
      "nodeId": "step_3",
      "action": "Fouetter",
      "inputs": [
        "ing_02",
        "ing_05"
      ],
      "outputState": "yolk_mixture",
      "instructions": "Dans un grand bol, fouetter les jaunes d'œufs et le sucre de roulette jusqu'à ce qu'ils soient simplement combinés et légèrement pâles — environ 30 secondes de fouettage actif. Ne fouettez pas l'air dans le mélange de jaune : le but est un liquide lisse et uniforme qui se fondra facilement avec la crème chaude, pas une mousse qui fera cuire à une crème spongieuse. Le sucre doit être complètement dissous et aucune stries de sucre non dissous ne doit rester. Le mélange sera riche en jaune doré, légèrement visqueux et lisse.",
      "visualCue": {
        "primaryTarget": "Un liquide lisse, jaune doré légèrement pâle. Pas de grains de sucre visibles. Il coule du fouet dans un ruban lent et continu plutôt que dans des gouttes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains de sucre sont encore visibles dans le mélange. Les jaunes et le sucre ne sont pas entièrement combinés — striés et hétérogènes.",
            "action": "Encore 15 à 20 secondes. Le sucre doit se dissoudre complètement avant le tempérament ou la crème aura une texture sèche lorsqu'elle est fixée."
          },
          {
            "state": "Perfect",
            "description": "Doux, brillant, légèrement épaissi. Un ruban tiré à travers la surface tient pendant 2 secondes. Or pâle mais pas blanc — aucun excès d'air incorporé.",
            "action": "Préparez le mélange de jaune et attendez. Commencez immédiatement à tremper avec la crème chaude."
          },
          {
            "state": "Overdone",
            "description": "Vous avez fouetté les jaunes en mousse épaisse et pâle avec beaucoup d'air incorporé. La custarde fera cuire à une consistance spongieuse et mousseuse plutôt qu'un pot de crème dense et soyeux.",
            "action": "Continuez — la crème sera plus légère, mais toujours réglée. La prochaine fois, fouetter seulement jusqu'à ce que combiné, pas jusqu'à volumineux."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité de mélange de jaunes et de sucre entre vos doigts – il devrait être lisse et légèrement glissant, sans râpe. Toute rugosité du sucre non dissous persistera dans la crème finale."
    },
    {
      "nodeId": "step_4",
      "action": "Tempérer",
      "inputs": [
        "yolk_mixture",
        "infused_cream",
        "melted_chocolate",
        "ing_08"
      ],
      "outputState": "custard_base",
      "instructions": "Verser la crème infusée chaude dans le mélange de jaunes dans un ruisseau très mince, lent, fouettant constamment et doucement — le ruisseau ne devrait pas être plus large qu'un crayon. Ce réchauffement progressif empêche les jaunes de se brouiller. Lorsque toute la crème est incorporée, verser ce mélange sur le chocolat fondu et remuer lentement du centre vers l'extérieur jusqu'à ce que la base de crème soit complètement lisse et brillante. Ajouter la fleur de sel et remuer une fois. Plongez dans un tamis à mailles fines dans une cruche à verser pour enlever les fils d'œuf cuits et les motifs d'espresso. Éjaculez toutes les bulles de surface avec une cuillère — une surface pétillante se met à une finition mate.",
      "visualCue": {
        "primaryTarget": "Une crème lisse, brun foncé, brillante, sans bulles à la surface et sans fils d'oeuf visibles ni particules solides après déformation. La couleur est uniformément foncée et lustrée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Fils visibles d'œuf brouillé en suspension dans le liquide. Le mélange a l'air granuleux ou grumelé. Cela signifie que la crème a été ajoutée trop rapide et trop chaude.",
            "action": "Plongez fermement dans un tamis fin pour enlever l'œuf cuit. Si le brouillage est mineur, la crème tendue sera toujours bien réglée. Si majeur, remake."
          },
          {
            "state": "Perfect",
            "description": "Parfaitement lisse, brun chocolat profond, brillant, avec une versure propre. Pas de fils, pas de bulles, pas de bosses. Sensation intense de chocolat noir et de café.",
            "action": "Remplissez immédiatement les ramequins — la crème commence à se mettre une fois qu'elle contacte les ramequins froids. Verser dans un bain-marie préparé et cuire en 5 minutes."
          },
          {
            "state": "Overdone",
            "description": "La crème a été laissée assise dans le pot pendant plus de 10 minutes et a commencé à se fixer légèrement aux bords, devenant striée lorsqu'elle a été versée.",
            "action": "Incorporer doucement pour ré-homogèner. S'il s'est fixé de façon significative, réchauffer très doucement sur feu doux en remuant constamment à se détendre — c'est récupérable si pris tôt."
          }
        ]
      },
      "feelCue": "Versez un mince jet de crème sur le dos de votre main — il doit se sentir chaud mais ne pas brûler, et enveloppez votre peau uniformément dans une couche mince et sombre qui ne s'échappe pas immédiatement. Ce manteau vous dit que le chocolat est correctement incorporé et que la crème a suffisamment de corps pour se fixer."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire au four",
      "inputs": [
        "custard_base"
      ],
      "outputState": "finished_pots_de_creme",
      "instructions": "Préchauffer le four à 150°C (300°F). Disposer les petits ramequins ou les pots au four dans une boîte torréfaction profonde. Verser la crème à travers le tamis fin une fois de plus dans les ramekins, en remplissant chacun à juste sous la jante. Faites glisser l'étain dans le four et versez de l'eau très chaude dans l'étain pour monter à mi-chemin sur les côtés des ramequins. Couvrir l'étain entier de papier d'aluminium et cuire pendant 30 à 40 minutes jusqu'à ce que les citadines se fixent aux bords avec un frottement distinct au centre lorsque l'étain est bouché — comme une gelée lente et douce. Retirer du bain-marie, refroidir à la température ambiante, puis réfrigérer à découvert pendant au moins 3 heures avant de servir. Servir dans le pot, directement à la table.",
      "visualCue": {
        "primaryTarget": "Après le refroidissement: une surface crème sombre, mate, à peine dressée avec un donner doux lorsque le ramekin est incliné — il devrait wobble comme une unité unique, cohésive plutôt que slosh comme un liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface de la crème est liquide; l'inclinaison du ramekin le fait couler et slosh au lieu de trembler en masse. Le centre n'a pas encore été gelé.",
            "action": "Retourner au bain-marie et cuire encore 5 à 10 minutes. Ne pas augmenter la température — faible et lent est essentiel. Le custard se met en douceur ; la chaleur élevée le fait buller et le caillé."
          },
          {
            "state": "Perfect",
            "description": "Les bords sont fermement fixés et le centre oscille comme une unité lorsque le ramekin est bouché — comme une panna cotta très ferme, pas comme du liquide. Après refroidissement, une cuillère entre avec une légère résistance et la surface se ferme facilement derrière elle.",
            "action": "Refroidir et réfrigérer. Le refroidissement n'est pas facultatif: les pots chauds de crème sont sous-réglages. Ils atteignent leur densité parfaite seulement complètement froid."
          },
          {
            "state": "Overdone",
            "description": "La crème est complètement raide et n'a pas d'obstacle; elle a un trop grand poids et la surface peut présenter de fines fissures ou une texture légèrement granuleuse et brouillée sous la cuillère.",
            "action": "Servir avec beaucoup de crème douce non sucrée sur le dessus pour contrer la texture. La prochaine fois, vérifiez plus tôt et retirez-vous avec un wobble visible restant."
          }
        ]
      },
      "feelCue": "Après avoir refroidi, appuyez légèrement sur la surface de la crème avec un bout de doigt — il devrait à peine céder, comme presser une poire mûre froide, et revenir lentement et complètement. S'il coule et garde l'impression, il est sous-encastré; s'il est ferme et printanier comme du caoutchouc, il a trop cuit."
    }
  ]
};
