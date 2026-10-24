export default {
  "repoId": "master_french_court_bouillon_001",
  "parentRepoId": null,
  "slug": "court-bouillon",
  "author": "ForkRecipe Kitchen",
  "title": "Cour-Bouillon",
  "description": "Un bouillon aromatique rapide et acidulé, le liquide de braconnage français classique pour poissons et crustacés. L'eau mijotée de mirépoix, de vin, d'herbes et d'une forte éclaboussure de vinaigre, puis refroidie si délicate chair glisse doucement et émerge parfumée plutôt que lavée. Pas un stock de longue cuisson, mais un bain parfumé construit en moins d'une heure.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "stocks",
  "tags": [
    "court-bouillon",
    "français",
    "braconnage",
    "poissons",
    "crustacés",
    "aromatiques",
    "acide"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "45 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 3,
    "bitter": 1,
    "umami": 1,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "Eau (froid)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Vin blanc sec (Muscadet, Sauvignon Blanc)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "vermouth blanc sec",
        "extra court-bouillon et plus de vinaigre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron",
        "vinaigre de cidre"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Carotte, oignon et poireau (en pièces minces)",
      "ratioValue": 18,
      "defaultUnit": "parts",
      "substitutions": [
        "Échalote",
        "fenouil"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Citrus",
      "name": "Citron (en rondelles)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Bouquet garni (thyme, baie, tiges de persil)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "tiges d'aneth",
        "estragon"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Graines de poivre et de coriandre noires",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "grains de poivre blancs"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Combiner",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_08"
      ],
      "outputState": "cold_infusion",
      "instructions": "Mettre l'eau froide, le vin blanc et le vinaigre dans une grande casserole non réactive. Ajouter la carotte tranchée, l'oignon et le poireau, les rondelles de citron et le sel. Tout va au froid et ensemble — l'acide et les aromatiques ont besoin de la chaleur complète pour lixivier leur saveur dans le liquide. Utilisez un pot en acier inoxydable ou émaillé, jamais d'aluminium nu, que l'acide va terne et décolorer.",
      "visualCue": {
        "primaryTarget": "Un pot frais et nuageux de liquide pâle et citronné avec des pièces de légumes et des tranches de citron flottant librement, le sel se dissolvant lorsque vous remuez.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les légumes sont entassés d'un côté et le sel est granulé au fond d'un pot à peine cintré.",
            "action": "Mélanger pour distribuer les aromatiques et dissoudre le sel avant le début du chauffage."
          },
          {
            "state": "Perfect",
            "description": "Aromatique également suspendue, sel dissout, le liquide sent peu le vin et le citron même au froid.",
            "action": "Ajouter le bouquet garni et les épices et laisser mijoter."
          },
          {
            "state": "Overdone",
            "description": "Trop de vinaigre déjà ajouté, le liquide cru assez tranchant pour piquer l'arrière du nez.",
            "action": "Ajouter une éclaboussure d'eau et de vin pour adoucir l'acide avant de se concentrer avec mijoter."
          }
        ]
      },
      "feelCue": "Le liquide froid doit sentir clair et propre — vin et agrumes sur une faible note verte de poireau. Non, une odeur sulfureuse de l'oignon si elle est fraîche."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "cold_infusion",
        "ing_06",
        "ing_07"
      ],
      "outputState": "infused_broth",
      "instructions": "Dans le bouquet garni et les grains de poivre et la coriandre. Portez lentement le pot à mijoter légèrement à feu moyen, puis déposez-le dans le tremble le plus barré et maintenez-le pendant 20-30 minutes. Une mijotée paresseuse, et non un ébullition, fait bouillir le bouillon et évacue les arômes délicats. La cuisine doit se remplir de l'odeur des herbes, du vin et du citron chaud.",
      "visualCue": {
        "primaryTarget": "Un bouillon clair d'or pâle avec seulement la bulle occasionnelle brisant la surface, les légumes doux et les herbes complètement abîmées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est encore mince et rafraîchissant, les herbes et les épices à peine enregistrées, les légumes fermes.",
            "action": "Gardez-le à l'abri plus longtemps — la saveur s'approfondit sensiblement au cours des dix dernières minutes."
          },
          {
            "state": "Perfect",
            "description": "Bouillon parfumé, légèrement doré qui goûte de vin, d'herbe et d'acide doux; les aromatiques sont tendres et dépensés.",
            "action": "Retirez le pot du feu et laissez refroidir, ou de la déformation selon l'utilisation."
          },
          {
            "state": "Overdone",
            "description": "Le liquide a bouilli dur et réduit, tournant nuageux et agressivement aigre et salé à mesure qu'il se concentre.",
            "action": "Enlevez-le de la chaleur à la fois et remplissez avec un peu d'eau pour rééquilibrer l'acide et le sel."
          }
        ]
      },
      "feelCue": "Écoutez la tique douce d'une bulle occasionnelle plutôt que d'une huître stable. Goûtez une cuillerée, refroidie — elle devrait lire agréablement tarte et assaisonnée, comme un liquide que vous siroteriez avec joie."
    },
    {
      "nodeId": "step_3",
      "action": "Frais & souche",
      "inputs": [
        "infused_broth"
      ],
      "outputState": "court_bouillon",
      "instructions": "Pour le braconnage de poissons entiers ou de mollusques, laissez le bouillon refroidir à chaud ou même froid avant l'entrée des fruits de mer, de sorte que la chair chauffe doucement et reste humide — un ébullition violent saisit et la durcit. Pour le braconnage des filets ou comme bain prêt, presser le bouillon dans un tamis fin, presser les aromatiques et jeter les solides. Goûtez et ajustez le sel et une pression finale d'acide. Utiliser dans la journée ou congeler.",
      "visualCue": {
        "primaryTarget": "Un liquide d'ambre doré propre, tendu, suffisamment clair pour être lu, sentant équilibré entre le vin, l'herbe, les agrumes et le sel sans aucune note dominante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est plat et sous-assaisonné, l'acide s'estompe après la chaleur, avec peu de lifting aromatique.",
            "action": "Lumineux avec une pression de citron ou quelques gouttes de vinaigre et corriger le sel au goût."
          },
          {
            "state": "Perfect",
            "description": "Lumineux, salé, légèrement goudronné liquide, assaisonné et aromatique, prêt à parfumer les fruits de mer sans les écraser.",
            "action": "Laisser refroidir à la bonne température et braconnier, ou conserver couvert et réfrigéré."
          },
          {
            "state": "Overdone",
            "description": "Le Broth est dur et amer ou sursauté, masquant plutôt que flattant les poissons délicats.",
            "action": "Diluer avec un peu d'eau jusqu'à ce que l'acide et le sel se rééquilibrent, puis goûter à nouveau."
          }
        ]
      },
      "feelCue": "Le court-bouillon fini devrait avoir le goût d'un bouillon que l'on siroterait tout seul — tarte et propre, jamais flasque et jamais amère. Glissez un doigt dans une fois refroidi: tiède est la bonne température pour commencer à braconner des poissons délicats."
    }
  ]
};
