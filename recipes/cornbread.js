export default {
  "repoId": "master_american_skillet_cornbread_001",
  "parentRepoId": null,
  "slug": "cornbread",
  "author": "ForkRecipe Kitchen",
  "title": "Pain de cornichons",
  "description": "L'original du Sud — pas de sucre, pas de farine, juste des farines de maïs et du babeurre en pierre versé dans une poêle en fonte chaude, liquéfiée de graisse de bacon, de sorte que la pâte siffle au contact et se met au four avec une croûte laquée profonde et un intérieur chaud, doré et tendre.",
  "cuisine": "Américain",
  "culture": "Sud américain",
  "category": "breads",
  "tags": [
    "pain de maïs",
    "sud",
    "en fonte",
    "beurre",
    "farine de maïs",
    "pain rapide"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "40 min",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "flavorRadar": {
    "sweet": 1,
    "salty": 2,
    "sour": 2,
    "bitter": 1,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de maïs jaune broyée en pierre",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": [
        "farine de maïs blanche pour un pain Deep South classique plus doux"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Leavener",
      "name": "Poudre de cuisson",
      "ratioValue": 4,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Leavener",
      "name": "Soda au four",
      "ratioValue": 1.5,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "sel casher (utiliser une touche plus par volume)"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Hydration",
      "name": "Lait de boucherie",
      "ratioValue": 110,
      "defaultUnit": "%",
      "substitutions": [
        "lait entier aigre avec 1 c. à soupe de jus de citron par tasse"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Binder",
      "name": "Gros œufs",
      "ratioValue": 35,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Bouchées de bacon (rendues, divisées)",
      "ratioValue": 30,
      "defaultUnit": "%",
      "substitutions": [
        "beurre non salé fondu",
        "huile neutre pour végétarien"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Chaleur",
      "inputs": [
        "ing_07"
      ],
      "outputState": "hot_skillet",
      "instructions": "Placer une poêle en fonte de 9 ou 10 pouces sur la grille centrale et chauffer le four à 450°F (250°C). Ajouter environ un tiers du bacon à la poêle froide et laisser préchauffer avec le four pendant 15 minutes. La poêle doit se déchirer à chaud et la graisse briller avant que n'importe quelle pâte n'entre.",
      "visualCue": {
        "primaryTarget": "La graisse est complètement fondue, mince et chatoyante à travers la surface de la poêle, avec la plus faible cuillerée de fumée et un éclat vitreux qui se jette vers le centre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La graisse est fondue mais toujours et pas encore chatoyante; la poêle se sent chaud plutôt que de semer quand votre main vole au-dessus.",
            "action": "Continuez à chauffer. Une poêle qui n'est pas complètement chaude donne un pain pâle à fond doux au lieu d'une croûte croustillante."
          },
          {
            "state": "Perfect",
            "description": "La graisse mijote et ondule, qui commence à fumer, et enveloppe les parois inférieures et inférieures dans un film brillant.",
            "action": "Tirez la poêle (proscieusement — la poignée est chaude) et versez la pâte immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La graisse est de fumer dur, s'assombrissant, et sent acride et brûlé.",
            "action": "Jeter la graisse brûlée, essuyer la poêle, ajouter les gouttes fraîches, et laisser revenir à un éclat propre avant de procéder."
          }
        ]
      },
      "feelCue": "Tenez votre paume à quelques pouces au - dessus de la poêle — la chaleur devrait rayonner dur et stable. Quand le batteur frappe, vous voulez un sifflement agressif, immédiat et étourdissement, pas une glisse tranquille."
    },
    {
      "nodeId": "step_2",
      "action": "Whisk",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04"
      ],
      "outputState": "dry_mix",
      "instructions": "Pendant que la poêle chauffe, fouetter la farine de maïs, la poudre à pâte, le bicarbonate de soude et le sel dans un grand bol jusqu'à ce qu'elle soit complètement uniforme. Coupez les morceaux de levain pour qu'il se disperse uniformément: les poches de bicarbonate de soude laissent des taches métalliques amères. Le repas moulu en pierre a plus de saveur et une bouchée plus grossière que le repas commercial fin; l'un ou l'autre fonctionne, mais garder la mouture cohérente.",
      "visualCue": {
        "primaryTarget": "Un mélange sec de couleur uniforme et sablonneux sans stries blanches visibles de levain et sans touffes accrochées au fouet.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries pâles ou de petites amas de poudre à pâte et de soude sont encore visibles à travers la farine de maïs.",
            "action": "Continuez à fouetter et pressez les morceaux contre le côté du bol jusqu'à ce que la couleur soit uniforme."
          },
          {
            "state": "Perfect",
            "description": "Un mélange de sable homogène et à écoulement libre, une nuance constante dans l'ensemble.",
            "action": "Faites un puits au centre, prêt pour les ingrédients humides."
          },
          {
            "state": "Overdone",
            "description": "S/O — le fouet sec ne peut pas être surdosé, mais le mélange peut se tasser et se compacter s'il est trop long.",
            "action": "Donnez-lui un rapide re-whisk pour le flatter avant d'ajouter les liquides."
          }
        ]
      },
      "feelCue": "Courez vos doigts à travers elle — il devrait se sentir comme sans humidité, même le sable sans griffes gritty. Le repas au sol en pierre est nettement plus grossier que la poudreuse commerciale."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "dry_mix",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "batter",
      "instructions": "fouetter les œufs dans le babeurre, puis fouetter dans le reste du bacon (chaud mais pas chaud, de sorte qu'ils ne brouillent pas les œufs). Verser le mouillé dans le puits sec et remuer avec une spatule jusqu'à ce qu'il ne reste plus de stries sèches — moins de dix coups. La pâte doit être lâche et versable, plus lâche qu'une pâte à gâteau. Le surmélange durcit la miette; quelques petites bosses sont fines. Travaillez vite, car le levain est déjà cuit dans le babeurre acide.",
      "visualCue": {
        "primaryTarget": "Une pâte d'or épaisse mais versable qui s'abat sur la spatule dans un ruban lourd, avec quelques petites bosses et une faible surface de bulles qui commencent à se former.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les poches sèches de farine de maïs restent au fond du bol et la pâte semble striée et inégale.",
            "action": "Plier encore quelques fois, juste jusqu'à ce que les stries sèches disparaissent — mais arrêtez l'instant où ils le font."
          },
          {
            "state": "Perfect",
            "description": "Une pâte cohésive et puante, uniformément humidifiée, avec de minuscules bulles qui commencent à s'élever. Il décolle la spatule et s'installe lentement.",
            "action": "Verser dans la poêle chaude sans délai pour capturer l'ascenseur du levain."
          },
          {
            "state": "Overdone",
            "description": "La pâte est lisse, brillante et élastique, tirant à cordes dans le bol — elle a été trop battue.",
            "action": "Arrêtez immédiatement et faites cuire. La miette sera une touche plus dense, mais attendre plus longtemps ne fait qu'empirer."
          }
        ]
      },
      "feelCue": "La pâte doit se sentir vivante et légèrement pétillante lorsque le beurre et le soda réagissent. Déplacez - le plus longtemps il est assis, plus vous perdez à l'air au lieu du four."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "hot_skillet",
        "batter"
      ],
      "outputState": "finished_cornbread",
      "instructions": "Versez la pâte dans la poêle chaude et graissée tout d'un coup, si elle siffle et grésille de façon spectaculaire comme les bords fixés au contact. Retournez-le au four 450°F et faites cuire 20 à 25 minutes, jusqu'à ce que le dessus soit en or profond, que les bords aient tiré de la poêle, et qu'un testeur ressorte propre. Exécutez un couteau autour du bord, puis inversez-le sur une planche (ou coupez les coins tout droit de la poêle) et servez chaud, slathered avec du beurre.",
      "visualCue": {
        "primaryTarget": "Un haut bombé, doré-brun profond avec des lignes de failles craquées, des bords visiblement rétrécis de la paroi de la poêle, et une croûte qui semble creuse et croustillante quand tapotée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La partie supérieure est jaune pâle et douce, le centre s'accroche légèrement, et un testeur sort avec une pâte mouillée s'y accrochant.",
            "action": "Cuire encore 5 à 8 minutes et recommencer le test. Le centre est le dernier à régler, alors faites confiance au testeur."
          },
          {
            "state": "Perfect",
            "description": "D'or profond et bombé, les bords croquants et rétractés de la casserole, un testeur propre, et le pain ressort quand pressé au centre.",
            "action": "Reposez-vous 5 minutes dans la casserole, puis tournez-vous. Servir chaud — le pain de maïs est le meilleur en l'heure."
          },
          {
            "state": "Overdone",
            "description": "Le dessus est brun foncé à presque brûlé aux bords, la miette est sèche, et il s'écroule à la poussière quand coupé.",
            "action": "Sauvage avec beaucoup de beurre ou de miel, ou réutilisé comme vinaigrette ou croûtons. Baissez la grille et tirez quelques minutes plus tôt la prochaine fois."
          }
        ]
      },
      "feelCue": "Tapez la croûte — elle devrait donner un coup creux et croquant. À l'intérieur, la miette doit être humide et tendre avec une faible vapeur acidulée, et un coin doit se tenir ensemble à la croûte, mais produire doucement au centre."
    }
  ]
};
