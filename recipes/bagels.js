export default {
  "repoId": "master_american_bagels_001",
  "parentRepoId": null,
  "slug": "bagels",
  "author": "ForkRecipe Kitchen",
  "title": "New York— Sacs de style",
  "description": "Des anneaux d'acajou et d'acajou avec une croûte qui claque sous le couteau et un intérieur assez dense pour tenir une montagne de lox sans s'effondrer. Le sirop de malt dans la pâte et l'eau bouillante est la poignée de main secrète du déli de New York — c'est ce qui fait un bagel un bagel.",
  "cuisine": "Américain",
  "culture": "Juif de New York",
  "category": "breads",
  "tags": [
    "pain",
    "bagel",
    "nouveau-né",
    "végétalien",
    "sans produits laitiers"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "14 hr",
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
      "name": "Farine de pain (gluten élevé, 13%+ protéines)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "Farine de gluten",
        "Farine de Sir Galahad"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau (température ambiante)",
      "ratioValue": 55,
      "defaultUnit": "%",
      "substitutions": [
        "eau filtrée"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 0.5,
      "defaultUnit": "%",
      "substitutions": [
        "levure sèche active (protection en premier, utilisation 0,6%)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sirop de malt d'orge (dough)",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": [
        "poudre de malt non diastatique (même quantité)",
        "miel dans une pincée"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sirop de malt d'orge (eau bouillante)",
      "ratioValue": 1,
      "defaultUnit": "tbsp per liter",
      "substitutions": [
        "bicarbonate de soude 1 c. à soupe pour une croûte plus alcaline"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Leavener",
      "name": "Cuisson de soude (eau bouillante)",
      "ratioValue": 1,
      "defaultUnit": "tbsp per pot",
      "substitutions": [
        "bicarbonate de soude pour plus de couleur"
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
      "outputState": "stiff_bagel_dough",
      "instructions": "Mélanger l'eau, le sirop de malt et la levure instantanée dans un grand bol et remuer brièvement pour dissoudre. Ajouter la farine et le sel. Mélanger à la main ou à l'aide d'un crochet de pâte jusqu'à ce que les ingrédients se combinent dans une boule raide et rugueuse — environ 3 minutes. Cette pâte est intentionnellement très raide : 55 % d'hydratation est sur l'extrémité basse pour le pain, et cette rigidité est ce qui donne au bagel sa mâche caractéristique. La pâte se sentira presque trop sèche et ne se lissera pas complètement pendant le mélange. Il s'avère sur une surface intacte.",
      "visualCue": {
        "primaryTarget": "Une boule raide et dense qui tient à peine à vos mains, plus comme de l'argile à modeler ferme que de la pâte à pain. Pas de bords louches; il tient sa forme immédiatement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte s'étend lorsque vous la posez au lieu de tenir une balle.",
            "action": "Ajouter la farine 1 cuillère à soupe à la fois, la plier jusqu'à ce que la pâte ferme jusqu'à la rigidité correcte."
          },
          {
            "state": "Perfect",
            "description": "Une balle ferme et lisse qui tient sa forme, légèrement collante mais pas collante, dense et lourde dans la main.",
            "action": "Agenouillez vigoureusement sur une surface non nourrie pendant 8 à 10 minutes."
          },
          {
            "state": "Overdone",
            "description": "La pâte est émiettée et sèche, se brisant aux bords plutôt que de se tenir ensemble.",
            "action": "Ajouter de l'eau 1 cuillère à café à la fois, en travaillant chaque addition en entier, jusqu'à ce que la pâte se combine."
          }
        ]
      },
      "feelCue": "La pâte de Bagel doit se sentir comme un mastic rigide — elle donne sous pression constante mais repousse. Vos bras travailleront plus dur que tout autre pain."
    },
    {
      "nodeId": "step_2",
      "action": "Agenouillement",
      "inputs": [
        "stiff_bagel_dough"
      ],
      "outputState": "developed_bagel_dough",
      "instructions": "Agenouillez la pâte à la main pendant 8 à 10 minutes à la main (ou 6 minutes dans un mélangeur avec un crochet à vitesse moyenne). La pâte rigide ne sera pas aussi extensible que la focaccia ou la pâte arable, mais elle devrait devenir lisse et développer suffisamment d'élasticité pour passer le test de vitre : étirer une petite pièce entre les doigts dans une membrane mince sans qu'elle se déchire. Divisez en 8 portions égales (environ 110 à 120g chacune). Rouler chacun dans une boule lisse, couvrir avec une serviette humide, et laisser reposer 15 minutes pour détendre le gluten avant de façonner.",
      "visualCue": {
        "primaryTarget": "Une balle lisse et serrée qui ressort immédiatement lorsqu'elle est cuite. La surface doit ressembler à du cuir poli — pas de taches rugueuses, de larmes ou de coutures visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore rugueuse et déchire lorsqu'elle est étirée; le test de vitre échoue avec la rupture de la membrane presque immédiatement.",
            "action": "Continuer à pétrir pendant 2 à 3 minutes. Cette pâte nécessite des efforts persistants."
          },
          {
            "state": "Perfect",
            "description": "Doux et légèrement satiné, passant le test de vitre avec une fine membrane translucide. Il ressort fermement lorsqu'il est pressé.",
            "action": "Diviser, bouler, couvrir et reposer 15 minutes avant de façonner."
          },
          {
            "state": "Overdone",
            "description": "La pâte est devenue très serrée et se rétracte agressivement lorsque vous essayez de la façonner — elle a été surmenée.",
            "action": "Couvrir et reposer de 20 à 30 minutes; le gluten doit se détendre avant de façonner est possible."
          }
        ]
      },
      "feelCue": "La pâte bagel bien kneaded a une qualité presque caoutchouteuse, elle rebondit d'un poke avec plus d'énergie que n'importe quelle autre pâte à pain que vous manipulerez."
    },
    {
      "nodeId": "step_3",
      "action": "Forme",
      "inputs": [
        "developed_bagel_dough"
      ],
      "outputState": "shaped_bagels",
      "instructions": "Pour former chaque bagel : rouler chaque boule dans une corde d'environ 9 pouces de long, légèrement plus épais au milieu. Enveloppez la corde autour de votre paume et quatre doigts, chevauchant les extrémités de 1 à 2 pouces sur votre paume. Roulez votre paume en allers et retours sur le comptoir tout en appuyant vers le bas — les extrémités fusionneront sous la pression. L'anneau qui en résulte devrait avoir un trou d'environ 1,5 à 2 pouces de diamètre (il se refermera significativement pendant l'ébullition et la cuisson). Alternativement, poke un pouce fariné à travers le centre de chaque boule et étirer doucement le trou. Placer les bagels en forme sur une plaque parcheminée.",
      "visualCue": {
        "primaryTarget": "Doux, même les anneaux avec un trou qui semble presque trop grand — environ 1,5 à 2 pouces de l'autre côté. La jonction où la corde a été scellée doit être invisible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La couture où la corde a été jointe est clairement visible ou a déjà commencé à s'ouvrir; le trou est trop petit ou non uniforme.",
            "action": "Si la couture est ouverte, pincez-la fermement et roulez la jonction sur le comptoir pour la fusionner. Étendre doucement le trou plus large."
          },
          {
            "state": "Perfect",
            "description": "Un anneau sans soudure, même avec un trou généreux, la même épaisseur tout autour comme un tore. Extérieur lisse sans fissures.",
            "action": "Couvrir de plastique et réfrigérer pendant la nuit (10–14 heures) pour le retard froid."
          },
          {
            "state": "Overdone",
            "description": "Surmené pendant la formation — la surface a déchiré et les anneaux semblent rugueux et inégaux.",
            "action": "Laisser reposer pendant 10 minutes et reformer doucement, en utilisant la méthode de corde plutôt que la méthode de poke."
          }
        ]
      },
      "feelCue": "Un anneau bagel bien façonné a une solidité satisfaisante dans votre main - ferme et légèrement printanière, sans points faibles où l'anneau se sent plus mince. Ça devrait être uniforme."
    },
    {
      "nodeId": "step_4",
      "action": "Preuve",
      "inputs": [
        "shaped_bagels"
      ],
      "outputState": "proofed_bagels",
      "instructions": "Couvrir la poêle de bagels en forme d'enveloppe plastique et réfrigérer pendant 10 à 14 heures (nuit). La preuve froide développe la saveur tout en maintenant la pâte très ferme, ce qui aide les bagels à tenir leur forme pendant l'ébullition. Pour tester s'ils sont prêts : déposer un bagel dans un bol d'eau froide. S'il flotte en 10 secondes, il est prêt à bouillir. Si elle coule et reste baissée, elle a besoin de plus de temps à température ambiante (30–60 minutes hors du réfrigérateur).",
      "visualCue": {
        "primaryTarget": "Après la preuve du froid : les bagels devraient avoir un aspect légèrement plus grand avec un extérieur sec et ferme. L'essai du flotteur est le contrôle définitif — pas l'aspect visuel.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'essai du flotteur échoue : le bagel coule et reste baissé. La pâte est trop ferme et sous-fermentée.",
            "action": "Laisser la casserole reposer à température ambiante pendant 30 minutes, puis tester à nouveau. Ne pas faire bouillir des bagels sous-proofés — ils seront denses et gommés."
          },
          {
            "state": "Perfect",
            "description": "Le bagel d'essai flotte avec confiance en 10 secondes. La surface est ferme et sèche, les anneaux tiennent leur forme lorsqu'ils sont manipulés.",
            "action": "Préchauffer le four à 500°F et porter l'eau bouillante à ébullition."
          },
          {
            "state": "Overdone",
            "description": "Les bagels ont visiblement gonflé et adouci; ils se sentent oreillers plutôt que fermes, et les trous ont fermé de façon significative.",
            "action": "Faire bouillir immédiatement — les bagels surprotégées seront plus légers et moins croustillants que l'idéal, mais toujours délicieux."
          }
        ]
      },
      "feelCue": "Un bagel correctement éprouvé doit se sentir ferme et froid à partir du réfrigérateur — pas doux ou squishy. Il devrait tenir sa forme de bague sans aucun support quand vous le ramassez avec deux doigts."
    },
    {
      "nodeId": "step_5",
      "action": "Bouillir",
      "inputs": [
        "proofed_bagels",
        "ing_06",
        "ing_07"
      ],
      "outputState": "boiled_bagels",
      "instructions": "Portez une grande casserole d'eau à ébullition. Ajouter le sirop de malt d'orge et le bicarbonate de soude et remuer pour dissoudre. Travaillant en lots de 2 à 4 (ne pas fouler), abaissez les bagels dans l'eau. Faire bouillir 1 minute par côté (2 minutes au total) pour une croûte plus croustillante, ou 30 secondes par côté pour un résultat légèrement plus doux. Retirer avec une cuillère à fentes et transférer sur une plaque de cuisson parcheminée. Appliquez immédiatement les garnitures (semelles, graines de pavot, tout assaisonnement) pendant que la surface est humide.",
      "visualCue": {
        "primaryTarget": "Les bagels bouffent nettement dans l'eau bouillante et développent une surface légèrement brillante et légèrement gélatinisée — l'amidon extérieur est en position. Ils devraient flotter tout au long de l'ébullition.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les bagels à peine gonflés dans l'eau et la surface semble terne et poreuse — l'amidon n'a pas gélatinisé.",
            "action": "Faites bouillir 30 secondes de plus par côté. Les bagels sous-bois auront une croûte pâle et mate après cuisson au lieu de l'acajou brillant."
          },
          {
            "state": "Perfect",
            "description": "Visuellement gonflé, avec un extérieur brillant et légèrement caoutchouteux. Lumière et flottabilité dans l'eau. Le trou est clairement visible et n'a pas fermé.",
            "action": "Retirer avec une cuillère à fentes, appliquer les garnitures immédiatement et cuire."
          },
          {
            "state": "Overdone",
            "description": "Les bagels ont été trop longtemps dans l'eau — ils sont très gonflés, presque ballonnants, et l'extérieur est ridiculisé ou vidé.",
            "action": "Faites cuire immédiatement. Les bagels surchauffés seront plus doux et moins croustillants que l'idéal."
          }
        ]
      },
      "feelCue": "Un bagel bouilli a un extérieur presque caoutchouteux, il grince légèrement contre la cuillère à fentes. C'est exact. La couche d'amidon gélatinisé est ce qui met dans la croûte craquante et brillante dans le four."
    },
    {
      "nodeId": "step_6",
      "action": "Cuire",
      "inputs": [
        "boiled_bagels"
      ],
      "outputState": "finished_bagels",
      "instructions": "Cuire les bagels bouillis à 500 °F (250 °C) pendant 18 à 22 minutes, en tournant une fois la poêle à mi-chemin, jusqu'à ce qu'ils soient brun acajou profond partout, y compris le fond. Ils vont s'assombrir plus que vous ne vous attendez et plus que vous pourriez être à l'aise avec. Ne les tirez pas tôt; la couleur est la saveur. Laisser refroidir sur un porte-fils pendant au moins 10 minutes avant de couper — l'intérieur est encore fini et sera légèrement gommé si coupé à chaud.",
      "visualCue": {
        "primaryTarget": "Une acajou profonde partout — plus sombre qu'un rouleau de dîner, plus légère que brûlée. La surface est brillante et tendue, avec toutes les graines grillées et parfumées. Le bas doit être de la même couleur que le haut.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Golden-blond avec une surface douce et oreiller — ils ressemblent à des rouleaux qui ont des trous. L'extérieur n'est pas croquant.",
            "action": "Retourner au four pour 4 à 5 minutes de plus. La couleur emblématique du bagel est un brun rougeâtre profond, pas de l'or pâle."
          },
          {
            "state": "Perfect",
            "description": "Une acajou uniformément profonde avec une surface brillante et presque laquée. Les graines sont grillées et parfumées. Le fond semble creux lorsqu'il est tapé.",
            "action": "Refroidir sur une grille. Couper et toast avant de servir pour une croûte croustillante maximale."
          },
          {
            "state": "Overdone",
            "description": "Très sombre avec un sous-ton amer, les graines commencent à goûter brûlées. L'extérieur est très dur.",
            "action": "Refroidir complètement et goûter — souvent, seules les graines sont trop grillées et l'intérieur du bagel est excellent. Ensuite, réduisez le four à 475°F."
          }
        ]
      },
      "feelCue": "Un bagel bien cuit devrait se sentir presque assez dense pour être utilisé comme rondelle de hockey — lourd pour sa taille, la croûte craque quand vous le pressez légèrement. Il devrait refroidir avec une fermeté satisfaisante, pas un don doux."
    }
  ]
};
