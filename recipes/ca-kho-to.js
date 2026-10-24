export default {
  "repoId": "master_vietnamese_ca-kho-to_001",
  "parentRepoId": null,
  "slug": "ca-kho-to",
  "author": "ForkRecipe Kitchen",
  "title": "Cá Kho T. (Poissons braisés caramélisés)",
  "description": "Le poisson-chat braisé en pot d'argile du delta du Mékong — des steaks de poisson mijotés dans un caramel profondément réduit d'eau de coco, de sauce de poisson et de sucre jusqu'à ce que la sauce devienne brillante et ambre, le poisson infusé d'une saveur amère complexe.",
  "cuisine": "Vietnamiens",
  "culture": "Delta du Mékong",
  "category": "seafood",
  "tags": [
    "vietnamese",
    "poissons",
    "braisés",
    "Caramel",
    "pot d'argile",
    "Mékong"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "50 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 3,
    "salty": 4,
    "sour": 0,
    "bitter": 2,
    "umami": 4,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Steaks de poissons-chat, désossés, d'une épaisseur de 3 cm (cá tra ou swai)",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "steaks tilapia",
        "tofu ferme pour la version végétalienne"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre blanc (pour le caramel sec)",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Jeune eau de noix de coco verte",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "eau pure + 1 c. à thé sucre"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sauce de poisson",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Échalotes, tranchées finement",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "petit oignon rouge"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Girofles à l'ail, tranchés finement",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Heat",
      "name": "Chilies oculaires d'oiseau, à moitié long",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": [
        "flocons de chili rouge séché"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Poivre noir fraichement craqué",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "poivre blanc"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Garnish",
      "name": "Verts d'oignon de printemps, tranchés en morceaux de 3 cm",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Caramélisation",
      "inputs": [
        "ing_02",
        "ing_10"
      ],
      "outputState": "dark_caramel",
      "instructions": "Dans un pot d'argile (ou casserole à fond lourd), ajouter le sucre dans une couche uniforme à feu moyen. Ne remuez pas. Veillez bien — le sucre caramélise inégalement et peut aller de parfait à brûlé en quelques secondes. Lorsque les bords commencent à fondre et à tourner en ambre, inclinez doucement le pot pour encourager la fusion. Une fois qu'environ les deux tiers du sucre a fondu et est devenu un brun-ambre profond, vous pouvez remuer très doucement. Continuer jusqu'à ce que la masse entière soit une couleur acajou foncée, juste commencer à fumer aux bords, et sente profondément amer-douce avec une trace d'amertume fumée. Ce caramel plus foncé que d'habitude est intentionnel — la légère amertume qu'il porte est ce qui donne au cá kho t--- sa complexité distinctive lorsqu'il est équilibré contre la sauce de poisson et l'eau de coco. Verser immédiatement et soigneusement dans l'eau de coco (il sifflera violemment) et remuer pour mélanger.",
      "visualCue": {
        "primaryTarget": "Un caramel foncé presque de couleur café — ambre profond à acajou, beaucoup plus foncé qu'un caramel blond, avec un mince fil de fumée qui monte et une odeur vive et légèrement amère.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le caramel est toujours d'or pâle, à peine coloré et sent seulement du sucre fondu sans complexité amère. Il produira une douceur plate et unidimensionnelle dans le braise.",
            "action": "Continuer la cuisson sans remuer. Le changement de couleur de l'or à l'ambre à l'acajou se produit rapidement dans les dernières étapes — restez près et regardez attentivement."
          },
          {
            "state": "Perfect",
            "description": "Une acajou profonde qui s'approche mais n'atteint pas le noir, avec un léger sentier de fumée et un arôme qui est simultanément doux, amer et légèrement fumé. Lorsque l'eau de coco est ajoutée, elle éclate violemment et se dépose ensuite dans un liquide ambre profond.",
            "action": "Ajouter immédiatement l'eau de coco (retirez-vous de l'éclatement de la vapeur) et remuer pour dissoudre tout caramel durci du fond du pot."
          },
          {
            "state": "Overdone",
            "description": "Le caramel a passé l'acajou au noir, sent durement le sucre carbonisé, et goûte désagréablement amer sans aucune douceur restante.",
            "action": "Jeter le caramel brûlé, laver la casserole et recommencer. Le caramel brûlé ne peut pas être sauvé et rendra le plat entier goût acride. La prochaine fois, tire-la au premier coup de fumée."
          }
        ]
      },
      "feelCue": "Un caramel bien fait pour le cá kho tш est intentionnellement sombre — s'il sent agréable et comme des bonbons, il n'est pas allé assez loin. Il devrait vous rendre légèrement nerveux: juste au bord de trop loin est où la complexité vit."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "dark_caramel",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08"
      ],
      "outputState": "braising_liquid",
      "instructions": "Une fois que l'eau de caramel et de noix de coco se sont combinées dans un liquide lisse et foncé, ajouter la sauce de poisson, les échalotes tranchées, l'ail, les mi-piments et le poivre noir fissuré. Incorporer doucement et laisser mijoter à feu moyen. Laisser les aromatiques cuire dans le liquide de cuisson pendant 3-4 minutes — les échalotes devraient commencer à ramollir et l'ail devrait devenir translucide. Le liquide de cuisson à ce stade devrait goûter intensément salé, amer-doux, et funky de la sauce de poisson, avec un sous-courant épicé du chili et du poivre. Il sera assaisonné de façon agressive — c'est exact, car le poisson le diluera pendant le brassage.",
      "visualCue": {
        "primaryTarget": "Un liquide de braisage brun-ambre profond avec des tranches visibles d'échalote et d'ail adoucissant dans la sauce, des moitiés de chili rouge flottant sur la surface, et une surface brillante au caramel.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce de poisson et l'eau de coco ont été ajoutés, mais le sucre et le caramel ne sont pas complètement dissous; des traces pâles de liquide non réduit sont visibles et la sauce semble mince et à deux tons.",
            "action": "Incorporer à feu moyen jusqu'à ce qu'il soit complètement homogène. Tous les résidus de caramel doivent se dissoudre dans le liquide avant l'entrée du poisson."
          },
          {
            "state": "Perfect",
            "description": "Une sauce ambre uniforme et profonde qui est entièrement intégrée. Les échalotes commencent à se ramollir et les bords d'ail sont translucides. L'arôme est simultanément caramel-doux, poisson-funky, et poivre-chauffe.",
            "action": "Poser soigneusement les steaks de poisson dans le liquide de cuisson en une seule couche."
          },
          {
            "state": "Overdone",
            "description": "Les aromatiques ont été trop longtemps cuits dans la sauce sans le poisson et l'ail et les échalotes commencent à brûler aux bords, ajoutant une note acride.",
            "action": "Ajouter immédiatement le poisson et réduire la chaleur. Les arômes doivent être mijotés doucement dans la sauce et non frits."
          }
        ]
      },
      "feelCue": "Goûtez une cuillerée de liquide de bronzage à ce stade et laissez - la s'asseoir sur le dos de votre langue pendant 3 secondes — il devrait être presque inconfortable et salé. Si elle goûte bien à elle seule, elle sera sous-assaisonnée après l'ajout du poisson et le liquide sera encore réduit. Faites confiance à l'amertume, faites confiance au sel."
    },
    {
      "nodeId": "step_3",
      "action": "Brise",
      "inputs": [
        "braising_liquid",
        "ing_01"
      ],
      "outputState": "braised_fish",
      "instructions": "Poser délicatement les steaks de poisson-chat dans le liquide de culture en une seule couche. Le liquide devrait venir à la moitié des côtés du poisson. Faire mijoter à feu moyen, puis réduire à moyen-doux. Ne remuez pas le poisson — les steaks de poisson-chat se brisent facilement et la forme intacte est importante sur le plan esthétique et textuel. Au lieu de cela, utilisez une cuillère pour arroser le haut du poisson toutes les quelques minutes avec le liquide de cuisson. Cuire de 15 à 20 minutes, en inclinant occasionnellement le pot pour redistribuer la sauce. Au fur et à mesure que le liquide diminue, il s'épaissit et s'obscurcit davantage, commençant à glacer le fond du poisson. Le poisson est fait quand il est juste cuit à travers et la sauce a réduit d'environ la moitié et enrobe le poisson dans une laque épaisse et brillante.",
      "visualCue": {
        "primaryTarget": "Les steaks de poisson-chat sont assis dans une sauce épaisse, brillante, profondément ambre qui a réduit à environ la moitié de son volume original. Les bords du poisson où ils entrent en contact avec la sauce sont glacés et caramélisés en brun-ambre plus foncé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poisson est encore brut (translucide) dans les parties plus épaisses lorsqu'il est pressé avec une cuillère. La sauce est encore mince et verse facilement au lieu de recouvrir l'arrière d'une cuillère.",
            "action": "Continuer la cuisson à feu moyen-doux, en basting régulièrement. N'augmentez pas la chaleur — une ébullition dure brisera le poisson. La patience, c'est tout au kho."
          },
          {
            "state": "Perfect",
            "description": "La chair de poisson est entièrement opaque et commence à flocer lorsqu'elle est pressée avec une cuillère à la partie la plus épaisse. La sauce a réduit à une consistance épaisse et brillante — elle tombe d'une cuillère dans de lourdes gouttes plutôt que de couler. La couleur de la sauce est une ambre profonde et brûlée.",
            "action": "Retirer du feu. Garnir immédiatement et servir avec du riz jasmin uni, qui absorbe la sauce magnifiquement."
          },
          {
            "state": "Overdone",
            "description": "La sauce a diminué trop loin et a commencé à brûler et caraméliser sur le fond du pot. Le poisson s'est brisé et est sec et à cordes.",
            "action": "Ajouter un jet d'eau de coco pour desserrer la sauce et sauver ce qui reste. Réduire la chaleur et le timing pour le prochain lot. Vérifiez le niveau de sauce toutes les 5 minutes dans l'étape finale."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur la partie la plus épaisse d'un steak de poisson avec le dos d'une cuillère — la chair devrait céder et commencer à se séparer le long de ses lignes de grains naturelles sans s'effondrer. Le moment de la production initiale, avant que les flocons ne soient complètement séparés, est celui du poisson-chat de taille moyenne. Elle continuera de cuire pendant 60 secondes à partir de la chaleur résiduelle du pot d'argile."
    },
    {
      "nodeId": "step_4",
      "action": "Garnir",
      "inputs": [
        "braised_fish",
        "ing_09"
      ],
      "outputState": "finished_ca_kho_to",
      "instructions": "Éparpiller les verts d'oignons de printemps sur le poisson fini alors qu'il est encore dans le pot, directement avant de servir. Dans la tradition vietnamienne, le cá kho ta est servi dans le pot d'argile dans lequel il a été cuit, placé sur un petit trivet à table, de sorte que la sauce continue à mijoter très doucement de la chaleur résiduelle de l'argile. Chaque souper cuillere le poisson et la sauce généreusement sur leur bol de riz à la vapeur. La bonne façon de la manger est de faire d'abord une cuillère à la sauce — elle est intensément aromatisée et doit être utilisée pour assaisonner le riz — puis de manger le poisson en morceaux, tremper chacun dans la sauce poolée sur votre riz. La complexité amère, salée, poisson-sauce du caramel réduit est le point entier du plat.",
      "visualCue": {
        "primaryTarget": "Un pot d'argile de steaks de poisson profondément glacés dans une sauce acajou-ambre épaisse, garnie d'oignon de printemps vert vif contre la sauce foncée, rustique, riche et visuellement dramatique.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon de printemps a été ajouté trop tôt et a cuit limpide et couleur olive dans la chaleur résiduelle du braise. Le contraste de couleur vive qui annonce que le plat est parti.",
            "action": "Ajouter l'oignon de printemps seulement au moment de servir, jamais auparavant. Il devrait se flétrir légèrement de la vapeur mais rester vert vif."
          },
          {
            "state": "Perfect",
            "description": "Oignon vert vif contre la sauce foncée et brillante. Le pot est encore légèrement bouillonnant aux bords de la chaleur résiduelle de pot d'argile. La surface de la sauce est laquée et le poisson tient sa forme. L'odeur est intensément savoureuse, caramel-doux, et poivre chaud.",
            "action": "Porter à la table et servir immédiatement avec du riz jasmin. Fournissez une cuillère pour la sauce, donc rien n'est laissé derrière."
          },
          {
            "state": "Overdone",
            "description": "Le plat a été gardé trop longtemps au chaud sur le poêle après la garniture — la sauce a continué à réduire et est maintenant presque complètement absorbé dans le poisson, le fond du pot commençant à caraméliser et à coller.",
            "action": "Ajouter une petite éclaboussure d'eau chaude et agiter doucement le pot pour démêler la glaçure du fond. Servir immédiatement. On ne devrait jamais attendre."
          }
        ]
      },
      "feelCue": "Portez le pot d'argile à la table et tenez votre main au-dessus, vous devriez sentir une chaleur douce et régulière se lever, comme une pierre chaude au soleil. Cette chaleur conservée est la magie de la cuisine en argile: elle maintient le plat à la température de service parfaite sans trop cuire. Si le pot est devenu froid et silencieux, le plat est resté trop longtemps."
    }
  ]
};
