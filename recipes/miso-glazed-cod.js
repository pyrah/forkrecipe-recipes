export default {
  "repoId": "master_japanese_misoglazedcod_001",
  "parentRepoId": null,
  "slug": "miso-glazed-cod",
  "author": "ForkRecipe Kitchen",
  "title": "Miso-Glace de morue noire",
  "description": "La morue noire a mariné trois jours dans le miso blanc, le mirin et le saké, la préparation Nobu qui a fait de ce poisson beurré de renommée mondiale, caramélisé pour laque sous la grille.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "seafood",
  "tags": [
    "poissons",
    "Japonais",
    "miso",
    "morue noire",
    "poissons-sables",
    "grillés",
    "Nobu",
    "Produits de la mer"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "3 days",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Filets de morue noire (sablefish), sur peau, de 150 à 180 g chacun",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "Bar chilien",
        "saumon (réduire le temps de marination à 24 heures — plus de teneur en huile)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Pâte de shiro (blanc) miso",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "miso jaune (plus fort, plus salé – réduire de 20%)",
        "C'est une erreur."
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Mirin (Hon-mirin)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "Vin de riz doux",
        "sherry sec + 2 c. à thé sucre"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Solvent",
      "name": "Mâcher",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "sherry sec",
        "Vin chinois Shaoxing"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "sucre de palme",
        "sucre brun léger"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre (pour poêle/broyeur)",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": [
        "huile de raisin"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "miso_marinade",
      "instructions": "Mélanger le mirin et le saké dans une petite casserole à feu moyen. Porter à mijoter doucement et cuire 2 minutes pour brûler l'alcool, ce qui empêche la marinade de goûter cru et tranchant sur le poisson fini. Retirer du feu. fouetter dans la pâte de miso blanche jusqu'à ce qu'elle soit complètement lisse sans grumeaux. fouetter dans le sucre jusqu'à dissolution. La marinade doit être épaisse, soyeuse et uniformément bronzée. Laisser refroidir à la température ambiante avant utilisation.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, brillante et uniformément dorée — assez épaisse pour enrober abondamment une cuillère et tomber dans un ruban lent et non cassé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Alcool encore vif et cru dans l'arôme. Miso grumeaux visibles. Des granules de sucre se sont installés au fond.",
            "action": "Continuez à chauffer et à fouetter. L'alcool a besoin d'au moins 2 minutes à mijoter pour se volatiliser."
          },
          {
            "state": "Perfect",
            "description": "Profondément parfumé avec un arôme arrondi, sucré-fermenté — pas de netteté d'alcool cru. Parfaitement lisse, brillant, comme du miel.",
            "action": "Refroidir complètement à la température ambiante avant de recouvrir le poisson. La marinade chaude commencera à cuire les protéines."
          },
          {
            "state": "Overdone",
            "description": "Marinade a diminué trop loin — très épaisse et commence déjà à caraméliser aux bords de la poêle. Des taches sombres dans la pâte.",
            "action": "Ajouter 1 cuillère à soupe d'eau et fouetter la chaleur pour rétablir la consistance."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité entre vos doigts — il devrait se sentir soyeux, dense et légèrement collant. Lorsque vous relâchez vos doigts, il devrait tirer dans des cordes lentes plutôt que de couler. Bouche : affirmationment sucré, salé et complexe."
    },
    {
      "nodeId": "step_2",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "miso_marinade"
      ],
      "outputState": "marinated_cod",
      "instructions": "Les filets de morue sont complètement secs: toute humidité superficielle diluera la marinade et empêchera un revêtement uniforme. Enrobez chaque filet généreusement de tous les côtés avec la marinade miso refroidie. Le revêtement doit être visible et substantiel, d'environ 3 à 4 mm d'épaisseur. Placer dans un contenant non réactif (pas d'aluminium — l'acide miso réagira), couvrir et réfrigérer. Faire mariner au moins 2 jours; 3 jours est la préparation traditionnelle. Les enzymes miso pénètrent profondément le poisson, convertissant certaines protéines et créant la texture soyeuse caractéristique.",
      "visualCue": {
        "primaryTarget": "Filets entièrement encastrés dans un épais revêtement miso bronzé. Après 2+ jours: le revêtement a partiellement absorbé la surface du poisson, qui a pris une couleur dorée plus profonde.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Revêtement fin et patchy. chair de poisson rose visible à travers le miso en plusieurs endroits. Moins de 24 heures de marinade.",
            "action": "Appliquer une deuxième couche de marinade là où il y a des lacunes. Faire mariner encore 24 heures."
          },
          {
            "state": "Perfect",
            "description": "Après 2 à 3 jours : le revêtement épais est partiellement absorbé. Le poisson sous le revêtement s'est légèrement raffermi et a pris une tache dorée. Aroma est intensément fermenté et doux.",
            "action": "Retirer du réfrigérateur 30 minutes avant de griller. Essuyer soigneusement l'excès de marinade avant la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Marinés plus de 5 jours — les enzymes miso ont trop dégradé les protéines de surface. Le poisson se sent musqué et glisse en feuilles.",
            "action": "Cuire immédiatement. La texture sera très délicate — manipuler avec une spatule de poisson et servir directement de la poêle."
          }
        ]
      },
      "feelCue": "Après 3 jours, pressez un filet dans le contenant, il devrait se sentir plus dense et plus ferme que le poisson frais, comme le revêtement s'est lié à la surface. Le miso aurait dû changer de couleur de bronzage à un or légèrement plus foncé où il contacte le poisson."
    },
    {
      "nodeId": "step_3",
      "action": "Rôtis",
      "inputs": [
        "marinated_cod",
        "ing_06"
      ],
      "outputState": "broiled_cod",
      "instructions": "Préchauffer le poulet à feu maximum. Essuyer très doucement chaque filet avec vos doigts ou une serviette en papier sec pour enlever la majeure partie de la marinade miso – laisser un mince, même revêtement derrière. L'excès de marinade brûlera le noir sous la grille avant que le poisson ne cuise. Badigeonner une poêle à griller avec un mince film d'huile neutre. Déposer les filets côté peau. Faire griller 10 à 15 cm de l'élément thermique pendant 5 à 7 minutes, en regardant constamment. Le miso sucre va caraméliser rapidement. Vous recherchez une glaçure laquée et ambrée profonde avec quelques taches caramélisées sombres — pas noir carbonisé.",
      "visualCue": {
        "primaryTarget": "Une surface laquée ambre-caramel profonde avec des taches sombres concentrées où le sucre a caramélisé le plus loin. La chair en dessous devrait être à peine opaque dans l'ensemble — le cabillaud noir est fait au premier signe d'éclaboussure.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface est en or pâle, non laquée. Pas de caramélisation profonde. Le poisson est translucide et brut au centre.",
            "action": "Continuez à faire griller. La caramélisation se produit rapidement à la fin — regardez toutes les 30 secondes."
          },
          {
            "state": "Perfect",
            "description": "Glace ambre profonde avec taches foncées. Les poissons se lèvent de la poêle aux bords et le centre est à peine opaque. Une baguette insérée au centre ne présente aucune résistance. La cuisine sent le miso caramélisé.",
            "action": "Supprimer immédiatement. La morue noire surcuite en moins de 30 secondes."
          },
          {
            "state": "Overdone",
            "description": "La surface est devenue noire et amère. Le poisson s'est contracté et s'éloigne de la peau.",
            "action": "Grattez la surface la plus amère avec un couteau à palettes. La chair en dessous sera bonne."
          }
        ]
      },
      "feelCue": "Appuyez sur la partie la plus épaisse d'un filet avec un bout de doigt — il devrait donner avec la pression la plus légère et la chair devrait se séparer dans ses flocons naturels sans effort. La morue noire à la cuisson parfaite se sent comme une pression dans le beurre ferme et frais: rendement, lisse, presque aucune résistance."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir",
      "inputs": [
        "broiled_cod"
      ],
      "outputState": "finished_cod",
      "instructions": "Transférer immédiatement les filets de la poêle dans des assiettes de service chauffées à l'aide d'une mince spatule de poisson — la morue noire est fragile à ce stade et se brisera si elle est manipulée. La peau, ayant rendu sa graisse, devrait se libérer facilement de la poêle. Servir immédiatement avec du riz japonais cuit à la vapeur, du gingembre mariné et un simple bouillon de dashi. Aucune garniture n'est nécessaire — la surface laquée est la présentation.",
      "visualCue": {
        "primaryTarget": "Un filet ambre brillant, profondément caramélisé sur une plaque blanche, côté peau vers le bas. La surface est laquée, pas mate. chair d'ivoire pâle visible aux bords où elle a à peine flocé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poisson transféré alors que la glaçure est toujours collante et déchirante. La surface est terne et humide.",
            "action": "Le poisson doit se reposer dans la casserole 30 secondes après avoir enlevé le gril avant de glisser la spatule en dessous."
          },
          {
            "state": "Perfect",
            "description": "Glaze est mis et laqué. Le filet tient sa forme sur la plaque. Le premier flocon au bord est visible et blanc nacré.",
            "action": "Servir en 90 secondes — la texture change rapidement à mesure qu'elle refroidit."
          },
          {
            "state": "Overdone",
            "description": "Le poisson a refroidi trop longtemps et la graisse s'est mise en globules blancs à la surface.",
            "action": "Retourner à la grille pendant 60 secondes pour refondre la graisse et raviver la glaçure."
          }
        ]
      },
      "feelCue": "Faites glisser une baguette entre les flocons — ils doivent se séparer en feuilles épaisses et blanches, sans résistance. Chaque flocon doit se sentir humide et gélatineux, enduit dans sa propre graisse rendue. La peau devrait se détacher en une seule pièce, craqueler à l'extérieur, soyeux sur le dessous."
    }
  ]
};
