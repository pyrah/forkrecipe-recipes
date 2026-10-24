export default {
  "repoId": "master_italian_cacio-e-pepe_001",
  "parentRepoId": null,
  "slug": "cacio-e-pepe",
  "author": "ForkRecipe Kitchen",
  "title": "Cacio e Pepe",
  "description": "Trois ingrédients — pâtes, pecorino, poivre noir — régis par un principe si précis il lit plus comme la physique que la cuisson: l'eau féculente, la friction, et la température maintenue en équilibre pour faire tourner une sauce qui enveloppe chaque brin dans une soie poivrée transparente.",
  "cuisine": "Italien",
  "culture": "Romain",
  "category": "grains",
  "tags": [
    "pâtes",
    "fromage",
    "poivre",
    "romaine",
    "végétarien"
  ],
  "difficulty": 3,
  "activeTime": "20 min",
  "totalTime": "25 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 7,
    "sour": 1,
    "bitter": 3,
    "umami": 6,
    "heat": 5
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Tonnarelli, spaghetti ou rigatoni",
      "ratioValue": 4,
      "defaultUnit": "parts",
      "substitutions": [
        "mezze maniché"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Dairy",
      "name": "Pecorino Romano, très finement râpé (microplan)",
      "ratioValue": 1.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Parmigiano-Reggiano, très finement râpé (microplan)",
      "ratioValue": 0.5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Maïs de poivre noir, grossièrement fissuré (non pré-planché)",
      "ratioValue": 0.15,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Eau de cuisson des pâtes, féculente et salée",
      "ratioValue": 0.75,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Fat",
      "name": "Huile d'olive extra vierge (facultatif, pour la poêle)",
      "ratioValue": 0.05,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Toast",
      "inputs": [
        "ing_04"
      ],
      "outputState": "bloomed_pepper",
      "instructions": "Ajouter le poivre noir grossièrement craqué dans une poêle sèche et large, idéalement une assez grande pour tenir toutes les pâtes plus tard. Faire cuire à feu moyen pendant 60-90 secondes, en remuant constamment, jusqu'à ce que le poivre soit parfumé et commence juste à fumer aux bords. Vous devriez sentir une intensité chaude, boisée, presque florale, distincte du poivre cru. Ajouter l'huile d'olive si elle est utilisée. Retirer du feu et laisser refroidir légèrement la poêle. Le poivre est maintenant fleuri et parfumera le plat entier. Ne pas nettoyer la poêle — le poivre reste.",
      "visualCue": {
        "primaryTarget": "Poivre qui s'est très légèrement obscurci et qui est visiblement parfumé: des vapeurs aromatiques montantes. La poêle sent fortement le maïs poivré grillé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le poivre sent toujours cru et vif. Pas de vapeur visible ou de libération aromatique.",
            "action": "Continuer à griller à feu moyen. Encore une minute, en remuant constamment."
          },
          {
            "state": "Perfect",
            "description": "Couleur profonde, visiblement aromatique, sent chaud et complexe plutôt que cru et épicé. Juste une touche de fumée à la fin.",
            "action": "Retirer du feu. Laisser refroidir 1 minute avant d'ajouter un liquide."
          },
          {
            "state": "Overdone",
            "description": "Une forte fumée, une odeur brûlante. Le poivre est noir.",
            "action": "Jeter le poivre, essuyer la poêle et recommencer à zéro — le poivre brûlé a un goût dur et ne peut être sauvé."
          }
        ]
      },
      "feelCue": "Penchez-vous au-dessus de la poêle et inhalez — vous devriez sentir une épice chaude, presque florale, légèrement boisée. Si ça sent le feu, tu es allé trop loin."
    },
    {
      "nodeId": "step_2",
      "action": "Bouillir",
      "inputs": [
        "ing_01",
        "ing_05"
      ],
      "outputState": "al_dente_pasta",
      "instructions": "Faire cuire les pâtes dans un pot d'eau plus petit que d'habitude — moins d'eau signifie plus d'amidon concentré dans l'eau de pâtes, ce qui est essentiel pour la sauce. Utilisez de l'eau bien salée mais allez légèrement plus léger que d'habitude puisque le Pecorino est très salé. Cuire à 2 minutes de moins que le paquet al dente temps — les pâtes finiront dans la poêle. Réserver au moins 1 tasse (240ml) d'eau de cuisson des pâtes avant de les égoutter. L'eau doit être légèrement laiteuse et opaque avec de l'amidon dissous. Égoutter sans rincer.",
      "visualCue": {
        "primaryTarget": "Pâtes cuites à 80 % cuites — tendres à l'extérieur mais avec un noyau ferme défini. L'eau de pâtes est laiteuse et opaque avec de l'amidon dissous.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Un noyau blanc crayeux important. Plus de 2 minutes de cuisson restant.",
            "action": "Continuez à cuisiner. Les pâtes doivent être plus loin avant de les transférer dans la casserole."
          },
          {
            "state": "Perfect",
            "description": "Tender dehors, centre ferme, et à peine cuit. L'eau de pâtes est opaque et laiteuse. Les pâtes ont absorbé le sel de l'eau.",
            "action": "Réserver l'eau de pâtes immédiatement, égoutter, transférer dans la poêle."
          },
          {
            "state": "Overdone",
            "description": "Entièrement doux, sans résistance. Sera trop cuit dans l'étape finale.",
            "action": "Travaillez très rapidement à travers les étapes restantes. Cacio e pepe avec des pâtes trop cuites est encore délicieux — juste moins textuel."
          }
        ]
      },
      "feelCue": "Agiter un brin: l'extérieur doit être lisse et cuit, mais vos dents doivent rencontrer un coup ferme au milieu — pas un croûte, pas un mousquet, mais une résistance propre."
    },
    {
      "nodeId": "step_3",
      "action": "Mélange",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_05"
      ],
      "outputState": "cheese_paste",
      "instructions": "Pendant la cuisson des pâtes, mélanger le Pecorino finement râpé et le Parmigiano dans un bol. Ajouter 2-3 cuillères à soupe de l'eau chaude des pâtes au fromage et remuer rapidement à l'aide d'une fourchette pour former une pâte. Cette pré-hydratation empêche le fromage de s'accrocher en nœuds à cordes lorsqu'il frappe les pâtes chaudes. La pâte doit être lisse et souple, sans morceaux secs de fromage. Si trop épais, ajouter quelques gouttes d'eau de pâtes. Cette étape est la clé structurelle du cacio e pepe sans grumeaux.",
      "visualCue": {
        "primaryTarget": "Une pâte lisse, jaune crème pâle, épaisse et cohésive comme du fromage à la crème adouci. Pas de morceaux secs de fromage râpé visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le fromage est encore sec et poudreux — l'eau de pâtes n'a pas été incorporée. Il reste des lumps de fromage sec.",
            "action": "Ajouter plus d'eau de pâtes une cuillère à café à la fois et travailler vigoureusement le mélange avec la fourchette."
          },
          {
            "state": "Perfect",
            "description": "Pâte lisse et épaisse avec une texture uniforme. Il tient sa forme lorsqu'il est écopé d'une cuillère, mais il est souple. Jaune pâle et légèrement brillant.",
            "action": "Gardez à température ambiante. La pâte entre à la fin de la cuisson."
          },
          {
            "state": "Overdone",
            "description": "L'eau et la minceur — trop d'eau de pâtes a été ajoutée. Le fromage se dissout plutôt que de former une pâte.",
            "action": "Ajouter une cuillère à soupe de Pecorino râpé sec et remuer pour épaissir. La pâte peut être plus lâche que l'idéal et encore travailler."
          }
        ]
      },
      "feelCue": "La pâte de fromage doit s'éloigner proprement des côtés du bol lorsqu'elle est remuée — une masse cohésive, pas un liquide ou des miettes."
    },
    {
      "nodeId": "step_4",
      "action": "Découpe",
      "inputs": [
        "al_dente_pasta",
        "bloomed_pepper",
        "ing_05"
      ],
      "outputState": "pasta_with_pepper",
      "instructions": "Retourner la poêle avec le poivre fleuri à feu moyen. Transférer les pâtes égouttées directement dans la casserole. Ajouter 3-4 cuillères à soupe de l'eau chaude des pâtes et mélanger vigoureusement avec des pinces pendant 1-2 minutes. Les pâtes doivent terminer la cuisson dans ce liquide féculent, qui deviendra légèrement crémeux à mesure que l'amidon des pâtes se dissout. La poêle devrait être très active — le lancer continu crée l'émulsion. Lorsque le liquide semble légèrement crémeux et que la plupart ont été absorbés, retirer la poêle de la chaleur.",
      "visualCue": {
        "primaryTarget": "Pâtes entièrement enrobées d'un liquide légèrement crémeux, infusé de poivre. Les pâtes ont l'air brillantes et chaque brin est uniformément poivré.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pâtes semblent sèches ou le liquide est encore très aqueuse et non crémeux. Les pâtes ne sont pas finies.",
            "action": "Ajouter plus d'eau de pâtes et continuer à jeter vigoureusement. La friction et l'amidon ont besoin de plus de temps."
          },
          {
            "state": "Perfect",
            "description": "Les pâtes sont al dente et brillantes. Le poivre est uniformément distribué. Le liquide est légèrement crémeux et commence à s'accrocher plutôt qu'à la piscine.",
            "action": "Retirer immédiatement du feu et ajouter la pâte de fromage."
          },
          {
            "state": "Overdone",
            "description": "Le liquide s'est complètement évaporé et les pâtes commencent à se coller ou à sécher.",
            "action": "Ajouter 2-3 cuillères à soupe d'eau chaude de pâtes avant d'ajouter le fromage."
          }
        ]
      },
      "feelCue": "La poêle devrait ressembler à un étourdissement vigoureux et humide que vous lancez, et non à une égratignure sèche. Si vous entendez des rayures, ajoutez de l'eau de pâtes."
    },
    {
      "nodeId": "step_5",
      "action": "Émulsifier",
      "inputs": [
        "pasta_with_pepper",
        "cheese_paste",
        "ing_05"
      ],
      "outputState": "finished_cacio_e_pepe",
      "instructions": "Hors le feu, ajoutez la pâte de fromage aux pâtes en deux additions, en jetant vigoureusement entre chacune. Ajouter les pâtes d'eau une cuillère à soupe à la fois si nécessaire pour desserrer la sauce — il doit couler et s'accrocher simultanément, pas s'asseoir comme un solide gommy. La combinaison de chaleur, d'amidon et de graisse émulsionnera le Pecorino dans une sauce transparente. Travaillez rapidement et continuellement. Si la sauce commence à se serrer et à se serrer, une petite éclaboussure d'eau de pâtes chaudes et un brassage vigoureux la ramèneront habituellement. Assiettez immédiatement dans des bols chauds. Terminer avec une dernière torsion de poivre fissuré et une poussière de Pecorino râpé.",
      "visualCue": {
        "primaryTarget": "Une sauce à la crème pâle uniforme et brillante qui enrobe tous les brins de fromage fondu ou de liquide poêlé.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La sauce est fine et aqueuse. La pâte de fromage n'a pas émulsifié — elle est encore maladroite et assise sur les pâtes.",
            "action": "Jetez plus vigoureusement. Replacez la poêle à feu très bas pendant 10-15 secondes tout en jetant."
          },
          {
            "state": "Perfect",
            "description": "Sa sauce brillante et soyeuse s'accroche uniformément à chaque brin. Pas de pièges, pas de piscines. Les pâtes glissent plutôt que de glisser quand une fourchette est tirée à travers.",
            "action": "Assortir immédiatement dans des bols chauds et servir."
          },
          {
            "state": "Overdone",
            "description": "Le fromage s'est emparé de masses collantes qui résistent au lancer. La sauce est cassée.",
            "action": "Ajouter une éclaboussure d'eau de pâtes très chaude et jeter hors-chauffe. Parfois, cela peut être sauvé; parfois, la texture est en permanence gommée — la saveur reste excellente."
          }
        ]
      },
      "feelCue": "Faites glisser une fourchette à travers les pâtes plaquées — la sauce doit revenir dans le sillon comme de l'eau lente, sans laisser de taches sèches ni de flaques. C'est la mesure d'une émulsion parfaite."
    }
  ]
};
