export default {
  "repoId": "master_french_lemon_butter_sauce_001",
  "parentRepoId": null,
  "slug": "lemon-butter-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce au beurre de citron (Beurre Blanc au Citron)",
  "description": "Une réduction d'échalote et de citron finie avec une cascade de beurre froid : tremblante, or pâle, et incroyablement légère pour quelque chose fait presque entièrement de graisse, le genre de sauce qui fait transcendance simple de poisson pan-sairé. La science est élémentaire; l'exécution exige une attention complète et du beurre froid.",
  "cuisine": "Français",
  "culture": "Français",
  "category": "sauces",
  "tags": [
    "beurre",
    "citron",
    "sauce",
    "français",
    "beurre-blanc",
    "émulsion",
    "poissons",
    "classique"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "25 min",
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
    "sour": 4,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Allium",
      "name": "Échalotes finement hachées",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "oignon blanc, très finement haché"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Vin blanc sec",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": [
        "Vermouth sec"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de champagne"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Citrus",
      "name": "Jus de citron frais",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé, froid, coupé en cubes de 1 cm",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "fleur de sel"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Poivre blanc, fraîchement moulu",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Citrus",
      "name": "Zeste de citron, râpé finement",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Ciboulette fraîche, finement coupée (finition facultative)",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "estragon frais, mousseline"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Réduire",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "shallot_reduction",
      "instructions": "Mélanger les échalotes hachées, le vin blanc, le vinaigre de vin blanc et le jus de citron dans une petite casserole à fond lourd. Porter à ébullition à feu moyen-vif, puis réduire le feu pour maintenir une fraicheur rapide. Faites cuire, en remuant occasionnellement, jusqu'à ce que le liquide ait réduit à environ 2–3 cuillerées à soupe — vous devriez être en mesure de voir clairement le fond de la poêle entre les morceaux d'échalote, et le liquide devrait avoir l'air sirupeux et concentré. Cela prend 6–8 minutes. La réduction fait deux choses simultanément : elle concentre l'acidité qui va contrebalancer la richesse du beurre, et elle adoucit les échalotes jusqu'à ce qu'elles soient complètement tendres et moelleuses. La morsure aiguë de l'échalote crue et du vinaigre devrait sentir plus moelleuse et plus ronde au moment où la réduction est prête. Ne vous précipitez pas: une base sous-réduite produit une sauce aqueuse et acide qui n'émulsionnera pas correctement.",
      "visualCue": {
        "primaryTarget": "Le liquide a été réduit à une petite cuillère à soupe sirupeuse. Les morceaux d'échalote sont visibles et doux, nageant dans un liquide concentré, légèrement visqueux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est encore liquide et clair. Plus de 4 cuillères à soupe restent. L'odeur du vinaigre est toujours agressive.",
            "action": "Continuez à mijoter — vous avez besoin d'au moins 2/3 de réduction. La patience ici empêche une sauce fine plus tard."
          },
          {
            "state": "Perfect",
            "description": "2 à 3 cuillères à soupe de liquide sirupeux restent. Les échalotes sont complètement molles. Le liquide s'accroche à la cuillère. L'odeur est tarte mais arrondie.",
            "action": "Ajouter la crème et réduire brièvement avant de monter avec du beurre."
          },
          {
            "state": "Overdone",
            "description": "Le liquide s'est presque entièrement évaporé. Les échalotes semblent sèches et commencent à frire dans un résidu collant.",
            "action": "Ajouter 2 c. à soupe de vin blanc ou d'eau immédiatement pour sauver. Mélanger pour dissoudre et procéder — une certaine caramélisation ajoutera de la profondeur."
          }
        ]
      },
      "feelCue": "Inclinez légèrement la casserole — le liquide réduit doit couler dans une feuille lente et sirupeuse plutôt que de courir librement comme de l'eau. Vous devriez être capable d'entendre le changement de son aussi: d'une forte éclaboussure à un bouillonnement épais et paresseux comme le liquide se concentre."
    },
    {
      "nodeId": "step_2",
      "action": "Réduire",
      "inputs": [
        "shallot_reduction",
        "ing_05"
      ],
      "outputState": "cream_base",
      "instructions": "Ajouter la crème lourde à la réduction de l'échalote. Porter à ébullition et réduire de moitié — cela ne prend que 60 à 90 secondes. La crème sert deux fonctions : elle ajoute une petite quantité de graisse laitière qui stabilise l'émulsion que vous êtes sur le point de construire, et ses protéines créent un filet physique qui aide à maintenir les gouttelettes de beurre en suspension même si la température fluctue légèrement. Un beurre blanc traditionnel n'inclut pas la crème, mais la version enrichie en crème est beaucoup plus stable et pardonnante pour la cuisine à domicile - il conservera son émulsion pour plus longtemps et tolérera des températures légèrement plus élevées sans casser. La réduction devrait être légèrement épaissie et couleur ivoire lorsqu'elle est prête.",
      "visualCue": {
        "primaryTarget": "La crème a diminué et le mélange semble légèrement épaissi, blanc ivoire et crémeux. Le volume doit être réduit de moitié à partir de l'ajout de la crème.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème est encore mince et aqueuse, pas encore réduite. Produira une émulsion moins stable.",
            "action": "Continuer à ébullition rapide pendant 30 secondes."
          },
          {
            "state": "Perfect",
            "description": "Légèrement épais, ivoire, enrobant la cuillère très légèrement. Ça sent la crème et la tarte.",
            "action": "Réduire la chaleur au réglage le plus bas. Commencez à monter avec du beurre."
          },
          {
            "state": "Overdone",
            "description": "La crème a diminué trop loin et commence à avoir l'air granuleuse ou brûlée.",
            "action": "Ajouter 1 c. à soupe de crème fraîche, remuer et procéder immédiatement au montage au beurre."
          }
        ]
      },
      "feelCue": "Le mélange devrait enrober l'arrière d'une cuillère en bois dans un film mince, même qui s'écoule à peine lorsque la cuillère est inclinée. L'odeur doit être douce et crémeuse en même temps, comme une crème fraîche très légère."
    },
    {
      "nodeId": "step_3",
      "action": "Monter",
      "inputs": [
        "cream_base",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_lemon_butter_sauce",
      "instructions": "C'est l'étape montante — le cœur du beurre blanc. Retirer complètement la poêle de la chaleur ou la réduire à la flamme la plus basse absolue. La température d'objectif est de 60 à 80°C (140 à 176°F) — assez chaude pour fondre le beurre, trop froide pour briser l'émulsion. Ajouter les cubes de beurre froid deux à la fois, fouettant constamment entre chaque addition. Le beurre froid fait deux choses : il fond et sa graisse se disperse dans de minuscules gouttelettes tout au long de la réduction, et sa température froide aide à réguler la chaleur de la poêle, l'empêchant de grimper trop haut. Attendez que chaque ajout soit presque complètement absorbé avant d'ajouter le suivant — vous devriez voir la sauce épaissir et devenir crémeux avec chaque ajout. Si la sauce a l'air grasse ou si le beurre fond mais n'émulsionne pas (graisse claire sur le dessus), la poêle est trop chaude. Déplacer brièvement la chaleur et fouetter plus vigoureusement. Une fois le beurre incorporé, assaisonner de sel, de poivre blanc et de zeste de citron. Ajouter la ciboulette si elle est utilisée. Plongez dans un tamis si vous voulez une sauce raffinée sans les morceaux d'échalote; servez sans entraînement pour une présentation plus rustique. Servir immédiatement — l'émulsion est vivante et se brisera si elle est réchauffée à plus de 80°C.",
      "visualCue": {
        "primaryTarget": "Une sauce pâle, opaque, or ivoire avec un éclat brillant. Assez épais pour enrober une cuillère et tenir sur une assiette inclinée. Il semble légèrement plus léger que la crème, presque mousseux dans sa légèreté.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse — pas encore assez de beurre monté, ou l'émulsion ne s'est pas formée. On dirait de l'eau aromatisée avec du beurre flottant sur le dessus.",
            "action": "fouetter plus vigoureusement et ajouter le beurre plus lentement. Continuez à ajouter — l'émulsion se formera."
          },
          {
            "state": "Perfect",
            "description": "Crémeux, or pâle, opaque. Il tient sa forme sur la cuillère, coule doucement lorsqu'il est versé. Goûte riche, acide et intensément beurré avec le citron s'affirmant proprement.",
            "action": "Assaisonner, terminer avec du zeste et de la ciboulette, et servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La sauce s'est cassée: le beurre jaune clair est contenu sur un liquide mince et aqueux. L'émulsion a échoué de l'excès de chaleur.",
            "action": "Retirer du feu. fouetter vigoureusement 1 c. à soupe d'eau froide ou de crème froide. Ajouter 2 cubes de beurre frais et fouetter à partir de zéro. S'il ne réémulsionnera pas, l'utilisera de toute façon comme une bruine de pan — la saveur est là."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère froide dans la sauce — elle devrait laisser un sentier propre qui tient un moment avant de fermer, comme un réveil dans l'eau épaissée. La sauce doit se sentir plus légère qu'elle ne l'a l'air, presque aérée, et l'odeur doit être pur beurre de citron — propre, acide et profondément riche en même temps."
    }
  ]
};
