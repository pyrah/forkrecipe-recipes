export default {
  "repoId": "master_peruvian_aji-amarillo-paste_001",
  "parentRepoId": null,
  "slug": "aji-amarillo-paste",
  "author": "ForkRecipe Kitchen",
  "title": "Ají Amarillo Paste",
  "description": "Pâte essentielle de chili jaune soleil du Pérou — poivrons ají amarillo frais blanchis pour apprivoiser leur chaleur, puis mélangés à une pâte vive, tropicale-fruitée, modérément épicée qui définit la saveur de la cuisine péruvienne.",
  "cuisine": "Pérou",
  "culture": "Lima",
  "category": "condiments",
  "tags": [
    "périuvien",
    "Chili",
    "Aji-amarillo",
    "pâte",
    "fruité",
    "épicé"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 1,
    "sour": 1,
    "bitter": 1,
    "umami": 1,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Heat",
      "name": "Poivrons ají amarillo frais (ou jarré, égoutté)",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "habanero avec moins de chaleur",
        "ají amarillo congelé"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon blanc, grossièrement haché",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "Échalote"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile végétale neutre",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "huile de tournesol",
        "huile de canola"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Eau (pour blanchir)",
      "ratioValue": 2000,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation",
      "inputs": [
        "ing_01"
      ],
      "outputState": "prepped_peppers",
      "instructions": "Travaillant avec des gants pour protéger vos mains de la capsaïcine, enfilez chaque ají amarillo et coupez-le dans le sens de la longueur. Écraser et jeter les graines et la membrane blanche interne avec une petite cuillère — c'est là que la majeure partie de la capsaïcine est concentrée. La chair elle-même est modérément fruitée-chaud; enlevant les graines et la membrane, on perd la chaleur de la perforation du visage à l'assertive-plaisante. Si les poivrons sont en jarre, il suffit de les égoutter, de les rincer une fois sous l'eau froide et de trancher pour vérifier si les graines doivent être enlevées. Vous remarquerez la couleur jaune orange vif et saturé de la chair — c'est l'annatto et la capsanthine, et c'est ce qui donnera à votre pâte finie sa couleur extraordinaire.",
      "visualCue": {
        "primaryTarget": "Des moitiés de poivre propre, plat et sans pépins avec une chair dorée-orange vive, sans poches de graines ou côtes blanches, ouvertes sur le bord comme de petits bateaux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La cavité des graines n'est pas complètement nettoyée; la membrane blanche est toujours attachée en bandes épaisses.",
            "action": "Scrape plus soigneusement — la membrane laissée derrière ajoutera une amertume et une chaleur supplémentaire qui rend la pâte inégale."
          },
          {
            "state": "Perfect",
            "description": "Nettoyez la chair orange, pas de graines, la membrane est revenue à une fine couche translucide. Brillante couleur or. Les mains tachées jaune-orange si non gantées.",
            "action": "Réserver et porter l'eau blanchissante à ébullition."
          },
          {
            "state": "Overdone",
            "description": "Les poivrons sont coupés en morceaux trop petits ou la chair elle-même a marqué et endommagé, perdant du jus sur la planche.",
            "action": "Aucun problème — procéder à la blanchissage; le jus peut être sauvegardé et ajouté au mélange."
          }
        ]
      },
      "feelCue": "La chair de poivre cru doit se sentir ferme et légèrement cireuse, comme un poivre doux, avec un léger collant résineux des huiles naturelles. Si vos doigts fourmillent à travers les gants, les poivrons sont particulièrement chauds — plan pour un cycle de blanchage supplémentaire."
    },
    {
      "nodeId": "step_2",
      "action": "Blanchir",
      "inputs": [
        "prepped_peppers",
        "ing_06"
      ],
      "outputState": "blanched_peppers",
      "instructions": "Portez une grande casserole d'eau non salée à ébullition. Déposer les moitiés de poivre nettoyées et blanchir pendant exactement 3 minutes, puis les soulever avec une araignée ou une cuillère à fente et égoutter. Retournez de l'eau fraîche froide dans la casserole (ou utilisez une deuxième casserole), ramenez-la à ébullition et blanchissez les poivrons une seconde fois pendant 3 minutes. Ce double blanchissage dégage une partie importante de la capsaïcine volatile et la légère amertume de la pointe brute tout en préservant la couleur vive et le caractère fruité-tropical du poivre. Goûtez un petit morceau après le second blanch : il devrait être agréablement fruité-chaud, pas l'arrosage des yeux. S'il fait encore trop chaud, blanchissez une troisième fois en eau douce. La couleur jaune orange vif peut s'approfondir légèrement à un or plus riche.",
      "visualCue": {
        "primaryTarget": "Doux, légèrement translucide, les moitiés de poivre dans un orangé doré vif et profond, donnant quand pressé, ne goûtant plus cru quand grignoté.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours ferme et rafraîchissante ; la chaleur est plus piquante que vive et affirmée ; la couleur est encore brillante mais la chair n'a pas ramolli.",
            "action": "Blanchis encore dans de l'eau bouillante fraîche pendant 3 minutes; goûtez encore."
          },
          {
            "state": "Perfect",
            "description": "Les poivrons sont adoucis à une bouchée tendre, colorent un or-orange saturé profond, goût fruité et chaud plutôt que agressivement chaud. Ils sentent comme un fruit tropical avec un soupçon de chili.",
            "action": "Égoutter soigneusement et laisser refroidir brièvement avant de mélanger."
          },
          {
            "state": "Overdone",
            "description": "Les poivrons sont musqués, la couleur s'est déplacée vers un jaune plus terne, lavé, et la saveur est devenue plate et fade — la blanchure a lixivié le personnage avec la chaleur.",
            "action": "Procéder au mélange — la pâte sera encore utile, il suffit d'ajouter plus de chili frais ou de flocons de chili pour reconstruire la chaleur et une pression d'agrumes pour éclaircir."
          }
        ]
      },
      "feelCue": "Ramassez une moitié de poivre blanchi et pressez - la entre vos doigts; elle doit céder doucement sans se déchirer, en tenant sa forme mais avec la résistance de la chair cuite plutôt que crue. Le jus sur les doigts doit sentir comme des fruits tropicaux, pas de la capsaïcine crue."
    },
    {
      "nodeId": "step_3",
      "action": "Saute",
      "inputs": [
        "blanched_peppers",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "cooked_aromatics",
      "instructions": "Chauffer l'huile végétale dans une petite poêle à feu moyen. Ajouter l'oignon blanc haché approximativement et cuire, en remuant occasionnellement, pendant 6 à 8 minutes jusqu'à ce qu'il soit doux, translucide et légèrement doré aux bords. Ajouter les gousses d'ail et cuire encore 2 minutes, en remuant, jusqu'à ce que l'ail soit doux et parfumé mais non doré. Ajouter les poivrons ají amarillo égouttés, blanchis et mélanger. Cuire ensemble 3 à 4 minutes de plus, permettant aux poivrons, à l'oignon et à l'ail de fondre leurs saveurs dans l'huile. La poêle sentira intensément le caractère fruité et chaud du poivre jaune, une odeur qui est indéniablement péruvienne.",
      "visualCue": {
        "primaryTarget": "Une casserole de morceaux de poivre doré-orange profondément colorés avec un oignon doux, légèrement doré et de l'ail parfumé, tout resplendissant dans l'huile et unifié par 3 minutes de cuisson partagée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon encore cru et blanc translucide, l'ail cru et aiguisé, les poivrons ne sont pas encore intégrés à la graisse.",
            "action": "Conservez la cuisson à feu moyen – l'oignon doit être entièrement sucré et doux avant le mélange, ou la pâte aura un goût cru et vif."
          },
          {
            "state": "Perfect",
            "description": "L'oignon est doux, doux et doré; l'ail est parfumé; les poivrons sont humides et scintillent dans l'huile. La poêle sent le fruité, le salé et les épices chaudes.",
            "action": "Laisser refroidir pendant 5 minutes, puis mélanger."
          },
          {
            "state": "Overdone",
            "description": "L'oignon et l'ail ont bruni et commencé à caraméliser, ajoutant une douceur torréfié qui rivalise avec le caractère de poivre fruité propre.",
            "action": "Un peu de brunissement est acceptable — réduire la chaleur, ajouter une éclaboussure d'eau pour arrêter la cuisson et continuer."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau de l'oignon cuit avec l'arrière de votre cuillère — il devrait s'aplatir et fondre sans résistance, donnant une odeur douce plutôt que nette. Cette douceur est le signe que les sucres de l'oignon ont caramélisé doucement et sont prêts à devenir fond profondeur dans la pâte."
    },
    {
      "nodeId": "step_4",
      "action": "Mixer",
      "inputs": [
        "cooked_aromatics",
        "ing_05"
      ],
      "outputState": "finished_aji_amarillo_paste",
      "instructions": "Transférer le contenu de la poêle — poivrons, oignon, ail et toute l'huile aromatique — dans un mélangeur. Ajouter le sel. Mélanger à grande vitesse pendant 90 secondes, s'arrêtant une fois pour racler les côtés. Mélanger jusqu'à ce que vous ayez une pâte entièrement lisse, vive, profondément dorée-orange sans peau de poivre visible ou de morceaux d'oignon. Goûtez au sel. Transférer dans un pot propre; une fine couche d'huile versée sur la surface avant l'étanchéité empêchera l'oxydation. La pâte reste réfrigérée pendant deux semaines et congelée pendant trois mois. Au mieux, cette pâte sent la mangue, le chili et le soleil, et elle définit la saveur de lomo salado, causa et ají de gallina.",
      "visualCue": {
        "primaryTarget": "Une pâte dorée-orange lisse, veloutée et intensément saturée, la couleur d'un coucher de soleil tropical, avec une surface brillante et aucune peau ou texture visible.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore épaisse avec une peau de poivre visible et des morceaux d'oignon; la couleur n'est pas entièrement uniforme.",
            "action": "Mélanger encore 60 secondes à grande vitesse, en s'arrêtant pour gratter les côtés; un mélangeur à haute puissance fait une différence importante ici."
          },
          {
            "state": "Perfect",
            "description": "Parfaitement lisse, profondément doré-orange, brillant et intensément parfumé – fruité, chaud, délicatement salé. Coats une cuillère dans une couche uniforme, vif.",
            "action": "Garnir immédiatement avec de l'huile à la surface. Utiliser comme marinade, base de sauce ou condiment."
          },
          {
            "state": "Overdone",
            "description": "La pâte est fine et liquide due à la surchauffe, qui a généré de la chaleur et ajouté un excès d'air; la couleur s'est allégée à un jaune pâle et la pâte sent légèrement cuit.",
            "action": "Retournez à la casserole et réduisez à feu moyen, en remuant constamment, jusqu'à ce que la pâte s'épaississe à une consistance extensible."
          }
        ]
      },
      "feelCue": "Déposez une petite quantité de pâte à l'intérieur de votre poignet – elle doit être soyeuse et lisse, comme une lotion de peau, sans texture granulaire ou fibreuse. Au bout d'un moment, la chaleur de votre peau va arracher le parfum : cette explosion de fruits tropicaux lacés de chili chaud est la marque d'une bonne pâte ají amarillo."
    }
  ]
};
