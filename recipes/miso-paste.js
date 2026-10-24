export default {
  "repoId": "master_japanese_misopaste_001",
  "parentRepoId": null,
  "slug": "miso-paste",
  "author": "ForkRecipe Kitchen",
  "title": "Shiro Miso blanc",
  "description": "Sucré, doux et doux — miso blanc à base de soja à la vapeur, de koji de riz et de sel pendant des semaines plutôt que des années pour un résultat pâle et pâteux.",
  "cuisine": "Japonais",
  "culture": "Japonais",
  "category": "fermented",
  "tags": [
    "Japonais",
    "miso",
    "fermenté",
    "umami",
    "Koji",
    "soja",
    "condiment",
    "pâte"
  ],
  "difficulty": 4,
  "activeTime": "1 hr",
  "totalTime": "4 weeks",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-07-02",
  "updatedAt": "2026-07-02",
  "flavorRadar": {
    "sweet": 2,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Soya séché",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "soja jaune",
        "pois chiches (pour un miso aromatisé plus léger)"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Riz koji (fraîche ou séché)",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "orge koji (donne un peu plus de terre)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel de mer fin non iodé",
      "ratioValue": 150,
      "defaultUnit": "g",
      "substitutions": [
        "sel casher non iodé — sel jamais iodé, qui inhibe la fermentation"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Hydration",
      "name": "Eau de cuisson de soja, refroidie",
      "ratioValue": 100,
      "defaultUnit": "g",
      "substitutions": [
        "eau filtrée"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Repos",
      "inputs": [
        "ing_01"
      ],
      "outputState": "soaked_soybeans",
      "instructions": "Rincer soigneusement le soja séché. Placer dans un grand bol et couvrir d'eau froide d'au moins 10 cm — les haricots doubleront à peu près en taille pendant la nuit. Tremper pendant au moins 12 heures, idéalement 18. Égoutter et jeter l'eau de trempage.",
      "visualCue": {
        "primaryTarget": "Soya entièrement hydraté qui a plu à environ deux fois sa taille originale. Les peaux sont lisses et tendues, sans rides. Jaune pâle opaque dans l'ensemble.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les haricots présentent toujours des rides ou sont nettement plus petits que deux fois leur taille sèche. Dur au centre quand mordu.",
            "action": "Faire tremper plus longtemps — idéalement pendant la nuit (12–18 heures). Les haricots sous-poêlés font une cuisson inégale et produisent une pâte de miso."
          },
          {
            "state": "Perfect",
            "description": "Plume, à la peau lisse et uniformément pâle. Rendement net en cas de division — pas de centre dur, pas de peau ridée.",
            "action": "Égoutter et procéder à la cuisson."
          },
          {
            "state": "Overdone",
            "description": "Les haricots ont commencé à fermenter dans l'eau de trempage — les peaux se sont fendues, le liquide est légèrement bouillant ou amer.",
            "action": "Égoutter et cuire immédiatement. La fermentation est inoffensive mais indique que les haricots ont trempé trop longtemps dans des conditions chaudes."
          }
        ]
      },
      "feelCue": "Un soja entièrement imbibé pressé entre le pouce et l'index doit produire facilement et se fractionner proprement, se sentant comme un haricot cuit ferme — doux, non féculent ou poudreux."
    },
    {
      "nodeId": "step_2",
      "action": "Laisser mijoter",
      "inputs": [
        "soaked_soybeans"
      ],
      "outputState": "cooked_soybeans",
      "instructions": "Transférer les haricots trempés dans une grande casserole et couvrir d'eau douce de 5 cm. Porter à ébullition, écrémer la mousse, puis réduire à un ébullition régulier. Cuire pendant 3 à 4 heures jusqu'à ce que le soja soit complètement mou — ils devraient écraser entre le pouce et l'annulaire avec presque aucun effort. Goûtez un: il doit être crémeux, pas féculent. Réserver 100 g d'eau de cuisson avant l'égouttage.",
      "visualCue": {
        "primaryTarget": "Les sojas qui ont gonflé plus loin et sont devenus un jaune crème plus profond. L'eau de cuisson est légèrement nuageuse et dorée.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les haricots sont encore fermes au centre quand ils sont écrasés. Starchy, goût crayeux.",
            "action": "Continuer à mijoter: le soja sous-cuit produit un miso et un ferment granuleux et mal texturés."
          },
          {
            "state": "Perfect",
            "description": "Le haricot s'écrase complètement sous une légère pression au pouce et au doigt, sentant le beurre doux. Le goût est noisette et crémeuse.",
            "action": "Réserver l'eau de cuisson, égoutter et refroidir à la température ambiante avant de mélanger."
          },
          {
            "state": "Overdone",
            "description": "Les haricots se sont brisés dans l'eau et partiellement désintégrés.",
            "action": "Procéder — la pâte miso sera un peu plus liquide mais sera toujours fermentée et le goût correct. Utilisez moins d'eau de cuisson pour compenser."
          }
        ]
      },
      "feelCue": "Le test du pouce-ring-finger est définitif : si le haricot disparaît dans une pâte lisse entre ces deux doigts sans résistance, il est prêt."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "cooked_soybeans",
        "ing_04"
      ],
      "outputState": "soybean_paste",
      "instructions": "Bien qu'il soit encore chaud, mélanger ou bourrer le soja cuit en pâte lisse à l'aide d'un robot culinaire, d'un mélangeur ou d'un suribachi traditionnel. Ajoutez l'eau de cuisson réservée un peu à la fois pour obtenir une consistance lisse et épaisse, semblable à un hummus très raide. Il ne doit pas rester de morceaux de haricots visibles.",
      "visualCue": {
        "primaryTarget": "Une pâte d'ambre épaisse, complètement lisse et pâle qui fond sur une spatule et tombe lentement. Pas de peaux visibles ou de morceaux de haricots.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est grineuse ou grincheuse — des morceaux de haricots encore visibles. fragments de peau dans le mélange.",
            "action": "Continuez à mélanger. Passer à travers un tamis grossier si nécessaire pour enlever les peaux qui résistent au mélange."
          },
          {
            "state": "Perfect",
            "description": "Complètement lisse, épais et brillant. Quand on y fait passer une spatule, le sentier se tient parfaitement. Des gouttes d'une cuillère dans des taches lentes et lourdes.",
            "action": "Refroidir complètement à la température ambiante avant de combiner avec le mélange koji-sel."
          },
          {
            "state": "Overdone",
            "description": "La pâte est fine et soupeuse — trop d'eau de cuisson ajoutée.",
            "action": "Étaler sur un plateau plat et laisser refroidir — l'amidon l'épaissira légèrement. Procéder avec moins de compensation de l'eau de cuisson."
          }
        ]
      },
      "feelCue": "Frottez une petite pâte de soja entre vos doigts — elle devrait être complètement lisse, sans texture granulaire, comme du pudding très épais."
    },
    {
      "nodeId": "step_4",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03"
      ],
      "outputState": "koji_salt_mix",
      "instructions": "Mélanger le riz koji et le sel fin dans un grand bol. Frotter le sel dans le koji avec les deux mains pendant 2 à 3 minutes, presser et presser pour s'assurer que chaque grain de koji est enrobé de sel. Le sel assaille le miso et protège contre les bactéries nuisibles pendant la fermentation.",
      "visualCue": {
        "primaryTarget": "Un mélange de koji légèrement humide, uniformément salé. Chaque grain recouvert de sel blanc. Le koji devrait être parfumé — légèrement sucré, semblable à un champignon et légèrement floral.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sel et le koji apparaissent séparés — des poches de sel blanc visibles assises sur les grains koji.",
            "action": "Frottez et pressez les deux mains jusqu'à ce que le sel soit entièrement et uniformément distribué à travers le koji."
          },
          {
            "state": "Perfect",
            "description": "Mélange uniforme, légèrement humide avec chaque grain de koji enrobé. La masse est cohésive et sent le riz sucré et le sel.",
            "action": "Mélanger immédiatement avec la pâte de soja refroidie."
          },
          {
            "state": "Overdone",
            "description": "Koji a été écrasé à une poudre à la suite de frottements trop vigoureux.",
            "action": "Procéder — koji pulvérisé toujours ferments correctement, bien que la texture finale peut être légèrement plus dense."
          }
        ]
      },
      "feelCue": "Prenez une poignée du mélange koji-sel et pressez - il devrait se serrer momentanément, puis s'effondrer, chaque grain distinct mais salin."
    },
    {
      "nodeId": "step_5",
      "action": "Mélange",
      "inputs": [
        "soybean_paste",
        "koji_salt_mix"
      ],
      "outputState": "miso_mixture",
      "instructions": "Mélanger la pâte de soja refroidie et le mélange koji-sel dans un grand bol. Mélanger soigneusement avec vos mains, presser et presser jusqu'à ce qu'il soit complètement uniforme — pas de stries de pâte de soja pâle visible, pas de poches de koji non mélangées. Former le mélange en boules environ de la taille d'une balle de tennis en appuyant fermement.",
      "visualCue": {
        "primaryTarget": "Une pâte uniforme, pâle, légèrement texturée, sans stries ni poches non mélangées. Peut se former en boules cohésives sans s'effondrer.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Streaks de pâte de soja pâle et de koji-sel plus foncé visibles. Le mélange s'écroule lorsqu'il est formé en boule.",
            "action": "Continuer à mélanger avec les deux mains. Chaque gramme de koji doit avoir un contact direct avec la pâte de soja à fermenter uniformément."
          },
          {
            "state": "Perfect",
            "description": "Couleur et texture uniformes. Le mélange maintient une bille sous pression lumineuse sans fissuration.",
            "action": "Commencez à emballer fermement dans la roche stérilisée de fermentation."
          },
          {
            "state": "Overdone",
            "description": "Le mélange a été chauffé par trop de contact avec les mains, devenant légèrement gras ou collant.",
            "action": "Laisser refroidir le mélange 10 minutes au réfrigérateur, puis continuer. Le mélange miso chaud est mal emballé."
          }
        ]
      },
      "feelCue": "Le mélange miso doit se sentir comme de l'argile dense, légèrement humide, malléable, cohésive et prête à se former sans s'accrocher agressivement à vos mains."
    },
    {
      "nodeId": "step_6",
      "action": "Ferment",
      "inputs": [
        "miso_mixture"
      ],
      "outputState": "finished_white_miso",
      "instructions": "Stériliser une cruche ou un grand pot avec de l'eau bouillante. Jetez chaque boule de mélange miso dans la roche avec force, appuyez fermement pour éliminer toutes les poches d'air. Lisser la surface à plat. Saupoudrer une fine couche de sel sur toute la surface pour la protéger. Appuyez directement sur l'enveloppe plastique contre la surface, puis placez un poids sur le dessus. Couvrir la roche avec un chiffon et conserver à température ambiante (18–22°C) pendant 3–4 semaines, dégustation hebdomadaire. Réfrigérer une fois la saveur est douce, douce, et satisfaisantement salée-umami.",
      "visualCue": {
        "primaryTarget": "Après 3-4 semaines : une surface ambre plus foncée et plus profonde avec un arôme propre et miso. La pâte s'est légèrement contractée des parois de la roche. Pas de moule sous la couche de sel protectrice.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 3 semaines : la pâte a encore un goût cru et salé sans développement umami sucré. Pale, presque identique à quand emballé.",
            "action": "Laisser passer 1 à 2 semaines de plus. La température inférieure à 18°C ralentit significativement la fermentation."
          },
          {
            "state": "Perfect",
            "description": "Marron doré pâle avec une profondeur douce et salée. Umami est présent mais pas agressif. Du sel dans le fond. La texture est lisse et extensible.",
            "action": "Réfrigérer immédiatement pour arrêter la fermentation. Le miso blanc restera réfrigéré pendant 3 mois."
          },
          {
            "state": "Overdone",
            "description": "Surface très foncée, intensement salée, aigre ou alcoolique. Possible croissance des moisissures foncées aux bords (scrape loin avant la dégustation).",
            "action": "Goûtez sous la surface — si toujours agréable, réfrigérez maintenant. Le miso salé peut être utilisé comme pâte assaisonnée plutôt que comme base de soupe."
          }
        ]
      },
      "feelCue": "Un shiro miso bien fermenté devrait se sentir lisse et cohésif lorsqu'il est frotté sur un bout de doigt — soyeux, pas granuleux — et l'arôme devrait faire votre eau de bouche avant même de le goûter."
    }
  ]
};
