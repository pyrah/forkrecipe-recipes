export default {
  "repoId": "master_american_pulled_pork_shoulder_001",
  "parentRepoId": null,
  "slug": "pulled-pork-shoulder",
  "author": "ForkRecipe Kitchen",
  "title": "Épaule de porc tiré",
  "description": "Une épaule de porc frotté avec des épices, fumé bas et lent pendant des heures jusqu'à ce que l'écorce soit acajou et l'intérieur se sépare en longs fils soyeux et juteux avec aucun effort.",
  "cuisine": "Américain",
  "culture": "BBQ américain",
  "category": "proteins",
  "tags": [
    "pulvérulent",
    "bbq",
    "américains",
    "cuits lentement",
    "fumée",
    "Sans gluten"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "14 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Épaule de porc désossée (dos de Boston, 2 à 2,5 kg)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "épaule de porc désossée, filet enlevé"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Paprika fumé",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika doux + une goutte de fumée liquide"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Poivre noir fraîchement moulu",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poudre d'ail",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poudre d'oignon",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poivre de Cayenne",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "poudre de chipotle pour plus de fumée"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Sweetener",
      "name": "Sucre brun foncé",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun léger",
        "muscovado"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin (salon casher ou sel de mer)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "vinaigre de cidre de pomme (pour le spritzing)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de pomme",
        "eau"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Aromatic",
      "name": "Morceaux de bois franc (poêle, hickory ou bois de pomme)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "copeaux de bois trempés 30 min pour grilles à gaz"
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
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "rubbed_shoulder",
      "instructions": "Mélanger toutes les épices, le sucre et le sel dans un mélange uniforme. Patientez l'épaule de porc complètement sèche avec des serviettes en papier — l'humidité de surface empêche le frottement d'adhérer et forme de la vapeur au lieu de l'écorce pendant la cuisson. Appliquer le frotter dans une couche épaisse, généreuse, uniforme sur chaque surface de l'épaule, le presser et le patter fermement. Ne négligez aucune surface, y compris le bouchon de graisse et sous les plis. Enveloppez l'épaule frottée dans une enveloppe plastique ou placez-la dans un grand sac à glissière et réfrigérez-le pendant au moins 8 heures, idéalement pendant la nuit (12 heures). Le sel de la bruine dégage l'humidité, se dissout en saumure et est réabsorbé, assaisonnant la viande profondément plutôt que simplement la surface.",
      "visualCue": {
        "primaryTarget": "L'épaule frottée est complètement enduite d'un frottis noir et rouge rouille: pas de taches nues, pas de frottis enroulé au fond. Après le repos, la surface semble légèrement humide car le sel a attiré l'humidité à la surface et le frottement a commencé à adhérer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le frottage est mince, appliqué dans une légère poussière qui recouvre à peine la surface. La graisse de porc est encore clairement visible à travers le revêtement et le frottage ne formera pas une écorce appropriée pendant la cuisson.",
            "action": "Appliquer plus de frotter généreusement. Vous voulez une couche épaisse et encroûtante qui donne l'apparence que l'épaule a été draguée dans la terre épicée."
          },
          {
            "state": "Perfect",
            "description": "Une couche épaisse, uniforme, rouge rouille foncé sur chaque surface. L'épaule est presque noire de la combinaison du paprika et du sucre brun foncé. Les bâtons de frotter sans accroupir ou glisser.",
            "action": "Enrouler et réfrigérer pendant au moins 8 heures avant de fumer."
          },
          {
            "state": "Overdone",
            "description": "Le frottage a été appliqué dans une couche si épaisse et si croustillante qu'il commence à tomber en touffes et que la graisse sous-jacente n'est pas visible. Le rapport sel peut submerger la viande.",
            "action": "Badigeonner les accumulations les plus excessives et procéder. Un frottage légèrement lourd est bien mieux qu'un frottage léger."
          }
        ]
      },
      "feelCue": "Appuyez sur votre paume à plat contre la surface frottée — le frottage devrait être sec et légèrement humide des sucres, et il devrait s'accrocher à votre peau lorsque vous levez la main. Si elle se sent poudreuse et sèche et ne adhère pas, ajouter un brossage très fin de l'huile neutre à la surface avant d'appliquer le frottage."
    },
    {
      "nodeId": "step_2",
      "action": "Fumer",
      "inputs": [
        "rubbed_shoulder",
        "ing_11"
      ],
      "outputState": "smoked_shoulder",
      "instructions": "Mettre en place le fumeur ou la grille pour la chaleur indirecte à une température stable de 107 à 120 C / 225 à 250 F. C'est la fenêtre basse et basse — au-dessus de 135 C / 275 F le sèche-linge extérieur avant que le collagène intérieur ait eu le temps de se dissoudre. Ajoutez des morceaux de bois franc au feu : le chêne et l'hickory sont traditionnels pour un BBQ sudiste audacieux ; les pommes et les cerises sont plus douces et s'accordent avec la douceur du porc. Placer le côté de l'épaule sur la grille au-dessus de la zone indirecte. Fumer pendant 6 à 8 heures, maintenir la fenêtre de température et ajouter du bois au besoin. Spritz au vinaigre de cidre de pomme toutes les 90 minutes après les 3 premières heures pour maintenir la surface humide et favoriser la formation d'écorce sans laver le frottage.",
      "visualCue": {
        "primaryTarget": "Après 6 à 7 heures, l'écorce est une acajou profonde et fissurée, presque noire dans les zones plus épaisses, caramélisée et laquée. Le bouchon est translucide et rendu. La fumée blanche dérive des évents plutôt qu'une épaisse fumée grise bleue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est encore principalement rouge-orange du paprika, sans croûte et sans assombrissement significatif. Moins de 4 heures se sont écoulées et l'écorce n'est pas encore formée.",
            "action": "Maintenir la température et continuer à fumer. L'écorce commence généralement à se former après 4 à 5 heures. Ne pas augmenter la température pour accélérer les choses."
          },
          {
            "state": "Perfect",
            "description": "Une écorce dure, crépitante et acajoue qui ne donne pas lorsqu'elle est pressée. L'épaule a décroché (le plateau de température, généralement de 68 à 74 °C / 155 à 165 °F) puis est passée à travers. La température interne devrait approcher 88 C/190 F.",
            "action": "Vérifiez la température interne et commencez la phase d'enroulement si l'écorce est entièrement formée et la température interne est entre 74 et 82 C / 165 à 180 F."
          },
          {
            "state": "Overdone",
            "description": "La fumée épaisse, noire et d'odeur d'acre a été présente tout au long de la journée, signe d'une combustion incomplète. L'écorce est devenue amère plutôt que salée de la créosote dans la fumée.",
            "action": "Ouvrez les évents pour améliorer la combustion et réduire le carburant, en visant la fumée mince, bleu-blanc. L'écorce peut porter une certaine amertume: le repos et la traction la distribueront et en atténueront l'impact."
          }
        ]
      },
      "feelCue": "Au bout de 6 heures, frappez l'écorce à l'aide de votre pinceau — il devrait faire un son creux, dur, comme frapper sur le bois, pas un bourbier humide et terne. L'écorce doit se sentir complètement sèche et dure, comme une croûte. Si elle se fléchit ou se dente sous votre doigt, elle n'est pas encore complètement formée."
    },
    {
      "nodeId": "step_3",
      "action": "Braiser",
      "inputs": [
        "smoked_shoulder",
        "ing_10"
      ],
      "outputState": "wrapped_shoulder",
      "instructions": "Une fois que l'écorce est entièrement formée et que la température interne est comprise entre 74 et 82 C/ 165 et 180 F, enveloppez fermement l'épaule en deux couches de feuille lourde (le Texas Crutch). Ajouter une petite éclaboussure de vinaigre de cidre de pomme dans la feuille avant de sceller. Retourner au fumeur à la même température. La feuille piège l'humidité et la vapeur, convertissant rapidement le collagène restant en gélatine et conduisant la température interne à travers le décrochage. Cuire jusqu'à ce que la température interne atteigne 95 à 97 C / 203 à 207 F — la température de la sonde osseuse. À cette température, la sonde ou une brochette doit glisser dans la viande avec la résistance du beurre mou.",
      "visualCue": {
        "primaryTarget": "L'emballage en feuilles est bien scellé. Lors du déballage, l'épaule s'est adoucie visiblement — l'écorce s'est légèrement détendu de la vapeur, la graisse est complètement rendue et tremblante, et le liquide a été recueilli dans le fond de l'emballage en feuilles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La température interne est encore inférieure à 90 C / 195 F et une sonde ou une brochette rencontre une résistance distincte dans la partie la plus épaisse. L'épaule ne tremble pas quand vous secouez la grille.",
            "action": "Retourne à la chaleur. Le collagène n'a pas encore complètement converti. L'épaule peut rester dans le décrochage pendant encore 1 à 2 heures avant que la température ne reprenne — c'est normal, ne pas augmenter la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Température interne de 95 à 97 C / 203 à 207 F et une sonde glisse à l'intérieur et à l'extérieur sans résistance — comme pousser à travers le beurre d'arachide doux. L'épaule oscille visiblement quand vous secouez la grille. L'os se sentira lâche dans la viande.",
            "action": "Retirer du feu et passer à la phase de repos immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La température interne a dépassé 100 °C / 212 °F et la viande commence à se sécher — les fibres musculaires ont contracté et pressé l'humidité au-delà de la récupération.",
            "action": "Tirez immédiatement et servez rapidement; la viande peut encore être acceptable, mais manquera de la pleine succulence d'une épaule bien cuite."
          }
        ]
      },
      "feelCue": "Agiter doucement l'emballage de papier pendant qu'il est sur la grille — une épaule parfaitement cuite oscille et se glissade avec une qualité presque liquide, la structure interne ayant complètement cédé. Si elle se sent solide et immuable, elle a besoin de plus de temps. Lorsque vous l'enroulez, le liquide doit être mis dans la feuille, c'est - à - dire le collagène rendu, et vous devriez le verser sur la viande."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser reposer",
      "inputs": [
        "wrapped_shoulder"
      ],
      "outputState": "rested_shoulder",
      "instructions": "Transférer l'épaule enveloppée (toujours dans sa feuille) dans un refroidisseur propre et vide. Fermez la glacière et reposez-vous pendant au moins 1 heure, idéalement 2 heures. Ce repos n'est pas facultatif — c'est ce qui transforme l'épaule simplement cuite en superlative. Pendant le reste, la température interne s'égalise, les fibres musculaires se détendent et réabsorbent leurs jus, et le collagène qui se convertit en gélatine enveloppe chaque fibre, rendant la traction finale brillante et auto-saucissante. Une épaule correctement reposée maintenue dans un refroidisseur maintient la température jusqu'à 4 heures, de sorte que vous pouvez le reposer confortablement tout en préparant tout le reste.",
      "visualCue": {
        "primaryTarget": "Lors du déballage après le reste, l'épaule a l'air dégonflée et molle, l'écorce légèrement bouillie du papier. L'os peut être tiré libre avec deux doigts et presque aucun effort — il glisse proprement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'épaule s'est reposée pendant moins de 30 minutes et est toujours à la vapeur lorsqu'elle est déballée. Les jus sont limpides et arrosés lorsqu'ils sont coupés — ils n'ont pas eu le temps de se réabsorber.",
            "action": "Recapturez et continuez à vous reposer. La différence de jutosité entre 30 minutes et 2 heures de repos est dramatique."
          },
          {
            "state": "Perfect",
            "description": "L'écorce s'est légèrement resserrée après le repos et l'épaule tient sa forme lorsqu'elle est déballée. L'os est dégagé. Les jus libérés pendant le reste ont été mis en commun dans la feuille sous forme de liquide acajou épais et gélatineux.",
            "action": "Déposez sur un plateau pour attraper les jus et commencer à tirer immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Reposé trop longtemps (plus de 4 heures dans le refroidisseur) et l'épaule a chuté sous la température de service sûre et est froid au toucher.",
            "action": "Retourner au four ou au fumeur à 120 C / 250 F pendant 30 minutes pour le ramener à la température de service avant de tirer."
          }
        ]
      },
      "feelCue": "Touchez l'écorce après le reste – elle aurait dû se raffermir de la texture vapeur qu'elle avait immédiatement après avoir déballé de la feuille. Il devrait se sentir légèrement croquant à la surface mais laisser place immédiatement en dessous. La viande en dessous de l'écorce doit se sentir douce et productive, comme l'argile."
    },
    {
      "nodeId": "step_5",
      "action": "Assaisonner",
      "inputs": [
        "rested_shoulder"
      ],
      "outputState": "finished_pulled_pork",
      "instructions": "Tirez le porc à l'aide de deux fourchettes ou de vos mains (avec des gants propres résistants à la chaleur). Commencer par l'os et travailler vers l'extérieur, retirer la viande dans de longs brins naturels — suivre le grain du muscle. Évitez de couper ou de déchiqueter trop finement; les longs brins soyeux sont l'idéal. Verser les jus de repos recueillis sur la viande retirée et jeter pour enrober. Couper les morceaux d'écorce les plus foncés en petits morceaux et les plier à travers la viande tirée — ces morceaux foncés, intensément aromatisés sont appelés « bouts brûlés adjacents » et sont prisés pour la saveur épicée-fumeuse concentrée qu'ils ajoutent au mélange final. Goûtez et ajoutez du sel ou une touche de vinaigre de cidre de pomme si nécessaire.",
      "visualCue": {
        "primaryTarget": "Un tas de longs fils d'acajou à bronzé de porc tiré, avec des morceaux d'écorce plus foncés répartis dans l'ensemble. La viande semble humide et auto-saucissante à partir de la graisse rendue et le revêtement de gélatine chaque fibre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande est encore en morceaux plutôt que de tirer en brins — elle est résistante à tirer et nécessite une force importante. Ce n'est pas fait.",
            "action": "Ne tirez pas encore. Retourner les sections non-coopératives au four à 120 °C / 250 °F pendant 30 à 45 minutes, envelopper et réessayer."
          },
          {
            "state": "Perfect",
            "description": "La viande se détache sans effort en longs brins naturels avec le toucher le plus léger, chaque brin scintille avec la graisse rendue. Les morceaux d'écorce mélangés à travers ajouter l'intensité sombre et caramélisée. La pile retient l'humidité et ne semble pas sèche.",
            "action": "Servir dans des sandwichs, des bols ou des tacos. La graisse et la gélatine garderont le porc tiré humide pendant des heures à température ambiante sur un plateau."
          },
          {
            "state": "Overdone",
            "description": "La viande a été déchiquetée à une consistance musclée et pâteuse – les fibres se sont entièrement décomposées et la texture est plus assimilable à la viande étamée que le porc tiré.",
            "action": "Servir comme-est mais la sauce généreusement pour compenser la texture perdue. Évitez cela en tirant rapidement et sans trop cuire après 97 C / 207 F."
          }
        ]
      },
      "feelCue": "Prenez un brin de porc tiré et étirez - le doucement entre vos doigts — une pièce parfaite devrait s'allonger un peu avant de déchirer proprement, comme enlevant un morceau de poisson cuit. Il doit se sentir lissé et légèrement collagène dissous, non sec ou à cordes."
    }
  ]
};
