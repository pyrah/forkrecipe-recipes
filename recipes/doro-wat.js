export default {
  "repoId": "master_ethiopian_dorowat_001",
  "parentRepoId": null,
  "slug": "doro-wat",
  "author": "ForkRecipe Kitchen",
  "title": "Doro Wat",
  "description": "Le plat national le plus célèbre de l'Éthiopie: les cuisses de poulet et les oeufs durs mijotés dans un berbère rouge acajou foncé et un ragoût de niter-kibbeh jusqu'à ce que la sauce se réduise à une pâte épaisse et odorante qui s'accroche à chaque morceau.",
  "cuisine": "Éthiopien",
  "culture": "Amhara",
  "category": "proteins",
  "tags": [
    "ethiopienne",
    "poulet",
    "berbère",
    "niter-kibbeh",
    "Fête",
    "ragoût"
  ],
  "difficulty": 3,
  "activeTime": "1 hr",
  "totalTime": "2 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 4,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Jambes de poulet (stick + cuisse), peau enlevée, marque",
      "ratioValue": 1200,
      "defaultUnit": "g",
      "substitutions": [
        "poulet entier coupé en morceaux",
        "cuisses de poulet en os"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Oeufs durs, pelés",
      "ratioValue": 6,
      "defaultUnit": "each",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "oignons jaunes, très finement hachés ou râpés",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": [
        "oignon rouge"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Niter kibbeh (beurre épicé éthiopien)",
      "ratioValue": 80,
      "defaultUnit": "g",
      "substitutions": [
        "beurre clarifié + 1 c. à thé curcuma + cardamome pincée"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Mélange d'épices berbères",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Giroves d'ail hachées à pâte",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": [
        "poudre de gingembre séchée (5 g)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Liquid",
      "name": "Stock de poulet ou d'eau",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "vinaigre de vin blanc"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Oignons caramélisés secs",
      "inputs": [
        "ing_03"
      ],
      "outputState": "caramelized_onions",
      "instructions": "C'est l'étape déterminante du doro wat — et ce qui le rend différent de tout autre ragoût de poulet. Placer les oignons hachés finement dans une grande casserole à fond lourd avec NO huile ou beurre. Cuire à feu moyen, en remuant toutes les 2 à 3 minutes, pendant 30 à 40 minutes. Les oignons vont libérer leur propre eau et s'y vaporiser lentement, puis alors que l'eau s'évapore, ils commenceront à attraper et à caraméliser. Incorporer plus souvent en s'assombrissant. L'objectif est l'oignon caramélisé acajou profond qui a réduit à environ un cinquième de son volume de départ. Ne pas ajouter d'eau — la sécheresse est ce qui développe la douceur profonde et complexe qui forme l'épine dorsale du plat.",
      "visualCue": {
        "primaryTarget": "Une masse d'oignon profondément dorée et jammy qui a considérablement rétréci. La couleur est brun acajou foncé — pas noir brûlé, mais profondément caramélisé. La masse s'accroche à la cuillère dans une pâte épaisse et collante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les oignons sont encore brun pâle ou translucides, doux et libérateurs. La couleur est légère et la masse n'a pas diminué de moitié. La saveur est douce mais pas complexe.",
            "action": "Continuez à cuisiner. Cette étape prend au moins 30 minutes. La tentation de se précipiter avec plus de chaleur se traduit par des bords extérieurs brûlés et l'intérieur brut. Le feu moyen est le seul moyen."
          },
          {
            "state": "Perfect",
            "description": "Acajou foncé, arôme intensément sucré et salé, réduit à une masse compacte et collante une fraction du volume original. Le pot a développé de l'affection (des morceaux bruns) sur le fond.",
            "action": "Ajouter le niter kibbeh et le berbere — la graisse va desserrer le fond et fleurir les épices simultanément."
          },
          {
            "state": "Overdone",
            "description": "Certains oignons sont devenus noirs aux bords et le fond de la casserole sent fortement le sucre brûlé. Le fond est passé du caramel au carbone.",
            "action": "Ajouter 2 cuillères à soupe d'eau immédiatement pour arrêter la combustion et racler le fond foncé. Si la masse d'oignon elle-même a un goût amer plutôt que sucré-savori, jetez les pires morceaux et procéder avec moins."
          }
        ]
      },
      "feelCue": "Le pot devrait se sentir presque trop calme pendant les 15 premières minutes — les oignons libèrent de l'eau qui les isole de la chaleur. Écoutez la transition d'un doux hiss de vapeur à un doux étourdissement collant pendant que l'eau cuit. Cette transition est lorsque l'attention et l'agitation deviennent critiques."
    },
    {
      "nodeId": "step_2",
      "action": "Berbère à fleurs",
      "inputs": [
        "caramelized_onions",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "bloomed_wat_base",
      "instructions": "Ajouter le niter kibbeh aux oignons caramélisés et remuer jusqu'à ce qu'il fond dans la masse d'oignon. Ajouter le berbère, la pâte d'ail et le gingembre râpé. Mélanger vigoureusement — le berbère moussera légèrement car il touche la graisse chaude. Faire cuire le berbère dans la graisse pendant 5 à 8 minutes à feu moyen, en remuant constamment. Cette étape — la floraison de l'épice dans la graisse — est essentielle: elle entraîne les acides volatils crus et rudes dans le berbère et approfondit sa couleur d'un rouge-brique terne à un rouge foncé, brillant, presque noir. Le mélange doit être très épais et parfumé, et la graisse commencera à se séparer visiblement aux bords.",
      "visualCue": {
        "primaryTarget": "Une pâte sombre, brillante, presque rouge noir qui est très épaisse et colle fortement à la cuillère. La graisse du niter kibbeh est visible sous forme d'huile rouge orangé aux bords de la masse. L'odeur est passée d'épices crues à des épices profondément arrondies et complexes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Berbere a été ajouté mais cuit pendant seulement 1-2 minutes — encore rouge brique brillant plutôt que rouge foncé, et l'odeur est nette et poivrée plutôt que arrondie et complexe.",
            "action": "Continuer à cuire et à remuer à feu moyen. La transformation de pointu en complexe se produit seulement après une cuisson soutenue dans les graisses à une chaleur suffisante."
          },
          {
            "state": "Perfect",
            "description": "Pâte sombre, brillante, presque colorée au chocolat. La graisse se sépare aux bords. L'odeur est profondément complexe: chaude, florale, terreuse et aromatique. La cuisine devrait sentir extraordinaire.",
            "action": "Ajouter les morceaux de poulet et tourner pour enrober complètement la pâte d'épices avant d'ajouter tout liquide."
          },
          {
            "state": "Overdone",
            "description": "Berbere s'est collé au fond de la poêle et a commencé à brûler — l'odeur est passée de complexe-aromatique à tranchant et acride. Des taches sombres et carbonisées sur le fond de la poêle.",
            "action": "Ajouter immédiatement 50 ml d'eau et racler vigoureusement le fond. Réduire la chaleur. Bouche : S'il a un goût amer plutôt que salé, ajouter une demi cuillère à café de miel pour contrebalancer."
          }
        ]
      },
      "feelCue": "La pâte de berbère devrait se sentir lourde et collante sur la cuillère — quand vous appuyez sur le côté du pot et faites glisser, il devrait laisser une stries sombres et brillantes qui ne coule pas. S'il coule encore facilement comme une sauce, faire cuire plus loin."
    },
    {
      "nodeId": "step_3",
      "action": "Poulet brun",
      "inputs": [
        "bloomed_wat_base",
        "ing_01",
        "ing_10"
      ],
      "outputState": "seared_chicken_in_base",
      "instructions": "Ajouter les morceaux de poulet sans peau et marqués à l'épaisse pâte d'oignon berbère. Ajouter le sel. Tourner le poulet de manière agressive pour enrober chaque surface dans la pâte foncée. Cuire à feu moyen pendant 5 à 7 minutes, en tournant fréquemment les morceaux — vous n'êtes pas vraiment en train de semer ici (il n'y a pas assez de chaleur sèche), mais vous enrobez le poulet avec la pâte et lui permettre de commencer à cuisiner dans la base aromatique. La pâte colle au poulet au moment où il commence à cuire. Ajouter le jus de citron et remuer pour déglacer n'importe quel fond du pot.",
      "visualCue": {
        "primaryTarget": "Les morceaux de poulet sont entièrement enduits dans la pâte de berbère foncé — aucun poulet cru pâle visible sur les surfaces extérieures. La pâte s'est plus foncée là où elle enrobe le poulet et crée une croûte parfumée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poulet a été tourné une fois mais est encore pâle sur certaines surfaces. La pâte n'a pas adhéré et est assise dans une piscine séparément.",
            "action": "Tourner plus agressivement et pousser la pâte dans la viande marquée. S'assurer que la chaleur est adéquate — cette étape nécessite une chaleur moyenne soutenue, pas douce."
          },
          {
            "state": "Perfect",
            "description": "Toutes les surfaces du poulet sont recouvertes de pâte parfumée foncée. La viande a commencé à se raffermir légèrement à l'extérieur. Le pot sent intense: berbère, niter kibbeh et oignon caramélisé ensemble.",
            "action": "Ajouter le bouillon ou l'eau et laisser mijoter."
          },
          {
            "state": "Overdone",
            "description": "Le poulet a été cuit si longtemps dans la pâte sèche que l'extérieur est trop cuit et sèche avant d'ajouter du liquide.",
            "action": "Ajouter immédiatement le stock ou l'eau. Le poulet se réhydratera pendant la longue mijoter et l'intérieur sera encore humide si le temps total de cuisson est contrôlé."
          }
        ]
      },
      "feelCue": "Appuyez sur le côté d'une pièce de poulet enduite — elle doit se sentir légèrement ferme à l'extérieur, enduite d'une pâte collante, intensément parfumée, mais qui continue de produire et de sentir cru au centre. L'os devrait encore sentir froid à travers la viande si vous la touchez."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser mijoter et réduire",
      "inputs": [
        "seared_chicken_in_base",
        "ing_08",
        "ing_02"
      ],
      "outputState": "finished_doro_wat",
      "instructions": "Verser dans le bouillon de poulet ou l'eau et remuer pour mélanger — le liquide tournera immédiatement une brique rouge profonde et libérera la pâte collée du fond du pot. Porter à ébullition douce, puis laisser mijoter. Couvrir et cuire 30 minutes. Ensuite, marquez les œufs épluchés à l'aide d'un couteau (coupes profondes pour que la sauce puisse pénétrer), ajoutez-les au pot et continuez à mijoter pendant 20 à 30 minutes. La sauce devrait réduire de façon significative: la dorure finie est très épaisse, enrobant le poulet et les œufs dans une sauce acajou dense et collante. L'huile doit se séparer visiblement à la surface. Si la sauce est encore trop fine après 30 minutes à découvert, augmenter légèrement la chaleur et réduire agressivement.",
      "visualCue": {
        "primaryTarget": "La sauce est épaisse, rouge acajou foncé, réduite à une pâte dense qui s'accroche au poulet et aux œufs. L'huile de kibbéh rouge orange se sépare visiblement à la surface. Le poulet est profondément coloré tout autour.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est encore mince et fluide, rouge vif plutôt qu'acajou foncé. Les morceaux de poulet nagent librement dans le liquide plutôt que de s'asseoir dans une base épaisse. Les saveurs ont un goût non intégré et aiguisé.",
            "action": "Continuer à mijoter à feu moyen. La réduction et le temps sont ce qui intègrent et approfondissent toutes les saveurs — il n'y a pas de raccourci."
          },
          {
            "state": "Perfect",
            "description": "Une sauce épaisse et confitureuse qui enrobe une cuillère fortement et qui coule à peine. Acajou foncé avec un halo d'huile orange à la surface. Le poulet tire proprement de l'os. Les œufs sont teintés d'orange rouge-rouge profond jusqu'au jaune à travers les fentes marquées.",
            "action": "Goûtez et ajustez le sel. Servir sur injera, permettant au pain d'absorber la sauce."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite au point de brûler au fond, craquant, fumant et collant agressivement. Le poulet a peut-être séché ou s'est complètement désagrégé.",
            "action": "Ajouter 50 à 100 ml d'eau et réduire la chaleur. Mélanger immédiatement et racler le fond. Le doro wat légèrement trop cuit est encore excellent; le doro wat brûlé est une véritable perte."
          }
        ]
      },
      "feelCue": "Inclinez le pot pour regarder la sauce au bord — il devrait se déplacer lentement, comme de la confiture chaude, ne pas verser librement comme un bouillon. Faites glisser une cuillère à travers la surface : le sentier devrait se remplir lentement pendant 3-4 secondes. Cette viscosité signifie que le ragoût est prêt."
    }
  ]
};
