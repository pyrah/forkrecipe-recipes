export default {
  "repoId": "master_middle_eastern_lamb_kofta_001",
  "parentRepoId": null,
  "slug": "lamb-kofta",
  "author": "ForkRecipe Kitchen",
  "title": "Agneau Kofta",
  "description": "L'agneau moulu mélangé à la main avec de l'oignon, du persil et des épices chaudes, moulé sur des brochettes plates et grillé sur du charbon jusqu'à ce qu'il soit carbonisé à l'extérieur et juteux à l'intérieur.",
  "cuisine": "Moyen-Orient",
  "culture": "Levantine",
  "category": "proteins",
  "tags": [
    "kofta",
    "agneau",
    "Moyen-Orient",
    "grillé",
    "épicé",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "agneau moulu (20 à 25 % de gras, pas trop maigre)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "boeuf haché (80/20)",
        "agneau et boeuf mélangés"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon jaune (grâpé sur une boîte)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Persil à feuilles plates (finement haché)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "coriandre fraîche pour un personnage différent"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Toussages"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poivre de Cayenne ou flocons de chili d'Alep",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "poudre de chili rouge"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Poivre noir fraîchement moulu",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Graisse d'agneau ou huile neutre (si la viande est très maigre)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Sumac (pour la finition)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "une pression de citron"
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
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "kofta_mixture",
      "instructions": "Pressez l'oignon râpé dans un chiffon propre ou entre vos paumes et arrosez le plus de liquide possible – l'excès d'eau d'oignon libère le mélange et le kofta ne tiendra pas sur la brochette. Mélanger l'oignon égoutté avec l'agneau moulu, le persil, toutes les épices et le sel dans un grand bol. Mélanger et pétrir à la main pendant 3 à 4 minutes, non seulement en remuant, mais en pressant, en pliant et en appuyant sur le côté du bol. Cela développe les protéines de myosine dans l'agneau, liant le mélange de sorte qu'il conserve sa forme sans aucun œuf ajouté ou chapelure. Le mélange doit passer d'un mélange lâche et émietté à un mélange lisse, collant et cohérent.",
      "visualCue": {
        "primaryTarget": "Après un mélange approfondi, le mélange de kofta est une pâte rose-rouge foncé uniforme avec des taches visibles de persil vert et d'épices partout. Il tient sa forme lorsqu'il est pressé dans une boule et ne craque pas ou ne s'écroule pas aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est toujours émietté et lâche — pincée entre les doigts, il tombe en morceaux et la graisse est encore séparée de la viande. Les épices n'ont pas été entièrement incorporées.",
            "action": "Continuer à pétrir pendant 2 à 3 minutes. La liaison provient du travail des protéines; elle ne peut pas être précipitée."
          },
          {
            "state": "Perfect",
            "description": "Doux, légèrement téméraire et uniforme — une pincée entre les deux doigts colle ensemble sans tomber en morceaux. Lorsque vous claquez une poignée contre le bol, il atterrit avec un thwack satisfaisant et tient sa forme. Le mélange semble dense et collant.",
            "action": "Couvrir et réfrigérer pendant au moins 30 minutes pour permettre aux protéines de se resserrer davantage et aux épices de fleurir dans la graisse."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a été pétri de façon si agressive que la graisse s'est séparée et mise en commun, et la texture est farineuse et légèrement grasse plutôt que lisse.",
            "action": "Refroidissez le mélange pendant 20 minutes puis retravaillez brièvement avec les mains froides — le froid aidera à ré-émulsionner le gras dans la viande."
          }
        ]
      },
      "feelCue": "Au moment où le mélange est correctement développé, il change de caractère : il devient nettement plus collant et plus lourd, s'accrochant à votre paume et résistant lorsque vous essayez de l'éplucher. C'est la liaison des protéines — vous pouvez sentir la cohésion qui se forme sous vos mains."
    },
    {
      "nodeId": "step_2",
      "action": "Forme",
      "inputs": [
        "kofta_mixture"
      ],
      "outputState": "skewered_kofta",
      "instructions": "Mouiller les mains avec de l'eau froide pour éviter de coller. Prenez une poignée de mélange réfrigéré (environ 80 à 100 g) et moulez-la autour d'une brochette en métal plat, en commençant par le centre et en pressant fermement la viande sur la brochette pendant que vous travaillez vos mains vers chaque extrémité. Le kofta doit avoir une longueur d'environ 15 à 18 cm, d'environ 2 à 2,5 cm d'épaisseur, avec des extrémités légèrement effilées qui se taisent pour fixer la viande à la brochette. Pressez fermement — surtout près des extrémités — pour sceller la viande sur le métal. Un kofta correctement attaché ne tourne pas autour de la brochette lorsque vous le tournez. Placer le kofta en forme sur un plateau et réfrigérer pendant 15 minutes pour le raffermir avant de griller.",
      "visualCue": {
        "primaryTarget": "Un cylindre allongé et uniforme de viande sur la brochette, légèrement conique aux deux extrémités, avec une surface lisse montrant des marques de pression des doigts faibles. La surface semble étroite et cohésive — pas de fissures ni de trous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le kofta est grossièrement façonné mais la viande est lâche autour de la brochette et tourne librement lorsque la brochette est tournée. Il y a des fissures et des trous dans la surface.",
            "action": "Retirer de la brochette, refroidir le mélange pendant 10 minutes et reformer, presser plus fermement. La surface doit être complètement scellée."
          },
          {
            "state": "Perfect",
            "description": "Un cylindre lisse et dense solidement lié à la brochette. Il ne tourne ni ne glisse lorsque la brochette est tournée. Levant la brochette, le kofta s'accroche sans s'accrocher ni craquer.",
            "action": "Réfrigérer pendant 15 minutes avant de griller pour raffermir la graisse et s'assurer que le kofta conserve sa forme sous le premier souffle de chaleur de charbon."
          },
          {
            "state": "Overdone",
            "description": "Le kofta a été pressé et retravaillé tellement que la graisse se sépare visiblement à la surface et le mélange commence à avoir l'air farineux.",
            "action": "Refroidir immédiatement sans autre manipulation. Griller à partir du froid pour aider la graisse à revenir dans le mélange pendant qu'il chauffe."
          }
        ]
      },
      "feelCue": "Poignez la brochette et faites-la tourner — le kofta devrait se déplacer avec elle comme une seule pièce solide. Donner à la fin de la kofta une pression ferme: il doit se sentir dense et revenir immédiatement comme un mastic ferme, pas squishy ou friable."
    },
    {
      "nodeId": "step_3",
      "action": "Grille",
      "inputs": [
        "skewered_kofta"
      ],
      "outputState": "grilled_kofta",
      "instructions": "Préparez une grille de charbon avec une zone de chaleur élevée — les charbons devraient être à la chaux et briller intensément. Si vous utilisez une grille à gaz, préchauffez au maximum. Huilez la grille légèrement. Placez les brochettes sur la grille et faites griller, tournant un quart de tour toutes les 90 secondes, pour un total de 6 à 8 minutes. Vous voulez que les quatre côtés se développent : des traces d'omble profonde, des cloques et des caramélisés avec de la graisse fondue et des flocons de charbons ci-dessous. Le kofta devrait avoir un omble gras à l'extérieur pendant que l'intérieur reste juteux — une température interne de 70 °C / 158 °F est suffisante pour la viande hachée bien mélangée. Ne pas presser avec une spatule; cela presse les jus.",
      "visualCue": {
        "primaryTarget": "Les kofta sont profondément carbonisés de tous les côtés — brun foncé à presque noir dans les taches, avec des lignes de grill où ils reposaient sur la grille, et la surface scintille avec rendu gras d'agneau. Les gouttes de graisse provoquent de courtes éruptions sur les charbons ci-dessous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les kofta sont gris et pâles, à peine colorés, toujours étroitement attachés à la brochette et se sentent fermes et printanières dans l'ensemble — le centre est encore cru et rose.",
            "action": "Ne les déplacez pas encore s'ils s'en tiennent à la grille — attendez 30 secondes de plus et ils se relâcheront lorsqu'ils seront bien mis en mer. Continuer à tourner toutes les 90 secondes."
          },
          {
            "state": "Perfect",
            "description": "omble caramélisé profond de tous les côtés, scintillant de graisse, parfumé d'épices et de fumée. Tiré de la brochette, chaque kofta a une croûte distincte qui donne à une légère pression, et l'intérieur est à peine rose et abondamment juteux.",
            "action": "Servir immédiatement, éparpillé de sumac et aux côtés de pain plat, de tahini et de salade."
          },
          {
            "state": "Overdone",
            "description": "L'extérieur est uniformément noir avec de la viande sèche, grise et compacte à l'intérieur. Le kofta se sent léger et raide.",
            "action": "Couper immédiatement et servir avec une sauce — la viande bénéficiera de l'humidité du tahini, du labneh ou d'une salade d'herbe hachée pour compenser ce qui a été perdu au feu."
          }
        ]
      },
      "feelCue": "Appuyez légèrement sur le côté du kofta avec un doigt: il devrait revenir fermement mais pas rigidement — comme appuyer sur une figuier mûre. S'il se sent complètement solide et inébranlable, il est trop cuit. Si elle se sent entièrement douce et pâteuse, elle a besoin de plus de temps. Vous devriez également entendre un grésillement constant comme la graisse coule sur les charbons — ce son est saveur en temps réel."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir",
      "inputs": [
        "grilled_kofta",
        "ing_11"
      ],
      "outputState": "finished_lamb_kofta",
      "instructions": "Glissez le kofta des brochettes sur un plateau de service ou des assiettes individuelles avec une traction rapide et confiante — ils devraient se libérer proprement. Scatter généreusement avec le sumac, qui ajoute une brillance tarte fruitée qui coupe la richesse de la graisse d'agneau et soulève le plat entier. Servir immédiatement avec du pain plat chaud, un persil haché et une salade de tomates, de la sauce tahini et des cornichons. Kofta doit être mangé au moment où ils viennent de la grille — ils perdent leur succulence rapidement quand ils refroidissent et la graisse commence à se solidifier.",
      "visualCue": {
        "primaryTarget": "Kofta juteux croustillé d'omble sur la plaque, pulvérisé avec du sumac rouge-violet profond, avec du gras rendu brillant sur la surface. Dans la lumière du grill, ils ressemblent à des bûches d'acajou.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sumac n'a pas été appliqué et le kofta semble uni — l'acidité du sumac n'est pas seulement décorative mais essentielle à l'équilibre du plat.",
            "action": "Ajoutez maintenant le sumac pendant que le kofta est encore chaud et tiendra la poudre."
          },
          {
            "state": "Perfect",
            "description": "Acajou kofta, brillant avec de la graisse rendue, poussière avec la bourgogne de sumac, chaud et parfumé. Couper ouvert, le centre est humide et à peine rose, avec de la graisse visible et les épices distribuées à travers.",
            "action": "Mangez immédiatement, avec du pain plat plié autour de la viande et tout le reste sur l'assiette."
          },
          {
            "state": "Overdone",
            "description": "Les kofta ont refroidi sur l'assiette — la graisse commence à se poser sur la surface et l'intérieur a perdu son rose et est devenu un gris uniforme.",
            "action": "Réchauffer brièvement les charbons restants ou sous une grille. Un kofta refroidi est comestible mais pas l'expérience qu'il devrait être."
          }
        ]
      },
      "feelCue": "Agitez à travers la croûte d'omble d'un kofta frais et ressentez le contraste : un extérieur croustillant et légèrement fragile qui laisse place à un intérieur dense et juteux qui inonde de graisse et de jus parfumé d'épices. Ce moment — lorsque la croûte se brise et que l'intérieur se répand — est la promesse complète du plat livré."
    }
  ]
};
