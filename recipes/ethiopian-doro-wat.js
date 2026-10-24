export default {
  "repoId": "master_ethiopian_ethiopiandorowat_001",
  "parentRepoId": null,
  "slug": "ethiopian-doro-wat",
  "author": "ForkRecipe Kitchen",
  "title": "Éthiopien Doro Wat",
  "description": "Des pilons de poulet et des oeufs durs braisés profondément dans un ragoût d'oignon et de berbère caramélisé, un plat d'une profondeur extraordinaire construit non pas à partir de bouillons, mais de patience, d'oignon rouge et d'épices.",
  "cuisine": "Éthiopien",
  "culture": "Éthiopien",
  "category": "proteins",
  "tags": [
    "protéine",
    "poulet",
    "ethiopienne",
    "berbère",
    "ragoût",
    "Sans gluten"
  ],
  "difficulty": 3,
  "activeTime": "30 min",
  "totalTime": "3 hours",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 1,
    "bitter": 2,
    "umami": 3,
    "heat": 4
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Piles de poulet (ou cuisses désossées)",
      "ratioValue": 900,
      "defaultUnit": "g",
      "substitutions": [
        "morceaux de poulet osseux"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Oeufs durs, pelés et rayés",
      "ratioValue": 4,
      "defaultUnit": "whole",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Allium",
      "name": "Oignons rouges, très finement coupés",
      "ratioValue": 600,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Spice",
      "name": "Mélange d'épices berbères",
      "ratioValue": 40,
      "defaultUnit": "g",
      "substitutions": [
        "Mélange: 2 c. à thé paprika, 1 c. à thé caïenne, 1 c. à thé coriandre, 1/2 c. à thé allspice, 1/4 c. à thé girofles, 1/4 c. à thé fenugrec"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Fat",
      "name": "Niter kibbeh (beurre épicé éthiopien)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "beurre non salé + 1/2 c. à thé chacun : curcuma, cumin, graines de nigella"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Allium",
      "name": "Gousses d'ail hachées",
      "ratioValue": 20,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Aromatic",
      "name": "Gingembre frais, râpé",
      "ratioValue": 15,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Acid",
      "name": "Jus de citron frais",
      "ratioValue": 20,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Seasoning",
      "name": "Sel",
      "ratioValue": 10,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_10",
      "role": "Liquid",
      "name": "Eau ou bouillon de poulet",
      "ratioValue": 200,
      "defaultUnit": "ml",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Caraméliser",
      "inputs": [
        "ing_03"
      ],
      "outputState": "caramelized_onions",
      "instructions": "Dans un grand pot ou un four hollandais, ajouter les oignons rouges en dés, sans graisse. Cuire à feu moyen, en remuant toutes les quelques minutes, pendant 35 à 45 minutes. Oui, sèche — pas d'huile, pas de beurre. Les oignons vont d'abord libérer leur eau, vapeur, rétrécir considérablement, puis commencer lentement à caraméliser dans leurs propres sucres. Ce processus lent et sec est l'âme du doro wat — il construit une base profonde, douce et salée qu'aucun stock ne peut reproduire. Les oignons doivent passer du violet cru à une masse d'acajou foncée et jammy avant d'ajouter de la graisse.",
      "visualCue": {
        "primaryTarget": "Après 40 minutes, la masse de l'oignon a diminué à moins d'un tiers de son volume original et est un brun acajou foncé uniforme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 20 minutes, les oignons sont dorés et doux mais encore orange-tan de couleur. La netteté de l'oignon brut est toujours présente.",
            "action": "Continuez à cuire à sec. Le but est l'acajou profond, pas l'or. Cela ne peut être précipité sans sacrifier la profondeur."
          },
          {
            "state": "Perfect",
            "description": "Une masse sombre, jammy, profondément colorée. Les oignons sentent doux et complexes, comme la soupe d'oignon réduite à son essence. Le volume a diminué de 70%.",
            "action": "Ajouter le niter kibbeh et commencer à construire la base berbère."
          },
          {
            "state": "Overdone",
            "description": "Les oignons se sont séchés et s'attrapent sur le fond du pot. Certains patchs deviennent noirs.",
            "action": "Ajouter une cuillère à soupe d'eau et gratter le fond. Réduire légèrement la chaleur pour le temps restant."
          }
        ]
      },
      "feelCue": "Frapper le fond du pot avec une cuillère en bois — il devrait y avoir une certaine résistance car les sucres d'oignon caramélisent à la poêle, mais ne brûlent pas. Cet amour est la saveur."
    },
    {
      "nodeId": "step_2",
      "action": "Faire infuser",
      "inputs": [
        "caramelized_onions",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "berbere_base",
      "instructions": "Ajouter le niter kibbeh à la base d'oignon foncé et remuer pour incorporer. Ajouter l'ail haché et le gingembre râpé et remuer 1 minute. Ajouter le mélange d'épices berbères à la fois et remuer continuellement pendant 2 à 3 minutes à feu moyen — les épices doivent rôtir dans la graisse pour fleurir leurs composés solubles dans la graisse. La masse sera assez sèche et très sombre. C'est exact. Ajouter l'eau et remuer pour créer une sauce épaisse et rugueuse.",
      "visualCue": {
        "primaryTarget": "Une pâte épaisse et profonde de mahogany rouge. Les colorants solubles dans le gras du berbere ont fleuri dans le niter kibbeh, rendant le gras lui-même rouge.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le berbère a été ajouté, mais les épices sentent toujours crus et tranchants, dures plutôt que grillées.",
            "action": "Continuer à remuer sur le feu pendant une autre minute. La graisse dans le niter kibbeh fleurira les épices."
          },
          {
            "state": "Perfect",
            "description": "La pâte est sombre, richement colorée et parfumée — complexe plutôt que simplement épicée. La graisse est visiblement rougetée.",
            "action": "Ajouter les morceaux de poulet et l'eau. Passez à la longue braise."
          },
          {
            "state": "Overdone",
            "description": "Le berbère a commencé à brûler — odeur acride et pâte très sombre avec des taches noires.",
            "action": "Ajouter immédiatement l'eau pour arrêter la brûlure. Mélanger vigoureusement et procéder."
          }
        ]
      },
      "feelCue": "La cuisine doit se remplir d'un arôme intense et en couches: le caramel à l'oignon, le berbère chaud et la profondeur grillée du niter kibbeh se lèvent tous ensemble."
    },
    {
      "nodeId": "step_3",
      "action": "Braiser",
      "inputs": [
        "berbere_base",
        "ing_01",
        "ing_02",
        "ing_08",
        "ing_09",
        "ing_10"
      ],
      "outputState": "finished_doro_wat",
      "instructions": "Ajouter les morceaux de poulet à la base des berbères et les enrober soigneusement. Ajouter toute l'eau restante et le sel. Couvrir et cuire à feu moyen-doux pendant 45 minutes, en retournant le poulet toutes les 15 minutes. Au bout de 45 minutes, marquez les œufs durs avec un couteau (4–6 coupes superficielles à travers le blanc) et nichez-les dans le ragoût — les coupes permettent à la sauce de pénétrer dans les œufs. Défaire et cuire pendant 20 minutes pour réduire la sauce. Ajouter le jus de citron dans les 5 dernières minutes. Le doro wat fini devrait être sombre, profondément aromatisé, et assez épais pour tenir sa forme sur injera.",
      "visualCue": {
        "primaryTarget": "Le poulet est profondément rouge acajou et tendancieux. Les œufs sont colorés rouge-orange du bergère. La sauce est épaisse et sombre, pas aqueuse.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 45 minutes, le poulet résiste à un couteau à l'articulation. La sauce est encore fine et rouge vif.",
            "action": "Continuez à faire des larmes. Le poulet devrait atteindre le point où il offre une résistance minimale. Ajouter plus d'eau si la sauce diminue trop vite."
          },
          {
            "state": "Perfect",
            "description": "Le poulet tombe de l'os avec une légère pression. Les œufs sont teintés jusqu'au blanc. La sauce est foncée, épaisse et brillante — elle enrobe une cuillère sans courir.",
            "action": "Ajouter le jus de citron, goûter au sel et servir sur injera."
          },
          {
            "state": "Overdone",
            "description": "Le poulet s'est complètement effondré. La sauce est très épaisse et commence à coller.",
            "action": "Ajouter 2-3 c. à soupe d'eau. Le poulet déchiqueté est encore excellent sur injera — servir immédiatement."
          }
        ]
      },
      "feelCue": "Appuyez sur le pilon de poulet contre le pot — il devrait offrir seulement la résistance symbolique et commencer à se séparer à l'articulation sous la légère pression. La sauce devrait s'accrocher à tout ce qu'elle touche."
    }
  ]
};
