export default {
  "repoId": "master_japanese_chicken_katsu_001",
  "parentRepoId": null,
  "slug": "chicken-katsu",
  "author": "ForkRecipe Kitchen",
  "title": "Poulet Katsu",
  "description": "Les cuisses de poulet pillées à une épaisseur uniforme, enrobées de chapelures panko, et frites peu profondes jusqu'à ce qu'elles soient d'or profond — extérieur croustillant et humide — servies avec de la sauce tonkatsu.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "proteins",
  "tags": [
    "katsu",
    "Japonais",
    "poulet",
    "frits",
    "panées",
    "Panko"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
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
    "bitter": 1,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "cuisses de poulet désossées, sans peau (ou sans peau)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "poitrine de poulet désossée, pillée"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Farine pure (toute destination)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "Farine de riz"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Oeufs entiers battus",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Panko chapelures (de style japonais, grossières)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile neutre pour friture peu profonde (synthétisé ou canola)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin et poivre blanc",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "sauce Worcestershire (pour base de sauce tonkatsu)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Sweetener",
      "name": "Ketchup (pour base de sauce tonkatsu)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Umami",
      "name": "sauce à l'huître",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce hoisine"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Choux verts éraflés, à servir",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Piler",
      "inputs": [
        "ing_01",
        "ing_06"
      ],
      "outputState": "pounded_chicken",
      "instructions": "Si vous utilisez des cuisses sur la peau, laissez la peau sur - elle frire dans une couche crépitante qui contraste magnifiquement avec la croûte de panko. Ouvrez la cuisse à plat et garnissez toutes les grandes poches de graisse de l'intérieur qui ne rendraient pas pendant la friture peu profonde. Placez entre deux feuilles d'enveloppe plastique et livrez doucement avec la face plane d'un maillet de viande du centre vers l'extérieur jusqu'à ce que la cuisse soit d'une épaisseur égale à 1,5 cm. Assaisonner les deux côtés de sel fin et de poivre blanc immédiatement avant le dragage.",
      "visualCue": {
        "primaryTarget": "Une cuisse plate, même de poulet d'épaisseur uniforme de 1,5 cm, sans taches considérablement épaisses ou minces. La peau, si elle est présente, est intacte et lisse plutôt que déchirée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Une crête épaisse dans le centre ou des bosses inégales — le muscle central est encore significativement plus épais que les bords.",
            "action": "Le maillet de concentration souffle sur les zones épaisses. Travaillez lentement — le poulet déchire plus facilement que le porc."
          },
          {
            "state": "Perfect",
            "description": "Uniforme de 1,5 cm. Peau intacte. Surface lisse qui tiendra la drague uniformément.",
            "action": "Assaisonner immédiatement et commencer le dragage."
          },
          {
            "state": "Overdone",
            "description": "Le poulet a été pilonné à 8-10 mm et est en train de déchirer — les fibres musculaires se séparent et il y a des trous visibles.",
            "action": "Procéder — les frites fines katsu sont légèrement plus rapides et sont toujours délicieuses. Régler le temps d'alevage de 1 minute par côté."
          }
        ]
      },
      "feelCue": "Appuyez à travers la surface avec deux doigts : même la pression devrait produire même donner à travers. Un endroit qui rebondit plus fort que les environs est encore trop épais."
    },
    {
      "nodeId": "step_2",
      "action": "Faire de la sauce tonkatsu",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "tonkatsu_sauce",
      "instructions": "Mélanger la sauce Worcestershire, le ketchup et la sauce huître dans un petit bol. Bien mélanger. Bouche: la sauce doit être sucrée, acidulée et profondément salée avec un léger sous-ton fermenté. Ajuster les rapports au goût personnel : plus Worcestershire pour la profondeur et le tang, plus de ketchup pour la douceur et le corps, une touche plus de sauce huître pour l'umami. C'est une approximation rapide de la sauce commerciale Bull-Dog. Laissez reposer pendant 5 minutes pour les saveurs à intégrer.",
      "visualCue": {
        "primaryTarget": "Une sauce brun foncé, brillant sur la consistance du ketchup fin — versable mais pas aqueuse. L'arôme est tannant, doux et riche en umami simultanément.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a un goût fin et unidimensionnel — principalement ketchup sans profondeur.",
            "action": "Ajouter la sauce Worcestershire et la sauce huître. Le Worcestershire est l'épine dorsale qui lui donne la complexité."
          },
          {
            "state": "Perfect",
            "description": "Équilibré douceur-sour-savour-umami. Il a un goût riche et légèrement caramélisé, même à température ambiante, avec un tang agréable.",
            "action": "Mettez de côté. Il est prêt immédiatement et n'a pas besoin de cuisson."
          },
          {
            "state": "Overdone",
            "description": "La sauce est trop nette et vinaigreuse — Worcestershire a dominé.",
            "action": "Ajouter plus de ketchup pour équilibrer la douceur et le corps contre l'acidité."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt — il devrait laisser une couche mince et brillante qui s'accroche un moment avant de dégoutter. Si elle glisse instantanément, elle a besoin de plus de corps (plus de ketchup). S'il ne coule pas du tout, mince avec une goutte d'eau."
    },
    {
      "nodeId": "step_3",
      "action": "Pain et frites",
      "inputs": [
        "pounded_chicken",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "fried_katsu",
      "instructions": "Installez trois plats peu profonds : farine, œuf battu et panko. Dressez chaque cuisse dans de la farine, en tapant chaque trace d'excès. Plongez dans l'œuf battu, laissant l'excès s'écouler pendant 2 secondes. Appuyez fermement dans le panko, puis basculez et pressez à nouveau — contrairement à schnitzel, katsu bénéficie d'un revêtement panko épais et pressé qui construit une croûte robuste et éclatante plutôt que délicate. Le revêtement doit être visiblement épais. Chauffer l'huile à 170°C / 340°F dans une poêle lourde — assez d'huile pour monter à mi-hauteur. Faire frire la peau vers le bas (ou vers le haut vers le bas) pendant 4 minutes jusqu'à ce qu'elle soit bien dorée. Plongez soigneusement et faites frire 3 minutes sur le second côté jusqu'à ce que la partie la plus épaisse soit d'or profond. Égoutter sur une grille.",
      "visualCue": {
        "primaryTarget": "Croûte panko dorée profonde, uniformément colorée sur toute la surface. La croûte semble épaisse et robuste, avec les extrémités pointues irrégulières des miettes panko clairement visibles comme des flèches d'or individuelles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Panko est jaune pâle et semble encore cru et blanc dans les recoins. Le tourbeau d'huile est paresseux.",
            "action": "Vérifiez la température de l'huile — elle peut avoir chuté sous 160°C. Laisser revenir et continuer à frire. La croûte colorera rapidement une fois la température revenue."
          },
          {
            "state": "Perfect",
            "description": "Deep, riche or-ambre avec les miettes individuelles panko formant une surface spiky, tridimensionnelle. Le poulet se sent ferme et printanier dans la croûte lorsqu'il est pressé doucement. L'intérieur lit 74°C.",
            "action": "Retirer et égoutter debout sur une grille pendant 1 minute avant de trancher."
          },
          {
            "state": "Overdone",
            "description": "Panko est uniformément brun foncé et les recoins commencent à noircir. L'huile peut être de fumer et les miettes sentent vif.",
            "action": "Supprimer immédiatement. Couper rapidement pour libérer de la vapeur et éviter la cuisson. Le poulet sera sec mais sûr."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur le katsu à travers la croûte — il devrait revenir fermement mais ne pas se sentir dur comme une pierre. Une légère donne vous indique que le poulet à l'intérieur est cuit et juteux, pas encore cru et rendement."
    },
    {
      "nodeId": "step_4",
      "action": "Tranche et plaque",
      "inputs": [
        "fried_katsu",
        "tonkatsu_sauce",
        "ing_10"
      ],
      "outputState": "finished_chicken_katsu",
      "instructions": "Reposez le katsu frit sur la grille pendant 2 minutes, ce qui permet à la croûte de se fixer et à l'intérieur d'équilibrer. À l'aide d'un couteau tranchant et lourd avec une pression vers le bas propre par coupe (pas un mouvement de sciage, qui déchire la croûte), couper en bandes de 2 à 3 cm sur toute la largeur, en maintenant les tranches dans la forme originale de la cuisse. Rassemblez les morceaux tranchés sur la planche à découper et glissez-les sur des assiettes chaudes à côté d'un monticule de chou déchiqueté. Arroser la sauce tonkatsu sur les tranches ou servir à tremper.",
      "visualCue": {
        "primaryTarget": "Des bandes uniformément tranchées montrant un intérieur blanc, humide et juteux contre l'épais panko doré. La croûte n'a pas été brisée ou séparée du poulet dans la coupe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'intérieur est rose ou cru au centre lorsqu'il est tranché. Les jus sont roses.",
            "action": "Retournez les tranches de peau vers l'huile chaude pendant 2 minutes. Des tranches minces feront cuire rapidement à partir de la chaleur résiduelle."
          },
          {
            "state": "Perfect",
            "description": "Intérieur blanc et juteux avec un léger reflet de graisse. La croûte dorée reste intacte sur chaque tranche. La sauce Tonkatsu drizzled crée une vapeur aromatique sucrée et salée.",
            "action": "Servir immédiatement avec du riz et de la soupe miso."
          },
          {
            "state": "Overdone",
            "description": "L'intérieur est sec et blanc, sans humidité visible. La croûte peut s'être séparée de la viande pendant le slice.",
            "action": "Servir avec de la sauce tonkatsu supplémentaire. L'épaisse croûte panko piège la vapeur et le katsu est rarement aussi sec qu'il paraît — goût avant de l'écrire."
          }
        ]
      },
      "feelCue": "Ramassez une tranche en pinçant la croûte entre le pouce et l'index : une tranche de katsu parfaite tient ensemble — la croûte saisit le poulet. Si la croûte glisse, le lavage des œufs est trop fin ou la drague est mal ordonnée."
    }
  ]
};
