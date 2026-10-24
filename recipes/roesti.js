export default {
  "repoId": "master_swiss_roesti_001",
  "parentRepoId": null,
  "slug": "roesti",
  "author": "ForkRecipe Kitchen",
  "title": "Rösti",
  "description": "Un gâteau de pomme de terre suisse de satisfaction élémentaire — pommes de terre cireuses râpées crues, pressées dans une poêle en fonte avec du beurre clarifié jusqu'à ce que la croûte inférieure soit un disque d'or broyant et fauve et que l'intérieur reste vapeur, crémeux et parfumé.",
  "cuisine": "Suisse",
  "culture": "Bernois",
  "category": "vegetables",
  "tags": [
    "oesti",
    "Suisse",
    "pommes de terre",
    "en fonte",
    "brunch",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Pommes de terre cireuses (or yukon ou Charlotte)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Pommes de terre farineuses bouillies et réfrigérées (méthode bernoise)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre clarifié (ou ghee)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "gras de canard",
        "Saindoux"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Poivre noir fraîchement moulu",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Peler",
      "inputs": [
        "ing_01"
      ],
      "outputState": "grated_potato",
      "instructions": "Peler les pommes de terre. Râper-les sur le côté grossier d'un grat de boîte dans un grand bol. Travailler rapidement (la pomme de terre graduée s'oxyde et décolore), recueillir des poignées de la pomme de terre râpée et les presser aussi fort que possible sur l'évier. Enlevez autant d'eau d'amidon que possible — c'est essentiel pour la netteté. Si la pomme de terre libère un liquide bleuâtre-purple, elle contient de l'amidon excédentaire : presser davantage. Assaisonner la pomme de terre râpée sèche avec du sel et du poivre et mélanger pour la distribuer uniformément.",
      "visualCue": {
        "primaryTarget": "De longs morceaux blancs et uniformes de pomme de terre empilés dans un bol. Les lambeaux sont légèrement humides, mais ne coulent pas. Pas de liquide de mise en commun au fond du bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pomme de terre râpée est très humide. Une presse produit des flux de liquide féculent. Le fond du bol a des flaques.",
            "action": "Continuer à presser dans les poignées — une pomme de terre insuffisamment séchée va se vaporiser plutôt que d'agglomérer et de ne jamais développer de croûte."
          },
          {
            "state": "Perfect",
            "description": "Les lustres sont secs au toucher mais souples. Une compression dure ne donne que quelques gouttes. La surface de la pomme de terre semble légèrement crayeuse, pas humide.",
            "action": "Assaisonner et presser dans la casserole immédiatement avant l'oxydation."
          },
          {
            "state": "Overdone",
            "description": "La pomme de terre a été tellement pressée que les lambeaux sont compactés en tapis denses, à l'aspect d'eau.",
            "action": "Loosen avec les doigts avant de presser dans la poêle — bon rösti a besoin d'air entre les lambeaux."
          }
        ]
      },
      "feelCue": "Une poignée de pommes de terre râpées bien préparées devrait ressembler à de la paille humide — pas du tissu humide, pas du papier sec. Lorsque vous ouvrez votre poing, les morceaux tombent en morceaux plutôt que de se tenir ensemble dans une boule mat."
    },
    {
      "nodeId": "step_2",
      "action": "Frire",
      "inputs": [
        "grated_potato",
        "ing_02"
      ],
      "outputState": "pressing_roesti",
      "instructions": "Chauffer une poêle en fonte de 24 à 26 cm ou une poêle antiadhésive lourde à feu moyen. Ajouter le beurre clarifié et agiter pour enrober. Lorsque le beurre est chaud et chatoyant mais ne fume pas, ajouter toute la pomme de terre râpée à la fois. Utilisez immédiatement une large spatule pour presser la pomme de terre dans un disque ferme, même, l'étendant aux bords de la poêle. Ne le touchez plus. Cuire à feu moyen-doux pendant 10-12 minutes. L'objectif est une croûte dorée profonde construite lentement à partir d'une chaleur uniforme et patiente.",
      "visualCue": {
        "primaryTarget": "Les bords du disque rösti ont été dorés et sont visiblement croquants. La surface supérieure, quoique toujours brute, montre une fuite de vapeur, ce qui indique que l'intérieur est en cours de cuisson.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 10 minutes, le fond est encore pâle et le rösti glisse librement dans la poêle sans couleur.",
            "action": "Augmenter la chaleur très légèrement. Le beurre peut avoir été insuffisant ou la chaleur trop faible. Attendez plus longtemps — ne retournez pas encore."
          },
          {
            "state": "Perfect",
            "description": "Un doux tremblement de la casserole révèle que le rösti glisse en une seule unité. Les bords visibles sont en or ambré profond. Un coup d'œil avec une spatule confirme une croûte d'acajou.",
            "action": "Flipez sur une assiette, glissez vers le bas le côté beurre et faites cuire le deuxième côté."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brun très foncé, les bords sentent le beurre brûlé, et la croûte est brun foncé noir.",
            "action": "Plongez immédiatement sur une assiette. Le fond peut être sauvé; les bords peuvent être parés après. Réduire significativement la chaleur pour le deuxième côté."
          }
        ]
      },
      "feelCue": "Agiter doucement la poêle — un rösti bien formé se déplace comme un disque solide, comme un crêpe, sans mouvement de pomme de terre en dessous. Si une partie traîne ou pleure, elle n'est pas encore réglée. Attendez et faites confiance."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "pressing_roesti",
        "ing_02"
      ],
      "outputState": "flipped_roesti",
      "instructions": "Pour retourner : inverser une grande plaque sur la casserole et, en un mouvement confiant, retourner les deux ensemble afin que le rösti tombe sur la croûte de la plaque vers le haut. Ajouter le reste du beurre clarifié dans la poêle. Faites glisser le rösti à l'intérieur, côté non cuit vers le bas. Augmenter le feu à moyen. Cuire de 8 à 10 minutes jusqu'à ce que le deuxième côté soit également doré et croustillant.",
      "visualCue": {
        "primaryTarget": "Le second côté construit la même croûte profonde, même or ambre que le premier. Les deux côtés devraient avoir l'air tout aussi bruns lorsqu'ils sont faits.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le deuxième côté est encore pâle et souple lorsqu'il est pressé. L'intérieur de la pomme de terre est dense et légèrement cru.",
            "action": "Continuez à cuisiner. Vérifiez toutes les 2 minutes en soulevant un bord avec une spatule."
          },
          {
            "state": "Perfect",
            "description": "Les deux côtés sont un or ambré profond assorti. Le rösti est ferme au toucher, tenant sa forme de disque. Tapotez la croûte avec un noeud — ça semble creux.",
            "action": "Glissez sur une planche et reposez-vous 2 minutes avant de couper."
          },
          {
            "state": "Overdone",
            "description": "La deuxième croûte brunit trop rapidement à partir de la chaleur plus élevée. Des taches sombres se forment.",
            "action": "Réduire le feu à faible et couvrir pendant les 3 dernières minutes pour terminer le centre doucement."
          }
        ]
      },
      "feelCue": "Après le flip, appuyez sur le centre du rösti avec votre paume — il devrait y avoir une résistance ferme, pas un don doux. Au fur et à mesure que la seconde croûte se met, vous entendrez le grésillement passer d'un son humide et vapeur à une croustillante sèche et craquelée."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser reposer",
      "inputs": [
        "flipped_roesti",
        "ing_03",
        "ing_04"
      ],
      "outputState": "roesti",
      "instructions": "Faites glisser le rösti fini sur une planche en bois. Assaisonner légèrement avec du sel feuilleté supplémentaire. Reposez-vous pendant 2 minutes avant de couper en quartiers, ce qui permet à la vapeur intérieure de se redistribuer et à la croûte de se raffermir complètement. Servir immédiatement. Les accompagnements classiques sont des œufs frits, du saumon fumé, de la compote de pommes ou du fromage alpin.",
      "visualCue": {
        "primaryTarget": "Un disque doré-ambre avec un dessus et un fond uniformément croustillés. La coupe transversale de la pomme de terre présente un intérieur crémeux à la vapeur contre la croûte d'or foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'intérieur est collant et dense lorsqu'il est coupé. Les croustilles de pommes de terre sont fondues dans une pâte molle et féculente plutôt que dans des croustilles individuelles tendres.",
            "action": "Le centre avait besoin de plus de temps. La prochaine fois, diminuer la chaleur et prolonger le temps de cuisson. Pour l'instant, rendez les coins coupés face vers le bas dans une poêle beurrée chaude pendant 3 minutes."
          },
          {
            "state": "Perfect",
            "description": "La croûte se brise comme un biscuit quand on la tape. L'intérieur est crémeux et productif, avec des morceaux de pomme de terre individuels encore visibles. La vapeur s'échappe du visage coupé.",
            "action": "Mangez immédiatement — rösti n'attend personne."
          },
          {
            "state": "Overdone",
            "description": "Les deux croûtes sont très foncées et le goût de beurre surbrondu. L'intérieur est sec.",
            "action": "Trim les bords extérieurs les plus sombres. L'intérieur est probablement fin et la saveur récupérable."
          }
        ]
      },
      "feelCue": "Le rösti parfait offre deux textures en une seule morsure: le bris fragile de la croûte extérieure qui fait place immédiatement à l'intérieur doux, vapeur, crémeux. Votre couteau devrait passer par là avec une touche sonore sur la croûte."
    }
  ]
};
