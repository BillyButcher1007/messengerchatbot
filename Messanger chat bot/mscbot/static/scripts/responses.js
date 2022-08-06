function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "hey") {
        return "hiii";
    } else if (input == "how you doin") {
        return "i am good";
    } else if (input == "i love you") {
        return "awwww!";
    } else if (input == "fuck you") {
        return "Dhatt madharchod!";
    } else if (input == "bye") {
        return "nikal lode, phli fursat me nikal!";
    } else {
        return "Try asking something else!";
    }
}