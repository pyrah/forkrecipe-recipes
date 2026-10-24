export default {
  "repoId": "master_french_roast-chicken_001",
  "parentRepoId": null,
  "slug": "roast-chicken",
  "author": "ForkRecipe Kitchen",
  "title": "Poulet rôti",
  "description": "Le test d'un cuisinier, selon chaque chef français qui a jamais vécu, un oiseau entier, du sel, du beurre, de la chaleur et du nerf pour le laisser tranquille pendant que le four fait son travail.",
  "cuisine": "Français",
  "culture": "Ferme française",
  "category": "proteins",
  "tags": [
    "poulet",
    "rôti",
    "français",
    "Oiseaux entiers",
    "classique"
  ],
  "difficulty": 2,
  "activeTime": "15 min",
  "totalTime": "1.5 hours",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2024-02-28",
  "updatedAt": "2025-04-05",
  "flavorRadar": {
    "sweet": 1,
    "salty": 4,
    "sour": 0,
    "bitter": 0,
    "umami": 6,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Poulet entier (1,5 à 1,8 kg)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": [
        "sel casher"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Poivre noir (fraîchir)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Fat",
      "name": "Beurre non salé (doublé)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "gras de canard",
        "Huile d'olive"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Thym frais (branches entières)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "romarin",
        "estragon"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Citrus",
      "name": "Citron (réchauffé)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Temper et sec",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "tempered_chicken",
      "instructions": "Retirer le poulet du réfrigérateur 1 heure avant la cuisson. Faites bien sécher à l'intérieur et à l'extérieur avec des serviettes en papier. Assaisonner généreusement à l'intérieur de la cavité et sur chaque surface de la peau avec du sel. Placez-le sur un support sur un plateau et laissez-le s'asseoir à découvert — le séchage à l'air resserre la peau et le sel dégage l'humidité de la surface. La peau sèche est le chemin vers la peau croustillante.",
      "visualCue": {
        "primaryTarget": "La peau est mate, sèche au toucher, et s'est serrée autour de l'oiseau. Les cristaux de sel sont visibles à la surface, mais ne se mêlent pas à l'humidité.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est encore humide et brillante. L'humidité perle sur le sein. L'oiseau a l'air fraîchement déballé.",
            "action": "Pat sèche encore et attends. Dans une pincée, un ventilateur ou un réfrigérateur ouvert pendant 30 minutes accélère le séchage."
          },
          {
            "state": "Perfect",
            "description": "La peau est papereuse et tendue, tirant légèrement sur la poitrine. Sécher au toucher partout, y compris les plis de cuisse et les fosses d'ailes.",
            "action": "Passer au beurre et assaisonner."
          },
          {
            "state": "Overdone",
            "description": "La peau s'est séchée au point d'avoir l'air coriace et déshydratée. Le sel a attiré une quantité importante de liquide dans le plateau.",
            "action": "Cela ne se produit qu'avec de nombreuses heures de séchage — l'oiseau est fin, et la peau se croquera magnifiquement."
          }
        ]
      },
      "feelCue": "Faites glisser un bout de doigt sur la peau de la poitrine — il devrait se sentir comme un parchemin sec, attraper légèrement sur vos empreintes digitales. Si votre doigt glisse, l'humidité reste."
    },
    {
      "nodeId": "step_2",
      "action": "Saison et truss",
      "inputs": [
        "tempered_chicken",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "prepared_chicken",
      "instructions": "Frottez le beurre ramolli sur toute la surface du poulet, en le travaillant dans chaque crevasse — sous les ailes, entre les cuisses et sur le dos. Assaisonner de poivre. Emportez la cavité avec les moitiés de citron et les brins de thym. Attachez les jambes avec la ficelle de cuisine et collez les bouts de l'aile sous le corps. La fermeture crée une forme compacte qui rôtit uniformément.",
      "visualCue": {
        "primaryTarget": "Un oiseau compact et symétrique recouvert d'une fine couche de beurre. Les jambes sont croisées et liées. Les ailes sont coincées. La cavité est juste à regarder ouverte avec des brins de thym visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le beurre est appliqué de façon inégale: taches épaisses sur la poitrine, taches nues sur les cuisses et le dos. Les jambes sont escarpées.",
            "action": "Redistribuer le beurre. Truss les jambes — les jambes lâches cuisinent plus vite que la poitrine, ce qui conduit à la viande foncée sèche."
          },
          {
            "state": "Perfect",
            "description": "Uniformement brillant avec du beurre. Forme compacte. Les jambes sont serrées ensemble, les ailes sont cousues. Thym et citron visibles dans la cavité.",
            "action": "Mettre dans un four chaud."
          },
          {
            "state": "Overdone",
            "description": "Trop de beurre — il se met en commun au fond et coule. La ficelle est trop serrée et coupée dans la peau.",
            "action": "Laissez couler l'excès de beurre. Enlevez légèrement la ficelle — elle devrait tenir, et non l'étrangler."
          }
        ]
      },
      "feelCue": "Le poulet trussé devrait se sentir ferme et compact dans vos mains, comme une balle de rugby. S'il se sent lâche et souple, serrez la mousse. Le beurre doit se sentir comme un mince film, pas comme une couche épaisse."
    },
    {
      "nodeId": "step_3",
      "action": "Rôtir",
      "inputs": [
        "prepared_chicken"
      ],
      "outputState": "roasted_chicken",
      "instructions": "Placer la poitrine du poulet dans une poêle à rôtir ou en fonte. Faire cuire à 220 C (425 F) pendant 55-70 minutes, selon la taille. Ne pas ouvrir le four pendant les 30 premières minutes. Après cela, bastez une fois avec les jus de poêle rendus. Le poulet se fait lorsque le jus de la cuisse est dégagé et que la température interne atteint 74 C (165 F) à la partie la plus épaisse de la cuisse.",
      "visualCue": {
        "primaryTarget": "Peau dorée profonde sur l'ensemble de l'oiseau, uniformément colorée avec des taches plus foncées aux extrémités des ailes et aux articulations des jambes. La peau est tendue et cloquée dans les endroits. Les jus de pan sont bruns et bouillonnants.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est d'or pâle ou tachetée. Les jus de la cuisse sont roses lorsqu'ils sont percés. Les jambes se sentent raides quand elles sont fouettées.",
            "action": "Continuer la cuisson en tranches de 10 minutes. Si la poitrine est brunie plus rapidement que les jambes, tentez la poitrine avec du papier."
          },
          {
            "state": "Perfect",
            "description": "De couleur dorée. La peau craque quand elle est tapée. Les jus de cuisse sont dégagés. Les jambes se déplacent librement dans leurs bases. La température interne est de 74 C (165 F). L'oiseau sent intensément le beurre rôti et le thym.",
            "action": "Retirer du four et se reposer."
          },
          {
            "state": "Overdone",
            "description": "La peau est brun foncé à carbonisé dans les taches. L'oiseau a nettement rétréci. La viande de sein est ferme et inépuisable lorsqu'elle est pressée.",
            "action": "La viande noire est probablement encore juteuse — servez - la d'abord. Couper la poitrine finement et servir avec le jus de poêle pour compenser la sécheresse."
          }
        ]
      },
      "feelCue": "Percez un pilon — il devrait se déplacer librement dans sa prise, presque comme s'il voulait se détacher. Si elle résiste, l'oiseau a besoin de plus de temps. La cuisine doit sentir comme une rotisserie parisienne: beurre brun, herbes grillées et peau caramélisée."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser reposer",
      "inputs": [
        "roasted_chicken"
      ],
      "outputState": "rested_chicken",
      "instructions": "Transférer le poulet sur une planche à découper et la tente avec du papier. Reposez-vous 15-20 minutes. Ce n'est pas facultatif — le repos permet aux jus de se redistribuer de l'extérieur vers le centre de la viande. Un poulet reposé perd une cuillère à soupe de jus lorsqu'il est sculpté. On perd un quart de tasse.",
      "visualCue": {
        "primaryTarget": "L'oiseau est détendu et légèrement installé sur la planche. Seule une petite piscine de jus d'or clair a été recueillie sous elle. La peau est encore tendue et croquante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Vous avez sculpté trop tôt — le jus coule des surfaces coupées. La viande est rose pâle à l'articulation.",
            "action": "Rassemblez les pièces, couvrez et attendez. La chaleur résiduelle finira par se déplacer."
          },
          {
            "state": "Perfect",
            "description": "Lorsqu'elles sont sculptées, les tranches de poitrine sont uniformément opaques avec un léger roussissement de rose près de l'os. Les jus sont clairs avec une teinte dorée. La viande est humide et s'accroche à elle-même.",
            "action": "Découper et servir avec les jus de cuisson."
          },
          {
            "state": "Overdone",
            "description": "Le poulet est resté trop longtemps — la peau est devenue douce et sinueuse. L'oiseau est tiède.",
            "action": "Faites-le clignoter sous un gril chaud pendant 2 minutes pour recouvrir la peau avant de servir."
          }
        ]
      },
      "feelCue": "Appuyez sur la viande de poitrine à travers la feuille — il devrait se sentir comme un coussin ferme mais pardonnant, donnant sous pression et jaillissant lentement. Si c'est dur, c'est trop cuit. Si votre pouce s'enfonce sans résistance, il est mal cuit."
    },
    {
      "nodeId": "step_5",
      "action": "Découper et servir",
      "inputs": [
        "rested_chicken"
      ],
      "outputState": "finished_roast_chicken",
      "instructions": "Enlevez la ficelle. Séparer les jambes en coupant l'articulation où la cuisse rencontre le corps. Séparer la cuisse du pilon. Couper la poitrine en étirant le long de la poitrine, puis pêcher le couteau pour suivre la cage thoracique. Disposer sur un plateau chaud et cuillerer les jus de poêle collectés sur chaque morceau.",
      "visualCue": {
        "primaryTarget": "Nettoyer, même des tranches de viande de poitrine avec une fine ligne de peau dorée croustillante sur le dessus. Les morceaux de cuisse et de pilon montrent une viande humide et foncée qui tire légèrement de l'os. Les jus de pan brillent sur toutes les surfaces.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La viande de sein est translucide et jongle. Sang visible à l'articulation de la cuisse. Les jus sont roses.",
            "action": "Retournez la cuisse et le pilon dans une poêle chaude pendant 3-4 minutes. Le sein peut être bien — vérifiez sa température."
          },
          {
            "state": "Perfect",
            "description": "Le sein est blanc opaque avec un roussissement rose au centre près de l'os. La viande noire est humide et s'éloigne de l'os en fibres brillantes. Chaque pièce brille avec jus.",
            "action": "Amène-toi à la table. C'est la définition du dîner du dimanche."
          },
          {
            "state": "Overdone",
            "description": "La viande est sèche, fibreuse et raide. La viande noire est toujours acceptable, mais la poitrine s'écroule lorsqu'elle est coupée.",
            "action": "Drenchez les tranches de poitrine dans le jus de poêle. Servir avec une sauce — une sauce à casserole rapide avec du vin, du beurre, et le thym de la cavité peut sauver même le poulet sec."
          }
        ]
      },
      "feelCue": "Le couteau devrait glisser à travers la poitrine sans résistance — si vous êtes sciage, le couteau est terne ou la viande a saisi de la cuisson excessive. Une poitrine parfaitement reposée, bien cuite fait un son doux et humide au fur et à mesure que le couteau passe, comme couper le beurre froid."
    }
  ]
};
