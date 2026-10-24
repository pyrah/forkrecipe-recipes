export default {
  "repoId": "master_spanish_spanishbacalaalpilpil_001",
  "parentRepoId": null,
  "slug": "spanish-bacalao-al-pil-pil",
  "author": "ForkRecipe Kitchen",
  "title": "Espagnol Bacalao al Pil-Pil",
  "description": "Le sel basque confisquait délicatement l'huile d'olive à un murmure de chaleur, puis il tournait la poêle dans une émulsion d'ivoire tremblante de son propre collagène — pas de crème, pas de farine, rien que le poisson et l'huile.",
  "cuisine": "Espagnol",
  "culture": "Basque",
  "category": "seafood",
  "tags": [
    "Produits de la mer",
    "Sans gluten",
    "Espagnol",
    "morue salée",
    "émulsion",
    "Basque",
    "bacalao"
  ],
  "difficulty": 4,
  "activeTime": "45 min",
  "totalTime": "30 hours",
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
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Cabillaud salé séché (bacalao), avec peau, désossé",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 350,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 6,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Heat",
      "name": "Pigogne séchée ou piment árbol",
      "ratioValue": 2,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel de mer fin (pour l'eau de trempe seulement)",
      "ratioValue": 0,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Garnish",
      "name": "Persil frais à feuilles plates, haché",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrater",
      "inputs": [
        "ing_01"
      ],
      "outputState": "desalted_cod",
      "instructions": "Submerger la morue salée dans un grand bol d'eau froide, côté peau vers le haut. Réfrigérer pendant 24 à 48 heures, changer l'eau toutes les 8 heures (au moins 3 changements). Le poisson est prêt lorsqu'un petit morceau, goûté cru, est agréablement salé, comme un morceau de poisson légèrement assaisonné, et non pas avec un brin agressif. La chair aura réhydraté et tourné de planche rigide à souple, avec une couleur nacrée. Couper en portions de 150 g. Pat complètement sec.",
      "visualCue": {
        "primaryTarget": "La chair est blanche nacrée, souple et souple, non rigide. L'eau qui sème est devenue très salée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La chair est encore partiellement raide et goûte fortement, agressivement salée (trop pour une sauce).",
            "action": "Continuer à tremper avec de l'eau douce change toutes les 6 heures pendant 12 à 24 heures de plus."
          },
          {
            "state": "Perfect",
            "description": "La chair est entièrement souple et nacrée, goût agréablement salée. Retourne à sa couleur blanc crème d'origine.",
            "action": "Laisser sécher et porter à température ambiante 30 minutes avant la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Le poisson a été trempé trop longtemps (72+ heures) et est maintenant sans goût, ayant perdu toute sa saveur caractéristique séchée au sel.",
            "action": "Cuire immédiatement; la texture sera fine, bien que la saveur sera plus douce que l'idéal."
          }
        ]
      },
      "feelCue": "Le bacalao correctement désalté doit se sentir comme un morceau épais et souple de poisson frais avec une légère résistance lorsqu'il est plié — pas raide, pas aqueux, mais ferme."
    },
    {
      "nodeId": "step_2",
      "action": "Pocher",
      "inputs": [
        "desalted_cod",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "confited_cod",
      "instructions": "Dans une grande poêle ou en faïence, verser toute l'huile d'olive. Ajouter les tranches d'ail et les piments secs. À feu très doux, porter lentement l'huile à 60-65°C — utiliser un thermomètre; il ne doit jamais bouillir ni même mijoter. Poser doucement les portions de morue côté peau dans l'huile. Confir 12-15 minutes à cette température douce, en tournant soigneusement une fois. L'huile ne devrait montrer que le mouvement le plus faible et le plus paresseux autour du poisson — presque immobile. Retirer la morue et réserver, réserver l'huile.",
      "visualCue": {
        "primaryTarget": "La morue est opaque et sertie — blanche et scintillante, sans se détacher. L'huile est à peine en mouvement, ne montrant que le tremblement le plus doux autour du poisson.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La morue est encore partiellement translucide au centre. L'huile est trop froide — à peine au - dessus de la température ambiante.",
            "action": "Augmentez la chaleur très légèrement et vérifiez la température – elle doit atteindre 60°C."
          },
          {
            "state": "Perfect",
            "description": "La morue est complètement opaque, mais toujours en un seul morceau, scintillement et souple. L'ail est doré, pas brun.",
            "action": "Retirer la morue et procéder à l'émulsion."
          },
          {
            "state": "Overdone",
            "description": "L'huile a bouilli et la morue s'effondre; la chair est sèche et stringée plutôt que soyeuse.",
            "action": "Procéder à l'émulsion de toute façon — la gélatine est encore présente, la texture du poisson est compromise."
          }
        ]
      },
      "feelCue": "À la bonne température de confit, l'huile devrait se sentir à peine chaude sur le dos de votre main — presque comme un bain chaud, pas comme un milieu de cuisson. Le poisson devrait avoir l'air de se reposer dans l'huile et non de cuisiner."
    },
    {
      "nodeId": "step_3",
      "action": "Émulsionner",
      "inputs": [
        "confited_cod",
        "ing_02"
      ],
      "outputState": "finished_bacalao_pil_pil",
      "instructions": "Retirer l'ail et les piments de l'huile et réserver pour garnir. Retournez la cazuela avec l'huile à la chaleur la plus basse. Remettre la morue dans la poêle, côté peau. Commencer à tourner la poêle dans un mouvement circulaire continu, ou utiliser une araignée à mailles plates pour agiter l'huile en cercles autour du poisson. La gélatine libérée de la peau de la morue s'émulsionnera lentement avec l'huile pendant 8 à 15 minutes de tourbillonnement continu. Ne pas arrêter ou ajouter tout autre ingrédient. La sauce passera progressivement de l'huile d'or translucide à une sauce opaque à la crème d'ivoire — le pil-pil.",
      "visualCue": {
        "primaryTarget": "L'huile s'est transformée en une épaisse émulsion d'ivoire crémeuse qui s'accroche au poisson et aux côtés de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'huile est encore claire et dorée; aucune émulsification n'a eu lieu malgré le tourbillonnement. Le poisson ne libère peut-être pas assez de gélatine.",
            "action": "Continuez à tourner patiemment — cela peut prendre 12-15 minutes. Ajouter une cuillère à soupe d'eau froide pour déclencher l'émulsion."
          },
          {
            "state": "Perfect",
            "description": "La sauce est opaque, blanc ivoire et assez épaisse pour enrober le dos d'une cuillère. Il s'accroche au poisson dans une couche soyeuse et tremblante. La casserole se déplace dans des vagues lentes et lourdes.",
            "action": "Déposer le poisson et la cuillère sur le pil-pil. Garnir d'ail et de chili."
          },
          {
            "state": "Overdone",
            "description": "L'émulsion a cassé — la sauce s'est séparée en huile claire avec des taches blanches.",
            "action": "Retirer du feu et laisser refroidir légèrement. Ajoutez 1 c. à soupe d'eau froide et commencez à tourner à nouveau — le pulpe cassé peut souvent être sauvé avec patience et une réduction de température."
          }
        ]
      },
      "feelCue": "La sauce pil-pil doit se sentir complètement lisse sur la langue — pas de grain, pas de huile — juste une crème ronde, presque neutre avec une profondeur persistante de morue salée. Il devrait frissonner quand l'assiette est tapée."
    }
  ]
};
