export default {
  "repoId": "master_american_kombucha_001",
  "parentRepoId": null,
  "slug": "kombucha",
  "author": "ForkRecipe Kitchen",
  "title": "Kombucha",
  "description": "Un thé vivant, légèrement effervescent — thé noir sucré et remis à un SCOBY, qui fait tourner le sucre dans une tarte, une bière cidery, puis embouteillé et affamé d'oxygène jusqu'à ce qu'il construit son propre fizz tranquille. Souris, légèrement vinaigreux, vif sur la langue.",
  "cuisine": "Américain",
  "culture": "Pacifique Nord-Ouest",
  "category": "fermented",
  "tags": [
    "kombucha",
    "fermenté",
    "thé",
    "Scoby",
    "probiotique",
    "Foncé"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "10 days",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 1,
    "salty": 0,
    "sour": 4,
    "bitter": 2,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Solvent",
      "name": "Eau filtrée (sans chlore)",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "eau de source",
        "eau du robinet laissée à découvert pendant la nuit jusqu'au chlore hors gaz"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Thé noir à feuilles longues (Assam ou Ceylan)",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "Thé vert clair",
        "4 sachets de thé"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de canne blanche",
      "ratioValue": 70,
      "defaultUnit": "g",
      "substitutions": [
        "jus de canne évaporé organique"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Base",
      "name": "SCOBY (culture kombucha vivante)",
      "ratioValue": 1,
      "defaultUnit": "pellicle",
      "substitutions": [
        "un gros kombucha cru acheté au magasin plus 2 semaines pour cultiver son propre"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Démarreur kombucha (maturité, non aromatisé)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "kombucha cru non pasteurisé acheté en magasin",
        "vinaigre blanc distillé dans une pincée"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Citrus",
      "name": "Gingembre et citron frais (pour deuxième fermentation)",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": [
        "baies",
        "fruits en pierre tranchés",
        "un jet de jus de fruits"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Infuser",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "sweet_tea",
      "instructions": "Porter l'eau à ébullition, tuer la chaleur et remuer le sucre jusqu'à ce qu'il se dissolve complètement. Ajouter le thé mou et raide de 8 à 10 minutes pour le thé noir, puis étirer les feuilles. Le sucre est la nourriture et le thé de la bactérie fournit l'azote et les tanins dont la culture a besoin — n'utilisez jamais des thés aromatisés, huilés ou décaféinés par solvant, qui peuvent bloquer ou empoisonner le SCOBY. Laisser refroidir complètement le thé doux à température ambiante, en dessous de 30°C / 86°F. C'est la pause la plus importante : le thé chaud va scalder et tuer votre culture.",
      "visualCue": {
        "primaryTarget": "Un thé doux ambre profond, entièrement limpide, sans graisse de sucre au fond, refroidi à l'endroit où le pot se sent neutre — ni chaud ni froid — contre le dos de votre main.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le thé est pâle et faible, ou les cristaux de sucre sont encore visibles tourbillonnant au fond.",
            "action": "Profondir plus longtemps pour plus de couleur et de tanin, et remuer jusqu'à ce que chaque grain de sucre ait dissout avant de refroidir."
          },
          {
            "state": "Perfect",
            "description": "Riche ambre, cristal limpide, température ambiante, dégustation cloieusement douce avec une poignée tannique ferme derrière.",
            "action": "Verser dans votre pot de fermentation propre et procéder à la mise en place de la culture."
          },
          {
            "state": "Overdone",
            "description": "Le thé est encore chaud au toucher, ou il était surtendu et agressivement amer et astringent.",
            "action": "Le thé chaud tue les SCOBY. D'abord refroidir complètement. Le thé surpeuplé est bien; le ferment adoucit l'amertume."
          }
        ]
      },
      "feelCue": "Appuyez sur le pot à votre poignet intérieur — il doit lire comme température du corps ou refroidir avant que la culture entre. Le thé doit sentir le malt et le tanin et le goût presque dégoûtant; que la douceur est le combustible les dix prochains jours brûlera loin."
    },
    {
      "nodeId": "step_2",
      "action": "Emplacement",
      "inputs": [
        "sweet_tea",
        "ing_04",
        "ing_05"
      ],
      "outputState": "pitched_brew",
      "instructions": "Avec des mains propres, glissez le SCOBY dans le thé sucré refroidi et versez dans le kombucha de départ. Le démarreur dépose immédiatement le pH dans un territoire acide, qui clôture les moisissures et les bactéries errantes avant qu'elles ne puissent prendre pied. Couvrir la bouche du pot d'un chiffon ou d'un filtre à café tissé serré et fixé par une bande, jamais un couvercle solide : la culture doit respirer, mais les mouches de fruits doivent rester dehors.",
      "visualCue": {
        "primaryTarget": "Le SCOBY flotte, coule ou se tient sur le bord dans un thé doré nuageux — toute orientation est normale — avec le tissu respirant à travers le bord.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Vous avez oublié le liquide de départ, ou utilisé beaucoup trop peu, donc la bière a un goût sucré sans bord aigre.",
            "action": "Ajoutez maintenant la mesure complète du démarrage mature. Sans cet acide, la bière est dangereusement vulnérable à la moisissure dans les premiers jours."
          },
          {
            "state": "Perfect",
            "description": "SCOBY dans le pot, démarreur agité, la surface sentant faiblement la tarte et la levure, couverture respirante sécurisée.",
            "action": "Réglez le pot quelque part chaud (21–27°C / 70–80°F), sombre et non perturbé. Attendez."
          },
          {
            "state": "Overdone",
            "description": "Vous avez scellé le pot avec un couvercle hermétique.",
            "action": "Echangez en tissu immédiatement. Un pot scellé étouffe la culture aérobie et peut créer une pression dangereuse pendant le ferment ouvert."
          }
        ]
      },
      "feelCue": "Le liquide d'entrée sent comme le vinaigre de cidre de pomme vif — que l'acidité protectrice va fonctionner. Ne vous inquiétez pas si la SCOBY coule ; une saine pousse souvent un tout nouveau pelicule pâle à travers la surface en quelques jours."
    },
    {
      "nodeId": "step_3",
      "action": "Fermenter",
      "inputs": [
        "pitched_brew"
      ],
      "outputState": "fermented_kombucha",
      "instructions": "Laissez le bocal chaud, sombre, et encore pendant 7 à 14 jours. Un nouveau pellicule de couleur crème s'étendra à la surface au fur et à mesure que la culture fonctionnera, et le brassage sera lentement nuageux et lancera des brins de levure brune. Commencez la dégustation à travers une paille (passée par le SCOBY) autour du jour 7. Vous êtes à la poursuite du moment qu'il s'agit de douceur vers tarte-mais-équilibrée: les chambres plus chaudes finissent en une semaine, les chambres fraîches en prennent deux. Faites confiance à votre langue sur le calendrier.",
      "visualCue": {
        "primaryTarget": "Une bière dorée et nuageuse surmontée d'un nouveau pellicule lisse, avec des cordes de levure brunes qui traînent en dessous, sentant le cidre de tarte et goûtant lumineux, aigre, et seulement légèrement sucré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La bière a encore le goût de thé sucré avec peu d'auresse, et le nouveau pellicule est mince ou patchy.",
            "action": "Récupérer et attendre plusieurs autres jours, dégustation tous les jours ou deux. Les cuisines plus froides ont besoin de plus de temps."
          },
          {
            "state": "Perfect",
            "description": "Tarte agréablement avec juste un murmure de douceur résiduelle — comme un cidre de pomme sec — et le pellicule est une couche uniforme et opaque.",
            "action": "Réservez le SWOBY et 150 g de ce liquide comme démarreur pour votre prochain lot, puis passez à l'embouteillage."
          },
          {
            "state": "Overdone",
            "description": "Il a un goût très vinaigreux sans douceur et peut piquer le nez.",
            "action": "Il a traversé le territoire du vinaigre. Diluer, mélanger une éclaboussure dans un lot sucré frais, ou le garder comme vinaigre de cuisson tanné."
          }
        ]
      },
      "feelCue": "Des griffes et des fils bruns secs suspendus au pellicule sont des levures saines, pas des moisissures — le moule est toujours flou, sec, et pousse sur le dessus du pellicule dans des cercles bleus, verts, blancs ou noirs. Si jamais vous voyez des taches floues, jetez le lot entier et SCOBY sans dégustation."
    },
    {
      "nodeId": "step_4",
      "action": "Carbonate",
      "inputs": [
        "fermented_kombucha",
        "ing_06"
      ],
      "outputState": "finished_kombucha",
      "instructions": "Déposer le gingembre tranché et une pression de citron (ou de tout fruit) dans des bouteilles swing-top propres et l'entonnoir dans le kombucha fermenté, laissant 3 cm d'espace de tête. Scellez-les hermétiquement. Le sucre résiduel et les sucres des fruits alimentent une seconde fermentation rapide, et comme la bouteille est maintenant scellée, le CO2 n'a nulle part où s'échapper, il se dissout dans le liquide sous forme de fizz. Laisser à température ambiante 2 à 4 jours, 'bourrer' une bouteille par jour pour mesurer la pression. Lorsque vif, réfrigérer pour arrêter le ferment et servir froid.",
      "visualCue": {
        "primaryTarget": "À l'ouverture, un sifflement doux et une ruée de fines bulles grimpant le verre; versé, une tarte, pétillante, parfumée de fruits kombucha avec une tête durable de mousse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La bouteille s'ouvre silencieusement et le kombucha est plat ou à peine teinté.",
            "action": "Laisser les bouteilles à température ambiante un autre jour ou deux. La chaleur et un peu plus de sucre ou de fruits entraînent la carbonation."
          },
          {
            "state": "Perfect",
            "description": "Un pfft croustillant sur l'ouverture, des bulles vives abondantes, et une saveur propre de tarte sucrée levée par le gingembre et le citron.",
            "action": "Réfrigérer immédiatement pour verrouiller le fizz et arrêter la fermentation. Buvez dans quelques semaines."
          },
          {
            "state": "Overdone",
            "description": "La bouteille gouffre ou mousse violemment, ou se sent dure sous les doigts (risque d'une \"bombe\").",
            "action": "Refroidir immédiatement pour ralentir le gaz, puis ouvrir lentement sur un évier. La prochaine fois, utilisez moins de sucre/fruit et de rotule plus souvent."
          }
        ]
      },
      "feelCue": "Pressez une bouteille de swing-top tous les jours : une bouteille de carbonatation saine passe de doux à étanche au tambour. S'il se sent terriblement dur et inébranlable, réfrigérez - le et ouvrez - le soigneusement — la pression se construit rapidement et le verre peut échouer."
    }
  ]
};
