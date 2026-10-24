export default {
  "repoId": "master_japanese_japanesekinpiragobo_001",
  "parentRepoId": null,
  "slug": "japanese-kinpira-gobo",
  "author": "ForkRecipe Kitchen",
  "title": "Kinpira Gobo (Brased Burdock and Carrot)",
  "description": "La racine de bardane et la carotte ont sauté dans l'huile de sésame et ont mijoté dans une glaçure de soja sucrée jusqu'à ce que chaque brin soit tendre mais ait la résistance la plus faible et la plus satisfaisante, un côté confort japonais qui récompense la patience avec le couteau.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "vegetables",
  "tags": [
    "légumes",
    "végétalien",
    "Japonais",
    "enclos",
    "kinpira",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 3,
    "sour": 0,
    "bitter": 1,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Racines de bardane (gobo), frottées, julienned",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "Racines de céleri (celeriac)",
        "panais"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Carotte pelée, julienned",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "sauce soja (tamari sans gluten)",
      "ratioValue": 25,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Mirin",
      "ratioValue": 25,
      "defaultUnit": "ml",
      "substitutions": [
        "1 c. à soupe de sucre + 1 c. à soupe d'eau"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Cake (ou sherry sec)",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": [
        "vin blanc sec"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile de sésame grillée",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Heat",
      "name": "Flacons de chili rouges séchés (togarashi, facultatif)",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Graines de sésame grillées",
      "ratioValue": 5,
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
      "outputState": "prepared_gobo",
      "instructions": "Frottez la racine de bardane avec une brosse raide sous l'eau froide — ne pelez pas, la peau porte la terre et la nutrition. Couper en bâtonnets de 5 cm (julien), d'environ 3 à 4 mm carré. Lorsque vous coupez, transférez immédiatement dans un bol d'eau froide avec une touche de vinaigre de riz ou de jus de citron pour éviter l'oxydation. L'ardoise décolore considérablement et rapidement lorsqu'elle est exposée à l'air — en quelques minutes, elle passera de la crème au brun foncé. Égoutter et sécher juste avant la cuisson.",
      "visualCue": {
        "primaryTarget": "Couleur crème, allumettes uniformes immergées dans de l'eau acidulée. Lorsqu'elle est drainée, la couleur doit être crème pâle, non grise ou brune.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Gobo n'a pas été trempé et devient déjà brun sur les surfaces coupées.",
            "action": "Faire tremper dans l'eau acidulée pendant 5-10 minutes. Certains brunissements sont cosmétiques seulement — la saveur n'est pas affectée."
          },
          {
            "state": "Perfect",
            "description": "Des allumettes à la crème pâle et uniforme de taille constante. Après avoir drainé, ils tiennent leur couleur. Lorsqu'ils sont pliés, ils ont une flexibilité boisée et ferme.",
            "action": "Sécher et faire cuire."
          },
          {
            "state": "Overdone",
            "description": "Gobo s'est trempé si longtemps qu'il est devenu arrosé et doux.",
            "action": "Égoutter et patter très sec. Le temps de cuisson sera légèrement plus court."
          }
        ]
      },
      "feelCue": "Tenez un bâton d'allumette de gobo et essayez de le plier — il devrait fléchir considérablement avant de casser, comme une brindille fraîche. Cette résilience fibreuse donne à la kinpira sa légère résistance caractéristique même lorsqu'elle est cuite."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "prepared_gobo",
        "ing_02",
        "ing_06",
        "ing_07"
      ],
      "outputState": "sauteed_vegetables",
      "instructions": "Chauffer l'huile de sésame dans une poêle wok ou moyenne à feu moyen-vif. Ajouter les flocons de chili et remuer pendant 10 secondes jusqu'à odorat. Ajouter les allumettes de bardane séchées et la carotte julienne. Faire frire à feu vif pendant 3-4 minutes, en jetant régulièrement, jusqu'à ce que les légumes commencent à prendre de la couleur et que la bardane s'est légèrement adoucie à la surface, mais reste ferme au centre. L'huile de sésame doit sentir la noix et le toast.",
      "visualCue": {
        "primaryTarget": "Les brins de bardane commencent à tourner légèrement en or aux bords. La carotte est orange vif et légèrement adoucie. Les deux commencent à briller de l'huile de sésame.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont pâles et encore très crus. Pas de couleur de l'huile de sésame.",
            "action": "Augmenter la chaleur et continuer à jeter. L'huile de sésame devrait fumer légèrement."
          },
          {
            "state": "Perfect",
            "description": "Burdock a la teinte d'or la plus faible aux bords. La carotte est orange vif. Tous deux sont enduits d'huile de sésame et sentent la noix et légèrement terreux.",
            "action": "Ajouter le saké, le mirin et la sauce soja."
          },
          {
            "state": "Overdone",
            "description": "Les légumes sont profondément brunis et commencent à coller. L'huile de sésame a brûlé.",
            "action": "Ajouter immédiatement les liquides. Le brunissement ajoutera de la profondeur au plat fini."
          }
        ]
      },
      "feelCue": "Écoutez un étourdissement élevé soutenu lorsque les légumes sont dans l'huile de sésame chaude — si le son est muet, la poêle n'est pas assez chaude."
    },
    {
      "nodeId": "step_3",
      "action": "Braiser",
      "inputs": [
        "sauteed_vegetables",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "finished_kinpira",
      "instructions": "Ajoutez d'abord le saké — il va étourdir et réduire en 30 secondes. Ajouter le mirin et la sauce soja. Réduire le feu à moyen. Mélanger les légumes dans la glaçure, puis cuire en remuant régulièrement, pendant 4 à 5 minutes jusqu'à ce que le liquide ait réduit à une glaçure fine et brillante qui enveloppe chaque brin. La bardane doit être tendre, mais avec une légère résistance distinctive au cœur, la kinpira n'est jamais molle. Le goût de l'assaisonnement doit être doux, salé et légèrement terreux.",
      "visualCue": {
        "primaryTarget": "Chaque brin de bardane et de carotte est recouvert d'une fine glaçure de couleur acajou. Pas de liquide de mise en commun — il a tous réduit et adhéré aux légumes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide n'a pas encore diminué — les légumes nagent dans le mirin de soja mince. La bardane est toujours très ferme.",
            "action": "Continuer la cuisson, jeter régulièrement. Augmentez légèrement la chaleur pour accélérer la réduction."
          },
          {
            "state": "Perfect",
            "description": "Un glaçure fin et brillant enveloppe chaque brin. La bardane est tendre avec juste une petite bouchée. La carotte donne, mais conserve sa forme. Le plat sent le soja caramélisé et le sésame.",
            "action": "Retirer du feu. Éparpiller les graines de sésame et servir."
          },
          {
            "state": "Overdone",
            "description": "La glaçure a été réduite à une pâte collante et salée. Les légumes sont très doux.",
            "action": "Ajouter une cuillère à café d'eau et remuer pour se détendre. Retirer immédiatement du feu."
          }
        ]
      },
      "feelCue": "Mordre un brin de bardane cuite — il devrait avoir une légère résistance, comme mordre à travers une nouille ferme. S'il est complètement doux sans poussée, il est trop cuit."
    },
    {
      "nodeId": "step_4",
      "action": "Dresser",
      "inputs": [
        "finished_kinpira",
        "ing_08"
      ],
      "outputState": "plated_kinpira",
      "instructions": "Transférer dans un petit plat ou bol. Éparpiller généreusement les graines de sésame grillées sur le dessus. Servir à température ambiante en tant que banchan aux côtés du riz. Kinpira gobo garde réfrigéré pendant 3 à 4 jours et s'améliore en fait pendant la nuit lorsque la glaçure pénètre plus profondément dans la bardane.",
      "visualCue": {
        "primaryTarget": "Des brins glacés d'acajou et de carotte orange dans un petit plat, couronnés de graines de sésame blanc.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La vaisselle a l'air humide et non glacé. Graines de sésame manquantes.",
            "action": "Retourner à la chaleur pendant 2 minutes pour réduire. Puis garnir."
          },
          {
            "state": "Perfect",
            "description": "Chaque brin brillant et bien glacé. Le contraste entre l'acajou et la carotte orange est frappant visuellement. Les graines de sésame ajoutent texture et arôme.",
            "action": "Servez."
          },
          {
            "state": "Overdone",
            "description": "La glaçure s'est épaissie et a serré les brins ensemble.",
            "action": "Séparer doucement avec des baguettes. Quelques gouttes d'eau brassées le desserrent."
          }
        ]
      },
      "feelCue": "Soulever une portion de kinpira avec des baguettes — les brins doivent se séparer et tomber proprement, ne pas s'accrocher ou coller ensemble. Chaque pièce doit briller indépendamment."
    }
  ]
};
