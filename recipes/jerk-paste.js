export default {
  "repoId": "master_jamaican_jerk-paste_001",
  "parentRepoId": null,
  "slug": "jerk-paste",
  "author": "ForkRecipe Kitchen",
  "title": "Pâte à jerk",
  "description": "Une pâte odorante et quasi-noire de bonnets de scotch, d'Allspice et d'oignons qui vous brûle le nez avec chaleur avant que la chaleur profonde et sombre de girofle ne s'ensuive — l'âme de chaque vrai crétin jamaïcain.",
  "cuisine": "Jamaïquen",
  "culture": "Jamaïquen",
  "category": "condiments",
  "tags": [
    "Imbécile",
    "de scotch",
    "Jamaïcain",
    "épicé",
    "végétalien"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 5,
    "sour": 4,
    "bitter": 2,
    "umami": 3,
    "heat": 9
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Heat",
      "name": "Poivrons de bonnet écossais, tiges enlevées",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "habanero (même chaleur, légèrement moins florale)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Échalons, hachés approximativement (blanc et vert)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "Échalotes"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "(pimento)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Cannelle du sol",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Noix de muscade",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel casher",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Sweetener",
      "name": "Sucre brun",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "mélasse foncée (réduire de moitié)"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Jus de lime fraîchement pressé",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de cidre"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Feuilles de thym fraîches",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "Thym séché (utiliser la moitié)"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Solvent",
      "name": "Huile neutre (légume ou canola)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hacher",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "rough_aromatics",
      "instructions": "Portez des gants lorsque vous manipulez des bonnets de scotch — la capsaïcine dans ces poivrons vous sera transférée aux mains et durera des heures. Hacher grossièrement les poivrons (semences et tout pour le feu complet; retirer les graines pour une pâte plus douce), les pétoncles et l'ail en morceaux assez petits pour mélanger. Les graines de bonnets de scotch ont une saveur significative en plus de la chaleur — ne les jetez pas à moins que vous voulez spécifiquement un résultat plus doux.",
      "visualCue": {
        "primaryTarget": "Tous les aromatiques sont en morceaux bruts de 2 à 3 cm. Rien n'est parfait — le mélangeur fera ce travail.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les morceaux sont trop grands (poivrons entiers, non coupés) et vont bloquer un petit robot culinaire.",
            "action": "Chop en petits morceaux. Un mélangeur gère les gros morceaux mieux qu'un robot alimentaire."
          },
          {
            "state": "Perfect",
            "description": "Des morceaux inégaux. Les capots écossais sont coupés en deux ou en quatre. Des pétoncles en troisième. Ail laissé entier ou coupé en deux.",
            "action": "Transférer au mélangeur avec tous les autres ingrédients."
          },
          {
            "state": "Overdone",
            "description": "L'aromatisme a été aiguisé à la main. Bien — le mélange fonctionnera encore.",
            "action": "Procéder au mélange. La préparation fine fera une pâte plus lisse."
          }
        ]
      },
      "feelCue": "Au moment où vous coupez un bonnet de scotch, vos yeux sentiront une légère piqûre de la capsaïcine aéroportée — un signe fiable le poivre est puissant. Travaillez vite et ne touchez pas votre visage."
    },
    {
      "nodeId": "step_2",
      "action": "Mixer",
      "inputs": [
        "rough_aromatics",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "rough_paste",
      "instructions": "Ajouter tous les ingrédients restants à un mélangeur ou à un robot culinaire. Pulse 5-6 fois pour tout casser, puis mélanger en haut pendant 60 secondes. Grattez les côtés et mélangez à nouveau pendant 30 secondes. Ajoutez une cuillère à soupe d'huile à la fois si la pâte est trop sèche pour se déplacer dans le mélangeur — vous voulez une pâte épaisse et extensible, pas une sauce.",
      "visualCue": {
        "primaryTarget": "Une pâte vert très foncé, presque noir olive avec des taches visibles de peau de poivre et d'épices. Assez uniforme pour se propager, assez épais pour tenir sa forme sur une cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est épaisse avec de grands morceaux visibles de peau de poivre et d'épices entières. Le mélangeur ne peut pas l'abattre.",
            "action": "Ajoutez encore une cuillère à soupe d'huile et de pouls. Si le mélangeur est petit, mélanger en deux lots."
          },
          {
            "state": "Perfect",
            "description": "Pâte lisse, profondément parfumée, tartinable comme un pesto épais. Brun vert foncé avec une surface brillante de l'huile.",
            "action": "Goûtez et ajustez : ajoutez plus de citron vert pour la luminosité, plus de sucre pour autour de la chaleur, ou sel pour amplifier."
          },
          {
            "state": "Overdone",
            "description": "La pâte est devenue une sauce fine — trop d'huile a été ajoutée.",
            "action": "Il fonctionnera toujours comme une marinade, mais n'adhérera pas comme une pâte. Réduire dans une petite casserole à feu moyen pendant 3 minutes pour se concentrer."
          }
        ]
      },
      "feelCue": "Frottez une très petite quantité sur le dos de votre poignet (pas vos doigts — vous toucherez votre visage) — la chaleur devrait fleurir lentement, atteignant environ 30 secondes après le contact. Si vous ne sentez rien, les poivrons étaient faibles; ajouter plus."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser reposer",
      "inputs": [
        "rough_paste"
      ],
      "outputState": "jerk_paste",
      "instructions": "Transférer la pâte dans un pot ou un contenant scellé et réfrigérer pendant au moins 2 heures avant d'utiliser. La période de repos permet à l'acide du jus de citron vert de souder la netteté brute de l'allium, les épices de fleurir et d'intégrer, et la capsaïcine de distribuer uniformément dans la pâte. La différence de saveur entre la pâte fraîchement mélangée et la pâte reposée est significative.",
      "visualCue": {
        "primaryTarget": "Après le repos, la pâte s'assombrit légèrement et devient plus uniforme dans la couleur que les liquides d'huile et de légumes homogénéisent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pâte utilisée immédiatement après mélange goûts vifs, crus et unidimensionnels — la plupart du temps la chaleur de poivre sans profondeur.",
            "action": "Utilisez-le si vous devez, mais réfrigérez le reste et goûtez la différence le lendemain."
          },
          {
            "state": "Perfect",
            "description": "Après 2 heures et plus: la chaleur est encore féroce mais a maintenant une chaleur en couches sous elle. L'espice et la cannelle sont clairement présentes. La citron vert est intégrée plutôt que pointue.",
            "action": "Utilisez pour mariner le poulet, le porc ou les légumes pendant au moins 4 heures, de préférence pendant la nuit."
          },
          {
            "state": "Overdone",
            "description": "La pâte entreposée plus de 2 semaines au réfrigérateur commence à perdre son éclat de poivre frais.",
            "action": "Congeler dans des plateaux de glaçons. Les cubes de pâte de con congelés conservent pendant 3 mois et sont pratiques pour les petits lots."
          }
        ]
      },
      "feelCue": "Une pâte reposée doit sentir comme un seul parfum intégré — chaud, floral et aggressivement épicé — plutôt que l'odeur d'ail brut et de poivre désarticulé de fraîchement mélangé. Faites confiance à votre nez, il vous dit plus que n'importe quelle minuterie."
    }
  ]
};
