export default {
  "repoId": "master_peruvian_ceviche_001",
  "parentRepoId": null,
  "slug": "ceviche",
  "author": "ForkRecipe Kitchen",
  "title": "Ceviche",
  "description": "Limeño ceviche à son plus pur — des cubes de poisson blanc nacré clignotaient dans de la chaux crue, de l'ail et de l'aji jusqu'à ce que les bords deviennent opaques, nageant dans la leche de tigre nuageuse, ardente et agrumes que les Péruviens boivent directement dans le bol. La patate douce fraîche et le maïs croquant chevauchent à côté pour apprivoiser la brûlure.",
  "cuisine": "Pérou",
  "culture": "Limeño",
  "category": "seafood",
  "tags": [
    "Ceviche",
    "périuvien",
    "Poisson cru",
    "Chaux",
    "Aji",
    "leche de tigre"
  ],
  "difficulty": 3,
  "activeTime": "25 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 5,
    "bitter": 1,
    "umami": 3,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Poisson blanc ferme, sans peau et désossé (corvina, bar, flétan ou flocons)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Flotteur",
        "snapper",
        "Hamachi de qualité sushi"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Citrus",
      "name": "Jus de chaux frais (choix/chaux mexicaine préférée, jamais embouteillé)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "une touche d'orange amère pour un acide plus doux"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Heat",
      "name": "Limone aji ou habanero frais, ensemencée et hachée",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "pâte aji amarillo",
        "Fresno chile pour un bol plus doux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousse d'ail râpée à la pâte",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Gingembre frais, finement râpé (accent Nikkei en option)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "omit pour un bol criollo classique"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Oignon rouge, en tranches de papier-fin (collé avec le grain)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "Échalote"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Feuilles de cilantro, hachées approximativement",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "Culantro / herbe à dents de scie"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Starch",
      "name": "Pommes de terre douces (camote), bouillies et coupées en rondelles",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "manioc bouilli"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Amandes de maïs Choclo ou bouillies/cancha grillée",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "grains de maïs doux"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Cure",
      "inputs": [
        "ing_09",
        "ing_07"
      ],
      "outputState": "prepped_garnishes",
      "instructions": "Faire bouillir la patate douce non pelée entière jusqu'à ce qu'un couteau glisse sans résistance, 20 à 30 minutes, puis refroidir, peler et trancher en rondelles épaisses — il doit être prêt à servir avant que le poisson ne touche jamais la chaux. Pendant ce temps, couper le papier d'oignon rouge-mince et le tremper dans l'eau glacée pendant 10 minutes pour retirer sa bouchée brute, puis l'égoutter et bien le sécher. Camote froide, douce et croquante, l'oignon moelleux sont les contrepoids à l'acide et à la chaleur qui viennent ensuite.",
      "visualCue": {
        "primaryTarget": "Les rondelles de patates douces sont tendres et orange brillant, tenant leur forme; l'oignon rouge est croquant, translucide et ne dégage plus d'odeur vive.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La patate douce est ferme au centre et l'oignon pique encore le nez et mord chaud sur la langue.",
            "action": "Faire cuire la camote plus longtemps jusqu'à ce qu'elle soit complètement molle, et faire tremper l'oignon dans l'eau fraîche de glace."
          },
          {
            "state": "Perfect",
            "description": "Camote est crémeuse-douce tout le long du chemin et l'oignon égoutté est croquant, vitreux et doux.",
            "action": "Réserver les deux, froid, et passer à la construction de la leche de tigre."
          },
          {
            "state": "Overdone",
            "description": "La patate douce s'est effondrée et l'oignon s'est flippé et ligoté.",
            "action": "Couper les rondelles fraîches d'une section plus ferme si la pomme de terre est trop loin; faire sécher l'oignon et l'utiliser de toute façon."
          }
        ]
      },
      "feelCue": "Un tour de camote fini devrait céder à une légère pression du doigt comme un avocat mûr. L'oignon drainé devrait quand même craquer. Tout ici reste froid — la chaleur est l'ennemi du ceviche croquant."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "leche_de_tigre",
      "instructions": "Pressez les limes doucement à la main, sans les mettre à la croûte, qui libère des huiles amères. Dans un bol, fouetter le jus de lime frais avec l'ail râpé, l'aji haché, le gingembre en option et le sel jusqu'à ce que le sel se dissout. C'est la leche de tigre, le lait du tigre: il doit goûter agressivement brillant, ailky, chaud, et une touche trop salée sur lui-même, parce que le poisson va rapidement l'équilibrer.",
      "visualCue": {
        "primaryTarget": "Un liquide pâle, légèrement nuageux, versable, avec de l'ail et du piment, sentant fortement la chaux avec un piment au nez.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide a un goût plat et aqueux, sans bord de sel et seulement une faible présence de chile.",
            "action": "Ajouter le sel une pincée à la fois et plus haché aji jusqu'à ce qu'il goûte vif et presque trop intense à lui seul."
          },
          {
            "state": "Perfect",
            "description": "Tarte et savoureuse, avec une chaleur claire à l'ail et un chile de construction, salée juste après confortable.",
            "action": "Déplacez-vous rapidement vers le poisson — leche de tigre est à son meilleur dans les minutes qui suivent le mélange."
          },
          {
            "state": "Overdone",
            "description": "Le jus a un goût dur et résineux, avec un bord métallique tranchant.",
            "action": "Tu as pressé les citrons trop fort ou tu les as laissés s'asseoir trop longtemps. Couper l'amertume avec quelques gouttes de jus frais et une petite pincée de sucre."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt et goûtez: il devrait vous faire un peu de wince et chaud à l'arrière de la gorge. Si vos yeux arrosent du piment et de la chaux, c'est tout à fait juste — le poisson maladroit arrondira tous ces coins tranchants."
    },
    {
      "nodeId": "step_3",
      "action": "Cure",
      "inputs": [
        "ing_01",
        "leche_de_tigre"
      ],
      "outputState": "cured_fish",
      "instructions": "Coupez le poisson frais et réfrigéré en cubes de 50 cm, les morceaux uniformes se soignent au même rythme. Pliez le poisson dans la leche de tigre afin que chaque cube soit baigné, puis laissez-le s'asseoir juste 2 à 5 minutes pour le style moderne Limeño. L'acide dénature les protéines de surface, tournant les bords opaques et fermes tandis que les centres restent tendres et presque crus. Ne t'en va pas, c'est ceviche et dure.",
      "visualCue": {
        "primaryTarget": "Les cubes de poisson ont blanchi et raffermi aux bords, mais montrent une faible ligne translucide au centre même; le liquide environnant a transformé le laitier en libération de protéines.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les cubes sont encore brillants et translucides tout au long avec une texture glissante, entièrement ramifiée et une saveur fade.",
            "action": "Mélanger doucement et lui donner une autre minute, en dégustant un cube toutes les 30 secondes jusqu'à ce que les bords deviennent opaques mais le centre reste tendre."
          },
          {
            "state": "Perfect",
            "description": "Les bords sont blancs opaques et juste-fermes tandis que les centres restent juteux et à peine translucides ; un cube flocait proprement mais goûte succulent, pas crayeux.",
            "action": "Arrêter immédiatement le traitement — plier dans les aromatiques et la plaque."
          },
          {
            "state": "Overdone",
            "description": "Les cubes sont blancs opaques tout au long, fermes et caoutchouteux, avec une bouchée sèche, cuite et cotonneuse.",
            "action": "Il a trop envahi les poissons 'cuits'. Égoutter la plus grande partie de la leche de tigre, servir à la fois, et couper le temps de guérison prochaine ronde."
          }
        ]
      },
      "feelCue": "Un cube parfaitement guéri a une résistance douce comme une prune mûre — une peau ferme, douce à l'intérieur — jamais la courbure du poisson cru ni le crumble sec de trop cuit. Le liquide s'épaissit et devient opaque à mesure qu'il fonctionne."
    },
    {
      "nodeId": "step_4",
      "action": "Finition",
      "inputs": [
        "cured_fish",
        "ing_07",
        "ing_08",
        "prepped_garnishes",
        "ing_10"
      ],
      "outputState": "finished_ceviche",
      "instructions": "Hors de la chaleur de l'acide, plier doucement l'oignon rouge drainé et la plupart de la coriandre dans le poisson guéri afin qu'ils restent croustillants et lumineux. Goûtez la leche de tigre une dernière fois et corrigez le sel, la chaux et la chaleur. Déposer le poisson et son liquide nuageux dans un bol froid peu profond, pencher les rondelles de patate douce contre un côté, disperser le maïs ou le châtaigne grillé, et couronner avec le reste de la coriandre. Servir immédiatement, tandis que tout est glacé et le remède est à son maximum.",
      "visualCue": {
        "primaryTarget": "Un monticule scintillant de poissons à bord opaque dans une piscine de leche de tigre laiteuse, verte et rouge, avec une camote orange vive et du maïs pâle encadrant le bol.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bol a l'air pâle et goûte timide — pas assez de sel ou de piment, l'oignon à peine présent.",
            "action": "Ajuster la leche de tigre avec du sel, une pression de chaux, et plus haché aji, puis plier à travers et re-plaquer."
          },
          {
            "state": "Perfect",
            "description": "Lumineux, équilibré, et vivant : tarte et savoureuse au chile propre, le poisson tendre, l'oignon croquant, la camote fraîche et douce contre la chaleur.",
            "action": "Servir à la fois avec la leche de tigre à boire, idéalement à quelques minutes du plat."
          },
          {
            "state": "Overdone",
            "description": "Le poisson a continué à se mouiller sur l'assiette en cubes fermes et crayeux et l'oignon s'est flétri dans l'acide.",
            "action": "Il n'y a pas de sauvetage — ceviche ne garde pas. Servir immédiatement la prochaine fois et guérir le poisson à commander."
          }
        ]
      },
      "feelCue": "Le contraste est tout : froid, doux, doux, camote contre le poisson chaud, vif, agrumes; oignon croquant contre le cube tendre. La leche de tigre au fond mérite d'être bue par elle - même — que le lait de tigre mis en commun est l'âme du plat."
    }
  ]
};
