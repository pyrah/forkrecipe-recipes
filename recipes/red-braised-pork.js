export default {
  "repoId": "master_chinese_red_braised_pork_001",
  "parentRepoId": null,
  "slug": "red-braised-pork",
  "author": "ForkRecipe Kitchen",
  "title": "Porc braisé rouge (Hong Shao Rou)",
  "description": "Dalles épaisses du ventre de porc fondent à travers trois heures de cuisson lente dans le vin Shaoxing et le soja foncé jusqu'à ce que la graisse devient translucide et la peau laque à une acajou profonde qui mijote comme du bois de rose poli. La sauce réduit à une glaçure tremblante qui enveloppe chaque morceau de douceur concentrée sous-cutée par l'anis étoilé et le fantôme du vin fermenté.",
  "cuisine": "Chinois",
  "culture": "Shanghainese",
  "category": "proteins",
  "tags": [
    "porc",
    "braise",
    "shanghainese",
    "hong-shao-rou",
    "Cuisson lente",
    "soja",
    "confort"
  ],
  "difficulty": 3,
  "activeTime": "40 min",
  "totalTime": "3 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Skin-on porc ventre, coupé en cubes de 4 cm",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "épaule de porc (moins de graisse)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Solvent",
      "name": "Vin de riz shaoxant",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": [
        "sherry sec",
        "Saké"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "sauce de soja foncé (lao chou)",
      "ratioValue": 40,
      "defaultUnit": "ml",
      "substitutions": [
        "soja régulier + 1 c. à thé mélasse"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "sauce de soja légère",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre de roche (bing tang)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brun",
        "sucre granulé"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Anis étoilé",
      "ratioValue": 3,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Aboiement de Cassia ou bâtonnet de cannelle",
      "ratioValue": 1,
      "defaultUnit": "piece",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Allium",
      "name": "Échalons, liés dans un noeud",
      "ratioValue": 3,
      "defaultUnit": "stalks",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Aromatic",
      "name": "Gingembre frais, tranché 3 mm d'épaisseur",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Eau ou stock de porc léger",
      "ratioValue": 400,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "Saindoux"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanch",
      "inputs": [
        "ing_01"
      ],
      "outputState": "blanched_pork",
      "instructions": "Placez les cubes du ventre de porc dans un pot froid. Couvrir d'eau froide de 5 cm — en commençant par l'eau froide puise le sang et les impuretés progressivement, plutôt que de les sceller. Porter à ébullition à feu vif. Vous verrez une mousse gris-blanchâtre s'élever à la surface en 4 à 5 minutes; c'est la myoglobine et les protéines sanguines qui coagulent. Une fois que l'eau atteint un ébullition et que la mousse est importante, égouttez le porc immédiatement dans une calandre. Rincer chaque cube sous l'eau chaude courante, frotter toute mousse collante avec vos doigts. Ne pas utiliser d'eau froide — une chute soudaine de température peut resserrer les protéines et rendre le porc moins tendre. Sèche-toi avec des serviettes en papier. Cette étape n'est pas négociable : le sauter donne lieu à un liquide de braisage gris boueux au lieu de la sauce acajou laquée propre qui définit hong shao rou.",
      "visualCue": {
        "primaryTarget": "Nettoyer les cubes de porc gris avec la peau intacte et sans mousse ni sang visible sur aucune surface. La peau doit être légèrement serrée et opaque.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Rose aux surfaces coupées et mousse rouge encore formant. L'eau est visiblement sanglante et très nuageuse.",
            "action": "Continuer à bouillir encore 2 minutes, écrémer constamment, puis égoutter et rincer abondamment."
          },
          {
            "state": "Perfect",
            "description": "Uniformement gris-blanc sur toutes les surfaces, peau intacte, sans centre rose visible. L'eau de rinçage est presque claire. Les cubes se sentent fermes et propres.",
            "action": "Pat complètement sécher et préparer pour caraméliser le sucre."
          },
          {
            "state": "Overdone",
            "description": "Le porc commence à regarder cuit à travers plutôt que simplement blanchi — les surfaces intérieures sont sèches et serrées, et la peau commence à sucer.",
            "action": "Elle est trop cuite à des fins de blanchage, mais elle sera encore bien brassée. Procéder immédiatement et ne pas réduire le temps de brassage."
          }
        ]
      },
      "feelCue": "Chaque cube doit se sentir ferme mais pas raide — la protéine est fixée mais le collagène dans les couches graisseuses n'a pas encore commencé à s'adoucir. La peau doit se sentir tendue et un peu caoutchouteuse sous vos doigts."
    },
    {
      "nodeId": "step_2",
      "action": "Caramélisation",
      "inputs": [
        "ing_11",
        "ing_05"
      ],
      "outputState": "amber_caramel",
      "instructions": "Dans un grand wok à fond lourd ou un four hollandais, chauffer l'huile à feu moyen. Ajouter le sucre de roche et remuer lentement avec une spatule de bois pendant qu'il fond — le sucre de roche est lent à fondre par rapport au sucre granulé, et la patience compte ici. Le sucre formera d'abord des flaques claires et bouillonnantes, puis tournera en or pâle, puis en ambre. Regardez attentivement la couleur : vous voulez un ambre profond, la couleur du miel foncé, avant d'ajouter le porc. Ce sucre caramélisé est ce qui donne à hong shao rou sa couleur acajou caractéristique et la profondeur amère-doux que la sauce de soja seule ne peut pas reproduire. Retirer du feu s'il s'obscurcit trop rapidement — la chaleur résiduelle dans un wok peut mettre l'ambre en feu très rapidement.",
      "visualCue": {
        "primaryTarget": "Un liquide ambré brillant, sur la couleur du caramel foncé, bouillonnant lentement. Il doit sentir comme du beurre de coco — caramélisé et légèrement fumé — sans notes acrides ou brûlées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sucre est d'or pâle et encore très sucré, pas encore amer ou complexe. Il ne colorera pas adéquatement le porc.",
            "action": "Continuer à remuer à feu moyen pendant encore 1 à 2 minutes, en regardant attentivement."
          },
          {
            "state": "Perfect",
            "description": "Ambre profonde, comme le vieux whisky. Des odeurs de caramel amer et de fumée. Les bulles sont plus lentes et plus sirupeuses. Une goutte sur une assiette froide devient brun foncé.",
            "action": "Ajouter immédiatement les cubes de porc secs — ils crachent violemment, alors reculez."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé à noir, sent acride et amer. La fumée monte de la surface du wok.",
            "action": "Jetez le sucre et recommencez — le caramel brûlé rendra le plat tout entier amer et aucune quantité de graissage ne le réparera."
          }
        ]
      },
      "feelCue": "Penchez-vous sur le wok et respirez — lorsque l'odeur passe de la vanille douce à quelque chose de légèrement fumé et amer, comme les noisettes grillées, vous avez atteint le bon moment. Faites confiance à votre nez."
    },
    {
      "nodeId": "step_3",
      "action": "Sear",
      "inputs": [
        "amber_caramel",
        "blanched_pork"
      ],
      "outputState": "glazed_pork",
      "instructions": "Ajouter les cubes de porc secs au caramel chaud. Le sucre crachera agressivement — utilisez un écran d'éclaboussure ou reculez. Jetez le porc pour le mettre dans le caramel. Le côté de la peau est le plus important : appuyez sur le visage vers le bas dans le caramel pendant 1-2 minutes jusqu'à ce qu'il prenne une tache acajou profonde. Tourner les cubes de tous les côtés jusqu'à ce qu'ils soient uniformément enduits et foncés à un brun riche. La graisse de porc va commencer à rendre, en mélangeant avec le caramel. Cette phase d'étanchéité et de coloration prend 4 à 5 minutes au total. Ajouter les tranches de gingembre, le noeud de pétoncle, l'anis étoilé et l'écorce de cassie et mélanger pendant 30 secondes jusqu'à parfumer.",
      "visualCue": {
        "primaryTarget": "cubes de porc qui sont uniformément acajou foncé sur toutes les surfaces, scintillant du revêtement de caramel et rendu la graisse. Les aromatiques sont visiblement grillés aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le porc est d'or pâle ou inégal — certains côtés caramel, d'autres encore blancs et bruts.",
            "action": "Continuez de jeter et de presser chaque côté contre la surface chaude pendant une autre minute."
          },
          {
            "state": "Perfect",
            "description": "Deep, même acajou sur tous les visages. La peau est un brun rouge foncé et brillant. Le wok sent le caramel, l'anis et la graisse de porc.",
            "action": "Déglacer avec le vin Shaoxing et ajouter les liquides de culture."
          },
          {
            "state": "Overdone",
            "description": "Les bords du porc sont noircis et amers. Caramel est devenu brun foncé sur la surface du wok.",
            "action": "Enlever les morceaux les plus brûlés, le cas échéant. Ajouter immédiatement le liquide de cuisson pour arrêter la cuisson."
          }
        ]
      },
      "feelCue": "Lorsque vous appuyez sur un cube côté peau contre le wok, vous devriez entendre un étourdissement aigu et soutenu — comme du papier épais déchirant lentement. La graisse se rend et le sucre se développe."
    },
    {
      "nodeId": "step_4",
      "action": "Brise",
      "inputs": [
        "glazed_pork",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_10"
      ],
      "outputState": "braised_pork",
      "instructions": "Verser le vin Shaoxing autour des bords du wok, le laisser s'étourdir et libérer son alcool dans un nuage parfumé — ne pas le verser directement sur le porc, car cela peut refroidir la viande et arrêter la caramélisation. Ajouter le soja foncé, le soja clair et l'eau ou le stock. Le liquide devrait venir environ les deux tiers du chemin vers le haut du porc, jamais le couvrir complètement. Portez à ébullition, puis réduisez à la plus basse mijotée que vous pouvez gérer — juste une bulle douce à la surface, et non un ébullition. Couvrir avec un couvercle légèrement ajar. Braser pendant 1 heure 30 minutes, tourner le porc toutes les 30 minutes afin que tous les côtés passent du temps submergé. La chaleur lente et douce est ce qui convertit le collagène en gélatine et transforme la graisse de solide et cireuse en tremblant et en donnant. Après 90 minutes, retirez le couvercle et goûtez au liquide de braisage — il devrait déjà être complexe et légèrement sucré.",
      "visualCue": {
        "primaryTarget": "Un liquide de culture d'acajou avec des piscines de graisse de porc fondue à la surface. Les cubes de porc sont brun foncé, légèrement éparpillés, et la peau a commencé à rider et adoucir, et n'est plus tendue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le porc est encore ferme lorsque vous le pressez avec une baguette — la baguette ne glisse pas facilement. Les couches de graisse sont encore blanches et solides.",
            "action": "Remplacez le couvercle et continuez le braisage par paliers de 20 minutes jusqu'à ce qu'une baguette glisse à travers avec une pression légère."
          },
          {
            "state": "Perfect",
            "description": "Chopstick glisse à travers la couche de graisse avec presque aucune résistance. La peau est profondément ridée, adoucie et presque translucide aux bords. La viande s'éloigne de la peau à la légère pression.",
            "action": "Retirer le couvercle et commencer la phase de réduction pour concentrer la sauce."
          },
          {
            "state": "Overdone",
            "description": "Le porc a commencé à s'effondrer dans le liquide: les cubes s'effondrent et la graisse se sépare en morceaux flottants. La viande est sèche et stringée.",
            "action": "Soulevez doucement les morceaux et réduisez la sauce séparément, puis recombinez. La texture a disparu mais la saveur reste."
          }
        ]
      },
      "feelCue": "Après 90 minutes, pressez fermement un cube entre le pouce et l'index – la couche de graisse devrait donner complètement, comme presser dans le beurre froid qui vient de commencer à se réchauffer. La viande doit se sentir dense mais pas dure."
    },
    {
      "nodeId": "step_5",
      "action": "Réduire",
      "inputs": [
        "braised_pork"
      ],
      "outputState": "finished_red_braised_pork",
      "instructions": "Retirer complètement le couvercle. Augmenter le feu à moyen-élevé. Le liquide de graissage, qui est maintenant riche en gélatine et en soja, commencera à diminuer rapidement. Incorporer le porc toutes les 2 à 3 minutes, cuillerer le liquide sur les surfaces supérieures. À mesure que la sauce diminue, elle passera d'un bouillon fin et brillant à une laque sirupeuse qui enveloppe l'arrière d'une cuillère. Le porc s'approfondira simultanément en couleur de l'acajou à une glaçure presque rouge noir. Cette étape prend 15 à 25 minutes selon le volume de liquide restant. Regardez attentivement dans les 5 dernières minutes — la sauce peut aller de parfait à brûlé très rapidement à mesure que la concentration de sucre augmente. Retirez l'anis étoile, la cassie, le gingembre et le noeud de pétoncle. La sauce est prête lorsqu'elle enrobe le porc dans une couche épaisse et brillante qui tient pendant plusieurs secondes avant de s'égoutter lentement.",
      "visualCue": {
        "primaryTarget": "Le porc est recouvert d'une laque épaisse et tremblante, rouge foncé-noir et brillant en cuir verni. La sauce dans la casserole est sirupeuse et se déplace lentement. Lorsqu'une cuillère est traînée à travers, elle laisse un chemin propre qui se remplit de plus de 3-4 secondes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore mince et rudimentaire — elle se jette au fond du pot plutôt que de s'accrocher au porc. La couleur est encore brun plutôt que rouge laqué.",
            "action": "Continuer à réduire à feu moyen, en basting fréquemment, pendant encore 10 minutes."
          },
          {
            "state": "Perfect",
            "description": "La sauce enveloppe le porc d'une couche épaisse, brillante et collante. Une cuillère traînée sur le fond du pot laisse un sentier propre. Les cubes de porc sont profondément rouge acajou et éblouissants. Des odeurs d'anis étoilé, de soja et de caramel sucré.",
            "action": "Retirer du feu et servir immédiatement, ou reposer pendant 10 minutes pour laisser la glaçure se régler légèrement."
          },
          {
            "state": "Overdone",
            "description": "La sauce s'est assombrie à presque noire et sent le sucre brûlé. Le fond du pot peut être incurvé.",
            "action": "Ajouter un petit jet de bouillon ou d'eau et remuer pour dissoudre les morceaux obscurcis. Le porc sera bien; servir immédiatement."
          }
        ]
      },
      "feelCue": "Plongez une cuillère propre dans la sauce et passez votre doigt à l'arrière de celle - ci — la ligne doit tenir propre et distincte pendant plusieurs secondes. Si la sauce se ferme immédiatement, continuer à réduire. Si elle gele instantanément et dur, ajoutez une petite touche de stock."
    }
  ]
};
