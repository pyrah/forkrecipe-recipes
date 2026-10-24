export default {
  "repoId": "master_japanese_matcha_latte_001",
  "parentRepoId": null,
  "slug": "matcha-latte",
  "author": "ForkRecipe Kitchen",
  "title": "Latte de Matcha",
  "description": "Ceremonial-grade matcha fouetté avec une petite mesure d'eau chaude (non bouillante) dans un concentré lisse, mouflé, puis versé sur le lait vapeur — amer, herbacé, crémeux.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "beverages",
  "tags": [
    "matcha",
    "Japonais",
    "Latte",
    "boisson",
    "thé vert",
    "végétarien"
  ],
  "difficulty": 2,
  "activeTime": "10 min",
  "totalTime": "10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 0,
    "sour": 0,
    "bitter": 3,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Poudre de matcha de qualité cérémonielle (soufflée)",
      "ratioValue": 1,
      "defaultUnit": "part",
      "substitutions": [
        "matcha culinaire (plus fort, plus amer)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau chaude (70-80°C/ 158-175°F, non bouillante)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Lait entier (soufflé ou mousseux)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "Lait d'avoine (beurre bien)",
        "lait d'amande",
        "lait de coco"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sirop simple ou miel (facultatif)",
      "ratioValue": 0.5,
      "defaultUnit": "part",
      "substitutions": [
        "sirop d'érable",
        "agave"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sift",
      "inputs": [
        "ing_01"
      ],
      "outputState": "sifted_matcha",
      "instructions": "Passer la poudre de matcha dans un tamis à mailles fines dans un petit bol en céramique (chawan) ou dans un bol ordinaire. Cette seule étape est plus importante que la plupart des cuisiniers ne s'attendent: matcha s'agrippe agressivement en raison de sa taille de particules ultra-fines et de l'électricité statique naturelle de la poudre sèche. Un matcha non tamisé forme des grumeaux tenaces qu'aucune quantité de fouet se dissoudra complètement, produisant une boisson visiblement grainée avec un coup amer inégal. Même les boîtes fraîchement ouvertes doivent être tamisées. Utilisez 1 à 2 grammes (environ 1 cuillère à café) par portion – cette quantité est critique, car le matcha cérémonial est puissant et coûteux.",
      "visualCue": {
        "primaryTarget": "Une fine couche sèche, même, de poudre jade-forestière-verte vive dans le bol, sans empiècements visibles. La couleur doit être intensément, uniformément verte — brillante et légèrement lumineuse, non terne ou jaunâtre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grumeaux visibles restent après avoir criblé — ils ressemblent à de minuscules cailloux vert foncé ou à des taches irrégulières dans la poudre fine. Ils ne se dissoudreont pas proprement dans la prochaine étape.",
            "action": "Appuyez sur le tamis avec l'arrière d'une cuillère. Chaque taillis doit être décomposé avant d'ajouter de l'eau."
          },
          {
            "state": "Perfect",
            "description": "Une poudre verte parfaitement uniforme, soyeuse et sans crosse. Il passe par les doigts comme la meilleure farine. La couleur est uniformément lumineuse, vert vif.",
            "action": "Procédez immédiatement au mélange avec de l'eau chaude. Sifted matcha est prêt à s'hydrater."
          },
          {
            "state": "Overdone",
            "description": "Le matcha a commencé à absorber l'humidité ambiante et sera un peu plus difficile à dissoudre complètement. Pas un échec, mais les conditions idéales sont sèches et fraîches.",
            "action": "Continuez vite. Ne laissez pas sifted matcha s'asseoir dans une cuisine humide pendant plus de quelques minutes."
          }
        ]
      },
      "feelCue": "Touchez le matcha tamisé avec un bout de doigt sec: il doit se sentir incroyablement doux et fin — plus léger que la fécule de maïs, laissant une tache verte intense sur la peau qui se lave avec de l'eau mais pas avec une lingette rapide. Pas de grumeaux."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "sifted_matcha",
        "ing_02"
      ],
      "outputState": "matcha_concentrate",
      "instructions": "Verser l'eau chaude (70–80°C / 158–175°F) sur le matcha tamisé. La température n'est pas négociable : l'eau bouillante dénature les acides aminés (en particulier la L-théanine et la chlorophylle) qui donnent au matcha cérémonial son bord doux et umami, produisant une boisson acride et végétale qui a le goût de couper la pelouse chaude. À l'aide d'un chaînon de bambou, fouetter modérément dans un mouvement W ou M — et non dans un mouvement circulaire — pendant 20 à 30 secondes jusqu'à ce qu'une mousse fine et stable se forme à la surface sans amas visibles de poudre. Le modèle W brise la tension de surface et aérer; le brassage circulaire ne fait que déplacer le liquide sans créer la micro-mousse qui définit un bon bol de matcha.",
      "visualCue": {
        "primaryTarget": "Un liquide jade-vert lisse et vif recouvert d'une fine couche uniforme de petites bulles stables — la mousse devrait ressembler à un tapis vert doux sur toute la surface, pas de grandes bulles sur les bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Grandes bulles au bord, poudre sèche visible au fond, mousse mince et s'effondre immédiatement. Le liquide sous la surface est strié plutôt que uniformément vert.",
            "action": "Continuez à fouetter dans le W-pattern, plus vite et avec plus d'action du poignet. Le chasseur devrait avoir l'impression qu'il touche à peine le fond — vous faites mousser la surface, pas gratter le bol."
          },
          {
            "state": "Perfect",
            "description": "Mousse de jade dense et fin couvrant toute la surface. Le liquide ci-dessous est uniformément vert sans taches de poudre. L'arôme est herbacé, doux et légèrement marin — vert umami, pas végétal ou amer.",
            "action": "Verser immédiatement sur le lait cuit à la vapeur. La mousse de Matcha commence à se tasser dans les 30 à 60 secondes — se déplace rapidement."
          },
          {
            "state": "Overdone",
            "description": "C'était si long et si dur que la mousse s'est effondrée et s'est transformée en bulles plus grosses et plus grossières. Le matcha peut aussi avoir été fouetté avec de l'eau trop chaude, donnant à la surface un vert plus foncé et légèrement terne.",
            "action": "Donnez une dernière explosion de W-whisking et versez immédiatement. La qualité de la mousse affecte l'esthétique plus que la saveur — procéder."
          }
        ]
      },
      "feelCue": "Un concentré de matcha bien fait sent des feuilles vertes fraîches, la mer (à partir de L-théanine et de composés umami), et une légère douceur — il doit sentir attrayant, pas aiguisé ou herbacé-acride. Si ça sent l'acride, l'eau était trop chaude."
    },
    {
      "nodeId": "step_3",
      "action": "vapeur",
      "inputs": [
        "ing_03"
      ],
      "outputState": "steamed_milk",
      "instructions": "Chauffer ou chauffer le lait à 60–65°C / 140–150°F. Si vous utilisez un vapeur de machine à expresso, introduisez la baguette de vapeur juste sous la surface et incorporez de l'air dans les premières secondes avant de plonger pour créer une micromousse avec de fines bulles. Si aucun vapeur : chauffer dans une petite casserole à feu moyen jusqu'à ce que la vapeur (ne pas mijoter), puis transférer dans un pot et agiter vigoureusement pendant 30 à 45 secondes pour créer une mousse grossière, ou utiliser un frêne portatif pendant 20 secondes. Le lait d'avoine et le lait entier produisent la meilleure mousse; les mousses de lait écrémé mais donnent une texture aqueuse; les laits végétaux varient; le lait d'avoine est remarquablement proche du lait entier.",
      "visualCue": {
        "primaryTarget": "Lait cuit à la vapeur avec un micromousse épais et brillant — la surface doit ressembler à de la peinture humide: lisse, brillant et légèrement visqueux. La mousse doit verser comme partie du lait, pas flotter séparément comme la crème de rasage.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait est chaud mais pas cuit à la vapeur — il n'a pas de mousse, juste un liquide chaud. Le latte sera plat et le matcha ne se mélangera pas de façon attrayante sans la couche de mousse.",
            "action": "Steam ou mousse jusqu'à obtenir une mousse visible. Même une petite quantité de mousse transforme la texture de la boisson finale."
          },
          {
            "state": "Perfect",
            "description": "Micromousse brillante et fine avec une texture soyeuse et presque versable. Le pichet doit montrer que la mousse se déplace lentement comme une masse unifiée, et non comme de l'eau.",
            "action": "Versez sur le concentré de matcha immédiatement avant que la mousse ne s'installe."
          },
          {
            "state": "Overdone",
            "description": "Le lait écalé — le lait bouilli au-delà de 70°C/160°F perd sa douceur et développe un goût cuit et légèrement sulfureux. La mousse est de grande taille et s'effondre rapidement.",
            "action": "Jeter le lait échaudé et cuire une portion fraîche. Le lait scaldé ne peut pas être fixé et fera le goût de latte plat et légèrement stalle."
          }
        ]
      },
      "feelCue": "Testez le pichet à vapeur contre votre paume: il devrait être presque trop chaud pour tenir confortablement mais pas brûler. Cette chaleur — soutenue pendant 3 secondes de contact — est de 60 à 65°C. N'importe quel chaud et le lait est échaudé."
    },
    {
      "nodeId": "step_4",
      "action": "Assembler",
      "inputs": [
        "matcha_concentrate",
        "steamed_milk",
        "ing_04"
      ],
      "outputState": "finished_matcha_latte",
      "instructions": "Ajouter le sirop simple ou le miel dans une tasse ou un verre préchauffé si vous l'utilisez, puis verser le concentré de matcha dessus et remuer brièvement. Verser le lait à la vapeur à partir d'une faible hauteur au début pour combiner, puis lever le pichet pour recouvrir la mousse sur le dessus. Pour un matcha latte glacé: remplir un grand verre de glace, verser le matcha concentré sur, puis verser le lait froid (pas besoin de vapeur) à partir d'une hauteur. Mélanger avant de boire — le matcha glacé se sépare au moment où il est assis. Le contraste entre le matcha amertume et le lait crémeux est tout le point; résistez à l'envie de les homogénéiser complètement en une boisson verte uniforme.",
      "visualCue": {
        "primaryTarget": "Une boisson bicolore : une couche de matcha vert jade profonde sous une couche crémeuse de lait blanc doré et de mousse, avec un halo dégradé où ils se rencontrent. Le bouchon en mousse doit contenir une faible teinte verte du matcha ci-dessous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait versé trop rapidement et agité de façon trop agressive — la boisson est maintenant uniforme, vert-sage pâle sans les couches de contraste frappantes. Toujours bon goût mais perd l'attrait visuel.",
            "action": "Aucun remède n'est nécessaire: boire comme il faut. La prochaine fois, versez le lait d'une hauteur et d'un angle bas pour obtenir une couche."
          },
          {
            "state": "Perfect",
            "description": "gradient visible du vert profond à la base au blanc crémeux au sommet, avec le capuchon en mousse épousseté avec une faible trace verte du matcha ci-dessous. On dirait une composition esthétique japonaise. La première gorgée est une mousse de lait pur; la seconde est une couche verte amère.",
            "action": "Mélanger une fois légèrement avant la seconde gorgée ou boire en couches pour toute l'expérience."
          },
          {
            "state": "Overdone",
            "description": "Trop de matcha ou trop peu de lait — la boisson a un goût agressif et la saveur de matcha envahit entièrement le lait. Ceremonial matcha devrait équilibrer, pas dominer.",
            "action": "Ajouter plus de lait à la vapeur ou une touche plus d'édulcorant pour apprivoiser l'amertume. Le matcha de qualité culinaire bénéficie particulièrement d'un ratio lait plus élevé."
          }
        ]
      },
      "feelCue": "Le latte fini doit se sentir soyeux et légèrement enduit dans la bouche — la graisse du lait mélangée avec la suspension de particules fines du matcha crée une texture plus complète que l'un ou l'autre seul. La chaleur devrait s'attarder après avoir avalé, avec un arrière-goût sucré qui s'estompe lentement."
    }
  ]
};
