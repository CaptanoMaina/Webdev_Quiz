const correct_answers = ["B","C","B","C","B"];
const answers = [];
let current_question = 0;

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

        divs = document.getElementsByClassName("qn" + (current_question + 1) );
        for(const div of divs){
            div.removeAttribute("hidden");
        }
    }
}

document.addEventListener("submit", submitHandler);