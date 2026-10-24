export default {
  "repoId": "master_italian_calamari_fritti_001",
  "parentRepoId": null,
  "slug": "calamari-fritti",
  "author": "ForkRecipe Kitchen",
  "title": "Calamari Fritti",
  "description": "Des anneaux de calmars frits et des tentacules aérés dans de la semoule assaisonnée et sont tombés dans l'huile chaude jusqu'à briser l'or — servis immédiatement avec des quartiers de citron, parce que la fenêtre de trente secondes entre parfait et mou est réelle et impitoyable.",
  "cuisine": "Italien",
  "culture": "Sud de l ' Italie",
  "category": "seafood",
  "tags": [
    "calamars",
    "calmars",
    "frits",
    "Italien",
    "italiques du Sud",
    "Produits de la mer",
    "antipasto"
  ],
  "difficulty": 2,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 0,
    "salty": 2,
    "sour": 0,
    "bitter": 0,
    "umami": 2,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Protein",
      "name": "Calmars frais, nettoyés (tubes + tentacules)",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "calmars congelés, entièrement dégelés et séchés"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Starch",
      "name": "Semoule fine (ou moitié de farine 00, moitié de semoule)",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "Farine polyvalente (moins croquante)",
        "farine de riz (sans gluten)"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Starch",
      "name": "Farine de maïs",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 6,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Spice",
      "name": "Poivre noir, fraichement craqué",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Spice",
      "name": "Poivre de Cayenne",
      "ratioValue": 1,
      "defaultUnit": "g",
      "substitutions": [
        "flocons de poivre rouge séché doux"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile végétale, pour friture profonde (fleur de soleil ou arachide)",
      "ratioValue": 1000,
      "defaultUnit": "ml",
      "substitutions": [
        "Huile de son de riz",
        "huile de raisin"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Citrus",
      "name": "Coins de citron, pour servir",
      "ratioValue": 2,
      "defaultUnit": "ea",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Trancher",
      "inputs": [
        "ing_01"
      ],
      "outputState": "prepped_dry_squid",
      "instructions": "Tirez les tentacules des tubes et jetez la plume (la colonne vertébrale en plastique clair à l'intérieur du tube). Retirez la peau violet-gris des tubes si elle n'a pas déjà été enlevée par le poissonnier. Couper chaque tube en anneaux d'environ 1cm de large. Gardez les tentacules entiers si petits, ou coupez la couronne en deux si grands. Maintenant — c'est l'étape la plus importante — tapez tout désossé dans plusieurs changements de serviettes en papier et laissez étaler sur un support pendant 10 minutes. Calmar humide = calamar à la vapeur et caoutchouteux. Calmar sec = calamar croustillant et tendre.",
      "visualCue": {
        "primaryTarget": "Les anneaux de calmar et les tentacules sont entièrement secs, blancs mats et légèrement frisés aux bords coupés. Pas de piscines sous le plateau.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les anneaux sont encore visiblement humides et brillants avec l'humidité. Placés sur du papier, ils s'imprégnent immédiatement.",
            "action": "Patrez encore avec du papier sec frais et laissez découvert 5 minutes supplémentaires. Ne précipitez pas cette étape — le calmar humide fera plonger la température de l'huile et produira des résultats soyeux."
          },
          {
            "state": "Perfect",
            "description": "Les anneaux sont blancs mats et secs. Ils se sentent légèrement collants au toucher à partir de leurs protéines naturelles. Pas d'humidité visible sur le plateau.",
            "action": "Procéder à l'assaisonnement du mélange de revêtement."
          },
          {
            "state": "Overdone",
            "description": "Le calmar est si longtemps assis à température ambiante qu'il a commencé à sécher aux bords et à sentir un peu plus fort.",
            "action": "Manteau et frit immédiatement. Les bords finement séchés s'accrocheront mieux au revêtement, et la friture scellera rapidement dans l'humidité restante."
          }
        ]
      },
      "feelCue": "Prenez une bague et maintenez-la entre le pouce et le doigt — elle doit être légèrement collante et sèche, comme une bande de caoutchouc séchée, non glissante ni mouillée. Slip signifie plus de temps de séchage est nécessaire."
    },
    {
      "nodeId": "step_2",
      "action": "Mélanger",
      "inputs": [
        "prepped_dry_squid",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06"
      ],
      "outputState": "coated_squid",
      "instructions": "Battre la semoule, la fécule de maïs, le sel, le poivre noir et la cayenne dans un grand bol peu profond ou un sac en papier. Travailler en deux lots, ajouter le calmar et jeter pour enrober soigneusement, puis soulever chaque morceau et secouer chaque grain excédentaire de revêtement — il ne devrait rester qu'un mince film. L'excès de revêtement tombe dans l'huile, brûle et pollue l'huile tout en rendant le calamar lourd et pâteux. Poser les morceaux enduits en une seule couche sur une plaque jusqu'à ce qu'ils soient prêts à frire.",
      "visualCue": {
        "primaryTarget": "Chaque anneau et tentacule est recouvert d'une fine, mate, même poussière de semoule. Le blanc naturel du calmar est à peine visible sous le revêtement. Pas d'embrouille.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "De grandes taches de calmars nus visibles — le revêtement n'est pas uniforme parce que le calmar est encore trop humide, ou pas assez de revêtement a été utilisé.",
            "action": "Retournez dans le bol de revêtement. Le revêtement doit couvrir toute la surface ou ces taches nues seront caoutchouteuses et pâles."
          },
          {
            "state": "Perfect",
            "description": "Fin, même, revêtement mat partout. Lorsque vous secouez un anneau, le revêtement reste mis — pas de touffes ou de tas de semoule lâche.",
            "action": "Faire revenir immédiatement l'huile chaude. Ne laissez pas le calamar couché s'asseoir trop longtemps ou l'humidité dans le calmar hydratera le revêtement et le rendra collant."
          },
          {
            "state": "Overdone",
            "description": "Revêtement épais, visiblement grumeux, avec des boules de semoule humide accrochées au calmar. Les anneaux sont lourds.",
            "action": "Agiter vigoureusement et retirer les plaques épaisses avec vos doigts. Une épaisse vapeur de revêtement plutôt que des croustillants."
          }
        ]
      },
      "feelCue": "Tenez un anneau enduit et soufflez doucement dessus — l'excès de semoule libre devrait dériver, laissant une fine couche sèche qui s'accroche comme si l'anneau avait simplement été légèrement pulvérisé avec de la neige."
    },
    {
      "nodeId": "step_3",
      "action": "Frire",
      "inputs": [
        "coated_squid",
        "ing_07"
      ],
      "outputState": "fried_calamari",
      "instructions": "Chauffer l'huile dans un pot large, profond et lourd à 180–185°C (une pincée de revêtement doit tomber immédiatement et monter à la surface). Faire frire le calmar en petits lots — pas plus qu'une poignée à la fois — pendant exactement 60 à 90 secondes. Ne partez pas. Les anneaux cuisinent très vite et la cuisson excessive de même 30 secondes les rend caoutchouteux. Ils sont faits quand l'ambre d'or partout et flottant librement dans l'huile. Retirez - vous avec une souche d'araignée et placez - la immédiatement sur une grille de fils — jamais de serviettes en papier sur le fond, qui piègent la vapeur.",
      "visualCue": {
        "primaryTarget": "Les anneaux et les tentacules sont uniformément or-ambre partout, légèrement gonflés, et flottant librement dans l'huile. Les tentacules sont enroulées et croquantes, comme de petites fleurs frites.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les anneaux sont en or pâle et coulent toujours dans l'huile après 60 secondes. Le revêtement ne semble pas croquant lorsqu'une bague est levée et tapée. Le calmar est probablement encore à croquer à l'intérieur.",
            "action": "Donnez-leur 20 secondes de plus et retirez. La température de l'huile a peut - être baissé, qu'elle se rétablisse entre les lots."
          },
          {
            "state": "Perfect",
            "description": "Deep amber-or, croquant-sounding quand tapoté. Les tentacules sont dorés et entièrement enroulés. Les anneaux ont un léger ressort lorsqu'ils sont pressés et sentent la semoule grillée et la mer.",
            "action": "Retirez-vous immédiatement sur une grille. Assaisonner de sel dès qu'ils sortent de l'huile."
          },
          {
            "state": "Overdone",
            "description": "Brun foncé, même dans les poches de semoule. Le calmar intérieur a rétréci et contracté, et la texture sera dure et caoutchouteuse indépendamment de l'extérieur croquant.",
            "action": "Servir immédiatement avec du citron supplémentaire à couper à travers toute amertume. Prochain lot, réduisez le temps à 60 secondes et assurez-vous que l'huile est à la bonne température."
          }
        ]
      },
      "feelCue": "Soulevez un anneau de l'huile avec l'araignée — il devrait sembler légèrement croustillant quand il clique contre d'autres anneaux sur la grille, comme un vent délicat carillon, pas doux et silencieux comme du carton humide."
    },
    {
      "nodeId": "step_4",
      "action": "Assaisonner",
      "inputs": [
        "fried_calamari",
        "ing_04",
        "ing_08"
      ],
      "outputState": "finished_calamari_fritti",
      "instructions": "L'instant où le calamar sort de la grille — dans les 10 secondes — assaisonne généreusement avec du sel fin alors que l'huile à la surface est encore chaude et que le sel adhère. Disposer sur une plaque chaude doublée d'une serviette en papier (le papier en dessous est très bien à ce stade puisque le calamar est déjà sur un support en fil; la serviette est pour l'esthétique côté table, pas pour les re-déguster). Servir immédiatement avec des quartiers de citron. Calamari Fritti n'attend personne — il a une fenêtre de perfection mesurée en minutes.",
      "visualCue": {
        "primaryTarget": "Des anneaux d'or ambré et des tentacules empilés sur la plaque, avec des cristaux de sel fins visibles à la surface. La vapeur qui monte de la pile est parfumée de semoule frite.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Calamari n'a pas encore été assaisonné. Sans sel appliqué immédiatement après la friture, le revêtement ne le tiendra pas et le calmar aura un goût plat.",
            "action": "Assaisonner maintenant, même si une minute s'est écoulée — il continuera à adhérer à l'huile chaude à la surface."
          },
          {
            "state": "Perfect",
            "description": "Des anneaux dorés légèrement salés et croquants qui craquent en mordant. Des coins de citron sur le côté. La table sent les fruits de mer frits et l'huile assaisonnée.",
            "action": "Mangez immédiatement. Toute la fenêtre de la perfection est de 3 à 4 minutes maximum."
          },
          {
            "state": "Overdone",
            "description": "Calamari s'est assis 5+ minutes. La croûte s'est ramollie et les anneaux commencent à se sentir cuireux à partir de la vapeur piégée du calmar chaud à l'intérieur.",
            "action": "Étaler sur un plateau de cuisson et retourner au four à 220°C pendant 3 minutes pour ré-crisp. Bien, pas parfait, mais récupérable."
          }
        ]
      },
      "feelCue": "Ramassez une bague et mordez — vous voulez entendre une croûte propre et audible de la croûte de semoule suivie immédiatement du rendement tendre et légèrement doux du calmar à l'intérieur. Deux textures, pas d'écart entre elles."
    }
  ]
};
