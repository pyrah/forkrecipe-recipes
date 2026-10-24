export default {
  "repoId": "master_nigerian_suya_spiced_beef_001",
  "parentRepoId": null,
  "slug": "suya-spiced-beef",
  "author": "ForkRecipe Kitchen",
  "title": "Écrevisses de boeuf épicées Suya",
  "description": "De la viande de bœuf hachée, enfilée sur des brochettes, puis enfouie dans un mélange sec d'arachides grillées, de gingembre, de paprika et de piment, cuite sur des charbons chauds jusqu'à ce que l'omble et la croûte d'épices de suya caramélisent en quelque chose de fumé, de noisette et d'aromatique féroce.",
  "cuisine": "Nigérian",
  "culture": "Nord du Nigéria",
  "category": "proteins",
  "tags": [
    "nigérien",
    "boeuf",
    "brochettes",
    "arachide",
    "épicé"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "1 hr 20 min",
  "ratioSystem": "parts",
  "stars": 2480,
  "forks": 290,
  "contributors": 35,
  "license": "CC-BY-SA",
  "createdAt": "2024-07-19",
  "updatedAt": "2025-10-05",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 3,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Syrlonge ou boeuf ribeyé, tranché fin (5 mm) contre le grain",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "poitrine ou cuisse de poulet, maigre au beurre"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Cacahuètes grillées au sol (base yaji)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "farine d'arachide"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Mélange d'épices de suya (paprika, Cayenne, gingembre, ail, poudre d'oignon)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel et cube d'assaisonnement (sol)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "sel seulement"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile d'arachide ou d'huile végétale",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Garnish",
      "name": "Epices d'oignon, de tomate et de suya coupées pour servir",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélanger le ruble suya",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "suya_spice_paste",
      "instructions": "Mélanger les arachides grillées, le mélange d'épices suya, le sel, le cube d'assaisonnement moulu et l'huile dans un bol. Mélanger soigneusement pour former une pâte légèrement huileuse. La farine d'arachide absorbe l'huile et les épices dans un enduit qui s'accroche à la viande plutôt que de glisser. Goûtez - le — il doit être assaisonné intensément, très poivré et noisette. Si elle se sent sèche et ne tient pas debout lorsqu'elle est pressée, ajouter quelques gouttes d'huile.",
      "visualCue": {
        "primaryTarget": "Une pâte brun-rougeâtre émiettée qui s'écrase lorsqu'elle est pressée, mais qui s'effondre facilement, comme une garniture sèche. Pas de taches poussiéreuses sèches, pas de piscines d'huile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est encore sec et poudreux — les épices et les arachides ne sont pas encore cohérentes. Il tombera de la viande pendant la cuisson.",
            "action": "Ajouter une cuillère à café d'huile à la fois, en mélangeant après chaque addition, jusqu'à ce que le mélange conserve une cuillerée lorsqu'il est pressé."
          },
          {
            "state": "Perfect",
            "description": "Crumbly et huileux en mesure uniforme. Presse dans une balle brièvement puis s'effondre. Couleur rougeâtre-orange profonde de paprika. Des odeurs d'arachides grillées et d'épices chaudes.",
            "action": "Passez au revêtement du boeuf."
          },
          {
            "state": "Overdone",
            "description": "La pâte est humide et grasse, assise dans des piscines d'huile. Dégouttera les brochettes sur les charbons et s'enflammera pendant le grillage.",
            "action": "Ajouter d'autres cacahuètes moulues pour absorber l'excès d'huile, en mélangeant jusqu'à ce que la texture mijotée revienne."
          }
        ]
      },
      "feelCue": "Prenez une petite poignée et pressez — il devrait former un disque lâche et friable qui sent intensément les arachides grillées et les épices, en tachant votre palmier un rouge orange chaud."
    },
    {
      "nodeId": "step_2",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "suya_spice_paste"
      ],
      "outputState": "marinated_beef_skewers",
      "instructions": "Enfilez les fines tranches de bœuf sur des brochettes en métal plat ou des brochettes en bois pré-poêlées, en tissant la viande en allers et retours dans un zigzag. Appuyez fermement sur la pâte d'épices suya sur les deux côtés de la viande — utilisez vos mains pour la travailler dans la surface, en appuyant dur pour que le revêtement adhère. La pâte devrait masquer complètement le bœuf en dessous. Repos découvert à température ambiante pendant 1 heure, ou réfrigérer pendant la nuit (les marinades de nuit développent plus de profondeur).",
      "visualCue": {
        "primaryTarget": "Le boeuf est entièrement recouvert d'une épaisse croûte brun rougeâtre foncé de suya. Aucune tache nue de viande visible. Les brochettes sont plates avec de la viande tissée uniformément sur leur longueur.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le revêtement d'épices est mince et patchy, avec de la viande rose nue visible dans les trous. Le revêtement sera cuit rapidement, laissant la viande sous-assaisonnée.",
            "action": "Ajouter plus de suya et appuyer fermement. Utilisez la paume de votre main pour vraiment pousser le revêtement dans la surface de la viande."
          },
          {
            "state": "Perfect",
            "description": "Même un revêtement épais et opaque sur toutes les surfaces. La viande en dessous est complètement cachée. Lorsqu'il est retenu, le revêtement ne coule pas ou ne glisse pas.",
            "action": "Reposez-vous 1 heure minimum avant de griller."
          },
          {
            "state": "Overdone",
            "description": "L'enrobage est si épais qu'il grume et tombe en touffes plutôt que d'adhérer. La viande est enterrée sous un pouce de pâte.",
            "action": "Agiter doucement l'excès et presser le reste de la couche plus fermement à la surface de la viande."
          }
        ]
      },
      "feelCue": "Appuyez sur une brochette enduite entre vos paumes — la croûte d'épices devrait être sèche au toucher et adhérer fermement, et non pas se frotter. Lorsque vous vous écartez les mains, il ne reste qu'une faible tache orange."
    },
    {
      "nodeId": "step_3",
      "action": "Griller à feu vif",
      "inputs": [
        "marinated_beef_skewers"
      ],
      "outputState": "grilled_suya",
      "instructions": "Faire griller sur du charbon chaud ou un gril à gaz très chaud (la chaleur élevée est essentielle — le suya nécessite une chaleur intense et directe pour carboniser la croûte tout en maintenant la viande fine humide). Placer les brochettes de 8 à 10 cm des charbons. Cuire 3 à 4 minutes de chaque côté, tourner une fois. La croûte d'arachide devrait développer des taches d'omble foncé et une caramélisation profonde et fumée. Évitez de déplacer les brochettes constamment — laissez la croûte posée de chaque côté avant de retourner. Si vous utilisez une grille à l'intérieur, faites chauffer à la température maximale et faites cuire en lots.",
      "visualCue": {
        "primaryTarget": "La croûte de suya est profondément caramélisée avec des taches irrégulières d'omble. Les bords des fines tranches de boeuf sont légèrement frisés et croustrés. La brochette tient un profil rigide caramélisé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est encore douce et pâle — le revêtement en arachide n'a pas caramélisé et les épices semblent brutes. La viande est floppée et donne quand elle est étagée.",
            "action": "Laisser chauffer plus longtemps. Suya bénéficie d'une cuisson un peu plus longue que la sensation intuitive — la croûte d'arachide a besoin d'une chaleur soutenue pour caraméliser."
          },
          {
            "state": "Perfect",
            "description": "Croûte carbonisée avec un arôme fumé et noisette. Des taches sombres irrégulières à la surface, dorées entre elles. Les tranches de boeuf sont cuites et légèrement croustillées aux bords les plus fins.",
            "action": "Retirer du feu et servir immédiatement avec l'oignon cru et la tomate."
          },
          {
            "state": "Overdone",
            "description": "La croûte est uniformément noire avec une odeur amère et acride. La viande a complètement séché et le revêtement d'arachide a le goût de brûler.",
            "action": "Écrase le pire de l'omble d'un côté. L'intérieur peut encore être bon. Servir avec la tomate coupée et l'oignon pour équilibrer la fraîcheur."
          }
        ]
      },
      "feelCue": "Tapez la croûte d'une brochette cuite avec votre ongle — vous devriez entendre un faible robinet creux, indiquant que la croûte extérieure a mis dur et caramélisé. La viande en dessous devrait encore donner légèrement, pas être rigide."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir et servir",
      "inputs": [
        "grilled_suya",
        "ing_06"
      ],
      "outputState": "finished_suya",
      "instructions": "Retirer les brochettes du feu et glisser la viande sur une surface de service bordée de journaux (traditionnels). Éparpillement d'oignon blanc cru et de tomates fraîches sur le dessus — leur netteté et leur acidité coupées à travers le riche revêtement en arachides. Poussière avec épice suya supplémentaire si désiré. Servir immédiatement pendant que la croûte craque encore — suya perd sa magie texturale dans les 10 minutes qui suivent la sortie du feu.",
      "visualCue": {
        "primaryTarget": "Morceaux de bœuf foncés et crépitants entrecoupés d'oignons blancs frais et de tranches de tomates rouges. La croûte doit être visiblement carbonisée dans des taches irrégulières avec des sections dorées-brun entre les deux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Servi avant que la croûte n'ait été entièrement réglée — le revêtement est doux et gras plutôt que crépitant. L'oignon et la tomate ne sont pas en vue.",
            "action": "Retourner au grill pendant 60 à 90 secondes de plus, puis servir immédiatement avec la garniture fraîche — le contraste n'est pas facultatif."
          },
          {
            "state": "Perfect",
            "description": "Croûte fumée et croûte sur le bœuf avec des rondelles d'oignons frais et pointus et des tomates fraîches aux côtés. Le contraste entre la viande carbonisée chaude et l'allium cru froid et vif est la pleine expérience suya.",
            "action": "Mangez immédiatement. Suya est un aliment de rue destiné à être mangé chaud, debout."
          },
          {
            "state": "Overdone",
            "description": "Servi à froid ou permis de s'asseoir — la croûte s'est adoucie, la graisse s'est condensée et le revêtement en arachide est gommé.",
            "action": "Faites clignoter sous une grille ou revenez sur une poêle chaude pendant 1 minute pour restaurer la croûte. Suya veut toujours plus de chaleur."
          }
        ]
      },
      "feelCue": "L'arôme devrait vous arrêter dans vos traces: arachide grillée, omble, gingembre chaud et piment chaud dans un souffle concentré. C'est l'odeur d'un spot suya, et ça veut dire que vous avez raison."
    }
  ]
};
