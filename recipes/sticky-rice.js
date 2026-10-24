export default {
  "repoId": "master_thai_sticky-rice_001",
  "parentRepoId": null,
  "slug": "sticky-rice",
  "author": "ForkRecipe Kitchen",
  "title": "Riz collant (Khao Niao)",
  "description": "Nord Le riz glutineux de base de la Thaïlande — trempé toute la nuit et cuit à la vapeur dans un panier en bambou sur une marmite d'eau bouillante jusqu'à ce que les grains deviennent translucides et collants, parfaits pour rouler en boules et tremper dans tout.",
  "cuisine": "Thaï",
  "culture": "Nord thaïlandais",
  "category": "grains",
  "tags": [
    "Thaï",
    "riz",
    "glutineux",
    "vapeur",
    "nord-thai",
    "végétalien"
  ],
  "difficulty": 2,
  "activeTime": "10 min",
  "totalTime": "6 hr",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 2,
    "salty": 0,
    "sour": 0,
    "bitter": 0,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz glutineux thaï (doux), à grains longs",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "Mochigome japonais (grain plus court, résultat plus collant)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Hydration",
      "name": "Eau froide, pour tremper",
      "ratioValue": 1200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Hydration",
      "name": "Eau bouillante, pour vapeur (en pot ci-dessous)",
      "ratioValue": 1500,
      "defaultUnit": "g",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Hydrater",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "soaked_raw_rice",
      "instructions": "Rincer le riz glutineux sous l'eau froide courante, tourbillonner avec votre main, jusqu'à ce que l'eau coule principalement limpide - ce qui élimine l'excès d'amidon de surface qui ferait autrement la gomme de riz cuite plutôt que collante. Transférer dans un grand bol et couvrir d'eau froide d'au moins 5 cm. Faire tremper pendant au moins 4 heures; la nuit (8 à 12 heures) est fortement préférée. Les grains doivent être complètement hydratés avant la vapeur — sans cette imprégnation, l'intérieur de chaque grain restera dur et crayeux, peu importe la durée de la vapeur. Le riz est prêt à s'égoutter lorsque chaque grain est enflé, est devenu blanc craie tout au long de la traversée, et se sent doux lorsqu'il est pressé entre deux doigts mais ne se brise pas.",
      "visualCue": {
        "primaryTarget": "Grains de loupe, blancs mats, qui ont augmenté sensiblement en volume, couchés dans de l'eau qui est légèrement laiteuse à partir de l'amidon lessivé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les grains sont encore translucides au cœur et se sentent difficiles lorsqu'ils sont pressés. L'eau de trempage est encore claire.",
            "action": "Continuez à tremper. Un trempage de 2 heures produit du riz au centre brut — il n'y a pas de solution de rechange pour un temps de trempage insuffisant. En cas de pression, trempez dans de l'eau chaude (pas chaude) pendant au moins 1 heure."
          },
          {
            "state": "Perfect",
            "description": "Tous les grains sont uniformément blancs crayeux et gonflés. Ils donnent quand ils sont pressés entre le pouce et l'index, mais tiennent leur forme. L'eau est laiteuse.",
            "action": "Égoutter soigneusement dans un tamis à mailles fines. Secouez l'excès d'eau avant de charger dans le panier à vapeur."
          },
          {
            "state": "Overdone",
            "description": "Les grains ont trempé plus de 18 heures — ils commencent à se briser aux bords et l'eau sent peu aigre.",
            "action": "Égoutter et vapeur immédiatement. Le riz légèrement sursauté va chauffer plus vite et tourner le mushier, donc vérifiez la cuisson plus tôt que d'habitude."
          }
        ]
      },
      "feelCue": "Pincez un seul grain et appuyez fermement — il devrait se fissurer proprement comme un morceau de craie douce, et non squash dans la pâte. S'il grince à coller, il a trempé trop longtemps; s'il résiste et se sent vitreux, il a besoin de plus de temps."
    },
    {
      "nodeId": "step_2",
      "action": "Faire bouillir",
      "inputs": [
        "ing_03"
      ],
      "outputState": "steaming_water",
      "instructions": "Verser l'eau bouillante dans une grande casserole, un wok ou une grande casserole en terre cuite, selon ce qui convient à votre panier à vapeur en bambou (ou une calandre thermofuge doublée de mousseline). L'eau devrait être assez profonde pour qu'elle ne touche pas le fond du panier, mais pas si haut que vous devez le recharger fréquemment. Portez-le à plein ébullition avant de charger le riz. Étaler le panier en bambou d'une seule couche de mousseline ou de fromage humide pour empêcher le riz de tomber dans les lamelles.",
      "visualCue": {
        "primaryTarget": "Un ébullition vigoureux et enroulant — de grandes bulles brisent constamment la surface, avec une colonne de vapeur soutenue qui monte du pot.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "L'eau est chaude mais pas encore bouillante: une mijote lente avec des bulles paresseuses et un mince filet de vapeur.",
            "action": "Attendez un ébullition complet avant de charger le riz. La vapeur sur une vapeur insuffisante produit du riz mal cuit avec un noyau dur."
          },
          {
            "state": "Perfect",
            "description": "Faire bouillir complètement avec de la vapeur vigoureuse. Le panier en bambou, lorsqu'il est mis en place, montre immédiatement une explosion de vapeur à travers le riz.",
            "action": "Chargez le riz égoutté dans le panier doublé, étaler le niveau et couvrir avec le couvercle ou un chiffon."
          },
          {
            "state": "Overdone",
            "description": "Le pot a bouilli à sec pendant la vapeur — vous pouvez entendre le pot craqueler et aucune vapeur ne vient à travers le riz.",
            "action": "Ajouter immédiatement de l'eau bouillante (jamais froide, qui peut fissurer un pot d'argile et provoquer un choc de température). Vérifiez le niveau d'eau toutes les 15 minutes pendant la vapeur."
          }
        ]
      },
      "feelCue": "Tenez votre main à 10 cm au-dessus du panier avant le chargement — vous devriez sentir une colonne constante et constante de pression thermique contre votre paume. Des patchs d'air frais signifient que le joint entre le panier et le pot laisse échapper la vapeur latéralement."
    },
    {
      "nodeId": "step_3",
      "action": "vapeur",
      "inputs": [
        "soaked_raw_rice",
        "steaming_water"
      ],
      "outputState": "half_steamed_rice",
      "instructions": "Étendre le riz glutineux égoutté uniformément dans le panier en bambou doublé dans une couche ne dépassant pas 4 cm. Couvrir l'eau chaudement bouillante pendant 12 minutes. La chaleur gélatinisera d'abord les couches extérieures de l'amidon. Après 12 minutes, retournez la masse de riz à l'aide de la doublure en tissu — c'est l'étape clé qui assure même la cuisson des deux surfaces. La couche inférieure sera déjà lustrée et légèrement translucide; le dessus sera encore crayeux. Après le retournement, niveler la masse et continuer la vapeur pendant encore 8-10 minutes.",
      "visualCue": {
        "primaryTarget": "Après les 12 premières minutes, la moitié inférieure de la masse de riz est passée du blanc crayeux à un aspect semi-translucide et brillant, l'amidon gélatinisant sous la vapeur directe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Même la couche inférieure est toujours complètement blanc crayeux et les grains se sentent durs lorsqu'ils sont touchés par une cuillère. Pas de brillant visible.",
            "action": "Vérifiez que le pot est à ébullition et que le panier est bien scellé. Couvrir soigneusement et laisser cuire encore 5 minutes avant de vérifier à nouveau."
          },
          {
            "state": "Perfect",
            "description": "La moitié inférieure est nettement brillante et semi-translucide. La moitié supérieure est encore crayeuse, mais les grains de la couche limite commencent tout juste à se coller.",
            "action": "Frotter le riz dans le chiffon, le mettre à niveau et remplacer le couvercle pour terminer la deuxième moitié de la vapeur."
          },
          {
            "state": "Overdone",
            "description": "La couche inférieure est complètement translucide et les grains commencent à s'effondrer ensemble en une masse solide.",
            "action": "Steam pendant une seconde moitié plus courte — seulement 5–6 minutes après le retournement. Le riz cuit plus vite que prévu, peut-être parce que le trempage était trop long ou la vapeur trop intense."
          }
        ]
      },
      "feelCue": "Après avoir retourné, appuyez sur le centre de la masse de riz avec votre paume à travers le tissu — il devrait se sentir chaud et légèrement résistant, comme un oreiller ferme. S'il donne complètement sans résistance, il est proche de faire; s'il se sent dur et froid au cœur, il a besoin de plus de temps."
    },
    {
      "nodeId": "step_4",
      "action": "Laisser reposer",
      "inputs": [
        "half_steamed_rice"
      ],
      "outputState": "finished_sticky_rice",
      "instructions": "Après un total de 20 à 22 minutes de vapeur (12 minutes + 8 à 10 minutes après le flip), retirer le panier de la casserole. Goûtez quelques grains du centre de la masse — ils devraient être uniformément tendres, collants et légèrement sucrés sans noyau crayeux ou dur. Transformez le riz en panier de service traditionnel (un krathip) ou en bol couvert doublé d'un chiffon propre pour le garder au chaud et l'empêcher de sécher. Ne la laissez pas exposée à l'air — elle se raidit en quelques minutes. Le riz collant est consommé à la main : pincez une petite quantité et roulez-la dans une boule avec vos doigts, en utilisant la texture chaude et malléable du riz lui-même comme adhésif.",
      "visualCue": {
        "primaryTarget": "Grains brillants, entièrement translucides qui s'accrochent ensemble dans une masse cohésive et souple — comme une pâte très ferme et moulageable — sans centres blancs crayeux visibles lorsqu'un grain est arraché.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le centre de la masse contient encore des grains blancs crayeux qui sont durs et goûtent de l'amidon brut. La masse est émiettée plutôt que cohésive.",
            "action": "Retour à la vapeur pendant 5 minutes. Le riz collant est indiscutable: le goût d'amidon brut est désagréable et il n'y a aucune fixation à la table."
          },
          {
            "state": "Perfect",
            "description": "Chaque grain est translucide, tendre et s'accroche à ses voisins. Rouler une petite boule entre les doigts produit une surface lisse et non collante à l'extérieur. La saveur est propre, douce et légèrement noisette.",
            "action": "Transférer immédiatement dans un panier de service couvert. Couvrez-vous en tout temps. Servir dans l'heure pour la meilleure texture."
          },
          {
            "state": "Overdone",
            "description": "Le riz a été cuit à la vapeur trop longtemps et s'est effondré en une seule masse gommée, humide, sans définition de grain individuel. Ça colle agressivement à tout.",
            "action": "Il est encore comestible et peut être utilisé comme congee ou une base collante pour le riz collant mangue avec l'ajout de lait de coco sucré, mais la texture est passée idéal pour manger à la main."
          }
        ]
      },
      "feelCue": "Prenez une petite pince et appuyez fermement dans vos doigts. Il devrait se libérer proprement de votre peau sans filer — collant à lui - même, pas à vous. Si elle se colle à votre paume et à vos cordes quand vous vous retirez, elle a trop d'équipes. Si ça s'écroule comme du couscous, il lui faut plus de temps."
    }
  ]
};
