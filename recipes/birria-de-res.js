export default {
  "repoId": "master_mexican_birria_de_res_001",
  "parentRepoId": null,
  "slug": "birria-de-res",
  "author": "ForkRecipe Kitchen",
  "title": "Birria de Res",
  "description": "La braise de boeuf, braisée dans un chili consommé complexe jusqu'à ce qu'elle soit livrée et déchiquetée — la braise de Jalisco, devenue une tendance taco, servit avec son bouillon de trempage écarlate.",
  "cuisine": "Mexicain",
  "culture": "Jalisco",
  "category": "proteins",
  "tags": [
    "boeuf",
    "Mexique",
    "braisés",
    "Guajillo",
    "consommé"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "5 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Bouchée de boeuf (3-4 cm)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "épaule d'agneau",
        "épaule de chèvre"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Côtes courtes de boeuf",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "queue d'ox"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Base",
      "name": "Guajillo chilies (séchées, ensemencées)",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "Nouveau-Mexique"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Base",
      "name": "Piments anchos (séchés, pédés et ensemencés)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "Mulato chilies"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Morita chipotle chiplis (séchés)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "Chipotle en adobo (1 c. à soupe)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Oignon blanc (approximativement haché)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gousses d'ail",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Cumin entier, origan séché, girofles, grains de poivre noir, grillés et moulus",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Bouillon ou eau de boeuf",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "toasted_soaked_chilies",
      "instructions": "Appuyez chaque chili séché à plat sur une poêle comale ou en fonte sèche et très chaude pendant 10 secondes de chaque côté jusqu'à ce qu'il soit parfumé et légèrement gonflé. Transférer immédiatement dans un bol, couvrir d'eau simplement bouillie et tremper de 20 à 30 minutes jusqu'à ce qu'il soit complètement doux et souple. Réserver le liquide de trempage.",
      "visualCue": {
        "primaryTarget": "Les chilis ont soufflé légèrement et sont devenus un brun rouge plus léger et uniforme. La cuisine sent les fruits secs et les épices chaudes, pas l'omble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les chilis sont chauds mais limpides; aucun parfum libéré; surface inchangée.",
            "action": "Appuyez plus fort sur la surface chaude et augmentez la chaleur."
          },
          {
            "state": "Perfect",
            "description": "Les chilis sont parfumés et légèrement cloqués, la chair est passée de terne à brillante de la chaleur, les bords peuvent être légèrement obscurcis mais pas noirs.",
            "action": "Submerger immédiatement dans l'eau chaude pour arrêter de griller."
          },
          {
            "state": "Overdone",
            "description": "Les chilis sont entièrement noircis et sentent acrides; la chair est fragile.",
            "action": "Jeter les morceaux les plus brûlés; compléter avec des chilis non grillés pour équilibrer l'amertume."
          }
        ]
      },
      "feelCue": "Après trempe, les piments doivent se sentir complètement souples et donner facilement lorsqu'ils sont pressés — il ne reste pas de taches raides ou croquantes."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "toasted_soaked_chilies",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "adobo_marinade",
      "instructions": "Égoutter les piments trempés, réserver l'eau de trempe. Mélanger les piments avec l'oignon, l'ail, les épices broyées grillées et le vinaigre. Ajouter 100 ml de l'eau de trempage réservée et mélanger à haute pendant 2 minutes complètes jusqu'à ce que complètement lisse. Passez à travers un tamis à mailles moyennes, appuyez fermement pour extraire toute la pâte. Jeter les solides secs laissés dans le tamis. L'adobo devrait être profondément rouge, lisse et versable.",
      "visualCue": {
        "primaryTarget": "Une sauce rouge écarlate profonde, complètement lisse, versant comme un mince ketchup. Pas de fragments de peau ou de texture gritty.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore épaisse avec des morceaux de peau de chili visibles et des brins d'oignon fibreux.",
            "action": "Mélanger 2 minutes de plus puis appuyer fermement à travers le tamis."
          },
          {
            "state": "Perfect",
            "description": "Liquide lisse, brillant, rouge brique qui coule proprement dans le tamis et enveloppe un doigt uniformément. Des odeurs de fruits secs, de terre et de chaleur douce.",
            "action": "Verser le boeuf pour mariner."
          },
          {
            "state": "Overdone",
            "description": "Adobo a été mélangé si longtemps qu'il est chaud; le rendement tamisé est très mince.",
            "action": "Procéder — l'adobo mince va encore aromatiser le boeuf et se concentrer pendant la cuisson."
          }
        ]
      },
      "feelCue": "Adobo bien tamisé se sent parfaitement lisse sur le bout des doigts — soyeux comme une purée de tomate mince sans aucun grain."
    },
    {
      "nodeId": "step_3",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "ing_02",
        "adobo_marinade",
        "ing_11"
      ],
      "outputState": "marinated_beef",
      "instructions": "Assaisonner généreusement le bœuf de sel. Verser l'adobo sur le bœuf dans un grand bol ou un sac à fermeture éclair, en retournant les morceaux pour enrober chaque surface. Couvrir et réfrigérer pendant au moins 2 heures, idéalement une nuit. Plus la marination est longue, plus la pénétration du chili dans l'intérieur de la viande est profonde.",
      "visualCue": {
        "primaryTarget": "Chaque surface de chaque morceau de boeuf est recouverte d'un adobo rouge-orange profond sans taches grises nues.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Certains morceaux de boeuf ont des taches nues ou de fines taches d'adobo sur un seul côté.",
            "action": "Recoller, presser l'adobo dans toutes les surfaces; mariner plus longtemps."
          },
          {
            "state": "Perfect",
            "description": "Le boeuf est uniformément recouvert d'une couche épaisse, collante, rouge brique. Le bol a très peu d'adobo excédentaire — la plupart est sur la viande.",
            "action": "Transférer le boeuf et toute la marinade dans une casserole ou un four hollandais."
          },
          {
            "state": "Overdone",
            "description": "Le boeuf a mariné au-delà de 24 heures; la texture de surface peut être légèrement musquée par l'acide.",
            "action": "La saveur sera toujours excellente; procéder à la louange."
          }
        ]
      },
      "feelCue": "Les morceaux de bœuf marinés se sentent lisses et lourds, l'adobo grippant comme une pâte dense. L'odeur est fruitée, terreuse et délicatement épicée, et non pas crue."
    },
    {
      "nodeId": "step_4",
      "action": "Brise",
      "inputs": [
        "marinated_beef",
        "ing_10"
      ],
      "outputState": "braised_birria",
      "instructions": "Transférer le boeuf mariné et toute la marinade dans un grand pot lourd. Ajouter le bouillon de bœuf restant jusqu'à ce que la viande soit à peine submergée. Porter à ébullition, écrémer toute mousse qui monte, puis réduire à la plus basse mijoter. Couvrir soigneusement et brasser pendant 3,5-4 heures jusqu'à ce que le bœuf soit complètement tendre et s'écroule lorsqu'il est pressé. Alternativement, braser dans un four de 160 C (325 F). Vérifiez chaque heure et ajoutez de l'eau si le liquide tombe sous la moitié.",
      "visualCue": {
        "primaryTarget": "Les morceaux de boeuf sont déchiquetables au toucher de deux fourchettes; le bouillon (consommé) est un liquide aromatique riche, profondément orange-rouge.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le boeuf résiste lorsqu'il est pressé à l'aide d'une fourchette; il tire dans des morceaux à cordes plutôt que de le déchiqueter proprement.",
            "action": "Continuez à faire du louage; chuck et les côtes ont besoin de temps — ne vous précipitez pas."
          },
          {
            "state": "Perfect",
            "description": "Le boeuf s'effondre sans résistance. L'os des côtes courtes glisse proprement. Consommé est rouge profond avec un éclat visible de graisse à la surface.",
            "action": "Retirer le bœuf et le déchiqueter; écrémer l'excès de graisse du consommé (ou le garder pour les tortillas frites)."
          },
          {
            "state": "Overdone",
            "description": "Le boeuf s'est désintégré dans des fibres très fines et le consommé s'est réduit à une pâte.",
            "action": "Ajouter de l'eau au consommé pour restaurer la consistance de la soupe ; le bœuf déchiqueté est encore excellent."
          }
        ]
      },
      "feelCue": "Un mandrin bien braisé fond entre le pouce et l'index comme du pain mouillé — donnant sans résistance, libérant des jus aromatiques riches en gras."
    }
  ]
};
