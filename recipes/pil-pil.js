export default {
  "repoId": "master_spanish_pil-pil_001",
  "parentRepoId": null,
  "slug": "pil-pil",
  "author": "ForkRecipe Kitchen",
  "title": "Bacalà al Pil-Pil",
  "description": "L'art basque de coaxer la propre gélatine de la morue salée dans une sauce à l'huile d'olive émulsifiée — un doux tourbillon circulaire de la poêle construit une émulation crémeuse d'ivoire sans goutte de crème ou de beurre, soutenue entièrement par le collagène propre au poisson.",
  "cuisine": "Espagnol",
  "culture": "Basque",
  "category": "sauces",
  "tags": [
    "Espagnol",
    "Basque",
    "morue salée",
    "émulsionné-sauce",
    "Huile d'olive",
    "gélatine"
  ],
  "difficulty": 4,
  "activeTime": "30 min",
  "totalTime": "45 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Morceaux de morue salée séchée (bacalao), filets de peau trempés 48 heures dans de l'eau froide",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive extra vierge, variété légère",
      "ratioValue": 80,
      "defaultUnit": "%",
      "substitutions": [
        "huile d'olive pure"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Heat",
      "name": "Piments de piment séchés (ou de Cayenne séchée)",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": [
        "Cayenne séchée",
        "chili des yeux d'oiseau séché"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel de mer fin (goût avant addition — le cabillaud porte du sel)",
      "ratioValue": 0.5,
      "defaultUnit": "%",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Désalt et morue sèche",
      "inputs": [
        "ing_01"
      ],
      "outputState": "dried_cod_fillets",
      "instructions": "Si ce n'est pas déjà fait, submerger la morue salée dans un grand bol d'eau froide au réfrigérateur. Changez l'eau toutes les 8-12 heures pendant 48 heures. Le poisson est prêt quand une petite pièce a un goût agréablement salé plutôt qu'écrasant. Après avoir dessalé, retirer les filets de l'eau et les sécher complètement sur plusieurs couches de papier, puis les laisser découverts sur un support à température ambiante pendant 20 minutes. Cette étape de séchage est critique : l'humidité de surface est l'ennemi de l'émulsion, elle fera diluer la gélatine dans l'eau plutôt que de la lier à l'huile. Courrez vos doigts sur la peau; les filets doivent se sentir secs et légèrement collants, non mouillés.",
      "visualCue": {
        "primaryTarget": "Les filets sont blancs d'ivoire pâles, uniformément humides, mais pas humides. La texture de surface est légèrement fibreuse et le poisson tient fermement sa forme sans être raide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les filets ont toujours un goût de sel agressif — l'eau n'a pas pénétré au cœur. La chair est dense, presque dure.",
            "action": "Continuer à tremper avec des changements d'eau plus fréquents. Un filet de sel immobile fera une sauce naturellement salée."
          },
          {
            "state": "Perfect",
            "description": "Agréablement salé, comme du poisson bien assaisonné. La chair est souple et pele dans de longs flocons de viande. La surface est sèche et légèrement collante.",
            "action": "Pat bien sécher et reposer sur un rack avant de confiner."
          },
          {
            "state": "Overdone",
            "description": "Le filet a un goût fade et waterlogged après trop longtemps un trempage, et la chair est douce et commence à s'effondrer.",
            "action": "Continuez, mais gérez doucement. La sauce peut avoir besoin de sel ajouté à la finale pour compenser."
          }
        ]
      },
      "feelCue": "Exécutez un ongle légèrement le long du grain de la chair — il devrait se séparer en filaments purs et longs sans s'effondrer. Le côté de la peau doit se sentir légèrement caoutchouteux et sec, prêt à libérer la gélatine sans vapeur."
    },
    {
      "nodeId": "step_2",
      "action": "Confit la morue dans l'huile",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "dried_cod_fillets"
      ],
      "outputState": "confited_cod_and_infused_oil",
      "instructions": "Dans un large cazuela en argile peu profonde ou une poêle lourde, mélanger l'huile d'olive, l'ail tranché et le chilis séché au plus bas feu possible. Lorsque l'ail commence à frémir doucement (environ 2 minutes), nicher les filets de morue sur la peau. L'huile ne devrait jamais buller agressivement — elle devrait planer autour de 60–70C / 140–160F, qui est bien en dessous d'un alevin. Cuire de 12 à 15 minutes, en inclinant périodiquement la poêle pour assainir le poisson avec l'huile chaude. Vous commencerez à voir de petites gouttelettes blanches se former aux bords des filets — c'est la gélatine qui lessivait du poisson dans l'huile. C'est la matière première de l'émulsion. Lorsque le poisson est simplement cuit et commence à flocer, retirez doucement les filets avec une spatule à fentes sur une assiette chaude. Réserver chaque goutte d'huile avec ses gouttelettes d'ail et de gélatine.",
      "visualCue": {
        "primaryTarget": "De petites gouttelettes de gélatine blanc laiteux sont visibles aux bords de chaque filet et dispersées dans l'huile; l'ail est devenu or pâle mais pas brun; la chair de poisson se soulève au bord en flocons lâches et humides.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas encore de gouttelettes blanches visibles dans l'huile; le poisson est encore translucide au centre et la chair est ferme et inébranlable.",
            "action": "Continuer à la chaleur la plus basse. La gélatine a besoin de temps et de chaleur douce pour migrer hors du collagène — ne vous précipitez pas avec une chaleur plus élevée."
          },
          {
            "state": "Perfect",
            "description": "Des gouttelettes de gélatine blanche visibles dans toute l'huile, de l'ail en or pâle, pêchent simplement opaques au centre mais encore très humides.",
            "action": "Retirer soigneusement le poisson et commencer l'émulsion tourbillonner immédiatement pendant que l'huile est encore chaude."
          },
          {
            "state": "Overdone",
            "description": "Le poisson s'est cassé en flocons secs, la gélatine a complètement cuit et l'huile semble légèrement trouble de surextraction. L'ail est brun.",
            "action": "La sauce émulsionnera encore, mais le poisson aura une texture plus sèche. Retirer l'ail si brun pour éviter l'amertume."
          }
        ]
      },
      "feelCue": "Mangez doucement le poisson avec une spatule — il devrait céder et commencer à se séparer aux lignes de flocons naturels, mais toujours tenir ensemble comme une seule pièce. L'huile dans la poêle devrait être légèrement plus épaisse que lorsque vous avez commencé, presque soyeuse sur une cuillère."
    },
    {
      "nodeId": "step_3",
      "action": "Émulsionner",
      "inputs": [
        "confited_cod_and_infused_oil"
      ],
      "outputState": "pil_pil_sauce",
      "instructions": "C'est la technique de définition du plat. Avec l'huile chaude réservée encore dans la poêle sur la chaleur la plus basse, commencez à déplacer la poêle dans des cercles lents et continus — l'inclinant vers l'avant, latéralement, vers l'arrière, dans un tourbillon patient hypnotique. Ne remuez pas, ne fouettez pas. Il suffit de balancer la casserole. Comme vous le faites, les gouttelettes de gélatine commencent à se lier à l'huile d'olive, et après 5-10 minutes une émulsion pâle et crémeuse commence à se former aux bords de la poêle et à s'étendre lentement au centre. La sauce va de gras à blanc ivoire et légèrement épaissie, comme un aioli très lâche. Si à n'importe quel moment il semble qu'il est sur le point de se diviser — l'huile se sépare de la masse blanche — ajouter une cuillère à café d'eau froide et ralentir le tourbillon. Goûtez et ajustez le sel très soigneusement. Une sauce pil-pil qui tient est l'un des grands miracles tranquilles de la cuisine.",
      "visualCue": {
        "primaryTarget": "Une émulsion d'ivoire pâle avec un reflet crémeux et brillant qui enveloppe uniformément le fond de la poêle et maintient sa forme pendant une seconde lorsque la poêle est encore — pas une huile grasse avec des taches blanches, mais une sauce crémeuse unifiée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La casserole montre encore une séparation claire entre le liquide huileux et les gouttelettes de gélatine blanche — aucune crémosité ne s'est encore formée.",
            "action": "Continuez à tourner patiemment. L'émulsion commence généralement à 5 minutes. Assurez-vous que la poêle est chaude mais pas chaude."
          },
          {
            "state": "Perfect",
            "description": "Sauce d'ivoire lisse et pâle qui traque et drape lorsque la poêle est inclinée — ressemble à une sauce à la crème lâche mais ne contient pas de crème. Goûte salé, ailé, légèrement océanique.",
            "action": "Remettre les filets de morue doucement à la peau de la sauce et servir immédiatement à partir de la cazuela."
          },
          {
            "state": "Overdone",
            "description": "L'émulsion s'est brisée : l'huile s'est séparée du dessus et une masse dense et caoutchouteuse de gélatine a coulé au fond.",
            "action": "Retirer du feu. Ajouter 1 cuillère à soupe d'eau froide et redémarrer le doux tourbillon circulaire loin de la chaleur. La plupart des pupilles cassées peuvent être sauvées de cette façon — la patience est le remède."
          }
        ]
      },
      "feelCue": "Plongez une cuillère et maintenez-la horizontalement — la sauce devrait envelopper le dos d'une couche suffisamment épaisse pour laisser une trace opaque lorsque vous faites glisser un doigt à travers elle. Si les perles d'huile et coulent de la cuillère, il n'a pas encore émulsifié. Si c'est comme de la crème, tu es là."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer et servir",
      "inputs": [
        "pil_pil_sauce",
        "ing_05"
      ],
      "outputState": "finished_pil_pil",
      "instructions": "Abaissez délicatement les filets de morue réservés dans la sauce émulsifiée, la peau vers le haut, et inclinez la poêle pour les arroser avec la sauce. La chaleur résiduelle de la sauce réchauffera le poisson sans autre cuisson. Goûtez soigneusement la sauce et n'ajoutez une pincée de sel qu'en cas de besoin — le poisson et l'huile auront déjà apporté un sel important. Pour servir, apportez la cazuela directement à la table. Agiter le pain croustillant et le faire glisser dans la sauce ivoire. Le plat doit être servi chaud et non chaud — le pil-pil se brise à des températures supérieures à 80 °C, donc ne jamais le retourner à un brûleur à ce stade.",
      "visualCue": {
        "primaryTarget": "Filets de morue se reposant dans une piscine de sauce ivoire-crème, la peau brille sur le dessus, la sauce vibre légèrement lorsque le plat est déplacé — un plat qui semble à la fois rustique et presque impossiblement élégant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est chaude mais le poisson est froid au centre — l'échange de chaleur n'était pas assez long.",
            "action": "Laisser reposer les filets dans la sauce tiède (chauffée) pendant encore 3 à 4 minutes, en inclinant la poêle pour s'abaisser continuellement."
          },
          {
            "state": "Perfect",
            "description": "Le poisson est chaud tout au long, en flocant de gros morceaux humides au toucher d'une fourchette; la sauce est brillant et ivoire, baignant autour du poisson.",
            "action": "Servir immédiatement dans la casuela avec du pain."
          },
          {
            "state": "Overdone",
            "description": "La sauce est revenue à la chaleur active et cassée — mise en commun de l'huile, sauce grainée et séparée.",
            "action": "Hors de la chaleur: ajouter une éclaboussure d'eau froide et tourbillonner patiemment pour réémulsionner. L'état brisé est rarement permanent."
          }
        ]
      },
      "feelCue": "Faites glisser une croûte de pain dans la sauce finie — elle devrait enrober le pain dans une couche épaisse et brillante qui s'accroche plutôt que de tremper. La saveur sur vos lèvres devrait être océanique, ailky, et richement olive, avec un faible picotement de la guindilla réchauffer l'arrière de la gorge."
    }
  ]
};
