export default {
  "repoId": "master_nigerian_akara_bean_fritters_001",
  "parentRepoId": null,
  "slug": "akara-bean-fritters",
  "author": "ForkRecipe Kitchen",
  "title": "Akara (Frises de pois aux yeux noirs)",
  "description": "Des petits pois aux yeux noirs moulurent dans une pâte légère et aérée — leurs peaux sont enlevées de sorte que la pâte est pure blanche et propre — puis lâchée par des cuillerées dans de l'huile chaude où elles bouffent, deviennent dorées et développent une croûte qui craque tout en cachant un intérieur à la vapeur et à l'oreiller flanqué d'oignon et de chili.",
  "cuisine": "Nigérian",
  "culture": "Yoruba",
  "category": "grains",
  "tags": [
    "nigérien",
    "Pois aux yeux noirs",
    "Amandes",
    "végétalien",
    "frits"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "1 hr",
  "ratioSystem": "parts",
  "stars": 1560,
  "forks": 140,
  "contributors": 18,
  "license": "CC-BY-SA",
  "createdAt": "2025-03-08",
  "updatedAt": "2026-05-14",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 2,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Pois secs aux yeux noirs, trempés pendant la nuit et peaux enlevées",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "pois aux yeux noirs en conserve, bien rincés et peaux frottées"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon blanc, grossièrement haché",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Bonnet de scotch frais ou poivre habanero, haché",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "poudre de Cayenne"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Eau (pour mélanger la pâte pour corriger la consistance)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile de légumes ou d'arachide (pour friture profonde)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Peler et tremper les haricots",
      "inputs": [
        "ing_01"
      ],
      "outputState": "peeled_beans",
      "instructions": "Faire tremper les pois secs aux yeux noirs dans l'eau froide pendant au moins 6 heures ou pendant la nuit. Égoutter, puis frotter vigoureusement les haricots entre vos paumes dans un bol d'eau douce — les peaux se détacheront et flotteront vers le haut. Éliminez les peaux et égouttez, répétez 3 à 4 fois jusqu'à ce que la plupart des peaux soient enlevées. Les haricots propres, sans peau, produisent une pâte akara blanche et moelleuse; les haricots avec des peaux encore sur faire les friseuses denses et grisées. Même un trempage de 20 minutes et un frottement agressif élimineront la plupart des peaux.",
      "visualCue": {
        "primaryTarget": "Le bol de haricots est rempli de pois blancs crémeux avec la plupart des peaux enlevées. L'eau de trempe est relativement claire avec seulement quelques fragments de peau errante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Beaucoup de haricots ont encore des peaux gris-vert attachées. L'eau est brune avec un pigment de peau libéré.",
            "action": "Frottez et patinez plus agressivement. Les haricots sans peau sont non négociables pour la texture blanche et aérée de l'akara authentique."
          },
          {
            "state": "Perfect",
            "description": "Les haricots sont principalement blancs et la plupart des peaux flottent. Quelques peaux restantes sont acceptables - l'enlèvement complet de la peau est une activité intensive et un petit nombre restant est traditionnel.",
            "action": "Égoutter et procéder au mélange."
          },
          {
            "state": "Overdone",
            "description": "Les haricots sursautés (plus de 18 heures) ont commencé à fermenter légèrement et à sentir l'odeur aigre. L'intérieur est devenu waterlogged et doux.",
            "action": "À utiliser immédiatement. Le léger ferment peut ajouter une saveur intéressante mais la texture est plus douce — ajouter un peu moins d'eau lors du mélange."
          }
        ]
      },
      "feelCue": "Ramassez un haricot pelé et pressez - le entre vos doigts — il devrait être ferme, ferme et légèrement glissant. Il devrait se diviser en deux avec la pression des doigts, révélant un intérieur jaune pâle."
    },
    {
      "nodeId": "step_2",
      "action": "Mélanger la pâte",
      "inputs": [
        "peeled_beans",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "akara_batter",
      "instructions": "Combinez les haricots pelés, l'oignon, le bonnet de scotch, le sel et juste assez d'eau pour aider le mélangeur à courir — commencez par 2 cuillères à soupe et ajoutez plus parcimonieusement. Mélanger jusqu'à très doux, environ 2–3 minutes. Le but est une pâte épaisse, lisse, moelleuse, pas un liquide mince versable. Transférer dans un bol et battre vigoureusement la pâte à l'aide d'une cuillère en bois ou d'un mélangeur à main pendant 3 à 5 minutes. La pâte devrait doubler légèrement en volume et devenir plus pâle lorsque l'air est travaillé.",
      "visualCue": {
        "primaryTarget": "La batterie est épaisse, lisse et pâle, presque blanche. Lorsqu'une cuillère est retombée dans le bol, elle est assise dans un monticule plutôt que de s'étendre instantanément. La surface semble légèrement aérée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La batterie est encore granuleuse à partir de sous-bois ou épaisse et pâteuse à partir de trop peu d'eau. Il produira de denses et lourdes friseuses à l'intérieur gris.",
            "action": "Mélanger encore 2 minutes. Si elle est trop épaisse, ajoutez de l'eau à la moitié d'une cuillère à café à la fois — la pâte doit être épaisse mais non pas pâteuse."
          },
          {
            "state": "Perfect",
            "description": "Une pâte lisse, pâle et épaisse qui tombe de la cuillère dans des cuillères lentes et lourdes. Une fois battu, il s'éclaircit en couleur et développe un aspect légèrement mousseux sur la surface. Il tient un monticule quand il est tombé.",
            "action": "Commencer à chauffer le mazout et faire frire immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La batterie a été surminée avec trop d'eau — elle verse comme une pâte à crêpes. Les beignets s'étaleront à plat et les frites minces, pas bouffées.",
            "action": "Ajouter plus de haricots pelés ou une cuillère à soupe de farine de haricots et mélanger brièvement pour épaissir. Testez en déposant une cuillère à café dans l'huile — si elle se répand à plat, la pâte est encore trop fine."
          }
        ]
      },
      "feelCue": "Faites monter la pâte avec une cuillère en bois et sentez le poids — elle devrait se sentir substantielle, presque résistante à la chute. Lorsque vous soulevez la cuillère et la laissez tomber, la pâte doit tenir sa forme pendant 1-2 secondes avant de s'effondrer."
    },
    {
      "nodeId": "step_3",
      "action": "Faire revenir l'huile chaude",
      "inputs": [
        "akara_batter",
        "ing_06"
      ],
      "outputState": "fried_akara",
      "instructions": "Chauffer suffisamment d'huile dans une casserole moyenne pour donner une profondeur d'au moins 5 cm. Chaleur à 175 °C (une petite goutte de pâte doit s'étourdir et monter immédiatement). À l'aide de deux cuillères ou d'une petite cuillère à crème glacée, déposez les cuillères de pâte délicatement dans l'huile — ne foulez pas la casserole, 4-5 à la fois. Faire frire pendant 3-4 minutes au total, en tournant doucement à mi-chemin, jusqu'à ce qu'il y ait un brun doré profond de tous les côtés. Les beignets souffleront et deviendront ronds pendant qu'ils frirent. Retirer avec une cuillère à fentes et égoutter sur les serviettes en papier.",
      "visualCue": {
        "primaryTarget": "Les akaras sont des sphères arrondies, dorées, avec une croûte croustillante et uniforme. Ils bob activement à la surface de l'huile, gonflés et tenant leur forme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les beignets sont d'or pâle et doux. Ils s'aplatissent lorsqu'ils sont pressés plutôt que de retomber. L'intérieur est gummy et sous-cuit.",
            "action": "Retourner à l'huile et continuer à frire. La température de l'huile a peut - être baissé — vérifiez avec un thermomètre et attendez qu'il se rétablisse avant d'ajouter plus de lots."
          },
          {
            "state": "Perfect",
            "description": "De couleur dorée, ronde et ferme. Retirez doucement en appuyant avec une cuillère. Un léger bruit de crépitement lorsqu'il est retiré de l'huile. L'intérieur est moelleux et entièrement cuit à l'ouverture.",
            "action": "Égoutter et servir immédiatement — akara est le meilleur dans les 5 premières minutes de l'huile."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes sont brun foncé à brun rougeâtre, avec une odeur légèrement amère et surfriée. La croûte est très épaisse et dure.",
            "action": "Égoutter et bien éponger. L'intérieur est encore bon mais la croûte est amère. Réduire la température de l'huile de 10 °C pour le prochain lot."
          }
        ]
      },
      "feelCue": "Écoutez l'huile pendant que l'akara cuisine — le premier étourdissement fort et violent de la pâte froide frappant l'huile chaude devrait calmer à un craquage régulier et modéré que la croûte forme. Quand il se calme à ce crépitement constant, ils sont près de faire."
    },
    {
      "nodeId": "step_4",
      "action": "Égoutter et servir",
      "inputs": [
        "fried_akara"
      ],
      "outputState": "finished_akara",
      "instructions": "Retirer l'akara avec une cuillère à fentes et égoutter sur une plaque en papier doublée de serviette. Servir immédiatement — l'akara chaud au pic croustillant est le point entier du plat. À Lagos, l'akara est vendue dans les stands de rue tôt le matin aux côtés de l'ogi (porridge de maïs fermenté). Servir avec une sauce à tremper de tomate, d'oignon et de poivre si désiré. Akara fait à l'ordre, mangé dans la rue, toujours crépitant du pétrole, est l'une des grandes expériences de petit déjeuner de l'Afrique de l'Ouest.",
      "visualCue": {
        "primaryTarget": "Des beignets dorés-bruns assis debout sur la plaque, visiblement arrondis, avec de l'huile qui brille toujours sur la surface. Une friteuse fendue montre un intérieur uniforme, moelleux et jaune pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les amers se sont effondrés à plat après avoir drainé — l'air incorporé pendant les coups s'est échappé. L'intérieur est dense et mal cuit.",
            "action": "Elles sont encore comestibles mais pas idéales. Assurez-vous que l'huile est assez chaude pour le prochain lot — l'huile froide permet à l'air de s'échapper avant les ensembles de croûtes."
          },
          {
            "state": "Perfect",
            "description": "Rond, gonflé, doré. Lorsqu'elle est fendue, l'intérieur est aéré et moelleux, jaune pâle, entièrement cuit et parfumé d'oignon et de chili. La croûte craque contre les dents.",
            "action": "Mangez immédiatement. C'est la nourriture."
          },
          {
            "state": "Overdone",
            "description": "Akara a pu s'asseoir plus de 10 minutes — la croûte s'est adoucie et les beignets se sont dégonflés. Le crackle est parti.",
            "action": "Faites clignoter dans un four à 200 °C pendant 3 minutes pour restaurer la croûte. Ne jamais satisfaire comme frais frit, mais récupérable."
          }
        ]
      },
      "feelCue": "Prenez un akara frais et pressez-le très légèrement — la croûte devrait résister à vos doigts avec une sensation de craquement fragile, tandis que l'intérieur donne doucement à l'intérieur, comme une coquille creuse remplie de mousse aérée."
    }
  ]
};
