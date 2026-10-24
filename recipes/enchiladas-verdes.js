export default {
  "repoId": "master_mexican_enchiladas_verdes_001",
  "parentRepoId": null,
  "slug": "enchiladas-verdes",
  "author": "ForkRecipe Kitchen",
  "title": "Enchiladas Verdes",
  "description": "Tortilles de maïs, brièvement frites et tirées à travers une sauce tomatillo brillante et tannante, enveloppent une garniture de poulet déchiqueté et sortent du four sous une couverture de créma et de fresque queso qui adoucit le feu du chile vert.",
  "cuisine": "Mexicain",
  "culture": "Mexicain",
  "category": "proteins",
  "tags": [
    "Mexique",
    "poulet",
    "tomatillo",
    "enchiladas",
    "cuits"
  ],
  "difficulty": 2,
  "activeTime": "40 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 2104,
  "forks": 248,
  "contributors": 22,
  "license": "CC-BY-SA",
  "createdAt": "2024-08-17",
  "updatedAt": "2025-07-30",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Poitrine ou cuisse de poulet désossée",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "poulet rôtisserie",
        "Porc déchiqueté"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Tomatillos (rincés)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "tomatillos en conserve"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Heat",
      "name": "Serrano chiles entiers",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "jalapeños (milder)",
        "habanero (haute)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon blanc (quartier)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon jaune"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Coriandre fraîche (tiges et feuilles)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "persil à feuilles plates (mèche)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Starch",
      "name": "Tortilles de maïs (15cm de diamètre)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Dairy",
      "name": "Crème créma ou aigre mexicaine",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "Crème fraîche"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_01",
        "ing_04"
      ],
      "outputState": "poached_chicken",
      "instructions": "Placer les morceaux de poulet dans une casserole avec la moitié de l'oignon, une pincée de sel et suffisamment d'eau froide pour couvrir de 3cm. Portez à feu doux à feu moyen — jamais un ébullition qui durcit la viande. Écraser toute mousse qui monte. Cuire 20-25 minutes jusqu'à ce que le poulet soit cuit. Retirer et laisser refroidir assez pour manipuler, puis déchiqueter en longs brins fins. Réserve le liquide de braconnage.",
      "visualCue": {
        "primaryTarget": "Le poulet est blanc tout au long sans rose près de l'os. Le liquide de braconnage est un or pâle, limpide avec seulement une mijote douce — jamais de bulles agressives.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Viande rose ou translucide près de l'os. Température intérieure inférieure à 74°C.",
            "action": "Retourner dans le liquide et continuer à mijoter pendant 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "De la viande uniformément blanche et humide qui déchiquete en longs brins soyeux avec deux fourchettes. Des jus clairs s'écoulent lorsqu'ils sont pressés.",
            "action": "Retirer et déchiqueter pendant qu'il est encore chaud — le poulet chaud déchiquete beaucoup plus facilement."
          },
          {
            "state": "Overdone",
            "description": "Poulet sec et farineux qui s'écroule plutôt que des lambeaux. Le liquide de braconnage est nuageux.",
            "action": "Procéder — jeter le poulet déchiqueté avec une cuillère du liquide de braconnage pour le remousser."
          }
        ]
      },
      "feelCue": "Le poulet bien poché donne avec presque aucune résistance quand on le sépare avec deux fourchettes — les brins se séparent en longs rubans propres sans déchirer."
    },
    {
      "nodeId": "step_2",
      "action": "Rôtis",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "roasted_verde",
      "instructions": "Placer les tomatillos, les piments de serrano et les quartiers d'oignon restants sur une plaque de cuisson doublée de feuilles. Faire griller 15cm sous le gril pendant 8-10 minutes, en tournant une fois, jusqu'à ce que les tomatillos soient cloqués et carbonisés dans les taches. Les peaux se séparent et libèrent leurs jus. Alternativement, char directement sur une flamme à gaz avec pinces. L'ombrage est essentiel, il tempère la tarte brute et ajoute de la fumée.",
      "visualCue": {
        "primaryTarget": "Les Tomatillos sont adoucis et effondrés, leur peau scindée et noircie en patchs. Les chiles sont carbonisés partout. Les jus sur la plaque de cuisson sont caramélisés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les Tomatillos sont chauds mais fermes, seulement légèrement dorés. Les peaux sont intactes. La sauce aura un goût cru et fortement acide.",
            "action": "Continuez sous la grille. L'omble n'est pas facultatif, il crée de la profondeur."
          },
          {
            "state": "Perfect",
            "description": "Les Tomatillos sont doux, cloqués et effondrés, avec des taches noircies sur la peau. Serranos sont entièrement carbonisés.",
            "action": "Laisser refroidir légèrement puis transférer tout dans le mélangeur, y compris les jus collectés."
          },
          {
            "state": "Overdone",
            "description": "Les Tomatillos se sont complètement désintégrés dans un liquide sur la poêle et les peaux sont uniformément noires.",
            "action": "Transférez soigneusement. La saveur sera assez fumée — ajouter un tomatillo brut supplémentaire pour éclaircir."
          }
        ]
      },
      "feelCue": "Un tomatillo bien torréfié devrait se sentir comme un ballon d'eau sur le point de sauter lorsqu'il est pressé avec le dos d'une cuillère — la chair s'est adoucie complètement sous la peau carbonisée."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "roasted_verde",
        "ing_05"
      ],
      "outputState": "salsa_verde",
      "instructions": "Transférer les tomatillos rôtis, les chiles, l'oignon et tous leurs jus dans un mélangeur. Ajouter la coriandre fraîche et 100 ml du liquide de braconnage de poulet réservé. Mélanger en haut pendant 60 secondes jusqu'à ce qu'il soit lisse. Bouche : il doit être lumineux, acidulé, fumé et légèrement épicé. Réglez le sel. La sauce sera fine, c'est exact, elle s'épaissira au four.",
      "visualCue": {
        "primaryTarget": "Une sauce vive et opaque vert olive avec une surface légèrement mousseuse de mélange. Il coule facilement du mélangeur et sent intensément le tomatillo et l'omble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce présente des morceaux visibles de peau de tomatillo et de chair de chile. La couleur est inégale.",
            "action": "Mélanger encore 60 secondes. Cette sauce doit être lisse pour tremper les tortillas uniformément."
          },
          {
            "state": "Perfect",
            "description": "Uniformement vert olive et lisse. Verse avec la consistance de la crème fine. Arôme lumineux et complexe.",
            "action": "Transférer dans un grand bol peu profond pour tremper les tortillas."
          },
          {
            "state": "Overdone",
            "description": "La sauce surplombée est très mousseuse, presque laiteuse et chaude par friction.",
            "action": "Continuez. La mousse va s'installer et la saveur est sans compromis."
          }
        ]
      },
      "feelCue": "Exécutez un doigt le long de l'intérieur du pot du mélangeur — la sauce doit l'envelopper uniformément sans taches rugueuses ni séparations aqueuses."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "salsa_verde",
        "poached_chicken",
        "ing_06",
        "ing_07"
      ],
      "outputState": "enchiladas_verdes",
      "instructions": "Préchauffer le four à 190°C. Faire revenir brièvement chaque tortilla de maïs dans 1cm d'huile chaude pendant 5-10 secondes de chaque côté jusqu'à ce qu'elle soit adoucie et pliable (pas croustillante). Égoutter sur des serviettes en papier. Plongez chaque tortilla dans la salsa verde pour enrober les deux côtés. Placer 40g de poulet déchiqueté au centre, rouler fermement et déposer le côté couture dans un plat de cuisson. Verser le reste de salsa verde sur le dessus. Cuire au four pendant 15 minutes jusqu'à ce que la sauce bouillonne. Arroser de créma et écraser la fresque queso sur le dessus avant de servir.",
      "visualCue": {
        "primaryTarget": "Les énchiladas sont emballées dans le plat, uniformément souillées, et sortent du four avec des bords bouillonnants et des taches légèrement dorées où la sauce a caramélisé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce sur le dessus est encore liquide et les enchiladas ont l'air pâle et déréglées. Les tortillas peuvent encore se déplacer lorsque le plat est déplacé.",
            "action": "Retourner au four 5-8 minutes de plus jusqu'à ce que les bords soient visiblement bouillonnants."
          },
          {
            "state": "Perfect",
            "description": "Une casserole unifiée — les tortillas se sont mélangées avec la sauce, les bords sont bouillonnants et légèrement caramélisés, le remplissage est chaud partout.",
            "action": "Ajouter le créma et la fresque queso immédiatement et servir à la table."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite à une pâte collante sur les bords de la poêle. Les tortillas commencent à se désintégrer.",
            "action": "Retirer immédiatement et servir. Ajouter une cuillère de salsa verde fraîche sur le dessus pour restaurer l'humidité."
          }
        ]
      },
      "feelCue": "Le plat fini doit sentir comme le maïs grillé, le tomatillo tannique, et le doux funk de fromage fondu — un arôme complet, arrondi, non pointu ni cru."
    }
  ]
};
