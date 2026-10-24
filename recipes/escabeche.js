export default {
  "repoId": "master_mexican_escabeche_001",
  "parentRepoId": null,
  "slug": "escabeche",
  "author": "ForkRecipe Kitchen",
  "title": "Escabéche (Pickled Jalapeños & Légumes)",
  "description": "Le condiment taqueria qui rend tout meilleur — les jalapeños, les carottes et l'oignon submergés d'une saumure piquante d'origan, de cumin et de laurier, puis laissés la nuit pour adoucir et adoucir dans un cornichon poinçonné et croquant qui éclaire tout ce qu'il touche.",
  "cuisine": "Mexicain",
  "culture": "Mexicain",
  "category": "condiments",
  "tags": [
    "Mexique",
    "marinés",
    "jalapeño",
    "condiment",
    "végétalien"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "24 hrs",
  "ratioSystem": "parts",
  "stars": 1143,
  "forks": 134,
  "contributors": 11,
  "license": "CC-BY-SA",
  "createdAt": "2024-11-20",
  "updatedAt": "2025-10-03",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 4,
    "bitter": 0,
    "umami": 1,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Heat",
      "name": "Jalapeños (découpés en anneaux, avec des graines)",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "serrano chiles (haut)",
        "Poivrons de bananes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Carottes (peautées, tranchées sur le biais, 5mm d'épaisseur)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "fleurs de chou-fleur",
        "radis"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignon blanc (finement coupé en demi-lunes)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "oignons perlés, coupés en deux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "vinaigre distillé blanc",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de cidre de pomme (légèrement sucré)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel, origan séché (Mexicain), grains de poivre noir, feuilles de laurier, graines de cumin séchées",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile neutre (facultatif – pour une finition taqueria)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "Huile d'olive"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saucisse",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_07"
      ],
      "outputState": "sauteed_vegetables",
      "instructions": "Chauffer l'huile dans une casserole moyenne à feu moyen-vif. Ajouter les tranches de carottes et cuire 2-3 minutes jusqu'à ce qu'elles commencent à développer une petite quantité de couleur, mais sont encore fermement croquantes. Ajouter les anneaux jalapeño et les tranches d'oignon. Ajouter et cuire encore 2 minutes — juste assez pour adoucir le bord brut de l'oignon et enrober tout dans l'huile. Ce short sauté (un pas souvent sauté mais essentiel pour la meilleure escabéche de style taqueria) permet à l'huile de porter des saveurs entre les légumes et rend la saumure plus complexe.",
      "visualCue": {
        "primaryTarget": "Les légumes sont encore visiblement fermes et de couleur vive — les jalapeños restent vert foncé, les carottes sont orange vif — mais l'oignon s'est adouci à la translucidité aux bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont complètement crus et l'oignon est encore opaque et croquant.",
            "action": "Faites cuire encore 1-2 minutes. L'huile doit enrober les légumes et commencer l'échange de saveur."
          },
          {
            "state": "Perfect",
            "description": "L'oignon est translucide aux bords. Les carottes ont 1-2 taches de couleur claire mais sont toujours fermes. Les jalapeños sont vert vif et commencent à tourner légèrement terne.",
            "action": "Ajouter immédiatement les ingrédients de saumure pour arrêter la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Les jalapeños sont devenus vert olive terne et les carottes s'adoucissent. L'oignon est complètement boiteux.",
            "action": "Continuez. L'escabéche aura encore un excellent goût, mais les légumes seront plus doux après le décapage."
          }
        ]
      },
      "feelCue": "Ramassez une tranche de carotte avec des pinces — elle devrait fléchir la plus petite quantité lorsqu'elle est maintenue horizontalement, mais quand même casser si elle est courbée. C'est tout à fait juste; la saumure l'adoucira davantage."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "sauteed_vegetables",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "hot_escabeche",
      "instructions": "Ajouter le vinaigre, l'eau, le sel, l'origan, le poivre noir, les feuilles de laurier et les graines de cumin directement dans la casserole avec les légumes. Porter à ébullition à feu vif en remuant pour dissoudre le sel. La saumure doit sentir vif et herbie — le vinaigre dominant, avec une note d'origan en dessous. Une fois bouillis, laisser mijoter pendant 3 minutes, presser doucement les légumes pour s'assurer qu'ils sont tous submergés. Retirer du feu. La saumure chaude continuera à cuire les légumes légèrement pendant qu'elle refroidit.",
      "visualCue": {
        "primaryTarget": "La saumure est claire et très légèrement teintée en vert des jalapeños. Les légumes sont entièrement submergés. La vapeur s'élève agressivement quand il s'agit de l'ébullition.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sel n'est pas complètement dissous — des cristaux visibles au fond du pot. La saumure sent le vinaigre cru sans complexité à base de plantes.",
            "action": "Incorporer jusqu'à ce que tout le sel se dissout. Le sel non dissous crée un décapage inégal."
          },
          {
            "state": "Perfect",
            "description": "Saumure claire, salée et acide à ébullition complète. Tous les légumes submergés. L'odeur est taqueria classique: vinaigre, origan et chile.",
            "action": "Retirer du feu et préparer les pots."
          },
          {
            "state": "Overdone",
            "description": "La saumure a mijoté assez longtemps que les jalapeños commencent à devenir couleur olive et les carottes s'adoucissent.",
            "action": "Passez immédiatement au refroidissement et au jarring. Ne pas mijoter plus loin."
          }
        ]
      },
      "feelCue": "La saumure à la bonne force devrait faire vos yeux de l'eau quand vous penchez sur elle — non pas à partir de fumées mais de la vapeur acide aiguë. Si ça sent doux, ajouter plus de vinaigre."
    },
    {
      "nodeId": "step_3",
      "action": "Frais",
      "inputs": [
        "hot_escabeche"
      ],
      "outputState": "jarred_escabeche",
      "instructions": "Transférer l'escabéche chaude dans des pots de verre propres, en veillant à ce que les légumes soient complètement submergés sous la saumure. Appuyez-les si nécessaire. Sceller librement et laisser refroidir à température ambiante pendant 1 heure, puis réfrigérer pendant au moins 8 heures avant de servir — 24 heures est idéal. La saumure changera de couleur au fur et à mesure que les pigments migreront : les jalapeños la tournent vert pâle, les carottes ajoutent un or chaud et les couches d'oignon deviennent légèrement translucides et lumineuses. Ils ne sont pas prêts à manger jusqu'à ce que les légumes aient eu le temps d'absorber complètement la saumure.",
      "visualCue": {
        "primaryTarget": "Après 24 heures, la saumure est un or vert-olive clair. Les anneaux Jalapeño sont brillants mais légèrement adoucis, les carottes sont cuites, mais tiennent leur forme, les couches d'oignon sont translucides et brillantes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après seulement quelques heures, les légumes ont encore le goût le plus cru avec un enduit de vinaigre plutôt qu'avec une saveur de cornichon profond.",
            "action": "Retournez au réfrigérateur. L'escabéche a besoin d'au moins 8 heures. La profondeur totale se développe à 24 heures."
          },
          {
            "state": "Perfect",
            "description": "Après 24 heures, les légumes sont complètement décapés — aigres, légèrement doux, avec la chaleur du jalapeño mellowed et le complexe saumure et arrondi.",
            "action": "Servir directement à partir du pot. Conservera au réfrigérateur pendant 3-4 semaines."
          },
          {
            "state": "Overdone",
            "description": "Après plusieurs jours, les jalapeños ont tourné l'olive et les carottes sont musquées lorsqu'elles sont pressées.",
            "action": "Encore comestible, mais hacher finement à utiliser comme condiment dans la cuisson plutôt que de servir en entier."
          }
        ]
      },
      "feelCue": "Un anneau d'escabéche jalapeño de 24 heures devrait produire avec une croûte satisfaisante lorsqu'il est mordu — toujours ferme mais pas cru-croûte, la paroi du poivre a absorbé la saumure et transporte l'acide tout au long du parcours."
    }
  ]
};
