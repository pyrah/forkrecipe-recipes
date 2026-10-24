export default {
  "repoId": "master_japanese_hokkaido_milk_bread_001",
  "parentRepoId": null,
  "slug": "hokkaido-milk-bread",
  "author": "ForkRecipe Kitchen",
  "title": "Pain de lait Hokkaido",
  "description": "Impossiblement doux et oreiller, chaque tranche de pain au lait Hokkaido se déchire dans de longues feuilles soyeuses comme du tissu — douce avec des produits laitiers chauds et légèrement vanille, avec une croûte dorée pâle qui reste tendre pendant des jours. Le tangzhong roux est le secret : une pâte de farine cuite qui enferme l'humidité dans la miette.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "breads",
  "tags": [
    "Japonais",
    "Pain de lait",
    "Tangzhong",
    "Flou",
    "Shokupan"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "4 hr",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de pain (haute teneur en protéines, 13 %)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "farine tout usage (ajouter 1 c. à thé de gluten de blé vital par tasse)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Farine de pain (pour tangzhong)",
      "ratioValue": 6,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Lait entier (pour tangzhong)",
      "ratioValue": 30,
      "defaultUnit": "%",
      "substitutions": [
        "2% lait"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Lait entier (pour pâte chaude)",
      "ratioValue": 30,
      "defaultUnit": "%",
      "substitutions": [
        "Lait d'avoine (moins riche)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Dairy",
      "name": "Crème lourde",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": [
        "lait évaporé"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 8,
      "defaultUnit": "%",
      "substitutions": [
        "sucre de ricin"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.8,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Leavener",
      "name": "levure instantanée",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "levure sèche active (proof dans le lait chaud d'abord)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Binder",
      "name": "Grand œuf (température ambiante)",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Beurre non salé (doublé)",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": [
        "Margarine"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Chauffer",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "tangzhong_paste",
      "instructions": "Dans une petite casserole, fouetter la farine de pain (6 %) dans le lait (30 %). Cuire à feu moyen-doux, en remuant constamment avec une spatule de silicone, jusqu'à ce que le mélange s'épaississe en pâte et atteigne 65 C (149 F) – environ 3-4 minutes. Vous le verrez passer d'un liquide nuageux à une pâte épaisse, lisse et brillante qui s'éloigne des côtés de la poêle. Retirer du feu, couvrir la surface avec un film de collage pour empêcher une peau, et refroidir à la température ambiante.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse, lisse et brillante semblable à un béchamel ou une crème légère. Pas de bosses. Retirez-vous proprement des côtés de la poêle lorsqu'ils sont remués.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est encore liquide et laiteux. N'a pas épaissi. Pas de résistance sur la spatule.",
            "action": "Continuer la cuisson et remuer. Elle s'épaissira soudainement — restez avec elle."
          },
          {
            "state": "Perfect",
            "description": "Une pâte épaisse et crémeuse. Spatule laisse un sentier à travers le centre qui se remplit lentement. La température est de 65 C.",
            "action": "Retirer, recouvrir de film et refroidir complètement avant d'utiliser."
          },
          {
            "state": "Overdone",
            "description": "La pâte est raide et collante; forme de grumeaux; odeur légèrement brûlée.",
            "action": "Jetez et recommencez — le tangzhong brûlé donne des armoiries au pain fini."
          }
        ]
      },
      "feelCue": "Plongez un bout de doigt — le tangzhong doit se sentir satiné et épais, enrobant votre doigt comme de la crème chaude. Il ne devrait pas s'écouler facilement, mais il ne devrait pas être raide non plus."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "tangzhong_paste"
      ],
      "outputState": "rough_dough",
      "instructions": "Dans un bol de mélangeur, mélanger la farine, le lait chaud, la crème, le sucre, le sel, la levure, l'oeuf et le tangzhong refroidi. Mélanger en bas avec le crochet de pâte pendant 3 minutes jusqu'à ce qu'une pâte chaotique se forme et qu'aucune farine sèche ne reste.",
      "visualCue": {
        "primaryTarget": "Une masse brute et cohésive sans poches sèches. Un peu collant. Le tangzhong lui donne une teinte légèrement collante, jaune pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Farine sèche encore visible au fond du bol.",
            "action": "Arrêtez et grattez les côtés. Mélanger 2 minutes de plus en bas."
          },
          {
            "state": "Perfect",
            "description": "Tout intégré dans une masse un peu collante et cohésive.",
            "action": "Augmentez la vitesse et commencez à développer du gluten."
          },
          {
            "state": "Overdone",
            "description": "Ne s'applique pas à ce stade de mélange — avancez.",
            "action": "Procéder à l'incorporation du beurre."
          }
        ]
      },
      "feelCue": "La pâte à ce stade est collante et douce — plus pâteuse que pâte à pain. Ceci est normal à cause du tangzhong et des enrichissements."
    },
    {
      "nodeId": "step_3",
      "action": "Pétrir",
      "inputs": [
        "rough_dough",
        "ing_10"
      ],
      "outputState": "developed_dough",
      "instructions": "Augmenter le mélangeur à moyen. Agenouillez 5 minutes jusqu'à ce que la pâte soit lisse. Ajouter le beurre adouci une cuillère à soupe à la fois, en attendant que chaque pièce s'intègre complètement avant d'ajouter la suivante. Après tout le beurre est dans, continuer à pétrir sur moyenne-haut pendant 8-10 minutes jusqu'à ce que la pâte est extrêmement lisse, élastique, et passe une vitre propre - une petite pièce étirée papier-mince entre vos doigts devrait être translucide sans déchirer.",
      "visualCue": {
        "primaryTarget": "Pâte satinée et brillante qui enveloppe le crochet proprement et gifle contre les côtés du bol rythmiquement. Une petite pièce étirée entre les doigts devient presque translucide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est encore rugueuse; un morceau étiré déchire immédiatement; le beurre n'est pas complètement absorbé (traces de graisse).",
            "action": "Continuez à pétrir. L'incorporation du beurre prend patience — ne précipitez pas les ajouts."
          },
          {
            "state": "Perfect",
            "description": "Doux et brillant comme de la soie polie; s'étire finement sans déchirer; ressort quand il est poché; nettoie le bol.",
            "action": "Ferment en vrac couvert dans un endroit chaud."
          },
          {
            "state": "Overdone",
            "description": "La toux est chaude; elle commence à avoir un aspect légèrement gras; elle perd son élasticité.",
            "action": "Réfrigérer 20 minutes. La pâte enrichie surchauffée peut provoquer une rupture des graisses."
          }
        ]
      },
      "feelCue": "La pâte enrichie est prête quand elle est aussi douce et fraîche que la soie, une douceur qui semble en contradiction avec la quantité qu'elle rapporte. Le beurre devrait être complètement invisible à la surface."
    },
    {
      "nodeId": "step_4",
      "action": "Faire lever",
      "inputs": [
        "developed_dough"
      ],
      "outputState": "bulk_fermented_dough",
      "instructions": "Placer la pâte dans un bol légèrement huilé, couvrir et laisser monter à 28 °C (82 °F) jusqu'à ce qu'elle double, soit environ 1 à 1,5 heure. Les pâtes enrichies augmentent plus lentement que les pâtes maigres: la graisse et le sucre retardent la levure. Ne vous précipitez pas avec l'excès de chaleur, qui peut fondre le beurre et compromettre la texture.",
      "visualCue": {
        "primaryTarget": "La toux a doublé et les dômes au-dessus du bord du bol. La surface est lisse et tendue, avec de petites bulles visibles sous la surface lorsque le bol est incliné vers la lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "A peine relevé; dense lorsqu'il est pressé; sent encore fortement la levure crue.",
            "action": "Attendez 30 minutes. Les pâtes enrichies sont patientes — ne les forcez pas."
          },
          {
            "state": "Perfect",
            "description": "Double; bombé; lent retour du printemps à la poke; sent sucrément la levure et le lait chaud.",
            "action": "Former et charger en étain."
          },
          {
            "state": "Overdone",
            "description": "S'effondrer lorsqu'il est poché; surface collante; odeur d'alcool vive.",
            "action": "Formez immédiatement et raccourcissez la preuve finale. L'arôme sera plus levant que l'idéal."
          }
        ]
      },
      "feelCue": "Appuyez sur deux doigts et tirez - la pâte devrait remplir les trous lentement, comme un matelas se rétablissant du poids. Si elle revient instantanément, c'est sous ; si les trous restent en permanence, c'est fini."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire au four",
      "inputs": [
        "bulk_fermented_dough"
      ],
      "outputState": "finished_milk_bread",
      "instructions": "Diviser la pâte en 3 portions égales. Rouler chaque plat, plier en tiers comme une lettre, puis rouler fermement dans un log. Placez les trois grumes côte à côte dans une boîte de pain Pullman beurrée de 23x13 cm (ou boîte de pain standard). Couvrir et conserver jusqu'à ce que la pâte soit à 2 cm au-dessus du bord de l'étain, environ 45 à 60 minutes. Badigeonner doucement avec le lavage des œufs (1 oeuf + 1 c. à soupe de lait). Cuire à 175 °C (350 °F) pendant 30 à 35 minutes jusqu'à ce que la température interne et l'or atteignent 93 °C.",
      "visualCue": {
        "primaryTarget": "Une couronne uniforme de couleur dorée-brun montant au-dessus du bord de l'étain. Les trois sections sont visibles sous forme de dômes arrondis qui ont fusionné en un seul pain. Le dessus est brillant du lavage des œufs.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pâle, croûte blonde; sent doux et spongieux lorsqu'il est pressé; recule des côtés de l'étain, mais le fond est encore pâle.",
            "action": "Revenez encore 5 minutes. Tente avec feuille si le dessus est brunissant trop vite."
          },
          {
            "state": "Perfect",
            "description": "Haut d'or profond; tire proprement des côtés d'étain; sonne creux lorsqu'il est tapé; température intérieure 93 C; les odeurs de cuisine de lait chaud et de caramel.",
            "action": "Laisser refroidir dans l'étain 5 minutes, puis transférer sur un rack. Ne pas couper pendant 30 minutes."
          },
          {
            "state": "Overdone",
            "description": "Couronne brun foncé, bords secs, miettes serrées et sèches.",
            "action": "Supprimer immédiatement. Envelopper dans un chiffon propre tout en restant chaud pour garder la croûte douce."
          }
        ]
      },
      "feelCue": "Pressez doucement les côtés du pain à travers un chiffon — il devrait donner comme un oreiller, presque redessiner complètement. Le tangzhong fonctionne. Un côté rigide et ferme signifie qu'il est trop cuit."
    }
  ]
};
