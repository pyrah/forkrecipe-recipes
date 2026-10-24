export default {
  "repoId": "master_lebanese_zaatar_flatbread_001",
  "parentRepoId": null,
  "slug": "zaatar-flatbread",
  "author": "ForkRecipe Kitchen",
  "title": "Pain plat de Za'atar libanais",
  "description": "Un disque de pâte levurée, étiré à la main, en morceaux, recouvert de thym séché, de sésame et de sumac, puis trempé dans de l'huile d'olive herbeuse avant de cuire, l'odeur seule attirera vos voisins à la porte.",
  "cuisine": "Libanais",
  "culture": "Levantine",
  "category": "breads",
  "tags": [
    "Pain plat",
    "lébanèse",
    "zaatar",
    "Huile d'olive",
    "sésame",
    "lévantine",
    "Cuisson"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "2 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 2,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 3,
      "defaultUnit": "cups",
      "substitutions": [
        "farine de pain"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude (38-40 C)",
      "ratioValue": 1,
      "defaultUnit": "cup",
      "substitutions": [
        "eau filtrée"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "levure sèche active (proof first)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile d'olive extra vierge (dough)",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "huile neutre"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Mélange de za'atar séché (thyme, sumac, sésame)",
      "ratioValue": 4,
      "defaultUnit": "tbsp",
      "substitutions": [
        "Thym séché avec des graines de sésame"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive extra-vierge (cuisson)",
      "ratioValue": 4,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel de mer blanc (finish)",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": [
        "Sel de maldon"
      ]
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
        "ing_05"
      ],
      "outputState": "shaggy_dough",
      "instructions": "Dans un grand bol, fouetter la farine, la levure instantanée et le sel. Faites un puits au centre, versez dans l'eau chaude et l'huile d'olive, et remuez avec une cuillère en bois ou votre main jusqu'à ce que la pâte se réunisse dans une masse rugueuse et cohésive. La pâte sera légèrement collante et inégale — résistez à ajouter plus de farine. Tourner sur une surface non nourrie et pétrir pendant 7-8 minutes à l'aide du talon de votre main, pousser la pâte loin de vous et le replier. La friction du comptoir nu développe le gluten bien mieux qu'une surface farinée. Après 7 minutes, la pâte aurait dû passer d'une résistance collante à une conformité lisse.",
      "visualCue": {
        "primaryTarget": "Une boule lisse, légèrement tachée, qui tient sa forme, a un reflet doux de l'huile, et rebondit lentement quand on la piqué.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte déchire lorsqu'elle est tirée et laisse des morceaux sur le comptoir. La surface a l'air rugueuse et marquée comme une peau d'orange.",
            "action": "Continuez à pétrir — 3 minutes de plus, en s'appuyant sur votre poids corporel dans chaque poussée."
          },
          {
            "state": "Perfect",
            "description": "Doux et souple, comme du cuir chamois doux. La surface est tendue et légèrement translucide. Un test de vitre révèle une membrane mince et extensible qui ne déchire pas.",
            "action": "Formez une boule, placez-la dans un bol huilé et couvrez-la d'une serviette humide."
          },
          {
            "state": "Overdone",
            "description": "La pâte est très serrée et ressort presque instantanément lorsqu'elle est cuite. Il est caoutchouteux plutôt que élastique.",
            "action": "Couvrez et reposez-vous pendant 20 minutes – le gluten surcollé se détend. Il fera toujours un excellent pain plat."
          }
        ]
      },
      "feelCue": "À la fin de la pétrissage, il devrait se sentir comme une peau de lobe d'oreille chaude — douce, souple, et à peine céder sous une pression douce. Si votre paume disparaît propre, le gluten est développé."
    },
    {
      "nodeId": "step_2",
      "action": "Preuve",
      "inputs": [
        "shaggy_dough"
      ],
      "outputState": "risen_dough",
      "instructions": "Placer la boule de pâte dans un bol légèrement huilé et la tourner une fois pour enrober. Couvrir d'une serviette de cuisine humide ou d'une enveloppe en plastique et la placer dans un endroit chaud, sans courants d'air, un four avec juste la lumière allumée (environ 27-30 C) est idéal. Laissez-le monter jusqu'à doubler en taille, environ 60-90 minutes selon la température de votre cuisine. Ne pas précipiter cette étape : la fermentation lente construit la complexité peu aigre et levure qui rend ce pain plat goût plus que la farine et l'eau. Vous saurez qu'il est prêt lorsque le dôme de pâte est nettement plus haut que le bord du bol et que des jiggles comme la gélatine lorsque vous secouez doucement le bol.",
      "visualCue": {
        "primaryTarget": "La pâte a clairement doublé en volume, est bombée en haut, et a de grandes bulles visibles à travers les murs de tout récipient transparent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte n'a augmenté que d'un tiers. Il se sent dense et résistant lorsqu'il est pressé, et la surface ne saute pas.",
            "action": "Retournez à l'endroit chaud et vérifiez à nouveau dans 20 minutes. Si votre cuisine est froide, placez le bol couvert sur une casserole d'eau chaude."
          },
          {
            "state": "Perfect",
            "description": "Exactement doublé. La pression d'un doigt fariné dans 2 cm laisse un tiret qui revient lentement à mi-chemin. La pâte sent le pain et peu de yaourt.",
            "action": "Divisez et formez."
          },
          {
            "state": "Overdone",
            "description": "Le dôme s'est effondré vers l'intérieur. La pâte est très molle et sent fortement acide, presque alcoolique.",
            "action": "Plier doucement sur elle-même une fois, re-baller, et laisser reposer 15 minutes avant de façonner. Le pain plat sera une touche plus aigre et légèrement plus dense — encore délicieux."
          }
        ]
      },
      "feelCue": "Une pâte étagée pressée avec un doigt mouillé doit expirer doucement, comme appuyer sur une éponge fraîche, et laisser un tiret fantôme qui s'estompe en 5 secondes."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "ing_06",
        "ing_07"
      ],
      "outputState": "zaatar_paste",
      "instructions": "Alors que la pâte résiste, mélanger le mélange de za'atar et l'huile d'olive dans un petit bol et remuer jusqu'à ce que vous ayez une pâte épaisse et lâche, semblable en consistance au pesto. L'huile devrait saturer complètement toutes les graines d'herbes séchées et de sésame — vous créez un lisier tartinable, pas une saupoudrée sèche. Goûtez-le: il devrait être herbacé, noisette, et légèrement aigre du sumac, avec une amertume herbacée du thym. Si votre za'atar est très sec, ajoutez une cuillère à café supplémentaire d'huile afin qu'il se propage sans déchirer la pâte crue. Laisser la pâte s'asseoir et se fondre pendant que la pâte finit de se poncer.",
      "visualCue": {
        "primaryTarget": "Une pâte brun-vert foncé qui tient sa forme sur une cuillère mais se propage facilement. Les graines de sésame sont entièrement enrobées et il ne reste pas de poches sèches d'herbes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des miettes sèches avec des piscines d'huile assises séparément. Les herbes n'ont pas absorbé l'huile.",
            "action": "Remuer vigoureusement pendant une minute. Les herbes gonfleront et boiront l'huile."
          },
          {
            "state": "Perfect",
            "description": "Une pâte uniforme et brillante. Soulevée sur une cuillère, elle coule lentement et tient sa forme aux bords.",
            "action": "Couvrir et réserver à température ambiante jusqu'à ce que la pâte soit prête."
          },
          {
            "state": "Overdone",
            "description": "La pâte est devenue si fine qu'elle est aqueuse — trop d'huile a été ajoutée.",
            "action": "Incorporer une autre cuillère à café de za'atar séchée pour le ré-alimenter. Le rapport peut fléchir ; errer vers le sec."
          }
        ]
      },
      "feelCue": "La pâte doit sentir fortement le thym séché et le sésame grillé — terreux, faiblement résineux, avec une note citrique brillante du sumac qui frappe l'arrière de votre nez."
    },
    {
      "nodeId": "step_4",
      "action": "Forme",
      "inputs": [
        "risen_dough"
      ],
      "outputState": "shaped_discs",
      "instructions": "Frappez doucement la pâte levée et tournez-la sur une surface légèrement farinée. Divisez en deux portions égales (ou quatre pour les petits pains plats). Travaillant un à la fois, appuyez sur chaque pièce dans un disque plat avec votre paume, puis utilisez le bout des doigts — et non pas un rouleau — pour l'axer vers l'extérieur, en le tournant un quart de tour après chaque passage. Visez un disque rond de 25-30 cm de diamètre et d'environ 6 mm d'épaisseur; une légère irrégularité est authentique et souhaitable. Si la pâte ressort, couvrez-la et reposez-la pendant 5 minutes, puis essayez à nouveau — le gluten est tendu et doit se détendre. Transférer les disques en forme dans des plaques de cuisson parcheminées. Préchauffez votre four à 230 C (450 F) pendant que vous les recouvrez.",
      "visualCue": {
        "primaryTarget": "Un ovale rugueux ou un cercle d'environ 25-30 cm de large, 6 mm d'épaisseur, avec des bords légèrement plus épais et un centre mince que vous pouvez presque voir à travers quand tenu à la lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le disque est épais et uniforme, plus près d'une petite boule qu'un pain plat. Il fera cuire de la pain plutôt que de craqueler et de la lumière.",
            "action": "Continuez à appuyer et à s'étirer. La pâte a plus de donner que vous ne le pensez — faites confiance au gluten."
          },
          {
            "state": "Perfect",
            "description": "Mince et presque translucide au centre, avec une jante d'environ 1 cm d'épaisseur. Laid plat, il se détend sans retomber.",
            "action": "Passez directement à la garniture."
          },
          {
            "state": "Overdone",
            "description": "Vous avez tendu trop agressivement et la pâte a déchiré à un ou deux endroits.",
            "action": "Pincez les larmes fermées et patchez en pressant un petit morceau de pâte crue sur le trou. Le résultat cuit cache ces cicatrices sous la pâte de za'atar."
          }
        ]
      },
      "feelCue": "À l'épaisseur correcte, vous pouvez sentir la légère résistance du réseau de gluten — il donne uniformément sur tout le disque sans s'effondrer en un seul endroit."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire",
      "inputs": [
        "shaped_discs",
        "zaatar_paste",
        "ing_08"
      ],
      "outputState": "finished_zaatar_flatbread",
      "instructions": "Déposer généreusement la pâte za'atar sur chaque disque et l'étendre aux bords avec le dos de la cuillère, laissant une bordure de 1 cm nue. Saupoudrer le sel sur le dessus. Faites glisser le parchemin directement sur le support le plus bas du four, ou idéalement sur un acier ou une pierre préchauffé. Cuire au four à 230 C (450 F) pendant 8-12 minutes, jusqu'à ce que les bords soient dorés, le centre est réglé (pas pâteux), et la pâte za'atar sent grillée et intensément parfumée. Regardez attentivement après la marque de 8 minutes — le centre mince se balance rapidement et la différence entre parfait et brûlé est de 90 secondes. Servir immédiatement ou dans les 20 minutes; la texture est la meilleure dans la première demi-heure.",
      "visualCue": {
        "primaryTarget": "Bords gonflés dorés-bruns avec des taches plus foncées. Le centre est posé et mat, la pâte za'atar est obscurcie et parfumée, et le dessous est repéré avec des marques de léopard carbonisé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les bords sont d'or pâle mais le centre a encore un peu d'épaisseur brute et donne doucement lorsqu'il est pressé. La pâte de za'atar sent l'huile et les herbes, mais pas le toast.",
            "action": "Retourner au four 2-3 minutes de plus. Si les bords s'obscurcissent plus rapidement que le centre, glissez le plateau sur la grille centrale."
          },
          {
            "state": "Perfect",
            "description": "Les bords sont profondément dorés et crépitent lorsqu'ils sont pliés. Le dessous a des taches foncées carbonisées. La pâte za'atar est parfumée et sèche à la surface, non mouillée ni grasse. Le pain plat fléchit mais tient sa forme.",
            "action": "Transférer sur une planche à découper et couper en quartiers immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont devenus presque noirs et la pâte de za'atar commence à fumer. Le centre peut être raide et semblable à un craquelin.",
            "action": "Coupez les bords brûlés avec des cisailles de cuisine. L'intérieur est encore comestible et la saveur za'atar s'intensifie souvent de façon attrayante — l'appeler « style deux fois cuit »."
          }
        ]
      },
      "feelCue": "À l'état frais du four, le pain plat devrait craquer audiquement lorsque vous appuyez sur un coin — ce bruit est la croûte qui se brise contre l'intérieur doux en dessous. La vapeur transporte le parfum du thym séché, du sésame et de l'huile d'olive dans une seule rafale chaude."
    }
  ]
};
