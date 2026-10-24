export default {
  "repoId": "master_german_soft_pretzel_001",
  "parentRepoId": null,
  "slug": "soft-pretzel",
  "author": "ForkRecipe Kitchen",
  "title": "Pretzel tendre bavarois",
  "description": "Une tresse dense et croustillante de pâte de blé trempée dans une solution de lyes de bicarbonate de soude, salée et cuite au four jusqu'à ce que l'acajou soit brun avec une peau croustillante et un centre doux et salé.",
  "cuisine": "Allemand",
  "culture": "Bavarois",
  "category": "breads",
  "tags": [
    "bretzel",
    "allemand",
    "cuits",
    "bain-soda à cuisson",
    "végétalien"
  ],
  "difficulty": 3,
  "activeTime": "60 min",
  "totalTime": "3 hr",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de pain (forte, 12,5 % ou plus de protéines)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "farine tout usage (résultat plus doux)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau chaude (105°F / 41°C)",
      "ratioValue": 58,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "levure sèche instantanée",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": [
        "levure sèche active"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre non salé (doublé)",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": [
        "huile végétale (vegan)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sirop de malt d'orge ou sucre brun",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": [
        "Chérie",
        "mélasse"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Base",
      "name": "Soda au four (pour bain, solution de 4 %)",
      "ratioValue": 4,
      "defaultUnit": "% of bath water",
      "substitutions": [
        "Lycée de qualité alimentaire de 3 à 4 % — gants traditionnels"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel de bretzel grossier (pour garniture)",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "Sel de mer flocé",
        "sel casher"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Agenouillement",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "pretzel_dough",
      "instructions": "Mélanger la farine, la levure et le sirop de malt. Ajouter l'eau tiède et le beurre et mélanger jusqu'à ce qu'une pâte chaotique se forme. Ajouter le sel et pétrir à la main pendant 10-12 minutes ou 8 minutes dans un mélangeur de stand avec le crochet de pâte. La pâte de bretzel doit être rigide — plus rigide que la pâte à pizza, plus sèche que la pâte à pain sandwich. La faible hydratation (58%) et la farine forte créent la croûte dense, serrée et mâcheuse caractéristique d'un bretzel authentique. La pâte doit nettoyer les côtés du bol et se sentir ferme à une presse confiante. N'ajoutez pas d'eau supplémentaire. Couvrir et fermer en vrac de 1 à 1,5 heure jusqu'à ce qu'il double.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, tendue, légèrement raide, plus rigide que la pâte à pizza. Surface brillante avec une bonne tension. Tenir l'impression d'une empreinte digitale pendant 2-3 secondes avant de remplir partiellement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est rugueuse et se déchire facilement. Le test de vitre échoue immédiatement. Dough résiste à l'étirement et se rétracte.",
            "action": "Agenouillez encore 3-5 minutes. Stiff pâte prend plus de temps à développer du gluten que des pâtes plus douces parce que les protéines ont moins d'eau libre à hydrater."
          },
          {
            "state": "Perfect",
            "description": "Doux, dense et élastique. Passe le test de vitre avec un effort modéré. Il ressort rapidement lorsqu'il est pressé, mais ne se sent pas caoutchouteux — il donne avec autorité.",
            "action": "Couvrir et fermer en vrac 1–1,5 heures. La hausse sera modeste — 60 à 75 % suffit."
          },
          {
            "state": "Overdone",
            "description": "La toux est chaude, légèrement collante, et se sent lâche — surmenée par la machine, ou le beurre fondu en elle trop chaude et graisse le réseau de gluten.",
            "action": "Réfrigérer pendant 20 minutes pour fermer et se détendre, puis procéder. Le refroidissement réinitialise le beurre et resserre la structure."
          }
        ]
      },
      "feelCue": "La pâte de bretzel devrait être comme de l'argile de modélisation ferme — vous pouvez pousser une empreinte de pouce et elle tient un moment avant de se remettre lentement. Il ne devrait pas être collant ou laisser des résidus sur vos mains. S'il tire proprement d'une paume sèche, l'hydratation est correcte."
    },
    {
      "nodeId": "step_2",
      "action": "Forme",
      "inputs": [
        "pretzel_dough"
      ],
      "outputState": "shaped_pretzels",
      "instructions": "Divisez la pâte en 8 morceaux égaux (environ 90 g chacun). Sur une surface non nourrie, rouler chaque pièce dans une corde de 50 à 60 cm (20 à 24 pouces), plus épaisse au centre et effilée aux extrémités. Pour former le nœud de bretzel: tenir la corde aux deux extrémités, traverser les extrémités pour former une boucle, tordre les extrémités une fois autour de l'autre, et plier la torsion vers le bas pour appuyer sur les côtés inférieurs de la boucle. La forme du bretzel doit être définie avec un ventre gras visible et des bras distincts. Placez des bretzels en forme sur des plateaux parcheminés et congelez pendant 10 minutes — une pâte ferme prend le bain de sourcils sans perdre sa forme.",
      "visualCue": {
        "primaryTarget": "Un bretzel en forme précise avec un ventre central épais et arrondi, une boucle croisée propre, et des bras qui atteignent vers le bas et appuyez fermement sur les côtés. Même l'épaisseur sur toute la corde, ne s'affaisse qu'aux extrémités.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La corde est grumelée ou inégale — épaisse au milieu et enflante irrégulièrement. La forme du bretzel est lâche, les bras n'étant pas fermement serrés sur les côtés.",
            "action": "Reroulez la corde sur le banc en utilisant les deux mains avec une pression uniforme, en partant du centre et en roulant vers l'extérieur jusqu'à la touche. L'attachement ferme des bras aux côtés est crucial: ils ne doivent pas se détacher dans le bain."
          },
          {
            "state": "Perfect",
            "description": "Doux, corde uniforme avec une forme de bretzel définie. Les bras sont fermement serrés et scellés. Le ventre est plein et le noeud est propre et serré. L'épaisseur constante empêche le brunissement inégal.",
            "action": "Congeler 10 minutes avant le bain pour raffermir la pâte et maintenir sa forme dans la solution alcaline."
          },
          {
            "state": "Overdone",
            "description": "La corde s'est déchirée ou s'est trop éclaircie pendant le laminage — on peut voir le banc à travers lui en petites taches, ou une pièce s'est cassée et a dû être pincée ensemble.",
            "action": "Pincer fermement la jointure et sceller avec des doigts mouillés. La jonction sera visible comme un point plus léger après cuisson, mais le bretzel tiendra. Laisser reposer 2 minutes avant le bain."
          }
        ]
      },
      "feelCue": "Lorsque vous roulez la corde, appuyez régulièrement avec les deux paumes et sentez la pâte se déplacer uniformément sous vos mains. Il doit se sentir ferme et résistant — s'il se sent doux et s'étend trop facilement, la pâte est soit surfermentée ou trop chaude. Une pâte froide et reposée roule dans une corde lisse, même sans déchirer."
    },
    {
      "nodeId": "step_3",
      "action": "Dissoudre",
      "inputs": [
        "ing_07",
        "shaped_pretzels"
      ],
      "outputState": "bathed_pretzels",
      "instructions": "Portez 2 litres d'eau à ébullition, puis ajoutez soigneusement le bicarbonate de soude — il moussera considérablement. Réduire à mijoter doucement. Travaillant un ou deux à la fois, abaissez chaque bretzel en forme dans le bain de soude en utilisant une cuillère à fente ou une araignée pendant 20 à 30 secondes de chaque côté. Le bain alcalin (pH ~12 avec bicarbonate de soude, plus élevé avec la lysse de qualité alimentaire) dénature les protéines de surface dans un gel qui se met dans la croûte d'acajou caractéristique brillante pendant la cuisson. Le bicarbonate de soude donne une saveur plus douce et une manipulation plus sûre que la lie; la lie donne une acajou plus profonde et une saveur alcaline plus prononcée (Brezel-Geschmack). Retirer avec la cuillère à fentes, laisser l'excès de goutte, et reposer sur le parchemin. Distribuez immédiatement du sel grossier sur le ventre gras de chaque bretzel alors que la surface est humide et collante.",
      "visualCue": {
        "primaryTarget": "Après le bain, chaque bretzel a l'air légèrement gonflé, terne-surface-tan et humide. La forme est entièrement intacte. La surface doit ressembler à de l'argile humide, elle brillera dans le four.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Seulement trempé pendant 5-10 secondes — la surface semble à peine différente de la pâte crue. La croûte ne développera pas la bonne couleur ou saveur.",
            "action": "Retournez au bain pendant 20 à 30 secondes. Une submersion constante donne à la surface suffisamment de temps de contact pour que la réaction alcaline se produise."
          },
          {
            "state": "Perfect",
            "description": "Pretzel semble légèrement gonflé et uniformément humide-tan. La surface a un léger reflet de la trempe alcaline. Le sel grossier appliqué adhère immédiatement au contact sans glisser.",
            "action": "Cuire immédiatement pour la couleur la plus profonde et croquant."
          },
          {
            "state": "Overdone",
            "description": "Laisser dans le bain pendant une minute — la surface peut sembler légèrement gelée ou les bords de la pâte s'adoucissent et perdent une définition.",
            "action": "Faites cuire immédiatement. Le sur-bain ruine rarement un bretzel mais peut adoucir le nœud où la pâte est la plus mince. Réduire le temps de bain à 20 secondes."
          }
        ]
      },
      "feelCue": "Après le bain de bicarbonate de soude, le bretzel se sent légèrement plus lourd et plus fragile — la surface a pris une qualité de gel qui se déchire facilement si vous faites glisser la cuillère à fente. Poignez avec soin; soutenez tout le bretzel de dessous, pas des bras, qui sont le point le plus mince et le plus vulnérable."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "bathed_pretzels",
        "ing_08"
      ],
      "outputState": "finished_pretzels",
      "instructions": "Cuire à 425°F / 220°C pendant 16-20 minutes, en tournant le plateau à mi-chemin, jusqu'à ce que les bretzels soient un brun acajou profond et uniforme — la couleur du caramel foncé, pas de toast léger. La réaction de Maillard se produit vigoureusement dans l'environnement alcalin créé par le bain de soude, ce qui explique pourquoi les bretzels brunissent plus vite et plus foncé que le pain régulier. Un bretzel pâle est un bretzel sous-done. Transférer sur un porte-fils et manger dans les 2 heures — les bretzels doux sont les meilleurs chauds et perdent leur croûte croustillante dans les quelques heures suivant la cuisson.",
      "visualCue": {
        "primaryTarget": "L'acajou profond partout — brun rougeâtre, brun foncé, presque la couleur du chocolat au lait. La surface est brillante et brillante à partir de la réaction de Maillard sur les protéines alcalines. Les cristaux de sel grossiers sont fermement intégrés dans la surface brillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est d'or pâle ou de bronzage léger — la réaction de Maillard a à peine commencé. La croûte noire et brillante n'a pas évolué. Le bretzel goûtera fade et pâteux, pas complexe et malté.",
            "action": "Faites cuire encore 4-6 minutes. Les bretzels pâles sont l'erreur la plus courante à la maison: s'engager dans la couleur foncée. La nuance d'acajou n'est pas brûlée; elle est correcte."
          },
          {
            "state": "Perfect",
            "description": "Un brillant acajou profond uniforme, surface ferme qui se brise faiblement lorsqu'il est pressé. Sel grossier fermement intégré. L'intérieur (coupé ouvert) est blanc doux et oreiller contre la croûte foncée. L'arôme est profondément malté et salé.",
            "action": "Laisser refroidir sur un support 5 minutes, puis servir au chaud. La croûte commencera à se ramollir après 1-2 heures."
          },
          {
            "state": "Overdone",
            "description": "Les taches noires sur les sections les plus minces — les extrémités et les noeuds du bras. Une odeur amère d'amidon brûlé. La surface peut sembler noir terne plutôt que brun brillant dans les taches.",
            "action": "Coupez les bouts noirs. Le ventre et les sections épaisses sont généralement récupérables. Réduire la température du four de 25 °F / 15 °C la prochaine fois, ou couvrir de papier dur à la marque de 12 minutes."
          }
        ]
      },
      "feelCue": "Un bretzel bien cuit devrait se sentir léger mais rigide — la croûte craque légèrement lorsque vous pressez le ventre entre deux doigts, comme une mince coquille dure sur un intérieur doux. Déposez-le sur le comptoir à partir de 6 pouces : il devrait faire un clic satisfaisant, légèrement creux, et non pas un bruit terne. Ce clic est la croûte vitreuse et alcaline, la texture caractéristique d'un vrai Brezel."
    }
  ]
};
