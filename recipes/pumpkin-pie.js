export default {
  "repoId": "master_american_pumpkin_pie_001",
  "parentRepoId": null,
  "slug": "pumpkin-pie",
  "author": "ForkRecipe Kitchen",
  "title": "Tarte de citrouille",
  "description": "Une crème soyeuse et tremblante de citrouille et d'épices chaudes serties d'une croûte beurreuse et croustillante, la tarte qui fait sentir toute une fête comme la cannelle et le sucre brun dès qu'elle entre au four.",
  "cuisine": "Américain",
  "culture": "Américain",
  "category": "desserts",
  "tags": [
    "américains",
    "Citrouille",
    "tarte",
    "Action de grâces",
    "dessert"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 1756,
  "forks": 162,
  "contributors": 20,
  "license": "CC-BY-SA",
  "createdAt": "2024-10-01",
  "updatedAt": "2025-10-22",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 0,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Coquille à tarte de 9 pouces, par-cuite (fait maison ou achetée au magasin)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "croûte de cracker graham",
        "croûte de gingembre"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "purée de citrouille, en conserve (non farcie)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "purée de courges à beurre grillée",
        "purée de courge kabocha"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "lait évaporé (plus traditionnel)",
        "crème de coco"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Gros œufs (2 entiers + 1 jaune)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "3 œufs entiers (moins riches)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre brun foncé",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre granulé",
        "sirop d'érable (réduire légèrement la crème)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Epices à tarte à la citrouille (cinnamon, gingembre, muscade, girofle, tousspices)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "épices individuelles mélangées fraîches"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel casher et extrait de vanille",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Pâte à soupe",
      "inputs": [
        "ing_01"
      ],
      "outputState": "par_baked_crust",
      "instructions": "Si vous utilisez une coquille de tarte crue, garnissez-la de parchemin et remplissez-la de poids de tarte ou de haricots secs. Cuire à 190°C pendant 15 minutes. Retirer les poids et le parchemin et cuire 5 minutes de plus jusqu'à ce que la base soit juste réglée et sèche, mais non dorée. Ce par-baking empêche le bas de soggy classique. Laisser refroidir légèrement avant le remplissage.",
      "visualCue": {
        "primaryTarget": "Le fond de la croûte a l'air sec et mat — pas d'éclats crus et pâteux. Les bords commencent à peine à tourner une couleur dorée claire.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le fond en croûte semble encore humide et brillant. Pâte brute visible. Il va devenir soyeux sous le remplissage humide de citrouille.",
            "action": "Retourner au four 3 à 5 minutes de plus. La base doit avoir l'air sèche et légèrement réglée avant de verser dans la crème."
          },
          {
            "state": "Perfect",
            "description": "La base est sèche et mate avec une couleur très claire aux bords. La pâte n'a plus l'air crue. Du calme.",
            "action": "Réduire le four à 165°C et le remplir de crème."
          },
          {
            "state": "Overdone",
            "description": "La croûte est déjà dorée et cuite au four avant même que la crème n'ait été ajoutée. Il sera sur-brun significativement pendant le four rempli.",
            "action": "Tentez les bords avec des bandes de feuilles pendant la cuisson de la crème afin d'éviter toute brûlure."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur la base de la croûte par-cuite avec un doigt — il doit se sentir ferme et sec, pas doux ou céder. Les bords doivent se sentir fixés mais pâles, pas émiettés ou croquants."
    },
    {
      "nodeId": "step_2",
      "action": "Faire de la crème de citrouille",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "pumpkin_custard",
      "instructions": "Dans un grand bol, fouetter ensemble la purée de citrouille et le sucre brun jusqu'à ce qu'il ne reste plus de morceaux. Ajouter le mélange d'épices, le sel, la vanille et fouetter pour mélanger. Dans un bol séparé, fouetter les œufs et le jaune supplémentaire jusqu'à ce qu'ils soient lisses, ajouter la crème lourde et fouetter pour mélanger. Verser le mélange oeuf-crème dans le mélange de citrouille et fouetter jusqu'à ce qu'il soit complètement lisse. N'exagérez pas ou vous incorporerez de l'air qui provoque des fissures pendant la cuisson.",
      "visualCue": {
        "primaryTarget": "Une crème orange profonde lisse et uniforme qui coule comme de la crème épaisse. Pas de bosses, pas de bulles à la surface, de couleur uniforme partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Lumps de citrouille non mélangée ou de sucre brun non dissous visibles. Le mélange semble strié — l'orange tourne dans un fond plus léger.",
            "action": "fouetter plus doucement jusqu'à uniforme. S'écarter d'un tamis à mailles fines si les bosses persistent — la crème de citrouille doit être soyeuse."
          },
          {
            "state": "Perfect",
            "description": "Doux, orange foncé, crème douce. Pas de bosses. Lorsque vous tenez un fouet au-dessus, la crème tombe dans un ruban lisse, pas dans des gouttes.",
            "action": "Plonger dans un tamis pour obtenir une douceur supplémentaire, puis verser dans la croûte par-cuite."
          },
          {
            "state": "Overdone",
            "description": "La crème a beaucoup de bulles à la surface du fouet vigoureux. Ces bulles seront placées dans la tarte et créeront une surface inégale, marquée par des pockmarks.",
            "action": "Laisser reposer la crème pendant 5 minutes pour permettre à la plupart des bulles de se dissiper avant de verser. Ou torchez brièvement la surface après avoir coulé dans la coquille."
          }
        ]
      },
      "feelCue": "Passez un doigt propre à travers la crème et goûtez — vous devriez goûter citrouille terreuse, épices chaudes dans cet ordre: cannelle, puis chaleur de gingembre, puis une chaleur éloignée de la girofle. Si une épice domine, le mélange est coupé."
    },
    {
      "nodeId": "step_3",
      "action": "Remplir et cuire",
      "inputs": [
        "par_baked_crust",
        "pumpkin_custard"
      ],
      "outputState": "baked_pumpkin_pie",
      "instructions": "Verser la crème dans la coquille par-cuite, remplir à moins de 5 mm du bord supérieur. Tentez les bords de la croûte avec du papier ou un bouclier à tarte. Cuire au four à 165°C pendant 50 à 60 minutes jusqu'à ce que les bords de la crème soient fixés, mais le centre de 5cm continue de grignoter lorsque la tarte est légèrement secouée. Retirer et refroidir complètement à température ambiante pendant 2 heures, puis réfrigérer.",
      "visualCue": {
        "primaryTarget": "La surface de la crème est réglée et mate avec un léger dôme. Les bords sont complètement fermes. Le centre de 5cm se fige en une seule masse — comme le jello — lorsque la poêle est légèrement secouée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La moitié centrale de la tarte est encore liquide et se déplace comme de l'eau lorsqu'elle est secouée, pas comme une seule masse jiggly. La surface a l'air humide et brillante.",
            "action": "Retourner au four pendant 5-10 minutes. Vérifiez souvent — la fenêtre entre le sous - et le sur-dos est étroite."
          },
          {
            "state": "Perfect",
            "description": "Les bords sont complètement fixés et mats. Le centre de 5cm est une masse unifiée. Un couteau à parure inséré 2cm du bord sort propre, mais le centre même semble encore sous-doré. Faites confiance au puzzle.",
            "action": "Supprimer immédiatement. Le centre terminera la cuisson à partir de la chaleur de transport."
          },
          {
            "state": "Overdone",
            "description": "Toute la tarte est ferme, même le centre. La surface a craqué au milieu. Les bords peuvent être gonflés et séparés de la croûte.",
            "action": "Refroidir et réfrigérer: les tartes craquelées ont encore bon goût. Couvrir les fissures avec de la crème fouettée. La prochaine fois, tirez 10 minutes plus tôt et faites confiance à la chaleur de report."
          }
        ]
      },
      "feelCue": "Agiter délicatement la poêle à tarte pendant qu'elle est encore au four — reposez le bout des doigts sur la grille et penchez légèrement. Le centre doit se déplacer comme un seul disque, pas comme une vague liquide. Au moment où vous vous sentez un joggle unifié plutôt qu'un slosh liquide, tirez-le."
    },
    {
      "nodeId": "step_4",
      "action": "Frais et réglé",
      "inputs": [
        "baked_pumpkin_pie"
      ],
      "outputState": "set_pumpkin_pie",
      "instructions": "Laisser refroidir la tarte sur une grille à température ambiante pendant 2 heures complètes. Ne pas réfrigérer immédiatement — un changement rapide de température provoque des fissures. Après 2 heures, réfrigérer à découvert pendant au moins 2 heures avant de trancher. Le remplissage doit être complètement froid avant la coupe — le remplissage à la citrouille chaude est encore techniquement liquide et s'effondrera lorsqu'il sera coupé.",
      "visualCue": {
        "primaryTarget": "Après refroidissement, la surface de la crème est complètement mate, légèrement rétrécie des bords, et ferme avec un très léger rebond en tapotant. La tarte tient sa forme lorsqu'elle est coupée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La tarte était coupée alors qu'elle était encore chaude — la crème s'effondre de la tranche, en piqué sur l'assiette. La surface semble mouillée dans la coupe.",
            "action": "Réfrigérer le reste de la tarte et servir la tranche effondrée comme portion « déconstruite ». Tranche froide la prochaine fois."
          },
          {
            "state": "Perfect",
            "description": "Des tranches de tarte froides, tenant sa forme triangulaire. Le bord coupé est lisse et ferme, ce qui montre la croûte rouge foncée et flocée à la base.",
            "action": "Servir avec de la crème fouettée."
          },
          {
            "state": "Overdone",
            "description": "La tarte est réfrigérée depuis plus de 2 jours. La croûte est légèrement molle à cause de la migration de l'humidité. La surface de la crème peut avoir un léger éclat.",
            "action": "Servir de toute façon — la saveur n'est pas affectée. La prochaine fois, entreposez-le de façon lâche avec un enveloppement en plastique, non scellé, pour réduire la condensation d'humidité."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur le centre de la tarte refroidie d'un doigt — il devrait revenir immédiatement avec un léger rebond, comme appuyer sur une joue ferme. Si elle tient une bosse, elle a besoin de plus de temps au réfrigérateur."
    }
  ]
};
