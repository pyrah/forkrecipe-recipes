export default {
  "repoId": "master_french_lobster_bisque_001",
  "parentRepoId": null,
  "slug": "lobster-bisque",
  "author": "ForkRecipe Kitchen",
  "title": "Lobster Bisque",
  "description": "Le plus grand des bisques français — des homards entiers torréfiés et déglacés avec du cognac, mijotés de vin blanc et de poisson avec des tomates et de l'estragon, tendus deux fois et montés avec de la crème dans une soupe de corail pâle d'une extraordinaire richesse.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "seafood",
  "tags": [
    "français",
    "classique"
  ],
  "difficulty": 4,
  "activeTime": "1 hr",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Langoustes vivants (ou queues de homard + coquilles)",
      "ratioValue": 2,
      "defaultUnit": "whole (600 g each)",
      "substitutions": [
        "queues de homard frais + coquilles supplémentaires du poissonnier"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Échalotes coupées en dés",
      "ratioValue": 4,
      "defaultUnit": "whole",
      "substitutions": [
        "oignon blanc, moitié"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Carotte en dés",
      "ratioValue": 1,
      "defaultUnit": "medium",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Pâte de céleri, coupée en dés",
      "ratioValue": 2,
      "defaultUnit": "stalks",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Ail, cassé",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "2 tomates mûres, hachées"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Solvent",
      "name": "Cognac ou Armagnac",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "brandy sec",
        "Calvados"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Solvent",
      "name": "Vin blanc sec",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": [
        "Vermouth sec"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Stock de poisson ou jus de palourde",
      "ratioValue": 1,
      "defaultUnit": "liter",
      "substitutions": [
        "Conchyliculture légère"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": [
        "Crème fraîche"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Herb",
      "name": "Estragon frais",
      "ratioValue": 8,
      "defaultUnit": "sprigs",
      "substitutions": [
        "Estragon séché (1 c. à thé)"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Aromatic",
      "name": "Feuille de la baie",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Heat",
      "name": "Poivre de Cayenne",
      "ratioValue": 1,
      "defaultUnit": "pinch",
      "substitutions": [
        "poivre blanc"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_16",
      "role": "Seasoning",
      "name": "Poivre blanc, fraîchement moulu",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_17",
      "role": "Garnish",
      "name": "Feuilles fraîches de cerveau ou d'estragon",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "ciboulette, finement reniflée"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtis",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "roasted_lobster_and_shells",
      "instructions": "Déplacez les homards avec humanité en les plaçant au congélateur pendant 20 minutes avant de les diviser. Divisez les homards dans le sens de la longueur avec un couteau lourd tranchant, ou utilisez des queues de homard et des coquilles réservées. Chauffer le beurre dans une grande torréfaction ou un grand four hollandais à feu vif jusqu'à ce qu'il mousse. Ajouter les coquilles de homard et la queue de viande coupée. Faire rôtir à feu vif, en tournant parfois de 8 à 10 minutes jusqu'à ce que les coquilles tournent un rouge orange brillant et uniforme et que le beurre prenne une teinte de corail des pigments de la coquille. Retirer la queue de la viande lorsqu'elle est simplement cuite et réserver pour garnir.",
      "visualCue": {
        "primaryTarget": "Les coquilles sont un orange corallien vivant et uniforme. Le beurre a tourné un corallien à partir des pigments de la coquille. La cuisine sent intensément la mer et les crustacés grillés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coquilles sont encore vert-gris tacheté et n'ont pas libéré leur couleur orange dans le beurre. Le bisque manquera de couleur et de profondeur caractéristiques.",
            "action": "Continuer à rôtir à feu vif, en tournant les coquilles pour exposer toutes les surfaces."
          },
          {
            "state": "Perfect",
            "description": "Chaque coquille est un corallien-orange vif. Le beurre est de couleur rose et aromatique. La poêle à rôtir a un goût foncé et parfumé sur la base. La queue est opaque et corallienne partout.",
            "action": "Ajouter le mirpoix et la pâte de tomate."
          },
          {
            "state": "Overdone",
            "description": "Les coquilles commencent à noircir les bords. Le fond dans la poêle est très sombre et commence à sentir l'acride.",
            "action": "Réduire la chaleur immédiatement et procéder. Évitez de gratter les taches noircies lors du déglacement."
          }
        ]
      },
      "feelCue": "Ramassez une coquille — elle devrait être plus légère que lorsqu'elle est crue et qu'elle sent intensément le homard rôti, comme si elle se tenait près d'un feu de rivage. Le pigment corallien sous la coquille va tacher vos doigts orange."
    },
    {
      "nodeId": "step_2",
      "action": "Caramélisation",
      "inputs": [
        "roasted_lobster_and_shells",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "pinced_bisque_base",
      "instructions": "Ajouter les échalotes en dés, les carottes et le céleri dans la casserole des coquilles grillées. Cuire à feu moyen-vif pendant 5 minutes en remuant, jusqu'à ce que les légumes ramollissent et commencent à caraméliser les bords. Ajouter l'ail et la pâte de tomate. Incorporer constamment la pâte de tomate dans les légumes et les coquilles pendant 2 à 3 minutes jusqu'à ce qu'elle s'assombrisse du rouge vif à un rouge-brique profond, c'est-à-dire le pinçage, qui élimine l'acidité brute et développe une douceur savoureuse profonde. Le fond sur la base de la casserole s'intensifiera.",
      "visualCue": {
        "primaryTarget": "La pâte de tomate s'est assombrie à un rouge brunâtre et sent le caramélisé et doux. Les légumes sont doux et enrobés de pâte foncée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte de tomate est encore rouge vif et goûte cru et acide. Il n'a pas eu le temps de caraméliser.",
            "action": "Continuer à remuer à feu moyen-vif pendant 2 minutes."
          },
          {
            "state": "Perfect",
            "description": "La pâte est rouge brique foncée et sent doux et profondément salé plutôt que vif et cru. Les légumes sont complètement doux et glacés. Le fond du pot montre un fond sombre et caramélisé.",
            "action": "Flamme au cognac."
          },
          {
            "state": "Overdone",
            "description": "La pâte de tomates est devenue noire et sent amère. Le fond est brûlé.",
            "action": "Procédez au déglacement immédiatement — le cognac va dissoudre le fond. Évitez de gratter les zones noircies."
          }
        ]
      },
      "feelCue": "Le mélange dans le pot doit se sentir dense et cohésif lorsqu'il est agité — non pas humide et saucissant, mais épais et collant, comme une pâte riche et concentrée."
    },
    {
      "nodeId": "step_3",
      "action": "Déglacement",
      "inputs": [
        "pinced_bisque_base",
        "ing_08",
        "ing_09"
      ],
      "outputState": "deglazed_bisque_pot",
      "instructions": "Verser le cognac dans le pot. Sur un poêle à gaz, inclinez soigneusement la poêle pour brûler le cognac — la flamme bleue s'éteindra dans les 10 à 15 secondes à mesure que l'alcool se consume. Sur l'induction ou l'électricité, laissez simplement l'alcool buller et s'évaporer pendant 2 minutes. Ajouter le vin blanc et racler tout le fond caramélisé du fond de la casserole avec une cuillère en bois — chaque morceau de ce fond est concentré saveur bisque. Laisser le vin réduire de moitié avant d'ajouter le stock.",
      "visualCue": {
        "primaryTarget": "Le fond s'est complètement dissous dans le liquide. La sauce est riche en cuivre foncé et sent profondément le homard et le vin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Fond encore visible sur le fond de la poêle comme des taches sombres. L'odeur d'alcool est encore crue et dure — le cognac n'a pas complètement diminué.",
            "action": "Grattez vigoureusement et continuez à feu vif jusqu'à ce que l'odeur d'alcool se dissipe."
          },
          {
            "state": "Perfect",
            "description": "Le fond est propre. Le liquide est une réduction riche, parfumée et teintée de cuivre du vin et du cognac contenant toutes les saveurs de mollusques et légumes en solution.",
            "action": "Ajouter le stock de poisson et les aromatiques."
          },
          {
            "state": "Overdone",
            "description": "La réduction est allée trop loin — seul un résidu sirupeux reste dans la casserole.",
            "action": "Ajouter le stock de poisson immédiatement avant la réduction."
          }
        ]
      },
      "feelCue": "Penchez-vous sur le pot après le flammé et l'inhalation du cognac — vous devriez sentir la coquille de homard grillée, le vin, et le murmure le plus faible du caramel. Si vous sentez toujours l'alcool cru, réduisez encore."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "deglazed_bisque_pot",
        "ing_10",
        "ing_12",
        "ing_13"
      ],
      "outputState": "simmered_bisque",
      "instructions": "Ajouter le stock de poissons, l'estragon et les feuilles de laurier. Porter à ébullition, puis laisser mijoter doucement et régulièrement. Cuire à découvert pendant 25 à 30 minutes, permettant aux coquilles de céder toute leur saveur au liquide. Éjaculez toute mousse qui monte à la surface pendant les 5 premières minutes. Le liquide s'approfondira en couleur et se concentrera. Ne précipitez pas cette étape — cette longue mijotée est ce qui distingue un bisque de restaurant d'une approximation de raccourci.",
      "visualCue": {
        "primaryTarget": "Le liquide s'est approfondi jusqu'à un riche ambre rougeâtre et réduit d'environ un quart. L'odeur est intense de la mer et des crustacés doux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est encore mince et pâle. Le stock n'a pas encore absorbé assez de caractère des coquilles. La saveur est aqueuse et sous-développée.",
            "action": "Continuez à mijoter. Cette étape ne peut être précipitée."
          },
          {
            "state": "Perfect",
            "description": "Le liquide est profond, rougeâtre-ambre et a sensiblement diminué. Lorsque vous plongez une cuillère et goûtez, la profondeur océanique et douce des mollusques est incomparable et multicouche.",
            "action": "Mélanger et serrer."
          },
          {
            "state": "Overdone",
            "description": "Le liquide a diminué de façon trop agressive et est très concentré et salé. La saveur de la coquille commence à devenir amère.",
            "action": "Ajouter une petite quantité de stock supplémentaire ou d'eau pour revenir à l'équilibre."
          }
        ]
      },
      "feelCue": "Le liquide mijotant doit sentir comme un quai côtier un soir d'été: sel, iode, coquille et douceur."
    },
    {
      "nodeId": "step_5",
      "action": "Mélange",
      "inputs": [
        "simmered_bisque"
      ],
      "outputState": "blended_bisque",
      "instructions": "Enlevez les feuilles de la baie. Transférer tout — les coquilles incluses — dans un mélangeur à haute puissance en lots et mélanger en haut pendant 60 secondes par lot. Les coquilles se fragmentent et apportent de l'amidon, du calcium et de la couleur au bisque. Passer le mélange mélangé à travers un tamis à mailles fines, en appuyant dur avec le dos d'une louche pour extraire chaque goutte de liquide. Jetez les fragments de la coquille. Passez à travers le tamis une deuxième fois pour un résultat particulièrement soyeux.",
      "visualCue": {
        "primaryTarget": "Après déformation : liquide corallien-orange lisse et vif sans particules visibles. Il enveloppe l'arrière d'une louche dans un film fin, même.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Bisque a encore des particules visibles et des morceaux fibreux des coquilles et des légumes. Il aura une texture gritty dans le bol.",
            "action": "Passez à travers un tamis plus fin, poussez fermement avec une louche, ou filtrez une seconde fois à travers une nappe de fromage."
          },
          {
            "state": "Perfect",
            "description": "Un bisque corallien-orange tout à fait lisse et vif. Un peu brillant et exempt de tout grain. Lorsque vous tenez une louche à la lumière, elle est translucide et brillante.",
            "action": "Retournez dans la casserole et montez avec de la crème."
          },
          {
            "state": "Overdone",
            "description": "Vous avez pressé si fort que la fibre végétale et la coquille en poudre ont forcé à travers le tamis, rendant la bisque boueuse et légèrement grainée.",
            "action": "Passez encore une fois à travers un bon tamis sans presser — laissez la gravité faire le travail."
          }
        ]
      },
      "feelCue": "Frottez une goutte entre vos doigts après avoir serré — il ne devrait absolument pas y avoir de grain ou de grain. Le bisque doit être doux comme de la soie chaude."
    },
    {
      "nodeId": "step_6",
      "action": "Réduire",
      "inputs": [
        "blended_bisque",
        "ing_11",
        "ing_14",
        "ing_15",
        "ing_16",
        "ing_17"
      ],
      "outputState": "finished_lobster_bisque",
      "instructions": "Retournez le bisque tendu dans une casserole propre. Ajouter la crème lourde et laisser mijoter. Réduire de 8 à 10 minutes en remuant de temps en temps, jusqu'à ce que la bisque enveloppe l'arrière d'une cuillère et que la saveur se concentre davantage. Assaisonner soigneusement avec du sel, du poivre blanc et une pincée discrète de Cayenne. La charcuterie du homard est réservée pendant 60 secondes. Déposer dans des bols chauds, placer un morceau de viande de homard au centre, et terminer avec des feuilles de cerveau ou d'estragon frais et une bruine de crème fraîche en option.",
      "visualCue": {
        "primaryTarget": "Un corail pâle, un bisque velouté qui coule lentement et enveloppe une cuillère d'un film épais et même. Riche et profondément parfumé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Bisque est mince et aqueuse. Il coule de la cuillère dans un ruisseau mince. La crème n'a pas encore intégré et la saveur manque de concentration.",
            "action": "Continuer à réduire à feu moyen en remuant pendant 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "La bisque enveloppe l'arrière d'une cuillère et une ligne tirée d'un bout de doigt tient sa forme. La couleur est un corail-salmon pâle. Le goût est riche, océanique, légèrement sucré, et subtilement grimpé de cayenne.",
            "action": "Servir immédiatement dans des bols chauds."
          },
          {
            "state": "Overdone",
            "description": "Le bisque a été réduit à une consistance épaisse, presque comme de la sauce. Il est très concentré et salé.",
            "action": "Fine avec une petite quantité de crème chaude ou de poisson stock, fouettant continuellement à incorporer."
          }
        ]
      },
      "feelCue": "Un bisque correct devrait se sentir important sur la langue — riche et enduit comme du velours, avec une chaleur qui se construit lentement à partir de la cayenne et une douceur océanique qui persiste après chaque cuillère."
    }
  ]
};
