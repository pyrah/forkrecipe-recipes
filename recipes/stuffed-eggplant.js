export default {
  "repoId": "master_turkish_stuffedeggplant_001",
  "parentRepoId": null,
  "slug": "stuffed-eggplant",
  "parentSlug": null,
  "author": "ForkRecipe Kitchen",
  "title": "Bayıldı (aubergine farcie)",
  "description": "Des aubergines minces marquaient et salés, puis somptueusesment remplies d'oignon doux, d'ail et de tomate mûre cuites dans des marmites d'huile d'olive — braisées jusqu'à ce que la chair donne complètement et que la légende du nom se révèle : l'imam s'évanouisse du plaisir.",
  "cuisine": "Turquie",
  "culture": "Ottoman",
  "category": "vegetables",
  "tags": [
    "végétalien",
    "Sans gluten",
    "aubergines",
    "turc",
    "braise",
    "farcis",
    "Huile d'olive"
  ],
  "difficulty": 2,
  "activeTime": "35 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 2,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Aubergines minces (variété japonaise ou italienne)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "aubergines mondiales, coupées en deux"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Oignons jaunes, mincement coupés en demi-lune",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Structure",
      "name": "Tomates de prune, pelées et hachées",
      "ratioValue": 40,
      "defaultUnit": "parts",
      "substitutions": [
        "tomates entières en conserve, égouttées"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Persil à feuilles plates, approximativement haché",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel de mer fin et sucre blanc",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Eau",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "eau de tomate légère"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saison",
      "inputs": [
        "ing_01",
        "ing_07"
      ],
      "outputState": "salted_eggplant",
      "instructions": "Laver et sécher les aubergines. Laissez la tige pour présentation. Faire une fente longitudinale profonde dans chaque aubergine de l'extrémité à moins de 2 cm de la tige, couper les trois quarts du chemin à travers — créer une poche. Frottez généreusement l'intérieur de la fente avec du sel fin. Placez le côté fendue dans une calandre pendant 30 minutes pour dégager l'excès d'humidité et toute amertume.",
      "visualCue": {
        "primaryTarget": "L'aubergine dans la calandre",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Aucune gouttette d'humidité n'est apparue à la surface de la coupe — le sel n'a pas eu le temps de fonctionner.",
            "action": "Attendez 30 minutes. Une aubergine amère et aqueuse à l'intérieur de la garniture va diluer le plat."
          },
          {
            "state": "Perfect",
            "description": "Des gouttelettes de liquide pâle et légèrement brunâtre se sont formées le long de la surface coupée et dans la calandre inférieure. L'aubergine s'est adoucie visiblement et la fente s'est légèrement élargie de la perte d'humidité.",
            "action": "Rincer légèrement sous l'eau froide et laisser sécher complètement avec une serviette de cuisine."
          },
          {
            "state": "Overdone",
            "description": "L'aubergine est salée depuis plus de 2 heures et est devenue très boiteuse et a perdu beaucoup d'humidité — elle absorbera moins d'huile dans la poêle.",
            "action": "Rincer immédiatement et bien sécher. Le plat final peut être moins riche mais encore bon."
          }
        ]
      },
      "feelCue": "Après le salage, pressez doucement le corps de l'aubergine — il devrait se sentir nettement plus souple que lorsqu'il a commencé, donnant doucement plutôt que de retomber."
    },
    {
      "nodeId": "step_2",
      "action": "Saucisse",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "filling",
      "instructions": "Chauffer la moitié de l'huile d'olive dans une casserole large sur un support. Ajouter les tranches d'oignon et une grande pincée de sel et le sucre. Cuire lentement, en remuant toutes les quelques minutes, pendant 15 minutes jusqu'à ce qu'il soit profondément doré et embrouillé. Ajouter l'ail et cuire 3 minutes. Ajouter les tomates et cuire jusqu'à ce que le mélange soit épais, unifié, et l'huile s'est séparée à la surface — encore 8 minutes. Retirer du feu et mélanger le persil.",
      "visualCue": {
        "primaryTarget": "Le remplissage des oignons-tomates",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont au mieux de l'or pâle et les tomates sont encore molles et aqueuses — le remplissage n'est ni concentré ni unifié.",
            "action": "Continuer la cuisson à feu moyen; l'eau doit s'évaporer avant la farce."
          },
          {
            "state": "Perfect",
            "description": "Un remplissage épais, brillant, semblable à de la confiture — ambre-orange profond avec des brins d'oignon foncé partout. L'huile se trouve dans une piscine distincte à la surface, ce qui indique que toute l'eau a cuit. Parfume intensément sucré, avec de la tomate concentrée et de l'ail frit.",
            "action": "Laisser refroidir légèrement avant de cuillerer dans les aubergines."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage a séché jusqu'à une pâte collante et s'attrape sur le fond de la poêle.",
            "action": "Ajouter une cuillère à soupe d'eau, remuer pour se détendre et retirer immédiatement de la chaleur."
          }
        ]
      },
      "feelCue": "Soulevez une cuillerée de remplissage et laissez tomber — elle devrait tomber dans une corde épaisse et lente, ne pas éclabousser comme un liquide ou plop dans une touffe sèche."
    },
    {
      "nodeId": "step_3",
      "action": "Sear",
      "inputs": [
        "salted_eggplant",
        "ing_05"
      ],
      "outputState": "seared_eggplant",
      "instructions": "Chauffer le reste de l'huile d'olive dans une grande casserole ou une casserole à feu moyen-élevé. Ajouter les aubergines et faire frire 3 à 4 minutes jusqu'à ce que le visage coupé soit doré. Tourner soigneusement et faire frire le côté de la peau 2–3 minutes. L'aubergine devrait déjà commencer à ramollir. Retirez brièvement sur une planche.",
      "visualCue": {
        "primaryTarget": "La surface de l'aubergine après la mer",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le visage coupé est encore pâle et la chair n'a pas coloré — l'huile n'était pas assez chaude ou le temps était trop court.",
            "action": "Augmenter la chaleur et revenir à la poêle; la croûte dorée ajoute de la saveur et de l'intégrité structurelle pour le braise."
          },
          {
            "state": "Perfect",
            "description": "Le visage fendu est doré et légèrement effondré vers l'intérieur. La peau s'est adoucie et l'aubergine entière commence à céder à une légère pression. Un arôme de noix légèrement fumé.",
            "action": "Procédez au remplissage et au brassage."
          },
          {
            "state": "Overdone",
            "description": "La peau de l'aubergine s'obscurcit et la chair est très molle.",
            "action": "Poignez doucement; remplissez avec soin et empaquetez-vous étroitement dans le pot afin que les aubergines se soutiennent mutuellement."
          }
        ]
      },
      "feelCue": "L'aubergine de mer devrait se sentir comme un ballon légèrement dégonflé, tout en tenant sa forme mais nettement plus douce que lorsqu'elle est crue, la peau donnant légèrement sous un bout de doigt."
    },
    {
      "nodeId": "step_4",
      "action": "Brise",
      "inputs": [
        "seared_eggplant",
        "filling",
        "ing_08"
      ],
      "outputState": "finished_stuffed_eggplant",
      "instructions": "Emportez généreusement chaque aubergine, en ouvrant la fente avec les doigts et en l'empaquetant dans le remplissage, de sorte qu'elle passe au-dessus de l'ouverture. Disposer les aubergines farcies de façon serrée dans une casserole ou une casserole large et lourde, côté fente. Verser tout liquide de remplissage restant et l'eau autour (pas plus) des aubergines. Arrosez le reste de l'huile d'olive sur le dessus. Porter à mijoter, couvrir et cuire à feu doux de 35 à 45 minutes jusqu'à ce que l'aubergine soit complètement tendre. Laisser refroidir à la température ambiante avant de servir.",
      "visualCue": {
        "primaryTarget": "L'aubergine à la fin de la cuisson",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'aubergine tient sa forme rigide et un poke avec une cuillère rencontre une résistance ferme — la chair n'a pas entièrement cédé.",
            "action": "Couvrir et continuer pendant 10 minutes. Le Bayıldı devrait être très tendre, pas al dente."
          },
          {
            "state": "Perfect",
            "description": "L'aubergine s'est effondrée doucement dans la poêle, sa peau est ridée et sa couleur violette profonde, le remplissage scintille et s'enfonce légèrement dans la poche de chair. Une cuillère glisse à travers avec une résistance nulle. Le liquide de cuisson a réduit à quelques cuillères de jus d'olive foncé, doux et huileux. La chambre sent l'oignon caramélisé et l'huile d'olive cuite.",
            "action": "Cool découvert à température ambiante. Servir à température ambiante ou froide avec du bon pain."
          },
          {
            "state": "Overdone",
            "description": "L'aubergine s'est complètement désintégrée — la peau s'est scindée et la chair s'est fusionnée avec le remplissage en une masse homogène.",
            "action": "Servez-le comme un braise rustique dans un bol plutôt que comme un légume farci. La saveur est la même."
          }
        ]
      },
      "feelCue": "Un imam parfaitement braisé bayıldı n'offre aucune résistance à une cuillère quelle qu'elle soit — chair, remplissage et partie de peau soyeusement ensemble comme une chose induisante et onctueuse."
    }
  ]
};
