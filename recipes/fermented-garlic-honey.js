export default {
  "repoId": "master_fermented_garlic_honey_001",
  "parentRepoId": null,
  "slug": "fermented-garlic-honey",
  "author": "ForkRecipe Kitchen",
  "title": "Miel d'ail fermenté",
  "description": "Les gousses d'ail crues suspendues au miel cru et laissées au ferment à température ambiante pendant trois à six semaines — le miel s'amincit et s'assombrit pour s'ambrir, l'ail s'adoucit à une douceur presque confitée et moelleuse, et les deux sont transformées par l'alchimie lente de la fermentation sauvage.",
  "cuisine": "Mondial",
  "culture": "Fermentation",
  "category": "fermented",
  "tags": [
    "fermenté-ail",
    "miel-ferment",
    "fermenté",
    "Ail",
    "Chérie",
    "recours",
    "condiment"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "42 days",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 0,
    "sour": 1,
    "bitter": 0,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Allium",
      "name": "Girofles d'ail frais (peautés, entiers et complètement secs)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "Ail à simple boîte (ail solo) — plus doux"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Miel brut non filtré (local, non traité thermiquement)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "packed_jar",
      "instructions": "Cette recette dépend des levures et enzymes sauvages naturelles du miel cru et des peaux d'ail. Peler soigneusement les gousses d'ail en les maintenant complètement intactes — toute contusion les fera devenir verts (réaction inoffensive mais visuellement peu appealing). S'assurer que les gousses sont complètement sèches — une seule goutte d'eau peut introduire des bactéries indésirables. Placer les gousses d'ail dans un pot de verre propre et sec (stérilisé, sans savon ou eau résiduel). Verser le miel cru sur l'ail pour submerger tous les gousses, laissant 2 cm d'espace de tête au sommet. Mélanger doucement avec une cuillère sèche propre pour enlever les poches d'air.",
      "visualCue": {
        "primaryTarget": "Girofles d'ail pâles en suspension dans du miel d'or ambré. Pas de bulles d'air piégées autour des girofles. Le miel est visqueux et enveloppe chaque girofle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les bulles d'air sont piégées autour des gousses d'ail. L'ail flotte sur la surface du miel.",
            "action": "Incorporer délicatement jusqu'à ce que toutes les poches d'air soient enlevées et que tous les girofles soient immergés. Plus de miel peut être nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Tous les gousses sont suspendues au miel, pas de poches d'air visibles, 2cm d'espace de tête en haut. Le miel est clair et doré autour des gousses.",
            "action": "Scellez le couvercle et placez-le dans un endroit chaud."
          },
          {
            "state": "Overdone",
            "description": "Le pot est complètement rempli jusqu'au sommet avec du miel et de l'ail, sans espace de tête.",
            "action": "Enlevez un peu de miel — la fermentation produit du CO2 et le couvercle sera forcé sans espace de tête."
          }
        ]
      },
      "feelCue": "Les gousses d'ail doivent être lisses et fermes lorsqu'elles sont manipulées, sans taches molles ni taches meurtries. Tout ail qui a l'air ou qui se sent endommagé doit être jeté - les gousses compromises peuvent tourner le lot entier."
    },
    {
      "nodeId": "step_2",
      "action": "Fermenter",
      "inputs": [
        "packed_jar"
      ],
      "outputState": "active_ferment",
      "instructions": "Scellez le pot (ne pas sceller hermétiquement — le gaz CO2 doit pouvoir s'échapper). Placez dans un endroit chaud à température ambiante (18-25°C), à l'abri du soleil direct. Pendant les 1 à 2 premières semaines, retourner le pot à l'envers chaque jour pour s'assurer que l'ail reste submergé et que le miel est uniformément distribué. Faire bouillir le pot tous les 1 à 2 jours en desserrant brièvement le couvercle pour libérer tout CO2 accumulé. Après 2 semaines, le retournement quotidien peut s'arrêter.",
      "visualCue": {
        "primaryTarget": "Semaine 1 : Le miel commence à liquéfier et à être mince de l'humidité tirée de l'ail. Des bulles fines peuvent apparaître autour des gousses. Semaine 2 : Le miel est nettement plus mince et s'est légèrement obscurci jusqu'à un ambre plus profond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 2 semaines, le miel est encore très épais et visqueux. Pas de bulles, pas d'éclaircie, pas de changement visuel.",
            "action": "Le miel peut être pasteurisé ou la température trop froide. Assurez-vous que le miel est vraiment cru et non filtré, et l'emplacement est supérieur à 18°C. La fermentation peut prendre plus de temps."
          },
          {
            "state": "Perfect",
            "description": "Après 2-4 semaines : le miel s'est éclairci et obscurci. Des bulles apparaissent lorsque le pot est tapé. L'ail a commencé à adoucir et peut être passé du blanc pur à un aspect très légèrement doré ou translucide.",
            "action": "Continuer à fermenter jusqu'à 4-6 semaines pour obtenir de l'ail complètement moelleux."
          },
          {
            "state": "Overdone",
            "description": "A 8+ semaines ou dans un environnement très chaud: le miel est très mince et de couleur foncée. Sensations fortement alcooliques ou très fortement fermentées. L'ail est devenu très doux.",
            "action": "Il est toujours sûr et comestible. Réfrigérer pour arrêter la fermentation. La saveur sera intense et complexe. Utilisation en petites quantités."
          }
        ]
      },
      "feelCue": "Après 2 semaines, inclinez doucement le pot — le miel doit circuler plus librement que le premier jour, après avoir été liquéfié par l'humidité tirée de l'ail. Plongez près de l'écart du couvercle et vous pouvez sentir faiblement l'odeur sucrée de fermentation douce en cours."
    },
    {
      "nodeId": "step_3",
      "action": "Saler et laisser reposer",
      "inputs": [
        "active_ferment"
      ],
      "outputState": "mature_ferment",
      "instructions": "Continuer la fermentation pendant un total de 4-6 semaines, en dégustant le miel (pas l'ail) chaque semaine à partir de la semaine 3. Le miel est prêt lorsqu'il s'est éclairci à peu près la consistance du sirop d'érable chaud, a transformé une couleur ambre profonde en couleur brune, et a développé une saveur complexe: encore sucré, mais avec un tang moelleux, une profondeur fermentée chaude, et des notes claires d'ail et de miel tissé ensemble. L'ail est prêt lorsqu'un girofle, goûté, a perdu la plupart de sa ponction brute et goûte moelleux, légèrement sucré, et presque confit.",
      "visualCue": {
        "primaryTarget": "Semaine 4-6: Le miel coule librement, de couleur ambre-brun profonde. Les gousses d'ail sont passées du blanc pur à l'ivoire ou à l'or clair, paraissant légèrement translucides. Le miel et l'ail sentent complexe et fermenté.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le miel est encore épais et coiffant avec un bord d'ail cru vif. Les gousses d'ail sont encore fermes et agressivement piquantes au goût.",
            "action": "Continuez à fermenter. La transformation du brut au moelleux n'est pas linéaire, elle s'accélère dans les 2 dernières semaines."
          },
          {
            "state": "Perfect",
            "description": "Le miel est liquide et profondément complexe — doux mais sans cloître, avec une profondeur chaude, moelleuse, légèrement tannante. Un gout d'ail goûté est doux, moelleux, et presque bonbon-comme dans la douceur sans netteté brute.",
            "action": "Réfrigérer. La fermentation ralentira considérablement dans le froid, et le miel d'ail fermenté conserve jusqu'à un an."
          },
          {
            "state": "Overdone",
            "description": "Le miel est très mince et sombre, sentant fortement l'alcool. Les gousses d'ail sont musquées et s'effondrent.",
            "action": "Réfrigérer immédiatement. Retirez les gousses et utilisez séparément comme ingrédient de cuisson. Utilisez le miel éclairci comme sirop complexe dans les cocktails ou les vinaigrettes."
          }
        ]
      },
      "feelCue": "À la marque de quatre semaines, prenez une gousse d'ail et appuyez doucement entre le pouce et l'index. Un girofle parfaitement fermenté doit produire comme un raisin mûr — doux tout au long avec aucun noyau dur brut, mais toujours en tenant sa forme sans se dissoudre dans une pâte."
    },
    {
      "nodeId": "step_4",
      "action": "Utilisation",
      "inputs": [
        "mature_ferment"
      ],
      "outputState": "fermented_garlic_honey",
      "instructions": "Réfrigérer lorsque la fermentation a atteint la profondeur de saveur souhaitée. Le froid arrête la fermentation et stabilise le produit. Utilisez le miel fermenté comme glaçure pour les viandes et légumes rôtis, dans les vinaigrettes, comme édulcorant dans les cocktails, ou mangé directement à partir d'une cuillère comme remède de santé. Les gousses d'ail peuvent être consommées entières, coupées en planches de charcuterie, hachées en beurre composé ou mélangées en sauces. Utilisez toujours des ustensiles propres et secs pour enlever les gousses — n'introduisez pas d'eau.",
      "visualCue": {
        "primaryTarget": "Miel brun-ambre profond qui coule lentement d'une cuillère. Girofles d'ail dorés-ivoire qui sont translucides aux bords. Le pot entier devrait ressembler à quelque chose d'ancien et de précieux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le miel est trop doux et épais pour être utilisé comme glaçure — il brûlera avant qu'il ne caramélise correctement. L'ail est encore vif et agressif.",
            "action": "Retour à la fermentation à température ambiante pour une autre semaine."
          },
          {
            "state": "Perfect",
            "description": "Le miel glaçait une cuillère et coule lentement. Sa saveur est complexe, profondément douce, moelleuse, et légèrement funky de la meilleure façon possible. L'ail est assez doux pour manger cru en compagnie polie.",
            "action": "Utiliser en petites quantités — c'est un condiment puissant."
          },
          {
            "state": "Overdone",
            "description": "Le miel a fermenté la douceur passée dans quelque chose de plus proche d'un sirop cru, funky, mince avec de fortes notes alcooliques.",
            "action": "Utiliser dans les cocktails ou comme composant marinade. Ce n'est pas désagréable, tout simplement plus un condiment doux."
          }
        ]
      },
      "feelCue": "Arrosez le miel fermenté fini sur le dos de votre main et laissez-le reposer pendant 10 secondes — il doit couler lentement et tenir une légère forme, pas s'écouler immédiatement comme de l'eau. Le résidu laissé sur votre peau doit sentir chaud, complexe, et invitant — douceur d'ail avec une faible profondeur vineuse."
    }
  ]
};
