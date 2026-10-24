export default {
  "repoId": "master_japanese_furikake_001",
  "parentRepoId": null,
  "slug": "furikake",
  "author": "ForkRecipe Kitchen",
  "title": "Furikake",
  "description": "Un éparpillement de nori grillé, de graines de sésame, de katsuobushi et de sucre-sel qui transforme un bol de riz uni en quelque chose que vous voulez manger lentement. Chaque pince offre une mosaïque de textures — papier, croquant, soyeux — et une intensité d'umami qui persiste longtemps après le dernier grain.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "condiments",
  "tags": [
    "furikake",
    "Japonais",
    "assaisonnement",
    "nori",
    "riz"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "20 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 0,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Umami",
      "name": "Katsuobushi (flacons debonito)",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "crevettes sakura séchées",
        "anchois séchés finement hachés"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Feuilles de nori",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Graines de sésame blanc",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": [
        "graines de sésame noir",
        "sésame mélangé"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": [
        "Sel flocé, broyé"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Sweetener",
      "name": "Sucre de canne",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Umami",
      "name": "sauce soja",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "tamari"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_03"
      ],
      "outputState": "toasted_sesame",
      "instructions": "Placer les graines de sésame dans une poêle sèche à feu moyen. Agiter ou remuer constamment — les graines de sésame brûlent en quelques secondes et vont de l'or au noir sans avertissement. Toast jusqu'à ce que les graines soient un or clair uniforme et que plusieurs commencent à poper audiblement, environ 3-4 minutes. Tuez-les immédiatement sur une assiette pour arrêter la cuisson.",
      "visualCue": {
        "primaryTarget": "Les graines doivent être d'une couleur dorée uniforme et chaude, pas blanche pâle, pas brun foncé. Quelques graines se sont ouvertes et la cuisine sent l'huile de sésame tiède.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les graines sont encore blanches et fondues. Pas encore de parfum.",
            "action": "Continuer à griller à feu moyen. Continuez à secouer la poêle."
          },
          {
            "state": "Perfect",
            "description": "Chaud doré, soufflé, parfumé. L'arôme de noix remplit la cuisine. Un ou deux semblent un peu plus sombres — un signe la chaleur est droite.",
            "action": "Astuce immédiatement sur une assiette fraîche. Ne pas laisser dans la poêle chaude."
          },
          {
            "state": "Overdone",
            "description": "Les graines sont brunes et certaines sont sombres. Une odeur de sésame amère et presque brûlée.",
            "action": "Jeter et recommencer: le sésame brûlé ne peut être sauvé et rendra le furikake amer."
          }
        ]
      },
      "feelCue": "Frottez quelques graines grillées entre vos doigts — elles devraient écraser facilement et libérer immédiatement un parfum chaud et huileux."
    },
    {
      "nodeId": "step_2",
      "action": "Toast",
      "inputs": [
        "ing_01",
        "ing_06",
        "ing_04",
        "ing_05"
      ],
      "outputState": "seasoned_katsuobushi",
      "instructions": "Mélanger le katsuobushi, la sauce soja, le sel et le sucre dans la même poêle à feu moyen-doux. Mélanger et remuer en continu comme la sauce de soja et ensuite s'évaporer progressivement, le sucre caramélise légèrement, et les flocons de bonite sèchent et se séparent d'une croûte humide à une pile molle et molle. Cela prend 4-5 minutes. Les flocons sont faits lorsqu'ils se sentent secs au toucher et ont tourné du rose pâle à un brun-brun plus profond.",
      "visualCue": {
        "primaryTarget": "Katsuobushi se transforme à partir d'une masse humide et emboîtée en une dispersion lâche et moelleuse de brins secs et légèrement caramélisés. La couleur s'approfondit de rose pâle à bronzage chaud.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les flocons s'agrippent encore et se sentent humides. sauce soja encore visiblement humide dans la poêle.",
            "action": "Continuez à remuer sur la chaleur — l'humidité doit s'évaporer complètement pour que le furikake reste sec."
          },
          {
            "state": "Perfect",
            "description": "Complètement séparés, brins moelleux. Sécher et léger au toucher. Un léger arôme caramel-soy. La poêle a l'air sèche.",
            "action": "Retirer du feu et refroidir complètement avant de mélanger avec le nori."
          },
          {
            "state": "Overdone",
            "description": "Les flocons commencent à s'assombrir, s'assombrissant dans les taches et sentant le soja brûlé. Devenant raide.",
            "action": "Retirer immédiatement du feu. Étaler sur une assiette froide. Une certaine amertume, mais probablement encore utilisable."
          }
        ]
      },
      "feelCue": "Une pincée de katsuobushi fini devrait se sentir presque sans poids — sèche et wispy, sans collants. Si vos doigts se sentent humides et que les flocons s'accrochent, continuez à cuisiner."
    },
    {
      "nodeId": "step_3",
      "action": "Chop",
      "inputs": [
        "ing_02"
      ],
      "outputState": "nori_flakes",
      "instructions": "Empilez les feuilles de nori grillées et coupez-les en bandes minces avec des ciseaux, puis coupez-les dans le sens transversal en petits carrés ou en tranches d'environ 5 mm. Alternativement, écraser les feuilles de nori à la main en morceaux irréguliers. Les morceaux doivent être assez petits pour être distribués uniformément mais suffisamment grands pour apporter une texture distincte dans chaque bouche. Ne moudre pas le nori en poudre — vous voulez la présence, pas l'uniformité.",
      "visualCue": {
        "primaryTarget": "Carrés et ardues noir-vert foncé irréguliers, d'environ 3 à 7 mm. Pas de grandes feuilles intactes. Pas de poussière fine — morceaux visibles avec les bords.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pièces sont trop grandes — taille de vignette ou plus grandes. Ils domineront chaque cuillère plutôt que de la distribuer uniformément.",
            "action": "Couper ou écraser plus petit."
          },
          {
            "state": "Perfect",
            "description": "Une mosaïque irrégulière de petites pièces de nori foncé qui se répartiront uniformément à travers les autres ingrédients. Uniforme dans leur irrégularité.",
            "action": "Combiner avec les autres ingrédients."
          },
          {
            "state": "Overdone",
            "description": "Nori a été broyé à une poudre fine — il s'écrasera et ne contribuera pas à la texture.",
            "action": "Ajoutez une feuille fraîche déchirée à des morceaux plus grands pour ramener la texture."
          }
        ]
      },
      "feelCue": "Un morceau de nori coupé entre les doigts doit se sentir papier et croustillant, se casser proprement sans tomber en poussière, ce qui signifie qu'il est bien sec et grillé."
    },
    {
      "nodeId": "step_4",
      "action": "Assemblage",
      "inputs": [
        "toasted_sesame",
        "seasoned_katsuobushi",
        "nori_flakes"
      ],
      "outputState": "finished_furikake",
      "instructions": "Mélanger les graines de sésame grillées, les katsuobushi séchés et les morceaux de nori dans un bol. Enroulez doucement à distribuer — ne remuez pas agressivement ou le nori se brisera en poussière. Goûtez et ajustez le sel si nécessaire. Transférer dans un contenant hermétique ou un pot en verre. Furikake se conserve à température ambiante dans un contenant hermétique jusqu'à 2 semaines, mais est plus parfumé dans les 3 premiers jours.",
      "visualCue": {
        "primaryTarget": "Un mélange varié et animé visuellement: des shards nori foncés, des graines de sésame pâle et des brins de tan katsuobushi moelleux dispersés. Aucun ingrédient ne doit dominer visuellement.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les ingrédients sont toujours dans des piles séparées, pas combinés.",
            "action": "Mélanger doucement jusqu'à distribution uniforme."
          },
          {
            "state": "Perfect",
            "description": "Une mosaïque de couleurs et de textures. Chaque cuillère contient les trois composants. L'arôme est grillé, océanique et légèrement sucré.",
            "action": "Conserver dans un contenant hermétique. Servir généreusement sur du riz chaud."
          },
          {
            "state": "Overdone",
            "description": "Le surmélange a brisé le nori en poussière et le katsuobushi en fragments. La texture est perdue.",
            "action": "La saveur est encore excellente. Utiliser tel quel — le manque de texture est la seule perte."
          }
        ]
      },
      "feelCue": "Une pincée entre les doigts devrait avoir de la variété: quelques graines de sésame dure, un peu de bonito léger, un peu de nori. Si tout est uniforme, il a été mélangé trop agressivement."
    }
  ]
};
