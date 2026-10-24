export default {
  "repoId": "master_mexican_chicken_mole_001",
  "parentRepoId": null,
  "slug": "chicken-mole",
  "author": "ForkRecipe Kitchen",
  "title": "Pollo en Mole Negro",
  "description": "Des morceaux de poulet osés mijotés bas et lents dans la taupe de nègre jusqu'à ce que la sauce amer et sucrée sombre enveloppe chaque surface et que la viande tire de l'os dans des fils de soie — le plat de célébration déterminant de Oaxaca, où la complexité est mesurée dans les chiles et le temps.",
  "cuisine": "Mexicain",
  "culture": "Oaxacan",
  "category": "proteins",
  "tags": [
    "poulet",
    "Mole",
    "oaxacan",
    "Mexique",
    "braise",
    "Chile",
    "célébration"
  ],
  "difficulty": 4,
  "activeTime": "1 hr",
  "totalTime": "5 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 2,
    "sour": 0,
    "bitter": 2,
    "umami": 3,
    "heat": 2
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Morceaux de poulet désossé (jambes, cuisses et pilons)",
      "ratioValue": 1400,
      "defaultUnit": "g",
      "substitutions": [
        "poulet entier coupé en 8 morceaux",
        "morceaux de dinde"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Base",
      "name": "Pâte de nègre (Oaxacan ou commercial, p.ex. Doña Maria)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": [
        "Nègre de mole fraîchement préparé à partir de chiles séchés (voir notes)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Poulet chaud",
      "ratioValue": 750,
      "defaultUnit": "ml",
      "substitutions": [
        "dindon"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 8,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Huile de lard ou de légumes",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": [
        "huile végétale"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Garnish",
      "name": "Graines de sésame, légèrement grillées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": [
        "graines de sésame noir"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sear",
      "inputs": [
        "ing_01",
        "ing_04",
        "ing_05"
      ],
      "outputState": "browned_chicken",
      "instructions": "Mettre les morceaux de poulet complètement secs et assaisonner de sel. Chauffer le saindoux ou l'huile dans une grande casserole (four hollandais ou cazuela) à feu moyen-vif jusqu'à ce qu'elle mijote. Travaillant en lots, faites glisser la peau du poulet de 4 à 5 minutes sans la déplacer jusqu'à ce que la peau soit dorée et libère proprement de la poêle. Faire glisser et saisir le dessous pendant 2 minutes. Retirer et réserver. Ce brunissement n'a rien à voir avec la cuisson du poulet — il s'agit de construire de la graisse et de l'affection de Maillard dans le pot qui se mariera dans la taupe.",
      "visualCue": {
        "primaryTarget": "La peau de poulet est dorée-brun et illuminante, pas blond ou pâle. Le pot a un fond doré, non brûlé, mais riche en couleurs.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est d'or pâle, légèrement flasque et reste légèrement collée à la poêle. Le fond est très mince et blond.",
            "action": "Donnez à chaque pièce 2 minutes de plus, sans gêne. La peau pâle lèche l'excès d'humidité dans la taupe plutôt que de contribuer à la richesse."
          },
          {
            "state": "Perfect",
            "description": "La peau est brun-or profond, rendu, et libère proprement. Une bonne couche de fond en or foncé recouvre le fond du pot.",
            "action": "Retirer tous les morceaux de poulet, verser tout sauf un mince film de graisse, et se déplacer pour faire frire la pâte de taupe."
          },
          {
            "state": "Overdone",
            "description": "La peau est très brun foncé à noir dans les taches. Le fond commence à brûler et à sentir amer.",
            "action": "Retirer immédiatement le poulet et déglacer la casserole avec un jet de bouillon, grattant le fond. Continuez, mais goûtez le liquide — si amer, jetez - le et commencez par un pot propre."
          }
        ]
      },
      "feelCue": "Appuyez sur l'arrière d'une cuillère sur la peau brune — elle doit être sèche et papier, non molle ni humide. Une peau qui semble légèrement creuse quand tapotée a rendu sa graisse correctement."
    },
    {
      "nodeId": "step_2",
      "action": "Fry",
      "inputs": [
        "ing_02",
        "ing_05"
      ],
      "outputState": "fried_mole_paste",
      "instructions": "Dans le même pot à feu moyen, ajouter la pâte de nègre directement dans la graisse restante. Faire frire la pâte, en remuant constamment avec une cuillère en bois, pendant 3 à 5 minutes. La pâte crachera et crachera d'abord, puis se calmera graduellement à mesure que son humidité s'évaporera. Vous faites frire le goût cru et plat des ingrédients de la pâte et développez une base plus profonde et plus complexe. La pâte va s'assombrir d'une seule nuance et sentir grillé, fumé et amer — comme le chocolat noir et le chile séché.",
      "visualCue": {
        "primaryTarget": "La pâte s'est accentuée de son original brun rougeâtre foncé à presque noir, sent le chile grillé et le cacao, et a sensiblement diminué en volume.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est toujours la couleur originale et sent cru et légèrement boueux. Il est encore en train de planter fortement avec l'humidité.",
            "action": "Continuer à frire, en remuant constamment. La pâte doit être frite jusqu'à disparition de l'humidité et la graisse commence à briller à la surface."
          },
          {
            "state": "Perfect",
            "description": "La pâte est presque noire, aromatique et se déplace en une seule masse plutôt qu'éclaboussante. Un film brillant de graisse séparée apparaît autour des bords.",
            "action": "Commencer à ajouter progressivement le bouillon de poulet chaud, une louche à la fois, en fouettant chaque addition complètement dans la pâte avant d'ajouter la suivante."
          },
          {
            "state": "Overdone",
            "description": "La pâte fume, sent l'acride et est collée au fond du pot dans une couche carbonisée.",
            "action": "Retirer immédiatement du feu. L'amertume peut être irrécupérable dans la sauce — goût au fur et à mesure que vous continuez. Si très amer, dissoudre une petite quantité de sucre ou utiliser un pot frais."
          }
        ]
      },
      "feelCue": "Penchez - vous sur le pot pendant la friture et respirez — l'odeur correcte est riche, sombre, fumée et légèrement sucrée, comme l'intérieur d'une chocolaterie de qualité. Une odeur acride ou brûlante signifie réduire la chaleur immédiatement."
    },
    {
      "nodeId": "step_3",
      "action": "Laisser mijoter",
      "inputs": [
        "fried_mole_paste",
        "ing_03"
      ],
      "outputState": "mole_sauce",
      "instructions": "Avec la pâte de taupe frite à feu moyen, ajouter le bouillon de poulet chaud une louche à la fois, fouettant chaque addition complètement dans la pâte avant d'ajouter la suivante. Cette incorporation progressive empêche les grumeaux et aide la sauce à développer un corps lisse et velouté. Après avoir incorporé tout le bouillon, faire mijoter la sauce et cuire à découvert pendant 15 minutes, en remuant fréquemment pour éviter que la sauce épaisse ne s'attrape sur le fond. Goûtez et ajustez le sel.",
      "visualCue": {
        "primaryTarget": "La sauce est uniformément foncée, brillante, et enrobe le fouet dans une couche épaisse et fluide. Il ne reste pas de morceaux de pâte. La surface présente des bulles lentes et paresseuses plutôt qu'un ébullition.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est grumelée avec de la pâte non incorporée, ou mince et aqueuse de trop de stock ajouté trop vite. Séparation dans des zones huileuses et aqueuses.",
            "action": "Frotter vigoureusement la chaleur pour briser les morceaux. Si trop mince, laisser mijoter 10 minutes de plus à découvert pour se concentrer. Si elle est grasse, la graisse de la pâte s'est fractionnée — ajouter le bouillon et fouetter du centre vers l'extérieur."
          },
          {
            "state": "Perfect",
            "description": "La sauce est la couleur de l'acajou très foncé et a un reflet laqué. Il nappe une cuillère dans une couche épaisse et uniforme et coule lentement. Le goût est complexe : amer, doux, fumé et épicé.",
            "action": "Remettre le poulet brun dans la sauce, les morceaux oisillons jusqu'à ce qu'ils soient submergés."
          },
          {
            "state": "Overdone",
            "description": "La sauce a été réduite à une pâte très épaisse et commence à coller et grincer sur le fond du pot entre les bras.",
            "action": "Ajouter le stock supplémentaire 50ml à la fois et remuer du bas au desserrage. Garder la chaleur très basse en avant."
          }
        ]
      },
      "feelCue": "Faites glisser une cuillère sur la surface de la sauce — elle devrait se remplir lentement sur 2-3 secondes, comme du goudron chaud, pas instantanément comme de l'eau. Cette viscosité vous dit que la sauce a assez de corps pour se braser."
    },
    {
      "nodeId": "step_4",
      "action": "Brise",
      "inputs": [
        "mole_sauce",
        "browned_chicken"
      ],
      "outputState": "braised_chicken_mole",
      "instructions": "Nettoyez les morceaux de poulet dorés dans la sauce taupe, en transformant chaque morceau pour enrober. La sauce devrait venir trois quarts sur les côtés du poulet. Couvrir d'un couvercle, laisser mijoter au plus bas possible et cuire pendant 1,5 heure, tourner le poulet doucement toutes les 20 minutes et cuillerer la sauce sur toute peau exposée. La chaleur basse est critique: un ébullition en rouleau rendra le poulet dur et fera craquer la sauce taupe. Couvrir les 15 dernières minutes pour épaissir légèrement la sauce et glacer le poulet.",
      "visualCue": {
        "primaryTarget": "La peau de poulet est profondément teinte près du noir par la taupe, scintillement, et commence à se retirer des extrémités des pilons. La sauce s'est visiblement épaissie autour des morceaux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau de poulet est encore brune et n'est pas encore entièrement teintée par la taupe. La viande à l'articulation du pilon résiste toujours à la torsion lors de l'essai.",
            "action": "Remplacer le couvercle et continuer la cuisson. À 1 heure, tordre un pilon — s'il offre une résistance à l'articulation, il lui faut 20 minutes de plus."
          },
          {
            "state": "Perfect",
            "description": "Le poulet est presque en chute libre – le pilon se tord facilement à l'articulation avec peu de résistance. La peau est profondément taupe et scintille. La sauce est épaisse et enrobe chaque surface.",
            "action": "Servir immédiatement, déposer la sauce supplémentaire sur chaque morceau et disperser les graines de sésame sur le dessus."
          },
          {
            "state": "Overdone",
            "description": "Le poulet s'est complètement désagrégé — les os se séparent de la viande. La sauce a peut-être tellement diminué qu'elle est collante.",
            "action": "Servir comme un poulet rustique tiré avec la taupe. Ajouter un peu de bouillon chaud à la sauce pour restaurer la consistance. La saveur est glorieuse."
          }
        ]
      },
      "feelCue": "Poignez un pilon et tordez l'articulation près de l'articulation — à la cuisson parfaite, il tourne environ un quart de tour avec une pression modérée avant de céder. Il devrait être comme desserrer un bouchon de bouteille qui a été scellé mais pas coupled serré."
    },
    {
      "nodeId": "step_5",
      "action": "Garnir",
      "inputs": [
        "braised_chicken_mole",
        "ing_06"
      ],
      "outputState": "finished_pollo_mole",
      "instructions": "Transférer les morceaux de poulet dans des assiettes chaudes ou un plateau de service chaud. Déposer généreusement la sauce taupe sur chaque morceau — le poulet devrait être presque submergé dans la sauce. Éparpiller les graines de sésame grillées sur le dessus. Servir immédiatement avec du riz blanc fraîchement préparé (qui absorbe magnifiquement la taupe), des tortillas chaudes de maïs pour déchirer et écoper, et une garniture d'oignon blanc finement haché. Le nègre est destiné à être goûté en quantité — ne pas être retenu avec la sauce.",
      "visualCue": {
        "primaryTarget": "Chaque morceau de poulet est assis dans une piscine sombre de sauce, scintillant avec l'huile de piment flottant à la surface. Les graines de sésame blanc pointent la surface noire comme des étoiles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Trop peu de sauce sur l'assiette — le poulet semble sec et la taupe est rationnée. L'expérience sera dominée par les protéines plutôt que la sauce.",
            "action": "Plus de sauce: ce plat vit ou meurt par la taupe, pas par le poulet. Il n'y en a pas trop."
          },
          {
            "state": "Perfect",
            "description": "Poulet mi-submergé dans une sauce foncée et scintillante. Graines de sésame visibles. La vapeur qui monte de l'assiette transporte du chocolat, du piment et de la fumée.",
            "action": "Apportez immédiatement à la table avec les accompagnements."
          },
          {
            "state": "Overdone",
            "description": "Les graines de sésame ont été ajoutées trop tôt et ont absorbé l'humidité et perdu leur croquant. La surface de la mole a développé une peau sèche.",
            "action": "Incorporer une cuillère à soupe de bouillon chaud dans la taupe de chaque assiette pour restaurer l'éclat et ajouter une pincée fraîche de graines de sésame."
          }
        ]
      },
      "feelCue": "Avant de servir, goûtez une petite cuillère de la taupe seule — elle devrait frapper votre langue en vagues: d'abord fumée et chaleur, puis amertume comme chocolat noir, puis douceur et profondeur. Si une seule note domine complètement, ajuster avec du sel, une pincée de sucre, ou une goutte de jus de lime."
    }
  ]
};
