export default {
  "repoId": "master_german_black-forest-gateau_001",
  "parentRepoId": null,
  "slug": "black-forest-gateau",
  "author": "ForkRecipe Kitchen",
  "title": "Gâteau de la Forêt Noire",
  "description": "Des couches d'éponge de chocolat noir trempées dans le Kirsch, en sandwich avec de la crème fouettée et de la tarte Morello cerises — un gâteau qui goûte une forêt allemande en hiver profond, riche et froid et légèrement boueux.",
  "cuisine": "Allemand",
  "culture": "Allemand",
  "category": "desserts",
  "tags": [
    "chocolat",
    "Cerise",
    "crème",
    "allemand",
    "gâteau"
  ],
  "difficulty": 4,
  "activeTime": "75 min",
  "totalTime": "4 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 7,
    "salty": 1,
    "sour": 4,
    "bitter": 5,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine pure",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Œufs (ensemble, température ambiante)",
      "ratioValue": 300,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 200,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Poudre de cacao de procédé néerlandais",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "cacao naturel (réduire la poudre à pâte)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé fondu et refroidi",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Solvent",
      "name": "Kirsch (brandy cerise)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de cerise + 1 c. à thé extrait d'amande"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Dairy",
      "name": "Double crème (36%+ gras), froide",
      "ratioValue": 400,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Sucre glacé",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Acid",
      "name": "Cerises Morello, piquées (jardées ou fraîches)",
      "ratioValue": 200,
      "defaultUnit": "parts",
      "substitutions": [
        "Cerises acides"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Chocolat noir (70%), pour les copeaux",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Whip",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "ribbon_egg_foam",
      "instructions": "Mélanger les œufs et le sucre de roulette dans le bol d'un mélangeur de stand. Whip à grande vitesse pendant 8-12 minutes jusqu'à ce que le mélange ait triplé en volume, tourné ivoire pâle, et atteint le stade du ruban: lorsque vous soulevez le fouet, la pâte tombe dans un ruban épais et lent qui tient sur la surface pendant 3-4 secondes avant de dissoudre. Cette mousse est le seul levain pour l'éponge — ne la précipitez pas. Le bol doit être à température ambiante ou légèrement chaud (la mettre brièvement sur une casserole d'eau mijotante pour aider la mousse d'oeufs si votre cuisine est froide).",
      "visualCue": {
        "primaryTarget": "Mousse d'ivoire pâle et épaisse. Le ruban tombe lentement et garde sa forme à la surface pendant au moins 3 secondes avant de couler. Le volume doit être de 3x l'original.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La batte est jaune et mince. Le ruban se dissout instantanément en surface. Le volume n'a pas triplé.",
            "action": "Continuez à fouetter. Vérifiez que les œufs sont à température ambiante — mousse d'oeufs froids lentement. Ajoutez 2 minutes de plus en haut."
          },
          {
            "state": "Perfect",
            "description": "ivoire pâle, mousse très épaisse avec une surface mate. Le ruban tient. Le volume est 3x. La pâte tombe dans une cascade épaisse et lente.",
            "action": "Retirer du mélangeur. Séparer les ingrédients secs en deux ajouts et les plier immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La mousse est devenue granuleuse, effondrée ou aqueuse au fond. Les bulles sont visibles et grandes.",
            "action": "Malheureusement, la mousse est cassée — redémarrez les œufs. On ne peut pas récupérer la mousse d'oeufs surchargée."
          }
        ]
      },
      "feelCue": "Faites glisser votre doigt à travers la mousse — il laisse un sentier propre qui tient sa forme pendant quelques secondes. La texture doit être épaisse et chaude."
    },
    {
      "nodeId": "step_2",
      "action": "Plier",
      "inputs": [
        "ribbon_egg_foam",
        "ing_01",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "chocolate_sponge_batter",
      "instructions": "Farine tamisée, poudre de cacao et poudre à pâte. Ajouter un tiers du mélange sec à la mousse d'oeuf et plier avec une grande spatule en utilisant des coups de J larges et lents du fond du bol, en tournant le bol un quart de tour à chaque coup. Lorsque presque incorporé (il reste quelques stries), ajouter un autre tiers. Lorsqu'il est presque incorporé, ajouter le troisième final. Arrosez le beurre fondu refroidi autour du bord du bol dans le pli final – le beurre tue la mousse, alors ajoutez-le en dernier et pliez-le rapidement avec 6-8 coups confiants.",
      "visualCue": {
        "primaryTarget": "La batte est uniforme chocolat noir brun, à peine coulant. Pas de stries sèches ou de poches de farine blanche. La mousse est dégonflée mais ne s'est pas complètement effondrée — il reste du volume.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des bandes de farine blanches ou pâles sont visibles. Batter a l'air deux tonnes.",
            "action": "Deux ou trois plis de plus, ciblant les stries. Ne surcompensez pas — arrêtez le moment où ils disparaissent."
          },
          {
            "state": "Perfect",
            "description": "Même la pâte au chocolat noir, légèrement épaisse, tombe dans des rubans lents. La surface est lisse et mate. Environ 20-30% de volume inférieur à la mousse non mélangée.",
            "action": "Divisez immédiatement entre deux boîtes de gâteau doublées et graissées de 20 cm et faites cuire."
          },
          {
            "state": "Overdone",
            "description": "La batterie est très mince et liquide. Il a perdu tout volume et coule comme une sauce épaisse. L'air a été complètement détruit.",
            "action": "Faire cuire de toute façon — l'éponge sera plus dense et plus floue, ce que certains préfèrent. Le gâteau sera toujours délicieux."
          }
        ]
      },
      "feelCue": "La pâte doit tomber de la spatule dans une feuille épaisse et lente, et ne pas dribber dans les cours d'eau minces. Lorsque vous tapez la spatule sur le bord du bol, il devrait atterrir avec une patte douce et lourde."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire",
      "inputs": [
        "chocolate_sponge_batter"
      ],
      "outputState": "chocolate_sponge_layers",
      "instructions": "Diviser uniformément la pâte entre deux boîtes à gâteau rond de 20 cm (8 pouces) graissées et doublées de base. Lisser les surfaces doucement. Cuire à 180 C (350 F) pendant 22-26 minutes. Ne pas ouvrir la porte du four avant 20 minutes. Une fois terminé, refroidir dans les boîtes pendant 5 minutes, puis tourner sur une grille. Refroidir complètement — au moins 1 heure — avant de couper. Une fois froid, utilisez un long couteau dentelé pour diviser chaque éponge en deux horizontalement, vous donnant 4 couches au total. Arrosez chaque surface coupée avec Kirsch.",
      "visualCue": {
        "primaryTarget": "Éponge plane, uniformément relevée qui s'est légèrement éloignée des côtés en étain. Une brochette insérée au centre sort propre sans pâte humide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface ressort mais le centre tremble encore. La brochette sort avec une pâte mouillée ou de grandes miettes mouillées.",
            "action": "Retourner au four 3-4 minutes de plus. Couvrir de papier si le dessus est brunissant trop vite."
          },
          {
            "state": "Perfect",
            "description": "Surface plate avec une croûte mince et légèrement ferme. Il ressort complètement lorsqu'il est pressé au centre. La brochette est propre. Tirer proprement des côtés de l'étain.",
            "action": "Laisser refroidir en étain 5 minutes, puis tourner. Laisser refroidir complètement avant de trancher."
          },
          {
            "state": "Overdone",
            "description": "Le haut Domed a fêlé et est devenu très sombre. Les bords s'éloignent considérablement. La brochette est très sèche.",
            "action": "L'éponge peut être légèrement sèche. Tremper généreusement avec Kirsch — il hydratera la miette."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur le centre — l'éponge doit revenir complètement et se sentir bien, pas oreiller. Une éponge parfaitement cuite sent le chocolat noir et les œufs chauds, sans odeur de farine crue."
    },
    {
      "nodeId": "step_4",
      "action": "Whip",
      "inputs": [
        "ing_08",
        "ing_09"
      ],
      "outputState": "stabilized_chantilly",
      "instructions": "Réfrigérer votre bol et fouetter au congélateur pendant 10 minutes. Verser la crème double froide et le sucre glace dans le bol froid. Battre de hauteur moyenne jusqu'à ce que la crème conserve des pics fermes et brillants qui se tiennent droit lorsque le fouet est levé. Arrête avant que ça devienne granuleux. Vous avez besoin de suffisamment de crème pour remplir et enrober le gâteau entier — divisez mentalement: un tiers pour le remplissage entre les couches, deux tiers pour l'extérieur.",
      "visualCue": {
        "primaryTarget": "Crème brillante et blanc vif tenant des pics fermes. Les pics se tiennent debout sans tomber. La texture est lisse et crémeuse, pas granuleuse ou jaune.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème est douce et s'enfonce lorsque le fouet est levé. Il ne tiendra pas sa forme dans le gâteau.",
            "action": "Continuez à fouetter sur le milieu — 1-2 minutes de plus. Les pics doux deviennent fermes rapidement."
          },
          {
            "state": "Perfect",
            "description": "Des pics fermes et brillants se tiennent droit. La crème est épaisse sur la spatule et tient les formes proprement. Toujours lisse et blanc.",
            "action": "Utiliser immédiatement pour l'assemblage ou réfrigérer jusqu'à 30 minutes avant d'utiliser."
          },
          {
            "state": "Overdone",
            "description": "La crème a l'air grincheuse ou grincheuse. Des stries jaunes apparaissent — vous faites du beurre.",
            "action": "Plier dans 2 c. à soupe de crème liquide froide pour sauver la crème légèrement sur-bordée. S'il est très granuleux, continuez à battre jusqu'au beurre — commencez à être frais."
          }
        ]
      },
      "feelCue": "La crème bien fouettée est fraîche, légèrement dense et lisse sur le bout des doigts — pas aérée et légère. Il devrait tenir une crête propre quand traîné avec une spatule."
    },
    {
      "nodeId": "step_5",
      "action": "Assemblage",
      "inputs": [
        "chocolate_sponge_layers",
        "stabilized_chantilly",
        "ing_07",
        "ing_10",
        "ing_11"
      ],
      "outputState": "assembled_black_forest_gateau",
      "instructions": "Placer la première couche d'éponge découpée sur une planche à gâteaux. Badigeonner généreusement avec Kirsch. Étendre une couche de crème (environ 5 mm d'épaisseur), puis disperser densément les cerises Morello sur la surface de la crème. Placez la deuxième couche d'éponge coupée, appuyez doucement, brossez avec Kirsch. Répéter la crème et les cerises. Placer la troisième couche, brosser avec Kirsch, étaler la crème. Garnir de la dernière couche d'éponge, côté plat. Utilisez la crème restante pour recouvrir le dessus et les côtés dans une couche de miettes lisse, puis une couche finale généreuse. Pour faire des copeaux de chocolat : utilisez un éplucheur de légumes ou un racleur de banc chaud traîné le long du côté plat d'un bloc froid de chocolat noir. Scatter les copeaux épais sur le dessus. Pipe rosettes de crème autour du bord et couronner chacune avec une cerise entière.",
      "visualCue": {
        "primaryTarget": "Un grand gâteau majestueux à quatre couches avec des côtés crèmes blanches éclatantes, un dessus en copeaux de chocolat noir et un anneau de rosettes à la crème tenant chacune une cerise. Les couches sont visibles et même quand le gâteau est coupé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les couches glissent. La crème déborde entre les couches. Le gâteau a l'air décalé.",
            "action": "Réfrigérer 30 minutes avant de terminer. La crème froide se ferme et le gâteau se stabilisera."
          },
          {
            "state": "Perfect",
            "description": "Un gâteau rectiligne. Chaque couche visible à la coupe. Cerises et crème clairement définies entre les couches. Top est couvert de copeaux foncés.",
            "action": "Réfrigérer au moins 1 heure avant de servir pour permettre au Kirsch de tremper et à la crème de se fixer."
          },
          {
            "state": "Overdone",
            "description": "La crème fond ou glisse des côtés dans une cuisine chaude.",
            "action": "Déplacez-vous immédiatement au réfrigérateur. Ce gâteau est sensible à la température, gardez toujours froid."
          }
        ]
      },
      "feelCue": "Exécutez un couteau à palette sur le côté du gâteau fini — il doit glisser doucement avec une légère résistance, laissant une surface crème propre et mate. Le gâteau doit se sentir froid et fermement réglé lorsque vous appuyez doucement sur le dessus."
    }
  ]
};
