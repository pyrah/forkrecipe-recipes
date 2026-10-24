export default {
  "repoId": "master_cuban_cuban_black_beans_001",
  "parentRepoId": null,
  "slug": "cuban-black-beans",
  "author": "ForkRecipe Kitchen",
  "title": "Haricots noirs cubains (Frijoles Negros)",
  "description": "Un sofrito d'oignon, de poivre vert et d'ail cuit jusqu'à une base riche et sucrée transporte des haricots noirs à travers une longue mijoter jusqu'à ce que le liquide devienne épais et sombre comme l'encre – assaisonné de cumin et d'un éclat de vinaigre ajouté à la fin, la luminosité coupe à travers la richesse profonde et terreuse comme une note nette sur un accord bas.",
  "cuisine": "Cubains",
  "culture": "Cubains",
  "category": "grains",
  "tags": [
    "Cubains",
    "haricots",
    "végétalien",
    "sofrito",
    "cuits lentement"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 1398,
  "forks": 156,
  "contributors": 18,
  "license": "CC-BY-SA",
  "createdAt": "2024-07-07",
  "updatedAt": "2025-06-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 0,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Fèves noires séchées (poêlées la nuit ou en conserve)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "haricots noirs en conserve (réduire le temps de mijoter jusqu'à 30 min)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignon jaune (en dés)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon blanc"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Poivre vert (en dés)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre de cubanelle"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail (mincées)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Cumin",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "saindoux pour une version plus riche et non végétalienne"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme ou vin blanc sec",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin rouge"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mijoter",
      "inputs": [
        "ing_01"
      ],
      "outputState": "cooked_beans",
      "instructions": "Si vous utilisez des haricots secs (séchés toute la nuit), égouttez et rincer. Placer dans une grande casserole et couvrir avec 8cm d'eau froide. Porter à ébullition à feu vif, puis laisser mijoter régulièrement. Cuire de 60 à 90 minutes jusqu'à ce que les haricots soient complètement tendres — ils devraient se broyer facilement entre deux doigts. Assaisonner avec du sel seulement quand il est complètement doux; le sel ajouté avant la tendresse durcit la peau et prolonge significativement le temps de cuisson. Réserver 2 tasses du liquide de cuisson des haricots avant égouttage.",
      "visualCue": {
        "primaryTarget": "Les haricots sont uniformément tendres et ils sont gonflés à environ deux fois leur taille sèche. Le liquide de cuisson est devenu violet-noir profond et est légèrement épais.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les haricots sont toujours crayeux et fermes au centre quand ils sont mordus. La peau est intacte mais l'intérieur n'est pas doux.",
            "action": "Continuer à mijoter et tester toutes les 15 minutes. Ne salez pas encore."
          },
          {
            "state": "Perfect",
            "description": "Les haricots s'écrasent complètement entre deux doigts sans résistance. Le liquide de cuisson est noir foncé.",
            "action": "Assaisonner de sel maintenant. Réserver 2 tasses de liquide de cuisson et d'égouttage."
          },
          {
            "state": "Overdone",
            "description": "Les haricots se divisent et commencent à se dissoudre dans le liquide de cuisson. Le liquide est très épais.",
            "action": "Procéder — les haricots partiellement dissous rendront le plat final plus crémeux. Utilisez tout le liquide et réduisez moins à la fin."
          }
        ]
      },
      "feelCue": "Prenez un haricot entre votre vignette et l'index et appliquez une pression douce — un haricot parfaitement cuit devrait s'effondrer complètement avec une force minimale, ne laissant aucun centre crayeux."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "sofrito",
      "instructions": "Chauffer l'huile d'olive dans un grand pot à fond lourd à feu moyen. Ajouter l'oignon en dés et le poivre vert. Cuire en remuant de temps en temps, pendant 8-10 minutes jusqu'à ce qu'il soit complètement doux et qu'il commence à s'orner. Ajouter l'ail et le cumin. Faire cuire encore 90 secondes, en remuant constamment, jusqu'à ce que l'ail soit parfumé et que le cumin fleurisse dans la graisse, sentant grillé et chaud. La sofrito devrait ressembler à une confiture épaisse et verte.",
      "visualCue": {
        "primaryTarget": "Une pâte d'oignon et de poivre doux et confitureux – translucide, dorée et significativement réduite en volume par rapport à l'état brut. Il ne reste pas de pièces blanches ou croquantes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon et le poivre sont encore croquants et blancs opaques. Le mélange a l'air aqueux, pas jammy.",
            "action": "Continuer la cuisson à feu moyen. La sofrito peu cuite donne au plat fini une saveur crue et dure."
          },
          {
            "state": "Perfect",
            "description": "Complètement translucide, oignon doré et poivre qui ont fondu dans une base cohésive et parfumée. La graisse s'est légèrement séparée autour des bords.",
            "action": "Ajouter l'ail et le cumin, puis ajouter immédiatement les haricots."
          },
          {
            "state": "Overdone",
            "description": "Sofrito s'assombrit aux bords et commence à coller au pot. L'ail peut être brunissant.",
            "action": "Réduire la chaleur et ajouter un jet d'eau pour déglacer. Le sofrito brun rendra les haricots légèrement amers."
          }
        ]
      },
      "feelCue": "Un sofrito bien cuit doit sentir sucré et salé simultanément — douceur d'oignon caramélisée, légère amertume du poivre cuit, et une floraison chaude de cumin qui se lève dans une seule vague aromatique."
    },
    {
      "nodeId": "step_3",
      "action": "Braiser",
      "inputs": [
        "sofrito",
        "cooked_beans",
        "ing_07"
      ],
      "outputState": "frijoles_negros",
      "instructions": "Ajouter les haricots cuits dans la casserole de sofrito avec le liquide de cuisson réservé. Mélanger et laisser mijoter. Cuire à découvert pendant 20-30 minutes, en remuant occasionnellement, jusqu'à ce que le liquide ait diminué et épaissi considérablement — il devrait enrober l'arrière d'une cuillère et paraître brillant. Dans les 2 dernières minutes de cuisson, ajouter le vinaigre ou le vin blanc. Ne pas cuire après avoir ajouté le vinaigre; vous voulez que la luminosité soit présente dans le plat fini, pas cuit loin. Goûtez et ajustez le sel.",
      "visualCue": {
        "primaryTarget": "Une sauce intensement sombre, brillante et épaisse enveloppant les haricots. La surface du liquide se déplace à peine lorsque le pot est bouché. Une cuillère traînée à travers elle laisse un sentier qui se remplit lentement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est aqueux et sombre mais pas épais. Il s'échappe rapidement de la cuillère. Les haricots ont un goût séparé de la sauce.",
            "action": "Continuer à réduire à feu moyen, à découvert. Mélanger plus souvent car il épaissit pour éviter de coller."
          },
          {
            "state": "Perfect",
            "description": "Bouillon épais, brillant et aromatisé qui s'accroche à chaque fève. La surface est légèrement visqueuse. Le goût est complexe : terreux, salé, avec un lifting acide propre.",
            "action": "Retirer du feu. Ajouter le vinaigre si ce n'est pas déjà fait, remuer et servir."
          },
          {
            "state": "Overdone",
            "description": "Les haricots sont assis dans une pâte épaisse. Le bas commence à coller et à brûler.",
            "action": "Ajouter de l'eau ou du stock pour se détendre, remuer du fond pour incorporer les bits collés, et retirer de la chaleur."
          }
        ]
      },
      "feelCue": "Mélanger le pot et écouter — les negros de frites bien épaissies font un bruit lourd et lent, car les bulles poussent à travers le liquide visqueux, et non pas une bouillie fine et rapide."
    }
  ]
};
