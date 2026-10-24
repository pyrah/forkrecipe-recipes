export default {
  "repoId": "master_japanese_shrimp_tempura_001",
  "parentRepoId": null,
  "slug": "shrimp-tempura",
  "author": "ForkRecipe Kitchen",
  "title": "Ebi Tempura",
  "description": "Les crevettes à queue tendues droites, trempées dans une pâte à farine et à eau à peine mélangée à la glace, sont tombées dans l'huile de 175°C jusqu'à ce que le revêtement s'enfonce dans une coquille fantomatique, crépitante.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "seafood",
  "tags": [
    "tempura",
    "Japonais",
    "crevettes",
    "frits",
    "Lumière",
    "pâte"
  ],
  "difficulty": 3,
  "activeTime": "20 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Crevettes tigrées ou grandes crevettes, coquillages (16/20 nombre)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Crevettes jumbo",
        "Crevettes tachetées"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Farine de gâteau ou farine à faible teneur en protéines (pâtisserie), tamisée",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "mélange de farine de tempura"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Starch",
      "name": "Fécule de pomme de terre ou fécule de maïs",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Eau gazeuse froide (ou eau plate froide)",
      "ratioValue": 35,
      "defaultUnit": "parts",
      "substitutions": [
        "soda club très froid"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Jaune d'œuf (1 grand), glacé",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre pour friture profonde (bron de riz ou tournesol)",
      "ratioValue": 200,
      "defaultUnit": "parts",
      "substitutions": [
        "huile de canola",
        "huile de coco raffinée"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "Dashi (pour la sauce à tremper tentesuyu)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "Poulet léger"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "sauce soja (pour tentessuyu)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Mirin (pour tentessuyu)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Daicon fraîchement râpé, à servir",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "Gingembre râpé"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation de crevettes",
      "inputs": [
        "ing_01"
      ],
      "outputState": "prepped_shrimp",
      "instructions": "Peler la crevette, laissant intact le segment final de la queue et l'éventail de la queue – la queue est la poignée pour tremper et manger. Déveinez en faisant une coupe peu profonde le long du dos avec un couteau à parer et en soulevant l'intestin sombre avec l'extrémité. Pour redresser les crevettes afin qu'elles frisent uniformément et ne se bouclent pas : retournez-les vers le haut du ventre et faites 4-5 coupes diagonales peu profondes à travers le ventre 2 mm de profondeur, les espacer uniformément. Appuyez ensuite sur chaque crevette plate contre la planche à découper avec votre pouce, en l'étirant doucement jusqu'à ce que vous entendiez et sentiez un petit coup — le tissu conjonctif se briser. Les crevettes devraient maintenant se mettre à plat et rester droites lorsqu'elles sont frites.",
      "visualCue": {
        "primaryTarget": "Crevettes pâles, dépeintes, allongées complètement droites sur la planche sans curling. Le ventre montre 4 à 5 marques de scores uniformément espacées. Le ventilateur de queue est intact et symétrique.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crevette tourne encore naturellement — elle n'a pas été notée ou suffisamment tendue. Il sera serré dans un demi-cercle quand il frappe l'huile chaude.",
            "action": "Rendre le ventre légèrement plus profond et presser les crevettes contre la planche plus fermement jusqu'à ce qu'il se détende complètement à plat."
          },
          {
            "state": "Perfect",
            "description": "La crevette est complètement plate et ne ressort pas une fois relâchée. Les scores sont visibles mais n'ont pas traversé la chair. La queue est propre et sèche.",
            "action": "Sèchez avec des serviettes en papier et gardez-les au froid jusqu'à ce qu'ils soient prêts à être battus."
          },
          {
            "state": "Overdone",
            "description": "Les scores de ventre sont trop profonds et ont coupé la chair, ou le pressurage a cassé les crevettes en deux sections reliées.",
            "action": "Utilisez - le de toute façon — la saveur n'est pas affectée. Il suffit de manipuler doucement pendant le trempage de pâte pour éviter de le séparer davantage."
          }
        ]
      },
      "feelCue": "Une crevette correctement étirée devrait se sentir presque rigide — elle résiste au curling lorsque vous la tenez par la queue. Il ne doit pas se sentir flou ou déconnecté des coupes du ventre."
    },
    {
      "nodeId": "step_2",
      "action": "Faire tremper la sauce tentesuyu",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "tentsuyu_sauce",
      "instructions": "Mélanger le dashi, la sauce soja et le mirin dans une petite casserole. Faire mijoter brièvement à feu moyen, environ 2 minutes, pour faire cuire l'alcool du mirin. Goûter — il doit être salé et rond avec une douceur faible et aucun bord tranchant. Verser dans de petits bols à tremper et placer un petit monticule de daikon râpé à côté pour les invités à remuer. Faites ceci avant la pâte pour que vous ne soyez pas distrait une fois que la friture commence.",
      "visualCue": {
        "primaryTarget": "Un liquide clair et brun-ambre avec un léger éclat. L'arôme est salé et légèrement sucré du mirin, avec la profondeur océanique de dashi.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'alcool de Mirin n'a pas cuit — la sauce a un goût vif et boueux au bord.",
            "action": "Laisser mijoter une minute supplémentaire. La netteté devrait être douce."
          },
          {
            "state": "Perfect",
            "description": "Équilibré : salé, légèrement sucré, avec une colonne vertébrale umami. Assez frais pour être utilisé comme sauce à tremper — pas chaud.",
            "action": "Réserver et préparer la pâte ensuite."
          },
          {
            "state": "Overdone",
            "description": "La sauce a diminué trop loin et a un goût intensément salé et bouillant — les proportions sont maintenant dépassées.",
            "action": "Diluer avec le dashi supplémentaire, goûter jusqu'à ce que le solde revienne."
          }
        ]
      },
      "feelCue": "Plongez votre bout de doigt et touchez-le à votre langue : la sauce doit goûter comme la mer avec un doux sous-ton, propre et direct. Il devrait vous faire vouloir manger quelque chose frit immédiatement."
    },
    {
      "nodeId": "step_3",
      "action": "Mélanger la pâte et les frites",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "prepped_shrimp"
      ],
      "outputState": "tempura_shrimp",
      "instructions": "Chauffer l'huile à exactement 175°C / 347°F dans un pot profond et lourd. Pendant que l'huile chauffe, refroidissez votre bol de mélange au congélateur pendant 5 minutes. Faire la pâte au dernier moment possible: combiner la farine et l'amidon tamisés dans le bol congelé. Dans un bol séparé, fouetter le jaune d'œuf dans l'eau froide avec un seul mélange. Verser l'eau de l'œuf dans la farine en un seul supplément. Mélanger avec des baguettes en 4-5 coups délibérés, tourner plutôt que de remuer — la pâte doit rester grumelée, striée et à peine combinée, avec des taches de farine sèche visible. Le surmélange développe du gluten et produit une croûte cakey dense au lieu de la coquille de tempura éthérée. La batterie doit être utilisée dans les 10 minutes. Maintenez chaque crevette par la queue, trempez dans la pâte, laissez couler l'excès pendant une seconde, et abaissez immédiatement doucement dans la tête d'huile en premier. Faire frire 2 à 3 minutes, tourner une fois, jusqu'à ce que la pâte soit d'or pâle et que les crevettes ne soient que légèrement recourbées. Faire frire en petits lots pour maintenir la température de l'huile.",
      "visualCue": {
        "primaryTarget": "La crevette finie est enveloppée dans une coquille d'or pâle, presque translucide, qui a l'air lacy et irrégulière — on peut voir le contour de la crevette en dessous. Le revêtement est clairement séparé de la chair dans les endroits, créant de petites poches d'air.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le battement est encore blanc pâle et semble cru et humide. La température de l'huile a baissé et la pâte est absorbante plutôt que croquante. La crevette flotte maladroitement et n'étourne pas agressivement.",
            "action": "Vérifiez la température de l'huile — elle doit être de 175°C. Enlevez les crevettes, laissez l'huile se rétablir à la température, et rafraîchissez-les et faites fraicher si ce n'est pas encore réglé."
          },
          {
            "state": "Perfect",
            "description": "Coquille pâle dorée, lavée, presque translucide, à texture superficielle irrégulière. Les crevettes à peine courbées. La croûte semble creuse lorsqu'elle est tapée. L'intérieur lit 60-65°C.",
            "action": "Retirer avec un écumoir, égoutter brièvement et servir dans les 60 secondes."
          },
          {
            "state": "Overdone",
            "description": "La croûte est d'or profond à ambre et semble lisse et dense plutôt que lacy. L'huile peut fumer. Les crevettes ont peut-être frisé significativement.",
            "action": "Supprimer immédiatement. La crevette sera cuite à travers mais la croûte a perdu son caractère délicat. Baisser la température de l'huile de 5°C pour le lot suivant."
          }
        ]
      },
      "feelCue": "Écoutez le grésillement lorsque la crevette entre dans l'huile : un crack fort et à haute fréquence est correct, comme l'électricité statique. Un gourdin faible et lent signifie que l'huile est trop froide; la quasi-silence signifie que l'huile a fortement chuté."
    },
    {
      "nodeId": "step_4",
      "action": "Égoutter et plaque",
      "inputs": [
        "tempura_shrimp",
        "ing_10"
      ],
      "outputState": "finished_shrimp_tempura",
      "instructions": "Égoutter chaque pièce verticalement contre le bord d'un porte-fils pendant 10 secondes — le tenir en arrière pour que l'excès d'huile descende et sorte la croûte. Disposer sur une serviette pliée ou sur du papier de wachi sur une plaque ou un plateau de bambou, les queues aspirées vers le haut. Servir avec la tentesuyu dans de petits bols à côté du daikon râpé. La crevette doit être consommée immédiatement — la tempura se dégrade dans les 2 minutes à mesure que la vapeur de l'intérieur migre et adoucit la coquille.",
      "visualCue": {
        "primaryTarget": "Or pâle, fantomatique, coquillage lacé debout sur la plaque, éventail de queue aventuré symétriquement au sommet. La surface a l'air sèche et mate, pas grasse ou scintillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface semble humide et huileuse — la croûte n'a pas été drainée et s'adoucit déjà à partir de l'huile piégée.",
            "action": "Tenez-vous debout sur la grille 10 secondes de plus. Servir immédiatement après."
          },
          {
            "state": "Perfect",
            "description": "D'aspect sec, or pâle, coquillage lacé. Le tapoter avec une baguette produit un son creux et net. La queue est rouge-orange vif à cause de la chaleur.",
            "action": "Servir dans les 60 secondes."
          },
          {
            "state": "Overdone",
            "description": "La croûte s'est ramollie et dégonflée; elle est maintenant croustillante plutôt que croquante. La vapeur de la crevette chaude s'est effondrée.",
            "action": "Mangez quand même, mais vite. La saveur est intacte même quand la texture est partie. Prévoyez de servir le prochain lot dès qu'il sortira de l'huile."
          }
        ]
      },
      "feelCue": "Prenez un morceau par la queue — la croûte doit sentir la lumière comme du papier et craquer entre vos doigts quand très légèrement comprimé. Toute douceur signifie que l'humidité a déjà gagné."
    }
  ]
};
