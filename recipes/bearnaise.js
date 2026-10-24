export default {
  "repoId": "fork_french_bearnaise_001",
  "parentRepoId": "master_french_hollandaise_001",
  "slug": "bearnaise",
  "parentSlug": "hollandaise",
  "author": "ForkRecipe Kitchen",
  "title": "Béarnaise",
  "description": "L'émulsion de steak-house — l'hollandaise reconstruite sur une tarte, la réduction herbacée du vinaigre de vin blanc, l'échalote, l'estragon et le poivre fissuré à la place du citron, fini avec un flirt d'estragon frais.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "sauces",
  "tags": [
    "sauce",
    "français",
    "émulsion",
    "œuf",
    "estragon",
    "Steak"
  ],
  "difficulty": 4,
  "activeTime": "30 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2025-06-09",
  "updatedAt": "2025-06-09",
  "forkNote": "Hollandaise construite sur une réduction de l'estragon, de l'échalote et du vinaigre au lieu du citron — l'émulsion de steak-house.",
  "changes": {
    "ingredientsAdded": 4,
    "ingredientsRemoved": 2,
    "ingredientsModified": 0,
    "stepsAdded": 1,
    "stepsRemoved": 0,
    "stepsModified": 1
  },
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 3,
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
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "vinaigre de vin blanc",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre d'estragon",
        "vinaigre de champagne"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Échalote (mincée)",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Tarragon (plus tiges pour la réduction)",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": [
        "Cerveau (mineur)"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Maïs de poivre noir craqué",
      "ratioValue": 0.3,
      "defaultUnit": "part",
      "substitutions": [
        "grains de poivre blancs"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire réduire",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "tarragon_reduction",
      "instructions": "Mélanger le vinaigre, l'échalote hachée, les tiges d'estragon (réserver les feuilles) et les grains de poivre fissurés dans une petite casserole. Laisser mijoter doucement jusqu'à ce que le liquide se réduise à environ deux cuillères à soupe d'essence sirupeuse intensément aromatisée. Étendre et presser les solides, jeter les tiges, l'échalote et le poivre — vous ne voulez que le liquide parfumé et acide. Laisser refroidir à réchauffer avant de rencontrer les jaunes; la réduction chaude commencerait à les cuire.",
      "visualCue": {
        "primaryTarget": "Environ deux cuillerées à soupe de liquide pâle-ambre nuageux qui sent fortement le vinaigre, l'estragon doux-anis et le poivre. Il est réduit, mais encore nettement liquide, pas un glaçage.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Encore un bassin mince et aqueux avec peu d'arôme — à peine réduit de son volume de départ. L'odeur du vinaigre est crue et dure.",
            "action": "Continuez à mijoter doucement. Le bord dur du vinaigre doit se fondre comme il se concentre et les aromatiques infuser."
          },
          {
            "state": "Perfect",
            "description": "Réduit à environ deux cuillères à soupe, sirupeux aux bords, profondément parfumé avec l'estragon et le poivre. Le vinaigre a perdu sa bouchée brute.",
            "action": "Plongez dans un tamis fin, pressez les solides. Laisser le liquide refroidir à chaud, puis passer à la construction du sabayon."
          },
          {
            "state": "Overdone",
            "description": "Réduction de deux cuillères à soupe passées dans une glaçure collante, sombre et presque sèche collée à la poêle — ou brûlée et acride.",
            "action": "Loyer en fouettant dans une cuillère à soupe d'eau ou de vinaigre hors du feu. S'il a brûlé et sent l'acride, recommencez la réduction — les aromatiques brûlés taperont toute la sauce."
          }
        ]
      },
      "feelCue": "La cuisine doit se remplir de l'odeur d'estragon et de vinaigre chaud, forte et douce. La réduction devrait toujours slosh dans la poêle, sans s'accrocher comme du sirop."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "ing_01",
        "tarragon_reduction"
      ],
      "outputState": "sabayon",
      "instructions": "Mettre un bol thermofuge sur une casserole d'eau à peine mijotée — le bol ne doit pas toucher l'eau, et l'eau doit vapeur, pas bouillir. Ajouter les jaunes et la réduction de l'estragon refroidi. fouetter constamment et vigoureusement, lever le bol de la chaleur toutes les quelques secondes pour contrôler la température, jusqu'à ce que les jaunes triplent en volume et s'épaississent à un sabayon pâle qui tient un ruban. Trop de chaleur brouille les jaunes; trop peu et ils ne s'épaississent jamais assez pour porter le beurre.",
      "visualCue": {
        "primaryTarget": "Pale, brillant et triple dans le volume, légèrement flanqué avec la réduction. Lorsque vous soulevez le fouet, le sabayon tombe dans un ruban épais qui est assis sur la surface pendant deux ou trois secondes avant de fondre.",
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
      "nodeId": "step_3",
      "action": "Monter au beurre",
      "inputs": [
        "sabayon",
        "ing_02"
      ],
      "outputState": "emulsified_bearnaise",
      "instructions": "Hors du feu (ou avec le bol reposant sur une serviette humide pour la stabilité), commencer à ajouter le beurre clarifié chaud dans un cours d'eau mince et stable tout en fouettant sans pause. Commencez à tomber jusqu'à ce que l'émulsion s'épaississe et s'épaississe visiblement, puis augmentez jusqu'à un filet lent. Gardez le beurre au chaud, pas au chaud — environ 40-50 C / 105-120 F — et le sabayon au chaud aussi, donc les gouttelettes se dispersent uniformément. Ajouter le beurre plus rapidement que les jaunes peut l'absorber, ou laisser l'un ou l'autre composant refroidir, et l'émulsion se brise.",
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
            "action": "Passez à la fin. fouetter l'estragon haché, le sel et la cayenne."
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
      "nodeId": "step_4",
      "action": "Terminer",
      "inputs": [
        "emulsified_bearnaise",
        "ing_09",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_bearnaise",
      "instructions": "fouetter dans une cuillère généreuse des feuilles d'estragon frais, finement hachées, puis assaisonner avec du sel et une petite pincée de cayenne. Bouche: la réduction fournit déjà l'acidité, de sorte que l'estragon frais est pour le lifting vert, l'anis-brillant et les taches de couleur. Ajustez seulement le sel — n'ajoutez pas de citron. La sauce doit avoir un goût riche, acidulé et sans équivoque d'estragon.",
      "visualCue": {
        "primaryTarget": "Une sauce épaisse, satinée, pâle-or vert tacheté d'estragon frais. Il sirote une cuillère dans une feuille brillante et sent le beurre et l'anis.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Goûte plat et beurré sans lifting à base de plantes, et ressemble à de l'or pâle sans taches vertes.",
            "action": "fouetter l'estragon frais plus haché et un peu de sel, déguster jusqu'à ce que l'herbe se présente et la sauce a un goût équilibré et vivant."
          },
          {
            "state": "Perfect",
            "description": "Riche et tannant avec un parfum d'estragon clair, uniformément flanqué vert, brillant et assez épais pour faire une cuillère mais assez lâche pour faire une cuillère sur le steak.",
            "action": "Servir immédiatement sur le steak grillé, ou tenir doucement au chaud jusqu'à ce que nécessaire."
          },
          {
            "state": "Overdone",
            "description": "Trop épaisse et pâteuse, ou tellement sur-selée et acide de la réduction qu'elle a un goût vif plutôt que riche.",
            "action": "Si trop épais, fouetter dans une cuillère à café d'eau chaude pour se détendre. Si vous êtes trop vif, fouettez un peu plus de beurre chaud pour compléter la richesse — vous ne pouvez pas enlever l'acidité une fois qu'elle est dedans."
          }
        ]
      },
      "feelCue": "La sauce doit d'abord avoir un goût riche, puis tannant, puis vert et herbacé. Sur la cuillère il devrait se sentir comme du velours chaud traversé avec de petites feuilles, jamais collé."
    }
  ]
};
