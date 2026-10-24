export default {
  "repoId": "master_korean_pajeon_001",
  "parentRepoId": null,
  "slug": "pajeon",
  "author": "ForkRecipe Kitchen",
  "title": "Pajeon (Crêpe d'oignon)",
  "description": "Un pancake salé fin et croustillant chargé de pétoncles entiers — doré en dessous, tendre en dedans, servi avec une sauce à tremper de soja et de vinaigre.",
  "cuisine": "Coréen",
  "culture": "Nourriture de rue coréenne",
  "category": "breads",
  "tags": [
    "Crêpe",
    "coréen",
    "scalpel",
    "savoureux",
    "Alimentation de rue"
  ],
  "difficulty": 1,
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
    "salty": 3,
    "sour": 1,
    "bitter": 1,
    "umami": 3,
    "heat": 1
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 75,
      "defaultUnit": "parts",
      "substitutions": [
        "Farine universelle sans gluten"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Farine de riz (pour croustillant)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "fécule de pomme de terre"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau froide",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Oeufs (gros)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Échalons / oignons verts (ensemble, parures)",
      "ratioValue": 60,
      "defaultUnit": "parts",
      "substitutions": [
        "ciboulette à l'ail (buchu)"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile neutre (canola ou graines de raisin)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "huile de sésame grillée (1 c. à thé, pour la saveur)"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "vinaigre de vin de riz (pour tremper la sauce)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": [
        "vinaigre noir"
      ]
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "sauce soja (pour tremper la sauce)",
      "ratioValue": 15,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fouetter",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05"
      ],
      "outputState": "pajeon_batter",
      "instructions": "Mélanger la farine tout usage, la farine de riz et le sel dans un bol de mélange. Ajouter l'eau glacée et l'œuf et fouetter jusqu'à ce qu'ils soient simplement combinés — les morceaux sont acceptables et préférables au surmélange. La pâte doit être mince, plus proche de la pâte à crêpe que la pâte à crêpe. L'eau froide et le mélange minimal sont ce qui maintiennent le crêpe final léger et croustillant plutôt que mâcher.",
      "visualCue": {
        "primaryTarget": "Une pâte mince, versable avec la consistance de la crème lourde. Quelques petites bosses sont visibles mais pas de stries de farine sèche.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La farine sèche s'étire et se stries dans toute la pâte.",
            "action": "fouetter encore quelques coups, mais arrêter le moment où la farine sèche disparaît."
          },
          {
            "state": "Perfect",
            "description": "pâte lisse, fine, versable avec un aspect légèrement nuageux de la farine de riz. Il arrose le fouet dans un mince ruban.",
            "action": "Reposez-vous 5 minutes, puis faites frire."
          },
          {
            "state": "Overdone",
            "description": "La batterie a été vigoureusement fouettée jusqu'à ce que le gluten soit lisse et élastique. Il a l'air brillant et épais.",
            "action": "Finissez avec 1-2 cuillères à soupe d'eau froide et reposez-vous 10 minutes avant d'utiliser."
          }
        ]
      },
      "feelCue": "La pâte doit couler de votre fouet dans un cours d'eau stable et mince sans résistance. S'il tombe dans des globules épaisses, il est trop raide."
    },
    {
      "nodeId": "step_2",
      "action": "Frire",
      "inputs": [
        "ing_06",
        "pajeon_batter",
        "ing_07"
      ],
      "outputState": "frying_pajeon",
      "instructions": "Chauffer une poêle en fonte de 25 à 28 cm (10 à 11 pouces) ou bien assaisonnée à feu moyen-élevé. Ajouter l'huile et le tourbillon. Placer les pétoncles sur la casserole en une seule couche, en remplissant le bord au bord. Verser la pâte sur les pétoncles, en inclinant la poêle pour enrober uniformément une couche mince et uniforme. La pâte devrait à peine couvrir les oignons. Cuire sans toucher pendant 3 à 4 minutes.",
      "visualCue": {
        "primaryTarget": "Le dessous est doré et les bords sont secs et lacés. La pâte de surface s'est posée des bords vers l'intérieur, ne laissant qu'une petite tache humide au centre.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les bords sont encore pâles et mouillés; la pâte glisse lorsque la poêle est inclinée. Le pancake ne se libère pas de la casserole.",
            "action": "Réduire légèrement le feu et continuer à cuire encore 1-2 minutes sans toucher."
          },
          {
            "state": "Perfect",
            "description": "Les bords sont profondément dorés et croquants. La surface centrale semble mate et la plupart du temps réglée. La crêpe glisse librement lorsque la poêle est secouée.",
            "action": "Flip dans un mouvement confiant."
          },
          {
            "state": "Overdone",
            "description": "Les bords sont brun foncé-noir et sentent amer. Le centre est solide.",
            "action": "Toujours flippable ; le côté flip fera cuire plus vite. Regardez de près."
          }
        ]
      },
      "feelCue": "Appuyez doucement sur le centre de la crêpe — elle doit se sentir ferme et ressortre en arrière, pas mouillée et céder. Vous devriez entendre un étourdissement constant et silencieux; une crache violente signifie que la chaleur est trop élevée."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "frying_pajeon"
      ],
      "outputState": "finished_pajeon",
      "instructions": "Dépliez le crêpe dans un mouvement confiant avec une large spatule. Si elle déchire, pressez - la immédiatement, la pâte scellera. Cuire le deuxième côté pendant 2 à 3 minutes jusqu'à ce qu'il soit doré. Pour plus de croustillant, appuyez fermement avec la spatule pour la dernière minute de cuisson. Glissez sur une planche à découper.",
      "visualCue": {
        "primaryTarget": "Les deux côtés sont un ambre d'or. Les pétoncles sont visibles à travers la pâte fine, vert vif rayé d'or caramélisé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le deuxième côté est pâle et doux. Les pétoncles sont encore vert cru sans couleur.",
            "action": "Appuyez sur la spatule et faites cuire 1-2 minutes de plus sur moyenne-élevée."
          },
          {
            "state": "Perfect",
            "description": "Les deux côtés dorés, bords audiblement croustillants quand tapotés. Les pétoncles sont tendres et légèrement carbonisés là où ils frappent la casserole.",
            "action": "Glisser sur une planche, couper en morceaux et servir avec la sauce à tremper."
          },
          {
            "state": "Overdone",
            "description": "Croûte brun foncé sur le deuxième côté. Les pétoncles sont entièrement carbonisés.",
            "action": "Couper les bords les plus sombres ; l'intérieur aura encore un bon goût."
          }
        ]
      },
      "feelCue": "Soulevez un bord de crêpe fini — il devrait être rigide et cracher audiblement lorsqu'il est fléchi. Les pétoncles à l'intérieur seront tendres et cuits à la vapeur en contraste."
    },
    {
      "nodeId": "step_4",
      "action": "Assaisonner",
      "inputs": [
        "ing_09",
        "ing_08"
      ],
      "outputState": "dipping_sauce",
      "instructions": "Incorporer la sauce soja et le vinaigre de vin de riz dans un petit bol. Ajouter en option une pincée de gochugaru, quelques gouttes d'huile de sésame et une petite quantité de sucre. La sauce doit avoir un goût fortement acide et salé — son travail est de couper la richesse du pancake frit. Servir à côté du pajeon coupé en rectangles ou en quartiers.",
      "visualCue": {
        "primaryTarget": "Un liquide brun clair et foncé avec une nette netteté aigre sur le nez.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce a un goût purement salé sans éclat acide.",
            "action": "Ajouter plus de vinaigre une cuillère à café à la fois jusqu'à ce que la note aigre se lève."
          },
          {
            "state": "Perfect",
            "description": "Une gorgée délivre du sel immédiatement suivi d'un lifting au vinaigre vif. L'arôme est propre et puant.",
            "action": "Servir dans un petit bol individuel à côté du pajeon coupé."
          },
          {
            "state": "Overdone",
            "description": "La sauce est aigre-bouche avec le vinaigre qui écrase le soja.",
            "action": "Ajouter plus de sauce soja et une pincée de sucre pour l'arroser."
          }
        ]
      },
      "feelCue": "La sauce doit sentir fortement le vinaigre avec une terre de soja sous-jacente — le contraste avec le crêpe salé et huileux est tout le point."
    }
  ]
};
