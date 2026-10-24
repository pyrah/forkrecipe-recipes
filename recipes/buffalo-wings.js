export default {
  "repoId": "master_american_buffalo_wings_001",
  "parentRepoId": null,
  "slug": "buffalo-wings",
  "author": "ForkRecipe Kitchen",
  "title": "Ailes Buffalo",
  "description": "Des ailes de poulet frites, chacune laquées dans une sauce rouge brique brillante qui est simultanément du beurre fondu et de la sauce chaude à l'eau oculaire — le genre d'ailes qui nécessitent des serviettes en papier, de la bière froide et aucune excuse.",
  "cuisine": "Américain",
  "culture": "Buffalo, New York",
  "category": "proteins",
  "tags": [
    "américains",
    "poulet",
    "ailes",
    "épicé",
    "Sucre chaude"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 2947,
  "forks": 318,
  "contributors": 27,
  "license": "CC-BY-SA",
  "createdAt": "2024-05-10",
  "updatedAt": "2025-08-14",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 2,
    "bitter": 0,
    "umami": 3,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Ailes de poulet, divisées en plats et tambours",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "ailes entières",
        "morceaux de cuisse de poulet"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Poudre de cuisson (sans aluminium)",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Frank's RedHot sauce chaude originale",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "Sauce chaude en cristal",
        "Tabasco (utiliser moins)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre clarifié",
        "beurre végétal"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Poudre d'ail",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Bâtons de céleri et vinaigrette de fromage bleu (pour servir)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigrette de ranch",
        "bâtonnets de carottes"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sécheresse et saison",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "seasoned_wings",
      "instructions": "Les ailes sont complètement sèches avec des serviettes en papier — appuyez fermement sur toutes les surfaces. Dans un grand bol, jeter les ailes sèches avec du sel casher et de la poudre à pâte jusqu'à ce qu'elles soient uniformément enrobées. La poudre à pâte augmente le pH de surface, ce qui accélère le brunissement et attire l'humidité à la surface au fil du temps. Répartir en une seule couche sur un support de fil sur une plaque.",
      "visualCue": {
        "primaryTarget": "Les ailes sont complètement sèches et recouvertes d'un mince film blanc crayeux de poudre à pâte et de sel. Pas d'humidité sur la peau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau semble encore brillante et humide. La poudre de cuisson n'a pas été couchée uniformément — des taches de peau nue et humide.",
            "action": "Pat sécher de nouveau de manière plus agressive, puis lancer avec une autre légère poussière de poudre de cuisson. La peau humide va vapeur, pas croquante."
          },
          {
            "state": "Perfect",
            "description": "La peau est mate et crayeuse. Toutes les surfaces sont uniformément revêtues. Les ailes sont sèches et légèrement poussiéreuses.",
            "action": "Réfrigérer à découvert pendant 30 minutes ou jusqu'à 24 heures pour obtenir les meilleurs résultats."
          },
          {
            "state": "Overdone",
            "description": "Les ailes réfrigérantes ont été si longtemps que la poudre de cuisson a tiré l'humidité visiblement, et la peau semble presque cuir.",
            "action": "Aller à la friture. Les ailes surséchées peuvent en fait croustiller plus rapidement, les regarder soigneusement et réduire légèrement le temps de cuisson."
          }
        ]
      },
      "feelCue": "Prenez une aile et maintenez - la peau doit se sentir presque papier et légèrement rugueuse du revêtement en poudre de cuisson, jamais lissée ou collante."
    },
    {
      "nodeId": "step_2",
      "action": "Faire frire jusqu'à croustillant",
      "inputs": [
        "seasoned_wings"
      ],
      "outputState": "fried_wings",
      "instructions": "Chauffer l'huile dans une casserole ou une friteuse à 190°C. Faire frire les ailes en lots — ne pas fouler le pot — pendant 10 à 12 minutes, en tournant occasionnellement, jusqu'à ce qu'elles soient bien dorées et entièrement cuites. Entre les lots, laissez revenir l'huile à 190°C. Alternativement, faire cuire à 220°C sur une grille de 40 à 45 minutes, en retournant à mi-chemin.",
      "visualCue": {
        "primaryTarget": "Les ailes sont de couleur dorée-brun foncée partout, avec une peau tendue, blister, croustillante. Pas de taches molles ou pâles. Un thermomètre à lecture instantanée lit 74°C au point le plus épais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est d'or pâle ou blond, avec quelques taches douces. Le revêtement en poudre de cuisson est visible et blanc poudreux dans les endroits. La peau fléchit sans craquer.",
            "action": "Retourner à la friteuse ou au four. Les ailes pâles signifient que la peau n'a pas encore rendu assez de gras — elles ne deviendront pas croustillantes dans la sauce."
          },
          {
            "state": "Perfect",
            "description": "Deep, même brun doré avec une peau blister et taupe. La peau se brise quand elle est mordue. La graisse a rendu. La température interne est de 74°C ou plus.",
            "action": "Égoutter brièvement sur une grille, puis saucer immédiatement tout en étant encore chaud."
          },
          {
            "state": "Overdone",
            "description": "La peau est brun foncé à presque noire. Les ailes sentent un peu amer. L'extérieur est très dur.",
            "action": "Sauce généreusement — le mélange de sauce chaude au beurre hydrate l'extérieur. Ils peuvent encore être délicieux malgré la couleur."
          }
        ]
      },
      "feelCue": "Lorsque vous soulevez une aile de la friteuse, la peau doit sonner comme du cellophane grippant quand vous la pressez doucement — un rouille sec et crépitant. Si ça fait un son doux et humide, ils ont besoin de plus de temps."
    },
    {
      "nodeId": "step_3",
      "action": "Faire de la sauce au bison",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "buffalo_sauce",
      "instructions": "Dans une petite casserole à feu doux, faire fondre le beurre. Retirer du feu et fouetter dans la sauce chaude et la poudre d'ail jusqu'à ce qu'elle soit entièrement combinée et brillante. La sauce doit être chaude mais ne pas bouillir — bouillir brisera l'émulsion, laissant une sauce grasse et séparée. Le rapport est d'environ 2 parties sauce chaude à 1 partie beurre par volume.",
      "visualCue": {
        "primaryTarget": "La sauce est opaque, brillante et uniformément orange brique, sans piscine visible de beurre flottant à la surface. Il enrobe une cuillère dans un mince film.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est encore partiellement solide, avec des morceaux blancs visibles dans la sauce. La sauce semble striée, alternant orange et jaune.",
            "action": "fouetter vigoureusement et réchauffer brièvement à feu doux. Le beurre froid ne sera pas complètement incorporé."
          },
          {
            "state": "Perfect",
            "description": "Uniforme, brillant, sauce orange opaque. Le beurre et la sauce chaude sont entièrement émulsifiés. Une cuillère traînée à travers elle laisse un sentier propre qui se remplit lentement.",
            "action": "Jetez immédiatement les ailes alors que les deux sont chaudes."
          },
          {
            "state": "Overdone",
            "description": "La sauce est bouillante et séparée — sauce chaude rouge flottant sur des bassins jaunes de beurre clarifié. La sauce sent dur et vinaigre.",
            "action": "Retirer du feu, laisser refroidir légèrement, puis fouetter vigoureusement. Un jet de beurre froid peut aider à réémulsionner. Ne pas faire bouillir."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt dans la sauce — il devrait enrober votre doigt dans un mince film brillant qui s'accroche uniformément. S'il s'écoule comme de l'eau ou des piscines dans des gouttelettes de graisse, l'émulsion a besoin de plus de fouet."
    },
    {
      "nodeId": "step_4",
      "action": "Toss et glaçures",
      "inputs": [
        "fried_wings",
        "buffalo_sauce"
      ],
      "outputState": "glazed_wings",
      "instructions": "Transférer les ailes chaudes dans un grand bol. Verser la sauce tiède sur eux et jeter vigoureusement jusqu'à ce que chaque surface soit uniformément enrobée. Travaillez rapidement — la chaleur des ailes gardera le liquide de sauce et l'aidera à adhérer. Si la sauce commence à congeler, ajoutez une touche de sauce chaude et jetez à nouveau.",
      "visualCue": {
        "primaryTarget": "Chaque surface d'aile est laquée dans un revêtement brillant et uniforme de sauce rouge brique. Pas de taches sèches. Pas de sauce au fond du bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Certaines ailes sont partiellement recouvertes. Morceaux secs et pâles de peau visibles. La sauce est mise dans le bol plutôt que de s'accrocher.",
            "action": "Mélanger plus vigoureusement le bol pour redistribuer la sauce. Ajouter une cuillère à soupe plus de beurre fondu pour l'aider à adhérer si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Toutes les ailes sont uniformément revêtues de sauce rouge brique brillante. La peau croustillante est encore audible sous la glaçure. Les ailes sentent la Cayenne, le vinaigre et le beurre.",
            "action": "Assortir immédiatement et servir avec du céleri et du fromage bleu."
          },
          {
            "state": "Overdone",
            "description": "Les ailes sont assises dans la sauce et la peau croustillante s'est complètement adoucie. La sauce est absorbée dans l'extérieur.",
            "action": "Servir immédiatement — les ailes retardées sont un fait de la vie dans les restaurants. La prochaine fois, la sauce en petits lots seulement comme vous l'assiette."
          }
        ]
      },
      "feelCue": "Prenez une aile souillée – elle doit être légèrement lissée et tiède, avec un léger collant de la sauce. Lorsque vous mordez à travers la peau, vous devriez encore entendre une légère croûte sous la sauce glaçure."
    },
    {
      "nodeId": "step_5",
      "action": "Assiette et service",
      "inputs": [
        "glazed_wings",
        "ing_07"
      ],
      "outputState": "finished_buffalo_wings",
      "instructions": "Disposer les ailes vitrées sur un plateau. Servir immédiatement avec des bâtonnets de céleri et une généreuse piscine de vinaigrette de fromage bleu pour tremper. Ne pas couvrir — la vapeur va détruire toute croustillante restante. Ceux-ci sont mieux mangés dans les 5 minutes suivant le saucisson.",
      "visualCue": {
        "primaryTarget": "Les ailes brillent et sont profondément rouge-orange. La vapeur se lève doucement. Les bâtonnets de céleri et la vinaigrette au fromage bleu sont plaqués à côté.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les ailes sont assises à froid et la sauce s'est condensée dans un revêtement mat et terne. Céleri et pansement pas encore plaqué.",
            "action": "Si les ailes sont devenues froides, clignotez-les dans un four à 200°C pendant 3 minutes, puis ré-sautez avec de la sauce de bison chaude."
          },
          {
            "state": "Perfect",
            "description": "Les ailes sont chaudes, brillantes et fraîches à la vapeur. La vinaigrette au fromage bleu est fraîche contre la chaleur. La chambre sent la Cayenne et le beurre.",
            "action": "Mangez immédiatement. Les ailes de Buffalo sont un moment singulier."
          },
          {
            "state": "Overdone",
            "description": "Les ailes sont assises trop longtemps. La sauce est complètement trempée. La peau est douce. Ils sont encore savoureux, mais plus le plat.",
            "action": "Acceptez. Réchauffer dans un four chaud sans plus de sauce, puis rééchauffer brièvement pour le meilleur récupération."
          }
        ]
      },
      "feelCue": "La première aile que vous prenez devrait être presque trop chaude pour tenir confortablement, avec de la sauce qui se transfère immédiatement à vos doigts — c'est ainsi que vous savez que le timing est correct."
    }
  ]
};
