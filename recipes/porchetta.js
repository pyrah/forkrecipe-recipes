export default {
  "repoId": "master_italian_porchetta_001",
  "parentRepoId": null,
  "slug": "porchetta",
  "author": "ForkRecipe Kitchen",
  "title": "Porcette",
  "description": "Un ventre entier de porc a roulé autour d'un noyau de pollen de fenouil, de frondes de fenouil sauvage, de romarin et d'ail, puis rôti lentement pendant des heures jusqu'à ce que la graisse se transforme complètement et la peau se transforme en un craquage tondeux et cloqué qui se brise en mille bouts à la première coupe. Le plus grand plat de rue d'Italie centrale, tranché et mangé dans un pain.",
  "cuisine": "Italien",
  "culture": "Centre italien",
  "category": "proteins",
  "tags": [
    "porc",
    "Italien",
    "rôti",
    "fenouil",
    "crépitement",
    "occasion spéciale",
    "Sans gluten",
    "sans produits laitiers"
  ],
  "difficulty": 4,
  "activeTime": "1 hr",
  "totalTime": "4 hr",
  "ratioSystem": "weight",
  "stars": 2314,
  "forks": 203,
  "contributors": 58,
  "license": "CC-BY-SA",
  "createdAt": "2026-01-15",
  "updatedAt": "2026-01-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Skin-on porc ventre, désossé, plat au beurre",
      "ratioValue": 2000,
      "defaultUnit": "g",
      "substitutions": [
        "longe de porc sur la peau attachée à l'intérieur du ventre"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Herb",
      "name": "Romarin frais, aiguilles dépouillées",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Herb",
      "name": "Frondes fraîches de fenouil ou de fenouil sauvage",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "frondes de fenouil séchées",
        "haut de fenouil"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Graines de fenouil, grillées et grossièrement moulues",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "pollen de fenouil (plus intense, si disponible)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Gousses d'ail, très finement hachées",
      "ratioValue": 8,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poivre noir grossièrement craqué",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sels de mer grossiers",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saison",
      "inputs": [
        "ing_01",
        "ing_07"
      ],
      "outputState": "salted_belly",
      "instructions": "La veille : déposer la peau du ventre de porc. Noter le côté chair dans un motif de croisement d'environ 5 mm de profondeur (c'est là que le remplissage s'accrochera). Assaisonner généreusement la chair de sel — utiliser environ la moitié du sel total. Dépliez le ventre et marquez la peau avec un couteau tranchant en lignes parallèles à environ 1 cm d'intervalle, coupant seulement à travers la peau et juste dans la graisse — ne pas couper dans la chair. Saler légèrement la peau, frotter et réfrigérer la nuit. La peau sèche est la clé du craquage.",
      "visualCue": {
        "primaryTarget": "La peau est pâle et complètement sèche après la réfrigération de nuit. Les lignes de score sont visibles sur la peau et la chair.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est encore humide ou collante. Les coupures sont trop superficielles.",
            "action": "Pat avec des serviettes en papier et retour découvert au réfrigérateur pendant une autre heure, ou marquer plus profondément."
          },
          {
            "state": "Perfect",
            "description": "La peau ressemble à du papier sec. Les lignes de score sont profondes, uniformes et propres. La chair est ferme et froide.",
            "action": "Passer à la construction du remplissage."
          },
          {
            "state": "Overdone",
            "description": "Pas possible — plus la peau sèche, mieux c'est. 48 heures, ça va.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "Exécutez votre doigt sur la peau marquée — il devrait se sentir comme un parchemin sec, sans transfert d'humidité à votre doigt."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_08"
      ],
      "outputState": "herb_paste",
      "instructions": "Hacher grossièrement le romarin, les frondes de fenouil et l'ail sur une planche à découper jusqu'à ce qu'ils soient finement hachés. Transférer dans un bol. Ajouter les graines de fenouil moulu, le poivre noir et l'huile d'olive. Incorporer une pâte parfumée et humide. Goûter — il devrait être agressif herby et ailky. C'est l'âme de la porchette.",
      "visualCue": {
        "primaryTarget": "Une pâte dense, humide, vert foncé avec des taches de graines de fenouil visibles. Intensément parfumé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les herbes sont trop grossièrement hachées — de gros morceaux tomberont quand ils rouleront.",
            "action": "Continuez à couper jusqu'à ce que tout soit très bien."
          },
          {
            "state": "Perfect",
            "description": "Une pâte bien cohésive. Sticky des huiles naturelles dans les herbes. Profondément parfumé quand vous le remuez.",
            "action": "Appliquer immédiatement sur le porc — la pâte doit rester humide pour le laminage."
          },
          {
            "state": "Overdone",
            "description": "C'est une purée presque liquide.",
            "action": "Ajoutez quelques graines entières de fenouil pour restaurer la texture. Continuez."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir comme du beurre frais et gritty quand on la presse entre deux doigts — humide et cohésif, non sec et émietté."
    },
    {
      "nodeId": "step_3",
      "action": "Assemblage",
      "inputs": [
        "salted_belly",
        "herb_paste"
      ],
      "outputState": "rolled_porchetta",
      "instructions": "Étendre la pâte d'herbe uniformément sur le côté entier de la chair marquée, en la pressant dans les coupes croisées. Rouler le ventre bien à partir d'une extrémité courte, en maintenant la tension uniforme, en veillant à ce que le rouleau soit serré sans poches d'air. Attachez la ficelle de cuisine à des intervalles de 3 cm — assez serré pour que le rouleau conserve une fermeté semblable à un tambour. Frotter le reste du sel sur toute la peau. Réfrigérer à découvert pendant au moins 2 heures, ou pendant la nuit si possible.",
      "visualCue": {
        "primaryTarget": "Un cylindre serré, semblable à un tambour, avec des boucles de ficelle parallèles. Peau lisse et sèche. Pas de trous visibles à la couture.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le rouleau est lâche, les coutures s'entremêlent, le remplissage tombe aux extrémités.",
            "action": "Relier plus fermement, en commençant au centre et en travaillant vers l'extérieur. Remplir les deux bouts."
          },
          {
            "state": "Perfect",
            "description": "Cylindrée ferme, uniformément attachée, pas de sag entre les boucles. La couture est bien fermée. Peau sèche et pâle.",
            "action": "Reposez-vous au réfrigérateur jusqu'à ce qu'il soit prêt à rôtir."
          },
          {
            "state": "Overdone",
            "description": "Attachée de manière si serrée, la viande se gonfle entre les boucles.",
            "action": "Relier avec une tension légèrement plus lâche — une pression inégale crée une cuisson inégale."
          }
        ]
      },
      "feelCue": "Pressez le rouleau — il doit se sentir aussi ferme et solide qu'un magazine roulé serré, sans donner ni déplacer entre la peau et le remplissage."
    },
    {
      "nodeId": "step_4",
      "action": "Rôtis",
      "inputs": [
        "rolled_porchetta"
      ],
      "outputState": "slow_roasted_porchetta",
      "instructions": "Prenez le porchetta du réfrigérateur 1 heure avant de rôtir. Préchauffer le four à 230 C (450 F). Placez le porchetta sur un porte-fils sur une rôtissoire, côté couture vers le bas. Faire cuire à 230 °C pendant 30 minutes — cette explosion de chaleur commence à craquer. Réduire la chaleur à 160 C (325 F) et rôtir pendant 2 à 2,5 heures de plus jusqu'à ce que la température interne atteigne 70 C (158 F) au centre.",
      "visualCue": {
        "primaryTarget": "Après la chaleur de l'explosion: la peau est cloquée, bublée, et commence à devenir dorée. Après torréfaction lente: profonde ambre avec des blisters spectaculaires à bulles couvrant toute la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est encore plate et dorée après la période de chaleur. Température intérieure inférieure à 65°C.",
            "action": "Continuer le torréfaction lente et vérifier la température toutes les 20 minutes."
          },
          {
            "state": "Perfect",
            "description": "La peau est recouverte de bulles d'or ambre dramatiques — chaque blister est une minuscule poche de craquelin. Température interne 70–75 C. Gras rendu clair.",
            "action": "Reposez-vous 20 minutes avant de trancher. Le crépitement continue à croquer comme il repose."
          },
          {
            "state": "Overdone",
            "description": "La peau est très brun foncé, certaines zones sont noircies. Possible odeur brûlée.",
            "action": "Tente avec feuille pour le reste de la cuisson. L'intérieur est probablement encore humide."
          }
        ]
      },
      "feelCue": "Tapez la peau avec un couteau — des anneaux crépitants entièrement rendus avec un clic creux et croustillant, et non pas un bourbier terne. Si ça tord, retourne à feu vif pendant 10 minutes."
    },
    {
      "nodeId": "step_5",
      "action": "Repos",
      "inputs": [
        "slow_roasted_porchetta"
      ],
      "outputState": "finished_porchetta",
      "instructions": "Reposez le porchetta sur un porte-fils (pas une planche à découper) à découvert pendant 20 à 30 minutes. Le repos permet aux jus de se redistribuer à travers la graisse et la chair. Ne tentez pas avec du papier — la vapeur adoucira le craquage pour lequel vous avez travaillé si dur. Tranche avec un couteau à pain tranchant et dentelé à l'aide d'un mouvement de sciage — le couteau d'un chef craquera et brisera le craquage plutôt que de le couper proprement.",
      "visualCue": {
        "primaryTarget": "La coupe transversale révèle des anneaux alternés de viande aux feuilles d'herbe, de la graisse blanche et une croûte de craquage ambre éclatante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les jus coulent librement lorsqu'ils sont coupés — la viande n'est pas reposée. L'intérieur est lâche.",
            "action": "Patience — Reposez-vous encore 10 minutes. Découpe maintenant le jus."
          },
          {
            "state": "Perfect",
            "description": "Les jus restent dans la viande. Les éclats se brisent au premier contact du couteau. Des couches de graisse, d'herbe et de viande visibles dans la section transversale.",
            "action": "Couper immédiatement et servir."
          },
          {
            "state": "Overdone",
            "description": "Trop longtemps reposé, froid. Le craquage s'est adouci de la vapeur de surface.",
            "action": "Brûlez sous le grilleur pendant 3 à 4 minutes pour re-criper la peau avant de trancher."
          }
        ]
      },
      "feelCue": "Le crépitement devrait éclater avec un son comme casser une mince feuille de caramel — s'il fléchit, il a besoin de plus de chaleur."
    }
  ]
};
