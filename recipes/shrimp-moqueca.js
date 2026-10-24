export default {
  "repoId": "master_brazilian_shrimp_moqueca_001",
  "parentRepoId": null,
  "slug": "shrimp-moqueca",
  "author": "ForkRecipe Kitchen",
  "title": "Moqueca de Camarão",
  "description": "Un ragoût de fruits de mer bahaï de crevettes dans une base de lait de coco et d'huile de palme (dendê) avec des tomates, des poivrons et de la coriandre — chaud, tropical et impossible à manger tranquillement.",
  "cuisine": "Brésil",
  "culture": "Bahia, Brésil",
  "category": "seafood",
  "tags": [
    "crevettes",
    "Brésilien",
    "noix de coco",
    "huile de palme",
    "Produits de la mer"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "35 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 3,
    "sour": 2,
    "bitter": 0,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Grandes crevettes (peautées et dépeintes, queues sur)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "filets de poissons (cod, tilapia)",
        "pétoncles"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "Jus de citron vert frais",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de citron"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Aromatic",
      "name": "Gousses d'ail (mincées)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Oignon jaune (finement tranché en anneaux)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Base",
      "name": "Tomates de ripe (découpées en rondelles)",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates entières en conserve"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Base",
      "name": "poivrons verts et rouges (en rondelles)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Liquid",
      "name": "Lait de coco plein gras",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Fat",
      "name": "Dendê (huile de palme rouge, non raffinée)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Herb",
      "name": "Coriandre fraîche (feuilles et tiges tendres)",
      "ratioValue": 6,
      "defaultUnit": "parts",
      "substitutions": [
        "Persil à feuilles plates"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire mariner",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_10"
      ],
      "outputState": "marinated_shrimp",
      "instructions": "Mélanger les crevettes avec le jus de lime, l'ail haché et une pincée généreuse de sel. Couvrir et réfrigérer pendant 15 à 20 minutes. Ne pas mariner plus de 30 minutes — l'acide citron vert commencera à cuire les crevettes et à les durcir.",
      "visualCue": {
        "primaryTarget": "Crevette légèrement opaque et rose aux bords mêmes du citron vert, mais toujours gris et translucide au centre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Crevettes encore entièrement grises et crues; arôme de citron vert et d'ail non encore absorbé.",
            "action": "Faites mariner le temps restant."
          },
          {
            "state": "Perfect",
            "description": "Les bords des crevettes sont légèrement roses à cause de leur exposition à l'acide; ils sentent l'ail vif et agrumes. Toujours souple.",
            "action": "Retirer du réfrigérateur et construire la base de ragoût."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes sont opaques et serrées à la suite d'une surmarination; la texture peut être caoutchouteuse après cuisson.",
            "action": "Continuez immédiatement et faites cuire brièvement — ils seront encore comestibles."
          }
        ]
      },
      "feelCue": "Les crevettes marinées doivent se sentir fraîches et lissées, le jus de lime légèrement collant sur les doigts, avec un arôme d'agrumes et d'ail vif qui vous fait saliver."
    },
    {
      "nodeId": "step_2",
      "action": "Calque",
      "inputs": [
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "stew_base",
      "instructions": "Dans une grande casserole d'argile lourde (ou une grande poêle), recouvrir les ingrédients sans remuer : d'abord un mince filet d'huile dendê, puis des anneaux d'oignon, puis des tranches de tomate, puis des anneaux de poivron. Verser le lait de coco uniformément sur tout, puis arroser le reste dendê sur le dessus. La couleur du dendê transformera le ragoût en or orange vif. Assaisonner de sel. Ne remuez pas — la couche est délibérée.",
      "visualCue": {
        "primaryTarget": "Liquide orange-or vif entourant les couches colorées des anneaux de tomates et de poivre. L'huile dendê est visible en surface sous forme de piscines orange.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le lait de coco est encore blanc et le dendê n'est pas encore mélangé; les couches sont sèches en haut.",
            "action": "Assurez-vous que dendê est traîné sur la couche supérieure avant le chauffage."
          },
          {
            "state": "Perfect",
            "description": "Le pot ressemble à une coupe transversale d'un jardin tropical: anneaux de poivre rouge et vert, oignon blanc, tomate rouge. Prêt à chauffer.",
            "action": "Mettre à feu moyen et laisser mijoter."
          },
          {
            "state": "Overdone",
            "description": "Vous avez tout agité ensemble — les couches sont perdues.",
            "action": "La saveur sera la même; procéder."
          }
        ]
      },
      "feelCue": "L'huile dendê à température ambiante a la consistance de l'huile de coco — semi-solide et cireuse. Il fondra et fleurira en orange profond au moment où il touchera la chaleur."
    },
    {
      "nodeId": "step_3",
      "action": "Mijoter",
      "inputs": [
        "stew_base"
      ],
      "outputState": "simmered_base",
      "instructions": "Placer le pot à feu moyen, couvrir et laisser mijoter. Cuire de 8 à 10 minutes, partiellement couvert, jusqu'à ce que les légumes soient tendres et que le bouillon soit uniformément orange du dendê et du lait de coco qui se mélangent. Agiter le pot à l'occasion plutôt que de remuer pour maintenir les couches un peu intactes.",
      "visualCue": {
        "primaryTarget": "Un bouillon orange vif avec du poivre ramolli et des anneaux de tomate visibles. La vapeur monte régulièrement de la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Broth encore pâle — dendê et lait de coco ne sont pas complètement combinés. Les légumes sont fermes.",
            "action": "Continuer à mijoter et agiter le pot pour encourager le mélange."
          },
          {
            "state": "Perfect",
            "description": "Broth est un profond, même orange. Les poivrons et l'oignon sont adoucis mais pas musclés. L'odeur est profondément tropicale — noix de coco, dendê et tomate.",
            "action": "Ajouter les crevettes."
          },
          {
            "state": "Overdone",
            "description": "Les légumes sont très mous et se décomposent en bouillon. Broth a l'air bizarre.",
            "action": "Continuez — la saveur sera encore plus riche."
          }
        ]
      },
      "feelCue": "La cuisine doit sentir comme une cabane de plage au Salvador: noix de coco douce, huile de palme terreuse et tomate sautée tout à la fois."
    },
    {
      "nodeId": "step_4",
      "action": "Pocher",
      "inputs": [
        "simmered_base",
        "marinated_shrimp",
        "ing_09"
      ],
      "outputState": "finished_moqueca",
      "instructions": "Ajouter les crevettes marinées en une seule couche sur la base de légumes mijotés. Couvrir et cuire 3-4 minutes à feu moyen — pas plus. Les crevettes sont faites dès qu'elles sont roses et opaques. Dispersez la moitié de la coriandre dans le pot. Goûtez le bouillon et ajustez le sel et le citron vert. Terminer avec la coriandre restante. Servir directement de la casserole avec du riz blanc et du farofa (farine de manioc grillée) à côté.",
      "visualCue": {
        "primaryTarget": "Les crevettes sont roses et en forme de C, reposant sur le bouillon orange. Pas de taches grises. Cilantro est vert vif sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les crevettes sont toujours translucides et grises au centre ; elles se sentent douces et squishy.",
            "action": "Couvrir et cuire encore 1 minute. Vérifiez à nouveau immédiatement."
          },
          {
            "state": "Perfect",
            "description": "Toutes les crevettes sont opaques, uniformément roses, et se sont recourbées en forme douce de C. Ils ressortent quand ils sont pressés. Broth est orange vif.",
            "action": "Servir immédiatement — les crevettes continuent à cuire à la chaleur résiduelle."
          },
          {
            "state": "Overdone",
            "description": "Les crevettes sont étroitement enroulées en O et se sentent caoutchouteuses. Ils vont mâcher.",
            "action": "Servir immédiatement et se déplacer plus vite la prochaine fois — réduire le temps de cuisson à 2,5 minutes."
          }
        ]
      },
      "feelCue": "Une crevette parfaitement cuite devrait craquer légèrement lorsqu'elle est mordue — une résistance brève avant de céder, jamais caoutchouteuse ou molle. Le bouillon devrait envelopper vos lèvres d'une douceur riche et grasse."
    }
  ]
};
