export default {
  "repoId": "master_japanese_miso_black_cod_001",
  "parentRepoId": null,
  "slug": "miso-black-cod",
  "author": "ForkRecipe Kitchen",
  "title": "Miso-Mariné Cod Noir (Gindara Saikyo Yaki)",
  "description": "Filets de morue noire enterrés dans le miso blanc et le mirin pendant trois jours, puis grillés jusqu'à ce que le miso caramélise en une laque d'umami doux amer et le poisson sous est soyeux, riche, et se dissout presque au contact de la langue.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "seafood",
  "tags": [
    "Japonais",
    "morue noire",
    "miso",
    "spirin",
    "grillés",
    "Saikyo",
    "umami",
    "Nobu-style"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "3 days 20 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filets de morues noires (poissons sablés), avec peau, épingles enlevées",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "Filets de saumon (réduire la marination à 1 jour)",
        "Bar chilien"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Saikyo (Kyoto blanc) miso",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "tout shiro miso blanc"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Mirin (hon mirin préféré)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Mâcher",
      "ratioValue": 45,
      "defaultUnit": "g",
      "substitutions": [
        "sherry sec"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Garnish",
      "name": "Gingembre (gari), tranché finement",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "gingembre frais, très finement tranché"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Zeste de Yuzu ou zeste de citron",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "miso_marinade",
      "instructions": "Mélanger le miso blanc, le mirin, le saké et le sucre dans une petite casserole à feu moyen-doux. Incorporer jusqu'à ce que le sucre se dissout et que le mélange soit doux et légèrement chaud (ne pas faire bouillir). Retirer du feu et refroidir complètement à la température ambiante. La marinade doit être épaisse et extensible, légèrement plus épaisse que la crème lourde.",
      "visualCue": {
        "primaryTarget": "Une marinade beige pâle et crémeuse qui coule lentement d'une cuillère en feuilles épaisses. Des odeurs de vin de riz sucré, de soja fermenté et d'alcool.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sucre non complètement dissous — granulés visibles au fond.",
            "action": "Incorporer à feu doux jusqu'à ce qu'il soit complètement lisse."
          },
          {
            "state": "Perfect",
            "description": "Uniforme, lisse, marinade brillante. Pas de grain. Odeur sucrée avec une base en miso propre. Du calme.",
            "action": "Poisson et marinade."
          },
          {
            "state": "Overdone",
            "description": "La marinade a été cuite trop chaude et réduite de façon significative — plus épaisse et plus foncée que prévu.",
            "action": "Ajoutez une touche de saké ou de mirin à la bonne consistance."
          }
        ]
      },
      "feelCue": "La marinade doit se sentir comme du yogourt lisse sur les doigts — épais, uniforme et légèrement collant du miso et du mirin. Si elle est aqueuse, réduisez légèrement."
    },
    {
      "nodeId": "step_2",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "miso_marinade"
      ],
      "outputState": "marinated_black_cod",
      "instructions": "Patientez les filets de morue complètement secs avec des serviettes en papier. Enrober généreusement le côté chair de la marinade, la presser dans la surface du poisson. Une fine couche du côté de la peau est fine. Placer dans un sac ou un contenant à fermeture éclair, en veillant à ce que chaque pièce soit bien recouverte. Réfrigérer pendant 2 à 3 jours (72 heures pour l'effet complet). Plus la marination est longue, plus la pénétration de la saveur est profonde et plus la laque miso est spectaculaire pendant la cuisson.",
      "visualCue": {
        "primaryTarget": "Après 3 jours, le poisson est profondément teinté, la chair sous le miso semble légèrement translucide et beige pâle où la marinade a pénétré. Le revêtement miso a adhéré fermement et semble plus sombre que lorsqu'il est appliqué.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Marié moins de 24 heures. L'arôme est en surface seulement. L'intérieur du poisson aura un goût de morue plate plutôt que de miso.",
            "action": "Le plat fonctionne à 24 heures mais est transformatif à 72. Les jours supplémentaires en valent la peine."
          },
          {
            "state": "Perfect",
            "description": "Après 72 heures, le miso a légèrement « guéri » la surface du poisson — il semble translucide où il rencontre la chair. Le revêtement s'est obscurci et a adhéré fermement. Le poisson est légèrement plus ferme que le poisson cru.",
            "action": "Grattez l'excès de marinade avant de griller."
          },
          {
            "state": "Overdone",
            "description": "Marié au-delà de 5 jours. Le poisson est devenu sur-curré et la texture peut être farineuse.",
            "action": "Cuire, quelle qu'en soit la forme — ce sera encore exceptionnel. Réduire le temps de marination futur."
          }
        ]
      },
      "feelCue": "Après 72 heures, le poisson se sent légèrement plus ferme et plus dense que lorsque vous avez commencé — les enzymes miso ont légèrement restructuré les protéines de surface, pré-assèchement de la chair jusqu'au bout."
    },
    {
      "nodeId": "step_3",
      "action": "Broil",
      "inputs": [
        "marinated_black_cod"
      ],
      "outputState": "broiled_black_cod",
      "instructions": "Enlevez les filets de la marinade et grattez doucement l'excédent avec une cuillère ou vos doigts — ne rincer pas. L'excès de miso va brûler, pas caraméliser. Placer le côté peau sur une plaque de cuisson légèrement huilée. Faire griller de 15 à 18 cm de l'élément pendant 8 à 12 minutes, en regardant constamment. Le miso doit caraméliser à une mahoganie d'or profonde — pas brûlé, pas pâle.",
      "visualCue": {
        "primaryTarget": "La glaçure miso a caramélisé à une acajou profonde, cloquée, inégale — plus sombre aux bords fins du filet, plus légère à la partie la plus épaisse. Le poisson est opaque et ferme, mais il brille toujours.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Miso glaçure est encore pâle et humide. Il n'a pas caramélisé. Le poisson peut encore être cru au centre.",
            "action": "Continuez à faire griller. Regardez toutes les 30 secondes — la transition de parfait à surdosé est rapide."
          },
          {
            "state": "Perfect",
            "description": "Caramélisation en acajou profonde, légèrement cloquée et plus foncée aux bords. La glaçure semble sèche et légèrement carbonisée aux points très fins. Les poissons flocent facilement et la chair est opaque partout.",
            "action": "Retirer immédiatement et servir."
          },
          {
            "state": "Overdone",
            "description": "Miso est noir et brûlé. Une odeur amère et acride. Un char très sombre est apparu dans tout le filet.",
            "action": "Gratter les morceaux les plus brûlés avec une cuillère et servir la chair en dessous — la morue noire est si riche que le poisson sous-jacent est probablement encore excellent."
          }
        ]
      },
      "feelCue": "Appuyez sur la partie la plus épaisse du filet avec un doigt — il devrait céder avec presque aucune résistance, comme presser l'avocat mûr. S'il ressort fermement, il lui faut encore 2 minutes."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir",
      "inputs": [
        "broiled_black_cod",
        "ing_06",
        "ing_07"
      ],
      "outputState": "finished_miso_black_cod",
      "instructions": "Transférer soigneusement chaque filet — ils sont extrêmement délicats — dans une assiette chaude à l'aide d'une large spatule. Ajouter un petit tas de gingembre mariné à côté du poisson. Râper une petite quantité de yuzu ou zeste de citron sur le dessus. Servir immédiatement avec du riz cuit à la vapeur et une simple salade de vinaigre de concombre pour couper la richesse.",
      "visualCue": {
        "primaryTarget": "Filet brillant caramélisé foncé, peau croustillante, avec le rose roussâtre de gingembre mariné et un léger confetti jaune de yuzu zest contre l'acajou.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le filet s'est effondré pendant le transfert: la chair est très molle et délicate.",
            "action": "Utilisez la spatule la plus large que vous possédez et soutenez le filet complet. Servir sur la feuille et glisser sur la plaque."
          },
          {
            "state": "Perfect",
            "description": "Filet transféré intact, glaçure acajou brillant, garnitures vives. Le poisson brille avec sa propre graisse riche.",
            "action": "Mangez immédiatement — la morue noire à son sommet est extraordinaire."
          },
          {
            "state": "Overdone",
            "description": "Le poisson a commencé à sécher.",
            "action": "C'est mieux servi dès qu'il quitte le grilleur. Pas besoin de repos."
          }
        ]
      },
      "feelCue": "Une morsure parfaite de morue noire miso devrait offrir presque aucune résistance: la fourchette devrait glisser à travers la chair et se dissoudre en bouche comme du beurre chaud, laissant derrière l'umami persistant du miso et la douceur du mirin."
    }
  ]
};
