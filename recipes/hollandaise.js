export default {
  "repoId": "master_french_hollandaise_001",
  "parentRepoId": null,
  "slug": "hollandaise",
  "author": "ForkRecipe Kitchen",
  "title": "Hollande",
  "description": "Une sauce mère chaude et beurrée — des jaunes d'œufs fouettés à un sabayon pâle sur un bain-marie, puis montés avec du beurre clarifié chaud dans une émulsion brillante, aiguisés avec du citron et un murmure de Cayenne.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "sauces",
  "tags": [
    "sauce",
    "français",
    "émulsion",
    "œuf",
    "mère-sauce",
    "beurre"
  ],
  "difficulty": 4,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2025-06-09",
  "updatedAt": "2025-06-09",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 2,
    "bitter": 0,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Binder",
      "name": "Jaunes d'œuf",
      "ratioValue": 3,
      "defaultUnit": "yolks",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre clarifié (chaud)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Ghee chaud fondu"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Citrus",
      "name": "Jus de citron",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Eau (ou éclaboussure de vinaigre blanc)",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": [
        "réduction du vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 0.2,
      "defaultUnit": "part",
      "substitutions": [
        "sel de mer fin"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Heat",
      "name": "Poivre de Cayenne",
      "ratioValue": 0.05,
      "defaultUnit": "part",
      "substitutions": [
        "pincée de poivre blanc"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whisk",
      "inputs": [
        "ing_01",
        "ing_04"
      ],
      "outputState": "sabayon",
      "instructions": "Mettre un bol thermofuge sur une casserole d'eau à peine mijotée — le bol ne doit pas toucher l'eau, et l'eau doit vapeur, pas bouillir. Ajouter les jaunes et l'eau (ou la réduction du vinaigre). fouetter constamment et vigoureusement, lever le bol de la chaleur toutes les quelques secondes pour contrôler la température, jusqu'à ce que les jaunes triplent en volume et s'épaississent à un sabayon pâle et aéré qui tient un ruban. C'est l'étape de fabrication ou de rupture : trop de chaleur brouille les jaunes en caillés doux ; trop peu et ils ne s'épaississent jamais assez pour porter le beurre.",
      "visualCue": {
        "primaryTarget": "Jaune citronné pâle, triple en volume, brillant et mousseux. Lorsque vous soulevez le fouet, le sabayon tombe dans un ruban épais qui est assis sur la surface pendant deux ou trois secondes avant de fondre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours lâche, jaune foncé et aqueux. Le fouet ne laisse pas de trace — le mélange est plat à l'instant où il tombe.",
            "action": "Continuez à fouetter. Il a besoin de plus de temps et d'une touche plus de chaleur — mais continuez à lever la chaleur afin qu'elle épaississe progressivement plutôt que de cuisiner."
          },
          {
            "state": "Perfect",
            "description": "Pale, volumineux et assez épais pour rubaner. Vous pouvez voir le fond du bol pour un battement quand le fouet passe à travers. Il est chaud au toucher mais pas chaud — température du corps, environ 65 C / 150 F.",
            "action": "Retirez le bol du feu. Commencez immédiatement à couler dans le beurre chaud, tandis que le sabayon est encore chaud."
          },
          {
            "state": "Overdone",
            "description": "Graineux, grumeux ou visiblement brouillés — cords pâles formant autour du bord ou sur le fouet. Ça sent l'oeuf cuit.",
            "action": "Si seulement commencer à grainer aux bords, retirer la chaleur instantanément et fouetter dans une cuillère à café d'eau froide pour baisser la température. S'il s'est vraiment enroulé dans des caillés, recommencer — il n'y a pas de récupération du jaune cuit."
          }
        ]
      },
      "feelCue": "Le fouet doit répondre à une résistance croissante à mesure que les jaunes aéreront. Le bol devrait se sentir chaud contre votre paume, mais jamais si chaud vous devez lâcher prise — si elle pique, vous êtes à quelques secondes de brouillage."
    },
    {
      "nodeId": "step_2",
      "action": "Monter",
      "inputs": [
        "sabayon",
        "ing_02"
      ],
      "outputState": "emulsified_hollandaise",
      "instructions": "Hors du feu (ou avec le bol reposant sur une serviette humide pour la stabilité), commencer à ajouter le beurre clarifié chaud dans un cours d'eau mince et stable tout en fouettant sans pause. Commencez à tomber jusqu'à ce que l'émulsion s'épaississe et s'épaississe visiblement, puis augmentez jusqu'à un filet lent. Le beurre doit être chaud, pas chaud — environ 40-50 C / 105-120 F — et le sabayon chaud aussi, de sorte que la graisse reste fluide et les gouttelettes se dispersent uniformément. Ajouter le beurre plus rapidement que les jaunes peut l'absorber, ou laisser l'un ou l'autre composant refroidir, et l'émulsion se brise dans un gâchis huileux et séparé.",
      "visualCue": {
        "primaryTarget": "Une sauce épaisse, brillante, opaque et dorée qui enveloppe le fouet et tombe dans des plis lents et lisses. Il fond doucement et tient une ligne propre lorsque vous dessinez le fouet sur la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Fin et versable, comme de la crème molle — pas tout le beurre est encore dans, ou il va dans trop lentement pour construire le corps.",
            "action": "Continuez à diffuser régulièrement le beurre tout en fouettant. La sauce s'épaissit au fur et à mesure que le gras s'accumule; elle atteindra la consistance de la nappe au fur et à mesure que le dernier beurre entre."
          },
          {
            "state": "Perfect",
            "description": "Lush, épais et brillant — il s'accroche au fouet dans une feuille lisse et tient des pics doux. Tiré sur une cuillère, il enveloppe le dos et vous pouvez dessiner une ligne propre à travers elle.",
            "action": "Passez à l'assaisonnement. Dans le citron, le sel et la cayenne."
          },
          {
            "state": "Overdone",
            "description": "Broyée : la sauce est devenue mince, grasse et caillé, avec du beurre et se sépare du jaune. On dirait un œuf gras brouillé dans la graisse liquide.",
            "action": "Sauvez-le: dans un bol propre, fouettez un jaune d'oeuf frais (ou une cuillère à soupe d'eau chaude) et dribblez la sauce cassée dans elle goutte à goutte, réémulsionnant au fur et à mesure que vous allez. Si la pause venait de la surchauffe, une éclaboussure d'eau froide fouettée en dur peut aussi la ramener ensemble."
          }
        ]
      },
      "feelCue": "La traînée de fouet devient plus lourde avec chaque addition — le son passe d'une fine éclaboussure à un pli épais et giflant. Si vous ressentez soudainement la chute de résistance et l'entendre s'abreuver, l'émulsion se brise; arrêtez d'ajouter du beurre et fouettez dur à récupérer avant de continuer."
    },
    {
      "nodeId": "step_3",
      "action": "Saison",
      "inputs": [
        "emulsified_hollandaise",
        "ing_03",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_hollandaise",
      "instructions": "Dans le jus de citron, fouetter quelques gouttes à la fois, goûter au fur et à mesure – il éclaircit la sauce et la détend légèrement. Assaisonner de sel et une petite pincée de Cayenne. Le citron devrait lever et équilibrer la richesse sans faire de la sauce un goût aigre; la Cayenne est une chaleur de fond que vous sentez plus que le goût.",
      "visualCue": {
        "primaryTarget": "Une sauce satinée à la couleur du beurre doux, mais versable, qui se détache du citron. Il coule dans un ruban lisse et enveloppe l'arrière d'une cuillère dans une feuille uniforme et brillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Goûte plat et massivement de beurre, sous-assaisonnement, sans éclat ni ascenseur en bouche.",
            "action": "Ajouter le jus de citron quelques gouttes à la fois et un peu plus de sel, goûter après chaque addition jusqu'à ce que la sauce ait un goût équilibré et vivant."
          },
          {
            "state": "Perfect",
            "description": "Équilibré et brillant: riche mais lumineux, avec un bord citronné propre et une chaleur faible de la cayenne. Il est assez lâche pour verser encore assez épais pour faire une sieste.",
            "action": "Servir immédiatement ou tenir doucement au chaud jusqu'à ce qu'il soit nécessaire."
          },
          {
            "state": "Overdone",
            "description": "Trop épais et pâteux, ou trop tranchant et aigre de sur-acidification. La sauce a un goût mince et de tarte plutôt que riche.",
            "action": "Si trop épais, fouetter dans une cuillère à café d'eau chaude pour se détendre. Si vous êtes trop aigre, vous ne pouvez pas retirer l'acide — fouetter un peu plus de beurre chaud pour rééquilibrer la richesse."
          }
        ]
      },
      "feelCue": "La sauce doit d'abord avoir un goût riche, puis lumineux, puis chaud — trois notes en séquence. Sur la cuillère, il devrait se sentir comme du velours chaud, jamais collant."
    },
    {
      "nodeId": "step_4",
      "action": "Attendez",
      "inputs": [
        "finished_hollandaise"
      ],
      "outputState": "held_hollandaise",
      "instructions": "La Hollande est une émulsion vivante et fragile qui ne peut pas être réchauffée. Maintenez-le au chaud — pas au chaud — dans son bol sur l'eau chaude (pas dans) autour de 50-60 C / 120-140 F, ou dans un endroit chaud près du poêle, fouettant occasionnellement. Utiliser dans une heure ou deux. Au-dessus d'environ 65 C / 150 F les jaunes se brouillent et la sauce se brise; laissez-la refroidir et le beurre se sert et se sépare.",
      "visualCue": {
        "primaryTarget": "La sauce reste souple, brillante et chaude au toucher, sans peau, sans pleurs de beurre et sans grain. Un doux fouet le ramène à un éclat doux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Parti froid et raide — le beurre a commencé à se fixer, la surface semble terne et pâteuse, et il ne se déverse plus.",
            "action": "fouetter dans une cuillère à café d'eau chaude (pas chaude) et mettre le bol brièvement sur l'eau chaude, fouetter, pour le ramener doucement à la température et à la consistance."
          },
          {
            "state": "Perfect",
            "description": "Chaud, fluide, brillant et stable. Il verse dans un ruban lisse et fait des siestes. Pas de peau, pas d'huile sur le dessus.",
            "action": "Déposer sur les œufs, le poisson ou les légumes et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Tenu trop chaud ou trop long : granuleux et cassé, avec un film sur le dessus et un brouillard de beurre libre aux bords, parfois sentant l'œuf trop cuit.",
            "action": "S'il est simplement cassé par la chaleur, fouetter une cuillère à soupe d'eau froide ou un jaune frais dans un bol propre et ré-émulsionner la sauce en elle. Si les jaunes ont brouillé, jetez et faites un lot frais."
          }
        ]
      },
      "feelCue": "Touchez le bol : il devrait se sentir comme un bain chaud, jamais chaud. S'il est trop chaud pour que vos doigts s'arrêtent confortablement, il est trop chaud pour la sauce — le bouger du feu avant qu'il ne se brouille."
    }
  ]
};
