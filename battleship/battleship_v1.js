    // Declared variable 
    
    var location1 = 3;
    var location2 = 4;
    var location3 = 5;

    var guess;
    var hits = 0; 
    var guesses = 0;

    var isSunk = false;

    // Game Logic

    while (isSunk == false) {
        guess = prompt("Ready!, Aim!, Fire! (Enter number 0-6)");

        if (guess < 0 || guess > 6) {
            alert("Please enter a valid cell number!")
        }else {
            guesses += 1;

            if (guess == location1 || guess == location2 || guess == location3) {
                hits += 1;
                alert("Hit!");

                if (hits == 3) {
                    isSunk = true;
                    alert("You sunk my battleship!")
                }
            }else {
                alert("Miss!");
            }
        }
    }

    var stats = "You sunk my battleship at " + guessess + "guesses" + "and your accuracy is" + (3/guesses);
    
    alert(stats);