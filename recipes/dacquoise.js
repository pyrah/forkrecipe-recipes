export default {
  "repoId": "master_french_dacquoise_001",
  "parentRepoId": null,
  "slug": "dacquoise",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Noisette Dacquoise",
  "description": "Crisp, disque de meringue bleuté soutenu par la farine de noisette grillée, en couches de crème au beurre de praline – croquant aux bords, croustillant au centre, et avec une richesse qui laisse lentement place à la levée propre du sucre fouetté.",
  "cuisine": "Français",
  "culture": "Français",
  "category": "desserts",
  "tags": [
    "dacquoise",
    "meringue",
    "Noisette",
    "français",
    "Sans gluten",
    "cake-couche",
    "pâtisserie"
  ],
  "difficulty": 4,
  "activeTime": "60 min",
  "totalTime": "4 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 5,
    "salty": 1,
    "sour": 0,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Blancs d'oeufs (large, température ambiante, aucune trace de jaune)",
      "ratioValue": 6,
      "defaultUnit": "whites",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Farine de noisettes",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "Farine d'amande"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre (poncelé)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé (doublé, pour crème de beurre de praline)",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Pâte de praline (hazelnut, magasin acheté ou maison)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "beurre d'arachide lisse pour un registre différent"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Binder",
      "name": "Jaunes d'œufs (pour pâte à bombe)",
      "ratioValue": 3,
      "defaultUnit": "yolks",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_03"
      ],
      "outputState": "toasted_hazelnut_flour",
      "instructions": "Si à partir de noisettes entières: rôtir à 175 C (350 F) pendant 12-15 minutes, frotter dans une serviette de cuisine pour enlever les peaux, puis l'impulsion dans un robot alimentaire avec le sucre glaçant jusqu'à fin mais pas de pâte. Si vous utilisez de la farine de noisette pré-moulue : étaler sur un plateau et faire griller à 160 C pendant 8-10 minutes, en remuant une fois, jusqu'à odorat et légèrement doré. Laisser refroidir complètement avant utilisation.",
      "visualCue": {
        "primaryTarget": "Farine de noisette fine et sèche de couleur bronzée chaude, visiblement plus foncée que crue, avec de petites taches dorées. L'odeur est riche, noisette et chaude.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La farine est encore de l'ivoire pâle. L'odeur crue et légèrement amère des noix intactes reste.",
            "action": "Retourner au four 3-5 minutes de plus, en regardant attentivement."
          },
          {
            "state": "Perfect",
            "description": "Couleur dorée avec des taches foncées de peaux grillées. Remplit la cuisine d'un arôme de noisette chaud et rôti. Sécher au toucher.",
            "action": "Laisser refroidir à température ambiante avant de se plier en meringue — la farine chaude dégonflera instantanément les blancs."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé, en approche brûlée. Une odeur amère plutôt que noisette.",
            "action": "La farine de noisette brûlée détruit le dacquoise avec amertume."
          }
        ]
      },
      "feelCue": "La farine de noisette bien grillée, pincée entre deux doigts, est sèche et légère, ce qui libère une vague immédiate d'odeur de noisette rôtie, comme l'espresso fraîchement moulu, mais plus chaude."
    },
    {
      "nodeId": "step_2",
      "action": "Whip",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_05"
      ],
      "outputState": "stiff_meringue",
      "instructions": "Dans un bol soigneusement propre et sec, fouetter les blancs d'oeufs avec du sel à vitesse moyenne jusqu'à ce qu'ils soient mousseux et opaques. Augmenter à moyenne-élevée et ajouter le sucre de castre une cuillère à soupe à la fois sur 3-4 minutes. Continuez à fouetter jusqu'à ce que la meringue soit raide, très brillante, et que le sucre soit complètement dissous (rub entre les doigts — pas de graisse). La meringue devrait se tenir dans des sommets fermes qui ne s'enfoncent pas du tout.",
      "visualCue": {
        "primaryTarget": "Blanc brillant, meringue brillant qui se tient dans des pics fermes, droits — le pic se recourbe légèrement mais le corps reste complètement rigide. On dirait du satin blanc poli.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pics se plient doucement et la meringue se sent mal en frottant — du sucre non dissous. La meringue semble terne et légèrement humide.",
            "action": "Continuer à fouetter sur moyenne-élevé pendant 2-3 minutes de plus. Tester le sucre dissous en frottant entre le doigt et le pouce."
          },
          {
            "state": "Perfect",
            "description": "Ferme, brillant et complètement lisse. Les pics raides se tiennent debout sans s'enfoncer. Pas de grittness. Lorsque le bol est renversé, la meringue ne glisse pas.",
            "action": "Pliez immédiatement dans le mélange de noisettes."
          },
          {
            "state": "Overdone",
            "description": "Le meringue est sec, grumeux et n'est plus brillant. On dirait de la laine de coton et des larmes lorsqu'elles sont levées.",
            "action": "Malheureusement, il n'est pas possible de récupérer — les blancs trop fouettés produisent un dacquoise qui s'émiette plutôt que d'avoir la morsure caractéristique de la croûte."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité de meringue entre votre index et le pouce — il devrait se sentir soyeux et frais, avec zéro grain. Toute trace de cristaux de sucre signifie encore deux minutes de fouettage."
    },
    {
      "nodeId": "step_3",
      "action": "Plier",
      "inputs": [
        "stiff_meringue",
        "toasted_hazelnut_flour",
        "ing_04"
      ],
      "outputState": "dacquoise_batter",
      "instructions": "Givrer le sucre sur la farine de noisette grillée et mélanger. Travailler rapidement, plier le mélange de noisettes dans la meringue en trois ajouts à l'aide d'une grande cuillère en métal ou d'une spatule plate. Coupez à travers le centre, balayez et retournez — ne remuez pas en cercles. Le mélange se dégonflera quelque peu, ce qui est attendu. Arrêtez quand aucune stries de meringue blanche ne sont visibles.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse à cuiller de couleur beige pâle, plus foncée que la meringue pure, plus légère que la farine de noisette seule. Tient une forme lorsqu'elle est dollopée mais n'est pas raide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries de meringue blanches encore visibles. La pâte est encore à deux tons quand elle est écopée.",
            "action": "Trois autres coupures délibérées. Travaillez de manière décisive mais pas à la hâte."
          },
          {
            "state": "Perfect",
            "description": "Couleur beige pâle uniforme. La pâte tient un monticule doux lorsqu'elle est cuillé mais s'éteint lentement pendant 10 secondes.",
            "action": "Tuyauter ou se répandre immédiatement dans les cercles — la pâte dégonfle si elle reste en attente."
          },
          {
            "state": "Overdone",
            "description": "Le battement est devenu liquide et se répand immédiatement à plat sur la cuillère. La structure meringuée a été détruite.",
            "action": "Étendre immédiatement en couches minces et cuire comme si — le dacquoise sera plus dense mais toujours comestible."
          }
        ]
      },
      "feelCue": "Chaque pli doit répondre à la résistance de la lumière et ensuite se produire doucement — le rythme est lent et délibéré, comme retourner une grande dune de neige sans l'effondrer."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "dacquoise_batter"
      ],
      "outputState": "baked_dacquoise_discs",
      "instructions": "Préchauffer le four à 150 C (300 F) ventilateur. Dessiner trois cercles de 20 cm sur du papier à cuisson, retourner le papier. Piper ou étaler la pâte uniformément dans les cercles à environ 1,5 cm d'épaisseur. Cuire 30-35 minutes jusqu'à ce que la surface soit légèrement dorée et ferme au toucher. Éteignez le four et installez la porte ouverte 2cm; laissez le dacquoise à l'intérieur pendant 30 minutes pour sécher lentement. Cela donne la croûte sèche caractéristique à l'intérieur mâché.",
      "visualCue": {
        "primaryTarget": "Disques ivoire beige pâle avec une surface sèche légèrement dorée. Les bords sont légèrement plus foncés. La surface doit être ferme et papier lorsqu'elle est tapée, et non collante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est encore tacky et donne à la légère pression des doigts comme un guimauve. La dacquoise collera au papier une fois pelé.",
            "action": "Revenez au four 5-8 minutes de plus et reposez-vous ensuite dans le four ouvert."
          },
          {
            "state": "Perfect",
            "description": "Surface dorée claire, papier sec au toucher. Soulève proprement du papier de cuisson. Le dessous a une fine croûte brun caramel. Des odeurs de noisettes grillées et de sucre.",
            "action": "Refroidir complètement sur un rack avant de superposer — le dacquoise chaud absorbe l'humidité de la crème et adoucit."
          },
          {
            "state": "Overdone",
            "description": "La surface est profondément dorée et les bords sont sombres. Le disque s'est aplati et est entièrement sec et fragile, sans mâcher.",
            "action": "Utiliser immédiatement — la dacquoise surcuite devient très fragile et les couches se briseront lorsqu'elles seront coupées."
          }
        ]
      },
      "feelCue": "Une dacquoise bien séchée semble creuse lorsqu'elle est tapotée — un clic léger et sec plutôt qu'un bruit terne. La face inférieure doit se détacher du papier avec une touche satisfaisante aux bords."
    },
    {
      "nodeId": "step_5",
      "action": "Crème",
      "inputs": [
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "praline_buttercream",
      "instructions": "Battre le beurre ramolli jusqu'à très pâle et moelleux, environ 5 minutes. Dans un bol séparé, fouetter les jaunes d'œufs jusqu'à ce qu'ils soient pâles. Faire une pâte à bombe : faire bouillir le sucre de roulette avec un peu d'eau jusqu'à 121 C (250 F) étape de balle molle, puis verser lentement sur les jaunes fouettants. Whip jusqu'à ce que ça refroidisse. Battre progressivement la pâte à bomber dans le beurre, puis battre dans la pâte de praline. La crème au beurre doit être lisse, pipeable, et tenir un pic ferme. Assemblez le dacquoise : disque dacquoise, crème au beurre, dacquoise, crème au beurre, dacquoise. Refroidir 1 heure avant de couper.",
      "visualCue": {
        "primaryTarget": "Pale caramel-golde crème au beurre qui tient propre, des pics définis lorsque la pagaie est levée. Doux et soyeux sans morceaux de beurre visible ni poches d'air.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème de beurre a l'air cassée et caillée: des morceaux de beurre jaune flottant dans du liquide. Le beurre était trop froid lorsqu'il était ajouté à la pâte à bombe chaude.",
            "action": "Continuez à battre à vitesse moyenne. Il émulsifiera à mesure que la température s'équilibre. Si elle est toujours cassée après 5 minutes, réchauffez doucement le bol avec un sèche-cheveux tout en battant."
          },
          {
            "state": "Perfect",
            "description": "Crémeux, doux, tient un ruban ferme. Or de la pâte de praline. Goûts de caramel de noisette et de beurre.",
            "action": "Utiliser immédiatement ou réfrigérer, battre brièvement avant utilisation."
          },
          {
            "state": "Overdone",
            "description": "Graisse, texture granuleuse. La crème au beurre a été battue trop longtemps et le beurre s'est séparé des bords.",
            "action": "Réfrigérer 20 minutes et battre à nouveau à vitesse moyenne pour réémulsionner."
          }
        ]
      },
      "feelCue": "La crème au beurre de praline bien faite devrait être fraîche et épaisse sur la spatule; elle tient une rainure propre lorsqu'elle est traînée, et la praline donne un léger gras qui fond instantanément sur la langue."
    }
  ]
};
