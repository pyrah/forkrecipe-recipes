export default {
  "repoId": "master_turkish_borek_001",
  "parentRepoId": null,
  "slug": "borek",
  "author": "ForkRecipe Kitchen",
  "title": "Börek (Pâtisserie turque de Phyllo)",
  "description": "Feuilles de tissus minces de yufka phyllo en spirales avec du fromage blanc salé et des épinards flétris, brossées avec du lait oeuf entre chaque couche de craquage – cuites jusqu'à ce que l'extérieur se brise en flocons translucides pendant que l'intérieur reste humide, salé et fondu.",
  "cuisine": "Turquie",
  "culture": "Turquie",
  "category": "breads",
  "tags": [
    "turc",
    "phyllo",
    "Féta",
    "épinards",
    "cuits"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "1 hr 15 min",
  "ratioSystem": "parts",
  "stars": 1432,
  "forks": 119,
  "contributors": 16,
  "license": "CC-BY-SA",
  "createdAt": "2025-01-20",
  "updatedAt": "2025-11-08",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Feuilles de yufka ou pâte de phyllo fine (dégelée si congelée)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "phyllo standard (utiliser plus de feuilles)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Fromage blanc turc (béyaz peynir) ou feta grec, émietté",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "Mélange de ricotta + feta",
        "fromage maison + sel"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Epinards frais, lavés et hachés approximativement",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "épinards congelés (bien pressés)",
        "betterave argentée"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Oeufs",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Lait entier (pour le mélange de brossage)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "eau pétillante pour les couches plus croustillantes"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive ou beurre fondu (pour brossage et remplissage)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "un mélange des deux"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "flocons de piment rouge séché et poivre noir",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparer le remplissage",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_07"
      ],
      "outputState": "borek_filling",
      "instructions": "Si vous utilisez des épinards frais, placez-les dans une poêle sèche à feu vif pendant 2 minutes jusqu'à ce qu'ils se flétrissent. Transférer dans une serviette de cuisine propre et serrer fort — les épinards doivent être aussi secs que possible ou il fera le börek soggy. Hacher à peu près les épinards pressés. Mélanger avec du fromage émietté, des flocons de piment et du poivre noir dans un bol. Mélanger jusqu'à combinaison uniforme. N'ajoutez pas de sel — le fromage en fournit assez.",
      "visualCue": {
        "primaryTarget": "Une garniture cohésive, légèrement rugueuse, aux épinards vert foncé et au fromage blanc s'émiette uniformément. Le mélange doit tenir sa forme lorsqu'il est pressé dans un monticule mais ne doit pas être mouillé ou liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épinards ne sont pas complètement flétris; il reste quelques feuilles brutes et vert vif. Le remplissage est humide, avec mise en réserve liquide au fond du bol.",
            "action": "Pressez les épinards de façon plus agressive. Le remplissage humide est la cause la plus fréquente de börek soggy. Appuyez sur une balle dans la serviette et enroulez."
          },
          {
            "state": "Perfect",
            "description": "Remplissage sombre, compact et bien intégré. Pas de liquide debout dans le bol. Le mélange tient une forme lorsqu'il est pressé. L'odeur est herbacée-minérale des épinards et salée du fromage.",
            "action": "Réserver et préparer le mélange de brossage."
          },
          {
            "state": "Overdone",
            "description": "Les épinards ont été trop cuits dans la poêle et sont devenus gris kaki et très secs. Le remplissage est friable plutôt que cohérent.",
            "action": "Ajouter une cuillère à soupe d'huile d'olive à lier. La saveur sera fine; la couleur légèrement grise est acceptable."
          }
        ]
      },
      "feelCue": "Prenez une poignée d'épinards et pressez - seule la trace la plus faible d'humidité doit apparaître entre vos doigts, comme appuyer sur une éponge à la pression, presque sèche."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "brushing_mixture",
      "instructions": "Dans un bol, fouetter les œufs, le lait et l'huile d'olive jusqu'à ce qu'ils soient complètement combinés. Ce mélange de brossage fait fondre les couches de börek dans une pâte cohérente plutôt que de rester comme des feuilles sèches séparées. Il doit être jaune pâle, légèrement mousseux et versable. Prépare ça juste avant l'assemblage.",
      "visualCue": {
        "primaryTarget": "Un liquide lisse, jaune pâle et mousseux qui ressemble à une fine pâte à toast française. L'huile est entièrement émulsifiée — aucun réservoir visible d'huile flottant à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile et l'œuf ne sont pas entièrement combinés — des réservoirs d'huile visibles à la surface. Le mélange est à deux tons.",
            "action": "Plus vigoureusement. L'huile doit être incorporée pour distribuer les graisses uniformément sur toutes les couches."
          },
          {
            "state": "Perfect",
            "description": "Or uniformément pâle, légèrement mousseux, avec la consistance de la crème fine. L'huile est entièrement incorporée et invisible.",
            "action": "Utiliser immédiatement — cela va commencer à se séparer si laissé trop longtemps."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est très mousseux et épais avec de la mousse. La mousse va cuire dans de grandes bulles plutôt qu'un revêtement uniforme.",
            "action": "Laisser reposer 2 minutes pour obtenir de la mousse, puis utiliser."
          }
        ]
      },
      "feelCue": "Plongez votre doigt dans le mélange de brossage — il devrait envelopper votre peau uniformément dans un mince film d'or qui ne s'écoule pas instantanément mais ne s'accroche pas non plus dans des gouttes épaisses."
    },
    {
      "nodeId": "step_3",
      "action": "Assembler",
      "inputs": [
        "borek_filling",
        "brushing_mixture",
        "ing_01"
      ],
      "outputState": "assembled_borek",
      "instructions": "Badigeonner un plat de cuisson de 30x20cm avec le mélange lait d'œuf. Placez une feuille de yufka dans le plat, en la laissant surplomber les côtés. Badigeonner généreusement avec le mélange d'oeufs. Répéter avec 2 feuilles de plus, brossage chacune. Répartir le remplissage à travers le centre dans une couche uniforme. Pliez les bords en surplomb sur le remplissage. Couche 3 feuilles de plus sur le dessus, brossant chaque généreusement. La couche supérieure doit être brossée en dernier. Pour un cigare ou un börek en spirale, déposer le remplissage le long du long bord d'une feuille et rouler étroitement, puis enrouler dans le plat.",
      "visualCue": {
        "primaryTarget": "Un rectangle soigné, multicouche ou spirale enroulée dans le plat de cuisson, chaque couche scintille avec le lavage au lait d'oeuf. Le remplissage est entièrement fermé sans trous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas assez de mélange de brossage appliqué — les couches semblent sèches et pâles. Les feuilles se fissurent et se déchirent sans se lier. Le remplissage est visible par des trous.",
            "action": "Brossez plus généreusement. Chaque centimètre de phyllo doit être humidifié pour que les couches fusionnent pendant la cuisson."
          },
          {
            "state": "Perfect",
            "description": "Chaque couche est scintillante mais pas trempée. Le börek assemblé tient sa forme lorsque le plat est levé. Le remplissage est complètement scellé à l'intérieur.",
            "action": "Réfrigérer 10 minutes à fermer, puis cuire."
          },
          {
            "state": "Overdone",
            "description": "Trop de mélange de brossage a fait les couches soggy. Le börek assemblé est en train de sombrer et humide. Piscines liquides dans le plat.",
            "action": "Passer à la cuisson — l'excès d'humidité s'évaporera. Le börek est peut-être légèrement plus dense, mais il continuera de cuire."
          }
        ]
      },
      "feelCue": "Appuyez légèrement sur le börek assemblé avec une paume plate — il devrait se sentir uniformément humide et légèrement printanier à travers sa surface, non pas craquant-sèche dans certains endroits et carbonisé dans d'autres."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "assembled_borek"
      ],
      "outputState": "finished_borek",
      "instructions": "Préchauffer le four à 190°C (375°F). Badigeonner généreusement le dessus du börek du reste du mélange lait d'oeuf et disperser les graines de sésame si désiré. Cuire de 30 à 35 minutes jusqu'à ce que le haut soit un brun doré et uniforme et que la pâtisserie semble creuse lorsqu'elle est tapée. Les bords doivent être légèrement éloignés du plat. Reposez-vous 5 minutes avant de couper, ce qui permet aux couches de se fixer légèrement pour que le börek tienne sa forme lorsqu'il est coupé.",
      "visualCue": {
        "primaryTarget": "Une surface d'or brun uniformément profonde avec des bords légèrement plus foncés. Le dessus est croustillant et laqué. Un coin coupé révèle des couches distinctes et définies avec un remplissage humide visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le dessus est d'or pâle et encore doux au toucher. La pâtisserie donne sous pression plutôt que de craqueler. Un couteau inséré au centre sort mouillé et le remplissage est encore froid.",
            "action": "Retourner au four à intervalles de 5 minutes. L'extérieur doit être vraiment croustillant pour que le börek tienne sa forme lorsqu'il est tranché."
          },
          {
            "state": "Perfect",
            "description": "D'or profond brun, haut croustillant qui craque quand pressé. Les bords s'éloignent du plat. Un couteau inséré sort chaud et le remplissage est réglé et la vapeur.",
            "action": "Reposez-vous 5 minutes, puis tranchez en carrés ou en quartiers et servez."
          },
          {
            "state": "Overdone",
            "description": "Le dessus est brun foncé avec des taches noircies. L'odeur de la pâtisserie commence à tourner acride et trop cuit.",
            "action": "Couvrir avec du papier et réduire la chaleur à 160°C pendant 5 minutes si le centre semble encore sous-doté. Sinon retirer et se reposer."
          }
        ]
      },
      "feelCue": "Tapotez le centre du börek fini avec un noeud — il devrait produire une fissure claire et creuse, comme tapoter le dessus d'une pastèque mûre, pas le bruit muet de la pâte dense et non cuite."
    }
  ]
};
