export default {
  "repoId": "master_sicilian_cannoli_001",
  "parentRepoId": null,
  "slug": "cannoli",
  "author": "ForkRecipe Kitchen",
  "title": "Cannoli Sicilieni",
  "description": "Des tubes de pâtisserie frits brun acajou, assez croustillants pour se briser à la première bouchée, remplis à l'ordre d'une crème sucrée de ricotta parfumée au zeste d'orange et cloués de mini chips de chocolat, le remplissage frais et dense contre la croûte chaude de la coquille.",
  "cuisine": "Italien",
  "culture": "Sicilien",
  "category": "desserts",
  "tags": [
    "Cannoli",
    "sicilienne",
    "Italien",
    "Pâtisserie frite",
    "ricotta",
    "chocolat",
    "dessert"
  ],
  "difficulty": 4,
  "activeTime": "1 hr",
  "totalTime": "2 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 4,
    "salty": 1,
    "sour": 1,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine pure (00 ou tout usage)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_02",
      "role": "Fat",
      "name": "Lard (froid, cube)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": [
        "beurre froid non salé"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Sweetener",
      "name": "Sucre de ricin (pour pâte)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_04",
      "role": "Seasoning",
      "name": "Sel fin de mer",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Solvent",
      "name": "Vin de Marsala (pour la pâte)",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": [
        "vin blanc",
        "Sherry doux"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Acid",
      "name": "Vin blanc",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_07",
      "role": "Protein",
      "name": "Jaune d'œuf (pour la pâte)",
      "ratioValue": 8,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_08",
      "role": "Binder",
      "name": "Blanc d'oeuf (pour sceller, légèrement battu)",
      "ratioValue": 5,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Fat",
      "name": "Huile neutre pour friture profonde",
      "ratioValue": 200,
      "defaultUnit": "parts",
      "substitutions": [
        "saindoux pour la saveur la plus traditionnelle"
      ]
    },
    {
      "ingId": "ing_10",
      "role": "Dairy",
      "name": "Ricotta de lait de mouton plein gras (bien drainé)",
      "ratioValue": 100,
      "defaultUnit": "parts",
      "substitutions": [
        "Ricotta de lait de vache, bien drainée"
      ]
    },
    {
      "ingId": "ing_11",
      "role": "Sweetener",
      "name": "Sucre glacé",
      "ratioValue": 25,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_12",
      "role": "Citrus",
      "name": "Zeste d'orange (finement râpé)",
      "ratioValue": 3,
      "defaultUnit": "parts",
      "substitutions": [
        "zeste de citron"
      ]
    },
    {
      "ingId": "ing_13",
      "role": "Aromatic",
      "name": "Extrait de vanille pure",
      "ratioValue": 2,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_14",
      "role": "Garnish",
      "name": "Mini chips de chocolat noir",
      "ratioValue": 20,
      "defaultUnit": "parts",
      "substitutions": [
        "peau d'orange confite finement hachée",
        "pistaches concassées"
      ]
    },
    {
      "ingId": "ing_15",
      "role": "Garnish",
      "name": "Pistolets (fins)",
      "ratioValue": 10,
      "defaultUnit": "parts",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Agenouillement",
      "inputs": [
        "ing_01",
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_07"
      ],
      "outputState": "cannoli_dough",
      "instructions": "Dans un grand bol, mélanger la farine, le sucre et le sel. Frottez le saindoux froid avec le bout des doigts jusqu'à ce que le mélange ressemble à une chapelure grossière, comme une pâte à croquer courte. Faire un puits et ajouter le Marsala, le vinaigre et le jaune d'œuf. Mélanger avec une fourchette jusqu'à ce que la pâte se réunisse, puis tourner sur une surface intacte et pétrir fermement pendant 5-8 minutes jusqu'à ce que lisse, souple et homogène. La pâte sera rigide, plus ferme que la pâte à pain. Cette rigidité est correcte: une pâte raide roulée assez fine va buller et blister dans l'huile. Enveloppez bien le film de collage et reposez-vous à température ambiante pendant 30 minutes.",
      "visualCue": {
        "primaryTarget": "Une boule de pâte lisse, ferme, légèrement olive avec une surface serrée et non collante et un léger arôme de Marsala.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux est rugueuse et chaotique, déchirante lorsqu'elle est étirée, avec des morceaux visibles de graisse non mélangée.",
            "action": "Knead plus longtemps — le saindoux doit être entièrement incorporé et le gluten suffisamment développé pour rouler très fin sans déchirer."
          },
          {
            "state": "Perfect",
            "description": "Doux et souple, ressort lentement lorsqu'il est poché, la surface a un léger gloss de la graisse. Ça sent le vin.",
            "action": "Reposez-vous 30 minutes pour laisser le gluten se détendre avant de rouler."
          },
          {
            "state": "Overdone",
            "description": "La toux est très élastique et se rétracte immédiatement lorsqu'elle est roulée, refusant de s'étirer.",
            "action": "Reposez-vous encore 15 minutes sous un chiffon humide avant de rouler."
          }
        ]
      },
      "feelCue": "La pâte doit être fraîche et ferme, notamment plus rigide que la pâte à pain ou à pâtes. Il doit se sentir légèrement cireux du saindoux, lisse, et pas du tout collant."
    },
    {
      "nodeId": "step_2",
      "action": "Forme",
      "inputs": [
        "cannoli_dough",
        "ing_08"
      ],
      "outputState": "shaped_shells",
      "instructions": "Rouler la pâte reposée sur une surface légèrement farinée à 1–2 mm d'épaisseur (aussi mince qu'une feuille de pâtes). À l'aide d'une coupe ronde de 10 à 12 cm, couper les cercles. Enveloppez chaque cercle autour d'un moule de tube de canoli, chevauchant les bords de 1 cm. Brossez le bord qui se chevauche avec du blanc d'œuf battu et appuyez fermement pour sceller — un joint lâche s'ouvrira dans l'huile et la coquille se défournera. Si les moisissures sont limitées, faire frire en lots et réutiliser. Pas de moisissures de foule.",
      "visualCue": {
        "primaryTarget": "Des cylindres serrés et bien chevauchants sur les moules — pas de trous, bords scellés, pâte uniformément mince et ridée naturellement de s'étirer autour de la forme.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La toux a été roulée trop épaisse — elle frirera densément et panifiable, sans éclater et croustillant.",
            "action": "Plus mince. Il devrait être assez mince pour lire un journal."
          },
          {
            "state": "Perfect",
            "description": "Tissu-fin, cylindres uniformément enveloppés avec des coutures fermement pressées. La pâte peut montrer quelques poches d'air, qui deviennent les ampoules de marque.",
            "action": "Faire frire immédiatement ou tenir réfrigéré jusqu'à 1 heure sur les moules."
          },
          {
            "state": "Overdone",
            "description": "La couture n'a pas été scellée avec du blanc d'œuf et est déjà gisant sur le moule.",
            "action": "Resceller avec du blanc d'oeuf frais et presser fermement pendant 30 secondes avant de frire."
          }
        ]
      },
      "feelCue": "Faites glisser un doigt le long de la coquille enveloppée — il devrait se sentir tendu et lisse, la couture légèrement plus épais sous le bout du doigt mais fermement collé. La coquille devrait être presque sèche au toucher."
    },
    {
      "nodeId": "step_3",
      "action": "Fry",
      "inputs": [
        "shaped_shells",
        "ing_09"
      ],
      "outputState": "fried_shells",
      "instructions": "Chauffer l'huile à 180°C (355°F) dans un poêlon profond et lourd. Abaissez doucement les coquilles enveloppées dans l'huile en lots de 2 à 3. Ils frisent rapidement — 2 à 3 minutes au total, tournant avec des pinces. Vous êtes à la recherche profonde, même acajou-brun avec la surface caractéristique cloquée du vin dans la pâte. Lorsqu'il est doré, soulever et saisir le moule avec un chiffon, puis glisser le tube frit soigneusement sur un support. La coquille se libérera facilement — ne la forcez pas. Refroidir les moules avant de les réutiliser. Égoutter les coquilles sur un rack.",
      "visualCue": {
        "primaryTarget": "Tubes acajou-brun profonds, cloqués et cahoteux de l'huile, légers et rigides — pas de taches pâles ou d'éclats huileux lorsqu'ils sont drainés.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Or pâle, doux et souple lorsqu'il est chaud — la coquille sera croustillante et pâteuse une fois fraîche.",
            "action": "Retournez à l'huile. Une coquille de cannoli doit être brun foncé pour obtenir le bris caractéristique."
          },
          {
            "state": "Perfect",
            "description": "Profondément doré et blister, léger, rigide et creux quand tapoté. Le motif de la plaquette thermoformée est prononcé. Ça glisse proprement.",
            "action": "Refroidir complètement sur un rack avant de remplir — une coquille chaude fera pleurer la ricotta."
          },
          {
            "state": "Overdone",
            "description": "Très brun foncé, odeur amère, certaines coquilles ont peut-être craqué.",
            "action": "Réduire la température de l'huile de 10°C. Les coquilles gravement brûlées ont un goût acride; les coquilles légèrement sombres continueront de fonctionner."
          }
        ]
      },
      "feelCue": "Tenez une coquille refroidie entre deux doigts et donnez - lui la pression la plus légère: elle doit craquer et se briser comme une tuile de céramique. Si elle fléchit ou fléchit, elle n'est pas encore croquante."
    },
    {
      "nodeId": "step_4",
      "action": "Whip",
      "inputs": [
        "ing_10",
        "ing_11",
        "ing_12",
        "ing_13",
        "ing_14"
      ],
      "outputState": "ricotta_filling",
      "instructions": "La ricotta doit être très bien drainée. La veille, placez-la dans un tamis à mailles fines au-dessus d'un bol au réfrigérateur pour l'égoutter pendant 12 à 24 heures; l'excès d'humidité rend un mince remplissage en pleurs qui adoucit immédiatement la coquille. Battre la ricotta drainée à froid avec le sucre glaçant, le zeste d'orange et la vanille jusqu'à ce qu'elle soit lisse et crémeuse. Pliez dans les chips au chocolat. Bouche: il doit être douxment crémeux, agrumes-avant, et riche. Réfrigérer jusqu'à froid et ferme. Transférer dans un sac de tuyauterie avec une buse de 1 cm.",
      "visualCue": {
        "primaryTarget": "Un remplissage de ricotta épais, blanc ivoire, légèrement grainé mais crémeux qui tient un pic raide et ne s'abaisse pas ou pleure quand laissé sur une assiette.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le remplissage est mince et aqueux, en poolant à la base du bol — la ricotta n'était pas assez drainée.",
            "action": "Refroidir le remplissage pendant une heure dans un tamis — la gravité fera du travail. Un remplissage humide est la plus grosse erreur de cannoli."
          },
          {
            "state": "Perfect",
            "description": "Épais, crémeux, tient des pics, des odeurs d'orange et de vanille. Reste brouillé sur une cuillère sans courir.",
            "action": "Réfrigérer jusqu'à utilisation. Remplissez les coquilles seulement au moment de servir."
          },
          {
            "state": "Overdone",
            "description": "Dépassez - vous dans une pâte dense et granuleuse: la graisse a commencé à se séparer ou elle semble cambriolée.",
            "action": "Plier dans une cuillerée à café de crème pour la relisser ensemble."
          }
        ]
      },
      "feelCue": "Goûtez une petite cuillère: le remplissage doit être frais, crémeux et légèrement granuleux de la ricotta — pas lisse comme la crème de pâtisserie. Le zeste d'orange devrait frapper l'arrière de votre palais d'abord, puis la douceur."
    },
    {
      "nodeId": "step_5",
      "action": "Assemblage",
      "inputs": [
        "fried_shells",
        "ricotta_filling",
        "ing_15"
      ],
      "outputState": "finished_cannoli",
      "instructions": "Remplir les cannoli seulement au moment de servir — même 15 minutes à l'avance adoucit la coquille. Maintenez une coquille et pipez le remplissage d'une extrémité jusqu'à ce qu'il apparaisse à l'autre. Appuyez sur un morceau d'orange confit ou une pincée de pistaches hachées dans le remplissage à chaque extrémité exposée. Poussière légèrement avec du sucre glace si désiré. Servir immédiatement, debout ou incliné élégamment. Un cannoli mangé une heure après le remplissage n'est pas un cannoli.",
      "visualCue": {
        "primaryTarget": "Un tube noir, blister éclatant aux deux extrémités avec un remplissage blanc, décoré avec l'ambre chaud d'orange confit ou le vert de pistaches — la coquille contraste dramatiquement avec la crème.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le remplissage est clairsemé, atteignant à peine les extrémités, et la coquille semble creuse.",
            "action": "Pipe plus de remplissage — le tube doit se sentir vraiment lourd avec de la crème."
          },
          {
            "state": "Perfect",
            "description": "Remplir les bouffées aux deux extrémités, la coquille est encore très rigide, le contraste entre la crème froide et la coquille croquante à température ambiante est intact.",
            "action": "Servir dans les 5 minutes suivant le remplissage."
          },
          {
            "state": "Overdone",
            "description": "Remplie à l'avance — la coquille s'est ramollie et est partie mâcher, la crème a pleuré dans la pâtisserie.",
            "action": "Pas de rétablissement — c'est une leçon. Remplir toujours au dernier moment possible."
          }
        ]
      },
      "feelCue": "La première morsure doit être une fissure audible et se briser, puis immédiatement vous êtes dans la crème dense, fraîche, légèrement grainée. Le contraste de la température et de la texture est tout le point — la coque est chaude du repos, le remplissage est froid."
    }
  ]
};
