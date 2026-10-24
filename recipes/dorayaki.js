export default {
  "repoId": "master_japanese_dorayaki_001",
  "parentRepoId": null,
  "slug": "dorayaki",
  "author": "ForkRecipe Kitchen",
  "title": "Dorayaki",
  "description": "Deux pancakes brun cuivre, parfumés au miel, sandwichant une épaisse couche d'anko, pâte de haricots azuki rouges sucrés. Les crêpes sont tendres et légèrement printanières à partir de mirine et de bicarbonate de soude, leurs bords sont clairement définis et leur surface est uniforme en ambre mat.",
  "cuisine": "Japonais",
  "culture": "Wagashi",
  "category": "desserts",
  "tags": [
    "Crêpe",
    "haricots rouges",
    "Japonais",
    "doux",
    "végétarien"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "50 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 8,
    "salty": 1,
    "sour": 0,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de gâteau (ou fécule de maïs à usage général + 10%)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Farine polyvalente"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Binder",
      "name": "Œufs (ensemble, température ambiante)",
      "ratioValue": 3,
      "defaultUnit": "pieces",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 2.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Chérie",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "sirop de maïs léger"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Solvent",
      "name": "Mirin (Hon-mirin)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Leavener",
      "name": "Soda au four (bicarbe)",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Sweetener",
      "name": "Tsubuan ou koshian (pâte de haricots rouges lisse)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "pâte de haricots blancs",
        "crème de marron"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile neutre (pour poêle)",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fouetter",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "egg_mixture",
      "instructions": "Dans un bol à mélange moyen, fouetter les œufs avec du sucre, du miel et du mirin jusqu'à ce que le sucre se dissout et que le mélange soit pâle, moelleux et augmenté en volume — environ 2 minutes de sifflement vigoureux. Le mélange doit former un ruban épais qui tient sa forme momentanément lorsque vous soulevez le fouet. Cette aération donne aux crêpes dorayaki leur léger rebond caractéristique et même miettes. Ne vous laissez pas aller — il est essentiel d'être pâle et volumineux.",
      "visualCue": {
        "primaryTarget": "Mélange jaune pâle brillant qui tombe du fouet dans un large ruban plat qui se replie sur lui-même et tient sa forme pendant 2-3 secondes avant de se dissoudre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Jaune et liquide — peu de volume gagné. Débarrassez-vous du fouet dans un ruisseau mince.",
            "action": "Continuez à fouetter. Volume et pâleur sont vos marqueurs — vous ne pouvez pas précipiter cette aération."
          },
          {
            "state": "Perfect",
            "description": "Couleur crème pâle, augmenté à presque double volume, étape de ruban atteint. Des odeurs de miel et d'œuf.",
            "action": "Ajouter la farine tamisée et le levain."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est très raide et tient des sommets comme la meringue — vous l'avez trop aéré en le battant trop vigoureusement.",
            "action": "Faites attention. La pâte peut être dure, mais elle fonctionnera probablement encore."
          }
        ]
      },
      "feelCue": "Le mélange doit se sentir léger et aéré quand vous faites glisser une cuillère à travers elle - un peu plus de résistance que l'eau mais beaucoup plus léger que la pâte à gâteau ordinaire."
    },
    {
      "nodeId": "step_2",
      "action": "Incorporer délicatement",
      "inputs": [
        "egg_mixture",
        "ing_01",
        "ing_06",
        "ing_07"
      ],
      "outputState": "dorayaki_batter",
      "instructions": "Farine de gâteau tamisée sur le mélange d'oeufs. Dissoudre le bicarbonate de soude dans de l'eau froide et ajouter dans le bol. Pliez tout ensemble avec une spatule de silicone en utilisant des mouvements doux J-temps — couper le centre, balayer sous le fond, plier sur le dessus. Faites tourner le bol à 90 degrés et répétez. Arrêtez dès qu'aucune farine sèche n'est visible. Le surmélange développe le gluten et rend les crêpes difficiles plutôt que tendres. Reposez la pâte à température ambiante pendant 15 minutes pour permettre à la farine de s'hydrater complètement et au bicarbonate de soude de s'activer.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, uniformément pâle qui coule de la spatule dans un ruban large et mince. Pas de stries de farine. Quelques petites bulles visibles à la surface du bicarbonate de soude.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des bouts de farine encore visibles au fond du bol.",
            "action": "Deux plis plus doux — mais attention, vous êtes près de la limite."
          },
          {
            "state": "Perfect",
            "description": "Doux, uniforme, légèrement plus épais que la pâte crépe. Une bulle ou deux surfaces de la réaction de bicarbonate de soude. Ça sent peu le miel.",
            "action": "Reposez-vous 15 minutes. Ne remuez plus."
          },
          {
            "state": "Overdone",
            "description": "Batter est devenu élastique et tire en arrière que vous versez. Le gluten s'est développé.",
            "action": "Reposez-vous 20 minutes, le gluten se détendrea. Les crêpes seront légèrement moins tendres mais encore comestibles."
          }
        ]
      },
      "feelCue": "La pâte reposée devrait se sentir presque soyeuse car elle sort de la spatule — pas de traction, pas de résistance. S'il est extensible ou caoutchouteux, le gluten est surdéveloppé."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "dorayaki_batter",
        "ing_09"
      ],
      "outputState": "cooked_pancakes",
      "instructions": "Chauffer une poêle antiadhésive à fond plat ou une grille sur la chaleur la plus basse possible. Badigeonner avec le film d'huile le plus fin possible, puis essuyer l'excédent avec une serviette en papier — vous voulez juste assez d'huile pour éviter de coller, pas assez pour frire. Verser une louche de pâte (environ 60 ml) au centre de la poêle à partir d'une hauteur d'environ 5 cm. La pâte s'étendra naturellement en rond — ne la répandez pas. Cuire jusqu'à ce que la surface entière soit réglée et que les bords soient mats et secs, et que de minuscules bulles se lèvent et éclatent à travers la surface du bord au bord (2–3 minutes). Flip une fois avec une spatule mince. Cuire le deuxième côté pendant 1 minute seulement — il sera légèrement plus pâle que le premier. Empiler sur une assiette recouverte d'une serviette humide pour garder doux.",
      "visualCue": {
        "primaryTarget": "Premier côté : uniforme brun-ambre, mat. Deuxième côté : légèrement plus pâle, doré au miel. Les deux côtés ont une forme de disque mince, plate et uniforme sans bords arrondis.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le premier côté est en or pâle avec des taches foncées. Les battements sur la surface sont encore humides et brillants — pas encore fixés.",
            "action": "Attendez que les bulles couvrent toute la surface et que les bords soient complètement secs avant de retourner."
          },
          {
            "state": "Perfect",
            "description": "Riche ambre de premier côté avec un léger reflet mat. Nettoyer la décharge de la casserole. Pas de pâte crue à la surface. Deuxième côté au miel.",
            "action": "Mettez sous un chiffon humide. Paire et remplir quand il est assez frais pour manipuler."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé avec des bords secs et durs. Des odeurs de sucre brûlé.",
            "action": "Abaissez la chaleur pour les crêpes restantes. Les dorayakis surnommés sont encore comestibles mais perdent leur texture douce et oreiller."
          }
        ]
      },
      "feelCue": "Les crêpes Dorayaki parfaitement cuites doivent se sentir comme un chiffon de chamois doux — lisse, souple, légèrement fléchissant lorsque vous appuyez sur le centre. Si les bords se sentent raides et comme des craquelins, la chaleur était trop élevée."
    },
    {
      "nodeId": "step_4",
      "action": "Assembler",
      "inputs": [
        "cooked_pancakes",
        "ing_08"
      ],
      "outputState": "finished_dorayaki",
      "instructions": "Faire correspondre les crêpes en paires de taille similaire. Placez un crêpe à plat. Spoon 2–3 cuillerées à soupe d'anko dans le centre et l'étendre doucement à moins de 1 cm du bord – il s'étendra plus loin lorsque le crêpe supérieur est pressé. Placez le deuxième crêpe côté plat sur le dessus. Appuyez légèrement au centre pour que le remplissage atteigne les bords uniformément mais ne déborde pas. Le profil doit être un dôme doux — épais au centre, se rétrécissant à un bord soigné. Envelopper individuellement dans un emballage en plastique et reposer 30 minutes — l'humidité du remplissage adoucit les crêpes plus loin et mélange les saveurs.",
      "visualCue": {
        "primaryTarget": "Un sandwich soigné avec un profil de dôme uniforme. L'anko est visible dans une bande mince, même autour du bord. Pas de débordement. Les deux surfaces de crêpes sont lisses et ambres.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le remplissage est épais seulement au centre, avec des crêpes nues visibles autour des bords.",
            "action": "Démonter et répartir plus uniformément le remplissage, en se rapprochant des bords."
          },
          {
            "state": "Perfect",
            "description": "Même l'épaisseur du centre au bord. Une bande d'anko sombre juste visible à l'équateur. Tout le sandwich est compact et soigné.",
            "action": "Enveloppe et repose-toi. Prêt à manger."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage a débordé et coule sur les côtés.",
            "action": "Utilisez un bout de doigt humide pour nettoyer les bords avant d'envelopper. Réduire la quantité de remplissage sur le prochain lot."
          }
        ]
      },
      "feelCue": "Un dorayaki reposé devrait se sentir doux et un peu céder à travers tout le chemin lorsque vous appuyez doucement sur le haut — le remplissage devrait repousser avec une résistance douce, même. Si les bords se sentent raides, ils ont besoin de plus de temps de repos."
    }
  ]
};
