export default {
  "repoId": "master_french_brown_chicken_stock_001",
  "parentRepoId": null,
  "slug": "brown-chicken-stock",
  "author": "ForkRecipe Kitchen",
  "title": "Poulet brun (Fonds Brun de Volaille)",
  "description": "Ossements de poulet rôtis et aromatiques caramélisés réduits en un fond sombre et gélatineux — l'épine dorsale de la sauce Espagnole, demi-glaces, et toute braise qui veut la profondeur sur la délicatesse.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "stocks",
  "tags": [
    "stock",
    "poulet",
    "Bleu fondu",
    "français",
    "classique",
    "blanc"
  ],
  "difficulty": 3,
  "activeTime": "50 min",
  "totalTime": "5 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Carcasses et ailes de poulet",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "os de dinde",
        "carcasses de canard"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Mirepoix (oignon, carotte, céleri 2:1:1)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "Pâte de tomates",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates concassées"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Bouquet garni (thyme, baie, tiges de persil, grains de poivre)",
      "ratioValue": 1,
      "defaultUnit": "bundle",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": [
        "gras de poulet"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtir",
      "inputs": [
        "ing_01",
        "ing_06"
      ],
      "outputState": "roasted_bones",
      "instructions": "Préchauffer le four à 230 C (450 F). Jetez les os et les ailes de poulet dans une mince couche d'huile neutre et étendez - vous sur deux plateaux de tôle — ne foulez pas. Faire cuire 35 à 45 minutes, tourner une fois à mi-chemin, jusqu'à ce que les os et le cartilage soient brun acajou profond avec des bouts carbonisés sur les articulations des ailes. La graisse qui s'en sort fera brunir le fond du plateau; ce fond est en or.",
      "visualCue": {
        "primaryTarget": "Les os sont brun acajou profond avec des taches caramélisées foncées aux articulations. La graisse fondue sur le plateau est devenue dorée et parfumée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les os sont encore blonds ou bronzés. Le fond du plateau est pâle et décoloré.",
            "action": "Retournez au four encore 10-15 minutes — la réaction de Maillard a besoin de plus de temps de chaleur."
          },
          {
            "state": "Perfect",
            "description": "Brun rouge foncé sur toute la surface. Les extrémités des ailes peuvent être presque noires — c'est souhaitable. La cuisine sent la peau de poulet rôti.",
            "action": "Transférer les os dans la réserve et déglacer le plateau."
          },
          {
            "state": "Overdone",
            "description": "Les os sont noirs et sentent acrides. Le fond du plateau a brûlé après le caramel.",
            "action": "Jetez les morceaux les plus carbonisés et grattez le plus amer du plateau. Continuez avec prudence."
          }
        ]
      },
      "feelCue": "Soulevez une aile — elle doit se sentir raide et sèche, sans donner de caoutchouc. La peau, toujours attachée, craquera entre les doigts."
    },
    {
      "nodeId": "step_2",
      "action": "Rôtir",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "roasted_mirepoix",
      "instructions": "Sur le même plateau ou sur une plaque fraîche, étaler le mirepoïx en une seule couche et rôtir à 230 C pendant 20 minutes jusqu'à ce que les bords soient caramélisés et que les anneaux d'oignon se séparent et noircissent aux extrémités. Au cours des 5 dernières minutes, pousser les légumes de côté et ajouter la pâte de tomate directement sur le plateau, la répandre mince — la laisser caraméliser jusqu'à ce que la brique rouge et parfumée (pinçage).",
      "visualCue": {
        "primaryTarget": "Les légumes sont dorés à brun foncé sur les bords, avec la pâte de tomate pincée à une pâte brun rouille adhérant au plateau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mirepoix est toujours cru et humide. La pâte de tomates est encore rouge vif.",
            "action": "Retourner au four — les légumes non grillés font un stock faible et pâle."
          },
          {
            "state": "Perfect",
            "description": "Les bords de l'oignon sont ambre foncé, les carottes sont caramélisées sur le côté coupé, le céleri est adouci. La pâte est acajou aux bords.",
            "action": "Ajouter au pot avec les os."
          },
          {
            "state": "Overdone",
            "description": "L'oignon est entièrement noir et le céleri a séché. La pâte est brûlée.",
            "action": "Gratter les morceaux les plus brûlés et jeter avant d'ajouter au pot."
          }
        ]
      },
      "feelCue": "Le plateau doit se sentir chaud et sec lorsque vous planez votre paume au - dessus de lui — pas de vapeur qui monte, juste une chaleur radieuse et le parfum de caramel et de tomate."
    },
    {
      "nodeId": "step_3",
      "action": "Déglacer",
      "inputs": [
        "roasted_bones",
        "roasted_mirepoix",
        "ing_04"
      ],
      "outputState": "deglazed_stock_pot",
      "instructions": "Ajouter les os et le mirepoïx dans une grande réserve. Verser une tasse d'eau froide sur chaque plateau de torréfaction et racler tout le fond avec une cuillère en bois jusqu'à ce que chaque morceau sombre se soit dissous dans le liquide. Versez ce liquide dans la réserve. Couvrez tout avec l'eau froide restante — les os devraient être submergés de 2 pouces.",
      "visualCue": {
        "primaryTarget": "Les plateaux sont propres et pâles. La réserve contient des os brun foncé dans une eau riche et teintée d'acajou.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tray a encore des taches sombres de fond coincé.",
            "action": "Ajoutez un peu plus d'eau et grattez plus fort — ce goût est la saveur la plus concentrée dans tout le processus."
          },
          {
            "state": "Perfect",
            "description": "Les bacs sont propres. L'eau dans le pot est déjà teintée d'ambre foncé du fond dissous.",
            "action": "Porter à ébullition lentement, puis laisser mijoter."
          },
          {
            "state": "Overdone",
            "description": "Vous avez ajouté trop d'eau — le pot est trop rempli au-delà des os.",
            "action": "Déplacez l'excès — vous pouvez ajouter plus de stock d'un lot précédent ou réduire plus agressivement à la fin."
          }
        ]
      },
      "feelCue": "Faites glisser votre doigt sur le plateau propre — pas de résistance, pas d'embout. Tout ce qui l'a rendue collante est maintenant dans votre pot."
    },
    {
      "nodeId": "step_4",
      "action": "Mijoter",
      "inputs": [
        "deglazed_stock_pot",
        "ing_05"
      ],
      "outputState": "simmered_stock",
      "instructions": "Porter le pot à ébullition à feu vif, en observant attentivement. Le moment où la mousse et la graisse commencent à augmenter, réduisez à la plus faible mijoter possible — une bulle paresseuse toutes les secondes ou deux. Ajouter le bouquet garni. Laisser mijoter à découvert pendant 4 heures, en écrèment la mousse brun-gris et la graisse de la surface toutes les 30 minutes. Ne remuez jamais; déranger le pot nuise le stock.",
      "visualCue": {
        "primaryTarget": "Un liquide ambré foncé qui expire lentement avec une surface tremblante. Les premiers écréms donneront de la mousse brune; les écréms plus tard montreront de la graisse dorée propre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock est ambre léger, mince, et les goûts d'eau de poulet molle.",
            "action": "Continuer à mijoter — le collagène dans les articulations et le cartilage prend du temps pour se dissoudre."
          },
          {
            "state": "Perfect",
            "description": "Couleur acajou profonde, semi-transparente lorsqu'elle est maintenue à la lumière. Une cuillère enduite dans le stock montre un éclat léger et vitreux. Une volaille forte et un arôme de rôti.",
            "action": "Plongez dans un tamis à mailles fines."
          },
          {
            "state": "Overdone",
            "description": "Le stock a diminué à moins de la moitié de son volume. La couleur est très sombre et la saveur est intense mais légèrement minérale.",
            "action": "Ajouter de l'eau pour ramener le volume, le goût et ajuster."
          }
        ]
      },
      "feelCue": "Touchez la surface du bouillon mijotant à l'aide d'une cuillère — elle doit se sentir calme et stable, comme un battement de cœur, pas frénétique. Un ébullition signifie un recul immédiat de la chaleur."
    },
    {
      "nodeId": "step_5",
      "action": "Filtrer",
      "inputs": [
        "simmered_stock"
      ],
      "outputState": "finished_brown_chicken_stock",
      "instructions": "Placez le stock à travers un tamis à mailles fines dans un pot propre — ne versez pas ou vous le nuancerez. Jetez les solides. Laisser refroidir le stock dans un bain de glace, en remuant occasionnellement, jusqu'à ce qu'il soit inférieur à 10 C. Réfrigérer pendant la nuit. Le lendemain, soulever et jeter le disque solide de graisse de la surface. Le stock en dessous aura mis à une gelée ambre sombre — c'est exact et signifie qu'il est riche en gélatine.",
      "visualCue": {
        "primaryTarget": "Après refroidissement : une gelée d'acajou-ambre dans le récipient. Une fois réchauffé, il devient un liquide d'or clair, brillant et foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le stock reste liquide après refroidissement — il n'a pas gelé. Mince et aqueuse.",
            "action": "Retourner au pot et réduire d'un tiers; la concentration de collagène est trop faible."
          },
          {
            "state": "Perfect",
            "description": "C'est un gel qui tremble. Réchauffe à un liquide ambré clair et foncé avec un goût plein, arrondi, profondément salé.",
            "action": "Conserver au réfrigérateur jusqu'à 5 jours ou congeler en portions de 500 ml."
          },
          {
            "state": "Overdone",
            "description": "Le stock est solide et très foncé et intensément salé.",
            "action": "Diluer avec l'eau lors de l'utilisation — le traiter comme un concentré de demi-glaces."
          }
        ]
      },
      "feelCue": "Appuyez sur le bouillon réfrigéré avec un bout de doigt — il doit s'écrouler et tenir, ressortez lentement. S'il s'effondre immédiatement, il est jus; s'il est raide et caoutchouteux, il est glacé. Les deux sont bons; vous seul savez ce que vous avez visé."
    }
  ]
};
