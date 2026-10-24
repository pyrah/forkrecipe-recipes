export default {
  "repoId": "master_french_macarons_001",
  "parentRepoId": null,
  "slug": "macarons",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Macarons français",
  "description": "Les coquilles d'amande de Gossamer qui se brisent à la dent puis fondent dans un noyau de confiture, le produit des blancs d'œuf vieillis, une pâte précise, et l'alchimie impitoyable du macaronage.",
  "cuisine": "Français",
  "culture": "Parisien",
  "category": "desserts",
  "tags": [
    "Sans gluten",
    "français",
    "Amandes",
    "meringue",
    "Cookie sandwich",
    "Cuisson",
    "pâtisserie"
  ],
  "difficulty": 5,
  "activeTime": "60 min",
  "totalTime": "3 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 5,
    "salty": 1,
    "sour": 1,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine d'amande (blanchie, super fine)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "Farine de noisettes pour une variante de praline"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre écrémé (sucre pulvérisé, criblé)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Blancs d'œuf vieillis (température ambiante)",
      "ratioValue": 75,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de ricin (fin granulé)",
      "ratioValue": 75,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Eau (pour le sirop de sucre)",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Beurre non salé (doublé, pour le remplissage)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Sweetener",
      "name": "Sucre-circulation (pour la préparation de crème au beurre)",
      "ratioValue": 160,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "tant_pour_tant",
      "instructions": "Pulse la farine d'amande et le sucre glaçant ensemble dans un robot alimentaire pendant 30 secondes pour éliminer les morceaux et combiner uniformément. Passer à travers un tamis à mailles fines. Jeter les grosses amandes qui ne passeront pas. Le mélange doit se sentir comme du talc — si il s'agrippe, votre farine d'amande est trop humide; étalez-le sur un plateau de tôle et séchez-le dans un four 100 C pendant 10 minutes.",
      "visualCue": {
        "primaryTarget": "Une poudre parfaitement uniforme, moelleuse, blanc cassé, sans grumeaux, sans amandes grossières, sans givre-sucre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux d'amande grossière ou des morceaux de sucre visibles restent après le tamisage.",
            "action": "Re-processus et re-sift. Les lumps empêchent une surface lisse de la coque."
          },
          {
            "state": "Perfect",
            "description": "Poudre soyeuse et poussiéreuse qui traverse le tamis sans effort. Couleur crème pâle constante.",
            "action": "Réserver et préparer la meringue italienne."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a l'air huileux et empilé — la graisse d'amande a été libérée par surtraitement.",
            "action": "Jeter et commencer avec de la farine d'amande fraîche. Une fois huileux, il ne peut être corrigé."
          }
        ]
      },
      "feelCue": "Frottez une pincée entre vos doigts — elle devrait ressembler à de la poudre de visage lisse, sans grain et sans résidu huileux."
    },
    {
      "nodeId": "step_2",
      "action": "Whip",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "italian_meringue",
      "instructions": "Faire cuire le sucre de roulette et l'eau dans une petite casserole à 118 C (étape de boule molle), sans remuer. Pendant ce temps, fouetter les blancs d'œuf vieillis avec du sel à des pics doux à vitesse moyenne. Lorsque le sirop atteint 118 C, augmenter le mélangeur à haute et verser le sirop dans un flux mince et stable sur la paroi du bol (pas sur le fouet). Battre haut pendant 8-10 minutes jusqu'à ce que le bol ne soit plus chaud au toucher et que la meringue soit raide et brillante.",
      "visualCue": {
        "primaryTarget": "Une meringue blanche raide et brillante qui forme des pics droits et pointus. Le bol ne doit pas se sentir plus chaud que la température du corps.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pics flottent doucement. Meringue se sent chaud. La surface est encore légèrement granuleuse à partir de sucre non dissous.",
            "action": "Continuez à fouetter en haut — la meringue doit refroidir et atteindre toute la raideur avant le macaronage."
          },
          {
            "state": "Perfect",
            "description": "Les pics sont raides et légèrement enroulés à l'extrémité même. Meringue est soyeuse et brillante. Quand vous levez le fouet, un bec se forme et tient.",
            "action": "Commencez le macaronage immédiatement alors que la meringue est encore à son apogée."
          },
          {
            "state": "Overdone",
            "description": "Meringue a l'air caillé, aqueux ou séparé aux bords du bol. Les pics sont friables, pas soyeux.",
            "action": "La meringue dépassée ne peut être réparée — recommencez. Les macarons vont se propager et craquer."
          }
        ]
      },
      "feelCue": "Appuyez sur la meringue entre votre pouce et l'index — il devrait se sentir comme satin, complètement lisse, avec zéro grain. Si vous sentez des cristaux de sucre, fouettez plus longtemps."
    },
    {
      "nodeId": "step_3",
      "action": "Plier",
      "inputs": [
        "tant_pour_tant",
        "italian_meringue"
      ],
      "outputState": "macaron_batter",
      "instructions": "Ajoutez le tant-pour-tant à la meringue italienne en deux ajouts. Macaronage : à l'aide d'une large spatule en caoutchouc, plier en pressant la pâte à plat sur le côté du bol, puis s'écoper du bas et se replier. Travaillez de manière décisive — ce n'est pas un pli doux. Vous dégonflez délibérément la meringue pour obtenir le bon flux. Effectuez environ 40-50 coups. Arrêtez lorsque la pâte coule de la spatule dans un ruban épais et continu qui disparaît dans le bol en 10 secondes.",
      "visualCue": {
        "primaryTarget": "Une pâte qui coule comme de la lave. Lorsque la spatule est levée et que la pâte tombe, elle forme un épais ruban continu que le ruban se replie et devient lisse en 10 secondes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les battements sont raides et bosseux. Lorsque la spatule est levée, elle se brise en touffes plutôt qu'en ruban.",
            "action": "Continuer le pliage — la pâte sous-macaronnée fait des coquilles bosselées."
          },
          {
            "state": "Perfect",
            "description": "Une lave épaisse. Le ruban disparaît à la surface lisse en 8-10 secondes. Le battement est brillant et coule uniformément.",
            "action": "Transférer immédiatement dans un sac et un tuyau."
          },
          {
            "state": "Overdone",
            "description": "Le battement est écoulement, se propage immédiatement lorsque la spatule est levée. Il n'y a pas de ruban, il ne fait que verser.",
            "action": "La pâte surmacaronnée ne peut être sauvée. Les coquillages s'étaleront à plat. Recommence."
          }
        ]
      },
      "feelCue": "Lorsque vous écoper une spatule pleine et la laisser retomber dans le bol, il devrait couler de la spatule dans une large cascade brillante, pas gouttes individuelles."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "macaron_batter"
      ],
      "outputState": "macaron_shells",
      "instructions": "Tuyau de 3,5 cm sur des plaques de cuisson doublées de silicone, espacé de 3 cm. Appuyez fermement sur la feuille sur le compteur 3-4 fois pour libérer de grandes bulles d'air. Laissez reposer à température ambiante pendant 30-45 minutes jusqu'à ce que la surface forme une peau sèche — elle ne doit pas coller à votre bout des doigts. Cuire une feuille à la fois à 150 °C (façon forcée) pendant 14-16 minutes. Les coquilles sont faites lorsqu'elles glissent proprement du tapis sans résistance à la base.",
      "visualCue": {
        "primaryTarget": "Dômes lisses, à surface mate, avec un « pied » (pied) volant autour de la base et sans fissures sur la couronne.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coquilles s'accrochent au tapis. Le pied est là, mais la base est encore douce et sort en morceaux.",
            "action": "Retourner au four 2 minutes de plus. Une coquille appropriée se libère proprement lorsque le tapis est épluché."
          },
          {
            "state": "Perfect",
            "description": "Dôme lisse et sans fissure. Un pied fier, même. La coquille glisse proprement du tapis quand elle est fraîche. Son creux quand tapoté.",
            "action": "Laisser refroidir complètement sur le tapis avant de le remplir au minimum 30 minutes."
          },
          {
            "state": "Overdone",
            "description": "Les coquilles sont ivoire ou bronzées sur le dessus, pas pâles; l'amande est brune. La texture sera sèche et friable.",
            "action": "Réduire la température du four de 5 °C prochain lot. Des coquilles trop brunes perdent leur mâche."
          }
        ]
      },
      "feelCue": "Tapez une coquille refroidie sur son dos — elle devrait sembler légèrement creuse comme une petite perle en céramique, non terne et dense. Appuyez doucement sur le côté : il devrait donner légèrement, comme presser un raisin ferme."
    },
    {
      "nodeId": "step_5",
      "action": "Crème",
      "inputs": [
        "ing_07",
        "ing_08"
      ],
      "outputState": "buttercream",
      "instructions": "Battre le beurre ramolli seul pendant 3 minutes jusqu'à ce qu'il soit très pâle et moelleux. Ajouter le sucre glace en trois additions, battre pendant 1 minute entre chacune. La crème au beurre finie doit être lisse, ivoire et assez rigide pour tenir un pic mais assez souple pour être facile à piper. Ajouter 1 c. à thé de vanille ou d'autres arômes, et une pincée de sel pour équilibrer.",
      "visualCue": {
        "primaryTarget": "Très pâle, presque blanche crème au beurre qui tient un pic raide et lisse. Pas de grain visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Buttercream a l'air jaune et granuleux — beurre non encore entièrement aéré, sucre non entièrement incorporé.",
            "action": "Battre encore 2 minutes. Le beurre bien crème est presque blanc, pas jaune."
          },
          {
            "state": "Perfect",
            "description": "L'ivoire pâle, soyeux, tient forme lorsqu'il est en pipe. Respire lorsqu'il est pressé avec un bout de doigt.",
            "action": "Transférer dans un sac de tuyauterie et remplir les coquilles de macaron."
          },
          {
            "state": "Overdone",
            "description": "La crème-beurre a l'air frisée ou soupeuse — le beurre était trop chaud.",
            "action": "Laisser refroidir le bol dans le réfrigérateur pendant 10 minutes, puis battre à nouveau. Si le beurre était boueux, il était trop chaud — refroidir jusqu'à ce qu'il soit ferme et réessayer."
          }
        ]
      },
      "feelCue": "Goûtez une petite quantité — il devrait se dissoudre sans problème sur la langue sans grain. Si vous pouvez sentir des cristaux de sucre, battre plus longtemps."
    },
    {
      "nodeId": "step_6",
      "action": "Assemblage",
      "inputs": [
        "macaron_shells",
        "buttercream"
      ],
      "outputState": "finished_macarons",
      "instructions": "Faire correspondre les coquilles par taille en paires. Pipez un généreux disque de crème à beurre sur le côté plat d'une coquille, laissant une bordure de 2 mm. Sandwich avec sa paire et appuyez doucement jusqu'à ce que le remplissage atteigne le bord. Réfrigérer, à découvert, pendant 24 heures — c'est l'étape de «maturation». L'humidité du remplissage adoucit l'intérieur de la coque à sa texture caractéristique mâcheuse. Porter à température ambiante pendant 20 minutes avant de servir.",
      "visualCue": {
        "primaryTarget": "Des sandwichs uniformes et soignés avec remplissage visible dans un anneau uniforme au bord. Les coquilles sont lisses et non craquées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le remplissage est pressé d'un côté, le sandwich est décalé. Remplir de façon inégale les bords.",
            "action": "Appliquer le remplissage plus central la prochaine fois. Appuyez à nouveau doucement sur pour sortir."
          },
          {
            "state": "Perfect",
            "description": "Le remplissage forme un halo propre, même à l'équateur. Coquilles supérieures et inférieures alignées. Sandwich se sent important mais pas lourd.",
            "action": "Réfrigérer pendant 24 heures jusqu'à maturité avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Trop de remplissage appliqué - il déborde au-delà des bords de la coquille et le sandwich se sent encombrant.",
            "action": "Retirez un peu de remplissage et répressez. Le rapport devrait être d'environ 1:1 shell:fulling par volume."
          }
        ]
      },
      "feelCue": "Après 24 heures au réfrigérateur, le macaron doit céder à une pression douce avec une légère résistance — l'extérieur de la coquille est encore légèrement croquant mais l'intérieur s'est adouci à une mâche qui donne comme une figues mûres."
    }
  ]
};
