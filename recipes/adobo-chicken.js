export default {
  "repoId": "master_filipino_adobochicken_001",
  "parentRepoId": null,
  "slug": "adobo-chicken",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Poulet philippin Adobo",
  "description": "Poulet braisé dans un bain de vinaigre de canne et sauce soja avec des grains de poivre noir entiers et des feuilles de laurier jusqu'à ce que la viande tombe de l'os et la sauce se réduit à une laque tannante et brillante.",
  "cuisine": "Philippine",
  "culture": "Philippine",
  "category": "proteins",
  "tags": [
    "poulet",
    "Filipino",
    "braisés",
    "vinaigre",
    "soja",
    "Adobo"
  ],
  "difficulty": 2,
  "activeTime": "25 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 4,
    "bitter": 1,
    "umami": 4,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Morceaux de poulet désossé, sur la peau (cuisses et pilons)",
      "ratioValue": 1200,
      "defaultUnit": "g",
      "substitutions": [
        "ventre de porc coupé en morceaux"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Acid",
      "name": "vinaigre de canne (sukang maasim)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre de vin blanc",
        "vinaigre de cidre de pomme"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "tamari"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Giroves d'ail, entières broyées",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Feuilles de laurier séchées",
      "ratioValue": 4,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Grains de poivre noirs entiers",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Marinaté",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "marinated_chicken",
      "instructions": "Mélanger les morceaux de poulet avec du vinaigre, de la sauce soja, de l'ail écrasé, des feuilles de laurier et des grains de poivre noir dans un bol ou un sac zippé. Mets-toi à manteaur. Faire mariner à température ambiante pendant 30 minutes ou réfrigérer jusqu'à 4 heures. Le vinaigre et le soja commenceront à guérir légèrement la surface du poulet.",
      "visualCue": {
        "primaryTarget": "Des morceaux de poulet immergés dans une saumure ambre profonde avec de l'ail visible, des feuilles de laurier et des grains de poivre flottants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Marinade n'a pas eu le temps de pénétrer, le poulet n'a pas changé de couleur.",
            "action": "Laisser agir au moins 30 minutes à température ambiante pour que le vinaigre commence à fonctionner."
          },
          {
            "state": "Perfect",
            "description": "La surface du poulet a pris une faible teinte ambre du soja. L'ail est meurtri et parfumé. La marinade sent fortement le vinaigre avec un dessous de soja.",
            "action": "Retirer le poulet et réserver la marinade – elle devient le liquide de cuisson."
          },
          {
            "state": "Overdone",
            "description": "Mariné au-delà de 8 heures; l'acide a commencé à cuire la surface, la rendant caoutchouteuse et opaque.",
            "action": "Continuez. L'extérieur se serrera un peu pendant la cuisson, mais l'intérieur restera tendre."
          }
        ]
      },
      "feelCue": "Le poulet doit se sentir légèrement collant du soja et du vinaigre — pas visqueux, pas sec. Soulevez un morceau et il devrait briller ambre."
    },
    {
      "nodeId": "step_2",
      "action": "Sear",
      "inputs": [
        "marinated_chicken",
        "ing_07"
      ],
      "outputState": "seared_chicken",
      "instructions": "Retirer le poulet de la marinade (réserver le liquide). Chauffer l'huile dans une grande casserole ou un wok lourd à feu vif jusqu'à ce qu'elle fume. Placer le poulet sur le côté de la peau pendant 4 à 5 minutes sans bouger, jusqu'à ce que la peau soit profondément dorée et libère proprement de la poêle. Frotter et saisir le côté os pendant 2 minutes. Travaillez en lots si nécessaire.",
      "visualCue": {
        "primaryTarget": "Peau richement dorée-brun, croquante et libérée propre de la poêle, avec des gouttes caramélisées enrobant le plancher de la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est encore pâle et blonde, collée à la poêle. La graisse n'est pas entièrement rendue.",
            "action": "Ne le forcez pas — la peau se libérera quand elle sera prête. Réduisez légèrement la chaleur si elle commence à scorcher sous."
          },
          {
            "state": "Perfect",
            "description": "Peau très dorée avec une texture visible de pores croustillants. Rejete proprement avec une spatule ferme. Un fond brun doré foncé sur le plancher de la casserole.",
            "action": "Plongez brièvement sur le côté osseux, puis mettez de côté."
          },
          {
            "state": "Overdone",
            "description": "La peau est brun foncé ou noircie. Les résidus de soja de la marinade sont brûlants.",
            "action": "Supprimer immédiatement. Le fond sombre ajoutera de l'amertume — déglacer la poêle avec un jet d'eau avant d'ajouter le liquide de cuisson."
          }
        ]
      },
      "feelCue": "Faites glisser une spatule métallique sous la peau à 4 minutes — si elle glisse librement, la peau est prête; si elle traîne et déchire, donnez-lui 60 secondes de plus. Jamais."
    },
    {
      "nodeId": "step_3",
      "action": "Brise",
      "inputs": [
        "seared_chicken",
        "marinated_chicken",
        "ing_08"
      ],
      "outputState": "braised_adobo",
      "instructions": "Retournez tout le poulet dans la poêle. Verser dans la marinade réservée et l'eau — le liquide devrait venir à mi - haut du poulet. Porter à ébullition, puis laisser mijoter régulièrement. Couvrir et cuire pendant 25 minutes, en retournant le poulet à mi-chemin.",
      "visualCue": {
        "primaryTarget": "Un braise d'or ambré, qui mijote régulièrement, avec des bulles lentes occasionnelles qui se brisent à la surface. Le poulet est complètement submergé jusqu'au point médian et le liquide s'amplifie graduellement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le liquide est encore assez pâle et aqueux. Une forte odeur de vinaigre dure domine — l'acide n'a pas fondu.",
            "action": "Continuer à mijoter couvert. La netteté du vinaigre adoucit significativement avec la chaleur et le temps."
          },
          {
            "state": "Perfect",
            "description": "Le liquide s'est approfondi jusqu'à un riche brun-ambre. La note de vinaigre pointu s'est transformée en un tang moelleux. Le poulet est visiblement détendu dans le braise — la peau s'est radoucie.",
            "action": "Découvrez et augmentez la chaleur pour réduire la sauce."
          },
          {
            "state": "Overdone",
            "description": "Trop de liquide s'est évaporé; la poêle est sèche et le poulet commence à frire dans le résidu concentré.",
            "action": "Ajouter immédiatement un jet d'eau ou de bouillon pour rétablir le braise."
          }
        ]
      },
      "feelCue": "Inclinez la poêle et goûtez une cuillerée au liquide de braisage — à ce stade, il doit goûter vif et salé avec le vinaigre toujours affirmé. Elle se refroidira encore pendant la réduction."
    },
    {
      "nodeId": "step_4",
      "action": "Réduire",
      "inputs": [
        "braised_adobo"
      ],
      "outputState": "finished_adobo",
      "instructions": "Découvrez et augmentez la chaleur à moyenne-élevée. Continuer la cuisson en faisant tourner le poulet de temps en temps pendant 10 à 15 minutes jusqu'à ce que la sauce ait réduit à un glaçage épais et brillant qui enrobe le poulet plutôt que de le mettre dans la poêle. La peau, qui s'est adoucie pendant le braise, reprendra légèrement dans la graisse rendue lorsque le liquide disparaîtra.",
      "visualCue": {
        "primaryTarget": "Les morceaux de poulet glacés dans une sauce foncée, sirupeuse, de couleur acajou, qui s'accroche à la peau et se collecte dans les flaques plutôt que de se propager dans la poêle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore fine et aqueuse, se répand rapidement lorsque la poêle est inclinée. Pas encore de brillance.",
            "action": "Continuer à feu vif en remuant la sauce autour du poulet sans déplacer les morceaux."
          },
          {
            "state": "Perfect",
            "description": "La sauce se déplace lentement lorsque la poêle est inclinée. Chaque morceau de poulet est enduit d'une laque acajou qui tient sa forme brièvement. Un parfum légèrement caramélisé et tannant.",
            "action": "Retirer du feu. Servir sur du riz blanc cuit à la vapeur, cuillerer la glaçure sur le dessus."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite à une croûte collante presque solide sur le fond de la poêle. Sensation de sucre brûlé.",
            "action": "Ajouter 3 à 4 cuillerées à soupe d'eau immédiatement et déglacer en dehors du feu. Incorporer la glaçure ramollie sur le poulet."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère en bois à travers la sauce dans la poêle — elle devrait se refermer lentement, laissant un canal transparent pendant 1-2 secondes avant de la remplir. C'est la consistance que tu veux."
    }
  ]
};
