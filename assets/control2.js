//page.question
//page.question.text
//page.question.number
//page.question.answer
//page.question.answer.link
$( document ).ready(function() {
    $('.question_box').hide();
    $('#1').show();


$('.answer_box').click(function(){

    var number =  (this).getAttribute("n");
    
    if(number>0){
    //this prevents triggering of events by hidden answer boxes

        $('.question_box').hide();
        $('#'+number).show();  
    };
    
 
    
});

});