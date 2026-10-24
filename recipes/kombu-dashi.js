export default {
  "repoId": "master_japanese_kombu_dashi_001",
  "parentRepoId": null,
  "slug": "kombu-dashi",
  "author": "ForkRecipe Kitchen",
  "title": "Kombu Dashi",
  "description": "Cold-brew kombu dashi — l'expression la plus pure de l'umami, un bouillon cristallin de rien d'autre que la varech séchée et l'eau froide, l'épine dorsale végétarienne de la cuisine japonaise avec une profondeur océanique propre.",
  "cuisine": "Japonais",
  "culture": "Végétaux japonais",
  "category": "stocks",
  "tags": [
    "végétalien",
    "Sans gluten",
    "Japonais",
    "Dashi",
    "kombu",
    "umami"
  ],
  "difficulty": 1,
  "activeTime": "5 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Kombu, de préférence ma-kombu",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "rausu-kombu (richisseur)",
        "rishiri-kombu (plus délicat)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau froide (de préférence douce ou filtrée)",
      "ratioValue": 1000,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Essuie",
      "inputs": [
        "ing_01"
      ],
      "outputState": "prepared_kombu",
      "instructions": "Examinez le kombu: il devrait être brunâtre-vert foncé avec un lourd revêtement en poudre blanche — le mannitol, un alcool sucré naturel qui est le fondement de la douceur et de l'umami de kombu. Essuyer la surface très doucement avec un chiffon à peine humide ou une serviette en papier sec, en enlevant seulement le grain ou les débris. Ne pas rincer le kombu sous l'eau courante et ne pas frotter : la poudre blanche est précieuse et doit être conservée. Couper ou marquer le kombu en petits morceaux (longueur d'environ 10 cm) avec des ciseaux pour augmenter la surface exposée à l'eau.",
      "visualCue": {
        "primaryTarget": "Les morceaux de Kombu montrent encore un revêtement blanc clair de poudre sur leur surface, sans tache de varech noir nu et brillant visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les débris ou le grain sont encore visibles à la surface. Petites particules marines adhérant aux frondes.",
            "action": "Essuyer de nouveau avec un chiffon sec — ciblé, pas des traits larges."
          },
          {
            "state": "Perfect",
            "description": "Propre, intact kombu avec la pleine fleur de mannitol blanc conservé. Les morceaux sentent la mer — propre, minéral, légèrement sucré — pas poissonneuse.",
            "action": "Submerger dans l'eau froide."
          },
          {
            "state": "Overdone",
            "description": "Rincé sous l'eau courante — la poudre blanche s'est lavée. Kombu est nu, sombre et brillant.",
            "action": "Le dashi sera toujours bon mais sera plus léger dans le corps et la douceur. Steep pendant 15 minutes supplémentaires pour compenser."
          }
        ]
      },
      "feelCue": "Exécutez un ongle doucement sur la surface du kombu, puis frottez le résidu entre vos doigts.La poudre blanche doit être cireuse et presque douce, pas sèche comme du sable ou du sel."
    },
    {
      "nodeId": "step_2",
      "action": "Streep",
      "inputs": [
        "prepared_kombu",
        "ing_02"
      ],
      "outputState": "steeping_dashi",
      "instructions": "Placer le kombu préparé dans un pot propre ou un récipient profond. Versez l'eau froide dessus. Laisser raide à température ambiante pendant 30-60 minutes. Au cours de cette extraction à froid, l'acide glutamique, les minéraux et le mannitol se dissolvent lentement dans l'eau d'une manière que l'extraction à chaud ne peut se répliquer — l'eau chaude extrait plus rapidement mais tire aussi des composés amers des parois cellulaires du kombu. L'eau passera progressivement de clair à un peu vert doré lorsque les glutamates se dissoudreont.",
      "visualCue": {
        "primaryTarget": "Après 30 à 60 minutes, l'eau s'est déplacée vers un vert doré pâle et faible. Le kombu est hydraté et s'est élargi, devenant plus doux et plus souple.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Moins de 15 minutes — l'eau est encore presque claire. Kombu est toujours rigide.",
            "action": "Attendez au moins 30 minutes. L'extraction du glutamate nécessite du temps; il n'y a pas de raccourci à température froide."
          },
          {
            "state": "Perfect",
            "description": "Après 45-60 minutes, l'eau est un délicat or pâle, légèrement vert, et sent propre de la mer. Kombu est maintenant doux et souple, avec des bords légèrement adoucis.",
            "action": "Commencez à chauffer doucement."
          },
          {
            "state": "Overdone",
            "description": "Plus de 3 heures à température ambiante — le kombu a libéré un excès d'acide alginique, donnant à l'eau une texture légèrement visqueuse.",
            "action": "Procéder, mais chauffer brièvement pour coaguler l'excès de mucilage avant la déformation."
          }
        ]
      },
      "feelCue": "Soulevez un morceau de kombu abîmé et laissez-le draper au-dessus de votre doigt — le kombu correctement à l'épaisseur froide coule comme un ruban doux, tandis que le kombu sous l'épaisseur est toujours rigide et se brise plutôt que de plier."
    },
    {
      "nodeId": "step_3",
      "action": "Chaleur",
      "inputs": [
        "steeping_dashi"
      ],
      "outputState": "heated_dashi",
      "instructions": "Placez le pot sur le réglage thermique le plus bas possible. Chauffer très lentement, en visant une température de 55-65°C — cette plage maximise l'extraction du glutamate tout en maintenant le bouillon propre et clair. Vous verrez de minuscules bulles qui commencent à se former à la surface du kombu et au fond du pot lorsque l'eau approche de 60°C. C'est la fenêtre critique. Regardez attentivement : au moment où ces bulles apparaissent sur les bords du kombu, la température est parfaite. Ne laissez pas l'eau mijoter.",
      "visualCue": {
        "primaryTarget": "Petites bulles point d'épingle s'accrochant à la surface du kombu et au fond du pot. L'eau tremble très doucement mais ne bouge pas. Le dashi est passé de l'or pâle à un ambre chaud et clair.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas de bulles visibles. L'eau est encore froide ou à peine chaude. Kombu est à plat et immobile.",
            "action": "Augmentez la chaleur très légèrement — le stade de bulle est critique pour l'extraction finale de la douceur et du corps."
          },
          {
            "state": "Perfect",
            "description": "Petites bulles de tête d'épingle accrochées aux bords de kombu et aux murs de pot. Le dashi est chaud au toucher (peut tenir une main à proximité sans s'éloigner). La couleur est un jaune-or chaud et clair.",
            "action": "Retirez immédiatement le kombu et éteignez le feu."
          },
          {
            "state": "Overdone",
            "description": "L'eau a mijoté ou bouilli — le kombu a tourné le dashi visqueux et légèrement visqueux, avec un arôme amer et iode-avant remplaçant la douceur océanique propre.",
            "action": "Le dashi n'est pas gâché — s'étirer immédiatement et refroidir rapidement. L'amertume sera présente mais ne sera pas écrasante dans un plat composé."
          }
        ]
      },
      "feelCue": "Maintenez votre paume au-dessus de la surface du pot à une distance de 5cm — vous devriez sentir la chaleur régulière et douce, équivalent à tenir votre main sur une tasse de thé chaude (pas chaude). Si cela vous force à vous retirer, la température est trop élevée."
    },
    {
      "nodeId": "step_4",
      "action": "Poignée",
      "inputs": [
        "heated_dashi"
      ],
      "outputState": "finished_kombu_dashi",
      "instructions": "Retirer les morceaux de kombu du pot avec des pinces ou une cuillère à fentes — ne pas les presser ou les presser, ce qui libère des composés amers. Enfilez le dashi dans un tamis à mailles fines (pas de cheesewack nécessaire — un dashi kombu bien fait devrait déjà être clair). Le dashi fini peut être utilisé immédiatement comme base pour la soupe miso, le bouillon de nouilles ou les plats mijotés. Réfrigéré, il garde 3 jours. Le kombu peut être mijoté avec de la sauce de soja et du mirin pour faire du tsukudani, un condiment sucré et salé.",
      "visualCue": {
        "primaryTarget": "Un liquide clair, pâle et doré, d'une clarté remarquable, comme une eau minérale fine et très légèrement colorée. Lorsqu'elle est fixée à la lumière, elle doit être complètement transparente.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Dashi est légèrement brumeux — le mucilage kombu n'a pas été complètement séparé. Petites particules visibles.",
            "action": "Plongez encore à travers un bon tamis. La clarté est la marque d'un kombu dashi correctement fait."
          },
          {
            "state": "Perfect",
            "description": "Clair cristallin, dashi doré. L'arôme est propre, océanique, très légèrement sucré. Le goût devrait fournir un umami doux et propre qui arrive lentement et persiste sans aucune netteté ou amertume.",
            "action": "Utiliser immédiatement ou réfrigérer dans un contenant scellé jusqu'à 3 jours."
          },
          {
            "state": "Overdone",
            "description": "Dashi est brun foncé et sent fortement l'iode et le varech — il a été chauffé trop fortement ou le kombu a été laissé dans l'eau bouillante.",
            "action": "Utiliser dans un plat fortement aromatisé où il sera équilibré par miso, sauce de soja, ou d'autres ingrédients audacieux. Pour des applications propres comme la soupe claire, remake avec contrôle de température correct."
          }
        ]
      },
      "feelCue": "Prenez une petite gorgée de dashi fini sans assaisonnement — vous devriez éprouver presque aucun goût au départ, suivi 5-8 secondes plus tard par une chaleur calme, qui répand sur le dos du palais qui est pur glutamate. Cette arrivée retardée est la signature de kombu dashi propre, correctement extrait."
    }
  ]
};
