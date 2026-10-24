export default {
  "repoId": "master_greek_dolmades_001",
  "parentRepoId": null,
  "slug": "dolmades",
  "author": "ForkRecipe Kitchen",
  "title": "Dolmades (feuilles de raisins farcies)",
  "description": "Des feuilles de raisin tendres roulées autour de riz aux herbes avec de l'aneth et de la menthe fraîches, emballées serrées dans une casserole et cuites à la vapeur dans de l'huile d'olive et du citron jusqu'à ce que les feuilles deviennent soyeuses et que le remplissage gonfle en un cylindre compact et parfumé.",
  "cuisine": "Grec",
  "culture": "Grec",
  "category": "grains",
  "tags": [
    "grec",
    "riz",
    "feuilles de raisins",
    "farcis",
    "citron",
    "Huile d'olive",
    "végétarien"
  ],
  "difficulty": 3,
  "activeTime": "1 hr",
  "totalTime": "1 hr 45 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 3,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Feuilles de raisins, conservées en saumure (rincées) ou blanchies fraîches",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "feuilles de verger",
        "Feuilles de chou"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Riz blanc à grains longs, rincé",
      "ratioValue": 60,
      "defaultUnit": "%",
      "substitutions": [
        "Riz de calasparra",
        "riz jasmin"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon jaune, en dés",
      "ratioValue": 25,
      "defaultUnit": "%",
      "substitutions": [
        "oignon de printemps"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Herb",
      "name": "Diluant frais, haché finement",
      "ratioValue": 8,
      "defaultUnit": "%",
      "substitutions": [
        "l'aneth séchée (utiliser la moitié de la quantité)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "menthe fraîche, hachée finement",
      "ratioValue": 6,
      "defaultUnit": "%",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive extra-vierge (divisée: remplissage et pot)",
      "ratioValue": 20,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Jus de citron frais (divisé: remplissage et pot)",
      "ratioValue": 8,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Poivre noir fraîchement moulu",
      "ratioValue": 0.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Hydration",
      "name": "Bouillon d'eau ou de légumes légers",
      "ratioValue": 30,
      "defaultUnit": "%",
      "substitutions": [
        "bouillon de poulet (non végétalien)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparer les feuilles",
      "inputs": [
        "ing_01"
      ],
      "outputState": "prepared_leaves",
      "instructions": "Si on utilise des feuilles de raisin conservées, égoutter et rincer sous l'eau froide pour éliminer l'excès de saumure, en séparant ceux qui se sont collés ensemble. Si vous utilisez des feuilles fraîches, blanchissez-les dans de l'eau bouillante salée pendant 30 secondes jusqu'à ce qu'elles deviennent pliables. Dans l'un ou l'autre cas, triez les feuilles : mettez de côté celles qui sont déchirées, très petites, ou ont des tiges épaisses et boisées — celles-ci peuvent être utilisées pour aligner le fond du pot plutôt que comme emballages. Trim n'importe quelle tige dure rincer avec la base des feuilles en utilisant des ciseaux. Empilez les feuilles préparées sur le côté brillant (le côté mate, veiné doit faire face, vers vous, parce que c'est le côté où le remplissage sera placé). Les feuilles doivent être suffisamment souples pour rouler sans craquelure.",
      "visualCue": {
        "primaryTarget": "Feuilles olive-drabe souples dont le côté brillant est orienté vers le bas, le côté mate nervuré vers le haut, les tiges parées, triées en enveloppements et en pot-liners — pas de feuilles sèches, cassantes ou fissurées dans la pile d'emballage.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les feuilles sont toujours raides, craquent lorsqu'elles sont courbées et résistent au roulement. Feuilles en saumure qui n'ont pas été ramollies par rinçage.",
            "action": "Tremper les feuilles raides de saumure dans l'eau chaude pendant 15 minutes, puis les égoutter à nouveau. Les feuilles fraîches ont besoin d'un blanchâtre plus long."
          },
          {
            "state": "Perfect",
            "description": "Supplis et drapés, comme un morceau de tissu doux, ils se replient sur le remplissage sans déchirer et tiennent la forme du rouleau sans retomber.",
            "action": "Déposez-les sur une surface de travail propre, côté mat, prêt à être rempli."
          },
          {
            "state": "Overdone",
            "description": "Les feuilles ont été surblanchies et commencent à se désintégrer aux bords, tournant musqué.",
            "action": "Poignez très doucement. Utilisez-les pour la mise en pot plutôt que de rouler si possible."
          }
        ]
      },
      "feelCue": "Tenez une feuille préparée à l'extrémité de la tige et laissez-la draper — elle doit s'accrocher lâchement comme un morceau de tissu sans résistance ni ressort. Il doit se sentir légèrement huileux et lisse sur le côté brillant, avec une texture légèrement rugueuse sur le côté mat où les veines sont levées."
    },
    {
      "nodeId": "step_2",
      "action": "Mélanger le remplissage",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "rice_herb_filling",
      "instructions": "Dans un grand bol, mélanger le riz cru rincé, l'oignon finement coupé en dés, l'aneth haché, la menthe hachée, la moitié de l'huile d'olive, la moitié du jus de citron, le sel et le poivre. Bien mélanger avec vos mains, presser et tourner le mélange jusqu'à ce que le riz soit enrobé d'huile et de parfum d'herbe. Goûtez le mélange cru — il doit goûter assaisonné, car le riz absorbera les saveurs pendant qu'il cuit et la feuille les mutera légèrement. Le riz cru est utilisé délibérément : il fera cuire à l'intérieur de la feuille pendant la cuisson à la vapeur, absorbant les jus des herbes et de l'huile d'olive au fur et à mesure de son expansion. Si vous pré-cuisiez le riz, il ferait bouillir et coller les dolmades fermés. Le mélange doit être légèrement humide et parfumé, non sec.",
      "visualCue": {
        "primaryTarget": "Un mélange de riz humide et d'herbe où chaque grain est enrobé d'herbe verte et d'huile d'olive dorée, vif de vert d'aneth et de menthe, sentant des herbes fraîches et du citron.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz est sec et les herbes sont assises sur le dessus plutôt qu'incorporées — le remplissage fera cuire inégalement à l'intérieur de la feuille.",
            "action": "Mélanger plus soigneusement vos mains, en travaillant l'huile dans le riz pendant une autre minute."
          },
          {
            "state": "Perfect",
            "description": "Mélanger uniformément, avec des herbes distribuées dans tout et chaque grain de riz visiblement enrobé. Le mélange se maintient brièvement lorsqu'il est pressé mais s'effondre facilement.",
            "action": "Goûtez et assaisonnez. Rappelez-vous qu'il sera légèrement sous-assaisonné quand il fait froid mais correct quand il est cuit."
          },
          {
            "state": "Overdone",
            "description": "Surmené au point où le riz a commencé à se casser et à devenir féculent et collant.",
            "action": "Procéder, mais manipuler doucement pendant le roulement. Les dolmades seront légèrement plus denses mais encore comestibles."
          }
        ]
      },
      "feelCue": "Prenez une petite poignée et appuyez - la — elle devrait juste garder l'impression de votre main un moment avant de tomber en morceaux. Il doit se sentir humide et frais, avec la texture pointue des grains de riz crus ponçant votre palmier et le glissement de l'huile d'olive enrobant votre peau."
    },
    {
      "nodeId": "step_3",
      "action": "Rouleaux",
      "inputs": [
        "prepared_leaves",
        "rice_herb_filling"
      ],
      "outputState": "rolled_dolmades",
      "instructions": "Placez une feuille sur votre surface de travail, avec l'extrémité de la tige la plus proche de vous. Placer une cuillère à café (environ 15g) de remplissage sur le centre inférieur de la feuille, à peu près là où la tige rencontre le corps de la feuille. Pliez le fond de la feuille sur le remplissage, puis repliez les deux côtés vers le centre, et roulez fermement vers l'extrémité de la feuille. Le rouleau doit être ferme et compact — un dolma lâche déroulera pendant la cuisson et un remplissage trop clairsemé laissera un espace vide. Mais ne pas trop remplir : le riz a besoin d'espace pour se développer ou il va éclater la feuille. Visez un rouleau en forme de cigare légèrement plus épais que votre doigt. Placez chaque joint dolma fini vers le bas sur une plaque pendant que vous travaillez.",
      "visualCue": {
        "primaryTarget": "Bouteilles compactes, de forme uniforme, latérales vers le bas, à peu près la longueur et le diamètre d'un gros doigt — roulées étroitement sans extrémités lâches ni coutures enflammées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les rouleaux sont lâches et déballés — la feuille n'était pas assez serrée autour du remplissage. Ils vont se séparer dans le pot.",
            "action": "Rerouler plus fermement, en assurant que le premier pli ferme fermement le remplissage avant que les côtés soient repliés."
          },
          {
            "state": "Perfect",
            "description": "Bouteilles fermes et soignées, sans remplissage et sans poches d'air. Ils ressortent légèrement lorsqu'ils sont pressés, comme un petit ressort.",
            "action": "Placez immédiatement le côté de la couture vers le bas afin que la gravité aide à les maintenir fermés."
          },
          {
            "state": "Overdone",
            "description": "Les rouleaux sont si bien remplis que la feuille s'étire jusqu'au point de déchirer — le riz éclatera au fur et à mesure de son expansion.",
            "action": "Retirer un peu de remplissage avant de fermer. Un dolma éclatant est mieux évité que cuit."
          }
        ]
      },
      "feelCue": "Tenez une dolma roulée et donnez-lui une légère pression — elle doit se sentir ferme et solide, non pas squishy ou creux. Il ne devrait pas se séparer une fois libéré. Il devrait se sentir comme un petit paquet, serré, pas comme un tissu emballé."
    },
    {
      "nodeId": "step_4",
      "action": "Produits à base de vapeur",
      "inputs": [
        "rolled_dolmades",
        "ing_06",
        "ing_07",
        "ing_10"
      ],
      "outputState": "finished_dolmades",
      "instructions": "Lignez le fond d'un pot large à fond lourd avec les feuilles déchirées ou petites réservées, ce qui empêche les dolmades de brûler sur le plancher du pot. Disposer les dolmades roulées étroitement en une seule couche, côté couture vers le bas, serrés l'un contre l'autre (ils ne devraient pas hocher si le pot est secoué). S'il y a plus de dolmades qu'il n'y en a dans une couche, ajouter une deuxième couche perpendiculaire à la première. Arrosez le reste de l'huile d'olive et le jus de citron sur le dessus, puis ajoutez l'eau ou le bouillon. Placez une plaque thermofuge inversée sur le dessus des dolmades et pressez-la pour les compacter, ce qui les empêche de dérouler au fur et à mesure que le riz se développe. Couvrir la casserole et cuire à feu moyen-doux pendant 45 à 50 minutes. Les dolmades sont faites lorsque les feuilles sont complètement tendres et qu'un dolma ouvert au centre révèle du riz entièrement cuit, séparé (pas musclé).",
      "visualCue": {
        "primaryTarget": "Dolmades qui ont enflé légèrement, approfondi à un vert olive plus foncé et riche, et s'assoient dans une piscine d'huile d'olive parfumée et de bouillon de citron — chaque rouleau tenant fermement sa forme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz au centre est encore crayeux et dur quand un dolma est ouvert — la feuille peut être tendre mais le remplissage n'est pas fait.",
            "action": "Ajoutez un peu d'eau, recouvrez et continuez la cuisson pendant encore 10 minutes. Le riz a besoin de plein temps."
          },
          {
            "state": "Perfect",
            "description": "Les feuilles sont soyeuses et donnent, le riz est entièrement cuit et moelleux, et les dolmades tiennent leur forme roulée lorsqu'ils sont levés. Le bouillon dans la casserole sent le citron, l'herbe et l'huile d'olive.",
            "action": "Retirer l'assiette et laisser refroidir dans la casserole pendant 10 minutes avant de servir. Servir chaud ou à température ambiante avec du yaourt ou des quartiers de citron."
          },
          {
            "state": "Overdone",
            "description": "Les feuilles se sont complètement dissoutes et les dolmades s'effondrent — le pot s'est sec et ils se sont surchauffés.",
            "action": "Vérifiez le pot et ajoutez de l'eau si nécessaire. Les dolmades trop doux ont encore bon goût servi dans un bol avec leur bouillon de cuisson."
          }
        ]
      },
      "feelCue": "Soulevez doucement une dolma avec des pinces après cuisson — elle doit se sentir plus lourde qu'avant, gonflée avec du bouillon absorbé et du riz expansé, mais doit tenir sa forme de cylindre sans s'endetter ni se casser. La feuille doit se sentir soyeuse contre vos doigts, pas glissante ou dissolue."
    }
  ]
};
