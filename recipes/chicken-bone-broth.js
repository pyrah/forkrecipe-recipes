export default {
  "repoId": "master_american_chickenbonebroth_001",
  "parentRepoId": null,
  "slug": "chicken-bone-broth",
  "author": "ForkRecipe Kitchen",
  "title": "Brosse à os de poulet",
  "description": "Un bouillon riche en collagène puisé dans des os de poulet rôtis pendant 12 à 18 heures, il gele solide à froid, transformant un bol peu profond de liquide en quelque chose qui agite comme l'aspic, la gélatine enveloppant vos lèvres de chaque gorgée.",
  "cuisine": "Américain",
  "culture": "Américain",
  "category": "stocks",
  "tags": [
    "stock",
    "Sans gluten",
    "collagène",
    "bouillon",
    "guérison"
  ],
  "difficulty": 2,
  "activeTime": "30 min",
  "totalTime": "14 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 1,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Carcasses et os de poulet (rôtés)",
      "ratioValue": 1500,
      "defaultUnit": "g",
      "substitutions": [
        "dos et pieds de poulet crus (plus de gélatine)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Aromatic",
      "name": "Oignon jaune (halves, peau dessus)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Carottes (approximativement hachées)",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Pâtes de céleri (approximativement hachées)",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Girofles à l'ail (chaudées, non pelées)",
      "ratioValue": 6,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "vinaigre de cidre de pomme",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "vinaigre de vin blanc",
        "jus de citron"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Feuilles de baies",
      "ratioValue": 3,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Graines de poivre noires, entières",
      "ratioValue": 10,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Fils de thym frais",
      "ratioValue": 4,
      "defaultUnit": "sprigs",
      "substitutions": [
        "1 c. à thé de thym séché"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Hydration",
      "name": "Eau filtrée à froid",
      "ratioValue": 3000,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Rôtir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "roasted_bones_aromatics",
      "instructions": "Étendre les os et les carcasses de poulet en une seule couche sur une plaque de cuisson à bord lourd. Ajouter la moitié de l'oignon (côté coupé) et les morceaux de carottes. Faire cuire à 220 °C (425 F) pendant 35 à 45 minutes, en tournant une fois, jusqu'à ce que les os soient brun-or profond avec des bords sombres et que l'oignon soit noir caramélisé sur le visage coupé. La coloration foncée signifie que les saveurs de Maillard — celles-ci donnent au bouillon d'os sa profondeur. Ne sautez pas cette étape; les os non torréfiés donnent un bouillon pâle et mince.",
      "visualCue": {
        "primaryTarget": "Les os sont profondément dorés avec des bords foncés et des articulations cloquées. La coupe d'oignon est presque noire et caramélisée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des os encore pâles ou blonds. L'oignon à peine caramélisé. Pas de brunissement visible des articulations osseuses.",
            "action": "Retourner au four pendant 10 minutes. La réaction Maillard a besoin d'une chaleur et d'un temps élevés, ce qui détermine la couleur et la profondeur du bouillon."
          },
          {
            "state": "Perfect",
            "description": "Les os sont d'or-ambre profond avec des bouts et des articulations presque noirs. La coupe d'oignon est carbonisée au noir. Une riche odeur rôtie remplit la cuisine.",
            "action": "Transfert à la réserve. Déglacer la rôtissoire avec de l'eau et ajouter chaque peu d'affection à la casserole."
          },
          {
            "state": "Overdone",
            "description": "Les os sont complètement noirs. Une odeur amère de graisses brûlées.",
            "action": "Jetez les pièces les plus carbonisées. Avant de déglacer, l'ardoise brûlée fait du bouillon amer."
          }
        ]
      },
      "feelCue": "Les articulations osseuses grillées devraient se sentir presque croustillantes à l'extérieur et encore légèrement mouillées au centre — la moelle aurait dû commencer à fondre et à courir aux extrémités de la coupe."
    },
    {
      "nodeId": "step_2",
      "action": "Mijoter",
      "inputs": [
        "roasted_bones_aromatics",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "simmering_broth",
      "instructions": "Placer les os et les aromatiques torréfiés dans une grande réserve ou une cuisinière lente. Ajouter le céleri, l'ail, le vinaigre, les feuilles de laurier, les grains de poivre et le thym. Couvrir complètement d'eau froide. Le vinaigre est la clé — même une cuillère à soupe crée un environnement acide qui tire les minéraux et le collagène des os sans affecter la saveur finale. Portez lentement à ébullition, puis réduisez immédiatement à la plus petite mijoter possible — des bulles simples brisant la surface toutes les quelques secondes, sans ébullition. Écraser toute la mousse grise qui monte dans les 15 premières minutes. Laisser mijoter à découvert (ou avec couvercle fêlé) pendant 12 à 18 heures.",
      "visualCue": {
        "primaryTarget": "Une mijotée lente et paresseuse — une seule bulle qui brise la surface irrégulièrement, et non un ébullition. Le liquide reste dégagé, pas nuageux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Moins de 4 heures de mijotage. Le bouillon est mince, pâle et aqueux. Ne pas geler à froid.",
            "action": "Continuez à mijoter. L'extraction du collagène nécessite une faible chaleur soutenue pendant de nombreuses heures — il n'y a pas de raccourci."
          },
          {
            "state": "Perfect",
            "description": "Après 12 à 18 heures : bouillon doré-ambre, légèrement visqueux à chaud. Une cuillère à soupe sur un gel réfrigéré en 5 minutes. Ça sent le poulet rôti.",
            "action": "Filez à travers une passoire à mailles fines doublée d'une nappe de fromage. Du calme."
          },
          {
            "state": "Overdone",
            "description": "Faire bouillir vigoureusement au lieu de laisser mijoter. Broth est nuageux, blanc laiteux, gras. Bien que nutritif, il a perdu sa clarté.",
            "action": "Plongez dans plusieurs couches de cheesewet humide pour clarifier. La saveur est toujours là, mais la transparence est perdue."
          }
        ]
      },
      "feelCue": "Passez une goutte de bouillon chaud entre vos doigts après 12 heures — il devrait se sentir légèrement visqueux et collagène par rapport à l'eau pure, signe que la gélatine se dissout du collagène dans les os."
    },
    {
      "nodeId": "step_3",
      "action": "Filtrer",
      "inputs": [
        "simmering_broth"
      ],
      "outputState": "finished_bone_broth",
      "instructions": "Verser le bouillon à l'aide d'une passoire fine doublée d'une double couche de cheesewapp humide. Ne pressez pas les os — la gravité est la seule force ici. Jetez les solides. Laisser refroidir le bouillon à température ambiante, puis réfrigérer pendant la nuit. Le lendemain matin, lever et jeter le bouchon de graisse solidifié de la surface. Le bouillon ci-dessous doit être fortement gelé, comme le brun aspic. Assaisonner légèrement avec du sel seulement lorsqu'il est prêt à servir — le sel se concentre lorsque le bouillon diminue lors de la cuisson ultérieure.",
      "visualCue": {
        "primaryTarget": "Après refroidissement : un gel solide brun-ambre avec un bouchon de graisse propre et amovible sur la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours liquide à froid, ou à peine épaissi comme du poulet. Le gel est la mesure du succès.",
            "action": "Le temps de fraicheur était insuffisant ou la chaleur était trop élevée (le brouillage détruit une structure de collagène). Toujours utilisable comme stock."
          },
          {
            "state": "Perfect",
            "description": "Solidement gelé — le pot peut être incliné et rien ne bouge. Ambre-brun, brillant, avec de la graisse propre sur le dessus. Sensation intense de poulet et d'aromates grillés.",
            "action": "Retirer le bouchon de graisse, la portion dans les contenants et réfrigérer jusqu'à 5 jours ou congeler 3 mois."
          },
          {
            "state": "Overdone",
            "description": "Surréduit à un concentré très sombre, intensément fort. Moins d'un tiers du volume de départ reste.",
            "action": "Diluer 1:1 avec de l'eau avant utilisation. La saveur est intense mais concentré bouillon d'os excelle toujours comme une base."
          }
        ]
      },
      "feelCue": "Un bouillon d'os correctement fait, set et froid, a le wobble de gelée ferme — vous pouvez courir une cuillère à travers elle et il tient une ligne, se cassant élastiquement, plutôt que de courir comme de l'eau."
    }
  ]
};
