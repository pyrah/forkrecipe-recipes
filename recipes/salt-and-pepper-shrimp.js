export default {
  "repoId": "master_chinese_salt_and_pepper_shrimp_001",
  "parentRepoId": null,
  "slug": "salt-and-pepper-shrimp",
  "author": "ForkRecipe Kitchen",
  "title": "Crevettes de sel et de poivre",
  "description": "Des crevettes entières de wok frites cantonaises qui arrivent à la table crépitantes et parfumées — les coquilles frites à une croûte éclatante que vous mangez entière, la chair sous à peine cuite et sucrée, enterrée sous des confettis d'ail, d'échon et de poivre blanc.",
  "cuisine": "Chinois",
  "culture": "Cantonais",
  "category": "seafood",
  "tags": [
    "Produits de la mer",
    "wok",
    "cantonais",
    "frits",
    "crevettes",
    "Ail"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "30 min",
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
    "sour": 0,
    "bitter": 1,
    "umami": 4,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Grandes crevettes (pâtes), décortiquées",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "grandes crevettes tigre"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Farine de maïs",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "fécule de pomme de terre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile neutre, pour friture de wok",
      "ratioValue": 500,
      "defaultUnit": "ml",
      "substitutions": [
        "huile de tournesol"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Gousses d'ail, finement hachées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignons de printemps (épitons), tranchés finement",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Heat",
      "name": "Frissons rouges frais, tranchés finement (facultatif mais traditionnel)",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "flocons de piment séchés"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Poivre blanc moulu",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Poudre de cinqpices",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Huile de sésame, pour finir",
      "ratioValue": 5,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saison",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_07",
        "ing_08",
        "ing_09"
      ],
      "outputState": "coated_shrimp",
      "instructions": "Les crevettes sont complètement sèches avec du papier de cuisine — toute humidité de surface fera cracher violemment l'huile et empêchera la coquille de se croquer. Tuer dans la fécule de maïs pour enrober très légèrement — juste assez pour une poussière à peine là, pas une pâte épaisse. Mélanger la moitié du sel, le poivre blanc et le cinq-pice.",
      "visualCue": {
        "primaryTarget": "Crevettes enrobées de fécule de maïs assaisonnée",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crevettes sont encore visiblement humides. La fécule de maïs est entachée de taches humides.",
            "action": "Pat sèche et lance encore. Les crevettes mouillées vont s'évaporer au lieu d'agglomérer."
          },
          {
            "state": "Perfect",
            "description": "Chaque crevette a une poussière blanche très faible, à peine visible mais présente. Les coquilles se sentent légèrement collantes au toucher. Pas d'embrouille.",
            "action": "Faire frire immédiatement — la fécule de maïs absorbera rapidement l'humidité et deviendra collante si elle reste."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes sont fortement recouvertes d'amidon de maïs épais, plus comme une crevette battue.",
            "action": "Agiter vigoureusement l'excès. Un mince revêtement est le but, pas un revêtement."
          }
        ]
      },
      "feelCue": "Une crevette enrobée doit se sentir sèche et très légèrement poudreuse à l'extérieur, non glissante ni mouillée. La coquille doit déjà se sentir légèrement rigide de l'amidon."
    },
    {
      "nodeId": "step_2",
      "action": "Fry",
      "inputs": [
        "ing_03",
        "coated_shrimp"
      ],
      "outputState": "fried_shrimp",
      "instructions": "Chauffer l'huile dans un wok sur la plus haute chaleur possible à 190 C (375 F). Faire frire les crevettes en lots — de 8 à 10 à la fois — pendant exactement 60 à 75 secondes. Les coquilles s'étourdiront agressivement et tourneront en rouge orange vif. Retirer avec une araignée et égoutter sur une grille. Ne pas surfricher — les crevettes continuent à cuire à partir de la chaleur résiduelle.",
      "visualCue": {
        "primaryTarget": "Crevettes dans l'huile chaude",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coquilles sont roses mais toujours translucides dans les endroits. Les crevettes flottent lentement dans l'huile. 60 secondes ne se sont pas écoulées.",
            "action": "Tenez plus longtemps, mais regardez attentivement. La fenêtre entre crevettes crues et surcuites n'est que de 30 secondes."
          },
          {
            "state": "Perfect",
            "description": "Les coquilles sont vives, même orange-rouge et ont croustillé visiblement — vous pouvez les entendre craquer faiblement lorsqu'elles sont levées de l'huile. Les crevettes sont en forme de C serrée. Les têtes (si on) sont dorées et parfumées.",
            "action": "Retirer immédiatement et égoutter. Passez à l'étape wok-toss alors que l'huile est encore chaude."
          },
          {
            "state": "Overdone",
            "description": "Les coquilles commencent à s'assombrir vers le brun rouge. Les crevettes se sont serrées dans une boucle très serrée et se sentent fermes.",
            "action": "Supprimer immédiatement. La chair à l'intérieur peut être légèrement surcuite mais la coquille sera encore croquante."
          }
        ]
      },
      "feelCue": "Ramassez une crevette frite par la queue — elle devrait se sentir étonnamment légère et rigide, la coquille presque papier-crisp. Quand vous mordez la coquille, elle devrait se briser avec une croûte très audible."
    },
    {
      "nodeId": "step_3",
      "action": "Découpe",
      "inputs": [
        "fried_shrimp",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_10"
      ],
      "outputState": "finished_salt_and_pepper_shrimp",
      "instructions": "Verser la majeure partie de l'huile de friture, laissant environ 1 cuillère à soupe dans le wok. Revenez à la chaleur élevée. Ajouter l'ail, la plupart de l'oignon de printemps et le piment tranché. Faire frire pendant 30 secondes jusqu'à ce que l'ail soit doré et parfumé. Ajouter les crevettes frites au wok et jeter furieusement pendant 30 secondes pour enrober le mélange aromatique. Assaisonner avec le reste du sel et le poivre blanc. Arroser d'huile de sésame et jeter une fois de plus. Servir immédiatement, garni d'oignon de printemps restant.",
      "visualCue": {
        "primaryTarget": "Crevettes aromatiques dans le wok",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'ail est encore pâle et frais. Les aromatiques n'ont pas eu le temps de fleurir.",
            "action": "Verser à feu vif pendant encore 30 secondes — l'ail doit devenir doré pour perdre sa brutité."
          },
          {
            "state": "Perfect",
            "description": "L'ail est doré et parfumé. Chaque crevette est brillante avec de l'huile de sésame et tachetée d'ail croustillant, d'échalon vert et de piment. Les coquilles restent audiblement croquantes. Le wok sent l'ail grillé, le sésame et le poivre blanc.",
            "action": "Assortir immédiatement et servir à la table sans délai."
          },
          {
            "state": "Overdone",
            "description": "L'ail est brun foncé ou noir. Une odeur amère et acride dans le wok.",
            "action": "Retirer les morceaux d'ail foncé si possible. L'amertume dominera le plat s'il reste."
          }
        ]
      },
      "feelCue": "Mangez une crevette immédiatement du wok — la coquille devrait se briser entre vos dents avec une fissure distincte, révélant la chair douce et à peine cuite en dessous. Si la coquille est douce et coriace, l'huile n'était pas assez chaude."
    }
  ]
};
