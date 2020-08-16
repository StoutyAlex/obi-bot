const questions = {
  one: {
    id: 1,
    text: "Which actor is the only one who's appeared in every single 'Star Wars' movie to date?",
    options: {
      one: {
        text: "Carrie Fisher",
        correct: false
      },
      two: {
        text: "Mark Hamill",
        correct: false
      },
      three: {
        text: "Anthony Daniels",
        correct: true
      },
      four: {
        text: "Warwick Davis",
        correct: false
      },
    }
  },
  two: {
    id: 2,
    text: "Which stormtrooper wasn't able to complete his mission in \"Star Wars: The Force Awakens?\"",
    options: {
      one: {
        text: "FN-2705",
        correct: false
      },
      two: {
        text: "FN-2187",
        correct: true
      },
      three: {
        text: "FN-1205",
        correct: false
      },
      four: {
        text: "FN-1312",
        correct: false
      },
    }
  },
  three: {
    id: 3,
    text: "What kind of vehicle did Rey live in?",
    options: {
      one: {
        text: "AT-ST",
        correct: false
      },
      two: {
        text: "Star Destroyer",
        correct: false
      },
      three: {
        text: "Mon Calimari",
        correct: false
      },
      four: {
        text: "AT-AT",
        correct: true
      },
    }
  },
  four: {
    id: 4,
    text: "According to Master Yoda, how many Sith are always out there?",
    options: {
      one: {
        text: "4",
        correct: false
      },
      two: {
        text: "3",
        correct: false
      },
      three: {
        text: "1",
        correct: false
      },
      four: {
        text: "2",
        correct: true
      },
    }
  },
  five: {
    id: 5,
    text: "What happened to Anakin Skywalker during the battle with Count Dooku?",
    options: {
      one: {
        text: "He lost his left leg",
        correct: false
      },
      two: {
        text: "He lost his right arm",
        correct: true
      },
      three: {
        text: "He lost his right leg",
        correct: false
      },
      four: {
        text: "He lost",
        correct: false
      },
    }
  },
  six: {
    id: 6,
    text: "Who played the part of Commander Cody?",
    options: {
      one: {
        text: "Jay Laga'aia",
        correct: false
      },
      two: {
        text: "Temuera Morrison",
        correct: true
      },
      three: {
        text: "Ahmed Best",
        correct: false
      },
      four: {
        text: "Joel Edgerton",
        correct: false
      },
    }
  },
  seven: {
    id: 7,
    text: "Who killed Jabba",
    options: {
      one: {
        text: "Han Solo",
        correct: false
      },
      two: {
        text: "C-3PO",
        correct: false
      },
      three: {
        text: "Luke Skywalker",
        correct: false
      },
      four: {
        text: "Princess Leia",
        correct: true
      },
    }
  },
  eight: {
    id: 8,
    text: "Who wiped out all of the information about Kamino from the Jedi Temple archives?",
    options: {
      one: {
        text: "Darth Sidious",
        correct: false
      },
      two: {
        text: "Sifo-Dyas",
        correct: false
      },
      three: {
        text: "Count Dooku",
        correct: true
      },
      four: {
        text: "Yoda",
        correct: false
      },
    }
  },
  nine: {
    id: 9,
    text: "What did Luke Skywalker lose in his fight with Darth Vader?",
    options: {
      one: {
        text: "His left hand",
        correct: false
      },
      two: {
        text: "His left foot",
        correct: false
      },
      three: {
        text: "His right hand",
        correct: true
      },
      four: {
        text: "His left leg",
        correct: false
      },
    }
  },
  ten: {
    id: 10,
    text: "According to the Emperor, what was Luke Skywalker's weakness?",
    options: {
      one: {
        text: "His faith in the Light Side of the Force",
        correct: false
      },
      two: {
        text: "His faith in his friends",
        correct: true
      },
      three: {
        text: "His Lack of vision",
        correct: false
      },
      four: {
        text: "His resistance to the Dark Side of the Force",
        correct: false
      },
    }
  },
  eleven: {
    id: 11,
    text: "Where did the Clone Wars begin?",
    options: {
      one: {
        text: "Tatooine",
        correct: false
      },
      two: {
        text: "Geonosis",
        correct: true
      },
      three: {
        text: "Naboo",
        correct: false
      },
      four: {
        text: "Coruscant",
        correct: false
      },
    }
  },
  twelve: {
    id: 12,
    text: "What did Jar Jar Binks end up owing Qui-Gon Jinn after being rescued by the same during the invasion of Naboo?",
    options: {
      one: {
        text: "A trip to Otoh Gunga",
        correct: false
      },
      two: {
        text: "A Bongo",
        correct: false
      },
      three: {
        text: "An honor debt",
        correct: true
      },
      four: {
        text: "9,000 credits",
        correct: false
      },
    }
  },
  thirteen: {
    id: 13,
    text: "What did Owen Lars tell Luke Skywalker about his father?",
    options: {
      one: {
        text: "He had been a Jedi Knight",
        correct: false
      },
      two: {
        text: "He had been a Sith Lord",
        correct: false
      },
      three: {
        text: "He was a navigator on a spice freighter",
        correct: true
      },
      four: {
        text: "He was a figher pilot",
        correct: false
      },
    }
  },
  fourteen: {
    id: 14,
    text: "What is the color of C-3PO's arm in Star Wars: The Force Awakens?",
    options: {
      one: {
        text: "Black",
        correct: false
      },
      two: {
        text: "Red",
        correct: true
      },
      three: {
        text: "Blue",
        correct: false
      },
      four: {
        text: "Silver",
        correct: false
      },
    }
  },
  fifteen: {
    id: 15,
    text: "Who adopted Padmé Amidala's daughter?",
    options: {
      one: {
        text: "Bail Organa",
        correct: true
      },
      two: {
        text: "Captain Antilles",
        correct: false
      },
      three: {
        text: "Owen and Beru Lars",
        correct: false
      },
      four: {
        text: "Giddean Danu",
        correct: false
      },
    }
  },
};

module.exports = questions;
