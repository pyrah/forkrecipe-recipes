export default {
  "repoId": "master_chinese_hong-shao-rou_001",
  "parentRepoId": null,
  "slug": "hong-shao-rou",
  "author": "ForkRecipe Kitchen",
  "title": "Hong Shao Rou",
  "description": "Le ventre de porc braisé dans le vin Shaoxing, la sauce de soja et le sucre de roche jusqu'à ce que le collagène se dissout dans une sauce laquée brillante — chaque cube tremble sur la baguette et inonde la langue d'une richesse sucrée et salée qui s'accroche pendant des minutes.",
  "cuisine": "Chinois",
  "culture": "Shanghainese",
  "category": "proteins",
  "tags": [
    "braisés rouges",
    "ventre de porc",
    "Chinois",
    "soja",
    "Faire cuire lentement"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "2 hours 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 7,
    "salty": 7,
    "sour": 1,
    "bitter": 1,
    "umami": 8,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Porc ventre, peau coupée en cubes de 4 cm",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "épaule de porc (moins soyeuse)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Solvent",
      "name": "Vin de riz shaoxant",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "sherry sec",
        "Mijiu"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "sauce de soja foncé",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "sauce de soja légère",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre de roche (bing tang)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre brun",
        "sucre blanc"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Gingembre frais, tranché 3 mm d'épaisseur",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Échalons, liés dans un noeud",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Anis étoilé",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Chili séché (facultatif, 1–2 entier)",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Hydration",
      "name": "Eau ou stock de porc léger",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanchir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "blanched_pork",
      "instructions": "Placer les cubes du ventre de porc dans une casserole froide et couvrir d'eau froide de 2 pouces. Porter à ébullition à feu vif. Au fur et à mesure qu'il chauffe, l'écume grise monte à la surface, c'est la protéine coagulée et le sang. Écraser et jeter l'écume telle qu'elle apparaît. Après avoir atteint un ébullition complet, blanchir encore 3 minutes. Égoutter et rincer chaque pièce sous de l'eau froide courante, frotter avec vos doigts pour enlever toute autre ordure. Sèche-toi avec des serviettes en papier. Cette étape de blanchiment n'est pas négociable – elle élimine les impuretés et empêche la sauce de braisage finale de tourner le murmure.",
      "visualCue": {
        "primaryTarget": "Nettoyer les cubes de porc pâle à la chair rose et à la peau blanche, sans film gris ni résidu visible à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les résidus gris s'accrochent encore à la surface de la viande. La chair extérieure est encore rose pâle.",
            "action": "Rincer plus soigneusement sous l'eau froide tout en frottant les doigts."
          },
          {
            "state": "Perfect",
            "description": "Surface extérieure propre et blanche mat. La peau est ferme mais pas encore cuite. Une odeur de porc frais, pas de notes.",
            "action": "Sèche-toi et va caraméliser le sucre."
          },
          {
            "state": "Overdone",
            "description": "Le porc a été blanchi trop longtemps — la chair est entièrement grise et commence à se resserrer.",
            "action": "Procéder — il va encore bien brasser, mais il faudra un peu plus de temps pour devenir tendre."
          }
        ]
      },
      "feelCue": "Les cubes de porc blanchis doivent se sentir fermes et légèrement collants à l'extérieur de la surface nettoyée du collagène, non visqueux, pas gras. La peau doit avoir une opacité blanche propre."
    },
    {
      "nodeId": "step_2",
      "action": "Caraméliser",
      "inputs": [
        "ing_05"
      ],
      "outputState": "caramelized_sugar",
      "instructions": "Chauffer un wok ou un pot lourd à feu moyen-doux. Ajouter une petite quantité d'huile, puis les cristaux de sucre de roche. Mélanger constamment avec une spatule au fur et à mesure que le sucre fond – le sucre de roche fond inégalement et brûle rapidement. Comme le sucre liquéfie complètement, il passera de l'ambre pâle à une acajou profonde en environ 2–3 minutes. Regardez attentivement: trop de lumière et le braise manque de couleur et d'amertume; trop sombre et il devient astringent. Une fois que la couleur s'approfondit à une ambre sombre et des odeurs de caramel brûlé, ajouter le porc immédiatement.",
      "visualCue": {
        "primaryTarget": "Une piscine bouillonnante de sucre liquide ambre-mahogany profond, qui commence juste à fumer aux bords. Sensations de caramel foncé et légère amertume.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sucre est ambre pâle et toujours très doux. Cela produit un braise plate et simple sans profondeur.",
            "action": "Continuer la cuisson à feu moyen. Regardez attentivement — le changement de couleur s'accélère."
          },
          {
            "state": "Perfect",
            "description": "Acajou profond, caramel presque brun. Sens de caramel foncé avec un léger bord d'amertume. Première fumée.",
            "action": "Ajouter le ventre de porc immédiatement et mélanger pour enrober."
          },
          {
            "state": "Overdone",
            "description": "Le sucre est devenu noir et sent acride et brûlé.",
            "action": "Jeter et recommencer — le caramel brûlé ne peut être sauvé et rendra le braise amer."
          }
        ]
      },
      "feelCue": "Le sucre caramélisant sifflera et crachera comme il cuisine — reculez légèrement. L'odeur passe du caramel pur doux au caramel complexe au bord de l'amertume en quelques secondes. Faites confiance à votre nez plus que vos yeux à ce stade."
    },
    {
      "nodeId": "step_3",
      "action": "Saisir",
      "inputs": [
        "blanched_pork",
        "caramelized_sugar"
      ],
      "outputState": "coated_pork",
      "instructions": "Ajouter le ventre de porc blanchi et séché au sucre caramélisé et jeter rapidement pour enrober toutes les surfaces. Le caramel chaud saisira et collera au porc pendant qu'il refroidit — travaillera vite. Faire frire à feu moyen-vif pendant 2 à 3 minutes jusqu'à ce que toutes les surfaces soient recouvertes de laque ambre profonde. Le porc crachera et sifflera intensément. Cette étape crée la couleur rouge-brun caractéristique de hong shao rou et scelle le caramel dans la surface de la viande.",
      "visualCue": {
        "primaryTarget": "Chaque cube de porc est laqué uniformément avec une glaçure jaune foncé. Le sucre a enduit la peau et le capuchon graisseux en particulier, donnant un aspect brillant et brillant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Certains cubes de porc sont encore pâles et non enduits, caramel durci avant que toutes les surfaces ne soient enrobées.",
            "action": "Ajouter 1 c. à soupe d'eau au wok pour refondre le caramel durci, puis jeter à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Chaque cube a une couche d'ambre profonde, en particulier le côté de la peau. Le wok sent le porc caramélisé et le caramel.",
            "action": "Ajouter les aromatiques et les liquides."
          },
          {
            "state": "Overdone",
            "description": "Les surfaces de porc sont brun foncé et le caramel commence à brûler sur le fond du wok.",
            "action": "Ajouter immédiatement le vin Shaoxing — la vapeur déglacera et arrêtera de brunir."
          }
        ]
      },
      "feelCue": "Le porc devrait s'étourdir agressivement alors qu'il frappe le caramel. Au fur et à mesure que vous remuez, vous devriez entendre le craquage de la fonte du caramel et le recollage des surfaces de la viande — un bruit constant de craquage et de collant."
    },
    {
      "nodeId": "step_4",
      "action": "Braiser",
      "inputs": [
        "coated_pork",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "braised_pork",
      "instructions": "Ajouter le vin Shaoxing d'abord — il va vapeur violemment et déglacer le wok, soulevant tout le caramel. Ajoutez ensuite du soja foncé, du soja clair, des tranches de gingembre, un nœud d'échon, de l'anis étoilé, du chili séché et suffisamment d'eau ou de bouillon pour couvrir le porc. Porter à ébullition, éjaculer les autres miettes, puis réduire à une mijote très douce (à peine bouillonner). Couvrir et brasser pendant 1 heure 30 minutes, tourner le porc toutes les 30 minutes afin que toutes les surfaces passent du temps submergé. Le braise se fait quand une baguette perce la partie la plus épaisse du ventre sans résistance.",
      "visualCue": {
        "primaryTarget": "Une acajou profonde, richement colorée braise avec les cubes de porc assis dans une sauce qui commence à se concentrer et à s'accrocher aux côtés du pot.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "À 60 minutes : le porc résiste encore à une baguette. La peau n'est pas encore gélatineuse.",
            "action": "Continuez à faire des larmes. Le collagène du ventre de porc nécessite une chaleur soutenue — ne vous précipitez pas."
          },
          {
            "state": "Perfect",
            "description": "À 90 minutes : la baguette glisse à l'intérieur et à l'extérieur avec une résistance nulle. La peau est devenue gélatine et presque translucide. Des couches de graisse qui vibrent.",
            "action": "Découvrez et augmentez la chaleur pour réduire la sauce."
          },
          {
            "state": "Overdone",
            "description": "Le porc s'effondre complètement, la peau s'est dissoute dans la sauce.",
            "action": "Retirer le porc doucement et réduire la sauce séparément. Remonter juste avant de servir."
          }
        ]
      },
      "feelCue": "Soulevez un cube avec des baguettes — le ventre de porc parfaitement braisé tremble et oscille, menaçant de tomber en morceaux mais de se tenir ensemble. Appuyez sur la peau avec une baguette : elle devrait compresser comme de la gélatine, pas ressortre."
    },
    {
      "nodeId": "step_5",
      "action": "Faire réduire",
      "inputs": [
        "braised_pork"
      ],
      "outputState": "finished_hong_shao_rou",
      "instructions": "Enlevez le gingembre, le nœud de pétoncle, l'anis étoilé et le chili. Augmenter le feu à moyen-élevé et cuire à découvert pendant 10-15 minutes, en tournant doucement le porc toutes les quelques minutes. La sauce réduira de moitié et s'épaissira en une glaçure brillante et laquée qui enveloppe l'arrière d'une cuillère. Cuiller continuellement la sauce réductrice sur le porc en épaississant. La sauce finale devrait être brillante, rouge acajou profond, et s'accrocher fortement à chaque cube. Si la sauce diminue trop vite, ajoutez une touche d'eau.",
      "visualCue": {
        "primaryTarget": "Les cubes de porc encaissés dans une épaisse glaçure rouge foncé, de couleur miroir, qui coule lentement lorsqu'elle est inclinée. La peau est laquée à une acajou profonde, presque translucide sous la glaçure.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore fine et aqueuse — elle s'écoule immédiatement du porc. N'enfile pas une cuillère.",
            "action": "Continuez à réduire. Une sauce trop fine sera mise sous le porc et le goût sera dilué."
          },
          {
            "state": "Perfect",
            "description": "La sauce couvre l'arrière d'une cuillère épaissement. Un doigt tiré à travers la cuillère laisse une ligne propre qui tient. Le porc brille.",
            "action": "Assiette immédiatement sur le riz blanc cuit à la vapeur."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été surréduite — collante, semblable à une confiture, et collante dans des touffes épaisses. Ça commence à brûler.",
            "action": "Ajouter 3 c. à soupe d'eau et remuer la chaleur pour dissoudre à nouveau à une consistance glaçure."
          }
        ]
      },
      "feelCue": "La sauce réduite enrobant un cube devrait se sentir collante sur les lèvres, comme être embrassée par une glaçure très riche et sucrée. Le porc lui-même, pressé entre la langue et le palais, devrait offrir presque aucune résistance avant de se dissoudre dans le gras et le collagène."
    }
  ]
};
