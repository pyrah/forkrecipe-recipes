export default {
  "repoId": "master_indian_samosa_filling_001",
  "parentRepoId": null,
  "slug": "samosa-filling",
  "author": "ForkRecipe Kitchen",
  "title": "Remplissage de Samosa",
  "description": "La purée de pommes de terre et les pois verts doux, grossièrement pliés avec une floraison de cumin, de coriandre, de gingembre et de chili vert, le remplissage qui a rendu les samosas irrésistibles pendant des siècles, parfumés et légèrement plus secs que vous ne l'attendiez, maintient donc sa forme à l'intérieur de la coquille de pâtisserie croquante sans la faire bouillir. Chaque morsure libère de l'amidon épicé chaud et une finition à base de plantes brillantes.",
  "cuisine": "Indiens",
  "culture": "Inde du Nord",
  "category": "vegetables",
  "tags": [
    "samosa",
    "pommes de terre",
    "pois",
    "végétarien",
    "Alimentation de rue",
    "collation",
    "remplissage"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 2,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Pommes de terre de cire (Yukon Gold ou similaires), entières bouillies et pelées",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "patate douce pour une variation plus douce"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Pois verts (écossés ou congelés, dégelés)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile neutre ou ghee",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Graines de cumin",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Graines de coriandre, légèrement broyées dans un mortier",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "1/2 cuillerée au sol"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé finement",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Heat",
      "name": "Piments verts (serrano ou thaï), finement hachés",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": [
        "1/4 tsp cayenne"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Coriandre au sol",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Amchur (poudre de mangue séchée)",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": [
        "1 c. à thé jus de citron (ajouter à la fin)"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Garam masala",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Spice",
      "name": "Turcuma au sol",
      "ratioValue": 0.25,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_13",
      "role": "Herb",
      "name": "Feuilles de coriandre fraîches et tiges tendres, finement hachées",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire bouillir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "boiled_potatoes",
      "instructions": "Couvrir l'ensemble des pommes de terre non pelées d'eau froide dans une casserole. Porter à ébullition à feu vif, puis laisser mijoter régulièrement et cuire jusqu'à ce qu'un couteau mince glisse au centre avec une résistance nulle — environ 20 à 25 minutes selon la taille. Ne vous précipitez pas avec une chaleur élevée ou les peaux se fendront et les pommes de terre absorberont trop d'eau. Égoutter et éplucher immédiatement pendant qu'il fait chaud — les peaux s'échappent facilement et la chair de pomme de terre verse mieux l'humidité lorsqu'elle est pelée au chaud. Étendre les pommes de terre pelées sur un plateau et les laisser à découvert pendant 5 minutes pour sécher à la vapeur. Puis écrasez-les à peu près avec une fourchette ou vos mains dans un mélange de petits morceaux et de morceaux plus gros cassés. Ne pas mash lisse — le remplissage a besoin de texture. Certains morceaux de pomme de terre de 1 à 2 cm de diamètre sont souhaitables.",
      "visualCue": {
        "primaryTarget": "Des morceaux de pommes de terre à l'aspect sec et à peu près cassés de différentes tailles, principalement de 0,5 à 2 cm. Pas de coupe lisse. La surface est moelleuse et légèrement crayeuse, pas humide ou brillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les centres de pommes de terre sont encore fermes et résistent à la fourchette. La chair est cireuse et translucide plutôt que molle et opaque.",
            "action": "Retourner à l'eau mijotante pendant encore 5 minutes. Testez encore du centre."
          },
          {
            "state": "Perfect",
            "description": "Courbé, sec, se brise facilement dans la main en morceaux irréguliers. La couleur est jaune-blanc pâle et opaque. Pas de regard cireux.",
            "action": "Sécher à la vapeur sur un plateau et commencer immédiatement l'épice."
          },
          {
            "state": "Overdone",
            "description": "La pomme de terre est devenue arrosée et s'effondre complètement lorsqu'elle est écrasée. Se colle à elle-même dans une masse collante.",
            "action": "Étaler sur un plateau large et sécher dans un four de 150 C (300 F) pendant 10 minutes pour éliminer l'excès d'humidité avant d'ajouter au remplissage."
          }
        ]
      },
      "feelCue": "Une pomme de terre parfaitement cuite doit s'effondrer et tomber à la pression légère, avec une pause sèche et poudreuse. Si elle s'écrase dans une pâte collante, elle doit sécher davantage. Si ça rebondit, il lui faut plus de cuisine."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
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
      "outputState": "bloomed_spices",
      "instructions": "Chauffer l'huile ou le ghee dans une poêle large à feu moyen-vif. Ajouter les graines de cumin et les graines de coriandre concassées ensemble — elles doivent cracher immédiatement et commencer à craquer. Laissez-les fleurir environ 30 à 40 secondes jusqu'à ce que le cumin devienne brun marron foncé. Ne vous arrêtez pas ici — ajoutez le gingembre haché et le chili vert et remuez pendant 1 minute jusqu'à ce que l'odeur crue du gingembre s'adoucisse à une note sucrée et parfumée. Ajouter la coriandre, l'amchur, le garam masala et le curcuma. Mélanger constamment pendant 60 secondes, racler le fond — les épices moulues formeront une pâte épaisse et parfumée dans la graisse. Cette étape, appelée tadka ou bhuna, est critique : l'huile transporte des composés d'épices solubles dans le gras directement dans la pomme de terre et les pois au moment du contact. Si votre pâte d'épices sent chaud et arrondi, sans bord brut, elle est prête.",
      "visualCue": {
        "primaryTarget": "Une pâte d'épices rouge doré foncé dans la poêle avec des graines de cumin et de coriandre, des fils de gingembre légèrement foncés et un anneau d'huile claire autour des bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épices broyées sont encore sèches et séparées de l'huile, assises sur le dessus plutôt que de fleurir en pâte. L'odeur est poudreuse et crue.",
            "action": "Ajouter une cuillère à café d'eau et remuer vigoureusement — la vapeur aidera les épices à absorber et à cuire. Continuez encore une minute."
          },
          {
            "state": "Perfect",
            "description": "Une pâte unie, brillante et sombre qui se déplace en une seule masse. Des odeurs de cumin grillé et de coriandre chaude et lumineuse. La graisse brille autour des bords.",
            "action": "Ajouter immédiatement les pois et les pommes de terre."
          },
          {
            "state": "Overdone",
            "description": "Les épices sont brun foncé ou noir, la poêle fume, et l'odeur est amère et acride. La pâte d'épices a été brûlée.",
            "action": "Jeter et commencer frais. Les épices brûlées rendront amer tout le remplissage — il n'y a pas de rétablissement."
          }
        ]
      },
      "feelCue": "La cuisine doit sentir comme un marché d'épices à ce point - toast, chaud, et complexe, avec la note vert vif de la coupe de chili. La poêle siffle quand tu traînes une cuillère sur le fond."
    },
    {
      "nodeId": "step_3",
      "action": "Mélanger",
      "inputs": [
        "bloomed_spices",
        "boiled_potatoes",
        "ing_02",
        "ing_12",
        "ing_13"
      ],
      "outputState": "finished_samosa_filling",
      "instructions": "Ajouter les pois frais ou congelés directement à la graisse épicée dans la poêle. Mélanger et cuire pendant 2 minutes – les pois se réchaufferont et absorberont l'huile épicée. Ajouter les pommes de terre concassées à la fois et plier tout ensemble à l'aide d'une large spatule ou d'une cuillère en bois, travailler du fond de la poêle et tourner le mélange sur elle-même. Vous voulez enrober uniformément chaque morceau de pomme de terre et de pois dans le mélange d'épices sans transformer le mélange en une masse lisse — le remplissage doit conserver la texture, avec des morceaux visibles de pomme de terre et de pois partout. Assaisonner de sel et remuer. Hors de la chaleur, plier dans la coriandre fraîche. Bouche: le remplissage doit être intensément aromatisé — audacieusement salé, lumineux avec la note aigre de l'amchur, et chaudement épicé tout au long. Il doit être assaisonné agressivement parce que la coquille de pâtisserie va diluer l'intensité. Laissez le remplissage refroidir complètement avant de l'enfermer dans la pâtisserie — le remplissage chaud va chauffer la pâtisserie et la faire mousser.",
      "visualCue": {
        "primaryTarget": "Un mélange parfumé et texturé de morceaux de pommes de terre épicés d'or et de pois verts vifs, uniformément enrobé d'un mélange d'épices rouille-orange. Cilantro est visible partout. Pas de morceaux de pâte lisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La couche d'épice n'est pas uniforme: les morceaux de pomme de terre pâle sont visibles à côté des morceaux très sombres. Les pois sont encore séparés et pâles. Le remplissage a un goût fade dans les taches.",
            "action": "Plier plus soigneusement, en s'assurant que chaque pièce contacte la graisse épicée. Cuire encore 2 minutes à feu moyen."
          },
          {
            "state": "Perfect",
            "description": "Chaque pièce est uniformément épicée et teintée d'or orange. La texture est variée et intéressante. L'odeur est lumineuse, complexe et très appétissante. Remplit la bouche de chaleur.",
            "action": "Étaler sur un plateau et refroidir complètement avant d'utiliser comme remplissage samosa."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a été agité de manière trop agressive et est maintenant un mash lisse et pasty. La texture est uniforme et les pois sont cassés.",
            "action": "La saveur est identique — procéder. La consistance en purée fonctionnera toujours comme un remplissage, bien que l'expérience alimentaire soit moins variée."
          }
        ]
      },
      "feelCue": "Une cuillerée finie de samosa doit se sentir légèrement sèche et émiettée dans la main — non mouillée, non collante. Il devrait tenir une forme lorsqu'il est pressé mais s'effondrer à une poussée ferme. Cette texture sèche empêche la pâtisserie samosa de devenir soyeuse pendant la friture."
    }
  ]
};
