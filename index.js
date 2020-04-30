const correct_answers = ["B","C","B","C","B"];
const answers = [];
let current_question = 0;

function calculateScore(){
    let score = 0;
    for (let index = 0; index < correct_answers.length; ++index){
        let answer = answers[index];

        if (answer === correct_answers[index]) ++score;
    }
    let element = document.querySelector(".score > p");
    element.textContent = score + " out of 5!";
    
    let link = document.querySelector(".score > a");
    let url = link.getAttribute("href");
    url += "?answers=";

    for (let answer of answers){
        url += answer + ";";
    }
    link.setAttribute("href", url);
}

function submitHandler(event) {
    event.preventDefault();
    const current_form = document.forms[current_question];
    const selected_answer = current_form.elements.option.value;
    

    if (selected_answer !== ""){
        answers[current_question] = selected_answer;
        current_question++;

        let divs = document.getElementsByClassName("qn" + current_question);
        for(const div of divs){
            div.setAttribute("hidden", "");
        }

        if (current_question === 5){
           let div = document.getElementsByClassName("maswali score")[0];
            div.removeAttribute("hidden");

            div.setAttribute("style", "display:flex;");

            calculateScore();

        } else {
            divs = document.getElementsByClassName("qn" + (current_question + 1) );
            for(const div of divs){
                div.removeAttribute("hidden");
            }
        }
    }
}

document.addEventListener("submit", submitHandler);

function clickHandler(event){
    let div = event.currentTarget;

    for (let child of div.parentElement.children){
        if (child.className === "opt"){
            child.removeAttribute("style");
        }
    }

    let input = div.firstElementChild;
    input.setAttribute("checked", true);

    div.setAttribute("style", "background-color: #7cb918;");
}

let divs = document.querySelectorAll('div[class~="opt"]');

for (let div of divs){
    div.onclick = clickHandler;
}