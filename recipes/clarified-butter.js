export default {
  "repoId": "master_french_clarified_butter_001",
  "parentRepoId": null,
  "slug": "clarified-butter",
  "author": "ForkRecipe Kitchen",
  "title": "Beurre clarifié",
  "description": "Beurre entier rendu délicatement jusqu'à ce qu'il se divise en trois : un radeau de mousse, une piscine d'or clair et un sédiment de solides de lait grillé. Retirez-vous de la pure graisse de beurre et vous gagnez une graisse claire et noisette qui se couche sans brûler et se conserve pendant des mois — poussez-la quelques minutes plus loin et vous êtes la plupart du chemin à ghee.",
  "cuisine": "Français",
  "culture": "Classique",
  "category": "condiments",
  "tags": [
    "butter clarifié",
    "français",
    "matières grasses",
    "ghee",
    "rendu",
    "haut point de fumée"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-15",
  "updatedAt": "2026-06-15",
  "flavorRadar": {
    "sweet": 1,
    "salty": 0,
    "sour": 0,
    "bitter": 0,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Fat",
      "name": "Beurre non salé (bonne qualité, matières grasses élevées)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "beurre cultivé pour une note plus profonde et plus tangente",
        "Beurre à 84% de beurre de type européen"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire fondre",
      "inputs": [
        "ing_01"
      ],
      "outputState": "melted_butter",
      "instructions": "Couper le beurre en morceaux et placer dans une casserole à fond lourd sur le feu le plus bas. Laissez-le fondre lentement sans remuer — vous voulez qu'il se sépare doucement, pas bouillir. À mesure qu'il fond, le beurre se sépare en trois couches : une mince mousse blanche de protéines de lactosérum montant jusqu'au sommet, une épaisse couche jaune clair de matière grasse du beurre au milieu, et les solides de lait plus lourds (caséine et lactose) couler au fond. Ne précipitez pas cela avec une chaleur élevée ou vous brûlerez les solides avant que la graisse soit claire.",
      "visualCue": {
        "primaryTarget": "Un pot entièrement liquide avec une mousse blanche distincte enveloppant un bassin de graisse jaune translucide, le fond commence à peine à paraître granulaire.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les morceaux de beurre solide flottent encore dans une fonte nuageuse et uniforme sans séparation visible en couches.",
            "action": "Gardez la chaleur basse et stable et donnez-lui quelques minutes de plus. Résistez à remuer — l'agitation maintient les solides suspendus et ralentit la division."
          },
          {
            "state": "Perfect",
            "description": "Tout est fondu, un radeau blanc mousseux est posé sur le dessus, et la couche médiane est clairement jaune et translucide. Pas encore de brunissement en bas.",
            "action": "Tenez-vous à un mijot nu et déplacez-vous vers l'écumage et le rendu."
          },
          {
            "state": "Overdone",
            "description": "La fonte est dure et la mousse se brise et crache, le fond s'assombrissant rapidement.",
            "action": "Retirez immédiatement la chaleur et laissez-la reposer. Si le fond n'a bronzé que légèrement, procédez; la saveur s'appuiera vers le ghee."
          }
        ]
      },
      "feelCue": "Le pot devrait être presque silencieux — juste une bulle douce et occasionnelle, pas un ébullition. Il sent la crème et le beurre chauds, sans bord brûlé."
    },
    {
      "nodeId": "step_2",
      "action": "Rendu",
      "inputs": [
        "melted_butter"
      ],
      "outputState": "rendered_butterfat",
      "instructions": "Conserver le beurre à mijoter pendant 8 à 12 minutes. L'eau dans le beurre (environ 15 à 18 pour cent de son poids) se dégage, le bouillonnement se calme, et la mousse sur les minces. Éliminez la mousse blanche avec une cuillère car elle s'accumule pour ne pas retomber. La couche médiane tourne de l'or nuageux à l'or brillamment clair, et le lait solide sur le fond se dépose et toast lentement. Pour le beurre pur éclairci, arrêtez-vous pendant que les solides sont pâles; pour une profondeur de ghee, laissez-les tourner un brun noisette clair et la cuisine remplir d'un arôme de noix.",
      "visualCue": {
        "primaryTarget": "Une piscine d'or calme et limpide, vous pouvez voir le fond de, la surface presque libre de mousse, avec des solides stabilisés allant de la crème au bronzage léger.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La graisse est encore trouble ou laiteuse et la surface bulle vigoureusement avec de la vapeur — il reste beaucoup d'eau à chasser.",
            "action": "Continuez à mijoter et à écrémer. Nuageuse signifie que l'eau et les protéines en suspension demeurent; la clarté ne vient qu'une fois que l'eau a bouilli."
          },
          {
            "state": "Perfect",
            "description": "La graisse est transparente et lumineuse, le bouillonnement a ralenti jusqu'à un léger étourdissement, et les solides au fond sont fixés et l'or pâle au brun clair.",
            "action": "Tirez immédiatement de la chaleur et laissez reposer une minute pour que les derniers solides tombent. Allez à la pression."
          },
          {
            "state": "Overdone",
            "description": "Les solides sont brun foncé à noir et la graisse sent acre et amer plutôt que noisette.",
            "action": "Soulevez immédiatement pour arrêter la cuisson et récupérer ce que vous pouvez, mais attendez une saveur brûlée. La prochaine fois, tirez une minute ou deux plus tôt."
          }
        ]
      },
      "feelCue": "Écoutez le bouillonnement pour vous calmer d'un fizz occupé à une pop occasionnelle — que c'est l'eau qui part. L'odeur passe de la crème chaude à la noix grillée et le popcorn que les solides brun."
    },
    {
      "nodeId": "step_3",
      "action": "Filtrer",
      "inputs": [
        "rendered_butterfat"
      ],
      "outputState": "clarified_butter",
      "instructions": "Laisser reposer la casserole pendant une minute afin que les solides restants se déposent. Déposer un tamis à mailles fines avec quelques couches de tissu de fromage humide (ou un filtre à café) sur un pot propre, sec et résistant à la chaleur. Versez la graisse de beurre lentement, laissant les sédiments grillés derrière dans le pot — inclinez et arrêtez de verser avant que les filets glissent. Le tissu capture les dernières particules fines et toute mousse écrémée. Ce qui atterrit dans le pot est clair, beurre éclairci doré. Refroidir jusqu'à la température ambiante, puis le chapeau; il se conserve pendant des semaines à la température ambiante et plusieurs mois réfrigérés, où il se met à un solide ferme, pâle, granuleux.",
      "visualCue": {
        "primaryTarget": "Un bocal de graisse d'or profond, sans tache visible ni nuage, et une casserole sèche de solides bruns usés laissés derrière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La graisse tendue porte des taches visibles de solides ou semble légèrement trouble dans le pot.",
            "action": "Plongez à nouveau dans une nappe fraîche humide ou un filtre à café. Tous les solides laissés dans la durée de conservation raccourcissent et peuvent brûler quand vous cuisinez avec plus tard."
          },
          {
            "state": "Perfect",
            "description": "Graisses dorées cristallines dans le pot, exemptes de particules, avec un arôme de noix propre et les sédiments entièrement capturés par le tissu.",
            "action": "Laisser refroidir et mettre, puis chapeau et stocker. Utilisez-le pour l'échauffement et la cuisson où le beurre entier brûlerait."
          },
          {
            "state": "Overdone",
            "description": "Vous avez versé trop loin et les sédiments sombres ont glissé dans le pot, bouillant la graisse.",
            "action": "Reformer l'ensemble du pot à travers un filtre frais pour retirer les solides et restaurer la clarté."
          }
        ]
      },
      "feelCue": "Versez dans un cours d'eau lent et stable et vous sentirez le moment où la fine graisse claire cède la place aux dregs plus lourds au fond — arrêtez-vous là. Refroidie et sertie, le bon beurre clarifié se sent ferme et légèrement grainé, rompant avec un éclat propre et cireux."
    }
  ]
};
