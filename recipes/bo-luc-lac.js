export default {
  "repoId": "master_vietnamese_bo-luc-lac_001",
  "parentRepoId": null,
  "slug": "bo-luc-lac",
  "author": "ForkRecipe Kitchen",
  "title": "Bò Lúc Lêc (Boeuf en forme)",
  "description": "Saigon a sauté des cubes de bœuf tendres marinés dans la sauce aux huîtres et l'ail, cousues sur un wok chaud et hurlant jusqu'à ce que caramélisé et servi sur le cresson et la tomate tranché avec une sauce à tremper au sel de citron.",
  "cuisine": "Vietnamiens",
  "culture": "Saigon",
  "category": "proteins",
  "tags": [
    "vietnamese",
    "boeuf",
    "sauté",
    "huître-sauce",
    "Vite",
    "saigon"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "2 hr 20 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Linge de bœuf ou filet, coupé en cubes de 3 cm",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "ribeye (légèrement plus gras, également bon)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "sauce à l'huître",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "sauce hoisine"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sauce de soja (légère)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brun"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Girofles à l'ail, hachées",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre (cacahuète ou canola)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Jus de lime frais, pour tremper la sauce",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel grossier, pour tremper la sauce",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "Sel de mer flocé"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Poivre noir fraichement craqué, pour tremper la sauce",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "poivre blanc"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Cresson, lavé et séché",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "rouille",
        "bébé épinards"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Tomates ripées, coupées en quartiers",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Allium",
      "name": "Oignon jaune, coupé en quartiers de 2 cm",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "Échalotes, coupées en deux"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "marinated_beef",
      "instructions": "Dans un bol, mélanger la sauce huître, la sauce soja, le sucre et l'ail haché. Incorporer jusqu'à dissolution du sucre. Ajouter les cubes de bœuf et mélanger soigneusement, en s'assurant que chaque surface est enduite. Couvrir et réfrigérer pendant au moins 2 heures; la nuit est idéale mais pas essentielle. La sauce à l'huître fait double devoir ici : ses glutamates commencent à assaisonner profondément la viande, et sa teneur en sucre sera ce qui caramélise sur la surface du wok pour donner au bœuf sa croûte d'acajou. Faites sécher les cubes de boeuf avec des serviettes en papier avant de les cuisiner.",
      "visualCue": {
        "primaryTarget": "Les cubes de boeuf sont uniformément recouverts d'une marinade brun foncé brillant. Après 2 heures, la surface de chaque cube aura pris un aspect légèrement plus foncé, plus concentré lorsque la marinade pénètre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La marinade a été appliquée il y a quelques minutes: la surface du bœuf est mince mais ne pénètre pas. La viande a l'air crue sous la pellicule de sauce.",
            "action": "Réfrigérer pendant au moins 2 heures. Le temps de marination ne peut pas être précipité — la pénétration de la saveur est ce qui sépare bien fait bò lúc lêc d'un simple mélange de bœuf."
          },
          {
            "state": "Perfect",
            "description": "Après 2 heures, le boeuf a une surface sombre et brillante. Lorsqu'un cube est coupé ouvert, les 2 premiers mm sont légèrement teintés par le sel et la pénétration du sucre de la marinade. Les cubes sentent profondément savoureux.",
            "action": "Retirer du réfrigérateur 30 minutes avant la cuisson pour amener à la température ambiante. Faites sécher la surface avec des serviettes en papier juste avant d'entrer dans le wok."
          },
          {
            "state": "Overdone",
            "description": "Le boeuf a mariné pendant plus de 24 heures dans une marinade à sel élevé et la texture a commencé à se dégrader — la surface est légèrement musquée et la viande sent fortement le soja fermenté.",
            "action": "Cuire immédiatement. La saveur sera intense et la texture légèrement douce, mais toujours comestible. Gardez les temps de marinade moins de 18 heures avant."
          }
        ]
      },
      "feelCue": "Après avoir mariné et patté au sec, ramassez un cube et sentez sa surface avec un bout de doigt – il devrait se sentir légèrement collant, comme un adhésif à la note collante, mais pas mouillé. C'est le sucre de marinade réduit qui forme la croûte dans le wok."
    },
    {
      "nodeId": "step_2",
      "action": "Sear",
      "inputs": [
        "marinated_beef",
        "ing_06",
        "ing_12"
      ],
      "outputState": "seared_beef",
      "instructions": "Chauffer un wok ou une grande poêle en fonte sur la plus haute chaleur possible pendant au moins 3 minutes jusqu'à ce qu'il fume visiblement. Ajouter l'huile et le tourbillon — il devrait immédiatement commencer à fumer. Ajouter les cubes de boeuf en une seule couche sans encombrer — faire cuire en deux lots si le wok n'est pas assez grand. Ne touchez pas le boeuf pendant 60 à 90 secondes. Qu'il s'enfile jusqu'à ce qu'une croûte d'acajou profonde se forme sur le fond. Puis — c'est le lúc l.c. (shaking) — saisissez la poignée de la poêle et secouez le wok en mouvements latéraux rapides et tranchants pour faire tomber les cubes sur une face non-sourcée. Sear pendant 45 à 60 secondes. Ajouter les coins d'oignon dans les 30 dernières secondes et mélanger brièvement tout. La durée totale de cuisson ne doit pas dépasser 3 minutes par lot pour le boeuf moyen à moyen.",
      "visualCue": {
        "primaryTarget": "cubes de boeuf avec une croûte acajou-caramel profonde sur au moins deux faces, avec le centre encore rose-rose quand un cube est pressé. La surface du wok devrait être de fumer et le boeuf devrait être étourdissant continuellement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande de boeuf a été ajoutée à une poêle qui n'était pas assez chaude — elle mijote dans ses propres jus plutôt que de semer. La surface est grise plutôt que dorée et les cubes sont à la vapeur plutôt que crépitants.",
            "action": "Verser n'importe quel liquide accumulé, augmenter la chaleur au maximum et laisser le liquide restant s'évaporer avant la formation de la couche. Séparez les cubes pour que chacun ait un contact direct avec la poêle."
          },
          {
            "state": "Perfect",
            "description": "Une couture rapide et violente : le bœuf est profondément doré sur deux ou trois faces aux bords caramélisés, légèrement carbonisés, et l'intérieur est encore rose et juteux. Le wok sent le soja caramélisé et la graisse de boeuf. Le mouvement tremblant a tourné les cubes pour attraper deux visages ou plus sur la surface chaude.",
            "action": "Transférer immédiatement à la cresson d'eau et à la tomate — le boeuf continue de cuire à partir de la chaleur de report. Ne pas empiler dans un bol ou il va chauffer et tourner gris."
          },
          {
            "state": "Overdone",
            "description": "Le bœuf a cuit trop longtemps ou dans une poêle trop bondée — les cubes sont uniformément brun-gris tout au long du parcours et les jus ont évaporé pour laisser une texture sèche et serrée.",
            "action": "Toujours comestible mais la tendresse est partie. Servir avec une sauce à tremper supplémentaire pour ajouter l'humidité. Assurez-vous que le wok est assez chaud et que les lots sont assez petits pour semer plutôt que de braser."
          }
        ]
      },
      "feelCue": "Le mouvement agité devrait sonner comme des applaudissements — une fissure rapide et staccato, tandis que les cubes s'écroulent et recontactent le métal chaud au tabac. Si ça sonne comme un étourdissement lent, le wok n'est pas assez chaud. Appuyez légèrement sur un cube avec une cuillère après la mise en mer — il devrait donner avec un peu de résistance et ressorter légèrement. Ce printemps est un centre moyen-rare."
    },
    {
      "nodeId": "step_3",
      "action": "Saison",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "dipping_sauce",
      "instructions": "Dans un petit plat, mélanger le jus de lime frais, le sel grossier et le poivre noir fissuré. Remuer brièvement. Il s'agit d'un des condiments vietnamiens les plus anciens et les plus simples. Goûtez-le: la chaux doit être vive et aigre, le sel vers l'avant, et le poivre noir doit piquer l'arrière de la gorge avec une chaleur sèche. Ajuster avec plus de chaux ou de sel au besoin. Chaque diner trempe le cube de bœuf chaud dans la sauce immédiatement après avoir mangé, de sorte que le contraste entre l'extérieur caramélisé chaud du boeuf et la sauce fraîche, brillante et poivrée est immédiat.",
      "visualCue": {
        "primaryTarget": "Une petite piscine de jus de lime jaune pâle avec des cristaux de sel visibles et des flocons de poivre noir fissurés, simples et tranchants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce n'est pas assaisonnée ou n'a que du jus de citron vert sans sel.",
            "action": "Ajouter le sel et le poivre craqué et remuer pour dissoudre. Le sel doit se dissoudre dans le jus de lime pour créer une sauce intégrée plutôt que des éléments séparés."
          },
          {
            "state": "Perfect",
            "description": "Lumineux, aigre, salé et poivreux. Un plongeon du doigt devrait produire une réponse salivaire presque immédiatement. Il devrait avoir un goût assez bon pour manger par lui-même, mais clairement conçu pour travailler comme une feuille pour le boeuf riche et gras.",
            "action": "Servir dans des petits plats de trempage individuels à côté du bœuf plaqué. Faites - la fraiche — elle ne s'améliore pas avec la chaux qui s'oxyde."
          },
          {
            "state": "Overdone",
            "description": "Le poivre noir a été broyé à une poudre fine plutôt que fissuré et a transformé la sauce uniformément gris foncé et poivré en bouche.",
            "action": "Diluer avec plus de jus de lime. Utilisez du poivre grossièrement craqué la prochaine fois — le contraste textural du poivre contre la chaux fraîche fait partie de l'expérience."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt et touchez-le à l'extrémité de votre langue — la chaux devrait vous faire saliver sur les côtés de votre bouche, le sel devrait s'enregistrer instantanément au centre, et le poivre noir devrait arriver 2 secondes plus tard comme un picotement sec à l'arrière. Tous les trois en séquence signifie que la sauce est prête."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "seared_beef",
        "dipping_sauce",
        "ing_10",
        "ing_11"
      ],
      "outputState": "finished_bo_luc_lac",
      "instructions": "Disposer le cresson d'eau et les quartiers de tomates tranchés sur une grande assiette ou des assiettes individuelles. Transférer immédiatement la viande de bœuf et les morceaux d'oignon flétris directement sur le dessus de la cresson — la chaleur de la viande de boeuf va légèrement flétrir la cresson, libérant son parfum poivré. Déposer la sauce à tremper au sel de citron sur le côté. Servir immédiatement. La présentation classique de Saigon-restaurant comprend également un œuf frit sur le dessus, ou un côté de riz jasmin uni. Le cresson n'est pas seulement une garniture — il est mangé à côté du bœuf, son amertume fraîche coupant à travers la richesse de la viande caramélisée.",
      "visualCue": {
        "primaryTarget": "Des cubes de boeuf croustillés à l'acajou ont grimpé sur un lit de cresson vert vif et de quartiers de tomates rouges, de la vapeur montant du boeuf, les jus chauds commencent tout juste à flétrir les feuilles en dessous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le boeuf a été plaqué sur une cresse d'eau froide qui a été assise dehors — aucun flétrissement ne se produit et la présentation semble froide et séparée.",
            "action": "Assurez-vous que la cresson passe sur l'assiette juste avant le transfert du boeuf afin que l'échange de chaleur se fasse immédiatement."
          },
          {
            "state": "Perfect",
            "description": "La couche inférieure de cresson vient de commencer à se flétrir légèrement sous le bœuf chaud, libérant un léger arôme poivré. Les tomates fournissent un contrepoint acide frais. La surface du boeuf est encore en vapeur et la croûte est intacte.",
            "action": "Apportez immédiatement à la table avec la sauce à tremper. La fenêtre pour manger ce plat à son apogée est d'environ 4 minutes — après que le bœuf se refroidit, la croûte s'adoucit, et la cresson devient boiteuse."
          },
          {
            "state": "Overdone",
            "description": "Le boeuf est resté assis sur la cresson pendant plusieurs minutes — la croûte s'est adoucie de la vapeur et la cresson est complètement effondrée et arrosée des jus de viande.",
            "action": "Les saveurs sont encore bonnes mais les contrastes texturaux sont partis. La prochaine fois, faire cuire le bœuf à la commande et à l'assiette immédiatement."
          }
        ]
      },
      "feelCue": "Mangez le premier morceau de bœuf alors que la vapeur est encore visible — l'extérieur devrait se fissurer légèrement entre les dents, puis céder à un intérieur juteux et tendre. Si l'extérieur se compresse simplement sans une note croustillante, la couture n'était pas assez chaude ou le bœuf s'est assis trop longtemps après le placage."
    }
  ]
};
