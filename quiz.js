function checkAnswer_(button) {
    let buttonId = button.id;
    let resultId = "result" + buttonId[1];
    let response;
    
    if (buttonId === "A1") {
        response = "Correct! SDGs are global goals by the UN.";
    } else if (buttonId === "B1" || buttonId === "C1") {
        response = "Incorrect!";
    } else if (buttonId === "A2" || buttonId === "C2") {
        response = "Incorrect!";
    } else if (buttonId === "B2") {
        response = "Correct! SDG 3 focuses on well-being.";
    } else if (buttonId === "A3" || buttonId === "C3") {
        response = "Incorrect!";
    } else if (buttonId === "B3") {
        response = "Correct! WHO plays a major role.";
    } else if (buttonId === "A4" || buttonId === "B4") {
        response = "Incorrect!";
    } else if (buttonId === "C4") {
        response = "Correct! Healthcare access is key.";
    } else if (buttonId === "A5" || buttonId === "C5") {
        response = "Incorrect!";
    } else if (buttonId === "B5") {
        response = "Correct! Prenatal care prevents complications.";
    } else {
        response = "Invalid answer.";
    }
    
    document.getElementById(resultId).innerText = response;
}

function checkAnswer(button, questionNum){
    let buttonId = button.id;
    let resultId = "result" + buttonId[1];
    let response;

    switch(questionNum){
        case 1:
            if (buttonId === "A1") {
                response = "Correct! SDGs are global goals by the UN.";
                break;
            }
            else{
                response = "Incorrect!"
                break;
            }
        case 2:
            if (buttonId === "B2") {
                response = "Correct! SDG 3 focuses on well-being.";
                break;
            }
            else{
                response = "Incorrect!"
                break;
            }
        case 3:
            if (buttonId === "B3") {
                response = "Correct! WHO plays a major role.";
                break;
            }
            else{
                response = "Incorrect!"
                break;
            }
        case 4:
            if (buttonId === "C4") {
                response = "Correct! Healthcare access is key.";
                break;
            }
            else{
                response = "Incorrect!"
                break;
            }
        case 5:
            if (buttonId === "B5") {
                response = "Correct! Prenatal care prevents complications.";
                break;
            }
            else{
                response = "Incorrect!"
                break;
            }
    }
    

    document.getElementById(resultId).innerText = response;
}


