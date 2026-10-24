export default {
  "repoId": "master_french_sole_meuniere_001",
  "parentRepoId": null,
  "slug": "sole-meuniere",
  "author": "ForkRecipe Kitchen",
  "title": "Sole Meunière",
  "description": "Le plat qui a fait tomber Julia Child amoureux de la France — une plante entière de Dover draguée dans la farine et posée dans du beurre mousseux jusqu'à ce que sa peau craque d'or, puis baignée de beurre noisette aiguisé avec une pression de citron et un flirt de persil. Trois choses simples ont parfaitement été faites : farine, beurre, poisson.",
  "cuisine": "Français",
  "culture": "Pays-Bas",
  "category": "seafood",
  "tags": [
    "français",
    "unique",
    "Beurre brun",
    "citron",
    "frites",
    "classique"
  ],
  "difficulty": 3,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 3,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Semelle entière Dover (côté foncé en peau, écaillé, paré)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Semelle de citron",
        "Filets",
        "semelle de pétrale"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Farine pure (pour le dragage)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "Farine de wondra",
        "Farine de riz"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel de mer fin et poivre blanc",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre noir"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre clarifié (pour les frites)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "huile neutre + beurre"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Beurre froid non salé (pour la noisette)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Citrus",
      "name": "Citron (jus, plus coins à servir)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Persil à feuilles plates (finement haché)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Cerveau"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saison & Drague",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "floured_sole",
      "instructions": "Patientez la semelle désossée des deux côtés. Assaisonner de sel et de poivre blanc. Juste avant de cuisiner, déposer le poisson dans la farine, presser légèrement, tourner et enrober le deuxième côté, puis soulever et abattre toutes les taches lâches — vous voulez le voile le plus mince possible, pas une croûte. Farine trop tôt et elle est pâteuse; farine à la dernière seconde donc elle reste sèche et poudreuse.",
      "visualCue": {
        "primaryTarget": "La semelle porte une fine, mate, même poussière de farine sans taches grises humides et pas de touffes de farine épaisses — la forme du poisson apparaît encore clairement à travers elle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des zones humides où la farine refusait de coller, ou le poisson était encore humide, de sorte que le revêtement est gommé et strié.",
            "action": "Pâtez le poisson plus sec avec une serviette en papier, re-saisonner et draguer à nouveau — l'humidité est l'ennemi d'une peau croustillante."
          },
          {
            "state": "Perfect",
            "description": "Une poudre fine, sèche et uniforme s'accroche partout; l'excès s'enlève; le poisson va directement au beurre chaud.",
            "action": "Placez-le dans le beurre clarifié en mousse sans tarder."
          },
          {
            "state": "Overdone",
            "description": "Une épaisse veste pâle de farine qui s'est assise trop longtemps et est devenue collante et collante aux bords.",
            "action": "Secouez et brossez l'excédent; s'il est devenu collant, essuyez le poisson et la drague fraîchement dans la farine sèche."
          }
        ]
      },
      "feelCue": "Les poissons farineux doivent se sentir secs et légèrement crayeux au bout des doigts, jamais collants. Si la farine s'élançait sur vos mains, la plante était trop humide — sèchez - la davantage."
    },
    {
      "nodeId": "step_2",
      "action": "Frire",
      "inputs": [
        "floured_sole",
        "ing_04"
      ],
      "outputState": "golden_sole",
      "instructions": "Chauffer le beurre clarifié dans une grande casserole jusqu'à ce qu'il mousse et commence juste à sentir la noix. Placez la semelle dans la présentation vers le bas et faites frire sans la déplacer, 3-4 minutes, jusqu'à ce que la face inférieure soit croustillante et en or profond. Flipez une fois avec une longue spatule et faites cuire le deuxième côté encore 2-3 minutes, en basant le dessus avec le beurre chaud. La chair se fait à l'instant où elle devient opaque et se lève de l'os.",
      "visualCue": {
        "primaryTarget": "Une croûte dorée brûlée aux bords croustillants et lacés; le poisson glisse librement dans la poêle et la chair au point le plus épais se transforme en blanc opaque.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Peau blond pâle, le revêtement encore doux, et les bâtons de poisson et les larmes quand vous essayez de le soulever.",
            "action": "Laissez - le tranquille et laissez - le faire frire: une croûte appropriée se libère de la poêle quand elle est prête."
          },
          {
            "state": "Perfect",
            "description": "Même la couleur de l'or profond, la surface croustillante, le poisson libérant proprement, la chair opaque et la séparation de l'os à un doux nudge.",
            "action": "Soulevez la semelle sur une assiette chaude et aspirez le beurre de cuisson pour commencer le bruit."
          },
          {
            "state": "Overdone",
            "description": "La peau est brun foncé verglant sur l'amertume, les bords noircissent, et la chair est sèche et commence à flocer.",
            "action": "Sortez-le immédiatement de la poêle; servez le meilleur côté vers le haut et comptez sur le beurre de citron pour ramener l'humidité."
          }
        ]
      },
      "feelCue": "Le poisson doit s'étourdir régulièrement, pas crier ou cracher. Rongez-le avec la spatule — quand elle glisse au lieu de saisir, la croûte s'est mise et elle est prête à tourner."
    },
    {
      "nodeId": "step_3",
      "action": "Beurre brun",
      "inputs": [
        "ing_05"
      ],
      "outputState": "beurre_noisette",
      "instructions": "Essuyer la poêle et la retourner à feu moyen. Déposer dans le beurre froid et le laisser fondre, mousser, puis étourdir tranquillement lorsque l'eau cuit. Courir constamment alors que les solides de lait tombent au fond et toast de brun pâle à brun noisette, 2-3 minutes — tirez-le au moment où il sent les noix grillées, parce qu'il pointe du bruit à brûlé en quelques secondes.",
      "visualCue": {
        "primaryTarget": "Le beurre est clair ambre avec un sédiment de taches dorées-brun, la mousse a baissé, et il donne un arôme chaud de noisettes grillées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est fondu et encore jaune pâle, moussant fortement, avec une odeur de lait plat et aucune couleur dans les solides.",
            "action": "Continuez à tourner au feu: l'eau doit bouillir avant que les solides de lait puissent brunir."
          },
          {
            "state": "Perfect",
            "description": "La mousse s'est calmée, le liquide est doré-ambre, les solides sont brun noisette, et l'odeur est incomparablement noisette.",
            "action": "Retirer immédiatement la poêle du feu et ajouter le citron pour arrêter la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Les solides sont brun foncé à noir, l'odeur est forte et acride, et une brume de fumée monte de la casserole.",
            "action": "Il a brûlé et est devenu amer — jetez-le et faites revenir un lot de beurre frais; cela se produit rapidement, alors surveillez de près."
          }
        ]
      },
      "feelCue": "Écoutez, car le fort étourdissement de l'eau qui s'évapore s'estompe jusqu'à un beau murmure — que le calme est votre signal que les solides sont sur le point de brunir. Faites confiance à votre nez sur vos yeux; l'odeur de noix grillées arrive juste avant que la couleur ne s'aggrave trop loin."
    },
    {
      "nodeId": "step_4",
      "action": "Terminer",
      "inputs": [
        "beurre_noisette",
        "golden_sole",
        "ing_06",
        "ing_07"
      ],
      "outputState": "sole_meuniere",
      "instructions": "Hors du feu, pressez le jus de citron dans le beurre brun — il siffle et mousse — et remuez dans la plupart du persil. Déposer généreusement le beurre de citron mousseux sur la semelle d'attente, répartir le persil restant sur le dessus et servir à la fois avec des coins de citron. La sauce devrait arriver encore bouillonnant, de sorte que le poisson frappe la table à son plus croustillant.",
      "visualCue": {
        "primaryTarget": "Une sauce ambre lustrée, légèrement mousseuse, pétillante de persil vert autour du poisson doré, perlée sur la peau croustillante sans la noyer ni l'adoucir.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a un goût plat et gras, tout le beurre et aucun ascenseur; le persil est cru et le plat lit lourd.",
            "action": "Ajouter une autre pression de citron et une pincée de sel, et goûter — meunière vit ou meurt sur ce bord acide brillant."
          },
          {
            "state": "Perfect",
            "description": "Beurre de noix éclairci et équilibré par le citron, le persil frais et parfumé, la semelle croustillante sous une fine couche de sauce brillante.",
            "action": "Portez-le immédiatement à la table pendant que le beurre mousse encore et que la peau craque encore."
          },
          {
            "state": "Overdone",
            "description": "Trop de citron a rendu la sauce fine et aigre, ou il est resté si longtemps le beurre est devenu huileux et la croûte vapeur douce.",
            "action": "Équilibrez l'acidité dure avec un petit bouton de beurre frais tournoyé; servez immédiatement et ne laissez jamais une meunière finie attendre."
          }
        ]
      },
      "feelCue": "La sauce doit encore être vivante, peu moussante et étourdissante à mesure qu'elle rencontre le poisson. Tapotez la peau avec la cuillère : une meunière finie répond avec un crépitement doux, non pas un bourrelet terne, carbonisé."
    }
  ]
};
