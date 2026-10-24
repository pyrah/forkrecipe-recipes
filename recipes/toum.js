export default {
  "repoId": "master_lebanese_toum_001",
  "parentRepoId": null,
  "slug": "toum",
  "author": "ForkRecipe Kitchen",
  "title": "Total",
  "description": "Toute une tête d'ail émulsifiée avec de l'huile, du citron et de l'eau glacée goutte à goutte dans une mousse d'ail bouffante et blanc vif – intensément piquante mais crémeuse et légère, enrobée de viandes grillées et d'enveloppes.",
  "cuisine": "Libanais",
  "culture": "Libanais",
  "category": "condiments",
  "tags": [
    "Total",
    "lébanèse",
    "Ail",
    "sauce",
    "condiment",
    "végétalien",
    "Sans gluten"
  ],
  "difficulty": 3,
  "activeTime": "20 min",
  "totalTime": "30 min",
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
    "sour": 2,
    "bitter": 1,
    "umami": 1,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Base",
      "name": "Girofles à l'ail (peau, germe vert enlevé)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile neutre (huile de tournesol ou huile végétale légère)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "huile d'olive légère (pas extra-vierge, qui peut devenir amère à la vitesse)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Citrus",
      "name": "Jus de citron frais",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Eau glacée (très froide, avec glaçons à proximité)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparation",
      "inputs": [
        "ing_01"
      ],
      "outputState": "prepped_garlic",
      "instructions": "Peler tous les gousses d'ail. Coupez chaque girofle dans le sens de la longueur et utilisez l'extrémité d'un couteau pour enlever le germe vert qui traverse le centre — c'est l'étape la plus importante pour faire du toum qui ne goûte pas amer ou laisser un arrière-goût dur. Le germe contient des composés sulfureux qui s'intensifient acredly lorsqu'ils sont traités à grande vitesse. Certains cuisiniers sautent cette étape; votre toum sera encore émulsifier, mais aura un goût plus net et plus agressif. Étendre les girofles à moitié sur une surface propre et sèche.",
      "visualCue": {
        "primaryTarget": "Des moitiés d'ail pelées, chacune avec une cavité propre où le germe a été enlevé. La chair est propre, blanc ivoire sans teinte verte.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Germes verts encore en place — visibles comme une pousse jaune vert à l'intérieur de chaque girofle à moitié.",
            "action": "Utilisez l'extrémité du couteau pour sortir le germe du canal. Même le retrait partiel améliore significativement le toum final."
          },
          {
            "state": "Perfect",
            "description": "Nettoyez les moitiés d'ail blanc ivoire, sans germe, avec une odeur d'ail nette et propre — pas encore la douceur cuite, mais pas acride non plus.",
            "action": "Passer au mortier ou au robot culinaire pour la vis initiale."
          },
          {
            "state": "Overdone",
            "description": "Vous avez écrasé ou meurtri l'ail plutôt que de couper proprement — les gousses libèrent tôt des enzymes liquides et collantes.",
            "action": "Procéder de toute façon — la pâte sera encore émulsifier; travailler rapidement avant que l'ail exposé commence à s'oxyder."
          }
        ]
      },
      "feelCue": "La girofle doit se sentir ferme et sèche, pas humide ou glissante. L'ail humide a déjà commencé à brunir enzymatique — les gousses sèches et fermes émulsifient plus efficacement que les plus anciennes."
    },
    {
      "nodeId": "step_2",
      "action": "Hacher finement",
      "inputs": [
        "prepped_garlic",
        "ing_05"
      ],
      "outputState": "garlic_paste",
      "instructions": "Placer les moitiés d'ail et saler dans un robot alimentaire. Procéder pendant 30 secondes, en grattant les côtés toutes les 10 secondes, jusqu'à ce que l'ail soit très finement haché et commence à former une pâte grossière. Le sel agit comme un abrasif et aide à décomposer la structure cellulaire avant l'addition de l'huile. L'ail doit ressembler à une menthe fine, humide, légèrement collante — pas encore une pâte lisse, mais uniformément cassée. Assurez-vous que le bol et la lame sont complètement secs avant cette étape.",
      "visualCue": {
        "primaryTarget": "Une fine menthe d'ail blanc d'ivoire, humide, qui s'accroche au bol dans une couche mince et uniforme plutôt que de la collectionner comme granulés secs. Il sent intensément l'ail fraîchement coupé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De gros morceaux d'ail restant — la pâte aura une consistance inégale lorsque l'huile sera ajoutée et l'émulsion sera incomplète.",
            "action": "Continuer le traitement, grattant fréquemment le bol, jusqu'à ce que la menthe soit complètement uniforme."
          },
          {
            "state": "Perfect",
            "description": "Une menthe fine, collante et uniforme, qui tient bon lorsqu'elle est pressée et s'éloigne proprement du bol. L'arôme est net et propre, remplissant la cuisine.",
            "action": "Commencez à ajouter les liquides immédiatement — ne laissez pas la pâte d'ail s'asseoir et s'oxyder."
          },
          {
            "state": "Overdone",
            "description": "L'ail est devenu gris ou la pâte est devenue aqueuse à cause du surtraitement libérant trop d'humidité.",
            "action": "Égoutter tout liquide mis en commun avant d'ajouter de l'huile et travailler le plus rapidement possible."
          }
        ]
      },
      "feelCue": "Appuyez sur une petite quantité entre votre pouce et le bout des doigts — il devrait se sentir comme du sable fin, humide, juste commencer à se rassembler dans une pâte cohésive, pas glissante ou liquide."
    },
    {
      "nodeId": "step_3",
      "action": "Émulsionner",
      "inputs": [
        "garlic_paste",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "emulsifying_toum",
      "instructions": "Avec le processeur alimentaire en marche, commencez à ajouter l'huile dans un flux absolument minuscule — un filet mince, pas une goutte. Alternez entre l'huile et le jus de citron toutes les 30 à 45 secondes, ajoutant de l'eau glacée lorsque l'émulsion semble serrée ou peine à absorber plus d'huile. Le processus total prend 8 à 12 minutes de traitement continu. L'alliinase naturelle et les composés stabilisants de l'ail forment la matrice émulsifiante — il n'y a pas d'œuf, pas de moutarde. L'émulsion est fragile et sensible à la température : gardez-la froide en travaillant rapidement et en utilisant de l'eau glacée. Si le mélange a l'air gras ou séparé à n'importe quel point, arrêtez d'ajouter de l'huile et de le traiter tout en ajoutant une cuillère à soupe d'eau glacée.",
      "visualCue": {
        "primaryTarget": "Une mousse bouffante, blanche pure, molle de guimauve qui a plus que doublé en volume et ressemble presque à de la crème fouettée raide. Il est complètement opaque et blanc brillant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange semble crémeux-beige et légèrement lâche, plus comme un pansement épais qu'une mousse. L'ail n'a pas encore capturé assez d'huile pour former une mousse stable.",
            "action": "Continuer à ajouter de l'huile dans un fin filet, en alternance avec du jus de citron, en traitement continu. La transformation d'une pâte épaisse en mousse se produit graduellement puis subitement."
          },
          {
            "state": "Perfect",
            "description": "Une mousse d'oreiller raide, blanche-neige, qui bouge à peine quand on pointe le bol du processeur. Il semble incroyablement léger pour quelque chose fait d'ail brut et d'huile — l'émulsion est entièrement formée et stable.",
            "action": "Goûtez au sel et au citron, ajustez, puis transférez dans un pot. Ne pas trop traiter."
          },
          {
            "state": "Overdone",
            "description": "L'émulsion s'est brisée — la mousse s'est effondrée dans un gâchis gras, séparé, à l'aspect caillé avec des piscines d'huile visibles.",
            "action": "Ne pas jeter : ajouter une cuillerée à soupe d'eau glacée et traiter à haute température pendant 30 secondes, puis essayer d'ajouter une cuillerée à soupe d'eau glacée. Un toum cassé peut parfois être sauvé par cette méthode. S'il refuse de réémulsionner, écraser les solides et utiliser l'huile d'ail pour la cuisson."
          }
        ]
      },
      "feelCue": "Grattez une petite quantité sur un bout de doigt — si l'émulsion tient, elle devrait se sentir fraîche, aérée et légère, comme une crème très épaisse. Si elle se sent grasse ou lourde, vous avez ajouté de l'huile trop vite et êtes près de briser l'émulsion."
    },
    {
      "nodeId": "step_4",
      "action": "Assaisonner",
      "inputs": [
        "emulsifying_toum"
      ],
      "outputState": "finished_toum",
      "instructions": "Goûtez le toum et ajustez avec plus de jus de citron ou de sel. La morsure d'ail doit être farouche mais non acride — le processus d'émulsion change le caractère de l'ail, le rendant simultanément plus intense en saveur et quelque peu moins aiguisé en bouche que l'ail cru consommé directement. Le citron doit être présent comme une luminosité, pas une ameresse. Transférer dans un pot en verre propre. Le toum se maintient au réfrigérateur jusqu'à 4 semaines et reste stable — le froid le pousse légèrement plus loin, à la consistance du saindoux doux.",
      "visualCue": {
        "primaryTarget": "Un pot de mousse d'ail blanc vif, léger et aéré qui tient sa forme lorsqu'il est cuillé et est complètement opaque. La surface est lisse et mate.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Goûte rude et agressivement cru – l'ail est trop dominant et l'acide ne l'a pas équilibré. L'arrière-goût brûle.",
            "action": "Ajouter plus de jus de citron une cuillère à café à la fois, traiter brièvement après chaque ajout, jusqu'à ce que la bouchée d'ail devienne plus arrondie."
          },
          {
            "state": "Perfect",
            "description": "Plongée mais crémeuse ; intensément ailée mais sans la bouchée crue dure. Le citron est là comme une note élevée. Étaler sur le pain grillé, il est revealatoire — riche, tranchant et sans poids simultanément.",
            "action": "Réfrigérer et utiliser généreusement : sur le shawarma, le poulet grillé, les légumes rôtis ou comme trempette."
          },
          {
            "state": "Overdone",
            "description": "Trop de citron l'a fait goûter acide et mince plutôt qu'ailky et riche. La couleur blanche peut avoir pris une teinte légèrement jaunâtre de l'excès d'acide.",
            "action": "Équilibrez par transformation dans une autre cuillère à café d'huile neutre et une pincée de sel pour compléter l'acidité."
          }
        ]
      },
      "feelCue": "Toum doit sentir la lumière impossible pour ce qu'il est — prendre quelques - uns sur une cuillère et il devrait à peine enregistrer comme poids. Il ne doit pas se sentir gras ou enduit en bouche, bien qu'étant principalement huile. Cette légèreté est tout le point."
    }
  ]
};
