export default {
  "repoId": "master_chinese_slow_roasted_pork_belly_001",
  "parentRepoId": null,
  "slug": "slow-roasted-pork-belly",
  "author": "ForkRecipe Kitchen",
  "title": "Porc rôti cantonais Belly",
  "description": "Une dalle de peau sur le ventre de porc guéri avec cinq-pices, torréfié bas puis torréfié haut, jusqu'à ce que la peau se brise en craquelure et la graisse sous tremble comme la crème cuite.",
  "cuisine": "Chinois",
  "culture": "Cantonais",
  "category": "proteins",
  "tags": [
    "de porc",
    "Chinois",
    "cantonais",
    "grillés",
    "peau croustillante",
    "Siu-yuk"
  ],
  "difficulty": 4,
  "activeTime": "30 min",
  "totalTime": "26 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Skin-on porc ventre (2–2,5 kg, même épaisseur, peau marquée)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Poudre de cinq épices chinoise",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin (pour le côté chair)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel grossier (pour la peau — la croûte desséchante)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Sel de mer flocé"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "miel (brosse sur la chair seulement)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "sauce soja ou tofu rouge fermenté (nam yu)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce de soja foncé"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Ail (minced) et gingembre (gras)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Solvent",
      "name": "Vin de riz shaoxant",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "sherry sec"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "vinaigre de riz blanc (brûlé sur la peau avant la torréfaction)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de cidre de pomme"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saler et laisser reposer",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "cured_pork_belly",
      "instructions": "Découpez la peau dans un hachage croisé de 1 cm avec un couteau tranchant — coupez la peau mais pas la graisse. Mélanger le sel fin, le sucre, la sauce soja, l'ail, le gingembre et le vin Shaoxing dans une pâte. Frottez cette pâte agressivement dans le côté chair et vers le bas dans les lignes de score, gardant le côté peau complètement sec. Placez le côté peau sur un support de fil placé sur un plateau. Réfrigérer à découvert pendant au moins 12 heures et jusqu'à 24 heures. L'air froid et sec du réfrigérateur fait un travail critique : il déshydrate la peau, la transforme en papier et en tat. Cette sécheresse est ce qui lui permet de blister et de briser plutôt que de devenir caoutchouteux sous la chaleur.",
      "visualCue": {
        "primaryTarget": "Après 12 heures: une dalle avec une chair acajou profonde sous la grille et une peau qui est devenue pâle, sèche, serrée et mate — presque papier. Les lignes de score sont visibles et sèches.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est encore humide et légèrement collante; le remède n'a pas séché la surface. Moins de 12 heures se sont écoulées.",
            "action": "Retour à découvert au frigo. Chaque heure de séchage supplémentaire fait une vraie différence au craquage final."
          },
          {
            "state": "Perfect",
            "description": "La peau est drum-taut, désossée et légèrement translucide aux lignes de score. Le côté chair sent épicé et salé, le côté peau n'a pas d'humidité lorsqu'il est touché.",
            "action": "Le porc est prêt à rôtir. Retirer du réfrigérateur 30 minutes avant le four pour enlever la viande."
          },
          {
            "state": "Overdone",
            "description": "La peau est extrêmement papereuse et les lignes de score ont largement ouvert — c'est bien et vraiment bénéfique. La chair peut avoir séché à la surface même.",
            "action": "Continuez. Le séchage du côté chair n'est pas un problème; la couche de graisse isole l'intérieur de la cuisson excessive."
          }
        ]
      },
      "feelCue": "Passez votre bout de doigt sur la peau après le repos de la nuit: il devrait sentir comme du papier sec ou un parchemin très mince — pas de donner, pas d'humidité, pas de collants. S'il ressort ou se sent humide du tout, il faut plus de temps découvert dans le réfrigérateur."
    },
    {
      "nodeId": "step_2",
      "action": "Rôtir",
      "inputs": [
        "cured_pork_belly",
        "ing_09"
      ],
      "outputState": "slow_roasted_belly",
      "instructions": "Badigeonner la peau avec du vinaigre de riz et placer immédiatement dans un four préchauffé à 150 C / 300 F, côté peau sur le support sur un plateau d'eau (l'eau capte la graisse et ajoute de la vapeur, ce qui maintient la viande humide pendant que la peau reste sèche au-dessus). Faire cuire pendant 1 heure 30 minutes à 2 heures jusqu'à ce que la viande soit rendue et livrée et que la peau soit devenue translucide et serrée. La peau n'aura pas encore l'air de craqueler — elle sera lisse, vitreuse et tendue. C'est exact.",
      "visualCue": {
        "primaryTarget": "Après une torréfaction lente: la peau est uniforme, vitreuse et pâle, comme une membrane serrée. La chair s'est légèrement retirée des lignes de score et la graisse inférieure est douce et tremblante lorsque le plateau est secoué.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est encore blanc opaque et les lignes de score n'ont pas ouvert. La graisse inférieure est encore ferme lorsqu'elle est pressée à travers la peau.",
            "action": "Continuez à rôtir. La graisse a besoin de temps pour rendre complètement avant l'explosion de chaleur élevée."
          },
          {
            "state": "Perfect",
            "description": "Peau verreuse, légèrement ambre, translucide aux lignes marquées. Lorsque vous secouez le plateau, la dalle tremble — la graisse en dessous est entièrement liquide. La viande se sépare aux coutures.",
            "action": "Retirer du four, brosser la peau une fois de plus avec du vinaigre et préparer l'explosion à haute chaleur."
          },
          {
            "state": "Overdone",
            "description": "La peau a commencé à blister et à buller avant le stade à haute chaleur — le four est trop chaud ou l'eau s'est évaporée de la cuvette.",
            "action": "Retirer immédiatement et passer à l'étape de l'explosion. La peau finira toujours bien; elle vient de commencer le processus de bouffage tôt."
          }
        ]
      },
      "feelCue": "Appuyez sur la peau avec le dos d'un doigt (attention – il est très chaud): il doit se sentir ferme mais creux en dessous, comme presser sur un oreiller gonflé à l'air plutôt que de la viande dense. La graisse est liquéfiée et la peau se détache de la couche inférieure."
    },
    {
      "nodeId": "step_3",
      "action": "Blast (chaleur élevée)",
      "inputs": [
        "slow_roasted_belly"
      ],
      "outputState": "crackled_pork_belly",
      "instructions": "Augmenter le four jusqu'à un maximum de 240–250 C / 460–480 F ou grille/broilleur. Enlevez le bac à eau. Positionner la peau de porc vers le haut, près de l'élément supérieur. Faire cuire pendant 20 à 30 minutes, en regardant constamment. La peau éclatera en craquant par étapes — de petites cloques apparaissent d'abord, puis s'étendent, puis se fusionnent dans une surface uniforme, relevée, frénétique. Rotation du plateau si un côté est blister plus rapidement que l'autre. Tirez le moment où toute la peau a gonflé uniformément et est devenue dorée-orange. Tout dispositif transdermique pâle et non tacheté signifie encore 3 à 5 minutes.",
      "visualCue": {
        "primaryTarget": "Une croûte uniforme, relevée, ambre à or de milliers de petites cloques couvrant toute la surface de la peau. La dalle a l'air considérablement plus grande qu'avant l'explosion — la peau gonflée se tient loin de la graisse en dessous. Ça semble creux quand on frappe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il reste des patchs de peau lisse, vitreuse et non blister. Les craquelures semblent inégales — certaines zones gonflées, d'autres plates.",
            "action": "Continuer à feu plein, vérifier toutes les 3-4 minutes. Rotation du plateau à même la chaleur. Les patchs non brouillés ont juste besoin de plus de temps."
          },
          {
            "state": "Perfect",
            "description": "Chaque centimètre de peau s'est gonflé dans le craquage ambre. La surface est uniformément enroulée, creuse au coup, et en or profond. La graisse en dessous est frémissante et les lignes de score se sont répandues.",
            "action": "Retirer du four et reposer à découvert pendant 10 minutes avant de couper, ce qui stabilise le craquage."
          },
          {
            "state": "Overdone",
            "description": "Les zones de la peau sont devenues très brun foncé, durcies ou noircies. Le crépitement semble brûlé plutôt que gonflé.",
            "action": "Coupez les sections les plus sombres. Le craquage gonflé autour d'eux est encore excellent; les morceaux obscurcis auront un goût amer et cuireux."
          }
        ]
      },
      "feelCue": "Frappez l'arrière d'une cuillère sur le craquage fini: vous voulez un coup creux et résonnant — comme tapoter un tambour. Un thud terne signifie qu'il n'a pas soufflé complètement; un pop creux signifie qu'il est fait. Ne le touchez pas avec votre doigt nu immédiatement du four — il vous marquera."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser reposer",
      "inputs": [
        "crackled_pork_belly"
      ],
      "outputState": "rested_pork_belly",
      "instructions": "Reposez la dalle à la température ambiante pendant 10-15 minutes. Le repos permet à la graisse et à la viande de se raffermir légèrement de sorte que la coupe n'écrase pas le craquage ou frotter la graisse dans une mousse. Ne pas couvrir — toute vapeur piégée va immédiatement adoucir la peau que vous venez de travailler si dur à atteindre.",
      "visualCue": {
        "primaryTarget": "Le crépitement est encore doré et rigide, aucun signe d'adoucissement. Lorsque vous appuyez sur le bord, il ne donne pas — la peau est comme de la céramique sèche, pas du cuir.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Reposé moins de 5 minutes — la graisse et la viande sont encore trop liquides pour être tranchés proprement, et le craquage est à la pointe de la fragilité alors qu'il fait chaud.",
            "action": "Attendez. La coupe compresse immédiatement le craquage plutôt que de le diviser."
          },
          {
            "state": "Perfect",
            "description": "Toujours chaud à travers, crépitant rigide, graisse qui commence juste à raffermir à la surface. Couper proprement avec un couteau lourd sans éclater ni déchirer.",
            "action": "Slice à travers le craquement avec une presse ferme et confiante vers le bas — ne voient pas. Chaque coupe donne une fissure éclatante."
          },
          {
            "state": "Overdone",
            "description": "Reposé trop longtemps (plus de 30 minutes): la graisse a mis dur et blanc. Le craquage est toujours intact mais la graisse est froide et désagréable.",
            "action": "Réchauffer brièvement dans un four chaud (220 C / 430 F, 5 minutes) pour refondre la graisse. Le craquage tolérera un réchauffage court."
          }
        ]
      },
      "feelCue": "Exécutez votre mèche le long de la surface de craquage : elle doit se sentir rigide et sèche, non fléchissante ou jaillissante. Si elle fléchit même légèrement, la peau a commencé à s'adoucir à la vapeur résiduelle — servir immédiatement."
    },
    {
      "nodeId": "step_5",
      "action": "Trancher",
      "inputs": [
        "rested_pork_belly"
      ],
      "outputState": "finished_siu_yuk",
      "instructions": "Placez la peau vers le haut. À l'aide d'un grand couteau à clivage ou d'un couteau de chef lourd, coupé en carrés de 3 à 4 cm ou en tranches de 1,5 cm avec des traits décisifs vers le bas, sans sciage. Le craquage se brisera à chaque coupe, révélant des couches: peau ambrée-orange croustillante, un mince bouchon de graisse blanche en dessous, puis la viande. Disposer le côté coupé sur un plateau chaud pour montrer les couches. Servir avec de la sauce hoisine, des oignons verts tranchés et du riz ou des conges.",
      "visualCue": {
        "primaryTarget": "Des coupes transversales montrant quatre couches distinctes : un craquage ambré éclatant, une couche de 5 à 10 mm de nacré, de la graisse tremblante, une couche de viande et une autre couche de graisse en dessous. Les bords coupés de la graisse sont brillants et frémissants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les couches de graisse sont blanches et solides plutôt que translucides et tremblantes. La viande est dure. La graisse n'a pas rendu complètement pendant le rôti lent.",
            "action": "Servir de toute façon — le crépitement est le héros. Mais pour la prochaine fois, prolonger le rôti lentement de 30 minutes."
          },
          {
            "state": "Perfect",
            "description": "Le craquement éclate audiblement au couteau. La graisse inférieure est gélatineuse, translucide et légèrement jiggle, comme le panna cotta. La viande se sépare en brins tendres.",
            "action": "Servir immédiatement. Le craquage commence à s'adoucir dans les 15 à 20 minutes suivant la coupe, donc le repas doit être mangé directement après la coupe."
          },
          {
            "state": "Overdone",
            "description": "Le craquage s'est si complètement effondré qu'il a coupé les morceaux en fragments. La graisse est rendue trop loin et le bord coupé est sec.",
            "action": "Rassemblez les fragments crépitants et dispersez-les sur le riz comme garniture. La viande et la graisse sont encore délicieuses."
          }
        ]
      },
      "feelCue": "Chaque morceau du ventre de porc doit se sentir important mais pas lourd dans votre main — le craquelin sec et rigide sur le dessus, la graisse et la viande en dessous encore chaud et donnant. Au moment où vous mordez, la peau doit se briser instantanément sans résistance, la graisse fond sur la langue, et la viande offre une mâche propre et tendre."
    }
  ]
};
