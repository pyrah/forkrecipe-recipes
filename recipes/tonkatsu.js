export default {
  "repoId": "master_japanese_tonkatsu_001",
  "parentRepoId": null,
  "slug": "tonkatsu",
  "author": "ForkRecipe Kitchen",
  "title": "Tonkatsu",
  "description": "Une coupe de porc épaisse enrobée d'armure de panko, frite à une croûte dorée éclatante tandis que le porc à l'intérieur reste à peine rougi et juteux — yōshoku à son plus satisfaisant, servi avec du chou déchiqueté et la sauce sucrée qui le rend complet.",
  "cuisine": "Japonais",
  "culture": "Yōshoku japonais",
  "category": "proteins",
  "tags": [
    "porc",
    "Japonais",
    "tonkatsu",
    "frites",
    "Panko",
    "yoshiku",
    "Coupette"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "40 min",
  "ratioSystem": "parts",
  "stars": 2190,
  "forks": 289,
  "contributors": 65,
  "license": "CC-BY-SA",
  "createdAt": "2024-08-03",
  "updatedAt": "2025-02-14",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Coupe de longe de porc (2,5 cm d'épaisseur)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "filet de porc",
        "poitrine de poulet"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Pâte à pain Panko",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Farine à usage général",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Oeufs (battus)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "aquafaba"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile de friture neutre",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "huile végétale",
        "Saindoux"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel casher et poivre blanc",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Umami",
      "name": "sauce tonkatsu (bulldog ou similaire)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce Worcestershire mélangée au ketchup et à la sauce soja"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Temper et sec",
      "inputs": [
        "ing_01",
        "ing_06"
      ],
      "outputState": "prepared_cutlet",
      "instructions": "Utilisez un maillet de viande ou l'arrière d'une poêle lourde pour battre délicatement la découpe à une épaisseur égale de 2cm. Couper la bande de graisse et de tissu conjonctif autour du bord de la coupe à intervalles de 2 cm, ce qui empêche la coupe de frire pendant la friture. Assaisonner généreusement de sel et de poivre blanc des deux côtés. Laisser reposer à température ambiante pendant 15 minutes.",
      "visualCue": {
        "primaryTarget": "Une coupe épaisse et uniforme avec une série de petites coupes le long du bord du capuchon gras, assaisonnée uniformément des deux côtés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'épaisseur de la découpe varie significativement sur toute sa surface — épaisse au centre, mince aux bords.",
            "action": "Pound les zones plus épaisses pour obtenir une épaisseur uniforme tout au long."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur constante du bord au bord. La casquette de graisse présente des morsures soignées à intervalles réguliers. L'assaisonnement est également appliqué.",
            "action": "Mettez en place la station de panification."
          },
          {
            "state": "Overdone",
            "description": "La découpe a été piquée trop fine ou les bouts dans le bouchon de graisse vont tout le chemin à travers la viande.",
            "action": "Continuez, mais sachez qu'il va cuire très rapidement — vérifiez la température interne tôt."
          }
        ]
      },
      "feelCue": "Exécutez un doigt sur la surface de la découpe — il devrait se sentir uniformément ferme sans patchs minces et moelleux. Le bouchon de graisse doit se sentir intact mais encoché à intervalles réguliers."
    },
    {
      "nodeId": "step_2",
      "action": "Cuire la coupe",
      "inputs": [
        "prepared_cutlet",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "breaded_cutlet",
      "instructions": "Mettre en place trois récipients peu profonds en séquence : farine, œuf battu, panko. Draguer la découpe dans la farine, en agitant chaque trace d'excès — un épais revêtement de farine crée une couche de gomme qui empêche le panko de se croquer correctement. Plonger dans l'œuf, laisser couler l'excès pendant 5 secondes. Appuyez fermement dans le panko, tournant et pressant à nouveau, en construisant des couches épaisses et dentelées. Plus vous appuyez agressivement sur le panko, plus la croûte est dramatique.",
      "visualCue": {
        "primaryTarget": "La découpe est complètement encastrée dans un revêtement uniforme et épais de panko sans oeuf ni chair visible. Le panko se dresse dans des crêtes et des crêtes dentelées plutôt qu'à plat.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Couverture mince et patchy panko avec le revêtement d'oeufs qui apparaît dans les endroits.",
            "action": "Appuyez fermement sur le panko supplémentaire sur les patchs nus, puis laissez reposer 5 minutes avant de frire."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur, même blindage panko avec une texture en trois dimensions. La découpe peut se tenir sur son bord sans perdre de revêtement.",
            "action": "Reposez-vous 5 minutes pour que le revêtement soit réglé avant de frire."
          },
          {
            "state": "Overdone",
            "description": "Panko est si épais et serré qu'il est devenu dense et uniforme plutôt que craggy.",
            "action": "Procéder — la croûte sera encore croustillante, si sa texture est légèrement plus dense."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur la découpe enduite — la surface du panko doit se sentir comme la surface d'un récif de corail, rugueux et tridimensionnel, non plat et lisse. Il devrait être bien collé lorsque vous secouez la découpe doucement."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "breaded_cutlet",
        "ing_05"
      ],
      "outputState": "fried_tonkatsu",
      "instructions": "Chauffer l'huile à 170°C (340°F) dans un pot suffisamment profond pour que l'huile monte à mi-chemin de la découpe. Testez avec une miette de panko – elle devrait couler, bob, puis étourdir immédiatement sans brunir en moins de 10 secondes. Abaissez la découpe et faites frire pendant 4 minutes de chaque côté sans déranger. La température la plus basse (par opposition à la friture standard) permet à la chaleur de pénétrer au centre avant que la croûte ne s'écrase.",
      "visualCue": {
        "primaryTarget": "Un flux constant et constant de petites bulles s'élevant uniformément de tous les côtés de la découpe. La croûte s'amplifie progressivement, passant du jaune pâle à un riche, voire ambre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est dorée après seulement 2 minutes et l'huile est agressivement bouillonnante et éclaboussante.",
            "action": "L'huile est trop chaude. Retirez la découpe, réduisez la température de l'huile à 170°C et essayez à nouveau."
          },
          {
            "state": "Perfect",
            "description": "Après 4 minutes de chaque côté : croûte d'or ambré profonde, bouillonnement modéré constant, température interne 63-65°C. La découpe flotte légèrement comme la graisse dans la viande rend.",
            "action": "Retirer et égoutter sur un support de fil, pas des serviettes en papier."
          },
          {
            "state": "Overdone",
            "description": "La croûte est brun foncé et le bouillonnement s'est presque arrêté; l'humidité a été éliminée.",
            "action": "Supprimer immédiatement. L'intérieur peut être sec. Le repos sur un rack aidera à redistribuer les jus restants."
          }
        ]
      },
      "feelCue": "Écoutez le pétrole — il devrait sonner comme une pluie régulière sur le toit, et non comme une tempête agressive qui craque. Lorsque le bouillonnement commence à ralentir et à se calmer, l'humidité est presque disparue et la coupure est presque terminée."
    },
    {
      "nodeId": "step_4",
      "action": "Repos",
      "inputs": [
        "fried_tonkatsu",
        "ing_07"
      ],
      "outputState": "finished_tonkatsu",
      "instructions": "Transférer sur un porte-fils et reposer pendant 3 minutes — jamais de serviettes en papier, qui piègent la vapeur et adoucissent la croûte de dessous. La chaleur de transfert apportera à l'intérieur un parfait 68°C. Couper en bandes de 2cm avec un couteau tranchant à l'aide d'une seule presse vers le bas — le sciage brise la croûte. Servir immédiatement avec la sauce tonkatsu sur ou aux côtés pour tremper, et le chou cru finement déchiqueté.",
      "visualCue": {
        "primaryTarget": "Lorsqu'il est tranché, l'intérieur est blanc pâle et juteux, avec un bleu rose très faible au centre. La croûte est complètement séparée de la viande en texture: crépitante, dorée et rigide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'intérieur est rose et les jus s'écoulent en rose clair lorsqu'ils sont pressés. Le centre se sent doux et productif.",
            "action": "Retourner à l'huile 2 minutes supplémentaires par côté, ou terminer dans un four à 180°C pendant 5 minutes."
          },
          {
            "state": "Perfect",
            "description": "L'intérieur est blanc avec le plus faible blush de rose. Les jus sont clairs. La croûte est complètement rigide. L'objectif est le contraste des textures, effroyables et tendrement juteuses.",
            "action": "Servir immédiatement."
          },
          {
            "state": "Overdone",
            "description": "L'intérieur est entièrement blanc, sans rose, et se sent ferme et sec lorsqu'il est pressé. Les jus sont absents.",
            "action": "Arrosez la sauce supplémentaire pour ajouter l'humidité. La prochaine fois, tirez à 63-65°C."
          }
        ]
      },
      "feelCue": "La première morsure doit présenter deux sensations simultanément : la fissure du panko qui se brise entre les dents, immédiatement suivie par le porc juteux et juteux. La sauce tonkatsu doit sentir le Worcestershire et les fruits — caramel et vinaigre."
    }
  ]
};
