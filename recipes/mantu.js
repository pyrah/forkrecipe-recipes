export default {
  "repoId": "master_afghan_mantu_001",
  "parentRepoId": null,
  "slug": "mantu",
  "author": "ForkRecipe Kitchen",
  "title": "Mantou",
  "description": "Des boulettes à la vapeur afghanes remplies de boeuf haché épicé et d'oignon caramélisé, servies sur une piscine de sauce au pois fendue et de yogourt tanné, ensuite couronnées de menthe séchée et d'un fil de tomate rougissant.",
  "cuisine": "Afghans",
  "culture": "Asie centrale",
  "category": "proteins",
  "tags": [
    "boulettes",
    "boeuf",
    "afghan",
    "vapeur",
    "yaourt"
  ],
  "difficulty": 4,
  "activeTime": "90 min",
  "totalTime": "3 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 5,
    "sour": 4,
    "bitter": 1,
    "umami": 7,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude",
      "ratioValue": 2.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel de mer fin (pour pâte)",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Protein",
      "name": "Boeuf haché (20% de matières grasses)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "agneau haché"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon jaune, en dés",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Poivre de Cayenne",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel de mer fin (à remplir)",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Dairy",
      "name": "Yogourt plein gras",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Herb",
      "name": "menthe séchée",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pétrir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "rested_dough",
      "instructions": "Mélanger la farine et le sel, faire un puits, et verser progressivement dans l'eau chaude, en mélangeant avec une fourchette jusqu'à ce qu'une pâte chaotique se forme. Tourner sur une surface de travail et pétrir pendant 8-10 minutes jusqu'à ce que lisse, élastique et non collant. La pâte à mantu doit être légèrement plus rigide que la pâte à pâtes; elle doit tenir ses plis sous la pression de la vapeur. Formez-vous en boule, couvrez-vous fermement d'enveloppe en plastique et reposez-vous pendant au moins 45 minutes.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte lisse et tendue qui ressort lentement lorsqu'elle est dentelée, légèrement plus raide qu'un lobe d'oreille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est lugubre, les larmes quand on la tire et les colle aux mains.",
            "action": "Agenouiller encore 3-5 minutes, ajouter la farine par la cuillère à café seulement si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Doux, légèrement collant mais pas collant. Lorsque vous tirez une pièce, elle s'étire sans se déchirer immédiatement. Il ressort à mi-chemin quand il a sauté.",
            "action": "Couvrir et reposer 45 minutes minimum."
          },
          {
            "state": "Overdone",
            "description": "Dough est très ferme et est devenu élastique et résistant — se ressort instantanément.",
            "action": "Repos couvert pendant 30 minutes. Le gluten surcollé a besoin de temps pour se détendre avant de rouler."
          }
        ]
      },
      "feelCue": "Après le pétrissage, appuyez sur votre pouce dans le centre — il devrait laisser un tiret propre qui se remplit lentement vers la moitié sur environ 10 secondes. Cette lente récupération est le gluten qui fonctionne."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_05",
        "ing_04",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "cooked_filling",
      "instructions": "Dans une poêle large, cuire l'oignon coupé en dés dans une petite quantité d'huile à feu moyen, en remuant fréquemment, pendant 15-20 minutes jusqu'à ce qu'il soit profondément caramélisé et doux — doré brun, pas pâle. Ajouter le boeuf haché, le casser en miettes fines, et cuire jusqu'à ce qu'il ne reste pas de rose. Ajouter les épices et le sel, remuer 2 minutes, puis goûter. Le remplissage doit être très assaisonné, car la pâte à diluer dilue la saveur. Étaler sur une plaque pour refroidir complètement avant le remplissage.",
      "visualCue": {
        "primaryTarget": "Un remplissage sombre et parfumé de boeuf fin et d'oignon d'or profond — pas de viande rose, pas d'huile de piscine.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont pâles et translucides; le boeuf est juste cuit sans brunissement. Le remplissage aura un goût fade à l'intérieur de l'emballage.",
            "action": "Cuire plus longtemps à feu moyen. La caramélisation de l'oignon est essentielle à la douceur du mantu."
          },
          {
            "state": "Perfect",
            "description": "Les oignons sont profondément dorés. Le boeuf est entièrement cuit avec quelques bords légèrement croustillants. Les épices sentent grillées et chaudes.",
            "action": "Étendre pour refroidir. Ne pas remplir les boulettes de remplissage chaud — il vapeur la pâte de l'intérieur."
          },
          {
            "state": "Overdone",
            "description": "Les oignons commencent à carboniser et le boeuf est sec.",
            "action": "Ajouter une cuillère à soupe d'eau dans la poêle, remuer et retirer de la chaleur."
          }
        ]
      },
      "feelCue": "Appuyez sur le remplissage entre les doigts — il devrait se tenir légèrement lorsqu'il est pressé (à partir de la graisse) mais s'effondrer librement. Pas de rose, pas d'odeur crue."
    },
    {
      "nodeId": "step_3",
      "action": "Rouleaux",
      "inputs": [
        "rested_dough"
      ],
      "outputState": "cut_wrappers",
      "instructions": "Divisez la pâte reposée en portions gérables. Sur une surface légèrement farinée, rouler chaque portion aussi mince que possible – viser 2mm, presque translucide. Couper en carrés de 8-10cm. Les emballages mantu sont légèrement plus épais que les emballages chinois pour résister à la vapeur, mais assez fins pour être délicats. Gardez les emballages coupés sous un chiffon humide.",
      "visualCue": {
        "primaryTarget": "Mince, même les carrés de pâte qui fléchissent et draper lorsqu'ils sont levés, avec une légère translucidité.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est épaisse et opaque — plus de 3 mm. Le mantu cuit aura un emballage pâteux, comme du pain.",
            "action": "Plus mince. Utilisez un long rouleau de style pâtes et rouler du centre vers l'extérieur."
          },
          {
            "state": "Perfect",
            "description": "Mince et légèrement translucide lorsqu'elle est fixée à la lumière, mais non au papier-fin — elle ne doit pas se déchirer lorsqu'elle est repliée. Même l'épaisseur sur le carré.",
            "action": "Conserver sous un chiffon humide et remplir rapidement."
          },
          {
            "state": "Overdone",
            "description": "Toux roulée trop fine — déchirure lorsqu'elle est manipulée.",
            "action": "Mettez ça de côté pour les boulettes irrégulières. Rerouler les débris légèrement plus épais."
          }
        ]
      },
      "feelCue": "Soulevez un emballage et drapé sur votre main — il devrait tomber avec son propre poids et s'accrocher doucement à votre paume, comme un mouchoir en soie."
    },
    {
      "nodeId": "step_4",
      "action": "Incorporer délicatement",
      "inputs": [
        "cut_wrappers",
        "cooked_filling"
      ],
      "outputState": "formed_mantu",
      "instructions": "Placez une généreuse cuillère à café de remplissage refroidi au centre de chaque carré — ne pas remplir trop ou les plis se diviseront. Le pli mantu traditionnel : porter les quatre coins pour se retrouver en haut, puis pincer les quatre coutures fermées, créant une forme « quatre-pétales » avec un sommet assemblé. Appuyez fermement sur les coutures pour éviter la vapeur pendant la cuisson. Placer le mantu formé sur une surface légèrement huilée.",
      "visualCue": {
        "primaryTarget": "Des parcelles carrées compactes et bien scellées avec quatre coutures plissées se rencontrent à un sommet, comme un petit cadeau emballé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coutures ne sont pas bien scellées — des trous visibles lorsque le bouleau est légèrement pressé.",
            "action": "Mouillez votre bout de doigt avec de l'eau et pressez fermement la couture. Le mantu non scellé s'ouvre dans le vapeur."
          },
          {
            "state": "Perfect",
            "description": "Des parcelles fermes et compactes avec toutes les coutures serrées. Ils tiennent leur forme lorsqu'ils sont placés sur le plateau. Un léger dôme du remplissage.",
            "action": "Placez immédiatement sur le panier à vapeur huilé."
          },
          {
            "state": "Overdone",
            "description": "Les enrouleurs se sont asséchés trop longtemps — ils craquent sur les plis.",
            "action": "Badigeonner d'eau pour réhydrater la pâte, puis refermer les zones fissurées."
          }
        ]
      },
      "feelCue": "Pressez un mantu formé très doucement — s'il se sent ferme et ne produit que légèrement, le remplissage est correct. S'il se sent flasque ou que les coutures s'entremêlent, il y a trop d'air à l'intérieur."
    },
    {
      "nodeId": "step_5",
      "action": "Mijoter",
      "inputs": [
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "garlic_yogurt_sauce",
      "instructions": "Incorporer le yaourt, l'ail haché et une pincée de sel dans une petite casserole. Chauffer très doucement sur le feu le plus bas possible, en remuant constamment — le yogourt ne doit jamais bouillir ou il sera caillé. Le but est chaud, pas chaud : 40-45 C (104-113 F). Goûtez et ajustez le sel. La sauce doit être versable et lisse.",
      "visualCue": {
        "primaryTarget": "Une sauce chaude, douce, blanc ivoire qui verse dans un ruisseau mince et uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le yogourt est encore froid et épais, il refroidira le mantu immédiatement.",
            "action": "Chauffer plus loin sur la chaleur la plus basse, en remuant constamment."
          },
          {
            "state": "Perfect",
            "description": "Chaud au toucher, fluide, pas de grain. Sensation d'ail et de lait propre.",
            "action": "Gardez le feu au chaud jusqu'à ce que les mantus soient cuits à la vapeur."
          },
          {
            "state": "Overdone",
            "description": "Le yogourt s'est cambriolé — grainé, séparé, avec lactosérum.",
            "action": "Il n'y a pas de récupération pour la sauce au yaourt caillé. Commencer frais, garder la température au-dessous d'un mijot."
          }
        ]
      },
      "feelCue": "Plongez un doigt — la sauce yogourt devrait se sentir chaud mais pas chaud, la façon dont vous testeriez la température de la formule pour bébé sur votre poignet."
    },
    {
      "nodeId": "step_6",
      "action": "Pocher",
      "inputs": [
        "formed_mantu"
      ],
      "outputState": "finished_mantu",
      "instructions": "Huiler généreusement le panier de vapeur pour éviter de coller. Placez le mantu avec de l'espace entre chacun — ils s'étendent à mesure qu'ils s'évaporent. Au-dessus de l'eau bouillante pendant 20-22 minutes jusqu'à ce que les emballages soient translucides et cuits à travers, pas gommés. Pour servir: étaler le yaourt d'ail chaud sur l'assiette, arranger le mantu vapeur sur le dessus, et terminer avec un filet d'huile d'olive, une douche de menthe séchée, et en option une cuillère d'huile de chili à base de tomate. Le mantu arrive à la table scintillement.",
      "visualCue": {
        "primaryTarget": "Des boulettes translucides et scintillantes, sans taches farineuses blanches, entièrement cuites, qui s'accrochent au remplissage.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'enveloppe est encore blanche et légèrement opaque, avec un goût de fleur crue en morsure.",
            "action": "Steam pendant 3-5 minutes. Vérifiez le niveau d'eau — il peut avoir couru bas."
          },
          {
            "state": "Perfect",
            "description": "Les enrouleurs sont entièrement translucides et brillants avec de la vapeur. Le remplissage à l'intérieur a réglé et tient la forme. Une bouchée révèle un bœuf juteux et parfumé à l'intérieur.",
            "action": "Servir immédiatement sur la sauce au yaourt avec de la menthe et de l'huile d'olive."
          },
          {
            "state": "Overdone",
            "description": "Les rappeurs sont devenus très mous et commencent à se diviser — surchargés.",
            "action": "Servir immédiatement et manipuler doucement. La saveur est toujours excellente."
          }
        ]
      },
      "feelCue": "Un mantu à la vapeur bien pressé doucement entre le doigt et le pouce devrait donner avec une légère résistance puis se sentir doux — l'emballage devrait s'accrocher à votre doigt pendant un moment."
    }
  ]
};
