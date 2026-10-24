export default {
  "repoId": "master_levantine_tahini_001",
  "parentRepoId": null,
  "slug": "tahini",
  "author": "ForkRecipe Kitchen",
  "title": "Tahini",
  "description": "Pâte de sésame moulue, base de l'hummus, du baba ganoush et d'une centaine de sauces, faite en torréfaction de graines de sésame crues au plus bas feu possible jusqu'à ce qu'elles soient à peine dorées et mélangées longtemps et lentement dans une crème d'ivoire lisse et versable. La qualité du tahini détermine tout ce qui le suit.",
  "cuisine": "Moyen-Orient",
  "culture": "Levantine",
  "category": "condiments",
  "tags": [
    "condiment",
    "sésame",
    "Moyen-Orient",
    "végétalien",
    "Sans gluten",
    "sans produits laitiers"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 1,
    "sour": 0,
    "bitter": 2,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Graines de sésame blanc cru",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "graines de sésame non décortiquées pour un tahini plus foncé et plus amer ayant une teneur minérale plus élevée"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile neutre (uniquement si nécessaire)",
      "ratioValue": 15,
      "defaultUnit": "ml",
      "substitutions": [
        "huile de sésame légère pour intensifier la saveur"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_01"
      ],
      "outputState": "toasted_sesame",
      "instructions": "Répartir les graines de sésame crues en une seule couche dans une poêle large et sèche à feu moyen-doux. Mélanger presque constamment avec une cuillère en bois ou agiter la poêle toutes les 15 à 20 secondes. Les graines commenceront à sauter et à s'échauffer. Votre objectif est un toast très léger — juste assez pour réveiller leur saveur de noix et chasser l'humidité de surface, pas pour les colorer. C'est un travail patient et vigilant : le sésame va de parfait à amer en moins de 30 secondes. La différence entre cru et bien grillé est subtile en couleur mais significative en saveur.",
      "visualCue": {
        "primaryTarget": "Des graines qui sont passées de blanc plat et crayeux à une crème très pâle, comme la couleur de l'ivoire frais, avec quelques - unes des taches d'or les plus légères qui commencent à apparaître.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Toujours blanc craie sans parfum qui monte de la poêle ; l'odeur crue, légèrement moisie, du sésame inaltéré domine toujours.",
            "action": "Continuer à feu doux en remuant. La couleur n'est pas le seul indice: attendez que le parfum de sésame chaud et grillé apparaisse."
          },
          {
            "state": "Perfect",
            "description": "A peine de couleur crème avec une odeur parfumée, chaude, noisetée — pas popcorn-nourriture mais propre et nettement sésame. Quelques graines sont dorées; la plupart sont encore pâles.",
            "action": "Astucez immédiatement sur une plaque froide ou une plaque de cuisson pour arrêter la cuisson. Ne laissez pas dans la poêle — la chaleur résiduelle continuera de les griller."
          },
          {
            "state": "Overdone",
            "description": "D'or visible ou de bronzage avec un arôme de noix plus foncé et plus affirmé qui traverse l'amertume, et certaines graines commencent à se former plus agressivement.",
            "action": "Arrêtez immédiatement. Les tahini surchargés seront amers. Laisser refroidir les graines et goûter une pincée — si l'amertume est vive, recommencer. Un léger excès peut encore produire des tahini acceptables."
          }
        ]
      },
      "feelCue": "Rouler une graine chaude entre les doigts — elle devrait être sèche et légèrement croustillante, avec les plus faibles donner plutôt qu'une dureté brute. L'odeur sur le bout des doigts doit être chaude et agréablement noisette."
    },
    {
      "nodeId": "step_2",
      "action": "Frais",
      "inputs": [
        "toasted_sesame"
      ],
      "outputState": "cooled_sesame",
      "instructions": "Astucez les graines de sésame grillées sur une assiette fraîche ou une plaque de cuisson et étalez-les en une seule couche. Laisser reposer au moins 5 minutes jusqu'à ce qu'ils atteignent la température ambiante. Le mélange de graines de sésame chaudes comporte deux risques : la vapeur qu'elles libèrent condense à l'intérieur du mélangeur et introduit l'humidité, qui peut saisir la pâte; et la chaleur peut faire tourner le moteur de mélange très chaud, raccourcissant sa vie. La patience ici est structurelle, pas facultative.",
      "visualCue": {
        "primaryTarget": "Les graines se répandent dans une couche mince, uniforme, ne sautent plus ou ne sautent plus, se refroidissant uniformément sans que la vapeur monte de la plaque.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines sont encore trop chaudes pour être maintenues confortablement dans un palmier en coupe pendant 5 secondes.",
            "action": "Attendez encore 3 minutes. Mélanger des graines chaudes mais non refroidies risque d'humidité de vapeur en saisissant la pâte."
          },
          {
            "state": "Perfect",
            "description": "Entièrement à température ambiante, sèche et parfumée, vous pouvez les plonger dans une paume en coupe sans aucune chaleur sur la peau.",
            "action": "Transférer au mélangeur ou au robot culinaire."
          },
          {
            "state": "Overdone",
            "description": "Les graines ont été laissées pour refroidir pendant plus d'une heure et ont ré-absorbé l'humidité de l'air, tournant légèrement doux.",
            "action": "Retourner à la casserole sèche à feu doux pendant 60 secondes pour éliminer l'humidité avant le mélange."
          }
        ]
      },
      "feelCue": "Tenez votre paume à plat 2 cm au-dessus de la plaque — aucune chaleur résiduelle ne doit être détectable. Les graines doivent se sentir, entre les doigts, comme des perles sèches fraîches."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "cooled_sesame",
        "ing_02"
      ],
      "outputState": "finished_tahini",
      "instructions": "Transférer les graines refroidies dans un mélangeur ou un robot alimentaire à haute puissance. Mélanger en continu en haut pendant 3 à 4 minutes, en grattant les côtés toutes les 60 secondes. La transformation se produit par étapes : d'abord un crumble grossier et sec ; puis une grosse boule qui gronde sur la lame ; puis, à mesure que les huiles des graines sont libérées, un brusque effondrement dans une pâte rugueuse ; enfin, avec le mélange continu, une crème lisse et fluide. Si la machine se débat ou si la pâte refuse de se desserrer après 3 minutes, ajouter l'huile neutre une cuillère à café à la fois, en mélangeant après chaque ajout. Ne faites pas trop d'huile — le but est une pâte qui se déplace seule. Goûtez et ajoutez du sel si désiré.",
      "visualCue": {
        "primaryTarget": "Une pâte d'ivoire lisse et pâle avec un éclat satiné, pas de fragments de graines visibles, qui coule lentement d'un pot incliné comme de la crème fraîche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Une pâte rugueuse et granuleuse avec des fragments visibles de graines; elle ressemble à du sable humide plutôt qu'à une crème. La surface est mate et terne.",
            "action": "Gratter les côtés et mélanger pendant au moins 2 minutes. Les huiles ont besoin de plus de temps pour se libérer complètement."
          },
          {
            "state": "Perfect",
            "description": "Pale, lisse et soyeuse, elle s'accumule dans le mélangeur comme de l'ivoire liquide et s'écoule d'une spatule levée dans une bruine lente. L'odeur est légèrement grillée et propre.",
            "action": "Transférer dans un pot et conserver à température ambiante jusqu'à 1 mois, ou réfrigérer jusqu'à 3 mois. Bien mélanger avant chaque utilisation."
          },
          {
            "state": "Overdone",
            "description": "Trop d'huile neutre ajoutée ; le tahini est mince et presque aqueux, avec une sensation de bouche grasse plutôt que crémeuse.",
            "action": "Utiliser tel quel — il est toujours fonctionnel. La prochaine fois ajouter de l'huile parcimonieusement, une seule cuillère à café à la fois, arrêtant le moment où la pâte coule librement."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité entre le tampon d'un bout de doigt et le pouce — à la consistance parfaite, il devrait se sentir lisse et enduit, comme une fine lotion, sans aucune graisse. Un tahini fini ne devrait pas laisser de grain sur le bout des doigts."
    }
  ]
};
