export default {
  "repoId": "master_austrian_chickenschnitzel_001",
  "parentRepoId": null,
  "slug": "chicken-schnitzel",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Poulet autrichien Schnitzel",
  "description": "Une poitrine de poulet pillée à la translucidité, vêtue de fines chapelures, et frite peu profonde dans du beurre clarifié jusqu'à ce que le revêtement s'éloigne de la viande comme une coquille dorée soufflée — la technique quintessence de Vienne appliquée à la volaille.",
  "cuisine": "Autriche",
  "culture": "Viennese",
  "category": "proteins",
  "tags": [
    "poulet",
    "autrien",
    "schnitzel",
    "panées",
    "frits",
    "Viennese",
    "frites peu profondes"
  ],
  "difficulty": 2,
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
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Poitrines de poulet désossées et sans peau",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "cuisses de poulet, frites au beurre et pillées"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Mocassins fins séchés (pas panko)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Starch",
      "name": "Farine plate (tout usage)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Oeufs battus à coups de lait",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel de mer fin et poivre blanc",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre clarifié (Butterschmalz)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "huile neutre",
        "Saindoux"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Citrus",
      "name": "Citron, coupé en quartiers",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Persil à feuilles plates, approximativement haché",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Livre",
      "inputs": [
        "ing_01",
        "ing_05"
      ],
      "outputState": "pounded_cutlets",
      "instructions": "Butterfly chaque poitrine de poulet en coupant horizontalement presque à travers et en l'ouvrant plat. Placez entre deux feuilles d'enveloppe plastique. À l'aide d'un maillet de viande ou d'un laminoir lourd, livrez vers l'extérieur du centre en balayant les mouvements jusqu'à ce que la découpe soit uniforme de 4 à 5 mm d'épaisseur — assez mince pour être presque translucide lorsqu'elle est maintenue à la lumière. Assaisonner les deux côtés de sel et de poivre blanc.",
      "visualCue": {
        "primaryTarget": "Une grande, mince, même feuille de poulet sans taches épaisses ou fines. Soutenue jusqu'à une lumière, elle est légèrement translucide et présente une coloration uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des taches épaisses au centre où se trouvait le muscle mammaire d'origine. Les bords sont beaucoup plus minces que le milieu.",
            "action": "Concentrez le maillet sur les taches épaisses. Travaillez d'épaisseur en épaisseur, toujours en poussant la viande vers l'extérieur."
          },
          {
            "state": "Perfect",
            "description": "De 4 à 5 mm sur toute la surface. Pas de larmes. Les bords sont griffés mais le corps principal est lisse et uniforme. Assaisonner immédiatement.",
            "action": "Pain dans les 5 minutes avant que la surface sèche."
          },
          {
            "state": "Overdone",
            "description": "Larmes multiples ou trous où la viande a été pilonnée.",
            "action": "Procédez soigneusement — les trous seront scellés par la panure. Évitez ces zones en appuyant sur la miette."
          }
        ]
      },
      "feelCue": "Après le pilonnage, la découpe doit se sentir comme un morceau de cuir chamois doux — souple, même d'épaisseur, avec une légère résistance quand on la presse. S'il se sent coriace et raide, il lui faut plus de coups de pied."
    },
    {
      "nodeId": "step_2",
      "action": "Pain",
      "inputs": [
        "pounded_cutlets",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "breaded_schnitzel",
      "instructions": "Installez la station de miettes classique : farine, lavage d'oeufs (œufs battus avec un jet de lait), et fines chapelures sèches. Poussez chaque découpe dans de la farine, en agitant chaque trace d'excès. Plongez dans le lavage des œufs, levant et laissant couler pendant 3 secondes. Couchez la chapelure et jetez les miettes sur le dessus, puis appuyez doucement sur les miettes avec le plat de votre main. Surtout : ne pressez pas fort. La miette lâche est ce qui crée la croûte de soufflage caractéristique.",
      "visualCue": {
        "primaryTarget": "Un revêtement de miettes uniforme et légèrement appliqué qui semble poudreux et légèrement aéré, non compacté. Les miettes s'assoient librement sur la surface lavée aux œufs.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les miettes sont à peine adhérentes et tombent quand la coupure est levée.",
            "action": "Le lavage des œufs n'était pas assez épais, ou vous vous êtes trop secoué. Plongez dans l'œuf, puis retournez dans les miettes et tapez très doucement."
          },
          {
            "state": "Perfect",
            "description": "Une couche de miettes uniforme mais lâche qui adhère lorsque le schnitzel est maintenu verticalement mais ne forme pas une coquille rigide. Le schnitzel semble légèrement poudreux. Ne appuyez pas fort.",
            "action": "Faire frire en 2 minutes pendant que le lavage des œufs est encore légèrement collant."
          },
          {
            "state": "Overdone",
            "description": "Les miettes ont été fermement pressées dans une coque solide et compacte.",
            "action": "L'effet étouffé sera beaucoup moins dramatique. Il aura encore un bon goût, mais ne sera pas loin de la viande."
          }
        ]
      },
      "feelCue": "Soulevez la découpe panée — vous devriez sentir le poids du poulet avec une couche de miettes légères. Inclinez-le : si la douche s'effondre, appuyez très doucement une fois de plus. Les miettes doivent être présentes sans être emballées."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "breaded_schnitzel",
        "ing_06"
      ],
      "outputState": "fried_schnitzel",
      "instructions": "Chauffer le beurre clarifié dans une poêle très large et peu profonde à feu moyen-vif jusqu'à 160–170 C (320–340 F). Le beurre devrait être assez profond pour monter à mi-chemin le schnitzel. Placez la découpe dans le beurre. Commencez immédiatement à basculer et cuillerez le beurre chaud sur la surface supérieure. Cuire 2-3 minutes, puis retourner — le fond doit être en or profond. Continuer à basting et cuire 2 minutes de plus. Le schnitzel viennois caractéristique s'éloigne de la viande comme des frites.",
      "visualCue": {
        "primaryTarget": "La panure s'est étouffée et s'estompée de la surface du poulet, créant un espace d'air visible entre la viande et la croûte. L'extérieur est uniformément doré sans taches foncées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le pain est pâle et encore plat contre la viande. Il n'a pas bougé. Beurre pas assez chaud.",
            "action": "Augmenter légèrement la chaleur et continuer à se baser. L'effet soufflé se produit lorsque suffisamment de vapeur est générée entre l'œuf et la croûte externe."
          },
          {
            "state": "Perfect",
            "description": "La croûte a visiblement soulevé et gonflé loin de la viande par vagues. La couleur est uniforme, jaune-or pâle. Le schnitzel ressemble à un nuage doré gonflé.",
            "action": "Égoutter immédiatement sur des serviettes en papier. Servir dans les 2 minutes suivant la friture."
          },
          {
            "state": "Overdone",
            "description": "La croûte est brun foncé et le beurre est foncé. Une odeur amère de solides de lait brûlé.",
            "action": "Supprimer immédiatement. Si l'on utilise du beurre entier plutôt que du beurre clarifié, cela se produira plus rapidement — réduire la chaleur et utiliser du beurre clarifié la prochaine fois."
          }
        ]
      },
      "feelCue": "Lorsque vous retournez le schnitzel, il devrait se sentir presque sans poids — la graisse a complètement mal à travers la miette et la coquille soufflée se sent creuse quand tapotée avec une cuillère."
    },
    {
      "nodeId": "step_4",
      "action": "Finition",
      "inputs": [
        "fried_schnitzel",
        "ing_07",
        "ing_08"
      ],
      "outputState": "finished_schnitzel",
      "instructions": "Égoutter le schnitzel brièvement sur une serviette en papier — seulement 10 secondes, pas plus, ou la croûte va vapeur et adoucir. Transférer dans une assiette chaude et servir immédiatement avec un coin de citron et une dispersion de persil. L'accompagnement traditionnel est la salade de pommes de terre (Erdäpfelsalat) ou simplement la salade de concombre.",
      "visualCue": {
        "primaryTarget": "Une grande coutelette dorée qui recouvre la plus grande partie de l'assiette, sa croûte bondée brillant avec du beurre clarifié, un coin citron clair à côté.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est douce et a absorbé le beurre plutôt que croquant. Le poulet en dessous est dense et froid.",
            "action": "Retourner au beurre chaud 1 minute par côté. Le poulet peut être mal cuit — vérifier la température interne (74 °C)."
          },
          {
            "state": "Perfect",
            "description": "La croûte est croustillante et gonflée. La pression du citron sur elle produit une vertigineuse audible. Le poulet est entièrement cuit et juteux. La coupe révèle de la viande pâle et juste cuite.",
            "action": "Mangez immédiatement. Schnitzel n'attend personne."
          },
          {
            "state": "Overdone",
            "description": "La croûte s'est assise trop longtemps et adoucie. Le poulet est trop cuit et sec à l'intérieur.",
            "action": "Ajouter le citron en plus — l'acide augmente considérablement le goût. Utilisez les restes pour les sandwichs schnitzel le lendemain."
          }
        ]
      },
      "feelCue": "Pressez le citron sur le schnitzel fini d'une hauteur — vous devriez entendre le jus et le sifflement sur la croûte chaude. Si elle siffle, elle est prête à manger."
    }
  ]
};
