export default {
  "repoId": "master_japanese_okonomiyaki_001",
  "parentRepoId": null,
  "slug": "okonomiyaki",
  "author": "ForkRecipe Kitchen",
  "title": "Okonomiyaki",
  "description": "Un crêpe salé d'Osaka épais et doré — lourd de choux, lié à la pâte aux oeufs et au dashi, parsemé de ventre de porc — cuit jusqu'à ce que l'extérieur ait une croûte laquée légèrement caramélisée et l'intérieur reste doux et crépus, puis fini avec des lignes zigzagantes de sauce okonomiyaki douce, mayo kewpie, flocons de bonito qui vaguent comme des anémones de mer, et une chute de neige d'aonori.",
  "cuisine": "Japonais",
  "culture": "Osaka",
  "category": "eggs",
  "tags": [
    "Japonais",
    "Savoureux pancake",
    "osaka",
    "Choux",
    "bacon",
    "- Oui.",
    "Produits de la rue"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "weight",
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
    "bitter": 0,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Choux de napa (approximativement déchiqueté, bandes de 5 mm)",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "chou vert",
        "Savoy"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Farine pure (ou farine d'okonomiyaki)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "farine de riz sans gluten (la texture sera moins croustillante)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Dashi (ou eau avec 1 c. à thé MSG)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "kombu dashi pour la version végétalienne"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Protein",
      "name": "Oeufs (3 grands)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Protein",
      "name": "Bandes abdominales de porc (découpées finement, 3 mm)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "bacon strié",
        "crevettes",
        "calmars",
        "omit pour végétarien"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "Katsuobushi pour pâte",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "omit pour végétalien; ajouter la sauce de soja supplémentaire pour compenser"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "sauce soja",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile neutre (pour la poêle)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Saindoux pour une saveur plus profonde"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "sauce Okonomiyaki (ou sauce Worcestershire + ketchup 2:1)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "sauce tonkatsu"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Kewpie mayonnaise + aonori (flacons d'algues vertes) + katsuobushi pour garniture",
      "ratioValue": 25,
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
        "ing_07"
      ],
      "outputState": "okonomiyaki_batter",
      "instructions": "Dans un grand bol, fouetter la farine, le dashi, les oeufs et la sauce de soja jusqu'à ce qu'il reste des morceaux lisses et qu'il ne reste pas de morceaux. Contrairement à tempura, ici nous voulons une pâte cohésive et développée qui tiendra le chou ensemble à travers une longue cuisson. Whisk pendant environ 1 minute. La pâte doit verser librement à partir d'une louche mais la mettre dans un film mince. Goûtez - le — il devrait être légèrement assaisonné et goûter légèrement de l'océan du dashi.",
      "visualCue": {
        "primaryTarget": "Une pâte jaune pâle et lisse avec une consistance uniforme: pas de stries de farine, pas de grumeaux, verse dans un ruban mince continu d'une cuillère levée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches de farine sèche visibles. Les battements sont bosseux et incohérents.",
            "action": "fouetter encore une minute, en veillant à racler le fond du bol où la farine a tendance à se déposer."
          },
          {
            "state": "Perfect",
            "description": "Lisse uniformément, verse librement, enrobe une cuillère dans un mince film translucide. Ça sent peu l'oeuf et le dashi.",
            "action": "Ajouter le chou, le bonito et mélanger avant de chauffer la poêle."
          },
          {
            "state": "Overdone",
            "description": "La batterie est aérée et surchargée. Il a trop de mousse.",
            "action": "Appuyez sur le bol sur le comptoir quelques fois pour éclater des bulles et reposer pendant 2 minutes avant d'ajouter du chou."
          }
        ]
      },
      "feelCue": "Plongez un doigt et laissez tomber une goutte — il devrait tomber dans une goutte lente qui s'étire légèrement avant de casser, comme de la crème fraîche, pas de l'eau."
    },
    {
      "nodeId": "step_2",
      "action": "Plier",
      "inputs": [
        "okonomiyaki_batter",
        "ing_01",
        "ing_06"
      ],
      "outputState": "okonomiyaki_mix",
      "instructions": "Ajouter tous les choux déchiquetés et les flocons de bonito pour la pâte dans la pâte. Plier avec une spatule jusqu'à ce que chaque brin de chou soit enduit et que le mélange ressemble plus de chou que de pâte — c'est exact. Le très haut rapport chou-batterie est ce qui rend Osaka-style okonomiyaki distinct du style en couches Hiroshima. À ce stade, le mélange doit être beaucoup trop lâche et riche en choux; ne pas ajouter plus de pâte. Si vous utilisez du beni shoga (gingembre piquant) ou du tenkasu (débris de tempura), repliez-les maintenant.",
      "visualCue": {
        "primaryTarget": "Un mélange épais, chaggy, dominant de chou où la pâte n'enrobe que les brins de chou — il devrait ressembler à une colelaw très humide avec des brins de pâte d'oeuf la tenant lâchement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des brins de chou secs collent au-dessus de la pâte sans revêtement. Batter mis en commun en bas.",
            "action": "Plier plus fermement — pousser du bas vers le haut pour faire monter la pâte à travers le chou."
          },
          {
            "state": "Perfect",
            "description": "Chaque brin de chou scintille avec de la pâte; le mélange tient un monticule lâche lorsqu'il est écorcé; il semble légèrement trop lâche pour tenir ensemble — c'est exact.",
            "action": "À utiliser immédiatement. Le chou expulsera l'eau s'il reste pour s'asseoir et la pâte s'amincira."
          },
          {
            "state": "Overdone",
            "description": "Le chou s'est flétri par surmélange et la pâte est devenue aqueuse par le jus de chou libéré.",
            "action": "Égoutter tout liquide mis en commun au fond du bol, puis procéder. L'okonomiyaki sera légèrement plus mince mais toujours bon."
          }
        ]
      },
      "feelCue": "Soulevez une cuillère et elle doit tenir ensemble juste assez pour transférer dans la poêle en une seule masse — pas tomber en morceaux de chou séparés, mais pas solidement lié non plus."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "okonomiyaki_mix",
        "ing_05",
        "ing_08"
      ],
      "outputState": "cooked_okonomiyaki",
      "instructions": "Chauffer une poêle large et plate ou une grille (teppan) à feu moyen. Ajouter l'huile et le tourbillon. Poser les tranches du ventre de porc dans une seule couche et cuire 1 minute pour rendre un peu de graisse. Monter toute la pâte de chou sur le ventre du porc, la façonner en un disque rond d'environ 2 cm d'épaisseur. Appuyez doucement avec l'arrière d'une spatule pour compacter en une ronde uniforme, d'environ 20 cm de côté. Cuire pendant 4 à 5 minutes jusqu'à ce que les bords commencent à regarder ensemble et le fond a développé une croûte — vous pouvez vérifier en soulevant soigneusement un bord avec une spatule. Flipez avec confiance dans un mouvement : glissez la spatule complètement sous l'okonomiyaki et reculez loin de vous. Cuire encore 4 à 5 minutes sur le deuxième côté. Le crêpe doit se sentir ferme et revenir légèrement lorsqu'il est pressé au centre.",
      "visualCue": {
        "primaryTarget": "Un crêpe rond avec un extérieur profondément doré, légèrement croustillant sur les deux faces et un centre qui ressort lentement lorsqu'il est pressé — pas de pâte liquide montrant aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le fond est doré mais le dessus semble cru et humide. Le centre se sent liquide lorsqu'il est pressé. La pâte aux oeufs est toujours sur les côtés.",
            "action": "Couvrir avec un couvercle pendant 2 minutes pour aider le centre à cuire à la vapeur, puis découvrir pour terminer la croûte."
          },
          {
            "state": "Perfect",
            "description": "Les deux visages sont d'or profond avec quelques taches caramélisées plus foncées où la graisse de porc a rendu dans la croûte. Le centre revient fermement. Les bords sont fixés et croquants. Sens de graisse de porc et de chou caramélisé.",
            "action": "Glissez sur une assiette avec le côté porc vers le haut. Ajouter immédiatement les sauces et les garnitures."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brun foncé à noir. Le ventre de porc est croquant au lieu de tendre. Une odeur de chou brûlé.",
            "action": "Servir immédiatement pour attraper ce qui est bon — le centre peut encore être parfait. Appliquer généreusement les garnitures pour couvrir les bords brûlés."
          }
        ]
      },
      "feelCue": "Appuyez sur le centre avec deux doigts — il devrait repousser avec une résistance régulière et amortie, comme appuyer sur un matelas ferme, sans donner de liquide. Si vos doigts s'enfoncent et que la pâte se presse sur les côtés, il faut plus de temps."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir",
      "inputs": [
        "cooked_okonomiyaki",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_okonomiyaki",
      "instructions": "Travaillant rapidement alors que l'okonomiyaki est encore très chaud, utilisez une bouteille ou une cuillère pour dessiner des lignes parallèles de sauce okonomiyaki à travers la surface, espacées d'environ 2 cm. Répéter avec des lignes de mayonnaise Kewpie perpendiculaires à la sauce. Les lignes ne doivent pas être complètement mélangées — le crosshatch à deux sauces est une signature visuelle du plat. Scatter des flocons de bonito sur le dessus: la chaleur du crêpe les animera, les faisant boucler et agiter comme des êtres vivants. Terminer par aonori (flacons d'algues vertes séchées) et servir immédiatement à la table.",
      "visualCue": {
        "primaryTarget": "Les lignes classiques de sauce à deux sauces Osaka — okonomiyaki brun foncé croisées avec des zigzags blancs Kewpie, des flocons de bonito animés dansant dans la chaleur, et une poussière verte d'aonori.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sauces appliquées trop froides — elles se baignent et courent sans rester dans les lignes. Les flocons de Bonito sont plats et immobiles.",
            "action": "L'okonomiyaki n'était pas assez chaud quand il était souillé. Retournez brièvement dans la poêle pendant 1 minute, puis ré-appliquer les sauces. Le bonito dansera plus vigoureusement sur une surface vraiment chaude."
          },
          {
            "state": "Perfect",
            "description": "Les sauces restent appliquées dans des lignes distinctes; les flocons de bonite sont visiblement ondulés et enroulés dans la chaleur montante; l'aonori est dispersé uniformément. La surface est brillante et aromatique.",
            "action": "Apportez à table et mangez immédiatement — okonomiyaki est à son meilleur dans les 3 premières minutes hors de la chaleur."
          },
          {
            "state": "Overdone",
            "description": "Trop de sauce a été appliqué et il coule des côtés, rendant les bords soyeux.",
            "action": "Blot l'excédent avec un coin de serviette en papier et servir — leçon apprise pour la prochaine fois: un peu de sauce va beaucoup sur une surface chaude et poreuse."
          }
        ]
      },
      "feelCue": "Couper dans l'okonomiyaki avec une fourchette ou une spatule — il devrait offrir une résistance légère à la croûte avant de céder à un intérieur doux et crépuscule qui tient ensemble en morceaux distincts plutôt que de s'effondrer en bouillie."
    }
  ]
};
