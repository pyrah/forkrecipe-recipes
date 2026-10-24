export default {
  "repoId": "master_irish_irish_soda_bread_001",
  "parentRepoId": null,
  "slug": "irish-soda-bread",
  "author": "ForkRecipe Kitchen",
  "title": "Pain de soda irlandais",
  "description": "Quarante minutes de la farine à la table — pas de levure, pas de pétrissage, pas d'attente — juste la réaction étourdissante de la cuisson du soda contre le babeurre soulevant la pâte dans un pain rustique, émietté avec une croûte épaisse et un intérieur tendre et légèrement aigre qui se détache dans des morceaux satisfaisants.",
  "cuisine": "Irlandais",
  "culture": "Irlandais",
  "category": "breads",
  "tags": [
    "Irlandais",
    "pain",
    "beurre",
    "pain rapide",
    "Bicarbonate de soude"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "1 hr",
  "ratioSystem": "bakers_percentage",
  "stars": 1090,
  "forks": 130,
  "contributors": 16,
  "license": "CC-BY-SA",
  "createdAt": "2025-01-17",
  "updatedAt": "2025-03-09",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 2,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de blé entier (ou moitié blanche, moitié de farine entière)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "Farine tout usage (minute plus molle)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Beurre, froid",
      "ratioValue": 75,
      "defaultUnit": "%",
      "substitutions": [
        "lait entier + 1 c. à soupe de jus de citron, reposé 5 min"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "Bicarbonate de soude",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
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
      "name": "Beurre froid non salé, cube (facultatif, pour la richesse)",
      "ratioValue": 5,
      "defaultUnit": "%",
      "substitutions": [
        "Saindoux",
        "omit pour la version végétalienne"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "dry_mix",
      "instructions": "Préchauffer le four à 220°C (425°F). Dans un grand bol, fouetter ensemble la farine, le bicarbonate de soude et le sel jusqu'à ce qu'il soit uniformément combiné. Si vous utilisez du beurre, frottez-le dans la farine en utilisant le bout des doigts jusqu'à ce que le mélange ressemble à une chapelure grossière. Travaillez rapidement — vous ne voulez pas que le beurre fond de la chaleur de vos mains. Le mélange sec doit être aéré et lâche.",
      "visualCue": {
        "primaryTarget": "Un mélange aéré pâle sans croûtes de farine ou de beurre visible. Si vous utilisez du beurre, il ne reste pas de morceaux plus grands qu'un pois.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De gros morceaux de beurre sont encore visibles. Le bicarbonate de soude n'est pas entièrement distribué — des stries blanches visibles.",
            "action": "Continuer à frotter le beurre et fouetter les ingrédients secs plus soigneusement. Le bicarbonate de soude non distribué crée des poches alcalines amères dans le pain cuit."
          },
          {
            "state": "Perfect",
            "description": "La farine a l'air sablonneuse et aérée. Le beurre (s'il est utilisé) est frotté dans des miettes fines sans morceaux visibles. Le mélange sent la lumière et coule librement à travers vos doigts.",
            "action": "Ajoutez immédiatement le babeurre — la vitesse est importante maintenant. Le bicarbonate de soude active le moment où il contacte l'acide."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a été travaillé si longtemps que le beurre a fondu dans la farine à partir de la chaleur de votre main, formant une pâte.",
            "action": "Refroidir le bol pendant 5 minutes. La graisse de la miette ne créera pas la même structure flocante, mais le pain se lèvera encore."
          }
        ]
      },
      "feelCue": "Plongez vos doigts dans le mélange sec — il devrait sentir frais, léger, et légèrement gras des particules de farine, comme le sable de plage. Si elle se sent dense et lourde, elle a besoin de plus d'aération."
    },
    {
      "nodeId": "step_2",
      "action": "Incorporer délicatement",
      "inputs": [
        "dry_mix",
        "ing_02"
      ],
      "outputState": "soda_bread_dough",
      "instructions": "Faites un puits au centre du mélange sec. Versez tout le beurre froid immédiatement. À l'aide d'une grande fourchette ou de votre main maintenue à plat comme une pagaie, remuez de l'intérieur de grands mouvements circulaires — 15 à 20 coups maximum. Arrêtez dès que la pâte se réunit. Il sera sec, rugueux et légèrement collant — c'est exact. Le surmélange développe du gluten et durcit la miettes de façon fatale. La réaction entre le soda et le babeurre a déjà commencé.",
      "visualCue": {
        "primaryTarget": "Une pâte rugueuse et shaggy qui tient ensemble en une seule masse, mais qui a l'air ravagée aux bords. Des stries de farine sèche peuvent encore être visibles sur les bords, ce qui est acceptable.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Dough est toujours friable et ne tiendra pas ensemble quand ramassé. Les poches de farine sèche restent partout.",
            "action": "Plier encore 3-4 fois jusqu'à ce qu'il cohère. Si la farine est particulièrement absorbante, il faudra peut-être plus de babeurre."
          },
          {
            "state": "Perfect",
            "description": "Dough tient ensemble comme une masse rugueuse et bosselée. Il semble désordonné mais peut être soulevé du bol sans tomber en morceaux. Les bulles peuvent déjà être visibles à partir de la réaction de bicarbonate de soude. La surface est légèrement collante.",
            "action": "Tournez sur une surface farinée et formez immédiatement — le levain fonctionne déjà."
          },
          {
            "state": "Overdone",
            "description": "La toux est lisse, élastique et s'éloigne complètement du bol. Il a été surmélangé et développé gluten. Le bicarbonate de soude a eu le temps d'être activé et peut être partiellement épuisé avant la cuisson.",
            "action": "Formez et faites cuire immédiatement. Le pain sera plus mâcher et plus dense que l'idéal, mais se lèvera encore."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir légèrement collante quand on la presse avec un doigt fariné — elle s'accroche très doucement mais se libère sans déchirer. S'il tire comme élastique, gluten a développé trop. Si ça s'écroule, il lui faut un peu plus de liquide."
    },
    {
      "nodeId": "step_3",
      "action": "Façonner",
      "inputs": [
        "soda_bread_dough"
      ],
      "outputState": "shaped_loaf",
      "instructions": "Tourner la pâte sur une surface légèrement farinée et façonner rapidement et doucement en un rond d'environ 20 cm de diamètre et 5 cm d'épaisseur — utiliser le nombre minimum de touches nécessaires. Placer sur un plateau de cuisson parcheminé. À l'aide d'un couteau ou d'une lame tranchante, couper une croix profonde dans le haut, presque tout le chemin à travers, ce qui permet la chaleur pour pénétrer l'intérieur dense et est dit traditionnellement pour laisser sortir les fées. Poussière légèrement avec de la farine.",
      "visualCue": {
        "primaryTarget": "Une ronde rugueuse en forme de dôme avec une croix profonde et propre coupée au-dessus. La surface est souillée de farine et légèrement fissurée de la croix.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croix est trop peu profonde — moins de 1cm de profondeur. La chaleur ne peut pénétrer dans le centre et l'intérieur restera sous le feu.",
            "action": "Recoupez la croix plus profondément. Le couteau devrait traverser environ 80 % de la profondeur du pain."
          },
          {
            "state": "Perfect",
            "description": "La croix est coupée presque jusqu'à la base du pain. Les quatre quadrants s'ouvrent légèrement de la coupe, comme une fleur sur le point de fleurir. Le pain est approximativement rond et uniformément bombé.",
            "action": "Cuire immédiatement sur l'étagère centrale."
          },
          {
            "state": "Overdone",
            "description": "Le pain a été trop manipulé pendant la formation et est maintenant lisse et plat — la pâte a sur-développé et s'est étendue. Le bicarbonate de soude s'est encore épuisé.",
            "action": "Faites cuire immédiatement. Privilégier le temps du four — la vitesse compte plus que la forme parfaite à ce stade."
          }
        ]
      },
      "feelCue": "Ramassez doucement le pain en forme — il doit se sentir aéré et printanier, pas dense ou lourd. Appuyez légèrement sur le centre à l'aide d'un doigt fariné; il devrait s'immerger et revenir lentement, un signe que le levain fonctionne activement."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "shaped_loaf"
      ],
      "outputState": "finished_soda_bread",
      "instructions": "Cuire au four à 220°C (425°F) pendant 20 minutes. Sans ouvrir le four, réduisez la température à 200°C (390°F) et faites cuire encore 20 à 25 minutes. Pour tester la finesse, soulevez le pain et tapez fermement la base avec votre joint: un pain de soda entièrement cuit sonne creux, comme une boîte en bois vide. Si ça sonne dense et terne, retournez au four pendant 5 minutes de plus. Laisser refroidir sur une grille pendant au moins 20 minutes avant de couper.",
      "visualCue": {
        "primaryTarget": "Une croûte dorée profonde partout, la croix s'est étendue. Les quatre quadrants ont fleuri et se sont levés séparément. Il ne reste pas de taches pâles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est d'or pâle et la croix n'est pas complètement ouverte. Un robinet sur la base semble terne et dense, pas creux.",
            "action": "Retourner au four à 200°C pendant 10 minutes de plus, placer le pain directement sur la grille du four pour une base plus croustillante."
          },
          {
            "state": "Perfect",
            "description": "Même la croûte dorée foncée, la croix ouverte avec chaque quart légèrement enroulé vers l'extérieur. Le robinet de base produit un son clair et creux, comme un bol en céramique renversé. L'arôme est grillé grain et lait de beurre tang.",
            "action": "Refroidir sur une grille. Découper trop tôt crée un intérieur gommé — la vapeur continue de finir la miette."
          },
          {
            "state": "Overdone",
            "description": "La croûte est brun foncé ou craquelée. Les quartiers croisés se sont séparés et le pain a un extérieur presque dur. La base sent légèrement l'omble.",
            "action": "L'intérieur est probablement encore bon. Couper la croûte la plus sombre pour révéler la miette tendre. Servir avec beaucoup de beurre pour compenser."
          }
        ]
      },
      "feelCue": "Le test de robinet est le plus fiable: tenez le pain sur votre paume et frappez fermement le centre de la base avec votre couenne — un pain de soude cuit à travers résonne avec un coup creux clair et retentissant. Un pain sous-cuit touffe à plat comme un bloc de bois."
    }
  ]
};
