export default {
  "repoId": "master_turkish_turkish-coffee_001",
  "parentRepoId": null,
  "slug": "turkish-coffee",
  "author": "ForkRecipe Kitchen",
  "title": "Café turc",
  "description": "Le café et le sucre finement pulvérisés mijotés ensemble dans un petit cezve de cuivre jusqu'à ce qu'une tête épaisse et mousseuse s'élève — servis dans une petite tasse dont les terrains se déposent en dessous dans un riche sédiment limoneux.",
  "cuisine": "Turquie",
  "culture": "Ottoman",
  "category": "beverages",
  "tags": [
    "café",
    "turc",
    "épicé",
    "forte",
    "traditionnel"
  ],
  "difficulty": 2,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 0,
    "sour": 2,
    "bitter": 7,
    "umami": 1,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Café moulu turc (broyage extra-fin)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "café espresso-fond — la saveur sera différente"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Cardamome au sol",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Dissoudre",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "cold_coffee_mixture",
      "instructions": "Mesurez l'eau froide dans un cezve (ou une petite casserole avec un bec verseur) en utilisant la tasse à café comme mesure — environ 60ml par tasse. Ajoutez le café, le sucre et la cardamome à l'eau froide. Ne remuez pas encore. Cette méthode de démarrage à froid est essentielle : l'ajout de café à l'eau chaude l'entraîne à s'écraser. Utilisez une petite cuillère pour remuer doucement deux ou trois fois jusqu'à ce que le café soit mouillé et commence à hydrater. Le mélange ressemblera à de l'eau boueuse.",
      "visualCue": {
        "primaryTarget": "Un liquide lisse brun foncé sans poches sèches flottantes de café, sucre dissous, petites bulles montant de la cardamome.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des taillis de café secs flottent encore à la surface.",
            "action": "Mélanger une fois de plus très doucement pour les submerger."
          },
          {
            "state": "Perfect",
            "description": "Un liquide boueux foncé uniforme ; tout le café est humidifié et le sucre s'est dissous. Très léger tourbillon de terrain.",
            "action": "Placez sur la chaleur la plus basse possible."
          },
          {
            "state": "Overdone",
            "description": "Vous avez agité trop vigoureusement et aéré le mélange — une petite mousse se formant déjà avant le chauffage.",
            "action": "Continuez, mais regardez attentivement la chaleur. Les mousses de café préaéré sont imprévisibles."
          }
        ]
      },
      "feelCue": "Le mélange froid doit sentir faiblement le café rôti et la cardamome — l'eau froide porte à peine l'arôme jusqu'à ce que la chaleur le libère complètement."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "cold_coffee_mixture"
      ],
      "outputState": "foamed_coffee",
      "instructions": "Placez le cezve sur la flamme la plus basse possible. Ne partez pas — le café turc exige une attention constante. Surveillez un anneau de bulles minuscules pour se former au bord, puis un lent fluage de mousse (kaymak) montant du centre. Lorsque la mousse est montée à environ deux tiers du chemin vers le haut du cezve et tremble sur le bord de l'ébullition, retirer immédiatement de la chaleur. Déposer la mousse dans chaque tasse d'abord pour la réserver.",
      "visualCue": {
        "primaryTarget": "Une épaisse mousse de couleur bronzée s'élève comme un dôme au centre du cezve, avec le café en dessous calme et sombre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Aucune mousse ne s'est encore formée; le liquide commence à peine à vapeur.",
            "action": "Continuer à feu doux. La chaleur élevée ne produit pas de mousse."
          },
          {
            "state": "Perfect",
            "description": "Un dôme substantiel de mousse bronzante et crémeuse qui monte vers le bord. Le café ci-dessous est encore sombre et pas encore bouillonnant.",
            "action": "Retirer du feu et de la mousse de cuillère en tasses, puis verser lentement le café pour le préserver."
          },
          {
            "state": "Overdone",
            "description": "Le café bouilli — la mousse s'est effondrée et le café roule. Pas de mousse.",
            "action": "Le café est encore buvable mais le kaymak est perdu. Retirer du feu et verser. Briser une deuxième fois pour corriger : le café turc n'est jamais bouilli."
          }
        ]
      },
      "feelCue": "Vous entendrez un crépitement doux et rythmique alors que le sol grillé contre le métal et le liquide commence à bouger — au moment où le crépitement devient une bulle, vous êtes à quelques secondes de la mousse."
    },
    {
      "nodeId": "step_3",
      "action": "Repos",
      "inputs": [
        "foamed_coffee"
      ],
      "outputState": "finished_turkish_coffee",
      "instructions": "Verser lentement le café dans la tasse, sur la mousse réservée, en un seul flux lent à partir d'une hauteur basse. Le pourboire est doux donc les réformes de mousse sur le dessus. Laissez reposer le café pendant 30 secondes avant de boire — le terrain a besoin de temps pour s'installer au fond. Servir avec un verre d'eau froide et un petit sucre (un morceau de lokum ou de cube de sucre). Ne pas remuer après avoir versé.",
      "visualCue": {
        "primaryTarget": "Une petite tasse de café très foncé couronné d'un capuchon en mousse de bronzage pâle — aucun terrain visible à la surface, le terrain se trouvait au fond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les sols sont encore visiblement tourbillonnés dans la tasse, pas encore fixés.",
            "action": "Attendez 30 secondes. Boire avant de s'installer signifie une bouche de terrain."
          },
          {
            "state": "Perfect",
            "description": "La surface est calme, avec un capuchon en mousse veloutée et un café foncé en dessous. L'arôme est intense et rôti.",
            "action": "Buvez en petites gorgées, en arrêtant les deux tiers avant d'atteindre le terrain."
          },
          {
            "state": "Overdone",
            "description": "Le café est devenu froid et la mousse s'est réabsorbée dans le liquide, laissant une surface noire.",
            "action": "Le café turc doit être bu frais. S'il fait froid, réchauffer très doucement dans le cezve, mais ne pas se remousser."
          }
        ]
      },
      "feelCue": "La tasse devrait se sentir presque insupportablement chaude à tenir — le café turc est destiné à être bu dans des gorgées lentes et soigneuses tout en restant très chaud, libérant chaque couche d'amertume et de douceur pendant qu'elle refroidit."
    }
  ]
};
