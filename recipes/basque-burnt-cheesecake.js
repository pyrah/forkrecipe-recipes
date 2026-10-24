export default {
  "repoId": "master_spanish_basque_burnt_cheesecake_001",
  "parentRepoId": null,
  "slug": "basque-burnt-cheesecake",
  "author": "ForkRecipe Kitchen",
  "title": "Cheesecake Basque Burnt",
  "description": "Une crème à la crème cuite à la chaleur furieuse jusqu'à ce que le haut scorse une acajou profonde — caramélisée, presque amère — tandis que le centre reste à peine fixé, tremblant comme un flan froid à température ambiante.",
  "cuisine": "Espagnol",
  "culture": "Basque",
  "category": "desserts",
  "tags": [
    "végétarien",
    "Sans gluten",
    "Cake au fromage",
    "Basque",
    "Espagnol",
    "Cuisson"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "1 hour 20 min",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 3,
    "salty": 2,
    "sour": 2,
    "bitter": 2,
    "umami": 1,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Dairy",
      "name": "Fromage à la crème plein gras, température ambiante",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 25,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Œufs (grands), température ambiante",
      "ratioValue": 20,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Dairy",
      "name": "Crème lourde (35% de matières grasses)",
      "ratioValue": 30,
      "defaultUnit": "%",
      "substitutions": [
        "crème fraîche"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Farine à usage général",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": [
        "fécule de maïs (utiliser moitié)"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 0.5,
      "defaultUnit": "%",
      "substitutions": [
        "pâte de vanille"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 0.5,
      "defaultUnit": "%",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Crémer",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_07"
      ],
      "outputState": "creamed_base",
      "instructions": "Battre le fromage à la crème avec du sucre et du sel dans un mélangeur de stand avec l'attache de palette à vitesse moyenne — ou avec un mélangeur à main — jusqu'à ce que le mélange soit complètement lisse, moelleux et léger, environ 3 minutes. Dégâtez le bol deux fois. Aucune bosse n'est acceptable ici: le fromage à la crème froide laisse des grumeaux qui ne se dissolvent jamais complètement au four.",
      "visualCue": {
        "primaryTarget": "Blanc, aéré et rubané — tient une forme douce quand la pagaie est levée mais revient lentement en elle - même.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Petits morceaux blancs visibles; le mélange est granuleux.",
            "action": "Continuer à battre — les morceaux signifient que le fromage était trop froid. Encore deux minutes."
          },
          {
            "state": "Perfect",
            "description": "Soyeux, uniformément pâle, sans grain. Des chutes de la pagaie dans un ruban épais.",
            "action": "Ajouter les œufs un à la fois."
          },
          {
            "state": "Overdone",
            "description": "Le mélange est devenu très moelleux et aéré — trop d'air fera bouillir le cheesecake et craquer.",
            "action": "Passez à la vitesse la plus basse pour les étapes restantes."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité entre le pouce et l'index — il devrait se sentir comme de la crème du visage froid: lisse, pas de grain."
    },
    {
      "nodeId": "step_2",
      "action": "Mixer",
      "inputs": [
        "creamed_base",
        "ing_03",
        "ing_06"
      ],
      "outputState": "egg_enriched_batter",
      "instructions": "Ajouter les œufs un à la fois à faible vitesse, mélanger jusqu'à juste incorporé avant d'ajouter le suivant. Ajouter la vanille avec l'oeuf final. Ne précipitez pas cette étape — ajouter des œufs trop rapidement provoque la rupture de l'émulsion. Gratter le bol après chaque ajout.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse et uniforme sans stries de jaune. Légèrement plus fluide que la base crémeuse, avec une teinte jaune pâle.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Bandes jaunes visibles de jaune d'œuf non mélangées dans la pâte.",
            "action": "Grattez et mélangez en bas jusqu'à ce que les stries disparaissent."
          },
          {
            "state": "Perfect",
            "description": "Homogénéité, couleur crème pâle. Pas de stries, pas de bulles, coule dans un ruisseau lent.",
            "action": "Ajouter la crème et la farine."
          },
          {
            "state": "Overdone",
            "description": "Les battements ont l'air caillés ou granuleux — l'œuf a été ajouté trop vite.",
            "action": "Continuer à mélanger sur le milieu — dans la plupart des cas, il reviendra ensemble; sinon, réchauffer brièvement le bol sur un bain d'eau."
          }
        ]
      },
      "feelCue": "Inclinez le bol — la pâte doit couler paresseusement et uniformément, comme une rivière de crème qui bouge lentement."
    },
    {
      "nodeId": "step_3",
      "action": "Fouetter",
      "inputs": [
        "egg_enriched_batter",
        "ing_04",
        "ing_05"
      ],
      "outputState": "cheesecake_batter",
      "instructions": "Farine tamisée directement dans la pâte. Ajouter la crème lourde. fouetter doucement à la main jusqu'à ce que tout soit incorporé — n'utilisez pas le mélangeur électrique à ce stade. La pâte doit être mince, versable et complètement lisse. Plongez dans un tamis à mailles fines dans une cruche pour le verser facilement.",
      "visualCue": {
        "primaryTarget": "Une pâte soyeuse et fluide qui verse comme de la crème lourde. Pas de grumeaux, pas de poches de farine. Presque translucide à la surface.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches de farine visibles comme taches blanches ou stries.",
            "action": "Whisk jusqu'à ce qu'il soit complètement incorporé, puis souche."
          },
          {
            "state": "Perfect",
            "description": "Doux, brillant, coule dans un ruisseau intact. L'entraînement par tamis ne produit aucun résidu.",
            "action": "Verser dans une poêle parcheminée et cuire immédiatement."
          },
          {
            "state": "Overdone",
            "description": "Beaucoup de petites bulles à travers la surface.",
            "action": "Laisser reposer 5 minutes, puis écrémer les bulles avec une cuillère avant de cuire."
          }
        ]
      },
      "feelCue": "Exécutez la pâte hors d'une cuillère — elle devrait s'étaler dans une mince feuille, même, enrober l'arrière de la cuillère dans un film translucide."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire au four",
      "inputs": [
        "cheesecake_batter"
      ],
      "outputState": "baked_cheesecake",
      "instructions": "Préchauffer le four à 230 C (450 F) conventionnel, ou 210 C (410 F) ventilateur. Lignez une poêle à ressort de 20 cm (8 pouces) avec deux feuilles de parchemin, les poussant vers le haut des côtés - le papier va se plisser et boucler et c'est parfaitement traditionnel. Versez la pâte. Cuire au four pendant 28 à 32 minutes, jusqu'à ce que le sommet soit profondément brûlé — presque brûlé — avec un centre d'acajou sombre et que tout l'intérieur tremble considérablement lorsque la poêle est bouchée.",
      "visualCue": {
        "primaryTarget": "Le dessus est uniformément brun foncé à noir acajou, avec des bords ambrés plus légers. Tout le gâteau au fromage grouille comme un étang immobile quand la poêle est tapotée — le centre se déplace comme une seule pièce, non pas sloshing.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le dessus est en or pâle ou beige. Pas de brûlure. L'intérieur flotte visiblement lorsqu'il est déplacé.",
            "action": "Retourner au four 5 minutes de plus — le haut brûlé n'est pas une erreur, c'est la recette."
          },
          {
            "state": "Perfect",
            "description": "Top est acajou foncé avec des traces de noir aux pics. Les bords sont fixés, le centre oscille en une seule masse. Le parchemin a gonflé et carbonisé aux extrémités.",
            "action": "Laisser refroidir complètement à température ambiante, au moins 1 heure, avant de refroidir."
          },
          {
            "state": "Overdone",
            "description": "Le dessus est uniformément noir et les bords se sont éloignés du papier. Jiggles seulement légèrement.",
            "action": "Grattez la couche supérieure si elle est vraiment brûlée en cendres. L'intérieur est probablement encore crépuscule et délicieux."
          }
        ]
      },
      "feelCue": "Porter des gants de four, tenir la poêle et lui donner un petit sac à dos rapide — le centre devrait se courber dans des vagues lentes et synchrones, comme un lit d'eau qui se dépose. Ce tourbillon est la promesse d'un intérieur crépuscule."
    },
    {
      "nodeId": "step_5",
      "action": "Réfrigérer",
      "inputs": [
        "baked_cheesecake"
      ],
      "outputState": "finished_cheesecake",
      "instructions": "Laisser refroidir le cheesecake dans la poêle à température ambiante pendant au moins 1 heure — il se dégonflera considérablement au fur et à mesure qu'il refroidit, développant le centre caractéristique coulé. Réfrigérer pendant au moins 3 heures (la nuit est idéale) pour permettre à la crème de se régler complètement. Servir à la température ambiante pour la texture la plus crépuscule : retirer du réfrigérateur 30 minutes avant de trancher.",
      "visualCue": {
        "primaryTarget": "Centre ridiculisé avec une surface fêlée sombre, presque comme un soufflé dégonflé. L'intérieur de couleur crème est visible aux coupes, avec un centre légèrement translucide, à peine fixé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'intérieur est encore liquide ou coule du visage coupé.",
            "action": "Retourner au réfrigérateur pendant au moins 2 heures de plus. Un gâteau au fromage basque est encore à peine réglé, vous avez besoin du froid pour l'atteindre."
          },
          {
            "state": "Perfect",
            "description": "Slices propres avec un couteau chaud. L'intérieur est crémeux et tient à peine sa forme sur l'assiette, comme de la crème pâtissière très froide.",
            "action": "Servir à température ambiante, en quartiers, sans garniture nécessaire."
          },
          {
            "state": "Overdone",
            "description": "L'intérieur est caoutchouteux et sec — pas de crème.",
            "action": "Surcuite; servir avec une cuillère de crème fraiche pour restaurer la richesse."
          }
        ]
      },
      "feelCue": "Une tranche parfaitement réfrigérée devrait céder à la pression douce d'une fourchette sans résistance, se séparer comme du beurre froid, ne jamais rebondir."
    }
  ]
};
