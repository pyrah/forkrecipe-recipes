export default {
  "repoId": "master_french_duckconfit_001",
  "parentRepoId": null,
  "slug": "duck-confit",
  "author": "ForkRecipe Kitchen",
  "title": "Confit de canard",
  "description": "Les pattes de canard se guérissaient toute la nuit dans du sel grossier, des herbes et du genévrier, puis elles étaient immergées dans leur propre graisse fondue et cuites à 90 °C jusqu'à ce que la chair se détache dans des fils brillants soyeux sous une peau crépitante, brun cuivre.",
  "cuisine": "Français",
  "culture": "Gazon",
  "category": "proteins",
  "tags": [
    "canard",
    "français",
    "confit",
    "gazon",
    "conservés",
    "Cuisson lente",
    "matières grasses"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "30 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Jambes de canard (en entier, avec os, avec peau)",
      "ratioValue": 4,
      "defaultUnit": "legs",
      "substitutions": [
        "jambes d'oie"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel casher grossier ou sel gris",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 6,
      "defaultUnit": "sprigs",
      "substitutions": [
        "thym séché (utiliser la moitié de la quantité)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Feuilles de baies écrasées",
      "ratioValue": 3,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poivre noir, grossièrement craqué",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Graisse de canard (rendue)",
      "ratioValue": 700,
      "defaultUnit": "g",
      "substitutions": [
        "Graisse d'oie",
        "saindoux (arôme plus léger)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "baies de genièvre, légèrement broyées",
      "ratioValue": 8,
      "defaultUnit": "berries",
      "substitutions": []
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
        "ing_08"
      ],
      "outputState": "cured_legs",
      "instructions": "Dans un petit bol, mélanger le sel, le poivre craqué et les baies de genièvre concassées. Placez les pattes de canard sur la peau dans un plat de cuisson. Éparpillez les brins de thym, les feuilles de laurier concassées et l'ail coupé sur le côté chair. Frotter fermement le mélange de sel dans les deux côtés, en se concentrant sur les parties plus épaisses de la cuisse. Couvrez bien le film de collage, en le pressant contre la peau pour exclure l'air. Réfrigérer pendant 12 à 18 heures. Ne pas dépasser 24 heures ou le remède attirera trop d'humidité et la texture finale sera granuleuse plutôt que soyeuse.",
      "visualCue": {
        "primaryTarget": "Après 12 heures : la peau semble sèche et légèrement coulée. Le côté chair est visiblement humide là où le sel a tiré du liquide, formant une saumure peu profonde dans le plat.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Moins de 6 heures : la peau a encore l'air d'être plumée et le plat ne présente presque aucun liquide.",
            "action": "Retournez au réfrigérateur. Le remède n'a pas pénétré assez — il faut au moins 12 heures pour même assaisonner."
          },
          {
            "state": "Perfect",
            "description": "12–18 heures: une flaque de saumure rose dans le plat. La peau est tendue et légèrement cuir. La chair se sent ferme quand elle est pressée. Les herbes ont flétri et parfumé la viande.",
            "action": "Procéder au rinçage et au séchage avant de faire cuire les graisses."
          },
          {
            "state": "Overdone",
            "description": "Au-delà de 24 heures : un grand bassin de saumure, la chair est devenue très ferme et légèrement granuleuse à la surface.",
            "action": "Rincer et sécher immédiatement. Le confit aura encore un bon goût, mais peut être plus ferme que l'idéal. Réduire le temps de cuisson des graisses de 30 minutes."
          }
        ]
      },
      "feelCue": "Appuyez sur la cuisse guérie avec un doigt — il devrait résister plus que le canard cru et ressort lentement, comme le salumi bien assaisonné. La surface de la chair est légèrement collante de la protéine dissoute."
    },
    {
      "nodeId": "step_2",
      "action": "Rincer",
      "inputs": [
        "cured_legs"
      ],
      "outputState": "dried_legs",
      "instructions": "Retirer les jambes de la saumure et les rincer soigneusement sous l'eau froide courante, laver tous les débris de sel, d'ail et d'herbe. Séchez chaque jambe avec du papier de cuisine — utilisez plusieurs pièces et appuyez fermement. N'importe quelle humidité de surface provoquera l'éclaboussure dangereusement de la graisse de canard lorsque vous submergerez les jambes, et empêchera également la peau de rendre correctement. Les jambes peuvent se reposer au réfrigérateur jusqu'à 2 heures au besoin.",
      "visualCue": {
        "primaryTarget": "Parfaitement sèche, peau de couleur crème sans reflet humide. Le côté chair semble mat et légèrement obscurci par le remède.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des gouttelettes d'eau visibles ou un reflet humide sur la surface de la peau.",
            "action": "Continuez à patiner avec des serviettes en papier, puis placez les jambes sur un support de fil pendant 20 minutes à température ambiante pour sécher davantage l'air."
          },
          {
            "state": "Perfect",
            "description": "Peau complètement mate, sèche. La surface semble presque déshydratée, l'ivoire pâle allant sur le beige. Pas d'humidité du côté de la chair.",
            "action": "Les jambes sont prêtes à plonger dans la graisse de canard."
          },
          {
            "state": "Overdone",
            "description": "Impossible de trop sécher — procéder dès que la surface est visiblement sèche.",
            "action": "Passez à la cuisine grasse."
          }
        ]
      },
      "feelCue": "Faites glisser votre bout de doigt à travers la peau — il devrait être comme glisser sur le parchemin sec, avec une faible friction. Tout glissement ou refroidissement signifie que l'eau est toujours présente."
    },
    {
      "nodeId": "step_3",
      "action": "Pocher",
      "inputs": [
        "dried_legs",
        "ing_07"
      ],
      "outputState": "confit_legs",
      "instructions": "Faire fondre la graisse de canard dans une casserole au four ou un pot lourd à feu doux. Portez la graisse à 90°C — utilisez un thermomètre; cette température n'est pas négociable. Submerger délicatement les pattes de canard séché, en s'assurant qu'elles sont complètement couvertes de graisse. Si la graisse ne couvre pas les jambes, ajouter plus. Transférer dans un four préchauffé à 90°C (80°C assisté par un ventilateur) et cuire 3 à 4 heures. La graisse devrait à peine trembler — pas de bulles, pas d'éclaboussures. Les jambes sont faites lorsqu'une fine brochette métallique glisse dans la cuisse avec une résistance zéro et que la chair s'éloigne de l'os de 5 mm.",
      "visualCue": {
        "primaryTarget": "La graisse est complètement immobile, seulement un tremblement à peine perceptible à la surface. Les jambes sont passées du rose au beige-ivory profond et ont subi une diminution visible. La peau est devenue légèrement translucide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 2 heures : la cuisse offre encore une résistance à une brochette. La peau est encore opaque crème et n'a pas rendu. La chair ne tire pas de l'os.",
            "action": "Continuez à cuisiner. Vérifiez par incréments de 30 minutes — certaines jambes plus grandes ont besoin de 4,5 heures."
          },
          {
            "state": "Perfect",
            "description": "La brochette entre dans la cuisse comme poussant dans le beurre à température ambiante — aucune résistance. La peau est soyeuse et légèrement translucide. L'os oscille librement en se déplaçant doucement. La chair est blanc crème, pas rose.",
            "action": "Retirer les jambes de la graisse et utiliser immédiatement ou conserver immergé dans leur graisse."
          },
          {
            "state": "Overdone",
            "description": "Les jambes ont été à 90°C pendant 5+ heures ou la température est montée au-dessus de 100°C. La viande est tombée de l'os et la texture est devenue strié ou sèche.",
            "action": "La viande est encore utilisable: cueillir et déchiqueter pour les rillettes ou le haschisch de canard. Il ne s'élèvera pas de façon attrayante comme une jambe entière."
          }
        ]
      },
      "feelCue": "Soulevez doucement une jambe avec des pinces — si elle se penche légèrement au milieu comme la chair donne à la gravité, elle est prête. Une jambe rigide droite comme une planche a besoin de plus de temps. La jambe doit sentir de la graisse de canard perfumée de thym avec une douceur profonde de viande rôtie."
    },
    {
      "nodeId": "step_4",
      "action": "Saisir",
      "inputs": [
        "confit_legs"
      ],
      "outputState": "finished_confit",
      "instructions": "Enlevez les jambes de la graisse et laissez-les égoutter sur un support de fil pendant 5 minutes. Chauffer une poêle en fonte ou en acier au carbone à feu moyen-vif jusqu'à ce qu'elle fume. Placez les jambes côté peau dans la poêle sèche — sans huile, les jambes portent leur propre graisse — et pressez-les à plat avec une spatule ou une poêle lourde. Semer 4 à 6 minutes sans bouger jusqu'à ce que la peau soit brun-cuivre profond, croustillante et cloquée. Flip une fois et réchauffer le côté chair pendant 1 minute seulement. Servir en quelques minutes — la peau adoucit rapidement.",
      "visualCue": {
        "primaryTarget": "Une peau laquée brun cuivre qui craque audiblement lorsqu'elle est tapée d'un ongle. La graisse sous la peau est complètement transformée en coquille fine et croquante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est d'or pâle et encore douce. Il donne à la pression plutôt que de craquer. Le gras est encore épais sous la surface.",
            "action": "Continuer à presser et à saisir. La peau a besoin de plus de temps et de chaleur de contact — utilisez une presse au bacon ou une poêle lourde si disponible."
          },
          {
            "state": "Perfect",
            "description": "Peau de cuivre-bronze profonde avec des taches plus foncées. Craquage sonore en tapotant. La cuisine sent le canard rôti et rend la graisse.",
            "action": "Servir immédiatement, côté peau vers le haut. Une pression d'orange amère ou de verjus à la table coupe la richesse."
          },
          {
            "state": "Overdone",
            "description": "La peau est brun foncé à noir et amer. Le gras a beaucoup fumé.",
            "action": "Écraser la peau carbonisée avec un couteau et servir la chair exposée et tendre — elle sera encore exceptionnelle."
          }
        ]
      },
      "feelCue": "Tapotez la peau avec l'ongle de vos doigts après la mise en mer — elle devrait produire un clic creux et fragile, comme taper un morceau de caramel mince. Tout ce qui est plus doux signifie qu'il a besoin de plus de temps sur la chaleur."
    }
  ]
};
