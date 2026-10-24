export default {
  "repoId": "master_italian_chicken_piccata_001",
  "parentRepoId": null,
  "slug": "chicken-piccata",
  "author": "ForkRecipe Kitchen",
  "title": "Piccata de poulet",
  "description": "Des découpettes minces poncées s'emparaient d'un or qui bordait le bronze, puis se noyaient dans une sauce poêlée au citron et brillaient de câpres. Le beurre monte à la dernière seconde, transformant une réduction acide en quelque chose de brillant et rond.",
  "cuisine": "Italien",
  "culture": "Italien-Américain",
  "category": "proteins",
  "tags": [
    "Piccata",
    "poulet",
    "Italien",
    "Câpres",
    "citron",
    "pan-sauce"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 5,
    "bitter": 1,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Poitrines de poulet sans peau désossées (livres à 1/4 de pouce)",
      "ratioValue": 2,
      "defaultUnit": "large",
      "substitutions": [
        "Découpes de veau",
        "Morceaux de poitrine de dinde"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Farine à usage général (pour le dragage)",
      "ratioValue": 0.5,
      "defaultUnit": "cup",
      "substitutions": [
        "farine de riz (sans gluten, plus croquante)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 6,
      "defaultUnit": "tbsp",
      "substitutions": [
        "beurre végétal"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "huile neutre"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Vin blanc sec",
      "ratioValue": 0.5,
      "defaultUnit": "cup",
      "substitutions": [
        "bouillon de poulet avec 1 c. à thé vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Stocks de poulet",
      "ratioValue": 0.25,
      "defaultUnit": "cup",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 3,
      "defaultUnit": "tbsp",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Umami",
      "name": "Câpres blanchies, égouttées",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": [
        "olives vertes, coupées en tranches"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel casher et poivre noir",
      "ratioValue": 1,
      "defaultUnit": "to taste",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Herb",
      "name": "Persil frais à feuilles plates, haché",
      "ratioValue": 2,
      "defaultUnit": "tbsp",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Livre",
      "inputs": [
        "ing_01"
      ],
      "outputState": "pounded_cutlets",
      "instructions": "Butterfly chaque poitrine de poulet ou de moitié horizontalement pour créer deux découpettes fines. Placez entre deux feuilles d'enveloppe en plastique et livre avec un maillet de viande ou une broche de laminage à une épaisseur égale de 1/4 po. Assaisonner généreusement les deux côtés de sel et de poivre. Draguer dans la farine, secouer tout excès — un manteau nu et poussiéreux est ce que vous voulez, pas une croûte épaisse.",
      "visualCue": {
        "primaryTarget": "Même les petites coupures avec un film fantomatique de farine de chaque côté. Pas d'embrouille. La forme du poulet est visible à travers la farine.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les découpes sont encore épaisses au centre — la bosse mammaire est intacte. La farine est irrégulière.",
            "action": "Retourner à l'enveloppe plastique et battre le centre épais plus agressivement. Réinitialisez après avoir frappé."
          },
          {
            "state": "Perfect",
            "description": "Épaisseur uniforme de 1/4 po bord à bord. Une fine, même couche de farine qui adhère à la surface piquante. Shaking ne laisse aucune bouffée de farine molle.",
            "action": "Sear immédiatement — ne laissez pas les cutlets farinés s'asseoir ou ils vont vapeur et devenir collants."
          },
          {
            "state": "Overdone",
            "description": "Les découpes ont déchiré des trous au centre à cause de la surpêche. Une croûte de farine épaisse provenant d'un dragage excessif.",
            "action": "Travaillez avec ce que vous avez — faites cuire soigneusement pour éviter que les taches déchirées sèchent plus rapidement."
          }
        ]
      },
      "feelCue": "Pounded correctement, la découpe se sent comme un morceau épais de tissu de chamois — souple, légèrement printanière, sans crête centrale épaisse lorsque vous passez votre pouce dessus."
    },
    {
      "nodeId": "step_2",
      "action": "Sear",
      "inputs": [
        "pounded_cutlets",
        "ing_03",
        "ing_04",
        "ing_09"
      ],
      "outputState": "seared_cutlets",
      "instructions": "Chauffer 2 cuillères à soupe de beurre et toute l'huile d'olive dans une poêle large et lourde à feu moyen-vif jusqu'à ce que la mousse de beurre s'abaisse et que la poêle mijote. Éloignez-vous de vous en une seule couche. Ne pas fouler — cuire en lots si nécessaire. Entrer 3-4 minutes sans bouger jusqu'à ce que l'or soit profond. Flip et faire cuire encore 1-2 minutes. Transférer dans une assiette chaude et dans une tente.",
      "visualCue": {
        "primaryTarget": "Croûte dorée profonde sur le premier côté avec des bords définis. Le sommet passe du rose au blanc à mesure que la chaleur monte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La découpe est encore blonde pâle et libère de la poêle avec résistance lorsque vous essayez de la retourner. La vapeur monte.",
            "action": "Laissez - la tranquille — elle libère encore de l'humidité. La protéine se libérera naturellement lorsque la croûte sera réglée."
          },
          {
            "state": "Perfect",
            "description": "Riche ambre-or sur le fond, libérant proprement. Les bords sont devenus entièrement blancs et le centre est rose pâle. Des odeurs de farine grillée et de beurre.",
            "action": "Flip et cuire 1-2 minutes sur le deuxième côté. Retirer dans une assiette chaude."
          },
          {
            "state": "Overdone",
            "description": "Croûte brune devenant sombre, les bords noircissent. Fumer plutôt que de la vapeur provenant de la poêle.",
            "action": "Flip immédiatement et retirer de la chaleur 60 secondes plus tard. Le fond fera encore une bonne sauce."
          }
        ]
      },
      "feelCue": "Appuyez sur la partie la plus épaisse de la découpe de mer — elle devrait donner comme une éponge ferme et le ressort en arrière. S'il se sent dur, il est trop cuit; s'il se sent cru et sec, il a besoin de plus de temps."
    },
    {
      "nodeId": "step_3",
      "action": "Déglacement",
      "inputs": [
        "seared_cutlets",
        "ing_05",
        "ing_06"
      ],
      "outputState": "reduced_sauce_base",
      "instructions": "Verser l'excès de graisse de la poêle, laissant le goût doré. Retourner la poêle à feu moyen-élevé. Ajouter le vin blanc et le bouillon, grattant tous les morceaux brunis du fond avec une cuillère en bois. Réduire de moitié — environ 2 minutes d'ébullition vigoureuse. Le liquide doit se concentrer et l'odeur d'alcool doit avoir entièrement cuit.",
      "visualCue": {
        "primaryTarget": "Un liquide mince et rapidement bouillonnant avec une teinte dorée du fond. Réduction visible de la poêle lorsqu'elle se termine.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est encore de couleur légère et sent fortement le vin cru. Le fond de la poêle n'est pas complètement gratté.",
            "action": "Augmenter la chaleur et gratter de façon plus agressive. Faites cuire encore 60-90 secondes."
          },
          {
            "state": "Perfect",
            "description": "Le liquide a diminué de moitié. Doré, sirupeux aux bords de la poêle. Des odeurs de poulet concentré et de vin cuit — pas d'alcool brut.",
            "action": "Ajouter le jus de citron et les câpres."
          },
          {
            "state": "Overdone",
            "description": "Le liquide s'est réduit à une glaçure foncée accrochée au fond de la poêle. Ça commence à fumer.",
            "action": "Ajouter immédiatement un jet de stock pour se détendre. La couleur profonde donnera toujours de la saveur."
          }
        ]
      },
      "feelCue": "Plongez une cuillère et laissez tomber une goutte dans la poêle — réduite correctement, elle devrait se mettre un moment avant de s'étendre, plutôt que de courir immédiatement comme de l'eau."
    },
    {
      "nodeId": "step_4",
      "action": "Monter",
      "inputs": [
        "reduced_sauce_base",
        "ing_07",
        "ing_08",
        "ing_03",
        "ing_10"
      ],
      "outputState": "finished_piccata",
      "instructions": "Réduire la chaleur à faible. Ajouter le jus de citron et les câpres à la base de sauce réduite. Retourner les découpettes de poulet dans la poêle et laisser mijoter 1 minute pour réchauffer. Retirer du feu et ajouter le reste du beurre froid en morceaux, en agitant constamment la poêle jusqu'à ce que chaque morceau fond et incorpore. Ajouter le persil. La sauce doit avoir l'air brillante et légèrement épaissie — opaque, non transparente. Servir immédiatement.",
      "visualCue": {
        "primaryTarget": "Une sauce à l'or pâle et opaque qui enveloppe l'arrière d'une cuillère. Le beurre est complètement émulsifié — pas de pools de graisse ou de stries visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et transparente, qui sort des coupures comme de l'eau. Le beurre n'est pas émulsifié: vous pouvez voir des gouttelettes de graisse.",
            "action": "Continuez à tourner la poêle hors du feu. Si elle a cassé, ajouter une cuillère à café d'eau froide et tourner vigoureusement."
          },
          {
            "state": "Perfect",
            "description": "La sauce est d'or pâle, brillante, et enrobe l'arrière d'une cuillère. Il s'accroche au poulet dans une fine couche scintillante. sent le citron, le beurre et les câpres.",
            "action": "Assieds-toi immédiatement — les sauces au beurre se brisent."
          },
          {
            "state": "Overdone",
            "description": "La sauce a cassé — vous pouvez voir une piscine de beurre clair séparé des solides blancs. La sauce semble grasse et fine.",
            "action": "Retirer du feu. fouetter dans 1 à 2 c. à thé d'eau froide ou une éclaboussure de bouillons froids et tourbillonner agressivement pour réémulsionner."
          }
        ]
      },
      "feelCue": "Inclinez la casserole — la sauce doit se déplacer dans une seule feuille unifiée, en enrobant le fond de la poêle comme elle glisse plutôt que de se séparer en zones huileuses et aqueuses."
    }
  ]
};
