export default {
  "repoId": "master_indian_samosas_001",
  "parentRepoId": null,
  "slug": "samosas",
  "author": "ForkRecipe Kitchen",
  "title": "Pommes de terre et pois Samosas",
  "description": "Une coquille de pâtisserie qui fait place à un intérieur chaudement épicé de pommes de terre parfumées au cumin et de pois brillants — la marque est la pâte faite avec un minimum d'eau pour une flakiness maximale, et le remplissage refroidi complètement de sorte que la coquille ne se vapeur jamais de l'intérieur.",
  "cuisine": "Indiens",
  "culture": "Inde du Nord",
  "category": "breads",
  "tags": [
    "indienne",
    "pâtisserie",
    "pommes de terre",
    "végétalien",
    "frits"
  ],
  "difficulty": 3,
  "activeTime": "1 hr",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 1876,
  "forks": 212,
  "contributors": 27,
  "license": "CC-BY-SA",
  "createdAt": "2024-07-19",
  "updatedAt": "2025-06-01",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 2,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général (maïda)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "farine de blé entier (gives plus denses)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Shortening ou ghee de légumes (pour frotter dans la farine)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre froid",
        "huile de coco raffinée"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Starch",
      "name": "Pommes de terre russes, bouillies et grossièrement purées",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "Yukon Pommes de terre d'or"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Pois verts (frais ou congelés, dégelés)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Mélange d'épices (graines de cumin, coriandre, anchur, garam masala, chili vert, gingembre)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Heat",
      "name": "Huile de friture neutre",
      "ratioValue": 200,
      "defaultUnit": "parts",
      "substitutions": [
        "huile d'arachide raffinée"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pétrir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_06"
      ],
      "outputState": "samosa_dough",
      "instructions": "Mélanger la farine, le gras, le sel et 1 c. à thé ajwain (graines de carom) si disponible. Frottez la graisse dans la farine avec le bout des doigts pendant 3 à 4 minutes jusqu'à ce que le mélange ressemble à des chapelures grossières sans qu'il reste de farine lâche. Ajouter de l'eau glacée 1 c. à soupe à la fois (environ 6 à 8 c. à soupe au total) jusqu'à ce que la pâte se combine. Il devrait être ferme, rigide et non collant. Agenouiller pendant 2 minutes, puis reposer couvert pendant 20 minutes.",
      "visualCue": {
        "primaryTarget": "Une pâte ferme, rigide et lisse qui tient une impression lorsqu'elle est pressée mais ne colle pas aux mains ou à la surface. Plus rigide que la pâte à pain.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est émiettée et s'effondre lorsqu'elle est pressée: la graisse et la farine n'ont pas coché. Trop peu d'eau.",
            "action": "Ajouter l'eau 1 c. à thé à la fois, pétrir après chaque addition jusqu'à ce que la pâte se tienne ensemble sans s'effondrer."
          },
          {
            "state": "Perfect",
            "description": "Pâte lisse, ferme et non collante qui tient sa forme proprement lorsqu'elle est roulée dans une boule. Une fois pressé par un doigt, il ressort lentement à mi-chemin. Pas de collants sur les mains.",
            "action": "Couvrir d'un chiffon humide et reposer pendant 20 minutes. Le repos détend le gluten et rend plus facile de rouler fin sans rétrécir le dos."
          },
          {
            "state": "Overdone",
            "description": "La toux est douce et légèrement collante de trop d'eau. Il s'étend facilement plutôt que de se sentir ferme et raide.",
            "action": "Poussière avec de la farine et pétrir brièvement à incorporer. La pâte Samosa doit être rigide — la pâte molle produit une croûte molle, grasse et non molle."
          }
        ]
      },
      "feelCue": "La pâte de samosa bien mélangée doit se sentir comme un mastic rigide — une résistance ferme quand on la presse, mais elle donne sans craquer. Il devrait être particulièrement plus rigide que n'importe quelle pâte à pain que vous avez faite."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "samosa_filling",
      "instructions": "Chauffer 1 c. à soupe d'huile dans une poêle à feu moyen-vif. Ajoutez les graines de cumin et laissez-les éclater 10 secondes. Ajouter le chili vert et le gingembre frais, cuire 30 secondes. Ajouter la purée de pommes de terre et les pois, puis toutes les autres épices. Cuire 3 à 4 minutes en pliant plutôt que de remuer pour conserver une texture de pomme de terre. Ajouter l'amchur (poudre de mangue séchée) ou le jus de citron pour la tarte et le sel au goût. Étaler sur une plaque et refroidir complètement avant d'utiliser.",
      "visualCue": {
        "primaryTarget": "Le remplissage est un jaune doré avec des pois verts visibles partout. Le mélange a une certaine texture — pas complètement lisse. Les pois sont intacts. L'arôme est chaud, épicé et légèrement acidulé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les épices sentent crus et le remplissage a un goût plat. Les pois sont encore congelés-froids et n'ont pas absorbé de saveur.",
            "action": "Cuire encore 2 minutes à feu moyen, en pliant en continu. Les épices ont besoin de griller brièvement dans l'huile pour se développer."
          },
          {
            "state": "Perfect",
            "description": "Garniture dorée vive avec des pois entiers visibles. L'arôme est complexe: cumin grillé, coriandre chaude, tarte amphurée. La mash est généralement lisse avec des morceaux volumineux délibérés.",
            "action": "Étaler sur un plateau et refroidir complètement avant de le remplir. Le remplissage à chaud crée de la vapeur qui adoucit et fractionne la pâte."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage est tout à fait lisse et pâte-comme de sur-mâcher. Les pois ont été écrasés. Le mélange commence à sécher et à coller à la poêle.",
            "action": "Continuez — le remplissage aura encore bon goût. La texture sera plus lisse que l'idéal, mais les samosas seront fines."
          }
        ]
      },
      "feelCue": "Le remplissage refroidi doit tenir sa forme lorsqu'il est pressé dans une boule — s'il se propage ou se sent mouillé, il est trop humide et va adoucir la pâte de l'intérieur pendant la friture."
    },
    {
      "nodeId": "step_3",
      "action": "Façonner",
      "inputs": [
        "samosa_dough",
        "samosa_filling"
      ],
      "outputState": "shaped_samosas",
      "instructions": "Diviser la pâte reposée en portions égales et rouler chacune dans un mince ovale d'environ 18-20cm de long et 10cm de large. Couper en deux pour faire deux demi-cercles. Former un cône en pliant le bord droit et en scellant avec un peu d'eau. Remplir le cône de 2 c. à soupe de remplissage — ne pas trop remplir. Pincez le bord ouvert fermé fermement, en appuyant sur la couture à plat. Le bord scellé doit être complètement étanche à l'air ou le samosa éclatera pendant la friture.",
      "visualCue": {
        "primaryTarget": "Les Samosas sont des cônes triangulaires bien fermés avec des coutures plates plissées. La pâte est mince et presque translucide aux points les plus larges. Aucune poche d'air visible à l'intérieur lorsqu'elle est tenue à la lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coutures sont mal scellées avec des trous visibles ou des taches minces. Les parois du cône sont épaisses et inégales. Les samosas surremplis débordent aux coutures.",
            "action": "Presser et refermer les coutures ouvertes avec de l'eau et une pression ferme. L'excès de remplissage rend l'étanchéité impossible — en retirer si nécessaire."
          },
          {
            "state": "Perfect",
            "description": "Même des murs minces avec une couture bien scellée. La samosa se sent ferme et compacte lorsqu'elle est pressée doucement. Le poids est correct — pas trop lourd (surrempli) ou léger (sous-rempli).",
            "action": "Déposer sur une surface farinée, côté fermé vers le bas. Faire frire dans les 30 minutes ou réfrigérer jusqu'à 4 heures."
          },
          {
            "state": "Overdone",
            "description": "La toux a été roulée trop mince — elle déchire lorsque le remplissage est ajouté et les coutures ne peuvent pas tenir. Les parois du cône sont presque minces en papier.",
            "action": "Couper les taches fines avec de petits morceaux de pâte humidifiés avec de l'eau. Rerouler avec plus de farine si la pâte continue à déchirer."
          }
        ]
      },
      "feelCue": "Courez votre doigt le long de la couture scellée — vous devriez sentir une crête continue de pâte fermement pincée sans trous ni taches molles. Appuyez doucement sur le samosa — il devrait se sentir comme une balle serrée, sans mouvement de la garniture à l'intérieur."
    },
    {
      "nodeId": "step_4",
      "action": "Frire",
      "inputs": [
        "shaped_samosas",
        "ing_07"
      ],
      "outputState": "finished_samosas",
      "instructions": "Chauffer l'huile à 160– 170°C (325°F) — température de friture inférieure à la température standard. Faites glisser les samosas en douceur, 3-4 à la fois. Faire frire lentement de 12 à 15 minutes, en tournant occasionnellement, jusqu'à ce que l'or soit profond. La basse température rend et croustille lentement la pâtisserie sans brûler l'extérieur avant les chaleurs intérieures. Égoutter sur un support en fil, et non sur des serviettes en papier — la vapeur doit s'échapper de tous les côtés pour garder la croûte croustillante.",
      "visualCue": {
        "primaryTarget": "De couleur dorée uniforme sur toutes les surfaces, avec une texture légèrement cloquée sur les parois. La couleur est l'or profond de bon toast, pas l'or pâle de la pâte frite.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Extérieur jaune pâle qui semble sec plutôt que doré. La pâtisserie est douce plutôt que ferme lorsqu'elle est tapée. L'intérieur n'est pas encore assez chaud.",
            "action": "Continuez à frire à la même température. N'augmentez pas la chaleur — cela fera brunir l'extérieur tout en laissant l'intérieur brut."
          },
          {
            "state": "Perfect",
            "description": "Profond, même brun-or avec une surface légèrement cailloux, cloquée. Le tapotage du samosa produit un son creux comme le tapotage d'un bloc en bois. La pâtisserie est visiblement rigide et prête à éclater.",
            "action": "Retirez-vous sur une grille. Goûtez - en immédiatement: la couture doit se fissurer proprement et l'intérieur doit être chaud."
          },
          {
            "state": "Overdone",
            "description": "Vertige brun-ambre foncé sur brun-rouge. Des taches sombres se forment. L'huile sent l'acre. La pâtisserie est très rigide et s'est légèrement épaissie par surcuisson.",
            "action": "Retirer immédiatement et égoutter. L'extérieur est profondément caramélisé mais l'intérieur est probablement bien. Laisser refroidir 2 minutes avant de manger."
          }
        ]
      },
      "feelCue": "Un samosa parfaitement frit produira une fissure éclatante lorsque vous mordrez à travers la coquille — comme casser un craquelin — et libérera une bouffée de vapeur épicée. S'il donne silencieusement sans fissuration, il a été frit à une température trop élevée et la pâtisserie est dense plutôt que flocée."
    }
  ]
};
