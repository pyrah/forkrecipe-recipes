export default {
  "repoId": "master_french_financiers_001",
  "parentRepoId": null,
  "slug": "financiers",
  "author": "ForkRecipe Kitchen",
  "title": "Bénéficiaires",
  "description": "Petits gâteaux d'amande en forme de bar faits avec du beurre brun et de la farine d'amande, produisant un intérieur mâché, humide et une croûte de noix caramélisée, le parfait classique de thé à une portion.",
  "cuisine": "Français",
  "culture": "Parisien",
  "category": "desserts",
  "tags": [
    "financier",
    "français",
    "Beurre brun",
    "Amandes",
    "gâteau",
    "pâtisserie",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "1 hr 10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Farine d'amande (blanchie)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Farine de noisette",
        "Farine de pistaches"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre glacé",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre de ricin, finement moulu"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Blancs d'oeufs (non fouettés)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé (pour le brunissement)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "farine de riz (sans gluten)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Beurre adouci (pour moules graissantes)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "huile de pulvérisation neutre"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire fondre",
      "inputs": [
        "ing_04"
      ],
      "outputState": "beurre_noisette",
      "instructions": "Faire fondre le beurre dans une casserole de couleur claire à feu moyen, en tourbillonnant régulièrement. Laissez-le mousser et passer à travers la mousse jusqu'à un stade clair et profond avec des solides de lait doré-brun sur le fond. L'odeur devrait passer de lait à la noisette grillée. Tirez de la chaleur au moment où la couleur est droite et versez immédiatement dans un bol frais à travers une mousse fine. Refroidir à la température ambiante — il doit être liquide mais pas chaud. Le beurre brun est la saveur caractéristique des financiers; ne précipitez pas cette étape.",
      "visualCue": {
        "primaryTarget": "Liquide clair et ambré avec des solides brun noisette. Le beurre sent intensément les noix grillées et le caramel. La couleur devrait être comme du miel léger.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours jaune pâle et sent seulement les produits laitiers. La mousse n'a pas complètement baissé et les solides de lait sont encore blonds.",
            "action": "Continuer à feu moyen régulier. Le changement de couleur est soudain — veillez de près dans les 30 dernières secondes avant que les solides ne deviennent ambres."
          },
          {
            "state": "Perfect",
            "description": "Liquide ambré clair, lait solide d'or foncé et parfumé. Des odeurs de noisettes, de caramel et de grains grillés. C'est propre.",
            "action": "Verser dans un bol frais et laisser refroidir à température ambiante avant d'ajouter à la pâte."
          },
          {
            "state": "Overdone",
            "description": "Les solides sont noirs et le liquide sent acride. Irrémédiablement brûlé.",
            "action": "Jetez et recommencez. Les financiers sont aussi bons que leur beurre brun."
          }
        ]
      },
      "feelCue": "Lorsque vous plongez un doigt dans le beurre refroidi, il doit se sentir comme de l'huile à température ambiante — liquide et neutre à température, pas chaud ou épais. S'il fait chaud, attendez plus longtemps avant de combiner avec les blancs d'œufs."
    },
    {
      "nodeId": "step_2",
      "action": "Whisk",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_05",
        "ing_06",
        "ing_03"
      ],
      "outputState": "dry_wet_combined",
      "instructions": "Dans un bol, fouetter ensemble la farine d'amande, le sucre glaçant, la farine tout usage et le sel jusqu'à ce qu'elle soit uniformément combinée. Ajouter les blancs d'œufs — non fouettés, directement de la coquille — et remuer avec une spatule ou un fouet jusqu'à ce que le mélange soit lisse et homogène. Les blancs d'œufs agissent comme un liant et ajoutent une faible qualité à croquer, mais ils ne doivent pas être aérés. Incorporer l'air au lieu de fouetter. Le mélange à ce stade ressemblera à une pâte dense et pâle.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, pâle et dense, presque comme du massepain. Il ne reste pas de morceaux de farine d'amande, et le blanc d'œuf est complètement absorbé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des lumps de farine d'amande encore visibles. Le blanc d'oeuf n'a pas été entièrement incorporé — des traces de liquide clair dans la pâte.",
            "action": "Mélanger plus soigneusement, presser les morceaux d'amande contre le côté du bol pour les décomposer."
          },
          {
            "state": "Perfect",
            "description": "Doux, uniforme, pâte d'ivoire pâle. Il s'écoule légèrement de la spatule. Sensations douces d'amande et de sucre glace.",
            "action": "Plier dans le beurre brun refroidi dans un ruisseau lent."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a fonctionné trop longtemps avec trop d'air — il est devenu légèrement mousseux des blancs d'oeufs. Les bailleurs de fonds n'ont pas besoin d'air à ce stade.",
            "action": "Arrête de remuer. Plier dans le beurre brun immédiatement et procéder — le reste du pliage du beurre stabilisera le mélange."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir légèrement fraîche et épaisse, donnant sous la spatule comme de l'argile molle. Il devrait tomber de la spatule dans un blob épais et lent plutôt qu'un ruisseau qui coule."
    },
    {
      "nodeId": "step_3",
      "action": "Plier",
      "inputs": [
        "dry_wet_combined",
        "beurre_noisette"
      ],
      "outputState": "financier_batter",
      "instructions": "Verser le beurre brun liquide refroidi dans la pâte d'amande dans un ruisseau lent et stable, en remuant avec une spatule en continu. La pâte se desserre et devient brillante et versable à mesure que le beurre est incorporé. Une fois lisse et brillant, couvrir le bol et réfrigérer pendant au moins 30 minutes — jusqu'à 24 heures. Le reste permet à la farine d'amande d'absorber complètement le beurre et la pâte de se raffermir légèrement, ce qui améliore la croûte caractéristique.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, brillante et de couleur miel qui verse dans un ruban lent et stable de la spatule. Couleur uniforme ambre-or, odeur de beurre brun et d'amande.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre n'est pas entièrement incorporé — des stries de graisse visibles, ou la pâte semble fendue avec des flaques huileuses.",
            "action": "Continuez à remuer régulièrement. La pâte a besoin d'émulsionner complètement avant de se reposer."
          },
          {
            "state": "Perfect",
            "description": "Uniforme, brillant et lisse. Il coule de la spatule dans un ruisseau lent et uniforme. Pas de gêne ou de séparation visible.",
            "action": "Couvrir et réfrigérer au moins 30 minutes avant la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Pas un risque réel à ce stade — la pâte ne peut pas être trop attirée dans le développement du gluten car il y a très peu de farine. Refroidir et cuire."
          }
        ]
      },
      "feelCue": "La pâte doit glisser de la spatule avec un poids satisfaisant — pas aussi lourd que la pâte à gâteau, pas aussi mince que la pâte à crêpe. Il devrait se sentir frais et soyeux quand vous passez la spatule à travers."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "financier_batter",
        "ing_07"
      ],
      "outputState": "baked_financiers",
      "instructions": "Préchauffer le four à 200 C / 390 F. Beurrer généreusement les moules financiers (ou une mini-muffin étain). Remplir chaque moule des trois quarts de la pâte à froid — ne pas trop remplir ou la croûte ne se formera pas correctement. Cuire au four pendant 12-14 minutes jusqu'à ce que les bords soient brun doré profond, le centre a légèrement gonflé, et un cure-dent inséré au centre sort avec seulement quelques miettes humides. Le contraste de couleur dramatique — bords d'or foncé, centre bombé plus léger — est la marque d'un financier bien cuit.",
      "visualCue": {
        "primaryTarget": "Des bords dorés profonds et du fond, un haut en forme d'ambre plus léger. Les bords ont légèrement tiré du moule. Un léger dôme s'est formé au centre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pale partout, le haut est encore plat ou à peine bombé. Le centre se sent liquide ou très doux lorsqu'il est pressé. Aucune caramélisation visible.",
            "action": "Cuire encore 3-4 minutes. La caramélisation des bords est essentielle au goût financier — ne les tirez pas tôt."
          },
          {
            "state": "Perfect",
            "description": "Bords d'or profonds, centre faiblement printanier. Le financier se libère facilement du moule avec une légère torsion. Des odeurs d'amande grillée et de beurre.",
            "action": "Démouvoir immédiatement sur une grille. La croûte croustillante à mesure qu'elle refroidit — mangez chaud ou à température ambiante, en un jour."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brun foncé ou noir, le centre est coulé. Le financier sent l'amertume et se sent dur.",
            "action": "Sans mouvoir. L'intérieur peut encore être humide s'il est pris rapidement. Couper les bords vraiment brûlés avant de servir."
          }
        ]
      },
      "feelCue": "Lorsque vous appuyez doucement sur la partie supérieure du dos avec un bout de doigt, il devrait ressortir avec un très léger donner — résilient à mâcher, comme presser un bonbon gommé ferme. Si ça bosse et ça ne revient pas, il faut plus de temps."
    }
  ]
};
