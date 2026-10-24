export default {
  "repoId": "master_indonesian_nasi-goreng-paste_001",
  "parentRepoId": null,
  "slug": "nasi-goreng-paste",
  "author": "ForkRecipe Kitchen",
  "title": "Paste Nasi Goreng",
  "description": "Une pâte foncée, intensément salée, d'échalotes carbonisées, d'ail et de crevettes fermentées, moulue dans un roux rouge-noir parfumé, le moteur aromatique qui transforme le riz vieux d'un jour en quelque chose de fumé, funky, et qui satisfait profondément le moment où il frappe un wok chaud.",
  "cuisine": "Indonésien",
  "culture": "Indonésien",
  "category": "condiments",
  "tags": [
    "Riz frit",
    "pâte",
    "par an",
    "pâte de crevettes",
    "Chili"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 0,
    "bitter": 2,
    "umami": 5,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Allium",
      "name": "Échalotes asiatiques (6-8), pelées",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "1 petit oignon rouge"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Allium",
      "name": "Ail (5 girofles), pelé",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Umami",
      "name": "Terasi (pâte de crevette indonésienne), grillé",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "bélacan (Pâte de crevettes malaysienne)",
        "pâte miso pour pescatarien"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Piments rouges séchés (5-8), trempés dans de l'eau chaude 10 min",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "2 cuillères à soupe sambal oelek"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Chilies oculaires d'oiseau (2–3, option pour la chaleur supplémentaire)",
      "ratioValue": 0.25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Masque de kécap (sauce de soja sucrée)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "sauce soja foncé + 1 c. à thé de sucre brun"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile neutre (canola ou noix de coco)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_03"
      ],
      "outputState": "toasted_shrimp_paste",
      "instructions": "Enveloppez le térasi dans un petit carré de feuille d'aluminium et pressez-le à plat. Faire cuire directement au-dessus d'une flamme de gaz ou dans une poêle sèche pendant 30 à 45 secondes de chaque côté jusqu'à ce qu'elle sente cuite et profondément salée — la netteté brute et ammoniaque de la pâte brute devrait céder la place à une complexité torréfié et fermentée. Ne sautez pas cette étape : le térasi brut a une odeur agressive et dure que la cuisine apprivoise dans quelque chose d'extraordinaire. La feuille empêche la pâte de coller et la flamme de l'épuiser inégalement.",
      "visualCue": {
        "primaryTarget": "Le bloc de terasi grillé est légèrement obscurci à l'extérieur et s'émiette plus facilement lorsqu'il est pressé. L'arôme passe d'ammoniaque aiguë à grillé, océanique, fermenté.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Terasi a encore une odeur d'ammoniaque crue et très piquante. Le bloc n'a pas changé de couleur.",
            "action": "Goûter plus longtemps — le goût de terasi brut écrasera la pâte."
          },
          {
            "state": "Perfect",
            "description": "Extérieur plus foncé, texture friable, l'odeur est profondément savoureuse et complexe plutôt que pointue. Comme de la pâte d'anchois grillée.",
            "action": "Défaire et ajouter au mortier ou au mélangeur avec les autres aromatiques."
          },
          {
            "state": "Overdone",
            "description": "Terasi a brûlé — très sombre, sent acride et amer à travers la feuille.",
            "action": "Écraser l'extérieur noirci et utiliser ce qui reste. Ou utilisez plutôt une petite quantité de terasi frais et non grillé."
          }
        ]
      },
      "feelCue": "La térase grillée doit s'écrouler entre les doigts comme de l'argile sèche, alors que la térase brute reste collante et plastique — ce déplacement textural indique que l'humidité a cuit et que la saveur s'est concentrée."
    },
    {
      "nodeId": "step_2",
      "action": "Livre",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_04",
        "ing_05",
        "toasted_shrimp_paste"
      ],
      "outputState": "raw_spice_paste",
      "instructions": "Égoutter les piments séchés trempés — ils doivent être doux et souples. Mélanger les échalotes, l'ail, les piments séchés trempés, les piments ophtalmiques d'oiseaux frais (si on les utilise) et les terasis grillés dans un grand mortier. Pound méthodiquement en commençant par les articles les plus durs (hallots, ail) avant d'ajouter les chilis et les terasis. Travaillez dans un mouvement de battement circulaire, tournant le pilon et parfois grattant les côtés. Le but est une pâte lisse, uniformément colorée, rouge brique profonde sans morceaux visibles. Un mélangeur fonctionne mais produit une pâte légèrement plus aqueuse — ajouter une cuillère à soupe moins d'eau.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, rouge brique profonde à rouge brunâtre avec une surface brillante et un arôme complexe, vif, de chili-and-hallot. Pas d'échalote visible ou de morceaux d'ail.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des rondelles d'échalote et des rondelles d'ail sont encore visibles. La pâte cuirea inégalement dans le wok.",
            "action": "Continuez à frapper. C'est l'étape la plus difficile et la plus importante. Prenez votre temps."
          },
          {
            "state": "Perfect",
            "description": "Pâte rouge lisse et profonde. Lorsqu'il est traîné avec une cuillère, il laisse une couche propre, même sur le mortier. L'odeur est intensément aromatique: chili, oignon, crevettes fermentées.",
            "action": "Faire revenir l'huile pour faire la pâte cuite."
          },
          {
            "state": "Overdone",
            "description": "La pâte est si finement moulue qu'elle est presque liquide. C'est très bien, mais cela prend plus de temps dans l'étape de la friture car elle s'étale agressivement.",
            "action": "Procédez avec soin — utilisez un écran d'éclaboussure et remuez constamment."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur la pâte dans le mortier — il doit sentir froid, humide et légèrement rugueux. S'il se sent encore brouillé sous votre paume, livrez plus. La douceur ici égale l'uniformité dans le wok."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "raw_spice_paste",
        "ing_07"
      ],
      "outputState": "cooked_nasi_goreng_paste",
      "instructions": "Chauffer l'huile dans un wok ou une poêle lourde à feu moyen jusqu'à ce qu'elle mijote. Ajoutez la pâte d'épices en même temps — elle crache et siffle fort. Reculez. Faire frire, en remuant constamment avec une cuillère en bois, pendant 6 à 8 minutes. La pâte progressera à travers trois étapes visibles : d'abord elle s'évapore et s'évapore (l'eau s'évapore); puis elle s'assombrit du rouge vif au brun brique plus profond; enfin l'huile se sépare autour de la pâte (pecah minyak) et la pâte sent doux, grillé, et complexe plutôt que cru. Cette base de pâte cuite est le fondement de toute saveur de nasi goreng.",
      "visualCue": {
        "primaryTarget": "La pâte est une version en brique profonde, plus sombre et plus riche que la version brute. L'huile est visiblement séparée de la surface et des bords. Ça sent le toast, la noix et le goût profond.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore rouge vif, vapeur et puanteur. L'huile n'est pas séparée. Goûte cru et vif.",
            "action": "Continuer à frire à feu moyen — se précipiter sur une chaleur élevée risque de brûler avant que l'eau ne s'évapore."
          },
          {
            "state": "Perfect",
            "description": "Pâte brun brique profonde avec séparation de l'huile aux bords. Sensations cuites – complexes, légèrement fumées, profondément salées. La crudité de chili-hallot a disparu.",
            "action": "Ajouter le kecap manis, mélanger et cuire encore 1 minute."
          },
          {
            "state": "Overdone",
            "description": "La pâte est très brun foncé à noir et collée à la poêle. Une odeur amère.",
            "action": "Ajouter immédiatement un jet d'eau et gratter. Une pâte légèrement surfriée peut encore être utilisée, mais réduire significativement la chaleur pour la cuisson restante."
          }
        ]
      },
      "feelCue": "Lorsque la pâte est bien frite, en remuant, elle doit se sentir lisse et même — aucune résistance des morceaux. L'odeur doit être chaude, complexe et cuite, vous faisant penser immédiatement à la nourriture de rue."
    },
    {
      "nodeId": "step_4",
      "action": "Saison",
      "inputs": [
        "cooked_nasi_goreng_paste",
        "ing_06",
        "ing_08"
      ],
      "outputState": "finished_nasi_goreng_paste",
      "instructions": "Ajouter le manis kecap et une pincée de sel à la pâte cuite et remuer à feu doux pendant 1 minute jusqu'à incorporation. Le manis kécap ajoute de la douceur et une couleur plus profonde: la pâte s'obscurcira plus loin vers un brun brillant et très foncé. Bouche : il doit être salé et complexe avec une profondeur fermentée distincte. Il sera aromatisé intensément — c'est une pâte concentrée destinée à assaisonner 2 tasses (400 g de riz cuit) par quantité de cette recette. Conserver la pâte refroidie dans un pot scellé au réfrigérateur jusqu'à 1 semaine. Pour l'utiliser : ajouter 2 cuillerées à soupe d'huile dans un wok chaud, ajouter la pâte et faire revenir 30 secondes, puis ajouter le riz d'un jour et mélanger.",
      "visualCue": {
        "primaryTarget": "Très foncé, brillant, pâte presque brun noir avec un arôme complexe, profondément salé. Se déplace dans la poêle comme une sauce épaisse et collante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Kecap n'a pas encore été ajouté. La pâte a l'air sèche et rouge brique plutôt que brillante et sombre.",
            "action": "Ajouter le kecap manis et remuer soigneusement."
          },
          {
            "state": "Perfect",
            "description": "Pâte intensement brillante, très foncée. Sens de pâte de crevette grillée, d'échalote caramélisée et de soja foncé avec une chaleur de chili. La nasi gong finie en sera profondément colorée et parfumée.",
            "action": "Laisser refroidir complètement avant de stocker, ou utiliser immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Kecap manis a été ajouté trop tôt ou trop de chaleur utilisée — pâte est saisir et coller dans une masse solide.",
            "action": "Ajouter une cuillère à soupe d'eau et remuer la chaleur. La pâte devrait se détendre pendant qu'elle refroidit."
          }
        ]
      },
      "feelCue": "Un petit frottis de pâte finie sur le dos de votre poignet devrait se sentir légèrement collant et laisser une tache sombre — cette collance du kecap manis est ce qui rend la nasi goreng accroché à chaque grain de riz."
    }
  ]
};
