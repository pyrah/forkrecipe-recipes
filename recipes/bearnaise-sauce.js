export default {
  "repoId": "master_french_bearnaisesauce_001",
  "parentRepoId": null,
  "slug": "bearnaise-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce Béarnaise",
  "description": "La sauce au steak définitive de la cuisine française classique — l'hollandaise reconstruite sur une réduction de l'estragon et de l'échalote, donnant une émulsion beurreuse et parfumée d'anis qui enrobe un lingot comme de la soie liquide et survit sur le col assez longtemps pour faire un dîner digne d'intérêt.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "sauces",
  "tags": [
    "sauce",
    "végétarien",
    "laitière",
    "œuf",
    "estragon",
    "français",
    "émulsion"
  ],
  "difficulty": 4,
  "activeTime": "35 min",
  "totalTime": "50 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 3,
    "bitter": 1,
    "umami": 2,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Beurre non salé (clarifié ou entier)",
      "ratioValue": 250,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Jaunes d'œufs (grandes)",
      "ratioValue": 3,
      "defaultUnit": "yolks",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "vin blanc sec + jus de citron"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Vin blanc sec",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre supplémentaire, dilué 50/50 avec de l'eau"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Échalotes finement hachées",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "oignon blanc (plus grand, plus doux)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Estragon frais (usage divisé)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "estragon séché (1 c. à thé pour la réduction seulement)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Maïs de poivre noir, grossièrement craqué",
      "ratioValue": 8,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Jus de citron (pour ajustement final)",
      "ratioValue": 5,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Eau froide (pour la réduction de l'éclaircie)",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire réduire",
      "inputs": [
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "tarragon_reduction",
      "instructions": "Dans une petite casserole, mélanger le vinaigre, le vin blanc, les échalotes hachées, la moitié de l'estragon (approximativement haché, tiges incluses) et les grains de poivre fissurés. Porter à ébullition, puis réduire à feu moyen jusqu'à ce qu'il reste environ 2 à 3 cuillerées à soupe de liquide – les échalotes devraient avoir l'air presque jammy et le liquide devrait être sirupeux et parfumé. Strain à travers une souche fine, appuyant sur les solides. Réservez les échalotes tendues si vous souhaitez les remuer plus tard (la Béarnaise classique les rajoute). Laisser refroidir à la température ambiante.",
      "visualCue": {
        "primaryTarget": "2 à 3 cuillères à soupe d'ambre foncé, liquide sirupeux avec un arôme intense d'estragon-vinegar.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours mince et aqueux. Plus de 4 cuillerées à soupe de liquide restent. Sens brut et vif.",
            "action": "Continuer à réduire à feu moyen. L'acidité doit se concentrer ou la sauce finie sera mince."
          },
          {
            "state": "Perfect",
            "description": "Syrupy, presque jammy. Les échalotes sont foncées et lustrées. Le liquide est réduit à 2-3 cuillerées à soupe et sent intensément l'estragon. Laisse un revêtement sur la cuillère.",
            "action": "Peau et cool. Cette réduction est l'épine dorsale de toute la sauce."
          },
          {
            "state": "Overdone",
            "description": "Totalement sec — la réduction s'est évaporée. Résidus sombres et collants sur la poêle.",
            "action": "Ajouter 2 c. à soupe d'eau et dissoudre le résidu. La plupart des composés de saveur survivent à ce sauvetage."
          }
        ]
      },
      "feelCue": "La réduction refroidie est collante sur le bout des doigts — elle devrait être comme du miel dilué, tirant légèrement en appuyant sur le pouce et le doigt ensemble."
    },
    {
      "nodeId": "step_2",
      "action": "Faire fondre",
      "inputs": [
        "ing_01"
      ],
      "outputState": "clarified_butter",
      "instructions": "Faire fondre doucement le beurre dans une petite casserole à feu doux sans remuer. Écraser la mousse blanche de la surface. Versez soigneusement le liquide doré clair (beurre clarifié) dans une cruche chaude, laissant les solides laiteux blancs derrière. Le beurre doit être chaud (60-65 C) lorsque vous l'ajoutez aux jaunes — assez chaud pour émulsifier, pas si chaud qu'il brouille les œufs. Si vous utilisez du beurre entier (non précisé), la sauce aura plus de saveur mais un peu moins de stabilité.",
      "visualCue": {
        "primaryTarget": "Liquide d'or clair et profond avec un arôme pur et propre. Pas de solides blancs ou de mousse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours blanc et mousseux. Le lait est toujours en suspension, le beurre n'est pas complètement séparé.",
            "action": "Continuer doucement à feu doux. Ne remuez pas — laissez la gravité séparer les couches."
          },
          {
            "state": "Perfect",
            "description": "Liquide d'or complètement clair au-dessus d'une couche de solides de lait blanc. La mousse a été écrémée. Le beurre clarifié sent la pureté et la noix.",
            "action": "Conserver au chaud dans la cruche (60-65 C) jusqu'à ce qu'elle soit prête à fouetter dans les jaunes."
          },
          {
            "state": "Overdone",
            "description": "Le beurre est devenu brun (beurre sonore). Les solides s'assombrissent.",
            "action": "Utilisez le beurre noisette si désiré — il ajoute une saveur de noix à la béarnaise — ou jetez et recommencez pour le classique."
          }
        ]
      },
      "feelCue": "Le beurre clarifié doit être chaud mais pas chaud quand vous plongez votre doigt dedans - confortablement chaud, comme un bain, environ 60 C. Si ça pique, il fait trop chaud pour les jaunes."
    },
    {
      "nodeId": "step_3",
      "action": "Fouetter",
      "inputs": [
        "tarragon_reduction",
        "ing_02",
        "ing_10"
      ],
      "outputState": "sabayon_base",
      "instructions": "Dans un bol en acier inoxydable à fond rond (ou sur le dessus d'une double chaudière), fouetter ensemble la réduction tendue, les jaunes d'œufs et l'eau froide jusqu'à ce qu'ils soient pâles et légèrement mousseux. Placer sur un pot d'eau à peine mijotante (le fond du bol ne doit pas toucher l'eau). fouetter constamment et vigoureusement dans une figure-huit pendant 3-5 minutes, en déplaçant le bol sur et hors de la chaleur au besoin, jusqu'à ce que le mélange s'épaississe à la consistance de la crème légèrement fouettée — lorsque vous soulevez le fouet, un ruban de jaune tombe et tient sur la surface pendant 3 secondes avant de se dissoudre.",
      "visualCue": {
        "primaryTarget": "Une mousse pâle, volumineuse et crémeuse qui double en volume et tient un ruban pendant 3 secondes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours liquide et translucide. Le ruban disparaît immédiatement. Pas d'augmentation de volume.",
            "action": "Continuez à fouetter sur le bain marie. Les jaunes ont besoin de plus de chaleur — déplacez le bol plus près de la vapeur."
          },
          {
            "state": "Perfect",
            "description": "Jaune pâle, épais et mousseux. Le ruban tient 3 secondes. Le fouet laisse une trace claire dans le mélange. Température autour de 68–70 C.",
            "action": "Retirer immédiatement du feu. Commencez à ajouter du beurre clarifié dans une fine bruine."
          },
          {
            "state": "Overdone",
            "description": "Des patchs brouillés apparaissent. Le mélange semble caillé ou granuleux. La vapeur s'élève du bol.",
            "action": "Retirer immédiatement du feu et fouetter dans 1 c. à soupe d'eau froide. S'il est brouillé, il peut se rétablir partiellement à travers un tamis à mailles fines."
          }
        ]
      },
      "feelCue": "Le sabayon devrait se sentir épais mais aéré contre le fouet — comme la crème épaisse et chaude, et le fouet devrait laisser des sentiers visibles qui se remplissent lentement, ne disparaissent pas instantanément."
    },
    {
      "nodeId": "step_4",
      "action": "Émulsionner",
      "inputs": [
        "sabayon_base",
        "clarified_butter",
        "ing_06",
        "ing_08",
        "ing_09"
      ],
      "outputState": "finished_bearnaise",
      "instructions": "Retirer le bol du feu. Commencez à ajouter le beurre clarifié chaud dans un cours d'eau très mince et stable tout en fouettant constamment — presque goutte à goutte pour les 50 premiers ml. Comme l'émulsion l'établit, vous pouvez augmenter jusqu'à une fine bruine. Si la sauce s'épaissit trop et semble grasse, ajouter une cuillère à café d'eau chaude et fouetter pour se détendre. Une fois tout le beurre incorporé, mélanger le reste de l'estragon frais (finement haché), assaisonner de sel et quelques gouttes de jus de citron. Servir immédiatement ou garder au chaud dans le bain marie (pas plus de 55 C).",
      "visualCue": {
        "primaryTarget": "Une sauce épaisse et dorée qui enveloppe l'arrière d'une cuillère sans dégoutter — la consistance de la crème fouettée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et grasse. Beurre à la surface. Pas émulsifié.",
            "action": "Whisk vigoureusement. S'il ne se réunit pas, commencer par 1 jaune frais dans un bol propre et fouetter la sauce cassée dans elle goutte à goutte."
          },
          {
            "state": "Perfect",
            "description": "Or pâle, épais et brillant. Enrober une cuillère. Pas de séparation. Des odeurs de beurre, d'estragon et de vinaigre en parfait équilibre.",
            "action": "Assaisonner, ajouter l'estragon frais et servir en 20 minutes."
          },
          {
            "state": "Overdone",
            "description": "La sauce est solide et pâteuse. Sur-émulsionné et raide.",
            "action": "fouetter dans l'eau chaude une cuillère à café à la fois jusqu'à ce que la sauce s'assouplisse à la bonne consistance du revêtement."
          }
        ]
      },
      "feelCue": "Une béarnaise correctement émulsifiée enveloppe un doigt d'une couche épaisse et lisse qui retient son bord proprement — si vous le léchez et que le beurre lèche vos lèvres sans mordre acide, ajoutez plus de jus de citron."
    }
  ]
};
