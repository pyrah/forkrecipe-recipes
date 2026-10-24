export default {
  "repoId": "master_french_confit_canard_001",
  "parentRepoId": null,
  "slug": "confit-canard",
  "author": "ForkRecipe Kitchen",
  "title": "Confit de Canard",
  "description": "Les cuisses de canard guérissent toute la nuit dans du sel, puis submergentes dans leur propre graisse fondue et cuites à une température à peine tremblante jusqu'à ce que le collagène se dissout et que la viande soit soyeuse et presque désossée. Crispé dans une poêle chaude avant de servir, la peau se brise.",
  "cuisine": "Français",
  "culture": "Gazon",
  "category": "proteins",
  "tags": [
    "français",
    "canard",
    "confit",
    "Gazon",
    "Cuisson lente",
    "conservés",
    "classique"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "18 hours",
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
    "bitter": 1,
    "umami": 5,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Jambes de canard (en entier, avec peau)",
      "ratioValue": 4,
      "defaultUnit": "pieces",
      "substitutions": [
        "jambes d'oie"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Graisses de canard",
      "ratioValue": 800,
      "defaultUnit": "g",
      "substitutions": [
        "Graisse d'oie",
        "Saindoux"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sels de mer grossiers",
      "ratioValue": 25,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Aromatic",
      "name": "Fils de thym frais",
      "ratioValue": 6,
      "defaultUnit": "sprigs",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Aromatic",
      "name": "Feuilles de baies",
      "ratioValue": 3,
      "defaultUnit": "leaves",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Girofles d'ail légèrement broyés",
      "ratioValue": 6,
      "defaultUnit": "cloves",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Cure",
      "inputs": [
        "ing_01",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "cured_duck_legs",
      "instructions": "Noter la peau de canard dans un motif de croisement avec un couteau tranchant, couper à travers la graisse mais pas dans la viande. Frotter chaque jambe de sel grossier, puis presser le thym, la laurier et l'ail contre la peau. Placer dans un récipient non réactif, couvrir et réfrigérer pendant 12 à 24 heures. Le sel puisera l'humidité de la peau, se concentrant sur la saveur et améliorant la croustillante finale.",
      "visualCue": {
        "primaryTarget": "Après le traitement, la surface des pattes de canard semble humide et la peau semble éparpillée et plus tendue. Une réserve de liquide rose s'est formée dans le contenant.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Moins de 6 heures — la peau est encore fraîche et humide. Très peu de liquide a été tiré.",
            "action": "Continuez à guérir. Moins de 6 heures est trop courte; 12 est minimum pour une bonne saveur et texture de peau."
          },
          {
            "state": "Perfect",
            "description": "Après 12 à 24 heures, la peau est tendue et légèrement translucide, apparaissant presque cuir. Un bassin de saumure s'est formé. Le sel est pour la plupart dissous.",
            "action": "Rincer soigneusement les jambes sous l'eau froide et les sécher complètement avec des serviettes en papier."
          },
          {
            "state": "Overdone",
            "description": "Après plus de 48 heures, la surface de la viande est légèrement grise et le remède a pénétré très profondément.",
            "action": "Rincer très soigneusement sous l'eau courante pendant 2 minutes par jambe pour éliminer l'excès de sel. Le confit fini sera plus salé mais toujours comestible."
          }
        ]
      },
      "feelCue": "Après la guérison, la peau de canard doit se sentir serrée et légèrement papier sous le bout des doigts, pas glissante et gélatineuse comme une peau fraîche. Appuyez sur la viande — elle doit se sentir plus dense et plus ferme que le canard cru."
    },
    {
      "nodeId": "step_2",
      "action": "Confit",
      "inputs": [
        "cured_duck_legs",
        "ing_02"
      ],
      "outputState": "confit_duck_legs",
      "instructions": "Faire fondre la graisse de canard dans un pot profond et lourd. Les jambes de canard rincées sont complètement sèches. Submerger complètement dans la graisse — ajouter plus de graisse si nécessaire pour couvrir. Chauffer jusqu'à ce que la graisse atteigne 80-90 C (175-195 F). Maintenir cette température dans un four de 90 C (195 F) pendant 6 à 8 heures. La graisse ne doit montrer que la bulle paresseuse la plus occasionnelle — un tremblement plutôt qu'un mijot. À cette température, le collagène se convertit en gélatine sans que les fibres musculaires se saisissent.",
      "visualCue": {
        "primaryTarget": "Les pattes de canard sont entièrement submergées de graisse claire et dorée. La surface graisseuse ne montre pas d'ébullition — au plus une seule bulle lente chaque minute. La peau de canard s'éloigne lentement de l'os à l'articulation.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après moins de 4 heures, la viande est encore ferme lorsqu'elle est pressée et la peau n'a pas encore commencé à se séparer de l'os.",
            "action": "Continuer dans le four. Le temps est le seul remède. La conversion du collagène nécessite une chaleur soutenue."
          },
          {
            "state": "Perfect",
            "description": "Après 6 à 8 heures, la peau s'est retirée de 1 à 2 cm de l'os. Lorsqu'elle est levée avec des pinces, la jambe a un léger glissade et donne visiblement. La graisse est complètement claire.",
            "action": "Le confit peut être refroidi dans la graisse et entreposé pendant 2 semaines au réfrigérateur."
          },
          {
            "state": "Overdone",
            "description": "La viande commence à tomber de l'os en morceaux. La graisse peut être légèrement trouble à partir de protéines rendues.",
            "action": "Retirer soigneusement — la viande est encore excellente, mais il faudra la manipuler avec soin. Servir immédiatement ou refroidir rapidement."
          }
        ]
      },
      "feelCue": "Soulevez une jambe avec des pinces et pressez doucement la viande de la cuisse à travers les pinces — elle devrait se produire facilement, se sentant douce et désossée, même si l'os est présent. Il ne doit pas y avoir de résistance des fibres musculaires."
    },
    {
      "nodeId": "step_3",
      "action": "Sear",
      "inputs": [
        "confit_duck_legs"
      ],
      "outputState": "finished_confit_canard",
      "instructions": "Retirer les pattes de canard de la graisse (réserver toute la graisse pour le stockage et la cuisson future). Patientez la peau complètement sèche avec des serviettes en papier. Chauffer une poêle à feu vif jusqu'à ce qu'elle fume. Placez les pattes de canard côté peau sans graisse supplémentaire. Appuyez doucement pour assurer un contact complet de la peau. Semer 4-6 minutes sans bouger jusqu'à ce que la peau soit profondément dorée et crépitante audiblement. Transférer dans un four de 220 C (430 F) côté peau jusqu'à 5 minutes de plus pour chauffer.",
      "visualCue": {
        "primaryTarget": "Une peau profondément dorée, uniformément craquelée avec quelques bords foncés. La peau est tendue et rigide, tirant visiblement loin de la viande en dessous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La peau est d'or pâle, douce et encore souple. Il fléchit plutôt que de craqueler quand il est tapé.",
            "action": "Continuer à feu vif en appuyant sur la peau à plat. Ne le déplacez pas — la croûte a besoin d'un contact soutenu avec la poêle chaude."
          },
          {
            "state": "Perfect",
            "description": "La peau est d'or profond à ambre, rigide, et craque audiblement quand une fourchette est traînée à travers elle. La graisse en dessous a rendu clair. La poêle sent le canard rôti.",
            "action": "Servir immédiatement — la peau commencera à ramollir quelques minutes après avoir quitté le feu."
          },
          {
            "state": "Overdone",
            "description": "La peau est brun très foncé et la graisse a complètement rendu, laissant le papier-fin de la peau et amer aux bords.",
            "action": "Servir immédiatement. La viande intérieure reste excellente. Trim tous les bords vraiment noirs."
          }
        ]
      },
      "feelCue": "Tapez la peau avec la tine d'une fourchette — vous devriez entendre une fissure distincte et sèche, comme taper un mince craquelin. Si ça a l'air terne et doux, il faut plus de chaleur. La peau sous votre fourchette doit se sentir complètement rigide, comme le parchemin, pas la peau en cuir."
    }
  ]
};
