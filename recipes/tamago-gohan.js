export default {
  "repoId": "master_japanese_tamago_gohan_001",
  "parentRepoId": null,
  "slug": "tamago-gohan",
  "author": "ForkRecipe Kitchen",
  "title": "Tamago Kake Gohan (TKG)",
  "description": "Un oeuf cru fissuré directement sur du riz chaud à la vapeur et brassé dans une émulsion soyeuse et crépuscule — le petit déjeuner aimé du Japon et la nourriture de confort tard dans la nuit, élevé par quelques gouttes de soja et la chaleur du riz seul faisant toute la cuisson.",
  "cuisine": "Japonais",
  "culture": "Nationaux",
  "category": "eggs",
  "tags": [
    "œuf",
    "riz",
    "Petit déjeuner",
    "confort",
    "tkg",
    "simple",
    "Japonais"
  ],
  "difficulty": 1,
  "activeTime": "5 min",
  "totalTime": "5 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 1,
    "salty": 3,
    "sour": 0,
    "bitter": 0,
    "umami": 4,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Starch",
      "name": "Riz à grains courts japonais frais (très chaud)",
      "ratioValue": 200,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Protein",
      "name": "Oeufs très frais (température ambiante)",
      "ratioValue": 1,
      "defaultUnit": "egg",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Seasoning",
      "name": "sauce soja",
      "ratioValue": 10,
      "defaultUnit": "ml",
      "substitutions": [
        "sauce de soja blanche",
        "tamari"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Garnish",
      "name": "Oignon vert tranché finement",
      "ratioValue": 5,
      "defaultUnit": "g",
      "substitutions": [
        "Graines de sésame grillées",
        "bandes de nori"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Séparer et battre l'œuf",
      "inputs": [
        "ing_02"
      ],
      "outputState": "separated_egg",
      "instructions": "Couper l'œuf et séparer le jaune du blanc en deux petits bols. Battre le blanc seul avec des baguettes pendant 30 secondes jusqu'à ce qu'il forme une mousse lâche, légèrement mousseuse - c'est la technique secrète TKG. Le blanc battu enrobera les grains de riz individuellement, donnant au plat final une texture aérée et crémeuse plutôt qu'une texture visqueuse. Le jaune est ajouté en dernier, brut, comme une finale.",
      "visualCue": {
        "primaryTarget": "Le blanc n'est plus clair et lissé — il a pris un aspect légèrement opaque, mousseux avec de petites bulles visibles.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le blanc est encore entièrement transparent et liquide. Pas de bulles.",
            "action": "Continue de battre. De 20 à 30 coups de baguettes, vous voulez une aération légère, pas des pics raides."
          },
          {
            "state": "Perfect",
            "description": "Le blanc est vaguement mousseux et opaque. Ça coule dans un ruisseau. Il laisse une faible trace quand la baguette est levée.",
            "action": "Verser immédiatement sur le riz chaud avant que la mousse ne dégonfle."
          },
          {
            "state": "Overdone",
            "description": "Le blanc est devenu raide et maladroit. Je ne distribuerai pas le riz.",
            "action": "Ajouter le jaune et remuer ensemble — la lécithine dans le jaune va le desserrer. Continuez."
          }
        ]
      },
      "feelCue": "Le blanc battu devrait tomber dans un ruban lâche et lent, légèrement plus épais que l'eau, mais beaucoup plus mince que la crème."
    },
    {
      "nodeId": "step_2",
      "action": "Mélange",
      "inputs": [
        "ing_01",
        "separated_egg",
        "ing_03"
      ],
      "outputState": "tkg_base",
      "instructions": "Faire fondre le riz très chaud dans un bol. Versez immédiatement le blanc d'œuf battu sur le riz et remuez rapidement avec des baguettes en petits cercles pendant 20 à 30 secondes – la chaleur du riz place doucement le blanc dans un revêtement soyeux sur chaque grain. Ajouter la sauce soja et mélanger. Le riz doit avoir l'air brillant et uniforme, pas humide.",
      "visualCue": {
        "primaryTarget": "Chaque grain de riz est enduit individuellement et scintillement. La masse a l'air légère et séparée, non entachée d'une flaque d'œufs. Une faible couleur d'ivoire partout.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le blanc est toujours cru et mis en commun au fond du bol. Le riz sur le dessus semble sec et intact.",
            "action": "Mélanger plus vigoureusement, en grattant du bas vers le haut — le riz chaud en dessous doit toucher le blanc."
          },
          {
            "state": "Perfect",
            "description": "Riz brillant, aéré et uniformément enrobé. La vapeur monte. Le mélange semble léger et écorcable. Un léger arôme d'œuf, pas cru.",
            "action": "Faites un puits au centre et déposez le jaune cru."
          },
          {
            "state": "Overdone",
            "description": "Le blanc d'oeuf a cuit en flocons caoutchouteux. Le riz sent fortement l'oeuf cuit.",
            "action": "Encore délicieux — vous avez fait une texture de riz frit lâche. Ajouter le jaune et servir."
          }
        ]
      },
      "feelCue": "Mélangez une cuillère dans votre bouche — les grains doivent se sentir enduits individuellement dans un film léger et glissant, chacun distinct. S'ils se sentent coincés dans une masse d'oeufs, le blanc a été ajouté trop lentement."
    },
    {
      "nodeId": "step_3",
      "action": "Finition",
      "inputs": [
        "tkg_base",
        "ing_02",
        "ing_04"
      ],
      "outputState": "finished_tkg",
      "instructions": "Faites un petit puits au centre du riz et nichez le jaune cru dedans. Éparpiller l'oignon vert sur le dessus. Servir immédiatement — le jaune est laissé entier pour que le mangeur se casse à table, libérant un ruisseau riche et non cuit à travers le riz déjà assaisonné. Mangez dans les 2 minutes; la chaleur de report continuera de régler le jaune s'il reste trop longtemps.",
      "visualCue": {
        "primaryTarget": "Un jaune orangé de bijou, assis dans un puits peu profond de riz blanc brillant, éparpillé d'oignon vert vif.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Sans objet — ce plat est intentionnellement cru au jaune.",
            "action": "Si vous êtes mal à l'aise avec l'œuf cru, remuez immédiatement le jaune et laissez la chaleur résiduelle le régler partiellement pendant 30 secondes."
          },
          {
            "state": "Perfect",
            "description": "Yolk est intact, brillant et profondément orange. L'oignon vert est brillant. Le riz fume. Le bol entier sent l'oeuf propre, le soja et le riz chaud.",
            "action": "Donnez le bol à quelqu'un et regardez-les casser le jaune à la table."
          },
          {
            "state": "Overdone",
            "description": "Yolk est resté assis plus de 5 minutes et a développé une fine membrane cuite à partir de la chaleur de report.",
            "action": "Incorporez - le rapidement — il est toujours délicieux, tout simplement moins éclaboussable."
          }
        ]
      },
      "feelCue": "Briser le jaune avec une baguette et le remuer — il doit couler comme de l'or liquide, enrober visiblement le riz dans une deuxième couche de richesse, plus épais et plus onctueux que le blanc cuit."
    }
  ]
};
