export default {
  "repoId": "master_french_prawn_bisque_base_001",
  "parentRepoId": null,
  "slug": "prawn-bisque-base",
  "author": "ForkRecipe Kitchen",
  "title": "Base Bisque coudée",
  "description": "La base du bisque classique — les coquilles de crevettes rôties jusqu'à l'orange profonde, puis déglacées avec du cognac et du vin blanc, mijotées d'aromates et de crème dans une base riche et corallienne.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "stocks",
  "tags": [
    "français",
    "classique",
    "crustacés",
    "bisque",
    "crème",
    "Cognac"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Coquilles et têtes de crevettes (à partir de 1 kg)",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "Coquilles de crabe",
        "coquilles de homard"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Échalotes coupées en dés",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "oignon blanc"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Pâte de céleri, coupée en dés",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Carotte coupée en dés",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Girofles d'ail, tranchés",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "2 tomates roms mûres, hachées approximativement"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Solvent",
      "name": "Cognac ou cognac",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "sherry sec",
        "Pernode pour une note de fenouil"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "Vin blanc sec",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": [
        "Vermouth sec"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Stocks ou eaux de poissons",
      "ratioValue": 750,
      "defaultUnit": "ml",
      "substitutions": [
        "Poulet léger (moins marin)"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": [
        "crème de coco (sans lait)"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Aromatic",
      "name": "Feuille de la baie",
      "ratioValue": 1,
      "defaultUnit": "leaf",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Herb",
      "name": "Tours d'estragon frais",
      "ratioValue": 3,
      "defaultUnit": "sprigs",
      "substitutions": [
        "1/4 c. à thé d'estragon séché"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Heat",
      "name": "Poivre de Cayenne",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": [
        "pincée de paprika fumé"
      ]
    },
    {
      "ingId": "ing_14",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_15",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_16",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sear",
      "inputs": [
        "ing_01",
        "ing_15",
        "ing_16"
      ],
      "outputState": "roasted_shells",
      "instructions": "Chauffer le beurre et l'huile d'olive ensemble dans une grande casserole à fond lourd à feu vif jusqu'à ce que la mousse de beurre s'abaisse et que la graisse soit très chaude — presque fumer. Ajouter les coquilles et les têtes de crevettes en une seule couche. Ne pas remuer pendant les 2 premières minutes. Vous cherchez la réaction de Maillard à se produire sur la surface de la coquille, créant la saveur de coquillages grillés qui est l'âme de bisque. Après 2 minutes, remuer et remuer vigoureusement pendant encore 3-4 minutes jusqu'à ce que les coquilles soient uniformément orange-rouge et que la cuisine sente intensément les crustacés grillés.",
      "visualCue": {
        "primaryTarget": "Les coquilles sont passées du rose gris à un rouge orange vif et profond. Le fond de la marmite a développé un goût de crustacés brun foncé. La chambre sent très bien la crevette rôtie.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coquilles sont rose pâle, à peine colorées. Pas d'affection pour le fond du pot. L'odeur est crue, briny, pas grillée.",
            "action": "Gardez la chaleur très élevée et résistez à l'agitation — les coquilles ont besoin d'un contact thermique élevé pour se colorer correctement."
          },
          {
            "state": "Perfect",
            "description": "Des coquilles orange-rouge. Brun foncé — presque noir — affectionne le fond du pot. L'odeur est passée de fruits de mer crus à quelque chose de profondément grillé et complexe.",
            "action": "Ajouter la pâte de tomate et remuer au pinceau (caraméliser)."
          },
          {
            "state": "Overdone",
            "description": "Les coquilles commencent à noircir les bords et le fond est brûlé. Une odeur amère et acride.",
            "action": "Déglacer immédiatement avec le cognac pour arrêter la brûlure. Réduire la chaleur pour les étapes restantes. Une certaine amertume sera présente mais sera muée par la crème."
          }
        ]
      },
      "feelCue": "Écoutez le pot: les coquilles qui s'entretuent à la bonne température devraient produire un étourdissement continu et agressif, presque un rugissement. S'il semble qu'il s'agisse d'un alevin calme, la chaleur est insuffisante et les coquillages sont à la vapeur plutôt qu'à la mer."
    },
    {
      "nodeId": "step_2",
      "action": "Caramélisation",
      "inputs": [
        "roasted_shells",
        "ing_06"
      ],
      "outputState": "pinced_shells",
      "instructions": "Ajouter la pâte de tomate directement aux coquilles et remuer vigoureusement pour enrober chaque coquille de la pâte. Cette technique, appelée pinçage dans la cuisine classique française, consiste à faire frire la pâte de tomate dans la graisse de la coquille pendant 2-3 minutes jusqu'à ce qu'elle s'assombrisse du rouge à une profonde brique-orange et colle à des endroits au fond du pot. L'acidité de la pâte de tomate cuit, laissant la douceur concentrée qui renforce la douceur des mollusques.",
      "visualCue": {
        "primaryTarget": "La pâte de tomate a obscurci du rouge vif à un orange-rouille profond et est visiblement collant et caramélisant contre le fond de pot chaud. Les coquilles sont recouvertes d'un glaçure mince, collant et brun orange.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte de tomates est encore rouge vif et humide. Aucun changement de couleur sur la pâte elle-même.",
            "action": "Faire frire une autre minute à feu vif — la pâte doit sécher et se concentrer avant d'être prête pour le déglaçage."
          },
          {
            "state": "Perfect",
            "description": "La pâte a obscurci et le fond du pot montre des taches sombres où il a caramélisé. La douceur de la tomate rôtie est maintenant décelable sous l'arôme des mollusques.",
            "action": "Ajouter immédiatement le cognac et déglacer."
          },
          {
            "state": "Overdone",
            "description": "La pâte de tomate est noire et acride. Le fond du pot est fortement brûlé.",
            "action": "Ajouter le cognac immédiatement et travailler rapidement pour déglacer. Si la brûlure est grave, la base de bisque aura un goût amer."
          }
        ]
      },
      "feelCue": "Une légère résistance piquante lorsque vous faites glisser la cuillère sur le fond du pot — c'est la pâte de tomate caramélisée qui se lie au métal. Il doit se détacher avec le mouvement de la cuillère, pas s'écouler librement."
    },
    {
      "nodeId": "step_3",
      "action": "Déglacement",
      "inputs": [
        "pinced_shells",
        "ing_07",
        "ing_08"
      ],
      "outputState": "deglazed_shells",
      "instructions": "Verser le cognac dans la casserole et remuer vigoureusement — l'alcool lèvera immédiatement le fond du fond. Si vous avez une flamme à gaz, abaissez légèrement la poêle et laissez le cognac brûler brièvement (flammé), qui brûle du bord d'alcool le plus dur tout en préservant la complexité du cognac. Laisser la flamme mourir naturellement, puis ajouter le vin blanc. Réduire le vin de moitié à feu vif, environ 5 minutes, en remuant occasionnellement. Le liquide doit sentir les mollusques, le cognac grillé et une légère douceur marine.",
      "visualCue": {
        "primaryTarget": "Après la réduction du vin, le liquide est un ambre-orange concentré et profond. Les coquilles et les aromatiques sont baignés dans un liquide épais et légèrement sirupeux. Le fond est propre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le vin n'a pas diminué — le liquide est mince et aqueux, or pâle. L'alcool brut est toujours prédominant dans l'arôme.",
            "action": "Continuer à réduire à feu vif. L'étape de réduction concentre tout et ne doit pas être ignorée."
          },
          {
            "state": "Perfect",
            "description": "Le liquide s'est réduit à une glaçure qui enveloppe les coquilles, soit environ la moitié de son volume d'origine. La couleur est ambre-orange profonde. Ça sent complexe et accueillant.",
            "action": "Ajouter les aromatiques et les poissons."
          },
          {
            "state": "Overdone",
            "description": "Le vin s'est réduit à presque rien — les coquilles sont presque sèches et commencent à brûler à nouveau.",
            "action": "Ajouter immédiatement le stock de poisson. Travaillez rapidement — le vin brûlé est amer et dur."
          }
        ]
      },
      "feelCue": "Inclinez le pot et regardez la mise en commun du liquide dans le coin — il devrait laisser un mince revêtement légèrement sirupeux sur la paroi du pot pendant qu'il s'écoule, ne pas courir librement comme de l'eau."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter",
      "inputs": [
        "deglazed_shells",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_09",
        "ing_11",
        "ing_12",
        "ing_13"
      ],
      "outputState": "simmered_bisque",
      "instructions": "Ajouter les échalotes, le céleri, la carotte et l'ail dans la casserole et remuer. Ajouter le stock de poissons, la feuille de laurier, l'estragon et la cayenne. Porter à mijoter et cuire 25-30 minutes. Ne pas faire bouillir de façon agressive: les stocks de mollusques deviennent amers sous un ébullition. Le bouillon doit être un coral orangé riche et chaud. A 25 minutes, goût : il devrait être intensément salé, sucré par les coquillages, et chaud épicé par la cayenne.",
      "visualCue": {
        "primaryTarget": "Un bouillon corallien-orange vibrant mijotant doucement autour d'une masse de coquilles et de légumes. Après 25 minutes, le bouillon a un aspect brillant, légèrement réduit et une couleur orange profonde et chaude.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est en or pâle après 15 minutes. La saveur est mince et n'a pas extrait la profondeur des coquilles.",
            "action": "Continuer à mijoter — les coquillages ont besoin d'au moins 25-30 minutes pour libérer complètement leurs composés aromatisants."
          },
          {
            "state": "Perfect",
            "description": "Après 30 minutes, le bouillon est un corail-orange profond et chaud avec un éclat brillant. Une cuillerée goûte fortement de crevette avec support de douceur et d'épices. L'estragon est détectable mais subtil.",
            "action": "Retirer du feu et mélanger les coquilles dans le bouillon."
          },
          {
            "state": "Overdone",
            "description": "Pendant plus de 45 minutes, les coquilles ont donné une note légèrement amère et trop cuite. La couleur de la bordure est foncée vers le brun.",
            "action": "Continuez immédiatement. La crème et la réduction adouciront l'extraction excédentaire."
          }
        ]
      },
      "feelCue": "Apportez une louche du bouillon chaud près de votre visage et inhalez - la vapeur doit sentir comme se tenir à côté d'une grille de charbon sur une jetée côtière, tous les coquillages rôtis et le sel de mer avec un murmure de cognac."
    },
    {
      "nodeId": "step_5",
      "action": "Mélange",
      "inputs": [
        "simmered_bisque"
      ],
      "outputState": "blended_bisque",
      "instructions": "Enlever la feuille de laurier et les brins d'estragon. Travailler en lots (ou à l'aide d'un mélangeur d'immersion), mélanger la totalité du contenu du pot — coquilles, légumes et bouillon — à grande vitesse pendant 2 minutes par lot. Les coquilles se décomposent en petits fragments. Cette étape extrait le dernier collagène et la chitine des coquilles et donne à la bisque son corps opaque et velouté caractéristique. Bien mélanger.",
      "visualCue": {
        "primaryTarget": "Un liquide corallien-orange épais et vif qui a l'air légèrement gris et est définitivement opaque. Les coquilles se sont cassées dans le bouillon.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De gros fragments de coquilles encore visibles. On dirait toujours un ragoût plutôt qu'une base mélangée.",
            "action": "Mélanger encore 60 secondes à grande vitesse — les coquilles sont difficiles et doivent être mélangées de façon prolongée pour se décomposer."
          },
          {
            "state": "Perfect",
            "description": "Un liquide corallien dynamique et uniforme avec des particules fines. Opaque et légèrement épais. Sensation intense de crustacés grillés.",
            "action": "Plongez dans un tamis fin et appuyez fermement pour extraire tout le liquide."
          },
          {
            "state": "Overdone",
            "description": "Un liquide très fin, presque lisse. Il reste peu de texture.",
            "action": "Ceci est acceptable — la souche et la crème subséquentes produiront une belle bisque, peu importe la finesse des coquilles."
          }
        ]
      },
      "feelCue": "Le liquide mélangé doit se sentir légèrement gras sur la langue — les particules fines de la coquille qui seront éliminées par déformation mais qui ont transféré ses composés chitinés et aromatisés au bouillon pendant le mélange."
    },
    {
      "nodeId": "step_6",
      "action": "Réduire",
      "inputs": [
        "blended_bisque",
        "ing_10",
        "ing_14"
      ],
      "outputState": "finished_bisque_base",
      "instructions": "Placer la bisque mélangée dans un tamis à mailles fines, en pressant fermement le dos d'une louche pour extraire le plus de liquide possible de la pulpe de coquille. Jeter la pâte sèche. Retourner le liquide tendu dans une casserole propre. Ajouter la crème lourde et laisser mijoter. Réduire à feu moyen pendant 10-15 minutes, en remuant de temps en temps, jusqu'à ce que la bisque s'épaississe à une consistance qui enveloppe l'arrière d'une cuillère et que la couleur s'approfondisse jusqu'à un riche sel de corail. Assaisonner de sel. Goûtez et ajustez - la bisque doit être luxuriante et intensément aromatisée, légèrement sucrée des mollusques et de la crème.",
      "visualCue": {
        "primaryTarget": "Une sauce corallien-saumon soyeuse qui recouvre une cuillère dans un lent, même verser. Complètement lisse et velouté. La couleur est un chaud, riche corail-orange.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Bisque est trop mince — coule une cuillère comme de l'eau. La couleur est pâle et la saveur est diluée.",
            "action": "Continuer à réduire à feu moyen — la crème doit réduire d'au moins 20% pour une bonne consistance."
          },
          {
            "state": "Perfect",
            "description": "La bisque enrobe une cuillère et lorsque vous dessinez un doigt à travers la couche, la ligne reste propre pendant 3-4 secondes avant de se refermer lentement. La couleur est un corail profond et chaud. Le goût est riche, doux, salé et légèrement réchauffé de la cayenne.",
            "action": "Plongez encore une fois dans un tamis fin pour obtenir le résultat le plus doux possible. Utiliser immédiatement comme base bisque ou refroidir et réfrigérer 3 jours."
          },
          {
            "state": "Overdone",
            "description": "Surréduit à une sauce épaisse, collante et collante, plus comme une glaçure qu'une bisque. Couleur foncée, rouge brunâtre.",
            "action": "Fin avec 50 ml de stock de poisson chaud ou d'eau, fouettant à feu doux pour incorporer. Réduire davantage seulement si encore trop mince."
          }
        ]
      },
      "feelCue": "Prenez une cuillère et laissez refroidir sur votre lèvre inférieure un moment avant de déguster — une base de bisque correctement faite devrait se sentir veloutée et presque assez riche pour se sentir solide en bouche, enrobant votre bouche d'une manière que les stocks à base d'eau ne peuvent jamais."
    }
  ]
};
