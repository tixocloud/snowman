var roundTwo = {
    'Science': {
        '100': {
            'q': {'en': 'Which part of the body has a collection of 22 bones?',
                'fr': 'Quelle partie du corps a un ensemble de 22 os?'},
            'a': {'en': 'Arm', 'fr': 'Le bras'},
            'b': {'en': 'Skull', 'fr': 'Le crâne'},
            'c': {'en': 'Torso', 'fr': 'Le torse'},
            'color': COLOR.ADULT,
            'answer': 'b'
        },
        '200': {
            'q': {'en': 'Which organ pumps blood?',
                'fr': 'Quel organe pompe le sang?'},
            'a': {'en': 'Liver', 'fr': 'Le foie'},
            'b': {'en': 'Heart', 'fr': 'Le coeur'},
            'c': {'en': 'Intestine', 'fr': 'Les instestins'},
            'color': COLOR.RED,
            'answer': 'b'
        },
        '300': {
            'q': {'en': 'What is the largest planet in the solar system?', 'fr': 'Quelle est la plus grande planète du système solaire?'},
            'a': {'en': 'Jupiter', 'fr': 'Jupiter'},
            'b': {'en': 'Earth', 'fr': 'Terre'},
            'c': {'en': 'Neptune', 'fr': 'Neptune'},
            'color': COLOR.BLUE,
            'answer': 'a'
        },
        '400': {
            'q': {'en': 'What is the heaviest animal in the world?', 'fr': 'Quel est l’animal le plus lourd au monde?'},
            'a': {'en': 'Blue whale', 'fr': 'La baleine bleue'},
            'b': {'en': 'African Elephant', 'fr': 'L’éléphant africain'},
            'c': {'en': 'Hippopotamus', 'fr': 'L’hippopotame'},
            'color': COLOR.YELLOW,
            'answer': 'a'
        },
        '500': {
            'q': {
                'en': 'Sound travels in?',
                'fr': 'Le son voyage en ...'
            },
            'a': {'en': 'Straight lines', 'fr': 'Lignes droites'},
            'b': {'en': 'Waves', 'fr': 'Vagues'},
            'c': {'en': 'Zigzags', 'fr': 'Zigzags'},
            'color': COLOR.GREEN,
            'answer': 'b'
        },
    },
    'Geography': {
        '100': {
            'q': {
                'en': 'In the desert, which of these is very rare?',
                'fr': 'Dans le désert, qu’est-ce qui est le plus rare?'
            },
            'a': {
                'en': 'Sand',
                'fr': 'Le sable'
            },
            'b': {
                'en': 'Rain',
                'fr': 'La pluie'
            },
            'c': {
                'en': 'Sun',
                'fr': 'Le soleil'
            },
            'color': COLOR.RED,
            'answer': 'b'
        },
        '200': {
            'q': {
                'en': 'What is the capital city of Canada?',
                'fr': 'Quelle est la capitale du Canada?'
            },
            'a': {
                'en': 'Toronto',
                'fr': 'Toronto'
            },
            'b': {
                'en': 'Ottawa',
                'fr': 'Ottawa'
            },
            'c': {
                'en': 'Montreal',
                'fr': 'Montréal'
            },
            'color': COLOR.BLUE,
            'answer': 'b'
        },
        '300': {
            'q': {
                'en': 'Which layer of the earth do humans actually live on?',
                'fr': 'Sur quelle couche terrestre est-ce que les humains vivent véritablement?'
            },
            'a': {
                'en': 'Core',
                'fr': 'Le centre'
            },
            'b': {
                'en': 'Crust',
                'fr': 'La croûte'
            },
            'c': {
                'en': 'Mantle',
                'fr': 'Le manteau'
            },
            'color': COLOR.YELLOW,
            'answer': 'b'
        },
        '400': {
            'q': {
                'en': 'What is the highest mountain in the world?',
                'fr': 'Quelle est la plus haute montagne au monde?'
            },
            'a': {
                'en': 'Mount Fuji',
                'fr': 'Mont Fuji'
            },
            'b': {
                'en': 'Mount Kilimanjaro',
                'fr': 'Mont Kilimanjaro'
            },
            'c': {
                'en': 'Mount Everest',
                'fr': 'Mont Everest'
            },
            'color': COLOR.GREEN,
            'answer': 'c'
        },
        '500': {
            'q': {
                'en': 'Name the world’s largest archipelago. Hint: This archipelago forms a natural barrier between the Indian and Pacific oceans.',
                'fr': 'Nommez le plus grand archipel au monde. Indice: Cet archipel forme une barrière naturelle entre l’océan Indien et l’océan Pacifique.',
            },
            'a': {
                'en': 'French Polynesia',
                'fr': 'Polynésie française'
            },
            'b': {
                'en': 'Franz Joseph Land, off northern Russia',
                'fr': 'Terre Franz Joseph, au nord de la Russie'
            },
            'c': {
                'en': 'Indonesia',
                'fr': 'Indonésie'
            },
            'color': COLOR.ADULT,
            'answer': 'c'
        },
    },
    'Movies': {
        '100': {
            'q': {
                'en': 'Number of children in the movie “Cheaper by the Dozen”',
                'fr': 'Le nombre d’enfants dans le film « Moins cher à la douzaine » (Cheaper by the dozen)'
            },
            'a': {
                'en': 'Eight',
                'fr': 'Huit'
            },
            'b': {
                'en': 'Ten',
                'fr': 'Dix'
            },
            'c': {
                'en': 'Twelve',
                'fr': 'Douze'
            },
            'color': COLOR.YELLOW,
            'answer': 'c'
        },
        '200': {
            'q': {
                'en': 'The main characters in the movie "The Hunger Games".',
                'fr': 'Les personnages principaux dans le film « Les jeux de la faim » (The Hunger Games)'
            },
            'a': {
                'en': 'Katniss and Peeta',
                'fr': 'Katniss et Peeta'
            },
            'b': {
                'en': 'Katie and Gale',
                'fr': 'Katie et Gale'
            },
            'c': {
                'en': 'Prim and Marvel',
                'fr': 'Prim et Marvel'
            },
            'color': COLOR.GREEN,
            'answer': 'a'
        },
        '300': {
            'q': {
                'en': 'The restaurant\'s name in the beginning of the movie "Ratatouille".',
                'fr': 'Le nom du restaurant qui apparaît au début du film « Ratatouille ».'
            },
            'a': {
                'en': 'Linguini\'s',
                'fr': 'Chez Linguini',
            },
            'b': {
                'en': 'Remy\'s',
                'fr': 'Chez Rémy',
            },
            'c': {
                'en': 'Gusteau\'s',
                'fr': 'Chez Gusteau'
            },
            'color': COLOR.ADULT,
            'answer': 'c'
        },
        '400': {
            'q': {
                'en': 'The characters are blue and white in this movie.',
                'fr': 'Les personnages sont bleus et blancs dans ce film.'
            },
            'a': {
                'en': 'Snow White',
                'fr': 'Blanche Neige'
            },
            'b': {
                'en': 'The Smurfs',
                'fr': 'Les Schtroumpfs'
            },
            'c': {
                'en': '101 Dalmatians',
                'fr': 'Les 101 Dalmatiens'
            },
            'color': COLOR.RED,
            'answer': 'b'
        },
        '500': {
            'q': {
                'en': 'The name of the bad guy in the movie "Toy Story 3".',
                'fr': 'Le nom du méchant dans le film « Histoire du jouet 3 » (Toy Story 3)'
            },
            'a': {
                'en': 'Barbie',
                'fr': 'Barbie'
            },
            'b': {
                'en': 'Slinky',
                'fr': 'Slinky'
            },
            'c': {
                'en': 'Lotso',
                'fr': 'Lotso'
            },
            'color': COLOR.BLUE,
            'answer': 'c'
        },
    },
    'Goshos': {
        '100': {
            'q': {
                'en': 'The person who wrote the "Goshos".',
                'fr': 'La personne qui a écrit le « Gosho'
            },
            'a': {
                'en': 'President Ikeda',
                'fr': 'Le président Ikeda'
            },
            'b': {
                'en': 'Nichiren Daishonin',
                'fr': 'Nichiren Daishonin'
            },
            'c': {
                'en': 'President Makiguchi',
                'fr': 'Le président Makiguchi'
            },
            'color': COLOR.BLUE,
            'answer': 'b'
        },
        '200': {
            'q': {
                'en': 'Changing poison into ___________.',
                'fr': '« Changer le poison en ________. »'
            },
            'a': { 'en': 'Heaven', 'fr': 'Ciel' },
            'b': { 'en': 'Medicine', 'fr': 'Élixir' },
            'c': { 'en': 'Thin air', 'fr': 'Air' },
            'color': COLOR.YELLOW,
            'answer': 'b'
        },
        '300': {
            'q': {
                'en': 'In one of Nichiren\'s writings, The Strategy of the Lotus Sutra, he '
                    + 'said: "No matter how earnestly Nichiren prays for you, if you '
                    + 'lack _______, it will be like trying to set fire to wet tinder.',
                'fr': 'Dans un des écrits de Nichiren Daishonin, La stratégie du '
                    + 'dit : « Quelle que soit la force avec laquelle Nichiren prie pour '
                    + 'vous, si vous manquez de _____, ce sera comme essayer de faire du feu avec du bois mouillé. »'
            },
            'a': { 'en': 'Faith', 'fr': 'Foi' },
            'b': { 'en': 'Daimoku', 'fr': 'Daimoku' },
            'c': { 'en': 'Sleep', 'fr': 'Sommeil' },
            'color': COLOR.GREEN,
            'answer': 'a'
        },
        '400': {
            'q': {
                'en': 'The literal meaning of the word "Gosho"',
                'fr': 'La véritable signification du mot gosho'
            },
            'a': {
                'en': 'Honourable writings',
                'fr': 'Écrits honorables'
            },
            'b': {
                'en': 'Story books',
                'fr': 'Livre d’histoire'
            },
            'c': {
                'en': 'Letters',
                'fr': 'Lettres'
            },
            'color': COLOR.ADULT,
            'answer': 'a'
        },
        '500': {
            'q': {
                'en': 'In this Gosho, the carps will change into a dragon.',
                'fr': 'Dans ce gosho, les carpes se changent en'
            },
            'a': {
                'en': 'Letter to the Brothers',
                'fr': 'La lettre aux frères'
            },
            'b': {
                'en': 'Letter to the Dragons',
                'fr': 'La lettre aux dragons'
            },
            'c': {
                'en': 'The Dragon Gate',
                'fr': 'La porte du dragon'
            },
            'color': COLOR.RED,
            'answer': 'c'
        },
    },
    'History': {
        '100': {
            'q': {
                'en': 'Who was the first person to set foot on the moon?',
                'fr': 'Qui était la première personne à mettre le pied sur la lune?'
            },
            'a': {
                'en': 'Buzz Lightyear',
                'fr': 'Buzz Lightyear'
            },
            'b': {
                'en': 'Neil Armstrong',
                'fr': 'Neil Armstrong'
            },
            'c': {
                'en': 'James Bond',
                'fr': 'James Bond'
            },
            'color': COLOR.GREEN,
            'answer': 'b'
        },
        '200': {
            'q': {
                'en': 'Name the home of the only ancient wonder still standing. Hint: These structures were built to house a monarch’s mummified body.',
                'fr': 'Nommez l’endroit de la seule merveille ancienne encore debout. Indice: Ces structures ont été érigées pour accueillir le corps momifié d’un monarque.'
            },
            'a': {
                'en': 'Giza',
                'fr': 'Giza'
            },
            'b': {
                'en': 'Babylon',
                'fr': 'Babylone'
            },
            'c': {
                'en': 'Olympia',
                'fr': 'Olympe'
            },
            'color': COLOR.ADULT,
            'answer': 'a'
        },
        '300': {
            'q': {
                'en': 'Before ovens and stoves, how did people cook food?',
                'fr': 'Avant qu’il y ait des fours et des poêles, qu’est-ce que les gens utilisaient pour faire cuire leur nourriture?'
            },
            'a': {
                'en': 'Fire',
                'fr': 'Feu'
            },
            'b': {
                'en': 'Water',
                'fr': 'Eau'
            },
            'c': {
                'en': 'Trees',
                'fr': 'Arbes'
            },
            'color': COLOR.RED,
            'answer': 'a'
        },
        '400': {
            'q': {
                'en': 'Who was the first Prime Minister of Canada?',
                'fr': 'Qui a été le premier à être Premier ministre du Canada?'
            },
            'a': {
                'en': 'Sir John A. MacDonald',
                'fr': 'Sir John A. MacDonald'
            },
            'b': {
                'en': 'Pierre Trudeau',
                'fr': 'Pierre Trudeau'
            },
            'c': {
                'en': 'Stephen Harper',
                'fr': 'Stephen Harper'
            },
            'color': COLOR.BLUE,
            'answer': 'a'
        },
        '500': {
            'q': {
                'en': 'Castles were very popular during the Middle Ages. What kind of terrain were castles usually built upon?',
                'fr': 'Les châteaux étaient très populaires au Moyen-Âge. Sur quelle sorte de terrain les châteaux étaient habituellement bâtis?'
            },
            'a': {
                'en': 'In an open area',
                'fr': 'Dans un espace ouvert'
            },
            'b': {
                'en': 'On top of a hill',
                'fr': 'Au sommet d’une colline'
            },
            'c': {
                'en': 'In a forest',
                'fr': 'Dans la forêt'
            },
            'color': COLOR.YELLOW,
            'answer': 'b'
        },
    },
};
