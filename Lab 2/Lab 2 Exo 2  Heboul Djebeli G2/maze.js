window.onload = function() {
    let boundaries = document.querySelectorAll(".boundary");
    let end = document.getElementById("end");
    let start = document.getElementById("start");
    let maze = document.getElementById("maze");
    let hasLost = false;
    let gameStarted = false;
    let status2 = document.getElementById("status2");
    let score = document.getElementById("score");
    let scoreValue = 0;
    let timer = document.getElementById("timer");
    let startTime;
    let timerInterval;

    function startTimer() {
        startTime = new Date();
        timerInterval = setInterval(updateTimer, 10);
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    function updateTimer() {
        let currentTime = new Date();
        let elapsedTime = new Date(currentTime - startTime);
        let minutes = elapsedTime.getUTCMinutes();
        let seconds = elapsedTime.getUTCSeconds();
        let milliseconds = elapsedTime.getUTCMilliseconds();

        timer.textContent = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
    }

    function lose() {
        boundaries.forEach(b => {
            b.style.backgroundColor = "red";
        });
        status2.textContent = "You lose!";
        status2.style.color = "red";
        
        if (!hasLost) {
            score.textContent = "Score: " + (scoreValue -= 1);
        }
        hasLost = true;
        gameStarted = false;
        stopTimer();
    }

    function resetGame() {
        boundaries.forEach(boundary => {
            boundary.style.backgroundColor = "#eeeeee";
        });
        hasLost = false;
        gameStarted = false;
        status2.textContent = "Click the S to begin!";
        status2.style.color = "black";
        stopTimer();
        timer.textContent = "Time: 00:00.000";
    }

    function startGame() {
        if (!gameStarted) {
            gameStarted = true;
            status2.textContent = "Game started! Move your mouse through the maze.";
            startTimer();
        }
    }

    boundaries.forEach(boundary => {
        boundary.onmouseover = function() {
            if (gameStarted) {
                lose();
            }
        };
    });

    end.onmouseover = function() {
        if (gameStarted && !hasLost) {
            status2.textContent = "You win!";
            status2.style.color = "green";
            gameStarted = false;
            score.textContent = "Score: " + (scoreValue += 1);
            stopTimer();
        }
    };

    start.onclick = function() {
        resetGame();
        startGame();
    };

    document.addEventListener("mousemove", function(event) {
        if (gameStarted && !hasLost) {
            let mazeRect = maze.getBoundingClientRect();
            if (
                event.clientX < mazeRect.left ||
                event.clientX > mazeRect.right ||
                event.clientY < mazeRect.top ||
                event.clientY > mazeRect.bottom
            ) {
                lose();
            }
        }
    });

    // Initial setup
    resetGame();
};
