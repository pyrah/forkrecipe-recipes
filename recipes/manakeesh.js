export default {
  "repoId": "master_lebanese_manakeesh_001",
  "parentRepoId": null,
  "slug": "manakeesh",
  "author": "ForkRecipe Kitchen",
  "title": "Manakeesh",
  "description": "Le pain plat du matin bien-aimé du Liban — pâte de levure d'oreiller aplatie en rondelles et peinte avec une pâte de za'atar et d'huile d'olive, puis cuite jusqu'à ce que les bords croustillants et les bulles d'huile d'herbe dans une croûte parfumée et vert foncé.",
  "cuisine": "Libanais",
  "culture": "Levantine",
  "category": "breads",
  "tags": [
    "lébanèse",
    "Pain plat",
    "za-atar",
    "Petit déjeuner",
    "Produits de la rue"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "bakers_percentage",
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
    "bitter": 2,
    "umami": 1,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "farine de pain",
        "tipo 00"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude (38-40 C)",
      "ratioValue": 60,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 8,
      "defaultUnit": "%",
      "substitutions": [
        "huile neutre"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": [
        "levure sèche active (proof first)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": [
        "miel (même poids)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Mélange d'épices Za'atar",
      "ratioValue": 30,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile d'olive extra vierge (pour la garniture)",
      "ratioValue": 20,
      "defaultUnit": "%",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélanger la pâte",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "shaggy_dough",
      "instructions": "Dans un grand bol, mélanger l'eau chaude, le sucre et la levure. Incorporer et laisser reposer pendant 5 minutes si vous utilisez une levure sèche active (l'instant peut entrer directement avec la farine). Ajouter la farine, le sel et l'huile d'olive. Mélanger avec votre main ou une cuillère en bois jusqu'à ce qu'aucune farine sèche ne reste et qu'une pâte chaotique et cohésive se forme. La pâte doit être douce, légèrement collante et s'assembler en une seule masse. Se tourner sur une surface non nourrie et pétrir pendant 6-8 minutes jusqu'à ce que lisse et élastique. La pâte ne doit pas s'accrocher agressivement à la surface — une prise légère est correcte.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte lisse et légèrement piquante qui ressort quand elle est cuite. La surface est douce et légèrement brillante à partir de l'huile d'olive. Pas de taches sèches, pas de larmes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Rough, shaggy, et de se séparer quand étiré. Farine sèche encore visible. Des larmes plutôt que des étirements.",
            "action": "Agenouillez encore 3 minutes. Le réseau de gluten n'est pas encore développé — la pâte a besoin de plus de travail pour devenir extensible et lisse."
          },
          {
            "state": "Perfect",
            "description": "Surface lisse, souple, légèrement collante. Éloignez-vous proprement de la surface de travail à chaque poussée. Les ressorts sont en marche.",
            "action": "Formez-vous en boule, huilez légèrement le bol, couvrez et laissez-le monter dans un endroit chaud."
          },
          {
            "state": "Overdone",
            "description": "La toux est serrée, caoutchouteuse et résiste à chaque étirement. Il rebondit agressivement quand il était poché — du gluten surcollé.",
            "action": "Laisser reposer sur le banc pendant 15 minutes pour se détendre avant d'arrondir et d'arrondir. De la pâte trop pétrie, il faut se reposer."
          }
        ]
      },
      "feelCue": "Prendre un petit morceau de pâte et l'étirer délicatement entre deux mains — après le pétrir correctement devrait s'étirer dans une membrane mince, semi-transparente sans déchirer. Ce test de vitre confirme le développement du gluten."
    },
    {
      "nodeId": "step_2",
      "action": "Faire lever",
      "inputs": [
        "shaggy_dough"
      ],
      "outputState": "proofed_dough",
      "instructions": "Former la pâte dans une boule lisse, placer dans un bol légèrement huilé, et couvrir avec un chiffon humide ou un enveloppement plastique. Preuve dans un endroit chaud (28–32 C) pendant 45–60 minutes, jusqu'à doublé en taille. Les boulangers de rue à Beyrouth font une seule montée chaude à 40 C pendant 30 minutes; les boulangers à domicile peuvent également prouver dans un réfrigérateur froid une nuit pour une meilleure saveur et une montée plus lente. La pâte est prête quand elle a l'air gonflée et jiggly et qu'un poke du doigt laisse un tiret de remplissage lent.",
      "visualCue": {
        "primaryTarget": "Une masse arrondie en forme de dôme qui a clairement doublé en volume — la pâte remplit le bol où avant il était assis dans le tiers inférieur. La surface est lisse et légèrement translucide où les grosses bulles poussent vers l'extérieur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est à peine 25 % plus grosse. Sensé, lourd, résistant lorsqu'il est poché — le doigt se remplit immédiatement. Sens seulement de farine et de levure, pas encore fermenté.",
            "action": "Couvrez et attendez. Une chambre froide étouffe la levure de façon spectaculaire. Déplacez le bol à un endroit plus chaud: sur le dessus du four, dans un four éteint avec juste la lumière allumée, ou dans un bol d'eau chaude."
          },
          {
            "state": "Perfect",
            "description": "Double, jiggly, surmonté de dôme, et sentant légèrement la bière et le pain frais. Un poke laisse une fossette à remplissage lent qui revient à mi-chemin en 5 secondes.",
            "action": "Divisez et formez immédiatement — la pâte est au pic de rétention de gaz et se répandra magnifiquement."
          },
          {
            "state": "Overdone",
            "description": "Le dôme s'est effondré dans une masse plate et étendue. La pâte sent fortement l'alcool. La surface peut être légèrement collante et s'accrocher au bol.",
            "action": "Défendre, remodeler et cuire dès que possible. Les manakeesh surprotégées auront encore un bon goût — aigre et complexe — mais il sera plus difficile de se former finement sans déchirer."
          }
        ]
      },
      "feelCue": "Appuyez sur un bout de doigt fariné 1 cm dans la pâte étagée et regardez le tiret. Il devrait se remplir lentement, environ à mi-parcours en 5 secondes, puis s'arrêter. C'est le moment parfait de rétention de gaz — le gluten est détendu mais la levure n'a pas épuisé le sucre."
    },
    {
      "nodeId": "step_3",
      "action": "Faire la garniture",
      "inputs": [
        "ing_07",
        "ing_08"
      ],
      "outputState": "zaatar_paste",
      "instructions": "Mélanger le mélange d'épices za'atar et l'huile d'olive dans un petit bol et remuer dans une pâte épaisse et extensible. Le rapport doit être d'environ 3 parties za'atar à 2 parties d'huile — assez épais pour enrober une cuillère et ne pas courir librement, mais suffisamment fluide pour se propager facilement sans déchirer la pâte. Goûtez la pâte : elle doit être astreinte, aigre et salée. Ajouter plus de za'atar s'il n'a que du goût d'huile; ajouter plus d'huile s'il tombe sèchement. Laisser reposer la pâte pendant 2 minutes pour que les herbes s'hydratent légèrement.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse et vert olive foncé qui tombe d'une cuillère dans une bruine lente et grumelée plutôt que de couler comme un liquide. Les graines de sésame sont visibles partout, suspendues dans l'huile d'herbe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Trop d'huile — la pâte coule librement et se déverse à la surface. Il glissera de la pâte et flattera aux bords plutôt que de couvrir le pain.",
            "action": "Ajouter plus de za'atar une cuillère à café à la fois jusqu'à ce que la pâte épaississe à la bonne consistance. Vous en avez besoin pour tenir sa position sur la pâte."
          },
          {
            "state": "Perfect",
            "description": "Spreadable, mais pas écoulement — s'applique comme une confiture épaisse. Clings à l'arrière d'une cuillère. L'huile enveloppe les herbes sans les noyer.",
            "action": "À utiliser immédiatement. La pâte se dépose si elle reste trop longtemps — remuer avant de s'étendre sur chaque tour."
          },
          {
            "state": "Overdone",
            "description": "Trop de za'atar — la pâte est sèche et émiettée, raide sur la cuillère, et déchire la surface de la pâte lorsqu'elle est étalée.",
            "action": "Incorporer plus d'huile d'olive une cuillère à café à la fois jusqu'à ce qu'elle soit extensible. Le za'atar doit être bien mouillé avec de l'huile pour même cuisiner."
          }
        ]
      },
      "feelCue": "Étalez une petite quantité sur le dos de votre main avec un couteau à beurre — il doit glisser en douceur et laisser un revêtement uniforme, parfumé vert-rouge, ne pas glisser et se serrer. La main devrait sentir comme un jardin d'herbes après la pluie."
    },
    {
      "nodeId": "step_4",
      "action": "Forme et dessus",
      "inputs": [
        "proofed_dough",
        "zaatar_paste"
      ],
      "outputState": "topped_manakeesh",
      "instructions": "Préchauffez votre four à sa température maximale — 250-270 C — avec une pierre ou une plaque de cuisson lourde sur le support central pendant au moins 30 minutes. Divisez la pâte éprouvée en boules égales (environ 150 g chacune pour les portions individuelles). Sur une surface légèrement farineuse, pressez et étirez chaque boule dans un disque rond de 5 à 6 mm d'épaisseur et d'environ 20 cm de diamètre. Le bord doit être légèrement plus épais que le centre. Spoon 2-3 cuillères à soupe de za'atar coller au centre de chaque tour et utiliser le dos de la cuillère pour l'étendre à moins de 1 cm du bord dans une couche uniforme.",
      "visualCue": {
        "primaryTarget": "Un mince disque rond de pâte avec une couche généreuse et uniforme de pâte za'atar vert foncé couvrant la surface à moins de 1 cm du bord. Le bord de la pâte est un bord nu et pâle qui souffle et brun pendant qu'il fait cuire.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux n'a que 1 cm d'épaisseur et n'a pas été étendue. La pâte za'atar est dans un blob au centre plutôt que de s'étendre uniformément. La ronde est malsaine et épaisse.",
            "action": "Appuyez et étirez de manière plus agressive — utilisez les articulations des deux mains pour s'étirer du centre vers l'extérieur. Étendre la garniture sur le bord avant de cuire."
          },
          {
            "state": "Perfect",
            "description": "5–6 mm de longueur ronde, même la couverture za'atar droite sur le bord, une jante nue. Toute la pièce est de la taille d'une assiette de salade.",
            "action": "Transférer immédiatement dans une pierre ou une feuille de cuisson chaude — la pâte commencera à se détendre et à souffler légèrement sur le banc."
          },
          {
            "state": "Overdone",
            "description": "Dough a été allongé papier-mince et déchire au centre. La pâte de Za'atar appliquée si épaisse qu'elle est bombée au centre.",
            "action": "Appuyez doucement sur la déchirure et utilisez moins de garniture. Un monticule de pâte za'atar sera brut et huileux au centre pendant que les bords brûlent."
          }
        ]
      },
      "feelCue": "Soulevez le manakeesh surmonté par le bord — il devrait fléchir mais pas s'enfoncer complètement à travers; un peu de sag est bien, mais s'il s'étire et se déchire sous son propre poids, la pâte est trop fine. La couche za'atar doit se sentir légèrement collante à un bout de doigt appuyé dessus, pas mouillé."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire au four",
      "inputs": [
        "topped_manakeesh"
      ],
      "outputState": "finished_manakeesh",
      "instructions": "Faites glisser le manakeesh sur la pierre de cuisson chaude ou la feuille préchauffée. Cuire au four pendant 6 à 8 minutes, jusqu'à ce que les bords soient dorés et croustillés, que la pâte za'atar soit bouillonnante et parfumée, et que le dessous soit doré et s'éloigne de la surface avec une croûte. La garniture de za'atar va s'assombrir sensiblement — cela est attendu et correct. Servir immédiatement: manakeesh est un pain qui doit être mangé chaud, plié en deux comme un taco doux, et consommé en quelques minutes de cuisson.",
      "visualCue": {
        "primaryTarget": "Arêtes dorées, légèrement carbonisées. La garniture za'atar est d'un vert foncé brillant profond, pétillant aux bords où l'huile a grillé dans le pain. Le dessous est ferme et croquant, pas pâle ou doux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les bords sont blond pâle, la garniture za'atar semble humide et crue, et le dessous est doux et blanc. Le pain fléchit sans résistance.",
            "action": "Retourner au four 2–3 minutes de plus. Manakeesh a besoin de chaleur élevée rapidement — un four chaud est non négociable pour un bord croquant et une garniture bien cuite."
          },
          {
            "state": "Perfect",
            "description": "Rebord doré-brun, garniture parfumée vert foncé avec de l'huile bulleuse aux bords, le dessous croquant qui soulève proprement de la pierre. La cuisine sent le thym grillé et l'huile d'olive.",
            "action": "Retirer et servir immédiatement, plié en deux ou à plat avec des tomates fraîches et du fromage blanc cousu à l'intérieur."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brun foncé à noir, la garniture za'atar est passée du vert au presque noir avec une odeur d'herbe vive et brûlée plutôt qu'une odeur grillée.",
            "action": "Coupez le bord brûlé avec un couteau ou des ciseaux. Le centre est probablement bien. Une éclaboussure de jus de citron frais sur la garniture trop foncée aide à couper l'amertume."
          }
        ]
      },
      "feelCue": "Ramassez le manakeesh cuit par son bord — il devrait être assez croustillant pour tenir sa forme horizontalement pendant quelques secondes avant de plier. Pliez-le en deux pour manger : l'intérieur doit cuire doucement contre votre main, la pâte za'atar parfumée et chaude, le bord craquelant de manière satisfaisante entre vos dents."
    }
  ]
};
