export default {
  "repoId": "master_peruvian_peruvianajiamarillopaste_001",
  "parentRepoId": null,
  "slug": "peruvian-aji-amarillo-paste",
  "author": "ForkRecipe Kitchen",
  "title": "Pâte péruvienne Aji Amarillo",
  "description": "L'âme soleil-orange de la cuisine péruvienne - ají amarillo chilis blanchi pour enlever la dureté, puis mélangé avec une lécher d'huile dans une pâte vive, fruitée, modérément chaude qui est la base essentielle pour ceviche, causa, et ají de gallina.",
  "cuisine": "Pérou",
  "culture": "Pérou",
  "category": "condiments",
  "tags": [
    "condiment",
    "végétalien",
    "Sans gluten",
    "Chili",
    "périuvien",
    "jaune",
    "pâte",
    "fruité"
  ],
  "difficulty": 1,
  "activeTime": "20 min",
  "totalTime": "30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 1,
    "sour": 1,
    "bitter": 1,
    "umami": 1,
    "heat": 3
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Heat",
      "name": "Chilis ají amarillo frais (ou congelés)",
      "ratioValue": 500,
      "defaultUnit": "g",
      "substitutions": [
        "potré ají amarillo pâte (skip toutes les étapes, utiliser directement)",
        "habanero + poivron jaune 1:2 pour une saveur approximative"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Huile neutre",
      "ratioValue": 30,
      "defaultUnit": "ml",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 3,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Liquid",
      "name": "Eau, pour blanchir",
      "ratioValue": 1,
      "defaultUnit": "pot",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Blanchir",
      "inputs": [
        "ing_01",
        "ing_04"
      ],
      "outputState": "blanched_chilis",
      "instructions": "Portez une grande casserole d'eau à ébullition. Pendant ce temps, porter des gants, enlever les tiges de l'amarillo ají. Scorez chaque chili dans le sens de la longueur avec un couteau à assaisonner et retirez les graines et les veines blanches — celles-ci tiennent la chaleur la plus dure et les enlèvent donne à la pâte une chaleur modérée et fruitée plutôt qu'une fonte du visage. Ajouter le chilis à l'eau bouillante. Blanchiment pendant 3 minutes. Égoutter, jeter l'eau blanchissante et répéter le blanchir deux fois avec de l'eau bouillante fraîche. Trois blanches est la méthode traditionnelle pour enlever l'amertume brute et aiguë de l'amarillo ají tout en préservant sa saveur fruitée distinctive et sa couleur orange vive. Ne sautez pas les taches multiples.",
      "visualCue": {
        "primaryTarget": "Une chair de chili, orange vif, légèrement adoucie, sans amertume au goût: une chaleur fruitée et chaude plutôt qu'acride.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les chilis sont encore fermes et la pâte goûte durement amer et cru quand goûté après juste un blanch.",
            "action": "Blanchissez encore deux fois à l'eau bouillante fraîche. Chaque blanch enlève une couche d'amertume."
          },
          {
            "state": "Perfect",
            "description": "Les chilis sont entièrement adoucis et orange vif. Quand une pièce est goûtée, la saveur est fruitée, légèrement florale, modérément chaude, et plus amère ou crue.",
            "action": "Égoutter soigneusement et procéder au mélange."
          },
          {
            "state": "Overdone",
            "description": "Les chilis ont été blanchis tellement de fois qu'ils sont devenus pâles, jaunes d'olive et doux — une grande partie de la saveur fruitée a été lavée.",
            "action": "Procéder avec la pâte — ajouter une pression de jus de lime lors de l'utilisation pour restaurer une certaine luminosité."
          }
        ]
      },
      "feelCue": "Après trois blanches, le chilis doit se sentir doux et céder lorsqu'il est pressé — comme un poivre cuit mûr — sans tomber dans la boue."
    },
    {
      "nodeId": "step_2",
      "action": "Mixer",
      "inputs": [
        "blanched_chilis",
        "ing_02",
        "ing_03"
      ],
      "outputState": "finished_aji_amarillo_paste",
      "instructions": "Transférer le chilis égoutté et blanchi dans un mélangeur. Ajouter l'huile neutre et le sel. Mélanger en haut pendant 2 à 3 minutes jusqu'à ce que la pâte soit complètement lisse. Si le mélangeur lutte, ajouter de l'eau une cuillère à soupe à la fois. Goûtez et ajustez le sel. La pâte finie doit goûter de la chaleur tropicale fruitée — pensez à un chili modérément chaud avec des notes de mangue et de fruits de passion. Plongez dans un tamis à mailles fines si vous voulez une pâte particulièrement soyeuse pour des applications raffinées comme la causa. Entreposer dans un pot hermétique jusqu'à 2 semaines, ou congeler dans des plateaux de glaçons jusqu'à 6 mois.",
      "visualCue": {
        "primaryTarget": "Une pâte vive et orangée avec une texture lisse et veloutée, la couleur du coucher du soleil, brillante de l'huile.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est épaisse avec des morceaux visibles de peau et de fibres. La couleur est inégale.",
            "action": "Mélanger pendant une autre minute et filtrer à travers un tamis à mailles fines, en appuyant fermement."
          },
          {
            "state": "Perfect",
            "description": "Entièrement lisse, pâte intensément orange avec une texture uniforme et brillante. Sens fruité et légèrement floral. Goûte fruité et chaud — chaud mais pas brutal.",
            "action": "Garnir, réfrigérer ou congeler pour utilisation comme ingrédient de base."
          },
          {
            "state": "Overdone",
            "description": "La pâte a été mélangée si longtemps qu'elle est devenue mousseuse et oxydée — orange plus pâle avec des bulles d'air.",
            "action": "Laisser reposer 10 minutes pour que les bulles se déposent. La saveur n'est pas affectée."
          }
        ]
      },
      "feelCue": "La pâte parfaitement lisse doit se sentir veloutée et uniforme lorsqu'elle est frottée entre les doigts — pas de grain, pas de bouts à cordes. Sa couleur devrait tacher les doigts une orange vive."
    }
  ]
};
