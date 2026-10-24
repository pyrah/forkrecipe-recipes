export default {
  "repoId": "master_american_sourdough_country_loaf_001",
  "parentRepoId": null,
  "slug": "sourdough-country-loaf",
  "author": "ForkRecipe Kitchen",
  "title": "Sourdough Pays pain",
  "description": "Un pain à croûte ouverte, naturellement levé, construit à partir d'une pâte active, à haute hydratation, à froid et retardé pendant la nuit, et cuit dans un four hollandais jusqu'à ce que la croûte se brise et que l'intérieur scintille.",
  "cuisine": "Américain",
  "culture": "San Francisco",
  "category": "breads",
  "tags": [
    "Pâtes alimentaires",
    "pain",
    "levain naturel",
    "végétalien",
    "croûte"
  ],
  "difficulty": 4,
  "activeTime": "90 min",
  "totalTime": "24 hr",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 3,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de pain (12,5–13% de protéines)",
      "ratioValue": 90,
      "defaultUnit": "%",
      "substitutions": [
        "farine tout usage (un peu moins d'eau)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Farine de blé entier",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": [
        "Farine de seigle entière"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau filtrée (78°F / 26°C)",
      "ratioValue": 75,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Leavener",
      "name": "Démarrage actif à l'aurore (hydratation à 100%)",
      "ratioValue": 20,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "sel casher (même poids)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Hydration",
      "name": "Eau pour dissolution de sel (chauffe)",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Autolyse",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "autolysed_dough",
      "instructions": "Mélanger la farine de pain et la farine de blé entier dans un grand bol. Verser dans l'eau (retenir environ 30 g pour le sel plus tard) et mélanger avec votre main jusqu'à ce qu'aucune farine sèche ne reste — presser et plier jusqu'à ce que la masse soit bouchée et complètement hydratée. Couvrir et reposer 30 à 60 minutes à température ambiante. L'autolyse permet aux enzymes de commencer à dégrader les amidons et les protéines de gluten hydratent et s'alignent lâchement sans travail mécanique, rendant le mélange ultérieur beaucoup plus efficace et donnant à la miette une extensibilité plus soyeuse.",
      "visualCue": {
        "primaryTarget": "Une masse rugueuse et chaotique sans stries sèches et sans piscines d'eau libre. La surface semble mate et quelque peu poilue — pas lisse. Après le reste, la pâte sera détendue et deviendra légèrement collante, avec une sensation souple et cohésive.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Il y a toujours des poches de farine sèche ou des touffes qui n'absorbent pas l'eau. La surface semble émiettée et inégale.",
            "action": "Presser et plier de façon plus agressive, presser les poches sèches dans la pâte humide jusqu'à ce que l'absorption complète soit atteinte. Ajouter quelques gouttes d'eau si vraiment sèche."
          },
          {
            "state": "Perfect",
            "description": "Entièrement hydratée, sans farine sèche, rugueuse et mate. Après le repos, il doit peler proprement des côtés du bol avec une légère résistance. Les brins de gluten commencent déjà à s'aligner.",
            "action": "Procédez à l'ajout du démarreur et du sel lorsque la pâte repose proprement et s'étire quelques centimètres avant de déchirer."
          },
          {
            "state": "Overdone",
            "description": "Dough a fermenté et gonflé de façon notable pendant l'autolyse, ce qui signifie que votre entrée était dans la farine ou la pièce est très chaude. Le gluten peut se sentir lâche ou humide.",
            "action": "Procédez immédiatement pour éviter la surfermentation. Surveillez soigneusement le temps de fermentation en vrac et raccourcissez-le."
          }
        ]
      },
      "feelCue": "Appuyez sur la pâte après le reste : elle doit céder volontairement sous votre paume et rebondir à mi-chemin — pas revenir dur (sous-hydraté) ou s'effondrer à plat (surhydraté). Il devrait enlever votre main de façon propre plutôt que de la corde."
    },
    {
      "nodeId": "step_2",
      "action": "Plier",
      "inputs": [
        "autolysed_dough",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "bulk_fermented_dough",
      "instructions": "Dissoudre le sel dans l'eau réservée, puis verser le démarreur et l'eau salée sur la pâte autolysée. Utilisez la méthode de pincement : pincez le démarreur à travers la pâte en passant 10–15 jusqu'à ce qu'il soit intégré. Commencer ensuite la série de stretch-and-folds : toutes les 30 minutes pendant les 2 premières heures, prendre un bord de la pâte, l'étirer jusqu'à ce que vous sentiez la résistance, et le plier du côté opposé. Faire tourner le bol à 90° et répéter quatre fois par ensemble. Après quatre sets, laisser la pâte recouverte terminer la fermentation en vrac — environ 10–14 heures à 68°F / 20°C, ou 4–5 heures à 76°F / 24°C. La pâte est prête quand elle a grandi de 50 à 75 %, se sent aérée et bombée, et un rabat épluché le dos montre un réseau de bulles juste sous la surface.",
      "visualCue": {
        "primaryTarget": "La toux a augmenté de 50 à 75 % au-dessus de son volume de départ, est bombée et légèrement jiggly lorsque le bol est bouché, et montre une structure bubble et en toile quand vous étirez un rabat dans la lumière. La surface doit être lisse et légèrement bombée, non plane et dense.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Peu lever, la pâte est encore dense et compacte. Aucune bulle visible lorsqu'elle est étirée. Tire raidement plutôt que de s'étendre lâchement.",
            "action": "Donne-lui plus de temps. Déplacez-vous vers un endroit plus chaud (fourni avec lumière allumée, ~75°F / 24°C). Vérifiez à nouveau en 1–2 heures."
          },
          {
            "state": "Perfect",
            "description": "Augmentation de 50 à 75 %, réseau de bulles ouvert visible à travers un rabat tendu, coupoles de pâte et oscille doucement. Jiggles comme de la gélatine quand vous secouez le bol. Un doigt mouillé piqué laisse un trou qui se remplit très lentement.",
            "action": "Passer immédiatement à la pré-forme — ne pas attendre; le sur-ferment est difficile à récupérer."
          },
          {
            "state": "Overdone",
            "description": "La toux a plus que doublé, a l'air plate ou s'est effondrée au sommet, sent agressivement aigre ou alcoolique, et a une structure humide et glissante qui se sépare plutôt que de s'étirer.",
            "action": "Formez immédiatement et à froid-retard pour moins de temps (6 heures au lieu de nuit). Le pain sera très aigre et ne tiendra peut-être pas bien sa forme, mais il est encore comestible."
          }
        ]
      },
      "feelCue": "Pendant l'étirement et le pliage, la pâte se transformera : les premiers ensembles se sentent lâches et sujets à la déchirure ; le troisième ensemble devrait s'étirer dans une longue vitre translucide avant de se casser. À la fin de la pâte en vrac, la pâte doit se sentir vivante, légèrement collante, gazeuse et lisse, laissant un léger résidu sur la paume qui laisse aller proprement."
    },
    {
      "nodeId": "step_3",
      "action": "Forme",
      "inputs": [
        "bulk_fermented_dough"
      ],
      "outputState": "shaped_loaf",
      "instructions": "Tourner doucement la pâte sur une surface non affectée. À l'aide d'un gratteur de banc et d'une main coupée, faites un pré-forme : faites glisser la pâte vers vous pendant que le gratteur pousse de derrière, en tournant pour construire la tension de surface dans un rond lâche. Repos à découvert de 20 à 30 minutes (repos de banc). Puis farinez généreusement le haut du rond, retournez-le, et faites la forme finale: pour une boule, prenez le bord lointain, pliez-le au centre, puis repliez-le à gauche, à droite, et roulez tout le paquet vers vous, en utilisant vos paumes pour glisser et sceller la couture inférieure serrée contre le banc. La surface doit être tendue comme un tambour. Déposer les coutures dans un banneton bien nourri (la farine de riz est idéale) ou un bol doublé d'une serviette farinée. Pincez la couture fermée. Couvrir et réfrigérer 12-16 heures.",
      "visualCue": {
        "primaryTarget": "Un rond en forme de dôme avec une surface lisse et ininterrompue montrant une tension de surface visible. La couture en dessous est étanche. Pas de larmes ou de taches saggy à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est lâche et saggy, la pâte s'étale latéralement sur le banc plutôt que la hauteur du bâtiment. Pas de tension, ça ressemble à un crêpe.",
            "action": "Utilisez le racleur de banc pour le rassembler plus serré dans le stade pré-forme et reposer plus longtemps (30 min) avant de tenter la forme finale. Travailler plus résolument: des mouvements rapides et confiants créent plus de tension que des mouvements lents et prudents."
          },
          {
            "state": "Perfect",
            "description": "Dôme serré et lisse qui tient sa hauteur. La peau de surface est tendue et ressort au toucher. Lâche-le dans le banneton et il tiendra une forme de dôme plutôt que de sombrer.",
            "action": "Réfrigérer immédiatement pour le retard froid — 12 à 16 heures."
          },
          {
            "state": "Overdone",
            "description": "La surface a été déchirée — on peut voir des déchirures dans la peau, ou la pâte a dégazé et se sent dense du surmenage.",
            "action": "Placez-vous dans le banneton. Une surface déchirée donnera une croûte plus rustique, mais la miette sera moins ouverte. N'essayez pas de remodeler — vous ne ferez que le dégazer davantage."
          }
        ]
      },
      "feelCue": "Une boule bien façonnée devrait résister quand vous essayez de l'aplatir avec votre paume — poussez vers le bas et il devrait repousser. La peau de surface doit se sentir comme l'enveloppe étirée : lisse, tendue et légèrement résistante. Si elle donne sans résistance, la tension est insuffisante."
    },
    {
      "nodeId": "step_4",
      "action": "Score",
      "inputs": [
        "shaped_loaf"
      ],
      "outputState": "scored_loaf",
      "instructions": "Préchauffer le four à l'intérieur à 500 °F / 260 °C pendant au moins 45 minutes. Tournez le pain froid hors du banneton sur un morceau de parchemin. Travail rapide, score avec une lame de rasoir boiteuse ou pointue maintenue à un angle de 30 à 45° : une oreille unique coupée d'un côté du dôme, ou un hachage croisé audacieux. La coupe doit être décisive et rapide — de 5 à 7 cm de profondeur — et non pas timide. La pâte froide (droite du réfrigérateur) est plus facile à marquer proprement.",
      "visualCue": {
        "primaryTarget": "Nettoyer, définir les incisions avec des lèvres légèrement étalées. Les bords coupés doivent s'ouvrir légèrement de la tension de surface de la pâte, révélant l'intérieur pâle. La pâte froide du réfrigérateur tient sa forme et montre clairement les découpes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La lame traînée et déchirée plutôt que coupée — lèvres irrégulières, pâte peut avoir légèrement dégonflé là où elle a été traînée.",
            "action": "Utilisez une lame plus tranchante ( rasoir simple, pas un couteau dentelé). Quelques gouttes d'eau sur la lame aident. Travaillez plus vite — l'hésitation entraîne des traînantes."
          },
          {
            "state": "Perfect",
            "description": "Incisions claires et décisives avec lèvres visiblement ouvertes. La tension de surface fait que la coupe s'écarte. La pâte froide est assise sur le parchemin et ne dégonfle pas.",
            "action": "Abaissez le pain immédiatement dans le four néerlandais préchauffé. Chaque seconde compte — le ressort du four est le meilleur lorsque la pâte atteint rapidement la chaleur maximale."
          },
          {
            "state": "Overdone",
            "description": "Les scores sont trop profonds, atteignant près de la croûte inférieure, ou il y a trop de coupes - la tension de surface est compromise et le pain peut se propager plutôt que de jaillir vers le haut.",
            "action": "Toujours le faire cuire — le résultat sera flatteur avec moins d'oreille, mais la saveur ne sera pas affectée."
          }
        ]
      },
      "feelCue": "La pâte froide d'un retard de 12 heures devrait se sentir ferme et presque raide sous votre main — comme le beurre froid, pas comme la pâte à température ambiante. Cette fermeté est ce qui permet un score net. Si la pâte est molle et chaude, le score va glisser."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire",
      "inputs": [
        "scored_loaf"
      ],
      "outputState": "finished_loaf",
      "instructions": "En utilisant le parchemin comme élingue, abaissez le pain dans le four hollandais chaud et mettez le couvercle. Cuire couvert à 500°F / 260°C pendant 20 minutes — la vapeur de la pâte piégée à l'intérieur du pot crée la croûte brillante et extensible nécessaire pour le ressort maximal du four. Retirez le couvercle, baissez la température à 460°F / 238°C, et faites cuire encore 20 à 25 minutes jusqu'à ce que la croûte soit acajou profond et qu'un thermomètre à lecture instantanée au centre indique 205 à 210°F / 96 à 99°C. Transférer sur une grille et résister à la coupe pendant au moins 1 heure — la miette intérieure est toujours réglée par la chaleur résiduelle.",
      "visualCue": {
        "primaryTarget": "Un pain bombé avec une croûte d'acajou profonde et fracassée, une oreille bien germée et un morceau creux en tapotant sur le fond. Le score a fleuri ouvert dans une oreille audacieuse, caramélisée à une ambre profonde à sa lèvre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est d'or pâle ou de bronzage, sonne terne lorsqu'elle est tapée. Température intérieure inférieure à 200°F / 93°C. La croûte se produit lorsqu'elle est pressée plutôt que de craqueler.",
            "action": "Continuer la cuisson avec le couvercle éteint, en vérifiant toutes les 5 minutes, jusqu'à ce que l'acajou profonde soit atteint et que le fond sonne creux. Une croûte pâle signifie que la vapeur n'a jamais séché la surface correctement."
          },
          {
            "state": "Perfect",
            "description": "Acajou profond — presque brun-noir sur l'oreille et les points élevés, brun rougeâtre sur les côtés et le fond. Ça semble creux, comme un tambour. La croûte est rigide et crépite audiblement car elle refroidit sur la grille.",
            "action": "Laisser refroidir sur une grille 1 heure minimum avant de couper. Le crépitement de la croûte qui se refroidit est le son du succès."
          },
          {
            "state": "Overdone",
            "description": "La croûte est uniformément brun-noir foncé avec une odeur amère, presque carbonisée. Le fond peut être vraiment brûlé.",
            "action": "Éliminer toute croûte inférieure carbonisée. Réduire la température du four de 25°F / 15°C la prochaine fois, ou raccourcir le four découvert. L'intérieur est probablement bien."
          }
        ]
      },
      "feelCue": "Lorsque vous tapez sur le fond d'un pain bien cuit, il doit sonner creux et haut pointé, comme frapper sur une porte en bois mince. Un thud dense et terne signifie que l'intérieur est encore pâteux et a besoin de plus de temps. La croûte doit se sentir rigide et vitreuse, non molle ou souple, et se fissurera audiblement et s'ouvrira comme elle refroidit."
    }
  ]
};
