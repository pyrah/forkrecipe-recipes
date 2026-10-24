export default {
  "repoId": "master_vietnamese_banh-xeo-batter_001",
  "parentRepoId": null,
  "slug": "banh-xeo-batter",
  "author": "ForkRecipe Kitchen",
  "title": "Bánh Xèo Batter",
  "description": "La pâte à crêpe fine, dorée, teintée de curcuma, du sud du Vietnam, a versé chaud au grésil dans une poêle très chaude avec du lait de coco pour faire le large, croustillant, crevettes-et-pork-tuffed pancake dont le nom signifie «gâteau de grésil».",
  "cuisine": "Vietnamiens",
  "culture": "Sud du Vietnam",
  "category": "grains",
  "tags": [
    "vietnamese",
    "crêpe",
    "curcuma",
    "farine de riz",
    "Cake vertigineux",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "1 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Farine de riz (fine, non glutine)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Fécule de maïs (năng / fécule de tapioca)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "farine de tapioca — essentiellement la même"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Lait de coco, plein gras (en conserve ou frais)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "crème de coco diluée 1:1 avec de l'eau"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "eau pétillante pour plus de croustillant"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Curcuma au sol",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Oignon de printemps (épilon), tranché finement",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile neutre, pour la friture de chaque crêpe",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "Huile de coco pour une saveur de noix de coco ajoutée"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fouetter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "raw_batter",
      "instructions": "Dans un grand bol, mélanger la farine de riz, la fécule de maïs, le curcuma et le sel. Mélanger d'abord les ingrédients secs de façon à ce que le curcuma soit uniformément distribué — il tend à s'agglutiner et provoquera des stries jaunes dans la crêpe finie si elle n'est pas complètement dispersée dans la farine avant d'ajouter du liquide. Verser dans le lait de coco tout en fouettant, puis ajouter l'eau froide dans un ruisseau stable, en continuant à fouetter jusqu'à ce qu'elle soit complètement lisse et sans grumeaux. La pâte doit être très fine — plus mince que la pâte à crêpes, plus proche de la consistance de la crème lourde. Le curcuma colorera la pâte d'un jaune doré vif. Reposez la pâte pendant au moins 30 minutes pour permettre à la farine de riz de s'hydrater complètement et aux amidons de se détendre.",
      "visualCue": {
        "primaryTarget": "Un liquide mince, jaune doré brillant avec la consistance de la crème lourde et pas de grumeaux visibles. Le curcuma aurait dû être complètement dissous, donnant une couleur uniforme et vive.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte a des stries jaune pâle provenant de curcuma partiellement dispersé et de petites boules blanches de farine de riz non dissoute visibles partout.",
            "action": "fouetter plus vigoureusement, ou mélanger avec un mélangeur d'immersion pendant 30 secondes. Mélangez toujours les ingrédients secs avant d'ajouter du liquide pour éviter les grumeaux."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, uniformément dorée et assez mince pour verser dans un ruisseau stable et intact du fouet. Lorsque vous penchez le bol, il se déplace comme une fine sauce à la crème.",
            "action": "Couvrir et reposer pendant 30 minutes minimum. Le reste est critique: la pâte versée immédiatement est plus susceptible de coller et produit un crêpe moins croquant."
          },
          {
            "state": "Overdone",
            "description": "La pâte a été fouettée vigoureusement pendant trop longtemps et a commencé à développer du gluten à partir de l'amidon de maïs — il se sent légèrement élastique lorsqu'il est étiré sur le fouet.",
            "action": "Reposez-le 15 minutes de plus. L'élasticité va se détendre. La pâte à farine de riz ne peut pas surtravailler comme la pâte à farine de blé peut le faire — quelques minutes supplémentaires de fouettage ne sont pas un véritable problème."
          }
        ]
      },
      "feelCue": "Soulevez le fouet et laissez la pâte retomber dans le bol — il devrait tomber dans un ruban mince et intact, comme de la crème versée. S'il tombe dans des gobelets épais et lugubres, ajouter une cuillère à soupe d'eau froide et fouetter à nouveau."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser reposer",
      "inputs": [
        "raw_batter",
        "ing_07"
      ],
      "outputState": "rested_batter",
      "instructions": "Après le repos de 30 minutes, remuer les oignons de printemps tranchés dans la pâte. La pâte reposée s'est légèrement installée avec une fine couche plus aqueuse sur le dessus — remuez-la ensemble avant de remuer dans les pétoncles. Les oignons de printemps sont ajoutés à la pâte plutôt qu'à la garniture afin qu'ils soient légèrement croustillés par la chaleur de la poêle pendant la cuisson, ajoutant une douceur allium douce et un omble faible à la crêpe elle-même. Mélanger juste avant de verser chaque crêpe, car les pétoncles et l'amidon continueront à se déposer.",
      "visualCue": {
        "primaryTarget": "Une pâte dorée reposée avec de minces disques d'oignon vert de printemps répartis dans l'ensemble, sentant faiblement la noix de coco et le curcuma.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte n'a pas reposé — elle semble encore parfaitement uniforme sans aucun règlement. L'amidon de riz n'a pas eu le temps de s'hydrater et le crêpe aura une texture pulvérulente et sèche.",
            "action": "Attendez 30 minutes. L'impatience à ce stade ne peut être corrigée ultérieurement."
          },
          {
            "state": "Perfect",
            "description": "Après le repos, une fine couche légèrement translucide s'est séparée du haut. Lorsqu'elle est agitée, la pâte a une sensation lisse et cohésive: l'amidon est complètement hydraté et la pâte est homogène. Des oignons de printemps distribués uniformément.",
            "action": "Chauffer une poêle antiadhésive de 26 à 30 cm ou en fonte bien assaisonnée à feu vif jusqu'à ce qu'elle soit très chaude avant de cuire la première crêpe."
          },
          {
            "state": "Overdone",
            "description": "La pâte s'est reposée pendant plus de 3 heures à température ambiante. Les oignons de printemps ont commencé à se lessiver et la pâte sent faiblement la fermentation.",
            "action": "Réfrigérer la pâte si elle se repose au-delà d'une heure. Ramener à la température ambiante avant de frire et remuer vigoureusement pour recombiner."
          }
        ]
      },
      "feelCue": "Après s'être reposé, trempez un doigt dans la pâte et laissez - la tomber; elle devrait couler de votre bout de doigt dans un rideau unique et ininterrompu, sans perle ni goutte. Ce flux lisse signifie que l'amidon est complètement hydraté et que la crêpe s'étendra instantanément quand elle touchera la poêle chaude."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "rested_batter",
        "ing_08"
      ],
      "outputState": "cooked_banh_xeo",
      "instructions": "Chauffer une poêle antiadhésive de 28 cm à feu vif jusqu'à ce que l'on fume chaud. Ajouter l'huile et le tourbillon. Verser une seule louche (environ 80 à 100 ml) de pâte, lever immédiatement la poêle et basculer dans un mouvement circulaire pour que la pâte s'étende finement sur toute la surface, presque comme faire une crêpe. La pâte devrait étourdir de façon explosive l'instant où elle frappe la casserole — le nom vietnamien bánh xèo se réfère littéralement à ce son étourdissant. Réduire le feu à moyen et ajouter le remplissage (crevettes, porc, germes de haricots) à la moitié du crêpe. Couvrir d'un couvercle et cuire pendant 2 à 3 minutes jusqu'à ce que les bords de la crêpe soient dorés et s'éloigner spontanément de la casserole, puis découvrir et cuire pendant 1 minute de plus pour bien croquer les bords. Plier la moitié non remplie sur la moitié remplie et glisser sur une plaque.",
      "visualCue": {
        "primaryTarget": "Les bords de la crêpe devraient être d'un brun doré profond, levant librement de la casserole, tandis que la surface du centre semble mate et cuite à travers. Le pli devrait tenir sans craquer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les bords sont encore pâles et collés à la poêle. Le centre est encore brillant et humide. La crêpe pleure quand vous essayez de la plier.",
            "action": "Remplacer le couvercle et cuire encore une minute. Le bánh xèo n'est pas prêt jusqu'à ce que les bords se détachent spontanément, le forçant à déchirer tôt la crêpe."
          },
          {
            "state": "Perfect",
            "description": "Les bords sont un brun doré vif et ont spontanément recourbé loin du bord de la poêle. Le centre est entièrement mat et opaque. La crêpe glisse librement lorsque la poêle est secouée. Le remplissage est visible à travers le bord lacé et croustillant.",
            "action": "Plier et glisser immédiatement. La crêpe continue de croquer pendant 30 secondes de plus à partir de sa propre température résiduelle."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brun foncé et certains sont allés au-delà de l'or à un noir-ambre. Le crêpe sent faiblement la noix de coco brûlée et les bords sont cassants plutôt que croquants.",
            "action": "Pliez et servez — les bords sombres ont encore bon goût (ils ont un char amer-coconut agréable), mais réduisez la phase de chaleur élevée de 30 secondes pour la prochaine crêpe."
          }
        ]
      },
      "feelCue": "Agiter doucement la casserole quand vous pensez que la crêpe est prête — elle devrait glisser librement comme une seule pièce, comme un œuf frit qui est fait. S'il résiste et colle à n'importe quel endroit, couvrez-le et donnez-lui encore 30 secondes plutôt que de le forcer."
    },
    {
      "nodeId": "step_4",
      "action": "Assembler",
      "inputs": [
        "cooked_banh_xeo"
      ],
      "outputState": "finished_banh_xeo",
      "instructions": "Servir chaque bánh xèo immédiatement comme il vient de la casserole. Dans le style traditionnel vietnamien du Sud, le diner déchire les morceaux de la crêpe croquante, enveloppe chaque morceau dans une grande feuille de laitue avec des herbes fraîches (la menthe, la perilla, la coriandre vietnamienne) et roule l'ensemble dans un paquet pour tremper dans le ch. Le contraste entre le crêpe croustillant et chaud et les herbes fraîches et fraîches enveloppées autour d'elle est le plaisir déterminant du plat. La crêpe s'assouplira dans les 2 minutes de pliage — bánh xèo ne peut pas être tenu; elle doit être mangée au moment où elle est faite.",
      "visualCue": {
        "primaryTarget": "Une crêpe de demi-lune de jaune doré vif, aux bords croustillants lacés et ambrés profonds et à l'intérieur rempli visible à la ligne de plis – crevettes, porc et graines de haricots qui pèlent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crêpe est jaune pâle sans couleur aux bords et une texture douce et souple — elle se penche plutôt que de craqueler lorsqu'elle est pressée.",
            "action": "Retournez dans la poêle pendant une minute à feu vif, à découvert, pour développer les bords croustillants. Un bánh xèo sous-dône est une chose triste, flippante — la croûte est tout le point."
          },
          {
            "state": "Perfect",
            "description": "Les bords craquent audiquement lorsque le crêpe plié est légèrement pressé avec un doigt. La surface dorée a une texture fine et molle avec de petites bulles d'air cloquées. Enrobé de laitue avec des herbes fraîches, il devrait étourdir légèrement pendant plusieurs secondes après le placage.",
            "action": "Servir immédiatement — dans les 60 secondes suivant la sortie de la poêle. Prépare la plaque d'herbe et le chm avant de verser la pâte."
          },
          {
            "state": "Overdone",
            "description": "La crêpe s'est assise plus de 3 minutes après le pliage, la vapeur du remplissage a ramolli les bords croustillants et tout est maintenant mou et pâle.",
            "action": "C'est le problème fondamental de bánh xèo — il n'attend pas. Cuire pour commander seulement et manger debout à la cuisinière si nécessaire."
          }
        ]
      },
      "feelCue": "Appuyez légèrement sur votre bout de doigt contre le bord plié de la crêpe finie — vous devriez entendre un léger craquement et sentir qu'il donne avec un cramoisi propre, comme un mince craquelin. Si elle s'incline silencieusement, la crêpe est soit sous-crissée, soit refroidie trop longtemps."
    }
  ]
};
