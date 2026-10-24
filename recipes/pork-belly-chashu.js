export default {
  "repoId": "master_japanese_pork_belly_chashu_001",
  "parentRepoId": null,
  "slug": "pork-belly-chashu",
  "author": "ForkRecipe Kitchen",
  "title": "Chashu Pork Belly",
  "description": "Un ventre de porc roulé attaché serré, doré, et braisé dans le soja, le mirin, le saké et le sucre jusqu'à ce que la graisse tremble et translucide — le ramen canonique garniture.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "proteins",
  "tags": [
    "Chashu",
    "Japonais",
    "porc",
    "braisés",
    "Ramen",
    "umami"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "3 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 4,
    "sour": 0,
    "bitter": 0,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Porc ventre, peau sur (dalle entière)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "ventre de porc sans peau",
        "épaule de porc pour un chashu plus maigre"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "sauce soja (régulière / shoyu)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari pour sans gluten"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Mirin (Hon-mirin)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "sherry sec + 1 c. à thé sucre"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Solvent",
      "name": "Cuisson (cuisson ou boisson)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "sherry sec",
        "vin blanc sec"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre blanc (ou sucre brun léger)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Oignon vert / pétoncle (tiges entières)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gingembre frais (en tranches épaisses, non pelées)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile neutre (pour la mer)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Façonner",
      "inputs": [
        "ing_01"
      ],
      "outputState": "rolled_belly",
      "instructions": "Pose la peau du ventre de porc sur une planche propre. Rouler fermement d'une extrémité courte dans un cylindre compact, en maintenant le rouleau aussi même en diamètre que possible. Attachez à 2 cm d'intervalle avec la ficelle du boucher — rincer mais pas si serré qu'il coupe dans la graisse. Le rouleau serré assure des tranches égales pour le ramen, et la ficelle tient la forme à travers le braise. Si le ventre est très épais ou la peau dure, marquer légèrement la peau à des intervalles de 1 cm avant de rouler pour l'aider à rendre et adoucir uniformément.",
      "visualCue": {
        "primaryTarget": "Un cylindre compact et soigné du ventre de porc, attaché à intervalles réguliers, avec la peau formant l'extérieur du rouleau et la viande serrée à l'intérieur. En coupe transversale il devrait ressembler à une spirale soignée de viande et de graisse alternées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le rouleau est lâche et inégal, avec des écarts entre les couches et la ficelle attachée hapdangely — il démêlera et cuirea inégalement pendant le braise.",
            "action": "Dépliez et reroulez plus étroitement. Pressez le rouleau entre les deux paumes pendant que vous attachez chaque morceau de ficelle pour le compresser."
          },
          {
            "state": "Perfect",
            "description": "Un rouleau ferme, uniformément cylindrique qui tient sa forme quand vous le ramassez. La ficelle est assise sur sa longueur, et le rouleau est dense et compact.",
            "action": "Procéder immédiatement à la mise en mer, ou réfrigérer le rouleau attaché découvert pendant 24 heures au maximum pour le raffermir davantage."
          },
          {
            "state": "Overdone",
            "description": "Le rouleau a été attaché de manière si agressive que la ficelle se coupe dans la chair et déforme la forme en sablier.",
            "action": "Éliminez légèrement les liens offensants. Le rouleau doit être serré et non pas constrictif, il doit se développer légèrement au fur et à mesure que la graisse se rend pendant la cuisson."
          }
        ]
      },
      "feelCue": "Le ventre roulé doit se sentir dense et lourd pour sa taille, avec la peau printanière et tendue sous vos doigts. Lorsque vous le pressez doucement, il ne devrait pas donner beaucoup — il devrait y avoir une vraie résistance des couches serrées."
    },
    {
      "nodeId": "step_2",
      "action": "Saisir",
      "inputs": [
        "rolled_belly",
        "ing_08"
      ],
      "outputState": "seared_chashu",
      "instructions": "Chauffer l'huile dans une poêle ou un four néerlandais à feu vif jusqu'à ce qu'elle mijote. Placez le ventre roulé dans la poêle et la couture, en tournant toutes les 2 à 3 minutes avec des pinces, jusqu'à ce que chaque surface, y compris les deux extrémités plates, soit dorée. Cela prend environ 10 à 12 minutes au total. Le côté de la peau s'épaissira et se contractera avec énergie — utilisez un écran d'éclaboussure si nécessaire. La croûte Maillard construite ici contribue aux notes grillées et caramélisées qui distinguent le chashu d'un simple rouleau de porc braisé.",
      "visualCue": {
        "primaryTarget": "Tout l'extérieur du rouleau, la peau, la graisse et les extrémités, est uniformément doré à ambre profond, avec une croûte croustillante et légèrement texturée. La poêle a un revêtement de couleur marron doré et les odeurs de la cuisine de la graisse de porc caramélisée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le rouleau n'a été scellé que sur un ou deux côtés et le reste est encore blanc cru ou pâle. Il est allé au braise trop vite.",
            "action": "Continuer à tourner et à saisir jusqu'à ce que chaque surface ait une bonne couleur. Ne vous précipitez pas : le chashu pâle manque de profondeur caramélisée qui le rend distinctif."
          },
          {
            "state": "Perfect",
            "description": "Profond, même l'ambre doré tout autour — pas de taches pâles, pas de graisse brute. La peau s'est resserrée et brunie légèrement et commence à cloquer dans les endroits. Le fond de la poêle est brun, pas noir.",
            "action": "Retirez le rouleau et déglacez la poêle avec le saké avant de construire le liquide braisé."
          },
          {
            "state": "Overdone",
            "description": "Certaines sections sont brun foncé à noir et le fond est brûlant. La fumée acride s'élève de la casserole.",
            "action": "Tirez le rouleau et déglacez immédiatement avec le saké, grattant le fond. Trim n'importe quel patch vraiment carbonisé du rouleau avant le braisage."
          }
        ]
      },
      "feelCue": "Écoutez le son de la couture : cracher fort et agressif de la peau comme la graisse et l'humidité se volatilisent. Comme les surfaces sont sèches et brunes, le son passe d'un sifflement humide à un étourdissement creux plus sec. Lorsque vous entendez ce changement de chaque côté, il est prêt à tourner."
    },
    {
      "nodeId": "step_3",
      "action": "Braiser",
      "inputs": [
        "seared_chashu",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_09"
      ],
      "outputState": "braised_chashu",
      "instructions": "Retirez le rouleau marin dans une assiette. Déglacer la poêle chaude avec le saké, gratter tout le fond du fond. Ajouter la sauce de soja, le mirin, le sucre, l'eau, les tiges de pétoncle et les tranches de gingembre. Mélanger pour dissoudre le sucre. Remettez le rouleau dans la casserole — le liquide de braisage devrait venir à mi - haut du rouleau. Porter à la mijotée nue, puis couvrir d'un couvercle serré ou d'une cartouche de papier parchemin. Cuire sur le feu le plus bas qui maintient une mijotée douce, en tournant le rouleau toutes les 30 minutes de sorte que tous les côtés ont le même temps immergé, pendant 2 à 2,5 heures au total.",
      "visualCue": {
        "primaryTarget": "Le liquide de braisage est une sauce sombre, brillante de soja-mirin, bouillonnant régulièrement au plus bas simer possible. Le rouleau est basting dans le liquide, tournant progressivement plus sombre comme le sucre et la laque de soja sur la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 1 heure, la graisse à l'intérieur du rouleau est toujours ferme et blanche lorsqu'elle est sonnée avec une brochette. Le rouleau n'a pas encore atteint le stade de pleine performance.",
            "action": "Continuez à faire des larmes. La transformation de la graisse d'opaque et solide à translucide et tremblant se produit entre 1,5 et 2,5 heures selon l'épaisseur du ventre."
          },
          {
            "state": "Perfect",
            "description": "Après 2 à 2,5 heures, une broche glisse au centre du rouleau sans résistance. Les couches de graisse sont translucides et jiggly, pas opaques. L'extérieur du rouleau est acajou foncé et brillant du liquide de braisage. Le liquide de cuisson a diminué légèrement et est assez épais pour enrober une cuillère.",
            "action": "Retirer le rouleau et laisser refroidir à la température ambiante dans le liquide de cuisson, puis réfrigérer pendant la nuit."
          },
          {
            "state": "Overdone",
            "description": "Le liquide de braisage a réduit à une glaçure très épaisse, presque jammy qui commence à coller et à brûler. Le rouleau s'effondre ou la ficelle s'est détachée de la graisse ayant complètement dissous.",
            "action": "Ajouter de l'eau dans la poêle pour sauver la sauce et retirer le rouleau du feu. La viande est probablement très tendre — manipuler avec soin et procéder directement au refroidissement."
          }
        ]
      },
      "feelCue": "Après 2 heures, sonder le centre du rouleau avec une broche en métal mince. Il devrait glisser dedans et dehors sans aucune résistance, comme pousser à travers le beurre froid. Tenez la brochette contre votre poignet : elle doit se sentir assez chaude au centre (indiquant que le cœur a atteint la température). S'il y a une spirosité ou une résistance, donnez-lui encore 20 minutes."
    },
    {
      "nodeId": "step_4",
      "action": "Réfrigérer",
      "inputs": [
        "braised_chashu"
      ],
      "outputState": "chilled_chashu",
      "instructions": "Laisser refroidir le chashu dans le liquide de braisage à température ambiante, puis transférer le rouleau (toujours dans son liquide de braisage) au réfrigérateur et refroidir pendant la nuit, ou au moins 4 heures. Le refroidissement accomplit deux choses: la graisse se solidifie, rendant possible un slice propre (chashu chaud est trop doux pour trancher proprement), et le rouleau continue d'absorber le liquide de braisage comme il se refroidit, approfondissant la pénétration de la saveur. Le liquide de braisage réfrigéré sera mis sur un gel sombre et jiggly – réservez-le comme tare ou glaçure pour d'autres applications.",
      "visualCue": {
        "primaryTarget": "Le rouleau chashu réfrigéré est une acajou profonde, laquée et brillante. En tranches froides, chaque rond montre une spirale parfaite de viande extérieure foncée caramélisée et de couches de gras pâle à translucide. Le liquide de braisage a gelé autour.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le rouleau est encore chaud et la graisse est trop molle pour être coupée proprement — il frotte et grince plutôt que de couper en rond.",
            "action": "Retourner au réfrigérateur pendant au moins 3 heures supplémentaires. La patience détermine ici directement la qualité des tranches finales."
          },
          {
            "state": "Perfect",
            "description": "Froid, ferme, tranché. Chaque tranche de 1 cm coupe proprement et tient sa forme spirale. La graisse est réglée mais tremble encore légèrement lorsqu'elle est manipulée — translucide et presque gélatineuse plutôt que blanche et solide.",
            "action": "Couper à l'épaisseur désirée et réchauffer brièvement dans le liquide de cuisson ou dans une poêle chaude avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Le rouleau a refroidi si longtemps (plus de 3 jours) que la graisse a commencé à sécher et l'extérieur a perdu son éclat et est devenu légèrement gris.",
            "action": "Retirez la ficelle, replacez-la dans le liquide de cuisson et réchauffez doucement pour rafraîchir la surface avant de trancher et de servir."
          }
        ]
      },
      "feelCue": "Un rouleau de chashu bien réfrigéré se sent dense et lourd, avec les couches de graisse fixées mais à peine — appuyez sur un doigt contre la surface et il donne légèrement avant de ressortir. S'il se sent complètement rigide comme le beurre froid-réfrigérateur, laissez-le refroidir à température ambiante pendant 10 minutes avant de couper pour nettoyer, plus encore les coupes."
    },
    {
      "nodeId": "step_5",
      "action": "Glacer",
      "inputs": [
        "chilled_chashu"
      ],
      "outputState": "finished_chashu",
      "instructions": "Pour servir, couper la ficelle avec des ciseaux et couper le rouleau réfrigéré en rondelles de 8 à 12 mm d'épaisseur. Pour le service de ramen, chauffer une petite poêle antiadhésive ou en fonte à feu moyen-vif jusqu'à ce qu'elle commence à fumer. Placez les tranches de chashu sans huile — elles transportent suffisamment de gras rendu par le braise. Semer pendant 45 à 60 secondes de chaque côté jusqu'à ce que les bords caramélisent et char aux points et que la surface prend sur un char laqué glorieux. Alternativement, brosser les tranches avec un peu de liquide de braisage gelé et les torcher brièvement ou placer sous une grille très chaude pendant 60 secondes pour la laquage et caraméliser la surface.",
      "visualCue": {
        "primaryTarget": "Chaque tranche de chashu finie est un rond foncé, brillant, caramélisé avec un char aux bords. La graisse est translucide et tremblante, la viande acajou foncé. Dans le bol il brille comme du bois laqué.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les tranches sont simplement chauffées à travers — pâle, sans aucune couleur caramélisée sur la surface. Ils ont l'air gris plutôt que laqués.",
            "action": "Retourner dans une poêle plus chaude ou leur donner 30 secondes de plus sous le grille-pain. Chashu a besoin de chaleur de surface pour caraméliser et laquer, pas seulement la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Arêtes acajoues profondes avec des points d'omble, une surface brillante, laquée, et une couche de graisse qui est translucide et frémissante. L'arôme est de soja-caramel et de porc rôti. Placé dans un bol de ramen, il fait fleurir le bouillon avec une piste de graisse de porc doré.",
            "action": "Déposer immédiatement dans le bol de ramen, ou servir de garniture de donburi avec du riz cuit à la vapeur et une bruine de tare liquide."
          },
          {
            "state": "Overdone",
            "description": "Les tranches sont uniformément noires, la graisse s'est complètement extraite, et la viande est sèche et crayeuse. Le sucre dans le liquide de cuisson a brûlé à l'amertume.",
            "action": "Couper les surfaces carbonisées. L'intérieur peut encore être comestible — servir avec du liquide de braisement supplémentaire sur le côté pour ajouter de l'humidité."
          }
        ]
      },
      "feelCue": "Une tranche de chashu parfaite, maintenue entre les baguettes, devrait se sentir lourde avec sa propre graisse, à peine tenir ensemble. La couche de graisse devrait être presque translucide lorsqu'elle est retenue contre la lumière, comme l'ambre. Lorsque vous le mangez, la graisse doit se dissoudre instantanément sur la langue, riche mais pas lourd, suivi par l'omble de soja profond et doux-mirin de la viande."
    }
  ]
};
