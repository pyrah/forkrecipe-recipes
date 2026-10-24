export default {
  "repoId": "master_french_pistou_001",
  "parentRepoId": null,
  "slug": "pistou",
  "author": "ForkRecipe Kitchen",
  "title": "Pistou",
  "description": "La pâte de basilic non cuite de Provence — ail cru fourré de basilic frais et d'huile d'olive dans une sauce verte vive qui sent comme un jardin en août. Contrairement à son pesto cousin ligurien, le pistou ne contient pas de noix et pas de fromage, ce qui signifie que toutes les saveurs sont immédiates et transparentes, sans que le basilic se cache.",
  "cuisine": "Français",
  "culture": "Provençal",
  "category": "sauces",
  "tags": [
    "sauce",
    "français",
    "Origine",
    "végétalien",
    "Sans gluten",
    "sans produits laitiers",
    "basilic",
    "pas de cuisson",
    "Vite"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "10 min",
  "ratioSystem": "parts",
  "stars": 876,
  "forks": 67,
  "contributors": 18,
  "license": "CC-BY-SA",
  "createdAt": "2026-01-15",
  "updatedAt": "2026-01-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 0,
    "bitter": 2,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Herb",
      "name": "Feuilles fraîches de basilic (emballées, sans tiges)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Gousses d'ail",
      "ratioValue": 3,
      "defaultUnit": "cloves",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Fat",
      "name": "Huile d'olive extra vierge (meilleure qualité)",
      "ratioValue": 100,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sels de mer grossiers",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Acid",
      "name": "Presse de jus de citron (facultatif)",
      "ratioValue": 5,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Livre",
      "inputs": [
        "ing_02",
        "ing_04"
      ],
      "outputState": "garlic_paste",
      "instructions": "Dans un mortier, battre les gousses d'ail avec le sel grossier jusqu'à ce qu'une pâte blanche complètement lisse se forme. Les cristaux de sel agissent comme abrasif et tirent l'humidité de l'ail. Cette étape est cruciale: tout autre morceau d'ail rendra la sauce dure et désagréable. Si vous utilisez plutôt un robot culinaire, émincer l'ail le plus fin possible avant de procéder.",
      "visualCue": {
        "primaryTarget": "Une pâte de crème blanche lisse et translucide. Pas de morceaux d'ail visibles. Arôme d'ail intense et propre, sans amertume acride.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des morceaux d'ail encore visibles. La texture est rude.",
            "action": "Continuer à battre — l'ail doit être complètement réduit à une pâte pour être distribué uniformément."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, pâte presque collante. Cristaux de sel complètement dissous. Des odeurs d'ail pur et propre.",
            "action": "Ajouter le basilic et commencer à incorporer."
          },
          {
            "state": "Overdone",
            "description": "L'ail s'est oxydé et est légèrement grisé. Très piquant. Des notes d'acrid.",
            "action": "Continuez: le basilic tempérera la dureté. Ajouter une goutte de jus de citron pour stabiliser."
          }
        ]
      },
      "feelCue": "Faites glisser votre doigt à travers le mortier — la pâte devrait être comme du beurre frais: lisse, cohésif, sans râpe du sel ou des fibres d'ail."
    },
    {
      "nodeId": "step_2",
      "action": "Livre",
      "inputs": [
        "garlic_paste",
        "ing_01"
      ],
      "outputState": "basil_paste",
      "instructions": "Ajouter les feuilles de basilic au mortier en deux ou trois lots. Pound et moudre avec un mouvement de pression circulaire — pas de frappes pointues — jusqu'à ce que chaque lot soit complètement incorporé avant d'ajouter le prochain. L'objectif est de contuser et d'écraser les cellules pour libérer les huiles, et non pour créer de la chaleur de friction. Si l'on utilise un robot culinaire, l'impulsion se fait brièvement en petits éclats; le mélange trop long réchauffe le basilic et le rend noir.",
      "visualCue": {
        "primaryTarget": "Une pâte dense, brillamment verte. Pas de feuilles entières. Une piscine d'huile vert foncé commence à se séparer autour des bords du mortier.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les feuilles sont encore partiellement entières ou très petites. La pâte est rugueuse et mal intégrée.",
            "action": "Continuer à frapper — la sauce a besoin de basilic entièrement macéré."
          },
          {
            "state": "Perfect",
            "description": "Pâte verte vive, dense et lisse. L'huile verte pleure aux bords. La fragrance est intensément florale et herbacée, l'été dans un bol.",
            "action": "Rincer immédiatement l'huile d'olive."
          },
          {
            "state": "Overdone",
            "description": "Le basilic passe du vert vif à l'olive foncée et au noir. Les parois des cellules sont entièrement oxydées.",
            "action": "Travaillez plus vite — ajoutez immédiatement de l'huile à une oxydation lente. Une pression de jus de citron aidera également à préserver le vert."
          }
        ]
      },
      "feelCue": "La pâte doit sentir comme une plante de basilic broyée — intensément à base de plantes et de fleurs, avec une légère douceur d'anis qui remplit toute la pièce."
    },
    {
      "nodeId": "step_3",
      "action": "Émulsifier",
      "inputs": [
        "basil_paste",
        "ing_03",
        "ing_05"
      ],
      "outputState": "finished_pistou",
      "instructions": "Rincer l'huile d'olive un peu à la fois, en remuant et en pressant la pâte sur les côtés du mortier à incorporer. La sauce se desserre et devient brillante à mesure que l'huile émulsifie avec la teneur en eau du basilic. Ajouter une petite pression de jus de citron si vous utilisez. La consistance doit être assez épaisse pour enrober une cuillère mais suffisamment fluide pour verser. Utiliser immédiatement — le pistou commence à s'oxyder et à perdre sa couleur vive en 30 minutes.",
      "visualCue": {
        "primaryTarget": "Sauce émeraude vive et brillante. Verse d'une cuillère dans un ruban lent et épais. Pas de séparation.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Mise en commun du pétrole séparément plutôt que de l'intégrer. La sauce a l'air cassée.",
            "action": "Mélanger plus vigoureusement, presser la pâte contre les côtés. Ajouter une goutte d'eau pour aider à émulsifier."
          },
          {
            "state": "Perfect",
            "description": "Une sauce émeraude uniforme et fluide. Complètement émulsifié. Une explosion de parfum de basilic-ail-ail. Enrober une cuillère et glisser lentement.",
            "action": "Utilisez dans les 20 minutes pour la meilleure couleur et saveur."
          },
          {
            "state": "Overdone",
            "description": "La sauce est vert olive très foncé et oxydante. Saveur légèrement amère.",
            "action": "À utiliser immédiatement. Ajouter une touche plus frais basilic si disponible pour raviver la couleur."
          }
        ]
      },
      "feelCue": "Goûtez une petite cuillère droite – elle devrait sentir le revêtement et riche à partir de l'huile, avec un basilic immédiatement lumineux frappé suivi par la chaleur lente et propre de l'ail cru."
    }
  ]
};
