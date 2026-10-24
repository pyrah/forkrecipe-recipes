export default {
  "repoId": "master_american_fried_chicken_southern_001",
  "parentRepoId": null,
  "slug": "fried-chicken-southern",
  "author": "ForkRecipe Kitchen",
  "title": "Poulet frit au lait de bouche du sud",
  "description": "Poulet désossé imbibé longtemps et lent dans du babeurre assaisonné jusqu'à ce que l'acide fendise chaque fibre, puis dragué dans de la farine épicée et frit dans une poêle en fonte dans du saindoux peu profond jusqu'à ce que la croûte se brise comme un craquelin et que l'intérieur coule avec son propre jus.",
  "cuisine": "Américain",
  "culture": "Amérique du Sud",
  "category": "proteins",
  "tags": [
    "américains",
    "sud",
    "Choux frits",
    "la nourriture confortable"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "5 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Morceaux de poulet désossé (cuisses, pilons, poitrines, ailes)",
      "ratioValue": 1400,
      "defaultUnit": "g",
      "substitutions": [
        "cuisses de poulet sur la peau uniquement pour une frite plus simple"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Beurre (graisse pleine)",
      "ratioValue": 480,
      "defaultUnit": "ml",
      "substitutions": [
        "lait entier + 1 c. à soupe de vinaigre blanc, reposé 10 min"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 300,
      "defaultUnit": "g",
      "substitutions": [
        "moitié farine, moitié farine de maïs pour croquant supplémentaire"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Starch",
      "name": "Farine de maïs",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "fécule de pomme de terre"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Paprika fumé",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "paprika doux"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poudre d'ail",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Poudre d'oignon",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Poivre de Cayenne",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "Paprika chaud"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher (utiliser 20 g)"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Poivre noir fraîchement moulu",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Fat",
      "name": "Huile de lard ou d'arachide pour la friture (assez pour 4 cm de profondeur dans la poêle)",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "Écourtement des légumes",
        "huile de coco raffinée"
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
        "ing_09",
        "ing_10"
      ],
      "outputState": "marinated_chicken",
      "instructions": "fouetter 1 c. à thé du sel et bien broyer le poivre noir dans le babeurre. Submerger tous les morceaux de poulet dans le babeurre assaisonné, les presser sous la surface. Couvrir soigneusement et réfrigérer pendant au moins 4 heures, idéalement toute la nuit. L'acide dans le babeurre tendre la surface de la viande et l'humidité aide la drague à adhérer dans une croûte épaisse et chaotique.",
      "visualCue": {
        "primaryTarget": "Après la marinade, les morceaux de poulet sont enduits en profondeur dans un babeurre épais, crémeux et rose qui s'accroche à la peau en feuilles opaques.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Moins de 2 heures dans la marinade — le babeurre est encore mince à la surface et la viande est aussi ferme que crue.",
            "action": "Retournez au réfrigérateur. L'action de soumissionnement de l'acide a besoin de temps. Au moins 4 heures; la nuit est meilleure."
          },
          {
            "state": "Perfect",
            "description": "4 à 12 heures : le babeurre s'est légèrement épaissi là où il touche la viande, la surface est tendre mais pas musquée, et la couleur s'est allégée du rose au blush plus pâle.",
            "action": "Retirer du réfrigérateur 30 minutes avant le dragage pour enlever le froid, ce qui assure une friture plus uniforme."
          },
          {
            "state": "Overdone",
            "description": "Plus de 24 heures : le babeurre a cassé les protéines de surface de façon agressive – le poulet est doux et légèrement glissant, presque musclé aux bords.",
            "action": "La texture est acceptable une fois frite, mais prenez soin de ne pas déchirer les morceaux pendant que vous les draguez. Conserver les lots futurs à 12 heures maximum."
          }
        ]
      },
      "feelCue": "Poissonr une pièce après avoir mariné et courir un doigt le long de la peau — il devrait se sentir collant et enduit, comme il porte déjà une fine glaçure. Il ne devrait jamais se sentir visqueux ou à l'automne doux."
    },
    {
      "nodeId": "step_2",
      "action": "Saison",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "seasoned_dredge",
      "instructions": "Mélanger la farine, l'amidon de maïs, le paprika, la poudre d'ail, la poudre d'oignon, la cayenne, le sel restant, le poivre noir et la poudre à pâte dans un grand bol peu profond. La poudre à pâte crée de petites bulles de CO2 pendant la friture qui souffle et brise la croûte. Goûtez une pincée – elle devrait être assaisonnée clairement, agressivement, parce que le poulet en dessous est épais et a besoin de la croûte pour porter la saveur.",
      "visualCue": {
        "primaryTarget": "Un mélange de couleur terre cuite pâle, légèrement poudreux qui sent simultanément la fumée, l'ail et la chaleur, un aperçu sensoriel complet de la croûte finie.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange a un goût plat et féculent sans présence réelle d'épices. Il produira une croûte molle.",
            "action": "Ajouter plus de sel et de paprika, déguster à nouveau après chaque ajout jusqu'à ce que l'assaisonnement soit affirmé – il doit pouvoir assaisonner un morceau épais de poulet osseux dans toute la croûte."
          },
          {
            "state": "Perfect",
            "description": "La drague a un goût vif, poivré et nettement épicé. Ça sent le paprika et l'ail. La poudre à pâte lui donne une légère légèreté aérée.",
            "action": "Mettre en place la station de dragage à côté du poulet mariné et commencer le revêtement."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est trop salé ou trop chaud, soit en suralimentant le poulet, soit en créant une croûte uniformément amère.",
            "action": "Ajouter plus de farine et de fécule de maïs pour diluer, puis ré-goûter et rééquilibrer les autres épices proportionnellement."
          }
        ]
      },
      "feelCue": "Passez vos doigts à travers la drague — il devrait sentir léger et légèrement gritté de la fécule de maïs, jamais collant ou entaillé. Lumps signifie que l'humidité est entrée; tamiser et recommencer."
    },
    {
      "nodeId": "step_3",
      "action": "Drague",
      "inputs": [
        "marinated_chicken",
        "seasoned_dredge"
      ],
      "outputState": "dredged_chicken",
      "instructions": "Soulevez un morceau de poulet du babeurre, laissant retomber l'excès — mais sans le secouer, vous voulez une surface humide pour la farine à saisir. Appuyez fermement dans la farine assaisonnée, tournant et pressant plusieurs fois afin que la drague adhère en grappes épaisses et inégales. Pour la croûte la plus brisée, arrosez une cuillère à café de l'excès de beurre sur la pièce fardée et pressez à nouveau — ces taches humides créent des bosses enragées et enragées qui frisent en éclats dramatiques. Repose-toi sur une grille pendant 10 minutes avant de frire.",
      "visualCue": {
        "primaryTarget": "Chaque morceau est recouvert d'une couche opaque, épaisse et chaotique de farine avec des crêtes irrégulières et des bosses.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le revêtement est mince et translucide dans les patchs, la peau encore visible en dessous. Elle frire de façon inégale et la croûte sera mince et fragile.",
            "action": "Arrosez le morceau dans le lait de beurre, laissez couler l'excès et pressez fermement dans la farine. Répétez l'astuce du lait de beurre pour une meilleure adhérence."
          },
          {
            "state": "Perfect",
            "description": "Une couche épaisse, opaque et dentelée qui obscurcit complètement la peau en dessous. Des pics et des vallées visibles qui deviendront des pics éclatants de croûte.",
            "action": "Laisser reposer sur un support pendant 10 minutes afin que le revêtement puisse s'hydrater et se lier à la surface avant de frire."
          },
          {
            "state": "Overdone",
            "description": "Trop de drague appliquée dans trop de couches a créé une pâte pâteuse et épaisse plutôt qu'une croûte légère — il fera cuire à une coquille dense et painée.",
            "action": "Agiter fermement l'excès. Le revêtement doit adhérer, mais ne pas être plâtré dans de grosses pattes."
          }
        ]
      },
      "feelCue": "Appuyez fermement sur le revêtement de chaque pièce avec les deux mains — vous devriez sentir la farine compacte dans la surface et sentir les bosses irrégulières sous vos paumes. Ça devrait être du papier de sable, pas de l'argile humide."
    },
    {
      "nodeId": "step_4",
      "action": "Fry",
      "inputs": [
        "dredged_chicken",
        "ing_12"
      ],
      "outputState": "fried_chicken",
      "instructions": "Chauffer le saindoux dans une poêle en fonte de 12 pouces à 175°C / 345°F. La graisse doit être de 3 à 4 cm de profondeur. Abaissez soigneusement les morceaux de poulet, vers le bas de la peau, sans encombrer – faire frire en deux lots si nécessaire. Maintenez l'huile à 160–180°C pendant toute la période (elle chutera lorsque vous ajouterez le poulet froid; c'est normal). Fry cuisses et pilons 12-14 minutes par côté, seins 8-10 minutes par côté, ailes 6-8 minutes par côté. Tourner une fois, soigneusement, lorsque la croûte inférieure est profondément dorée et libère librement.",
      "visualCue": {
        "primaryTarget": "La croûte est un or riche, rougeâtre-ambre avec des pics foncés sur les bosses folles, et l'huile autour du poulet grésille dans une mousse stable, active, mais pas violente.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est d'or pâle ou encore beige après 10 minutes. L'huile ne gronde pas activement — elle peut être inférieure à la température. Le revêtement peut être collé à la casserole.",
            "action": "Ne forcez pas le poulet à bouger — attendez qu'il libère naturellement, ce qu'il fera lorsque la croûte sera réglée. Si l'huile est trop froide, levez légèrement la chaleur mais regardez la température."
          },
          {
            "state": "Perfect",
            "description": "Croûte ambre profonde avec pics plus foncés sur les crêtes, grésillant dans une mousse uniforme et stable. Un thermomètre dans la partie la plus épaisse de la cuisse indique 74°C 165°F. La croûte semble creuse lorsqu'elle est tapée.",
            "action": "Égoutter sur un porte-fils, pas des serviettes en papier. Les serviettes en papier piègent la vapeur et adoucissent la croûte."
          },
          {
            "state": "Overdone",
            "description": "La croûte est acajou foncé à presque noir; l'huile fume. La surface semble sèche et les bosses se sont aplaties, suggérant que l'intérieur a trop cuit.",
            "action": "Retirer immédiatement de l'huile et égoutter. La peau aura un goût amer aux taches les plus foncées. Notez que les morceaux osseux peuvent rester à l'obscurité moyenne sans être surdosés — utilisez la température interne comme indicateur réel."
          }
        ]
      },
      "feelCue": "Écoutez l'huile : un étourdissement constant et constant comme une forte pluie signifie que la température est correcte. Un rugissement violent et éclatant signifie qu'il est trop chaud. Le silence ou un sifflement faible signifie qu'il fait trop froid et que le poulet commence à absorber l'huile."
    },
    {
      "nodeId": "step_5",
      "action": "Repos",
      "inputs": [
        "fried_chicken"
      ],
      "outputState": "finished_fried_chicken",
      "instructions": "Égoutter les morceaux frits sur un porte-fils placé sur une plaque de cuisson. Ne les foulez pas ou ne les empilez pas — chaque pièce a besoin de circulation d'air de tous les côtés pour rester croquante. Assaisonner immédiatement avec une légère pincée de sel fin de mer tandis que la croûte est encore scintillante de l'huile. Reposez-vous au moins 5 minutes avant de servir; la température interne continuera à augmenter et les jus se redistribueront. La croûte restera croustillante sur la grille pendant au moins 15 minutes.",
      "visualCue": {
        "primaryTarget": "La croûte s'est mise à une coquille rigide à facettes — ambre foncé avec des pics brun rougeâtre — et l'huile s'écoule proprement sans se mettre en commun à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est légèrement molle et pâle dans les endroits; lorsqu'elle est coupée, les jus sont rosés et la viande près de l'os semble mal cuite.",
            "action": "Retourner à l'huile encore 3-4 minutes, ou terminer dans un four à 200°C pendant 5-8 minutes pour cuire à travers sans assombrir davantage la croûte."
          },
          {
            "state": "Perfect",
            "description": "La croûte est rigide, sèche et se brise audiquement lorsqu'elle est pressée ou tapée. Les jus sont complètement clairs lorsque le point le plus épais est percé. La viande est humide et blanche partout.",
            "action": "Servir immédiatement, ou maintenir le support dans un four à 90°C jusqu'à 20 minutes sans perdre la croûte."
          },
          {
            "state": "Overdone",
            "description": "La croûte est très sombre, le poulet sent plus la pâte frite que la viande assaisonnée, et la chair à l'intérieur est sèche et cotonneuse quand mordue.",
            "action": "Servir avec une sauce — une bruine de miel chaude ou un ranch de lait de beurre — pour réintroduire l'humidité. Évitez les futurs lots en comptant sur le thermomètre."
          }
        ]
      },
      "feelCue": "Tapotez la croûte avec un ongle — il devrait sonner creux et tranchant, comme frapper sur un carrelage en céramique très mince. Ce bruit est la croûte que le babeurre et la poudre à pâte ont travaillé pour créer."
    }
  ]
};
