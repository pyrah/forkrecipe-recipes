export default {
  "repoId": "master_thai_thailarb_001",
  "parentRepoId": null,
  "slug": "thai-larb",
  "author": "ForkRecipe Kitchen",
  "title": "Thai Larb Gai",
  "description": "Poulet haché cuit rapidement jeté avec de la poudre de riz grillée, de la chaux, de la sauce de poisson, et une avalanche d'herbes fraîches – vives, vives et texturales.",
  "cuisine": "Thaï",
  "culture": "Isan/Thaïlandais du Nord",
  "category": "proteins",
  "tags": [
    "poulet",
    "Thaï",
    "salade",
    "herbes",
    "épicé",
    "larbes",
    "estan",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 4,
    "bitter": 1,
    "umami": 3,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Poulet haché (ou viande de cuisse hachée à la main)",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "porc haché",
        "canard moulu",
        "tofu ferme émietté"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Riz glutineux brut (collant), non cuit",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "riz jasmin cru (moins de noix mais fonctionnel)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Jus de chaux frais",
      "ratioValue": 45,
      "defaultUnit": "ml",
      "substitutions": [
        "eau de tamarin (moins brillant, plus complexe)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Umami",
      "name": "Sauce de poisson",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce soja + pincée de MSG pour végétalien"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Flacons de chili séchés ou au goût",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "chili des yeux d'oiseau frais, haché"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Échalotes, tranchées finement en anneaux",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "oignon rouge, tranché finement"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Feuilles fraîches de menthe, déchirées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Herb",
      "name": "Coriandre fraîche, grossièrement hachée",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Allium",
      "name": "Échalons, tranchés finement",
      "ratioValue": 3,
      "defaultUnit": "pcs",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Lémonnelle, seule tige interne tendre, hachée",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "pâte de citronnelle (1 c. à thé)"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Sweetener",
      "name": "Sucre (solde facultatif)",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "sucre de palme"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_02"
      ],
      "outputState": "toasted_rice_powder",
      "instructions": "Placer le riz glutineux cru dans un wok sec ou une poêle lourde à feu moyen. Toast, en remuant constamment, pendant 5 à 8 minutes jusqu'à ce que chaque grain devienne doré et que la cuisine se remplisse d'un parfum de popcorn et de noix. Ne partez pas — la transition de l'or au feu prend quelques secondes. Transférer dans un broyeur de mortier ou d'épices et broyer dans une poudre grossière (la texture de la chapelure fine). Cette poudre est la texture secrète du larbe : elle absorbe la vinaigrette et donne au plat sa morsure sablonneuse caractéristique.",
      "visualCue": {
        "primaryTarget": "Grains dorés sans centres pâles. Une colonne de vapeur parfumée de pop-corn se lève de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore blancs ou seulement légèrement blonds. L'arôme est cru, fébrile, légèrement crayeux.",
            "action": "Continuer à griller à feu moyen, en remuant constamment. Vous avez besoin de couleur dorée pour la saveur à développer."
          },
          {
            "state": "Perfect",
            "description": "Tous les grains sont profonds, même dorés. L'odeur est intensément noisette et popcorn-comme sans note brute. Un ou deux grains viennent de montrer le premier soupçon de brunissement plus foncé.",
            "action": "Transférez immédiatement dans le mortier — la chaleur résiduelle de la poêle sera surchargée si elle est laissée."
          },
          {
            "state": "Overdone",
            "description": "Les grains sont brun foncé ou acajou avec une odeur amère et acride. Fumée visible.",
            "action": "Jeter et recommencer à zéro — la poudre de riz brûlé rend le plat entier amer. Réduire la chaleur pour le prochain lot."
          }
        ]
      },
      "feelCue": "La poudre de terre doit se sentir comme du sable fin entre les doigts, légèrement sec, sec et chaud. Pas d'embrouille humide."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "ing_01"
      ],
      "outputState": "cooked_chicken",
      "instructions": "Chauffer un wok à feu vif jusqu'à ce qu'il fume. Ajouter le poulet moulu sans huile — la graisse naturelle de la viande est suffisante et l'huile causerait de la vapeur. Séparer rapidement la viande avec une spatule, la répandre mince sur la surface du wok chaud. Cuire jusqu'à ce qu'il ne soit plus rose, environ 3-4 minutes. Ne pas cuire complètement — la chaleur résiduelle et l'acide de chaux finiront. Le but est à peine cuit, le poulet encore juteux.",
      "visualCue": {
        "primaryTarget": "Le poulet est blanc ivoire pâle dans l'ensemble avec un soupçon de brun doré sur certains morceaux. Pas de rose restant, mais pas de brunissement profond non plus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "chair rose ou translucide visible au centre des miettes. Une texture de poulet cru.",
            "action": "Continuer sur feu vif pendant encore 90 secondes, étaler mince."
          },
          {
            "state": "Perfect",
            "description": "Uniformement blanc et juste cuit, illuminant encore avec sa propre graisse. Pas doré. Juteux. Sens propre et charnu.",
            "action": "Retirer immédiatement du feu. Déplacez-vous rapidement — il continuera à cuire à partir de la chaleur résiduelle."
          },
          {
            "state": "Overdone",
            "description": "Sécher, miettes, légèrement dorées. L'humidité s'est évaporée. Des morceaux collés au wok.",
            "action": "Le larb sera moins juteux. Compensez le jus de lime et la sauce de poisson dans le toss."
          }
        ]
      },
      "feelCue": "Un morceau pressé entre les doigts doit se sentir tendre et humide, pas caoutchouteux ou émietté. Il devrait s'effondrer facilement mais tenir sa forme lorsqu'il est ramassé."
    },
    {
      "nodeId": "step_3",
      "action": "Saison",
      "inputs": [
        "cooked_chicken",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_11"
      ],
      "outputState": "dressed_chicken",
      "instructions": "Travailler pendant que le poulet est encore très chaud (la chaleur aide à pénétrer la vinaigrette), ajouter la sauce de poisson, le jus de lime, les flocons de chili séchés et le sucre. Jetez vigoureusement. Goûtez immédiatement — l'équilibre est le plat. Il devrait d'abord frapper le aigre, puis le sel, puis chauffer le bâtiment à l'arrière de la gorge. Ajuster : plus de chaux pour la luminosité, plus de sauce poisson pour la profondeur, plus de chili pour le feu.",
      "visualCue": {
        "primaryTarget": "Le poulet a absorbé la vinaigrette et brille. La surface semble humide plutôt que humide. Les flocons de Chili sont également distribués.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La vinaigrette est mise en commun dans le fond du bol plutôt que d'enrober la viande. Pale et sous saison.",
            "action": "Mélanger plus agressivement et ajouter une touche plus de sauce de poisson pour aider l'émulsion."
          },
          {
            "state": "Perfect",
            "description": "Chaque morceau de poulet est enduit et scintillement. Le liquide est absorbé, non mis en commun. L'arôme est de la chaux vive et des poissons fermentés, les deux distincts.",
            "action": "Ajouter les herbes et la poudre de riz immédiatement tout en restant chaud."
          },
          {
            "state": "Overdone",
            "description": "Trop de liquide a été ajouté — le bol est soupeux. Les arômes sont dilués.",
            "action": "Ajouter de la poudre de riz supplémentaire (il absorbera l'excès) et goûter à nouveau pour l'assaisonnement."
          }
        ]
      },
      "feelCue": "Sentez le bol — il devrait vous frapper avec des agrumes brillants d'abord, puis le funk profond de la sauce de poisson en dessous, puis la chaleur du chili montant dans vos sinus. Si une seule note domine, rééquilibrer."
    },
    {
      "nodeId": "step_4",
      "action": "Découpe",
      "inputs": [
        "dressed_chicken",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10",
        "toasted_rice_powder"
      ],
      "outputState": "finished_larb",
      "instructions": "Pliez dans les échalotes, la menthe, la coriandre, l'échon et la citronnelle hachée. Dispersez la poudre de riz grillée sur le dessus et pliez-la doucement — vous voulez qu'elle soit distribuée mais pas complètement enterrée. Goûtez une dernière fois. Servir immédiatement sur une assiette garnie de feuilles de chou, avec de la menthe et des légumes crus sur le côté. Les larves se détériorent rapidement à mesure que les herbes se flétrissent et que la poudre de riz s'hydrate.",
      "visualCue": {
        "primaryTarget": "Un monticule de poulet vibrant et éparpillé. Feuilles de menthe vert clair, anneaux d'échalote encore légèrement translucides et croquants. Poudre de riz visible comme une poussière sablonneuse à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Herbes à peine mélangées, assises sur le dessus. Poudre de riz non distribuée.",
            "action": "Plier plus soigneusement avec deux cuillères, lever du bas."
          },
          {
            "state": "Perfect",
            "description": "Chaque élément intégré mais identifiable. Herbes vertes brillantes, échalotes croustillantes, poudre de riz sablonneuse dans l'ensemble, éblouissement de poulet.",
            "action": "Servir en 3 minutes pour obtenir une texture maximale."
          },
          {
            "state": "Overdone",
            "description": "Les herbes se sont flétries au vert foncé. La poudre de riz a complètement absorbé la vinaigrette et rendu la texture humide et lourde.",
            "action": "Éparpiller une poignée de menthe fraîche sur le dessus et servir — ce ne sera pas la même chose, mais ça aide."
          }
        ]
      },
      "feelCue": "Faites une bouchée — vous devriez sentir le léger croûte d'échalote crue, le poulet doux et juteux, et le grain de sable de poudre de riz en une seule bouche. Les feuilles de menthe doivent être fraîches et papier, et non boiteuses."
    }
  ]
};
