export default {
  "repoId": "master_french_omelette_001",
  "parentRepoId": null,
  "slug": "french-omelette",
  "author": "ForkRecipe Kitchen",
  "title": "Omelette française à rouleaux",
  "description": "Une enveloppe pâle et non marquée de cords à peine fixés — la référence d'Escoffier où la technique remplace l'assaisonnement et la poêle fait la moitié de la pensée.",
  "cuisine": "Français",
  "culture": "Français classique",
  "category": "eggs",
  "tags": [
    "œufs",
    "français",
    "technique",
    "Petit déjeuner",
    "Vite"
  ],
  "difficulty": 2,
  "activeTime": "5 min",
  "totalTime": "10 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2024-02-14",
  "updatedAt": "2025-01-08",
  "flavorRadar": {
    "sweet": 0,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Oeufs",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Beurre non salé",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre clarifié"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "fleur de sel"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Poivre blanc",
      "ratioValue": 0.3,
      "defaultUnit": "parts",
      "substitutions": [
        "poivre noir"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Herb",
      "name": "Ciboulette fraîche",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "amende les herbes"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Combattre",
      "inputs": [
        "ing_01",
        "ing_03",
        "ing_04"
      ],
      "outputState": "seasoned_eggs",
      "instructions": "Casser les œufs dans un bol. Assaisonner de sel et de poivre blanc. Battre avec une fourchette jusqu'à ce que les jaunes et les blancs soient complètement unifiés — sans stries — mais n'introduisent pas d'air. Le but est un liquide homogène, pas une mousse.",
      "visualCue": {
        "primaryTarget": "Liquide jaune pâle uniforme sans brins blancs visibles et sans mousse à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des rubans translucides blanc-oeuf sont encore visibles lorsque la fourchette est levée.",
            "action": "Continuez à battre avec des coups courts et plats — inclinez le bol vers vous et faites glisser la fourchette sur le fond."
          },
          {
            "state": "Perfect",
            "description": "Couleur dorée constante à travers. Lorsqu'il est versé, il coule comme un liquide sans séparation.",
            "action": "Mettez de côté. Préparez la poêle."
          },
          {
            "state": "Overdone",
            "description": "Surface recouverte de fines bulles et de mousse. Le mélange s'est sensiblement allégé.",
            "action": "Laissez reposer deux minutes pour que les bulles s'installent — une omelette aérienne devient spongieuse."
          }
        ]
      },
      "feelCue": "La fourche doit glisser sans résistance. Si vous entendez les dents gratter fort le bol, vous êtes trop agressif."
    },
    {
      "nodeId": "step_2",
      "action": "Plaque thermoformée",
      "inputs": [
        "ing_02"
      ],
      "outputState": "foamed_butter",
      "instructions": "Réglez un moule antiadhésif de 8 pouces ou en acier au carbone bien assaisonné à feu moyen-élevé. Ajouter le beurre et tourner constamment. Le beurre va mousser, puis la mousse va tomber. Agir avant qu'il ne colore.",
      "visualCue": {
        "primaryTarget": "Beurre a fondu, mousse vigoureusement, et la mousse commence à peine à s'effondrer — la surface de la poêle est enduite et scintille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Beurre encore solide ou à moitié fondu sans mousse.",
            "action": "Attendez. La poêle doit être uniformément chaude avant que les oeufs entrent ou ils seront mis inégalement."
          },
          {
            "state": "Perfect",
            "description": "La mousse a culminé et s'effondre. Le beurre est doré, silencieux entre les étourdissements.",
            "action": "Ajouter les œufs immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Le beurre est bruni — couleur de la noisette et odeur de noix. De petites taches sombres.",
            "action": "Essuyez la casserole, re-butter, et redémarrez. Le beurre brun marquera l'omelette."
          }
        ]
      },
      "feelCue": "Le premier étourdissement lorsque le beurre frappe la poêle doit être doux, comme la pluie sur un toit en étain — si elle éclabousse violemment, la poêle est trop chaude."
    },
    {
      "nodeId": "step_3",
      "action": "Cords à crampons",
      "inputs": [
        "seasoned_eggs",
        "foamed_butter"
      ],
      "outputState": "soft_curds",
      "instructions": "Verser les œufs. Secouez immédiatement la poêle d'une main en remuant rapidement avec une fourchette ou des baguettes maintenues à plat dans l'autre. Tirez la poêle toutes les quelques secondes. Vous créez de petits caillés crémeux, pas de gros morceaux brouillés.",
      "visualCue": {
        "primaryTarget": "La masse des oeufs s'est épaissie en petits caillés brillants avec une fine couche d'oeuf liquide encore visible sur le dessus.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La plupart du temps liquide — les caillés se forment à peine. La fourche ne laisse aucune trace.",
            "action": "Revenez à chauffer et continuez à remuer. Les caillés se réuniront rapidement une fois la poêle assez chaude."
          },
          {
            "state": "Perfect",
            "description": "Petits caillés à la crème. Un mince film d'oeuf humide reste à la surface. Le mélange se déplace en masse lorsque vous secouez la casserole.",
            "action": "Arrête de remuer. Lisser la surface avec le dos de la fourchette."
          },
          {
            "state": "Overdone",
            "description": "Grandes croûtes sèches. Aucun œuf humide ne reste. Les courbes se sont séparées.",
            "action": "Continuez à rouler — il sera comestible mais ferme. La prochaine fois, tirez de la chaleur plus tôt."
          }
        ]
      },
      "feelCue": "Le son passe d'un sifflement aigu à un murmure doux et humide — ce silence est votre signal pour arrêter de remuer."
    },
    {
      "nodeId": "step_4",
      "action": "Rouleaux",
      "inputs": [
        "soft_curds"
      ],
      "outputState": "rolled_omelette",
      "instructions": "Incliner la poêle à un angle de 45 degrés, tenir. Laissez l'omelette glisser vers l'extrémité. Utilisez la fourche pour plier le tiers près sur le centre, puis inverser la poêle sur une plaque chaude afin que l'omelette atterrisse côté couture vers le bas.",
      "visualCue": {
        "primaryTarget": "Une omelette jaune pâle, en forme de cigare, sans brunissement, assise sur la plaque avec une surface lisse et légèrement humide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'omelette se déchire au moment du pliage — l'œuf liquide s'écoule sur l'assiette.",
            "action": "Retournez à la poêle pendant dix secondes. La chaleur résiduelle peut suffire."
          },
          {
            "state": "Perfect",
            "description": "Extérieur pâle uniforme, pas de fissures, pas de taches brunes. Une presse douce donne un centre de baveuse doux.",
            "action": "Frottez un morceau de beurre froid sur le dessus."
          },
          {
            "state": "Overdone",
            "description": "Des stries brunes ou des taches à la surface. Se sent ferme et caoutchouteux quand pressé.",
            "action": "Servir — mais baisser la chaleur la prochaine fois et aller plus vite."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur le haut avec un bout de doigt — il devrait se sentir comme la chair entre votre pouce et l'index lorsque vous faites un signe OK. Jiggly, pas du tout."
    },
    {
      "nodeId": "step_5",
      "action": "Dresser",
      "inputs": [
        "rolled_omelette",
        "ing_05"
      ],
      "outputState": "finished_omelette",
      "instructions": "Frotter un petit bouton de beurre froid sur la surface pour un éclat brillant. Éparpillement de ciboulette finement tranchée le long du sommet.",
      "visualCue": {
        "primaryTarget": "Une omelette éblouissante au beurre avec un fin confetti de ciboulette vert vif contre le jaune pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La surface semble mate et sèche.",
            "action": "Appliquer un peu plus de beurre alors que l'omelette est encore assez chaude pour le fondre."
          },
          {
            "state": "Perfect",
            "description": "Surface brillante qui prend la lumière. Des chives distribuées uniformément.",
            "action": "Servir immédiatement — ce plat n'attend personne."
          },
          {
            "state": "Overdone",
            "description": "Le beurre s'est emparé de flaques. Les chives se flétrissent à cause de la chaleur résiduelle.",
            "action": "Blot de beurre excédentaire avec une serviette en papier. La ciboulette va bien."
          }
        ]
      },
      "feelCue": "L'arôme doit être de lait propre et d'herbe fraîche-coupée — si vous sentez quelque chose de grillé ou de soufre, les œufs ont été trop cuits."
    }
  ]
};
