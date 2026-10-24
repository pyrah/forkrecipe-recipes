export default {
  "repoId": "master_chinese_bok_choy_oyster_sauce_001",
  "parentRepoId": null,
  "slug": "bok-choy-oyster-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Baby Bok Choy avec sauce à l'huile d'ail",
  "description": "Baby bok choy plongé dans l'eau bouillante salée pendant quatre-vingt-dix secondes émerge une nuance de vert si vif qu'il semble peint, encore légèrement ferme à la tige et soyeux-tendeur à la feuille, disposé dans un éventail et couvert d'une bruine dorée à l'ail et à l'oeuf qui sent la mer et l'allium rôti. Un plat qui prend moins de dix minutes de la cuisinière à la table et ne vous demande rien sauf le timing et la chaleur.",
  "cuisine": "Chinois",
  "culture": "Cantonais",
  "category": "vegetables",
  "tags": [
    "légumes",
    "cantonais",
    "Bok-choy",
    "huître-sauce",
    "Ail",
    "Vite",
    "sain",
    "nuit"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Baby bok choy, moitié dans le sens de la longueur",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "gai lan (brocoli chinois)",
        "Les"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "sauce à l'huître",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce végétarienne aux huîtres (à base de champignons)",
        "sauce hoisine"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Ail, tranché finement",
      "ratioValue": 4,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": [
        "huile de sésame légère"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "sauce de soja légère",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Eau chaude ou matière légère",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile de sésame (finissage)",
      "ratioValue": 5,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanchir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "blanched_bok_choy",
      "instructions": "Portez un grand pot d'eau généreusement salée à un ébullition vigoureux — il devrait avoir un goût aussi salé que la soupe légère. Le volume de l'eau est important : trop peu d'eau va chuter de façon spectaculaire à la température lorsque le bok choy est ajouté, ce qui se traduit par la vapeur plutôt que par la fonte et la perte de la couleur verte vive. Le bok choy à moitié doit aller dans l'eau bouillante agressivement. Abaissez chaque moitié soigneusement dans l'eau coupée vers le bas, en utilisant des pinces. Blanchiment pendant exactement 75 à 90 secondes — les tiges ont besoin de toute la durée, et les feuilles cuire dans la chaleur résiduelle. Soulevez avec des pinces et transférez immédiatement sur une plaque, coupez-la vers le haut, pour empêcher la surface plane coupée de s'asseoir dans n'importe quelle eau mise en commun. Ne pas courir sous l'eau froide à moins que vous mettiez ce plat plus de 10 minutes à l'avance — la chaleur résiduelle de l'intérieur des tiges finira doucement les feuilles, et le rinçage avec l'eau froide lavera la douceur naturelle de la surface coupée. Disposer les moitiés sur une assiette de service dans un ventilateur ou des rangées, toutes orientées dans le même sens.",
      "visualCue": {
        "primaryTarget": "Bok choy moitiés qui sont vives, presque vert néon sur les feuilles et la tige, avec la base blanche maintenant légèrement translucide aux bords extérieurs. Les feuilles doivent être flétries mais garder leur forme — pas s'effondrer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les feuilles sont ternes, vert foncé cru et la tige est encore complètement blanche et dure. La surface coupée ne montre aucune translucidité.",
            "action": "Retournez à l'eau bouillante pendant 30 secondes. La couleur passe de vert foncé brut à vert vif vif se produit soudainement — regardez - la."
          },
          {
            "state": "Perfect",
            "description": "Un vert clair et électrique, plus vif que cru. La tige est semi-translucide au bord même, donnant quand pressé avec un bout de doigt mais toujours ferme au cœur. Les feuilles sont soyeuses et drapées.",
            "action": "Assortir immédiatement et faire la sauce pendant que le bok choy est encore chaud."
          },
          {
            "state": "Overdone",
            "description": "Drabe olive et doux, les feuilles s'effondrent à plat et les tiges sont complètement tendres. La couleur est tombée du vert vif au vert de l'armée.",
            "action": "Assiette et sauce rapidement — la couleur ne peut pas être récupérée mais la saveur est encore bonne."
          }
        ]
      },
      "feelCue": "Lorsque vous appuyez sur le côté plat coupé d'une tige avec un ongle, il doit céder avec une pression douce au bord extérieur mais résister au centre. Ce contraste — tendre à la peau, vivant au cœur — est la texture que vous conservez."
    },
    {
      "nodeId": "step_2",
      "action": "Infuser",
      "inputs": [
        "ing_04",
        "ing_03"
      ],
      "outputState": "garlic_oil",
      "instructions": "Pendant que le bok choy est plaqué, ajouter l'huile neutre dans une petite casserole ou wok à feu moyen. Ajouter l'ail tranché et laisser cuire lentement, en remuant occasionnellement, pendant 2 à 3 minutes. Vous n'essayez pas de brunir l'ail dur — le but est parfumé, tranches adoucies qui sont dorées aux bords mais or pâle dans l'ensemble, et qui ont libéré leur arôme piquant dans l'huile. L'ail entièrement doré aura un goût amer dans la sauce finie. L'huile sentira intensément l'ail doux et moelleux rôti en 2 minutes. Veillez attentivement : les fines tranches vont de pâle à dorée pour brûler en moins de 60 secondes une fois le brunissement commencé. Dès que la majorité des tranches sont d'or pâle avec des bords de bronzage doré, retirer de la chaleur — la chaleur résiduelle dans la poêle continuera à les cuire pendant encore 30 secondes.",
      "visualCue": {
        "primaryTarget": "tranches d'ail en or pâle flottant dans de l'huile claire avec une légère teinte dorée, parfumée et douce. Pas de bords brun foncé visibles sur la majorité des tranches.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est toujours blanc cru et ferme — l'huile sent poncent et aiguisé plutôt que doux et moelleux. L'ail n'a pas encore infusé l'huile.",
            "action": "Continuer la cuisson à feu moyen-doux pendant 60 à 90 secondes, en regardant attentivement."
          },
          {
            "state": "Perfect",
            "description": "Tranches pâles à dorées, légèrement adoucies et commençant à friser aux bords. L'huile est devenue légèrement jaune et sent l'ail torréfié doux et moelleux, non aiguisé ni piquant.",
            "action": "Ajouter immédiatement la sauce aux huîtres, le soja et l'eau pour arrêter la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Les tranches d'ail sont brun moyen à brun foncé et commencent à devenir amères. L'huile sent aiguisée plutôt que sucrée.",
            "action": "L'ail est borderline — si juste doré-brun procéder, car il ajoutera une saveur légèrement plus nut. S'il est brun foncé ou brûlé, jeter et recommencer."
          }
        ]
      },
      "feelCue": "Penchez-vous au-dessus de la poêle à la marque de 2 minutes et respirez — l'huile doit sentir doux, presque caramel, avec la note d'ail cru vif complètement disparu. Ce passage de vif à doux est le signal que l'ail a bien infusé."
    },
    {
      "nodeId": "step_3",
      "action": "Glacer",
      "inputs": [
        "garlic_oil",
        "ing_02",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_bok_choy",
      "instructions": "Ajouter la sauce huître, la sauce soya légère et l'eau chaude ou le bouillon dans la poêle avec l'huile d'ail. Le liquide étourdira agressivement contre l'huile chaude — reculez. Incorporer rapidement pour se combiner dans une sauce lisse et brillante. Laissez la buller pendant 15 à 20 secondes jusqu'à ce que l'eau s'évapore partiellement et que la sauce s'épaississe légèrement à une consistance sirupeuse. Retirer du feu et ajouter l'huile de sésame. Remuer une fois. Verser la totalité du contenu de la poêle — huile, tranches d'ail et sauce — directement sur le bok choy. La sauce doit se mettre autour de la base des tiges et enrober la surface coupée. Les tranches d'ail se déposent sur les feuilles. La chaleur de la sauce réchauffera le bok choy déjà cuit sans le faire cuire plus loin. Servir immédiatement — ce plat ne tient pas et doit être mangé dans les 3 minutes suivant le saucisson, tandis que le contraste entre le bok choy croustillant et la sauce tiède brillant est toujours vivant.",
      "visualCue": {
        "primaryTarget": "Assiette vive : choy au bok vert électrique aspiré, drapé dans une sauce dorée ambrée brillante avec des tranches d'ail doré pâle reposant sur les feuilles. La sauce doit être baignée visiblement autour de la base.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est trop fine — elle s'écoule immédiatement du bok choy et se jette au bord de la plaque. Pas assez de sauce aux huîtres ou l'eau n'a pas été réduite.",
            "action": "Verser la sauce dans la poêle et réduire encore 30 secondes à feu moyen, puis réappliquer."
          },
          {
            "state": "Perfect",
            "description": "La sauce couvre le bok choy uniformément dans une couche ambre brillante qui se déplace lentement lorsque la plaque est inclinée. Les tranches d'ail sont visibles et dorées. L'assiette sent intensément la sauce aux huîtres, l'ail et le sésame.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La sauce est trop épaisse et sirupeuse — elle est assise dans un monticule raide et collant sur le bok choy plutôt que de couler autour des feuilles.",
            "action": "Arroser avec une petite bruine d'eau chaude et remuer doucement pour se détendre."
          }
        ]
      },
      "feelCue": "Versez la sauce dans un flux lent et délibéré de hauteur — vous devriez l'entendre siffler et s'étourdir en frappant le chaud bok choy. Ce son est la sauce se fixant contre la surface végétale, commençant à s'accrocher. S'il n'y a pas de son, le bok choy a trop refroidi."
    }
  ]
};
