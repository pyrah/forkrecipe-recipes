export default {
  "repoId": "master_lamb_stock_001",
  "parentRepoId": null,
  "slug": "lamb-stock",
  "author": "ForkRecipe Kitchen",
  "title": "Stock d'agneau",
  "description": "Le cou de l'agneau et les os de knuckle rôtis jusqu'à l'acajou, puis mijotés lentement avec des aromatiques, des herbes et du vin rouge pendant quatre heures — produisant un stock sombre, gélatineux, intensément charnu qui forme l'épine dorsale des tagines, des braises et des graviers.",
  "cuisine": "Mondial",
  "culture": "Anglais",
  "category": "stocks",
  "tags": [
    "agneaux",
    "stock",
    "agneau",
    "osseux",
    "marque à l'avance",
    "Cuisson lente"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "5 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Ossements du cou et du cou (ou os d'agneau mélangés)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "os d'épaules d'agneau",
        "côtes d'agneau"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Oignons jaunes (halves, peau dessus)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Carottes (approximativement hachées)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Pâtes de céleri (approximativement hachées)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Tête d'ail (causée horizontalement)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Vin rouge sec",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "vin blanc sec",
        "eau supplémentaire"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 350,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Feuilles de la baie, rameaux de romarin frais, tiges de persil à feuilles plates",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Maïs de poivre noir (ensemble)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtis",
      "inputs": [
        "ing_01",
        "ing_11",
        "ing_01"
      ],
      "outputState": "roasted_bones",
      "instructions": "Préchauffer le four à 230°C (450°F). Placez les os d'agneau dans une seule couche dans une grande poêle — ne les foulez pas. Arrosez avec de l'huile neutre. Faire cuire pendant 30 à 40 minutes, tourner une fois à 20 minutes, jusqu'à ce que les os soient profondément acajou-brun sur toutes les surfaces exposées et que la graisse ait rendu et soit étourdie. Plus le rôti est sombre, plus le stock est profond et complexe, mais arrête avant que les os ne soient noirs, ce qui introduit l'amertume. Dans les 10 dernières minutes, pousser les os sur les côtés et ajouter la pâte de tomate au centre de la poêle pour la caraméliser (pinçage).",
      "visualCue": {
        "primaryTarget": "Les os sont un acajou-brun profond sur toutes les surfaces. La rôtissoire a des gouttes caramélisées foncées et la pâte de tomate a obscurci du rouge au brun brique.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les os sont d'or pâle à clair. La graisse commence à peine à rendre. Pas d'affection pour la casserole.",
            "action": "Retourner 15 minutes au four. Les os de couleur claire produisent un stock pâle et mince — s'engagent dans l'obscurité."
          },
          {
            "state": "Perfect",
            "description": "Acajou profond partout avec des bords plus foncés. La graisse dans la casserole est étourdissante et la cuisine sent la viande rôtie. La pâte de tomates est brun brique et caramélisée.",
            "action": "Déglacer et transférer à la réserve."
          },
          {
            "state": "Overdone",
            "description": "Les os sont devenus noirs et la cuisine sent la graisse carbonisée et l'agneau amer.",
            "action": "Jetez ce lot. Les os brûlés produisent de l'amertume qui ne peut être corrigée. Réduire la température du four et le temps de cuisson pour la prochaine tentative."
          }
        ]
      },
      "feelCue": "Les os doivent se déchirer et se taper dans la poêle à partir de graisse fondue — la moelle doit être visible et bouillonner dans les extrémités coupées des os plus grands. La poêle sera extrêmement chaude et la graisse sera agressivement puant."
    },
    {
      "nodeId": "step_2",
      "action": "Déglacement",
      "inputs": [
        "roasted_bones",
        "ing_07"
      ],
      "outputState": "deglazed_bones",
      "instructions": "Retirer le rôti du four. Verser le vin rouge dans la poêle chaude, il fera étourdir et vapeur violemment. Grattez tout le fond sombre du fond de la poêle avec une cuillère en bois. Transférer les os, déglacer et tous les jus de rôtir dans une grande réserve. Ajouter les oignons, les carottes, le céleri et l'ail dans la même poêle, retourner au four pendant 15 minutes jusqu'à ce que les légumes prennent la couleur, puis les transférer aussi.",
      "visualCue": {
        "primaryTarget": "Le vin rouge bouillonne vigoureusement dans la poêle chaude, dissolvant le fond caramélisé foncé dans un liquide brun foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le vin ne dissout pas le fond — il se met en commun sur le dessus sans le gratter.",
            "action": "Utilisez une spatule métallique et plus de force. Le fond est fortement respecté et a besoin de chaleur et de grattage physique."
          },
          {
            "state": "Perfect",
            "description": "Tous les morceaux sombres se sont dissous. Le vin est devenu brun foncé avec une odeur charnue-caramélisée complexe. Chaque peu d'affection est capturé.",
            "action": "Transférez tout à la réserve."
          },
          {
            "state": "Overdone",
            "description": "Le vin a complètement brûlé dans la poêle chaude avant que le fond puisse être capturé.",
            "action": "Ajouter une autre éclaboussure de vin ou d'eau froide dans la poêle et racler rapidement avant qu'elle ne s'évapore à nouveau."
          }
        ]
      },
      "feelCue": "Le déglacement devrait produire une poussée presque écrasante de vapeur et d'arôme salé — l'odeur devrait faire votre estomac se contracter avec la faim. Ce parfum vineux et charnu concentré est la preuve d'une dissolution heureuse."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "deglazed_bones",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_09",
        "ing_10",
        "ing_08"
      ],
      "outputState": "simmering_lamb_stock",
      "instructions": "Ajouter les légumes rôtis, le paquet d'herbes, les grains de poivre et l'eau froide dans la casserole avec les os. Porter à ébullition à feu vif. Réduisez immédiatement jusqu'à ce qu'il soit possible de mijoter — une seule bulle paresseuse toutes les 3 à 5 secondes. Essuyez la mousse brun-gris et la graisse qui s'élève dans les 30 premières minutes avec une louche. Ne remuez pas. Ne le laissez pas bouillir dur à aucun moment. Laisser mijoter à découvert pendant 4 heures. Un bon stock est fabriqué à la température la plus basse possible; l'ébullition rapide produit un résultat nuageux, gras et mince.",
      "visualCue": {
        "primaryTarget": "Un calme, presque toujours surface avec des bulles paresseuses occasionnelles. Le liquide est un brun-ambre profond et s'amplifie lentement à mesure que les heures passent. Les os sont visibles en bas.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "À 2 heures : le stock est plus léger en couleur et a encore un léger bord cru de viande dans l'odeur. Les légumes sont encore en forme.",
            "action": "Continuez à mijoter patiemment. Les 2 premières heures construisent la structure; les 2 premières heures construisent la profondeur et la richesse."
          },
          {
            "state": "Perfect",
            "description": "A 4 heures : ambre foncé profond, avec une qualité gélatineuse visible lorsqu'une cuillère est refroidie brièvement sur une assiette froide (il doit être réglé sur un gel léger). Il sent profondément la viande, les herbes et la terre.",
            "action": "Peau et refroidir rapidement."
          },
          {
            "state": "Overdone",
            "description": "Le stock a diminué à moins de la moitié de son volume initial. Il est très foncé, intensément salé et presque sirupeux.",
            "action": "Diluer avec de l'eau chaude au goût. Un stock surréduit fait encore une excellente demi-glace — réduire intentionnellement à un glaçage et geler dans les plateaux de glaçons pour l'utilisation comme aromatisation concentrée."
          }
        ]
      },
      "feelCue": "À la marque de 3 heures, faites cuire une cuillère de bouillon et laissez refroidir votre doigt pendant 10 secondes. À 4 heures, il doit se sentir nettement plus visqueux, signe de collagène dissous des os."
    },
    {
      "nodeId": "step_4",
      "action": "Poignée",
      "inputs": [
        "simmering_lamb_stock"
      ],
      "outputState": "strained_lamb_stock",
      "instructions": "Réglez un tamis à mailles fines ou chinois sur un grand récipient. Mettre le stock soigneusement — ne pas verser ou presser. Laisser égoutter sous la gravité pendant 5 minutes. Jeter les os et légumes usés. Refroidir rapidement le stock : placer le récipient dans un bain de glace et remuer jusqu'à ce que la température tombe sous 4°C / 40°F, puis réfrigérer pendant la nuit.",
      "visualCue": {
        "primaryTarget": "La souche est un brun-ambre profond et translucide. Lorsqu'il est refroidi pendant la nuit au réfrigérateur, il doit former un gel épais et mouvant avec une couche dure de graisse d'agneau blanc à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock reste liquide dans le réfrigérateur et ne sert pas de gel. Indique une extraction insuffisante du collagène.",
            "action": "Retourner dans la casserole, ajouter des os crus supplémentaires (si disponibles) et laisser mijoter pendant une autre heure. Alternativement, réduire le stock de 30% pour le concentrer."
          },
          {
            "state": "Perfect",
            "description": "Le stock refroidi se sert d'un gel ambré foncé ferme qui tient sa forme lorsqu'il est cuillé. Le bouchon de graisse est blanc vif et s'enlève proprement. En dessous : profond, concentré, parfum charnu.",
            "action": "Coupez la grosse casquette. Le stock est prêt à être utilisé ou gelé."
          },
          {
            "state": "Overdone",
            "description": "Le stock s'est fixé si fermement qu'il ressemble à de la gélatine solide et est extrêmement sombre.",
            "action": "C'est en fait excellent — stock hautement gélatineux est utilisé dans le consommé, demi-glace, et l'enrichissement de sauce. Diluer selon les besoins dans les usages individuels."
          }
        ]
      },
      "feelCue": "Le stock d'agneau refroidi doit se sentir comme de la gélatine froide lorsqu'il est pressé avec un bout de doigt — une résistance ferme et qui donne avant que la surface ne se brise. Cette résistance est un collagène dissout à partir des ronces d'agneau, et cela signifie que votre stock donnera corps et une bouche de velours à chaque plat qu'il touche."
    },
    {
      "nodeId": "step_5",
      "action": "Clarifier",
      "inputs": [
        "strained_lamb_stock"
      ],
      "outputState": "lamb_stock",
      "instructions": "Soulevez le bouchon de graisse solidifié proprement de la surface du stock réfrigéré — il sort en une seule pièce, laissant un stock propre en dessous. Faire fondre le bouillon doucement à feu moyen-doux. Goûtez et assaisonnez légèrement avec du sel si vous l'utilisez immédiatement, ou conservez sans sel pour la polyvalence. Utiliser comme liquide de braisage pour les jarrets d'agneau et les tagines, comme base pour les graviers et les sauces, réduit à un jus, ou concentré à un glaçage. Réfrigérer pendant 5 jours ou congeler en portions de 500 ml pendant 6 mois.",
      "visualCue": {
        "primaryTarget": "Après enlèvement des graisses: un liquide clair, brillant, brun-ambre profond avec des bords propres et définis. Doucement chauffée, elle coule librement avec un éclat de surface riche et huileux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La graisse résiduelle laissée dans le stock la rend grasse et enrobe la bouche désagréablement.",
            "action": "Re-chiffre et re-skim. Plusieurs cycles de refroidissement et d'écrémage produisent le stock le plus propre."
          },
          {
            "state": "Perfect",
            "description": "Stock propre, clair, profondément coloré avec un arôme riche, charnu, à base de plantes. Au goût, elle enveloppe le palais d'une chaleur douce et salée et d'une finition propre. Le caractère est incontestablement un agneau.",
            "action": "Utilisez généreusement. Un bon stock rend tout ce qu'il touche mieux."
          },
          {
            "state": "Overdone",
            "description": "Le stock est très salé ou a une qualité amère et sur-extraite.",
            "action": "Diluer avec de l'eau pour corriger le sel. L'amertume des os surchauffés ne peut pas être entièrement corrigée — l'empêcher à l'avenir en regardant de près le rôti."
          }
        ]
      },
      "feelCue": "Le stock d'agneau fini à température ambiante devrait être plus épais que l'eau lorsque vous le remuez avec une cuillère — pas sirupeuse, mais certainement présente. Rouler une petite quantité entre vos doigts après qu'il se refroidit : il devrait les laisser légèrement collants. Cette colle est du collagène dissout pur."
    }
  ]
};
