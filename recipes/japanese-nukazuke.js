export default {
  "repoId": "master_japanese_japanesenrukazuke_001",
  "parentRepoId": null,
  "slug": "japanese-nukazuke",
  "author": "ForkRecipe Kitchen",
  "title": "Nukazuke",
  "description": "Les légumes enterrés dans un lit de son de riz assaisonné et laissés au ferment pendant la nuit — émergeant le lendemain matin transformé, avec une texture comprimée, une faible funkiness, et la profondeur terreuse du nuka lui-même.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "fermented",
  "tags": [
    "fermenté",
    "végétalien",
    "Sans gluten",
    "Japonais",
    "son",
    "cornichons",
    "Nuka"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "7 days",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 3,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Son de riz (nuka), cru et frais",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sels de mer grossiers non iodés",
      "ratioValue": 130,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau (chauffée, pour mélange initial)",
      "ratioValue": 800,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Kombu (poule séchée), 10cm pièce",
      "ratioValue": 1,
      "defaultUnit": "piece",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Piments rouges séchés",
      "ratioValue": 2,
      "defaultUnit": "pieces",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Champignon séché",
      "ratioValue": 1,
      "defaultUnit": "piece",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Structure",
      "name": "Légumes pour le décapage: concombre, carotte, daikon, aubergines",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel supplémentaire (pour le salage des légumes avant l'enterrement)",
      "ratioValue": 20,
      "defaultUnit": "g",
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
      "outputState": "nukabed_initial",
      "instructions": "Faire griller le son de riz dans une poêle sèche à feu moyen, en remuant constamment, pendant 5-8 minutes jusqu'à ce qu'il soit doré et parfumé (nourriture, non brûlé). Cool complètement. Dissoudre le sel dans de l'eau chaude. Dans un grand récipient profond et non réactif (roche céramique, pot d'émail ou baignoire en plastique de qualité alimentaire), combiner le son grillé refroidi avec l'eau salée. Mélanger soigneusement avec des mains propres jusqu'à ce qu'il ressemble à du sable humide qui tient ensemble lorsqu'il est pressé. Enterrez le kombu, le chilis séché et le shiitake séché dans le lit. Le nukadoko (lit bran) doit être humide tout au long mais pas mouillé ou sloshy.",
      "visualCue": {
        "primaryTarget": "Un lit de son humide et brun doré qui tient ensemble lorsqu'il est pressé mais n'est pas mouillé ou collant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Son sec et poudreux qui ne tient pas sa forme lorsqu'il est pressé. L'eau n'a pas été complètement absorbée.",
            "action": "Ajouter la cuillère à soupe d'eau par la cuillère à soupe et continuer à mélanger jusqu'à ce que le lit s'agrippe lorsqu'il est pressé."
          },
          {
            "state": "Perfect",
            "description": "Lit lisse et brun qui tient sa forme quand une poignée est pressée mais ne laisse pas l'eau sur votre paume. Texture comme du sable de plage à peine humide. Des odeurs de grains grillés et de sel.",
            "action": "Commencez la phase de conditionnement : enterrez les légumes à la ferraille pendant les 7 premiers jours."
          },
          {
            "state": "Overdone",
            "description": "Le lit est humide et sloshy — l'excès d'eau ajouté. Laissez un résidu boueux sur votre paume lorsqu'il est pressé.",
            "action": "Ajouter le son grillé plus sec une poignée à la fois et mélanger jusqu'à ce que la consistance correcte soit atteinte."
          }
        ]
      },
      "feelCue": "Serrez une poignée — elle devrait tenir ensemble dans un amas et se sentir humide mais ne relâchez pas l'eau lorsqu'elle est pressée fermement. Comme du terreau humide."
    },
    {
      "nodeId": "step_2",
      "action": "Ferment",
      "inputs": [
        "nukabed_initial"
      ],
      "outputState": "conditioned_nukabed",
      "instructions": "Pendant les 7 premiers jours, le nukadoko doit être conditionné pour établir une culture microbienne saine. Deux fois par jour (matin et soir), mélanger le lit entier avec les mains propres du bas vers le haut, enterrer la surface dans le centre et tourner le lit complètement. Cela aérera le lit, préviendra les bactéries anaérobies nuisibles, et répartit les cultures uniformément. Des déchets de légumes de cuisine ensevelis (supports de carottes, feuilles de chou, pelures de concombres — tout ce que vous avez) chaque jour pour nourrir les cultures en développement. Après chaque mélange, appuyez doucement sur le lit. Conserver le récipient à 18-25°C. Le lit est prêt à être utilisé lorsqu'il sent agréablement funky et légèrement aigre — non pas hors de propos, mais vivant.",
      "visualCue": {
        "primaryTarget": "Un lit qui s'est légèrement obscurci, a développé un arôme plus complexe, et a une texture légèrement tacky, unifiée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 2-3 jours, aucun changement d'arôme. Encore des odeurs de son grillé cru et de sel seulement. Pas de changement visuel.",
            "action": "Continuer le mélange deux fois par jour. La culture se développe lentement — soyez patient. La chaleur accélère."
          },
          {
            "state": "Perfect",
            "description": "Après 5 à 7 jours, le lit sent agréablement complexe: terreux, légèrement aigre, légèrement funky, jamais désagréable. La couleur a légèrement obscurci. Il se sent collant et unifié quand mélangé plutôt que sableux.",
            "action": "Jeter les légumes conditionnés et commencer le décapage de vrais légumes."
          },
          {
            "state": "Overdone",
            "description": "Une forte odeur d'ammoniac ou une odeur putride. Moulage de surface noir ou rose visible.",
            "action": "Une odeur d'ammoniac de surface peut être traitée en remuant plus de sel (20g) et en laissant découvert dans un endroit frais pendant une journée. Moulage noir ou rose signifie jeter et recommencer."
          }
        ]
      },
      "feelCue": "Une nukadoko bien conditionnée se sent unie et cohésive lorsqu'elle est tournée — pas sablonneuse ou émiettée. Il a un arôme vivant distinctif: agréable, complexe, terreux, pas désagréable."
    },
    {
      "nodeId": "step_3",
      "action": "Cure",
      "inputs": [
        "conditioned_nukabed",
        "ing_07",
        "ing_08"
      ],
      "outputState": "buried_vegetables",
      "instructions": "Frotter légèrement les légumes avec le sel supplémentaire avant d'enterrer — cela élimine l'humidité de surface et les aide à absorber les saveurs de nuka plus rapidement. Pour les concombres : laisser en entier ou en moitié. Pour les carottes et le daikon: coupé en bâtonnets. Pour l'aubergine : moitié, couper les coupes à travers la chair. Enterrez les légumes complètement dans le nukadoko, en appuyant sur le lit en douceur sur eux. Marquez la position des légumes enterrés. A conserver à 18-22°C ou réfrigérer (le pickling sera plus lent mais plus contrôlé au réfrigérateur). Mélanger le lit deux fois par jour même lorsque les légumes sont enterrés.",
      "visualCue": {
        "primaryTarget": "Légumes entièrement enterrés avec une surface de lit lisse et aucun élément visible au-dessus du son.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Légumes partiellement enterrés avec une certaine surface exposée à l'air.",
            "action": "Appuyez fermement sur le son sur les légumes et ajoutez plus de matériel de lit si nécessaire pour couvrir complètement."
          },
          {
            "state": "Perfect",
            "description": "Légumes entièrement enterrés, surface du lit lisse. Les légumes salins commencent à pleurer visiblement l'humidité dans le lit quand vous les pressez.",
            "action": "Marquez l'emplacement et partez jusqu'au lendemain."
          },
          {
            "state": "Overdone",
            "description": "Trop de légumes enterrés à la fois — le lit est surpeuplé et l'équilibre sel sera perturbé.",
            "action": "Retirer quelques légumes et les cornicher séparément dans la saumure. Enterrer moins d'articles immédiatement."
          }
        ]
      },
      "feelCue": "Appuyez sur le lit sur un légume enterré — vous devriez sentir la résistance ferme du légume sous la surface du lit de son qui donne."
    },
    {
      "nodeId": "step_4",
      "action": "Repos",
      "inputs": [
        "buried_vegetables"
      ],
      "outputState": "nukazuke_pickles",
      "instructions": "Les temps de ramassage varient selon les légumes et la température : concombres à température ambiante, 12-24 heures; carottes et daikon, 24-48 heures; aubergines, 12-18 heures. À la température du réfrigérateur, multiplier les fois par 2-3. Retirer les légumes, racler le lit nuka (retourner au contenant), rincer ou essuyer les légumes doucement avec un chiffon humide, et trancher pour servir. Le lit doit être soigneusement mélangé après chaque utilisation. Continuer le mélange deux fois par jour du nukadoko indéfiniment — un lit entretenu s'améliore au fil des mois et des années.",
      "visualCue": {
        "primaryTarget": "Les légumes ont changé de couleur — le concombre a légèrement jauni, le daikon est devenu translucide, l'aubergine a obscurci et adouci.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes ne goûtent que du sel — aucune saveur de nuka n'a pénétré. La texture est inchangée.",
            "action": "Retournez au lit encore 12-24 heures. La température du lit et la force de culture affectent la vitesse à laquelle la saveur se développe."
          },
          {
            "state": "Perfect",
            "description": "Les légumes ont pris une saveur complexe, terreuse, légèrement aigre nuka sous le sel. Le concombre est jaune. La texture est plus ferme et plus comprimée que brute. Saveur est savoureuse, funky dans la meilleure manière, et rafraîchissant.",
            "action": "Rincer, trancher et servir immédiatement en accompagnement ou avec du riz."
          },
          {
            "state": "Overdone",
            "description": "Les légumes sont très doux et ont une saveur agressive et suralimentée. Assez aigre pour être désagréable. Trop longtemps dans le lit.",
            "action": "Utilisez parcimonieusement comme condiment. Abréviation de la prochaine fois."
          }
        ]
      },
      "feelCue": "Un légume nukazuke se sent plus ferme et plus dense que cru — l'humidité a été retirée et remplacée par la saumure. Il devrait se casser proprement quand il est cassé, pas plier."
    }
  ]
};
