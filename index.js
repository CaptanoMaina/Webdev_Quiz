const correct_answers = ["B","C","B","C","B"]; 
const answers = [];
let current_question = 0;

function calculateScore(){
    let score = 0;
    //looping through the submittted answers and checking against the correct answers
    for (let index = 0; index < correct_answers.length; ++index){
        let answer = answers[index];

        if (answer === correct_answers[index]) ++score;
    }

    //displaying the score
    let element = document.querySelector(".score > p");
    element.textContent = score + " out of 5!";
    
    //adding the answers to the feedback url
    let link = document.querySelector(".score > a");
    let url = link.getAttribute("href");
    url += "?answers=";

    for (let answer of answers){
        url += answer + ";";
    }
    link.setAttribute("href", url);
}

//handler for when quiz buttons are clicked
function submitHandler(event) {
    event.preventDefault();  //prevent the page reloading when a button is clicked
    const current_form = document.forms[current_question];  
    const selected_answer = current_form.elements.option.value;
    

    if (selected_answer !== ""){
        answers[current_question] = selected_answer;
        current_question++;

        //hiding the current question
        let divs = document.getElementsByClassName("qn" + current_question);
        for(const div of divs){
            div.setAttribute("hidden", "");
        }

        if (current_question === 5){
            //displaying the score after final question is submitted
           let div = document.getElementsByClassName("maswali score")[0];
            div.removeAttribute("hidden");

            div.setAttribute("style", "display:flex;");

            calculateScore();

        } else {
            //revealing the next question
            divs = document.getElementsByClassName("qn" + (current_question + 1) );
            for(const div of divs){
                div.removeAttribute("hidden");
            }
        }
    }
}

document.addEventListener("submit", submitHandler);

//handler to style option after being selected
function clickHandler(event){
    let div = event.currentTarget;

    //removing color from any previously selected option
    for (let child of div.parentElement.children){
        if (child.className === "opt"){
            child.removeAttribute("style");
        }
    }
    //checking the radio button associated with the div
    let input = div.firstElementChild;
    input.setAttribute("checked", true);

    //setting the div's color
    div.setAttribute("style", "background-color: #7cb918;");
}

//retrieving the parent elements for all the radio buttons
let divs = document.querySelectorAll('div[class~="opt"]');

//setting the onclick handler for the specified element
for (let div of divs){
    div.onclick = clickHandler;
}