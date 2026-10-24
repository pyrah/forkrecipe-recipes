export default {
  "repoId": "master_korean_ssamjang_001",
  "parentRepoId": null,
  "slug": "ssamjang",
  "author": "ForkRecipe Kitchen",
  "title": "Ssamjang",
  "description": "Une pâte de trempage coréenne foncée et épaisse où la terre et le gochujang enflammé rencontrent l'huile de sésame, l'ail et un murmure de miel — le compagnon essentiel du barbecue coréen qui enveloppe autour de la viande grillée et des feuilles de laitue croustillante et goûte comme la table elle-même.",
  "cuisine": "Coréen",
  "culture": "Coréen",
  "category": "condiments",
  "tags": [
    "sauce à tremper",
    "coréen",
    "Gochujang",
    "Doenjang",
    "bbq"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 1,
    "bitter": 2,
    "umami": 5,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Doenjang (pâte de soja fermentée coréenne)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "miso blanc (mince, moins funky)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Spice",
      "name": "Gochujang (Pâte de chili fermentée coréenne)",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 0.75,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Miel ou sirop de riz (maesil cheong en option)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "sirop d'érable"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Ail, finement haché (3 girofles)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Échalote (2 tiges), très finement tranchée",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Graines de sésame grillées",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
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
      "outputState": "paste_base",
      "instructions": "Mélanger doenjang et gochujang dans un petit bol à mélanger. Mélanger vigoureusement avec une fourchette ou une petite spatule de caoutchouc jusqu'à ce que les deux pâtes soient complètement unifiées — aucune stries de rouge ou de brun ne doit rester distincte. Le doenjang est beaucoup plus épais et plus sec que le gochujang, il faudra donc faire quelques efforts pour les réunir. La pâte combinée devrait être un brun rougeâtre profond, plus foncé que le gochujang seul, plus terreux et plus complexe. Goûtez à ce stade : l'équilibre doenjang-gochujang devrait d'abord fournir une profondeur fermentée terreuse, puis une chaleur de chili.",
      "visualCue": {
        "primaryTarget": "Une pâte brun rougeâtre uniforme et très foncée, sans stries rouges ou brunes visibles. Une texture épaisse et légèrement rugueuse des grains de soja du doenjang.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries rouges et brunes sont encore visibles — deux pâtes ne sont pas entièrement incorporées.",
            "action": "Continuez à remuer. Les pâtes sont épaisses et nécessitent une pression persistante pour se combiner."
          },
          {
            "state": "Perfect",
            "description": "Pâte foncée uniforme. Une odeur complexe et profondément fermentée: terreuse, salée et légèrement funky.",
            "action": "Ajouter l'huile de sésame, le miel, l'ail et le pétoncle."
          },
          {
            "state": "Overdone",
            "description": "S/O — cette étape ne peut pas être dépassée. Une base bien combinée est l'objectif.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "La pâte combinée devrait se sentir dense et légèrement grinçante à partir des particules de soja dans le doenjang; le frottement d'une petite quantité entre les doigts devrait laisser une tache sombre et terreuse."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "paste_base",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "seasoned_ssamjang",
      "instructions": "Ajouter l'huile de sésame, le miel, l'ail haché et le pétoncle tranché à la base de la pâte. Mélanger soigneusement jusqu'à ce que tout soit uniformément distribué. L'huile de sésame desserre légèrement la pâte, la rendant plus extensible — le ssamjang traditionnel devrait être assez épais pour tenir une forme sur une cuillère mais assez lâche pour frotter facilement sur une feuille de laitue. Goûtez et ajustez : plus de gochujang pour la chaleur et la couleur, plus de doenjang pour la profondeur et le funk, plus de miel si la saveur fermentée est trop affirmée pour votre préférence.",
      "visualCue": {
        "primaryTarget": "Une pâte foncée et brillante avec des taches de pétoncle vert. Un peu plus lâche que les deux pâtes fermentées seules. Des odeurs de sésame, d'ail et de soja profondément fermenté.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile de sésame n'est pas entièrement incorporée — flottant dans des bassins à la surface. L'ail cru et l'odeur aiguë.",
            "action": "Continuez à remuer. L'huile doit être émulsifiée dans la pâte épaisse."
          },
          {
            "state": "Perfect",
            "description": "Pâte cohésive, brillante, profondément complexe. L'odeur est en couches : huile de sésame sur le dessus, ail au milieu, funk fermenté en dessous. C'est vert vif.",
            "action": "Scitter les graines de sésame et servir, ou réfrigérer jusqu'à 2 semaines."
          },
          {
            "state": "Overdone",
            "description": "S.O. — Le surmélange n'est pas un risque ici.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "Dégustez une petite quantité de ssamjang assaisonné sur le dos de votre main — il devrait s'étendre sans se déchirer ou s'effondrer, laissant un film sombre et brillant qui sent le sésame grillé et le soja fermenté."
    },
    {
      "nodeId": "step_3",
      "action": "Finition",
      "inputs": [
        "seasoned_ssamjang",
        "ing_07"
      ],
      "outputState": "finished_ssamjang",
      "instructions": "Éparpiller les graines de sésame grillées sur la surface du ssamjang — ne pas les remuer complètement, les laisser comme une garniture visible qui ajoute de la texture. Goûtez une dernière fois. Un grand ssamjang devrait livrer : umami d'abord (de la doenjang), puis chaleur (de la gochujang), puis une douceur ronde sésame-argent qui persiste. Si la pâte est trop épaisse pour se propager facilement, ajouter quelques gouttes d'eau et remuer. Transférer dans un petit bol en céramique pour servir à la table du barbecue. Conserver au réfrigérateur dans un récipient hermétique jusqu'à 2 semaines — la saveur s'approfondit et se mêle avec le temps.",
      "visualCue": {
        "primaryTarget": "Un petit bol de pâte très foncée et brillante éparpillée de graines de sésame blanches et tannées. La surface est presque laquée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Ssamjang pas encore goûté ou ajusté. Graines de sésame non ajoutées.",
            "action": "Toujours goûter et ajuster — puis ajouter des graines de sésame comme signal visuel final que le plat est complet."
          },
          {
            "state": "Perfect",
            "description": "Pâte foncée, brillante, intensément aromatisée qui semble appartenir à une table de barbecue coréenne. Les graines de sésame sont grillées et parfumées. Une morsure vous dit que tout est en équilibre.",
            "action": "Servir immédiatement ou couvrir et réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "La pâte a été faite bien à l'avance et l'ail frais est devenu dur et amer au réfrigérateur.",
            "action": "Incorporer une petite pincée de sucre et quelques gouttes d'huile de sésame pour lisser la dureté. Ou faire frais — cela prend 10 minutes."
          }
        ]
      },
      "feelCue": "Lorsque vous utilisez le ssamjang tel que prévu — frotté sur une feuille de sésame avec un morceau de ventre de porc grillé, une tranche d'ail cru et un grain de riz — la profondeur fermentée devrait fleurir sur le dos de votre palais et dépasser toutes les autres saveurs à la table."
    }
  ]
};
