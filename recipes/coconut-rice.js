export default {
  "repoId": "master_caribbean_coconut-rice_001",
  "parentRepoId": null,
  "slug": "coconut-rice",
  "author": "ForkRecipe Kitchen",
  "title": "Riz de coco",
  "description": "Riz à grains longs cuit à la vapeur dans un mélange de lait de coco et d'eau salée jusqu'à ce que chaque grain soit séparé, parfumé et brillant avec la douceur tropicale la plus faible.",
  "cuisine": "Caraïbes",
  "culture": "Caraïbes",
  "category": "grains",
  "tags": [
    "riz",
    "noix de coco",
    "Caribbean",
    "végétalien",
    "côté"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "35 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 4,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz blanc à grains longs (jasmine ou basmati)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "riz séché (augmenter légèrement l'eau)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Lait de noix de coco plein gras (bien agité)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "crème de coco (réduire de 1 partie, ajouter 1 partie d'eau)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "omit pour un profil strictement savoureux"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile de coco ou huile neutre",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rincer",
      "inputs": [
        "ing_01"
      ],
      "outputState": "rinsed_rice",
      "instructions": "Placez le riz dans une passoire fine et rincer à l'eau courante froide, en travaillant les grains avec votre main, jusqu'à ce que l'eau soit limpide plutôt que laiteuse. Ceci élimine l'excès d'amidon de surface qui causerait les grains à se serrer ensemble et produire une texture gommante. Pour un résultat légèrement plus crémeux, sautez le rinçage — un choix valable pour certaines préparations des Caraïbes.",
      "visualCue": {
        "primaryTarget": "L'eau qui coule à travers le filtre est entièrement transparente, pas trouble ou laiteuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est encore blanc laiteux et féculente. Les grains libèrent de l'amidon blanc lorsqu'ils sont frottés.",
            "action": "Continuer à rincer et agiter pendant 30 secondes."
          },
          {
            "state": "Perfect",
            "description": "L'eau est complètement dégagée. Les grains sont translucides aux bords et semblent légèrement vitreux.",
            "action": "Égoutter soigneusement et faire griller."
          },
          {
            "state": "Overdone",
            "description": "Le riz a été rincé si longtemps qu'il semble recouvert d'eau et que certains grains ont commencé à s'assouplir.",
            "action": "Égoutter immédiatement et continuer. Le riz sera encore cuit, même s'il peut être légèrement plus doux que l'idéal."
          }
        ]
      },
      "feelCue": "Frottez une pincée de riz rincé entre vos doigts — il devrait être sablonneux et sec plutôt que lissé et féculent. Slick signifie plus de rinçage est nécessaire."
    },
    {
      "nodeId": "step_2",
      "action": "Toast",
      "inputs": [
        "rinsed_rice",
        "ing_06"
      ],
      "outputState": "toasted_rice",
      "instructions": "Chauffer une casserole moyenne à feu moyen. Ajouter l'huile et le riz égoutté. Mélanger en continu pendant 2 à 3 minutes – vous enrobez chaque grain dans de la graisse et grillez légèrement l'extérieur, ce qui crée une barrière d'humidité qui aide les grains à rester séparés et à ne pas coller ensemble pendant la vapeur. Le riz passera de blanc transparent à blanc opaque.",
      "visualCue": {
        "primaryTarget": "Tous les grains sont devenus uniformément opaques et blancs crayeux. Un léger parfum de noix est présent. Pas de brunissement — vous êtes le séchage et le revêtement, pas de toast à la couleur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Beaucoup de grains sont encore translucides et scintillent avec l'humidité. Aucun parfum libéré.",
            "action": "Incorporer et poursuivre à feu moyen pendant une autre minute."
          },
          {
            "state": "Perfect",
            "description": "Tous les grains sont blancs crayeux et se déplacent librement dans la poêle sans coller. Une odeur très faible de noix d'amidon.",
            "action": "Ajouter immédiatement le lait de coco, l'eau, le sel et le sucre."
          },
          {
            "state": "Overdone",
            "description": "Certains grains deviennent dorés ou la poêle sent l'amidon brunissant.",
            "action": "Continuez immédiatement et réduisez la chaleur — le riz légèrement grillé sera encore excellent, avec plus de profondeur."
          }
        ]
      },
      "feelCue": "Le riz doit siffler doucement et sentir peu d'amidon chaud et d'huile de coco. Passez la cuillère à travers — les grains doivent s'écouler librement, sans accroupissement, comme du sable sec dans une poêle chaude."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "toasted_rice",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "steaming_rice",
      "instructions": "Verser dans le lait de coco, l'eau, le sel et le sucre. Mélanger une fois. Porter à ébullition à feu moyen-vif, en remuant une fois de plus à ébullition afin d'éviter toute décongélation du riz et toute brûlure sur le fond de la poêle. Une fois bouillant, réduire le feu au réglage le plus bas, couvrir soigneusement et cuire pendant 15 minutes. Ne pas soulever le couvercle — la vapeur est le moyen de cuisson et chaque ascenseur perd la chaleur et l'humidité.",
      "visualCue": {
        "primaryTarget": "Le liquide a été complètement absorbé. Pas de liquide debout visible lorsque vous inclinez la casserole. Les évents à vapeur sont actifs autour du bord du couvercle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Liquide visible toujours debout au-dessus du niveau du riz après 15 minutes.",
            "action": "Remplacer le couvercle et cuire encore 3-5 minutes. Vérifiez si la chaleur était assez élevée pour générer de la vapeur."
          },
          {
            "state": "Perfect",
            "description": "Pas de liquide visible. La surface du riz a de petits trous de vapeur (cratères) à travers. Le son est passé d'une mijotée à un sifflement calme et sec.",
            "action": "Retirer du feu et reposer couvert pendant 10 minutes avant de pleuvoir."
          },
          {
            "state": "Overdone",
            "description": "Le fond de la poêle commence à brûler — vous pouvez le sentir et entendre craqueler. Le riz au-dessus de la corbeille est encore bien.",
            "action": "Retirer immédiatement du feu. Ne grattez pas le fond. La couche brûlée (socarrat) peut être laissée ou jetée — elle n'est pas ruinée à moins que la brûlure ne soit profonde."
          }
        ]
      },
      "feelCue": "Tenez votre paume près de l'évent du couvercle — vous devriez sentir une chaleur régulière et humide qui jaillit. Lorsque le pouls de la vapeur s'arrête ou ralentit considérablement, l'eau a été absorbée et le riz est presque fini."
    },
    {
      "nodeId": "step_4",
      "action": "Repos",
      "inputs": [
        "steaming_rice"
      ],
      "outputState": "finished_coconut_rice",
      "instructions": "Retirer la casserole du feu. Placez une serviette de cuisine pliée ou une double couche de papier entre le pot et le couvercle. La serviette absorbe toute condensation résiduelle de vapeur qui, autrement, retomberait sur le riz et créerait des taches humides. Laisser reposer, couvrir, pendant exactement 10 minutes — ce n'est pas facultatif. Les grains terminent la cuisson hors-chauffe et se raffermissent pendant le reste. Flûtez doucement avec une fourchette, levant du bas.",
      "visualCue": {
        "primaryTarget": "Chaque grain est distinct, légèrement repulpé et recouvert d'un léger brillant de noix de coco. Pas d'embrouille humide. Pas de grains croustillants sous-cuits. Le fond du pot est légèrement séché, non brûlé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains se sentent fermes et légèrement crayeux au centre quand mordus. La coulée révèle une masse dense et comprimée.",
            "action": "Remplacer le couvercle (avec la serviette) et reposer encore 5 minutes. N'ajoutez plus de liquide, la vapeur résiduelle les finira."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain est tendre à travers, séparé et légèrement parfumé. La fourchette traverse le riz sans résistance. Une subtile douceur de noix de coco sur le nez.",
            "action": "Servir immédiatement ou tenir couvert et réchauffer jusqu'à 20 minutes."
          },
          {
            "state": "Overdone",
            "description": "Les grains se sont fendus et bousculés ensemble. La texture est crémeuse et douce comme le risotto, pas les grains individuels.",
            "action": "Étaler sur une casserole pour refroidir et ferme. Le riz de coco surcuit fait d'excellents arancini ou riz frit le lendemain."
          }
        ]
      },
      "feelCue": "Appuyez sur un seul grain entre le pouce et l'index — il devrait compresser proprement à une pâte lisse sans résistance crayeuse au centre et sans mushiness. Cette compression propre est la cible de texture."
    }
  ]
};
