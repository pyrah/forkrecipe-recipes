export default {
  "repoId": "master_american_new_york_cheesecake_001",
  "parentRepoId": null,
  "slug": "new-york-cheesecake",
  "author": "ForkRecipe Kitchen",
  "title": "Cheesecake New York",
  "description": "Un rond dense blanc ivoire de fromage à la crème, d'œufs et de crème aigre cuits bas et lentement jusqu'à ce qu'il tremble, puis refroidi pendant des heures jusqu'à ce qu'il tranche en quartiers propres et soyeux avec une croûte de biscuits qui s'émiette au toucher d'une fourchette.",
  "cuisine": "Américain",
  "culture": "New York",
  "category": "desserts",
  "tags": [
    "américains",
    "Cake au fromage",
    "fromage à la crème",
    "dessert",
    "cuits"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "7 hrs",
  "ratioSystem": "parts",
  "stars": 3244,
  "forks": 356,
  "contributors": 38,
  "license": "CC-BY-SA",
  "createdAt": "2024-12-01",
  "updatedAt": "2026-04-10",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 2,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Crackers Graham, broyés à fines miettes",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "biscuits digestifs",
        "Cookies Oreo (supprimer le remplissage)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé fondu",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "Huile de coco"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Fromage à la crème plein gras, température ambiante",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Neufchâtel (léger)",
        "mascarpone (riche, style italien)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre de ricin"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Gros œufs, température ambiante",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Dairy",
      "name": "Crème acide pleine graisse, température ambiante",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "yogourt grec plein gras",
        "Crème fraîche"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Extrait de vanille et sel fin",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "zeste de citron (brightens)",
        "haricots vanille"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire et presser la croûte",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "pressed_crust",
      "instructions": "Mélangez les miettes de graham et le beurre fondu dans un bol et mélangez jusqu'à ce que les miettes soient uniformément humidifiées. Appuyez fermement sur le fond d'une poêle à ressort de 23cm en utilisant le fond plat d'une tasse de mesure. Appuyez fermement et uniformément, y compris 2-3cm sur les côtés. Cuire à 175°C pendant 8-10 minutes jusqu'à ce qu'il soit réglé. Refroidir complètement avant de remplir.",
      "visualCue": {
        "primaryTarget": "Une couche compacte et uniforme de miettes dorées recouvrant le fond et légèrement sur les côtés de la poêle à ressort. La surface a l'air sèche et tient sa forme lorsque vous lancez un doigt le long du bord.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les croûtes sont emballées de façon lâche — la croûte s'écroule quand on la presse et la surface semble rugueuse et inégale. Trop de beurre visible, les miettes brillent mouillées.",
            "action": "Appuyez plus fermement avec le fond d'une tasse de mesure. Ajouter une autre cuillère à café de beurre fondu si les miettes sont sèches. La croûte doit être suffisamment compacte pour agir comme base structurelle."
          },
          {
            "state": "Perfect",
            "description": "Même, couche compacte qui tient ensemble quand un doigt presse sur le bord. Doré-brun après cuisson, avec un bord légèrement plus foncé. Prend sa forme lorsque la poêle est inclinée.",
            "action": "Laisser refroidir complètement avant de verser dans le remplissage."
          },
          {
            "state": "Overdone",
            "description": "La croûte est brun foncé et sent le beurre brûlé. Les bords peuvent s'être considérablement obscurcis pendant le précuisson.",
            "action": "Si seulement les bords sont sombres, grattez-les en dessous de la couche sombre. Le remplissage cache le dessus et une croûte légèrement surcuite fonctionne toujours parfaitement comme une base."
          }
        ]
      },
      "feelCue": "Appuyez fermement sur la croûte avec le pouce — elle devrait résister avec un compactage ferme et sec et ne pas se détacher facilement. Retirez la poêle et inclinez-la à 45 degrés — la croûte ne doit pas glisser ou se séparer."
    },
    {
      "nodeId": "step_2",
      "action": "Base de fromage à la crème",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_07"
      ],
      "outputState": "cream_cheese_base",
      "instructions": "Tous les ingrédients doivent être à température ambiante — le fromage à la crème froide ne battra pas lisse et laissera des morceaux qui ne s'intègrent jamais complètement. Battre le fromage à la crème avec un mélangeur de stand (pas fouetter) à vitesse moyenne jusqu'à ce que complètement lisse et crémeux, environ 2 minutes. Grattez le bol et battez soigneusement. Ajouter le sucre et battre encore 2 minutes. Gratte encore. Battre dans la vanille et le sel. L'objectif est lisse — pas aéré. Le battement à grande vitesse intègre de l'air qui provoque des fissures.",
      "visualCue": {
        "primaryTarget": "Mélange de fromage à la crème est complètement lisse, blanc brillant, et coule de la palette dans un ruban lent et épais. Pas de bosses visibles. Les côtés et le fond du bol sont exempts de fromage à la crème non incorporé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lumps de fromage à la crème visibles dans le bol. Le mélange semble rugueux et granuleux. Certaines zones semblent encore sèches et bloquantes.",
            "action": "Gratter le bol et battre soigneusement et battre plus. Le fromage à la crème froide est le coupable habituel — si la pièce est froide, adoucir le fromage à la crème au micro-ondes à 50% de puissance pendant 20 secondes."
          },
          {
            "state": "Perfect",
            "description": "Crème d'ivoire entièrement lisse et brillante. Pas de bosses. Il coule de la palette dans un ruban épais et lent. Sens de crème et de vanille.",
            "action": "Ajouter les œufs un à la fois, à faible vitesse."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est lisse mais est devenu très aéré et pâle, presque blanc. Le batteur a laissé une trace de fromage mousseux à la crème légère. L'air a été incorporé.",
            "action": "Passez à une spatule et pliez le mélange quelques fois pour dégonfler un peu d'air. Continuez doucement. L'excès d'air provoque la bouffée des cheesecakes, puis se fissure considérablement lors du refroidissement."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité de la base de fromage à la crème entre vos doigts – elle devrait se sentir soyeuse et homogène, comme de la lotion épaisse. N'importe quel grittness ou grumeaux sous vos doigts signifie plus de mélange est nécessaire."
    },
    {
      "nodeId": "step_3",
      "action": "Ajouter les œufs et la crème sure",
      "inputs": [
        "cream_cheese_base",
        "ing_05",
        "ing_06"
      ],
      "outputState": "cheesecake_batter",
      "instructions": "Avec le mélangeur à faible vitesse, ajouter les œufs un à la fois, battre seulement jusqu'à ce que chacun soit juste incorporé avant d'ajouter le suivant — pas plus. Le surmélange après avoir ajouté des œufs développe la pâte et ajoute de l'air. Enfin, ajouter la crème aigre et mélanger à faible jusqu'à ce que combiné. Frapper le bol une dernière fois et plier doucement à la main avec une spatule. La pâte finie doit être lisse, épaisse et couler lentement.",
      "visualCue": {
        "primaryTarget": "Une pâte d'ivoire lisse et épaisse qui coule dans un ruban lent, même du bol. La surface est plate et légèrement brillante — pas de bulles de surmélange.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries jaunes de jaune d'œuf encore visibles dans la pâte. La crème acide ressemble à des tourbillons blancs séparés. Le battement n'est pas uniforme.",
            "action": "Plier doucement avec une spatule jusqu'à uniforme. Éviter le mélangeur à ce stade — quelques plis à la main sont préférables au risque d'incorporation d'air."
          },
          {
            "state": "Perfect",
            "description": "pâte d'ivoire lisse et uniforme sans stries. Il coule lentement d'une spatule comme une crème très épaisse. La surface est plate et sans bulle.",
            "action": "Verser immédiatement dans la croûte refroidie."
          },
          {
            "state": "Overdone",
            "description": "La batterie a un nombre important de bulles de surface et semble mousseux et léger plutôt que dense. Les oeufs ont été battus trop vite ou trop longtemps.",
            "action": "Appuyez sur le bol fortement sur le comptoir plusieurs fois pour pop bulles. Laisser reposer 5 minutes et tapoter à nouveau. Plongez dans un tamis à mailles fines si vous êtes très bourdon."
          }
        ]
      },
      "feelCue": "Verser une petite quantité de pâte à partir d'une louche — elle devrait tomber dans un ruban épais, lent et intact avant de s'éclaircir. Si elle éclabousse ou coule trop vite, la pâte a été suraérée."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au bain d'eau",
      "inputs": [
        "cheesecake_batter",
        "pressed_crust"
      ],
      "outputState": "baked_cheesecake",
      "instructions": "Préchauffer le four à 160°C. Envelopper l'extérieur de la cuvette en deux couches de feuille lourde (pour éviter l'infiltration d'eau). Verser la pâte dans la croûte refroidie. Placez la poêle dans une plus grande poêle à rôtir et versez de l'eau bouillante dans la poêle à rôtir pour monter à mi-chemin sur les côtés de la forme printanière. Cuire au four pendant 60 à 70 minutes jusqu'à ce que les bords soient réglés et que le centre de 10cm giggles en une seule masse. Éteignez le four, fissiez la porte 5cm, et laissez pendant 1 heure.",
      "visualCue": {
        "primaryTarget": "Après cuisson, le cheesecake est légèrement gonflé et posé aux bords. Le centre de 10cm se déplace lentement en une masse lorsque la poêle est légèrement secouée. La surface est blanche mat, pas humide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La moitié centrale est encore liquide — se déplace comme de l'eau, pas comme une masse unifiée. La surface semble humide et brillante au milieu. Les bords ne sont pas encore fixés.",
            "action": "Retourner au bain d'eau et continuer à cuire en tranches de 10 minutes. Vérifiez le gabarit à chaque fois."
          },
          {
            "state": "Perfect",
            "description": "Les bords sont entièrement fixés et fermes. Centre 10cm se déplace comme un lent, joggle unifié. La surface est mate et blanc crème. Un léger dôme s'est formé.",
            "action": "Éteignez le four, cassez la porte et laissez-le pendant 1 heure avant de le retirer."
          },
          {
            "state": "Overdone",
            "description": "Toute la surface est ferme. Cheesecake s'est considérablement gonflé et peut avoir fêlé à travers le haut. Le centre ne court plus du tout.",
            "action": "Retirer immédiatement du four. Les cracks peuvent être recouverts de crème sure ou de fruits. La texture peut être légèrement sèche mais encore bonne."
          }
        ]
      },
      "feelCue": "Le gâteau au fromage fini, après le repos du four, doit être à la température d'une pièce chaude — pas chaud. Si vous reposez votre paume sur la surface (gentement), il doit se sentir chaud mais pas chaud, et donner la pression la plus faible."
    },
    {
      "nodeId": "step_5",
      "action": "Refroidissement et refroidissement",
      "inputs": [
        "baked_cheesecake"
      ],
      "outputState": "finished_new_york_cheesecake",
      "instructions": "Retirer du bain d'eau après le repos du four. Lancez un couteau mince autour du bord intérieur du ressort pour libérer le cheesecake (ce qui empêche les fissures en rétrécissant). Laisser refroidir à température ambiante pendant 2 heures. Réfrigérer à découvert pendant au moins 4 heures, idéalement pendant la nuit. Retirez l'anneau en forme de ressort seulement lorsque le gâteau est complètement froid. Couper avec un couteau chaud et sec pour des coupes propres.",
      "visualCue": {
        "primaryTarget": "Une fois entièrement réfrigérés et tranchés, chaque coin se tient debout avec des faces coupées propres et lisses. L'intérieur est dense et blanc, la croûte est dorée à la base. Pas d'embrouillement ou de suintement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le gâteau au fromage a été tranché avant d'être complètement réfrigéré. L'intérieur est doux et les tranches s'effondrent et perdent leur forme sur l'assiette.",
            "action": "Réfrigérer le reste du gâteau au fromage et accepter les tranches imparfaites de la première coupe. La saveur n'est pas affectée — seule la présentation souffre."
          },
          {
            "state": "Perfect",
            "description": "Des tranches de cheesecake fermes et froides en quartiers qui tiennent leur forme triangulaire. Le visage coupé est lisse et dense, blanc crème. La croûte se libère proprement de la base.",
            "action": "Servir à température ambiante (supprimer du réfrigérateur 20 minutes avant de servir pour la meilleure saveur)."
          },
          {
            "state": "Overdone",
            "description": "Cheesecake a été réfrigéré plus de 3 jours. Les bords ont peut-être pris une teinte légèrement grise et la surface semble légèrement séchée.",
            "action": "Le goût est toujours bon en 5 jours. Couvrir soigneusement avec un enveloppement plastique après le premier jour pour empêcher la surface de sécher."
          }
        ]
      },
      "feelCue": "Lors de la coupe, le couteau chaud doit glisser à travers le gâteau au fromage réfrigéré sans résistance, une coupe propre et lisse. Si vous ressentez une résistance ou si le cheesecake traîne sur la lame, il faut plus de temps au réfrigérateur."
    }
  ]
};
