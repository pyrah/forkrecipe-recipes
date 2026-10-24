export default {
  "repoId": "master_american_smoked_brisket_001",
  "parentRepoId": null,
  "slug": "smoked-brisket",
  "author": "ForkRecipe Kitchen",
  "title": "Texas Post-Oak smoked Brisket",
  "description": "Une poitrine pleine d'emballage — plate et pointée ensemble — frottait en rien d'autre que du sel grossier et du poivre fissuré, puis se livrait à la fumée post-oak pendant douze heures jusqu'à ce que l'écorce soit presque noire et que le collagène se soit complètement dissous en graisse tremblante et auto-soufflante.",
  "cuisine": "Américain",
  "culture": "Texan",
  "category": "proteins",
  "tags": [
    "bbq",
    "boeuf",
    "fumée",
    "texas",
    "faible et faible",
    "poitrine",
    "fosse"
  ],
  "difficulty": 4,
  "activeTime": "1 hr 30 min",
  "totalTime": "14 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 1,
    "bitter": 2,
    "umami": 5,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Poches pleines (USDA Choice ou Prime), 12–16 lb",
      "ratioValue": 1,
      "defaultUnit": "whole",
      "substitutions": [
        "poitrine plate (réduire le temps de cuisson de 2 à 3 heures)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel casher grossier",
      "ratioValue": 0.5,
      "defaultUnit": "cup",
      "substitutions": [
        "flocons de sel de mer"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Poivre noir grossièrement craqué (16 mailles)",
      "ratioValue": 0.5,
      "defaultUnit": "cup",
      "substitutions": [
        "mélange de maïs poivré tricolore"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Fendaisons de bois post-oak",
      "ratioValue": 4,
      "defaultUnit": "pieces",
      "substitutions": [
        "bois de noix de pécan",
        "hickory (utiliser parcimonieusement une fumée plus forte)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Suif de boeuf ou huile neutre, pour liant",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "moutarde jaune (arôme neutre une fois cuit)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trim",
      "inputs": [
        "ing_01"
      ],
      "outputState": "trimmed_brisket",
      "instructions": "Placez la poitrine sur une planche à découper. À l'aide d'un couteau à désossage tranchant, tailler le bouchon de graisse à une épaisseur uniforme de 1/4 po — pas d'éclaircir, ou il se refermera avant qu'il puisse protéger le plat; pas plus épais, ou il isolera trop agressivement et ralentira la cuisson. Arrondissez les bords durs le long du périmètre du bouchon de graisse afin que le frotte adhère uniformément et l'écorce se forme sans carboniser sur les coins. Dépliez la poitrine et retirez toute peau d'argent et l'épaisseur de la graisse intermusculaire dure et cireuse entre le point et plat — cette graisse ne rendra jamais et créera une sensation de bouche grasse. Enlevez tout gros dépôt de graisse dure du pont (le bouton à l'extrémité épaisse du point). La poitrine finie doit avoir l'air aérodynamique : lisse, uniforme, sans crêtes abruptes. Trim en forme de bateau arrondie donc il convient au fumeur avec dégagement de tous les côtés.",
      "visualCue": {
        "primaryTarget": "Casquette uniforme blanc ivoire, 1/4 pouce d'épaisseur, sans crêtes ou pics abrupts. Muscle lisse de boeuf visible sur le dessous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Couvercle gras épais et inégal, boutons blancs visibles et durs, peau argentée intacte sur le dessous.",
            "action": "Continuer le parage — une mauvaise parure signifie une écorce inégale et une tranche grasse. Prenez votre temps; c'est l'étape de préparation la plus importante."
          },
          {
            "state": "Perfect",
            "description": "Même 1/4-pouce de graisse, bords arrondis, aucun dépôt de graisse dure. La poitrine est plate et symétrique.",
            "action": "Passez à l'application de frotter."
          },
          {
            "state": "Overdone",
            "description": "Bouchon de graisse paré en dessous de 1/8 po ou complètement enlevé dans les taches. Muscle nu exposé.",
            "action": "Procéder soigneusement — l'appartement devra être surveillé de plus près pendant la cuisson et peut nécessiter un emballage plus tôt pour éviter le séchage."
          }
        ]
      },
      "feelCue": "Froid, ferme et légèrement lissé. La graisse sous votre paume doit se sentir comme du beurre froid — rendement mais structuré, pas humide ou gras. Toute section qui se sent caoutchouteuse et résiste au couteau est la graisse dure qui doit sortir."
    },
    {
      "nodeId": "step_2",
      "action": "Assaisonner",
      "inputs": [
        "trimmed_brisket",
        "ing_02",
        "ing_03",
        "ing_05"
      ],
      "outputState": "rubbed_brisket",
      "instructions": "Brossez ou frottez une fine et uniforme couche de suif de boeuf (ou de moutarde) sur toute la surface de la poitrine — ce qui agit comme un liant pour aider à la frotter, pas comme un composant de saveur. Mélanger le sel et le poivre 1:1 par volume dans un shaker ou un bol. Tenez votre main 12 pouces au-dessus de la poitrine et appliquez le frotter dans une pluie uniforme, en tournant la poitrine pour enrober toutes les surfaces : le capuchon gras, le dessous, les côtés et l'extrémité du point épais. Vous voulez une croûte audacieuse et visible, plus lourde que vous ne le pensez. Le plat (fin mince) obtient une application légèrement plus légère que le point épais, qui a plus de masse à la saison. Laisser la poitrine assaisonnée reposer à découvert sur un support de fil au réfrigérateur pendant au moins 1 heure, ou toute la nuit jusqu'à 12 heures. Le sel tirera un mince film d'humidité qui réabsorbera ensuite, assaisonnant la viande de l'intérieur.",
      "visualCue": {
        "primaryTarget": "Une croûte noire-gris foncée uniforme de sel et de poivre couvrant chaque surface visible. Pas de viande rose à travers des taches nues.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Application patchy – taches roses nues visibles, frottées dans des dérives.",
            "action": "Ré-appliquer frotter aux zones nues. Les griffes peuvent être propagées en appuyant légèrement sur le plat de votre main."
          },
          {
            "state": "Perfect",
            "description": "Même la croûte confiante. Le capuchon gras montre un piment régulier de poivre noir. Pas de taches nues. La masse semble presque trop lourde — ce n'est pas le cas.",
            "action": "Réfrigérer à découvert sur un porte-fils pendant 1 à 12 heures."
          },
          {
            "state": "Overdone",
            "description": "Ruber si épais qu'il a formé une pâte humide et tombe en touffes.",
            "action": "Éliminez doucement l'excès avec une main sèche. La pâte humide ne formera pas une bonne écorce — elle doit sécher à la surface."
          }
        ]
      },
      "feelCue": "Après le reste, la surface de la poitrine doit être légèrement collante et sèche au toucher, comme l'extérieur d'une poêle en fonte bien assaisonnée. S'il est mouillé ou collant, faites sécher avec des serviettes en papier avant de charger le fumeur."
    },
    {
      "nodeId": "step_3",
      "action": "Fumer",
      "inputs": [
        "rubbed_brisket",
        "ing_04"
      ],
      "outputState": "smoked_brisket_unwrapped",
      "instructions": "Allumez votre fumeur offset ou bouilloire et portez-la à 225–250°F (107–121°C) au niveau de la grille. Ajouter des fractions post-oak pour maintenir une fumée bleue propre et mince — pas de fumée blanche épaisse ou grise qui donne une saveur amère et acride. Placez le côté gras de la poitrine vers le haut (ou vers la source de chaleur pour les fosses offset) avec l'extrémité du point plus épais vers le foyer. Maintenir la température en ajoutant des fractions toutes les 45 à 60 minutes. Ne pas ouvrir le couvercle sauf pour ajouter du bois. Cuire intacte jusqu'à ce que la poitrine développe une écorce d'acajou foncée et que la température interne des plateaux plats (la « butte ») se situe entre 155 et 170 °F (68 et 77 °C). Le décrochage peut durer de 2 à 4 heures — ne paniquez pas et n'augmentez pas la température. Continuer la cuisson à travers la stalle jusqu'à ce que l'écorce soit réglée: presque noir, ferme, et ne frotte pas quand vous appuyez avec votre pouce. Cela prend généralement de 6 à 9 heures selon la taille de la poitrine et votre fosse.",
      "visualCue": {
        "primaryTarget": "Une écorce acajou-à-près-noire profonde couvrant toutes les surfaces. Le bouchon de graisse a rendu et retiré légèrement des bords. Le point semble plus sombre que le plat.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'écorce est brun rougeâtre et frotte lorsqu'elle est pressée — la croûte n'est pas encore réglée. Température interne de l'appartement toujours en montée ou juste en entrant dans la stalle.",
            "action": "Fermez le couvercle et continuez la cuisson. Ne l'enveloppez pas encore — l'envelopper avant que les ensembles d'écorce ne la vapeur et il ne se rétablira jamais. Soyez patient à travers le stand."
          },
          {
            "state": "Perfect",
            "description": "Aboiement presque noir qui se sent ferme et sec sous une pression de pouce. Il se plisse légèrement aux bords du bouchon. Anneau de fumée visible dans une section transversale. Température interne plate: 165– 170°F.",
            "action": "Envelopper le papier de boucher rose (préféré) ou la feuille et retourner au fumeur."
          },
          {
            "state": "Overdone",
            "description": "L'écorce est noire carbonisée, s'éteint dans des jetons cassants. Une odeur d'acride. La graisse a rendu complètement et la surface semble sèche.",
            "action": "Enveloppez immédiatement le papier de boucherie pour arrêter d'assombrir davantage. L'écorce peut être légèrement amère, mais l'intérieur devrait encore être bon."
          }
        ]
      },
      "feelCue": "Atteindre et presser fermement l'écorce avec votre pouce — une écorce parfaitement réglée ne frotte ni ne dentele. Il doit se sentir comme la croûte d'un bon pain artisanal : rigide et sec, avec un léger bruit de craquelure lorsqu'il est pressé. L'odeur de fumée à ce stade devrait être douce et boisée, pas acride."
    },
    {
      "nodeId": "step_4",
      "action": "Braiser",
      "inputs": [
        "smoked_brisket_unwrapped"
      ],
      "outputState": "wrapped_brisket",
      "instructions": "Enveloppez fermement la poitrine en deux couches de papier boucher rose non couché (la béquille du Texas, version papier). Tirez le papier snoug — vous voulez qu'il piège la vapeur et les jus tout en respirant légèrement, ce qui préserve l'écorce mieux que la feuille. Retourner la poitrine enveloppée au fumeur à 250 °F (121 °C). Continuer la cuisson jusqu'à ce que la température interne du plat atteigne 200–205°F (93–96°C). À cette température, le collagène s'est entièrement converti en gélatine et la graisse intramusculaire dans le point a rendu pleinement. Le vrai test n'est pas la température mais la sensation de sonde : insérer un thermomètre à lecture instantanée ou un cure-dent dans la partie la plus épaisse de l'appartement. Il devrait glisser avec une résistance nulle, comme pousser dans le beurre à température ambiante.",
      "visualCue": {
        "primaryTarget": "Le papier de boucher est profondément teinté de graisse et de jus de boeuf. La poitrine enroulée est douce et lourde lorsque vous la ramassez — un léger frottement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Thermomètre répond à la résistance dans le plat. Lis en dessous de 200°F. Le papier est à peine teinté.",
            "action": "Continuez à cuisiner. Vérifiez toutes les 30 minutes. Ne vous précipitez pas: la poitrine sous - morte est dure et mâcheuse."
          },
          {
            "state": "Perfect",
            "description": "La sonde glisse dans le plat sans résistance nulle part. Température interne 200–205°F. Le papier est fortement teinté. La bride se balance dans le papier comme un ballon d'eau.",
            "action": "Reposez-vous immédiatement — ne pas couper."
          },
          {
            "state": "Overdone",
            "description": "Le papier est sec et sombre. Sonde ne rencontre aucune résistance mais la viande a commencé à s'éloigner du bouchon de graisse ou s'est effondrée.",
            "action": "Reposez-vous immédiatement et tranchez le plus tôt possible. La poitrine trop cuite sèche rapidement."
          }
        ]
      },
      "feelCue": "Prenez la poitrine enroulée avec les deux mains — elle devrait se sentir boiteuse et lourde, avec un gabarit perceptible à l'extrémité du point. Si elle se sent raide et comme une planche, elle a besoin de plus de temps. Le papier doit être chaud et léché de graisse fondue, et l'ensemble de l'emballage sent le boeuf caramélisé profond."
    },
    {
      "nodeId": "step_5",
      "action": "Laisser reposer",
      "inputs": [
        "wrapped_brisket"
      ],
      "outputState": "rested_brisket",
      "instructions": "Placer la poitrine enveloppée dans un refroidisseur sec vide (pas de glace). Ferme le couvercle. Reposez-vous pendant au moins 1 heure; 2 à 3 heures sont idéales et jusqu'à 4 heures sont sûres. Ne sautez pas ou raccourcissez pas le reste. Pendant ce temps, les fibres musculaires, qui ont contracté sous la chaleur extrême, se détendre et réabsorber les jus expulsés. Une poitrine tranchée directement du fumeur saigne sur la planche à découper; une poitrine bien reposée tient son humidité dans la tranche. La température interne s'échelonnera autour de 150 °F (65 °C) dans le refroidisseur, bien à l'intérieur de la plage de sécurité alimentaire.",
      "visualCue": {
        "primaryTarget": "La poitrine, encore enveloppée, s'est installée et s'est légèrement aplatie sous son propre poids dans la glacière. Le papier est humide mais ne fuit pas.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Brisket reposé moins de 45 minutes. Toujours très chaud — au-dessus de 170°F interne.",
            "action": "Retournez à la glacière. Le reste n'est pas facultatif — la patience ici paie pour elle-même dans chaque tranche."
          },
          {
            "state": "Perfect",
            "description": "La température interne est tombée à 150–160°F. La poitrine est douce et s'incline lorsqu'elle est pressée dans le papier. Reposé de 1,5 à 3 heures.",
            "action": "Défaire et trancher immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Reposé plus de 5 heures. Température intérieure inférieure à 140°F.",
            "action": "Reconditionner le papier d'aluminium et le placer dans un four à 170 °F pour ramener à une température de service sûre avant de trancher."
          }
        ]
      },
      "feelCue": "Appuyez sur la poitrine à travers le papier — toute la masse devrait donner comme un oreiller ferme, uniforme et donnant. Pas de points durs, pas de zones rigides. L'odeur montant des coutures de papier est un brouillard chaud de suif rendu, de fumée et de poivre profondément caramélisé."
    },
    {
      "nodeId": "step_6",
      "action": "Trancher",
      "inputs": [
        "rested_brisket"
      ],
      "outputState": "sliced_brisket",
      "instructions": "Déballez la poitrine et placez-la sur une grande planche à découper avec une rainure de jus. Identifier la direction du grain de la plate - longues fibres musculaires parallèles courant dans le sens de la longueur. Localiser où se rencontrent le point et le plat : c'est le point de séparation. Séparer le point de l'appartement en coupant à travers la couche grasse entre eux. Couper le plat sur le grain en tranches de 1/4 po — la largeur d'un crayon. La rotation de 90 degrés à plat pour couper le grain est essentielle : le tranchage avec le grain produit des bandes de cuir. Le point a le grain courant dans une direction différente, le faire tourner et couper sur son grain aussi bien. Chaque tranche de plat doit tenir ensemble, mais s'en détacher facilement lorsqu'elle est ajustée. Chaque tranche du point doit être visiblement plus molle avec la graisse rendue.",
      "visualCue": {
        "primaryTarget": "Tranches plates : extérieur acajou profond avec un anneau de fumée visible (1/8-1/4 pouce de rose) sous l'écorce, intérieur gris-brun humide. Tranches pointues : plus foncées, grasses, scintillantes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tranches tiennent leur forme rigidement, sans flexibilité. L'intérieur a l'air gris et sec sans reflet visible de graisse. Il faut de la force pour séparer la tranche.",
            "action": "La poitrine était soit mal cuite, soit coupée trop tôt. Retourner au four enroulé à 275°F pour des incréments de 30minutes, prospecter jusqu'à tendreté."
          },
          {
            "state": "Perfect",
            "description": "Chaque tranche fléchit sans craquelure, tient ensemble lorsqu'elle est levée d'une extrémité, et montre un intérieur humide et scintillant. L'anneau de fumée est un halo rose vif. La tranche se sépare par un remorqueur doux.",
            "action": "Servir immédiatement, couper les jus de planches en cuillère sur les tranches."
          },
          {
            "state": "Overdone",
            "description": "Les tranches s'effondrent ou s'effondrent à mesure que vous coupez. La viande a l'air rugueuse et sèche. La graisse a rendu complètement.",
            "action": "Coupez les morceaux émiettés pour les sandwichs hachés à la poitrine avec de la sauce supplémentaire – la poitrine trop cuite fait encore un excellent bœuf haché."
          }
        ]
      },
      "feelCue": "Une tranche parfaite de plat maintenue à une extrémité devrait s'enfoncer sous son propre poids et se balancer doucement — pas se casser, pas s'enfoncer doucement. Il est assez ferme pour prendre mais assez doux pour donner entre vos doigts sans résistance. La planche à découper devrait être mise en commun avec du jus d'or rougeâtre, c'est - à - dire de l'or liquide; cuillerez - la sur tout."
    }
  ]
};
