window.onload = function() {
    let boundaries = document.querySelectorAll(".boundary"); 
    let end = document.getElementById("end");
    let start = document.getElementById("start"); 
    let hasLost = false;

    
    boundaries.forEach(boundary => {
        boundary.onmouseover = function() {
            boundaries.forEach(b => {
                b.style.backgroundColor = "red";
            });
            hasLost = true; 
        };
    });

    end.onmouseover = function() {
        if (!hasLost) {
            alert("You win!"); 
        }
    };

    start.onclick = function() {
        boundaries.forEach(boundary => {
            boundary.style.backgroundColor = "#eeeeee"; 
        });
        hasLost = false;
    };
};
