export default {
  "repoId": "master_indian_biryani_001",
  "parentRepoId": null,
  "slug": "biryani",
  "author": "ForkRecipe Kitchen",
  "title": "Hyderabadi Dum Biryani",
  "description": "Couches de basmati safran et de poulet mariné au yogourt scellées sous un couvercle broyé, cuites lentement sur un tawa, de sorte que la vapeur piégée dans les parfums chaque grain de l'intérieur. Lorsque le sceau se brise à table, un nuage d'eau de rose, de mac et de viande carbonisée se lève et remplit la pièce.",
  "cuisine": "Indiens",
  "culture": "Hyderabadi",
  "category": "grains",
  "tags": [
    "biryani",
    "riz",
    "poulet",
    "hyderabadi",
    "safran",
    "dum",
    "Fête"
  ],
  "difficulty": 4,
  "activeTime": "1 hr 30 min",
  "totalTime": "3 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Morceaux de poulet désossé (jambe et cuisse)",
      "ratioValue": 1,
      "defaultUnit": "kg",
      "substitutions": [
        "épaulettes d'agneau en os"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Yogourt plein gras",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Biryani masala (fond : coriandre, cumin, cardamome, girofle, poivre noir, cannelle, mace)",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Poudre de chili rouge cachemiri",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "paprika doux"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Pâte gingembre-ail (parties égales)",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 2,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Starch",
      "name": "Riz basmati vieilli, rincé et trempé 30 min",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Eau, fortement salée (pour parboulement)",
      "ratioValue": 3,
      "defaultUnit": "L",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Epices entières : feuilles de laurier, cardamome, girofles, bâton de cannelle, anis étoilé",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Ghee",
      "ratioValue": 4,
      "defaultUnit": "tbsp",
      "substitutions": [
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Allium",
      "name": "Oignons minces, frits jusqu'à l'acajou (birista)",
      "ratioValue": 3,
      "defaultUnit": "medium",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Sweetener",
      "name": "Fils de safran trempés dans 3 c. à soupe de lait chaud",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "1 c. à thé de curcuma dissous dans du lait chaud"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Aromatic",
      "name": "Eau de rose",
      "ratioValue": 1,
      "defaultUnit": "tbsp",
      "substitutions": [
        "eau de kewra (pandanus)"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Herb",
      "name": "Feuilles fraîches de menthe",
      "ratioValue": 20,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_16",
      "role": "Structure",
      "name": "Pâte atta (blé entier) pour sceller (dum)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "feuille bien sertie"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "marinated_chicken",
      "instructions": "Dans un grand bol, mélanger les morceaux de poulet au yaourt, au biryani masala, au chili cachemiri en poudre, au jus de citron, à la pâte gingembre-ail et au sel. Utilisez vos mains pour travailler la marinade dans chaque crevasse — sous la peau, dans les articulations et entre les os. Le yogourt doit enrober complètement chaque morceau d'une pâte épaisse rouge rouille. Couvrir et réfrigérer pendant au moins 2 heures, idéalement pendant la nuit. L'acide lactique dans le yogourt commence à tendrer la protéine tandis que les épices parfument la viande de la surface vers l'intérieur. Avant de cuisiner, retourner le poulet à température ambiante pendant 30 minutes — le poulet froid va vapeur plutôt que semer et cuisiner inégalement dans le dum.",
      "visualCue": {
        "primaryTarget": "Chaque pièce est recouverte d'une pâte rouge-orange. Pas de taches nues de peau visible. La marinade s'accroche sans goutter.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La marinade est fine et glisse du poulet. Des taches pâles visibles où le yogourt n'a pas pénétré.",
            "action": "Massage plus agressif. Fixez la viande avec un couteau en deux endroits par pièce pour permettre à la pâte de pénétrer plus profondément."
          },
          {
            "state": "Perfect",
            "description": "Rouge profond, revêtement uniforme. La marinade sent intensément les épices et le citron. Le poulet se sent ferme et productif.",
            "action": "Couvrir et réfrigérer. Plus elle est longue, mieux c'est: la nuit est idéale."
          },
          {
            "state": "Overdone",
            "description": "Le poulet est dans la marinade acide depuis plus de 24 heures. La chair se sent musquée à la surface quand on la presse.",
            "action": "Continuez immédiatement — l'acide est allé aussi loin que possible. La marination plus longue fonctionne maintenant contre la texture."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir légèrement râpée par les épices et refroidir par le yogourt, comme appliquer un épais masque d'argile parfumée à la viande. Vos mains sentiront le gingembre et la girofle bien après."
    },
    {
      "nodeId": "step_2",
      "action": "Bouillir",
      "inputs": [
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_07"
      ],
      "outputState": "parboiled_rice",
      "instructions": "Apportez un grand pot d'eau fortement salée (il devrait avoir un goût comme la mer — environ 1 cuillerée à soupe de sel par litre) à ébullition. Ajouter les épices entières — les feuilles de laurier, la cardamome, les girofles, la cannelle et l'anis étoilé — et les laisser fleurir dans l'eau pendant 2 minutes avant d'ajouter le riz trempé et drainé. Faire cuire le riz à ébullition vigoureuse, en remuant doucement une fois, pendant exactement 5 à 6 minutes. Le riz est prêt pour le dum lorsque chaque grain est cuit à 70%: l'extérieur est tendre mais le centre a encore une résistance crayeuse-blanchâtre, ferme quand vous mordez à travers un grain. Égoutter immédiatement par un tamis à mailles fines — ne pas rincer. La surface amylacée et parfumée aux épices des grains partiellement cuits est essentielle pour que les couches se lient au fur et à mesure qu'elles se terminent.",
      "visualCue": {
        "primaryTarget": "Longs grains individuels, blancs avec un point blanc visible d'amidon sous-dosé au centre de chaque grain en mordant. Les grains tombent séparément, non entassés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre du grain est entièrement crayeux et dur, comme le riz cru. Le grain craque proprement quand il est plié.",
            "action": "Revenez à l'eau bouillante pendant 1 à 2 minutes de plus. Basmati peut aller de sous - mort à surdoser rapidement — veillez de près."
          },
          {
            "state": "Perfect",
            "description": "Extérieur tendre avec un centre ferme, légèrement opaque. Les grains se plient sans craquer. Des odeurs d'épices entières. Chaque grain est distinct.",
            "action": "Égoutter immédiatement sans rincer. La couche d'amidon doit rester."
          },
          {
            "state": "Overdone",
            "description": "Le grain est entièrement cuit et commence à gonfler et à coller. Il n'y a pas de centre ferme. Les grains sont en train de s'écraser.",
            "action": "Égoutter et étendre à plat sur un plateau pour arrêter la cuisson et les sécher. Le dum fonctionnera encore mais les grains ne peuvent pas rester séparés."
          }
        ]
      },
      "feelCue": "Frotter un grain égoutté entre le pouce et l'index : la surface externe est douce et soyeuse, mais le centre repousse avec une légère fermeté. Pas dur, pas bouilli, la texture d'une pomme de terre légèrement mal cuite."
    },
    {
      "nodeId": "step_3",
      "action": "Sear",
      "inputs": [
        "marinated_chicken",
        "ing_11"
      ],
      "outputState": "seared_chicken",
      "instructions": "Dans une grande casserole à fond lourd (un degchi ou un four de 28 cm), chauffer 2 cuillerées à soupe de ghee à feu vif jusqu'à ce qu'il s'enroule. Travailler en lots si nécessaire — ne pas fouler le pot — saisir les morceaux de poulet marinés, côté peau en premier, pendant 3-4 minutes de chaque côté. Vous ne faites pas cuire le poulet à travers; vous faites brunir la surface de la marinade pour créer la croûte caramélisée qui donnera au biryani sa base de profondeur salée. Le yaourt crachera et les épices fleuriront explosivement dans la graisse chaude. Une fois que toutes les pièces sont scellées et disposées en une seule couche dans le pot, verser toute marinade restante autour d'elles et réduire le feu à moyen. Cuire, à découvert, de 8 à 10 minutes jusqu'à ce que la marinade soit réduite en sauce épaisse et collante autour du poulet.",
      "visualCue": {
        "primaryTarget": "Des morceaux de poulet avec des taches d'acajou foncées et profondes sur chaque face, assis dans une sauce épaisse, brillante, rouge brique qui a réduit et s'accroche aux côtés du pot.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Marinade est encore pâle et humide autour du poulet. Pas de couleur sur la surface de la viande. Le liquide est mince.",
            "action": "Augmenter la chaleur et continuer — la mer a besoin de chaleur élevée pour caraméliser le yogourt. Patience."
          },
          {
            "state": "Perfect",
            "description": "Des taches sombres et presque carbonisées sur chaque pièce. Marinade a réduit à une sauce épaisse et parfumée enrobant chaque pièce et pooling au fond.",
            "action": "Retirer du feu et commencer à coucher immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Marinade a séché complètement et commence à noircir et adhérer au fond du pot. La fumée est acride.",
            "action": "Ajoutez une éclaboussure d'eau et grattez le pot — ces morceaux brunis sont la saveur. Réduire la chaleur et recouvrir le riz avant d'endommager davantage."
          }
        ]
      },
      "feelCue": "Le pot rugira avec des pulvérulents et la marinade libérera une odeur forte, presque sucrée que la laiterie caramélise. Inclinez le pot — la sauce doit courir lentement et enrober les côtés épais, comme la sauce tomate réduite."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "seared_chicken",
        "parboiled_rice",
        "ing_12",
        "ing_13",
        "ing_14",
        "ing_15",
        "ing_11"
      ],
      "outputState": "layered_biryani",
      "instructions": "Avec le poulet à la base de la casserole dans sa sauce, commencer les couches de riz. Répartir la moitié du riz sur le poulet dans une couche uniforme et plate — ne le pressez pas; gardez - le lâche et aéré. Éparpiller la moitié des oignons frits (birista) à travers le riz, déposer la moitié des feuilles de menthe uniformément, et arroser la moitié du lait de safran dans un motif de zigzag, de sorte que les piscines d'or marmoniser les grains blancs. Dressez 1 cuillère à soupe de ghee et quelques gouttes d'eau de rose. Répéter avec le reste du riz, de l'oignon, de la menthe, du lait de safran, du ghee et de l'eau de rose. La dernière couche doit être le riz, couronné de la dernière du safran et de l'oignon doré. Le pot est maintenant une cathédrale de couches — ne le dérangez pas.",
      "visualCue": {
        "primaryTarget": "Strates claires et visibles : viande foncée à la base, puis une couche de riz blanc-or avec des stries de safran ambre et des oignons foncés croustillants éparpillés. La couche supérieure est blanche avec des taches de safran jaune-orange vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz a été mélangé avec le poulet plutôt qu'en couches, ou le safran n'a pas été ajouté. L'assemblage semble uniforme et beige.",
            "action": "Ce n'est que cosmétique — le dum fonctionnera toujours. Ajouter le lait de safran en le bruissant le long des côtés du pot pour introduire une certaine couleur."
          },
          {
            "state": "Perfect",
            "description": "Couches distinctes visibles à travers la paroi du pot. Le riz le plus haut est blanc avec des taches dorées et de l'oignon foncé. L'arôme est l'eau de rose, le safran et la viande épicée.",
            "action": "Sceller et commencer la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Le riz a été pressé et compacté. Les couches ont fusionné et le pot est trop plein — il n'y a pas de place pour la vapeur à circuler.",
            "action": "Enlevez du riz du haut. Le dum nécessite un espace de tête pour la vapeur."
          }
        ]
      },
      "feelCue": "Le pot doit se sentir lourd et parfumé, rayonnant le parfum du safran et de l'eau de rose avant même qu'il soit scellé. C'est le moment d'anticipation maximale."
    },
    {
      "nodeId": "step_5",
      "action": "Brise",
      "inputs": [
        "layered_biryani",
        "ing_16"
      ],
      "outputState": "finished_biryani",
      "instructions": "Roulez la pâte atta dans une corde épaisse et appuyez fermement sur le bord du pot, puis placez le couvercle sur le dessus et pressez pour sceller — la pâte crée un joint hermétique qui piège la vapeur à l'intérieur. Placer le pot scellé sur un tawa plat ou une grille sur la chaleur la plus basse possible. Cuire sur dum pendant 35 à 40 minutes. Le tawa agit comme un diffuseur de chaleur, transformant la flamme directe du poêle en une chaleur douce et tout autour. Après 25 minutes, posez une briquette de charbon allumée sur le couvercle si vous voulez une note de char fumé, ou tout simplement continuer sans elle. Pour vérifier la cuisson, appuyez sur le couvercle — il devrait se sentir chaud mais pas brûlant, et vous devriez entendre un sifflement de vapeur très faible, occasionnellement. Après 40 minutes, retirer de la chaleur et laisser reposer le pot scellé pendant 10 minutes avant de casser le joint à la table. Écraser la pâte, lever lentement le couvercle et laisser la colonne de vapeur parfumée lever devant la pièce.",
      "visualCue": {
        "primaryTarget": "Lorsque le couvercle se lève, un grand nuage de vapeur parfumée s'élève des grains de riz qui sont séparés individuellement, entièrement cuits, et chaque nuance du blanc à l'ambre profond. Le poulet au fond est humide et tombe facilement de l'os.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le riz de la couche supérieure est encore ferme et mal cuit. Le poulet ne tombe pas encore de l'os. La vapeur était insuffisante — le joint a pu fuir.",
            "action": "Resceller si possible et revenir à feu doux pendant encore 15 minutes. Si le joint s'est cassé, couvrir étroitement avec du papier et ajouter 2 cuillères à soupe d'eau autour des bords."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain de chaque couche est cuit et séparé. La couche inférieure de poulet est profondément parfumée, humide et glisse de l'os. Le safran a fleuri et marbré le riz haut en or brillant.",
            "action": "Servir immédiatement, s'écoper de la casserole de sorte que chaque assiette obtient les trois couches — le riz du haut et du bas, le poulet de la base."
          },
          {
            "state": "Overdone",
            "description": "Le riz est musqué et les couches ont fusionné en une masse homogène. Le poulet de fond peut avoir collé ou brûlé.",
            "action": "La texture est compromise mais la saveur est encore extraordinaire. Servir avec un raita refroidissant pour contraster la richesse."
          }
        ]
      },
      "feelCue": "Le pot scellé doit se sentir chaud mais pas chaud à une paume plate sur le couvercle. Lorsque vous cassez le sceau de la pâte après le repos, il s'éloigne proprement, ayant fusionné à la fois à la casserole et au couvercle dans une croûte fragile et cuite qui sent le blé grillé."
    }
  ]
};
