export default {
  "repoId": "master_french_macaron_shells_001",
  "parentRepoId": null,
  "slug": "macaron-shells",
  "author": "ForkRecipe Kitchen",
  "title": "Coquilles de macaron français (méthode de la meringue italienne)",
  "description": "Deux wafers de farine d'amande rejoints par un oreiller de crème au beurre — leurs surfaces lisses comme de la porcelaine polie, leurs pieds étouffés comme un collier de dentelle, leurs intérieurs doux et donnant après un jour de maturation. La méthode de meringue italienne leur donne une stabilité et un brillant qui résiste à l'humidité et aux navires sans s'effondrer.",
  "cuisine": "Français",
  "culture": "Pâtisserie française",
  "category": "desserts",
  "tags": [
    "Macaron",
    "français",
    "meringue",
    "Amandes",
    "pâtisserie",
    "Cuisson",
    "Sans gluten"
  ],
  "difficulty": 5,
  "activeTime": "1 hr 30 min",
  "totalTime": "3 hr 30 min",
  "ratioSystem": "parts",
  "stars": 0,
  "forks": 0,
  "contributors": 1,
  "license": "CC-BY-SA",
  "createdAt": "2026-06-28",
  "updatedAt": "2026-06-28",
  "flavorRadar": {
    "sweet": 5,
    "salty": 0,
    "sour": 0,
    "bitter": 1,
    "umami": 0,
    "heat": 0
  },
  "ingredients": [
    {
      "ingId": "ing_01",
      "role": "Structure",
      "name": "Farine d'amande blanchie, extra-fine (soufflée deux fois)",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": [
        "Farine de noisette pour une variation sonore"
      ]
    },
    {
      "ingId": "ing_02",
      "role": "Sweetener",
      "name": "Sucre glacé (10X sucres de confiseries), criblé",
      "ratioValue": 1,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_03",
      "role": "Binder",
      "name": "Blancs d'œuf vieillis — divisés: blancs crus pour tant-pour-tant, et blancs pour meringue",
      "ratioValue": 0.74,
      "defaultUnit": "parts total (split as directed)",
      "substitutions": [
        "blanc d'oeuf frais (repos à découvert au réfrigérateur 48 heures jusqu'à l'âge)"
      ]
    },
    {
      "ingId": "ing_04",
      "role": "Sweetener",
      "name": "Sucre de canne (pour le sirop de meringue italien)",
      "ratioValue": 0.74,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_05",
      "role": "Liquid",
      "name": "Eau (pour le sirop)",
      "ratioValue": 0.18,
      "defaultUnit": "parts",
      "substitutions": []
    },
    {
      "ingId": "ing_06",
      "role": "Seasoning",
      "name": "Crème de tartre (stabilise la meringue)",
      "ratioValue": 0.003,
      "defaultUnit": "parts",
      "substitutions": [
        "quelques gouttes de vinaigre de vin blanc"
      ]
    }
  ],
  "processNodes": [
    {
      "nodeId": "step_1",
      "action": "Mixer",
      "inputs": [
        "ing_01",
        "ing_02"
      ],
      "outputState": "tant_pour_tant",
      "instructions": "Peser précisément la farine d'amande et le sucre glace — les macarons sont une formule de cuisson, pas une recette, et un écart de 5g dans un lot de 300g affectera le résultat. Poussez-les ensemble dans un robot alimentaire pendant 30 secondes pour briser les amas et homogénéiser la taille des particules. Sirotez un tamis à mailles fines dans un grand bol, en jetant les particules grossières d'amande qui ne passeront pas, ces particules bosselées créent des bosses sur la surface du macaron. Si votre farine d'amande est plus grossière, retransformer et tamiser à nouveau. La tant-pour-tant (amande de poids égal et sucre) doit être complètement lisse, sèche et fine, comme du sable très fin. Ajouter la première partie des blancs d'oeufs vieillis (environ la moitié du total des blancs d'oeufs) au tant-pour-tant et mélanger avec une spatule jusqu'à ce que vous ayez une pâte épaisse, comme une pâte. Couvrir et réserver.",
      "visualCue": {
        "primaryTarget": "Une poudre d'amande et de sucre complètement lisse, sans croûtes ni particules grossières, mélangée avec des blancs d'œufs dans une pâte épaisse et homogène.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Des particules d'amande grossière encore visibles. Le tamis a trop laissé derrière.",
            "action": "Traiter la farine d'amande plus longtemps ou acheter une farine d'amande plus fine. Les particules rejetées peuvent être utilisées dans les cookies."
          },
          {
            "state": "Perfect",
            "description": "Poudre fine soyeuse qui traverse complètement le tamis avec un pressage doux. La pâte faite de blancs d'oeufs est épaisse et s'étend lentement. Pas de bosses.",
            "action": "Réserver la pâte et faire la meringue italienne."
          },
          {
            "state": "Overdone",
            "description": "La farine d'amande commence à exprimer de l'huile et à s'enfoncer dans une pâte avant de se mélanger au sucre.",
            "action": "Pulse en courts éclats, pas en continu. La farine d'amande peut se transformer en beurre d'amande si elle est trop transformée."
          }
        ]
      },
      "feelCue": "Frottez une pincée de tante-pour-tant entre vos doigts — elle doit être aussi fine et sèche que la poudre de talc, sans grain du sucre et sans huile de l'amande. Cette finesse donne à un macaron sa peau lisse."
    },
    {
      "nodeId": "step_2",
      "action": "Faire bouillir",
      "inputs": [
        "ing_04",
        "ing_05"
      ],
      "outputState": "sugar_syrup",
      "instructions": "Mélanger le sucre et l'eau dans une petite casserole propre. Chauffer à feu moyen-vif sans remuer — l'agitation favorise la cristallisation. Monter un thermomètre à bonbons ou utiliser un thermomètre à lecture instantanée. Alors que le sirop chauffe, commencez à fouetter la deuxième partie des blancs d'œuf vieillis avec la crème de tartre dans le bol d'un mélangeur de stand muni de l'attache de fouet, à vitesse moyenne. Lorsque le sirop atteint 115°C (239°F), augmenter le mélangeur à grande vitesse. Lorsque le sirop atteint exactement 118–121°C (244–250°F, stade de boule molle), retirer immédiatement de la chaleur. Avec le mélangeur qui tourne en haut, verser le sirop chaud dans un flux lent, mince et régulier vers l'intérieur du bol — jamais directement sur le fouet, qui le tournera en fils de sucre sur les côtés du bol. Le sirop chaud cuit et stabilise la meringue telle qu'elle est incorporée.",
      "visualCue": {
        "primaryTarget": "Sirop clair, légèrement visqueux avec de grandes bulles lentes à 118°C. Une goutte d'eau froide forme une boule souple et souple.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Le sirop est toujours inférieur à 115°C. Mince et très fluide. Une goutte d'eau froide se dissout.",
            "action": "Continuer le chauffage sans remuer. La température monte rapidement au-dessus de 100°C."
          },
          {
            "state": "Perfect",
            "description": "De grandes bulles paresseuses s'élèvent lentement. Le thermomètre mesure 118-121°C. Une goutte d'eau glacée forme une boule souple et souple que vous pouvez écraser entre les doigts.",
            "action": "Verser immédiatement dans les blancs d'oeufs."
          },
          {
            "state": "Overdone",
            "description": "Le sirop a dépassé 125°C. Il saisira la meringue dans des fils rigides et cristallisés lorsqu'il sera versé.",
            "action": "Jeter et recommencer le sirop. Il n'y a pas de récupération du sirop de sucre trop cuit dans cette application."
          }
        ]
      },
      "feelCue": "Une goutte de sirop à la bonne température atterrissant sur une surface de métal froid sonne comme une tique aiguë et se met immédiatement dans une perle souple, presque gommée — pas un bonbon cassant dur, pas une flaque mince."
    },
    {
      "nodeId": "step_3",
      "action": "Fouetter",
      "inputs": [
        "sugar_syrup"
      ],
      "outputState": "italian_meringue",
      "instructions": "Après avoir incorporé tout le sirop dans le fouet blanc, continuez à battre haut pendant 8-10 minutes jusqu'à ce que la meringue atteigne des pics fermes et brillants et que le bol se sent juste chaud — pas chaud — au toucher. La meringue italienne devrait être blanche vif, très brillante, et tenir des pics raides qui se bouclent légèrement à l'extrémité. Si vous levez le fouet et le tournez à l'envers, le pic doit tenir sa forme sans glisser. La meringue doit refroidir à environ 40°C avant de la plier dans la pâte d'amande — trop chaude et elle fera fondre la graisse dans la farine d'amande; trop froide et elle se raidira et résistera au pliage. La meringue peut se reposer, couvert, jusqu'à 10 minutes pendant que vous préparez le macaronage.",
      "visualCue": {
        "primaryTarget": "Meringue blanche vif, très brillante avec des pics raides qui se bouclent légèrement à l'extrémité. Complètement lisse, pas de granules de sucre visibles, se sent juste chaud au toucher.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La meringue est encore molle et ivre. Les pics se replient complètement. Le bol est plutôt chaud.",
            "action": "Continuez à fouetter. Il a besoin de plus de temps pour le sirop chaud pour stabiliser complètement les blancs."
          },
          {
            "state": "Perfect",
            "description": "Des pics brillants, brillants et blancs qui se bouclent légèrement mais ne s'enfoncent pas. Le bol est agréablement chaud, pas chaud. La meringue est dense et lourde.",
            "action": "Laisser refroidir légèrement puis commencer le macaronage immédiatement."
          },
          {
            "state": "Overdone",
            "description": "La meringue est sèche et granuleuse. Il a été battu trop longtemps après le refroidissement et a perdu la cohésion.",
            "action": "Malheureusement, il ne peut pas être sauvé. La structure de la meringue est irréversiblement endommagée. Recommence."
          }
        ]
      },
      "feelCue": "Frottez une petite quantité entre vos doigts — il devrait se sentir parfaitement lisse, comme du satin. Pas gritty, pas mouillé, pas raide. La température au sommet du fouet doit être comme une peau chaude, pas de l'eau chaude."
    },
    {
      "nodeId": "step_4",
      "action": "Incorporer délicatement",
      "inputs": [
        "italian_meringue",
        "tant_pour_tant"
      ],
      "outputState": "macaronage_batter",
      "instructions": "Ajouter la meringue italienne à la pâte d'amande en trois ajouts, pliant avec une large spatule en silicone. La technique est appelée macaronage: utilisez le plat de la spatule pour frotter la pâte contre le côté du bol dans un mouvement de balayage, en tournant le bol avec votre autre main. Cela dégonfle délibérément la meringue pour obtenir la consistance correcte du ruban. Le macaronage est complet lorsque la pâte tombe de la spatule dans un ruban épais et continu — dessinez la spatule à travers la pâte et l'ascenseur: elle doit se régénérer en 10 secondes, effaçant complètement la trace. Si la trace prend plus de 15 secondes pour disparaître, continuez à plier. Si la pâte coule comme du liquide, vous êtes allé trop loin. La bonne pâte se déplace lentement, comme la lave, et quand un ruban tombe sur la surface, elle s'enfonce en 8-10 secondes. La plupart des lots prennent 40 à 60 coups de pli.",
      "visualCue": {
        "primaryTarget": "La patte s'écoule de la spatule dans un ruban large, lent et continu. Quand il atterrit, le ruban s'enfonce dans la surface en 8-10 secondes, ne laissant aucune trace.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "La pâte est encore raide et tombe de la spatule dans des touffes épaisses. Le ruban est fier pendant plus de 15 secondes avant de couler. Les coquilles auront des sommets qui ne fondent pas.",
            "action": "Continuez le plis de macaronage. Comptez les coups — vous êtes probablement à 20-30 et avez besoin de 40-60."
          },
          {
            "state": "Perfect",
            "description": "Ruban lent et fluide. La trace tirée disparaît en 8-10 secondes. La pâte ressemble à de la lave, épaisse, lente, mais fluide. Surface brillante.",
            "action": "Transférer immédiatement dans un sac et un tuyau."
          },
          {
            "state": "Overdone",
            "description": "La pâte coule comme une fine pâte à crêpes. Le ruban coule instantanément sans aucune trace. La pâte a été exagérée.",
            "action": "Il n'y a pas de rétablissement. Les coquilles s'étaleront à plat sans pieds. Utilisez la pâte pour faire une éponge de joconde à la place."
          }
        ]
      },
      "feelCue": "La pâte doit sonner comme un lent, visqueux verser — pas une épeautre, pas un filet. Tenez la spatule à 30 cm au-dessus du bol et laissez tomber la pâte : elle doit s'étirer dans une langue longue et ininterrompue avant de relâcher."
    },
    {
      "nodeId": "step_5",
      "action": "Cuire au four",
      "inputs": [
        "macaronage_batter"
      ],
      "outputState": "finished_macaron_shells",
      "instructions": "Piper la pâte sur des plaques de cuisson parcheminées en rondelles de 3,5 cm, en maintenant le sac de tuyauterie perpendiculairement à la feuille à une hauteur de 1 cm. Après la tuyauterie, appuyez fermement sur la plaque de cuisson contre le comptoir 5 fois pour libérer des bulles d'air piégées. Brûlez les bulles avec un cure-dent. Laisser reposer les rondelles à température ambiante pendant 30 à 60 minutes, jusqu'à ce qu'une peau sèche se forme à la surface — lorsque vous touchez légèrement l'un avec l'extrémité d'un doigt, il ne doit pas coller et doit se sentir légèrement laxiste mais ferme. Cette peau force l'air en expansion à pousser à travers le fond pendant la cuisson, créant ainsi les pieds caractéristiques. Cuire à 150°C (300°F) dans un four à convection (ou 160°C / 320°F conventionnel) pendant 13-15 minutes. Faites tourner la poêle à la marque de 7 minutes. Les coquilles sont faites lorsqu'elles se détachent proprement du parchemin sans résistance.",
      "visualCue": {
        "primaryTarget": "Des surfaces lisses et plates en porcelaine, des pieds bien définis à la base et une couleur même pâle (ou la couleur de colorant ajouté). Les coquilles se lèvent proprement du parchemin.",
        "spectrum": [
          {
            "state": "Underdone",
            "description": "Les coquilles se sentent douces et collantes lorsqu'elles sont pressées. La base résiste au levage proprement du parchemin. Les pieds sont présents mais l'intérieur est humide.",
            "action": "Retourner au four 2 minutes de plus. Testez encore — ils ont souvent besoin d'une minute de plus que vous ne l'attendez."
          },
          {
            "state": "Perfect",
            "description": "Les coquilles se sentent sèches et fermes à la surface. Les pieds sont bien étouffés. Ils lèvent proprement le parchemin. La surface supérieure est lisse sans fissures. Les intérieurs sont légèrement mâchés.",
            "action": "Laisser refroidir complètement sur la casserole avant de la remplir. Les coquilles de macaron s'améliorent après 24 heures de repos au réfrigérateur."
          },
          {
            "state": "Overdone",
            "description": "Les coquilles sont trop sèches, cassantes et commencent à colorier autour des bords. Surfaces tranchées.",
            "action": "Toujours utilisable sinon fissurée. Remplissez immédiatement avec une ganache humide qui les réhydratera. Ne pas remplir de crème au beurre car elle ne restaurera pas l'humidité."
          }
        ]
      },
      "feelCue": "Exécutez un bout de doigt sur la surface de la coquille sèche avant de la faire cuire — il devrait se sentir comme du papier mat lisse, à peine collant, pas mouillé ou brillant. Après cuisson, une pincée douce devrait donner une petite croûte sèche à la surface avant de céder à un intérieur doux et légèrement mâché."
    }
  ]
};
