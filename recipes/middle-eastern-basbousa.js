export default {
  "repoId": "master_middleeastern_middleeasternbasbousa_001",
  "parentRepoId": null,
  "slug": "middle-eastern-basbousa",
  "author": "ForkRecipe Kitchen",
  "title": "Basbousa",
  "description": "Un gâteau à la semoule doré et grainé imbibé de sirop de fleur d'orange, dense mais tendre, avec un léger croûte à la surface et le parfum capricieux de l'eau de rose dans chaque bouchée.",
  "cuisine": "Moyen-Orient",
  "culture": "Levantine",
  "category": "desserts",
  "tags": [
    "dessert",
    "végétarien",
    "sémoline",
    "Moyen-Orient",
    "sirop",
    "eau de rose"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "1 hour",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 5,
    "salty": 1,
    "sour": 0,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Sémoline fine",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": [
        "semoule grossière (la texture sera plus granuleuse)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "sucre granulé"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Yogourt ordinaire",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "crème aigre"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé fondu",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "huile neutre",
        "Huile de coco"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Eau de rose",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Garnish",
      "name": "Amandes blanchies, entières",
      "ratioValue": 30,
      "defaultUnit": "pieces",
      "substitutions": [
        "noix de pin",
        "Pistaches"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Sweetener",
      "name": "Sucre (pour sirop)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Hydration",
      "name": "Eau (pour sirop)",
      "ratioValue": 150,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Eau de fleur d'orange",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "eau de rose"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "basbousa_batter",
      "instructions": "Mélanger la semoule, le sucre et la poudre à pâte dans un grand bol. Ajouter le yaourt, le beurre fondu et l'eau de rose. Bien mélanger avec une spatule jusqu'à ce qu'elle soit complètement combinée — la pâte sera épaisse et granuleuse, pas lisse. Contrairement à une pâte à gâteau standard, elle doit tenir sa forme lorsqu'elle est bombée. Graisser une casserole de 23x23cm. Étendre la pâte uniformément avec une spatule humide, la presser dans une couche uniforme d'environ 2cm d'épaisseur. Laisser reposer 15 minutes pour permettre à la semoule d'hydrater.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse, uniforme et granuleuse s'étend uniformément dans la casserole — surface mate, pas de mise en commun liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les battements sont bosseux et inégaux. Sémoline sèche encore visible comme des grains séparés à la surface. Le mélange ne s'est pas complètement réuni.",
            "action": "Mélanger plus soigneusement jusqu'à ce que toutes les taches sèches soient incorporées. Le beurre et le yaourt doivent enrober chaque grain."
          },
          {
            "state": "Perfect",
            "description": "Une pâte épaisse et uniforme qui tient sa forme dans la poêle. La surface est mate et uniforme. Sens de rose et de beurre.",
            "action": "Placer une amande sur chaque carré pré-scoré et cuire."
          },
          {
            "state": "Overdone",
            "description": "La batteuse est très mince et rugueuse — trop de yaourt a été ajouté, ou le yaourt était très liquide.",
            "action": "Ajouter 2-3 c. à soupe de semoule et remuer. La batte doit être assez épaisse pour tenir une cuillère debout brièvement."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir granuleuse et épaisse lorsqu'elle est agitée — comme du sable humide mélangé avec du gras, pas une pâte à gâteau lisse."
    },
    {
      "nodeId": "step_2",
      "action": "Cuire",
      "inputs": [
        "basbousa_batter",
        "ing_07"
      ],
      "outputState": "baked_basbousa",
      "instructions": "Préchauffer le four à 180°C (350°F). Fixez la pâte reposée en diamant ou en forme carrée avec un couteau mouillé, coupant presque tout le chemin à travers. Appuyez sur une amande blanchie dans le centre de chaque pièce. Cuire 25-30 minutes jusqu'à ce que le dessus soit doré et que les bords commencent à s'éloigner de la poêle. La surface doit être légèrement ferme et sèche.",
      "visualCue": {
        "primaryTarget": "Un haut même doré avec des bords légèrement plus foncés. La surface est ferme et sèche au toucher. Les amandes sont légèrement grillées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pale, haut doux qui donne quand pressé. L'intérieur est encore humide et coquin. Les bords ne tirent pas de la casserole.",
            "action": "Cuire encore 5-8 minutes. Le gâteau doit être entièrement préparé avant d'ajouter le sirop."
          },
          {
            "state": "Perfect",
            "description": "Top doré avec la moindre résistance à une presse douce. Les bords ont tiré proprement de la casserole. Un cure-dent sort principalement propre avec quelques miettes humides. Les amandes sont de couleur caramel clair.",
            "action": "Retirer du four et verser immédiatement le sirop chaud sur le gâteau chaud."
          },
          {
            "state": "Overdone",
            "description": "Les bords d'or très foncés s'approchent du brun. Surface très ferme et sèche. Les amandes sont brun foncé.",
            "action": "Verser le sirop immédiatement et généreusement — une basbousa sèche a besoin de plus de sirop pour compenser."
          }
        ]
      },
      "feelCue": "Tapez sur le centre — il doit sembler légèrement creux et se sentir réglé, pas mouillé. L'arôme doit être de semoule chaude et d'amande grillée, pas de farine crue."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "scented_syrup",
      "instructions": "Mélanger le sucre et l'eau dans une petite casserole. Porter à ébullition à feu moyen, en remuant seulement jusqu'à dissolution du sucre. Une fois bouillant, arrêter de remuer et cuire 5-7 minutes jusqu'à ce qu'il y ait un léger épaississement. Ajouter le jus de citron et cuire encore 1 minute (l'acide empêche la cristallisation). Retirer du feu et remuer dans l'eau de fleur d'oranger. Le sirop doit être prêt juste avant que le gâteau ne sorte du four — il doit être chaud.",
      "visualCue": {
        "primaryTarget": "Un sirop clair, légèrement visqueux avec un léger parfum orange-blossom — pas coloré, pas assez épais pour filer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Un sirop mince et aqueux qui coule immédiatement d'une cuillère. Ne se concentre pas.",
            "action": "Laisser mijoter encore 2-3 minutes. Essai : une goutte sur une plaque froide doit tenir légèrement sa forme."
          },
          {
            "state": "Perfect",
            "description": "Légèrement visqueux, sirop clair qui enveloppe l'arrière d'une cuillère finement. Parfumé de fleur d'oranger. Toujours chaud et fluide.",
            "action": "Ajouter l'eau de fleur d'oranger et verser immédiatement sur le gâteau chaud."
          },
          {
            "state": "Overdone",
            "description": "Le sirop d'or épais commence à caraméliser. Les fils se forment entre le doigt et le pouce.",
            "action": "Ajouter 50ml d'eau chaude et remuer à mince. Le sirop doit être suffisamment fluide pour tremper, et non s'asseoir sur le dessus."
          }
        ]
      },
      "feelCue": "Le sirop devrait se sentir à peine lissé entre les doigts mouillés — légèrement plus épais que l'eau, mais nulle part près du miel."
    },
    {
      "nodeId": "step_4",
      "action": "Trempage",
      "inputs": [
        "baked_basbousa",
        "scented_syrup"
      ],
      "outputState": "finished_basbousa",
      "instructions": "Verser le sirop chaud lentement et uniformément sur la basbousa chaude dans un ruisseau mince et stable. Versez d'abord les lignes marquées, puis sur toute la surface. Le gâteau s'assemble et absorbe le sirop immédiatement. Tu devrais utiliser tout le sirop. Laisser reposer à température ambiante pendant au moins 30 minutes jusqu'à ce que le gâteau soit complètement absorbé et refroidi légèrement. Couper le long des lignes de score pour servir. Basbousa s'améliore après plusieurs heures que les saveurs se mélangent.",
      "visualCue": {
        "primaryTarget": "Une surface étincelante, légèrement collante, sans liquide de mise en commun, le sirop s'est complètement absorbé dans la semoule.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sirop est toujours mis en commun dans les lignes de score et à la surface. Le gâteau a l'air mouillé et mouillé.",
            "action": "Attendez encore 20-30 minutes pour l'absorption. La semoule continuera à boire dans le liquide."
          },
          {
            "state": "Perfect",
            "description": "La surface est uniformément brillante mais pas humide. Pas de flaques. Chaque pièce a un même éclat. Le fond de la poêle ne présente qu'un léger résidu de sirop.",
            "action": "Servir à température ambiante. Chaque pièce doit se sentir humide mais intacte lorsqu'elle est levée."
          },
          {
            "state": "Overdone",
            "description": "Le sirop a été ajouté froid à un gâteau froid et est assis sur la surface refusant d'absorber, rendant le haut soggy tandis que l'intérieur reste sec.",
            "action": "Chauffer brièvement la poêle dans un four à 160°C pendant 5 minutes pour la refondre et faire entrer le sirop."
          }
        ]
      },
      "feelCue": "Un morceau parfait de basbousa devrait se sentir légèrement dense et humide dans la main — pas lourd avec du sirop, pas sec, mais avec cette texture de semoule caractéristique."
    }
  ]
};
