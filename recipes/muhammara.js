export default {
  "repoId": "master_syrian_muhammara_001",
  "parentRepoId": null,
  "slug": "muhammara",
  "author": "ForkRecipe Kitchen",
  "title": "Muhammara",
  "description": "La trempette rouge ardente d'Alep — poivrons rouges carbonisés mélangés à des noix, mélasses de grenade et poivre d'Alep dans une épaisse tartine rouge brique qui équilibre la chaleur avec douceur et tang.",
  "cuisine": "Syrien",
  "culture": "Alep",
  "category": "condiments",
  "tags": [
    "syrien",
    "Alep",
    "Cuivre rôti",
    "Noix",
    "grenade",
    "végétalien",
    "mezze"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "25 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 3,
    "bitter": 1,
    "umami": 2,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "poivrons rouges (ou poivrons rouges grillés en pot)",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "poivrons piquillo en pot"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Noix, grillées",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "pécans (légèrement sucrés)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Mélasses de grenade",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": [
        "mélasse de raisins acides",
        "concentré de tamarin (1:1)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Heat",
      "name": "Flacons de poivre d'Alep",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "flocons de chili ancho + pincer la cayenne",
        "gochugaru doux"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre de vin rouge"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "Coriandre terrestre"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Structure",
      "name": "Pain d'étalage (mince ou déchiré, pour épaississement)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "chapelure",
        "Crackers"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Poivrons de char",
      "inputs": [
        "ing_01"
      ],
      "outputState": "charred_peppers",
      "instructions": "Si vous utilisez des poivrons rouges frais: placez les poivrons entiers directement sur un brûleur à gaz ou sous un gril chaud, en tournant toutes les quelques minutes, jusqu'à ce que la peau soit uniformément noircie partout — cela prend 10-15 minutes. Le poivre devrait avoir l'air d'avoir été détruit: complètement noir, sifflement de vapeur des fissures, visiblement dégonflé. Transférer dans un bol, couvrir fermement d'enveloppe en plastique, et vapeur pendant 10 minutes. Éplucher toute la peau carbonisée, enlever les graines et les tiges et égoutter complètement. Si vous utilisez des poivrons torréfiés en pot, égouttez et tapez complètement au sec sur des serviettes en papier, l'excès de liquide rendra la trempe aqueuse.",
      "visualCue": {
        "primaryTarget": "Extérieur complètement noirci, corps dégonflé, poivrons à la vapeur dans un bol couvert. Après pelage : rouge vif, brillant, chair légèrement carbonisée sans peau noire restante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est irrégulière — certaines zones sont noires, d'autres sont encore rouges ou oranges. Le poivre est ferme et tient sa forme. La vapeur n'épluchera pas la peau épilée.",
            "action": "Retourner à la flamme pendant 3-4 minutes de plus par section sous-dosée. Chaque partie de la peau doit être carbonisée pour un pelage propre."
          },
          {
            "state": "Perfect",
            "description": "Entièrement noir, sifflant et effondré. Après la vapeur, la peau se détache dans de grandes feuilles, révélant une chair rouge douce et fumée.",
            "action": "Égoutter tout liquide du bol avant de peler, et laisser les poivrons pelés reposer dans une calandre pour les égoutter davantage. L'excès d'eau détruit la texture du plongeon."
          },
          {
            "state": "Overdone",
            "description": "Les poivrons ont brûlé jusqu'à la chair en plusieurs endroits. La chair sous les taches d'éclatement est grise ou sèche plutôt que rouge.",
            "action": "Utilisez les sections non endommagées et jetez les zones grises brûlées. Les bonnes sections seront encore fumées et douces."
          }
        ]
      },
      "feelCue": "Après la vapeur, glissez votre pouce sous la peau de l'extrémité de la tige — il devrait se détacher dans une seule feuille sans effort, comme enlevant un gant lâche. Si elle s'accroche et pleure, le poivre a besoin de plus de temps sous le tissu."
    },
    {
      "nodeId": "step_2",
      "action": "Noix de Toast",
      "inputs": [
        "ing_02"
      ],
      "outputState": "toasted_walnuts",
      "instructions": "Étaler les noix dans une poêle sèche à feu moyen. Secouer fréquemment la poêle pendant 5 à 7 minutes jusqu'à ce que les peaux soient sombres et que la chair de noix soit dorée et parfumée. Vous les entendrez craquer et sentir un arôme chaud et grillé avec une légère noisette. Ne laissez pas sans surveillance — les noix vont de grillées à amères très rapidement. Appliquer immédiatement sur une assiette et laisser refroidir 5 minutes avant d'utiliser.",
      "visualCue": {
        "primaryTarget": "Les noix sont un brun-brun profond chaud, avec une partie de la peau obscurcie et flocante. La cuisine sent intensément les noix grillées. Pas de surfaces grises et brutes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les noix sont encore bronzées avec leurs peaux brutes intactes. L'arôme est faible. Les noix crues ont une qualité amère et astringente qui dominera la trempette.",
            "action": "Continuez à griller. L'amertume des tanins de noix crus se mêle à la chaleur — les noix bien grillées sont plus riches et plus douces."
          },
          {
            "state": "Perfect",
            "description": "bronzage profond avec une peau foncée, éclatant et crépitant, sentant des noix chaudes et beurrées. Cruses faciles et odeurs grillées jusqu'au bout.",
            "action": "Retirer immédiatement dans une assiette et laisser refroidir avant d'ajouter au mélangeur — les écrous chauds vaporiseront la trempette et modifieront la texture."
          },
          {
            "state": "Overdone",
            "description": "Les peaux sont noires et la viande de noix est foncée à brun foncé. L'odeur est passée du beurre à l'acre.",
            "action": "Jeter — les noix brûlées rendent la trempe désagréablement amère et l'amertume ne peut être équilibrée. Faire cuire un lot frais à feu doux."
          }
        ]
      },
      "feelCue": "Briser un morceau de noix grillé en deux et sentir la surface coupée — il doit sentir comme le beurre chaud, riche et le caramel, pas l'amidon cru ou le tanin amer. Si ça sent bon, c'est prêt."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "charred_peppers",
        "toasted_walnuts",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "blended_muhammara",
      "instructions": "Mélanger les poivrons pelés torréfiés, les noix grillées, la mélasse de grenade, les flocons de poivre d'Alep, le jus de citron, l'huile d'olive, le sel, le cumin et le pain (torn ou émietté) dans un robot alimentaire. L'impulsion plutôt que le mélange en continu — muhammara doit avoir de la texture, ne pas être une purée lisse. Pulse 8-10 fois pendant les rafales d'une seconde, grattant les côtés entre les impulsions. Le pain épaissit la trempette et lui donne le corps. Bouche: la séquence des saveurs doit être torréfié douceur, puis chauffer, puis amer tang de la grenade et citron, puis noix de terre.",
      "visualCue": {
        "primaryTarget": "Un épais, rouge brique tartiné avec une texture visible de noix et de poivre. Pas lisse comme l'hummus — voluptueux mais cohésif, tenant une forme rugueuse lorsqu'il est écopé d'une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La trempette est trop épaisse — de gros morceaux de noix et des morceaux de poivre qui ne tiennent pas ensemble. Le pain n'a pas été incorporé et est assis dans des taillis secs.",
            "action": "Pulse 4-5 fois de plus, assurant que la lame atteint tous les ingrédients. Le pain doit être complètement incorporé pour lier la trempette."
          },
          {
            "state": "Perfect",
            "description": "Épais, texturé et rouge brique. Cohérente lorsqu'elle est écorcée, elle tient sa forme sur une cuillère sans courir. Vous pouvez voir des morceaux de noix et de la chair de poivre mais ils sont intégrés, pas séparés.",
            "action": "Transférer dans un bol, reposer 5 minutes et ajuster l'assaisonnement avant de terminer."
          },
          {
            "state": "Overdone",
            "description": "Procédé à une purée lisse et homogène — la texture est indissociable de l'hummus. Le caractère brut distinctif de muhammara est perdu.",
            "action": "Rien ne s'inverse. Incorporer à la main des noix grillées grossièrement hachées pour restaurer un contraste de texture."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère et laissez - la retomber dans le bol; elle devrait tomber dans une corde épaisse et lente, et non dans une bruine liquide ou dans un monticule ferme. La consistance est entre le beurre d'arachide et la salsa fraîche."
    },
    {
      "nodeId": "step_4",
      "action": "Finition et plaque",
      "inputs": [
        "blended_muhammara",
        "ing_06"
      ],
      "outputState": "finished_muhammara",
      "instructions": "Transférer le muhammara dans un grand bol de service peu profond. Utilisez l'arrière d'une cuillère pour la répandre dans un monticule peu profond avec un léger puits au centre. Arrosez une quantité généreuse d'huile d'olive extra vierge dans le puits et dispersez une pincée de flocons de poivre d'Alep sur la surface. Reposez-vous 5-10 minutes avant de servir — les saveurs s'aiguisent et s'intègrent comme il est assis. Muhammara améliore considérablement la nuit dans le réfrigérateur; il peut être fait avant et la chaleur fleurit complètement le lendemain.",
      "visualCue": {
        "primaryTarget": "Un grand bol de trempette rouge brique avec une piscine d'huile d'olive au centre et des flocons d'Alep rouge vif éparpillés à la surface. La surface brille sans être mouillée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La mélasse de la grenade n'a pas imprégné les noix, la chaleur du poivre d'Alep est brute et nette plutôt que chaude et arrondie.",
            "action": "Reposez-vous au moins 10 minutes. Si vous servez immédiatement, ajoutez une petite bruine supplémentaire de mélasse de grenade au bol fini – elle s'intègre plus rapidement à la surface."
          },
          {
            "state": "Perfect",
            "description": "Brick-rouge, brillant, complexe. La chaleur est chaude et s'attarde, pas tranchante; la grenade donne une note aigre fruitée; la noix est riche et terreuse sous tout.",
            "action": "Servir avec du pain plat chaud, des légumes crus, ou comme une sauce à côté d'agneau grillé ou de poulet."
          },
          {
            "state": "Overdone",
            "description": "Faite jour après jour et assise réfrigérée sans couverture — la surface a séché à une peau foncée et fissurée et l'huile d'olive s'est solidifiée.",
            "action": "Gratter et jeter la couche de surface séchée, porter à la température ambiante, bien remuer, et ajouter une bruine fraîche d'huile. La trempette est bien en dessous."
          }
        ]
      },
      "feelCue": "Goûtez muhammara à deux moments : immédiatement après mélange, et après 10 minutes de repos. La différence est dramatique — la version initiale est brute et dissonante; la version reposée est harmonieuse, avec les mélasses de grenades tissant à travers chaque élément. Toujours reposer."
    }
  ]
};
