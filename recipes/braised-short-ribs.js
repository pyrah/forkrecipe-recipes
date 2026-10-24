export default {
  "repoId": "master_french_braisedshortribs_001",
  "parentRepoId": null,
  "slug": "braised-short-ribs",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Côtes courtes de boeuf braisé de vin",
  "description": "Des côtes courtes de bœuf désossées cousues à une croûte d'acajou, puis submergées dans une bouteille pleine de vin rouge et laissées lentement dans un four bas jusqu'à ce que le collagène se dissout en richesse soyeuse et que la viande glisse de l'os au toucher d'une cuillère.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "proteins",
  "tags": [
    "boeuf",
    "braise",
    "français",
    "côtes courtes",
    "Vin rouge",
    "Cuisson lente",
    "hiver"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "4 hr 45 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Côtes courtes de bœuf osseux (cut anglais)",
      "ratioValue": 1800,
      "defaultUnit": "g",
      "substitutions": [
        "Bouchée de bœuf, désossée"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 18,
      "defaultUnit": "g",
      "substitutions": [
        "sel de mer fin"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Poivre noir, grossièrement moulu",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile neutre (grape graine ou canola)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon jaune, haché approximativement",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Carotte, grossièrement hachée",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Pâtes de céleri, hachées approximativement",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Girofles d'ail brisées",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Acid",
      "name": "Vin rouge corsé (Syrah ou Cabernet)",
      "ratioValue": 750,
      "defaultUnit": "g",
      "substitutions": [
        "Bourgogne",
        "Côtes du Rhône"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Liquid",
      "name": "Viande bovine",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "bouillon de poulet"
      ]
    },
    {
      "ingId": "ing_12",
      "role": "Herb",
      "name": "Bouquet garni (thyme, baie, romarin, persil)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Assaisonner",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "seasoned_ribs",
      "instructions": "Chaque côte courte est complètement sèche avec des serviettes en papier. Assaisonner agressivement sur les six côtés avec du sel casher et du poivre noir grossier, en pressant l'assaisonnement dans la viande. Reposez-vous à température ambiante pendant au moins 30 minutes, ou salez la veille et réfrigérez-vous à découvert pendant la nuit pour un assaisonnement plus profond et une surface plus sèche (ce qui vaut mieux). Préchauffer le four à 160 C (325 F).",
      "visualCue": {
        "primaryTarget": "Surface des côtes assaisonnées",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface semble encore humide et scintillante. Le sel n'a pas eu le temps de retirer l'humidité de surface et d'être réabsorbé.",
            "action": "Reposez plus longtemps — au moins 20 minutes de plus. Une surface humide va vapeur dans la poêle et empêcher le brunissement."
          },
          {
            "state": "Perfect",
            "description": "La surface est sèche et mate, avec une faible qualité collante. Le poivre est uniformément distribué. Les côtes se sentent légèrement plus fermes du sel.",
            "action": "Allez à la mer."
          },
          {
            "state": "Overdone",
            "description": "Les côtes ont été fortement salées et laissées plus de 24 heures — la surface semble légèrement mouillée à nouveau lorsque l'humidité tirée est revenue.",
            "action": "Pat sécher à nouveau avec des serviettes en papier avant de saisir."
          }
        ]
      },
      "feelCue": "Appuyez sur la surface de la côte – elle doit être sèche et légèrement collante sous le bout des doigts, comme la peau d'un steak d'âge sec, pas mouillée ou lissée."
    },
    {
      "nodeId": "step_2",
      "action": "Saisir",
      "inputs": [
        "seasoned_ribs",
        "ing_04"
      ],
      "outputState": "seared_ribs",
      "instructions": "Chauffer un grand four hollandais ou un brasseur lourd à feu vif. Ajouter l'huile et chauffer jusqu'à ce qu'il fume. Travaillant en lots de deux ou trois côtes à la fois — ne jamais fouler la poêle — semer chaque côte sur les quatre côtés charnus et les deux faces osseuses. Laisser chaque côté 3 à 4 minutes de contact non perturbé avec la poêle avant de tourner. Temps total de mise en mer par lot : 15 à 18 minutes. Transférer les côtes dans une assiette. Ne pas nettoyer le pot — le fond est critique.",
      "visualCue": {
        "primaryTarget": "Couleur croustillante sur chaque face des côtes",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les côtes sont brun gris, à la vapeur. Ils ont l'air bouillis, pas séchés. La poêle est trop bondée ou pas assez chaude.",
            "action": "Enlever quelques côtes pour les saisir en petits lots. Augmenter la chaleur et laisser la poêle récupérer pendant 2 minutes avant le prochain lot."
          },
          {
            "state": "Perfect",
            "description": "Chaque visage mariné est un acajou profond, presque brun chocolat, avec une croûte laquée dure. Une fumée mince brume sur le pot. La cuisine sent le boeuf caramélisé.",
            "action": "Réserver et saisir le prochain lot."
          },
          {
            "state": "Overdone",
            "description": "La croûte est noire sur les bords et le fond brûle, pas caramélisant. Fumée acride.",
            "action": "Enlevez les côtes. Déglacer le pot avec du vin pour soulever le fond immédiatement avant qu'il ne devienne amer."
          }
        ]
      },
      "feelCue": "Lorsqu'une côte se libère proprement de la poêle sans coller — sans forcer — elle est prête à tourner. Les tentatives de libération précoce déchireront la croûte; la viande vous dit quand elle est prête."
    },
    {
      "nodeId": "step_3",
      "action": "Faire revenir",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "soffritto",
      "instructions": "Dans la même casserole avec tout le fond accumulé, réduire la chaleur à moyen. Ajouter l'oignon, la carotte et le céleri. Cuire 8 minutes en remuant occasionnellement et en grattant les morceaux bruns du fond, jusqu'à ce que les légumes soient profondément ramollis et commencent à brunir. Ajouter l'ail et cuire encore 1 minute. Poussez tout sur les côtés et ajoutez la pâte de tomate au centre. Cuire la pâte pendant 2 à 3 minutes jusqu'à ce qu'elle s'assombrisse du rouge au brun brique (pinçage). Incorporer les légumes.",
      "visualCue": {
        "primaryTarget": "Couleur des légumes et de la pâte de tomate",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont translucides mais toujours fermes. La pâte de tomates est encore rouge vif. Le fond s'est levé mais pas caramélisé.",
            "action": "Conservez la cuisson — les légumes doivent encore s'assouplir pour fondre dans le liquide braisé."
          },
          {
            "state": "Perfect",
            "description": "Les légumes sont profondément dorés aux bords. La pâte de tomates est passée du rouge au brun rouge foncé. Le fond du pot est recouvert d'un fond riche et sombre.",
            "action": "Déglacer avec le vin immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Les légumes sont carbonisés, la pâte est noire. L'odeur amère domine.",
            "action": "Jeter les légumes, essuyer le pot, et recommencer le soffritto avec des aromatiques frais."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau de carotte avec l'arrière d'une cuillère — il devrait donner complètement sans résistance, signalant que les légumes ont complètement libéré leurs sucres dans le fond."
    },
    {
      "nodeId": "step_4",
      "action": "Déglacer",
      "inputs": [
        "soffritto",
        "ing_10"
      ],
      "outputState": "wine_base",
      "instructions": "Verser toute la bouteille de vin rouge. Porter à ébullition, en grattant chaque partie sombre du fond du pot. Laisser le vin réduire de moitié à feu moyen-élevé — environ 15 minutes — jusqu'à ce que l'odeur d'alcool brut ait brûlé et les odeurs liquides de fruits foncés et de structure plutôt que de vinaigre. Ajouter le bouillon de bœuf et le bouquet garni.",
      "visualCue": {
        "primaryTarget": "Volume et arôme de la réduction du vin",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le vin a à peine diminué. Il sent aigu et alcoolique — comme un verre de vin, pas un braise.",
            "action": "Continuer à réduire vigoureusement. Le vin cru en braise produit un résultat aigu et astringent."
          },
          {
            "state": "Perfect",
            "description": "Le liquide a visiblement épaissi et réduit d'environ la moitié. Rouge-violet profond avec une surface brillante. L'arôme est rond et fruité — pas de bord dur d'alcool.",
            "action": "Nettoyez les côtes dans le liquide et ajoutez le stock."
          },
          {
            "state": "Overdone",
            "description": "Réduit trop loin — le vin est devenu sirupeux et très doux, avec une odeur de confiture, de fruits cuits.",
            "action": "Ajouter le stock maintenant pour diluer avant d'ajouter les côtes."
          }
        ]
      },
      "feelCue": "Plongez un doigt dans le vin réduit (lorsqu'il est légèrement refroidi sur une cuillère) — il doit se sentir légèrement plus épais que l'eau, enrobant le bout du doigt d'une tache mauve faible qui ne s'efface pas immédiatement."
    },
    {
      "nodeId": "step_5",
      "action": "Braiser",
      "inputs": [
        "wine_base",
        "seared_ribs",
        "ing_11",
        "ing_12"
      ],
      "outputState": "braised_ribs",
      "instructions": "Nettoyez les côtes courtes dans la base de vin, côté osseux. Ils devraient être au moins les deux tiers submergés — ajouter plus de stock ou d'eau si non. Ajouter le bouquet garni. Porter à la mijoter sur la cuisinière, puis couvrir avec un couvercle serré et transférer au four préchauffé à 160 C (325 F). Braser pendant 3 à 3,5 heures, tourner les côtes une fois à mi-chemin. Ils sont réalisés lorsque la viande est complètement séparée de l'os et qu'une brochette ou un testeur de gâteau passe à travers avec une résistance nulle.",
      "visualCue": {
        "primaryTarget": "Texture de la viande et comportement des os",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les os sont toujours solidement attachés. La viande résiste à une brochette avec repousse sensible. Le liquide de cuisson est encore mince et pourpre.",
            "action": "Remplacer le couvercle et retourner au four. Testez de nouveau par paliers de 30 minutes."
          },
          {
            "state": "Perfect",
            "description": "Les os ont été arrachés de la viande d'au moins 1 cm et peuvent être glissés avec un remorqueur doux. La viande tremble quand le pot est bouché. Le liquide de braisage s'est approfondi jusqu'à un brun acajou et a une surface brillante et riche en gélatine.",
            "action": "Retirer soigneusement les côtes avec une large spatule. Retirez et réduisez le liquide de cuisson dans une sauce."
          },
          {
            "state": "Overdone",
            "description": "Les côtes se sont désintégrées — la viande est tombée de l'os en morceaux et la surface est sèche. Le liquide de cuisson a trop réduit dans le four.",
            "action": "Sauver la viande déchiquetée pour une application différente (pasta ragu, tacos). Le liquide de cuisson, sinon brûlé, fera encore une excellente sauce."
          }
        ]
      },
      "feelCue": "Insérez une brochette en métal mince dans la partie la plus épaisse d'une côte — elle devrait glisser dans et hors avec la facilité de pousser dans le beurre à température ambiante, sans résistance à la traction ou à l'arrimage."
    },
    {
      "nodeId": "step_6",
      "action": "Faire réduire",
      "inputs": [
        "braised_ribs"
      ],
      "outputState": "finished_short_ribs",
      "instructions": "Transférer les côtes dans une assiette chaude, recouverte de papier. Placer le liquide de cuisson dans une grande casserole, en pressant les légumes usés pour en extraire chaque goutte. Portez à frémir vigoureusement et réduisez jusqu'à ce que la sauce enrobe une cuillère proprement et ait un aspect laqué, réduisant généralement de moitié à deux tiers sur 15 à 20 minutes. Réglez le sel. Déposer la sauce brillante sur les côtes et servir immédiatement, ou reposer les côtes dans la sauce tendue au réfrigérateur pendant la nuit (ils réchauffent mieux le lendemain).",
      "visualCue": {
        "primaryTarget": "Cohérence et gloss de la sauce réduite",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et pourpre, s'écoule immédiatement de la cuillère. Pas de corps. Goûte aqueux malgré la couleur.",
            "action": "Continuez à réduire. Une réduction plus large de la vitesse du bac — la surface est essentielle."
          },
          {
            "state": "Perfect",
            "description": "La sauce est une acajou profonde, presque noire, avec un ruban brillant. Enveloppe l'arrière d'une cuillère épaissement; un doigt tiré à travers le revêtement laisse une ligne propre et sèche qui tient. Goûte intensément de boeuf, vin et thym.",
            "action": "Goûtez, ajustez le sel et l'assiette."
          },
          {
            "state": "Overdone",
            "description": "La sauce est très foncée et épaisse au sirop. Un bord légèrement brûlé et amer au goût. Elle colle à la cuillère d'une manière sèche, semblable au caramel.",
            "action": "Ajouter un jet de bouillon ou d'eau et remuer vigoureusement. Goûtez encore — la douceur et l'amertume devraient rééquilibrer."
          }
        ]
      },
      "feelCue": "Prenez une petite cuillère de la sauce réductrice et laissez-la refroidir sur une assiette froide pendant 10 secondes – des ensembles de réduction parfaits pour un gel mou et tremblant ; une sous-réduction reste liquide ; une surréduction forme une galette rigide au caramel."
    }
  ]
};
