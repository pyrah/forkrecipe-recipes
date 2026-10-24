export default {
  "repoId": "master_moroccan_moroccanflatbread_001",
  "parentRepoId": null,
  "slug": "moroccan-flatbread",
  "author": "ForkRecipe Kitchen",
  "title": "Khobz — Poire ronde marocaine",
  "description": "Le pain quotidien du Maroc, un pain rond et orgueilleux aux graines de sésame, avec une croûte dorée qui éclate à la première larme et une miette dense et tendre qui absorbe le harissa et l'huile d'olive avec la même dévotion.",
  "cuisine": "Maroc",
  "culture": "Maghrebi",
  "category": "breads",
  "tags": [
    "pain",
    "végétalien",
    "sésame",
    "nord-africain"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "2 hours 30 min",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 80,
      "defaultUnit": "%",
      "substitutions": [
        "mélange de semoule (semoule égale + AP)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Sémoline fine (durum)",
      "ratioValue": 20,
      "defaultUnit": "%",
      "substitutions": [
        "Farine polyvalente"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau chaude (38 C)",
      "ratioValue": 62,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": [
        "levure sèche active (bloom d'abord)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 4,
      "defaultUnit": "%",
      "substitutions": [
        "huile végétale"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Graines de sésame blanc",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": [
        "Graines de nigella",
        "graines d'anis"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Hydration",
      "name": "Eau (pour la surface de semis)",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "shaggy_khobz_dough",
      "instructions": "Dans un grand bol, fouetter ensemble la farine, la semoule, le sel et la levure. Faites un puits au centre et versez dans l'eau chaude et l'huile d'olive. Mélanger avec votre main ou une cuillère en bois jusqu'à ce qu'il ne reste pas de farine sèche. La pâte sera légèrement rugueuse — la semoule prend du temps pour s'hydrater. Éteindre et pétrir à la main pendant 10 minutes jusqu'à ce que lisse et élastique. La sémoline donne à la pâte une texture sablonneuse au départ; continuer à pétrir jusqu'à ce qu'elle devienne cohésive.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte lisse et légèrement ferme avec une surface légèrement cabrée de la semoule, tirant proprement de vos mains.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est dure et émiettée. Larmes facilement. Des granules de sable encore visibles.",
            "action": "Continuez à pétrir. La sémoline s'hydrate lentement — donnez-lui encore 5 minutes avant d'ajouter de l'eau supplémentaire."
          },
          {
            "state": "Perfect",
            "description": "Douce et souple. Respire doucement quand on pique. Étanchéité de l'huile d'olive. La surface est satinée, légèrement plus ferme que la pâte focaccia.",
            "action": "Couvrir et laisser reposer 10 minutes avant de façonner."
          },
          {
            "state": "Overdone",
            "description": "Très serré et printanier. Difficile de pousser à plat. On dirait une boule de caoutchouc.",
            "action": "Couvrir avec une serviette humide et reposer 15 minutes — gluten sur-collé a simplement besoin de repos."
          }
        ]
      },
      "feelCue": "La pâte finie doit se sentir ferme mais souple — pas aussi douce que la pâte à pizza, plus près de la pâte à jouer avec une légère élasticité lorsqu'elle est étirée."
    },
    {
      "nodeId": "step_2",
      "action": "Façonner",
      "inputs": [
        "shaggy_khobz_dough"
      ],
      "outputState": "shaped_khobz",
      "instructions": "Divisez la pâte en 2 portions égales (environ 350 g chacune). Sur une surface dégagée, rouler chaque pièce dans une boule lisse en la poussant contre le comptoir dans un mouvement circulaire serré. Aplatissez doucement chaque boule avec votre paume dans un disque rond d'environ 18 à 20 cm de diamètre et 2,5 cm d'épaisseur. N'utilisez pas d'épingle de roulement — le façonnage manuel maintient l'air dans le pain. Déposer sur une plaque de cuisson parcheminée. Mouiller légèrement la surface avec un pinceau trempé dans l'eau et presser généreusement les graines de sésame sur le dessus.",
      "visualCue": {
        "primaryTarget": "Deux disques fiers, même, uniformément épais, du centre au bord, sans fissures ni déchirures rugueuses au bord.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre est beaucoup plus épais que les bords, bombé comme une soucoupe volante.",
            "action": "Appuyez doucement sur le centre avec votre paume, travaillant vers l'extérieur dans un mouvement circulaire."
          },
          {
            "state": "Perfect",
            "description": "Même épaisseur de 2 à 2,5 cm. La surface lisse contient des graines de sésame sans trous. Le disque tient sa forme lorsque le plateau est incliné.",
            "action": "Couvrir lâchement avec une serviette et laisser la preuve jusqu'à ce que bouffi, environ 45-60 minutes."
          },
          {
            "state": "Overdone",
            "description": "Le disque est trop mince (moins de 1,5 cm) et les larmes apparaissent aux bords.",
            "action": "Pliez les bords vers l'intérieur et reformez. Reposez-vous 10 minutes et essayez encore."
          }
        ]
      },
      "feelCue": "Le disque en forme doit se sentir assez ferme pour tenir sa forme ronde, mais il doit produire doucement lorsqu'il est pressé — pas rigide, pas disquette."
    },
    {
      "nodeId": "step_3",
      "action": "Faire lever",
      "inputs": [
        "shaped_khobz"
      ],
      "outputState": "proofed_khobz",
      "instructions": "Couvrez les pains de façon lâche avec une serviette de cuisine propre et la preuve à la température ambiante jusqu'à ce que les bords se soient nettement gonflés, environ 45 à 60 minutes. Les pains ne doubleront pas considérablement: le khobz marocain est intentionnellement plus dense que les pains européens. Utiliser le test de poke : presser un bout de doigt fariné 1 cm dans la pâte. Il devrait revenir lentement mais pas complètement.",
      "visualCue": {
        "primaryTarget": "Le disque a visiblement soufflé jusqu'à environ 3 cm de hauteur avec un plateau légèrement bombé et un léger gabarit lorsque le plateau est déplacé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours plat, dense. Poke ressort immédiatement sans aucun tiret restant.",
            "action": "Couvrir et attendre — les cuisines froides lente preuve significative. Approchez-vous d'un four chaud."
          },
          {
            "state": "Perfect",
            "description": "Domed, aéré. Le doigt se remplit à mi-chemin après 10 secondes. Les graines de sésame de surface se sont légèrement décalées à mesure que la pâte s'est étendue.",
            "action": "Percez chaque pain de 5 à 6 fois avec une fourchette ou un cure-dent pour éviter les éruptions, puis faites cuire."
          },
          {
            "state": "Overdone",
            "description": "Très gonflé, presque creux. Le poke ne revient pas. Surface pliée.",
            "action": "Faire cuire immédiatement sans plus tarder — les pains seront encore comestibles mais légèrement denses."
          }
        ]
      },
      "feelCue": "Un khobz bien protégé se sent comme un coussin empilé d'air — springy, pas ferme, avec une tension de surface qui résiste brièvement au bout des doigts avant de céder."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "proofed_khobz"
      ],
      "outputState": "finished_khobz",
      "instructions": "Préchauffer le four à 220 C (425 F) avec une pierre de cuisson ou une plaque inversée sur la grille centrale. Faites glisser le parchemin directement sur la surface chaude. Cuire de 18 à 22 minutes jusqu'à ce que la croûte soit un riche brun doré et que les pains sonnent creux lorsqu'ils sont tapés sur le fond. Laisser refroidir sur une grille pendant au moins 15 minutes avant de déchirer.",
      "visualCue": {
        "primaryTarget": "Une croûte profonde, même dorée, aux graines de sésame légèrement grillées, sans taches pâles ni taches foncées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pâle dorée, pâteuse. Ça a l'air terne et lourd quand on la tape.",
            "action": "Retourner au four pendant 3 à 5 minutes. L'intérieur sera gommé si sous-vêtus."
          },
          {
            "state": "Perfect",
            "description": "Riche graines dorées, sésame grillées au bronzage léger. Frappe à la base. La croûte est ferme et crépitante.",
            "action": "Refroidir sur une grille. Ne pas envelopper au chaud ou la croûte sera molle."
          },
          {
            "state": "Overdone",
            "description": "Marron foncé, graines de sésame commençant à l'omble. Une odeur amère.",
            "action": "Supprimer immédiatement. Coupez les graines brûlées du haut. La miette sous la croûte est probablement encore bonne."
          }
        ]
      },
      "feelCue": "La croûte doit taper comme un petit tambour, résonant et creux. Soulevez le pain : il doit se sentir plus léger que prévu, avec une croustillante audible lorsque vous le pressez doucement."
    }
  ]
};
