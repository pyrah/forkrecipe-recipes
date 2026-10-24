export default {
  "repoId": "master_greek_pitabread_001",
  "parentRepoId": null,
  "slug": "pita-bread",
  "author": "ForkRecipe Kitchen",
  "title": "Pain de pita grec",
  "description": "Des rondelles d'oreillers doux qui se gonflent dans des poches de vapeur parfaites dans un four furieusement chaud — ils émergent avec une croûte d'or pâle, une miette tendre et un ventre creux qui attend juste d'être déchiré et rempli.",
  "cuisine": "Grec",
  "culture": "Panhellénique",
  "category": "breads",
  "tags": [
    "Pita",
    "Pain plat",
    "grec",
    "pain",
    "levure",
    "poche"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "2 hr",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
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
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "farine de pain",
        "50 % blé entier + 50 % AP"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude (40 C)",
      "ratioValue": 63,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 1,
      "defaultUnit": "%",
      "substitutions": [
        "levure sèche active (dissoudre d'abord dans l'eau)"
      ]
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
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "huile neutre"
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
      "outputState": "pita_dough",
      "instructions": "Mélanger la farine, la levure instantanée et le sel dans un grand bol. Ajouter l'eau tiède et l'huile d'olive. Mélangez avec une cuillère en bois jusqu'à ce qu'aucune farine sèche ne reste, puis utilisez votre main pour l'amener dans une boule rugueuse. La pâte doit être modérément douce et légèrement collante, nettement plus douce que la pâte à pizza, mais pas aussi humide que la focaccia. S'avérer sur une surface légèrement farinée.",
      "visualCue": {
        "primaryTarget": "Une balle légèrement collante et chaotique qui tient ensemble et tire proprement loin des côtés du bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches sèches de farine au fond du bol; la pâte est émiettée et ne tient pas ensemble.",
            "action": "Ajouter l'eau chaude 1 cuillère à café à la fois et plier jusqu'à cohésion."
          },
          {
            "state": "Perfect",
            "description": "Balle douce et légèrement collante. Éloignez-vous du bol mais collez un peu à votre main. Pas de taches sèches.",
            "action": "Il s'avère et commence à pétrir."
          },
          {
            "state": "Overdone",
            "description": "Soupir et mouillé — verse plutôt que de tenir une forme.",
            "action": "Ajouter la farine une cuillère à soupe à la fois. La pâte à pita doit être douce mais façonnable."
          }
        ]
      },
      "feelCue": "La pâte de pita doit se sentir comme un lobe d'oreille doux — donnant, légèrement chaud, à peine collant. Un peu plus collant que la pâte à pain commerciale est correcte et souhaitable."
    },
    {
      "nodeId": "step_2",
      "action": "Pétrir",
      "inputs": [
        "pita_dough"
      ],
      "outputState": "developed_dough",
      "instructions": "Agenouillez pendant 8 minutes sur une surface légèrement farinée à l'aide d'un mouvement de rotation-poussoir. La pâte se transformera : de collant et rugueux à lisse, élastique et à peine collante. Après 8 minutes, il doit passer le test d'étirement de base — tirer une petite pièce et l'étirer quelques pouces sans qu'il déchire immédiatement. Formez une boule, huilez légèrement la surface et placez-la dans un bol propre.",
      "visualCue": {
        "primaryTarget": "Une boule lisse et satinée avec une surface légèrement brillante. Il ressort à mi-chemin quand il a sauté. Pas de larmes ou de taches rugueuses.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Surface encore rugueuse et bosselée; larmes lorsqu'étirée 3 cm. Dough colle au banc en continu.",
            "action": "Continuez à pétrir — vérifiez de nouveau toutes les 2 minutes."
          },
          {
            "state": "Perfect",
            "description": "Douce et élastique, à peine collante. Attachez jusqu'à 5-7 cm sans déchirer. Se sent vivant et légèrement chaud de la friction.",
            "action": "Mettre dans un bol huilé et couvrir pour la première montée."
          },
          {
            "state": "Overdone",
            "description": "La toux est très serrée et se rétracte immédiatement — difficile à étirer du tout.",
            "action": "Couvrir et reposer 20 minutes. Le gluten se détendrea tout seul."
          }
        ]
      },
      "feelCue": "La pâte de pita bien pétrie devrait se sentir comme une bande de caoutchouc lisse et souple — elle résiste et donne ensuite, s'étirant sans craquer, ressortant lentement plutôt que instantanément."
    },
    {
      "nodeId": "step_3",
      "action": "Faire lever",
      "inputs": [
        "developed_dough"
      ],
      "outputState": "risen_dough",
      "instructions": "Couvrir le bol d'une serviette humide ou d'une enveloppe plastique. Laisser monter à température ambiante (22-25 °C) pendant 60-75 minutes jusqu'à doubler. Pendant que la pâte s'élève, placer une lourde pierre de cuisson ou une poêle en fonte inversée sur la grille supérieure du four. Préchauffer le four à sa température maximale — 260 C (500 F) ou plus — au moins 30 minutes avant la cuisson. Une surface chaude et hurlante est essentielle pour que le pita puisse souffler.",
      "visualCue": {
        "primaryTarget": "Dough a doublé en volume. Le bol montre des marques d'expansion claires, les dômes de pâte au-dessus du bord, et le garrot le bol fait le carquois de masse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux a à peine grandi — moins de 30 % de plus. Sensé et serré. Poke revient immédiatement.",
            "action": "Donnez-lui plus de temps dans un endroit plus chaud. Les chambres froides ralentissent considérablement la levure."
          },
          {
            "state": "Perfect",
            "description": "J'ai doublé, jiggly, et j'ai drogué. Poke laisse une fossette lente qui revient à mi-chemin après quelques secondes.",
            "action": "Descendez doucement, divisez et lancez des pitas."
          },
          {
            "state": "Overdone",
            "description": "La toux s'est effondrée, sent fortement l'alcool, la surface est humide et collante.",
            "action": "Divisez et formez immédiatement. Les pitas peuvent être légèrement plus denses, mais ils vont encore souffler."
          }
        ]
      },
      "feelCue": "La pâte pita bien éprouvée se sent aérée et fragile — la manipuler doucement en divisant ou se dégonfler. Il devrait se sentir presque sans poids pour sa taille."
    },
    {
      "nodeId": "step_4",
      "action": "Façonner",
      "inputs": [
        "risen_dough"
      ],
      "outputState": "pita_rounds",
      "instructions": "Abattez la pâte et divisez en 8 portions égales (environ 70 g chacune). Sur une surface légèrement farinée, rouler chaque portion dans une boule lisse. Couvrir et reposer 10 minutes pour que le gluten se détende. Roulez ensuite chaque boule avec une épingle à rouler dans un rond de 18 à 20 cm de long et d'environ 4 à 5 mm d'épaisseur. Ne roulez pas trop fin — un pita trop fin ne formera pas une poche appropriée. Placer sur une feuille de parchemin et reposer 15 minutes avant la cuisson.",
      "visualCue": {
        "primaryTarget": "Même les disques ronds, de 18 à 20 cm d'épaisseur et d'épaisseur uniforme — pas de centre épais et bords fins. La surface est lisse sans larmes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les ronds sont épais et ovales plutôt que circulaires. Le centre est beaucoup plus épais que les bords.",
            "action": "Continuez à rouler avec une pression uniforme. Faites tourner le disque un quart de tour après chaque passage."
          },
          {
            "state": "Perfect",
            "description": "Même des cercles d'épaisseur uniforme de 4 à 5 mm. Surface lisse. Tenez jusqu'à la lumière — l'épaisseur est constante sur le disque.",
            "action": "Reposez-vous sur le parchemin 15 minutes avant la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Les ronds sont de papier-mince (moins de 3 mm) et ont développé des larmes.",
            "action": "Utilisez soigneusement — les pitas minces peuvent ne pas former de poche. Ils auront encore bon goût comme des pains plats."
          }
        ]
      },
      "feelCue": "Un pita rond bien roulé se sent important, mais souple — il flope doucement plutôt que de tenir raide. Si vous appuyez dessus, il ressort lentement, un signe le gluten est assez détendu pour souffler."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire au four",
      "inputs": [
        "pita_rounds"
      ],
      "outputState": "finished_pita",
      "instructions": "Travaillant en lots de 2 à 3 (toute fois que beaucoup s'adaptent à votre pierre de cuisson), utilisez un pelage ou l'arrière d'une plaque de cuisson plate pour glisser des rondelles de pita directement sur la pierre chaude. Cuire 3-4 minutes, pas plus. Vous verrez que le pita commence à gonfler de façon spectaculaire entre 60 et 90 secondes, et à gonfler dans un dôme. Une fois complètement gonflé et à peine doré pâle sur le dessus, retirer. Ne pas trop cuire — le but est un pita doux et souple, pas un pita croustillant. Enveloppez immédiatement dans une serviette propre pour garder doux.",
      "visualCue": {
        "primaryTarget": "Un dôme complètement gonflé — le pita a gonflé dans une forme de ballon complet, or pâle sans taches sombres. Lorsqu'il est retiré du four, il se dégonfle dans un rond doux avec une poche intérieure creuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pita a à peine gonflé — peut-être une petite bulle au centre mais pas un dôme complet. Doughy et pâle.",
            "action": "Faire cuire 60 à 90 secondes de plus. Vérifiez que la pierre est assez chaude — la température de surface devrait être de 260 C+."
          },
          {
            "state": "Perfect",
            "description": "Pleine inflation dans un dôme rond, or pâle. Se déflate dans un rond plat lorsqu'il est enlevé; l'intérieur est creux et vapeur-douce. Les larmes s'ouvrent facilement en deux couches.",
            "action": "Enveloppez immédiatement un chiffon pour le garder souple. Mieux mangé en 30 minutes."
          },
          {
            "state": "Overdone",
            "description": "Doré brun à foncé, la croûte est croustillante. Ne sera pas doux et souple. La poche a peut-être fermé.",
            "action": "Servir comme pain plat — fractionner manuellement si nécessaire. Moins de temps de cuisson pour le prochain lot."
          }
        ]
      },
      "feelCue": "Un pita juste cuit devrait se sentir comme un oreiller chaud et gonflé — léger et creux quand on le tape, doux comme un chiffon quand on le presse. La vapeur à l'intérieur est ce qui forme la poche."
    }
  ]
};
