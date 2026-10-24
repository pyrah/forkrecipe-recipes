export default {
  "repoId": "master_chinese_wonton-broth_001",
  "parentRepoId": null,
  "slug": "wonton-broth",
  "author": "ForkRecipe Kitchen",
  "title": "Cantonais Wonton Broth",
  "description": "Le bouillon d'or clair des boutiques cantonaises de nouilles wonton — os de porc et crevettes séchées mijotées de pétoncle et de gingembre jusqu'à ce qu'elles soient profondément salées, le liquide suffisamment propre pour voir votre réflexion.",
  "cuisine": "Chinois",
  "culture": "Cantonais",
  "category": "stocks",
  "tags": [
    "Chinois",
    "cantonais",
    "stock",
    "porc",
    "crevettes",
    "blanc cassé"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "2 hr 30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 0,
    "bitter": 0,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Os du cou de porc ou os du dos de porc",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "Trotters de porc",
        "dos de poulet et os de porc combinés"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Peau de porc (ou os du cou supplémentaires)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "Trotters de porc (gélatineux)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Inosinate",
      "name": "Crevettes séchées (xia pi), rincées",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "pétoncles séchés, plus riches",
        "Plie sèche"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 3000,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Échalons entiers (liés en nœud)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "oignons de printemps"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Gingembre frais, tranché 1 cm d'épaisseur, légèrement meurtris",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Solvent",
      "name": "Vin de riz shaoxant",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "sherry sec",
        "Saké"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 12,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Poivre blanc, moulu",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanchir",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "blanched_bones",
      "instructions": "Placer les os et la peau de porc dans une grande casserole et couvrir d'eau froide. Porter à ébullition rapide à feu vif. À mesure que l'eau se réchauffe, une mousse gris-blanc s'élèvera à la surface, c'est-à-dire des protéines sanguines coagulées, de la myoglobine et des impuretés. Laissez l'eau ébullition complète pendant 2 à 3 minutes, au cours de laquelle la mousse éclatera en quantité. Égoutter complètement la casserole, puis rincer chaque os et morceau de peau sous l'eau froide courante, en frottant avec vos mains les fragments de mousse grise ou d'os restants. Cette étape de blanchiment n'est pas négociable pour un bouillon cantonais limpide et propre à déguster, ce qui lui permet de produire un stock plus sombre et plus nuageux avec un sous-ton de la livrée.",
      "visualCue": {
        "primaryTarget": "Des os de porc blanchis qui sont passés de crus, de sang et de rose pâle à un gris blanc uniforme, avec toutes les protéines du sang de surface et les impuretés rincées. L'eau de l'évier est libre lorsqu'elle est rincée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les os n'ont pas été bouillis assez longtemps — une mousse grise importante s'accroche encore à la surface de l'os et l'eau n'est pas complètement devenue grise. Le rinçage révèle l'os souillé de sang.",
            "action": "Rincer soigneusement sous l'eau froide, peu importe, frotter activement les os. L'étape de blanchiment a extrait certaines impuretés même si la mousse n'était pas complètement purgée."
          },
          {
            "state": "Perfect",
            "description": "Des os blancs-gris propres, sans trace de sang rose ou de mousse grise. L'eau de rinçage est complètement claire. Les os se sentent fermes et ont une agréable odeur propre de porc neutre.",
            "action": "Transférer dans un pot propre et commencer la longue mijoter."
          },
          {
            "state": "Overdone",
            "description": "Les os ont été bouillis trop longtemps dans l'eau blanche — le collagène de la surface a commencé à se dissoudre dans une eau blanche trouble et trouble qui ne peut être sauvée.",
            "action": "Rincer complètement de toute façon. Procédez à la mijoteuse principale; le collagène se rebâtira de l'intérieur des os pendant la longue période de cuisson."
          }
        ]
      },
      "feelCue": "Courez un doigt le long d'un os rincé — il doit se sentir propre, lisse et légèrement crayeux, sans résidu glissant de sang ou de mousse. Les os doivent sentir propre et neutre, pas sanglant ou funky. S'ils sentent encore fortement le sang, donnez-leur un rinçage plus long."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "blanched_bones",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "simmered_broth",
      "instructions": "Transférer les os blanchis dans un pot propre. Ajouter l'eau froide, les crevettes séchées rincées, le nœud de pétoncle attaché, les tranches de gingembre meurtris et le vin Shaoxing. Porter à mijoter à feu moyen-vif — cette transition vers le premier mijot produira à nouveau de la mousse; l'écumer avec une écume fine ou une louche, mais il y aura beaucoup moins que dans le blanch. Une fois que le bouillon atteint une mijotée douce, réduire la chaleur pour maintenir le mérest tremblant de la surface — de minuscules bulles à peine là, montant du bas. Ceci est essentiel : un ébullition enroulé émulsifie la graisse et les protéines dans le liquide et crée un bouillon blanc nuageux ; un véritable bouillon cantonais doit rester clair. Maintenez ce doux mijoter pendant 2 heures, en écrèment occasionnellement.",
      "visualCue": {
        "primaryTarget": "Un pot de bouillon tremblant doucement avec juste le murmure le plus faible du mouvement à la surface — quelques bulles paresseuses se cassent toutes les quelques secondes. Le liquide est un or jaune clair, avec les os visibles en dessous et les crevettes séchées flottant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est à peine chaud après 30 minutes, les os n'ont pas encore commencé à libérer leur collagène, et le liquide ressemble à de l'eau ordinaire avec des solides flottants.",
            "action": "Augmentez légèrement la chaleur jusqu'à ce que vous voyiez le doux mijoter établi. Le bouillon a besoin de chaleur soutenue, pas seulement de chaleur."
          },
          {
            "state": "Perfect",
            "description": "Après 90 à 120 minutes : un bouillon clair, doré, faiblement opalescente. Les crevettes séchées ont donné leur profondeur marine profonde et sucrée; les os de porc ont libéré leur collagène. Le liquide est chaud, aromatique et profondément salé.",
            "action": "La souche et la saison."
          },
          {
            "state": "Overdone",
            "description": "La chaleur était trop élevée — le bouillon roule plutôt que tremblant et est devenu blanc laiteux à partir de graisses et de protéines émulsifiées. Les crevettes se sont transformées en bouillies.",
            "action": "Le bouillon est maintenant un lait d'os de porc plutôt qu'un stock clair. Il est délicieux mais ne peut pas devenir un bouillon de wonton clair cantonais. Utilisez-le plutôt comme un bouillon de style ramen, en ajoutant de la tare et des garnitures en conséquence."
          }
        ]
      },
      "feelCue": "Éjaculez une cuillère de bouillon après 90 minutes et goûtez-la: elle doit enrober l'intérieur de vos joues d'une couche invisible d'umami — une richesse savoureuse qui semble provenir de toutes les directions plutôt que de n'importe quelle saveur identifiable. C'est la qualité caractéristique d'un bon bouillon osseux cantonais. Si elle a le goût de l'eau aromatisée, elle a besoin de plus de temps."
    },
    {
      "nodeId": "step_3",
      "action": "Filtrer",
      "inputs": [
        "simmered_broth"
      ],
      "outputState": "strained_broth",
      "instructions": "Après 2 heures, retirer le pot de la chaleur et laisser reposer pendant 10 minutes, ce qui permet à toute matière particulaire restante de se déposer. Mettre une souche fine avec une double couche de cheesewet humide sur un pot propre ou un grand bol. Placer le bouillon dans la nappe de fromage sans presser ni presser les solides, ce qui permet seulement la gravité pour égoutter le bouillon produit le résultat le plus clair. Jeter les os usés, les crevettes, le pétoncle et le gingembre. Si le bouillon est encore nuageux, on peut le clarifier davantage en le laissant s'installer complètement, puis soigneusement enfiler seulement la partie supérieure, la plus claire dans le pot de service, laissant derrière lui tout sédiment nuageux.",
      "visualCue": {
        "primaryTarget": "Un bouillon doré clair et brûlé dans le pot propre — suffisamment transparent pour voir clairement le fond du récipient, sans particules flottantes, la couleur du thé ambre pâle avec une lueur chaude et dorée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le papillon est encore blanc ou moulu à partir de graisse qui n'a pas réglé, les particules flottant encore. La pâte à fromage n'a pas encore été faite.",
            "action": "Laisser reposer le bouillon pendant 10 minutes supplémentaires, puis filtrer à nouveau dans une nappe fraîche. Réfrigérer pendant la nuit pour obtenir le résultat le plus clair possible; écumer le bouchon de graisse solidifié du haut à froid."
          },
          {
            "state": "Perfect",
            "description": "Un beau, clair, liquide d'ambre doré dans lequel vous pourriez vraiment voir votre réflexion. Il tremble avec le corps du collagène dissous. La surface ne montre que le plus faible éclat de gouttelettes de graisse dorée.",
            "action": "Assaisonner et servir, ou réfrigérer jusqu'à 5 jours."
          },
          {
            "state": "Overdone",
            "description": "Le surécrèmege a enlevé trop de graisse, et le bouillon a l'air aqueux et pâle avec aucun des éclats dorés qui marque un bouillon cantonais bien nourri.",
            "action": "La saveur sera toujours excellente. Une petite bruine d'huile neutre ou de graisse de poulet (si disponible) tombée sur chaque bol au moment du service rétablira la richesse visuelle et texturale."
          }
        ]
      },
      "feelCue": "Refroidissez une petite cuillère à tiède et laissez-la s'asseoir sur votre lèvre inférieure — dans un délai de 10 secondes, vous devriez sentir une très légère collagène lorsque le collagène dissous s'accroche. Ce corps à peine là est la marque d'un bouillon d'os correctement extrait; il devrait se sentir substantiel sans être épais ou sirupeux."
    },
    {
      "nodeId": "step_4",
      "action": "Assaisonner",
      "inputs": [
        "strained_broth",
        "ing_08",
        "ing_09"
      ],
      "outputState": "finished_wonton_broth",
      "instructions": "Retourner le bouillon tendu dans une casserole propre et laisser mijoter doucement. Assaisonner avec du sel fin progressivement, goûter après chaque addition — le bouillon était cuit avec très peu de sel intentionnellement, et l'assaisonnement final devrait l'amener à une salinité avant mais non agressive. Ajouter le poivre blanc fraîchement moulu et mélanger. Le poivre blanc (plutôt que le poivre noir) est essentiel au bouillon de wonton cantonais — il procure une chaleur propre, presque florale, sans les taches visuelles de poivre noir qui écraseraient le bouillon clair. Goûtez le bouillon final : il doit être profondément salé, légèrement sucré du porc et des crevettes, chaud du poivre blanc, et laisser un arrière-goût long et agréable. Pour servir de soupe de wonton, de bouillon chaud de poche sur les wontons fraîchement cuits et les nouilles d'oeufs, ajouter une bruine d'huile de pétoncle et disperser l'écaillé.",
      "visualCue": {
        "primaryTarget": "Un bouillon d'or clair et profond dans une louche — complètement transparent, scintillement avec une surface mince de graisse, teintait l'ambre chaude du whisky vieilli. Pas de taches de poivre, pas de nuages.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon a un goût plat et sous-salé — la profondeur salée est là, mais il est étouffé, comme entendu par une porte fermée. Poivre blanc non encore ajouté.",
            "action": "Ajouter le sel en petits incréments, goûter après chaque. Ajouter ensuite le poivre blanc. Le bouillon doit être assaisonné au point qu'il a un goût spécifique, et non pas seulement un \"broth\"."
          },
          {
            "state": "Perfect",
            "description": "Un bouillon en avant, profondément salé et propre avec une chaleur de poivre blanc et une longue finale sucrée. Il goûte des comptoirs de grillades cantonais et des matins dim sum dimanche.",
            "action": "Servir immédiatement dans les bols les plus chauds possibles pour maintenir le bouillon à la vapeur à la table."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon est sursalté — il a un goût dur et unidimensionnel, la complexité submergée par le sodium. Ou le poivre blanc a été ajouté en trop grande quantité et la chaleur est mordante et désagréable.",
            "action": "Diluer avec de l'eau chaude graduellement, goûter au fur et à mesure. Un petit morceau de pomme de terre crue mijoté dans le bouillon pendant 10 minutes peut également absorber un excès de sel."
          }
        ]
      },
      "feelCue": "Le bouillon fini devrait se sentir sans poids en descendant — pas mince comme l'eau, mais léger et propre, avec une couche invisible du corps du collagène qui rend chaque sensation de bouche complète. La chaleur du poivre blanc devrait arriver après avoir avalé, un doux après-burn à l'arrière de la gorge plutôt qu'un coup sur la langue."
    }
  ]
};
