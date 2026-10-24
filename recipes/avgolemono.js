export default {
  "repoId": "master_greek_avgolemono_001",
  "parentRepoId": null,
  "slug": "avgolemono",
  "author": "ForkRecipe Kitchen",
  "title": "Avolemono",
  "description": "L'émulsion soyeuse d'oeufs et de citrons de Grèce — œufs battus et jus de citron trempés dans un bouillon chaud jusqu'à ce que la sauce s'épaississe à une consistance veloutée sans brouillage, l'épaississant naturel le plus élégant de la cuisine.",
  "cuisine": "Grec",
  "culture": "Grec",
  "category": "sauces",
  "tags": [
    "grec",
    "œuf",
    "citron",
    "sauce",
    "épaississant",
    "poulet"
  ],
  "difficulty": 2,
  "activeTime": "10 min",
  "totalTime": "15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 4,
    "bitter": 0,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Liquid",
      "name": "bouillon de poulet chaud ou de légumes (bien assaisonné)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "bouillon d'agneau",
        "stock de légumes"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Gros œufs",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Acid",
      "name": "Jus de citron frais (environ 2 grands citrons par 4 œufs)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Jus de citron Meyer"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Base d'œufs fouettés",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "egg_lemon_base",
      "instructions": "Couper les œufs dans un bol moyen et fouetter vigoureusement pendant 1 à 2 minutes jusqu'à ce qu'ils soient complètement homogènes et légèrement mousseux — il ne faut pas laisser de traces de jaune blanc ou séparé. Pendant qu'il siffle encore, verser le jus de citron frais dans un ruisseau lent et stable. Le mélange devient plus pâle et légèrement plus épais lorsque l'acide commence à dénaturé partiellement les protéines de l'œuf, ce qui est intentionnel et aide l'émulsion à se maintenir sous la chaleur. La base finie doit être un liquide crème jaune pâle, mousseux et uniforme qui sent intensément le citron frais avec une richesse en oeuf sous-jacente. Avoir le bouillon chaud déjà mijoter dans un pot à proximité avant de commencer le tempérament.",
      "visualCue": {
        "primaryTarget": "Un liquide jaune pâle, mousseux et uniforme, avec un parfum de citron vif, sans stries, sans séparation et une légère augmentation de la viscosité par rapport aux œufs non broyés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les éclats de blanc sont encore visibles et le jaune n'a pas été entièrement incorporé — la sauce se met inégalement et peut laisser des brins caoutchouteux de blanc dans le plat fini.",
            "action": "Whisky pour une minute. Le mélange doit être entièrement homogène avant d'ajouter du citron."
          },
          {
            "state": "Perfect",
            "description": "Pale, mousseux, et complètement uniforme — jaune crème pâle avec un léger reflet. Ça sent le citron avec de la richesse en oeufs.",
            "action": "Procédez immédiatement à la trempe pendant que le bouillon est chaud."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a été fouetté de façon si agressive qu'il est très mousseux et a augmenté de façon spectaculaire en volume.",
            "action": "Laisser reposer 2 minutes avant de commencer le tempérament."
          }
        ]
      },
      "feelCue": "Plongez le doigt et le goût — le mélange de citron et d'œuf cru doit être vif et vif, avec un coup d'agrumes propre qui enrobe la langue. Il devrait se sentir glissant, pas aqueux, du jaune émulsifié. C'est l'épine dorsale de saveur de la sauce finie, alors goûtez-le de façon critique maintenant."
    },
    {
      "nodeId": "step_2",
      "action": "Tempérer",
      "inputs": [
        "ing_01",
        "egg_lemon_base"
      ],
      "outputState": "tempered_avgolemono",
      "instructions": "Avoir le bouillon chaud à mijoter (juste en dessous de l'ébullition, environ 85-90C). À l'aide d'une louche, verser une seule louche de bouillon chaud dans le mélange oeuf-lemon tout en fouettant constamment et rapidement. Le mélange d'oeufs s'éclaircit et s'amincit légèrement lorsque la première louche frappe. Ajouter une seconde louche, toujours fouetter. Puis un troisième. Lorsque vous aurez ajouté 3 à 4 louches, le mélange d'oeufs sera chaud et la différence de température sera suffisamment petite pour que l'ajouter au pot ne le brouille pas. Verser le mélange trempé dans le pot de bouillon dans un ruisseau lent tout en fouettant le bouillon en continu. La température doit rester en dessous de 85C pendant toute la durée du bouillon, si celui-ci est à ébullition dure, retirer de la chaleur d'abord.",
      "visualCue": {
        "primaryTarget": "Après l'ajout de chaque louche, le mélange d'oeufs doit avoir l'air progressivement plus léger et plus mince, sans grumeaux ni glissades d'oeufs cuits — il doit rester lisse et couler à chaque étape du tempérament.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Une seule louche a été ajoutée — la différence de température est encore trop grande pour renvoyer le mélange en toute sécurité dans la casserole. L'ajouter maintenant va probablement brouiller les œufs.",
            "action": "Ajouter 2–3 autres louches avant de retourner dans le pot. La patience à ce stade empêche la sauce cassée."
          },
          {
            "state": "Perfect",
            "description": "Après 3 à 4 louches, le mélange est chaud au toucher, coulant librement et encore complètement lisse. Ça sent le bouillon chaud et le citron.",
            "action": "Verser dans le pot dans un ruisseau lent tout en fouettant, puis évaluer immédiatement la consistance et la chaleur."
          },
          {
            "state": "Overdone",
            "description": "Les flocons d'œuf cuits ou les grumeaux sont visibles dans le mélange trempé — la louche du bouillon était trop chaude, ou le sifflement s'arrêtait pendant la coulée.",
            "action": "Placer le mélange trempé dans un tamis fin pour enlever les morceaux cuits, puis le retourner soigneusement dans la casserole. La sauce marchera toujours."
          }
        ]
      },
      "feelCue": "Touchez l'extérieur du bol après avoir ajouté 3 louches — il devrait se sentir chaud mais pas chaud, quelque part entre un bain confortable et une tasse de thé chaud. Cette chaleur vous dit que le pont de température a été construit en toute sécurité."
    },
    {
      "nodeId": "step_3",
      "action": "Finition et épaississement",
      "inputs": [
        "tempered_avgolemono",
        "ing_04"
      ],
      "outputState": "finished_avgolemono",
      "instructions": "Avec le mélange d'oeufs et de citrons trempés maintenant dans la casserole, faire chauffer à feu moyen-doux tout en remuant doucement et constamment avec une cuillère en bois ou une spatule, en veillant à atteindre le fond et les coins de la casserole. La sauce s'épaissira progressivement pendant 3 à 5 minutes lorsque les protéines d'œuf seront fixées à basse température, enrobant progressivement la cuillère. Ne pas faire bouillir — au moment où vous voyez des bulles qui commencent à se former aux bords, réduisez immédiatement la chaleur. La sauce finie doit envelopper le dos d'une cuillère d'une couche lisse et veloutée et laisser une ligne propre lorsqu'un doigt est tiré à travers elle. Goûtez et ajustez le sel. La sauce doit avoir un goût brillant de citron avec un bouillon riche et salé derrière lui — aucun des éléments ne doit dominer. Servir immédiatement ou garder à environ 70C pour tenir.",
      "visualCue": {
        "primaryTarget": "Une sauce pâle, lisse et veloutée de couleur crème ivoire-or – opaque mais brillant, avec une consistance entre la double crème et un béchamel fin. Pas d'oeuf brouillé, pas de séparation.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse — elle s'écoule de la cuillère dans un flux rapide plutôt que de la couvrir. Les protéines des oeufs n'ont pas eu le temps de fixer et d'épaissir le bouillon.",
            "action": "Continuer à chauffer doucement, en remuant constamment. L'épaississement se produit progressivement, puis soudainement — ne levez pas la chaleur pour la précipiter."
          },
          {
            "state": "Perfect",
            "description": "Silicieuse, opaque et veloutée — enveloppe une cuillère d'une couche qui tient 3-4 secondes avant de courir. Goûte lumineux et riche simultanément. Une petite cuillère tient sa forme brièvement dans un bol.",
            "action": "Servir immédiatement à ce moment de pointe soyeux."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été bouillie; elle a été caillée en petites morceaux pâles, en suspension dans un liquide mince et aqueux. L'œuf est brouillé.",
            "action": "Plongez d'urgence dans un tamis à mailles fines. Le résultat sera une sauce plus mince mais toujours saveur. Les morceaux brouillés ne sont pas récupérables."
          }
        ]
      },
      "feelCue": "Dessinez une cuillère à travers la sauce et inclinez la poêle – la sauce doit s'écouler lentement et à contrecœur revenir dans l'espace, comme de la crème chaude. Si elle se précipite pour combler l'écart comme l'eau, elle a besoin de plus de temps. S'il ne revient jamais du tout, il a trop cuit à une crème."
    }
  ]
};
