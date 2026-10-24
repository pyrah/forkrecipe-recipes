export default {
  "repoId": "master_japanese_matcha_cheesecake_001",
  "parentRepoId": null,
  "slug": "matcha-cheesecake",
  "author": "ForkRecipe Kitchen",
  "title": "No-Bake Matcha Cheesecake",
  "description": "Un gâteau au fromage frais et dense de style japonais avec l'amertume tranquille de matcha de qualité cérémonielle coupant à travers le riche fromage à la crème, serti juste assez pour trancher propre sur une base de biscuits digestif émiettée - vert vif, à peine sucré, profondément parfumé.",
  "cuisine": "Japonais",
  "culture": "Fusion japonaise-occidentale",
  "category": "desserts",
  "tags": [
    "matcha",
    "Cake au fromage",
    "Japonais",
    "Pas de cuisson",
    "thé vert",
    "dessert",
    "marque à l'avance"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "5 hr 25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 1,
    "bitter": 3,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Biscuits digestifs (amende écrue)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Graham craquelins",
        "Hobbs",
        "pain court de sable"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé (mellé)",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Fromage à la crème plein gras (température ambiante)",
      "ratioValue": 200,
      "defaultUnit": "parts",
      "substitutions": [
        "Mascarpone pour une version plus riche et moins tannante"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Crème lourde (froid)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre glacé",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre de ricin"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "Poudre de matcha de qualité cérémonielle",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "matcha culinaire (augmentation à 10 parties)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Hydration",
      "name": "Eau chaude (juste à ébullition, pour la pâte de matcha)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "Jus de citron (fraîchement pressé)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Binder",
      "name": "Feuille gélatine (or, 200 fleurs)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "1,5 c. à thé gélatine pulvérisée dans 2 c. à thé d'eau froide"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Garnish",
      "name": "Poudre de Matcha (pour la poussière)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Presser",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "biscuit_base",
      "instructions": "Écraser les biscuits digestifs dans un robot culinaire à un sable fin et uniforme — pas de gros morceaux ou de poussière de sable, une miette moyenne uniforme. Alternativement, scellez-les dans un sac à fermeture éclair et roulez avec un rouleau. Incorporer le beurre fondu jusqu'à ce que chaque miette soit uniformément enrobée — le mélange doit ressembler à du sable humide qui s'empiète simplement lorsqu'il est pressé. Astuce dans la base d'une étain printanière de 20 cm (8 pouces) doublée de parchemin de cuisson. Utilisez la base plate d'un verre pour presser les miettes dans une couche compacte, uniforme, de niveau. Réfrigérer pendant 15 minutes pour mettre le beurre.",
      "visualCue": {
        "primaryTarget": "Une couche uniforme, compacte et plate qui tient sa forme lorsque l'étain est incliné et ne s'écroule pas lorsque le bord est pressé avec un ongle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les miettes sont trop grossières ou la couche est inégale, avec des monticules et des vallées visibles.",
            "action": "Appuyez plus fermement et uniformément avec la base en verre. Une base lâche s'écroule en tranches."
          },
          {
            "state": "Perfect",
            "description": "Compact, plat, uniforme et légèrement sombre du beurre. Ferme au toucher et tient un bord propre lorsqu'il est pressé.",
            "action": "Réfrigérer pendant le remplissage."
          },
          {
            "state": "Overdone",
            "description": "Trop de beurre a rendu la base grasse — elle se jette aux bords et la surface semble brillante et humide.",
            "action": "Bloquez doucement avec une serviette en papier et réfrigérez - l'excès de beurre se raffermira lorsqu'il sera réfrigéré."
          }
        ]
      },
      "feelCue": "Appuyez sur votre paume à plat sur la base réfrigérée — il devrait se sentir froid, ferme et légèrement gritté, comme du sable frais et compacté. Si elle donne ou se sent douce, réfrigérer plus longtemps avant d'ajouter le remplissage."
    },
    {
      "nodeId": "step_2",
      "action": "Faire infuser",
      "inputs": [
        "ing_09"
      ],
      "outputState": "bloomed_gelatin",
      "instructions": "Submerger les feuilles de gélatine dans l'eau froide pendant 5 à 8 minutes jusqu'à ce qu'elles soient complètement flopées et translucides. Soulevez-les et pressez l'excès d'eau — la gélatine ne devrait pas peser presque rien dans votre paume. Mettez de côté. Pour la gélatine pulvérisée, arrosez-la sur 2 cuillerées à soupe d'eau froide et laissez-la absorber dans une éponge ferme avant de chauffer. La gélatine permet au remplissage sans cuisson de tenir sa forme tout en conservant une texture crémeuse et à peine fixe plutôt qu'en caoutchouc.",
      "visualCue": {
        "primaryTarget": "Feuilles de gélatine entièrement molles et translucides qui drapent sur les doigts — il ne reste pas de taches raides ou opaques.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les feuilles sont toujours rigides et opaques aux bords, pas complètement hydratées.",
            "action": "Retourner à l'eau froide pendant encore 2 minutes."
          },
          {
            "state": "Perfect",
            "description": "Entièrement mou, transparent et frais. Draps sans résistance. Facile à serrer à sec.",
            "action": "Presser doucement et fondre en crème chaude à l'étape 3."
          },
          {
            "state": "Overdone",
            "description": "Les feuilles ont commencé à se dissoudre dans l'eau, laissant une floraison nuageuse.",
            "action": "Si la plupart sont intacts, procédez. Si elle est dissoute de façon significative, commencez par des feuilles fraîches — vous avez perdu de la force gélatine."
          }
        ]
      },
      "feelCue": "Une feuille de gélatine fleurie ressemble à un morceau de film plastique frais et humide, complètement souple, sans poids et légèrement glissant entre les doigts."
    },
    {
      "nodeId": "step_3",
      "action": "Fouetter",
      "inputs": [
        "ing_06",
        "ing_07"
      ],
      "outputState": "matcha_paste",
      "instructions": "Sirotez la poudre de matcha dans un petit bol — le tamisage n'est pas négociable, car le matcha s'agrippe mal et laissera des taches vertes dans le remplissage, sinon dispersé. Ajouter l'eau chaude (environ 70 à 80 °C, juste hors de l'ébullition — sans bouillir, ce qui dégrade le vert vif et la saveur délicate). À l'aide d'un petit fouet ou d'un matcha, fouetter dans des mouvements serrés 'M' ou 'W' jusqu'à ce que la poudre soit complètement dissoute dans une pâte verte lisse et vive sans grumeaux. Faire fondre la gélatine pressée dans 2 cuillerées à soupe de crème chaude dans une petite casserole à feu très doux, en tourbillonnant jusqu'à dissolution. Incorporer la gélatine dans la pâte de matcha.",
      "visualCue": {
        "primaryTarget": "Une pâte jade-verte lisse et intense, sans grumeaux, ni grumeaux, ni poudre flottante — uniforme et brillante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les taches vertes et les morceaux de poudre sont encore visibles — il semble tacheté, pas lisse.",
            "action": "Sift le matcha d'abord et fouetter plus vigoureusement. Les lumps dans la pâte montreront comme taches sombres dans le gâteau au fromage fini."
          },
          {
            "state": "Perfect",
            "description": "Lumineux, même vert jade, lisse et sans bosse. L'arôme est herbacé, végétal et intensément parfumé.",
            "action": "Laisser refroidir légèrement la pâte avant de la plier dans le mélange de fromage à la crème."
          },
          {
            "state": "Overdone",
            "description": "Le Matcha a été mélangé avec de l'eau bouillante et est devenu un olive-drabe vert terne.",
            "action": "Toujours utilisable mais la couleur et la saveur délicate sont compromises. Conserver la température de l'eau à 70-80°C."
          }
        ]
      },
      "feelCue": "Goûtez une petite quantité de pâte sur un bout de doigt — l'amertume doit être immédiate et intense, puis laissez place à la douceur umami herbacée. Cette pâte concentrée donne au cheesecake son caractère de matcha affirmé."
    },
    {
      "nodeId": "step_4",
      "action": "Incorporer délicatement",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_08",
        "matcha_paste",
        "bloomed_gelatin"
      ],
      "outputState": "cheesecake_filling",
      "instructions": "Battre le fromage à la crème à température ambiante avec le sucre glaçant et le jus de citron jusqu'à ce qu'il soit complètement lisse et sans morceaux — 2 minutes avec un mélangeur à main. Plier dans la pâte de matcha-gélatine jusqu'à coloration uniforme. Dans un bol froid, fouetter la crème lourde froide aux pics fermes. Plier la crème fouettée dans le mélange de fromage à la crème de matcha en trois ajouts, du bas vers le haut, couper et plier doucement pour conserver le volume. Le remplissage final doit être aéré, vert vif, et tenir un pic doux.",
      "visualCue": {
        "primaryTarget": "Un remplissage lisse et vif en mousse vert jade — uniformément coloré, aéré et tenant un pic doux — sans stries blanches de fromage à la crème ou de crème fouettée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries blanches de fromage à la crème non mélangé ou de crème fouettée sont visibles à travers le vert. La texture est inégale.",
            "action": "Plier encore 2 à 3 fois, racler le fond du bol pour attraper des taches blanches non mélangées."
          },
          {
            "state": "Perfect",
            "description": "Uniformement vert jade, lisse, bouffant, tient un pic doux. Ça sent fortement le matcha. Des chutes de la spatule dans des plis lents et aérés.",
            "action": "Verser sur la base réfrigérée et lisser la surface."
          },
          {
            "state": "Overdone",
            "description": "La crème a été surpliée et dégonflée — le remplissage semble dense et lourd, tenant à peine sa structure.",
            "action": "Toujours fonctionnel, le cheesecake sera plus dense et plus crémeux qu'aéré. Versez immédiatement."
          }
        ]
      },
      "feelCue": "Soulevez une spatule pleine: le remplissage doit tenir un monticule doux et paresseux un moment avant de s'installer lentement — aéré et frais, comme la mousse. S'il s'échappe de la spatule, il a été surplié ou la crème n'était pas assez fouettée."
    },
    {
      "nodeId": "step_5",
      "action": "Faire prendre",
      "inputs": [
        "cheesecake_filling",
        "biscuit_base",
        "ing_10"
      ],
      "outputState": "finished_matcha_cheesecake",
      "instructions": "Verser le remplissage sur la base de biscuits réfrigérés et lisser le dessus avec une spatule offset, s'étendant sur les bords. Appuyez doucement sur l'étain sur le comptoir deux fois pour régler les bulles d'air. Couvrir d'un film de collage et réfrigérer pendant au moins 4 heures, ou pendant la nuit — la gélatine a besoin de temps pour se mettre pleinement et les saveurs pour se développer. Avant de servir, poussièrer légèrement la surface avec de la poudre de matcha tamisée à travers un tamis à mailles fines. Relâchez le ressort et coupez avec un couteau chaud et essuyé pour des tranches propres.",
      "visualCue": {
        "primaryTarget": "Un gâteau au fromage vert lisse et vif avec une surface plate, uniforme et une poussière de matcha vert propre – fixé assez fermement pour tenir les bords propres quand tranché.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le remplissage tremble trop lorsque l'étain est bouché — le centre est encore très doux et s'effondrerait quand il n'est pas enclenché.",
            "action": "Réfrigérer plus longtemps — au moins 2 heures de plus. En précipitant un ensemble de gélatine, on obtient un gâteau qui coule plutôt que qui tient."
          },
          {
            "state": "Perfect",
            "description": "Il tient son dôme proprement, tremble au centre lorsqu'il est tapé, tranche avec un visage propre et lisse. Le vert est vif, la poussière matte et même.",
            "action": "Servir froid. Conserver au réfrigérateur jusqu'à 2 jours."
          },
          {
            "state": "Overdone",
            "description": "Pour une gélatine trop longue ou trop longue – caoutchouteuse, généreuse, et qui tient une forme nette sans trembler.",
            "action": "La texture est moins raffinée. Utilisez un peu moins de gélatine la prochaine fois."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur la surface avec un bout de doigt: il devrait donner juste légèrement et ressortre en arrière — pas dur comme du caoutchouc, pas liquide doux. Froid, crémeux, et à faible rendement, comme le meilleur gâteau au fromage est toujours."
    }
  ]
};
