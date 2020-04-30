const correct_answers = ["B","C","B","C","B"];
const url = document.URL;
const result = Array.from(url.matchAll(/[A-D](?=;)/g));


for (let index = 0; index < correct_answers.length; ++index){
    let answer = result[index];
    let correct_answer = correct_answers[index];

    if (answer !== correct_answer){
        let query = '.qn' + (index + 1)  + ' label[for="qn' + (index + 1) + answer + '"]';
        let label = document.querySelector(query);

        label.parentElement.setAttribute("style", "background-color: #c00707;");
    }

    let query = '.qn' + (index + 1)  + ' label[for="qn' + (index + 1) + correct_answer + '"]';
    let label = document.querySelector(query);

    label.parentElement.setAttribute("style", "background-color: #7cb918;");
}


