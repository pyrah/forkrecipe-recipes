export default {
  "repoId": "master_chinese_chinesechilioil_001",
  "parentRepoId": null,
  "slug": "chinese-chili-oil",
  "author": "ForkRecipe Kitchen",
  "title": "Huile de chili de sichuan",
  "description": "Hong you — une huile de chili sichuan parfumée où l'huile chaude fleurit par étapes sur les aromatiques et les flocons de chili séchés, construisant une chaleur profonde et en couches ponctuée par le picotement lip-numbing de maïs poivré sichuan, avec de l'ail croustillant et de l'échalote en suspension dans l'huile finie.",
  "cuisine": "Chinois",
  "culture": "Sichuan",
  "category": "condiments",
  "tags": [
    "condiment",
    "végétalien",
    "Sans gluten",
    "Chili",
    "Sichuan",
    "croustillant",
    "huile",
    "engourdissement"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "40 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 0,
    "bitter": 1,
    "umami": 3,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Huile neutre (fleur de soleil ou légumes)",
      "ratioValue": 250,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Échalotes, tranchées finement",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "1 petit oignon jaune"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Anis étoilé",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Aboiement de Cassia ou bâtonnet de cannelle",
      "ratioValue": 1,
      "defaultUnit": "piece",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Maïs poivré sichuan",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Heat",
      "name": "Flacons de chili séchés au sichuan (en jing tiao ou similaires)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "Gochugaru coréen pour une version plus douce",
        "flocons de poivre rouge générique"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Graines de sésame grillées",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fry",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "aromatic_oil",
      "instructions": "Mélanger l'huile, l'ail tranché, les échalotes tranchées, l'anis étoilé, l'écorce de cassie et les grains de poivre Sichuan dans une casserole froide. Commencer tout dans l'huile froide — cette méthode d'extraction lente rend les aromatiques lentement sans brûler, en tirant toutes les couches de saveur. Porter à feu moyen-doux et cuire, en remuant occasionnellement, pendant 20 à 25 minutes. Les échalotes et l'ail frirent lentement à des croustilles dorées. Regardez attentivement au cours des 5 dernières minutes — la transition de l'or au feu est rapide. Lorsque les échalotes et l'ail sont d'or profond et croustillant, retirer de la chaleur et de la déformation à travers un tamis à mailles fines, réserver séparément les arômes croustillants et l'huile infusée.",
      "visualCue": {
        "primaryTarget": "Morne doré, échalote croustillante et tranches d'ail flottant dans une huile d'or ambre profonde, toute la casserole sentant l'oignon frit et l'anis.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail et les échalotes sont doux et blonds, pas croustillants. L'huile est encore pâle et sous-développée.",
            "action": "Continuer à frire à feu moyen. La texture croustillante est essentielle : l'ail doux rendra l'huile finie crue et humide."
          },
          {
            "state": "Perfect",
            "description": "Les échalotes et l'ail sont uniformément dorées et croustillantes, comme les meilleures échalotes frites que vous ayez jamais eues. L'huile est d'ambre foncé et sent doux, épicé et grillé.",
            "action": "Retirer immédiatement du feu et de la déformation."
          },
          {
            "state": "Overdone",
            "description": "L'ail et les échalotes sont brun foncé et s'approchent du noir, et l'huile sent amer.",
            "action": "Jeter les aromatiques brûlés. L'huile elle-même peut encore être utilisable si seulement légèrement colorée par les morceaux brûlés."
          }
        ]
      },
      "feelCue": "Une échalote ou une tranche d'ail bien cuite doit se casser proprement entre les doigts — sèche et cassante, non molle ou huileuse. Ce sont tes garnitures."
    },
    {
      "nodeId": "step_2",
      "action": "Bloom",
      "inputs": [
        "aromatic_oil",
        "ing_07",
        "ing_09",
        "ing_10"
      ],
      "outputState": "chili_oil_base",
      "instructions": "Placez les flocons de chili, le sel et les graines de sésame dans un bol assez grand pour permettre l'aspersion. La température de floraison de l'huile importe énormément: trop frais et les flocons de chili simplement raides sans parfum; trop chaud et ils brûlent au carbone. Chauffer l'huile aromatique tendue à 175–180°C (utiliser un thermomètre, ou tester avec un seul flocon de chili — il devrait étourdir immédiatement mais pas noircir en 5 secondes). Verser l'huile chaude sur les flocons de chili en trois étapes : d'abord verser déclenche le étourdissement et assombrit le chili ; ensuite verser approfondit la couleur ; troisième verser incorpore toute poudre restante. Mélanger après chaque verser. L'huile va devenir rouge-orange profonde et odeur fumée-douce et intensément de chili séché.",
      "visualCue": {
        "primaryTarget": "Une huile rouge cramoisi profonde qui a pleinement fleuri le chili — un rouge uniforme, vif, sans flocons pâles ou non apparents.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile était trop froide lorsqu'elle était versée — les flocons de chili sont gonflés, mais l'huile est encore ambre plutôt que rouge profond, et l'odeur est plate.",
            "action": "Réchauffer l'huile à 180°C et verser à nouveau sur une cuillère à soupe fraîche de flocons de chili pour approfondir la couleur."
          },
          {
            "state": "Perfect",
            "description": "Huile pourpre profonde, de couleur spectaculaire, avec des flocons de chili entièrement fleuris. Des odeurs de chili et de sésame séchés sucrés. Les graines de sésame ont transformé un or légèrement plus profond.",
            "action": "Ajouter la sauce soja, remuer et plier dans les arômes croustillants."
          },
          {
            "state": "Overdone",
            "description": "L'huile était trop chaude — les flocons de chili sont devenus noirs immédiatement au contact et l'huile sent l'acride et le carbonisé.",
            "action": "L'huile peut être récupérée si elle est diluée : ajouter 50 ml d'huile fraîche et extirper les flocons les plus noirs. Sinon jetez et recommencez l'étape de la floraison."
          }
        ]
      },
      "feelCue": "L'étape de la floraison devrait produire un étourdissement dramatique et un nuage de vapeur parfumée et rougeâtre — au moment où l'huile chaude frappe le chili, vous devriez sentir le parfum riche et plein de chili séché s'ouvrir."
    },
    {
      "nodeId": "step_3",
      "action": "Assemblage",
      "inputs": [
        "chili_oil_base",
        "ing_08"
      ],
      "outputState": "finished_chinese_chili_oil",
      "instructions": "Alors que l'huile de chili est encore chaude (pas bouillante), remuer dans la sauce de soja. Plier dans les échalotes croustillantes et l'ail réservés. Mélanger pour répartir uniformément — les morceaux croustillants s'assoupliront légèrement en s'asseyant dans l'huile, transformant des craquelins en morsels croustillants. Transférer dans un pot. Laisser refroidir complètement avant de sceller. La saveur se développe et s'approfondit sur 24 heures pendant que tout se mélange — retenez - vous et laissez - la reposer. Le chili croustillant conserve à température ambiante à l'abri de la lumière pendant 2-3 mois. Les morceaux croustillants absorbent l'huile au fil du temps; remuer bien avant chaque utilisation.",
      "visualCue": {
        "primaryTarget": "Une huile rouge bijou remplie de morceaux dorés croustillants d'échalote et d'ail, de flocons de chili et de graines de sésame, belles, texturées et vives.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les aromatiques croustillants ont été omis ou oubliés — huile de chili sans texture.",
            "action": "Plier dans les morceaux croustillants maintenant."
          },
          {
            "state": "Perfect",
            "description": "Une huile magnifique, profondément rouge avec des morceaux croustillants visibles et des graines de sésame distribuées uniformément. Après 24 heures, la saveur est arrondie et complexe – épicée, engourdie (du poivre Sichuan), fumée et profondément salée.",
            "action": "Conserver et utiliser librement."
          },
          {
            "state": "Overdone",
            "description": "Les morceaux croustillants ont complètement ramolli et coulé. L'huile semble uniforme et sombre sans texture.",
            "action": "La saveur est intacte. Faire frire un lot frais d'ail et d'échalotes dans une petite quantité d'huile et ajouter au pot."
          }
        ]
      },
      "feelCue": "Sur la langue, l'huile de chili finie devrait produire deux sensations distinctes : une brûlure aiguë et immédiate de capsaïcine à partir du chili, suivie 30 secondes plus tard par le teintage électrique unique et l'engourdissement léger du maïs poivré Sichuan."
    }
  ]
};
