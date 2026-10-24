export default {
  "repoId": "master_brazilian_feijoada_001",
  "parentRepoId": null,
  "slug": "feijoada",
  "author": "ForkRecipe Kitchen",
  "title": "Feijoada",
  "description": "Le ragoût national du Brésil : les haricots noirs cuits lentement avec du porc fumé, des saucisses et de la baie, jusqu'à ce que le bouillon devienne inky et onctueux — servis avec du riz blanc, des verts à collier déchiquetés et des tranches d'orange qui coupent à travers la richesse comme une lame.",
  "cuisine": "Brésil",
  "culture": "Carioca",
  "category": "grains",
  "tags": [
    "haricots noirs",
    "porc",
    "Brésilien",
    "ragoût",
    "coeurux"
  ],
  "difficulty": 4,
  "activeTime": "60 min",
  "totalTime": "4 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 7,
    "sour": 1,
    "bitter": 2,
    "umami": 9,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Haricots noirs séchés, trempés pendant la nuit",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Côtes de porc fumées ou jarrets fumés",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "épaule de porc fumée"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Protein",
      "name": "Saucisse Linguiça ou chouriço, coupée en tranches de 1cm d'épaisseur",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "Chorizo espagnol",
        "kielbasa"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Protein",
      "name": "Bacon (slabe ou coupe épaisse), cubes",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Pancetta"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon blanc, coupé en dés",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Lard ou huile neutre",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 0.2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Spice",
      "name": "Poivre noir, fraîchement moulu",
      "ratioValue": 0.1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_11",
      "role": "Garnish",
      "name": "Orange, tranché en rondelles",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Saisir",
      "inputs": [
        "ing_04",
        "ing_02",
        "ing_03",
        "ing_07"
      ],
      "outputState": "browned_pork",
      "instructions": "Dans une grande casserole à fond lourd ou un four hollandais, rendre le bacon à feu moyen-élevé dans le saindoux jusqu'à ce que la graisse soit libérée et que les cubes soient dorés de tous les côtés (4-5 minutes). Ajouter les côtes fumées ou le jarret de jambon et saisir jusqu'à ce qu'elles soient légèrement dorées (3 minutes de chaque côté). Ajouter les tranches de saucisse et brunir jusqu'à ce que les bords coupés soient caramélisés (2 minutes par côté). Ne foulez pas le pot — travaillez en lots si nécessaire. Ce brunissement construit le fond qui devient le fondement de la saveur du ragoût. Retirer les viandes et réserver.",
      "visualCue": {
        "primaryTarget": "Chaque morceau de porc est un acajou-brun profond sur les surfaces de contact. Le fond du pot a un riche fond brun — pas noir, mais profondément caramélisé. La graisse a rendu et l'huile est dorée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les surfaces de viande sont grises plutôt que brunes. Pot n'a pas d'affection — semble propre. La graisse a à peine rendu.",
            "action": "Augmenter la chaleur à moyenne-élevée et laisser chaque pièce rester intacte pendant 2 minutes avant de vérifier la couleur."
          },
          {
            "state": "Perfect",
            "description": "Riche croûte brune sur les faces de contact. Les bords des saucisses sont caramélisés et légèrement croustillants. La graisse fondue est parfumée de porc.",
            "action": "Enlevez les viandes. Passer à sofrito dans la même casserole sans nettoyage."
          },
          {
            "state": "Overdone",
            "description": "La croûte noire qui sent l'acride. Le fond du pot est sombre et amer.",
            "action": "Enlevez les viandes. Ajouter un jet d'eau et gratter les taches les plus foncées pour évaluer — si elle sent amer plutôt que torréfié, déglacer avec plus d'eau et jeter le fond sombre avant de continuer."
          }
        ]
      },
      "feelCue": "Lorsque vous appuyez sur un morceau de saucisse et qu'il libère du pot proprement sans déchirer, la croûte de Maillard s'est formée — ce relâchement naturel est votre signal à retourner."
    },
    {
      "nodeId": "step_2",
      "action": "Faire revenir",
      "inputs": [
        "ing_05",
        "ing_06",
        "ing_08"
      ],
      "outputState": "sofrito_base",
      "instructions": "Dans le même pot avec tout le reste de graisse fondue, ajouter l'oignon en dés. Cuire à feu moyen, en grattant le fond brun du pot, car l'oignon libère l'humidité. Incorporer fréquemment 5 à 7 minutes jusqu'à ce que l'oignon soit complètement adouci et translucide – doré aux bords. Ajouter l'ail haché et les feuilles de laurier et cuire encore 1 minute jusqu'à odorat. Le fond doit être complètement dissous dans l'oignon.",
      "visualCue": {
        "primaryTarget": "L'oignon est doré aux bords, profondément adouci et entièrement transparent. L'ail est d'or pâle et parfumé. Le fond du pot est propre — tout le fonds s'est intégré à la base.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'oignon est encore blanc et ferme avec une croûte brute. L'ail n'est pas encore parfumé. Le fond du pot a encore un fond sec.",
            "action": "Ajouter un petit jet d'eau pour déglacer et poursuivre la cuisson. L'humidité aide à soulever le fond."
          },
          {
            "state": "Perfect",
            "description": "L'oignon est translucide, doré aux bords, sucré. L'ail est d'or pâle sans crudité. La cuisine sent l'oignon caramélisé.",
            "action": "Retournez les viandes brunes dans le pot et ajoutez les haricots égouttés."
          },
          {
            "state": "Overdone",
            "description": "L'oignon est brun foncé et commence à croquer aux bords. L'ail devient brun et sent amer.",
            "action": "L'amertume à l'ail diminuera avec la longue cuisson. Ajouter les haricots et le liquide immédiatement pour arrêter la cuisson."
          }
        ]
      },
      "feelCue": "Une pièce d'oignon pressée entre les doigts ne devrait offrir aucune résistance — complètement douce, sans croquant. S'il y a encore un léger coup, continuez à cuisiner."
    },
    {
      "nodeId": "step_3",
      "action": "Braiser",
      "inputs": [
        "sofrito_base",
        "browned_pork",
        "ing_01"
      ],
      "outputState": "simmering_feijoada",
      "instructions": "Retournez toutes les viandes brunes dans le pot. Ajouter les haricots trempés drainés. Verser suffisamment d'eau froide pour couvrir tout par 5 cm (environ 2 pouces). Porter à ébullition vigoureuse, en écrèment toute mousse grise qui monte à la surface dans les 10 premières minutes — c'est une protéine coagulée et fera le bouillon boueux si laissé. Une fois écrémé, réduire la chaleur au réglage le plus bas, couvrir partiellement et commencer le long brassage.",
      "visualCue": {
        "primaryTarget": "Après écrèmege : un bouillon clair et foncé avec des haricots visibles et de la viande submergée. Le liquide est à mijoter, une ou deux bulles paresseuses montant à la surface toutes les quelques secondes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La mousse grise couvre toujours la surface. Le liquide roule à ébullition complète. Pas encore de réduction du volume.",
            "action": "Continuer à écumer et réduire la chaleur. L'ébullition complète rend les haricots durs et le bouillon boueux — il faut le faire mijoter à nu."
          },
          {
            "state": "Perfect",
            "description": "Le papillon s'est obscurci des haricots et du porc fumé. Pas de mousse. La surface tremble avec un doux mijot. Les haricots commencent à se développer.",
            "action": "Couvrir partiellement et laisser commencer le long brassage. Réglez une minuterie pendant 2 heures."
          },
          {
            "state": "Overdone",
            "description": "Le liquide a déjà diminué significativement dans les 15 premières minutes. Certains haricots sont exposés.",
            "action": "Ajouter l'eau chaude à couvrir de 3 cm. Réduisez la chaleur — vous ne pouvez pas précipiter feijoada."
          }
        ]
      },
      "feelCue": "Un mijot nu devrait ressembler à un léger murmure — vous pouvez l'entendre si la cuisine est calme. Un ébullition complet semble agressif et va casser les haricots et durcir le porc."
    },
    {
      "nodeId": "step_4",
      "action": "Mijoter",
      "inputs": [
        "simmering_feijoada"
      ],
      "outputState": "tender_feijoada",
      "instructions": "Brais, partiellement recouvert, à feu très doux pendant 2 à 2,5 heures, en remuant toutes les 30 minutes et en vérifiant les niveaux de liquide. Les haricots doivent toujours rester submergés. Après 90 minutes, commencez à tester les haricots : appuyez un entre deux doigts ou sur le toit de votre bouche. À 2 heures, retirer les os et rabattre la viande dans le pot. Enlevez les feuilles de la baie. Le bouillon aurait dû épaissir significativement à partir de l'amidon libéré par les haricots.",
      "visualCue": {
        "primaryTarget": "Broth est très foncé, presque noir, et assez épais pour envelopper le dos d'une cuillère. Les haricots ont augmenté à leur pleine taille et sont uniformément tendres sans centres d'amidon blanc. Le porc éraflé a été distribué partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les haricots ont un centre crayeux et féculent quand ils sont mordus. Le bouillon est encore mince et coloré au bouillon plutôt qu'inky. La viande ne tombe pas encore de l'os.",
            "action": "Continuez à mijoter. Vérifiez toutes les 20 minutes. Certaines variétés de haricots nécessitent jusqu'à 3 heures."
          },
          {
            "state": "Perfect",
            "description": "Les haricots sont complètement crémeux tout au long sans résistance. Le papillon est épais, sombre et onctueux. La viande déchique sans effort.",
            "action": "Assaisonner de sel et de poivre. Reposez-vous 15 minutes avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Beaucoup de haricots ont éclaté et se sont dissous dans le bouillon, le rendant porridge-épaisseur. La viande est forte.",
            "action": "C'est encore délicieux — servez - le. Ajouter de l'eau chaude en petites quantités pour ajuster la consistance à un ragoût épais plutôt qu'à une pâte."
          }
        ]
      },
      "feelCue": "Pincez un haricot entre le pouce et l'index — il devrait squash complètement plat avec presque aucune résistance, comme presser un raisin très doux. Toute grainosité ou résistance au centre signifie plus de temps."
    },
    {
      "nodeId": "step_5",
      "action": "Assaisonner",
      "inputs": [
        "tender_feijoada",
        "ing_09",
        "ing_10",
        "ing_11"
      ],
      "outputState": "finished_feijoada",
      "instructions": "Goûtez la feijoada de façon critique et assaisonnez avec du sel et du poivre noir. En raison du sel contenu dans les viandes et les saucisses fumées, il est possible que vous ayez besoin de très peu de sel supplémentaire — goût avant d'ajouter quoi que ce soit. Le ragoût fini doit goûter profondément salé, fumé, avec une note légèrement amère des peaux de haricots noirs. Servir dans des bols profonds sur du riz blanc. Étendre des ronds d'orange sur le côté de chaque bol — ils ne sont pas en option garnir; les agrumes sont essentiels pour couper à travers la graisse et nettoyer le palais entre les morsures.",
      "visualCue": {
        "primaryTarget": "Un ragoût profond, brillant et presque noir avec de la viande déchiquetée visible et des haricots entiers. La surface a un léger reflet de graisse rendue. La couleur est la couleur du café noir.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Broth a un goût mince et plat. La fumée est présente mais les saveurs n'ont pas uni. Les haricots sont distincts plutôt que intégrés.",
            "action": "Laisser mijoter à découvert pendant 15 minutes pour réduire et concentrer. Les saveurs ont besoin de temps pour unifier."
          },
          {
            "state": "Perfect",
            "description": "Une seule cuillère contient des haricots, de la viande et du bouillon dans une saveur unifiée, en couches : fumée, sel, terre, amertume subtile. Profondément satisfaisant.",
            "action": "Servir avec du riz blanc, des verts à collier, du farofa et des tranches d'orange."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon est trop salé par réduction. Les haricots se sont dissous dans la base. La saveur de porc domine tout le reste.",
            "action": "Ajouter de l'eau chaude à mince, puis ajouter une poignée de haricots non cuits si vous les avez, ou des haricots cuits d'une boîte pour restaurer la texture."
          }
        ]
      },
      "feelCue": "Une cuillère de bouillon de feijoada devrait avoir une qualité visqueuse, légèrement glissante — l'amidon des haricots dissous lui donne le corps. Si elle s'écoule de la cuillère comme de l'eau, il faut plus de temps de réduction."
    }
  ]
};
