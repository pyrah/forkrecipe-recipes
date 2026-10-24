export default {
  "repoId": "master_chinese_tea_eggs_001",
  "parentRepoId": null,
  "slug": "tea-eggs",
  "author": "ForkRecipe Kitchen",
  "title": "Oeufs de thé (Chá Yè Dàn)",
  "description": "Oeufs durs fissurés et mijotés dans un brassage de thé noir, soja, anis étoilé et cannelle, développant un beau motif de marbre craqué et une saveur profondément salée, fumée de thé.",
  "cuisine": "Chinois",
  "culture": "Nourriture de rue chinoise",
  "category": "eggs",
  "tags": [
    "œufs",
    "Chinois",
    "thé",
    "marbré",
    "anis des étoiles",
    "Alimentation de rue"
  ],
  "difficulty": 1,
  "activeTime": "15 min",
  "totalTime": "5 hr",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 0,
    "bitter": 2,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Gros œufs (température ambiante)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Thé noir brassé fort (Assam ou Yunnan, double force)",
      "ratioValue": 80,
      "defaultUnit": "parts",
      "substitutions": [
        "pu-erh thé pour une saveur plus terreuse"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "sauce de soja foncé",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "sauce de soja légère",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Anise d'étoile (en entier, 3-4 pièces)",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Bâton de cannelle",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "écorce de cassie"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Spice",
      "name": "Girofles entiers (3-4)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Maïs poivré sichuan (1 c. à thé, légèrement broyé)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Sweetener",
      "name": "Sucre de roche (petite pièce) ou sucre blanc",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Aromatic",
      "name": "Peau de mandarine séchée (chen pi) ou d'orange fraîche",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Faire bouillir",
      "inputs": [
        "ing_01"
      ],
      "outputState": "hard_boiled_eggs",
      "instructions": "Mettre les œufs dans une seule couche dans une casserole. Couvrir d'eau froide de 2 cm. Porter à ébullition à feu moyen-vif. Une fois bouillant, couvrir et retirer du feu. Laisser reposer exactement 10 minutes, puis transférer dans un bain de glace pendant 5 minutes. Les œufs doivent être entièrement bouillis avec un anneau gris au jaune — ils seront mijotés plus loin et devront commencer à cuire complètement.",
      "visualCue": {
        "primaryTarget": "Un jaune blanc ferme et clair, sans centre translucide et sans anneau vert-gris au bord du jaune.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Yolk est toujours en rogne ou jammy au centre ; le blanc est légèrement agité.",
            "action": "Retour à l'eau bouillante pendant 2 minutes."
          },
          {
            "state": "Perfect",
            "description": "Le jaune entièrement serti est jaune d'or vif sans anneau gris; le blanc est ferme et s'éloigne proprement de la coquille lorsqu'il est pelé.",
            "action": "Procédez immédiatement à la fissuration des coquilles."
          },
          {
            "state": "Overdone",
            "description": "Yolk a un anneau gris-vert et une odeur sulfureuse; les blancs sont caoutchouteux.",
            "action": "Procéder de toute façon — le liquide de braisage masquera le soufre et améliorera la saveur."
          }
        ]
      },
      "feelCue": "Les œufs durs, frais provenant du bain de glace, se sentent solides et frais à travers la coquille, sans tache molle lorsqu'ils sont pressés doucement."
    },
    {
      "nodeId": "step_2",
      "action": "Crack",
      "inputs": [
        "hard_boiled_eggs"
      ],
      "outputState": "cracked_eggs",
      "instructions": "En utilisant l'arrière d'une cuillère, tapotez chaque œuf sur toute sa surface pour créer un réseau fin de fissures à travers la coquille. L'objectif est de fendre la coquille sans la retirer — la coquille doit rester sur pour maintenir sa forme pendant la mijotation. Les fissures doivent être denses et serrées sur toute la surface, comme une glaçure fissurée sur une pièce en céramique.",
      "visualCue": {
        "primaryTarget": "Une toile dense, même de fissures de la ligne de cheveux couvrant toute la surface de la coquille sans gros morceaux enlevés ou manquants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les fissures sont clairsemées et largement espacées; il reste de larges sections de coquilles non craquées; le liquide de braisement ne pénètre pas bien.",
            "action": "Continuez à taper partout — prêtez une attention particulière aux extrémités et à l'équateur de l'œuf."
          },
          {
            "state": "Perfect",
            "description": "La coque ressemble à une glaçure fissurée : dense, fine, même des fractures sur toute la surface. La coquille est intacte, mais l'œuf est visible en dessous.",
            "action": "Abaissez soigneusement dans le liquide de graissage."
          },
          {
            "state": "Overdone",
            "description": "La coquille s'est brisée en gros morceaux, exposant le blanc d'œuf nu.",
            "action": "Enlevez les morceaux de coquilles; les zones exposées absorberont plus de couleur et le motif sera irrégulier mais encore beau."
          }
        ]
      },
      "feelCue": "Le fait de taper l'œuf avec une cuillère devrait produire un son creux qui se transforme en un bourbier plus terne lorsque la coquille se fracture."
    },
    {
      "nodeId": "step_3",
      "action": "Infuser",
      "inputs": [
        "cracked_eggs",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "simmered_tea_eggs",
      "instructions": "Combinez le thé noir fort, les deux sauces de soja, l'anis étoilé, la cannelle, les girofles, les grains de poivre Sichuan, le sucre et l'écorce de mandarine dans un pot assez grand pour tenir tous les œufs dans une seule couche. Porter à mijoter et ajouter les œufs fissurés. Laisser mijoter doucement pendant 20 minutes — les coquilles ne doivent pas rebondir. Retirer du feu, laisser refroidir à température ambiante dans le liquide, puis réfrigérer dans le liquide de cuisson pendant au moins 4 heures, ou nuit pour la couleur et la saveur les plus profondes.",
      "visualCue": {
        "primaryTarget": "Oeufs immergés dans un liquide brun-thé foncé, libérant avec des épices visibles; après avoir mijoté, la coquille montre un assombrissement aux fissures.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après seulement 1-2 heures de trempe, le motif en marbre est faible et la saveur est douce soja avec peu de profondeur.",
            "action": "Retourner au réfrigérateur pendant au moins 2-3 heures de plus; la nuit est fortement préférée."
          },
          {
            "state": "Perfect",
            "description": "Le liquide de braisage s'est obscurci jusqu'à une acajou profonde; les oeufs sont un riche brun-noir aux fissures avec leur blanc original montrant dans le motif entre.",
            "action": "Peler soigneusement pour révéler le motif de marbre."
          },
          {
            "state": "Overdone",
            "description": "Après plus de 48 heures, le blanc d'œuf est devenu trop salé et la texture légèrement caoutchouteuse du soja.",
            "action": "Retirer du liquide; les œufs sont encore comestibles, juste très assaisonnés, en couple avec du riz non assaisonné."
          }
        ]
      },
      "feelCue": "Après la nuit, le liquide de braise sent comme une tasse intensément salée de thé épicé — le parfum d'anis étoilé et de pelure de mandarine s'élève à travers le soja."
    },
    {
      "nodeId": "step_4",
      "action": "Peler",
      "inputs": [
        "simmered_tea_eggs"
      ],
      "outputState": "finished_tea_eggs",
      "instructions": "Peler chaque oeuf sous l'eau froide courante, enlevant les fragments de la coquille et la membrane interne ensemble. La surface révélée devrait montrer un motif de marbre frappant : coloration brun foncé-noir le long de chaque ligne de fissures contre l'ambre pâle du blanc d'oeuf teint. Servir à la température ambiante ou au froid.",
      "visualCue": {
        "primaryTarget": "Un beau motif de marbre crépité de nervures brun foncé contre un blanc tacheté d'ambre, le jaune un beige doré pâle de la saumure absorbée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le motif de marbre est faible et gris clair plutôt que brun foncé; le blanc d'œuf est pâle et à peine assaisonné.",
            "action": "Le motif révèle le temps d'inclinaison — très léger signifie beaucoup plus court que le temps recommandé; re-step dans le liquide de braisage chaud pendant 2 heures de plus."
          },
          {
            "state": "Perfect",
            "description": "De profondes veines d'acajou contrastent avec le blanc d'œuf brun-ambre; le jaune est pâle et délicatement aromatisé avec du thé et des épices. Une coupe transversale est visuellement frappante.",
            "action": "Servir comme une collation, une garniture de ramen ou un composant de bento."
          },
          {
            "state": "Overdone",
            "description": "Le blanc d'oeuf est uniformément brun foncé avec un contraste minimal en marbre; le blanc est très ferme et assez salé.",
            "action": "Couper et servir sur du riz à la vapeur ou des conges pour équilibrer l'assaisonnement intense."
          }
        ]
      },
      "feelCue": "La surface d'un œuf de thé parfaitement abîmé est lisse et légèrement cireuse; le blanc d'œuf est ferme mais pas caoutchouteux, et le millimètre extérieur porte la saveur complexe du liquide de braisage."
    }
  ]
};
