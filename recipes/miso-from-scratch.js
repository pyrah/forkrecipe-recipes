export default {
  "repoId": "master_japanese_miso-from-scratch_001",
  "parentRepoId": null,
  "slug": "miso-from-scratch",
  "author": "ForkRecipe Kitchen",
  "title": "Miso fait maison",
  "description": "Le soja cuit inoculé avec du koji et emballé sous ferment de sel pendant des mois dans une pâte dense et ambre — umami concentré, terre rôtie, et une complexité que seul le temps peut construire.",
  "cuisine": "Japonais",
  "culture": "Washoku",
  "category": "fermented",
  "tags": [
    "miso",
    "soja",
    "fermenté",
    "Japonais",
    "umami"
  ],
  "difficulty": 5,
  "activeTime": "3 hours",
  "totalTime": "90 days",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 8,
    "sour": 3,
    "bitter": 2,
    "umami": 10,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Soya séché",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "Pois chiches (style shiro-miso)",
        "soja noir"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Riz sec koji (Aspergillus oryzae)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "orge koji pour mugi miso"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel marin non iodé",
      "ratioValue": 4.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Hydration",
      "name": "Liquide de cuisson de soja réservé",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Inosinate",
      "name": "Liquide de cuisson du soja (tamari)",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trempage",
      "inputs": [
        "ing_01"
      ],
      "outputState": "soaked_soybeans",
      "instructions": "Rincer le soja sous l'eau froide, trier les haricots écrémés ou décolorés. Couvrir d'au moins trois fois leur volume dans l'eau froide et tremper pendant 18 à 24 heures à température ambiante. Les haricots doubleront à peu près en taille et les peaux deviendront tendues. Égoutter et jeter l'eau imbibée — elle contient des oligosaccharides flatulents. Les haricots sont prêts quand un ongle presse facilement avec une résistance minimale.",
      "visualCue": {
        "primaryTarget": "Plumeau, haricots dorés pâles, entièrement ronds et doux, avec des peaux taupes. L'eau de trempe a légèrement bronzé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les haricots sont encore ridés, se sentent durs lorsqu'ils sont pressés, et l'eau de trempe est encore presque claire.",
            "action": "Faites tremper 4 à 6 heures de plus. L'eau de refroidissement ralentit significativement l'absorption."
          },
          {
            "state": "Perfect",
            "description": "Les haricots ont doublé en taille, se sentent fermes, mais se laissent aller doucement sous la pression des vignettes.",
            "action": "Égoutter et cuisiner."
          },
          {
            "state": "Overdone",
            "description": "Les peaux se divisent, les haricots se sentent très doux et waterlogged.",
            "action": "Cuire immédiatement — ils sont juste sursautés, pas ruinés. Réduire légèrement le temps de cuisson."
          }
        ]
      },
      "feelCue": "Un haricot imbibé pressé entre le pouce et l'index devrait s'aplatir avec une résistance modérée, comme presser une gomme en caoutchouc souple. Un haricot dur va craquer; un haricot parfait va donner en douceur."
    },
    {
      "nodeId": "step_2",
      "action": "Bouillir",
      "inputs": [
        "soaked_soybeans",
        "ing_04"
      ],
      "outputState": "cooked_soybeans",
      "instructions": "Couvrir le soja trempé d'eau froide fraîche de 3 pouces et porter à ébullition à feu vif. Écraser et jeter la mousse grise qui monte dans les 10 premières minutes — c'est de l'amertume. Réduire à une mijotée vigoureuse et cuire pendant 3 à 5 heures jusqu'à ce que les haricots soient très doux : ils doivent écraser complètement entre deux doigts sans résistance. Réserver 2 tasses du liquide de cuisson (tamaris, ambre profond, savore). Les haricots doivent être suffisamment mous pour mash — les haricots sous-cuits créent un miso gritty et grumeux qui ferment mal.",
      "visualCue": {
        "primaryTarget": "Les haricots sont d'or pâle, complètement tendres, et écrasent entre deux doigts dans une pâte lisse sans grain.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre de la fève est encore légèrement ferme ou crayeux quand mordu. Le haricot tient sa forme sous pression.",
            "action": "Continuez à cuisiner. Vérifiez toutes les 30 minutes. Les haricots secs produisent un miso gris."
          },
          {
            "state": "Perfect",
            "description": "Les haricots s'écrasent à une pâte lisse entre les doigts. Le haricot entier est de la même couleur dorée pâle.",
            "action": "Égoutter, réserver le liquide de cuisson et laisser refroidir à 40 °C (104 °F) avant d'ajouter koji."
          },
          {
            "state": "Overdone",
            "description": "Les haricots s'effondrent, les peaux éclatent, l'eau de cuisson est très épaisse.",
            "action": "Continuez — c'est vraiment bien pour miso. Plus de surface pour koji à travailler."
          }
        ]
      },
      "feelCue": "Prenez un seul haricot cuit et appuyez-le entre le pouce et l'index jusqu'à ce qu'il s'effondre — la pâte devrait se sentir comme un hummus lisse sans grit. L'eau de cuisson réservée sera ambre foncée et goûtera profondément."
    },
    {
      "nodeId": "step_3",
      "action": "Mash",
      "inputs": [
        "cooked_soybeans"
      ],
      "outputState": "bean_paste",
      "instructions": "Égoutter le soja cuit (réserver le liquide de cuisson) et l'étaler sur une plaque pour refroidir à moins de 40 °C (104 °F) – les haricots chauds tueront les spores de moisissures koji. Une fois assez frais pour tenir confortablement, mash à l'aide d'une maseuse de pommes de terre, d'un moulin à nourriture, ou en appuyant dans un sac à fermeture éclair. Le but est une pâte lisse et uniforme avec des morceaux de haricots minimes. Une certaine texture est acceptable dans le miso style pays; la douceur totale est le but pour le miso raffiné.",
      "visualCue": {
        "primaryTarget": "Une pâte dorée pâle et lisse, légèrement collante, uniforme, sans haricots entiers visibles. La texture ressemble à du beurre d'arachide épais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La moitié des haricots sont encore entiers ou en morceaux. La pâte est bosselée et inégale.",
            "action": "Continuer la massuration — des miso ferments grumeaux inégalement et peuvent contenir des poches sèches."
          },
          {
            "state": "Perfect",
            "description": "Pâte lisse, collante, uniformément dorée. Une poignée pressée entre les palmiers tient sa forme.",
            "action": "Laisser refroidir à 40°C ou moins avant de procéder."
          },
          {
            "state": "Overdone",
            "description": "La pâte est tellement travaillée qu'elle est devenue chaude par friction.",
            "action": "Répartir mince et laisser refroidir en dessous de 40°C avant d'ajouter koji — la chaleur tue Aspergillus."
          }
        ]
      },
      "feelCue": "La pâte de purée devrait se sentir chaude mais pas chaude contre l'intérieur de votre poignet — comme un bain confortable, pas une douche. Si ça brûle, attendez plus longtemps. La pâte sera collante et attachée à vos paumes."
    },
    {
      "nodeId": "step_4",
      "action": "Mélange",
      "inputs": [
        "bean_paste",
        "ing_02",
        "ing_03"
      ],
      "outputState": "miso_mixture",
      "instructions": "Dans un grand bol, mélanger le riz koji et le sel. Jetez vos mains jusqu'à ce qu'elles soient complètement mélangées — le sel recouvre chaque grain de koji. Ajouter ce mélange koji-sel à la pâte de haricots refroidie. Mélangez soigneusement avec vos mains, pétrissez et pressez jusqu'à ce que le koji soit entièrement incorporé et qu'il ne reste pas d'embouts blancs. Si le mélange se sent trop raide et émietté, ajouter la cuillère à soupe liquide réservée à la cuisson jusqu'à ce que la pâte se maintienne lorsqu'elle est pressée dans une boule. Le mélange doit tenir sa forme comme de l'argile humide.",
      "visualCue": {
        "primaryTarget": "Une pâte uniforme de terre-tan avec des grains de riz parfois visibles du koji. Ni trop humide (glousse immédiatement) ni trop sec (cracks quand pressé).",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des grains de koji blancs encore visibles comme des morceaux distincts. Des stries de sel visibles dans la pâte.",
            "action": "Continuer le pétrissage pendant 5 minutes de plus — même la distribution est essentielle pour une fermentation uniforme."
          },
          {
            "state": "Perfect",
            "description": "Couleur jaune-auto constante. Il tient une balle ferme lorsqu'il est pressé. Les grains de Koji sont distribués uniformément.",
            "action": "Former en boules denses et emballer dans un récipient de fermentation."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est très humide et lâche de trop de liquide ajouté.",
            "action": "Étendre mince, laisser se raffermir légèrement, puis procéder — l'excès d'humidité ralentit la fermentation."
          }
        ]
      },
      "feelCue": "Le mélange miso devrait se sentir ferme, légèrement collant à modeler l'argile — cohésive, non friable, avec les grains koji lui donnant une texture légèrement granulaire contre vos palmiers. Il devrait sentir légèrement sucré du koji, terreux des haricots, et fortement salé."
    },
    {
      "nodeId": "step_5",
      "action": "Boîte",
      "inputs": [
        "miso_mixture"
      ],
      "outputState": "packed_miso",
      "instructions": "Stérilisez votre cruche de fermentation ou contenant avec un chiffon propre humide avec shochu ou vodka. Former le mélange miso dans des boules de baseball et les jeter fermement dans le vaisseau — ce mouvement d'emballage élimine les poches d'air, qui provoquent la croissance des moisissures. Appuyez fermement sur chaque couche à plat avec une spatule plate ou votre poing. Lorsque tout le miso est emballé, lisser la surface complètement à plat. Saupoudrer une fine couche de sel (environ 2 c. à soupe) sur toute la surface supérieure comme barrière de protection. Appuyez sur l'enveloppe plastique directement sur la surface, puis ajoutez un poids (un sac scellé de sel fonctionne bien).",
      "visualCue": {
        "primaryTarget": "Une surface lisse et plane de miso dans le récipient sans fissures ni dépressions. Barrière de sel visible comme une fine croûte blanche sur le dessus. Enveloppe plastique pressée directement à la surface sans trou d'air.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches d'air visibles, surface inégale et piquée.",
            "action": "Réemballez fermement. Chaque poche d'air est une colonie de moisissure qui attend de se former."
          },
          {
            "state": "Perfect",
            "description": "Surface dense, lisse, uniforme. Conteneur scellé avec un couvercle de contact direct et un poids. Aucune fissure visible.",
            "action": "Étiquette avec la date et stocker dans un endroit frais et sombre."
          },
          {
            "state": "Overdone",
            "description": "Miso a été emballé si fermement le conteneur est dangereusement plein.",
            "action": "Enlevez - en un deuxième contenant — le miso se développe légèrement à mesure qu'il ferment."
          }
        ]
      },
      "feelCue": "Pressez votre palmier à plat sur le miso emballé — il devrait se sentir dense et inébranlable, comme de l'argile ferme. Tout donner ou spongieux suggère des poches d'air qui doivent être pressées."
    },
    {
      "nodeId": "step_6",
      "action": "Ferment",
      "inputs": [
        "packed_miso"
      ],
      "outputState": "aged_miso",
      "instructions": "Conserver à température ambiante froide (60–75°F / 15–24°C), à l'abri de la lumière directe. La moisissure de surface blanche ou tan (tamari) est normale et attendue – racler et jeter à la marque de 30 jours lorsque vous inspectez. Le liquide de type Shoyu qui s'accumule à la surface est tamari : remuez-le. Vérifiez chaque mois: à 45 jours le miso est un jeune style shinshu — doré, légèrement doux et léger. À 90 jours, il devient un miso jaune pâle arrondi complexe. À 6 mois : aka miso corsé. À 1 an : robuste, foncé, concentré, de type hachoo.",
      "visualCue": {
        "primaryTarget": "À 90 jours, le miso s'est obscurci, de l'or pâle à l'ambre-tan profond. Le scorage de la surface révèle une pâte qui sent fortement la sauce de soja et le grain rôti.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "À 30 jours : encore pâle et sent la pâte de soja salée avec peu de complexité. Goûte cru et dur.",
            "action": "Respirez et continuez à fermenter. Miso ne peut pas être précipité."
          },
          {
            "state": "Perfect",
            "description": "À 90 jours : d'or profond-ambre, sent intensément salé avec douceur. Goûte arrondi, salé et complexe sur la langue.",
            "action": "Goûtez chaque semaine à partir de ce point et récoltez lorsque vous atteignez la profondeur désirée."
          },
          {
            "state": "Overdone",
            "description": "Après 12 mois et plus : très foncé, presque noir. Extensivement salé et concentré.",
            "action": "Ceci est intentionnel pour le style hachoo miso — utiliser en petites quantités comme pâte assaisonnement, diluée."
          }
        ]
      },
      "feelCue": "Le miso prêt donne lentement à une cuillère pressée dans la surface, laissant une impression brillante qui tient sa forme. Il doit sentir comme une version sophistiquée et savore de sauce de soja — jamais ranci, jamais putride, toujours en quelque sorte comestible et invitant."
    }
  ]
};
