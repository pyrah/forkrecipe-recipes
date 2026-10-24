export default {
  "repoId": "master_vietnamese_bun-bo-hue-broth_001",
  "parentRepoId": null,
  "slug": "bun-bo-hue-broth",
  "author": "ForkRecipe Kitchen",
  "title": "Bún Bò Huш Broth",
  "description": "Le bouillon royal de bœuf épicé et de porc de Hu. — parfumé de citronnelle, teint d'un ambre profond avec de l'annatto, et grimpé avec de la pâte de crevette fermentée (m.m. ru.) pour une complexité qui le distingue de la pho.",
  "cuisine": "Vietnamiens",
  "culture": "Hue",
  "category": "stocks",
  "tags": [
    "vietnamese",
    "teinte",
    "porc",
    "boeuf",
    "citronnelle",
    "épicé",
    "Pâte à crevettes"
  ],
  "difficulty": 4,
  "activeTime": "1 hr",
  "totalTime": "5 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Shin de boeuf (os) ou os des jambes de boeuf",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "queue d'ox pour la gélatine plus profonde"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Trotters de porc ou os du cou de porc",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "côtes de porc"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 3000,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Pâtes de citronnelle, concassées et coupées en morceaux de 5 cm",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Échalotes, coupées en deux (peau, carbonisée)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "oignon jaune, coupé en deux et carbonisé"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "Pâte de crevettes fermentées (m.r.c. / m.m. tôm)",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Pâte de crevettes (belacan), quantité réduite de moitié"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Graines d'Annatto pour la couleur",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "1 c. à thé paprika + pincée de curcuma pour la couleur seulement"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Heat",
      "name": "Pâtes séchées de chili rouge ou de piment saté",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "piments des yeux d'oiseau frais, tranchés"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Seasoning",
      "name": "Sauce de poisson",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanch",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "blanched_bones",
      "instructions": "Placez le shin de bœuf et les trotters de porc dans une grande casserole et couvrez-les d'eau froide. Porter à ébullition vigoureuse à feu vif — ce premier ébullition n'est pas pour faire du bouillon, c'est pour purger. Après 5 à 7 minutes à ébullition complète, une écume grise et mousseuse s'est levée à la surface. Égoutter et jeter complètement l'eau de blanchiment. Rincer chaque os sous l'eau froide courante, nettoyer les résidus gris, les caillots sanguins et les fragments d'os avec les doigts. Cette étape de parboulement n'est pas négociable pour un bouillon clair, propre et goûtant Hu. Il élimine le sang, la myoglobine et les impuretés qui pourraient autrement troubler le stock et lui donner une forte odeur de foie.",
      "visualCue": {
        "primaryTarget": "Des os entièrement rincés à une surface propre et blanc cassé sans taches grises, sans résidus sanguins ou de mousse visible. Ils doivent sentir propre et légèrement boeuf, pas pointu ou lourd en fer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les os n'ont été que rapidement trempés dans l'eau chaude et ont encore du sang gris rose dans les crevasses et les articulations. La mousse au sommet de l'eau blanchie est encore en train de gonfler.",
            "action": "Continuer à blanchir jusqu'à ce que la production de mousse ralentisse, puis égoutter et rincer abondamment. Un rinçage complet est aussi important que le blanchiment lui-même."
          },
          {
            "state": "Perfect",
            "description": "Toute la mousse grise visible a été purgée. Après le rinçage, les os semblent propres et pâles, sans décoloration dans les articulations ou les canaux médullaires. Ils sentent la viande propre et fraîche.",
            "action": "Transférer à la réserve principale et commencer la longue mijoter avec de l'eau froide fraîche."
          },
          {
            "state": "Overdone",
            "description": "Les os ont été bouillis de façon si agressive que la moelle a été partiellement émulsifiée dans l'eau blanchissante et que l'eau du bouillon est devenue gris nuageux avant que la vraie cuisson commence.",
            "action": "Toujours bien — égoutter, rincer et procéder. La longue mijoter va développer la clarté; l'eau qui blanchit et qui passe à l'ombre n'est pas un désastre."
          }
        ]
      },
      "feelCue": "Exécutez votre pouce le long du plat d'un os après le rinçage — la surface devrait être lisse et légèrement fraîche, comme de la céramique propre. Tout collant ou lissé sous le pouce signifie qu'il y a encore un film protéique qui doit être rincé."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "blanched_bones",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_12"
      ],
      "outputState": "raw_broth",
      "instructions": "Placer les os blanchis dans une grande réserve avec les 3 litres d'eau froide, les morceaux de citronnelle et les moitiés d'échalote carbonisée. Porter les échalotes au-dessus d'une flamme ouverte ou sous une grille jusqu'à ce que la surface coupée soit noircie ajoute une note sucrée fumée complexe qui est caractéristique des stocks vietnamiens. Faire mijoter à feu moyen-élevé. Dès que vous voyez les premières vagues de vapeur, réduisez la chaleur pour maintenir une mijotation très douce — la surface devrait simplement trembler, avec une bulle qui traverse toutes les 2-3 secondes. Ajouter le sel. Essuie toute mousse qui monte dans les 20 premières minutes. Puis laisser mijoter pendant 3 à 4 heures jusqu'à ce que le bouillon soit profondément salé et que les os de porc aient abandonné leur collagène. Le bouillon devrait avoir une faible clarté dorée.",
      "visualCue": {
        "primaryTarget": "Un bouillon légèrement tremblant d'or pâle avec des matraques de citronnelle visibles et des moitiés d'échalote carbonisée, libérant de fines spores de vapeur parfumée. La surface est presque immobile — un vrai mijot, pas un ébullition.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Au bout d'une heure, le bouillon a le goût d'eau chaude avec une faible note de bœuf — le collagène et les composés de saveur n'ont pas encore eu le temps de migrer des os.",
            "action": "Continuez à mijoter. Ce bouillon demande de la patience. Vérifiez le niveau de l'eau et recouvrez l'eau bouillante si nécessaire pour maintenir les os submergés."
          },
          {
            "state": "Perfect",
            "description": "Après 3,5 à 4 heures, le bouillon enveloppe l'intérieur d'une louche d'un film très faible, légèrement visqueux — le début de la gélatine des trotteurs de porc. Il a un goût profondément bœuf et porcin, avec un parfum de citronnelle distinct.",
            "action": "Placer le bouillon dans un tamis à mailles fines, jeter les os et les arômes et retourner le bouillon clair dans le pot pour assaisonner."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon a bouilli vigoureusement au lieu de mijoter — il est nuageux et légèrement gris, avec une saveur agressive et légèrement amère des os surextractés.",
            "action": "Sourire immédiatement. La saveur est encore bonne; la nuance est seulement esthétique. Pour récupérer un peu de clarté, laissez reposer le bouillon tendu, puis loucher seulement du haut, laissant les sédiments derrière."
          }
        ]
      },
      "feelCue": "Après 3 heures, laisser refroidir complètement dans un bol. Inclinez le bol — le liquide doit couler légèrement plus lentement que l'eau, avec un soupçon de corps de la gélatine. Cette viscosité est l'âme d'un bon bouillon de Hu."
    },
    {
      "nodeId": "step_3",
      "action": "Bloom",
      "inputs": [
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "annatto_chili_oil",
      "instructions": "Dans une petite casserole, faire chauffer l'huile neutre à feu moyen jusqu'à ce qu'elle mijote. Ajouter les graines d'annatto et remuer — ils commenceront immédiatement à lixivier leur pigment rouge orange vif dans l'huile. Cuire 2 à 3 minutes jusqu'à ce que l'huile ait changé en rouge orange foncé. Retirez et jetez les graines d'annatto. Retourner l'huile colorée dans la poêle et ajouter l'ail haché, cuire jusqu'à ce que doré et parfumé (environ 1 minute). Ajouter les flocons de chili et remuer pendant 30 secondes. Ajoutez la pâte de crevettes fermentée et faites-la frire dans l'huile épicée pendant 1 à 2 minutes, en la brisant et en la laissant caraméliser légèrement — cette étape de friture apprivoise son bord brut, ammoniac-avant et l'approfondit en quelque chose de complexe et de savoureux. La pâte sentira d'abord agressivité funky, puis se mouiller dans un umami plus profond, presque des fruits de mer.",
      "visualCue": {
        "primaryTarget": "Une huile rouge-ambre foncée brillante dans la poêle avec de l'ail caramélisé et des taches de chili, portant une odeur complexe et captivante qui est funky, épicée, et profondément salée tout à la fois.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines d'annatto ont seulement coloré l'huile légèrement orange, et non l'orange rouge profond qui définit La couleur distinctive du bouillon. La pâte de crevettes est encore crue et intensément ammoniaque.",
            "action": "Cuire l'annatto plus longtemps avant de faire pression. Faire frire la pâte de crevettes pendant au moins 90 secondes — l'ammoniac se dissipe par la chaleur et se transforme en umami caramélisé."
          },
          {
            "state": "Perfect",
            "description": "L'huile est un rouge orange vif et clair. L'ail est doré. La pâte de chili et de crevette frite ont fusionné en un composé parfumé rouge brique. L'odeur d'ammoniaque brute a été remplacée par un parfum complexe de caramel aux fruits de mer profonds.",
            "action": "Verser ce mélange entier directement dans le bouillon mijotant et mélanger."
          },
          {
            "state": "Overdone",
            "description": "L'ail a brûlé noir dans l'huile, les flocons de chili sont foncés et amers, et la pâte de crevettes a brûlé dans une croûte sèche sur le fond de la poêle.",
            "action": "Jeter ce lot — l'ail brûlé et la pâte de crevette brûlée produisent tous deux de l'amertume acride qui ne peut être corrigée. Recommencer l'étape de floraison avec moins de chaleur et plus d'attention."
          }
        ]
      },
      "feelCue": "Penchez - vous au - dessus de la casserole 30 secondes après l'entrée de la pâte de crevettes — vous devriez sentir une légère piqûre d'eau oculaire provenant de l'ammoniac volatile initial, suivie presque immédiatement d'une vague de chaleur salée lorsque la pâte fermentée commence à cuire. Cette transformation dans la vapeur vous dit qu'elle fonctionne correctement."
    },
    {
      "nodeId": "step_4",
      "action": "Saison",
      "inputs": [
        "raw_broth",
        "annatto_chili_oil",
        "ing_06",
        "ing_11"
      ],
      "outputState": "finished_bun_bo_hue_broth",
      "instructions": "Verser le composé d'huile d'Annatto-chili dans le bouillon tendu. Ajouter la sauce de poisson. Incorporer soigneusement et laisser mijoter. Ajoutez maintenant le reste de la pâte de crevette fermentée, la dissolvant directement dans le bouillon mijotant un peu à la fois — goûtez après chaque ajout. La pâte de crevettes porte énormément de sel et de funk, alors ajoutez-la lentement. Le bouillon fini doit être profondément salé, très salé, parfumé à la citronnelle et porter une chaleur lente. Il devrait avoir l'air d'un orange-ambre vif de l'annato. Ajuster avec plus de sauce de poisson pour le sel, plus d'huile de chili pour la chaleur. Le bouillon est utilisé pour assembler le bún bò Hu.Les nouilles épaisses rondes de riz, le bœuf et le porc tranchés, les cubes de sang de porc et les herbes abondantes.",
      "visualCue": {
        "primaryTarget": "Un bouillon orange-ambre clair et vif avec une surface brillante qui ressort de l'huile de chili et de l'annatto. Sous une forte lumière, la couleur doit ressembler à l'ambre ancien — transparent mais intensément coloré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est encore d'or pâle et goûte plat, sans la profondeur funky de la pâte de crevettes ou la chaleur de l'huile de chili. Il a un goût de porc simple.",
            "action": "Ajouter davantage d'huile de chili et de crevettes fermentées en petites quantités. Les composés assaisonnements de ce bouillon sont audacieux — les quantités peuvent sembler alarmantes avant que l'équilibre ne s'installe."
          },
          {
            "state": "Perfect",
            "description": "Un bouillon ambre profondément complexe qui délivre cinq saveurs en succession rapide : savore, salée, citronnelle-florale, épicée-chauffée, et un umami persistant qui enveloppe l'arrière de la gorge. La couleur est un orange vif brûlé.",
            "action": "Goûtez une dernière fois pour le sel et la chaleur. Servir immédiatement sur des nouilles de riz rondes épaisses avec du bœuf et du porc tranchés, et une assiette de germes de haricots, de fleurs de bananes et d'herbes."
          },
          {
            "state": "Overdone",
            "description": "Trop de pâte de crevettes a fait le bouillon massivement salé et agressivement funky, avec la note de pâte de crevettes dominant toutes les autres saveurs.",
            "action": "Diluer avec du stock de porc non salé ou de l'eau, puis re-saisonner avec de la sauce de poisson (qui est plus neutre) plutôt que plus de pâte de crevette. Ajouter une pression de chaux pour éclaircir et couper à travers la lourdeur."
          }
        ]
      },
      "feelCue": "Buvez une petite tasse du bouillon fini, sans nouilles. Elle devrait se sentir assez audacieuse pour se tenir seule, non pas comme une note de côté aux garnitures, mais comme l'événement principal. Si elle a le goût d'un élément de fond, elle a besoin de plus d'assaisonnement. Le bouillon Hu-. est censé être déclaratif."
    }
  ]
};
