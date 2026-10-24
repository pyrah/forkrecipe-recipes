export default {
  "repoId": "master_japanese_dashi_001",
  "parentRepoId": null,
  "slug": "dashi",
  "author": "ForkRecipe Kitchen",
  "title": "Dashi (Kombu et Katsuobushi)",
  "description": "Le stock de base du Japon : le kombu est trempé dans l'eau pendant la nuit puis lentement réchauffé à un peu en dessous d'un ébullition, fini par une seule floraison de flocons de bonite qui ne sont jamais agités, seulement trempés et tendus — produisant un bouillon de clarté cristalline, de profondeur profonde de l'umami, et de délicatesse de la respiration océanique.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "stocks",
  "tags": [
    "Dashi",
    "Japonais",
    "kombu",
    "Nom de famille",
    "stock",
    "umami",
    "washoku"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "8 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Kombu séché (de qualité dashi, non déchiqueté)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "varech séché — éviter kombu avec poudre blanche lavée, c'est l'umami"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Inosinate",
      "name": "Katsuobushi (flacons de katsuo de haute qualité)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "saba (Mackerel) flocons pour une saveur plus forte",
        "niboshi (sardines séchées) pour dashi terreux"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Eau filtrée à froid",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_03"
      ],
      "outputState": "cold_kombu_water",
      "instructions": "essuyer délicatement la surface du kombu avec un chiffon à peine humide pour enlever les débris de surface — ne la lavez pas. La poudre blanche à la surface (mannitol) est umami; ne la retirez pas. Placer le kombu dans une casserole avec de l'eau filtrée froide. Couvrir et tremper au réfrigérateur pendant la nuit, ou au moins 3 heures à température ambiante. Le froid abrupt extrait les polysaccharides complexes et les glutamates du kombu sans l'amertume qui vient du chauffage. L'eau deviendra un or clair et pâle.",
      "visualCue": {
        "primaryTarget": "Après le trempement, l'eau est d'une couleur claire, pâle doré-vert. Le kombu s'est élargi et s'est obscurci de son état sec, devenant souple et cuireux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est encore claire et incolore. Kombu semble inchangé.",
            "action": "Le temps escarpé était insuffisant. Continuer à tremper — l'extraction du kombu est lente à froid. Au moins 3 heures, la nuit est idéale."
          },
          {
            "state": "Perfect",
            "description": "L'eau est un vert doré clair et délicat. Kombu s'est élargi et se sent caoutchouteux-cuir quand pincée. L'eau sent peu la mer.",
            "action": "Continuer à chauffer l'eau de kombu."
          },
          {
            "state": "Overdone",
            "description": "Plongé pendant plus de 24 heures à la température ambiante — le kombu a peut - être commencé à fermenter et l'eau a un bord légèrement aigre.",
            "action": "Continuez mais goûtez bien. La saveur peut avoir développé un hors-note — si oui, recommencer."
          }
        ]
      },
      "feelCue": "Après la nuit, le kombu devrait se sentir comme du cuir souple — souple et souple, non fragile. Frottez un coin entre les doigts : la surface doit être légèrement glissante à partir des polysaccharides extraits. L'eau froide doit sentir propre et peu océanique."
    },
    {
      "nodeId": "step_2",
      "action": "Chauffer",
      "inputs": [
        "cold_kombu_water"
      ],
      "outputState": "warmed_kombu_dashi",
      "instructions": "Placez le pot à feu moyen-doux. Portez lentement l'eau à température, en regardant attentivement — le but est d'atteindre 60-65°C (140-150°F) et de la maintenir là pendant 10 minutes. Ne le laissez pas bouillir. Extraits de bouillir des composés amers du kombu. Utilisez un thermomètre. Sinon, veillez à ce que les premières petites bulles se forment au fond du pot et sur la surface du kombu — celles-ci apparaissent à environ 60°C. Retirer le kombu avant que l'eau atteigne 70°C.",
      "visualCue": {
        "primaryTarget": "Le pot est à 60-65°C : de très petites bulles commencent juste à se former et à s'élever du bas. Le liquide s'évapore doucement. Le kombu libère des fils minces et soyeux de polysaccharides dissous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est chaude mais ne montre pas encore de bulles. La température est inférieure à 55°C. Le kombu ne contribue pas encore de façon significative.",
            "action": "Continuez à vous réchauffer lentement. Cette phase d'extraction douce est l'étape la plus importante pour le dashi propre — ne le précipitez pas."
          },
          {
            "state": "Perfect",
            "description": "Petites bulles clairsemées se formant au fond et aux côtés. L'eau est en vapeur. Le kombu est entièrement souple et libérant des brins minces et clairs. La température est comprise entre 60 et 65°C.",
            "action": "Maintenez cette température pendant 10 minutes, puis retirez le kombu."
          },
          {
            "state": "Overdone",
            "description": "L'eau a atteint une ébullition complète ou proche. De plus grandes bulles sont visibles et le kombu a bouilli.",
            "action": "Enlevez immédiatement le kombu. Le dashi aura un bord légèrement amer et algue — il est encore utilisable pour la soupe miso ou les plats braisés mais manque de la délicatesse cristalline du dashi ichiban parfait."
          }
        ]
      },
      "feelCue": "Tenez votre main à 15 cm au-dessus de la casserole — à 60°C, vous devriez sentir une chaleur douce et soutenue, mais pas une chaleur agressive. La vapeur doit être légère et continue, mais pas vigoureuse. Un thermomètre de cuisine est l'outil le plus fiable ici; cuisiner par le sentiment seul nécessite l'expérience avec dashi."
    },
    {
      "nodeId": "step_3",
      "action": "Infuser",
      "inputs": [
        "warmed_kombu_dashi",
        "ing_02"
      ],
      "outputState": "bonito_dashi",
      "instructions": "Retirez le kombu (réservez-le pour faire des plats de niban dashi ou de kombu braisé). Portez l'eau de kombu juste sous un ébullition — vous voulez voir le mouvement de roulement à la surface, mais pas un ébullition complet. Retirer complètement du feu. Ajoutez tout le katsuobushi à la fois. Ne remuez pas. Laisser les flocons de bonite fleurir et couler naturellement — cela prend 2–3 minutes. Les flocons flottent d'abord, absorbent le liquide et s'assombrissent, puis s'enfoncent lentement vers le bas en abandonnant leur inosinate.",
      "visualCue": {
        "primaryTarget": "Les flocons de Bonito sont passés de flocons secs flottants à des masses sombres et saturées. La plupart des flocons se sont installés au fond du pot en 3 minutes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les flocons sont encore principalement flottants, pâles et clairement pas encore saturés. Moins d'une minute s'est écoulée.",
            "action": "Attendez — ne remuez pas. Stirring rend le dashi nuageux et peut libérer des composés amers. Regardez et soyez patient."
          },
          {
            "state": "Perfect",
            "description": "Les flocons s'obscurcissent, deviennent lourds avec du liquide absorbé et sont coulés ou tombent au fond. Le dashi a pris une couleur ambre chaude.",
            "action": "La souche immédiatement — ne laissez pas le bonito raide au-delà de 3 minutes ou le dashi devient pêcheur et dur."
          },
          {
            "state": "Overdone",
            "description": "Les flocons de Bonito sont trempés pendant plus de 5 minutes. Le dashi est plus foncé que l'ambre pâle et sent fortement et désagréablement le poisson.",
            "action": "Retirez-vous et jetez le bonito. Le dashi a surextracté. Pour une utilisation future dans les plats cuits (ramen, plats braisés), cela est acceptable; pour les soupes délicates claires, il sera trop fort."
          }
        ]
      },
      "feelCue": "Regardez le moment où le katsuobushi a frappé l'eau chaude — les flocons danseront et s'endormiront un moment des courants de convection, puis peu à peu. La chambre devrait se remplir d'un arôme propre, marin, doucement fumé, comme l'océan et un feu de camp simultanément."
    },
    {
      "nodeId": "step_4",
      "action": "Filtrer",
      "inputs": [
        "bonito_dashi"
      ],
      "outputState": "dashi",
      "instructions": "Déposer un tamis à mailles fines avec un filtre à fromage ou à café propre. Verser le dashi lentement sans presser les solides — presser les extraits de composés amers. Laissez-la s'écouler librement. Le dashi d'ichiban fini (premier tirage) devrait être un liquide clair et doré de profondeur profonde. Jeter le katsuobushi dépensé ou réserver pour faire de l'assaisonnement de riz furikake. Utiliser dashi immédiatement ou réfrigérer jusqu'à 3 jours. Ne pas congeler — la congélation décompose le glutamate délicat et les composés inosinate et terne la saveur.",
      "visualCue": {
        "primaryTarget": "Un liquide d'ambre doré clair cristallin et chaud qui vous permet de voir clairement jusqu'au fond du bol. Pas de nuages, pas de particules flottantes, pas de mousse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Dashi est légèrement nuageux avec de fines particules du bonito.",
            "action": "Reformer à travers un filtre à café et ne pas presser les solides — laissez la gravité faire le travail pendant 10 minutes."
          },
          {
            "state": "Perfect",
            "description": "Complètement clair, doré et propre. La couleur ressemble à un bon thé vert ou ambre pâle. Situé, il a immédiatement, la profondeur de l'umami propre — une saveur qui semble venir de partout à la fois et remplir toute la bouche.",
            "action": "Utiliser dans les 3 jours. Parfait pour la soupe miso, le chawanmushi, le bouillon d'Udon, la base de ramen, les sauces et les glaçures."
          },
          {
            "state": "Overdone",
            "description": "Dashi est brun-ambre foncé et sent la pêche. Bonito démesuré.",
            "action": "Diluer avec de l'eau chaude supplémentaire au goût. Même un dashi sur-tendu peut être récupéré pour être utilisé dans des plats audacieux comme le glaçage yakitori ou la sauce teriyaki où sa saveur sera subsumée."
          }
        ]
      },
      "feelCue": "Plongez un doigt propre dans le dashi fini et goûtez-le seul, à température ambiante. Le dashi parfait devrait se sentir presque sans poids sur la langue — pas de lourdeur, pas de collant — mais l'umami devrait s'attarder et gonfler pendant 10 à 15 secondes après avoir avalé, enrobant tout le dos de la bouche d'une douce et fraîche saveur océanique."
    }
  ]
};
