export default {
  "repoId": "master_caribbean_ginger_beer_plant_001",
  "parentRepoId": null,
  "slug": "ginger-beer-plant",
  "author": "ForkRecipe Kitchen",
  "title": "Bière à gingembre",
  "description": "Une culture caribéenne vivante de levures sauvages et de bactéries lactobacillus nourries quotidiennement de gingembre frais et de sucre jusqu'à ce qu'il devienne une entrée vigoureuse et pétillante qui est ensuite fermentée avec plus d'eau et de sucre dans une bière de gingembre naturellement gazéifiée — feu, tannage et vivante d'une manière qu'aucune version commerciale ne peut reproduire.",
  "cuisine": "Caraïbes",
  "culture": "Jamaïque",
  "category": "fermented",
  "tags": [
    "Bière au gingembre",
    "Caribbean",
    "fermenté",
    "probiotique",
    "gingembre",
    "carbone naturel"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "14 days",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 0,
    "sour": 3,
    "bitter": 1,
    "umami": 0,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Aromatic",
      "name": "Racine de gingembre fraîche, non pelée et râpée",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de canne blanche",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "sucre de canne brut"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Solvent",
      "name": "Eau filtrée (température ambiante)",
      "ratioValue": 2000,
      "defaultUnit": "g",
      "substitutions": [
        "eau de source"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Jus de citron ou de lime frais",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre extra (pour l'embouteillage de la carbonation)",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "Chérie"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Solvent",
      "name": "Eau supplémentaire (pour diluer à boire)",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Construire l'usine",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "active_ginger_plant",
      "instructions": "Dans un pot en verre propre, combiner 1 cuillère à café de gingembre frais râpé (non pelé — la peau porte les levures sauvages et les bactéries qui font vivre la bière au gingembre), 1 cuillère à café de sucre et 100 g d'eau filtrée. Incorporer, couvrir de façon lâche avec un chiffon et laisser à température ambiante. Chaque jour pendant 7 jours, 'alimenter' la plante en ajoutant une autre cuillère à café de gingembre râpé et une cuillère à café de sucre et en remuant. Dans les 3 à 4 jours, vous verrez des bulles se former à la surface, et la plante développera une odeur de levure distincte. Au 7ème jour, il devrait être fortement agité. L'alimentation quotidienne cumulative constitue une population dense de micro-organismes sauvages provenant de la peau du gingembre.",
      "visualCue": {
        "primaryTarget": "Après 7 jours : un liquide aromatique nuageux, épais, avec des bulles visibles s'élevant constamment et un épais sédiment de gingembre au fond. Des étourdissements évidents lorsqu'il est agité.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Jour 4: à peine toutes les bulles et une odeur faible sans activité de fermentation claire.",
            "action": "Continuez à vous nourrir tous les jours. Certaines racines de gingembre ont moins de levures sauvages — ajoutez une petite pincée de raisins secs non lavés pour l'inoculation de levures sauvages supplémentaires."
          },
          {
            "state": "Perfect",
            "description": "Jour 7 : bulles vigoureuses, sédiment épais, forte odeur gingembre-ail. Goûte aigre et fortement gingembre. Des vertiges sur la langue.",
            "action": "Soucher et utiliser le liquide pour brasser la bière au gingembre. Conservez 200 g de la plante tendue (solides plus un peu de liquide) comme démarreur perpétuel."
          },
          {
            "state": "Overdone",
            "description": "La plante sent sévèrement l'acide acétique (vinegar) plutôt que la fermentation levureuse. Les bulles ont baissé.",
            "action": "Jeter la moitié et recommencer à se nourrir de zéro — elle est devenue trop acide et la population de levures a été dépassée par les bactéries."
          }
        ]
      },
      "feelCue": "Au jour 7, remuer vigoureusement la plante et la regarder : elle devrait mousser comme une expérience scientifique miniature, avec des bulles qui brisent la surface pendant 20 à 30 secondes. Appuyez sur un bout de doigt sur le dessus et il moussera autour de votre doigt — c'est une culture vivante et vigoureuse."
    },
    {
      "nodeId": "step_2",
      "action": "Briser la bière",
      "inputs": [
        "active_ginger_plant",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "brewed_ginger_beer",
      "instructions": "Enfilez le liquide de la plante de gingembre à travers un tamis à mailles fines, pressez les solides de gingembre pour extraire tout le liquide. Réservez les solides — c'est votre \"plante\" perpétuelle pour continuer à nourrir. Dans un grand pot ou un seau en verre, dissoudre le sucre restant dans l'eau filtrée (stirer bien, pas de chaleur nécessaire). Ajouter le liquide de plante et le jus de citron. Mélanger vigoureusement, couvrir d'un chiffon et laisser à température ambiante 2–3 jours de plus, en remuant une fois par jour. La culture maintenant diluée continuera à fermenter l'eau sucrière dans une bière au gingembre légèrement alcoolique (0,5–1,5%), acidulée et effervescente.",
      "visualCue": {
        "primaryTarget": "Après 2-3 jours : un liquide doré légèrement nuageux avec de petites bulles persistantes qui s'élèvent à travers lui. Le liquide a un bord aigre agréable sur le dessus de sa douceur au goût.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Plat, clair, toujours très doux sans amer ni bulle visible.",
            "action": "Laisser encore 24 heures — le liquide de la plante a besoin de temps pour se rétablir dans le plus grand volume d'eau. La chaleur aide (25–28 C est idéal)."
          },
          {
            "state": "Perfect",
            "description": "Remarque nuageuse, étourdissante délicatement lorsqu'elle est versée, sa saveur équilibrée sucrée-sour-gingembre. Tingly sur la langue. Sens de gingembre frais et fermentation.",
            "action": "Bouteille pour la carbonation ou servir immédiatement sur la glace."
          },
          {
            "state": "Overdone",
            "description": "Très aigre et tranchant. Sécher sans douceur résiduelle. Plat (le carbone a été consommé).",
            "action": "Bouteille immédiatement avec du sucre supplémentaire pour la carbonation du deuxième fermentation. Diluer 1:1 avec de l'eau pour réduire la dureté."
          }
        ]
      },
      "feelCue": "Plongez une cuillère et dégustez la bière de gingembre brassante tous les jours : le premier jour, elle a le goût d'une gingembre très légèrement fermentée, surtout sucrée avec un soupçon d'ameresse. Le troisième jour, il devrait fourmiller sur votre langue avec la carbonation et le goût sans équivoque vivant."
    },
    {
      "nodeId": "step_3",
      "action": "Bouteille et carbonate",
      "inputs": [
        "brewed_ginger_beer",
        "ing_05",
        "ing_06"
      ],
      "outputState": "finished_ginger_beer",
      "instructions": "Ajoutez l'eau de dilution supplémentaire si vous voulez une boisson plus légère et plus serviable. Incorporer le sucre d'embouteillage (ceci alimente la levure résiduelle pour la carbonation en bouteille). Entonnoir dans des bouteilles swing-top ou en plastique propres, laissant 3 cm d'espace de tête. Serre hermétiquement. Laisser à température ambiante 24–48 heures, presser les bouteilles en plastique tous les jours pour mesurer la pression — elles vont de doux à fermes à rocailleux. Lorsque le fût est étanche (bouteilles en plastique) ou lorsqu'un flacon d'essai s'ouvre avec un sifflement définitif (verre), réfrigérer immédiatement toutes les bouteilles. Servir très froid sur la glace. Conserver au réfrigérateur et consommer dans les 2 semaines.",
      "visualCue": {
        "primaryTarget": "Un verre froid, doré, pétillant de bière au gingembre avec des bulles fines abondantes et une légère brume. La première gingembre donne un feu de gingembre vif suivi d'agrumes et d'un léger tang.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les bouteilles sont douces. Versé dans un verre, il est plat sans tête. Le goût est doux et gingembre mais sans vie.",
            "action": "Laisser à température ambiante encore 12 à 24 heures, vérifier la fermeté de la bouteille chaque jour."
          },
          {
            "state": "Perfect",
            "description": "Les bouteilles sont fermes. Des sifflements de verre en ouverture. Versée dans un verre, elle s'écrase avec des bulles et contient une mousse légère. Chaleur gingembre, luminosité des agrumes, faible tang, légèrement sucré.",
            "action": "Réfrigérer toutes les bouteilles. Meilleure consommation en 2 semaines."
          },
          {
            "state": "Overdone",
            "description": "La bouteille est dure à cailloux ou a déjà gâché violemment à l'ouverture — une 'bombe à cailloux'.",
            "action": "Réfrigérer immédiatement pour arrêter la carbonation. Ouvrir très lentement sur un évier, relâcher la pression en petits éclats. La prochaine fois, réfrigérer plus tôt."
          }
        ]
      },
      "feelCue": "Pressez une bouteille en plastique — la différence entre sous-dos (doux, creux) et parfait (ferme, ferme sous votre paume) est indéniable. Une bouteille prête de bière au gingembre siffle au moment où le bouchon libère une fissure de pression."
    }
  ]
};
