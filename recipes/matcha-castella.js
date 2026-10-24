export default {
  "repoId": "master_japanese_matcha_castella_001",
  "parentRepoId": null,
  "slug": "matcha-castella",
  "author": "ForkRecipe Kitchen",
  "title": "Matcha Castella",
  "description": "Gâteau d'éponge texturé finement sucré au miel avec l'amertume herbacée du matcha cérémonial — humide et printanier, avec une croûte foncée caractéristique.",
  "cuisine": "Japonais",
  "culture": "Nagasaki",
  "category": "desserts",
  "tags": [
    "gâteau",
    "matcha",
    "Japonais",
    "éponge",
    "thé"
  ],
  "difficulty": 3,
  "activeTime": "25 min",
  "totalTime": "2 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 1,
    "sour": 0,
    "bitter": 2,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine de pain (forte, 12-13% de protéines)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Farine tout usage (moins de résultats positifs)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Oeufs gros (tout, température ambiante)",
      "ratioValue": 200,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 130,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Chérie",
      "ratioValue": 30,
      "defaultUnit": "parts",
      "substitutions": [
        "miel aromatisé doux"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poudre de matcha de qualité cérémonielle",
      "ratioValue": 12,
      "defaultUnit": "parts",
      "substitutions": [
        "matcha culinaire (couleur plus verte, légèrement plus amère)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Liquid",
      "name": "Lait entier (chaud, 40 C)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Fouetter",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_07"
      ],
      "outputState": "ribbon_batter",
      "instructions": "Chauffer les oeufs entiers (dans leurs coquilles) dans l'eau chaude du robinet pendant 5 minutes. Mélanger les oeufs chauds, le sucre et le miel dans le bol d'un mélangeur de stand (ou utiliser un mélangeur à main). Battre à grande vitesse pendant 8-10 minutes jusqu'à ce que le mélange soit très pâle, triple en volume, et tient un ruban épais qui se dissout en environ 10 secondes lorsque le fouet est levé. Les oeufs chauds aident à dissoudre le sucre et à conserver l'air. Ne précipitez pas cette étape — la mousse d'œuf aérée est le seul levain dans la castelle.",
      "visualCue": {
        "primaryTarget": "Une mousse très pâle, presque blanche qui tombe du fouet levé dans un ruban épais et lent, écrivant un sentier visible à la surface pendant 8-10 secondes.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est encore jaune et déverse le fouet dans un cours d'eau mince.",
            "action": "Continuer à battre pendant 2-3 minutes à grande vitesse."
          },
          {
            "state": "Perfect",
            "description": "ivoire pâle, mousse très épaisse. Le ruban conserve sa forme sur la surface pendant 8-10 secondes avant de se dissoudre. Le volume a triplé.",
            "action": "Siroter le mélange de farine de matcha et le plier immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Surchauffe — la mousse est sèche et semble se briser en gros caillés aux bords.",
            "action": "Plier les ingrédients secs immédiatement et doucement; dégonfler une mousse est préférable à une pâte granuleuse."
          }
        ]
      },
      "feelCue": "Une base de castelle bien battue se sent comme une mousse de rasage chaude et dense, elle garde l'impression du fouet et tremble légèrement lorsque le bol est déplacé."
    },
    {
      "nodeId": "step_2",
      "action": "Incorporer délicatement",
      "inputs": [
        "ribbon_batter",
        "ing_01",
        "ing_05",
        "ing_06"
      ],
      "outputState": "castella_batter",
      "instructions": "Séparer la farine de pain et la poudre de matcha deux fois pour assurer une distribution uniforme. Siroter un tiers de la farine de matcha sur la mousse d'oeuf et plier avec une grande spatule en mouvements lents et balayants du bas du bol — couper le centre, balayer le bas, plier sur le dessus. Faites tourner le bol et répétez. Ajouter le reste de la farine en deux ajouts. Plier dans le lait chaud avec le dernier ajout. Arrêtez dès qu'il ne reste plus de stries sèches — chaque pli supplémentaire dégonfle la mousse.",
      "visualCue": {
        "primaryTarget": "Une pâte jade-verte uniformément profonde sans stries de farine blanche ou jaune pâle, lisse, épaisse et encore aérée avec de grandes bulles visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries jaunes pâles ou des poches de farine blanche encore visibles dans la pâte.",
            "action": "Plier 3-4 fois de plus, en ciblant les zones non intégrées."
          },
          {
            "state": "Perfect",
            "description": "Même vert jade partout. Batter tombe de la spatule dans un ruban épais. Le volume est toujours maintenu — non dégonflé.",
            "action": "Verser immédiatement dans la casserole préparée."
          },
          {
            "state": "Overdone",
            "description": "Le battement est devenu mince et versable, après avoir perdu sa mousse; la couleur peut être vert très foncé.",
            "action": "Faire cuire de toute façon — la castelle sera plus dense mais toujours bonne; la saveur de matcha sera excellente."
          }
        ]
      },
      "feelCue": "La pâte pliée doit se sentir substantielle et mousseuse – elle résiste doucement à la spatule, un signe la mousse est toujours intacte, et tombe dans les vagues lourdes plutôt que de verser."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "castella_batter"
      ],
      "outputState": "baked_castella",
      "instructions": "Ligner une boîte de pain de 21 x 10 cm avec du papier à cuisson (parchemin), laissant le surplomb de tous les côtés. Verser la pâte et tapoter doucement l'étain sur le comptoir deux fois pour libérer de grandes bulles d'air. Lancez une brochette à travers la pâte dans un mouvement de figure-huit pour briser toute bulle visible amas. Cuire à 160 C (320 F) pendant 50-60 minutes, en tournant une fois à 30 minutes. Le haut doit être brun foncé et profond, ce qui est correct pour la castelle, et non un signe de cuisson excessive. Une brochette insérée au centre devrait sortir propre.",
      "visualCue": {
        "primaryTarget": "Un haut brun acajou foncé en forme de dôme qui s'est stabilisé au niveau du dos (pas fissuré), avec des côtés légèrement brunis visibles à travers le papier.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le dessus est brun pâle; la brochette sort humide; le centre s'agite lorsque l'étain est déplacé.",
            "action": "Retourner au four 10 minutes de plus; couvrir de papier si le dessus est déjà sombre."
          },
          {
            "state": "Perfect",
            "description": "Top noir, brun acajou qui ressort quand pressé doucement. La brochette émerge propre. Les côtés s'éloignent légèrement du papier. Le gâteau sent le miel et le thé vert.",
            "action": "Retirer du four et l'envelopper immédiatement dans un film de collage à chaud."
          },
          {
            "state": "Overdone",
            "description": "Le dessus a craqué et est très sombre avec une légère odeur brûlée.",
            "action": "Étalez la croûte supérieure avec un couteau à pain; l'intérieur sera excellent."
          }
        ]
      },
      "feelCue": "En appuyant sur le dessus d'une castelle parfaite, on a l'impression de presser un coussin de canapé ferme et profond — il compresse sous votre doigt et ressort avec une élasticité douce, la vapeur parfumée au miel s'élevant à travers le papier."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser reposer",
      "inputs": [
        "baked_castella"
      ],
      "outputState": "finished_castella",
      "instructions": "Immédiatement après avoir retiré du four, lever la castelle par le surplomb de papier et envelopper l'ensemble du pain fermement dans un enveloppement en plastique tout en restant chaud. La vapeur piégée à l'intérieur crée la miette caractéristique humide et serrée de castelle authentique. Placer au réfrigérateur pendant au moins 1 heure (la nuit est meilleure). Couper en rectangles de 2 cm avec un couteau mouillé, essuyant la lame entre les coupes pour des bords propres.",
      "visualCue": {
        "primaryTarget": "Après refroidissement, la section transversale de la castelle révèle un intérieur vert jade profond avec une miette fine et uniforme et une ligne de croûte plus foncée distincte au sommet et à la base.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La croûte est ouverte et inégale avec de grands trous; la croûte extérieure n'a pas été fixée. Les tranches s'effondrent.",
            "action": "Retourner au réfrigérateur pendant une autre heure."
          },
          {
            "state": "Perfect",
            "description": "Dense, même, miettes vertes à grain fin. Découpe proprement avec un couteau mouillé. Humidifier au toucher, légèrement springy. La croûte sombre est fine et distincte.",
            "action": "Servir à température ambiante ou légèrement réfrigéré. Conserve 3 jours enveloppés à température ambiante."
          },
          {
            "state": "Overdone",
            "description": "Sur-reposé et séché — la miette est compacte et sèche, la croûte est dure.",
            "action": "Badigeonner les tranches avec un sirop léger (1:1 miel et eau chaude) et reposer 30 minutes avant de servir."
          }
        ]
      },
      "feelCue": "Une tranche de castelle reposée a un faible tackines du miel — il résiste légèrement à être arraché avant de donner proprement, avec une résistance springy, à grain fin contrairement à tout gâteau d'éponge occidentale."
    }
  ]
};
