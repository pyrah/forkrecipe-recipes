export default {
  "repoId": "master_italian_bagna_cauda_001",
  "parentRepoId": null,
  "slug": "bagna-cauda",
  "author": "ForkRecipe Kitchen",
  "title": "Bagna Cauda",
  "description": "Une sauce piémontaise chaude d'ail dissoute dans de l'huile d'olive avec de l'anchois fondu — ancienne, piquante, profondément salée, réchauffant la table d'hiver d'un pot commun de terre cuite. Les légumes crus entrent, transformés par le bain chaud en quelque chose de plus riche.",
  "cuisine": "Italien",
  "culture": "Piémontais",
  "category": "sauces",
  "tags": [
    "bagna-cauda",
    "Italien",
    "anchois",
    "Ail",
    "piémontais"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Allium",
      "name": "Giroves d'ail, pelées",
      "ratioValue": 12,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Inosinate",
      "name": "Anchois salins, rincés et filetés",
      "ratioValue": 12,
      "defaultUnit": "fillets",
      "substitutions": [
        "Filets d'anchois remplis d'huile, égouttés"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 1,
      "defaultUnit": "cup",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Beurre non salé",
      "ratioValue": 4,
      "defaultUnit": "tbsp",
      "substitutions": [
        "omit pour une version huile plus pure"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Lait entier (pour l'ail pré-sevrant)",
      "ratioValue": 1,
      "defaultUnit": "cup",
      "substitutions": [
        "eau pour tremper"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin et poivre blanc",
      "ratioValue": 1,
      "defaultUnit": "to taste",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire fondre l'ail",
      "inputs": [
        "ing_01",
        "ing_05"
      ],
      "outputState": "mellowed_garlic",
      "instructions": "Placer les gousses d'ail pelées dans une petite casserole et couvrir de lait froid. Porter doucement à mijoter à feu doux et cuire 10-12 minutes jusqu'à ce que l'ail soit complètement tendre et ait perdu la plupart de sa morsure aiguë. Égoutter et jeter le lait. Cette étape transforme l'agression de l'ail cru en quelque chose de doux et moelleux — ce n'est pas facultatif si vous voulez une bagna cauda accessible.",
      "visualCue": {
        "primaryTarget": "Les girofles d'ail qui sont passés d'un blanc étoilé et ferme à un ivoire pâle, gonflés et filants, doivent se serrer facilement entre deux doigts sans résistance.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les gousses d'ail tiennent encore leur forme fermement et goûtent vif et cru quand vous pincez un. Le lait commence à peine à mijoter.",
            "action": "Continuer à mijoter, partiellement couvert, encore 5 minutes. L'ail doit adoucir complètement ou ne pas se dissoudre dans l'huile."
          },
          {
            "state": "Perfect",
            "description": "Les girofles sont complètement tendres, ivoire-pale, presque translucides aux bords, et goûtent moelleux et doux avec seulement un murmure de netteté d'ail.",
            "action": "Égoutter et passer immédiatement à l'huile avec l'ail égoutté."
          },
          {
            "state": "Overdone",
            "description": "L'ail s'est désintégré dans le lait et certains girofles se sont brisés, devenant légèrement jaunes.",
            "action": "De toute façon, l'ail dissous fondra encore plus facilement dans l'huile. Jetez le lait comme prévu."
          }
        ]
      },
      "feelCue": "Appuyez sur une girofle entre le pouce et l'index — elle devrait donner complètement sans croquer, comme la chair d'avocat mûre. Si elle est intacte, elle a besoin de plus de temps."
    },
    {
      "nodeId": "step_2",
      "action": "Infuser et fondre",
      "inputs": [
        "mellowed_garlic",
        "ing_02",
        "ing_03"
      ],
      "outputState": "infused_bagna",
      "instructions": "Dans une grande casserole basse ou en terre cuite bagna cauda, mélanger l'huile d'olive chaude et l'ail égoutté au plus bas feu possible. Ajouter les filets d'anchois rincés. Cuire doucement, en remuant occasionnellement, pendant 10-15 minutes. Les anchois se dissoudreont complètement dans l'huile; appuyez-les avec une cuillère en bois pour aider. L'ail doit aussi se décomposer progressivement, le masturber contre la poêle avec la cuillère. Il ne faut pas non plus frire ou frire agressivement.",
      "visualCue": {
        "primaryTarget": "Une huile chaude, dorée-brun, épilée avec les restes des anchois — quelques traces fibreuses peuvent rester, mais la plupart ont fondu dans l'huile, et l'ail est devenu une pâte molle et dissolue sur le fond de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Filets d'anchois encore visiblement intacts, flottant dans l'huile en bandes reconnaissables. L'ail est toujours dans des gousses entières. L'huile est chaude mais les deux n'ont pas été intégrées.",
            "action": "Continuer à feu doux, en remuant et en appuyant avec une cuillère en bois. Les anchois ont besoin de temps et de chaleur douce pour se dissoudre complètement."
          },
          {
            "state": "Perfect",
            "description": "Les anchois ont presque complètement fondu dans l'huile, l'ail est cassé en fragments mous qui se dissolvent quand on les presse. L'huile est chaude, parfumée et profondément salée, riche en umami, mais pas poissonneuse.",
            "action": "Incorporer le beurre pour finir et assaisonner."
          },
          {
            "state": "Overdone",
            "description": "L'ail et l'anchois font frire plutôt que de fondre — les bords ont bruni, l'huile fume, et la sauce sent vif et amer.",
            "action": "Retirer immédiatement du feu. Laisser refroidir légèrement et goûter — si la note amère est forte, ajouter une cuillère à soupe de lait chaud ou de crème pour la calmer."
          }
        ]
      },
      "feelCue": "Mélanger la sauce — elle doit se déplacer avec le poids épais et chaud de l'huile infusée de solides dissous. Vous devriez sentir la mer sous l'ail, mais rien de tranchant ou d'acride."
    },
    {
      "nodeId": "step_3",
      "action": "Terminer et servir",
      "inputs": [
        "infused_bagna",
        "ing_04",
        "ing_06"
      ],
      "outputState": "finished_bagna_cauda",
      "instructions": "Hors de la chaleur la plus basse possible, mélanger le beurre froid pièce par pièce jusqu'à ce qu'il fond dans l'huile chaude, donnant à la sauce une texture légèrement plus crémeuse et plus riche. Assaisonner de poivre blanc. Transférer dans un récipient servant de la terre cuite au-dessus d'une lampe à thé ou d'une bougie pour le garder au chaud à table. Servir avec des légumes crus et brièvement blanchis — cardons, fenouil, radicchio, poivrons, carottes.",
      "visualCue": {
        "primaryTarget": "Une sauce chaude, dorée ambre avec un léger nuage de l'ail dissous et de l'anchois, le beurre ajoutant un léger éclat et adoucissant la couleur à un or pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre n'a pas été ajouté ou n'a pas fondu — la sauce semble purement huileuse sans la légère crémosité que le beurre apporte.",
            "action": "Ajouter le beurre froid graduellement hors du feu; remuer jusqu'à ce que chaque pièce fonde avant d'ajouter le suivant."
          },
          {
            "state": "Perfect",
            "description": "Or chaud, parfumé et nuageux avec une douce richesse. Le trempage d'une fronde de fenouil la laisse brillante avec de la sauce. L'odeur est intensément salée: anchois, ail, huile d'olive chaude.",
            "action": "Gardez au chaud sur une bougie. Remuer à l'occasion."
          },
          {
            "state": "Overdone",
            "description": "La sauce s'est séparée — l'huile est mise en commun séparément d'une pâte d'ail-anchois dense et huileuse au fond du récipient.",
            "action": "fouetter vigoureusement sur une chaleur très douce pour réémulsionner. Une cuillère à café d'eau chaude ou de lait peut aider à le ramener ensemble."
          }
        ]
      },
      "feelCue": "Plongez un morceau de légume et soulevez - le: la sauce doit s'accrocher dans une couche chaude et fine, ne pas s'égoutter comme de l'eau ou s'accrocher dans d'épais empiècements. Il devrait se sentir comme de l'huile chaude et parfumée sur la langue."
    }
  ]
};
