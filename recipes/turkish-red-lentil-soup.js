export default {
  "repoId": "master_turkish_turkish_red_lentil_soup_001",
  "parentRepoId": null,
  "slug": "turkish-red-lentil-soup",
  "author": "ForkRecipe Kitchen",
  "title": "Soupe de lentilles rouges turques (Mercimek Çorbası)",
  "description": "Une soupe d'ingrédients si simples que sa profondeur de saveur semble presque impossible — les lentilles rouges s'effondrent en velours en moins de 40 minutes, transformée par un beurre pul biber versé à la table en quelque chose de fumé, terreux, et tranquillement magnifique.",
  "cuisine": "Turquie",
  "culture": "Turquie",
  "category": "grains",
  "tags": [
    "turc",
    "lentilles",
    "Soupe",
    "végétalien",
    "Cumin"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
  "stars": 1760,
  "forks": 124,
  "contributors": 16,
  "license": "CC-BY-SA",
  "createdAt": "2024-02-08",
  "updatedAt": "2025-06-20",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 2,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Lentilles rouges, rincées",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "pois fendus jaunes (augmentation du temps de cuisson de 15 min)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon jaune en dés",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Carotte coupée en dés",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "patates douces"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Pul biber (poivre d'Alep)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "flocons de piment doux + paprika fumé, parties égales"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Stocks de légumes ou de poulet",
      "ratioValue": 300,
      "defaultUnit": "parts",
      "substitutions": [
        "eau (réduire légèrement le sel)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Beurre (pour l'huile de finition)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "huile d'olive pour version végétalienne"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Jus de citron frais, pour servir",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "sumac dissous dans l'eau"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sueurs aromatiques",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_07"
      ],
      "outputState": "sweated_aromatics",
      "instructions": "Chauffer l'huile d'olive dans un grand pot lourd à feu moyen. Ajouter l'oignon et la carotte et cuire, en remuant occasionnellement, pendant 8-10 minutes jusqu'à ce que l'oignon soit complètement doux et translucide et commence à montrer une faible couleur dorée aux bords. Ne précipitez pas cela — la douceur de l'oignon cuit lentement et de la carotte forme la base de saveur de la soupe, qui ne peut être ajoutée plus tard.",
      "visualCue": {
        "primaryTarget": "L'oignon est doux, translucide, et commence à devenir or pâle aux bords. La carotte a ramolli et a perdu sa croûte d'orange crue. Le fond du pot montre une fine couche de fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore blanc et légèrement croquant. La carotte est dure. Le mélange semble presque inchangé par rapport au cru.",
            "action": "Continuez à cuisiner. L'oignon cru dans la soupe de lentilles se traduit par une saveur forte et dure qui ne se moelle pas pendant la courte période de cuisson."
          },
          {
            "state": "Perfect",
            "description": "Un oignon doux et moelleux avec une faible teinte dorée. La carotte donne quand elle est pressée avec une cuillère. Le pot sent doux et salé.",
            "action": "Ajouter les épices et toast brièvement."
          },
          {
            "state": "Overdone",
            "description": "L'oignon devient d'or profond pour brunir et le fond de la casserole devient sombre. La carotte peut commencer à attraper.",
            "action": "Ajouter immédiatement un jet d'eau pour déglacer et réduire la chaleur. Passez à l'ajout d'épices."
          }
        ]
      },
      "feelCue": "L'oignon doit presser contre une cuillère en bois sans résistance — il doit se sentir presque liquide lorsqu'il est agité, s'effondrer plutôt que de rebondir."
    },
    {
      "nodeId": "step_2",
      "action": "Ajouter les épices et les lentilles",
      "inputs": [
        "sweated_aromatics",
        "ing_01",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_10"
      ],
      "outputState": "soup_base",
      "instructions": "Ajouter le cumin et la moitié du pul biber dans le pot et remuer constamment pendant 60 secondes jusqu'à ce que les épices soient parfumées et grillées dans la graisse — c'est ce qu'on appelle la floraison et il active les composés de saveur soluble dans la graisse que l'eau seule ne peut pas extraire. Ajouter les lentilles rouges rincées et mélanger pour enrober l'huile épicée. Verser le bouillon, porter à ébullition, puis laisser mijoter régulièrement. Cuire à découvert pendant 20 à 25 minutes, en écrémant toute mousse qui monte dans les 5 premières minutes, jusqu'à ce que les lentilles aient complètement dissous dans le liquide.",
      "visualCue": {
        "primaryTarget": "Une soupe épaisse et uniforme orange-or sans grains visibles de lentilles. La surface doit à peine s'enrouler avec une mijotée douce.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les lentilles sont encore visibles sous forme de granules distincts. La soupe est fine et aqueuse. Certaines lentilles résistent à la mastication lorsqu'elles sont pressées contre le côté du pot.",
            "action": "Continuez à mijoter. Les lentilles rouges peuvent prendre jusqu'à 30 minutes pour s'effondrer complètement, surtout si l'eau est dure."
          },
          {
            "state": "Perfect",
            "description": "Liquide orange-or parfaitement uniforme. Il ne reste plus de lentilles entières. La soupe est épaisse et coule lentement quand vous la remuez. Ça sent le cumin et la lentilles sucrées.",
            "action": "Mélanger jusqu'à douceur, puis assaisonner et servir."
          },
          {
            "state": "Overdone",
            "description": "La soupe a considérablement diminué et est maintenant très épaisse et amylacée. De petites taches sont capturées sur le fond du pot.",
            "action": "Ajouter le bouillon chaud ou l'eau par paliers, en remuant pour rétablir une consistance versable. Assaisonner encore après éclaircir."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère en bois sur le fond de la casserole — elle devrait laisser un chemin clair pendant 2 secondes avant que la soupe ne retombe, indiquant la bonne consistance."
    },
    {
      "nodeId": "step_3",
      "action": "Mélanger jusqu'à douceur",
      "inputs": [
        "soup_base"
      ],
      "outputState": "blended_soup",
      "instructions": "Retirer la casserole du feu. À l'aide d'un mélangeur d'immersion, mélanger la soupe directement dans la casserole jusqu'à ce qu'elle soit complètement lisse, soit environ 2 minutes de mélange continu. Alternativement, transférer en lots dans un mélangeur de stand (remplir seulement à mi-chemin, couvrir avec une serviette de cuisine, et tenir fermement le couvercle — la soupe chaude se développe). La soupe finie doit être veloutée sans texture fibreuse des peaux de lentilles. Si trop épais, ajouter le bouillon chaud pour atteindre une consistance versable similaire à la crème lourde.",
      "visualCue": {
        "primaryTarget": "Une soupe lisse, brillante et orangée sans texture lorsqu'une petite quantité est frottée entre le pouce et le doigt.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La soupe a encore une texture granuleuse: certaines peaux de lentilles sont intactes et visibles. La surface a un aspect mat, légèrement rugueux.",
            "action": "Continuez à mélanger. Un mélangeur d'immersion a besoin de 2 à 3 minutes complètes de mélange soutenu pour obtenir une soupe de lentilles rouges vraiment lisse."
          },
          {
            "state": "Perfect",
            "description": "Gloire, surface orange complètement lisse. Lorsque vous en prenez sur une cuillère et que vous passez votre doigt dessus, la surface est comme de la soie liquide.",
            "action": "Assaisonner, faire la garniture de beurre, et servir."
          },
          {
            "state": "Overdone",
            "description": "La survenance peut rendre la soupe collante — c'est inhabituel mais possible avec des lentilles très féculentes. La soupe a l'air légèrement gommée.",
            "action": "Ajouter le bouillon chaud à mince légèrement. La texture sera normalisée lors du réchauffement."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité de soupe mélangée entre votre pouce et l'index — elle devrait se sentir absolument sans friction, comme toucher satin chaud, sans particules de lentilles gritty."
    },
    {
      "nodeId": "step_4",
      "action": "Faire finir le beurre et servir",
      "inputs": [
        "blended_soup",
        "ing_08",
        "ing_05",
        "ing_09"
      ],
      "outputState": "finished_lentil_soup",
      "instructions": "Dans une petite casserole, faire fondre le beurre à feu moyen jusqu'à ce qu'il mousse et commence à brunir. Ajouter le reste du pul biber hors du feu : il s'étourdira et fleurira immédiatement, tournant le beurre un orange rouge vif. Déposer la soupe dans des bols chauds. Arrosez le beurre sur chaque bol dans une spirale fine du bord au centre. Servir immédiatement avec une généreuse pression de citron et de pain chaud. Le contraste entre le beurre rouge chaud et la soupe lisse est le plat.",
      "visualCue": {
        "primaryTarget": "Une piscine de soupe lisse orange-or avec une spirale de beurre rouge-orange vif sur le dessus, toujours étourdissant quand il arrive à la table.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est jaune pâle et pas encore bruni. Le pul biber ajouté à elle semble humide et terne plutôt que d'éclater.",
            "action": "Continuez à chauffer le beurre jusqu'à ce qu'il devienne doré. Le brunissement est essentiel — le beurre pâle ne donne aucune profondeur de noix."
          },
          {
            "state": "Perfect",
            "description": "Beurre doré-brun profond avec un bibard rouge orange vif. Ajouté à la soupe, il se trouve à la surface dans une piscine scintillante. La soupe sent la fumée et les noisettes.",
            "action": "Servir immédiatement — le beurre perd sa chaleur en 2 minutes."
          },
          {
            "state": "Overdone",
            "description": "Le beurre est passé au noir. Il sent brûlé plutôt que noisette, et le pul biber ajouté à elle est acride.",
            "action": "Jeter et faire frais. Le beurre fini ne prend que 3 minutes — il vaut la peine de recommencer."
          }
        ]
      },
      "feelCue": "Lorsque vous ajoutez le pul biber au beurre chaud hors du feu, le sizzle doit être immédiat et enthousiaste — un sifflement aigu qui remplit la cuisine de l'odeur de poivre fumé et de noisette."
    }
  ]
};
