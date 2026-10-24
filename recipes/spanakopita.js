export default {
  "repoId": "master_greek_spanakopita_001",
  "parentRepoId": null,
  "slug": "spanakopita",
  "author": "ForkRecipe Kitchen",
  "title": "Spanakopita (Pie aux épinards grecs)",
  "description": "Crisp, pâte phyllo dorée recouverte d'un remplissage d'épinards flétris, de feta émietté, d'aneth et d'oeufs — chaque bris, feuille de papier-fin donnant place à la crème, herby, remplissage salé à l'intérieur. Le genre de tarte qui disparaît au moment où il atteint la table.",
  "cuisine": "Grec",
  "culture": "Grec",
  "category": "vegetables",
  "tags": [
    "grec",
    "épinards",
    "Féta",
    "phyllo",
    "végétarien"
  ],
  "difficulty": 3,
  "activeTime": "45 min",
  "totalTime": "1 hr 30 min",
  "ratioSystem": "weight",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-27",
  "updatedAt": "2026-06-27",
  "flavorRadar": {
    "sweet": 0,
    "salty": 4,
    "sour": 1,
    "bitter": 1,
    "umami": 3,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Pâte de phyllo (fraîche ou entièrement dégelée)",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "phyllo fait maison à la main s'il est qualifié"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Structure",
      "name": "Épinards frais (ou congelés 500g, entièrement dégelés et pressés)",
      "ratioValue": 1000,
      "defaultUnit": "g",
      "substitutions": [
        "Fard suisse",
        "un mélange d'épinards et de vergers"
      ]
    },
    {
      "ingId": "ing_03",
      "role": "Dairy",
      "name": "Fromage feta, émietté",
      "ratioValue": 400,
      "defaultUnit": "g",
      "substitutions": [
        "un mélange de feta et de ricotta pour un remplissage plus crémeux"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Binder",
      "name": "Oeufs battus",
      "ratioValue": 3,
      "defaultUnit": "eggs",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Allium",
      "name": "Oignons de printemps (épitons), tranchés finement",
      "ratioValue": 4,
      "defaultUnit": "stalks",
      "substitutions": [
        "1 petit poireau, tranché"
      ]
    },
    {
      "ingId": "ing_06",
      "role": "Herb",
      "name": "Diluant frais, approximativement haché",
      "ratioValue": 30,
      "defaultUnit": "g",
      "substitutions": [
        "Persil à feuilles plates",
        "un mélange d'aneth et de menthe"
      ]
    },
    {
      "ingId": "ing_07",
      "role": "Fat",
      "name": "Huile d'olive ou beurre non salé fondu (pour brossage)",
      "ratioValue": 120,
      "defaultUnit": "ml",
      "substitutions": [
        "un mélange des deux pour une saveur plus riche"
      ]
    },
    {
      "ingId": "ing_08",
      "role": "Spice",
      "name": "Poivre noir fraîchement moulu",
      "ratioValue": 2,
      "defaultUnit": "g",
      "substitutions": []
    },
    {
      "ingId": "ing_09",
      "role": "Spice",
      "name": "Noix de muscade fraîchement râpée",
      "ratioValue": 1,
      "defaultUnit": "pinch",
      "substitutions": []
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Préparer le remplissage",
      "inputs": [
        "ing_02",
        "ing_03",
        "ing_04",
        "ing_05",
        "ing_06",
        "ing_08",
        "ing_09"
      ],
      "outputState": "filling",
      "instructions": "Si vous utilisez des épinards frais, flétrissez-les dans une casserole sèche ou avec une éclaboussure d'eau à feu vif jusqu'à ce qu'ils s'effondrent complètement, puis aspirez dans une calandre et refroidissez. Lorsque vous êtes assez frais pour manipuler, pressez les épinards dans vos poings — dur, sans relâche, poignée à poignée — jusqu'à ce qu'aucune eau ne sorte. C'est l'étape la plus critique de la recette: l'eau résiduelle d'épinards rend le remplissage humide, fait tourner le phyllo soggy et ruine la tarte finie. Un kilogramme d'épinards crus réduira à environ 200g de pâte sèche vert foncé. Transférer dans un grand bol et hacher grossièrement. Ajouter le feta émietté, les œufs battus, les oignons de printemps, l'aneth, le poivre noir et la muscade. Mélanger avec une fourche jusqu'à ce qu'elle soit cohésive — le remplissage doit ressembler à un mélange rugueux, vert, salé, pas à une pâte lisse. Goûtez (proscieusement — le feta est déjà salé) et ajoutez plus de poivre ou d'aneth au besoin. Mettez de côté.",
      "visualCue": {
        "primaryTarget": "Un remplissage rugueux et cohésif — épinards vert foncé, feta blanc émietté et flocons d'aneth — qui se tient ensemble lorsque vous le pressez dans votre paume sans pleurer de liquide.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le mélange est humide et pooling – le liquide s'est recueilli au fond du bol et le remplissage ne tiendra pas ensemble. Les œufs n'ont pas eu le temps de les lier.",
            "action": "Pressez plus d'épinards et égouttez le liquide. Ajouter une cuillère à soupe supplémentaire de feta émietté ou une poignée de chapelure pour absorber l'excès d'humidité avant de procéder."
          },
          {
            "state": "Perfect",
            "description": "Le remplissage est dense, humide mais pas humide, tenant sa forme lorsqu'il est pressé. Le feta est distribué en morceaux visibles et l'aneth est parfumé. Pas de bassin liquide.",
            "action": "Aller directement à l'assemblage — le remplissage est prêt."
          },
          {
            "state": "Overdone",
            "description": "Le remplissage a été surtravaillé dans une pâte homogène sans texture visible, le feta complètement décomposé.",
            "action": "La texture est perdue mais la saveur est fine. Procéder — la tarte sera bonne même si la coupe transversale semble plus uniforme."
          }
        ]
      },
      "feelCue": "Une poignée de remplissage pressée dans une boule devrait juste tenir ensemble, avec les miettes feta fournissant la résistance et le filetage des épinards à travers elle. Si votre paume est mouillée après avoir pressé, pressez plus d'épinards."
    },
    {
      "nodeId": "step_2",
      "action": "Base de la couche phyllo",
      "inputs": [
        "ing_01",
        "ing_07"
      ],
      "outputState": "phyllo_base",
      "instructions": "Préchauffer le four à 190°C / 375°F. Badigeonner une poêle de 30×22cm (ou équivalent) généreusement avec de l'huile ou du beurre fondu. Travailler avec du phyllo rapidement — il sèche et pleure dans les minutes d'exposition à l'air; garder la pile couverte avec une serviette humide entre les feuilles. Placez la première feuille de phyllo dans la casserole, laissant l'excédent accrocher sur les bords. Badigeonner généreusement toute la surface d'huile ou de beurre, jusqu'aux bords et aux coins. Poser une autre feuille perpendiculaire au premier, brosser à nouveau. Répétez ce processus de stratification et de brossage jusqu'à ce que vous ayez utilisé environ la moitié des feuilles de phyllo (8 à 10 feuilles selon l'épaisseur). La graisse entre chaque couche est ce qui crée la déchirure, couches séparées de la croûte finie — ne pas esquiver.",
      "visualCue": {
        "primaryTarget": "Une pile de phyllo translucide scintillante dans la poêle, les feuilles à peine reconnaissables comme des couches individuelles, chacune uniformément recouverte d'huile — pas de taches sèches, pâles ou déchirées.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Certaines feuilles sont à peine brossées et montrent des taches sèches, mates, ou plusieurs feuilles sont mises en couches non ensanglantées, collant comme un bloc.",
            "action": "Soulevez soigneusement les draps et brossez les zones manquées. Les feuilles non graissées se collent et forment une couche épaisse et pâteuse plutôt qu'une couche croquante."
          },
          {
            "state": "Perfect",
            "description": "Chaque feuille est uniformément scintillement, la pile translucide et gossamer-fin, la graisse répartie sur chaque centimètre de surface.",
            "action": "Spoon dans le remplissage et passer à la croûte supérieure."
          },
          {
            "state": "Overdone",
            "description": "Les feuilles coulent et l'huile s'accumule dans la base de la casserole. Chaque couche est fortement sur huilée et le phyllo est saturé.",
            "action": "Verser l'excédent d'huile de la casserole avant d'ajouter le remplissage. La croûte sera grasse plutôt que croustillante si elle est inondée de graisse."
          }
        ]
      },
      "feelCue": "Exécutez votre paume légèrement sur la feuille supérieure — elle devrait être lisse, fraîche et uniformément lissée, comme du papier de tissu recouvert d'un mince film d'huile, sans ride sèche où une tache a été manquée."
    },
    {
      "nodeId": "step_3",
      "action": "Remplir et en haut",
      "inputs": [
        "phyllo_base",
        "filling",
        "ing_01",
        "ing_07"
      ],
      "outputState": "assembled_spanakopita",
      "instructions": "Étendre le remplissage uniformément sur la base du phyllo en utilisant une spatule, le presser dans une couche uniforme et le mettre dans les coins. Pliez les bords de phyllo en surplomb vers l'intérieur sur le remplissage — ils feront partie de la croûte supérieure. Maintenant, couchez les feuilles de phyllo restantes sur le dessus de la même façon huilée, feuille par feuille, chacune brossée généreusement. Plier ou coller les feuilles de dessus en surplomb sous la tarte pour former une bordure soignée. Badigeonner l'ensemble de la surface supérieure très généreusement d'huile. Ne marquer les couches supérieures qu'avec un couteau tranchant dans les tailles de portions que vous voulez avant de cuire — le diamant classique ou les motifs carrés — couper à travers seulement les 4–5 feuilles du haut, pas tout le chemin jusqu'au remplissage. Cela empêche la croûte de se briser incontrôlablement lorsque vous coupez après la cuisson.",
      "visualCue": {
        "primaryTarget": "Une poêle bien remplie avec un haut de phyllo bien cousu et brillant — le motif de diamant marqué visible comme des incisions de la ligne de cheveux sur la surface éblouissante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les boulons de remplissage au centre avec le phyllo tiré serré dessus, ou les feuilles supérieures sont inégales et groupées à une extrémité.",
            "action": "Appuyez sur le remplissage à une épaisseur uniforme et lissez le dessus phyllo plat en appuyant doucement sur la paume avant de marquer."
          },
          {
            "state": "Perfect",
            "description": "À plat, uniformément rempli, avec des feuilles de dessus scintillantes qui suivent la surface du remplissage, les lignes marquées montrant clairement à travers les couches supérieures.",
            "action": "Cuire immédiatement à la température préchauffée du four."
          },
          {
            "state": "Overdone",
            "description": "Le couteau a été pressé jusqu'au remplissage, laissant le remplissage s'écouler à travers les canaux marqués et empêchant le dessus de croustiller.",
            "action": "Score très légèrement sur la prochaine tarte. Les découpes ne doivent pénétrer que dans les 3–4 feuilles du haut — l'idée est de pré-découper la croûte, pas le remplissage."
          }
        ]
      },
      "feelCue": "La tarte assemblée doit se sentir solide et plate sous votre paume — le remplissage assez dense pour supporter les feuilles du haut sans qu'elles trempent. Le haut doit se sentir lisse et tendu, pas rougi ou lâche."
    },
    {
      "nodeId": "step_4",
      "action": "Cuire",
      "inputs": [
        "assembled_spanakopita"
      ],
      "outputState": "finished_spanakopita",
      "instructions": "Cuire à 190°C / 375°F pendant 45 à 55 minutes jusqu'à ce que le sommet soit profond, même doré sur toute sa surface. Faire tourner la poêle une fois à mi-chemin pour assurer un brunissement uniforme. La tarte est faite lorsque les lignes marquées ont ouvert et le phyllo entre eux a gonflé et croustillé, les bords sont un peu plus foncé ambre, et les odeurs de cuisine de pâtisserie beurrée et d'herbes. Reposez-vous au moins 10 minutes avant de couper le long des lignes pré-correspondantes — le remplissage a besoin d'un moment pour fermer de l'éggy liquide à la tranche. Servir chaud ou à température ambiante ; il est également magnifique dans les deux sens.",
      "visualCue": {
        "primaryTarget": "Haut d'or-brun uniformément profond, les diamants marqués clairement délimités et gonflés, avec des bords légèrement plus foncés et une surface éclatante et croquante.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le dessus est d'or pâle ou ivoire, le phyllo est encore légèrement doux et ne se brise pas lorsqu'il est pressé. Le remplissage peut encore être lâche.",
            "action": "Retourner au four encore 10 minutes. Le phyllo pâle n'est pas encore croustillant et le remplissage ne sera pas complètement réglé."
          },
          {
            "state": "Perfect",
            "description": "De profondeur, même dorée, les sections de diamant se sont levées et croustillantes, les bords broyés à l'ambre. Un robinet sur la surface semble creux. Le remplissage est entièrement réglé et tranche proprement.",
            "action": "Reposez-vous 10 minutes, puis coupez le long des lignes. Chaque portion doit se lever proprement avec des couches visibles."
          },
          {
            "state": "Overdone",
            "description": "Le dessus s'obscurcit jusqu'à un brun-noir brûlé et le phyllo s'écroule et poudré plutôt que croquant.",
            "action": "Tenter immédiatement avec du papier et réduire la chaleur à 160°C pour le temps restant. Vérifiez les taches brûlées qui doivent être parées avant de servir."
          }
        ]
      },
      "feelCue": "Tapez sur la surface de la tarte cuite — elle doit sembler creuse et craqueler légèrement sous le joint, comme une peau de tambour. Coupez une pièce d'angle et écoutez la rupture du phyllo. Chaque morsure doit donner d'abord croquant puis céder à la crème, salé, herby remplissage."
    }
  ]
};
