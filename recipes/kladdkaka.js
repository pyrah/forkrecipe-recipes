export default {
  "repoId": "master_swedish_kladdkaka_001",
  "parentRepoId": null,
  "slug": "kladdkaka",
  "author": "ForkRecipe Kitchen",
  "title": "Kladdkaka",
  "description": "Un gâteau au fudge suédois a délibérément cuit sous-done — les bords ont mis dans une croûte fine et craquelée tandis que le centre reste dense, goeey, et presque texturé brut, mangé froid du réfrigérateur avec une poussière de sucre glace et un nuage de crème fouettée.",
  "cuisine": "Suédois",
  "culture": "Scandinave",
  "category": "desserts",
  "tags": [
    "végétarien",
    "suédois",
    "chocolat",
    "Fudgy",
    "scandinave",
    "Cuisson"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "1 hour 30 min",
  "ratioSystem": "bakers_percentage",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 0,
    "bitter": 3,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine à usage général",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre granulé",
      "ratioValue": 250,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Spice",
      "name": "Poudre de cacao non sucrée (procédé néerlandais)",
      "ratioValue": 60,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin",
      "ratioValue": 2,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Binder",
      "name": "Œufs (gros)",
      "ratioValue": 100,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Beurre non salé fondu et refroidi",
      "ratioValue": 120,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Extrait de vanille",
      "ratioValue": 3,
      "defaultUnit": "%",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Garnish",
      "name": "Sucre écrémé (sucre pulvérisé), pour servir",
      "ratioValue": 10,
      "defaultUnit": "%",
      "substitutions": []
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
        "ing_04"
      ],
      "outputState": "dry_mixture",
      "instructions": "Farine tamisée, poudre de cacao et sel dans un bol à mélanger. Ajouter le sucre et fouetter ensemble jusqu'à mélanger uniformément — le mélange sera sombre et légèrement moelleux. Il ne devrait pas y avoir de poches visibles de farine ordinaire ou de morceaux de cacao.",
      "visualCue": {
        "primaryTarget": "Poudre brun foncé uniforme sans stries. Léger et aéré du crible. Cohésif quand pincée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des stries de farine pâle visible ou des morceaux de cacao foncé dans le mélange.",
            "action": "Frottez encore une minute, appuyez sur n'importe quel morceau avec le fouet."
          },
          {
            "state": "Perfect",
            "description": "Même la couleur foncée, sans bosses, sent profondément le cacao et le sucre de caramel.",
            "action": "Ajouter les ingrédients humides."
          },
          {
            "state": "Overdone",
            "description": "Ne peut pas trop mélanger les ingrédients secs — procéder.",
            "action": "Continuez."
          }
        ]
      },
      "feelCue": "Pincez une petite quantité — le mélange sec devrait s'effondrer brièvement puis s'effondrer, comme un bon sol en vrac. Le cacao doit être entièrement visible comme une coloration brun foncé uniforme."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "dry_mixture",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "kladdkaka_batter",
      "instructions": "Faites un puits au centre des ingrédients secs. Ajouter les œufs, le beurre fondu (mais pas chaud) et la vanille. Mélanger avec une cuillère en bois ou une spatule jusqu'à ce qu'elle soit simplement combinée. La pâte sera épaisse, sombre et brillante. N'utilisez pas de mélangeur électrique; l'objectif est zéro air dans cette pâte.",
      "visualCue": {
        "primaryTarget": "Une pâte brune dense et très foncée qui coule lentement et à contrecœur de la cuillère. Gloire, lourde et brillante, comme une sauce au chocolat très épaisse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Poches sèches de farine encore visibles au fond ou aux bords du bol.",
            "action": "Plier doucement avec la spatule à incorporer — ne pas remuer vigoureusement."
          },
          {
            "state": "Perfect",
            "description": "Toujours sombre et brillant. Pas de taches sèches. Assez épais pour tenir un monticule lent lorsqu'il est tombé d'une cuillère.",
            "action": "Verser immédiatement dans la casserole préparée."
          },
          {
            "state": "Overdone",
            "description": "La batterie semble aérée ou plus légère — les œufs ont été surmenés et introduits dans l'air.",
            "action": "Procéder; il sera encore gooy dans le centre après la cuisson, juste fractionnellement moins de fumée."
          }
        ]
      },
      "feelCue": "Inclinez le bol — la pâte doit bouger très lentement, comme le miel froid. Il devrait se sentir lourd et résistant, rien comme une pâte à gâteau normale."
    },
    {
      "nodeId": "step_3",
      "action": "Cuire au four",
      "inputs": [
        "kladdkaka_batter"
      ],
      "outputState": "baked_kladdkaka",
      "instructions": "Verser la pâte dans une poêle à ressort de 20 cm (8 pouces) beurrée et à poudre de cacao. Cuire au four à 175 C (350 F) pendant exactement 15–17 minutes. Le kladdkaka se fait quand les bords sont fixés, craqués et fermes, et le centre continue de trembler de façon spectaculaire — comme une crème brûlée — quand la poêle est légèrement secouée. Une brochette sortira enduite de pâte fudgy du centre, et c'est exact.",
      "visualCue": {
        "primaryTarget": "Une croûte ferme et crépitée autour de l'extérieur, 4 cm du gâteau. Le centre se déplace toujours comme une seule masse de liquide lorsqu'il est bouché. La surface est mate et légèrement bombée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Tous les cakes y compris les bords. La surface semble humide et liquide.",
            "action": "Retourner au four pour 3 à 4 minutes de plus et regarder de près — la fenêtre entre underdone et parfait est étroite."
          },
          {
            "state": "Perfect",
            "description": "Réglé, bords cassés. Centre wobble. Un cure-dent dans le tiers extérieur sort propre; au centre il sort flou.",
            "action": "Laisser refroidir dans la poêle à température ambiante, puis réfrigérer pendant au moins 1 heure avant de servir."
          },
          {
            "state": "Overdone",
            "description": "Le centre ne tremble plus. La brochette sort propre du milieu.",
            "action": "C'est maintenant un gâteau au chocolat très humide, pas un kladdkaka — servir avec de la crème et l'appeler comme il est."
          }
        ]
      },
      "feelCue": "Tenez la grille du four et donnez à la poêle la plus douce possible agiter côte à côte — vous devriez voir un voyage d'ondulation lent et synchronisé à travers le centre. Si les bords se déchirent, il faut plus de temps; si rien ne bouge, c'est fini."
    },
    {
      "nodeId": "step_4",
      "action": "Réfrigérer",
      "inputs": [
        "baked_kladdkaka",
        "ing_08"
      ],
      "outputState": "finished_kladdkaka",
      "instructions": "Laisser refroidir complètement dans la poêle à température ambiante — au moins 30 minutes — avant de réfrigérer. Le centre de fumée se met comme il refroidit mais reste dense et collant. Réfrigérer pendant au moins 1 heure; le kladdkaka froid est la température de service correcte. Relâchez la forme printanière, époussetez fortement le dessus avec du sucre glaçant à travers un tamis et servez dans des coins fins avec de la crème légèrement fouettée.",
      "visualCue": {
        "primaryTarget": "Un gâteau plat et crépité avec une chute de neige blanche de sucre glace. La coupe transversale montre une croûte mince qui laisse place immédiatement à un centre sombre, dense et à peine fixé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre est encore liquide et coule du visage coupé — encore trop chaud.",
            "action": "Réfrigérer encore 30 minutes."
          },
          {
            "state": "Perfect",
            "description": "Froid, ferme à l'extérieur, fin à l'intérieur. Une cuillère traînée à travers laisse une gouge propre qui se remplit très lentement.",
            "action": "Poussière avec du sucre glace et servir."
          },
          {
            "state": "Overdone",
            "description": "Le gâteau s'est entièrement durci — des coupes comme un brownie jusqu'au bout.",
            "action": "Chauffer les tranches individuelles pendant 10 secondes dans le micro-ondes pour restaurer un peu de goeyness."
          }
        ]
      },
      "feelCue": "Un kladdkaka froid fini devrait se sentir presque assez dense pour être une truffe dans votre bouche — flou mais pas gras, cohésif mais pas caoutchouteux. Il devrait se dissoudre lentement sur la langue plutôt que de mâcher."
    }
  ]
};
