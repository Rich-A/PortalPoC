var questionarray= [];
var currentquestion;

class question{
    qtext;
    qnumber;
    answerArray;

    constructor(q,a1,a2,a3){
        question= q;
        answer1= a1;
        answer2= a2;
        answer3= a3;

        answerArray= {answer1,answer2,answer3}
    }

}

class answer{
    link;
    text;
}

one= new question("{{page.question1.question}}", "{{page.question1.answer1}}", "{{page.question1.answer2}}", "{{page.question1.answer3}}")

one.answer1= "{{page.question1.answer1}}";

//page.questions.question
//page.questions.question.text
//page.questions.question.number
//page.questions.question.answer
//page.questions.question.answer.text
//page.questions.question.answer.link


function makeArray(questions){
    
   questions.forEach(function(question) {
       questionaray.push(question)
   });

}


function switcharoo(number){

    currentquestion= questionarray[number-1];



}


makeArray("{{page.questions}}");
