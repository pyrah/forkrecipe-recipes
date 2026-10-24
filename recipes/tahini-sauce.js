export default {
  "repoId": "master_levantine_tahini_sauce_001",
  "parentRepoId": null,
  "slug": "tahini-sauce",
  "author": "ForkRecipe Kitchen",
  "title": "Sauce Tahini",
  "description": "Pâte de sésame crue éclaircie avec du jus de citron et de l'eau froide jusqu'à ce qu'elle détende, pâle et scintille en quelque chose de plus soyeux que son point de départ — noix, aigre et crémeux dans une mesure égale.",
  "cuisine": "Moyen-Orient",
  "culture": "Levantine",
  "category": "sauces",
  "tags": [
    "Moyen-Orient",
    "lévantine",
    "Tahini",
    "sésame",
    "citron",
    "végétalien",
    "Vite"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 3,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Tahini (préféré en pierre bien ciré)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre d'amande pour une variation de noix"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 45,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre de vin blanc dans une pincée"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Gousse d'ail râpée à la pâte",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": [
        "ail rôti pour un résultat plus doux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Hydration",
      "name": "Eau froide",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Cumin de fond (facultatif)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "paprika fumé pour un autre registre"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mélange",
      "inputs": [
        "ing_01"
      ],
      "outputState": "stirred_tahini",
      "instructions": "Ouvrez le pot de tahini et remuez-le soigneusement du bas vers le haut avant de mesurer — le tahini se sépare dans le stockage, et vous avez besoin d'une pâte entièrement recombinée, pas la pâte sèche au bas avec l'huile séparée sur le dessus. Transférer la quantité requise dans un bol de mélange. Le tahini à ce stade devrait être une pâte uniforme, épaisse, brun cacahuète-beurre avec un fort arôme de sésame. Si le tahini est très raide ou froid, la sauce sera plus difficile à fouetter lisse — le tahini à température ambiante fonctionne mieux.",
      "visualCue": {
        "primaryTarget": "Une pâte uniforme, brillant, brun moyen, sans séparation visible de l'huile – couleur et texture cohérentes du haut au bas de la cuillère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le tahini est visiblement séparé: pâte pâle et sèche au fond du pot et couche claire d'huile de sésame flottant sur le dessus. La mesure de ceci donne un rapport incorrect.",
            "action": "Incorporer vigoureusement du fond du pot pendant 1 à 2 minutes jusqu'à ce que l'huile soit complètement réémulsionnée dans la pâte. Si le pot est très froid, le réchauffer brièvement dans un bol d'eau chaude d'abord."
          },
          {
            "state": "Perfect",
            "description": "Le tahini s'écoule comme une pâte unique, uniforme et brillante — couleur uniforme à travers, pas de taches sèches, pas de mise en commun d'huile aux bords.",
            "action": "Ajouter le jus de citron et faire fouetter."
          },
          {
            "state": "Overdone",
            "description": "Il n'y a pas de tahini trop stirred à ce stade. Continuez.",
            "action": "Passez à l'étape suivante."
          }
        ]
      },
      "feelCue": "Une petite quantité de tahini bien ciré roulé entre les doigts devrait se sentir lisse et légèrement gras — uniforme dans l'ensemble, avec la texture dense et lisse d'un épais beurre de noix."
    },
    {
      "nodeId": "step_2",
      "action": "Fouetter",
      "inputs": [
        "stirred_tahini",
        "ing_02",
        "ing_03",
        "ing_05",
        "ing_06"
      ],
      "outputState": "tahini_seized",
      "instructions": "Ajouter le jus de citron tout à la fois au tahini et fouetter immédiatement. Le mélange s'emparera de façon spectaculaire — il s'épaissira et s'emparera d'une masse raide, pâle et miroitée. Ceci est attendu et non pas un échec. C'est la même réaction que la saisie du chocolat : l'acide perturbe l'émulsion graisseuse et lie les solides. Ajouter la pâte d'ail râpée, le sel et le cumin (si utilisé) et les fouetter dans la masse saisie. Le mélange aura l'air brisé et inappétissant — résistez à l'envie d'ajouter autre chose encore.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse, pâle et raide, de couleur nettement plus légère que le tahini cru, quelque part entre le mastic et la crème. Il devrait être presque friable et cohérent en même temps.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Seule une partie du jus de citron a été incorporée — le mélange est encore de couleur foncée et certains tahini n'ont pas encore été saisis.",
            "action": "Ajouter le jus de citron restant et fouetter jusqu'à ce que la crise se produise. N'ajoutez pas d'eau jusqu'à ce que le tahini ait complètement saisi tout l'acide."
          },
          {
            "state": "Perfect",
            "description": "Toute la masse est devenue nettement plus pâle (crème à beige pâle), devient très raide, et s'éloigne légèrement des côtés du bol. Ça ressemble presque à de l'argile épaisse.",
            "action": "Commencer à ajouter de l'eau froide glacée une cuillère à soupe à la fois."
          },
          {
            "state": "Overdone",
            "description": "Vous avez ajouté de l'eau avant que le tahini ne soit complètement saisi avec le jus de citron — la texture est inégale, avec des morceaux de tahini saisis en suspension dans un liquide mince.",
            "action": "Continuez à fouetter vigoureusement. Les grumeaux s'assèchent généralement avec un sifflement soutenu, même hors séquence."
          }
        ]
      },
      "feelCue": "Appuyez sur une cuillère dans le tahini saisi — il devrait résister comme de l'argile raide avant de céder. La couleur pâle est le cadeau: un éclairement spectaculaire du brun à la crème indique que le citron a fait son travail."
    },
    {
      "nodeId": "step_3",
      "action": "Fouetter",
      "inputs": [
        "tahini_seized",
        "ing_04"
      ],
      "outputState": "tahini_sauce",
      "instructions": "Ajouter l'eau glacée une cuillère à soupe à la fois, fouettant vigoureusement après chaque ajout. Avec chaque addition, la sauce semble d'abord se détendre davantage avant de se ressaisir — c'est normal. Continuer jusqu'à ce que la sauce soit lisse, soyeuse, et tomber du fouet dans un ruban lent et non cassé. La sauce doit être nettement plus pâle — une crème presque blanche — que le tahini cru. Goûtez et ajustez : plus de citron pour la luminosité, plus d'eau pour une consistance plus lâche, plus de sel pour tout faire avancer.",
      "visualCue": {
        "primaryTarget": "Une sauce douce et pâle de couleur crème qui verse dans une goutte lente et en ruban d'une cuillère levée. La couleur doit être considérablement plus claire que le tahini d'origine — pensez crème lourde, pas beurre d'arachide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore raide et pâteuse, s'accroche au fouet plutôt que de couler. La couleur est encore mi-brun. Plus d'eau est nécessaire.",
            "action": "Continuer à ajouter de l'eau froide une cuillère à soupe à la fois, en fouettant soigneusement après chaque ajout. Ne pas ajouter toute l'eau à la fois ou la sauce deviendra aqueuse avant d'émulsionner correctement."
          },
          {
            "state": "Perfect",
            "description": "La sauce est soyeuse, crème pâle et coule dans un ruban continu de la cuillère. Il enrobe un doigt trempé uniformément. La saveur est noisette, brillante avec du citron, et ailky sans être dure.",
            "action": "Utiliser immédiatement ou réfrigérer jusqu'à 3 jours — il s'épaissira dans le réfrigérateur; mince avec de l'eau froide et re-whisk avant de servir."
          },
          {
            "state": "Overdone",
            "description": "La sauce est trop fine et arrosée, qui sort immédiatement d'une cuillère plutôt que de rubaner. La couleur pâle est devenue presque translucide.",
            "action": "fouetter dans une cuillère à soupe de tahini supplémentaire pour ramener le corps. Ajouter une petite pression de citron supplémentaire pour rebriller."
          }
        ]
      },
      "feelCue": "La sauce finie devrait se sentir soyeuse sur la langue sans grain — si vous détectez une rugosité, fouetter encore 30 secondes. L'eau froide est critique : l'eau chaude produit une sauce plus mince et moins stable."
    }
  ]
};
