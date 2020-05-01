const correct_answers = ["B","C","B","C","B"];
const url = document.URL;

//regex to retrieve the submitted answers from the url
const result = Array.from(url.matchAll(/[A-D](?=;)/g));

//looping and styling the correct and wrong answers
for (let index = 0; index < correct_answers.length; ++index){
    let answer = result[index];
    let correct_answer = correct_answers[index];

    if (answer !== correct_answer){
        //retrieving the element representing the wrong answer given
        let query = '.qn' + (index + 1)  + ' label[for="qn' + (index + 1) + answer + '"]';
        let label = document.querySelector(query);

        //setting the color to red
        label.parentElement.setAttribute("style", "background-color: #c00707;");
    }

    //retrieving the element representing the correct answer given
    let query = '.qn' + (index + 1)  + ' label[for="qn' + (index + 1) + correct_answer + '"]';
    let label = document.querySelector(query);

    //setting the color to green
    label.parentElement.setAttribute("style", "background-color: #7cb918;");
}


