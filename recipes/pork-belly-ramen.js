export default {
  "repoId": "master_japanese_chashupork_001",
  "parentRepoId": null,
  "slug": "pork-belly-ramen",
  "author": "ForkRecipe Kitchen",
  "title": "Chashu Pork Belly",
  "description": "Le ventre de porc roulé et attaché braisé dans le soja, le mirin, le saké et le sucre jusqu'à ce qu'il soit laqué, tranché et profondément sucré au caramel — le ramen qui fait le bol.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "proteins",
  "tags": [
    "porc",
    "Japonais",
    "Ramen",
    "Chashu",
    "braisés",
    "cuits lentement",
    "ventre"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "4 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 4,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Plaque du ventre de porc, avec peau, 600–800 g",
      "ratioValue": 700,
      "defaultUnit": "g",
      "substitutions": [
        "ventre de porc sans peau",
        "épaule de porc (moins de couches de graisse mais fonctionne)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari",
        "sauce de soja foncé (utiliser 50 ml – beaucoup plus intense)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Mirin (favorité de l'honneur)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "Vin de riz doux",
        "sherry sec + 1 c. à thé sucre"
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
        "Vin chinois de riz Shaoxing"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brun",
        "Chérie"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": [
        "bouillon de poulet (plus riche)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Allium",
      "name": "Échalons, coupés en sections de 5 cm environ",
      "ratioValue": 3,
      "defaultUnit": "pcs",
      "substitutions": [
        "poireau, partie blanche"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "tranches de gingembre frais, non pelées, 5 mm",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "gingembre moulu (5 g, moins frais)"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rouleaux",
      "inputs": [
        "ing_01"
      ],
      "outputState": "rolled_pork",
      "instructions": "Pose le ventre de porc à plat, côté peau. À partir de l'extrémité plus courte, rouler fermement le ventre dans un cylindre compact, en piégant autant de couches de graisse à viande que possible dans le rouleau. Attachez à intervalles de 2 à 3 cm avec la ficelle du boucher, tirant fermement chaque boucle de sorte que le rouleau conserve sa section circulaire pendant la cuisson. Un rouleau lâche se détachera et produira des tranches inégales. Le but est un cylindre serré, même qui tiendra sa forme pendant 3 heures de braisage.",
      "visualCue": {
        "primaryTarget": "Un cylindre serré, même du ventre de porc, la peau enveloppée à l'extérieur, tenue par des boucles uniformément espacées de ficelle. Pas de graisse ou de peau visible aux extrémités.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le rouleau est lâche et ovale en coupe transversale. Écart de peau visible à une extrémité. Des boucles de ficelle trop espacées.",
            "action": "Dépliez et reroulez plus étroitement. Ajouter les boucles de ficelle tous les 2 cm. Démarrez le rouleau de l'extrémité opposée pour un noyau plus serré."
          },
          {
            "state": "Perfect",
            "description": "Un cylindre ferme, même avec la peau formant un extérieur lisse. Chaque boucle de ficelle légèrement comprimée. La coupe transversale montre des couches concentriques de graisse et de viande.",
            "action": "Sear immédiatement pendant que le rouleau est froid et ferme."
          },
          {
            "state": "Overdone",
            "description": "La peau se scintille de façon si serrée et les couches de graisse se détachent.",
            "action": "Loosen 2-3 boucles aux points les plus serrés — un peu de donner est bien. Le rouleau se raffermira lors de la louange."
          }
        ]
      },
      "feelCue": "Grappez le rouleau et pressez doucement — il doit se sentir dense et inébranlable, comme un cylindre froid de beurre. S'il s'aplatit sous votre adhérence ou que les couches se séparent, il n'est pas assez serré."
    },
    {
      "nodeId": "step_2",
      "action": "Sear",
      "inputs": [
        "rolled_pork"
      ],
      "outputState": "seared_pork",
      "instructions": "Chauffer un four hollandais ou un pot lourd à feu moyen-vif sans huile — la graisse extérieure du ventre rendra immédiatement. Placer le rouleau et le saisir, en tournant avec des pinces toutes les 90 secondes, jusqu'à ce que tous les côtés soient uniformément dorés, y compris les bouts plats. Cette couture construit la base de saveur Maillard qui enrichit le liquide de braisage et crée l'extérieur laqué. Durée totale de la mer: 8-10 minutes.",
      "visualCue": {
        "primaryTarget": "Même brun doré sur toutes les surfaces, y compris les deux extrémités plates. Le côté de la peau doit être la couleur la plus profonde, près du caramel.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle sur un ou deux côtés. La peau est encore blanche et molle dans les endroits. Graisse fondue dans la poêle mais pas de brunissement maillard.",
            "action": "Continuer à tourner — chaque côté a besoin d'un contact direct avec la base de la poêle chaude pendant au moins 90 secondes."
          },
          {
            "state": "Perfect",
            "description": "Uniforme or profond à caramel de tous les côtés. La peau a resserré et commence à peine à croquer. La base de la poêle a une couche de couleur dorée.",
            "action": "Retirez le rouleau dans une assiette pendant que vous construisez le liquide de braisage dans le même pot."
          },
          {
            "state": "Overdone",
            "description": "La peau a bruni à brun très foncé d'un côté; gras pooling et fumer.",
            "action": "Réduire la chaleur et continuer à tourner plus fréquemment. La couleur foncée de la peau produira encore de bons résultats — les saveurs extérieures du braise."
          }
        ]
      },
      "feelCue": "L'extérieur du rouleau de mer doit se sentir ferme, légèrement collant de la graisse rendue, et chaud partout. Le côté de la peau doit se sentir serré et sec-papier sous votre bout de doigt."
    },
    {
      "nodeId": "step_3",
      "action": "Brise",
      "inputs": [
        "seared_pork",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "braised_chashu",
      "instructions": "Verser le saké dans le pot chaud et porter à ébullition, en grattant le fond du fond. Ajouter la sauce soja, le mirin, le sucre, l'eau, l'oignon et le gingembre. Retournez le rouleau de porc dans la casserole — le liquide devrait venir environ les deux tiers du chemin vers le haut du rouleau. Portez à une mijotée très douce (90°C, à peine bouillonnante — de grandes bulles feront tourner le rouleau dur et la peau se contracter inégalement). Couvrir et brasser pendant 2,5 à 3 heures, faire tourner le rouleau toutes les 45 minutes afin que tous les côtés passent du temps submergé. Le liquide va réduire et approfondir.",
      "visualCue": {
        "primaryTarget": "Après 3 heures : le rouleau est noir acajou-brun partout, assis dans un liquide brillant, réduit, comme du sirop de graisse. La ficelle se coupe légèrement dans la chair enflée et tendre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le rouleau a encore un peu de ressort lorsqu'il est pressé. Le liquide est encore mince et léger. Température intérieure inférieure à 85°C.",
            "action": "Continuez à faire des larmes. Vérifiez que le liquide est à mijoter, et non à ébullition."
          },
          {
            "state": "Perfect",
            "description": "Le rouleau produit complètement avec une pression douce — on dirait du collagène braisé tout au long de la course. Le liquide de graissage a réduit à une consistance sombre, brillante, presque sirupeuse. Extérieur acajou-brun.",
            "action": "Retirer du feu. Refroidir le rouleau dans le liquide de cuisson à température ambiante, puis réfrigérer."
          },
          {
            "state": "Overdone",
            "description": "Le rouleau a été partiellement déroulé dans la casserole. L'extérieur est très sombre et le liquide est réduit à une pâte collante sur le fond de la casserole.",
            "action": "Retirer soigneusement le rouleau, ajouter 50 ml d'eau pour déglacer le glaçage restant. Refroidir et réfrigérer les deux."
          }
        ]
      },
      "feelCue": "Appuyez sur le centre du rouleau à travers l'écart du couvercle du pot — il devrait sentir comme presser dans la gélatine ferme: rendement, gélatineux, donner sans rebondir en arrière. Le collagène s'est complètement converti."
    },
    {
      "nodeId": "step_4",
      "action": "Tranche",
      "inputs": [
        "braised_chashu"
      ],
      "outputState": "finished_chashu",
      "instructions": "La clé : réfrigérer le rouleau de chashu dans son liquide de cuisson du jour au lendemain avant de trancher. La graisse froide et la gélatine donnent l'intégrité structurelle du rouleau — le chashu à température ambiante s'effondre sous le couteau. Retirer du liquide (réserver le liquide : il devient votre tare pour ramen). Enlevez toute la ficelle. À l'aide d'un couteau très tranchant et à peau mince, couper les rondelles de 1,5 à 2 cm d'épaisseur en un seul coup sûr — sans sciage. Pour le ramen, entrez chaque tranche froide dans une casserole sèche et chaude pendant 30 secondes par côté pour réchauffer et caraméliser la glaçure avant de la mettre dans le bol.",
      "visualCue": {
        "primaryTarget": "Des rondelles parfaites de couches alternées de graisse et de viande, chaque tranche d'acajou se transposant à l'extérieur au centre de l'ivoire-rose. La couche de gélatine est visible comme un anneau translucide à l'intérieur de la peau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Séché au chaud — le rouleau a comprimé et déformé sous le couteau. Les couches de graisse sont démêlées plutôt que de couper proprement.",
            "action": "Refroidir le reste du rouleau au moins 2 heures avant de continuer à couper."
          },
          {
            "state": "Perfect",
            "description": "Propre, même les rondes. Les couches de gras blanc vif contre la viande rose-mahogany. Chaque tranche tient sa forme circulaire sans s'effondrer.",
            "action": "Réchauffer les tranches dans une poêle chaude pendant 30 secondes par côté immédiatement avant de servir en ramen."
          },
          {
            "state": "Overdone",
            "description": "Trop mince, les rondelles s'effondrent et la couche de gélatine s'effondre.",
            "action": "Pour le ramen, le chashu émietté est encore délicieux; il suffit d'arranger les morceaux plutôt que de placer des ronds entiers."
          }
        ]
      },
      "feelCue": "Une tranche correctement réfrigérée doit avoir l'air ferme et froide; elle doit tenir sa forme lorsqu'elle est ramassée avec des baguettes, mais elle doit donner immédiatement sur la langue. La graisse doit se sentir lisse et cireuse-froide, pas grasse ou liquide."
    }
  ]
};
