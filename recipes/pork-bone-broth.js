export default {
  "repoId": "master_chinese_pork_bone_broth_001",
  "parentRepoId": null,
  "slug": "pork-bone-broth",
  "author": "ForkRecipe Kitchen",
  "title": "Broth de porc",
  "description": "Un bouillon cantonais d'une clarté cristalline et d'une profondeur extraordinaire, obtenu en blanchissant méticuleusement les os et en mijotant au point précis où la convection soulève le collagène, mais ne trouble jamais le liquide.",
  "cuisine": "Chinois",
  "culture": "Cantonais",
  "category": "stocks",
  "tags": [
    "bouillon",
    "porc",
    "cantonais",
    "Chinois",
    "stock",
    "collagène",
    "Cuisson lente"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "5 hr",
  "ratioSystem": "parts",
  "stars": 1124,
  "forks": 88,
  "contributors": 36,
  "license": "CC-BY-SA",
  "createdAt": "2024-12-10",
  "updatedAt": "2025-05-20",
  "flavorRadar": {
    "sweet": 1,
    "salty": 1,
    "sour": 0,
    "bitter": 0,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Ossements du cou de porc ou mandrins",
      "ratioValue": 50,
      "defaultUnit": "parts",
      "substitutions": [
        "côtes de porc",
        "Trotters de porc"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Côtes arrière de porc (pour la gélatine)",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Liquid",
      "name": "Eau froide",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Gingembre frais (en tranches épaisses, non pelées)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignon de printemps / pétoncle (ensemble)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Solvent",
      "name": "Vin de riz shaoxant",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "sherry sec"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanch",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03"
      ],
      "outputState": "blanched_bones",
      "instructions": "Placer tous les os dans une grande casserole et couvrir d'eau froide. Porter à ébullition à feu vif et faire bouillir vigoureusement pendant 5 minutes. Vous verrez de grandes quantités de scum gris (protéines sanguines et impuretés) s'accumuler à la surface. Égoutter les os et les rincer individuellement sous l'eau froide, en enlevant tous les dépôts gris. Nettoie aussi le pot. Cette étape de blanchiment est la technique la plus importante pour obtenir un bouillon cantonais clair et propre.",
      "visualCue": {
        "primaryTarget": "Après blanchage et rinçage, les os doivent être visiblement propres et légèrement roses, sans dépôts brun-gris qui s'accrochent à eux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les os sont encore attachés à des ordures brun-gris. L'ébullition n'a pas duré assez longtemps pour purger complètement les protéines sanguines.",
            "action": "Faites bouillir encore 3 à 5 minutes et rincez à nouveau soigneusement."
          },
          {
            "state": "Perfect",
            "description": "Des os propres, blancs rosés. Pas de racaille visible. L'eau bouillante était grise et trouble — ce museau est maintenant jeté. Les os sentent propre et légèrement porcin.",
            "action": "Transférer dans un pot propre et commencer à mijoter lentement."
          },
          {
            "state": "Overdone",
            "description": "Des os bouillis trop longtemps dans la blanche (15+ minutes) — un certain collagène s'est déjà libéré dans l'eau trouble.",
            "action": "Rincez bien et continuez. Le bouillon sera toujours excellent."
          }
        ]
      },
      "feelCue": "Courez vos doigts le long d'un os blanchi et rincé. Il doit se sentir lisse et propre, sans dépôts collants ou glissants. La surface osseuse devrait se sentir presque crayeuse dans les endroits où la moelle a commencé à fondre."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "blanched_bones",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "simmered_broth",
      "instructions": "Retournez les os rincés dans le pot propre. Couvrir d'eau froide fraîche et laisser mijoter doucement à feu moyen. À l'approche de mijoter, écumer toute mousse restante de la surface. Ajouter les tranches de gingembre, les pétoncles entiers et le vin Shaoxing. Réduisez à la plus basse mijotée possible — la surface doit montrer des ondulations paresseuses et des bulles occasionnelles aux bords, mais jamais un ébullition. Un stock bouillant devient nuageux; un stock mijotant reste clair. Maintenir cette température de 3,5 à 4 heures.",
      "visualCue": {
        "primaryTarget": "Un bouillon doré-ambre avec des ondulations de surface paresseuses et une activité de bulles uniquement bord. Le liquide doit être de plus en plus doré et translucide, jamais gris ou gris.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le papillon est encore très pâle et mince à 2 heures. Le goût est léger et aqueux. Gélatine non encore extraite.",
            "action": "Continuez à mijoter. Le collagène de porc a besoin d'au moins 3 heures à mijoter doucement."
          },
          {
            "state": "Perfect",
            "description": "Ambre dorée, claire ou presque claire. Mouvement superficiel paresseux seulement. Goûte profondément porcin et rond. Lorsqu'une petite quantité est refroidie sur une cuillère et réfrigérée, elle se met à une gelée légère.",
            "action": "La souche et la saison."
          },
          {
            "state": "Overdone",
            "description": "Le bouillon a bouilli au lieu de mijoter, il est gris et gris. Ou mijoté si longtemps, il a diminué de plus de la moitié.",
            "action": "Sourire immédiatement. La saveur sera bonne même si la clarté est disparue. Utiliser pour le braisage plutôt que des soupes claires."
          }
        ]
      },
      "feelCue": "Après 3 heures de cuisson correcte, le bouillon doit sentir comme du porc concentré et sucré — un umami propre et presque caramel avec le gingembre apportant une note verte chaude. Pas de gamines, pas d'odeurs de foie. Si ça sent le gamy, le blanching était insuffisant."
    },
    {
      "nodeId": "step_3",
      "action": "Poignée",
      "inputs": [
        "simmered_broth"
      ],
      "outputState": "finished_pork_bone_broth",
      "instructions": "Retirer les os avec des pinces et jeter. Déposer une souche fine avec une seule couche de cheesewet. Retirez le bouillon lentement, sans presser. Laisser refroidir légèrement, puis réfrigérer à découvert pendant 1 à 2 heures jusqu'à ce que la graisse se solidifie sur la surface sous la forme d'un capuchon de couleur crème. Enlever la couche de graisse solidifiée. Le bouillon doit être clair, doré et légèrement gélatineux lorsqu'il est froid. Assaisonner avec du sel seulement au point d'utilisation, jamais dans le stock de base.",
      "visualCue": {
        "primaryTarget": "Après le dégraissage, le bouillon réfrigéré doit être clair et doré, avec un léger frottement lorsque le récipient est secoué, ce qui indique une teneur adéquate en gélatine.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le bouillon est mince et aqueux quand il est froid — ne gel pas. La couleur est pâle. Le goût est léger. Un collagène insuffisant a été extrait.",
            "action": "Retournez dans la casserole et laissez mijoter une heure supplémentaire. Ajoutez un pied de porc si disponible pour booster la gélatine."
          },
          {
            "state": "Perfect",
            "description": "Un bouillon d'or clair. Gels à un jello doux quand il fait froid — tient sa forme quand cuilleré mais fond immédiatement lorsqu'il est chaud. Bouche propre, profond et salé.",
            "action": "Conserver jusqu'à 5 jours réfrigérés ou 3 mois congelés."
          },
          {
            "state": "Overdone",
            "description": "Les gels de bronzage dans un bloc très ferme et dense quand il fait froid. Très concentré.",
            "action": "C'est un bonus — diluer 1:1 avec de l'eau lors de l'utilisation. C'est essentiellement une demi-glace."
          }
        ]
      },
      "feelCue": "Spoon une petite quantité de bouillon réfrigéré, il devrait trembler comme de la gélatine ferme quand la cuillère est secouée et fondre immédiatement au contact de votre langue chaude. Un bouillon avec une bonne gélatine se sent soyeux et riche plutôt qu'aqueux, enrobant l'intérieur de votre bouche d'un poids salé agréable et persistant."
    }
  ]
};
