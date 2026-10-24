export default {
  "repoId": "master_korean_fermented_black_garlic_001",
  "parentRepoId": null,
  "slug": "fermented-black-garlic",
  "author": "ForkRecipe Kitchen",
  "title": "Ail noir",
  "description": "Des têtes entières d'ail maintenues à 60°C dans un environnement humide pendant 40 jours tandis que la réaction de Maillard et le brunissement enzymatique fonctionnent au ralenti, transformant l'allicine acride et aiguë de l'ail cru en quelque chose de miraculeux : girofle doux, noir-jet dégustation de vinaigre balsamique, tamarin, mélasse, et ail rôti tout à la fois, sans la dureté et la profondeur étourdissante de l'umami. Le temps est le seul ingrédient.",
  "cuisine": "Coréen",
  "culture": "Asie de l ' Est",
  "category": "fermented",
  "tags": [
    "fermenté",
    "condiment",
    "coréen",
    "umami",
    "végétalien",
    "Sans gluten"
  ],
  "difficulty": 2,
  "activeTime": "10 min",
  "totalTime": "40 day",
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
    "sour": 2,
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Têtes entières d'ail, non pelées, sèches, sans coupure ni défaut",
      "ratioValue": 6,
      "defaultUnit": "heads",
      "substitutions": [
        "large ail seul (ail à simple gout) pour faciliter le pelage après transformation"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Sélectionner et sécher",
      "inputs": [
        "ing_01"
      ],
      "outputState": "prepped_garlic",
      "instructions": "Sélectionnez des têtes d'ail fermes et denses sans taches molles, sans moisissure, ni gousses exposées. Il est essentiel de guérir de toute humidité de la ferme : l'ail trop humide pourrira plutôt que Maillard à basse température. Si votre ail est fraîchement récolté, le guérir dans un endroit sec et ventilé pendant 1 à 2 semaines avant de commencer. L'ail acheté en magasin est généralement déjà guéri et prêt. Ne pelez pas, coupez, huilez ou salez les têtes — elles sont complètement sèches et entières, dans leurs peaux de papier. Les peaux piègent l'humidité libérée par les girofles, créant le micro-environnement humide qui provoque la lente réaction de Maillard à l'intérieur de la tête. Couper seulement les poils de racines longs et secs s'ils sont délassés, sans couper dans la base.",
      "visualCue": {
        "primaryTarget": "Têtes d'ail fermes, sèches et entières avec des peaux papeuses intactes, pas de taches molles, pas de pousses vertes sortant du dessus, et pas de moisissure visible ou de taches foncées sur la peau externe.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Têtes d'ail qui sont humides, fraîchement récoltées sans durcir, ou ont des taches molles suggérant l'humidité à l'intérieur.",
            "action": "Prélever l'ail non durci dans un endroit sec et bien ventilé pendant 1 à 2 semaines avant la transformation. Jetez les têtes avec du moule — elles contamineront votre lot."
          },
          {
            "state": "Perfect",
            "description": "Complètement sec, tête ferme qui craque légèrement lorsque vous appuyez sur la peau papier. Aucun mouvement d'humidité à l'intérieur. La peau externe est papier et rougit lorsqu'elle est manipulée.",
            "action": "Disposer dans la cuisinière à riz ou l'appareil dédié sur son réglage chaud, et commencer le processus de 40 jours."
          },
          {
            "state": "Overdone",
            "description": "Gousses d'ail pelées placées directement dans le récipient, ou têtes coupées en deux pour la vitesse.",
            "action": "N'utilisez que des têtes entières. Les gousses exposées sèchent, durcissent et surbrondent sans développer la texture intérieure douce et jammy caractéristique de l'ail noir."
          }
        ]
      },
      "feelCue": "Pressez doucement la tête : elle doit résister sans donner, se sentir dense et dure. Une tête qui donne doucement à la pression a de l'humidité à l'intérieur qui suggère la pourriture potentielle plutôt que la transformation réussie de Maillard."
    },
    {
      "nodeId": "step_2",
      "action": "Mettre en place une faible chaleur",
      "inputs": [
        "prepped_garlic"
      ],
      "outputState": "arranged_for_aging",
      "instructions": "Placer les têtes entières d'ail dans une cuisinière de riz à «chauffer» (qui maintient 55 à 65°C), une cuisinière lente sur son réglage le plus bas, ou un fermenteur à l'ail noir conçu spécialement. La température cible est de 60°C (140°F) – assez chaude pour provoquer la réaction de Maillard et le brunissement enzymatique au cours des jours et des semaines, mais assez froide pour que l'ail ne cuit ni ne déshydrate. Disposer les têtes en une seule couche avec de l'espace entre elles pour la circulation de l'air. Ne pas ajouter d'eau, d'huile ou d'autres ingrédients. Les têtes ne doivent pas toucher les côtés ou les autres. Fixez une date dans 40 jours. Tapez une note sur l'appareil : ne pas ouvrir inutilement pendant les deux premières semaines.",
      "visualCue": {
        "primaryTarget": "Têtes d'ail entières disposées de façon lâche dans un appareil chaud, le couvercle sur, avec un léger arôme sucré-savori qui commence déjà à se développer dans les 24 premières heures — un soupçon de ce que les 40 jours de la réaction de Maillard sentent.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La température de l'appareil est inférieure à 55 °C, ou les têtes sont serrées et empilées, limitant la circulation de l'air et créant des zones de température inégales.",
            "action": "Vérifier la température à l'aide d'un thermomètre à sonde — le réglage chaud sur certaines cuisinières de riz est aussi bas que 45°C, ce qui est insuffisant. Utilisez une cuisinière lente à basse température ou un fermenteur dédié avec contrôle de température."
          },
          {
            "state": "Perfect",
            "description": "Suspendu de 58 à 63°C autour des têtes d'ail, confirmé par un thermomètre. Têtes ne touchant pas les murs ou l'autre. Une faible odeur sucrée commence dans les 24 heures.",
            "action": "Fermez le couvercle et commencez le timing. La première semaine produira l'arôme le plus puissant et le plus piquant — c'est normal."
          },
          {
            "state": "Overdone",
            "description": "Température trop élevée, supérieure à 70°C : l'ail cuit rapidement et sèche plutôt que de subir la lente transformation de Maillard.",
            "action": "Le résultat sera caramélisé plutôt que correctement noir, avec une texture plus sèche et plus de saveur unidimensionnelle. Pour un vrai ail noir, utilisez toujours un thermomètre pour confirmer que vous êtes dans la gamme de 58 à 65°C."
          }
        ]
      },
      "feelCue": "Après 24 heures avec le couvercle, levez - le soigneusement et fermez - vous la main; vous devriez sentir une chaleur humide, chaude, très douce, comme une serre en été. Cette humidité piégée est essentielle : la chaleur sèche produit de l'ail caramélisé, pas de l'ail noir."
    },
    {
      "nodeId": "step_3",
      "action": "Âge pendant 40 jours",
      "inputs": [
        "arranged_for_aging"
      ],
      "outputState": "black_garlic_aging",
      "instructions": "Maintenir de 58 à 65°C en continu pendant 40 jours. Il ne s'agit pas d'une fermentation au sens microbien — pas de bactéries ou de levures — mais d'une réaction très longue et soutenue de Maillard et d'un processus de brunissement enzymatique. Résistez à l'envie de vérifier fréquemment : chaque fois que vous soulevez le couvercle, vous relâchez l'humidité piégée et ralentissez le processus. Vérifiez tous les 7 jours avec une sonde de thermomètre rapide et une inspection visuelle seulement. Au jour 10, les peaux extérieures s'obscurciront et l'odeur sera intensement salée, comme la sauce soja rencontre le caramel. Au jour 20, les girofles seront assez douces pour appuyer sur la peau. Au jour 30, la couleur vue à travers une fissure sera brun foncé à noir. Au jour 40, les têtes sont complètes.",
      "visualCue": {
        "primaryTarget": "À 40 jours : peaux extérieures profondément dorées, presque noircies et encres-papiers. Lorsqu'un girofle est pelé, il est noir-jet, brillant et doux — la consistance d'un fruit séché doux.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "À 30 jours : les gousses sont brun foncé mais encore fermes lorsqu'elles sont pressées à travers la peau, ou le centre de la tête est encore bronzé ou doré.",
            "action": "Continuer à vieillir encore 7 à 10 jours. Le centre même d'une tête d'ail noir est toujours le dernier à noircir — tirez un seul girofle au jour 30 et goûtez-le; si encore aiguisé et piquant, il a besoin de plus de temps."
          },
          {
            "state": "Perfect",
            "description": "À 40 jours : les gousses sont uniformément noir-jet et brillant lorsqu'elles sont pelées, avec la consistance d'une date ou d'un pruneau. Ils ont un goût complexe — doux, aigre, umami et peu caramel — sans la netteté de l'ail cru. L'arôme est de vinaigre balsamique, de tamarin et d'ail rôti simultanément.",
            "action": "Retirer de l'appareil et laisser refroidir complètement à la température ambiante avant de peler ou de stocker."
          },
          {
            "state": "Overdone",
            "description": "Laisser au-delà de 50 jours à température : les gousses ont séché à une texture plus dure et plus dense et la saveur est passée de complexe à simplement très douce et unidimensionnelle.",
            "action": "Toujours comestible et utile. L'ail noir surâgé est excellent haché dans des sauces ou dissous dans des vinaigrettes — la texture dure est moins importante lorsqu'il est incorporé plutôt que mangé entier."
          }
        ]
      },
      "feelCue": "Au jour 40, pressez fermement une girofle à travers la peau avec le pouce : elle doit se former complètement et faire un peu mousser, avec une texture entre une figues très mûres et une date adoucie. Si elle repousse fermement, donnez-lui une autre semaine."
    },
    {
      "nodeId": "step_4",
      "action": "Repos et magasin",
      "inputs": [
        "black_garlic_aging"
      ],
      "outputState": "finished_black_garlic",
      "instructions": "Retirer les têtes finies de l'appareil et les laisser à température ambiante, à découvert, pendant 24 à 48 heures. Cette étape de repos et de séchage est critique : les peaux extérieures continueront à se dessécher et les gousses s'affermissent légèrement à une consistance mâcheuse-douce parfaite – la saveur s'approfondit au cours de ce repos alors que les sucres résiduels continuent à réagir. Après le repos, conserver la tête entière, pelée ou non, dans un récipient hermétique au réfrigérateur pendant 3 mois au maximum, ou au congélateur pendant 1 an au maximum. Ils peuvent être utilisés entiers dans les pâtes, écrasés dans le beurre, mélangés dans l'aioli, dissous dans le risotto, ou simplement consommés comme ils sont avec du pain et de l'huile d'olive.",
      "visualCue": {
        "primaryTarget": "Après le repos de 48 heures: les peaux extérieures sont papeuses et complètement sèches; les gousses intérieures sont noir-jet, brillant, et moelleux-doux, avec un arôme doux-umami-sour complexe chaque fois que le récipient est ouvert.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Passé la période de repos : les gousses sont encore légèrement collantes et trop humides, avec une texture plus douce que idéale.",
            "action": "Laisser à découvert à température ambiante pendant 48 heures. La période de repos complète la transformation — en se précipitant, elle produit de l'ail noir d'une qualité légèrement musquée et sous-finie."
          },
          {
            "state": "Perfect",
            "description": "Les vêtements sont uniformément noir-jet, légèrement brillants, et donnent à une morsure ferme avec une texture molle et mâcheuse — pas collante, pas sèche. La saveur est un accord sans soudure de doux, aigre, umami, et caramel avec une longue finale chaude et aucune netteté d'ail du tout.",
            "action": "A conserver réfrigéré et utiliser dans les 3 mois. Peler au besoin."
          },
          {
            "state": "Overdone",
            "description": "A découvert à température ambiante pendant plus de 4 jours durant le reste : les gousses ont séché et durci jusqu'à une texture mâcheuse.",
            "action": "Mincez ou hachez finement avant d'utiliser — la saveur est intacte et concentrée; la texture est la seule victime. Ou réhydratez brièvement dans de l'eau chaude avant utilisation."
          }
        ]
      },
      "feelCue": "Peler une girofle d'une tête bien reposée : elle devrait se soulever proprement de la peau papier sans coller, se sentant comme un bonbon de gelée légèrement ferme. Bite à travers elle: résistance douce, puis s'effondrer, libérant une saveur complexe qui enveloppe toute la bouche et s'attarde pendant des minutes."
    }
  ]
};
