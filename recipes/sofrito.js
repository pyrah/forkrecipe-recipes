export default {
  "repoId": "master_spanish_sofrito_001",
  "parentRepoId": null,
  "slug": "sofrito",
  "author": "ForkRecipe Kitchen",
  "title": "Sofrito",
  "description": "Le moteur aromatique de la cuisine espagnole et catalane - l'oignon, la tomate et le poivre réduit sur la chaleur patiente en une pâte douce, confitureuse, profondément concentrée qui porte la saveur de chaque plat qu'il touche. Une heure de chaleur basse transforme une poignée de légumes en quelque chose qui vous fait vous demander ce que la nourriture goûtée sans elle.",
  "cuisine": "Espagnol",
  "culture": "Catalan",
  "category": "sauces",
  "tags": [
    "Espagnol",
    "catalan",
    "base-sauce",
    "tomates",
    "oignon",
    "aromatiques",
    "sofrito"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "1 hr 15 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 4,
    "salty": 2,
    "sour": 2,
    "bitter": 1,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Allium",
      "name": "Oignon jaune ou blanc, en dés",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "oignon blanc",
        "échalote (résultat final)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Umami",
      "name": "Tomates de prune, râpées ou mélangées",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "tomates concassées en conserve (drainées)",
        "Passata"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Structure",
      "name": "Poivre rouge en dés",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "piquillo poivrons (rôtis, pour une saveur plus profonde)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Allium",
      "name": "Aile hachée",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile d'olive extra vierge",
      "ratioValue": 80,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Herb",
      "name": "Thym frais ou feuille de laurier",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": [
        "Thym séché (la moitié de la quantité)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Paprika fumé doux",
      "ratioValue": 4,
      "defaultUnit": "g",
      "substitutions": [
        "paprika doux régulier"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saucisse",
      "inputs": [
        "ing_01",
        "ing_03",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "softened_aromatics",
      "instructions": "Chauffer l'huile d'olive dans une grande poêle à fond lourd, une grande poêle ou une casserole qui permet aux légumes de s'étendre et de s'évaporer efficacement. Ajouter l'oignon finement coupé et le poivron rouge avec une pincée généreuse de sel et le thym ou la feuille de laurier. Mettre le feu à moyen-doux — pas un doux grésillement, pas une frite pleine, mais une cuisson lente et patiente où l'huile bouge à peine et les légumes transpirent plutôt que brun. Mélanger toutes les 3-4 minutes. Cuire de 20 à 25 minutes: l'oignon passera par des étapes distinctes — blanches et opaques, puis translucides, puis adoucies, puis commence enfin à tourner l'or pâle aux bords avec un arôme profondément sucré. Le poivre s'effondrera et sa peau s'assouplira complètement. Ne précipitez pas cette étape avec une chaleur élevée; la douceur de la sofrito vient entièrement de la lente conversion des amidons végétaux en sucres. Un sofrito à cuisson rapide a un goût cru et vif ; un lent goûte comme quelque chose d'ancien et essentiel.",
      "visualCue": {
        "primaryTarget": "L'oignon et le poivre se sont complètement effondrés et translucides — aucune opacité restante, le mélange réduit d'environ un tiers en volume, l'or pâle aux bords et sentant profondément sucré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore opaque et le poivre a encore une structure visible; l'odeur est brute et nette plutôt que douce.",
            "action": "Réduire encore la chaleur et continuer; la sofrito ne peut être précipitée sans sacrifier la douceur fondamentale."
          },
          {
            "state": "Perfect",
            "description": "Complètement translucide et effondré; or pâle aux bords; l'arôme est passé d'oignon cru vif à quelque chose de doux, peu caramel.",
            "action": "Ajouter l'ail et poursuivre jusqu'au stade tomate."
          },
          {
            "state": "Overdone",
            "description": "L'oignon a commencé à brunir de façon significative et certains bords sont sombres — la cuisson était trop rapide ou trop chaude.",
            "action": "Réduire la chaleur de façon spectaculaire et ajouter la tomate immédiatement; la saveur d'oignon caramélisée ajoutera du caractère plutôt que de ruiner la sofrito."
          }
        ]
      },
      "feelCue": "Appuyez sur un morceau d'oignon contre la poêle avec une cuillère en bois — il devrait frotter à plat sans résistance, comme presser un chiffon humide. Tout ressort signifie qu'il lui faut plus de temps."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "softened_aromatics",
        "ing_02",
        "ing_04",
        "ing_08"
      ],
      "outputState": "reduced_sofrito",
      "instructions": "Ajouter l'ail haché et cuire, en remuant, pendant 90 secondes jusqu'à ce qu'il devienne doré et parfumé — arrêter avant qu'il brunisse. Retirer brièvement la poêle du feu, ajouter le paprika fumé et remuer pendant 10 secondes. Le paprika fleurit dans l'huile hors de la chaleur directe, libérant son pigment soluble dans la graisse et son arôme sans brûlure. Retourner la poêle à feu moyen et verser dans la tomate râpée ou mélangée. La tomate crachera et crachera pendant qu'elle touchera l'huile chaude — remuer vigoureusement et faire monter le feu à moyen. Laisser réduire la tomate : c'est la longue étape. L'eau de la tomate doit s'évaporer complètement et les solides de la tomate doivent cuire et se concentrer. Mélangez toutes les quelques minutes et ajustez la chaleur au besoin — vous voulez une activité régulière et non des éclaboussures violentes. Après 30 à 40 minutes, la tomate s'obscurcira du rouge vif à une rouille profonde, l'huile se séparera et s'arrosera autour des bords de la masse, et la pâte sera assez épaisse pour passer sur une cuillère sans couler. C'est fait sofrito.",
      "visualCue": {
        "primaryTarget": "Une pâte brun rouille profonde, presque confiture, s'est effondrée et dense, avec de l'huile d'olive visiblement séparée autour des bords; le volume réduit à environ un quart de ce qu'était la tomate crue.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La tomate est encore rouge vif, liquide, et coule librement — l'eau n'a pas encore évaporé et le goût est encore vif et brut.",
            "action": "Continuer à feu moyen, en remuant fréquemment; le changement de couleur est le signal le plus clair — attendre que la rouille brun."
          },
          {
            "state": "Perfect",
            "description": "Pâte brun rouille profonde qui tient sa forme de monticule, avec l'huile clairement séparée; l'odeur est doucement caramélisée, fumée du paprika, et profondément savore.",
            "action": "Retirez le brin d'herbe, refroidissez et utilisez immédiatement ou réfrigérez."
          },
          {
            "state": "Overdone",
            "description": "La pâte a brûlé sur le fond — une croûte foncée et une odeur vive et amère signalaient le sucre brûlé.",
            "action": "Ne grattez pas le fond. Transférer la portion non brûlée dans une nouvelle casserole et continuer; la couche brûlée reste derrière."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère en bois à travers le sofrito — il devrait laisser un chemin clair et propre qui ne se remplit que très lentement; s'il coule fermé comme un liquide, cuire plus loin."
    },
    {
      "nodeId": "step_3",
      "action": "Frais",
      "inputs": [
        "reduced_sofrito"
      ],
      "outputState": "finished_sofrito",
      "instructions": "Enlever la feuille de laurier ou le brin de thym. Goûtez le sofrito fini — il devrait être intensément sucré et salé simultanément, avec une profonde richesse en tomates, la fumée du paprika, et seulement une légère netteté résiduelle de l'ail. Ajuster le sel si nécessaire. Transférer dans un contenant propre pour refroidir. Sofrito conserve réfrigéré jusqu'à 1 semaine et gèle magnifiquement dans des plateaux de glaçons jusqu'à 3 mois – un plateau de cubes de sofrito congelés est l'une des choses les plus utiles que vous pouvez avoir dans une cuisine. Utilisez le sofrito comme base pour paella, fideuà, toutes sortes de brises, haricots blancs, lentilles, plats de riz et ragoûts. Une cuillère à soupe brassée dans une soupe qui semble plate la transformera. Le rapport pour la plupart des applications est d'environ 1 cuillère à soupe de sofrito par portion, ajoutée au début de la cuisson.",
      "visualCue": {
        "primaryTarget": "Un pot de pâte brun rouille profonde avec un éclat d'huile d'olive à la surface — dense, concentré, et sentant tout bon dans la cuisine espagnole.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sofrito est encore chaud et les saveurs n'ont pas été complètement établies — il a un goût légèrement aiguisé et instable.",
            "action": "Couvrir et refroidir complètement avant d'utiliser ou de stocker; les saveurs s'achèveront significativement comme il refroidit."
          },
          {
            "state": "Perfect",
            "description": "Complètement frais, profondément concentré, brun rouille; une cuillerée odeur d'oignon doux, tomate caramélisée et fumée. Il a un goût assez complexe pour être seul comme condiment.",
            "action": "Conserver dans un pot scellé au réfrigérateur ou congeler en cubes."
          },
          {
            "state": "Overdone",
            "description": "Le sofrito a été sur-réduit à une pâte très sèche et rigide qui ne libère pas son huile — il sera difficile d'intégrer dans les plats.",
            "action": "Ajouter une cuillère à soupe d'huile d'olive et réchauffer doucement, en remuant pour réémulsionner."
          }
        ]
      },
      "feelCue": "Un sofrito bien fini, écopé sur une cuillère, devrait tenir sa forme brièvement comme un fromage doux ou une confiture épaisse avant de se propager lentement — il devrait se sentir dense mais pas sec, avec l'huile d'olive visible comme un éclat subtil."
    }
  ]
};
