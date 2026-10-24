export default {
  "repoId": "master_lebanese_baba_ganoush_001",
  "parentRepoId": null,
  "slug": "baba-ganoush",
  "author": "ForkRecipe Kitchen",
  "title": "Baba Ganoush",
  "description": "Des aubergines entières ont été brûlées directement au-dessus d'une flamme ouverte jusqu'à ce que la peau soit noire de cendres et que l'intérieur s'effondre dans une crème tremblante et parfumée de fumée.",
  "cuisine": "Libanais",
  "culture": "Levantine",
  "category": "condiments",
  "tags": [
    "trempette",
    "aubergines",
    "lébanèse",
    "fumé",
    "Tahini",
    "lévantine",
    "végétarien",
    "végétalien"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 3,
    "bitter": 2,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Grandes aubergines",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": [
        "Aubergines italiennes (utilisation 4)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Tahini (pâte de sésame brut)",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": [
        "Tahini léger"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": [
        "vinaigre de vin blanc (1,5 c. à soupe)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Giroves d'ail, brutes",
      "ratioValue": 2,
      "defaultUnit": "cloves",
      "substitutions": [
        "à l'ail rôti (3 girofles, moelleux)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Persil à feuilles plates, approximativement haché",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "menthe"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": [
        "paprika fumé"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "charred_eggplant",
      "instructions": "Placer l'ensemble des aubergines non coupées directement sur la grille d'un brûleur à gaz sur la flamme la plus élevée. Si vous avez un poêle électrique, utilisez le grilleur sur son réglage le plus haut avec les aubergines à 5 cm de l'élément, tournant toutes les 5 minutes. Sur une flamme à gaz, les aubergines siffleront, sauteront et pleureront — c'est l'humidité qui s'échappe et c'est exactement juste. En utilisant de longues pinces, tourner les aubergines toutes les 3-4 minutes de sorte que tous les côtés char uniformément. La peau externe devrait devenir complètement mate-noir et commencer à craquer et à peler. Cela prend 15-20 minutes au total. Ne le précipitez pas: l'omble profond est la source de la complexité fumée qui définit baba ganoush — une aubergine pâle et bluffée au four fait une bonne trempe mais pas celle-ci. Lorsque l'aubergine s'effondre et donne à la pression de tonneau au centre, c'est fait.",
      "visualCue": {
        "primaryTarget": "L'aubergine est noire mate et profondément carbonisée tout autour, visiblement dégonflée, et s'est effondrée au milieu. La peau est fissurée et enroulée. Le jus court sur la grille du brûleur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau a quelques taches noires, mais de grandes zones restent vert-violet et l'aubergine se sent toujours ferme et pleine lorsqu'elle est pressée avec des pinces. La chair à l'intérieur ne s'effondre pas encore.",
            "action": "Continuer sur la flamme, en concentrant les côtés non chargés sur le point le plus chaud. Encore 5-8 minutes."
          },
          {
            "state": "Perfect",
            "description": "Tout noir partout. L'aubergine a perdu un tiers de son volume et s'effondre lorsqu'elle est retenue. L'intérieur se sent liquide et lâche à travers les pinces. La fumée augmente continuellement.",
            "action": "Transférer dans une calandre sur un bol pour attraper le liquide amer. Pierce avec une fourchette pour encourager le drainage."
          },
          {
            "state": "Overdone",
            "description": "La peau a brûlé dans des endroits et des cendres blanches se forment. L'intérieur est peut-être en train de sécher plutôt que de s'évaporer. Une odeur amère et acride plutôt que de la fumée sucrée.",
            "action": "Transfert immédiat. La chair droite contre la peau peut être légèrement amère — grattez généreusement et jetez ces morceaux gris foncé lors du pelage."
          }
        ]
      },
      "feelCue": "Lorsque vous appuyez sur l'aubergine carbonisée avec des pinces, vous devriez sentir presque aucune résistance — il devrait donner comme un ballon d'eau, slotant doucement. La cuisine se remplit d'une fumée profonde et sucrée qui enveloppe l'arrière de votre gorge."
    },
    {
      "nodeId": "step_2",
      "action": "Filtrer",
      "inputs": [
        "charred_eggplant"
      ],
      "outputState": "drained_pulp",
      "instructions": "Placez les aubergines carbonisées dans une calandre sur un bol et laissez-les refroidir à la vapeur pendant 15 minutes. Une fois assez frais pour manipuler, épluchez la peau carbonisée avec vos mains, en utilisant une cuillère pour gratter les bouts noirs tenaces. Ne rincer pas la chair sous l'eau — vous laverez la fumée. Quelques petites taches de char dans la chair sont authentiques et désirables. Placer la chair pelée dans la calandre et utiliser une fourchette pour la déchiqueter en longs brins, permettant ainsi à plus de liquide de s'écouler. Si la chair est très humide, repliez-la dans une serviette de cuisine propre et pressez doucement. Plus vous retirez de liquide, plus la trempe finale est concentrée. Hacher ou écraser à peu près la chair sur la planche à découper — la texture doit rester un peu grossière, pas complètement lisse.",
      "visualCue": {
        "primaryTarget": "Des brins de chair pâle ivoire-tan avec de faibles taches d'omble, empilés dans la calandre. La chair est humide, mais pas baignée. Une goutte lente de la calandre est encore visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La chair est encore chaude et libère un flux constant de liquide aqueux dans le bol. Il semble très humide et presque translucide.",
            "action": "Attendez — ne vous précipitez pas dans le bol de mélange. Un égouttage supplémentaire de 5 minutes permet d'économiser la texture de la trempe finale."
          },
          {
            "state": "Perfect",
            "description": "La chair est assez fraîche pour être manipulée, humide mais pas humide. Soulevée dans une main, aucun liquide ne s'épuise. Les brins se tiennent lâchement avec une couleur dorée pâle et des taches de char visibles.",
            "action": "Hacher et transférer dans le bol à mélanger."
          },
          {
            "state": "Overdone",
            "description": "Vous avez attendu trop longtemps et la chair commence à sécher à la surface. La couleur est légèrement plus oxydée — gris-brun plutôt que bronzée.",
            "action": "Continuez immédiatement. Dressez une cuillère à café d'huile d'olive dessus pour éviter toute oxydation."
          }
        ]
      },
      "feelCue": "La chair d'aubergine bien drainée se sent veloutée et légèrement soyeuse entre les doigts — fraîche, humide mais pas humide, donnant complètement comme des courgettes à vapeur. L'odeur est de la fumée de bois sucrée sous le couvert d'une note végétale verte."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "drained_pulp",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_08"
      ],
      "outputState": "seasoned_dip",
      "instructions": "Couper les gousses d'ail en pâte avec le couteau plat et une pincée de sel, ce qui libère l'allicine et apprivoise la bouchée crue. Ajouter la pâte d'ail, le tahini, le jus de citron, le cumin et le sel à l'aubergine. Pliez tout ensemble avec une fourchette, laissant la texture agréablement rugueuse plutôt que mélangée lisse. Goûter de façon agressive : la trempette doit être fumée simultanément, noix (du tahini), vive (du citron), ailée et salée. Si le goût est plat, ajouter du sel. Si elle a un goût amer, ajouter le citron. Si le tahini est écrasant, ajoutez une autre cuillère à soupe de citron. Le tahini saisira et épaissira quand le citron sera ajouté — c'est exact. Plier plutôt que remuer, en préservant la texture fibreuse de l'aubergine. Reposez-vous au moins 15 minutes avant de servir afin que les saveurs s'intègrent pleinement.",
      "visualCue": {
        "primaryTarget": "Une trempette rugueuse et texturée avec des brins d'aubergine visibles. De couleur gris-tan pâle, pas uniformément lisse. Le tahini a légèrement blanchi le mélange.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les composants sont visibles dans des poches séparées: tahini blanc, jus de citron jaune et brins d'aubergine non encore collés dans une trempe unifiée.",
            "action": "Plier plus délibérément, travailler du bas du bol vers le haut. Le tahini a besoin d'être distribué, non mélangé dans une pâte."
          },
          {
            "state": "Perfect",
            "description": "Un plongeon cohésif et texturé où tous les éléments sont intégrés. La fumée est avant et présente, suivie de la noisette, puis de l'acide. La texture est quelque part entre l'hummus et la purée de pommes de terre — pas une purée.",
            "action": "Transférer dans un bol de service, faire un puits au centre, arroser l'huile d'olive et garnir."
          },
          {
            "state": "Overdone",
            "description": "Vous avez plié si vigoureusement la trempe est devenue lisse et pâte-comme, perdant sa texture. Les tahini ont peut-être légèrement fendue, montrant des stries jaunes grasses.",
            "action": "Ajouter une cuillère à soupe de jus de citron et plier doucement — il réémulsionnera. La texture a disparu mais la saveur est bonne."
          }
        ]
      },
      "feelCue": "Baba ganoush prêt à servir doit tomber d'une cuillère dans une seule goutte lente et lourde — épaisse et cohésive, pas assez mince pour verser et pas assez raide pour trancher."
    },
    {
      "nodeId": "step_4",
      "action": "Dresser",
      "inputs": [
        "seasoned_dip",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_baba_ganoush",
      "instructions": "Déposer la baba ganoush dans un grand bol peu profond et utiliser l'arrière de la cuillère pour créer un puits de balayage au centre. Arrosez généreusement avec la meilleure huile d'olive que vous ayez — il se baignera dans le puits et traversera les vallées de la surface texturée du plongeon. Dispersez le persil haché sur le dessus. Servir à la température ambiante avec des pita frais, des légumes ou dans le cadre d'un mezze. Baba ganoush est toujours mieux le jour où il est fait — la fumée se dissipe du jour au lendemain et ce qui était vibrant devient simplement compétent.",
      "visualCue": {
        "primaryTarget": "Un plongeon bombé avec une piscine centrale d'huile d'olive vive, éparpillé de persil vert vif. La surface a une texture visible — pas vitreuse et lisse comme l'hummus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La trempette semble sèche et l'huile d'olive est assise sur le dessus sans absorber. Le persil semble clairsemé et la présentation est plate.",
            "action": "Ajouter plus d'huile d'olive et étaler avec l'arrière de la cuillère pour créer un puits plus spectaculaire. Utilisez plus de persil."
          },
          {
            "state": "Perfect",
            "description": "La piscine d'huile prend la lumière au centre et la texture rugueuse de l'aubergine crée des vallées et des pics naturels. Le vert du persil contraste avec le gris pâle. Sens de fumée, de sésame et de citron simultanément.",
            "action": "Servir dans les 2 heures. Ne pas réfrigérer avant de servir — refroidit la fumée."
          },
          {
            "state": "Overdone",
            "description": "Trop d'huile — la trempette nage et la texture est perdue sous une couche lisse. Elle a l'air grasse plutôt que luxuriante.",
            "action": "Inclinez le bol et épluchez l'excès d'huile avec le bord d'une serviette en papier. Ajouter plus de trempette pour absorber si vous l'avez."
          }
        ]
      },
      "feelCue": "Le bol fini devrait sentir comme un feu de camp éloigné avec un agrumes brillant surtonné — le citron coupant à travers la fumée la façon dont l'air frais suit un feu de joie."
    }
  ]
};
