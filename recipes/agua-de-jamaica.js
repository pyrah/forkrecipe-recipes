export default {
  "repoId": "master_mexican_agua_jamaica_001",
  "parentRepoId": null,
  "slug": "agua-de-jamaica",
  "author": "ForkRecipe Kitchen",
  "title": "Agua de Jamaica (Hibiscus Water)",
  "description": "L'eau pourpre du Mexique — les pétales d'hibiscus séchés, imprégnés d'eau juste bouillie jusqu'à ce que le liquide devienne un grenat profond, comme un bijou, puis sucré, pressé avec de la chaux, et dilué dans une tarte, agua fresca florale qui est à la fois rafraîchissante et complexe. La couleur seule vous arrête dans vos traces.",
  "cuisine": "Mexicain",
  "culture": "Mexicain",
  "category": "beverages",
  "tags": [
    "boisson",
    "Mexique",
    "hibiscus",
    "agua-fresca",
    "végétalien",
    "Sans gluten",
    "sans produits laitiers"
  ],
  "difficulty": 1,
  "activeTime": "10 min",
  "totalTime": "30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 2,
    "salty": 0,
    "sour": 4,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Fleurs séchées d'hibiscus (jamaïque)",
      "ratioValue": 60,
      "defaultUnit": "g",
      "substitutions": [
        "Sacs à thé en hibiscus séché — 8 sacs pour une concentration similaire"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Liquid",
      "name": "Eau bouillante (à tremper)",
      "ratioValue": 1,
      "defaultUnit": "L",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre blanc",
      "ratioValue": 120,
      "defaultUnit": "g",
      "substitutions": [
        "nectar d'agave",
        "piloncillo pour une douceur caramel plus profonde"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Acid",
      "name": "Jus de chaux frais (environ 2 chaux)",
      "ratioValue": 60,
      "defaultUnit": "ml",
      "substitutions": [
        "jus de citron"
      ]
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Eau froide (à diluer)",
      "ratioValue": 1,
      "defaultUnit": "L",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Streep",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "hibiscus_concentrate",
      "instructions": "Placer les fleurs d'hibiscus séchées dans un pichet ou un bol résistant à la chaleur. Versez l'eau bouillante directement au - dessus d'eux; l'eau deviendra presque immédiatement pourpre. Mélanger une fois pour submerger tous les pétales, puis les laisser à découvert pendant 20 minutes. Une pente plus courte donne une agua rose mince; une pleine 20 minutes produit un concentré profond qui tient sa couleur par dilution. Incorporer le sucre pendant que le concentré est encore chaud et se dissout complètement.",
      "visualCue": {
        "primaryTarget": "Un liquide rouge rubis profond, presque opaque à pleine concentration, avec les pétales obscurcis du magenta brillant au grenat terne – la couleur du vin rouge maintenu contre une lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Après 5 minutes, le liquide est encore un rose fin et brillant — plus d'eau de rose que de concentré.",
            "action": "Continuez. Toute la profondeur de couleur et de saveur de tarte prend 20 minutes."
          },
          {
            "state": "Perfect",
            "description": "Un rouge rubis foncé et concentré qui enveloppe la cuillère. Les pétales ont cédé leur couleur et s'assoient pâles et boiteux. L'odeur est tarte et florale, légèrement comme la canneberge.",
            "action": "Incorporer le sucre maintenant, bien qu'il soit chaud, pour le dissoudre complètement, puis extirper les pétales."
          },
          {
            "state": "Overdone",
            "description": "Plus de 45 minutes; le liquide a pris sur un bord légèrement boueux, terreux et les pétales ont commencé à se briser dans le brassage.",
            "action": "Plongez immédiatement dans un tamis fin et diluez comme d'habitude — le goût est toujours agréable, avec plus de profondeur, bien qu'une touche moins florale."
          }
        ]
      },
      "feelCue": "Plonger une cuillère à café blanche dans le concentré et regarder la couleur grimper la céramique — il devrait tacher profondément et instantanément, comme un jus de fruits rouge fait, pas s'écouler comme du thé faible."
    },
    {
      "nodeId": "step_2",
      "action": "Poignée",
      "inputs": [
        "hibiscus_concentrate"
      ],
      "outputState": "strained_concentrate",
      "instructions": "Réglez un tamis à mailles fines sur un grand pot ou pichet et versez le concentré sucré d'hibiscus à travers lui. Appuyez doucement sur les pétales usés avec l'arrière d'une cuillère pour extraire chaque dernière goutte — mais ne les forcez pas à travers la maille, car ils obscurciront le liquide. Jetez les pétales usés. Le concentré tendu doit être un rubis-rouge clair et profond avec un reflet brillant du sucre dissous.",
      "visualCue": {
        "primaryTarget": "Un concentré limpide, brillant, rouge profond sans débris flottants, s'enfuyant proprement du tamis avec une translucence brillante, comme un bijou lorsqu'il est tenu à la lumière.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les pétales et les fibres flottent toujours librement dans la cruche — l'étape de déformation a été précipitée.",
            "action": "Versez dans le tamis une deuxième fois. La jamaïque nuageuse n'est pas désagréable, mais les pétales libres dans la boisson sont indésirables."
          },
          {
            "state": "Perfect",
            "description": "Liquide rubis cristallin, sucré et profond, sentant l'hibiscus de tarte et la chaux. Il tient sa couleur sans brunir.",
            "action": "Ajouter l'eau froide, le jus de lime et le goût pour équilibrer."
          },
          {
            "state": "Overdone",
            "description": "Forced trop dur à travers le tamis, le liquide est devenu nuageux des fragments de pétales.",
            "action": "Laisser reposer pendant 5 minutes et verser à travers un filtre à café pour clarifier, ou accepter le trouble — le goût n'est pas affecté."
          }
        ]
      },
      "feelCue": "Le concentré doit se sentir légèrement sirupeux et collant entre les doigts à partir du sucre dissous — nettement plus dense que l'eau pure."
    },
    {
      "nodeId": "step_3",
      "action": "Finition",
      "inputs": [
        "strained_concentrate",
        "ing_04",
        "ing_05"
      ],
      "outputState": "finished_agua_jamaica",
      "instructions": "Verser l'eau de dilution froide dans le pichet et presser le jus de lime. Bien mélanger et goûter : une bonne agua de jamaica doit être farcie, avec la douceur jouant un rôle de support. Si elle a un goût plat, ajouter plus de jus de lime. Si c'est trop aigre, ajoutez un peu plus de sucre. Réfrigérer jusqu'à froid — au moins 30 minutes — et servir sur beaucoup de glace. La couleur s'éclaircira du rouge grenat à un rouge canneberge vif comme elle dilue, ce qui est exactement juste.",
      "visualCue": {
        "primaryTarget": "Un agua fresca rouge canneberge vif dans un verre sur glace, lumineux et clair, avec une couleur qui semble presque artificiellement saturée — il est entièrement naturel.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La boisson a l'air rose pâle et a un goût insipide: soit on a utilisé du concentré sous-tendu, soit on a ajouté trop d'eau de dilution.",
            "action": "Ajouter plus de concentré d'hibiscus ou réduire l'eau de dilution de moitié la prochaine fois. La couleur et la saveur sont des reflets directs de la concentration."
          },
          {
            "state": "Perfect",
            "description": "Un rouge de canneberge vif et éclatant qui a un goût fortement floral et de tarte, avec la douceur qui le retient de se faire sucer. On dirait un bijou dans le verre.",
            "action": "Servir immédiatement sur la glace ou réfrigérer jusqu'à 3 jours."
          },
          {
            "state": "Overdone",
            "description": "Trop de jus de lime a fait basculer la boisson dans un territoire fortement aigre et le rouge s'est légèrementompé à un rose-orange de l'acide.",
            "action": "Incorporer un peu plus de sucre pour équilibrer l'acide et diluer avec une eau plus froide."
          }
        ]
      },
      "feelCue": "La boisson froide devrait se sentir presque effervescente sur la langue à partir des composés acides et floraux — une tarte à l'eau de la bouche qui vous fait atteindre à nouveau pour le verre immédiatement."
    }
  ]
};
