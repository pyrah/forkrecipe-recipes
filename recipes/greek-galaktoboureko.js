export default {
  "repoId": "master_greek_greekgalaktoboureko_001",
  "parentRepoId": null,
  "slug": "greek-galaktoboureko",
  "author": "ForkRecipe Kitchen",
  "title": "Galaktoboureko",
  "description": "Filo aux feuilles étincelantes et croustillantes encaissant une crème de semoule de vanille épaisse et tremblante, trempée au moment de l'émergence du four avec du sirop parfumé au citron froid afin qu'il siffle et absorbe.",
  "cuisine": "Grec",
  "culture": "Grec",
  "category": "desserts",
  "tags": [
    "dessert",
    "végétarien",
    "laitière",
    "œuf",
    "Filo",
    "grec",
    "Coutard",
    "sirop"
  ],
  "difficulty": 4,
  "activeTime": "1 hour",
  "totalTime": "2 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 1,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Lait entier",
      "ratioValue": 1000,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Sémoline fine",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de ricin (pour la crème)",
      "ratioValue": 180,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Protein",
      "name": "Oeufs",
      "ratioValue": 4,
      "defaultUnit": "pieces",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé (pour la crème)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Extrait de vanille pure",
      "ratioValue": 8,
      "defaultUnit": "ml",
      "substitutions": [
        "graines de haricots vanille de 1 goutte"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Structure",
      "name": "Feuilles de pâte filo",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Beurre non salé, fondu (pour filo)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Sucre (pour sirop)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Hydration",
      "name": "Eau (pour sirop)",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Acid",
      "name": "Bande de citron",
      "ratioValue": 1,
      "defaultUnit": "piece",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_09",
        "ing_10",
        "ing_11",
        "ing_12"
      ],
      "outputState": "lemon_syrup",
      "instructions": "Mélanger le sucre, l'eau et la pelure de citron dans une casserole. Chauffer à feu moyen, en remuant seulement pour dissoudre le sucre. Une fois bouillant, arrêter de remuer et cuire pendant 8-10 minutes jusqu'à ce qu'il soit légèrement sirupeux. Retirer l'écorce de citron, ajouter le jus de citron, cuire 1 minute de plus. Retirer du feu et refroidir à la température ambiante. Ce sirop doit être froid lorsqu'il rencontre la pâte chaude — faites-le d'abord ou au moins une heure avant.",
      "visualCue": {
        "primaryTarget": "Un sirop clair et doré qui enveloppe l'arrière d'une cuillère. Il a un arôme de citron.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Eauux et mince. Aucune viscosité du tout. Il coule une cuillère immédiatement.",
            "action": "Cuire encore 3-5 minutes. Le sirop doit être légèrement plus épais que l'eau."
          },
          {
            "state": "Perfect",
            "description": "Or pâle et légèrement visqueux — enveloppe l'arrière d'une cuillère. Une seule scène. Des odeurs de citron et de sucre. Il doit être complètement froid lorsqu'il est utilisé.",
            "action": "Retirer du feu, refroidir à la température ambiante. Réfrigérer si nécessaire."
          },
          {
            "state": "Overdone",
            "description": "Épaisseur, multifil scène ou commençant à caraméliser. Trop concentré.",
            "action": "Ajouter 50ml d'eau chaude et remuer à mince."
          }
        ]
      },
      "feelCue": "Une goutte refroidie entre les bouts de doigts humidifiés devrait se sentir à peine collante — plus lisse que l'eau, moins collante que le miel."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "semolina_custard",
      "instructions": "Chauffer le lait dans une grande casserole à fond lourd à feu moyen jusqu'à ce qu'il mijote. Dans un bol, fouetter soigneusement la semoule, le sucre et les œufs. Verser lentement une louche de lait chaud dans le mélange d'oeufs tout en fouettant constamment (tempérant). Verser le mélange d'oeufs trempés dans le lait chaud, en fouettant constamment. Cuire à feu moyen, fouetter sans s'arrêter, jusqu'à ce que le mélange s'épaississe considérablement — il devrait s'éloigner des côtés de la poêle et tenir une forme quand une cuillère est tirée à travers elle, environ 8-10 minutes. Retirer du feu, mélanger le beurre et la vanille. Couvrez immédiatement la surface avec une enveloppe en plastique touchant la crème afin de prévenir une peau.",
      "visualCue": {
        "primaryTarget": "Une crème épaisse, lisse et brillante qui tient une trace claire lorsqu'une cuillère est tirée à travers et tombe de la cuillère dans de lourdes poupées lentes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mince et versable comme béchamel. Il coule librement et sort d'une cuillère. Sera faire le filo soggy plutôt que de mettre à l'intérieur.",
            "action": "Retourner à feu moyen et fouetter constamment jusqu'à ce que le mélange épaississe visiblement et commence à tirer des côtés de la poêle."
          },
          {
            "state": "Perfect",
            "description": "C'est une crème très épaisse et brillante. Une cuillère traînée à travers laisse un sentier clair qui tient. Des chutes dans des poupées lourdes. Les vapeurs de surface et les bulles ont disparu. Sens de vanille et de lait chaud.",
            "action": "Couvrir immédiatement avec une enveloppe plastique touchant la surface. Laisser refroidir pendant 10 minutes avant utilisation."
          },
          {
            "state": "Overdone",
            "description": "Custard saisit et commence à sécher, tirant de la poêle dans des feuilles solides. Une odeur brouillante.",
            "action": "Retirer immédiatement du feu et fouetter vigoureusement avec 2 c. à soupe de lait chaud pour lisser. En cas de bosse, filtrez un tamis."
          }
        ]
      },
      "feelCue": "La crème finie devrait se sentir lourde dans la poêle — lorsque vous la soulevez avec une cuillère et que vous la laissez retomber, cela devrait prendre 2 secondes pour glisser."
    },
    {
      "nodeId": "step_3",
      "action": "Assembler",
      "inputs": [
        "semolina_custard",
        "ing_07",
        "ing_08"
      ],
      "outputState": "assembled_galaktoboureko",
      "instructions": "Préchauffer le four à 180°C (350°F). Beurrer une casserole de 30x20cm généreusement. Calque 8-10 feuilles de filo dans la base, brossant généreusement chaque feuille avec du beurre fondu avant d'ajouter la suivante — y compris la toute première feuille sur le fond de la poêle. Laissez les bords accrocher sur les côtés. Verser la crème chaude sur la base du filo et la répartir uniformément. Pliez les bords de filo sur la crème. Coucher les 8-10 feuilles de filo restantes sur le dessus, rebrossant généreusement chaque couche avec du beurre. Placez les bords dans les côtés de la casserole. Badigeonner la couche supérieure très généreusement avec le reste du beurre. Noter les couches supérieures (pas jusqu'à la crème) en diamant ou en forme carrée avec un couteau tranchant.",
      "visualCue": {
        "primaryTarget": "Un étui à pâtisserie multicouches bien bouché avec une couche uniforme de crème épaisse visible sur les côtés coupés. La couche supérieure est lisse et bien beurrée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les feuilles de filo sont sèches dans les endroits — blanc, des taches non beurrées visibles sur plusieurs feuilles. Le custard est très chaud et a fondu plusieurs couches.",
            "action": "Beurrer toutes les zones non enrobées maintenant, avant de cuire. Laissez la crème refroidir plus avant l'assemblage la prochaine fois."
          },
          {
            "state": "Perfect",
            "description": "Chaque couche de filo brille avec du beurre. Pas de taches blanches sèches. Custard est uniformément distribué. Le dessus est uniformément enduit et les marques sont propres. Tout ça sent le beurre chaud.",
            "action": "Faites cuire immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Filo a été surmené, déchirant et groupant. Les couches sont ridées et incohérentes.",
            "action": "Continuez à cuire — le filo déchiré sera encore croquant. Le résultat peut ne pas sembler parfait, mais aura un goût correct."
          }
        ]
      },
      "feelCue": "Chaque couche de filo doit se sentir glissante et bien recouverte lorsque vous placez la feuille suivante — si une feuille se sent sèche ou rugueuse sous le bout des doigts, ajouter plus de beurre."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "assembled_galaktoboureko"
      ],
      "outputState": "baked_galaktoboureko",
      "instructions": "Cuire à 180°C pendant 45-55 minutes jusqu'à ce que le dessus soit profondément doré et que le filo soit croustillant partout. La garniture de crème aura légèrement gonflé et la pâtisserie sera cloquée et dorée aux bords marqués.",
      "visualCue": {
        "primaryTarget": "Un haut filo uniformément doré et blister avec des marques visibles et des bords légèrement plus foncés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Filo d'or pâle et doux qui donne quand pressé. Custard encore visiblement à l'intérieur. La cuisson n'est pas complète.",
            "action": "Cuire encore 10 minutes. Le dessus doit être vraiment croustillant et doré pour manipuler le sirop."
          },
          {
            "state": "Perfect",
            "description": "Filo doré-brun profond avec des couches flocées et cloquées. Les notes sont clairement visibles. Les bords sont légèrement plus sombres. La crème ci-dessous a réglé — la poêle ne fait pas de bulle liquide.",
            "action": "Retirer du four. Versez immédiatement le sirop froid sur la pâte chaude."
          },
          {
            "state": "Overdone",
            "description": "Des bords très sombres s'approchant brûlés. Top filo est très rigide et friable.",
            "action": "Retirer immédiatement et verser le sirop pour éviter un séchage supplémentaire. Couper les bords les plus foncés avant de servir."
          }
        ]
      },
      "feelCue": "La partie supérieure du filo doit sonner creuse lorsqu'elle est tapée d'un joint — un bruit sec et crépitant qui signale que toute l'humidité a été expulsée de la pâtisserie."
    },
    {
      "nodeId": "step_5",
      "action": "Glacer",
      "inputs": [
        "baked_galaktoboureko",
        "lemon_syrup"
      ],
      "outputState": "finished_galaktoboureko",
      "instructions": "C'est le moment déterminant. La pâtisserie doit être chaude et le sirop doit être complètement froid. Verser le sirop froid uniformément et lentement sur toute la surface du galaktoboureko juste-du-four. La pâtisserie sifflera, la vapeur et le éclat — c'est exact. Versez d'abord le long des marques, puis sur toute la surface. Utilisez tout le sirop. Laisser reposer au moins 45 minutes avant la coupe — le sirop a besoin de temps pour pénétrer les couches et la crème a besoin de temps pour se fixer assez fermement pour couper.",
      "visualCue": {
        "primaryTarget": "Pâtisserie scintillante au sirop qui a absorbé le liquide sans devenir soyeuse. Les lignes de pointage sont définies. La surface est brillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sirop se met en commun sur la surface et descend les côtés sans absorber. Trop de sirop appliqué trop vite.",
            "action": "Doucement. Laisser chaque louche absorber avant d'ajouter la suivante."
          },
          {
            "state": "Perfect",
            "description": "La surface est uniformément brillante et scintillement. Pas de piscine de sirop. Les lignes de score ont absorbé le sirop profondément et semblent plus sombres. L'arôme est de citron, beurre et crème vanille chaude.",
            "action": "Reposez-vous au moins 45 minutes. Coupez les marques avec un couteau tranchant."
          },
          {
            "state": "Overdone",
            "description": "Le sirop a été appliqué lorsque la pâte était déjà froide — il est assis sur la surface refusant d'absorber. Le filo s'est adouci de façon inégale.",
            "action": "Chauffer brièvement le galaktoboureko à 160°C pendant 10 minutes pour faciliter l'absorption."
          }
        ]
      },
      "feelCue": "Après le repos, le bord coupé doit révéler des couches filo distinctes au-dessus d'une dalle de crème propre — le sirop a pénétré mais n'a pas dissous la pâtisserie."
    }
  ]
};
