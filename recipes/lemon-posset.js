export default {
  "repoId": "master_british_lemon_posset_001",
  "parentRepoId": null,
  "slug": "lemon-posset",
  "author": "ForkRecipe Kitchen",
  "title": "Lemon Posset",
  "description": "La crème lourde et le sucre bouillis ensemble et sertis de jus de citron frais — un miracle à deux ingrédients qui transforme l'acide en agent gélifiant naturel, produisant une crème zobante et intensément citronnée.",
  "cuisine": "Anglais",
  "culture": "Anglais",
  "category": "desserts",
  "tags": [
    "au citron",
    "britanniques",
    "dessert",
    "crème",
    "citron",
    "pas de gélatine",
    "Vite",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "3 hr 15 min",
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
    "sour": 4,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Double crème (minimum 48% de matières grasses)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "crème fouettée lourde (ne pas remplacer la crème unique — il ne sera pas mis)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "sucre granulé fin"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Citrus",
      "name": "Jus de citron frais",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "jus de yuzu (réduire à 1,5 partie)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Zeste de citron (finement râpé)",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Garnish",
      "name": "Biscuits à pain court (pour servir)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "langues de chat",
        "Tuile d'amande mince"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire bouillir",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_04"
      ],
      "outputState": "boiled_cream",
      "instructions": "Mélanger la double crème, le sucre de castre et le zeste de citron dans une casserole lourde. Incorporer à feu moyen jusqu'à ce que le sucre se dissout et que la crème commence à mijoter. Levez légèrement la chaleur et portez à un ébullition complet, la crème va exploser de façon spectaculaire, donc utilisez une poêle au moins trois fois le volume de la crème. Faire bouillir 3 minutes exactement, en remuant et en regardant attentivement. L'ébullition réduit légèrement la crème et concentre la teneur en matières grasses, essentielle au mécanisme de réglage. Temps ce soigneusement — moins de 3 minutes et il peut ne pas être réglé; plus de 4-5 minutes et il peut goûter brûlé.",
      "visualCue": {
        "primaryTarget": "Une crème bouillonnante qui s'est relevée dans la poêle et s'est épaissie très légèrement par rapport à son début. Il est toujours blanc ivoire et doit sentir la crème chaude et le zeste de citron.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La crème mijote, mais pas à ébullition. Les bulles sont douces et ne s'élèvent pas de façon spectaculaire sur les côtés de la poêle.",
            "action": "Levez la chaleur jusqu'à ce que la crème atteigne un ébullition complet — les bulles doivent être énergiques et la crème doit avoir levé dans la poêle. Alors commencez votre minuterie de 3 minutes."
          },
          {
            "state": "Perfect",
            "description": "Plein, faire bouillir pendant 3 minutes. La crème s'est épaissie très légèrement — un peu plus visqueuse que la crème crue. Toujours blanc vif et sucré.",
            "action": "Retirer immédiatement du feu et laisser refroidir 2-3 minutes avant d'ajouter le jus de citron."
          },
          {
            "state": "Overdone",
            "description": "La crème a bouilli au-delà de 4-5 minutes — elle a l'air légèrement jaune et des odeurs de lait caramélisé. La graisse peut avoir commencé à se séparer.",
            "action": "Procédez avec le jus de citron — il sera encore en place, mais peut avoir un goût de crème légèrement cuit. Surveillez plus attentivement la prochaine fois."
          }
        ]
      },
      "feelCue": "Lorsque vous soulevez la cuillère de la crème bouillante, le revêtement sur le dos doit être à peine plus épais que la crème crue — une fraction plus visqueuse, mais encore fluide. Il doit s'écouler proprement et immédiatement."
    },
    {
      "nodeId": "step_2",
      "action": "Faire prendre",
      "inputs": [
        "boiled_cream",
        "ing_03"
      ],
      "outputState": "posset_mixture",
      "instructions": "Retirer la crème bouillie du feu et laisser refroidir pendant 2-3 minutes — elle devrait encore être chaude mais ne plus bouillir violemment. Peau dans le jus de citron frais, en remuant au fur et à mesure. Le jus doit être fraîchement pressé et pressé de toute la pulpe et des graines. Comme l'acide rencontre la crème chaude, le mélange s'épaissira de façon perceptible en quelques secondes — les chaînes protéiques de la crème se contractent autour des gouttelettes graisseuses en présence d'acide, mettant le posset sans aucune gélatine. Mélanger brièvement jusqu'à combinaison, puis verser immédiatement dans les verres ou les ramequins à travers un tamis fin.",
      "visualCue": {
        "primaryTarget": "La crème s'épaissit nettement à mesure que le jus de citron entre en jeu — on peut voir la texture passer d'une crème fluide à un liquide épais, versable et velouté qui enveloppe l'arrière d'une cuillère dans une feuille uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le jus de citron a été ajouté mais la crème ne présente aucun épaississement visible. Toujours aussi mince que la double crème de la boîte.",
            "action": "La crème n'a peut-être pas été assez chaude ou bouillie assez longtemps. Ajouter un peu plus de jus de citron et remuer. Si elle ne s'épaissit toujours pas, la teneur en matières grasses de la crème était trop faible — réfrigérer de toute façon; elle peut encore se fixer partiellement."
          },
          {
            "state": "Perfect",
            "description": "Plus épais après avoir ajouté le jus, tombe d'une cuillère dans un cours d'eau lent et épais plutôt qu'une goutte rapide. La couleur est blanche avec une teinte jaune pâle du zeste. Sensation intense de citron frais.",
            "action": "Verser immédiatement à travers un tamis fin dans des verres de service. Ne le laissez pas s'asseoir dans la poêle — elle continuera à se mettre et à devenir plus difficile à verser."
          },
          {
            "state": "Overdone",
            "description": "Crème caillé au lieu de se fixer — ajouté trop d'acide ou ajouté lorsque la crème était trop chaude, provoquant les protéines se brouillant dans des caillés granuleux flottant dans un liquide jaune mince.",
            "action": "Mélanger en douceur avec un mélangeur d'immersion — un posset câblé mélangé est toujours agréable. La prochaine fois, laissez refroidir la crème pendant 3 minutes avant d'ajouter l'acide et mesurez précisément le jus."
          }
        ]
      },
      "feelCue": "Lorsque vous remuez dans le jus de citron, la résistance sous la cuillère augmente de façon perceptible en 20-30 secondes — le mélange s'épaississant d'un liquide à quelque chose de plus proche du yaourt agité. C'est l'acide qui fait son travail."
    },
    {
      "nodeId": "step_3",
      "action": "Réfrigérer",
      "inputs": [
        "posset_mixture"
      ],
      "outputState": "set_posset",
      "instructions": "Verser le mélange de posset chaud à travers un tamis à mailles fines dans des verres de service individuels ou des ramequins peu profonds, remplir chacun à environ 1 cm sous la jante. Laisser refroidir à température ambiante pendant 20 minutes, puis réfrigérer à découvert pendant au moins 3 heures, ou pendant la nuit. Le posset sera placé d'un liquide épais à une crème ferme et tremblante, entièrement sertie, mais avec un galet délicat. Ne pas couvrir pendant le refroidissement ou la condensation va s'écouler et empêcher une surface propre.",
      "visualCue": {
        "primaryTarget": "Une surface lisse, parfaitement blanche, légèrement bombée, aussi propre qu'un miroir. Pas de bulles, pas de peau, pas de fissures. Le posset agite comme une seule pièce lorsque le verre est déplacé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface se ride lorsque le verre est incliné et le centre est encore liquide. Il n'a pas refroidi assez longtemps.",
            "action": "Retourner au réfrigérateur pendant au moins 1 heure de plus. Le posset a besoin de froid et de temps pour passer entièrement au centre."
          },
          {
            "state": "Perfect",
            "description": "Mettez ferme, mais avec un doux wobble — se déplace comme une unité entière comme une panna cotta ferme. La surface est propre et blanche, la texture inférieure est soyeuse et dense. Une cuillère pressée rentre propre.",
            "action": "Servir au frais avec un biscuit en pain court équilibré sur le bord du verre."
          },
          {
            "state": "Overdone",
            "description": "Réfrigéré trop longtemps — entièrement réglé mais la surface a développé une peau très fine et la texture est trop ferme et cireuse plutôt que tremblante.",
            "action": "Toujours délicieux. Couvrir et consommer dans les 48 heures. Une pression de citron frais sur le dessus à la table rafraîchit le goût."
          }
        ]
      },
      "feelCue": "Lorsque vous appuyez sur la surface de l'ensemble posset très doucement avec le dos d'une cuillère propre, il devrait donner avec une légère résistance et ressort en arrière — comme presser la crème très froide. Il ne devrait pas être caoutchouteux ou granuleux."
    },
    {
      "nodeId": "step_4",
      "action": "Dresser",
      "inputs": [
        "set_posset",
        "ing_05"
      ],
      "outputState": "finished_lemon_posset",
      "instructions": "Juste avant de servir, lancez un zester de mesh fin sur un citron frais et dispersez une pincée de zeste sur la surface blanche de chaque posset. Appuyez sur un biscuit de pain court ou une langue de chat dans le bord de chaque verre à un angle afin qu'il repose contre le bord comme une voile. Servir immédiatement du réfrigérateur — le posset devrait arriver à la table froide, le contraste entre le froid, la crème set et le pain court chaud effondré étant le plaisir textural final.",
      "visualCue": {
        "primaryTarget": "Une surface posset blanche, lisse, avec un zeste de citron jaune vif, un pain court doré équilibré au bord. Tout le verre semble propre, pâle et précisément composé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Pas de garniture. Ça semble clinique et inachevé. Il manque le contraste visuel et la marque d'arôme citron-avant qui dit au diner ce qu'ils mangent.",
            "action": "Ajouter au minimum une grille de zeste de citron frais — il ne coûte rien et transforme entièrement la présentation et l'arôme."
          },
          {
            "state": "Perfect",
            "description": "Pousset blanc, zeste jaune vif, biscuit doré. Froid, prêt, tremblant. La première cuillerée est propre et intensément citronnée — tranchante, riche et à peine sucrée.",
            "action": "Servir à la fois — le pain court s'assouplira s'il est laissé toucher le posset pendant plus de 5 minutes."
          },
          {
            "state": "Overdone",
            "description": "Garni trop loin à l'avance — le pain court a absorbé l'humidité du posset et est devenu doux. Le zeste a séché et frisé.",
            "action": "Remplacez le pain court par un pain frais et regérez une pincée de zeste. Toujours garnir pour commander."
          }
        ]
      },
      "feelCue": "Le premier contact de la cuillère avec le posset set devrait avoir l'impression de briser une tension de surface très mince et à peine là - les parties de crème proprement et la cuillère glisse dans presque aucune résistance, révélant un intérieur soyeux et dense."
    }
  ]
};
