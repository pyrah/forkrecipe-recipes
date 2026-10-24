export default {
  "repoId": "master_british_crumpets_001",
  "parentRepoId": null,
  "slug": "crumpets",
  "author": "ForkRecipe Kitchen",
  "title": "Crevettes",
  "description": "Des rondelles cuites en rondelles sur une grille jusqu'à ce qu'une dentelle de trous se forme sur le dessus, laissant un intérieur humide et spongieux et une base croustillante pour tremper le beurre.",
  "cuisine": "Anglais",
  "culture": "Anglais",
  "category": "breads",
  "tags": [
    "Carotte",
    "britanniques",
    "grille",
    "Petit déjeuner",
    "levure"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "2 hr 30 min",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude (105°F / 41°C)",
      "ratioValue": 80,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Lait entier chaud (105°F / 41°C)",
      "ratioValue": 30,
      "defaultUnit": "%",
      "substitutions": [
        "toute l'eau pour les produits laitiers"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "levure sèche instantanée",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Leavener",
      "name": "Soda au four",
      "ratioValue": 0.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Beurre (pour anneaux de graissage et grille)",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": [
        "huile neutre"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Eau chaude (2 c. à soupe, pour la cuisson du lisier de soude)",
      "ratioValue": 5,
      "defaultUnit": "%",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fermenter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_06",
        "ing_07"
      ],
      "outputState": "fermented_batter",
      "instructions": "Dans un grand bol, fouetter la farine, la levure, le sucre et le sel. Ajouter l'eau chaude et le lait chaud et fouetter vigoureusement jusqu'à ce que vous ayez une pâte très lisse et épaisse sans grumeaux. À ce stade, la pâte doit être nettement plus épaisse que la pâte à crêpes, plutôt qu'un épais milkshake. Couvrir de plastique ou d'un chiffon humide et laisser fermenter à température ambiante pendant 1–1,5 heures. La pâte s'élèvera, deviendra très pétillante et mousseuse, et le volume doublera à peu près. L'activité de levure est ce qui crée la structure du trou : lorsque la pâte frappe la grille chaude, le CO2 qui y est dissous s'élève et percute la surface, formant les trous caractéristiques du croupion.",
      "visualCue": {
        "primaryTarget": "Une pâte mousseuse, bouillonnante et active qui s'est visiblement relevée dans le bol. Soulevant le fouet, la pâte tombe dans des rubans épais et pétillants. La surface doit ressembler à une mousse de petites bulles, signe de levure active et de fermentation suffisante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La batterie semble plate et dense sans bulles de surface. Il est à peine monté. La levure est sous-active — soit l'eau était trop chaude (tuée la levure) ou trop froide (le moins bien activée).",
            "action": "Passez à un endroit plus chaud (75–80°F / 24–27°C) et attendez encore 30–45 minutes. Si elle est encore plate, la levure peut être morte — recommencer avec de la levure fraîche."
          },
          {
            "state": "Perfect",
            "description": "Batter a doublé ou presque, la surface est une mousse de petites bulles. Lorsqu'elle est agitée, la pâte tombe du fouet dans des rubans bubbles avec de l'air visible piégé. Sens de levure fraîche et légèrement acidulée.",
            "action": "Dissoudre le bicarbonate de soude dans 2 cuillerées à soupe d'eau chaude et remuer dans la pâte. Procéder immédiatement à la cuisson."
          },
          {
            "state": "Overdone",
            "description": "La batterie a surfermenté — elle sent l'aurore agressive ou l'alcool, a commencé à se dégonfler, et les bulles ont fusionné dans de grandes poches irrégulières.",
            "action": "Continuez immédiatement. Les croupons auront une saveur agressivement tannante (pas nécessairement désagréable), mais la structure du trou peut être irrégulière. Réduire le temps de fermentation prochain lot."
          }
        ]
      },
      "feelCue": "Agiter lentement la pâte fermentée et sentir l'air pris au piège. Le fouet devrait s'écouler avec la résistance douce de quelque chose de plein de bulles, comme en remuant une mousse légèrement épaisse. Goûtez une petite quantité : elle doit être levure, légèrement aigre et vivante. Pas comme du vinaigre, mais brillant et tannant comme un jeune sourd, avec une colonne vertébrale de blé."
    },
    {
      "nodeId": "step_2",
      "action": "Dissoudre",
      "inputs": [
        "fermented_batter",
        "ing_05",
        "ing_09"
      ],
      "outputState": "cooking_batter",
      "instructions": "Dissoudre complètement le bicarbonate de soude dans 2 cuillerées à soupe d'eau chaude, puis le remuer rapidement et soigneusement dans la pâte fermentée. Le bicarbonate de soude crée une réaction immédiate avec les acides de la fermentation de levure, produisant des bulles de CO2 supplémentaires — vous verrez la pâte devenir immédiatement encore plus mousseuse. Ce double levain (yeast + bicarbonate de soude) donne aux croumpets leur structure profonde et ouverte caractéristique. Cuire dans les 5 à 10 minutes suivant l'ajout du bicarbonate de soude, alors que la réaction est toujours active. La pâte à ce stade devrait être assez épaisse pour tenir sa forme dans le moule de l'anneau sans couler sous l'anneau, mais versable — sur la consistance du yogourt légèrement fin.",
      "visualCue": {
        "primaryTarget": "Une pâte plus mousseuse et plus aérée après l'ajout de bicarbonate de soude. De petites bulles couvrent toute la surface. Quand vous versez un louche, il devrait tomber dans une feuille épaisse, bubble, et non pas un ruisseau mince.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après l'ajout de la bicarbonate de soude — pas d'augmentation de la mousse ou de l'aération. La réaction ne s'est pas produite parce que la bicarbonate de soude n'était pas complètement dissoute ou parce que la fermentation n'avait pas suffisamment d'acide.",
            "action": "Mélanger plus vigoureusement pendant 30 secondes. Si elles sont encore plates, continuez de toute façon — les bulles de levure seules peuvent produire des trous adéquats, bien qu'elles soient plus petites."
          },
          {
            "state": "Perfect",
            "description": "Notamment plus frais après l'ajout de soude. Surface couverte de petites bulles. La batterie se déverse dans une épaisse feuille aérée et tient un léger monticule dans la louche.",
            "action": "Cuire immédiatement sur une grille préchauffée, beurrée, avec des anneaux de croupion graissés."
          },
          {
            "state": "Overdone",
            "description": "Saupoudrer trop longtemps après avoir ajouté du bicarbonate de soude — 20+ minutes — et la réaction s'est dissipée. La pâte semble à plat et la saveur de soda peut être détectable comme un goût légèrement métallique.",
            "action": "Continuez. L'activité de levure produira encore quelques trous. Si la saveur métallique est présente, ajoutez quelques gouttes de jus de citron pour équilibrer l'alcalinité résiduelle."
          }
        ]
      },
      "feelCue": "Immédiatement après avoir remué dans le bicarbonate de soude, la pâte doit se sentir plus légère sous la louche — le gaz augmenté la rend presque plumeuse. Versez une petite quantité sur le dos de votre main : elle doit se sentir fraîche et lisse, et les bulles d'air doivent être visibles comme de petites taches serrées tout au long du revêtement. Cette aération rend la structure du trou possible."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "cooking_batter",
        "ing_08"
      ],
      "outputState": "finished_crumpets",
      "instructions": "Chauffer une plaque plate ou une poêle lourde à feu moyen (325°F / 163°C). Beurrer l'intérieur de 3,5 pouces / 9 cm anneaux de croupion (ou anneaux d'oeuf) généreusement. Placez les anneaux sur la grille et beurrez la surface de la grille légèrement à l'intérieur de chaque bague. Remplir chaque anneau à environ deux tiers de pâte — environ 3 à 4 cuillères à soupe. La pâte ne devrait pas déborder mais devrait avoir de la place pour se lever. Cuire à découvert pendant 8-12 minutes sans déranger. Dans les 2 à 3 minutes, la surface commence à se fixer aux bords tandis que le centre reste liquide; au cours des quelques minutes suivantes, des bulles se lèvent à travers la pâte et éclatent à la surface, formant les trous caractéristiques. Lorsque la surface entière semble réglée et mate avec une dentelle définie de trous, et le dessus semble presque sec (pas brillant), retirer les anneaux avec des pinces et retourner les croupons. Cuire le deuxième côté pendant 1 à 2 minutes jusqu'à ce que la base soit dorée. Laisser refroidir sur une grille et toast avant de servir.",
      "visualCue": {
        "primaryTarget": "Un chapelet entièrement formé avec une dentelle dense de petits trous distincts couvrant toute la surface supérieure, un aspect mat, set et un fond d'or croustillant. Les trous doivent être propres et ouverts, non effondrés ni mouillés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface supérieure semble encore brillante et humide au centre. Les trous ont commencé à se former, mais beaucoup sont encore des bulles ouvertes, pas des trous secs. Le chapelet se sent squishy et floppy lorsque vous essayez de retirer l'anneau.",
            "action": "Continuer la cuisson à découvert. Ne vous précipitez pas en soulevant la chaleur — une chaleur plus élevée brûle la base avant les ensembles supérieurs. La patience est l'exigence du béguin. Cuire encore 2–3 minutes et revérifier."
          },
          {
            "state": "Perfect",
            "description": "Toute la surface supérieure est mate et sertie, couverte de trous ouverts et propres de différentes tailles. L'anneau se libère facilement et le chapelet tient sa forme. Le fond est doré lorsqu'il est retourné — une base ferme et grillée qui contraste avec l'intérieur doux et troué.",
            "action": "Flip, faire cuire 1-2 minutes sur le côté supérieur pour une couleur claire, puis refroidir sur un rack. Servir avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Le fond est brun foncé ou brûlé. La crotte sent le beurre brûlé. La surface supérieure est peut-être surdimensionnée et ressemble presque à un œuf frit dans sa texture, solide plutôt que spongieux.",
            "action": "Réduisez significativement la chaleur de la grille pour le prochain lot. Les croupons anglais ont besoin d'une chaleur très douce et soutenue, et non de la chaleur moyenne-élevée utilisée pour les crêpes. Si le fond est simplement sombre (pas brûlé), l'intérieur est probablement bien; l'omble peut être arraché."
          }
        ]
      },
      "feelCue": "Un chapelet bien fini devrait se sentir substantiel mais céder quand vous appuyez sur le dessus — comme appuyer sur une éponge ferme. La base doit se sentir croustillante et rigide, avec un craquelin sec quand vous appuyez dessus. Lorsque vous vous divisez ou que vous mordez dans un chapelet grillé, l'intérieur doit donner avec le mousqueton tendre et tendre de pain trempé dans du beurre — les trous dessinant le beurre profondément à l'intérieur. L'absorption du beurre est l'âme d'un bon chapelet : sans trous ouverts, il n'y a nulle part où aller le beurre."
    }
  ]
};
