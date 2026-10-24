export default {
  "repoId": "master_french_pork_belly_confit_001",
  "parentRepoId": null,
  "slug": "pork-belly-confit",
  "author": "ForkRecipe Kitchen",
  "title": "Confit Belly de porc",
  "description": "Skin-on porc ventre guéri toute la nuit dans le sel et les aromatiques, puis cuit lentement submergé dans son propre rendu gras jusqu'à ce que le collagène se rend complètement — pressé à plat la nuit et fini avec une peau si croustillante qu'il éclate comme une vitre de verre ambre.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "proteins",
  "tags": [
    "porc",
    "français",
    "confit",
    "ventre",
    "Cuisson lente",
    "crépitement"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "18 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Skin-on porc ventre, entier morceau",
      "ratioValue": 1200,
      "defaultUnit": "g",
      "substitutions": [
        "jambes de canard pour confit classique"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sels de mer grossiers",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": [
        "sucre brun"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Girofles d'ail légèrement broyés",
      "ratioValue": 5,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 5,
      "defaultUnit": "sprigs",
      "substitutions": [
        "Thym séché (1 c. à thé)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 3,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Graines de poivre noires, légèrement broyées",
      "ratioValue": 1,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "baies de genièvre, légèrement broyées",
      "ratioValue": 0.5,
      "defaultUnit": "tsp",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Graisses de porc ou de canard rendues",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "un mélange de saindoux et d'huile végétale"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Cure",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "cured_belly",
      "instructions": "Mélanger le sel, le sucre, l'ail légèrement broyé, le thym, les feuilles de laurier, les grains de poivre cassés et les baies de genièvre dans un petit bol. Score la peau du ventre de porc dans un motif de croisement avec un couteau tranchant ou une lame Stanley — coupe 1 cm d'écart, à travers la peau et juste dans la couche de graisse mais pas atteindre la viande. Ce score favorise même le craquement plus tard. Frotter soigneusement le mélange de guérison sur chaque surface du ventre, le travailler dans les coupes de score et presser fermement les aromatiques dans la chair. Placer le côté peau sur un rack de fil placé sur un plateau, couvrir de façon lâche avec l'enveloppe de collage, et réfrigérer pendant la nuit (8-12 heures).",
      "visualCue": {
        "primaryTarget": "Enrobé d'une croûte de cure blanche. Des lignes de score visibles à travers le remède. Le plateau ci-dessous montre une petite quantité de saumure rose dessinée le matin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Moins de 4 heures de guérison. Peu ou pas de saumure à la base du plateau. Le sel n'a pas attiré l'humidité et a commencé à revenir comme une saumure concentrée.",
            "action": "Retournez au frigo. La nuit est nécessaire pour que le remède pénètre à travers la graisse aux couches de viande."
          },
          {
            "state": "Perfect",
            "description": "Après 8-12 heures. Le plateau a une piscine visible de saumure rose. Le remède a été partiellement dissous. La peau est légèrement tachée et ferme.",
            "action": "Rincez le ventre sous l'eau froide, faites sécher les os avec des serviettes en papier et continuez."
          },
          {
            "state": "Overdone",
            "description": "Plus de 24 heures. Le ventre est trop salé et la texture de la viande aux bords est dense et légèrement translucide.",
            "action": "Faire tremper dans l'eau froide pendant 30 minutes pour obtenir un excès de sel avant de continuer."
          }
        ]
      },
      "feelCue": "Après le durcissement, le ventre se sent nettement plus ferme au toucher qu'au cru — le sel a légèrement resserré la structure protéique et la peau a pris une texture sèche et papier."
    },
    {
      "nodeId": "step_2",
      "action": "Pochette",
      "inputs": [
        "cured_belly",
        "ing_09"
      ],
      "outputState": "confited_belly",
      "instructions": "Préchauffer le four à 90°C (195°F). Faire fondre la graisse de porc dans un plat de rôtissage profond ou un four hollandais assez grand pour tenir le ventre. Placez la peau du ventre vers le bas, versez suffisamment de gras chaud pour la submerger complètement — la graisse devrait couvrir le ventre d'au moins 1 cm. Placer un morceau de parchemin sur la surface, puis sur le couvercle ou le papier. Transférer au four et cuire 6-8 heures. Ne précipitez pas cela avec plus de chaleur. À 90°C, le collagène dans le tissu conjonctif et la peau se convertit progressivement en gélatine sans jamais forcer la graisse à frire — la distinction entre confit et braconnage dans la graisse.",
      "visualCue": {
        "primaryTarget": "Le ventre est passé du rose pâle à une couleur opaque de crème d'ivoire. Entouré d'un léger tremblement, d'une graisse limpide, sans bouillonner ni frire. Une fine sonde insérée dans la viande ne présente presque aucune résistance.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Température intérieure inférieure à 70°C. La viande est encore légèrement rose au centre. Une brochette rencontre une résistance ferme. Le tissu conjonctif entre les couches de graisse n'a pas ramolli.",
            "action": "Continuez à confiner. À 90 °C, vous ne pouvez pas trop cuire l'extérieur pendant que le centre monte lentement. Vérifiez à 7 heures, puis encore à 8 heures."
          },
          {
            "state": "Perfect",
            "description": "Après 6-8 heures, le ventre est complètement ivoire et tendre. Une fine brochette en bois glisse à travers chaque couche — viande, graisse et entre — sans résistance. La peau est translucide et gélatine.",
            "action": "Soulever soigneusement de la graisse et procéder au pressage."
          },
          {
            "state": "Overdone",
            "description": "La graisse était trop chaude (au-dessus de 110°C). Le ventre s'est légèrement frit — l'extérieur est jauni et les couches de graisse ont commencé à se défaire excessivement.",
            "action": "Appuyez et refroidissez comme d'habitude. L'étape de craquage fonctionnera encore — en fait, un ventre légèrement plus sec croustilles plus facilement."
          }
        ]
      },
      "feelCue": "Au bout de 7 heures, pressez l'arrière d'une cuillère contre le côté de la viande — elle devrait céder avec presque aucune pression, en s'enfonceant doucement comme en pressant dans le beurre froid, chaque couche distincte mais complètement tendre."
    },
    {
      "nodeId": "step_3",
      "action": "Appuyez sur",
      "inputs": [
        "confited_belly"
      ],
      "outputState": "pressed_belly",
      "instructions": "Étaler un petit plat de cuisson ou une boîte à pain avec de l'enveloppe collante, laissant un surplomb de tous les côtés. Soulevez le ventre de la graisse et placez-le côté peau vers le bas dans l'étain doublé. Pliez l'enveloppe sur le dessus. Placer une autre plaque de cuisson directement sur l'enveloppe de collage et peser avec des boîtes lourdes — au moins 2 kg de poids. Réfrigérer pendant au moins 6 heures, idéalement pendant la nuit. Le pressage compacte le ventre dans une dalle uniforme pour une portion propre et force la graisse et la gélatine à se redistribuer uniformément.",
      "visualCue": {
        "primaryTarget": "Après avoir pressé, le ventre est devenu une dalle compacte et uniforme. La peau est lisse et plate sur le fond. La coupe transversale montre des couches de peau, de graisse et de viande définies.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Moins de 4 heures de pression. Le ventre est encore arrondi et inégal. Les couches n'ont pas fixé fermement.",
            "action": "Retourner au réfrigérateur avec le poids. Le cadre se produit comme les firmes de gélatine dans le froid."
          },
          {
            "state": "Perfect",
            "description": "Une dalle rectangulaire propre qui tient sa forme lorsqu'elle n'est pas moulée. Les calques sont clairement définis. La peau est serrée et lisse sur le dessous.",
            "action": "Démoudre, éplucher l'enveloppe de collage et en faire des carrés ou des rectangles avec un couteau tranchant."
          },
          {
            "state": "Overdone",
            "description": "Impossible de trop presser. Le temps de pression ne fait qu'améliorer le résultat.",
            "action": "Continuez à votre convenance — le ventre pressé se conserve réfrigéré jusqu'à 3 jours avant la fermeture finale."
          }
        ]
      },
      "feelCue": "La dalle pressée devrait se sentir froide, dense et uniforme sous votre paume — comme un bloc de beurre froid plutôt que de donner de la viande, la gélatine et la graisse ayant été entièrement serties."
    },
    {
      "nodeId": "step_4",
      "action": "Sear",
      "inputs": [
        "pressed_belly"
      ],
      "outputState": "finished_pork_belly",
      "instructions": "Porter le ventre pressé en portions individuelles (généralement 5-6 cm carrés). Placez une poêle à four lourde, en fonte idéale, à feu moyen-doux. Ne pas ajouter de graisse; le ventre lui-même rendra immédiatement. Placez les portions côté peau vers le bas, appuyez fermement avec une spatule. Faire cuire à feu moyen-doux pendant 12-18 minutes sans bouger — la patience ici est essentielle. La graisse se rendra lentement et la peau sera progressivement croquante et devenir translucide ambre. Il devrait craquer comme du verre sous les pieds quand tapoté avec une cuillère. Dépliez les 2 dernières minutes pour colorer légèrement le côté viande.",
      "visualCue": {
        "primaryTarget": "La peau est passée de gélatineux et pâle à un ambre profond, cloqué et gonflé. Lorsqu'elle est tapée avec une cuillère, elle sonne et résiste; elle doit se briser lorsqu'elle est mordue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est encore pâle et légèrement collante. Fait un son doux et productif lorsqu'il est pressé. N'a pas atteint le stade de rupture.",
            "action": "Continuer à feu moyen-doux. Ne pas augmenter la chaleur — précipiter le rendu fait frire la graisse avant que l'eau n'échappe à la peau, faisant craquer caoutchouteux au lieu du verre."
          },
          {
            "state": "Perfect",
            "description": "Deep ambre-or, éclaboussure spectaculaire peau qui fait un tap-tap audible lorsqu'il est pressé avec une cuillère. La poêle est pleine de saindoux. Le côté viande est chaud et brillant.",
            "action": "Retirer et éponger la surface de la peau avec une serviette en papier. Servir immédiatement — les fissures se dégradent en quelques minutes dans l'air humide."
          },
          {
            "state": "Overdone",
            "description": "La peau est passée d'ambre à brun foncé. Des morceaux plus petits peuvent commencer à être char. Des odeurs de graisse brûlée.",
            "action": "Supprimer immédiatement. La peau est probablement encore délicieuse — la réaction de Maillard sur la peau de porc est pardonnante — mais ne la laissez pas aller plus loin."
          }
        ]
      },
      "feelCue": "Appuyez sur la peau avec l'aplat d'une cuillère pendant la mise en mer — la résistance augmente de minute en minute du doux et donnant, au printemps, au dernier robinet de verre dur qui vous dit que c'est fait."
    }
  ]
};
